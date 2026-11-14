/**
 * Solar Terminator Module (Ημέρα & Νύχτα σε Πραγματικό Χρόνο)
 * Calculates the real-time subsolar point, night hemisphere shadow polygon,
 * and celestial markers (Sun Zenith & Midnight Moon) across planet Earth.
 *
 * Supports:
 * 1. 2D Flat Map Composite Day & Night:
 *    Clips the NASA City Lights tile layer dynamically to the night hemisphere
 *    over the active base layer (Topo/Relief, Satellite, etc.).
 * 2. Real-time Sun tracking & 24h fast simulation.
 * 3. Synchronization with 3D Globe shader.
 */

let mapInstance = null;
let nightTileLayer = null;
let nightPolygon = null;
let sunMarker = null;
let moonMarker = null;
let isEnabled = true;
let isSimulating = false;
let simulationInterval = null;
let simulatedDate = null;
let liveInterval = null;
let currentTermData = null;

// Approximate geographical region of coordinates
function getGeographicalRegion(lat, lon) {
  if (lat > 66) return 'Αρκτικός Κύκλος';
  if (lat < -60) return 'Ανταρκτική';
  
  if (lon >= -170 && lon < -60) {
    if (lat > 15) return 'Βόρεια Αμερική';
    if (lat >= -60) return 'Νότια Αμερική / Ειρηνικός';
  }
  if (lon >= -60 && lon < -20) {
    if (lat > 0) return 'Βόρειος Ατλαντικός';
    return 'Νότιος Ατλαντικός';
  }
  if (lon >= -20 && lon < 50) {
    if (lat > 35) return 'Ευρώπη';
    if (lat >= -35) return 'Αφρική';
    return 'Νότιος Ωκεανός';
  }
  if (lon >= 50 && lon < 100) {
    if (lat > 10) return 'Ασία / Ινδικός Ωκεανός';
    return 'Ινδικός Ωκεανός';
  }
  if (lon >= 100 && lon <= 180) {
    if (lat > 0) return 'Ανατολική Ασία / Ειρηνικός';
    if (lat >= -50) return 'Αυστραλία / Ωκεανία';
    return 'Νότιος Ειρηνικός';
  }
  return 'Ειρηνικός Ωκεανός';
}

/**
 * Astronomical calculation of the subsolar point (lat, lon)
 * for a given Date object (in UTC).
 */
export function calculateSubsolarPoint(dt = new Date()) {
  const startOfYear = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  const dayOfYear = Math.floor((dt.getTime() - startOfYear.getTime()) / 86400000) + 1;
  const utcHours = dt.getUTCHours() + dt.getUTCMinutes() / 60.0 + dt.getUTCSeconds() / 3600.0;

  // Solar declination (approx in degrees)
  const declination = -23.44 * Math.cos((2 * Math.PI / 365.25) * (dayOfYear + 10));

  // Equation of Time (approx in minutes)
  const B = (2 * Math.PI / 365.0) * (dayOfYear - 81);
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);

  // Subsolar longitude in degrees [-180, 180]
  const solarTimeOffset = (utcHours + eot / 60.0) - 12.0;
  let subsolarLon = -solarTimeOffset * 15.0;
  subsolarLon = ((subsolarLon + 180.0) % 360.0 + 360.0) % 360.0 - 180.0;

  return {
    lat: declination,
    lon: subsolarLon,
    date: dt
  };
}

/**
 * Generates the closed Polygon coordinates for the dark (night) hemisphere.
 */
export function calculateTerminatorPolygon(dt = new Date(), steps = 180) {
  const { lat: dec, lon: lonSun } = calculateSubsolarPoint(dt);
  const decRad = (dec * Math.PI) / 180.0;
  const safeDecRad = Math.abs(decRad) < 0.001 ? (decRad >= 0 ? 0.001 : -0.001) : decRad;
  const tanDec = Math.tan(safeDecRad);

  const coords = [];
  for (let i = 0; i <= steps; i++) {
    const lon = -180.0 + (360.0 / steps) * i;
    const lonDiff = ((lon - lonSun) * Math.PI) / 180.0;
    const tanLat = -Math.cos(lonDiff) / tanDec;
    let lat = (Math.atan(tanLat) * 180.0) / Math.PI;
    // Keep within Web Mercator bounds
    lat = Math.max(-85.0, Math.min(85.0, lat));
    coords.push([Number(lat.toFixed(4)), Number(lon.toFixed(4))]);
  }

  // Close polygon around the pole experiencing polar night (+/-85.0 for Web Mercator)
  const darkPoleLat = dec >= 0 ? -85.0 : 85.0;
  coords.push([darkPoleLat, 180.0]);
  coords.push([darkPoleLat, -180.0]);

  return {
    coords,
    subsolarLat: dec,
    subsolarLon: lonSun,
    antisolarLat: -dec,
    antisolarLon: ((lonSun + 180.0 + 180.0) % 360.0 + 360.0) % 360.0 - 180.0,
    darkPoleLat
  };
}

/**
 * Updates the CSS clip-path on the night lights tile pane so NASA City Lights
 * are ONLY visible on the night side of the flat map.
 */
function updateNightClipPath(termData) {
  if (!mapInstance || !nightTileLayer || !isEnabled) return;
  const pane = mapInstance.getPane('nightLightsPane');
  if (!pane || !termData || !termData.coords) return;

  try {
    const coords = termData.coords;
    const pts = coords.map(c => {
      const pt = mapInstance.latLngToLayerPoint(c);
      return `${Math.round(pt.x)}px ${Math.round(pt.y)}px`;
    });

    const clipVal = `polygon(${pts.join(', ')})`;
    pane.style.clipPath = clipVal;
    pane.style.webkitClipPath = clipVal;
  } catch (err) {
    console.warn('[Terminator] updateNightClipPath warning:', err);
  }
}

/**
 * Initializes the Day / Night Terminator layer on the Leaflet map.
 */
export function initDayNight(map) {
  mapInstance = map;
  if (!mapInstance || !window.L) return;

  // 1. Create a dedicated pane for clipped NASA City Lights
  let nightPane = mapInstance.getPane('nightLightsPane');
  if (!nightPane) {
    nightPane = mapInstance.createPane('nightLightsPane');
    nightPane.style.zIndex = 220; // Above base layer (200), below overlays (400)
    nightPane.style.pointerEvents = 'none'; // Clicks pass through to base map & pins
  }

  // 2. Custom Sun DivIcon
  const sunIcon = L.divIcon({
    className: 'solar-sun-icon',
    html: `
      <div class="relative flex items-center justify-center cursor-pointer group" style="width: 32px; height: 32px;">
        <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-amber-400 opacity-60"></span>
        <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border-2 border-white shadow-xl flex items-center justify-center text-slate-950 text-xs">
          <i class="fa-solid fa-sun animate-spin" style="animation-duration: 25s;"></i>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  // 3. Custom Moon DivIcon
  const moonIcon = L.divIcon({
    className: 'solar-moon-icon',
    html: `
      <div class="relative flex items-center justify-center cursor-pointer group" style="width: 28px; height: 28px;">
        <span class="animate-pulse absolute inline-flex h-7 w-7 rounded-full bg-indigo-500 opacity-40"></span>
        <div class="relative w-7 h-7 rounded-full bg-gradient-to-tr from-slate-950 to-indigo-950 border border-indigo-400 shadow-xl flex items-center justify-center text-amber-200 text-xs">
          <i class="fa-solid fa-moon"></i>
        </div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  currentTermData = calculateTerminatorPolygon();

  // 4. NASA City Lights Tile Layer (in custom nightLightsPane)
  nightTileLayer = L.tileLayer(
    'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_CityLights_2012/default/2012-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',
    {
      pane: 'nightLightsPane',
      maxZoom: 8,
      opacity: 0.96,
      attribution: 'NASA Earth Observatory / NOAA'
    }
  );

  // 5. Golden Terminator Border Polygon
  nightPolygon = L.polygon(currentTermData.coords, {
    fillColor: '#020617',
    fillOpacity: 0.12, // Subtle dark tint over night tiles, allowing city lights to shine brightly
    color: '#f59e0b',
    weight: 2.0,
    opacity: 0.85,
    interactive: false
  });

  sunMarker = L.marker([currentTermData.subsolarLat, currentTermData.subsolarLon], {
    icon: sunIcon,
    zIndexOffset: 1000
  });

  moonMarker = L.marker([currentTermData.antisolarLat, currentTermData.antisolarLon], {
    icon: moonIcon,
    zIndexOffset: 990
  });

  if (isEnabled) {
    nightTileLayer.addTo(mapInstance);
    nightPolygon.addTo(mapInstance);
    sunMarker.addTo(mapInstance);
    moonMarker.addTo(mapInstance);
  }

  // Update position & clip path
  updateNightClipPath(currentTermData);
  updateTooltipsAndUI(currentTermData, new Date());

  // Keep clip-path aligned on map move and zoom
  mapInstance.on('move', () => {
    if (isEnabled && currentTermData) {
      updateNightClipPath(currentTermData);
    }
  });

  mapInstance.on('zoom', () => {
    if (isEnabled && currentTermData) {
      updateNightClipPath(currentTermData);
    }
  });

  // Start live 30s update interval
  if (liveInterval) clearInterval(liveInterval);
  liveInterval = setInterval(() => {
    if (!isSimulating && isEnabled) {
      refreshDayNight();
    }
  }, 30000);
}

function updateTooltipsAndUI(termData, date) {
  const utcHours = String(date.getUTCHours()).padStart(2, '0');
  const utcMins = String(date.getUTCMinutes()).padStart(2, '0');
  const region = getGeographicalRegion(termData.subsolarLat, termData.subsolarLon);

  const sunLatStr = Math.abs(termData.subsolarLat).toFixed(1) + '°' + (termData.subsolarLat >= 0 ? 'Β' : 'Ν');
  const sunLonStr = Math.abs(termData.subsolarLon).toFixed(1) + '°' + (termData.subsolarLon >= 0 ? 'Α' : 'Δ');

  if (sunMarker) {
    sunMarker.bindTooltip(`
      <div class="text-xs p-1 font-sans text-slate-100">
        <div class="font-bold text-amber-400 flex items-center gap-1.5 mb-0.5">
          <i class="fa-solid fa-sun"></i> Ήλιος στο Ζενίθ (Μεσημέρι)
        </div>
        <div class="text-[11px] text-slate-300">Περιοχή: <span class="text-white font-semibold">${region}</span></div>
        <div class="text-[10px] text-slate-400 font-mono mt-0.5">${sunLatStr}, ${sunLonStr} • ${utcHours}:${utcMins} UTC</div>
      </div>
    `, { direction: 'top', offset: [0, -18], className: 'custom-tooltip' });
  }

  if (moonMarker) {
    moonMarker.bindTooltip(`
      <div class="text-xs p-1 font-sans text-slate-100">
        <div class="font-bold text-indigo-300 flex items-center gap-1.5 mb-0.5">
          <i class="fa-solid fa-moon"></i> Μεσάνυχτα (00:00)
        </div>
        <div class="text-[11px] text-slate-300">Το βαθύτερο σκοτάδι στον πλανήτη.</div>
        <div class="text-[10px] text-slate-400 font-mono mt-0.5">${utcHours}:${utcMins} UTC</div>
      </div>
    `, { direction: 'bottom', offset: [0, 16], className: 'custom-tooltip' });
  }

  // Update floating UI widget if present
  const infoEl = document.getElementById('dayNightInfoText');
  if (infoEl) {
    infoEl.innerHTML = `<span class="text-amber-400 font-bold">☀️ Ζενίθ:</span> ${region} <span class="text-slate-500">|</span> <span class="font-mono text-slate-300">${utcHours}:${utcMins} UTC</span>`;
  }
}

/**
 * Refreshes the Day/Night polygon and markers to the specified or current date.
 */
export function refreshDayNight(targetDate = null) {
  if (!mapInstance || !nightPolygon) return;
  const d = targetDate || new Date();
  currentTermData = calculateTerminatorPolygon(d);

  nightPolygon.setLatLngs(currentTermData.coords);
  if (sunMarker) sunMarker.setLatLng([currentTermData.subsolarLat, currentTermData.subsolarLon]);
  if (moonMarker) moonMarker.setLatLng([currentTermData.antisolarLat, currentTermData.antisolarLon]);

  updateNightClipPath(currentTermData);
  updateTooltipsAndUI(currentTermData, d);

  // Sync 3D Globe Sun Direction in real-time
  if (typeof window !== 'undefined' && window.updateGlobeSunPosition) {
    try { window.updateGlobeSunPosition(d); } catch (e) {}
  }
}

/**
 * Toggles Day/Night overlay visibility on/off.
 */
export function toggleDayNight() {
  // If user is currently viewing the 3D Globe, toggle the 3D globe's texture mode instead!
  if (typeof window !== 'undefined' && window.getProjectionMode && window.getProjectionMode() === '3d') {
    if (window.setGlobeTextureMode && window.getGlobeTextureMode) {
      const nextMode = window.getGlobeTextureMode() === 'composite' ? 'day' : 'composite';
      window.setGlobeTextureMode(nextMode);
    }
    return isEnabled;
  }

  isEnabled = !isEnabled;
  if (!mapInstance || !nightPolygon) return isEnabled;

  const pane = mapInstance.getPane('nightLightsPane');

  if (isEnabled) {
    if (nightTileLayer) nightTileLayer.addTo(mapInstance);
    nightPolygon.addTo(mapInstance);
    if (sunMarker) sunMarker.addTo(mapInstance);
    if (moonMarker) moonMarker.addTo(mapInstance);
    refreshDayNight();
  } else {
    if (nightTileLayer) mapInstance.removeLayer(nightTileLayer);
    mapInstance.removeLayer(nightPolygon);
    if (sunMarker) mapInstance.removeLayer(sunMarker);
    if (moonMarker) mapInstance.removeLayer(moonMarker);
    if (pane) {
      pane.style.clipPath = '';
      pane.style.webkitClipPath = '';
    }
    stopSimulation();
  }

  updateWidgetButtonUI();
  return isEnabled;
}

/**
 * Plays/Pauses a 24-hour time-lapse simulation showing day and night rotating across Earth.
 */
export function toggleSimulation() {
  if (isSimulating) {
    stopSimulation();
  } else {
    startSimulation();
  }
}

export function startSimulation() {
  if (!isEnabled) toggleDayNight();
  isSimulating = true;
  if (!simulatedDate) {
    simulatedDate = new Date();
  }

  const playBtn = document.getElementById('dayNightSimBtn');
  if (playBtn) {
    playBtn.innerHTML = '<i class="fa-solid fa-pause text-amber-400"></i> Παύση';
    playBtn.classList.add('bg-amber-500/20', 'border-amber-500/50');
  }

  if (simulationInterval) clearInterval(simulationInterval);
  // Advance 30 minutes every 350ms (full 24h cycle in ~16 seconds)
  simulationInterval = setInterval(() => {
    simulatedDate = new Date(simulatedDate.getTime() + 30 * 60 * 1000);
    refreshDayNight(simulatedDate);
  }, 350);
}

export function stopSimulation() {
  isSimulating = false;
  if (simulationInterval) {
    clearInterval(simulationInterval);
    simulationInterval = null;
  }
  const playBtn = document.getElementById('dayNightSimBtn');
  if (playBtn) {
    playBtn.innerHTML = '<i class="fa-solid fa-play text-amber-400"></i> Προσομοίωση 24h';
    playBtn.classList.remove('bg-amber-500/20', 'border-amber-500/50');
  }
}

/**
 * Resets simulation back to real-time wall clock.
 */
export function resetToLive() {
  stopSimulation();
  simulatedDate = null;
  refreshDayNight(new Date());
}

function updateWidgetButtonUI() {
  const btn = document.getElementById('toggleDayNightBtn');
  const widget = document.getElementById('dayNightFloatingWidget');
  const is3d = typeof window !== 'undefined' && window.getProjectionMode && window.getProjectionMode() === '3d';

  if (btn) {
    if (isEnabled) {
      btn.className = 'px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold text-xs flex items-center gap-1.5 shadow transition cursor-pointer';
    } else {
      btn.className = 'px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-slate-200 border border-slate-700 font-semibold text-xs flex items-center gap-1.5 shadow transition cursor-pointer';
    }
  }

  // Never unhide the 2D floating widget if currently in 3D sphere mode!
  if (widget) {
    if (isEnabled && !is3d) {
      widget.classList.remove('hidden');
    } else {
      widget.classList.add('hidden');
    }
  }
}

if (typeof window !== 'undefined') {
  window.toggleDayNight = toggleDayNight;
  window.toggleSimulation = toggleSimulation;
  window.resetToLive = resetToLive;
  window.updateWidgetButtonUI = updateWidgetButtonUI;
}
