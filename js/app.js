/**
 * App Module (Main Orchestrator)
 * Coordinates Landing Page, World & Regional Data, Greece (including Kozani!),
 * USA, Leaflet Map, Base Layers, UI Dossier, and Time Machine.
 */

import { loadWorldData, loadCountryData, loadStateData } from './data-service.js';
import * as MapModule from './map.js';
import * as UIModule from './ui.js';
import * as TimeMachine from './time-machine.js';

// Application State
let worldData = null;
let greeceData = null;
let usaData = null;
let massachusettsData = null;

let currentScope = 'world'; // 'world' | 'country' | 'state' | 'city'
let currentCountryId = 'greece';
let currentCityId = null;
let currentTab = 'geo';
let currentPoiFilter = 'all';

// Sequential tour items
const tourSequence = [
  { type: 'world', id: 'earth' },
  { type: 'country', id: 'greece' },
  { type: 'city', id: 'kozani' },
  { type: 'city', id: 'athens' },
  { type: 'city', id: 'thessaloniki' },
  { type: 'country', id: 'usa' },
  { type: 'city', id: 'new-york' },
  { type: 'city', id: 'boston' }
];

function getAllCities() {
  const list = [];
  if (greeceData && greeceData.cities) list.push(...greeceData.cities);
  if (usaData && usaData.cities) list.push(...usaData.cities);
  if (massachusettsData && massachusettsData.cities) {
    massachusettsData.cities.forEach(mc => {
      if (!list.some(c => c.id === mc.id)) list.push(mc);
    });
  }
  return list;
}

function findCityById(cityId) {
  const cities = getAllCities();
  return cities.find(c => c.id === cityId);
}

function getCurrentEntity() {
  if (currentScope === 'world') {
    return worldData ? worldData.entity : null;
  }
  if (currentScope === 'country') {
    if (currentCountryId === 'greece' && greeceData) return greeceData.country;
    if (currentCountryId === 'usa' && usaData) return usaData.country;
  }
  if (currentScope === 'state' && massachusettsData) {
    return massachusettsData.state;
  }
  if (currentScope === 'city' && currentCityId) {
    return findCityById(currentCityId);
  }
  return worldData ? worldData.entity : null;
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
  if (currentTab === 'timeline') {
    UIModule.renderTabContent('timeline', getCurrentEntity(), year, TimeMachine.getTimeCapsules(), TimeMachine.isPlaybackRunning());
  }
}

export function onTimeDecadeClick(year) {
  TimeMachine.setSelectedYear(year);
  renderCurrentTimeCapsules();
  if (currentTab === 'timeline') {
    UIModule.renderTabContent('timeline', getCurrentEntity(), year, TimeMachine.getTimeCapsules(), TimeMachine.isPlaybackRunning());
  }
}

export function toggleTimePlayback() {
  const willPlay = !TimeMachine.isPlaybackRunning();
  if (willPlay) {
    // If not already in timeline tab, switch to it automatically so user sees the live flow
    if (currentTab !== 'timeline') {
      switchTab('timeline');
    }
  }

  TimeMachine.togglePlayback((year) => {
    renderCurrentTimeCapsules();
    if (currentTab === 'timeline') {
      UIModule.renderTabContent('timeline', getCurrentEntity(), year, TimeMachine.getTimeCapsules(), true);
    }
    UIModule.updateTimelineLiveIndicator(true);
  });

  UIModule.updateTimelineLiveIndicator(TimeMachine.isPlaybackRunning());
}

export function flyToWorld() {
  currentScope = 'world';
  currentCountryId = null;
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
    UIModule.renderDossier(
      worldData.entity, 
      'world', 
      currentTab, 
      TimeMachine.getSelectedYear(), 
      TimeMachine.getTimeCapsules(), 
      TimeMachine.isPlaybackRunning()
    );
  }
}

export function flyToCountry(countryId = 'greece') {
  currentScope = 'country';
  currentCountryId = countryId;
  currentCityId = null;

  const dataset = (countryId === 'greece') ? greeceData : usaData;
  if (!dataset || !dataset.country) return;

  const country = dataset.country;
  UIModule.updateStatusBadge(`Πτήση: ${country.name}`);
  UIModule.updateBreadcrumbs('country', country);
  UIModule.updateJumpSelect(`country:${country.id}`);

  MapModule.flyToCoords(country.coords, country.zoom, 1.6);
  MapModule.toggleStateHighlight(false);
  MapModule.renderCityPins(dataset.cities, currentScope, currentCityId, flyToCity);
  MapModule.clearPois();
  UIModule.renderDossier(
    country, 
    'country', 
    currentTab, 
    TimeMachine.getSelectedYear(), 
    TimeMachine.getTimeCapsules(), 
    TimeMachine.isPlaybackRunning()
  );
  renderCurrentTimeCapsules();
}

export function flyToState(stateId = 'massachusetts') {
  currentScope = 'state';
  currentCountryId = 'usa';
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
  UIModule.renderDossier(
    state, 
    'state', 
    currentTab, 
    TimeMachine.getSelectedYear(), 
    TimeMachine.getTimeCapsules(), 
    TimeMachine.isPlaybackRunning()
  );
  renderCurrentTimeCapsules();
}

export function flyToCity(cityId) {
  const city = findCityById(cityId);
  if (!city) return;

  currentScope = 'city';
  currentCityId = cityId;

  // Determine parent country
  let parent = greeceData ? greeceData.country : null;
  if (greeceData && greeceData.cities && greeceData.cities.some(c => c.id === cityId)) {
    currentCountryId = 'greece';
    parent = greeceData.country;
  } else if (usaData && usaData.cities && usaData.cities.some(c => c.id === cityId)) {
    currentCountryId = 'usa';
    parent = usaData.country;
  } else if (massachusettsData) {
    currentCountryId = 'usa';
    parent = massachusettsData.state;
  }

  UIModule.updateStatusBadge(`Πτήση: ${city.name} (${city.englishName})`);
  UIModule.updateBreadcrumbs('city', parent, city);
  UIModule.updateJumpSelect(`city:${city.id}`);

  MapModule.flyToCoords(city.coords, city.zoom, 1.4);
  MapModule.toggleStateHighlight(false);

  const activeCities = (currentCountryId === 'greece') 
    ? (greeceData ? greeceData.cities : []) 
    : (usaData ? usaData.cities : (massachusettsData ? massachusettsData.cities : []));

  MapModule.renderCityPins(activeCities, currentScope, currentCityId, flyToCity);
  MapModule.renderCityPois(city, currentPoiFilter, switchTab);
  UIModule.renderDossier(
    city, 
    'city', 
    currentTab, 
    TimeMachine.getSelectedYear(), 
    TimeMachine.getTimeCapsules(), 
    TimeMachine.isPlaybackRunning()
  );
  renderCurrentTimeCapsules();
}

export function handleJumpChange(value) {
  if (value === 'world') {
    flyToWorld();
  } else if (value.startsWith('country:')) {
    flyToCountry(value.split(':')[1]);
  } else if (value.startsWith('state:')) {
    flyToState(value.split(':')[1]);
  } else if (value.startsWith('city:')) {
    flyToCity(value.split(':')[1]);
  }
}

export function navigateTour(direction) {
  let currentIndex = tourSequence.findIndex(item => {
    if (currentScope === 'world' && item.type === 'world') return true;
    if (currentScope === 'country' && item.type === 'country' && item.id === currentCountryId) return true;
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
  } else if (target.type === 'country') {
    flyToCountry(target.id);
  } else if (target.type === 'state') {
    flyToState(target.id);
  } else {
    flyToCity(target.id);
  }
}

export function switchTab(tabId) {
  currentTab = tabId;
  const entity = getCurrentEntity();
  UIModule.updateTabButtons(currentTab);
  UIModule.renderTabContent(
    currentTab, 
    entity, 
    TimeMachine.getSelectedYear(), 
    TimeMachine.getTimeCapsules(), 
    TimeMachine.isPlaybackRunning()
  );
}

export function togglePoiCategory(category) {
  currentPoiFilter = category;
  UIModule.updatePoiFilterButtons(category);

  if (currentScope === 'city' && currentCityId) {
    const city = findCityById(currentCityId);
    if (city) {
      MapModule.renderCityPois(city, currentPoiFilter, switchTab);
    }
  }
}

export function narrateBrief() {
  const entity = getCurrentEntity();
  UIModule.narrateBrief(entity);
}

export function toggleAddSpotMode() {
  const active = MapModule.setAddSpotMode(!MapModule.isAddSpotMode());
  if (active) {
    UIModule.updateStatusBadge("Κάντε κλικ ή δεξί κλικ στο χάρτη για να βάλετε νέα Χρονοκάψουλα!");
  }
}

// Global Window Bindings for UI & HTML event attributes
window.openExplorer = openExplorer;
window.openLandingPage = openLandingPage;
window.onExplorerOpened = () => {
  MapModule.invalidateMapSize();
};
window.setMapLayer = setMapLayer;
window.flyToWorld = flyToWorld;
window.flyToCountry = flyToCountry;
window.flyToState = flyToState;
window.flyToCity = flyToCity;
window.handleJumpChange = handleJumpChange;
window.navigateTour = navigateTour;
window.switchTab = switchTab;
window.togglePoiCategory = togglePoiCategory;
window.narrateBrief = narrateBrief;

// Time Machine & Spot Creation window bindings
window.toggleTimePlayback = toggleTimePlayback;
window.onTimeSliderChange = onTimeSliderChange;
window.onTimeDecadeClick = onTimeDecadeClick;
window.toggleAddSpotMode = toggleAddSpotMode;
window.openSpotTimeCapsule = TimeMachine.openSpotTimeCapsule;
window.closeSpotTimeCapsule = TimeMachine.closeSpotTimeCapsule;
window.selectSpotEra = TimeMachine.selectSpotEra;
window.openCreateSpotModal = TimeMachine.openCreateSpotModal;
window.closeCreateSpotModal = TimeMachine.closeCreateSpotModal;
window.submitNewSpot = TimeMachine.submitNewSpot;
window.openAddMemoryForm = TimeMachine.openAddMemoryForm;
window.closeAddMemoryModal = TimeMachine.closeAddMemoryModal;
window.openAddEraForm = TimeMachine.openAddEraForm;
window.closeAddEraModal = TimeMachine.closeAddEraModal;
window.submitMemory = TimeMachine.submitMemory;
window.submitNewEra = TimeMachine.submitNewEra;
window.openAiReconstructModal = TimeMachine.openAiReconstructModal;
window.closeAiReconstructModal = TimeMachine.closeAiReconstructModal;
window.openUserProfileModal = TimeMachine.openUserProfileModal;
window.closeUserProfileModal = TimeMachine.closeUserProfileModal;
window.saveUserProfile = TimeMachine.saveUserProfile;

// App Initializer
async function init() {
  try {
    // 1. Update Today's Date in UI
    UIModule.updateCurrentDate();

    // 2. Load World, Countries (Greece, USA), and Regional datasets in parallel
    [worldData, greeceData, usaData, massachusettsData] = await Promise.all([
      loadWorldData(),
      loadCountryData('greece'),
      loadCountryData('usa'),
      loadStateData('massachusetts'),
      TimeMachine.initTimeMachine()
    ]);

    // 3. Initialize Leaflet Map centered on Earth
    MapModule.initMap('map', worldData.entity.coords, worldData.entity.zoom, () => {
      if (currentScope === 'world') {
        flyToCountry('greece');
      }
    });

    // Register Map Click / Right Click Handler to add Time Capsule Spots!
    MapModule.setOnMapRightClickHandler((lat, lng) => {
      TimeMachine.openCreateSpotModal(lat, lng);
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
