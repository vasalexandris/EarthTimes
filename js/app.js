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
const countriesMap = new Map(); // Dynamic multi-country registry
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
  { type: 'country', id: 'france' },
  { type: 'city', id: 'paris' },
  { type: 'city', id: 'marseille' },
  { type: 'country', id: 'italy' },
  { type: 'city', id: 'rome' },
  { type: 'city', id: 'florence' },
  { type: 'city', id: 'venice' },
  { type: 'country', id: 'uk' },
  { type: 'city', id: 'london' },
  { type: 'city', id: 'edinburgh' },
  { type: 'country', id: 'germany' },
  { type: 'city', id: 'berlin' },
  { type: 'city', id: 'munich' },
  { type: 'country', id: 'spain' },
  { type: 'city', id: 'madrid' },
  { type: 'city', id: 'barcelona' },
  { type: 'country', id: 'austria' },
  { type: 'city', id: 'vienna' },
  { type: 'country', id: 'netherlands' },
  { type: 'city', id: 'amsterdam' },
  { type: 'country', id: 'czech' },
  { type: 'city', id: 'prague' },
  { type: 'country', id: 'belgium' },
  { type: 'city', id: 'brussels' },
  { type: 'country', id: 'portugal' },
  { type: 'city', id: 'lisbon' },
  { type: 'country', id: 'ireland' },
  { type: 'city', id: 'dublin' },
  { type: 'country', id: 'hungary' },
  { type: 'city', id: 'budapest' },
  { type: 'country', id: 'usa' },
  { type: 'city', id: 'new-york' },
  { type: 'city', id: 'boston' }
];

function getAllCities() {
  const list = [];
  for (const cData of countriesMap.values()) {
    if (cData && cData.cities) {
      list.push(...cData.cities);
    }
  }
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
    const cData = countriesMap.get(currentCountryId);
    return cData ? cData.country : null;
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
  requestAnimationFrame(() => MapModule.invalidateMapSize());
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

export async function flyToCountry(countryId = 'greece') {
  currentScope = 'country';
  currentCountryId = countryId;
  currentCityId = null;

  let dataset = countriesMap.get(countryId);
  if (!dataset) {
    try {
      dataset = await loadCountryData(countryId);
      countriesMap.set(countryId, dataset);
    } catch (e) {
      console.warn(`Could not load country ${countryId}`, e);
    }
  }

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

export async function flyToCity(cityId) {
  let city = findCityById(cityId);

  // If not yet loaded, resolve country dynamically
  if (!city) {
    const cityToCountry = {
      'paris': 'france', 'marseille': 'france', 'lyon': 'france',
      'rome': 'italy', 'florence': 'italy', 'milan': 'italy', 'venice': 'italy',
      'london': 'uk', 'edinburgh': 'uk',
      'berlin': 'germany', 'munich': 'germany',
      'madrid': 'spain', 'barcelona': 'spain',
      'vienna': 'austria'
    };
    const targetCountry = cityToCountry[cityId];
    if (targetCountry && !countriesMap.has(targetCountry)) {
      try {
        const cData = await loadCountryData(targetCountry);
        countriesMap.set(targetCountry, cData);
        city = findCityById(cityId);
      } catch (e) {
        console.warn(`Error loading country for ${cityId}`, e);
      }
    }
  }

  if (!city) return;

  currentScope = 'city';
  currentCityId = cityId;

  // Determine parent country
  let parent = null;
  for (const [cId, cData] of countriesMap.entries()) {
    if (cData && cData.cities && cData.cities.some(c => c.id === cityId)) {
      currentCountryId = cId;
      parent = cData.country;
      break;
    }
  }
  if (!parent && massachusettsData && massachusettsData.cities.some(c => c.id === cityId)) {
    currentCountryId = 'usa';
    parent = massachusettsData.state;
  }

  UIModule.updateStatusBadge(`Πτήση: ${city.name} (${city.englishName})`);
  UIModule.updateBreadcrumbs('city', parent, city);
  UIModule.updateJumpSelect(`city:${city.id}`);

  MapModule.flyToCoords(city.coords, city.zoom, 1.4);
  MapModule.toggleStateHighlight(false);

  const activeCountryData = countriesMap.get(currentCountryId);
  const activeCities = activeCountryData ? activeCountryData.cities : (massachusettsData ? massachusettsData.cities : []);

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
  requestAnimationFrame(() => MapModule.invalidateMapSize());
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

// Video & Deep Dive window bindings
window.openCityVideo = UIModule.openCityVideo;
window.closeMapVideoOverlay = UIModule.closeMapVideoOverlay;
window.openDeepDive = UIModule.openDeepDive;
window.closeDeepDiveOverlay = UIModule.closeDeepDiveOverlay;
window.openCurrentCityVideo = () => {
  if (currentCityId) {
    UIModule.openCityVideo(currentCityId);
  }
};

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

    // 2. Load World, Massachusetts, and Time Machine core data
    const [wData, maData, _tm] = await Promise.all([
      loadWorldData(),
      loadStateData('massachusetts'),
      TimeMachine.initTimeMachine()
    ]);

    worldData = wData;
    massachusettsData = maData;

    // 3. Preload countries in background with Promise.allSettled (fully resilient to any individual error)
    const countryKeys = [
      'greece',
      'usa',
      'france',
      'italy',
      'uk',
      'germany',
      'spain',
      'austria',
      'netherlands',
      'czech',
      'belgium',
      'portugal',
      'ireland',
      'hungary'
    ];

    const settledCountries = await Promise.allSettled(countryKeys.map(k => loadCountryData(k)));
    countryKeys.forEach((key, idx) => {
      const res = settledCountries[idx];
      if (res.status === 'fulfilled' && res.value) {
        countriesMap.set(key, res.value);
      } else {
        console.warn(`[Init] Country data for "${key}" will be loaded on demand:`, res.reason);
      }
    });

    // 4. Initialize Leaflet Map centered on Earth
    MapModule.initMap('map', worldData.entity.coords, worldData.entity.zoom, () => {
      if (currentScope === 'world') {
        flyToCountry('greece');
      }
    });

    // Register Map Click / Right Click Handler to add Time Capsule Spots!
    MapModule.setOnMapRightClickHandler((lat, lng) => {
      TimeMachine.openCreateSpotModal(lat, lng);
    });

    // 5. Set initial base layer UI state (Dark Voyager default)
    UIModule.updateBaseLayerUI('dark');

    // 6. Initial Time Slider setup
    TimeMachine.updateTimeSliderUI();

    // 7. Initial Dossier display: Planet Earth
    flyToWorld();
  } catch (error) {
    console.error('Failed to initialize EarthTimes:', error);
    const container = document.getElementById('tabContent');
    if (container) {
      container.innerHTML = `
        <div class="p-4 bg-rose-950/60 border border-rose-600 rounded-xl text-rose-200 text-sm shadow-xl">
          <div class="font-bold text-base mb-1.5 flex items-center gap-2 text-rose-400">
            <i class="fa-solid fa-triangle-exclamation"></i> Σφάλμα: ${error.name || 'Error'}: ${error.message}
          </div>
          <pre class="text-xs text-rose-300 mt-2 font-mono whitespace-pre-wrap bg-slate-950/80 p-3 rounded-lg border border-rose-900/50 overflow-x-auto">${error.stack || String(error)}</pre>
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
