/**
 * App Module (Main Orchestrator)
 * Coordinates Landing Page, World & Regional Data, Leaflet Map, Base Layers,
 * UI Dossier, and Time Machine (Temporal Slider & Time Capsule Spots).
 */

import { loadWorldData, loadStateData } from './data-service.js';
import * as MapModule from './map.js';
import * as UIModule from './ui.js';
import * as TimeMachine from './time-machine.js';

// Application State
let worldData = null;
let massachusettsData = null;
let currentScope = 'world'; // 'world' | 'usa' | 'state' | 'city'
let currentCityId = null;
let currentTab = 'geo';
let currentPoiFilter = 'all';

const tourSequence = [
  { type: 'world', id: 'earth' },
  { type: 'state', id: 'massachusetts' },
  { type: 'city', id: 'boston' },
  { type: 'city', id: 'cambridge' },
  { type: 'city', id: 'salem' },
  { type: 'city', id: 'plymouth' },
  { type: 'city', id: 'worcester' }
];

function getCurrentEntity() {
  if (currentScope === 'world') {
    return worldData ? worldData.entity : null;
  }
  if (!massachusettsData) return null;
  if (currentScope === 'city' && currentCityId) {
    return massachusettsData.cities.find(c => c.id === currentCityId) || massachusettsData.state;
  }
  return massachusettsData.state;
}

export function openExplorer() {
  const landingPage = document.getElementById('landingPage');
  const explorerApp = document.getElementById('explorerApp');

  if (landingPage) landingPage.classList.add('hidden');
  if (explorerApp) explorerApp.classList.remove('hidden');

  MapModule.invalidateMapSize();
}

export function openLandingPage() {
  const landingPage = document.getElementById('landingPage');
  const explorerApp = document.getElementById('explorerApp');

  if (explorerApp) explorerApp.classList.add('hidden');
  if (landingPage) landingPage.classList.remove('hidden');
}

export function setMapLayer(layerKey) {
  const activeKey = MapModule.switchBaseLayer(layerKey);
  UIModule.updateBaseLayerUI(activeKey);
}

export function renderCurrentTimeCapsules() {
  if (currentScope === 'world') {
    MapModule.clearTimeCapsules();
    return;
  }

  const spots = TimeMachine.getFilteredSpots(currentScope === 'city' ? currentCityId : null);
  const activeYear = TimeMachine.getSelectedYear();
  MapModule.renderTimeCapsulePins(spots, activeYear, (spotId, year) => {
    TimeMachine.openSpotTimeCapsule(spotId, year);
  });
}

export function onTimeSliderChange(year) {
  TimeMachine.setSelectedYear(year);
  renderCurrentTimeCapsules();
}

export function onTimeDecadeClick(year) {
  TimeMachine.setSelectedYear(year);
  renderCurrentTimeCapsules();
}

export function toggleTimePlayback() {
  TimeMachine.togglePlayback((year) => {
    renderCurrentTimeCapsules();
  });
}

export function flyToWorld() {
  currentScope = 'world';
  currentCityId = null;

  UIModule.updateStatusBadge("Προβολή: Πλανήτης Γη (World Overview)");
  UIModule.updateBreadcrumbs('world');
  UIModule.updateJumpSelect('world');

  MapModule.flyToWorld();
  MapModule.toggleStateHighlight(false);
  MapModule.clearCityPins();
  MapModule.clearPois();
  MapModule.clearTimeCapsules();

  if (worldData) {
    UIModule.renderDossier(worldData.entity, 'world', currentTab);
  }
}

export function flyToUSA() {
  currentScope = 'usa';
  currentCityId = null;

  UIModule.updateStatusBadge("Προβολή: Επικράτεια Ηνωμένων Πολιτειών");
  UIModule.updateBreadcrumbs('usa');
  UIModule.updateJumpSelect('usa');

  MapModule.flyToUSA();
  MapModule.toggleStateHighlight(true);
  if (massachusettsData) {
    MapModule.renderCityPins(massachusettsData.cities, currentScope, currentCityId, flyToCity);
    UIModule.renderDossier(massachusettsData.state, 'state', currentTab);
  }
  MapModule.clearPois();
  renderCurrentTimeCapsules();
}

export function flyToState(stateId = 'massachusetts') {
  currentScope = 'state';
  currentCityId = null;

  if (!massachusettsData) return;
  const state = massachusettsData.state;

  UIModule.updateStatusBadge(`Πτήση: Πολιτεία ${state.name}`);
  UIModule.updateBreadcrumbs('state', state);
  UIModule.updateJumpSelect(`state:${state.id}`);

  MapModule.flyToCoords(state.coords, state.zoom, 1.5);
  MapModule.toggleStateHighlight(true);
  MapModule.renderCityPins(massachusettsData.cities, currentScope, currentCityId, flyToCity);
  MapModule.clearPois();
  UIModule.renderDossier(state, 'state', currentTab);
  renderCurrentTimeCapsules();
}

export function flyToCity(cityId) {
  if (!massachusettsData) return;
  const city = massachusettsData.cities.find(c => c.id === cityId);
  if (!city) return;

  currentScope = 'city';
  currentCityId = cityId;

  UIModule.updateStatusBadge(`Πτήση: ${city.name} (${city.englishName})`);
  UIModule.updateBreadcrumbs('city', massachusettsData.state, city);
  UIModule.updateJumpSelect(`city:${city.id}`);

  MapModule.flyToCoords(city.coords, city.zoom, 1.4);
  MapModule.toggleStateHighlight(false);
  MapModule.renderCityPins(massachusettsData.cities, currentScope, currentCityId, flyToCity);
  MapModule.renderCityPois(city, currentPoiFilter, switchTab);
  UIModule.renderDossier(city, false, currentTab);
  renderCurrentTimeCapsules();
}

export function handleJumpChange(value) {
  if (value === 'world') {
    flyToWorld();
  } else if (value === 'usa') {
    flyToUSA();
  } else if (value.startsWith('state:')) {
    flyToState(value.split(':')[1]);
  } else if (value.startsWith('city:')) {
    flyToCity(value.split(':')[1]);
  }
}

export function navigateTour(direction) {
  let currentIndex = tourSequence.findIndex(item => {
    if (currentScope === 'world' && item.type === 'world') return true;
    if (currentScope === 'state' && item.type === 'state') return true;
    if (currentScope === 'city' && item.type === 'city' && item.id === currentCityId) return true;
    return false;
  });

  if (currentIndex === -1) currentIndex = 0;

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = tourSequence.length - 1;
  if (nextIndex >= tourSequence.length) nextIndex = 0;

  const target = tourSequence[nextIndex];
  if (target.type === 'world') {
    flyToWorld();
  } else if (target.type === 'state') {
    flyToState(target.id);
  } else {
    flyToCity(target.id);
  }
}

export function switchTab(tabId) {
  currentTab = tabId;
  const entity = getCurrentEntity();
  const entityType = currentScope === 'world' ? 'world' : (currentScope === 'city' ? 'city' : 'state');
  UIModule.updateTabButtons(currentTab);
  UIModule.renderTabContent(currentTab, entity);
}

export function togglePoiCategory(category) {
  currentPoiFilter = category;
  UIModule.updatePoiFilterButtons(category);

  if (currentScope === 'city' && currentCityId && massachusettsData) {
    const city = massachusettsData.cities.find(c => c.id === currentCityId);
    MapModule.renderCityPois(city, currentPoiFilter, switchTab);
  }
}

export function narrateBrief() {
  const entity = getCurrentEntity();
  UIModule.narrateBrief(entity);
}

// Global Window Bindings for UI & HTML event attributes
window.openExplorer = openExplorer;
window.openLandingPage = openLandingPage;
window.setMapLayer = setMapLayer;
window.flyToWorld = flyToWorld;
window.flyToUSA = flyToUSA;
window.flyToState = flyToState;
window.flyToCity = flyToCity;
window.handleJumpChange = handleJumpChange;
window.navigateTour = navigateTour;
window.switchTab = switchTab;
window.togglePoiCategory = togglePoiCategory;
window.narrateBrief = narrateBrief;

// Time Machine window bindings
window.onTimeSliderChange = onTimeSliderChange;
window.onTimeDecadeClick = onTimeDecadeClick;
window.toggleTimePlayback = toggleTimePlayback;
window.openSpotTimeCapsule = TimeMachine.openSpotTimeCapsule;
window.closeSpotTimeCapsule = TimeMachine.closeSpotTimeCapsule;
window.selectSpotEra = TimeMachine.selectSpotEra;
window.openAddMemoryForm = TimeMachine.openAddMemoryForm;
window.closeAddMemoryModal = TimeMachine.closeAddMemoryModal;
window.openAddEraForm = TimeMachine.openAddEraForm;
window.closeAddEraModal = TimeMachine.closeAddEraModal;
window.submitMemory = TimeMachine.submitMemory;
window.submitNewEra = TimeMachine.submitNewEra;

// App Initializer
async function init() {
  try {
    // 1. Update Today's Date in UI
    UIModule.updateCurrentDate();

    // 2. Load World, Regional, and Time-Capsule datasets in parallel
    [worldData, massachusettsData] = await Promise.all([
      loadWorldData(),
      loadStateData('massachusetts'),
      TimeMachine.initTimeMachine()
    ]);

    // 3. Initialize Leaflet Map centered on Earth
    MapModule.initMap('map', worldData.entity.coords, worldData.entity.zoom, () => {
      if (currentScope !== 'state') {
        flyToState('massachusetts');
      }
    });

    // 4. Set initial base layer UI state (Dark Voyager default)
    UIModule.updateBaseLayerUI('dark');

    // 5. Initial Time Slider setup
    TimeMachine.updateTimeSliderUI();

    // 6. Initial Dossier display: Planet Earth
    flyToWorld();
  } catch (error) {
    console.error('Failed to initialize EarthTimes:', error);
    const container = document.getElementById('tabContent');
    if (container) {
      container.innerHTML = `
        <div class="p-4 bg-rose-950/40 border border-rose-800 rounded-xl text-rose-200 text-sm">
          <div class="font-bold mb-1"><i class="fa-solid fa-triangle-exclamation"></i> Σφάλμα φόρτωσης δεδομένων</div>
          <p>Δεν ήταν δυνατή η φόρτωση των αρχείων δεδομένων.</p>
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
