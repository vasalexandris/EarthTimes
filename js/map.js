/**
 * Map Module
 * Handles Leaflet map initialization, multiple base map layers (Satellite, Streets, Topo, Dark),
 * polygon highlights, markers, time capsules, and camera animations.
 */

import { findPoiLiveCam } from './video-service.js?v=20261113_fix1';

let map = null;
let activeBaseLayer = null;
let currentBaseLayerKey = 'dark'; // default to cinematic dark
let statePolygonLayer = null;
let cityMarkersGroup = null;
let poiMarkersGroup = null;
let timeCapsuleMarkersGroup = null;
let addSpotMode = false;
let onMapRightClickCallback = null;

// Tile Layer Providers Configuration
export const BASE_LAYERS = {
  dark: {
    name: 'Dark Voyager',
    icon: 'fa-moon',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 16,
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a>, HERE, Garmin, &copy; OpenStreetMap'
    }
  },
  satellite: {
    name: 'Δορυφορικός',
    icon: 'fa-satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 19,
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a>, Maxar, Earthstar Geographics'
    }
  },
  osm: {
    name: 'Πολιτικός / Οδικός',
    icon: 'fa-map',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  topo: {
    name: 'Γεωγραφικός / Τοπογραφικός',
    icon: 'fa-mountain-sun',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    options: {
      maxZoom: 17,
      attribution: 'Map &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    }
  },
  googleRoad: {
    name: 'Google Maps (Οδικός)',
    icon: 'fa-diamond-turn-right',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    options: {
      maxZoom: 20,
      attribution: '&copy; Google Maps'
    }
  },
  googleHybrid: {
    name: 'Google Maps (Δορυφόρος)',
    icon: 'fa-earth-americas',
    url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    options: {
      maxZoom: 20,
      attribution: '&copy; Google Maps'
    }
  }
};

// Generalized polygon vertices for Massachusetts bounding highlight
const MASSACHUSETTS_POLYGON = [
  [42.8867, -70.8197],
  [42.8690, -70.9200],
  [42.7430, -73.2750],
  [42.0490, -73.5080],
  [42.0290, -71.8000],
  [42.0180, -71.3800],
  [41.4800, -71.1200],
  [41.5300, -70.6300],
  [41.2500, -70.1000],
  [41.6500, -69.9300],
  [42.0800, -70.1800],
  [42.3000, -70.8000],
  [42.6000, -70.6000]
];

export function initMap(containerId, initialCoords = [20.0, 0.0], initialZoom = 2.3, onStateClick) {
  map = L.map(containerId, {
    zoomControl: false,
    attributionControl: false,
    minZoom: 2,
    maxBounds: [[-85, -180], [85, 180]],
    worldCopyJump: true
  }).setView(initialCoords, initialZoom);

  // Zoom control in bottom-right
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Set default base tile layer
  switchBaseLayer(currentBaseLayerKey);

  // Compact attribution
  L.control.attribution({ position: 'bottomright', prefix: false }).addTo(map);

  // Layer groups for markers
  cityMarkersGroup = L.layerGroup().addTo(map);
  poiMarkersGroup = L.layerGroup().addTo(map);
  timeCapsuleMarkersGroup = L.layerGroup().addTo(map);

  // Draw State boundary highlight
  drawStateHighlight(onStateClick);

  // Right-Click on Map creates a new Time Capsule Spot!
  map.on('contextmenu', (e) => {
    if (onMapRightClickCallback) {
      onMapRightClickCallback(e.latlng.lat, e.latlng.lng);
    }
  });

  // Normal click creates spot if addSpotMode is active
  map.on('click', (e) => {
    if (addSpotMode && onMapRightClickCallback) {
      onMapRightClickCallback(e.latlng.lat, e.latlng.lng);
      setAddSpotMode(false);
    }
  });

  return map;
}

export function setAddSpotMode(enabled) {
  addSpotMode = enabled;
  if (map) {
    const container = map.getContainer();
    if (container) {
      container.style.cursor = addSpotMode ? 'crosshair' : '';
    }
  }
  const btn = document.getElementById('toggleAddSpotBtn');
  if (btn) {
    if (addSpotMode) {
      btn.className = 'h-8 px-2.5 bg-amber-500 text-slate-950 font-bold border border-amber-300 rounded-lg flex items-center gap-1.5 text-xs shadow-lg transition animate-pulse';
    } else {
      btn.className = 'h-8 px-2.5 bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-slate-700 rounded-lg flex items-center gap-1.5 text-xs font-medium shadow-lg transition';
    }
  }
  return addSpotMode;
}

export function isAddSpotMode() {
  return addSpotMode;
}

export function setOnMapRightClickHandler(callback) {
  onMapRightClickCallback = callback;
}

export function switchBaseLayer(layerKey) {
  if (!map || !BASE_LAYERS[layerKey]) return layerKey;

  if (activeBaseLayer) {
    map.removeLayer(activeBaseLayer);
  }

  const config = BASE_LAYERS[layerKey];
  activeBaseLayer = L.tileLayer(config.url, config.options).addTo(map);
  currentBaseLayerKey = layerKey;

  return currentBaseLayerKey;
}

export function getCurrentBaseLayerKey() {
  return currentBaseLayerKey;
}

export function drawStateHighlight(onStateClick) {
  if (statePolygonLayer && map) {
    map.removeLayer(statePolygonLayer);
  }

  statePolygonLayer = L.polygon(MASSACHUSETTS_POLYGON, {
    color: '#0284c7',
    weight: 2.5,
    opacity: 0.8,
    fillColor: '#38bdf8',
    fillOpacity: 0.08,
    dashArray: '4, 6'
  }).addTo(map);

  if (onStateClick) {
    statePolygonLayer.on('click', onStateClick);
  }
}

export function toggleStateHighlight(visible) {
  if (!statePolygonLayer || !map) return;
  if (visible) {
    if (!map.hasLayer(statePolygonLayer)) statePolygonLayer.addTo(map);
  } else {
    if (map.hasLayer(statePolygonLayer)) map.removeLayer(statePolygonLayer);
  }
}

export function renderCityPins(cities, currentScope, currentCityId, onCityClick) {
  if (!cityMarkersGroup) return;
  cityMarkersGroup.clearLayers();

  if (!cities || currentScope === 'world') return;

  cities.forEach(city => {
    const isSelected = (currentScope === 'city' && currentCityId === city.id);

    const customIcon = L.divIcon({
      className: 'city-pin-wrapper',
      html: `
        <div class="custom-poi-marker cursor-pointer group">
          <div class="px-2.5 py-1 rounded-full text-xs font-bold shadow-lg border flex items-center gap-1.5 transition ${
            isSelected 
              ? 'bg-amber-500 text-slate-950 border-amber-300 ring-4 ring-amber-400/30' 
              : 'bg-slate-900/90 text-white border-slate-600 hover:border-sky-400 hover:text-sky-300'
          }">
            <i class="fa-solid fa-city text-[10px]"></i>
            <span>${city.name}</span>
          </div>
        </div>
      `,
      iconSize: [110, 32],
      iconAnchor: [55, 16]
    });

    const marker = L.marker(city.coords, { icon: customIcon });
    marker.on('click', () => {
      if (onCityClick) onCityClick(city.id);
    });
    cityMarkersGroup.addLayer(marker);
  });
}

export function renderCityPois(city, currentPoiFilter = 'all', onPoiMoreClick) {
  if (!poiMarkersGroup) return;
  poiMarkersGroup.clearLayers();

  if (!city || !city.pois) return;

  city.pois.forEach(poi => {
    if (currentPoiFilter !== 'all' && poi.category !== currentPoiFilter) {
      return;
    }

    let iconClass = 'fa-landmark';
    let bgClass = 'bg-rose-600 border-rose-300';
    if (poi.category === 'culture') {
      iconClass = 'fa-masks-theater';
      bgClass = 'bg-indigo-600 border-indigo-300';
    } else if (poi.category === 'nature') {
      iconClass = 'fa-tree';
      bgClass = 'bg-emerald-600 border-emerald-300';
    }

    const poiIcon = L.divIcon({
      className: 'poi-pin',
      html: `
        <div class="custom-poi-marker marker-pulse cursor-pointer">
          <div class="h-8 w-8 rounded-full ${bgClass} text-white shadow-xl border-2 flex items-center justify-center text-xs">
            <i class="fa-solid ${iconClass}"></i>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const poiMarker = L.marker(poi.coords, { icon: poiIcon });

    const poiLiveCam = poi.liveCam ? { youtubeId: poi.liveCam, title: poi.name } : findPoiLiveCam(poi.name);

    const popupEl = document.createElement('div');
    popupEl.className = 'p-3 text-slate-900 font-sans max-w-xs';
    popupEl.innerHTML = `
      <div class="text-[10px] font-bold uppercase tracking-wider text-sky-700 mb-0.5">
        ${poi.category === 'history' ? 'Ιστορικό Σημείο' : poi.category === 'culture' ? 'Πολιτισμός & Τέχνες' : 'Φυσικό Αξιοθέατο'}
      </div>
      <div class="font-bold text-sm text-slate-900 mb-1 leading-tight">${poi.name}</div>
      <div class="text-xs text-slate-600 mb-2 leading-relaxed">${poi.desc}</div>
      <div class="flex items-center justify-between gap-1.5 text-[11px] pt-2 border-t border-slate-200">
        <div class="flex items-center gap-1.5">
          <button onclick="window.openMapStreetView(${poi.coords[0]}, ${poi.coords[1]}, '${poi.name.replace(/'/g, "\\'")}')" class="px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 border border-amber-500/40 text-[11px] font-bold flex items-center gap-1 transition shadow-sm cursor-pointer" title="Περιήγηση Street View στον Χάρτη">
            <i class="fa-solid fa-street-view text-amber-700"></i> Street View
          </button>
          ${poiLiveCam ? `
            <button onclick="window.openLiveCamModal('${poiLiveCam.youtubeId}', '${poi.name.replace(/'/g, "\\'")}')" class="px-2 py-1 rounded bg-red-600 hover:bg-red-500 text-white text-[11px] font-bold flex items-center gap-1 transition shadow-sm cursor-pointer" title="Ζωντανή Μετάδοση (Live Cam)">
              <span class="relative flex h-1.5 w-1.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span></span>
              <span>Live Cam</span>
            </button>
          ` : ''}
        </div>
        <span class="poi-more-link text-sky-700 font-semibold cursor-pointer hover:underline">Περισσότερα &rarr;</span>
      </div>
    `;

    const moreLink = popupEl.querySelector('.poi-more-link');
    if (moreLink && onPoiMoreClick) {
      moreLink.addEventListener('click', () => onPoiMoreClick('cult'));
    }

    poiMarker.bindPopup(popupEl, { offset: [0, -10] });
    poiMarkersGroup.addLayer(poiMarker);
  });
}

/**
 * Render Time Capsule Markers (Temporal Spots)
 */
export function renderTimeCapsulePins(spots, activeYear, onSpotClick) {
  if (!timeCapsuleMarkersGroup) return;
  timeCapsuleMarkersGroup.clearLayers();

  if (!spots || !spots.length) return;

  spots.forEach(spot => {
    // Find active chronicle for this year
    let activeChronicle = null;
    if (activeYear === 'all') {
      activeChronicle = spot.chronicles[spot.chronicles.length - 1];
    } else {
      const y = parseInt(activeYear, 10);
      activeChronicle = spot.chronicles.find(c => c.fromYear <= y && (c.toYear === null || c.toYear >= y));
    }

    const eraText = activeChronicle 
      ? (activeChronicle.toYear ? `${activeChronicle.fromYear}-${activeChronicle.toYear}` : `${activeChronicle.fromYear}+`)
      : 'Ιστορία';

    const customIcon = L.divIcon({
      className: 'time-capsule-marker-wrapper',
      html: `
        <div class="custom-poi-marker marker-pulse cursor-pointer group">
          <div class="px-2.5 py-1 rounded-full text-xs font-black shadow-2xl border-2 border-amber-300 bg-amber-500 text-slate-950 flex items-center gap-1.5 transition transform group-hover:scale-110">
            <i class="fa-solid fa-hourglass-start text-[10px]"></i>
            <span class="text-[10px] font-mono bg-slate-900 text-amber-300 px-1.5 py-0.2 rounded-full">${eraText}</span>
            <span class="truncate max-w-[110px]">${activeChronicle ? activeChronicle.title : spot.name}</span>
          </div>
        </div>
      `,
      iconSize: [180, 36],
      iconAnchor: [90, 18]
    });

    const marker = L.marker(spot.coords, { icon: customIcon });
    marker.on('click', () => {
      if (onSpotClick) onSpotClick(spot.id, activeYear);
    });
    timeCapsuleMarkersGroup.addLayer(marker);
  });
}

export function clearTimeCapsules() {
  if (timeCapsuleMarkersGroup) timeCapsuleMarkersGroup.clearLayers();
}

export function clearPois() {
  if (poiMarkersGroup) poiMarkersGroup.clearLayers();
}

export function clearCityPins() {
  if (cityMarkersGroup) cityMarkersGroup.clearLayers();
}

export function flyToCoords(coords, zoom, duration = 1.5) {
  if (!map) return;
  try {
    const size = map.getSize ? map.getSize() : null;
    if (!size || size.x === 0 || size.y === 0) {
      map.setView(coords, zoom);
      return;
    }
    map.flyTo(coords, zoom, {
      duration,
      easeLinearity: 0.25
    });
  } catch (err) {
    console.warn('[Map] flyToCoords fallback to setView:', err);
    try {
      map.setView(coords, zoom);
    } catch (e) {}
  }
}

export function flyToWorld() {
  flyToCoords([20.0, 0.0], 2.3, 2.0);
}

export function flyToUSA() {
  flyToCoords([39.8283, -98.5795], 4.3, 1.8);
}

export function flyToCoordinates(lat, lng, zoom = 16) {
  flyToCoords([lat, lng], zoom, 1.8);
}

export function getMapCenter() {
  return map ? map.getCenter() : null;
}

export function getMapInstance() {
  return map;
}

export function invalidateMapSize() {
  if (map) {
    try {
      map.invalidateSize();
    } catch (e) {
      console.warn('Map invalidateSize warning:', e);
    }
    setTimeout(() => {
      try {
        if (map) map.invalidateSize();
      } catch (e) {}
    }, 150);
  }
}
