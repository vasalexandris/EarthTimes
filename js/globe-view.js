/**
 * Globe View Module (3D Spherical Projection - Google Earth Style)
 * Powered by WebGL (Globe.gl & Three.js).
 * Renders an interactive 3D Earth globe with Day/Night textures,
 * topography bump mapping, glowing atmosphere, auto-rotation,
 * and 3D city pins with smooth camera fly-to animations.
 */

let globeInstance = null;
let currentProjection = '2d'; // '2d' | '3d'
let isAutoRotating = true;
let isNightTexture = false;
let registeredCities = [];
let onCityClickCallback = null;

const TEXTURES = {
  day: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
  night: 'https://unpkg.com/three-globe/example/img/earth-night.jpg',
  topology: 'https://unpkg.com/three-globe/example/img/earth-topology.png',
  background: 'https://unpkg.com/three-globe/example/img/night-sky.png'
};

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
    .globeImageUrl(isNightTexture ? TEXTURES.night : TEXTURES.day)
    .bumpImageUrl(TEXTURES.topology)
    .backgroundImageUrl(TEXTURES.background)
    .showAtmosphere(true)
    .atmosphereColor('#38bdf8')
    .atmosphereAltitude(0.22)
    .width(width)
    .height(height);

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

  // Initial Point of View (Europe / World)
  globeInstance.pointOfView({ lat: 25, lng: 15, altitude: 2.3 }, 0);

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
  // Pause auto-rotation when user flies to a specific point
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
 * Toggles between NASA Blue Marble (Day) and NASA Black Marble (Night) 3D textures.
 */
export function toggleGlobeDayNight() {
  isNightTexture = !isNightTexture;
  if (globeInstance) {
    globeInstance.globeImageUrl(isNightTexture ? TEXTURES.night : TEXTURES.day);
    globeInstance.atmosphereColor(isNightTexture ? '#6366f1' : '#38bdf8');
  }
  const btn = document.getElementById('globeDayNightBtn');
  if (btn) {
    if (isNightTexture) {
      btn.innerHTML = '<i class="fa-solid fa-city text-yellow-300"></i> <span>Φώτα Νύχτας</span>';
      btn.className = 'px-2.5 py-1 rounded-lg bg-indigo-500/20 text-yellow-300 border border-indigo-500/40 font-bold transition flex items-center gap-1 cursor-pointer';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-sun text-amber-400"></i> <span>Ημέρα</span>';
      btn.className = 'px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 font-bold transition flex items-center gap-1 cursor-pointer';
    }
  }
  return isNightTexture;
}

/**
 * Resets 3D Globe camera to global overview.
 */
export function resetGlobeView() {
  if (!globeInstance) return;
  globeInstance.pointOfView({ lat: 20, lng: 0, altitude: 2.3 }, 1500);
}

/**
 * Gets current Point of View from 3D Globe { lat, lng, altitude }.
 */
export function getGlobePointOfView() {
  if (!globeInstance) return null;
  return globeInstance.pointOfView();
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
    // Hide 2D Leaflet Map
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

// Attach globally for inline HTML event handlers
if (typeof window !== 'undefined') {
  window.setProjectionMode = setProjectionMode;
  window.toggleAutoRotate = toggleAutoRotate;
  window.toggleGlobeDayNight = toggleGlobeDayNight;
  window.resetGlobeView = resetGlobeView;
}
