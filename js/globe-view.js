/**
 * Globe View Module (3D Spherical Projection - Google Earth Style)
 * Powered by WebGL (Globe.gl & Three.js).
 * Renders an interactive 3D Earth globe with:
 * 1. Day Mode: Full NASA Blue Marble daylight
 * 2. Night Mode: Full NASA City Lights (Black Marble)
 * 3. Composite Mode (Day & Night Terminator):
 *    Sunlit hemisphere renders daytime map, night hemisphere renders city lights,
 *    blending seamlessly in real time according to the astronomical Subsolar point!
 */

import { calculateSubsolarPoint } from './solar-terminator.js?v=20261114_world12';

let globeInstance = null;
let currentProjection = '2d'; // '2d' | '3d'
let currentTextureMode = 'composite'; // 'day' | 'night' | 'composite'
let isAutoRotating = true;
let isSimulating = false;
let simulationInterval = null;
let simulatedDate = null;
let registeredCities = [];
let onCityClickCallback = null;

let defaultMaterial = null;
let dayNightMaterial = null;
let dayTexture = null;
let nightTexture = null;

const TEXTURES = {
  day: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
  night: 'https://unpkg.com/three-globe/example/img/earth-night.jpg',
  topology: 'https://unpkg.com/three-globe/example/img/earth-topology.png',
  background: 'https://unpkg.com/three-globe/example/img/night-sky.png'
};

/**
 * Creates or retrieves the custom Three.js Day & Night blending ShaderMaterial.
 */
function getDayNightMaterial() {
  if (dayNightMaterial) return dayNightMaterial;
  const THREE = window.THREE;
  if (!THREE) return null;

  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');

  dayTexture = loader.load(TEXTURES.day);
  nightTexture = loader.load(TEXTURES.night);

  dayNightMaterial = new THREE.ShaderMaterial({
    uniforms: {
      dayTexture: { value: dayTexture },
      nightTexture: { value: nightTexture },
      sunDirection: { value: new THREE.Vector3(0, 0, 1) }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normalize(normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform vec3 sunDirection;

      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        // Dot product between local surface normal and Sun vector
        float sunIntensity = dot(vNormal, sunDirection);

        vec4 dayColor = texture2D(dayTexture, vUv);
        vec4 nightColor = texture2D(nightTexture, vUv);

        // Smooth twilight terminator between -0.12 (night) and +0.12 (day)
        float dayFactor = smoothstep(-0.12, 0.12, sunIntensity);

        // Diffuse daytime sunlight with soft ambient illumination
        vec3 litDay = dayColor.rgb * (0.32 + 0.68 * max(0.0, sunIntensity));

        // Artificial city lights glowing vibrant in the darkness
        vec3 litNight = nightColor.rgb * 1.35;

        // Composite: day where sunlight hits, glowing city lights where it is night!
        vec3 finalColor = mix(litNight, litDay, dayFactor);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  });

  return dayNightMaterial;
}

/**
 * Initializes the 3D Globe instance inside the target DOM container.
 */
export function initGlobe(container, onCityClick) {
  if (globeInstance) return globeInstance;
  if (!container || typeof window.Globe !== 'function') {
    console.warn('[GlobeView] Globe.gl library not loaded yet or container missing.');
    return null;
  }

  onCityClickCallback = onCityClick;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  globeInstance = window.Globe()(container)
    .globeImageUrl(TEXTURES.day)
    .bumpImageUrl(TEXTURES.topology)
    .backgroundImageUrl(TEXTURES.background)
    .showAtmosphere(true)
    .atmosphereColor('#38bdf8')
    .atmosphereAltitude(0.22)
    .width(width)
    .height(height);

  // Capture the default Phong material for later swapping
  defaultMaterial = globeInstance.globeMaterial();

  // Configure OrbitControls
  const controls = globeInstance.controls();
  if (controls) {
    controls.autoRotate = isAutoRotating;
    controls.autoRotateSpeed = 0.55;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 120;
    controls.maxDistance = 600;
  }

  // Initial Point of View (Europe / Mediterranean center)
  globeInstance.pointOfView({ lat: 25, lng: 15, altitude: 2.3 }, 0);

  // Apply default texture mode (Composite Day & Night)
  setGlobeTextureMode(currentTextureMode);

  // If cities were registered before globe init, render them now
  if (registeredCities.length > 0) {
    updateGlobeCities();
  }

  // Handle window resizing
  window.addEventListener('resize', () => {
    if (currentProjection === '3d' && globeInstance && container) {
      resizeGlobe(container);
    }
  });

  return globeInstance;
}

export function resizeGlobe(container) {
  if (!globeInstance || !container) return;
  const w = container.clientWidth;
  const h = container.clientHeight;
  if (w > 0 && h > 0) {
    globeInstance.width(w).height(h);
  }
}

/**
 * Updates the Sun Direction uniform in the 3D Shader based on the astronomical subsolar point.
 */
export function updateGlobeSunPosition(targetDate = null) {
  if (!globeInstance || currentTextureMode !== 'composite') return;
  const d = targetDate || new Date();
  const subsolar = calculateSubsolarPoint(d);

  const mat = getDayNightMaterial();
  if (!mat) return;

  const THREE = window.THREE;
  if (!THREE) return;

  const scene = globeInstance.scene ? globeInstance.scene() : null;
  let globeObj = null;
  if (scene) {
    globeObj = scene.getObjectByProperty('__globeObjType', 'globe');
  }

  if (globeObj && typeof globeInstance.getCoords === 'function') {
    const coords = globeInstance.getCoords(subsolar.lat, subsolar.lon);
    if (coords) {
      const worldVec = new THREE.Vector3(coords.x, coords.y, coords.z);
      globeObj.updateMatrixWorld();
      const localVec = globeObj.worldToLocal(worldVec).normalize();
      mat.uniforms.sunDirection.value.copy(localVec);
      return;
    }
  }

  // Analytical local vector fallback
  const phi = (90.0 - subsolar.lat) * Math.PI / 180.0;
  const theta = (90.0 - subsolar.lon) * Math.PI / 180.0;
  const x_local = Math.sin(phi) * Math.sin(theta);
  const y_local = Math.cos(phi);
  const z_local = -Math.sin(phi) * Math.cos(theta);
  mat.uniforms.sunDirection.value.set(x_local, y_local, z_local).normalize();
}

/**
 * Sets the 3D Globe Texture Mode: 'day' | 'night' | 'composite'
 */
export function setGlobeTextureMode(mode) {
  if (mode !== 'day' && mode !== 'night' && mode !== 'composite') return;
  currentTextureMode = mode;
  if (!globeInstance) return;

  const mat = getDayNightMaterial();

  if (mode === 'composite' && mat) {
    globeInstance.globeMaterial(mat);
    globeInstance.atmosphereColor('#38bdf8');
    updateGlobeSunPosition(simulatedDate || new Date());
  } else if (mode === 'night') {
    if (defaultMaterial) globeInstance.globeMaterial(defaultMaterial);
    globeInstance.globeImageUrl(TEXTURES.night);
    globeInstance.atmosphereColor('#6366f1');
  } else {
    // 'day'
    if (defaultMaterial) globeInstance.globeMaterial(defaultMaterial);
    globeInstance.globeImageUrl(TEXTURES.day);
    globeInstance.atmosphereColor('#38bdf8');
  }

  updateGlobeModeButtonsUI();
}

export function getGlobeTextureMode() {
  return currentTextureMode;
}

function updateGlobeModeButtonsUI() {
  const dayBtn = document.getElementById('globeModeDayBtn');
  const nightBtn = document.getElementById('globeModeNightBtn');
  const compBtn = document.getElementById('globeModeCompositeBtn');
  const simBtn = document.getElementById('globeSimBtn');

  const activeCls = 'px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow cursor-pointer';
  const inactiveCls = 'px-2 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 text-slate-400 hover:text-slate-200 cursor-pointer';

  if (dayBtn) dayBtn.className = currentTextureMode === 'day' ? activeCls : inactiveCls;
  if (nightBtn) nightBtn.className = currentTextureMode === 'night' ? activeCls : inactiveCls;
  if (compBtn) compBtn.className = currentTextureMode === 'composite' ? activeCls : inactiveCls;

  if (simBtn) {
    if (currentTextureMode === 'composite') {
      simBtn.classList.remove('hidden');
    } else {
      simBtn.classList.add('hidden');
    }
  }
}

/**
 * Toggles a 24-hour fast simulation on the 3D globe showing the sun moving over continents.
 */
export function toggleGlobeSimulation() {
  if (isSimulating) {
    stopGlobeSimulation();
  } else {
    startGlobeSimulation();
  }
}

export function startGlobeSimulation() {
  if (currentTextureMode !== 'composite') {
    setGlobeTextureMode('composite');
  }
  isSimulating = true;
  if (!simulatedDate) simulatedDate = new Date();

  const simBtn = document.getElementById('globeSimBtn');
  if (simBtn) {
    simBtn.innerHTML = '<i class="fa-solid fa-pause text-amber-400"></i> <span>Παύση</span>';
    simBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold transition flex items-center gap-1 cursor-pointer';
  }

  if (simulationInterval) clearInterval(simulationInterval);
  // Advance 30 minutes every 300ms (full 24-hour cycle in ~14 seconds)
  simulationInterval = setInterval(() => {
    simulatedDate = new Date(simulatedDate.getTime() + 30 * 60 * 1000);
    updateGlobeSunPosition(simulatedDate);
  }, 300);
}

export function stopGlobeSimulation() {
  isSimulating = false;
  if (simulationInterval) {
    clearInterval(simulationInterval);
    simulationInterval = null;
  }
  const simBtn = document.getElementById('globeSimBtn');
  if (simBtn) {
    simBtn.innerHTML = '<i class="fa-solid fa-play text-amber-400"></i> <span>24h</span>';
    simBtn.className = 'px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 font-bold transition flex items-center gap-1 cursor-pointer';
  }
}

/**
 * Registers city list for 3D marker pins.
 */
export function setGlobeCities(cities) {
  registeredCities = Array.isArray(cities) ? cities : [];
  if (globeInstance) {
    updateGlobeCities();
  }
}

function updateGlobeCities() {
  if (!globeInstance) return;

  const validCities = registeredCities.filter(c => c && c.coords && c.coords.length === 2);

  globeInstance.pointsData(validCities)
    .pointLat(d => d.coords[0])
    .pointLng(d => d.coords[1])
    .pointColor(() => '#38bdf8')
    .pointAltitude(0.015)
    .pointRadius(0.38)
    .pointResolution(16)
    .pointLabel(d => `
      <div style="background: rgba(15, 23, 42, 0.94); backdrop-filter: blur(8px); border: 1px solid rgba(56, 189, 248, 0.6); border-radius: 8px; padding: 6px 10px; color: #fff; font-family: system-ui, -apple-system, sans-serif; font-size: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.6); pointer-events: none;">
        <div style="font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 5px;">
          <span>📍</span> ${d.name}
        </div>
        <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">${d.englishName || ''}</div>
      </div>
    `)
    .onPointClick(d => {
      if (d && d.id && onCityClickCallback) {
        onCityClickCallback(d.id);
      }
    });
}

/**
 * Smoothly rotates and zooms the 3D Globe camera to coordinates.
 */
export function flyToGlobeCoords(lat, lng, altitude = 0.8, duration = 1600) {
  if (!globeInstance) return;
  setAutoRotate(false);
  globeInstance.pointOfView({ lat, lng, altitude }, duration);
}

/**
 * Toggles auto-rotation of the 3D Earth.
 */
export function toggleAutoRotate() {
  return setAutoRotate(!isAutoRotating);
}

export function setAutoRotate(enabled) {
  isAutoRotating = enabled;
  if (globeInstance) {
    const controls = globeInstance.controls();
    if (controls) controls.autoRotate = isAutoRotating;
  }
  const btn = document.getElementById('globeRotateBtn');
  if (btn) {
    if (isAutoRotating) {
      btn.className = 'px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold transition flex items-center gap-1 cursor-pointer';
      btn.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-spin text-sky-400"></i> <span class="hidden sm:inline">Περιστροφή:</span> On';
    } else {
      btn.className = 'px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-400 font-bold transition flex items-center gap-1 cursor-pointer';
      btn.innerHTML = '<i class="fa-solid fa-pause text-slate-400"></i> <span class="hidden sm:inline">Περιστροφή:</span> Off';
    }
  }
  return isAutoRotating;
}

/**
 * Resets 3D Globe camera to global overview.
 */
export function resetGlobeView() {
  if (!globeInstance) return;
  globeInstance.pointOfView({ lat: 20, lng: 0, altitude: 2.3 }, 1500);
}

/**
 * Projection Switcher: '2d' (Leaflet) <-> '3d' (Globe.gl)
 */
export function setProjectionMode(mode) {
  if (mode !== '2d' && mode !== '3d') return currentProjection;
  currentProjection = mode;

  const mapEl = document.getElementById('map');
  const globeContainer = document.getElementById('globeCanvasContainer');
  const globeControls = document.getElementById('globeControlsWidget');
  const dayNightWidget = document.getElementById('dayNightFloatingWidget');
  const view2dBtn = document.getElementById('view2dBtn');
  const view3dBtn = document.getElementById('view3dBtn');

  if (mode === '3d') {
    // Hide 2D Leaflet Map & 2D DayNight widget
    if (mapEl) mapEl.classList.add('hidden');
    if (dayNightWidget) dayNightWidget.classList.add('hidden');

    // Show 3D Globe
    if (globeContainer) {
      globeContainer.classList.remove('hidden');
      if (!globeInstance) {
        initGlobe(globeContainer, (cityId) => {
          if (window.flyToCity) window.flyToCity(cityId);
        });
      }
      resizeGlobe(globeContainer);
      updateGlobeSunPosition();
    }
    if (globeControls) globeControls.classList.remove('hidden');

    // Update buttons UI
    if (view2dBtn) {
      view2dBtn.className = 'px-2.5 py-1 rounded-md text-xs font-bold transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200 cursor-pointer';
    }
    if (view3dBtn) {
      view3dBtn.className = 'px-2.5 py-1 rounded-md text-xs font-bold transition flex items-center gap-1.5 bg-sky-600 text-white shadow cursor-pointer';
    }
  } else {
    // Stop 3D simulation if running
    stopGlobeSimulation();

    // Show 2D Leaflet Map
    if (mapEl) mapEl.classList.remove('hidden');
    if (dayNightWidget) dayNightWidget.classList.remove('hidden');

    // Hide 3D Globe
    if (globeContainer) globeContainer.classList.add('hidden');
    if (globeControls) globeControls.classList.add('hidden');

    // Update buttons UI
    if (view2dBtn) {
      view2dBtn.className = 'px-2.5 py-1 rounded-md text-xs font-bold transition flex items-center gap-1.5 bg-sky-600 text-white shadow cursor-pointer';
    }
    if (view3dBtn) {
      view3dBtn.className = 'px-2.5 py-1 rounded-md text-xs font-bold transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200 cursor-pointer';
    }

    // Refresh Leaflet map layout
    if (window.invalidateMapSize) {
      window.invalidateMapSize();
    }
  }

  return currentProjection;
}

export function getProjectionMode() {
  return currentProjection;
}

// Global browser window bindings
if (typeof window !== 'undefined') {
  window.setProjectionMode = setProjectionMode;
  window.setGlobeTextureMode = setGlobeTextureMode;
  window.toggleAutoRotate = toggleAutoRotate;
  window.toggleGlobeSimulation = toggleGlobeSimulation;
  window.resetGlobeView = resetGlobeView;
  window.updateGlobeSunPosition = updateGlobeSunPosition;
}
