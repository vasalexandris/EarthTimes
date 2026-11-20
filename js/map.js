/**
 * Map Module
 * Handles Leaflet map initialization, multiple base map layers (Satellite, Streets, Topo, Dark),
 * polygon highlights, markers, time capsules, and camera animations.
 */

import { findPoiLiveCam } from './video-service.js?v=20261117_video_iframe_fix';
import { initDayNight } from './solar-terminator.js?v=20261117_video_iframe_fix';

let map = null;
let activeBaseLayer = null;
let currentBaseLayerKey = 'satellite'; // default to Satellite (Esri World Imagery)
let statePolygonLayer = null;
let cityMarkersGroup = null;
let poiMarkersGroup = null;
let timeCapsuleMarkersGroup = null;
let addSpotMode = false;
let onMapRightClickCallback = null;

function escapeStr(str) {
  return String(str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

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
    name: 'Γεωγραφικός / Τοπογραφικός (Ανάγλυφο)',
    icon: 'fa-mountain-sun',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 19,
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a>, USGS, NOAA'
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
  },
  nasaNight: {
    name: 'NASA Νύχτα (Φώτα Πόλεων)',
    icon: 'fa-city',
    url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_CityLights_2012/default/2012-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',
    options: {
      maxZoom: 8,
      attribution: 'Imagery &copy; NASA Earth Observatory / NOAA'
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

  // Initialize Real-Time Day and Night Terminator & Sun/Moon tracking
  try {
    initDayNight(map);
  } catch (err) {
    console.warn('[Map] initDayNight failed:', err);
  }

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
      btn.className = 'h-9 px-3.5 bg-amber-500 text-slate-950 font-bold border border-amber-300 rounded-xl flex items-center gap-1.5 text-xs shadow-lg transition animate-pulse cursor-pointer';
    } else {
      if (window.updateUserBadgeUI) {
        window.updateUserBadgeUI();
      } else {
        btn.className = 'h-9 px-3.5 bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-slate-700 rounded-xl flex items-center gap-1.5 text-xs font-medium shadow-lg transition cursor-pointer';
      }
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
    const isState = city.isState || city._isState === true;

    const customIcon = L.divIcon({
      className: 'city-pin-wrapper',
      html: `
        <div class="custom-poi-marker cursor-pointer group">
          <div class="px-2.5 py-1 rounded-full text-xs font-bold shadow-lg border flex items-center gap-1.5 transition ${
            isSelected 
              ? 'bg-amber-500 text-slate-950 border-amber-300 ring-4 ring-amber-400/30' 
              : (isState 
                  ? 'bg-emerald-950/90 text-emerald-200 border-emerald-600 hover:border-emerald-300 hover:text-white' 
                  : 'bg-slate-900/90 text-white border-slate-600 hover:border-sky-400 hover:text-sky-300')
          }">
            <i class="fa-solid ${isState ? 'fa-landmark text-emerald-400 text-[10px]' : 'fa-city text-[10px]'}"></i>
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
          <button onclick="window.openPoiVideo('${poi.name.replace(/'/g, "\\'")}', '${city.id}')" class="px-2 py-1 rounded bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-700/50 text-[11px] font-bold flex items-center gap-1 transition shadow-sm cursor-pointer" title="Προβολή στο Βίντεο Περιήγησης (4K στο κατάλληλο σημείο)">
            <i class="fa-solid fa-film text-rose-400"></i> Βίντεο 4K
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
    // Check if spot is private
    const isPrivate = Boolean(spot.visibility === 'private' || spot.isPrivate);
    if (isPrivate) {
      const curUser = window.getCurrentUser ? window.getCurrentUser() : null;
      const isAllowed = curUser && (curUser.role === 'admin' || (curUser.email && curUser.email === spot.authorEmail) || (curUser.uid && curUser.uid === spot.authorUid));
      if (!isAllowed) return; // Do not render private spots for other users/guests!
    }

    // Find active chronicle for this year or unknown date
    let activeChronicle = null;
    if (activeYear === 'unknown') {
      activeChronicle = spot.chronicles.find(c => c.fromYear === null || c.isUnknownDate || c.date === 'unknown') || (spot.isUnknownDate ? spot.chronicles[0] : null);
    } else if (activeYear === 'all') {
      activeChronicle = spot.chronicles[spot.chronicles.length - 1];
    } else {
      const y = parseInt(activeYear, 10);
      activeChronicle = spot.chronicles.find(c => c.fromYear <= y && (c.toYear === null || c.toYear >= y));
    }

    // STRICT TEMPORAL FILTER:
    // If a specific year is active and this spot did NOT exist or has no memory in this year, do NOT place it on the map!
    if (activeYear !== 'all' && !activeChronicle) {
      return;
    }
    if (!activeChronicle) return;

    let eraText = 'Άγνωστο';
    if (activeChronicle.fromYear !== null && activeChronicle.fromYear !== undefined) {
      eraText = activeChronicle.toYear 
        ? `${activeChronicle.fromYear}-${activeChronicle.toYear}` 
        : `${activeChronicle.fromYear}+`;
    }

    let ytId = activeChronicle.youtubeId || null;
    if (!ytId && activeChronicle.videoUrl) {
      const m = activeChronicle.videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (m && m[1]) ytId = m[1];
    }
    if (!ytId && activeChronicle.photos) {
      const f = activeChronicle.photos.find(p => p.youtubeId || p.isYouTube);
      if (f) ytId = f.youtubeId;
    }

    let photoUrl = null;
    if (activeChronicle.photos && activeChronicle.photos.length) {
      const firstValidPhoto = activeChronicle.photos.find(p => p.url && !p.isYouTube);
      if (firstValidPhoto) photoUrl = firstValidPhoto.url;
      else if (activeChronicle.photos[0] && activeChronicle.photos[0].url) photoUrl = activeChronicle.photos[0].url;
    }

    const hasVideo = Boolean(ytId);
    const isPending = spot.status === 'pending';

    // Circular Jewel Pin Marker (No text letters, clean 24x24 px circle, doesn't hide map streets)
    const pinIconHtml = isPending 
      ? '<i class="fa-solid fa-hourglass-half text-[10px] text-amber-300"></i>'
      : (isPrivate
          ? '<i class="fa-solid fa-lock text-[10px] text-purple-300"></i>'
          : (hasVideo 
              ? '<i class="fa-brands fa-youtube text-[11px] text-red-500"></i>'
              : '<i class="fa-solid fa-camera-retro text-[10px] text-amber-400"></i>'));

    const customIcon = L.divIcon({
      className: 'time-capsule-marker-wrapper',
      html: `
        <div class="temporal-dot-marker ${isPending ? 'is-pending' : ''} ${isPrivate ? 'is-private' : ''}" title="${isPrivate ? 'Ιδιωτικό Σημείο (Μόνο για εσάς)' : (isPending ? 'Σημείο υπό έγκριση' : '')}">
          ${pinIconHtml}
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const marker = L.marker(spot.coords, { icon: customIcon, spotId: spot.id });

    // Interactive Hover Card Tooltip (Expands on hover, includes direct projector buttons)
    const cardTitle = activeChronicle.title || spot.name;
    const cardStory = activeChronicle.story || 'Ιστορικό τεκμήριο και αρχειακή μαρτυρία.';
    const cardAuthor = activeChronicle.authorName || 'Τοπικό Αρχείο';

    const tooltipHtml = `
      <div class="text-xs p-1 select-none">
        <div class="flex items-center justify-between gap-1.5 mb-1">
          <div class="flex items-center gap-1">
            <span class="px-1.5 py-0.2 rounded text-[9px] font-mono font-black ${isPending ? 'bg-amber-900/90 text-amber-300' : 'bg-amber-400 text-slate-950'} shadow-sm">
              ${eraText}
            </span>
            ${isPrivate ? `
              <span class="px-1.5 py-0.2 rounded text-[9px] font-bold bg-purple-900/90 text-purple-300 border border-purple-500/50 flex items-center gap-0.5">
                <i class="fa-solid fa-lock text-[8px]"></i> Ιδιωτικό
              </span>
            ` : ''}
          </div>
          <span class="text-[9px] text-slate-400 italic truncate max-w-[120px]">${cardAuthor}</span>
        </div>
        <div class="font-bold text-amber-300 text-xs leading-snug">${cardTitle}</div>
        <div class="text-[10px] text-slate-400 mt-0.5 truncate">${spot.name}${spot.address ? ` • ${spot.address}` : ''}</div>
        
        <!-- Story preview: 2 lines initially, expands smoothly if mouse stays on card -->
        <div class="hover-story-preview mt-1.5 border-t border-slate-700/60 pt-1">
          ${cardStory}
        </div>

        <!-- Direct Material Projection Link / Button -->
        <div class="hover-action-reveal mt-2 space-y-1">
          ${hasVideo ? `
            <button onclick="event.stopPropagation(); window.openTimeCapsuleVideo('${ytId}', '${escapeStr(cardTitle)}', '${escapeStr(spot.name)}')" class="w-full py-1 px-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow transition cursor-pointer" title="Αναπαραγωγή βίντεο στο πλαίσιο του χάρτη">
              <i class="fa-brands fa-youtube text-xs"></i>
              <span>Προβολή Βίντεο στο Πλαίσιο 📹</span>
            </button>
          ` : ''}

          ${(!hasVideo && photoUrl) ? `
            <button onclick="event.stopPropagation(); window.openTimeCapsuleMedia('${photoUrl}', '${escapeStr(cardTitle)}', '${escapeStr(spot.name)}')" class="w-full py-1 px-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] flex items-center justify-center gap-1.5 shadow transition cursor-pointer" title="Προβολή εικόνας στο πλαίσιο του χάρτη">
              <i class="fa-solid fa-image text-xs"></i>
              <span>Προβολή Εικόνας στο Πλαίσιο 🖼️</span>
            </button>
          ` : ''}

          <div class="flex items-center gap-1.5 pt-1">
            <button onclick="event.stopPropagation(); window.openEditSpotModal('${spot.id}', '${activeChronicle.id}')" class="flex-1 py-1 px-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-semibold text-[10px] flex items-center justify-center gap-1 transition cursor-pointer" title="Επεξεργασία Σημείου">
              <i class="fa-solid fa-pen-to-square"></i>
              <span>Επεξεργασία ✏️</span>
            </button>
            <button onclick="event.stopPropagation(); window.showSpotInTimeline('${spot.id}', '${activeYear}')" class="flex-1 py-1 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold text-[10px] flex items-center justify-center gap-1 transition cursor-pointer" title="Προβολή στο Χρονολόγιο">
              <i class="fa-solid fa-clock-rotate-left text-amber-400"></i>
              <span>Χρονολόγιο ⏱️</span>
            </button>
          </div>
        </div>
      </div>
    `;

    marker.bindTooltip(tooltipHtml, {
      direction: 'top',
      offset: [0, -14],
      opacity: 1,
      interactive: true,
      className: 'temporal-hover-tooltip'
    });

    marker.on('click', () => {
      if (window.showSpotInTimeline) {
        window.showSpotInTimeline(spot.id, activeYear);
      } else if (onSpotClick) {
        onSpotClick(spot.id, activeYear);
      }
    });

    timeCapsuleMarkersGroup.addLayer(marker);
  });
}

export function focusSpotOnMap(coordsOrSpotId) {
  if (!map) return;
  if (Array.isArray(coordsOrSpotId) && coordsOrSpotId.length === 2) {
    flyToCoords(coordsOrSpotId, 16, 1.2);
    return;
  }
  if (typeof coordsOrSpotId === 'string' && timeCapsuleMarkersGroup) {
    let found = false;
    timeCapsuleMarkersGroup.eachLayer(layer => {
      if (layer.options && layer.options.spotId === coordsOrSpotId) {
        const ll = layer.getLatLng();
        flyToCoords([ll.lat, ll.lng], 16, 1.2);
        if (layer.openTooltip) {
          setTimeout(() => layer.openTooltip(), 600);
        }
        found = true;
      }
    });
    if (!found && window.getTimeCapsules) {
      const spots = window.getTimeCapsules();
      const s = spots.find(x => x.id === coordsOrSpotId);
      if (s && s.coords) {
        flyToCoords(s.coords, 16, 1.2);
      }
    }
  }
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

if (typeof window !== 'undefined') {
  window.invalidateMapSize = invalidateMapSize;
}
