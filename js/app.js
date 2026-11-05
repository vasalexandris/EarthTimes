/**
 * App Module (Main Orchestrator)
 * Connects DataService, Map, and UI modules, and maintains application state.
 */

import { loadStateData } from './data-service.js';
import * as MapModule from './map.js';
import * as UIModule from './ui.js';

// Application State
let appData = null;
let currentScope = 'state'; // 'usa' | 'state' | 'city'
let currentCityId = null;
let currentTab = 'geo';
let currentPoiFilter = 'all';

const tourSequence = [
  { type: 'state', id: 'massachusetts' },
  { type: 'city', id: 'boston' },
  { type: 'city', id: 'cambridge' },
  { type: 'city', id: 'salem' },
  { type: 'city', id: 'plymouth' },
  { type: 'city', id: 'worcester' }
];

function getCurrentEntity() {
  if (!appData) return null;
  if (currentScope === 'city' && currentCityId) {
    return appData.cities.find(c => c.id === currentCityId) || appData.state;
  }
  return appData.state;
}

export function flyToUSA() {
  currentScope = 'usa';
  currentCityId = null;

  UIModule.updateStatusBadge("Προβολή: Επικράτεια Ηνωμένων Πολιτειών");
  UIModule.updateBreadcrumbs('usa');
  UIModule.updateJumpSelect('usa');

  MapModule.flyToUSA();
  MapModule.renderCityPins(appData.cities, currentScope, currentCityId, flyToCity);
  MapModule.clearPois();
  UIModule.renderDossier(appData.state, true, currentTab);
}

export function flyToState(stateId = 'massachusetts') {
  currentScope = 'state';
  currentCityId = null;

  const state = appData.state;
  UIModule.updateStatusBadge(`Πτήση: Πολιτεία ${state.name}`);
  UIModule.updateBreadcrumbs('state');
  UIModule.updateJumpSelect(`state:${state.id}`);

  MapModule.flyToCoords(state.coords, state.zoom, 1.5);
  MapModule.renderCityPins(appData.cities, currentScope, currentCityId, flyToCity);
  MapModule.clearPois();
  UIModule.renderDossier(state, true, currentTab);
}

export function flyToCity(cityId) {
  const city = appData.cities.find(c => c.id === cityId);
  if (!city) return;

  currentScope = 'city';
  currentCityId = cityId;

  UIModule.updateStatusBadge(`Πτήση: ${city.name} (${city.englishName})`);
  UIModule.updateBreadcrumbs('city', city);
  UIModule.updateJumpSelect(`city:${city.id}`);

  MapModule.flyToCoords(city.coords, city.zoom, 1.4);
  MapModule.renderCityPins(appData.cities, currentScope, currentCityId, flyToCity);
  MapModule.renderCityPois(city, currentPoiFilter, switchTab);
  UIModule.renderDossier(city, false, currentTab);
}

export function handleJumpChange(value) {
  if (value === 'usa') {
    flyToUSA();
  } else if (value.startsWith('state:')) {
    flyToState(value.split(':')[1]);
  } else if (value.startsWith('city:')) {
    flyToCity(value.split(':')[1]);
  }
}

export function navigateTour(direction) {
  let currentIndex = tourSequence.findIndex(item => {
    if (currentScope === 'state' && item.type === 'state') return true;
    if (currentScope === 'city' && item.type === 'city' && item.id === currentCityId) return true;
    return false;
  });

  if (currentIndex === -1) currentIndex = 0;

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = tourSequence.length - 1;
  if (nextIndex >= tourSequence.length) nextIndex = 0;

  const target = tourSequence[nextIndex];
  if (target.type === 'state') {
    flyToState(target.id);
  } else {
    flyToCity(target.id);
  }
}

export function switchTab(tabId) {
  currentTab = tabId;
  const entity = getCurrentEntity();
  UIModule.updateTabButtons(currentTab);
  UIModule.renderTabContent(currentTab, entity);
}

export function togglePoiCategory(category) {
  currentPoiFilter = category;
  UIModule.updatePoiFilterButtons(category);

  if (currentScope === 'city' && currentCityId) {
    const city = appData.cities.find(c => c.id === currentCityId);
    MapModule.renderCityPois(city, currentPoiFilter, switchTab);
  }
}

export function narrateBrief() {
  const entity = getCurrentEntity();
  UIModule.narrateBrief(entity);
}

// Expose handlers to window object for inline HTML event handlers & debugging
window.flyToUSA = flyToUSA;
window.flyToState = flyToState;
window.flyToCity = flyToCity;
window.handleJumpChange = handleJumpChange;
window.navigateTour = navigateTour;
window.switchTab = switchTab;
window.togglePoiCategory = togglePoiCategory;
window.narrateBrief = narrateBrief;

// Application Bootstrap
async function init() {
  try {
    appData = await loadStateData('massachusetts');

    // Initialize Map with state coordinates
    MapModule.initMap('map', appData.state.coords, appData.state.zoom, () => {
      if (currentScope !== 'state') {
        flyToState('massachusetts');
      }
    });

    // Render city pins initially
    MapModule.renderCityPins(appData.cities, currentScope, currentCityId, flyToCity);

    // Initial render of dossier panel
    UIModule.renderDossier(appData.state, true, currentTab);
  } catch (error) {
    console.error('Failed to initialize application:', error);
    const container = document.getElementById('tabContent');
    if (container) {
      container.innerHTML = `
        <div class="p-4 bg-rose-950/40 border border-rose-800 rounded-xl text-rose-200 text-sm">
          <div class="font-bold mb-1"><i class="fa-solid fa-triangle-exclamation"></i> Σφάλμα φόρτωσης δεδομένων</div>
          <p>Δεν ήταν δυνατή η φόρτωση του αρχείου <code>data/massachusetts.json</code>.</p>
          <p class="text-xs text-rose-300 mt-2">Βεβαιωθείτε ότι η εφαρμογή εκτελείται μέσω τοπικού διακομιστή (π.χ. Live Server ή <code>npx serve</code>).</p>
        </div>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
