/**
 * Map Module
 * Handles Leaflet map initialization, layers, polygon highlights, markers, and animations.
 */

let map = null;
let statePolygonLayer = null;
let cityMarkersGroup = null;
let poiMarkersGroup = null;

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

export function initMap(containerId, initialCoords, initialZoom, onStateClick) {
  map = L.map(containerId, {
    zoomControl: false,
    attributionControl: false
  }).setView(initialCoords, initialZoom);

  // Zoom control in bottom-right
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // High-Quality OpenStreetMap Tile Layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Compact attribution
  L.control.attribution({ position: 'bottomright', prefix: false })
    .addAttribution('&copy; <a href="https://openstreetmap.org" class="text-sky-400">OSM</a> &copy; <a href="https://carto.com/" class="text-sky-400">CARTO</a>')
    .addTo(map);

  // Layer groups for markers
  cityMarkersGroup = L.layerGroup().addTo(map);
  poiMarkersGroup = L.layerGroup().addTo(map);

  // Draw State boundary highlight
  drawStateHighlight(onStateClick);

  return map;
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

export function renderCityPins(cities, currentScope, currentCityId, onCityClick) {
  if (!cityMarkersGroup) return;
  cityMarkersGroup.clearLayers();

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

    const popupEl = document.createElement('div');
    popupEl.className = 'p-3 text-slate-900 font-sans max-w-xs';
    popupEl.innerHTML = `
      <div class="text-[10px] font-bold uppercase tracking-wider text-sky-700 mb-0.5">
        ${poi.category === 'history' ? 'Ιστορικό Σημείο' : poi.category === 'culture' ? 'Πολιτισμός & Τέχνες' : 'Φυσικό Αξιοθέατο'}
      </div>
      <div class="font-bold text-sm text-slate-900 mb-1 leading-tight">${poi.name}</div>
      <div class="text-xs text-slate-600 mb-2 leading-relaxed">${poi.desc}</div>
      <div class="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200">
        <span class="text-slate-500 font-serif italic">${city.name}</span>
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

export function clearPois() {
  if (poiMarkersGroup) poiMarkersGroup.clearLayers();
}

export function flyToCoords(coords, zoom, duration = 1.5) {
  if (!map) return;
  map.flyTo(coords, zoom, {
    duration,
    easeLinearity: 0.25
  });
}

export function flyToUSA() {
  flyToCoords([39.8283, -98.5795], 4.3, 1.8);
}

export function getMapInstance() {
  return map;
}
