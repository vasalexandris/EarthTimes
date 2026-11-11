/**
 * App Module (Main Orchestrator)
 * Coordinates Landing Page, World & Regional Data, Greece (including Kozani!),
 * USA, Leaflet Map, Base Layers, UI Dossier, and Time Machine.
 */

import { loadWorldData, loadCountryData, loadStateData } from './data-service.js';
import * as MapModule from './map.js';
import * as UIModule from './ui.js';
import * as TimeMachine from './time-machine.js';
import * as NavigatorModule from './navigator.js';
import { US_STATES, CITY_TO_STATE } from './states-data.js';

// Application State
let worldData = null;
const countriesMap = new Map(); // Dynamic multi-country registry
const statesMap = new Map(); // Dynamic multi-state registry (51 states)
let massachusettsData = null;
let currentStateId = 'massachusetts';

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
  for (const sData of statesMap.values()) {
    if (sData && sData.cities) {
      sData.cities.forEach(sc => {
        if (!list.some(c => c.id === sc.id)) list.push(sc);
      });
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
  if (currentScope === 'state') {
    const sData = statesMap.get(currentStateId) || massachusettsData;
    return sData ? sData.state : null;
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
  // Always render all temporal spots and user-created spots across every map and scope!
  const spots = TimeMachine.getFilteredSpots(null);
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
  NavigatorModule.updateNavigatorBtnLabel('world');

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
  NavigatorModule.updateNavigatorBtnLabel(`country:${country.id}`, `${country.name}`);

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

export async function flyToState(stateId = 'massachusetts') {
  currentScope = 'state';
  currentCountryId = 'usa';
  currentStateId = stateId;
  currentCityId = null;

  let sData = statesMap.get(stateId);
  if (!sData) {
    try {
      sData = await loadStateData(stateId);
      statesMap.set(stateId, sData);
      if (stateId === 'massachusetts') massachusettsData = sData;
    } catch (err) {
      console.warn(`[App] Error loading state data for ${stateId}:`, err);
      if (massachusettsData) sData = massachusettsData;
    }
  }

  if (!sData || !sData.state) return;
  const state = sData.state;

  UIModule.updateStatusBadge(`Πτήση: Πολιτεία ${state.name}`);
  UIModule.updateBreadcrumbs('state', state);
  UIModule.updateJumpSelect(`state:${state.id}`);
  NavigatorModule.updateNavigatorBtnLabel(`state:${state.id}`, `🏛️ ${state.name} (ΗΠΑ)`);

  MapModule.flyToCoords(state.coords, state.zoom, 1.5);
  MapModule.toggleStateHighlight(true);
  MapModule.renderCityPins(sData.cities || [], currentScope, currentCityId, flyToCity);
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

  // If not yet loaded, resolve state or country dynamically
  if (!city) {
    // 1. Check if city belongs to a US state
    const targetState = CITY_TO_STATE && CITY_TO_STATE[cityId];
    if (targetState) {
      try {
        let sData = statesMap.get(targetState);
        if (!sData) {
          sData = await loadStateData(targetState);
          statesMap.set(targetState, sData);
          if (targetState === 'massachusetts') massachusettsData = sData;
        }
        city = findCityById(cityId);
      } catch (e) {
        console.warn(`Error loading state ${targetState} for city ${cityId}`, e);
      }
    }

    // 2. Check if city belongs to a country
    if (!city) {
    const cityToCountry = {
      'paris': 'france', 'marseille': 'france', 'lyon': 'france',
      'rome': 'italy', 'florence': 'italy', 'milan': 'italy', 'venice': 'italy',
      'london': 'uk', 'edinburgh': 'uk', 'manchester': 'uk',
      'berlin': 'germany', 'munich': 'germany', 'hamburg': 'germany',
      'madrid': 'spain', 'barcelona': 'spain', 'seville': 'spain',
      'vienna': 'austria', 'salzburg': 'austria',
      'amsterdam': 'netherlands', 'rotterdam': 'netherlands',
      'prague': 'czech', 'brno': 'czech',
      'brussels': 'belgium', 'bruges': 'belgium',
      'lisbon': 'portugal', 'porto': 'portugal',
      'dublin': 'ireland', 'galway': 'ireland',
      'budapest': 'hungary', 'debrecen': 'hungary',
      'bern': 'switzerland', 'zurich': 'switzerland', 'geneva': 'switzerland',
      'warsaw': 'poland', 'krakow': 'poland', 'gdansk': 'poland',
      'stockholm': 'sweden', 'gothenburg': 'sweden',
      'oslo': 'norway', 'bergen': 'norway',
      'copenhagen': 'denmark', 'aarhus': 'denmark',
      'helsinki': 'finland', 'tampere': 'finland',
      'bucharest': 'romania', 'cluj-napoca': 'romania', 'brasov': 'romania',
      'sofia': 'bulgaria', 'plovdiv': 'bulgaria',
      'belgrade': 'serbia', 'novi-sad': 'serbia',
      'zagreb': 'croatia', 'dubrovnik': 'croatia', 'split': 'croatia',
      'nicosia': 'cyprus', 'limassol': 'cyprus', 'paphos': 'cyprus',
      'ankara': 'turkey', 'istanbul': 'turkey', 'izmir': 'turkey',
      'tirana': 'albania', 'durres': 'albania', 'vlore': 'albania',
      'skopje': 'north-macedonia', 'ohrid': 'north-macedonia', 'bitola': 'north-macedonia',
      'bratislava': 'slovakia', 'kosice': 'slovakia',
      'ljubljana': 'slovenia', 'maribor': 'slovenia', 'piran': 'slovenia',
      'sarajevo': 'bosnia', 'mostar': 'bosnia', 'banja-luka': 'bosnia',
      'podgorica': 'montenegro', 'kotor': 'montenegro', 'budva': 'montenegro',
      'tallinn': 'estonia', 'tartu': 'estonia',
      'riga': 'latvia', 'daugavpils': 'latvia',
      'vilnius': 'lithuania', 'kaunas': 'lithuania',
      'reykjavik': 'iceland', 'akureyri': 'iceland',
      'luxembourg-city': 'luxembourg',
      'valletta': 'malta', 'mdina': 'malta',
      'ottawa': 'canada', 'toronto': 'canada', 'montreal': 'canada', 'vancouver': 'canada',
      'mexico-city': 'mexico', 'guadalajara': 'mexico', 'monterrey': 'mexico', 'cancun': 'mexico',
      'brasilia': 'brazil', 'rio-de-janeiro': 'brazil', 'sao-paulo': 'brazil', 'salvador': 'brazil',
      'buenos-aires': 'argentina', 'cordoba': 'argentina', 'rosario': 'argentina',
      'santiago': 'chile', 'valparaiso': 'chile',
      'lima': 'peru', 'cusco': 'peru', 'arequipa': 'peru',
      'bogota': 'colombia', 'medellin': 'colombia', 'cartagena': 'colombia',
      'caracas': 'venezuela', 'maracaibo': 'venezuela', 'valencia': 'venezuela',
      'quito': 'ecuador', 'guayaquil': 'ecuador', 'cuenca': 'ecuador',
      'la-paz': 'bolivia', 'sucre': 'bolivia', 'santa-cruz': 'bolivia',
      'asuncion': 'paraguay', 'ciudad-del-este': 'paraguay',
      'montevideo': 'uruguay', 'punta-del-este': 'uruguay',
      'georgetown': 'guyana', 'linden': 'guyana',
      'paramaribo': 'suriname', 'lelydorp': 'suriname',
      'cairo': 'egypt', 'alexandria': 'egypt', 'luxor': 'egypt', 'giza': 'egypt',
      'rabat': 'morocco', 'casablanca': 'morocco', 'marrakesh': 'morocco', 'fes': 'morocco',
      'tunis': 'tunisia', 'sfax': 'tunisia', 'sousse': 'tunisia',
      'algiers': 'algeria', 'oran': 'algeria', 'constantine': 'algeria',
      'tripoli': 'libya', 'benghazi': 'libya',
      'abuja': 'nigeria', 'lagos': 'nigeria', 'kano': 'nigeria',
      'accra': 'ghana', 'kumasi': 'ghana',
      'dakar': 'senegal', 'saint-louis': 'senegal',
      'yamoussoukro': 'ivory-coast', 'abidjan': 'ivory-coast',
      'yaounde': 'cameroon', 'douala': 'cameroon',
      'praia': 'cape-verde', 'mindelo': 'cape-verde',
      'nouakchott': 'mauritania', 'nouadhibou': 'mauritania',
      'cape-town': 'south-africa', 'johannesburg': 'south-africa', 'pretoria': 'south-africa', 'durban': 'south-africa',
      'nairobi': 'kenya', 'mombasa': 'kenya',
      'dodoma': 'tanzania', 'dar-es-salaam': 'tanzania', 'zanzibar': 'tanzania',
      'addis-ababa': 'ethiopia', 'lalibela': 'ethiopia',
      'antananarivo': 'madagascar', 'toamasina': 'madagascar',
      'windhoek': 'namibia', 'swakopmund': 'namibia',
      'gaborone': 'botswana', 'maun': 'botswana',
      'harare': 'zimbabwe', 'victoria-falls': 'zimbabwe',
      'kigali': 'rwanda', 'gisenyi': 'rwanda',
      'kampala': 'uganda', 'entebbe': 'uganda',
      'port-louis': 'mauritius', 'grand-baie': 'mauritius',
      'kinshasa': 'dr-congo', 'goma': 'dr-congo',
      'luanda': 'angola', 'benguela': 'angola',
      'maputo': 'mozambique', 'beira': 'mozambique',
      'beijing': 'china', 'shanghai': 'china', 'hong-kong': 'china', 'xian': 'china', 'chengdu': 'china',
      'guangzhou': 'china', 'hangzhou': 'china', 'chongqing': 'china', 'suzhou': 'china', 'guilin': 'china',
      'sydney': 'australia', 'melbourne': 'australia', 'brisbane': 'australia',
      'perth': 'australia', 'adelaide': 'australia', 'canberra': 'australia',
      'auckland': 'new-zealand', 'wellington': 'new-zealand', 'christchurch': 'new-zealand', 'queenstown': 'new-zealand',
      'port-moresby': 'papua-new-guinea', 'lae': 'papua-new-guinea',
      'suva': 'fiji', 'nadi': 'fiji',
      'apia': 'samoa',
      'port-vila': 'vanuatu',
      'honiara': 'solomon-islands',
      'palikir': 'micronesia',
      'nukualofa': 'tonga',
      'south-tarawa': 'kiribati',
      'ngerulmud': 'palau', 'koror': 'palau',
      'majuro': 'marshall-islands',
      'yaren': 'nauru',
      'funafuti': 'tuvalu',
      'tokyo': 'japan', 'kyoto': 'japan', 'osaka': 'japan', 'hiroshima': 'japan', 'sapporo': 'japan', 'fukuoka': 'japan',
      'seoul': 'south-korea', 'busan': 'south-korea', 'incheon': 'south-korea',
      'pyongyang': 'north-korea',
      'ulaanbaatar': 'mongolia',
      'taipei': 'taiwan', 'kaohsiung': 'taiwan',
      'hanoi': 'vietnam', 'ho-chi-minh-city': 'vietnam', 'da-nang': 'vietnam',
      'bangkok': 'thailand', 'chiang-mai': 'thailand', 'phuket': 'thailand',
      'jakarta': 'indonesia', 'bali-denpasar': 'indonesia', 'surabaya': 'indonesia',
      'kuala-lumpur': 'malaysia', 'george-town': 'malaysia',
      'singapore': 'singapore',
      'manila': 'philippines', 'cebu-city': 'philippines',
      'phnom-penh': 'cambodia', 'siem-reap': 'cambodia',
      'vientiane': 'laos', 'luang-prabang': 'laos',
      'yangon': 'myanmar', 'mandalay': 'myanmar',
      'bandar-seri-begawan': 'brunei',
      'dili': 'east-timor',
      'andorra-la-vella': 'andorra',
      'vaduz': 'liechtenstein',
      'monaco': 'monaco',
      'vatican-city': 'vatican',
      'san-marino': 'san-marino',
      'moscow': 'russia', 'saint-petersburg': 'russia', 'kazan': 'russia',
      'kyiv': 'ukraine', 'lviv': 'ukraine', 'odesa': 'ukraine',
      'minsk': 'belarus', 'brest': 'belarus',
      'chisinau': 'moldova', 'balti': 'moldova',
      'st-johns': 'antigua-and-barbuda',
      'nassau': 'bahamas',
      'bridgetown': 'barbados',
      'belize-city': 'belize', 'san-ignacio': 'belize',
      'san-jose': 'costa-rica', 'alajuela': 'costa-rica', 'puerto-limon': 'costa-rica',
      'havana': 'cuba', 'santiago-de-cuba': 'cuba', 'trinidad': 'cuba',
      'roseau': 'dominica',
      'santo-domingo': 'dominican-republic', 'santiago-de-los-caballeros': 'dominican-republic', 'punta-cana': 'dominican-republic',
      'san-salvador': 'el-salvador', 'santa-ana': 'el-salvador',
      'st-georges': 'grenada',
      'guatemala-city': 'guatemala', 'antigua-guatemala': 'guatemala',
      'port-au-prince': 'haiti', 'cap-haitien': 'haiti',
      'basseterre': 'saint-kitts-and-nevis',
      'castries': 'saint-lucia',
      'kingstown': 'saint-vincent-and-the-grenadines',
      'port-of-spain': 'trinidad-and-tobago', 'san-fernando': 'trinidad-and-tobago'
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
  }

  if (!city) return;

  currentScope = 'city';
  currentCityId = cityId;

  // Determine parent country or state
  let parent = null;
  let activeCities = [];

  for (const [cId, cData] of countriesMap.entries()) {
    if (cData && cData.cities && cData.cities.some(c => c.id === cityId)) {
      currentCountryId = cId;
      parent = cData.country;
      activeCities = cData.cities;
      break;
    }
  }
  if (!parent) {
    for (const [sId, sData] of statesMap.entries()) {
      if (sData && sData.cities && sData.cities.some(c => c.id === cityId)) {
        currentCountryId = 'usa';
        currentStateId = sId;
        parent = sData.state;
        activeCities = sData.cities;
        break;
      }
    }
  }
  if (!parent && massachusettsData && massachusettsData.cities.some(c => c.id === cityId)) {
    currentCountryId = 'usa';
    currentStateId = 'massachusetts';
    parent = massachusettsData.state;
    activeCities = massachusettsData.cities;
  }

  UIModule.updateStatusBadge(`Πτήση: ${city.name} (${city.englishName})`);
  UIModule.updateBreadcrumbs('city', parent, city);
  UIModule.updateJumpSelect(`city:${city.id}`);
  NavigatorModule.updateNavigatorBtnLabel(`city:${city.id}`, `📍 ${city.name}`);

  MapModule.flyToCoords(city.coords, city.zoom, 1.4);
  MapModule.toggleStateHighlight(false);

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

export function toggleMapsDropdown(e) {
  if (e) e.stopPropagation();
  const mapsMenu = document.getElementById('mapsDropdownMenu');
  const spotsMenu = document.getElementById('spotsDropdownMenu');
  if (spotsMenu) spotsMenu.classList.add('hidden');
  if (mapsMenu) mapsMenu.classList.toggle('hidden');
}

export function selectMapLayer(layerKey) {
  try {
    setMapLayer(layerKey);
  } finally {
    const mapsMenu = document.getElementById('mapsDropdownMenu');
    if (mapsMenu) mapsMenu.classList.add('hidden');
  }
}

export function toggleSpotsDropdown(e) {
  if (e) e.stopPropagation();
  const spotsMenu = document.getElementById('spotsDropdownMenu');
  const mapsMenu = document.getElementById('mapsDropdownMenu');
  if (mapsMenu) mapsMenu.classList.add('hidden');
  if (spotsMenu) spotsMenu.classList.toggle('hidden');
}

export function selectPoiCategory(category) {
  try {
    togglePoiCategory(category);
  } finally {
    const spotsMenu = document.getElementById('spotsDropdownMenu');
    if (spotsMenu) spotsMenu.classList.add('hidden');
  }
}

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
  const mapsMenu = document.getElementById('mapsDropdownMenu');
  const spotsMenu = document.getElementById('spotsDropdownMenu');
  const mapsBtn = document.getElementById('mapsDropdownBtn');
  const spotsBtn = document.getElementById('spotsDropdownBtn');
  const cityVideoContainer = document.getElementById('cityVideoContainer');
  const cityVideoDropdown = document.getElementById('cityVideoDropdown');

  if (mapsMenu && !mapsMenu.contains(e.target) && mapsBtn && !mapsBtn.contains(e.target)) {
    mapsMenu.classList.add('hidden');
  }
  if (spotsMenu && !spotsMenu.contains(e.target) && spotsBtn && !spotsBtn.contains(e.target)) {
    spotsMenu.classList.add('hidden');
  }
  if (cityVideoDropdown && !cityVideoDropdown.contains(e.target) && cityVideoContainer && !cityVideoContainer.contains(e.target)) {
    cityVideoDropdown.classList.add('hidden');
  }
});

// In-Map Wikipedia Reader Navigation Listener (Keeps reading in-app)
window.addEventListener('message', (e) => {
  if (e.data?.type === 'EARTH_TIMES_WIKI_NAV') {
    UIModule.openMapWikiReader(e.data.title, e.data.lang || 'el');
  } else if (e.data?.type === 'EARTH_TIMES_CLOSE_WIKI') {
    UIModule.closeMapWikiOverlay();
  }
});

// Global Window Bindings for UI & HTML event attributes
window.openExplorer = openExplorer;
window.openLandingPage = openLandingPage;
window.onExplorerOpened = () => {
  MapModule.invalidateMapSize();
  requestAnimationFrame(() => MapModule.invalidateMapSize());
};
window.setMapLayer = setMapLayer;
window.toggleMapsDropdown = toggleMapsDropdown;
window.selectMapLayer = selectMapLayer;
window.toggleSpotsDropdown = toggleSpotsDropdown;
window.selectPoiCategory = selectPoiCategory;
window.flyToWorld = flyToWorld;
window.flyToCountry = flyToCountry;
window.flyToState = flyToState;
window.flyToCity = flyToCity;
window.handleJumpChange = handleJumpChange;
window.navigateTour = navigateTour;
window.switchTab = switchTab;
window.togglePoiCategory = togglePoiCategory;
window.narrateBrief = narrateBrief;
window.flyToCoordinates = MapModule.flyToCoordinates;

// Video & In-Map Wikipedia window bindings
window.openCityVideo = UIModule.openCityVideo;
window.openLiveCamModal = UIModule.openLiveCamModal;
window.switchCityVideoType = UIModule.switchCityVideoType;
window.closeMapVideoOverlay = UIModule.closeMapVideoOverlay;
window.toggleCityVideoDropdown = UIModule.toggleCityVideoDropdown;
window.selectCityVideoTour = UIModule.selectCityVideoTour;
window.renderCityVideoDropdownMenu = UIModule.renderCityVideoDropdownMenu;

window.openMapWikiReader = UIModule.openMapWikiReader;
window.closeMapWikiOverlay = UIModule.closeMapWikiOverlay;
window.toggleWikiReaderLanguage = UIModule.toggleWikiReaderLanguage;
window.openDeepDiveWikiReader = UIModule.openDeepDiveWikiReader;
window.translateWikiReaderInPlace = UIModule.translateWikiReaderInPlace;
window.openMapStreetView = UIModule.openMapStreetView;
window.closeMapStreetViewOverlay = UIModule.closeMapStreetViewOverlay;

// Google Street View Integration (In-Map Overlay)
export function openCurrentStreetView() {
  const entity = getCurrentEntity();
  let coords = null;
  let title = '';
  if (entity && entity.coords && Array.isArray(entity.coords)) {
    coords = entity.coords;
    title = entity.name ? `Street View: ${entity.name}` : '';
  } else if (MapModule.getMapCenter) {
    const center = MapModule.getMapCenter();
    if (center) coords = [center.lat, center.lng];
  }

  if (coords && coords.length >= 2) {
    UIModule.openMapStreetView(coords[0], coords[1], title);
  }
}
window.openCurrentStreetView = openCurrentStreetView;

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

    // Initialize Hierarchical Continent Navigator
    NavigatorModule.initContinentNavigator();

    // 2. Load World, Massachusetts, and Time Machine core data
    const [wData, maData, _tm] = await Promise.all([
      loadWorldData(),
      loadStateData('massachusetts'),
      TimeMachine.initTimeMachine()
    ]);

    worldData = wData;
    massachusettsData = maData;
    statesMap.set('massachusetts', maData);

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
      'hungary',
      'switzerland',
      'poland',
      'sweden',
      'norway',
      'denmark',
      'finland',
      'romania',
      'bulgaria',
      'serbia',
      'croatia',
      'cyprus',
      'turkey',
      'albania',
      'north-macedonia',
      'slovakia',
      'slovenia',
      'bosnia',
      'montenegro',
      'estonia',
      'latvia',
      'lithuania',
      'iceland',
      'luxembourg',
      'malta',
      'canada',
      'mexico',
      'brazil',
      'argentina',
      'chile',
      'peru',
      'colombia',
      'china',
      'australia',
      'new-zealand',
      'japan',
      'south-korea',
      'taiwan',
      'vietnam',
      'thailand',
      'indonesia',
      'malaysia',
      'singapore',
      'philippines',
      'russia',
      'ukraine',
      'cuba',
      'costa-rica',
      'dominican-republic',
      'bahamas',
      'guatemala'
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
