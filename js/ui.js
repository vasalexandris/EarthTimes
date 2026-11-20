/**
 * UI Module
 * Handles DOM rendering for Dossier, Breadcrumbs, Tabs, Flight Status, Filters,
 * Base Map Layer selector, Date display, Video Overlay, and Deep Dive views.
 */

import { getCityVideo, getAvailableVideoTypes, getAvailableCityTours, CITY_VIDEOS, findPoiLiveCam, getPoiVideoInfo, getGastroRecipeVideo, getSocialMediaVideos, SOCIAL_MEDIA_REGISTRY, GASTRO_RECIPE_VIDEOS } from './video-service.js?v=20261120_new_cities_25_v23';
import { getDeepDiveData } from './deep-dive.js?v=20261117_video_iframe_fix';
import { fetchWikiArticle, fetchWikiArticleHtml, cleanWikiTitle } from './wiki-service.js?v=20261118_gastro_overhaul_v8';
import { calculateSubsolarPoint } from './solar-terminator.js?v=20261117_video_iframe_fix';
import { CITY_TO_STATE } from './states-data.js?v=20261117_video_iframe_fix';
import { CITY_TO_COUNTRY } from './navigator.js?v=20261120_new_cities_25_v23';
import { renderGeographyTabHtml, mountLiveWeatherData } from './geo-service.js?v=20261119_geo_v2';
import { renderHistoryTabHtml } from './history-service.js?v=20261119_hist_v3';
import { renderCultureTabHtml } from './culture-service.js?v=20261119_cult_v1';
import { renderGastronomyTabHtml } from './gastro-service.js?v=20261120_gastro_clean_v5';

let currentActiveVideoCityId = null;
let currentActiveVideoType = 'drone';
let isNarrating = false;

let currentOverlayMode = 'player';
let currentOverlayQuery = '';
let currentOverlayYoutubeId = '';
let currentOverlayTitle = '';
let currentOverlayStartSec = 0;
let currentOverlayShortsId = '';

let currentWikiTitle = '';
let currentWikiLang = 'el';
let currentWikiFallbackEn = '';
let activeDeepDiveData = null;

function escapeStr(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/\n/g, ' ');
}

export function syncMapFloatingControlsVisibility() {
  const container = document.getElementById('addSpotFloatingContainer');
  if (!container) return;

  const videoOverlay = document.getElementById('mapVideoOverlay');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');

  const isVideoOpen = videoOverlay && !videoOverlay.classList.contains('hidden');
  const isDeepDiveOpen = deepDiveOverlay && !deepDiveOverlay.classList.contains('hidden');
  const isWikiOpen = wikiOverlay && !wikiOverlay.classList.contains('hidden');
  const isStreetViewOpen = streetViewOverlay && !streetViewOverlay.classList.contains('hidden');

  if (isVideoOpen || isDeepDiveOpen || isWikiOpen || isStreetViewOpen) {
    container.classList.add('hidden');
  } else {
    container.classList.remove('hidden');
  }
}

export function isMapVideoOverlayOpen() {
  const overlay = document.getElementById('mapVideoOverlay');
  return !!(overlay && !overlay.classList.contains('hidden'));
}

export function isMapWikiOverlayOpen() {
  const overlay = document.getElementById('mapWikiOverlay');
  return !!(overlay && !overlay.classList.contains('hidden'));
}

export function getCurrentActiveVideoType() {
  return currentActiveVideoType || 'drone';
}

export function getCurrentActiveVideoCityId() {
  return currentActiveVideoCityId;
}

/**
 * Multilingual Search Localization Engine
 * Provides authentic native keyword translations for US states, European countries,
 * and international destinations to ensure Bing, YouTube, and Google produce
 * authentic, high-quality local videos and recipes (e.g. Massachusetts traditional recipes
 * instead of Greek supermarket misspellings like "Μασούτης").
 */
export const GREEK_TO_NATIVE_NAMES = {
  // US States
  'μασαχουσέτη': 'Massachusetts',
  'μασαχουσέτης': 'Massachusetts',
  'καλιφόρνια': 'California',
  'νέα υόρκη': 'New York',
  'τεξας': 'Texas',
  'τέξας': 'Texas',
  'φλόριντα': 'Florida',
  'ιλινόι': 'Illinois',
  'ιλινόις': 'Illinois',
  'πενσυλβάνια': 'Pennsylvania',
  'οχάιο': 'Ohio',
  'τζόρτζια': 'Georgia',
  'βόρεια καρολίνα': 'North Carolina',
  'νότια καρολίνα': 'South Carolina',
  'μιτσιγκαν': 'Michigan',
  'μίτσιγκαν': 'Michigan',
  'νιου τζέρσεϊ': 'New Jersey',
  'βιρτζίνια': 'Virginia',
  'ουάσινγκτον': 'Washington',
  'αριζόνα': 'Arizona',
  'τενεσί': 'Tennessee',
  'ιντιάνα': 'Indiana',
  'μισούρι': 'Missouri',
  'μέριλαντ': 'Maryland',
  'ουισκόνσιν': 'Wisconsin',
  'κολοράντο': 'Colorado',
  'μινεσότα': 'Minnesota',
  'νότια ντακότα': 'South Dakota',
  'βόρεια ντακότα': 'North Dakota',
  'αλαμπάμα': 'Alabama',
  'λουιζιάνα': 'Louisiana',
  'λούισιανα': 'Louisiana',
  'κεντάκι': 'Kentucky',
  'όρεγκον': 'Oregon',
  'οκλαχόμα': 'Oklahoma',
  'κονέκτικατ': 'Connecticut',
  'γιούτα': 'Utah',
  'αϊόβα': 'Iowa',
  'νέβαδα': 'Nevada',
  'νεβάδα': 'Nevada',
  'άρκανσο': 'Arkansas',
  'μισισίπι': 'Mississippi',
  'κάνσας': 'Kansas',
  'νέο μεξικό': 'New Mexico',
  'νεμπράσκα': 'Nebraska',
  'αϊντάχο': 'Idaho',
  'δυτική βιρτζίνια': 'West Virginia',
  'χαβάη': 'Hawaii',
  'νιου χάμσαϊρ': 'New Hampshire',
  'μέιν': 'Maine',
  'μοντάνα': 'Montana',
  'ρόουντ άιλαντ': 'Rhode Island',
  'ντελαγουέρ': 'Delaware',
  'βερμόντ': 'Vermont',
  'γουαϊόμινγκ': 'Wyoming',
  'αλάσκα': 'Alaska',

  // Major US Cities
  'βοστώνη': 'Boston',
  'βοστόνη': 'Boston',
  'κέιμπριτζ': 'Cambridge',
  'γουόρτσεστερ': 'Worcester',
  'σπρίνγκφιλντ': 'Springfield',
  'λοουελ': 'Lowell',
  'σάλεμ': 'Salem',
  'γκλόστερ': 'Gloucester',
  'πλίμουθ': 'Plymouth',
  'πλύμουθ': 'Plymouth',
  'λος άντζελες': 'Los Angeles',
  'σικάγο': 'Chicago',
  'χιούστον': 'Houston',
  'φοίνιξ': 'Phoenix',
  'φιλαδέλφεια': 'Philadelphia',
  'σαν αντόνιο': 'San Antonio',
  'σαν ντιέγκο': 'San Diego',
  'ντάλας': 'Dallas',
  'σαν χοσέ': 'San Jose',
  'όστιν': 'Austin',
  'σαν φρανσίσκο': 'San Francisco',
  'σιατλ': 'Seattle',
  'σιάτλ': 'Seattle',
  'ντένβερ': 'Denver',
  'νάσβιλ': 'Nashville',
  'λας βέγκας': 'Las Vegas',
  'μαϊάμι': 'Miami',
  'ατλάντα': 'Atlanta',
  'νέα ορλεάνη': 'New Orleans',
  'χονολουλού': 'Honolulu',
  'πόρτλαντ': 'Portland',

  // European Cities & Countries
  'παρίσι': 'Paris',
  'γαλλία': 'France',
  'λυών': 'Lyon',
  'μασσαλία': 'Marseille',
  'νίκαια': 'Nice',
  'μπορντό': 'Bordeaux',
  'στρασβούργο': 'Strasbourg',
  'τουλούζη': 'Toulouse',
  'ρώμη': 'Rome',
  'ιταλία': 'Italy',
  'μιλάνο': 'Milan',
  'φλωρεντία': 'Florence',
  'βενετία': 'Venice',
  'νάπολη': 'Naples',
  'τορίνο': 'Turin',
  'μπολόνια': 'Bologna',
  'παλέρμο': 'Palermo',
  'μαδρίτη': 'Madrid',
  'ισπανία': 'Spain',
  'βαρκελώνη': 'Barcelona',
  'σεβίλλη': 'Seville',
  'βαλένθια': 'Valencia',
  'γρανάδα': 'Granada',
  'μπιλμπάο': 'Bilbao',
  'λονδίνο': 'London',
  'αγγλία': 'England',
  'ηνωμένο βασίλειο': 'United Kingdom',
  'εδιμβούργο': 'Edinburgh',
  'μαντσεστερ': 'Manchester',
  'λιβερπουλ': 'Liverpool',
  'βερολίνο': 'Berlin',
  'γερμανία': 'Germany',
  'μόναχο': 'Munich',
  'αμβούργο': 'Hamburg',
  'φρανκφούρτη': 'Frankfurt',
  'κολωνία': 'Cologne',
  'βιέννη': 'Vienna',
  'αυστρία': 'Austria',
  'σαλτσμπουργκ': 'Salzburg',
  'άμστερνταμ': 'Amsterdam',
  'ολλανδία': 'Netherlands',
  'ρότερνταμ': 'Rotterdam',
  'βρυξέλλες': 'Brussels',
  'βέλγιο': 'Belgium',
  'μπριζ': 'Bruges',
  'ζυρίχη': 'Zurich',
  'ελβετία': 'Switzerland',
  'γενεύη': 'Geneva',
  'λισαβόνα': 'Lisbon',
  'πορτογαλία': 'Portugal',
  'πόρτο': 'Porto',
  'κωνσταντινούπολη': 'Istanbul',
  'τουρκία': 'Turkey',
  'άγκυρα': 'Ankara',
  'σμύρνη': 'Izmir',
  'κοπεγχάγη': 'Copenhagen',
  'δανία': 'Denmark',
  'στοκχόλμη': 'Stockholm',
  'σουηδία': 'Sweden',
  'όσλο': 'Oslo',
  'νορβηγία': 'Norway',
  'ελσίνκι': 'Helsinki',
  'φινλανδία': 'Finland',
  'πράγα': 'Prague',
  'τσεχία': 'Czech Republic',
  'βαρσοβία': 'Warsaw',
  'πολωνία': 'Poland',
  'βουδαπέστη': 'Budapest',
  'ουγγαρία': 'Hungary',
  'βουκουρέστι': 'Bucharest',
  'ρουμανία': 'Romania',
  'μπρασόφ': 'Brasov',

  // Asia / Americas / World
  'τόκιο': 'Tokyo',
  'ιαπωνία': 'Japan',
  'κιότο': 'Kyoto',
  'οσάκα': 'Osaka',
  'πεκίνο': 'Beijing',
  'κίνα': 'China',
  'σαγκάη': 'Shanghai',
  'σεούλ': 'Seoul',
  'νότια κορέα': 'South Korea',
  'μπανγκόκ': 'Bangkok',
  'ταϊλάνδη': 'Thailand',
  'σιγκαπούρη': 'Singapore',
  'ντουμπάι': 'Dubai',
  'ηαε': 'UAE',
  'κάιρο': 'Cairo',
  'αίγυπτος': 'Egypt',
  'σιδνεϊ': 'Sydney',
  'αυστραλία': 'Australia',
  'μελβούρνη': 'Melbourne',
  'τορόντο': 'Toronto',
  'καναδάς': 'Canada',
  'βανκούβερ': 'Vancouver',
  'μοντρεαλ': 'Montreal',
  'ρίο ντε τζανέιρο': 'Rio de Janeiro',
  'βραζιλία': 'Brazil',
  'μπουένος άιρες': 'Buenos Aires',
  'αργεντινή': 'Argentina'
};

export function detectEntityLanguage(cityId = '', cityName = '', entity = null) {
  const normId = (cityId || entity?.id || '').toLowerCase().trim();
  const normName = (cityName || entity?.name || '').toLowerCase().trim();

  // 1. Direct Greece / Cyprus checks
  if (normId === 'greece' || normId === 'cyprus' || normId === 'gr' || normId === 'cy' ||
      normName === 'ελλάδα' || normName === 'κύπρος' || normName.includes('ελλάδ') || normName.includes('κύπρ')) {
    return 'el';
  }

  const countryId = CITY_TO_COUNTRY[normId] || (entity?.country ? entity.country.toLowerCase() : '');
  if (countryId === 'greece' || countryId === 'cyprus' || countryId === 'gr' || countryId === 'cy') {
    return 'el';
  }

  const greekCities = [
    'athens', 'thessaloniki', 'patras', 'heraklion', 'chania', 'larissa', 'volos',
    'ioannina', 'trikala', 'chalkida', 'rhodes', 'corfu', 'kavala', 'kalamata',
    'serres', 'alexandroupoli', 'xanthi', 'komotini', 'kozani', 'kastoria',
    'veria', 'edessa', 'katerini', 'rethymno', 'agios-nikolaos', 'mytilene',
    'chios', 'samos', 'syros', 'mykonos', 'santorini', 'naxos', 'paros',
    'sparta', 'nafplio', 'tripoli', 'lamia', 'amfissa', 'karpenisi', 'mesolonghi',
    'artas', 'preveza', 'igoumenitsa', 'grevena', 'florina', 'kilkis', 'polygyros',
    'drama', 'lefkada', 'kefalonia', 'zakynthos', 'nicosia', 'limassol', 'larnaca', 'paphos'
  ];
  if (greekCities.includes(normId)) {
    return 'el';
  }

  // 2. US States / Cities
  if (CITY_TO_STATE[normId] || normId === 'massachusetts' || normId === 'united-states' || countryId === 'united-states' || countryId === 'us' || countryId === 'usa' || entity?.type === 'state') {
    return 'en';
  }

  // 3. Specific language mapping
  if (countryId === 'france' || normId === 'france') return 'fr';
  if (countryId === 'italy' || normId === 'italy') return 'it';
  if (countryId === 'spain' || normId === 'spain') return 'es';
  if (countryId === 'germany' || countryId === 'austria' || normId === 'germany' || normId === 'austria') return 'de';
  if (countryId === 'portugal' || countryId === 'brazil' || normId === 'portugal') return 'pt';
  if (countryId === 'turkey' || normId === 'turkey') return 'tr';

  // 4. If name is in GREEK_TO_NATIVE_NAMES and it's foreign, it's non-Greek
  if (GREEK_TO_NATIVE_NAMES[normName]) {
    const native = GREEK_TO_NATIVE_NAMES[normName];
    if (['Paris', 'Nice', 'Lyon', 'Marseille', 'Bordeaux'].includes(native)) return 'fr';
    if (['Rome', 'Milan', 'Florence', 'Venice', 'Naples'].includes(native)) return 'it';
    if (['Madrid', 'Barcelona', 'Seville', 'Valencia'].includes(native)) return 'es';
    if (['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Vienna'].includes(native)) return 'de';
    if (['Istanbul', 'Ankara', 'Izmir'].includes(native)) return 'tr';
    return 'en';
  }

  // Default international language is English
  return 'en';
}

export function getNativeNameForEntity(nameOrId = '', entity = null) {
  if (!nameOrId && entity) {
    nameOrId = entity.englishName || entity.id || entity.name || '';
  }
  if (!nameOrId) return '';

  let str = String(nameOrId).trim();

  // 1. If Latin text with Greek in parentheses: "Freedom Trail (Μονοπάτι Ελευθερίας)" -> "Freedom Trail"
  const greekParenMatch = str.match(/^([A-Za-z0-9\s,'\.\-]+?)\s*\([\u0370-\u03FF\s,'\.\-]+\)$/);
  if (greekParenMatch && greekParenMatch[1].trim().length > 1) {
    return greekParenMatch[1].trim();
  }

  // 2. If Greek text with Latin in parentheses: "Όρη Μπέρκσιρ (Berkshires)" -> "Berkshires"
  const parenMatch = str.match(/\(([A-Za-z0-9\s,'\.\-]+)\)/);
  if (parenMatch && parenMatch[1].trim().length > 1) {
    return parenMatch[1].trim();
  }

  const norm = str.toLowerCase();

  // 3. Direct dictionary lookup
  if (GREEK_TO_NATIVE_NAMES[norm]) {
    return GREEK_TO_NATIVE_NAMES[norm];
  }

  // Clean entity englishName if available
  if (entity && entity.englishName) {
    const cleanEn = entity.englishName
      .replace(/^(State of|Commonwealth of|Republic of)\s+/i, '')
      .replace(/\s*\([^)]*\)/g, '')
      .trim();
    if (cleanEn) return cleanEn;
  }

  // 4. If predominantly Latin already
  const latinCount = (str.match(/[a-zA-Z]/g) || []).length;
  const greekCount = (str.match(/[\u0370-\u03FF]/g) || []).length;
  if (latinCount >= 3 && latinCount >= greekCount) {
    const cleaned = str.replace(/\s*\([^)]*\)/g, '').trim();
    if (/^[a-z0-9\-_]+$/i.test(cleaned)) {
      return cleaned.split(/[\-_]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    }
    return cleaned;
  }

  // 5. If slug with hyphens or underscores e.g. 'new-york' -> 'New York', 'boston' -> 'Boston'
  if (/^[a-z0-9\-_]+$/i.test(str)) {
    return str.split(/[\-_]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  }

  return str;
}

export function buildLocalizedGastroQuery(dishTitle = '', cityName = '', entity = null, recipe = null) {
  // If recipe has explicit verified searchQuery, prioritize it!
  if (recipe && recipe.searchQuery) {
    return recipe.searchQuery;
  }

  const curEntity = entity || (window.getCurrentEntity ? window.getCurrentEntity() : null);
  const cityKey = curEntity?.id || currentActiveVideoCityId || '';
  const effCityName = cityName || curEntity?.name || cityKey;
  const lang = detectEntityLanguage(cityKey, effCityName, curEntity);

  const cleanDish = (dishTitle || '').replace(/\s*\([^)]*\)/g, '').trim();
  const normDish = cleanDish.toLowerCase();

  // Street food detection:
  const isStreetFood = normDish.includes('street food') || normDish.includes('street_food') || normDish.includes('υπαίθριες γεύσεις');
  if (isStreetFood) {
    if (lang === 'el') {
      return `${effCityName} street food`.trim();
    }
    const nativeCity = getNativeNameForEntity(effCityName, curEntity) || getNativeNameForEntity(cityKey, curEntity) || effCityName;
    return `${nativeCity} street food`.trim();
  }

  // Check if generic recipe / gastro header in Greek
  const isGenericGastro = /^(παραδοσιακ|κουζίνα|γεύσεις|συνταγ|φαγητ|τοπικ)/i.test(normDish) ||
                          normDish.includes('παραδοσιακή κουζίνα') ||
                          normDish.includes('παραδοσιακές συνταγές');

  if (lang === 'el') {
    if (isGenericGastro) {
      return `${effCityName} παραδοσιακές συνταγές`.trim();
    }
    const hasCity = normDish.includes(effCityName.toLowerCase().slice(0, 5));
    return `${cleanDish}${!hasCity && effCityName ? ` ${effCityName}` : ''} συνταγή`.trim();
  }

  // Foreign / International region:
  const nativeRegion = getNativeNameForEntity(effCityName, curEntity) || 'Travel';

  if (isGenericGastro || (normDish === normDish.replace(/[a-z]/g, '') && GREEK_TO_NATIVE_NAMES[normDish])) {
    const targetRegion = GREEK_TO_NATIVE_NAMES[normDish] || nativeRegion;
    if (lang === 'it') return `${targetRegion} ricette tradizionali`;
    if (lang === 'fr') return `${targetRegion} recettes traditionnelles`;
    if (lang === 'es') return `${targetRegion} recetas tradicionales`;
    if (lang === 'de') return `${targetRegion} traditionelle rezepte`;
    return `${targetRegion} traditional food recipes`;
  }

  // If dish title is already English/Latin or has Latin extracted
  const nativeDish = getNativeNameForEntity(dishTitle, null);
  const hasLatinDish = /[a-zA-Z]{3,}/.test(nativeDish);

  if (hasLatinDish) {
    if (lang === 'it') return `${nativeDish} ricetta`;
    if (lang === 'fr') return `${nativeDish} recette`;
    if (lang === 'es') return `${nativeDish} receta`;
    if (lang === 'de') return `${nativeDish} rezept`;
    return `${nativeDish} recipe`;
  }

  // Fallback for foreign region with translated dish name
  return `${nativeRegion} traditional food recipes`;
}

export function buildLocalizedCityVideoQuery(cityId = '', preferredType = 'drone', entity = null) {
  const curEntity = entity || (window.getCurrentEntity ? window.getCurrentEntity() : null);
  const cityKey = cityId || curEntity?.id || currentActiveVideoCityId || '';
  const cityName = curEntity?.name || cityKey;
  const lang = detectEntityLanguage(cityKey, cityName, curEntity);

  const suffix = preferredType === 'drone' ? 'drone 4k' : 'walking tour 4k';

  if (lang === 'el') {
    return `${cityName} ${suffix}`.trim();
  }

  const nativeCity = getNativeNameForEntity(cityKey, curEntity) || getNativeNameForEntity(cityName, curEntity);
  return `${nativeCity} ${suffix}`.trim();
}

export function buildLocalizedPoiQuery(poiTitle = '', cityId = '', cityName = '', entity = null, info = null) {
  if (info && info.searchQuery) {
    return info.searchQuery;
  }

  const curEntity = entity || (window.getCurrentEntity ? window.getCurrentEntity() : null);
  const cityKey = cityId || curEntity?.id || currentActiveVideoCityId || '';
  const effCityName = cityName || curEntity?.name || cityKey;
  const lang = detectEntityLanguage(cityKey, effCityName, curEntity);

  if (lang === 'el') {
    return `${poiTitle} ${effCityName}`.trim();
  }

  // Extract authentic native POI title
  const nativePoi = getNativeNameForEntity(poiTitle, null);
  const nativeCity = getNativeNameForEntity(effCityName, curEntity);

  // If POI already includes the city name, avoid duplicate like "Boston Common Boston"
  if (nativePoi.toLowerCase().includes(nativeCity.toLowerCase())) {
    return `${nativePoi} 4k`.trim();
  }

  return `${nativePoi} ${nativeCity}`.trim();
}

window.detectEntityLanguage = detectEntityLanguage;
window.getNativeNameForEntity = getNativeNameForEntity;
window.buildLocalizedGastroQuery = buildLocalizedGastroQuery;
window.buildLocalizedCityVideoQuery = buildLocalizedCityVideoQuery;
window.buildLocalizedPoiQuery = buildLocalizedPoiQuery;

export function openCityVideo(cityId, preferredType = 'drone') {
  const vid = getCityVideo(cityId, preferredType);
  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');
  const choicePills = document.getElementById('videoChoicePills');
  const searchInput = document.getElementById('videoSearchInput');

  if (!overlay || !iframe) return;

  if (!vid && !cityId) {
    closeMapVideoOverlay();
    return;
  }

  currentActiveVideoCityId = cityId;
  currentActiveVideoType = vid?.type || preferredType;

  // Close other map overlays if open
  if (window.closeCityPresentation) window.closeCityPresentation();
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) {
    const wikiFrame = document.getElementById('mapWikiIframe');
    if (wikiFrame) wikiFrame.srcdoc = '';
    wikiOverlay.classList.add('hidden');
  }
  if (streetViewOverlay) {
    const svFrame = document.getElementById('mapStreetViewIframe');
    if (svFrame) svFrame.src = 'about:blank';
    streetViewOverlay.classList.add('hidden');
  }

  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  let cityName = cityId;
  if (curEntity && curEntity.name) cityName = curEntity.name;
  
  const searchQuery = buildLocalizedCityVideoQuery(cityId, preferredType, curEntity);
  currentOverlayQuery = searchQuery;

  if (searchInput) {
    searchInput.value = searchQuery;
    if (!searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitOverlayVideoSearch();
      });
    }
  }

  if (vid && vid.youtubeId) {
    // 1-Click Play curated city video
    const youtubeId = vid.youtubeId;
    const videoTitle = vid.title || `🎬 Περιήγηση 4K: ${cityName}`;

    currentOverlayYoutubeId = youtubeId;
    currentOverlayStartSec = 0;
    currentOverlayTitle = videoTitle;
    currentOverlayMode = 'player';

    if (title) title.innerText = videoTitle;
    if (directLink) {
      directLink.setAttribute('data-youtube-id', youtubeId);
      directLink.href = `https://www.youtube.com/watch?v=${youtubeId}`;
    }

    if (choicePills) {
      const availableTours = getAvailableCityTours ? getAvailableCityTours(cityId) : [];
      if (availableTours && availableTours.length > 1) {
        choicePills.innerHTML = availableTours.map(t => {
          const isAct = (t.type === currentActiveVideoType);
          return `
            <button onclick="window.switchCityVideoType('${t.type}')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${isAct ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'} cursor-pointer shrink-0">
              <i class="${t.icon || 'fa-solid fa-play'}"></i>
              <span>${t.label || t.type}</span>
            </button>
          `;
        }).join('');
      } else {
        choicePills.innerHTML = '';
      }
    }

    setOverlayMediaMode('player');
  } else {
    // Fallback: No curated video found, open localized Bing Video Search
    currentOverlayYoutubeId = '';
    currentOverlayStartSec = 0;
    currentOverlayTitle = `📹 Video Search: ${cityName}`;
    currentOverlayMode = 'video_search';

    if (title) title.innerText = currentOverlayTitle;
    if (directLink) {
      directLink.removeAttribute('data-youtube-id');
      directLink.href = `https://www.bing.com/videos/search?q=${encodeURIComponent(searchQuery)}`;
    }
    if (choicePills) choicePills.innerHTML = '';

    setOverlayMediaMode('video_search');
  }

  if (typeSelector) {
    typeSelector.classList.add('hidden');
    typeSelector.innerHTML = '';
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function setOverlayMediaMode(mode, specificId = null) {
  currentOverlayMode = mode || 'player';
  const iframe = document.getElementById('mapVideoIframe');
  const gallery = document.getElementById('allVideosGalleryView');
  const title = document.getElementById('videoOverlayTitle');
  const icon = document.getElementById('videoOverlayIcon');
  const searchInput = document.getElementById('videoSearchInput');
  const query = (searchInput?.value?.trim() || currentOverlayQuery || (currentActiveVideoCityId ? currentActiveVideoCityId.replace(/_/g, ' ') : '') || 'Athens Greece').trim();

  // Update button active styles (all buttons active and accessible)
  const btnMap = {
    player: document.getElementById('mediaModePlayerBtn'),
    video_search: document.getElementById('mediaModeVideoSearchBtn'),
    ai_search: document.getElementById('mediaModeAiBtn') || document.getElementById('mediaModeWebBtn'),
    web: document.getElementById('mediaModeAiBtn') || document.getElementById('mediaModeWebBtn'),
  };

  const activeColorMap = {
    player: 'bg-rose-600 text-white shadow-md',
    video_search: 'bg-amber-600 text-white shadow-md shadow-amber-900/50',
    ai_search: 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-md shadow-amber-900/50',
    web: 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-md shadow-amber-900/50',
  };

  Object.entries(btnMap).forEach(([m, btn]) => {
    if (!btn) return;
    const isAct = (m === currentOverlayMode) || (currentOverlayMode === 'ai_search' && m === 'web') || (currentOverlayMode === 'web' && m === 'ai_search');
    if (isAct) {
      btn.className = `px-2.5 py-1 rounded-lg ${activeColorMap[m]} text-xs font-bold transition flex items-center gap-1.5 shadow cursor-pointer shrink-0`;
    } else {
      btn.className = `px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0`;
    }
  });

  if (!iframe) return;
  if (gallery) gallery.classList.add('hidden');
  iframe.classList.remove('hidden');

  if (currentOverlayMode === 'player') {
    if (!currentOverlayYoutubeId && currentActiveVideoCityId) {
      const cityVid = getCityVideo(currentActiveVideoCityId, 'drone') || getCityVideo(currentActiveVideoCityId);
      if (cityVid && cityVid.youtubeId) {
        currentOverlayYoutubeId = cityVid.youtubeId;
        currentOverlayTitle = cityVid.title;
      }
    }
    if (icon) icon.className = 'fa-solid fa-play text-rose-500 text-xs shrink-0';
    iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';
    if (currentOverlayYoutubeId) {
      if (title && currentOverlayTitle) title.innerText = currentOverlayTitle;
      iframe.src = `https://www.youtube.com/embed/${currentOverlayYoutubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1${currentOverlayStartSec > 0 ? `&start=${currentOverlayStartSec}` : ''}`;
    } else {
      // Fallback to video search if no youtubeId available
      setOverlayMediaMode('video_search');
      return;
    }
  } else if (currentOverlayMode === 'video_search') {
    if (icon) icon.className = 'fa-solid fa-video text-amber-400 text-xs shrink-0';
    iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-amber-500/40 bg-white transition-all duration-300';
    const searchQuery = query || (currentActiveVideoCityId ? currentActiveVideoCityId.replace(/_/g, ' ') : 'Travel');
    if (title) title.innerText = `📹 Video Search: ${searchQuery}`;
    const targetUrl = `https://www.bing.com/videos/search?q=${encodeURIComponent(searchQuery)}`;
    if (iframe.src !== targetUrl) {
      iframe.src = targetUrl;
    }
  } else if (currentOverlayMode === 'ai_search' || currentOverlayMode === 'web') {
    if (icon) icon.className = 'fa-solid fa-wand-magic-sparkles text-amber-400 text-xs shrink-0';
    iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-amber-500/40 bg-white transition-all duration-300';
    const searchQuery = query || (currentActiveVideoCityId ? currentActiveVideoCityId.replace(/_/g, ' ') : 'Travel');
    if (title) title.innerText = `✨ AI Search: ${searchQuery}`;
    const targetUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchQuery)}`;
    if (iframe.src !== targetUrl) {
      iframe.src = targetUrl;
    }
  }
}

export function renderAllVideosGallery(query = '', categoryFilter = 'all') {
  const gallery = document.getElementById('allVideosGalleryView');
  if (!gallery) return;

  const q = (query || '').toLowerCase().trim();
  const curCity = currentActiveVideoCityId;

  // Collect videos from CITY_VIDEOS, POI_VIDEOS_REGISTRY, GASTRO_RECIPE_VIDEOS, and SHORTS
  const list = [];

  // 1. Current City tours (highlighted first)
  if (curCity && CITY_VIDEOS[curCity]) {
    const entry = CITY_VIDEOS[curCity];
    ['drone', 'walking', 'guide', 'live'].forEach(type => {
      if (entry[type] && entry[type].youtubeId) {
        list.push({
          cityId: curCity,
          cityName: entry.cityName,
          type: type,
          title: entry[type].title || `${entry.cityName} ${type}`,
          youtubeId: entry[type].youtubeId,
          badgeLabel: type === 'drone' ? 'DRONE 4K' : (type === 'walking' ? 'WALKING 4K' : (type === 'live' ? 'LIVE CAM' : 'ΑΞΙΟΘΕΑΤΑ')),
          badgeClass: type === 'live' ? 'bg-red-600 text-white' : (type === 'drone' ? 'bg-sky-600 text-white' : 'bg-emerald-600 text-white')
        });
      }
    });
  }

  // 2. Search query or Featured city tours from CITY_VIDEOS
  const allCityKeys = Object.keys(CITY_VIDEOS);
  for (const cKey of allCityKeys) {
    if (cKey === curCity) continue;
    const entry = CITY_VIDEOS[cKey];
    const match = !q || cKey.includes(q) || (entry.cityName && entry.cityName.toLowerCase().includes(q));
    if (match) {
      ['drone', 'walking', 'guide', 'live'].forEach(type => {
        if (entry[type] && entry[type].youtubeId) {
          list.push({
            cityId: cKey,
            cityName: entry.cityName,
            type: type,
            title: entry[type].title || `${entry.cityName} ${type}`,
            youtubeId: entry[type].youtubeId,
            badgeLabel: type === 'drone' ? 'DRONE 4K' : (type === 'walking' ? 'WALKING 4K' : (type === 'live' ? 'LIVE CAM' : 'ΑΞΙΟΘΕΑΤΑ')),
            badgeClass: type === 'live' ? 'bg-red-600 text-white' : (type === 'drone' ? 'bg-sky-600 text-white' : 'bg-emerald-600 text-white')
          });
        }
      });
    }
    if (list.length >= 60) break;
  }

  // 3. Shorts from registry
  if (SOCIAL_MEDIA_REGISTRY) {
    Object.entries(SOCIAL_MEDIA_REGISTRY).forEach(([key, val]) => {
      if (val && val.shorts) {
        val.shorts.forEach(s => {
          if (!q || key.includes(q) || (val.name && val.name.toLowerCase().includes(q)) || s.title.toLowerCase().includes(q)) {
            list.push({
              cityId: '',
              cityName: val.name || key,
              type: 'shorts',
              title: s.title,
              youtubeId: s.id,
              badgeLabel: 'SHORTS',
              badgeClass: 'bg-emerald-600 text-white'
            });
          }
        });
      }
    });
  }

  // 4. Recipes from GASTRO_RECIPE_VIDEOS
  if (GASTRO_RECIPE_VIDEOS) {
    Object.entries(GASTRO_RECIPE_VIDEOS).forEach(([dish, info]) => {
      if (info && info.youtubeId) {
        if (!q || dish.includes(q) || (info.title && info.title.toLowerCase().includes(q))) {
          list.push({
            cityId: '',
            cityName: dish,
            type: 'gastro',
            title: info.title || dish,
            youtubeId: info.youtubeId,
            badgeLabel: 'ΣΥΝΤΑΓΗ',
            badgeClass: 'bg-amber-600 text-white'
          });
        }
      }
    });
  }

  // Filter by categoryFilter
  const filtered = categoryFilter === 'all' ? list : list.filter(item => {
    if (categoryFilter === 'drone') return item.type === 'drone';
    if (categoryFilter === 'walking') return item.type === 'walking';
    if (categoryFilter === 'shorts') return item.type === 'shorts';
    if (categoryFilter === 'live') return item.type === 'live';
    if (categoryFilter === 'gastro') return item.type === 'gastro';
    return true;
  });

  const categories = [
    { id: 'all', label: 'Όλα', icon: 'fa-globe' },
    { id: 'drone', label: 'Drone 4K', icon: 'fa-helicopter' },
    { id: 'walking', label: 'Walking 4K', icon: 'fa-person-walking' },
    { id: 'shorts', label: 'Shorts', icon: 'fa-mobile-screen' },
    { id: 'live', label: 'Live Cam', icon: 'fa-tower-broadcast' },
    { id: 'gastro', label: 'Συνταγές', icon: 'fa-utensils' }
  ];

  gallery.innerHTML = `
    <!-- Gallery Header & Categories -->
    <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 shrink-0">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1.5">
          <i class="fa-solid fa-film text-amber-400"></i>
          <span>Βιβλιοθήκη Βίντεο (${filtered.length})</span>
        </span>
        <span class="text-[11px] text-slate-400 hidden sm:inline">Κάντε κλικ σε οποιοδήποτε βίντεο για άμεση αναπαραγωγή στο Iframe</span>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex items-center gap-1 overflow-x-auto py-0.5">
        ${categories.map(cat => {
          const isAct = categoryFilter === cat.id;
          return `
            <button onclick="window.filterAllVideosGallery('${escapeStr(q)}', '${cat.id}')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer shrink-0 ${isAct ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'}">
              <i class="fa-solid ${cat.icon}"></i>
              <span>${cat.label}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Gallery Grid (Scrollable) -->
    <div class="flex-1 overflow-y-auto pr-1">
      ${filtered.length === 0 ? `
        <div class="h-64 flex flex-col items-center justify-center text-center p-6 text-slate-400">
          <i class="fa-solid fa-film text-4xl text-slate-600 mb-2"></i>
          <p class="text-sm font-semibold text-slate-300">Δεν βρέθηκαν βίντεο για την κατηγορία.</p>
          <p class="text-xs text-slate-500 mt-1">Δοκιμάστε άλλη κατηγορία ή αναζήτηση με όνομα πόλης.</p>
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          ${filtered.map(item => `
            <div onclick="window.playVideoInIframe('${item.youtubeId}', '${escapeStr(item.title)}', '${item.type}')" class="bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/60 rounded-xl overflow-hidden transition cursor-pointer flex flex-col group shadow-lg">
              <div class="relative w-full aspect-video bg-slate-950 overflow-hidden">
                <img src="https://i.ytimg.com/vi/${item.youtubeId}/mqdefault.jpg" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" />
                <span class="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black ${item.badgeClass} shadow">
                  ${item.badgeLabel}
                </span>
                <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-200">
                  <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-sm shadow-2xl group-hover:scale-110 transition">
                    <i class="fa-solid fa-play ml-0.5"></i>
                  </div>
                </div>
              </div>
              <div class="p-2.5 flex-1 flex flex-col justify-between">
                <div class="text-xs font-bold text-slate-100 group-hover:text-amber-300 line-clamp-2 leading-snug">
                  ${item.title}
                </div>
                <div class="text-[10px] text-slate-400 mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between">
                  <span class="truncate max-w-[140px] text-slate-300 font-medium">📍 ${item.cityName}</span>
                  <span class="text-amber-400 font-bold flex items-center gap-1 shrink-0"><i class="fa-solid fa-play text-[9px]"></i> Iframe Play</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

export function filterAllVideosGallery(query, category) {
  renderAllVideosGallery(query, category);
}

export function playVideoInIframe(youtubeId, titleText = '', type = 'drone') {
  if (type === 'shorts') {
    switchOverlayShorts(youtubeId, titleText);
  } else {
    switchOverlayVideo(youtubeId, 0, titleText);
  }
}

export function switchOverlayShorts(shortId, titleText = '') {
  currentOverlayShortsId = shortId;
  const iframe = document.getElementById('mapVideoIframe');
  const gallery = document.getElementById('allVideosGalleryView');
  const title = document.getElementById('videoOverlayTitle');
  const directLink = document.getElementById('videoDirectLink');

  if (gallery) gallery.classList.add('hidden');
  if (iframe && shortId) {
    iframe.classList.remove('hidden');
    iframe.className = 'w-full h-full max-w-[380px] sm:max-w-[420px] rounded-2xl shadow-2xl border border-emerald-500/50 bg-black transition-all duration-300 mx-auto';
    iframe.src = `https://www.youtube.com/embed/${shortId}?autoplay=1&playsinline=1&rel=0&loop=1&enablejsapi=1`;
  }
  if (title && titleText) title.innerText = `📱 Κάθετο Βίντεο: ${titleText}`;
  if (directLink) {
    directLink.setAttribute('data-youtube-id', shortId);
  }

  setOverlayMediaMode('shorts', shortId);
}

export function switchOverlayVideo(youtubeId, startSec = 0, titleText = '') {
  const iframe = document.getElementById('mapVideoIframe');
  const gallery = document.getElementById('allVideosGalleryView');
  const title = document.getElementById('videoOverlayTitle');
  const directLink = document.getElementById('videoDirectLink');

  if (!iframe || !youtubeId) return;

  currentOverlayYoutubeId = youtubeId;
  currentOverlayStartSec = startSec;
  if (titleText) currentOverlayTitle = titleText;
  currentOverlayMode = 'player';

  if (gallery) gallery.classList.add('hidden');
  iframe.classList.remove('hidden');
  iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';

  if (title && titleText) title.innerText = titleText;
  if (directLink) {
    directLink.setAttribute('data-youtube-id', youtubeId);
  }
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1${startSec > 0 ? `&start=${startSec}` : ''}`;

  setOverlayMediaMode('player');

  // Update active pill styling
  const pills = document.querySelectorAll('#videoChoicePills button');
  pills.forEach(btn => {
    if (btn.getAttribute('data-youtube-id') === youtubeId) {
      btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-rose-600 text-white shadow-md cursor-pointer shrink-0';
    } else {
      btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer shrink-0';
    }
  });
}

export function reloadCurrentVideoIframe() {
  const iframe = document.getElementById('mapVideoIframe');
  if (iframe && iframe.src) {
    const currentSrc = iframe.src;
    iframe.src = '';
    setTimeout(() => {
      iframe.src = currentSrc;
    }, 50);
  }
}

export function extractMsnVideoQuery(rawUrl) {
  if (!rawUrl) return '';
  try {
    const cleanUrl = rawUrl.startsWith('http') ? rawUrl : 'https://' + rawUrl;
    const u = new URL(cleanUrl);
    const parts = u.pathname.split('/').filter(Boolean);
    const categories = ['video', 'news', 'entertainment', 'food-and-drink', 'lifestyle', 'travel', 'sports', 'weather', 'autos'];
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      if (/^[a-z]{2}-[a-z]{2}$/i.test(p)) continue;
      if (categories.includes(p.toLowerCase())) continue;
      if (p.toLowerCase().startsWith('vi-') || p.toLowerCase().startsWith('ar-')) continue;
      const clean = decodeURIComponent(p).replace(/[-_+]/g, ' ').trim();
      if (clean && clean.length > 2) return clean;
    }
  } catch (e) {
    // fallback
  }
  return '';
}

export function showMsnNotice(rawUrl, query) {
  const container = document.getElementById('videoIframeContainer');
  if (!container) return;
  const existing = document.getElementById('msnEmbedNotice');
  if (existing) existing.remove();

  const notice = document.createElement('div');
  notice.id = 'msnEmbedNotice';
  notice.className = 'absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md bg-slate-900/95 border border-amber-500/60 rounded-xl p-3 shadow-2xl z-40 text-xs backdrop-blur-md flex items-start gap-2.5 animate-fade-in transition-all';
  notice.innerHTML = `
    <div class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
      <i class="fa-solid fa-triangle-exclamation"></i>
    </div>
    <div class="flex-1 min-w-0">
      <div class="font-bold text-white mb-0.5">Άνοιγμα βίντεο MSN (Microsoft)</div>
      <div class="text-[11px] text-slate-300 leading-relaxed">
        Τα βίντεο από το MSN ανοίγουν εξωτερικά σε νέο παράθυρο λόγω των περιορισμών ασφαλείας της Microsoft (X-Frame-Options).
      </div>
      <div class="mt-2 flex items-center gap-2">
        <a href="${rawUrl}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] transition flex items-center gap-1 shadow">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Άνοιγμα στο MSN
        </a>
        <button onclick="document.getElementById('msnEmbedNotice')?.remove()" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] transition">
          Κατάλαβα
        </button>
      </div>
    </div>
    <button onclick="document.getElementById('msnEmbedNotice')?.remove()" class="text-slate-400 hover:text-white p-1">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  container.appendChild(notice);
  setTimeout(() => {
    const el = document.getElementById('msnEmbedNotice');
    if (el) el.remove();
  }, 10000);
}

export function playMsnVideo(rawUrlOrQuery) {
  if (typeof rawUrlOrQuery === 'string' && (rawUrlOrQuery.startsWith('http://') || rawUrlOrQuery.startsWith('https://'))) {
    try {
      window.open(rawUrlOrQuery, '_blank', 'noopener,noreferrer');
    } catch (_) {}
  }
  const query = extractMsnVideoQuery(rawUrlOrQuery) || (currentOverlayQuery || currentActiveVideoCityId || 'Travel').trim();
  const title = document.getElementById('videoOverlayTitle');

  // 1. Check if query matches our local gastro recipe videos
  const gastro = getGastroRecipeVideo(query, '');
  if (gastro && gastro.youtubeId) {
    openGastroVideo(query);
    showMsnNotice(rawUrlOrQuery, gastro.title || query);
    return;
  }

  // 2. Check if matches POI video
  const poi = getPoiVideoInfo(query, '');
  if (poi && poi.youtubeId && !poi.isCityTourFallback) {
    openPoiVideo(query);
    showMsnNotice(rawUrlOrQuery, poi.title || query);
    return;
  }

  // 3. Search and play video via Video Search with embeddable sources filtered
  currentOverlayQuery = query;
  if (title) title.innerText = `📹 Βίντεο: ${query}`;
  setOverlayMediaMode('video_search');
  showMsnNotice(rawUrlOrQuery, query);
}

export function submitOverlayVideoSearch() {
  const input = document.getElementById('videoSearchInput');
  if (!input) return;
  const raw = input.value.trim();
  if (!raw) return;

  currentOverlayQuery = raw;

  // 1. Check if user pasted a YouTube Shorts URL
  const shortsMatch = raw.match(/youtube\.com\/shorts\/([\w-]{11})/i);
  if (shortsMatch) {
    const sId = shortsMatch[1];
    switchOverlayShorts(sId, `📱 Shorts: ${sId}`);
    return;
  }

  // 2. Check if it's a YouTube URL or 11-char ID
  let ytId = null;
  const urlMatch = raw.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (urlMatch) {
    ytId = urlMatch[1];
  } else if (/^[\w-]{11}$/.test(raw)) {
    ytId = raw;
  }

  if (ytId) {
    switchOverlayVideo(ytId, 0, `🎥 Βίντεο: ${ytId}`);
    return;
  }

  // 3. Check if user pasted an MSN Video URL
  const isMsn = /msn\.com/i.test(raw) || /assets\.msn\.com/i.test(raw) || /^vi-[a-zA-Z0-9]+/i.test(raw);
  if (isMsn) {
    playMsnVideo(raw);
    return;
  }

  // 4. Check if user pasted a Bing Videos URL (detail / riverview / search)
  if (/bing\.com\/videos/i.test(raw)) {
    const iframe = document.getElementById('mapVideoIframe');
    const title = document.getElementById('videoOverlayTitle');
    if (title) title.innerText = '📹 Video: Bing Player';
    if (iframe) {
      iframe.classList.remove('hidden');
      iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';
      iframe.src = raw;
    }
    setOverlayMediaMode('video_search');
    return;
  }

  // 5. Check if user pasted a Dailymotion URL
  const dmMatch = raw.match(/(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/i);
  if (dmMatch) {
    const dmId = dmMatch[1];
    const iframe = document.getElementById('mapVideoIframe');
    const title = document.getElementById('videoOverlayTitle');
    if (title) title.innerText = `🎬 Dailymotion: ${dmId}`;
    if (iframe) {
      iframe.classList.remove('hidden');
      iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';
      iframe.src = `https://www.dailymotion.com/embed/video/${dmId}?autoplay=1`;
    }
    setOverlayMediaMode('player');
    return;
  }

  // 6. Check if user pasted a Vimeo URL
  const vimeoMatch = raw.match(/vimeo\.com\/(?:video\/)?([0-9]+)/i);
  if (vimeoMatch) {
    const vId = vimeoMatch[1];
    const iframe = document.getElementById('mapVideoIframe');
    const title = document.getElementById('videoOverlayTitle');
    if (title) title.innerText = `🎬 Vimeo: ${vId}`;
    if (iframe) {
      iframe.classList.remove('hidden');
      iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';
      iframe.src = `https://player.vimeo.com/video/${vId}?autoplay=1`;
    }
    setOverlayMediaMode('player');
    return;
  }

  // 7. Check if user pasted a direct video file (.mp4, .webm, .ogg)
  if (/\.(mp4|webm|ogg)($|\?)/i.test(raw)) {
    const iframe = document.getElementById('mapVideoIframe');
    const title = document.getElementById('videoOverlayTitle');
    if (title) title.innerText = `🎬 Βίντεο: ${raw.split('/').pop().split('?')[0]}`;
    if (iframe) {
      iframe.classList.remove('hidden');
      iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';
      iframe.src = raw;
    }
    setOverlayMediaMode('player');
    return;
  }

  // 8. Check if query matches our gastro or POI registry
  const gastro = getGastroRecipeVideo(raw, '');
  if (gastro && gastro.youtubeId) {
    openGastroVideo(raw);
    return;
  }

  const poi = getPoiVideoInfo(raw, '');
  if (poi && poi.youtubeId && !poi.isCityTourFallback) {
    openPoiVideo(raw);
    return;
  }

  // 9. Check if query matches a city directly
  const cMatch = Object.keys(CITY_VIDEOS).find(k => k === raw.toLowerCase() || (CITY_VIDEOS[k].cityName && CITY_VIDEOS[k].cityName.toLowerCase() === raw.toLowerCase()));
  if (cMatch) {
    openCityVideo(cMatch);
    return;
  }

  // 10. In-App Video or AI Search directly inside the iframe!
  if (currentOverlayMode === 'video_search') {
    setOverlayMediaMode('video_search');
  } else {
    setOverlayMediaMode('ai_search');
  }
}

export function openPoiVideo(poiTitle, cityId = '', explicitStart = null) {
  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  if (!cityId && curEntity && curEntity.id) {
    cityId = curEntity.id;
  }

  let cityName = '';
  if (curEntity && curEntity.name) {
    cityName = curEntity.name;
  }

  const info = getPoiVideoInfo(poiTitle, cityId);
  const searchQuery = buildLocalizedPoiQuery(poiTitle, cityId, cityName, curEntity, info);
  currentOverlayQuery = searchQuery;

  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');
  const choicePills = document.getElementById('videoChoicePills');
  const searchInput = document.getElementById('videoSearchInput');

  if (!overlay || !iframe) return;

  currentActiveVideoCityId = cityId;
  currentActiveVideoType = info?.type || 'drone';

  // Close other map overlays if open
  if (window.closeCityPresentation) window.closeCityPresentation();
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) {
    const wikiFrame = document.getElementById('mapWikiIframe');
    if (wikiFrame) wikiFrame.srcdoc = '';
    wikiOverlay.classList.add('hidden');
  }
  if (streetViewOverlay) {
    const svFrame = document.getElementById('mapStreetViewIframe');
    if (svFrame) svFrame.src = 'about:blank';
    streetViewOverlay.classList.add('hidden');
  }

  // Configure search bar
  if (searchInput) {
    searchInput.value = searchQuery;
    if (!searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitOverlayVideoSearch();
      });
    }
  }

  if (info && info.youtubeId) {
    const startSec = (explicitStart !== null && typeof explicitStart === 'number') ? explicitStart : (info.startSeconds || 0);
    const mins = Math.floor(startSec / 60);
    const secs = startSec % 60;
    const timeFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    let videoTitle = `🎥 ${poiTitle || 'Αξιοθέατο'} • 4K Video`;
    if (info.isDedicated) {
      videoTitle = `🏛️ ${info.title || poiTitle}`;
    } else if (info.isExactTimestamp) {
      videoTitle = `🎥 ${info.attractionName || poiTitle} • 4K Tour (${timeFormatted})`;
    } else if (info.isCityTourFallback) {
      videoTitle = `🏙️ ${poiTitle ? poiTitle + ' • ' : ''}4K Περιήγηση Πόλης`;
    }

    currentOverlayYoutubeId = info.youtubeId;
    currentOverlayStartSec = startSec;
    currentOverlayTitle = videoTitle;
    currentOverlayMode = 'player';

    if (title) title.innerText = videoTitle;
    if (directLink) {
      directLink.setAttribute('data-youtube-id', info.youtubeId);
      directLink.href = `https://www.youtube.com/watch?v=${info.youtubeId}${startSec > 0 ? `&t=${startSec}s` : ''}`;
    }

    // Render multiple choice options in the options bar
    if (choicePills) {
      const options = info.options && info.options.length ? info.options : [
        { youtubeId: info.youtubeId, startSeconds: startSec, title: videoTitle, label: info.label || '4K Βίντεο', icon: 'fa-solid fa-play' }
      ];
      choicePills.innerHTML = options.map((opt, idx) => {
        const isAct = opt.youtubeId === info.youtubeId;
        return `
          <button onclick="window.switchOverlayVideo('${opt.youtubeId}', ${opt.startSeconds || 0}, '${escapeStr(opt.title)}')" data-youtube-id="${opt.youtubeId}" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${isAct ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'} cursor-pointer shrink-0">
            <i class="${opt.icon || 'fa-solid fa-film'}"></i>
            <span>${opt.label || opt.title}</span>
          </button>
        `;
      }).join('');
    }

    setOverlayMediaMode('player');
  } else {
    // Fallback: No curated POI video, open localized Bing Video Search directly
    currentOverlayYoutubeId = '';
    currentOverlayStartSec = 0;
    currentOverlayTitle = `📹 Video Search: ${poiTitle}`;
    currentOverlayMode = 'video_search';

    if (title) title.innerText = currentOverlayTitle;
    if (directLink) {
      directLink.removeAttribute('data-youtube-id');
      directLink.href = `https://www.bing.com/videos/search?q=${encodeURIComponent(searchQuery)}`;
    }
    if (choicePills) choicePills.innerHTML = '';

    setOverlayMediaMode('video_search');
  }

  // Top bar: keep clean and badge-free
  if (typeSelector) {
    typeSelector.innerHTML = '';
    typeSelector.classList.add('hidden');
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function openGastroVideo(dishTitle, cityName = '') {
  if (!cityName && window.getCurrentEntity) {
    const cur = window.getCurrentEntity();
    if (cur && cur.name) cityName = cur.name;
  }

  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');
  const choicePills = document.getElementById('videoChoicePills');
  const searchInput = document.getElementById('videoSearchInput');

  if (!overlay || !iframe) return;

  if (window.closeCityPresentation) window.closeCityPresentation();
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) {
    const wikiFrame = document.getElementById('mapWikiIframe');
    if (wikiFrame) wikiFrame.srcdoc = '';
    wikiOverlay.classList.add('hidden');
  }
  if (streetViewOverlay) {
    const svFrame = document.getElementById('mapStreetViewIframe');
    if (svFrame) svFrame.src = 'about:blank';
    streetViewOverlay.classList.add('hidden');
  }

  // Dynamic city resolution for fallback
  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const currentCityKey = curEntity?.id || currentActiveVideoCityId || '';
  const currentCityName = cityName || curEntity?.name || currentCityKey;

  const recipe = getGastroRecipeVideo(dishTitle, currentCityName);
  const searchQuery = buildLocalizedGastroQuery(dishTitle, currentCityName, curEntity, recipe);
  currentOverlayQuery = searchQuery;

  // Pre-fill search bar
  if (searchInput) {
    searchInput.value = searchQuery;
    if (!searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitOverlayVideoSearch();
      });
    }
  }

  const isStreetFood = (dishTitle || '').toLowerCase().includes('street food') || (dishTitle || '').toLowerCase().includes('υπαίθριες γεύσεις');
  const iconPrefix = isStreetFood ? '🌯' : '👨‍🍳';

  if (recipe && recipe.youtubeId) {
    // 1-Click Play curated recipe or street food video!
    const videoTitle = `${iconPrefix} ${recipe.dish || dishTitle} (${recipe.region || currentCityName})`;
    currentOverlayYoutubeId = recipe.youtubeId;
    currentOverlayStartSec = 0;
    currentOverlayTitle = videoTitle;
    currentOverlayMode = 'player';

    if (title) title.innerText = videoTitle;
    if (directLink) {
      directLink.setAttribute('data-youtube-id', recipe.youtubeId);
      directLink.href = `https://www.youtube.com/watch?v=${recipe.youtubeId}`;
    }

    // Render multiple choice options in the options bar
    if (choicePills) {
      const options = recipe.options && recipe.options.length ? recipe.options : [
        { youtubeId: recipe.youtubeId, title: videoTitle, label: dishTitle, icon: isStreetFood ? 'fa-solid fa-store' : 'fa-solid fa-utensils' }
      ];
      choicePills.innerHTML = options.map((opt, idx) => {
        const isAct = idx === 0;
        return `
          <button onclick="window.switchOverlayVideo('${opt.youtubeId}', 0, '${escapeStr(opt.title)}')" data-youtube-id="${opt.youtubeId}" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${isAct ? (isStreetFood ? 'bg-orange-600 text-white shadow-md' : 'bg-rose-600 text-white shadow-md') : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'} cursor-pointer shrink-0">
            <i class="${opt.icon || (isStreetFood ? 'fa-solid fa-store' : 'fa-solid fa-utensils')}"></i>
            <span>${opt.label || opt.title}</span>
          </button>
        `;
      }).join('');
    }

    setOverlayMediaMode('player');
  } else {
    // Fallback: No curated recipe in registry, open localized Bing Video Search directly!
    currentOverlayYoutubeId = '';
    currentOverlayStartSec = 0;
    currentOverlayTitle = `${iconPrefix} Video Search: ${dishTitle}`;
    currentOverlayMode = 'video_search';

    if (title) title.innerText = `${iconPrefix} Video Search: ${dishTitle}`;
    if (directLink) {
      directLink.removeAttribute('data-youtube-id');
      directLink.href = `https://www.bing.com/videos/search?q=${encodeURIComponent(searchQuery)}`;
    }
    if (choicePills) choicePills.innerHTML = '';

    setOverlayMediaMode('video_search');
  }

  if (typeSelector) {
    typeSelector.innerHTML = '';
    typeSelector.classList.add('hidden');
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function openEducationVideo(titleText, cityName = '', explicitYoutubeId = '') {
  if (!cityName && window.getCurrentEntity) {
    const cur = window.getCurrentEntity();
    if (cur && cur.name) cityName = cur.name;
  }

  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');
  const choicePills = document.getElementById('videoChoicePills');
  const searchInput = document.getElementById('videoSearchInput');

  if (!overlay || !iframe) return;

  if (window.closeCityPresentation) window.closeCityPresentation();
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) {
    const wikiFrame = document.getElementById('mapWikiIframe');
    if (wikiFrame) wikiFrame.srcdoc = '';
    wikiOverlay.classList.add('hidden');
  }
  if (streetViewOverlay) {
    const svFrame = document.getElementById('mapStreetViewIframe');
    if (svFrame) svFrame.src = 'about:blank';
    streetViewOverlay.classList.add('hidden');
  }

  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const currentCityKey = curEntity?.id || currentActiveVideoCityId || '';
  const currentCityName = cityName || curEntity?.name || currentCityKey;
  const lang = detectEntityLanguage(currentCityKey, currentCityName, curEntity);

  let searchQuery = '';
  if (lang === 'el') {
    searchQuery = `${titleText} ${currentCityName}`.trim();
  } else {
    const nativeCity = getNativeNameForEntity(currentCityName, curEntity) || currentCityName;
    const nativeTitle = getNativeNameForEntity(titleText, null) || titleText;
    searchQuery = `${nativeTitle} ${nativeCity}`.trim();
  }
  currentOverlayQuery = searchQuery;

  if (searchInput) {
    searchInput.value = searchQuery;
    if (!searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitOverlayVideoSearch();
      });
    }
  }

  if (explicitYoutubeId) {
    const videoTitle = `🎓 ${titleText} (${currentCityName})`;
    currentOverlayYoutubeId = explicitYoutubeId;
    currentOverlayStartSec = 0;
    currentOverlayTitle = videoTitle;
    currentOverlayMode = 'player';

    if (title) title.innerText = videoTitle;
    if (directLink) {
      directLink.setAttribute('data-youtube-id', explicitYoutubeId);
      directLink.href = `https://www.youtube.com/watch?v=${explicitYoutubeId}`;
    }
    if (choicePills) choicePills.innerHTML = '';
    setOverlayMediaMode('player');
  } else {
    currentOverlayYoutubeId = '';
    currentOverlayStartSec = 0;
    currentOverlayTitle = `🎓 Video Search: ${titleText}`;
    currentOverlayMode = 'video_search';

    if (title) title.innerText = `🎓 Video Search: ${titleText}`;
    if (directLink) {
      directLink.removeAttribute('data-youtube-id');
      directLink.href = `https://www.bing.com/videos/search?q=${encodeURIComponent(searchQuery)}`;
    }
    if (choicePills) choicePills.innerHTML = '';
    setOverlayMediaMode('video_search');
  }

  if (typeSelector) {
    typeSelector.innerHTML = '';
    typeSelector.classList.add('hidden');
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}
window.openEducationVideo = openEducationVideo;

export function openTimeCapsuleVideo(youtubeId, titleText = 'Ιστορικό Βίντεο', cityName = '') {
  if (!youtubeId) return;

  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');
  const choicePills = document.getElementById('videoChoicePills');
  const searchInput = document.getElementById('videoSearchInput');

  if (!overlay || !iframe) return;

  if (window.closeCityPresentation) window.closeCityPresentation();
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) {
    const wikiFrame = document.getElementById('mapWikiIframe');
    if (wikiFrame) wikiFrame.srcdoc = '';
    wikiOverlay.classList.add('hidden');
  }
  if (streetViewOverlay) {
    const svFrame = document.getElementById('mapStreetViewIframe');
    if (svFrame) svFrame.src = 'about:blank';
    streetViewOverlay.classList.add('hidden');
  }

  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const currentCityName = cityName || curEntity?.name || '';
  const fullTitle = `🎬 ${titleText}${currentCityName ? ` (${currentCityName})` : ''}`;

  currentOverlayYoutubeId = youtubeId;
  currentOverlayStartSec = 0;
  currentOverlayTitle = fullTitle;
  currentOverlayMode = 'player';
  currentOverlayQuery = `${titleText} ${currentCityName}`.trim();

  if (title) title.innerText = fullTitle;
  if (directLink) {
    directLink.setAttribute('data-youtube-id', youtubeId);
    directLink.href = `https://www.youtube.com/watch?v=${youtubeId}`;
  }
  if (searchInput) {
    searchInput.value = currentOverlayQuery;
    if (!searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitOverlayVideoSearch();
      });
    }
  }
  if (choicePills) choicePills.innerHTML = '';
  if (typeSelector) {
    typeSelector.innerHTML = '';
    typeSelector.classList.add('hidden');
  }

  setOverlayMediaMode('player');
  const photoContainer = document.getElementById('mapMediaPhotoContainer');
  if (photoContainer) photoContainer.classList.add('hidden');
  if (iframe) iframe.classList.remove('hidden');
  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}
window.openTimeCapsuleVideo = openTimeCapsuleVideo;

export function openTimeCapsuleMedia(photoUrl, titleText = 'Ιστορική Εικόνα', cityName = '') {
  if (!photoUrl) return;

  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const photoContainer = document.getElementById('mapMediaPhotoContainer');
  const photoImg = document.getElementById('mapMediaPhotoImg');
  const photoCaption = document.getElementById('mapMediaPhotoCaption');
  const photoCredit = document.getElementById('mapMediaPhotoCredit');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');

  if (!overlay) return;

  if (window.closeCityPresentation) window.closeCityPresentation();
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) wikiOverlay.classList.add('hidden');
  if (streetViewOverlay) streetViewOverlay.classList.add('hidden');

  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const currentCityName = cityName || curEntity?.name || '';
  const fullTitle = `🖼️ ${titleText}${currentCityName ? ` (${currentCityName})` : ''}`;

  if (title) title.innerText = fullTitle;
  if (iframe) {
    iframe.src = '';
    iframe.classList.add('hidden');
  }
  if (photoContainer && photoImg) {
    photoImg.src = photoUrl;
    photoImg.alt = titleText;
    if (photoCaption) photoCaption.innerText = titleText;
    if (photoCredit) photoCredit.innerText = currentCityName ? `Τοποθεσία: ${currentCityName}` : '';
    photoContainer.classList.remove('hidden');
  }
  if (directLink) {
    directLink.href = photoUrl;
    directLink.title = 'Άνοιγμα εικόνας σε πλήρη ανάλυση';
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}
window.openTimeCapsuleMedia = openTimeCapsuleMedia;

export function switchCityVideoType(type) {
  if (currentActiveVideoCityId) {
    openCityVideo(currentActiveVideoCityId, type);
  }
}

export function closeMapVideoOverlay() {
  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const gallery = document.getElementById('allVideosGalleryView');
  const photoContainer = document.getElementById('mapMediaPhotoContainer');
  if (photoContainer) photoContainer.classList.add('hidden');
  if (iframe) {
    iframe.src = '';
    iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 transition-all duration-300';
    iframe.classList.remove('hidden');
  }
  if (gallery) {
    gallery.classList.add('hidden');
    gallery.innerHTML = '';
  }
  if (overlay) overlay.classList.add('hidden');
  currentActiveVideoCityId = null;
  currentOverlayMode = 'video_search';
  currentOverlayShortsId = '';
  syncMapFloatingControlsVisibility();
}

export function openLiveCamModal(youtubeId, titleText = 'Ζωντανή Μετάδοση') {
  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');

  if (!overlay || !iframe) return;

  closeMapWikiOverlay();
  closeMapStreetViewOverlay();
  closeDeepDiveOverlay();

  if (title) title.innerText = `🔴 Live Cam: ${titleText}`;
  if (directLink) {
    directLink.setAttribute('data-youtube-id', youtubeId);
  }
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;

  if (typeSelector) typeSelector.classList.add('hidden');

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function toggleCityVideoDropdown(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById('cityVideoDropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

export function selectCityVideoTour(cityId, type) {
  const dropdown = document.getElementById('cityVideoDropdown');
  if (dropdown) dropdown.classList.add('hidden');
  openCityVideo(cityId, type);
}

export function renderCityVideoDropdownMenu(cityId) {
  const dropdown = document.getElementById('cityVideoDropdown');
  if (!dropdown) return;
  const tours = getAvailableCityTours(cityId);
  if (!tours || tours.length === 0) {
    dropdown.innerHTML = `<div class="p-3 text-slate-400 text-center text-xs">Δεν υπάρχουν διαθέσιμα βίντεο</div>`;
    return;
  }
  dropdown.innerHTML = `
    <div class="px-3 py-1.5 border-b border-slate-800 text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
      <i class="fa-brands fa-youtube text-red-500"></i> Επιλογή Τύπου Περιήγησης
    </div>
    <div class="py-1">
      ${tours.map(t => {
        const isLive = t.type === 'live';
        return `
        <button onclick="selectCityVideoTour('${cityId}', '${t.type}')" class="w-full text-left px-3 py-2 hover:bg-slate-800 hover:text-sky-300 text-slate-200 transition flex items-center gap-2.5 group">
          <div class="w-7 h-7 rounded-lg ${isLive ? 'bg-red-950/80 text-red-400 group-hover:bg-red-600/30 group-hover:text-red-300 border border-red-700/60' : 'bg-slate-800 group-hover:bg-sky-600/20 group-hover:text-sky-300 text-amber-400 border border-slate-700/60'} flex items-center justify-center shrink-0">
            ${isLive ? '<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>' : `<i class="${t.icon} text-xs"></i>`}
          </div>
          <div class="min-w-0 flex-1">
            <div class="font-bold text-xs truncate ${isLive ? 'text-red-300 group-hover:text-red-200 flex items-center gap-1.5' : 'group-hover:text-sky-200'}">
              <span>${t.label}</span>
              ${isLive ? '<span class="px-1.5 py-0.2 text-[9px] bg-red-600 text-white rounded font-extrabold uppercase tracking-wide">LIVE</span>' : ''}
            </div>
            <div class="text-[10px] text-slate-400 truncate">${t.title}</div>
          </div>
        </button>
      `;}).join('')}
    </div>
  `;
}

/**
 * In-Map Embedded Wikipedia Reader
 * Opens full Wikipedia article inside the map container overlay without external tabs
 */
export async function openMapWikiReader(queryOrTitle, lang = 'el', fallbackEnQuery = '') {
  currentWikiTitle = queryOrTitle;
  currentWikiLang = lang;
  currentWikiFallbackEn = fallbackEnQuery;

  const overlay = document.getElementById('mapWikiOverlay');
  const iframe = document.getElementById('mapWikiIframe');
  const titleEl = document.getElementById('wikiOverlayTitle');
  const langBadge = document.getElementById('wikiOverlayLangBadge');
  const langLabel = document.getElementById('wikiOverlayLangLabel');
  const loading = document.getElementById('wikiOverlayLoading');

  if (!overlay || !iframe) return;

  // Close video overlay and street view overlay if open
  closeMapVideoOverlay();
  closeMapStreetViewOverlay();
  if (window.closeCityPresentation) window.closeCityPresentation();

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
  syncMapFloatingControlsVisibility();
  if (loading) loading.classList.remove('hidden');
  iframe.classList.add('hidden');

  if (titleEl) titleEl.innerText = queryOrTitle;
  if (langBadge) langBadge.innerText = lang.toUpperCase();
  if (langLabel) langLabel.innerText = lang === 'el' ? 'English' : 'Ελληνικά';

  const res = await fetchWikiArticleHtml(queryOrTitle, lang, fallbackEnQuery);

  const translateBtn = document.getElementById('wikiTranslateBtn');
  const translateLabel = document.getElementById('wikiTranslateBtnLabel');
  if (translateBtn) {
    if (res && res.lang === 'en') {
      translateBtn.classList.remove('hidden');
      if (translateLabel) translateLabel.innerText = 'Μετάφραση στα Ελληνικά';
    } else {
      translateBtn.classList.add('hidden');
    }
  }

  if (res && res.docHtml) {
    currentWikiLang = res.lang;
    if (titleEl) titleEl.innerText = res.title;
    if (langBadge) langBadge.innerText = res.lang.toUpperCase();
    if (langLabel) langLabel.innerText = res.lang === 'el' ? 'English' : 'Ελληνικά';

    iframe.srcdoc = res.docHtml;
    if (loading) loading.classList.add('hidden');
    iframe.classList.remove('hidden');
  } else {
    // Article not found via REST API: Try Wikipedia Search or offer Bing AI Search fallback
    if (loading) loading.classList.add('hidden');
    iframe.classList.remove('hidden');
    const cleanQ = queryOrTitle.trim();
    const wikiSearchUrl = `https://${lang}.wikipedia.org/w/index.php?search=${encodeURIComponent(cleanQ)}`;

    iframe.srcdoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; background: #0b0f19; color: #cbd5e1; font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; box-sizing: border-box; text-align: center; }
          .card { background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 32px 24px; max-width: 520px; width: 100%; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
          .icon { width: 56px; height: 56px; border-radius: 16px; background: rgba(245, 158, 11, 0.15); color: #fbbf24; display: inline-flex; align-items: center; justify-content: center; font-size: 26px; margin-bottom: 20px; }
          h2 { color: #f8fafc; font-size: 19px; margin: 0 0 10px 0; font-weight: 800; }
          p { color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 0 0 24px 0; }
          .btn-group { display: flex; flex-direction: column; gap: 10px; width: 100%; }
          .btn { padding: 12px 18px; border-radius: 12px; font-size: 13px; font-weight: 700; cursor: pointer; border: none; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
          .btn-bing { background: linear-gradient(135deg, #d97706, #ea580c); color: white; box-shadow: 0 4px 14px rgba(217,119,6,0.35); }
          .btn-bing:hover { opacity: 0.95; transform: scale(1.02); }
          .btn-wiki { background: #0284c7; color: white; }
          .btn-wiki:hover { background: #0369a1; }
          .btn-back { background: #1f2937; color: #94a3b8; border: 1px solid #374151; }
          .btn-back:hover { color: white; background: #374151; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="icon">🔍</div>
          <h2>Αναζήτηση Λήμματος Wikipedia</h2>
          <p>
            Δεν βρέθηκε ακριβές λήμμα για το θέμα "<strong>${escapeStr(cleanQ)}</strong>". Επιλέξτε τρόπο προβολής εντός της εφαρμογής:
          </p>
          <div class="btn-group">
            <button class="btn btn-bing" onclick="window.parent.switchWikiToBingSearch('${escapeStr(cleanQ)}')">
              ✨ Αναζήτηση Bing AI για Wikipedia
            </button>
            <button class="btn btn-wiki" onclick="window.location.href='${wikiSearchUrl}'">
              📖 Αναζήτηση στην ίδια τη Wikipedia
            </button>
            <button class="btn btn-back" onclick="window.parent.postMessage({ type: 'EARTH_TIMES_CLOSE_WIKI' }, '*')">
              ✕ Επιστροφή στον Χάρτη
            </button>
          </div>
        </div>
      </body>
      </html>
    `;
    if (loading) loading.classList.add('hidden');
    iframe.classList.remove('hidden');
  }
}

export function switchWikiToBingSearch(term = '') {
  const query = (term || currentWikiTitle || '').trim();
  const iframe = document.getElementById('mapWikiIframe');
  const titleEl = document.getElementById('wikiOverlayTitle');
  const loading = document.getElementById('wikiOverlayLoading');
  if (loading) loading.classList.add('hidden');
  if (titleEl) titleEl.innerText = `✨ Bing AI Search: ${query} Wikipedia`;
  if (iframe) {
    iframe.srcdoc = '';
    iframe.classList.remove('hidden');
    iframe.src = `https://www.bing.com/search?q=${encodeURIComponent(query + ' wikipedia')}`;
  }
}
window.switchWikiToBingSearch = switchWikiToBingSearch;

export function openDeepDiveBingAiSearch(topic = '') {
  const query = (topic || activeDeepDiveData?.title || currentWikiTitle || (currentActiveVideoCityId ? currentActiveVideoCityId.replace(/_/g, ' ') : 'Travel')).trim();
  closeDeepDiveOverlay();
  closeMapWikiOverlay();

  const overlay = document.getElementById('mapVideoOverlay');
  if (overlay) overlay.classList.remove('hidden');
  currentOverlayQuery = query;
  const searchInput = document.getElementById('videoSearchInput');
  if (searchInput) searchInput.value = query;
  setOverlayMediaMode('ai_search');
  syncMapFloatingControlsVisibility();
}
window.openDeepDiveBingAiSearch = openDeepDiveBingAiSearch;

export function toggleWikiReaderLanguage() {
  const nextLang = currentWikiLang === 'el' ? 'en' : 'el';
  openMapWikiReader(currentWikiTitle, nextLang, currentWikiFallbackEn);
}

export function translateWikiReaderInPlace() {
  const iframe = document.getElementById('mapWikiIframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'EARTH_TIMES_TRANSLATE_EL' }, '*');
  }
}
window.translateWikiReaderInPlace = translateWikiReaderInPlace;

// Listen for translation status events from within the wiki iframe
window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'EARTH_TIMES_TRANSLATE_STATUS') {
    const btnLabel = document.getElementById('wikiTranslateBtnLabel');
    if (btnLabel) {
      if (e.data.isTranslating) {
        btnLabel.innerText = 'Μετάφραση...';
      } else if (e.data.isTranslated) {
        btnLabel.innerText = 'Επαναφορά (English)';
      } else {
        btnLabel.innerText = 'Μετάφραση στα Ελληνικά';
      }
    }
  }
});

export function closeMapWikiOverlay() {
  const overlay = document.getElementById('mapWikiOverlay');
  const iframe = document.getElementById('mapWikiIframe');
  if (iframe) iframe.srcdoc = '';
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
}

/**
 * In-Map Embedded Google Street View Overlay
 * Opens street view / 360 viewer inside the map canvas without external navigation
 */
export function openMapStreetView(lat, lng, title = '') {
  const overlay = document.getElementById('mapStreetViewOverlay');
  const iframe = document.getElementById('mapStreetViewIframe');
  const titleEl = document.getElementById('streetViewOverlayTitle');
  const coordsEl = document.getElementById('streetViewOverlayCoords');
  const directLink = document.getElementById('streetViewDirectLink');

  if (!overlay || !iframe) return;

  // Close other overlays
  closeMapVideoOverlay();
  closeMapWikiOverlay();
  closeDeepDiveOverlay();
  if (window.closeCityPresentation) window.closeCityPresentation();

  if (titleEl) {
    titleEl.innerText = title || 'Περιήγηση Δρόμων (Street View)';
  }
  if (coordsEl && lat !== undefined && lng !== undefined) {
    coordsEl.innerText = `${Number(lat).toFixed(4)}, ${Number(lng).toFixed(4)}`;
  }
  if (directLink && lat !== undefined && lng !== undefined) {
    directLink.href = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
  }

  // If a Google Maps API Key is provided by the user in settings, load the native 360° Street View embed directly
  const savedApiKey = localStorage.getItem('earthtimes_google_maps_key') || window.EARTH_TIMES_GOOGLE_API_KEY;
  if (savedApiKey && lat !== undefined && lng !== undefined) {
    iframe.src = `https://www.google.com/maps/embed/v1/streetview?key=${savedApiKey}&location=${lat},${lng}&heading=210&pitch=10&fov=85`;
  } else {
    // Google interactive embed centered on query or coords with zoom 17
    const queryParam = encodeURIComponent(title ? `${title}` : `${lat},${lng}`);
    iframe.src = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${queryParam}!6i17`;
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function closeMapStreetViewOverlay() {
  const overlay = document.getElementById('mapStreetViewOverlay');
  const iframe = document.getElementById('mapStreetViewIframe');
  if (iframe) iframe.src = 'about:blank';
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
  if (window.MapModule && typeof window.MapModule.invalidateMapSize === 'function') {
    window.MapModule.invalidateMapSize();
  }
}

export function openDeepDiveWikiReader() {
  if (activeDeepDiveData) {
    const title = activeDeepDiveData.wikiQuery || activeDeepDiveData.title;
    const fallbackEn = activeDeepDiveData.wikiEnQuery || '';
    openMapWikiReader(title, 'el', fallbackEn);
  }
}

export async function openDeepDive(keyOrTitle, fallbackSummary = '', contextEntityName = '') {
  const data = getDeepDiveData(keyOrTitle, fallbackSummary, contextEntityName);
  activeDeepDiveData = data;

  const overlay = document.getElementById('mapDeepDiveOverlay');
  const title = document.getElementById('deepDiveTitle');
  const badge = document.getElementById('deepDiveBadge');
  const content = document.getElementById('deepDiveContent');
  const wikiHeaderBtn = document.getElementById('deepDiveWikiHeaderBtn');

  if (!overlay || !content) return;

  // Close video overlay, wiki overlay, and street view overlay if open
  closeMapVideoOverlay();
  closeMapWikiOverlay();
  closeMapStreetViewOverlay();
  if (window.closeCityPresentation) window.closeCityPresentation();

  if (title) title.innerText = data.title;
  if (badge) badge.innerText = data.badge || data.category;
  if (wikiHeaderBtn) wikiHeaderBtn.classList.remove('hidden');

  const poiLive = data.liveCam ? { youtubeId: data.liveCam, title: data.title } : findPoiLiveCam(data.title || keyOrTitle);
  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const poiVidInfo = getPoiVideoInfo(data.title || keyOrTitle, curEntity?.id || '');

  let sectionsHtml = '';
  if (data.sections && data.sections.length) {
    sectionsHtml = data.sections.map(s => `
      <div class="bg-slate-900/90 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
        <h4 class="text-base font-bold text-amber-300 mb-2.5 flex items-center gap-2">
          <i class="fa-solid fa-bookmark text-amber-400 text-xs"></i> ${s.heading}
        </h4>
        <div class="text-slate-200 text-sm leading-relaxed">${s.content}</div>
      </div>
    `).join('');
  }

  // Initial Content with AI Narrative
  content.innerHTML = `
    <!-- Hero Image Banner -->
    <div class="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl h-64 sm:h-80 bg-slate-900">
      <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold w-fit mb-2 backdrop-blur-md">
          <i class="fa-solid fa-landmark"></i> ${data.category} • ${data.epoch}
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">${data.title}</h2>
        <p class="text-xs text-slate-300 mt-1 italic drop-shadow">${data.caption || ''}</p>
      </div>
    </div>

    ${poiVidInfo && poiVidInfo.youtubeId ? `
      <!-- 4K Video Tour Deep-Link Callout -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-slate-900 border border-rose-600/50 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/40 flex items-center justify-center text-lg">
            <i class="fa-solid fa-film"></i>
          </div>
          <div>
            <div class="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>${poiVidInfo.isDedicated ? 'Αποκλειστικό 4K Βίντεο' : (poiVidInfo.isExactTimestamp ? '4K Video Tour' : '4K Περιήγηση Πόλης')}</span>
              ${poiVidInfo.isDedicated ? '<span class="px-1.5 py-0.2 bg-amber-600 text-white text-[9px] font-extrabold rounded">DEDICATED</span>' : (poiVidInfo.isExactTimestamp ? '<span class="px-1.5 py-0.2 bg-rose-600 text-white text-[9px] font-extrabold rounded">TIMESTAMP</span>' : '')}
            </div>
            <div class="text-sm font-bold text-white">${poiVidInfo.label}</div>
          </div>
        </div>
        <button onclick="window.openPoiVideo('${escapeStr(data.title || keyOrTitle)}', '${escapeStr(curEntity?.id || '')}')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-rose-900/50 transition cursor-pointer">
          <i class="fa-solid fa-play text-xs"></i>
          <span>Προβολή στο Βίντεο 4K</span>
        </button>
      </div>
    ` : ''}

    ${poiLive ? `
      <!-- Live Camera Banner Callout -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-red-950/80 via-slate-900 to-slate-900 border border-red-600/50 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/40 flex items-center justify-center text-lg">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div>
            <div class="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>Ζωντανή Μετάδοση 24/7</span>
              <span class="px-1.5 py-0.2 bg-red-600 text-white text-[9px] font-extrabold rounded">LIVE CAM</span>
            </div>
            <div class="text-sm font-bold text-white">${poiLive.title || data.title}</div>
          </div>
        </div>
        <button onclick="window.openLiveCamModal('${poiLive.youtubeId}', '${escapeStr(poiLive.title || data.title)}')" class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-red-900/50 transition cursor-pointer">
          <i class="fa-solid fa-play text-xs"></i>
          <span>Προβολή Live Stream</span>
        </button>
      </div>
    ` : ''}

    <!-- Detailed Knowledge Chapters -->
    <div class="space-y-4">
      ${sectionsHtml}
    </div>

    <!-- 3. Live Wikipedia Encyclopedia Integration Section -->
    <div id="deepDiveWikiContainer" class="p-5 sm:p-6 bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-2xl">
      <div class="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center text-sm font-bold shadow">
            <i class="fa-brands fa-wikipedia-w"></i>
          </div>
          <div>
            <h4 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Εγκυκλοπαιδική Τεκμηρίωση Wikipedia
            </h4>
            <p id="wikiStatusLabel" class="text-[11px] text-slate-400">Αναζήτηση στην Ελληνική Βικιπαίδεια (με αγγλικό fallback)...</p>
          </div>
        </div>
        <div id="wikiLangBadge" class="hidden text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-600/50">
          EL
        </div>
      </div>

      <!-- Wiki Live Card Content -->
      <div id="wikiArticleBox" class="space-y-3">
        <div class="flex items-center gap-2 text-xs text-slate-400 py-3">
          <i class="fa-solid fa-circle-notch fa-spin text-sky-400"></i>
          <span>Φόρτωση επίσημης εγκυκλοπαιδικής σελίδας...</span>
        </div>
      </div>
    </div>

    <!-- Return to Map Button at bottom -->
    <div class="pt-6 border-t border-slate-800 flex justify-center">
      <button onclick="closeDeepDiveOverlay()" class="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:scale-105 text-white font-bold text-sm shadow-xl flex items-center gap-2.5 transition">
        <i class="fa-solid fa-arrow-left"></i>
        <span>Επιστροφή στον Χάρτη</span>
      </button>
    </div>
  `;

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();

  // Load Wikipedia article asynchronously with Greek priority & English fallback
  try {
    const wikiQuery = data.wikiQuery || data.title;
    const wikiEnQuery = data.wikiEnQuery || '';
    const article = await fetchWikiArticle(wikiQuery, wikiEnQuery);

    const wikiBox = document.getElementById('wikiArticleBox');
    const wikiStatus = document.getElementById('wikiStatusLabel');
    const wikiBadge = document.getElementById('wikiLangBadge');

    if (article && wikiBox) {
      if (wikiStatus) wikiStatus.innerText = `Πηγή: ${article.langLabel}`;
      if (wikiBadge) {
        wikiBadge.innerText = article.lang.toUpperCase();
        wikiBadge.classList.remove('hidden');
      }

      wikiBox.innerHTML = `
        <div class="flex flex-col sm:flex-row gap-4 items-start">
          ${article.thumbnail ? `
            <img src="${article.thumbnail}" alt="${article.title}" class="w-full sm:w-36 h-28 object-cover rounded-xl border border-slate-700 shadow shrink-0">
          ` : ''}
          <div class="flex-1 space-y-2">
            <h5 class="text-sm font-bold text-white flex items-center gap-2">
              <span>${article.title}</span>
              ${article.description ? `<span class="text-xs text-slate-400 font-normal italic">(${article.description})</span>` : ''}
            </h5>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${article.extract}
            </p>
          </div>
        </div>
        <div class="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(data.title)}')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-200"></i>
            <span>Bing AI Search</span>
          </button>
          <button onclick="openMapWikiReader('${escapeStr(article.rawTitle || article.title)}', '${article.lang}', '${escapeStr(data.wikiEnQuery || '')}')" class="px-4 py-2 rounded-xl bg-sky-600/20 hover:bg-sky-600/40 text-sky-300 hover:text-white border border-sky-500/40 text-xs font-bold transition flex items-center gap-2 shadow cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
            <span>Ανάγνωση ολόκληρου του άρθρου στον Χάρτη (${article.lang.toUpperCase()})</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      `;
    } else if (wikiBox) {
      if (wikiStatus) wikiStatus.innerText = 'Πρωτότυπη Ανάλυση EarthTimes AI';
      wikiBox.innerHTML = `
        <div class="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
          <i class="fa-solid fa-feather text-amber-400 text-sm mt-0.5"></i>
          <div class="flex-1">
            <p class="font-semibold text-slate-200">Πλήρης Πρωτότυπη Καταγραφή EarthTimes</p>
            <p class="text-slate-400 mt-0.5">Δεν βρέθηκε αυτοτελές λήμμα στη Wikipedia. Η ανάλυση που διαβάζετε παραπάνω συντέθηκε αποκλειστικά από την AI και το ψηφιακό αρχείο του EarthTimes.</p>
            <div class="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between gap-2">
              <span class="text-[11px] text-slate-400">Εναλλακτική διερεύνηση:</span>
              <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(data.title)}')" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                <i class="fa-solid fa-wand-magic-sparkles text-amber-200"></i>
                <span>Αναζήτηση στο Bing AI Search</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }
  } catch (err) {
    console.warn('[DeepDive] Wikipedia fetch error:', err);
  }
}

export function closeDeepDiveOverlay() {
  const overlay = document.getElementById('mapDeepDiveOverlay');
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
}

export function updateCurrentDate() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  // Greek locale format
  const formatted = now.toLocaleDateString('el-GR', options);
  const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  const el1 = document.getElementById('currentDateDisplay');
  if (el1) el1.innerText = capitalized;

  const el2 = document.getElementById('landingDateDisplay');
  if (el2) el2.innerText = capitalized;
}

export function updateStatusBadge(text) {
  const el = document.getElementById('flightStatusText');
  if (el) el.innerText = text;
}

export function updateJumpSelect(val) {
  const select = document.getElementById('quickJumpSelect');
  if (select) select.value = val;
}

export function updateBreadcrumbs(scope, stateOrCountry, city) {
  const bcWorld = document.getElementById('bc-world');
  const bcStateSep = document.getElementById('bc-state-sep');
  const bcState = document.getElementById('bc-state');
  const bcCitySep = document.getElementById('bc-city-sep');
  const bcCity = document.getElementById('bc-city');

  if (!bcWorld) return;

  if (scope === 'world') {
    bcWorld.className = 'text-emerald-400 font-bold flex items-center gap-1.5';
    if (bcStateSep) bcStateSep.classList.add('hidden');
    if (bcState) bcState.classList.add('hidden');
    if (bcCitySep) bcCitySep.classList.add('hidden');
    if (bcCity) bcCity.classList.add('hidden');
  } else if (scope === 'country') {
    bcWorld.className = 'text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition';
    if (bcStateSep) bcStateSep.classList.remove('hidden');
    if (bcState) {
      bcState.classList.remove('hidden');
      bcState.innerText = stateOrCountry ? stateOrCountry.name : 'Χώρα';
      bcState.className = 'text-sky-300 font-bold hover:text-sky-200 transition';
    }
    if (bcCitySep) bcCitySep.classList.add('hidden');
    if (bcCity) bcCity.classList.add('hidden');
  } else if (scope === 'state' || scope === 'usa') {
    bcWorld.className = 'text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition';
    if (bcStateSep) bcStateSep.classList.remove('hidden');
    if (bcState) {
      bcState.classList.remove('hidden');
      bcState.innerText = stateOrCountry ? stateOrCountry.name : 'ΗΠΑ';
      bcState.className = 'text-sky-300 font-medium hover:text-sky-200 transition';
    }
    if (bcCitySep) bcCitySep.classList.add('hidden');
    if (bcCity) bcCity.classList.add('hidden');
  } else if (scope === 'city') {
    bcWorld.className = 'text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition';
    if (bcStateSep) bcStateSep.classList.remove('hidden');
    if (bcState) {
      bcState.classList.remove('hidden');
      const isUsState = stateOrCountry && (stateOrCountry._countryId === 'usa' || stateOrCountry.type === 'state');
      bcState.innerText = stateOrCountry ? (isUsState ? `${stateOrCountry.name} (ΗΠΑ)` : stateOrCountry.name) : 'Ελλάδα';
      bcState.className = 'text-slate-400 hover:text-sky-300 transition';
    }
    if (bcCitySep) bcCitySep.classList.remove('hidden');
    if (bcCity) {
      bcCity.classList.remove('hidden');
      bcCity.innerText = city ? city.name : '';
    }
  }
}

export function updateBaseLayerUI(activeKey) {
  const layerMeta = {
    dark: { name: 'Χάρτες - Dark', icon: 'fa-moon text-amber-400' },
    satellite: { name: 'Χάρτες - Δορυφόρος', icon: 'fa-satellite text-emerald-400' },
    osm: { name: 'Χάρτες - Πολιτικός', icon: 'fa-map text-sky-400' },
    topo: { name: 'Χάρτες - Ανάγλυφο', icon: 'fa-mountain-sun text-teal-400' },
    googleRoad: { name: 'Χάρτες - Google Maps', icon: 'fa-diamond-turn-right text-red-400' },
    googleHybrid: { name: 'Χάρτες - Google Δορυφόρος', icon: 'fa-earth-americas text-emerald-300' },
    nasaNight: { name: 'Χάρτες - NASA Νύχτα', icon: 'fa-city text-yellow-300' }
  };
  const activeLabel = document.getElementById('activeMapLayerName');
  if (activeLabel && layerMeta[activeKey]) {
    activeLabel.innerText = layerMeta[activeKey].name;
  }
  const activeIcon = document.getElementById('activeMapLayerIcon');
  if (activeIcon && layerMeta[activeKey]) {
    activeIcon.className = `fa-solid ${layerMeta[activeKey].icon}`;
  }
}

export function updatePoiFilterButtons(activeCategory) {
  const filterNames = {
    all: 'Σημεία (Όλα)',
    history: 'Σημεία (Ιστορικά)',
    culture: 'Σημεία (Πολιτισμός)',
    nature: 'Σημεία (Φύση)'
  };
  const activeLabel = document.getElementById('activeSpotsFilterName');
  if (activeLabel && filterNames[activeCategory]) {
    activeLabel.innerText = filterNames[activeCategory];
  }
}

export function updateTabButtons(activeTab) {
  const tabs = ['geo', 'hist', 'cult', 'guide', 'gastro', 'eco', 'demo', 'timeline', 'admin'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-${t}`);
    if (!btn) return;
    if (t === activeTab) {
      btn.className = 'tab-btn py-2.5 px-3 border-b-2 border-sky-500 text-sky-400 font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap bg-slate-800/30';
    } else {
      btn.className = 'tab-btn py-2.5 px-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 whitespace-nowrap';
    }
  });
}

// Timeline Tab Interactive Month/Day/Entry Hierarchy State
let selectedTimelineMonth = null;
let selectedTimelineDay = null;
let openTimelineEntryId = null;

window.selectTimelineMonth = function(monthNum) {
  selectedTimelineMonth = (selectedTimelineMonth === monthNum) ? null : monthNum;
  selectedTimelineDay = null;
  openTimelineEntryId = null;
  if (window.renderTimelineTabInPlace) window.renderTimelineTabInPlace();
};

window.closeTimelineMonth = function() {
  selectedTimelineMonth = null;
  selectedTimelineDay = null;
  openTimelineEntryId = null;
  if (window.renderTimelineTabInPlace) window.renderTimelineTabInPlace();
};

window.selectTimelineDay = function(dayNum) {
  selectedTimelineDay = (selectedTimelineDay === dayNum) ? null : dayNum;
  openTimelineEntryId = null;
  if (window.renderTimelineTabInPlace) window.renderTimelineTabInPlace();
};

window.closeTimelineDay = function() {
  selectedTimelineDay = null;
  openTimelineEntryId = null;
  if (window.renderTimelineTabInPlace) window.renderTimelineTabInPlace();
};

window.toggleTimelineEntry = function(entryId) {
  openTimelineEntryId = (openTimelineEntryId === entryId) ? null : entryId;
  if (window.renderTimelineTabInPlace) window.renderTimelineTabInPlace();
};

window.renderTimelineTabInPlace = function() {
  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const yr = window.getSelectedTimeYear ? window.getSelectedTimeYear() : 2026;
  const spots = window.getTimeCapsules ? window.getTimeCapsules() : [];
  const isPlay = window.isTimePlaybackRunning ? window.isTimePlaybackRunning() : false;
  if (curEntity) {
    renderTabContent('timeline', curEntity, yr, spots, isPlay);
  }
};

window.showSpotInTimeline = function(spotId, year = null) {
  if (window.switchTab) {
    window.switchTab('timeline');
  }
  const allSpots = window.getTimeCapsules ? window.getTimeCapsules() : [];
  const spot = allSpots.find(s => s.id === spotId);
  if (spot && spot.chronicles && spot.chronicles.length) {
    let targetYear = (year && year !== 'all') ? year : (window.getSelectedTimeYear ? window.getSelectedTimeYear() : 2026);
    if (spot.isUnknownDate || spot.chronicles.some(c => c.fromYear === null || c.isUnknownDate || c.date === 'unknown')) {
      targetYear = 'unknown';
    }

    if (window.onTimeSliderChange && targetYear) {
      window.onTimeSliderChange(targetYear);
    }

    let chronicle = null;
    if (targetYear === 'unknown') {
      chronicle = spot.chronicles.find(c => c.fromYear === null || c.isUnknownDate || c.date === 'unknown') || spot.chronicles[0];
    } else if (targetYear === 'all') {
      chronicle = spot.chronicles[spot.chronicles.length - 1];
    } else {
      const y = parseInt(targetYear, 10);
      chronicle = spot.chronicles.find(c => c.fromYear <= y && (c.toYear === null || c.toYear >= y)) || spot.chronicles[0];
    }

    if (chronicle) {
      let mNum = 'unknown';
      let dNum = 'unknown';
      if (chronicle.date && chronicle.date !== 'unknown' && chronicle.date.length >= 10) {
        mNum = parseInt(chronicle.date.slice(5, 7), 10) || 'unknown';
        dNum = parseInt(chronicle.date.slice(8, 10), 10) || 'unknown';
      }
      selectedTimelineMonth = mNum;
      selectedTimelineDay = dNum;
      openTimelineEntryId = chronicle.id || `${spot.id}-${targetYear}-${mNum}-${dNum}`;
    }
  }

  if (window.renderTimelineTabInPlace) {
    window.renderTimelineTabInPlace();
  }
  const container = document.getElementById('tabContent');
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

let activeDossierClockTimer = null;

const COUNTRY_TIMEZONES = {
  afghanistan: 'Asia/Kabul',
  albania: 'Europe/Tirane',
  algeria: 'Africa/Algiers',
  andorra: 'Europe/Andorra',
  angola: 'Africa/Luanda',
  'antigua-and-barbuda': 'America/Antigua',
  argentina: 'America/Argentina/Buenos_Aires',
  armenia: 'Asia/Yerevan',
  australia: 'Australia/Sydney',
  austria: 'Europe/Vienna',
  azerbaijan: 'Asia/Baku',
  bahamas: 'America/Nassau',
  bahrain: 'Asia/Bahrain',
  bangladesh: 'Asia/Dhaka',
  barbados: 'America/Barbados',
  belarus: 'Europe/Minsk',
  belgium: 'Europe/Brussels',
  belize: 'America/Belize',
  benin: 'Africa/Porto-Novo',
  bhutan: 'Asia/Thimphu',
  bolivia: 'America/La_Paz',
  bosnia: 'Europe/Sarajevo',
  botswana: 'Africa/Gaborone',
  brazil: 'America/Sao_Paulo',
  brunei: 'Asia/Brunei',
  bulgaria: 'Europe/Sofia',
  'burkina-faso': 'Africa/Ouagadougou',
  burundi: 'Africa/Bujumbura',
  cambodia: 'Asia/Phnom_Penh',
  cameroon: 'Africa/Douala',
  canada: 'America/Toronto',
  'cape-verde': 'Atlantic/Cape_Verde',
  'central-african-republic': 'Africa/Bangui',
  chad: 'Africa/Ndjamena',
  chile: 'America/Santiago',
  china: 'Asia/Shanghai',
  colombia: 'America/Bogota',
  comoros: 'Indian/Comoro',
  congo: 'Africa/Brazzaville',
  'cook-islands': 'Pacific/Rarotonga',
  'costa-rica': 'America/Costa_Rica',
  croatia: 'Europe/Zagreb',
  cuba: 'America/Havana',
  cyprus: 'Asia/Nicosia',
  czech: 'Europe/Prague',
  denmark: 'Europe/Copenhagen',
  djibouti: 'Africa/Djibouti',
  dominica: 'America/Dominica',
  'dominican-republic': 'America/Santo_Domingo',
  'dr-congo': 'Africa/Kinshasa',
  'east-timor': 'Asia/Dili',
  ecuador: 'America/Guayaquil',
  egypt: 'Africa/Cairo',
  'el-salvador': 'America/El_Salvador',
  'equatorial-guinea': 'Africa/Malabo',
  eritrea: 'Africa/Asmara',
  estonia: 'Europe/Tallinn',
  eswatini: 'Africa/Mbabane',
  ethiopia: 'Africa/Addis_Ababa',
  fiji: 'Pacific/Fiji',
  finland: 'Europe/Helsinki',
  france: 'Europe/Paris',
  'french-polynesia': 'Pacific/Tahiti',
  gabon: 'Africa/Libreville',
  gambia: 'Africa/Banjul',
  georgia: 'Asia/Tbilisi',
  germany: 'Europe/Berlin',
  ghana: 'Africa/Accra',
  greece: 'Europe/Athens',
  grenada: 'America/Grenada',
  guatemala: 'America/Guatemala',
  guinea: 'Africa/Conakry',
  'guinea-bissau': 'Africa/Bissau',
  guyana: 'America/Guyana',
  haiti: 'America/Port-au-Prince',
  honduras: 'America/Tegucigalpa',
  hungary: 'Europe/Budapest',
  iceland: 'Atlantic/Reykjavik',
  india: 'Asia/Kolkata',
  indonesia: 'Asia/Jakarta',
  iran: 'Asia/Tehran',
  iraq: 'Asia/Baghdad',
  ireland: 'Europe/Dublin',
  israel: 'Asia/Jerusalem',
  italy: 'Europe/Rome',
  'ivory-coast': 'Africa/Abidjan',
  jamaica: 'America/Jamaica',
  japan: 'Asia/Tokyo',
  jordan: 'Asia/Amman',
  kazakhstan: 'Asia/Almaty',
  kenya: 'Africa/Nairobi',
  kiribati: 'Pacific/Tarawa',
  kuwait: 'Asia/Kuwait',
  kyrgyzstan: 'Asia/Bishkek',
  laos: 'Asia/Vientiane',
  latvia: 'Europe/Riga',
  lebanon: 'Asia/Beirut',
  lesotho: 'Africa/Maseru',
  liberia: 'Africa/Monrovia',
  libya: 'Africa/Tripoli',
  liechtenstein: 'Europe/Vaduz',
  lithuania: 'Europe/Vilnius',
  luxembourg: 'Europe/Luxembourg',
  madagascar: 'Africa/Antananarivo',
  malawi: 'Africa/Blantyre',
  malaysia: 'Asia/Kuala_Lumpur',
  maldives: 'Indian/Maldives',
  mali: 'Africa/Bamako',
  malta: 'Europe/Malta',
  'marshall-islands': 'Pacific/Majuro',
  mauritania: 'Africa/Nouakchott',
  mauritius: 'Indian/Mauritius',
  mexico: 'America/Mexico_City',
  micronesia: 'Pacific/Pohnpei',
  moldova: 'Europe/Chisinau',
  monaco: 'Europe/Monaco',
  mongolia: 'Asia/Ulaanbaatar',
  montenegro: 'Europe/Podgorica',
  morocco: 'Africa/Casablanca',
  mozambique: 'Africa/Maputo',
  myanmar: 'Asia/Yangon',
  namibia: 'Africa/Windhoek',
  nauru: 'Pacific/Nauru',
  nepal: 'Asia/Kathmandu',
  netherlands: 'Europe/Amsterdam',
  'new-caledonia': 'Pacific/Noumea',
  'new-zealand': 'Pacific/Auckland',
  nicaragua: 'America/Managua',
  niger: 'Africa/Niamey',
  nigeria: 'Africa/Lagos',
  'north-korea': 'Asia/Pyongyang',
  'north-macedonia': 'Europe/Skopje',
  norway: 'Europe/Oslo',
  oman: 'Asia/Muscat',
  pakistan: 'Asia/Karachi',
  palau: 'Pacific/Palau',
  palestine: 'Asia/Gaza',
  panama: 'America/Panama',
  'papua-new-guinea': 'Pacific/Port_Moresby',
  paraguay: 'America/Asuncion',
  peru: 'America/Lima',
  philippines: 'Asia/Manila',
  poland: 'Europe/Warsaw',
  portugal: 'Europe/Lisbon',
  qatar: 'Asia/Qatar',
  romania: 'Europe/Bucharest',
  russia: 'Europe/Moscow',
  rwanda: 'Africa/Kigali',
  'saint-kitts-and-nevis': 'America/St_Kitts',
  'saint-lucia': 'America/St_Lucia',
  'saint-vincent-and-the-grenadines': 'America/St_Vincent',
  samoa: 'Pacific/Apia',
  'san-marino': 'Europe/San_Marino',
  'sao-tome-and-principe': 'Africa/Sao_Tome',
  'saudi-arabia': 'Asia/Riyadh',
  senegal: 'Africa/Dakar',
  serbia: 'Europe/Belgrade',
  seychelles: 'Indian/Mahe',
  'sierra-leone': 'Africa/Freetown',
  singapore: 'Asia/Singapore',
  slovakia: 'Europe/Bratislava',
  slovenia: 'Europe/Ljubljana',
  'solomon-islands': 'Pacific/Guadalcanal',
  somalia: 'Africa/Mogadishu',
  'south-africa': 'Africa/Johannesburg',
  'south-korea': 'Asia/Seoul',
  'south-sudan': 'Africa/Juba',
  spain: 'Europe/Madrid',
  'sri-lanka': 'Asia/Colombo',
  sudan: 'Africa/Khartoum',
  suriname: 'America/Paramaribo',
  sweden: 'Europe/Stockholm',
  switzerland: 'Europe/Zurich',
  syria: 'Asia/Damascus',
  taiwan: 'Asia/Taipei',
  tajikistan: 'Asia/Dushanbe',
  tanzania: 'Africa/Dar_es_Salaam',
  thailand: 'Asia/Bangkok',
  togo: 'Africa/Lome',
  tonga: 'Pacific/Tongatapu',
  'trinidad-and-tobago': 'America/Port_of_Spain',
  tunisia: 'Africa/Tunis',
  turkey: 'Europe/Istanbul',
  turkmenistan: 'Asia/Ashgabat',
  tuvalu: 'Pacific/Funafuti',
  uae: 'Asia/Dubai',
  uganda: 'Africa/Kampala',
  uk: 'Europe/London',
  ukraine: 'Europe/Kyiv',
  'united-kingdom': 'Europe/London',
  uruguay: 'America/Montevideo',
  usa: 'America/New_York',
  uzbekistan: 'Asia/Tashkent',
  vanuatu: 'Pacific/Efate',
  vatican: 'Europe/Vatican',
  venezuela: 'America/Caracas',
  vietnam: 'Asia/Ho_Chi_Minh',
  yemen: 'Asia/Aden',
  zambia: 'Africa/Lusaka',
  zimbabwe: 'Africa/Harare'
};

const US_STATE_TIMEZONES = {
  connecticut: 'America/New_York',
  delaware: 'America/New_York',
  florida: 'America/New_York',
  georgia: 'America/New_York',
  maine: 'America/New_York',
  maryland: 'America/New_York',
  massachusetts: 'America/New_York',
  'new-hampshire': 'America/New_York',
  'new-jersey': 'America/New_York',
  'new-york': 'America/New_York',
  'north-carolina': 'America/New_York',
  ohio: 'America/New_York',
  pennsylvania: 'America/New_York',
  'rhode-island': 'America/New_York',
  'south-carolina': 'America/New_York',
  vermont: 'America/New_York',
  virginia: 'America/New_York',
  'washington-dc': 'America/New_York',
  'west-virginia': 'America/New_York',
  alabama: 'America/Chicago',
  arkansas: 'America/Chicago',
  illinois: 'America/Chicago',
  iowa: 'America/Chicago',
  kansas: 'America/Chicago',
  kentucky: 'America/New_York',
  louisiana: 'America/Chicago',
  minnesota: 'America/Chicago',
  mississippi: 'America/Chicago',
  missouri: 'America/Chicago',
  nebraska: 'America/Chicago',
  'north-dakota': 'America/Chicago',
  oklahoma: 'America/Chicago',
  'south-dakota': 'America/Chicago',
  tennessee: 'America/Chicago',
  texas: 'America/Chicago',
  wisconsin: 'America/Chicago',
  arizona: 'America/Phoenix',
  colorado: 'America/Denver',
  idaho: 'America/Boise',
  montana: 'America/Denver',
  'new-mexico': 'America/Denver',
  utah: 'America/Denver',
  wyoming: 'America/Denver',
  california: 'America/Los_Angeles',
  nevada: 'America/Los_Angeles',
  oregon: 'America/Los_Angeles',
  'washington-state': 'America/Los_Angeles',
  alaska: 'America/Anchorage',
  hawaii: 'Pacific/Honolulu'
};

export function stopDossierClock() {
  if (activeDossierClockTimer) {
    clearInterval(activeDossierClockTimer);
    activeDossierClockTimer = null;
  }
}

export function getEntityLocalTime(entity, entityType = 'city') {
  const now = new Date();
  
  if (entityType === 'world' || !entity) {
    const hh = String(now.getUTCHours()).padStart(2, '0');
    const mm = String(now.getUTCMinutes()).padStart(2, '0');
    const ss = String(now.getUTCSeconds()).padStart(2, '0');
    let dateStr = '';
    try {
      dateStr = new Intl.DateTimeFormat('el-GR', {
        timeZone: 'UTC',
        day: 'numeric',
        month: 'short'
      }).format(now);
    } catch (e) {
      dateStr = `${now.getUTCDate()} ${now.getUTCMonth() + 1}`;
    }
    return {
      time: `${hh}:${mm}`,
      seconds: ss,
      date: dateStr,
      isDay: true,
      title: 'Παγκόσμια Ώρα (UTC)'
    };
  }

  const coords = entity.coords || entity.coordinates || (entity.center ? [entity.center[0], entity.center[1]] : null);
  const lat = (coords && typeof coords[0] === 'number') ? coords[0] : 0;
  const lng = (coords && typeof coords[1] === 'number') ? coords[1] : 0;

  let tz = entity.timeZone || entity.timezone;
  let iana = null;

  // 1. Direct entity.timeZone / entity.timezone parsing
  if (tz) {
    const m = tz.match(/\(([^)]+)\)/);
    if (m) {
      iana = m[1].trim();
    } else if (tz.includes('/')) {
      iana = tz.trim();
    }
  }

  // 2. State / Country / City resolution
  if (!iana) {
    const isUsCity = CITY_TO_STATE && entity.id && Boolean(CITY_TO_STATE[entity.id]);
    const sId = isUsCity ? CITY_TO_STATE[entity.id] : (entity._stateId || entity.stateId);
    const countryMapped = (CITY_TO_COUNTRY && entity.id && CITY_TO_COUNTRY[entity.id]) || null;
    const cId = entity._countryId || countryMapped || entity.countryId || (COUNTRY_TIMEZONES[entity.id] ? entity.id : null);

    if (sId && US_STATE_TIMEZONES[sId] && (cId === 'usa' || entityType === 'state' || isUsCity)) {
      iana = US_STATE_TIMEZONES[sId];
    } else if (cId && COUNTRY_TIMEZONES[cId]) {
      iana = COUNTRY_TIMEZONES[cId];
    } else if (sId && US_STATE_TIMEZONES[sId]) {
      iana = US_STATE_TIMEZONES[sId];
    }
  }

  let timeStr = '';
  let secStr = '';
  let dateStr = '';

  // 3. Try formatting with IANA timezone
  if (iana) {
    try {
      const parts = new Intl.DateTimeFormat('el-GR', {
        timeZone: iana,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).formatToParts(now);

      const h = parts.find(p => p.type === 'hour')?.value || '00';
      const m = parts.find(p => p.type === 'minute')?.value || '00';
      const s = parts.find(p => p.type === 'second')?.value || '00';
      timeStr = `${h}:${m}`;
      secStr = s;

      dateStr = new Intl.DateTimeFormat('el-GR', {
        timeZone: iana,
        day: 'numeric',
        month: 'short'
      }).format(now);
    } catch (e) {
      iana = null;
      timeStr = '';
    }
  }

  // 4. If IANA failed or unavailable, try explicit UTC / GMT offset e.g. 'UTC-3', 'GMT-4', 'UTC+9:30'
  if (!timeStr && tz) {
    const utcMatch = tz.match(/(?:UTC|GMT)\s*([+-]\d+(?::\d+|\.\d+)?)/i);
    if (utcMatch) {
      const offsetRaw = utcMatch[1];
      let offsetHours = 0;
      if (offsetRaw.includes(':')) {
        const [oh, om] = offsetRaw.split(':').map(Number);
        offsetHours = oh + (oh < 0 ? -om / 60 : om / 60);
      } else {
        offsetHours = parseFloat(offsetRaw);
      }
      const targetMs = now.getTime() + (offsetHours * 3600000);
      const targetDate = new Date(targetMs);

      const hh = String(targetDate.getUTCHours()).padStart(2, '0');
      const mm = String(targetDate.getUTCMinutes()).padStart(2, '0');
      const ss = String(targetDate.getUTCSeconds()).padStart(2, '0');
      timeStr = `${hh}:${mm}`;
      secStr = ss;

      try {
        dateStr = new Intl.DateTimeFormat('el-GR', {
          timeZone: 'UTC',
          day: 'numeric',
          month: 'short'
        }).format(targetDate);
      } catch (e) {
        dateStr = `${targetDate.getUTCDate()} ${targetDate.getUTCMonth() + 1}`;
      }
    }
  }

  // 5. Fallback to longitude offset in pure UTC (browser-timezone independent)
  if (!timeStr) {
    const offsetHours = Math.round(lng / 15.0);
    const targetMs = now.getTime() + (offsetHours * 3600000);
    const targetDate = new Date(targetMs);

    const hh = String(targetDate.getUTCHours()).padStart(2, '0');
    const mm = String(targetDate.getUTCMinutes()).padStart(2, '0');
    const ss = String(targetDate.getUTCSeconds()).padStart(2, '0');
    timeStr = `${hh}:${mm}`;
    secStr = ss;

    try {
      dateStr = new Intl.DateTimeFormat('el-GR', {
        timeZone: 'UTC',
        day: 'numeric',
        month: 'short'
      }).format(targetDate);
    } catch (e) {
      dateStr = `${targetDate.getUTCDate()} ${targetDate.getUTCMonth() + 1}`;
    }
  }

  // Astronomical day/night calculation using the subsolar point
  let isDay = true;
  try {
    const { lat: sunLat, lon: sunLon } = calculateSubsolarPoint(now);
    const rad = Math.PI / 180.0;
    const phi1 = lat * rad;
    const phi0 = sunLat * rad;
    const dLambda = (lng - sunLon) * rad;
    const cosPsi = Math.sin(phi1) * Math.sin(phi0) + Math.cos(phi1) * Math.cos(phi0) * Math.cos(dLambda);
    isDay = cosPsi > 0;
  } catch (e) {
    const h = parseInt(timeStr.split(':')[0], 10);
    isDay = h >= 6 && h < 20;
  }

  let title = 'Τοπική Ώρα';
  if (entityType === 'country') {
    title = entity.capital ? `Ώρα (${entity.capital})` : 'Ώρα Χώρας';
  }

  return {
    time: timeStr,
    seconds: secStr,
    date: dateStr,
    isDay,
    title
  };
}

export function updateDossierClock(entity, entityType) {
  const stat4Container = document.getElementById('stat4-container');
  if (!stat4Container) return;

  const stat4Title = document.getElementById('stat4-title');
  const stat4Time = document.getElementById('stat4-time');
  const stat4Sec = document.getElementById('stat4-sec');
  const stat4Date = document.getElementById('stat4-date');
  const stat4Icon = document.getElementById('stat4-icon');

  const info = getEntityLocalTime(entity, entityType);

  if (stat4Title) stat4Title.innerText = info.title;
  if (stat4Time) stat4Time.innerText = info.time;
  if (stat4Sec) stat4Sec.innerText = `:${info.seconds}`;
  if (stat4Date) stat4Date.innerText = info.date;

  if (stat4Icon) {
    if (entityType === 'world') {
      stat4Icon.className = 'fa-solid fa-earth-americas text-sky-400 text-[10px]';
    } else if (info.isDay) {
      stat4Icon.className = 'fa-solid fa-sun text-amber-400 text-[10px] animate-pulse';
    } else {
      stat4Icon.className = 'fa-solid fa-moon text-indigo-300 text-[10px]';
    }
  }

  const stat4 = document.getElementById('stat4');
  if (stat4) {
    if (entityType === 'world') {
      stat4.className = 'text-xs sm:text-sm font-bold text-sky-300 truncate flex items-center justify-center gap-0.5';
    } else if (info.isDay) {
      stat4.className = 'text-xs sm:text-sm font-bold text-amber-300 truncate flex items-center justify-center gap-0.5';
    } else {
      stat4.className = 'text-xs sm:text-sm font-bold text-indigo-200 truncate flex items-center justify-center gap-0.5';
    }
  }
}

export function renderDossier(entity, entityType = 'state', currentTab = 'geo', activeYear = null, activeSpots = [], isPlaying = false) {
  if (!entity) return;

  const badgeCategory = document.getElementById('badgeCategory');
  if (badgeCategory) {
    if (entityType === 'world') {
      badgeCategory.classList.remove('hidden');
      badgeCategory.innerText = 'Παγκόσμιος Φάκελος Γης';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-600/50 shrink-0';
    } else if (entityType === 'country') {
      badgeCategory.classList.remove('hidden');
      badgeCategory.innerText = 'Εθνικός Φάκελος Χώρας';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-600/50 shrink-0';
    } else if (entityType === 'city') {
      // User request: Don't show 'Αστικός Φάκελος' tag
      badgeCategory.classList.add('hidden');
    } else {
      badgeCategory.classList.remove('hidden');
      badgeCategory.innerText = 'Πολιτειακός / Περιφερειακός Φάκελος';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-sky-900/60 text-sky-300 border border-sky-700/50 shrink-0';
    }
  }

  const badgeNickname = document.getElementById('badgeNickname');
  if (badgeNickname) {
    if (entityType === 'city') {
      // Beside city name: display nickname or curated description
      const desc = entity.nickname 
        ? `«${entity.nickname.replace(/^[«"]+|[»"]+$/g, '')}»` 
        : (entity.badge || entity.tagline || '');
      badgeNickname.innerText = desc;
      badgeNickname.className = 'text-xs sm:text-sm text-amber-400 font-medium italic';
    } else {
      badgeNickname.innerText = entity.nickname ? `"${entity.nickname}"` : '';
      badgeNickname.className = 'text-xs text-amber-400/90 italic';
    }
  }

  const entityTitle = document.getElementById('entityTitle');
  if (entityTitle) entityTitle.innerText = entity.name;

  const entitySubtitle = document.getElementById('entitySubtitle');
  if (entitySubtitle) {
    if (entityType === 'world') {
      entitySubtitle.innerText = `${entity.englishName} • 3ος Πλανήτης Ηλιακού Συστήματος`;
    } else if (entityType === 'country') {
      entitySubtitle.innerText = `${entity.englishName} • Πρωτεύουσα: ${entity.capital || 'Αθήνα'}`;
    } else if (entityType === 'city') {
      const sub = [entity.englishName];
      if (entity.countryName) sub.push(entity.countryName);
      else if (entity.stateName) sub.push(entity.stateName);
      entitySubtitle.innerText = sub.filter(Boolean).join(' • ');
    } else {
      entitySubtitle.innerText = `${entity.englishName} • Πρωτεύουσα: ${entity.capital || 'Βοστώνη'}`;
    }
  }

  const stat1Label = document.getElementById('stat1-label');
  const stat2Label = document.getElementById('stat2-label');
  const stat3Label = document.getElementById('stat3-label');
  const stat1 = document.getElementById('stat1');
  const stat2 = document.getElementById('stat2');
  const stat3 = document.getElementById('stat3');

  if (entityType === 'world') {
    if (stat1Label) stat1Label.innerText = 'Πληθυσμός';
    if (stat1) { stat1.innerText = entity.stats?.population || '8.15 Δισ.'; stat1.title = stat1.innerText; }

    if (stat2Label) stat2Label.innerText = 'Κράτη / Ήπειροι';
    if (stat2) { stat2.innerText = `${entity.stats?.countries?.split(' ')[0] || '195'} / 7`; stat2.title = stat2.innerText; }

    if (stat3Label) stat3Label.innerText = 'Επιφάνεια';
    if (stat3) { stat3.innerText = entity.stats?.area || '510M km²'; stat3.title = stat3.innerText; }
  } else if (entityType === 'country') {
    if (stat1Label) stat1Label.innerText = 'Πληθυσμός';
    if (stat1) { stat1.innerText = entity.stats?.population || '-'; stat1.title = stat1.innerText; }

    if (stat2Label) stat2Label.innerText = 'Ίδρυση / Ανεξ.';
    if (stat2) { stat2.innerText = entity.stats?.founded || '-'; stat2.title = stat2.innerText; }

    if (stat3Label) stat3Label.innerText = 'Έκταση';
    if (stat3) { stat3.innerText = entity.stats?.area || entity.stats?.gdp || '-'; stat3.title = stat3.innerText; }
  } else {
    // City
    if (stat1Label) stat1Label.innerText = 'Πληθυσμός';
    if (stat1) { stat1.innerText = entity.stats?.population || entity.population || '-'; stat1.title = stat1.innerText; }

    if (stat2Label) stat2Label.innerText = 'Ίδρυση';
    if (stat2) { stat2.innerText = entity.stats?.founded || entity.founded || '-'; stat2.title = stat2.innerText; }

    if (stat3Label) stat3Label.innerText = 'Ορόσημο';
    const landmarkVal = entity.landmark || entity.stats?.landmark || entity.stats?.famousFor || entity.badge || (entity.stats?.elevation ? 'Υψομ. ' + entity.stats.elevation : (entity.stats?.area || '-'));
    if (stat3) { stat3.innerText = landmarkVal; stat3.title = landmarkVal; }
  }

  // Update Live Local Time & Date in Dossier Pill 4
  if (activeDossierClockTimer) {
    clearInterval(activeDossierClockTimer);
    activeDossierClockTimer = null;
  }
  updateDossierClock(entity, entityType);
  activeDossierClockTimer = setInterval(() => {
    updateDossierClock(entity, entityType);
  }, 1000);

  const docuQuote = document.getElementById('docuQuote');
  if (docuQuote) docuQuote.innerText = entity.quote || '';

  // Show/Hide City Video Tour dropdown menu
  const cityVideoContainer = document.getElementById('cityVideoContainer');
  const cityVideoDropdown = document.getElementById('cityVideoDropdown');
  if (cityVideoContainer) {
    if (entityType === 'city' && entity.id && CITY_VIDEOS[entity.id]) {
      cityVideoContainer.classList.remove('hidden');
      renderCityVideoDropdownMenu(entity.id);
    } else {
      cityVideoContainer.classList.add('hidden');
      if (cityVideoDropdown) cityVideoDropdown.classList.add('hidden');
    }
  }

  // Show/Hide City Street View Button
  const cityStreetViewBtn = document.getElementById('cityStreetViewBtn');
  if (cityStreetViewBtn) {
    if (entityType === 'city' && entity.coords) {
      cityStreetViewBtn.classList.remove('hidden');
    } else {
      cityStreetViewBtn.classList.add('hidden');
    }
  }

  // Show/Hide City Presentation Button
  const cityPresentationBtn = document.getElementById('cityPresentationBtn');
  if (cityPresentationBtn) {
    if (entityType === 'city') {
      cityPresentationBtn.classList.remove('hidden');
    } else {
      cityPresentationBtn.classList.add('hidden');
    }
  }

  // Show/Hide Entire City Action Buttons Row
  const cityActionsContainer = document.getElementById('cityActionsContainer');
  if (cityActionsContainer) {
    if (entityType === 'city') {
      cityActionsContainer.classList.remove('hidden');
    } else {
      cityActionsContainer.classList.add('hidden');
    }
  }

  updateTabButtons(currentTab);
  renderTabContent(currentTab, entity, activeYear, activeSpots, isPlaying);
}

export function updateTimelineLiveIndicator(isPlaying) {
  const dot = document.getElementById('timelineTabDot');
  if (dot) {
    if (isPlaying) dot.classList.remove('hidden');
    else dot.classList.add('hidden');
  }
}

export function getHistoricalContextForEra(entity, year) {
  if (year === 'unknown') {
    return {
      era: 'Αρχειακό Υλικό & Τεκμήρια Άγνωστης Χρονολογίας',
      summary: 'Ιστορικές μαρτυρίες, παλιές φωτογραφίες και σημεία της πόλης για τα οποία δεν έχει διασταυρωθεί η ακριβής χρονολογία λήψης ή κατασκευής. Η κοινότητα και οι τοπικοί ερευνητές μπορούν να συνεισφέρουν πληροφορίες για την ταυτοποίησή τους.',
      keyFacts: [
        'Συνεργατική τεκμηρίωση και ταυτοποίηση από τους πολίτες',
        'Διασταύρωση αρχιτεκτονικών και ιστορικών στοιχείων',
        'Δυνατότητα υποβολής διευκρινίσεων μέσω της φόρμας σημείου'
      ]
    };
  }
  const y = (year === 'all' || !year) ? 2026 : parseInt(year, 10);
  const id = entity.id || '';

  if (id === 'kozani') {
    if (y < 1920) {
      return {
        era: '1900 - 1920: Απελευθέρωση & Μακεδονική Αρχοντιά',
        summary: 'Η Κοζάνη απελευθερώνεται από τον οθωμανικό ζυγό στις 11 Οκτωβρίου 1912 μετά τη μάχη του Σαρανταπόρου. Στην κεντρική πλατεία δεσπόζει το καμπαναριό του Μαμάτσιου (1855) και τα πέτρινα αρχοντικά των εμπόρων κρόκου και γούνας.',
        keyFacts: [
          '1912: Είσοδος του Ελληνικού Στρατού και πανηγυρισμοί στην Πλατεία Νίκης',
          'Παραδοσιακά χάνια και καφενεία αγωγιατών γύρω από τον Άγιο Νικόλαο',
          'Άνθηση της καλλιέργειας και εξαγωγής του κρόκου Κοζάνης στην Κεντρική Ευρώπη'
        ]
      };
    } else if (y < 1945) {
      return {
        era: '1920 - 1945: Μεσοπόλεμος, Γράμματα & Παραδοσιακοί Φανοί',
        summary: 'Περίοδος πνευματικής άνθησης και διαφύλαξης των τοπικών παραδόσεων. Στο ιστορικό αναγνωστήριο φυλάσσεται η αυθεντική Χάρτα του Ρήγα Φεραίου (1797), ενώ στις ιστορικές γειτονιές (Σκ\'ρκα, Κεραμαριό, Πλατάνια) ανάβουν οι μεγάλοι Φανοί.',
        keyFacts: [
          'Ενίσχυση της ιστορικής Κοβενταρείου Δημοτικής Βιβλιοθήκης με χιλιάδες παλαίτυπα',
          'Ολονύχτια γλέντια γύρω από τους Φανούς με σκωπτικά αποκριάτικα τραγούδια',
          'Η πόλη διατηρεί τον παραδοσιακό μακεδονικό πολεοδομικό της ιστό'
        ]
      };
    } else if (y < 1970) {
      return {
        era: '1945 - 1970: Μεταπολεμική Ανοικοδόμηση & Πρώτα Ενεργειακά Έργα',
        summary: 'Μεταπολεμική αναγέννηση της Κοζάνης. Η κεντρική πλατεία ασφαλτοστρώνεται, ανοίγουν τα φημισμένα ζαχαροπλαστεία με τα ζεστά κιχιά, και ξεκινά η εκμετάλλευση των λιγνιτικών κοιτασμάτων που θα μετατρέψει την πόλη σε ενεργειακό κέντρο.',
        keyFacts: [
          'Έναρξη λειτουργίας των μεγάλων μονάδων παραγωγής ηλεκτρικής ενέργειας της ΔΕΗ',
          'Τα ζαχαροπλαστεία της Πλατείας Νίκης γίνονται το επίκεντρο της κοινωνικής ζωής',
          'Καθιέρωση των οργανωμένων αποκριάτικων παρελάσεων και εκδηλώσεων'
        ]
      };
    } else if (y < 1995) {
      return {
        era: '1970 - 1995: Ενεργειακή Καρδιά της Ελλάδας & Ανώτατη Εκπαίδευση',
        summary: 'Η Κοζάνη παράγει πάνω από το 60% της ηλεκτρικής ενέργειας της χώρας. Ιδρύονται ανώτατες σχολές, ενώ η πόλη αναβαθμίζει τις υποδομές της και δημιουργεί το πρώτο δημοτικό δίκτυο τηλεθέρμανσης στην Ελλάδα.',
        keyFacts: [
          'Κολοσσιαία βιομηχανική και οικονομική ανάπτυξη του λεκανοπεδίου',
          'Πρωτοποριακό δίκτυο τηλεθέρμανσης από τα θερμά νερά των σταθμών',
          'Ο κρόκος Κοζάνης αναγνωρίζεται ως προϊόν Προστατευόμενης Ονομασίας Προέλευσης (ΠΟΠ)'
        ]
      };
    } else {
      return {
        era: '1995 - 2026: Σύγχρονη Ευρωπαϊκή Πόλη, Πολιτισμός & Πράσινη Μετάβαση',
        summary: 'Η νέα Κοζάνη. Πλήρης πεζοδρόμηση του κέντρου, υπερσύγχρονο νέο campus του Πανεπιστημίου Δυτικής Μακεδονίας, εγκαινίαση της νέας βιοκλιματικής Κοβενταρείου Βιβλιοθήκης (2018) και ηγετικός ρόλος στη Δίκαιη Αναπτυξιακή Μετάβαση.',
        keyFacts: [
          '2018: Εγκαίνια του νέου εμβληματικού κτιρίου της Κοβενταρείου Βιβλιοθήκης',
          'Μετάβαση σε καθαρές πηγές ενέργειας (φωτοβολταϊκά, πράσινο υδρογόνο)',
          'Μοναδικός συνδυασμός σύγχρονης τεχνολογίας και ζωντανής αποκριάτικης παράδοσης'
        ]
      };
    }
  }

  if (id === 'athens') {
    if (y < 1920) {
      return {
        era: '1900 - 1920: Η Μπελ Επόκ των Αθηνών & τα Παλιά Τραμ',
        summary: 'Μια κομψή νεοκλασική πρωτεύουσα. Οι πλατείες Ομονοίας και Συντάγματος περιστοιχίζονται από μέγαρα του Τσίλλερ, ιππήλατα και ηλεκτρικά τραμ διασχίζουν την Πανεπιστημίου, και στα καφενεία συγκεντρώνεται η πνευματική ελίτ.',
        keyFacts: [
          'Νεοκλασικά ξενοδοχεία («Μπάγκειον», «Μέγας Αλέξανδρος») στην Ομόνοια',
          'Τα γραφικά ταβερνάκια της Πλάκας κάτω από τη φωτισμένη Ακρόπολη',
          'Επέκταση του δικτύου ηλεκτρικού σιδηροδρόμου'
        ]
      };
    } else if (y < 1945) {
      return {
        era: '1920 - 1945: Μεσοπόλεμος, Προσφυγιά & Σύγχρονες Υποδομές',
        summary: 'Η Αθήνα υποδέχεται εκατοντάδες χιλιάδες πρόσφυγες από τη Μικρά Ασία δημιουργώντας νέους συνοικισμούς. Το 1930 εγκαινιάζεται ο υπόγειος σταθμός Ομονοίας και το 1932 αποκαλύπτεται το Μνημείο του Αγνώστου Στρατιώτη στη Βουλή.',
        keyFacts: [
          '1930: Εγκαίνια του υπόγειου σταθμού Ομονοίας με τις πρώτες κυλιόμενες σκάλες',
          '1932: Αποκαλυπτήρια Μνημείου Αγνώστου Στρατιώτη στα Παλαιά Ανάκτορα (Βουλή)',
          'Άνθηση του ρεμπέτικου και των λαϊκών καφενείων σε Μοναστηράκι και Ψυρρή'
        ]
      };
    } else if (y < 1970) {
      return {
        era: '1945 - 1970: Μεταπολεμική Ανοικοδόμηση & Χρυσή Εποχή του Κινηματογράφου',
        summary: 'Η εποχή της αντιπαροχής και της ραγδαίας αστικοποίησης. Το 1960 εγκαινιάζεται το θρυλικό κυκλικό σιντριβάνι της Ομόνοιας με τα νέον φώτα, τα πράσινα τρόλεϊ γεμίζουν τους δρόμους και στην Πλάκα γεννιούνται οι μπουάτ του Νέου Κύματος.',
        keyFacts: [
          '1960: Το εμβληματικό σιντριβάνι της Ομόνοιας γίνεται το σύμβολο της μοντέρνας Αθήνας',
          'Οι μπουάτ της Πλάκας (Χατζιδάκις, Σαββόπουλος, Αρλέτα)',
          'Εκατοντάδες κινηματογράφοι και θέατρα στην οδό Σταδίου και Πανεπιστημίου'
        ]
      };
    } else if (y < 1995) {
      return {
        era: '1970 - 1995: Μεταπολίτευση, Πολιτικός Παλμός & Τουριστική Έκρηξη',
        summary: 'Η αποκατάσταση της Δημοκρατίας το 1974 φέρνει ογκώδεις πολιτικές συγκεντρώσεις στο Σύνταγμα. Η Αθήνα καθιερώνεται ως κορυφαίος παγκόσμιος τουριστικός προορισμός με την Πλάκα και το Μοναστηράκι να σφύζουν από ζωή.',
        keyFacts: [
          '1974: Ιστορικές λαϊκές συγκεντρώσεις για τη Δημοκρατία στην Πλατεία Συντάγματος',
          'Ανάπτυξη του εμπορικού τριγώνου και του παζαριού στο Μοναστηράκι',
          'Σχεδιασμός των μεγάλων έργων υποδομής (Μετρό, Αττική Οδός)'
        ]
      };
    } else {
      return {
        era: '1995 - 2026: Ολυμπιακή Μητρόπολη, Μετρό, Μουσείο Ακρόπολης & Αναγέννηση',
        summary: 'Η μεταμόρφωση της σύγχρονης Αθήνας: παράδοση του Μετρό (2000), Ολυμπιακοί Αγώνες 2004, νέο Μουσείο Ακρόπολης (2009), ΚΠΙΣΝ (2016) και η ανάπλαση του μεγάλου υδάτινου σιντριβανιού στην Ομόνοια.',
        keyFacts: [
          'Υπερσύγχρονο δίκτυο Μετρό που λειτουργεί και ως υπόγειο μουσείο αρχαιοτήτων',
          'Μεγάλος αρχαιολογικός περίπατος Διονυσίου Αρεοπαγίτου - Μοναστηράκι - Θησείο',
          'Αναγέννηση του κέντρου με το νέο οικολογικό σιντριβάνι της Ομονοίας'
        ]
      };
    }
  }

  if (id === 'paris') {
    if (y < 1920) {
      return {
        era: '1900 - 1920: Η Μπελ Επόκ & η Παγκόσμια Έκθεση του Παρισιού',
        summary: 'Το Παρίσι αποτελεί το αδιαφιλονίκητο κέντρο του κόσμου. Εγκαίνια του πρώτου Μετρό (1900), ανέγερση του Grand Palais, και οι ζωγράφοι του Ιμπρεσιονισμού και του Κυβισμού (Πικάσο) στη Μονμάρτη.',
        keyFacts: [
          '1900: Exposition Universelle και λειτουργία της πρώτης γραμμής του Μετρό',
          'Ο Πύργος του Άιφελ γίνεται παγκόσμιος ραδιοφωνικός πομπός',
          'Τα καφέ της Μονμάρτης γεμίζουν από τους πρωτοπόρους της παγκόσμιας τέχνης'
        ]
      };
    } else if (y < 1945) {
      return {
        era: '1920 - 1945: Les Années Folles & Απελευθέρωση 1944',
        summary: 'Η ξέφρενη δεκαετία του 1920: Hemingway, Fitzgerald, Josephine Baker και η τζαζ στο Μονπαρνάς. Ακολουθεί η σκοτεινή περίοδος της Κατοχής και η ηρωική Απελευθέρωση του Παρισιού στις 25 Αυγούστου 1944.',
        keyFacts: [
          'Τα λογοτεχνικά στέκια του Σηκουάνα και η «Κινητή Γιορτή»',
          '1944: Είσοδος της 2ης Μεραρχίας Τεθωρακισμένων και πανηγυρισμοί στα Ηλύσια Πεδία'
        ]
      };
    } else if (y < 1980) {
      return {
        era: '1945 - 1980: Υπαρξισμός, Nouvelle Vague & Μάιος του 1968',
        summary: 'Ο Ζαν-Πωλ Σαρτρ και η Σιμόν ντε Μποβουάρ στο Café de Flore, η έκρηξη του γαλλικού νέου κύματος στο σινεμά (Godard, Truffaut) και η ιστορική εξέγερση των φοιτητών τον Μάιο του 1968 στο Καρτιέ Λατέν.',
        keyFacts: [
          'Το Saint-Germain-des-Prés επίκεντρο της παγκόσμιας φιλοσοφικής σκέψης',
          '1968: Ο Μάης του 1968 αλλάζει τη σύγχρονη κοινωνία και τα πανεπιστήμια'
        ]
      };
    } else {
      return {
        era: '1980 - 2026: Grands Projets, Ολυμπιακό Παρίσι & Πράσινη Μετάβαση',
        summary: 'Τα μεγάλα έργα του Μιτεράν (Γυάλινη Πυραμίδα του Λούβρου, Όπερα Βαστίλης), η αναγέννηση της Παναγίας των Παρισίων και οι θεαματικοί Ολυμπιακοί Αγώνες του 2024 στον Σηκουάνα.',
        keyFacts: [
          '1989: Εγκαίνια της Πυραμίδας του Λούβρου από τον I.M. Pei',
          '2024: Ιστορικοί Ολυμπιακοί Αγώνες με τελετή έναρξης στον ποταμό Σηκουάνα'
        ]
      };
    }
  }

  if (id === 'rome') {
    if (y < 1945) {
      return {
        era: '1900 - 1945: Πρωτεύουσα της Ιταλίας & Αρχαιολογική Αποκάλυψη',
        summary: 'Η Ρώμη εκσυγχρονίζεται ως πρωτεύουσα του νέου ιταλικού βασιλείου. Μεγάλες αρχαιολογικές ανασκαφές αποκαλύπτουν τα Fori Imperiali και τα υπόγεια του Κολοσσαίου.',
        keyFacts: [
          '1911: Εγκαίνια του επιβλητικού Vittoriano στην Piazza Venezia',
          'Αποκάλυψη των αρχαίων ρωμαϊκών αγορών και αναστήλωση των μνημείων'
        ]
      };
    } else if (y < 1980) {
      return {
        era: '1945 - 1980: La Dolce Vita & Κινηματογραφικός Μύθος',
        summary: 'Η χρυσή εποχή της Ρώμης: τα στούντιο της Cinecittà γίνονται το «Χόλιγουντ στον Τίβερη», ο Fellini γυρίζει το La Dolce Vita και η Via Veneto σφύζει από κοσμοπολίτικη ζωή.',
        keyFacts: [
          '1960: Ολυμπιακοί Αγώνες της Ρώμης με φόντο τα αρχαία μνημεία',
          'Η Φοντάνα ντι Τρέβι γίνεται το παγκόσμιο σύμβολο της ιταλικής σαγήνης'
        ]
      };
    } else {
      return {
        era: '1980 - 2026: Αιώνια Πόλη & Σύγχρονη Προστασία Κληρονομιάς',
        summary: 'Πλήρης πεζοδρόμηση των αυτοκρατορικών αγορών, νέες επεκτάσεις του μετρό με υπόγειες αρχαιολογικές εκθέσεις και προετοιμασία για το Ιωβηλαίο (Giubileo).',
        keyFacts: [
          'Προστασία ολόκληρου του ιστορικού κέντρου ως ενιαίου Μνημείου UNESCO',
          'Σύγχρονα αρχιτεκτονικά ορόσημα (MAXXI της Zaha Hadid, Auditorium του Renzo Piano)'
        ]
      };
    }
  }

  if (id === 'london') {
    if (y < 1945) {
      return {
        era: '1900 - 1945: Η Αυτοκρατορική Μητρόπολη & το Blitz',
        summary: 'Από την εδουαρδιανή αίγλη και τα πρώτα ηλεκτρικά λεωφορεία, μέχρι την ηρωική αντοχή των Λονδρέζων απέναντι στους βομβαρδισμούς της Luftwaffe το 1940.',
        keyFacts: [
          '1908: Πρώτοι Ολυμπιακοί Αγώνες στο Λονδίνο (White City)',
          '1940: Το Big Ben εκπέμπει αδιάκοπα μέσω BBC ως φωνή ελευθερίας για την Ευρώπη'
        ]
      };
    } else if (y < 1980) {
      return {
        era: '1945 - 1980: Swinging London, Beatlemania & Ποπ Επανάσταση',
        summary: 'Η πρωτεύουσα της παγκόσμιας νεανικής κουλτούρας: Abbey Road, μίνι φούστες στην Carnaby Street, The Beatles, The Rolling Stones, πανκ και David Bowie.',
        keyFacts: [
          '1960s: Το Λονδίνο καθορίζει τη μόδα, τη μουσική και το lifestyle του πλανήτη',
          'Ίδρυση του Εθνικού Συστήματος Υγείας (NHS) και σύγχρονη ανοικοδόμηση'
        ]
      };
    } else {
      return {
        era: '1980 - 2026: Παγκόσμιο Χρηματοοικονομικό Κέντρο & Υπερσύγχρονο Hub',
        summary: 'Ανάπλαση των Docklands και του Canary Wharf, κατασκευή του London Eye, της γραμμής Elizabeth Line και ουρανοξυστών όπως το The Shard.',
        keyFacts: [
          '2012: Εντυπωσιακοί Ολυμπιακοί Αγώνες του Λονδίνου',
          'Κορυφαίος ευρωπαϊκός κόμβος τεχνολογίας, τεχνητής νοημοσύνης και FinTech'
        ]
      };
    }
  }

  if (id === 'berlin') {
    if (y < 1945) {
      return {
        era: '1900 - 1945: Η Βαϊμάρη των Τεχνών & οι Πληγές του Πολέμου',
        summary: 'Το Βερολίνο της δεκαετίας του 1920 αποτελεί την πιο πρωτοποριακή πόλη της Ευρώπης σε θέατρο (Μπρεχτ), σινεμά και επιστήμες (Αϊνστάιν), πριν την καταστροφή του Β΄ Παγκοσμίου Πολέμου.',
        keyFacts: [
          '1920s: Παγκόσμια πρωτεύουσα της πρωτοπορίας, του εξπρεσιονισμού και της επιστήμης',
          '1945: Η Μάχη του Βερολίνου και η πτώση της Πύλης του Βραδεμβούργου'
        ]
      };
    } else if (y < 1990) {
      return {
        era: '1945 - 1989: Το Διαιρεμένο Βερολίνο & το Τείχος',
        summary: 'Η καρδιά του Ψυχρού Πολέμου. Η ανέγερση του Τείχους το 1961 χώρισε οικογένειες για 28 χρόνια, μέχρι το ιστορικό βράδυ της 9ης Νοεμβρίου 1989 που οι πολίτες το γκρέμισαν με τα χέρια τους.',
        keyFacts: [
          '1961: Ανέγερση του Τείχους του Βερολίνου',
          '1989: Η ειρηνική επανάσταση ρίχνει το Τείχος και ενώνει την Ευρώπη'
        ]
      };
    } else {
      return {
        era: '1990 - 2026: Η Επανενωμένη Πρωτεύουσα της Δημιουργίας',
        summary: 'Η μεταμόρφωση του Βερολίνου στη νέα ομοσπονδιακή πρωτεύουσα: ο γυάλινος θόλος του Reichstag, η Potsdamer Platz και το παγκόσμιο κέντρο ηλεκτρονικής μουσικής και startups.',
        keyFacts: [
          '1999: Επιστροφή της Γερμανικής Κυβέρνησης και του Κοινοβουλίου στο Βερολίνο',
          'Η East Side Gallery γίνεται το μεγαλύτερο ανοιχτό μνημείο ελευθερίας στον κόσμο'
        ]
      };
    }
  }

  if (id === 'vienna') {
    if (y < 1920) {
      return {
        era: '1790 - 1920: Αυτοκρατορική Αίγλη & Νεοελληνικός Διαφωτισμός',
        summary: 'Η αυτοκρατορική πρωτεύουσα των Αψβούργων. Για την Ελλάδα υπήρξε το λίκνο της εθνικής αφύπνισης: οι Κοζανίτες έμποροι και ο Ρήγας Φεραίος τυπώνουν τη Χάρτα και τον Θούριο στο Fleischmarkt.',
        keyFacts: [
          '1797: Εκτύπωση της «Χάρτας της Ελλάδος» του Ρήγα στη Βιέννη (φυλάσσεται στην Κοζάνη)',
          'Η χρυσή εποχή του Μπετόβεν, του Μότσαρτ και των βαλς του Στράους',
          '1900: Το Fin-de-Siècle με τον Κλιμτ και τον Φρόυντ'
        ]
      };
    } else if (y < 1970) {
      return {
        era: '1920 - 1970: «Κόκκινη Βιέννη», Μεταπολεμική Ανασυγκρότηση & Ουδετερότητα',
        summary: 'Πρωτοποριακά κοινωνικά προγράμματα δημόσιας στέγασης (Karl-Marx-Hof), μεταπολεμική ανοικοδόμηση και η Συνθήκη του 1955 που καθιερώνει τη μόνιμη ουδετερότητα της Αυστρίας.',
        keyFacts: [
          '1955: Συνθήκη του Αυστριακού Κράτους και επαναλειτουργία της Κρατικής Όπερας',
          'Καθιέρωση της Βιέννης ως ουδέτερης γέφυρας ανάμεσα σε Ανατολή και Δύση'
        ]
      };
    } else {
      return {
        era: '1970 - 2026: Έδρα των Ηνωμένων Εθνών & Κορυφαία Ποιότητα Ζωής',
        summary: 'Ίδρυση της πόλης του ΟΗΕ (UNO-City), διατήρηση του ιστορικού κέντρου UNESCO και σταθερή κατάκτηση της 1ης θέσης παγκοσμίως σε ποιότητα ζωής.',
        keyFacts: [
          '1979: Εγκαίνια του Διεθνούς Κέντρου της Βιέννης (VIC / UN Vienna)',
          'Ζωντανός σεβασμός στην ιστορική ελληνική συνοικία και την Griechengasse'
        ]
      };
    }
  }

  // Generic Country / World fallback
  if (y < 1945) {
    return {
      era: `${y}: Αρχές 20ού Αιώνα & Μεσοπόλεμος`,
      summary: `Ιστορική περίοδος βαθιών ανακατατάξεων, βιομηχανικών αλλαγών και εθνικών οροσήμων στην περιοχή (${entity.name}).`,
      keyFacts: ['Βιομηχανικός εκσυγχρονισμός και σιδηροδρομικές συνδέσεις', 'Κοινωνικές μεταρρυθμίσεις και αστικοποίηση']
    };
  } else if (y < 1980) {
    return {
      era: `${y}: Μεταπολεμική Ανάπτυξη & Δεκαετίες '60-'70`,
      summary: `Ραγδαία οικονομική άνοδος, ανοικοδόμηση και πολιτιστική άνθηση στην περιοχή (${entity.name}).`,
      keyFacts: ['Εκσυγχρονισμός πόλεων και δικτύων υποδομών', 'Εισαγωγή σύγχρονων τεχνολογιών και μαζικής επικοινωνίας']
    };
  } else {
    return {
      era: `${y}: Σύγχρονη Εποχή & Ψηφιακός Μετασχηματισμός`,
      summary: `Παγκοσμιοποίηση, ψηφιακή επανάσταση και βιώσιμη ανάπτυξη στον 21ο αιώνα (${entity.name}).`,
      keyFacts: ['Ψηφιακές τεχνολογίες και έξυπνες πόλεις', 'Προστασία πολιτιστικής κληρονομιάς και πράσινη ενέργεια']
    };
  }
}

export function getCuratedGuideItems(entity) {
  if (entity.guide?.items && Array.isArray(entity.guide.items) && entity.guide.items.length > 0) {
    return entity.guide.items;
  }
  if (Array.isArray(entity.guide) && entity.guide.length > 0) {
    return entity.guide.map(g => ({
      title: g.name || g.title || '',
      cat: g.cat || 'monument',
      catLabel: g.catLabel || `🏛️ ${g.type || 'Αξιοθέατο'}`,
      desc: `${g.description || ''} ${g.highlight || ''}`.trim() || g.desc || '',
      wiki: g.wiki || g.name || g.title || ''
    }));
  }
  if (entity.pois && Array.isArray(entity.pois) && entity.pois.length > 0) {
    return entity.pois.map(p => ({
      title: p.name || '',
      cat: p.category || 'sight',
      catLabel: '🏛️ Αξιοθέατο',
      desc: p.desc || p.description || '',
      wiki: p.wiki || p.name || ''
    }));
  }
  const id = entity.id || '';
  if (id === 'kozani') {
    return [
      {
        title: 'Ιστορικό Καμπαναριό & Πλατεία Νίκης',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Το σύμβολο της Κοζάνης (Μαμάτσιος), κατασκευασμένο το 1855, δεσπόζει στην κεντρική πλατεία της πόλης.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Κοβεντάρειος Δημοτική Βιβλιοθήκη',
        cat: 'museum',
        catLabel: '🖼️ Μουσείο',
        desc: 'Η δεύτερη πλουσιότερη ιστορική βιβλιοθήκη στην Ελλάδα, με σπάνια χειρόγραφα και την πρωτότυπη Χάρτα του Ρήγα Φεραίου (1797).',
        wiki: 'Κοβεντάρειος_Δημοτική_Βιβλιοθήκη_Κοζάνης'
      },
      {
        title: 'Αρχοντικό Γρηγορίου Λασσάνη',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Επιβλητικό αρχοντικό του 18ου αιώνα, πατρικό σπίτι του Φιλικού και λόγιου Γεωργίου Λασσάνη, σήμερα Δημοτική Χαρτοθήκη.',
        wiki: 'Γεώργιος_Λασσάνης'
      },
      {
        title: 'Ιστορικό-Λαογραφικό & Φυσικής Ιστορίας Μουσείο',
        cat: 'museum',
        catLabel: '🖼️ Μουσείο',
        desc: 'Εντυπωσιακό πολυθεματικό μουσείο παραδοσιακής μακεδονικής αρχιτεκτονικής, με σπάνιες λαογραφικές συλλογές.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Λίμνη Πολυφύτου & Υψηλή Γέφυρα Σερβίων',
        cat: 'nature',
        catLabel: '🌿 Φύση',
        desc: 'Μία από τις μακρύτερες γέφυρες των Βαλκανίων (1.372 μέτρα) πάνω από τον τεχνητό ταμιευτήρα του Αλιάκμονα με εκπληκτική πανοραμική θέα.',
        wiki: 'Υψηλή_Γέφυρα_Σερβίων'
      }
    ];
  }
  if (id === 'athens') {
    return [
      {
        title: 'Ακρόπολη Αθηνών & Παρθενώνας',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Το αιώνιο αρχιτεκτονικό σύμβολο της παγκόσμιας δημοκρατίας και του δυτικού πολιτισμού στον Ιερό Βράχο.',
        wiki: 'Ακρόπολη_Αθηνών'
      },
      {
        title: 'Μουσείο Ακρόπολης',
        cat: 'museum',
        catLabel: '🖼️ Μουσείο',
        desc: 'Από τα κορυφαία μουσεία του κόσμου με υπερσύγχρονη γυάλινη αρχιτεκτονική και άμεση οπτική επαφή με τον Παρθενώνα.',
        wiki: 'Μουσείο_Ακρόπολης'
      },
      {
        title: 'Πλάκα & Αναφιώτικα',
        cat: 'nature',
        catLabel: '🌿 Περίπατος',
        desc: 'Η ιστορική «συνοικία των θεών» στους πρόποδες της Ακρόπολης με κυκλαδίτικα ασβεστωμένα σπίτια και νεοκλασικά σοκάκια.',
        wiki: 'Πλάκα'
      },
      {
        title: 'Αρχαία Αγορά & Ναός Ηφαίστου',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Το πολιτικό, εμπορικό και φιλοσοφικό κέντρο της αρχαίας πόλης, όπου δίδαξαν ο Σωκράτης και ο Πλάτων.',
        wiki: 'Αρχαία_Αγορά_της_Αθήνας'
      }
    ];
  }
  return (entity.cult?.items || []).map(it => ({
    title: it.title,
    cat: 'monument',
    catLabel: '🏛️ Αξιοθέατο',
    desc: it.desc,
    wiki: it.title
  }));
}

export function getCuratedGastroItems(entity) {
  if (entity.gastro?.items && Array.isArray(entity.gastro.items) && entity.gastro.items.length > 0) {
    return entity.gastro.items;
  }
  if (entity.gastro?.specialties && Array.isArray(entity.gastro.specialties) && entity.gastro.specialties.length > 0) {
    return entity.gastro.specialties.map(s => {
      if (typeof s === 'string') {
        const m = s.match(/^(.*?)\s*\((.*?)\)$/);
        return {
          title: m ? m[1].trim() : s,
          cat: 'recipe',
          catLabel: '🍽️ Γαστρονομία',
          tag: 'Παραδοσιακό',
          desc: m ? m[2].trim() : (entity.gastro.culture || s),
          wiki: m ? m[1].trim() : s
        };
      }
      return {
        title: s.name || s.title || '',
        cat: 'recipe',
        catLabel: `🍽️ ${s.type || 'Γαστρονομία'}`,
        tag: 'Παραδοσιακό',
        desc: s.description || s.desc || '',
        wiki: s.name || ''
      };
    });
  }
  if (entity.cuisine && Array.isArray(entity.cuisine) && entity.cuisine.length > 0) {
    return entity.cuisine.map(c => typeof c === 'object' ? {
      title: c.title || c.name || '',
      cat: 'recipe',
      catLabel: '🍽️ Παραδοσιακό Πιάτο',
      tag: 'Τοπική Κουζίνα',
      desc: c.desc || c.description || ''
    } : {
      title: String(c),
      cat: 'recipe',
      catLabel: '🍽️ Πιάτο',
      tag: 'Τοπική Κουζίνα',
      desc: String(c)
    });
  }
  const id = entity.id || '';
  if (id === 'thessaloniki') {
    return [
      {
        title: 'Μπουγάτσα Θεσσαλονίκης',
        cat: 'recipe',
        catLabel: '🥧 Παραδοσιακή Πίτα',
        tag: 'Σήμα Κατατεθέν',
        desc: 'Με κρέμα, τυρί, κιμά ή σπανάκι. Τραγανό χειροποίητο φύλλο αέρος πασπαλισμένο με άχνη ζάχαρη και κανέλα.',
        wiki: 'Μπουγάτσα'
      },
      {
        title: 'Κουλούρι Θεσσαλονίκης',
        cat: 'product',
        catLabel: '🥖 Street Food',
        tag: 'Πρωινή Συνήθεια',
        desc: 'Τραγανό εξωτερικά, αφράτο στο εσωτερικό και πλούσια καλυμμένο με καβουρδισμένο σουσάμι.',
        wiki: 'Κουλούρι_Θεσσαλονίκης'
      },
      {
        title: 'Γύρος & Πανσέτα Θεσσαλονίκης',
        cat: 'recipe',
        catLabel: '🥩 Κλασική Γεύση',
        tag: 'Διάσημο Σάντουιτς',
        desc: 'Σερβίρεται σε παραδοσιακό ψωμάκι ή πίτα με ντομάτα, κρεμμύδι, τζατζίκι ή ρώσικη σαλάτα και τηγανητές πατάτες.',
        wiki: 'Γύρος_(φαγητό)'
      },
      {
        title: 'Σουτζουκάκια Σμυρναίικα',
        cat: 'recipe',
        catLabel: '🍲 Μικρασιατική Παράδοση',
        tag: 'Μαγειρευτό',
        desc: 'Πικάντικα μακρόστενα κεφτεδάκια μοσχαρίσιου κιμά με κύμινο, σκόρδο και πλούσια δεμένη σάλτσα φρέσκιας ντομάτας.',
        wiki: 'Σουτζουκάκια'
      },
      {
        title: 'Μύδια Θερμαϊκού & Θαλασσινά',
        cat: 'seafood',
        catLabel: '🦐 Ουζερί & Ψαροταβέρνες',
        tag: 'Θαλασσινό',
        desc: 'Τα διάσημα μύδια Ολυμπιάδας και Χαλάστρας, μαγειρεμένα ως σαγανάκι με φέτα, μυδοπίλαφο ή αχνιστά με λευκό κρασί.',
        wiki: 'Μύδι'
      },
      {
        title: 'Πατσάς Θεσσαλονίκης',
        cat: 'soup',
        catLabel: '🍲 Μεταμεσονύκτια Παράδοση',
        tag: 'Ιστορικό Πιάτο',
        desc: 'Παραδοσιακή σούπα κοιλιάς ή ποδαριού με σκορδοστούμπι και μπούκοβο, στενά συνδεδεμένη με τη νυχτερινή ζωή και τους πρόσφυγες.',
        wiki: 'Πατσάς'
      },
      {
        title: 'Τρίγωνα Πανοράματος & Πολίτικα Σιροπιαστά',
        cat: 'dessert',
        catLabel: '🍰 Ζαχαροπλαστική',
        tag: 'Γλυκό',
        desc: 'Τραγανά χρυσαφένια τρίγωνα φύλλου γεμισμένα με πλούσια κρέμα, πολίτικα καζάν ντιπί, εκμέκ καταΐφι και μαστιχωτά τσουρέκια.',
        wiki: 'Τρίγωνα_Πανοράματος'
      }
    ];
  }
  if (id === 'kozani') {
    return [
      {
        title: 'Κρόκος Κοζάνης (Σαφράν ΠΟΠ)',
        cat: 'product',
        catLabel: '🍇 Προϊόν ΠΟΠ',
        desc: 'Ο «κόκκινος χρυσός» της κοζανίτικης γης, ένα από τα ποιοτικότερα μπαχαρικά παγκοσμίως με σπάνιες αντιοξειδωτικές ιδιότητες.',
        wiki: 'Κρόκος_Κοζάνης'
      },
      {
        title: 'Κοζανίτικο Κιχί',
        cat: 'recipe',
        catLabel: '🥧 Παραδοσιακή Πίτα',
        desc: 'Η διάσημη στριφτή πίτα σε σπειροειδές σχήμα με τραγανό χειροποίητο φύλλο και πλούσια γέμιση από ντόπια φέτα.',
        wiki: 'Κιχί'
      },
      {
        title: 'Κοζανίτικα Γιαπράκια',
        cat: 'recipe',
        catLabel: '🥧 Εορταστική Γεύση',
        desc: 'Παραδοσιακοί λαχανοντολμάδες από αρμιά (λάχανο τουρσί) με χοιρινό και μοσχαρίσιο κιμά, κυρίαρχο πιάτο του χειμώνα.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Κρασιά & Τσίπουρο Βελβεντού / Σιάτιστας',
        cat: 'product',
        catLabel: '🍇 Τοπικός Οίνος',
        desc: 'Εκλεκτές ποικιλίες (Ξινόμαυρο, Μοσχόμαυρο) και ονομαστά ηλιαστά κρασιά από τους παραδοσιακούς αμπελώνες της περιοχής.',
        wiki: 'Βελβεντό'
      },
      {
        title: 'Σιροπιαστά & Τουλούμπες Κοζάνης',
        cat: 'cafe',
        catLabel: '☕ Ζαχαροπλαστική',
        desc: 'Μακρά παράδοση στα περίφημα ζαχαροπλαστεία της Πλατείας Νίκης με τραγανές τουλούμπες και κουραμπιέδες.',
        wiki: 'Κοζάνη'
      }
    ];
  }
  if (id === 'athens') {
    return [
      {
        title: 'Αυθεντικό Σουβλάκι Μοναστηρακίου',
        cat: 'recipe',
        catLabel: '🥧 Κλασική Γεύση',
        desc: 'Το απόλυτο αθηναϊκό street food με ψητή πίτα, ντομάτα, κρεμμύδι και παραδοσιακό γύρο ή καλαμάκι.',
        wiki: 'Σουβλάκι'
      },
      {
        title: 'Παραδοσιακές Ταβέρνες της Πλάκας',
        cat: 'cafe',
        catLabel: '☕ Εστίαση & Κρασί',
        desc: 'Ιστορικά κουτούκια και οινομαγειρεία με ρετσίνα Μεσογείων, κεφτεδάκια και ζωντανή κιθάρα.',
        wiki: 'Πλάκα'
      },
      {
        title: 'Κουλούρι Αθηνών / Θεσσαλονίκης',
        cat: 'product',
        catLabel: '🍇 Καθημερινή Συνήθεια',
        desc: 'Το τραγανό κουλούρι με σουσάμι που πωλείται από τους πρωινούς πλανόδιους πωλητές σε κάθε κεντρική γωνιά.',
        wiki: 'Κουλούρι_Θεσσαλονίκης'
      }
    ];
  }
  return [
    {
      title: `Παραδοσιακές Συνταγές & Σπεσιαλιτέ (${entity.name})`,
      cat: 'recipe',
      catLabel: '🍲 Κλασική Γεύση',
      tag: 'Τοπικό Πιάτο',
      desc: `Αυθεντικές τοπικές συνταγές, παραδοσιακά υλικά και σπεσιαλιτέ που χαρακτηρίζουν την περιοχή (${entity.name}).`,
      wiki: entity.name
    },
    {
      title: `Τοπικά Προϊόντα & Εδέσματα (${entity.name})`,
      cat: 'product',
      catLabel: '🍇 Προϊόντα Γης',
      tag: 'Τοπική Παραγωγή',
      desc: `Παραδοσιακά προϊόντα της τοπικής γης, τυριά, ελαιόλαδο, οίνοι και τοπικά αρτοσκευάσματα (${entity.name}).`,
      wiki: entity.name
    },
    {
      title: `Παραδοσιακά Επιδόρπια & Γλυκά (${entity.name})`,
      cat: 'dessert',
      catLabel: '🍯 Ζαχαροπλαστική',
      tag: 'Γλυκές Γεύσεις',
      desc: `Τοπικά γλυκίσματα, σιροπιαστά, πίτες και παραδοσιακές γλυκές λιχουδιές της περιοχής (${entity.name}).`,
      wiki: entity.name
    }
  ];
}

export function getCityEducationData(entity) {
  if (!entity) return null;
  const id = (entity.id || '').toLowerCase();
  const name = entity.name || '';
  const pop = parseInt(entity.pop || entity.population || 50000, 10);

  // If entity has explicitly defined education block in data
  if (entity.education && typeof entity.education === 'object') {
    return entity.education;
  }

  // Curated datasets for key cities
  // 1. Kozani
  if (id === 'kozani' || name.includes('Κοζάν')) {
    return {
      overview: 'Η Κοζάνη αποτελεί το κορυφαίο ακαδημαϊκό, τεχνολογικό και ερευνητικό κέντρο της Δυτικής Μακεδονίας, φιλοξενώντας την έδρα και το σύγχρονο campus του Πανεπιστημίου Δυτικής Μακεδονίας, ερευνητικά ινστιτούτα ενεργειακής μετάβασης (ΕΚΕΤΑ) και αναπτυγμένο δίκτυο σχολικών και τεχνικών μονάδων.',
      schools: {
        total: 54,
        summary: '54 ενεργές σχολικές μονάδες πρωτοβάθμιας και δευτεροβάθμιας εκπαίδευσης στον Δήμο Κοζάνης.',
        breakdown: [
          { label: 'Νηπιαγωγεία', count: 22, icon: 'fa-solid fa-shapes', desc: 'Δημόσια & ολοήμερα νηπιαγωγεία πόλης και κοινοτήτων' },
          { label: 'Δημοτικά Σχολεία', count: 18, icon: 'fa-solid fa-book-open', desc: '18 πολυθέσια δημοτικά σχολεία με ευρωπαϊκά προγράμματα' },
          { label: 'Γυμνάσια', count: 6, icon: 'fa-solid fa-graduation-cap', desc: '6 Γυμνάσια (συμπεριλαμβανομένου του ιστορικού Βαλταδωρείου)' },
          { label: 'Λύκεια (ΓΕΛ & ΕΠΑΛ)', count: 6, icon: 'fa-solid fa-school', desc: '4 Γενικά Λύκεια και 2 Επαγγελματικά Λύκεια (1ο & 2ο ΕΠΑΛ)' },
          { label: 'Ειδικά & Μουσικά', count: 2, icon: 'fa-solid fa-music', desc: 'Μουσικό Σχολείο Σιάτιστας/Κοζάνης & Ειδικό Σχολείο/ΕΕΕΕΚ' }
        ],
        wiki: 'Κοζάνη',
        youtubeId: 'W1Yf4Tswx90'
      },
      universities: [
        {
          title: 'Πανεπιστήμιο Δυτικής Μακεδονίας (UoWM) - Νέο Campus ΖΕΠ',
          tag: 'Πρυτανεία & Κεντρικό Campus',
          desc: 'Υπερσύγχρονο βιοκλιματικό campus στην περιοχή ΖΕΠ Κοζάνης. Έδρα της Πρυτανείας, της Πολυτεχνικής Σχολής (Μηχανολόγοι, Ηλεκτρολόγοι, Χημικοί Μηχανικοί, Μηχανικοί Ορυκτών Πόρων) και της Σχολής Οικονομικών Επιστημών.',
          wiki: 'Πανεπιστήμιο_Δυτικής_Μακεδονίας',
          youtubeId: 'bB1i18_uE_A'
        },
        {
          title: 'Πολυτεχνική Σχολή UoWM',
          tag: 'Ανώτατη Πολυτεχνική Εκπαίδευση',
          desc: '5ετή προγράμματα Integrated Master στη μηχανική, με πρωτοποριακά εργαστήρια ρομποτικής, ανανεώσιμων πηγών και έξυπνων δικτύων.',
          wiki: 'Πανεπιστήμιο_Δυτικής_Μακεδονίας',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'Δημόσια ΣΑΕΚ Κοζάνης (πρώην Δ.ΙΕΚ)',
          tag: 'Δημόσια Επαγγελματική Κατάρτιση',
          desc: 'Σχολή Ανώτερης Επαγγελματικής Κατάρτισης με περιζήτητες ειδικότητες σε Ανανεώσιμες Πηγές Ενέργειας, Πληροφορική, Αυτοματισμούς, Διοίκηση & Νοσηλευτική.',
          wiki: 'Σχολές_Ανώτερης_Επαγγελματικής_Κατάρτισης',
          youtubeId: ''
        },
        {
          title: 'ΕΠΑΣ Μαθητείας ΔΥΠΑ Κοζάνης',
          tag: 'Επαγγελματική Μαθητεία',
          desc: 'Τεχνική επαγγελματική εκπαίδευση με αμειβόμενη πρακτική άσκηση σε τεχνικές ειδικότητες ηλεκτρολογίας, μηχανολογίας και θερμοϋδραυλικών.',
          wiki: 'Δημόσια_Υπηρεσία_Απασχόλησης',
          youtubeId: ''
        },
        {
          title: 'Δημοτικό Ωδείο Κοζάνης & Καλλιτεχνικές Σχολές',
          tag: 'Μουσική & Πολιτιστική Εκπαίδευση',
          desc: 'Αναγνωρισμένο μουσικό ίδρυμα με μακρά παράδοση στη συμφωνική, κλασική και παραδοσιακή μουσική παιδεία.',
          wiki: 'Κοζάνη',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'ΕΚΕΤΑ / ΙΔΕΠ - Εθνικό Κέντρο Έρευνας & Τεχνολογικής Ανάπτυξης',
          tag: 'Κορυφαίο Ερευνητικό Κέντρο',
          desc: 'Παράρτημα του Ινστιτούτου Χημικών Διεργασιών & Ενεργειακών Πόρων. Επίκεντρο των ερευνών για πράσινο υδρογόνο, απολιγνιτοποίηση και καθαρή ενέργεια στη ΝΑ Ευρώπη.',
          wiki: 'Εθνικό_Κέντρο_Έρευνας_και_Τεχνολογικής_Ανάπτυξης',
          youtubeId: ''
        },
        {
          title: 'Ζώνη Καινοτομίας & Επιχειρηματικότητας Δυτικής Μακεδονίας',
          tag: 'Καινοτομία & Startups',
          desc: 'Περιφερειακός κόμβος επιτάχυνσης νεοφυών επιχειρήσεων, τεχνοβλαστών (spin-offs) του Πανεπιστημίου και ψηφιακού μετασχηματισμού.',
          wiki: 'Κοζάνη',
          youtubeId: ''
        },
        {
          title: 'Τηλεθέρμανση Κοζάνης (ΔΕΥΑΚ) - Καινοτόμο Ενεργειακό Μοντέλο',
          tag: 'Ενεργειακή Καινοτομία',
          desc: 'Το πρωτοπόρο αστικό σύστημα διανομής θερμικής ενέργειας της Ελλάδας, πρότυπο σε ευρωπαϊκό επίπεδο ενεργειακής αποδοτικότητας.',
          wiki: 'Κοζάνη',
          youtubeId: ''
        }
      ]
    };
  }

  // 2. Athens
  if (id === 'athens' || name.includes('Αθήν')) {
    return {
      overview: 'Η Αθήνα αποτελεί τον μεγαλύτερο μητροπολιτικό κόμβο ανώτατης εκπαίδευσης, επιστημονικής έρευνας και επιχειρηματικής καινοτομίας στην Ελλάδα, με παγκοσμίου κύρους δημόσια πανεπιστήμια, κορυφαία ερευνητικά ινστιτούτα και άνω των 950 σχολικών μονάδων.',
      schools: {
        total: 960,
        summary: 'Άνω των 960 σχολικών μονάδων πρωτοβάθμιας και δευτεροβάθμιας εκπαίδευσης στο πολεοδομικό συγκρότημα.',
        breakdown: [
          { label: 'Νηπιαγωγεία', count: 390, icon: 'fa-solid fa-shapes', desc: 'Δημόσια, ιδιωτικά & πρότυπα νηπιαγωγεία' },
          { label: 'Δημοτικά Σχολεία', count: 330, icon: 'fa-solid fa-book-open', desc: 'Πολυθέσια δημοτικά και πειραματικά σχολεία' },
          { label: 'Γυμνάσια', count: 135, icon: 'fa-solid fa-graduation-cap', desc: 'Ημερήσια, εσπερινά, πρότυπα και μουσικά γυμνάσια' },
          { label: 'Λύκεια (ΓΕΛ & ΕΠΑΛ)', count: 105, icon: 'fa-solid fa-school', desc: 'Γενικά Λύκεια, Επαγγελματικά Λύκεια και Πρότυπα ΓΕΛ' },
          { label: 'Ειδικά & Καλλιτεχνικά', count: 25, icon: 'fa-solid fa-palette', desc: 'Ειδικά σχολεία, καλλιτεχνικά και μουσικά εκπαιδευτήρια' }
        ],
        wiki: 'Εκπαίδευση_στην_Ελλάδα',
        youtubeId: ''
      },
      universities: [
        {
          title: 'Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών (ΕΚΠΑ)',
          tag: 'Ιδρυθέν 1837 - Ιστορικό Πανεπιστήμιο',
          desc: 'Το αρχαιότερο ανώτατο εκπαιδευτικό ίδρυμα της νεότερης Ελλάδας με σχολές Ιατρικής, Νομικής, Φιλοσοφικής, Θετικών και Οικονομικών Επιστημών και άνω των 60.000 φοιτητών.',
          wiki: 'Εθνικό_και_Καποδιστριακό_Πανεπιστήμιο_Αθηνών',
          youtubeId: ''
        },
        {
          title: 'Εθνικό Μετσόβιο Πολυτεχνείο (ΕΜΠ)',
          tag: 'Κορυφαίο Πολυτεχνικό Ίδρυμα',
          desc: 'Πολυτεχνειούπολη Ζωγράφου & Ιστορικό Συγκρότημα Πατησίων. Σχολές Πολιτικών, Μηχανολόγων, Ηλεκτρολόγων Μηχανικών, Αρχιτεκτόνων και Χημικών Μηχανικών διεθνούς κύρους.',
          wiki: 'Εθνικό_Μετσόβιο_Πολυτεχνείο',
          youtubeId: ''
        },
        {
          title: 'Οικονομικό Πανεπιστήμιο Αθηνών (ΟΠΑ / ΑΣΟΕΕ)',
          tag: 'Οικονομία, Διοίκηση & Πληροφορική',
          desc: 'Κορυφαίο πανεπιστήμιο στην Ελλάδα στις οικονομικές επιστήμες, τη διοίκηση επιχειρήσεων και την επιστήμη υπολογιστών.',
          wiki: 'Οικονομικό_Πανεπιστήμιο_Αθηνών',
          youtubeId: ''
        },
        {
          title: 'Πάντειο Πανεπιστήμιο Κοινωνικών & Πολιτικών Επιστημών',
          tag: 'Κοινωνικές & Πολιτικές Επιστήμες',
          desc: 'Ιστορικό πανεπιστημιακό ίδρυμα εξειδικευμένο στις πολιτικές επιστήμες, τη δημόσια διοίκηση, την κοινωνιολογία και τα διεθνή μέσα.',
          wiki: 'Πάντειο_Πανεπιστήμιο',
          youtubeId: ''
        },
        {
          title: 'Πανεπιστήμιο Δυτικής Αττικής (ΠΑΔΑ)',
          tag: 'Σύγχρονο Μητροπολιτικό Πανεπιστήμιο',
          desc: 'Ταχέως αναπτυσσόμενο πανεπιστήμιο με πανεπιστημιουπόλεις στο Αιγάλεω και την Αθήνα, καλύπτοντας μηχανική, υγεία και εφαρμοσμένες τέχνες.',
          wiki: 'Πανεπιστήμιο_Δυτικής_Αττικής',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'Δημόσιες ΣΑΕΚ Αττικής (πρώην Δ.ΙΕΚ)',
          tag: 'Δημόσια Επαγγελματική Κατάρτιση',
          desc: 'Δεκάδες δημόσιες Σχολές Ανώτερης Επαγγελματικής Κατάρτισης σε όλους τους τομείς της σύγχρονης οικονομίας και τεχνολογίας.',
          wiki: 'Σχολές_Ανώτερης_Επαγγελματικής_Κατάρτισης',
          youtubeId: ''
        },
        {
          title: 'Deree - The American College of Greece',
          tag: 'Διεθνές Κολλέγιο',
          desc: 'Αμερικανικό κολλέγιο στην Αγία Παρασκευή με διεθνή ακαδημαϊκά προγράμματα και παγκόσμιες πιστοποιήσεις.',
          wiki: 'Αμερικανικό_Κολλέγιο_Ελλάδας',
          youtubeId: ''
        },
        {
          title: 'Ανώτατη Σχολή Καλών Τεχνών (ΑΣΚΤ) & Ωδεία Αθηνών',
          tag: 'Τέχνες & Μουσική Παιδεία',
          desc: 'Ιστορικά ιδρύματα εικαστικών τεχνών, θεάτρου και μουσικής (Ωδείο Αθηνών, Εθνικό Ωδείο).',
          wiki: 'Ανωτάτη_Σχολή_Καλών_Τεχνών',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'ΕΚΕΦΕ Δημόκριτος',
          tag: 'Εθνικό Κέντρο Έρευνας Φυσικών Επιστημών',
          desc: 'Το μεγαλύτερο πολυκλαδικό ερευνητικό κέντρο της Ελλάδας σε νανοτεχνολογία, πυρηνική φυσική, βιοεπιστήμες και τεχνητή νοημοσύνη.',
          wiki: 'Εθνικό_Κέντρο_Έρευνας_Φυσικών_Επιστημών_«Δημόκριτος»',
          youtubeId: ''
        },
        {
          title: 'Εθνικό Ίδρυμα Ερευνών (ΕΙΕ)',
          tag: 'Έρευνα & Ανθρωπιστικές Επιστήμες',
          desc: 'Κέντρο ιστορικών ερευνών, χημικής βιολογίας και θεωρητικής και φυσικής χημείας.',
          wiki: 'Εθνικό_Ίδρυμα_Ερευνών',
          youtubeId: ''
        },
        {
          title: 'Ελληνικό Κέντρο Θαλασσίων Ερευνών (ΕΛΚΕΘΕ)',
          tag: 'Θαλάσσιες & Περιβαλλοντικές Επιστήμες',
          desc: 'Κορυφαίο ερευνητικό ινστιτούτο ωκεανογραφίας, θαλάσσιας βιολογίας και υδατοκαλλιεργειών στη Μεσόγειο.',
          wiki: 'Ελληνικό_Κέντρο_Θαλασσίων_Ερευνών',
          youtubeId: ''
        },
        {
          title: 'Athens Innovation & Startup Ecosystem (Corallia, Elevate Greece)',
          tag: 'Καινοτομία & Τεχνολογία',
          desc: 'Δυναμικό οικοσύστημα νεοφυών τεχνολογικών επιχειρήσεων, θερμοκοιτίδων και ερευνητικών clusters.',
          wiki: 'Αθήνα',
          youtubeId: ''
        }
      ]
    };
  }

  // 3. Thessaloniki
  if (id === 'thessaloniki' || name.includes('Θεσσαλονίκ')) {
    return {
      overview: 'Η Θεσσαλονίκη είναι η μεγαλύτερη φοιτητούπολη της Ελλάδας και κορυφαίος πανεπιστημιακός και καινοτόμος κόμβος της Νοτιοανατολικής Ευρώπης, φιλοξενώντας το μεγαλύτερο πανεπιστήμιο της χώρας, διεθνή τεχνολογικά κέντρα και υπερσύγχρονα ερευνητικά πάρκα.',
      schools: {
        total: 485,
        summary: 'Περίπου 485 σχολικές μονάδες πρωτοβάθμιας και δευτεροβάθμιας εκπαίδευσης στο πολεοδομικό συγκρότημα.',
        breakdown: [
          { label: 'Νηπιαγωγεία', count: 195, icon: 'fa-solid fa-shapes', desc: 'Δημόσια και ιδιωτικά νηπιαγωγεία όλων των δήμων' },
          { label: 'Δημοτικά Σχολεία', count: 165, icon: 'fa-solid fa-book-open', desc: 'Πολυθέσια και ιστορικά δημοτικά σχολεία' },
          { label: 'Γυμνάσια', count: 68, icon: 'fa-solid fa-graduation-cap', desc: 'Γυμνάσια, πρότυπα και πειραματικά σχολεία' },
          { label: 'Λύκεια (ΓΕΛ & ΕΠΑΛ)', count: 45, icon: 'fa-solid fa-school', desc: 'Γενικά και Επαγγελματικά Λύκεια' },
          { label: 'Ειδικά & Μουσικά', count: 12, icon: 'fa-solid fa-music', desc: 'Μουσικό Σχολείο Θεσσαλονίκης, Καλλιτεχνικά & ΕΕΕΕΚ' }
        ],
        wiki: 'Θεσσαλονίκη',
        youtubeId: ''
      },
      universities: [
        {
          title: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (ΑΠΘ)',
          tag: 'Το Μεγαλύτερο Πανεπιστήμιο των Βαλκανίων',
          desc: 'Ιδρυθέν το 1925, με 11 σχολές, 41 τμήματα και πάνω από 70.000 φοιτητές. Ενιαίο ιστορικό campus στο κέντρο της πόλης.',
          wiki: 'Αριστοτέλειο_Πανεπιστήμιο_Θεσσαλονίκης',
          youtubeId: ''
        },
        {
          title: 'Πανεπιστήμιο Μακεδονίας (ΠΑΜΑΚ)',
          tag: 'Οικονομικές & Κοινωνικές Επιστήμες',
          desc: 'Κορυφαίο εξειδικευμένο ίδρυμα σε οικονομικά, πληροφορική, διεθνείς σπουδές και μουσική επιστήμη και τέχνη.',
          wiki: 'Πανεπιστήμιο_Μακεδονίας',
          youtubeId: ''
        },
        {
          title: 'Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ)',
          tag: 'Διεθνής & Εφαρμοσμένη Εκπαίδευση',
          desc: 'Πανεπιστημιακό ίδρυμα με έδρα τη Σίνδο και τη Θέρμη με αγγλόφωνα προγράμματα και πολυτεχνικές κατευθύνσεις.',
          wiki: 'Διεθνές_Πανεπιστήμιο_της_Ελλάδος',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'Δημόσιες ΣΑΕΚ Θεσσαλονίκης',
          tag: 'Επαγγελματική Κατάρτιση',
          desc: '1η, 2η ΣΑΕΚ Θεσσαλονίκης, ΣΑΕΚ Τριανδρίας, Πυλαίας κ.ά., με ειδικότητες τεχνολογίας, τουρισμού και εφαρμοσμένων τεχνών.',
          wiki: 'Σχολές_Ανώτερης_Επαγγελματικής_Κατάρτισης',
          youtubeId: ''
        },
        {
          title: 'Κολέγιο Ανατόλια (ACT) & City College',
          tag: 'Διεθνή Κολλέγια',
          desc: 'Ιστορικά διεθνή ιδρύματα τριτοβάθμιας εκπαίδευσης με ευρωπαϊκές και αμερικανικές ακαδημαϊκές πιστοποιήσεις.',
          wiki: 'Κολλέγιο_Ανατόλια',
          youtubeId: ''
        },
        {
          title: 'Κρατικό Ωδείο Θεσσαλονίκης',
          tag: 'Ανώτατη Μουσική Παιδεία',
          desc: 'Το μοναδικό κρατικό ωδείο στην Ελλάδα, θεματοφύλακας της κλασικής και συμφωνικής μουσικής εκπαίδευσης.',
          wiki: 'Κρατικό_Ωδείο_Θεσσαλονίκης',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'ΕΚΕΤΑ - Εθνικό Κέντρο Έρευνας & Τεχνολογικής Ανάπτυξης (Θέρμη)',
          tag: 'Εθνικό Ερευνητικό Κέντρο',
          desc: 'Από τα κορυφαία ερευνητικά ιδρύματα της Ευρώπης σε βιώσιμη κινητικότητα, τεχνητή νοημοσύνη, ενέργεια και βιοϊατρική.',
          wiki: 'Εθνικό_Κέντρο_Έρευνας_και_Τεχνολογικής_Ανάπτυξης',
          youtubeId: ''
        },
        {
          title: 'Thess INTEC - Διεθνές Τεχνολογικό Πάρκο 4ης Γενιάς',
          tag: 'Mega Innovation Park',
          desc: 'Πάρκο καινοτομίας στην Περαία που ενώνει τη βιομηχανία, τα πανεπιστήμια και διεθνείς κολοσσούς τεχνολογίας.',
          wiki: 'Θεσσαλονίκη',
          youtubeId: ''
        },
        {
          title: 'Pfizer Center for Digital Innovation & Cisco Co-Innovation Hub',
          tag: 'Παγκόσμιοι Τεχνολογικοί Κόμβοι',
          desc: 'Διεθνή κέντρα ψηφιακής καινοτομίας, ανάπτυξης λογισμικού και έξυπνων πόλεων με έδρα τη Θεσσαλονίκη.',
          wiki: 'Θεσσαλονίκη',
          youtubeId: ''
        }
      ]
    };
  }

  // 4. Patras
  if (id === 'patras' || name.includes('Πάτρα')) {
    return {
      overview: 'Η Πάτρα αποτελεί ιστορική μητρόπολη τεχνολογικής και ακαδημαϊκής αριστείας, φημισμένη για την Πολυτεχνική και Ιατρική της Σχολή, το Επιστημονικό Πάρκο και τη δυναμική κοινότητα τεχνολογικών startups.',
      schools: {
        total: 185,
        summary: 'Περίπου 185 σχολικές μονάδες στον Δήμο Πατρέων.',
        breakdown: [
          { label: 'Νηπιαγωγεία', count: 75, icon: 'fa-solid fa-shapes', desc: 'Δημόσια και ολοήμερα νηπιαγωγεία' },
          { label: 'Δημοτικά Σχολεία', count: 62, icon: 'fa-solid fa-book-open', desc: 'Πολυθέσια δημοτικά σχολεία' },
          { label: 'Γυμνάσια', count: 26, icon: 'fa-solid fa-graduation-cap', desc: 'Ημερήσια και πρότυπα γυμνάσια' },
          { label: 'Λύκεια (ΓΕΛ & ΕΠΑΛ)', count: 18, icon: 'fa-solid fa-school', desc: 'Γενικά Λύκεια και Επαγγελματικά Λύκεια' },
          { label: 'Ειδικά & Μουσικά', count: 4, icon: 'fa-solid fa-music', desc: 'Μουσικό Σχολείο Πατρών και Ειδικά Σχολεία' }
        ],
        wiki: 'Πάτρα',
        youtubeId: ''
      },
      universities: [
        {
          title: 'Πανεπιστήμιο Πατρών (Campus Ρίου)',
          tag: 'Κορυφαίο Πανεπιστήμιο',
          desc: 'Ένα από τα σημαντικότερα ακαδημαϊκά ιδρύματα της χώρας με κορυφαία Πολυτεχνική Σχολή, Σχολή Επιστημών Υγείας και Φυσικομαθηματική.',
          wiki: 'Πανεπιστήμιο_Πατρών',
          youtubeId: ''
        },
        {
          title: 'Ελληνικό Ανοικτό Πανεπιστήμιο (ΕΑΠ)',
          tag: 'Έδρα Εξ Αποστάσεως Εκπαίδευσης',
          desc: 'Η έδρα του δημόσιου ελληνικού πανεπιστημίου εξ αποστάσεως εκπαίδευσης με δεκάδες χιλιάδες φοιτητές σε όλη την Ελλάδα.',
          wiki: 'Ελληνικό_Ανοικτό_Πανεπιστήμιο',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'Δημόσια ΣΑΕΚ Πάτρας',
          tag: 'Επαγγελματική Κατάρτιση',
          desc: 'Προγράμματα ανώτερης τεχνικής και επαγγελματικής κατάρτισης σε σύγχρονες ειδικότητες.',
          wiki: 'Σχολές_Ανώτερης_Επαγγελματικής_Κατάρτισης',
          youtubeId: ''
        },
        {
          title: 'Σχολές Μαθητείας ΔΥΠΑ & Δημοτικό Ωδείο Πατρών',
          tag: 'Μαθητεία & Μουσική Παιδεία',
          desc: 'Τεχνική εκπαίδευση νέων και το ιστορικό Δημοτικό Ωδείο Πατρών.',
          wiki: 'Πάτρα',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'Επιστημονικό Πάρκο Πατρών (PSP)',
          tag: 'Τεχνολογικό Πάρκο & Θερμοκοιτίδα',
          desc: 'Εκκολαπτήριο τεχνολογικών επιχειρήσεων και διεθνώς αναγνωρισμένων startups στους τομείς της μικροηλεκτρονικής και βιοτεχνολογίας.',
          wiki: 'Επιστημονικό_Πάρκο_Πατρών',
          youtubeId: ''
        },
        {
          title: 'ΙΕΧΜΗ / ΙΤΕ - Ινστιτούτο Επιστημών Χημικής Μηχανικής',
          tag: 'Ερευνητικό Ινστιτούτο ΙΤΕ',
          desc: 'Πρωτοποριακή βασική και εφαρμοσμένη έρευνα σε υλικά, νανοτεχνολογία, περιβάλλον και ενέργεια.',
          wiki: 'Ίδρυμα_Τεχνολογίας_και_Έρευνας',
          youtubeId: ''
        }
      ]
    };
  }

  // 5. Heraklion
  if (id === 'heraklion' || name.includes('Ηράκλει')) {
    return {
      overview: 'Το Ηράκλειο είναι διεθνές κέντρο επιστημονικής αριστείας και έρευνας στη Μεσόγειο, έδρα του παγκοσμίου φήμης Ιδρύματος Τεχνολογίας & Έρευνας (ΙΤΕ/FORTH) και της Σχολής Θετικών Επιστημών & Ιατρικής του Πανεπιστημίου Κρήτης.',
      schools: {
        total: 165,
        summary: 'Περίπου 165 σχολικές μονάδες στον Δήμο Ηρακλείου.',
        breakdown: [
          { label: 'Νηπιαγωγεία', count: 68, icon: 'fa-solid fa-shapes', desc: 'Δημόσια νηπιαγωγεία' },
          { label: 'Δημοτικά Σχολεία', count: 56, icon: 'fa-solid fa-book-open', desc: 'Πολυθέσια δημοτικά σχολεία' },
          { label: 'Γυμνάσια', count: 23, icon: 'fa-solid fa-graduation-cap', desc: 'Ημερήσια και πειραματικά γυμνάσια' },
          { label: 'Λύκεια (ΓΕΛ & ΕΠΑΛ)', count: 15, icon: 'fa-solid fa-school', desc: 'Γενικά και Επαγγελματικά Λύκεια' },
          { label: 'Ειδικά & Μουσικά', count: 3, icon: 'fa-solid fa-music', desc: 'Μουσικό & Καλλιτεχνικό Σχολείο Ηρακλείου' }
        ],
        wiki: 'Ηράκλειο_Κρήτης',
        youtubeId: ''
      },
      universities: [
        {
          title: 'Πανεπιστήμιο Κρήτης (Campus Βουτών)',
          tag: 'Διεθνές Ερευνητικό Πανεπιστήμιο',
          desc: 'Πανεπιστημιούπολη Βουτών με την Ιατρική Σχολή, το Τμήμα Επιστήμης Υπολογιστών και κορυφαία τμήματα θετικών επιστημών.',
          wiki: 'Πανεπιστήμιο_Κρήτης',
          youtubeId: ''
        },
        {
          title: 'Ελληνικό Μεσογειακό Πανεπιστήμιο (ΕΛΜΕΠΑ)',
          tag: 'Ανώτατη Τεχνολογική Εκπαίδευση',
          desc: 'Έδρα στον Εσταυρωμένο με σχολές μηχανικών, γεωπονίας, επιστημών υγείας και διοίκησης.',
          wiki: 'Ελληνικό_Μεσογειακό_Πανεπιστήμιο',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'Δημόσια ΣΑΕΚ Ηρακλείου',
          tag: 'Επαγγελματική Κατάρτιση',
          desc: 'Τμήματα εφαρμοσμένων ειδικοτήτων τεχνολογίας και πληροφορικής.',
          wiki: 'Σχολές_Ανώτερης_Επαγγελματικής_Κατάρτισης',
          youtubeId: ''
        },
        {
          title: 'Ανώτερη Σχολή Τουριστικής Εκπαίδευσης Κρήτης (ΑΣΤΕΚ)',
          tag: 'Τουριστική Εκπαίδευση',
          desc: 'Δημόσια σχολή εξειδικευμένη στη φιλοξενία και τουριστική διοίκηση.',
          wiki: 'Ηράκλειο_Κρήτης',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'Ίδρυμα Τεχνολογίας & Έρευνας (ΙΤΕ / FORTH)',
          tag: 'Κορυφαίο Ερευνητικό Ίδρυμα Ελλάδας',
          desc: 'Παγκόσμιο σημείο αναφοράς στην έρευνα με το Ινστιτούτο Μοριακής Βιολογίας & Βιοτεχνολογίας (ΙΜΒΒ), Ινστιτούτο Πληροφορικής (ΙΠ) και Ινστιτούτο Ηλεκτρονικής Δομής & Λέιζερ (ΙΗΔΛ).',
          wiki: 'Ίδρυμα_Τεχνολογίας_και_Έρευνας',
          youtubeId: ''
        },
        {
          title: 'Επιστημονικό & Τεχνολογικό Πάρκο Κρήτης (ΕΤΕΠ-Κ)',
          tag: 'Καινοτομία & Τεχνοβλαστοί',
          desc: 'Θερμοκοιτίδα καινοτομίας που υποστηρίζει spin-offs του ΙΤΕ και του Πανεπιστημίου Κρήτης.',
          wiki: 'Ηράκλειο_Κρήτης',
          youtubeId: ''
        }
      ]
    };
  }

  // 6. Boston
  if (id === 'boston' || name.includes('Βοστών') || name.toLowerCase().includes('boston')) {
    return {
      overview: 'Η Βοστώνη και η ευρύτερη μητροπολιτική περιοχή (Greater Boston) αποτελούν την παγκόσμια πρωτεύουσα της ανώτατης εκπαίδευσης, της βιοτεχνολογίας και της ακαδημαϊκής έρευνας, φιλοξενώντας το Harvard, το MIT και δεκάδες κορυφαία εκπαιδευτικά ιδρύματα.',
      schools: {
        total: 125,
        summary: '125 δημόσια σχολεία (Boston Public Schools - BPS) με πάνω από 50.000 μαθητές, συμπεριλαμβανομένου του ιστορικού Boston Latin School (ιδρυθέν το 1635).',
        breakdown: [
          { label: 'Early Education & Kindergartens', count: 35, icon: 'fa-solid fa-shapes', desc: 'Προσχολική εκπαίδευση και νηπιαγωγεία' },
          { label: 'Elementary Schools', count: 45, icon: 'fa-solid fa-book-open', desc: 'Δημόσια δημοτικά σχολεία BPS' },
          { label: 'Middle & K-8 Schools', count: 20, icon: 'fa-solid fa-graduation-cap', desc: 'Σχολεία μέσης βαθμίδας' },
          { label: 'High Schools & Academies', count: 22, icon: 'fa-solid fa-school', desc: 'Boston Latin, Tech Boston Academy κ.ά.' },
          { label: 'Special & Exam Schools', count: 3, icon: 'fa-solid fa-award', desc: 'Exam Schools υψηλού ανταγωνισμού & ειδικής αγωγής' }
        ],
        wiki: 'Boston_Public_Schools',
        youtubeId: ''
      },
      universities: [
        {
          title: 'Harvard University (Cambridge / Boston)',
          tag: 'Ivy League - Κορυφαίο Ίδρυμα Παγκοσμίως',
          desc: 'Το αρχαιότερο ίδρυμα ανώτατης εκπαίδευσης στις ΗΠΑ (ιδρυθέν το 1636), παγκόσμιος ηγέτης στην ιατρική, τη νομική, τη διοίκηση επιχειρήσεων και τις επιστήμες.',
          wiki: 'Πανεπιστήμιο_Χάρβαρντ',
          youtubeId: ''
        },
        {
          title: 'Massachusetts Institute of Technology (MIT)',
          tag: 'Παγκόσμιος Ηγέτης Τεχνολογίας & Μηχανικής',
          desc: 'Κορυφαίο τεχνολογικό ίδρυμα του πλανήτη με δεκάδες νομπελίστες και απαράμιλλη συνεισφορά στην πληροφορική, την τεχνητή νοημοσύνη και τη διαστημική εξερεύνηση.',
          wiki: 'Τεχνολογικό_Ινστιτούτο_Μασαχουσέτης',
          youtubeId: ''
        },
        {
          title: 'Boston University (BU) & Northeastern University',
          tag: 'Μείζονα Ερευνητικά Πανεπιστήμια',
          desc: 'Κορυφαία μητροπολιτικά ερευνητικά ιδρύματα με διεθνή προγράμματα coop και τεχνολογική καινοτομία.',
          wiki: 'Πανεπιστήμιο_της_Βοστώνης',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'Berklee College of Music',
          tag: 'Παγκόσμια Μουσική Ακαδημία',
          desc: 'Το διασημότερο κολλέγιο σύγχρονης μουσικής, τζαζ και μουσικής παραγωγής στον κόσμο.',
          wiki: 'Berklee_College_of_Music',
          youtubeId: ''
        },
        {
          title: 'Bunker Hill & Roxbury Community Colleges',
          tag: 'Κοινοτικά & Τεχνικά Κολλέγια',
          desc: 'Δημόσια διετή ιδρύματα τριτοβάθμιας επαγγελματικής και τεχνικής κατάρτισης.',
          wiki: 'Bunker_Hill_Community_College',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'Kendall Square (The Most Innovative Square Mile on Earth)',
          tag: 'Παγκόσμιος Κόμβος Καινοτομίας & Biotech',
          desc: 'Το επίκεντρο της παγκόσμιας βιοτεχνολογίας, φαρμακολογίας, τεχνητής νοημοσύνης και venture capital δίπλα στο MIT.',
          wiki: 'Kendall_Square',
          youtubeId: ''
        },
        {
          title: 'Broad Institute of MIT and Harvard',
          tag: 'Γονιδιωματική & Βιοϊατρική Έρευνα',
          desc: 'Πρωτοπόρο κέντρο γονιδιωματικής ανάλυσης, τεχνολογίας CRISPR και ιατρικής ακριβείας.',
          wiki: 'Broad_Institute',
          youtubeId: ''
        }
      ]
    };
  }

  // 7. Vienna
  if (id === 'vienna' || name.includes('Βιένν') || name.toLowerCase().includes('vienna')) {
    return {
      overview: 'Η Βιέννη είναι κορυφαία ακαδημαϊκή και πολιτιστική πρωτεύουσα της Ευρώπης, συνδυάζοντας ιστορικά πανεπιστήμια αιώνων, διεθνή ινστιτούτα μοριακής βιολογίας και ένα υποδειγματικό σύστημα δημόσιας και επαγγελματικής εκπαίδευσης.',
      schools: {
        total: 720,
        summary: 'Άνω των 720 δημόσιων και ιδιωτικών εκπαιδευτικών μονάδων σε όλη τη Βιέννη.',
        breakdown: [
          { label: 'Kindergärten (Προσχολική)', count: 320, icon: 'fa-solid fa-shapes', desc: 'Δημόσια και ιδιωτικά νηπιαγωγεία' },
          { label: 'Volksschulen (Δημοτικά)', count: 220, icon: 'fa-solid fa-book-open', desc: 'Πρωτοβάθμια σχολεία της πόλης' },
          { label: 'Mittelschulen (Μέση Βαθμίδα)', count: 90, icon: 'fa-solid fa-graduation-cap', desc: 'Σχολεία μέσης γενικής εκπαίδευσης' },
          { label: 'Gymnasien & AHS (Λύκεια)', count: 65, icon: 'fa-solid fa-school', desc: 'Ακαδημαϊκά γυμνάσια/λύκεια προετοιμασίας πανεπιστημίου' },
          { label: 'HTL & Επαγγελματικές Σχολές', count: 25, icon: 'fa-solid fa-screwdriver-wrench', desc: 'Ανώτερες τεχνικές σχολές (HTL) και επαγγελματικά ινστιτούτα' }
        ],
        wiki: 'Βιέννη',
        youtubeId: ''
      },
      universities: [
        {
          title: 'University of Vienna (Universität Wien)',
          tag: 'Ιδρυθέν 1365 - Ιστορικό Πανεπιστήμιο',
          desc: 'Ένα από τα παλαιότερα και μεγαλύτερα πανεπιστήμια της Ευρώπης με 15 νομπελίστες και άνω των 90.000 φοιτητών.',
          wiki: 'Πανεπιστήμιο_της_Βιέννης',
          youtubeId: ''
        },
        {
          title: 'TU Wien (Vienna University of Technology)',
          tag: 'Πολυτεχνικό Πανεπιστήμιο',
          desc: 'Κορυφαίο τεχνολογικό και πολυτεχνικό ίδρυμα της Αυστρίας σε μηχανική, φυσική και πληροφορική.',
          wiki: 'Πολυτεχνείο_της_Βιέννης',
          youtubeId: ''
        },
        {
          title: 'Vienna University of Economics & Business (WU Wien)',
          tag: 'Οικονομική Πανεπιστημιούπολη',
          desc: 'Υπερσύγχρονο campus σχεδιασμένο από τη Zaha Hadid, από τις κορυφαίες σχολές business και οικονομικών στην Ευρώπη.',
          wiki: 'Βιέννη',
          youtubeId: ''
        }
      ],
      collegesVocational: [
        {
          title: 'FH Campus Wien (University of Applied Sciences)',
          tag: 'Εφαρμοσμένες Επιστήμες',
          desc: 'Το μεγαλύτερο πανεπιστήμιο εφαρμοσμένων επιστημών στην Αυστρία με τεχνολογία, υγεία και κοινωνική διοίκηση.',
          wiki: 'Βιέννη',
          youtubeId: ''
        },
        {
          title: 'MUK (Music & Arts University of the City of Vienna)',
          tag: 'Μουσική & Παραστατικές Τέχνες',
          desc: 'Διεθνούς φήμης πανεπιστήμιο μουσικής, όπερας και θεάτρου στην παγκόσμια πρωτεύουσα της κλασικής μουσικής.',
          wiki: 'Βιέννη',
          youtubeId: ''
        }
      ],
      researchInnovation: [
        {
          title: 'Vienna BioCenter (VBC)',
          tag: 'Κέντρο Βιοεπιστημών & Μοριακής Βιολογίας',
          desc: 'Κορυφαίο ευρωπαϊκό hub βιοϊατρικής με ερευνητικά ινστιτούτα όπως το IMP, IMBA, GMI και CeMM.',
          wiki: 'Βιέννη',
          youtubeId: ''
        },
        {
          title: 'AIT Austrian Institute of Technology & Vienna Innovation District',
          tag: 'Έρευνα & Βιομηχανική Καινοτομία',
          desc: 'Ο μεγαλύτερος μη πανεπιστημιακός ερευνητικός οργανισμός της Αυστρίας για τις υποδομές του μέλλοντος.',
          wiki: 'Βιέννη',
          youtubeId: ''
        }
      ]
    };
  }

  // Generic Dynamic generator for ANY city worldwide
  const estimatedUnits = Math.max(12, Math.round(pop / 850));
  const nipCount = Math.max(4, Math.round(estimatedUnits * 0.38));
  const dimCount = Math.max(4, Math.round(estimatedUnits * 0.32));
  const gymCount = Math.max(2, Math.round(estimatedUnits * 0.15));
  const lykCount = Math.max(2, Math.round(estimatedUnits * 0.12));
  const specCount = Math.max(1, Math.round(estimatedUnits * 0.03));
  const totalUnits = nipCount + dimCount + gymCount + lykCount + specCount;

  return {
    overview: `Εκπαιδευτικό σύστημα, ακαδημαϊκά ιδρύματα, τεχνικές σχολές και δομές έρευνας και καινοτομίας στην πόλη (${name}).`,
    schools: {
      total: totalUnits,
      summary: `Περίπου ${totalUnits} ενεργές σχολικές μονάδες πρωτοβάθμιας και δευτεροβάθμιας εκπαίδευσης για την κάλυψη των αναγκών των μαθητών της περιοχής (${name}).`,
      breakdown: [
        { label: 'Νηπιαγωγεία / Early Education', count: nipCount, icon: 'fa-solid fa-shapes', desc: `Προσχολική αγωγή και δημόσια/κοινοτικά νηπιαγωγεία (${name})` },
        { label: 'Δημοτικά Σχολεία / Elementary', count: dimCount, icon: 'fa-solid fa-book-open', desc: `Μονάδες πρωτοβάθμιας βασικής εκπαίδευσης (${name})` },
        { label: 'Γυμνάσια / Middle Schools', count: gymCount, icon: 'fa-solid fa-graduation-cap', desc: `Μονάδες κατώτερης δευτεροβάθμιας εκπαίδευσης (${name})` },
        { label: 'Λύκεια (ΓΕΛ & ΕΠΑΛ) / High Schools', count: lykCount, icon: 'fa-solid fa-school', desc: `Γενικά και επαγγελματικά λύκεια / τεχνικά εκπαιδευτήρια (${name})` },
        { label: 'Ειδικά & Καλλιτεχνικά Σχολεία', count: specCount, icon: 'fa-solid fa-palette', desc: `Ειδική αγωγή, μουσικά και καλλιτεχνικά εργαστήρια (${name})` }
      ],
      wiki: name,
      youtubeId: ''
    },
    universities: [
      {
        title: `Πανεπιστημιακά Ιδρύματα & Ανώτατη Εκπαίδευση (${name})`,
        tag: 'Ανώτατη Εκπαίδευση',
        desc: `Ακαδημαϊκές σχολές, πανεπιστημιακά τμήματα και προγράμματα σπουδών που εξυπηρετούν τη φοιτητική κοινότητα της πόλης (${name}).`,
        wiki: name,
        youtubeId: ''
      }
    ],
    collegesVocational: [
      {
        title: `Σχολές Επαγγελματικής Κατάρτισης, ΙΕΚ & Κολέγια (${name})`,
        tag: 'Επαγγελματική Κατάρτιση',
        desc: `Ινστιτούτα ανώτερης επαγγελματικής κατάρτισης, τεχνικές σχολές μαθητείας και κολέγια εφαρμοσμένων σπουδών στην περιοχή (${name}).`,
        wiki: name,
        youtubeId: ''
      }
    ],
    researchInnovation: [
      {
        title: `Κέντρα Έρευνας, Τεχνολογίας & Καινοτομίας (${name})`,
        tag: 'Καινοτομία & Ανάπτυξη',
        desc: `Ερευνητικά εργαστήρια, θερμοκοιτίδες νεοφυούς επιχειρηματικότητας και υποδομές καινοτομίας στην πόλη (${name}).`,
        wiki: name,
        youtubeId: ''
      }
    ]
  };
}

export function getCuratedEcoItems(entity) {
  const edu = getCityEducationData(entity);
  if (!edu) return [];
  const list = [];
  if (edu.universities) list.push(...edu.universities);
  if (edu.collegesVocational) list.push(...edu.collegesVocational);
  if (edu.researchInnovation) list.push(...edu.researchInnovation);
  return list;
}

export function renderTabContent(tabId, entity, activeYear = null, activeSpots = [], isPlaying = false) {
  const container = document.getElementById('tabContent');
  if (!container || !entity) return;

  let html = '';

  if (tabId === 'geo') {
    html = renderGeographyTabHtml(entity);
    if (entity.type === 'city') {
      setTimeout(() => {
        mountLiveWeatherData(entity.coords);
      }, 40);
    }
  } else if (tabId === 'hist') {
    html = renderHistoryTabHtml(entity);
  } else if (tabId === 'demo') {
    const summary = entity.demo?.summary || entity.demo?.overview || entity.demo?.demographics || (entity.population ? `Πληθυσμός: ${entity.population}` : '');
    const rawDetails = entity.demo?.details
      || [
        entity.demo?.languages ? { label: 'Γλώσσες', text: entity.demo.languages } : null,
        entity.demo?.demographics ? { label: 'Δημογραφία & Κοινωνία', text: entity.demo.demographics } : null
      ].filter(Boolean)
      || (Array.isArray(entity.fastFacts) ? entity.fastFacts.map(f => typeof f === 'object' ? { label: f.label || 'Στοιχείο', text: f.value || f.text || '' } : { label: 'Στοιχείο', text: String(f) }) : []);
    const details = rawDetails.map(d => ({ label: d.label || 'Στοιχείο', text: d.text || '' }));
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-emerald-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-chart-pie"></i> Κοινωνία, Πληθυσμός & Οικονομία
          </div>
          <p class="leading-relaxed">${summary || 'Δεν υπάρχουν διαθέσιμες πληροφορίες.'}</p>
        </div>

        ${details.length ? `
          <div class="space-y-2.5 mt-3">
            ${details.map(d => `
              <div class="p-3 bg-slate-800/30 border border-slate-700/40 rounded-xl">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-0.5">${d.label}</div>
                <div class="text-xs text-slate-200 leading-relaxed">${d.text}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  } else if (tabId === 'cult') {
    html = renderCultureTabHtml(entity);
  } else if (tabId === 'guide') {
    const items = getCuratedGuideItems(entity);
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-sky-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-compass"></i> Αξιοθέατα & Ταξιδιωτικός Οδηγός
          </div>
          <p class="leading-relaxed">Τα κορυφαία ιστορικά μνημεία, τα μουσεία και τα σημεία που αξίζει να ανακαλύψετε στην περιοχή (${entity.name}).</p>
        </div>

        <div class="space-y-2.5 mt-3">
          ${items.map(item => {
            const matchedPoi = (entity.pois || []).find(p => p.name === item.title || (item.title && p.name && (item.title.toLowerCase().includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(item.title.toLowerCase()))));
            const itemCoords = matchedPoi?.coords || entity.coords || [37.9715, 23.7257];
            const searchPlace = `${item.title}, ${entity.name}`;
            return `
            <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-sky-500/50 transition border border-slate-700/40 rounded-xl">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950/80 text-sky-300 border border-sky-600/40 mb-1">
                    ${item.catLabel}
                  </span>
                  <h5 class="font-bold text-slate-100 text-sm text-sky-200">${item.title}</h5>
                </div>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                  <span>Ανάλυση AI</span>
                </button>
                <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-brands fa-wikipedia-w"></i>
                  <span>Wikipedia</span>
                </button>
                <button onclick="window.openMapStreetView(${itemCoords[0]}, ${itemCoords[1]}, '${escapeStr(searchPlace)}')" class="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-white border border-amber-500/30 text-[11px] font-bold transition flex items-center gap-1.5 shadow" title="Περιήγηση Street View στον Χάρτη">
                  <i class="fa-solid fa-street-view text-amber-400"></i>
                  <span>Street View</span>
                </button>
                <button onclick="window.openPoiVideo('${escapeStr(item.title)}', '${escapeStr(entity.id || '')}')" class="px-2.5 py-1 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow" title="Προβολή στο Βίντεο Περιήγησης (4K στο κατάλληλο σημείο)">
                  <i class="fa-solid fa-film text-rose-400"></i>
                  <span>Βίντεο (4K)</span>
                </button>
              </div>
            </div>
          `;
          }).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'gastro') {
    const items = getCuratedGastroItems(entity);
    html = renderGastronomyTabHtml(entity, items);
  } else if (tabId === 'eco') {
    const edu = getCityEducationData(entity);
    const schools = edu?.schools;
    const universities = edu?.universities || [];
    const collegesVocational = edu?.collegesVocational || [];
    const researchInnovation = edu?.researchInnovation || [];

    html = `
      <div class="space-y-3.5">
        <!-- 1. Master Header Card -->
        <div class="p-4 bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-slate-950 rounded-2xl border border-indigo-600/40 shadow-lg text-slate-200">
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <i class="fa-solid fa-graduation-cap text-indigo-300"></i>
              <span>Εκπαίδευση & Καινοτομία (${entity.name})</span>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold shrink-0">
              Παιδεία & Έρευνα
            </span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed mb-3">${edu?.overview || 'Εκπαιδευτικές δομές, ακαδημαϊκά ιδρύματα και ερευνητικά κέντρα.'}</p>
          <div class="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
            <button onclick="window.openDeepDive('Εκπαίδευση & Καινοτομία (${escapeStr(entity.name)})', '${escapeStr(edu?.overview || '')}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
              <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
              <span>Ανάλυση AI</span>
            </button>
            <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(entity.name)} σχολεία πανεπιστήμια έρευνα καινοτομία')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για την εκπαίδευση και καινοτομία της πόλης">
              <i class="fa-solid fa-magnifying-glass text-indigo-200"></i>
              <span>Bing AI Search</span>
            </button>
            <button onclick="window.openMapWikiReader('${escapeStr(entity.name)}', 'el')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
              <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
              <span>Wikipedia</span>
            </button>
            <button onclick="window.openEducationVideo('Εκπαίδευση & Καινοτομία', '${escapeStr(entity.name)}'${schools?.youtubeId ? `, '${schools.youtubeId}'` : ''})" class="px-2.5 py-1 rounded-lg bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 hover:text-white border border-indigo-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Προβολή σχετικού εκπαιδευτικού βίντεο">
              <i class="fa-solid fa-play text-indigo-400"></i>
              <span>Βίντεο Περιήγηση 📹</span>
            </button>
          </div>
        </div>

        <!-- 2. School Units Breakdown Card -->
        ${schools ? `
          <div class="p-4 bg-slate-900/80 rounded-2xl border border-sky-800/40 shadow-lg text-slate-200">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <i class="fa-solid fa-school text-sky-300"></i>
                <span>Σχολικές Μονάδες (${entity.name})</span>
              </div>
              <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-extrabold shrink-0">
                ${schools.total} Μονάδες
              </span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed mb-3">${schools.summary}</p>

            <!-- Breakdown Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              ${(schools.breakdown || []).map(b => `
                <div class="p-2.5 bg-slate-800/50 border border-slate-700/60 rounded-xl flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-sky-950/80 border border-sky-600/40 text-sky-300 flex items-center justify-center shrink-0 text-xs">
                    <i class="${b.icon || 'fa-solid fa-book'}"></i>
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between gap-1 mb-0.5">
                      <span class="font-bold text-slate-200 text-xs truncate">${b.label}</span>
                      <span class="text-xs font-black text-sky-300 px-1.5 py-0.2 bg-sky-950/90 rounded border border-sky-600/40 shrink-0">${b.count}</span>
                    </div>
                    <div class="text-[11px] text-slate-400 leading-tight">${b.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
              <button onclick="window.openDeepDive('Σχολικές Μονάδες (${escapeStr(entity.name)})', '${escapeStr(schools.summary)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                <span>Ανάλυση AI</span>
              </button>
              <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(entity.name)} σχολικές μονάδες δημοτικά γυμνάσια λύκεια')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για τα σχολεία της πόλης">
                <i class="fa-solid fa-magnifying-glass text-sky-200"></i>
                <span>Bing AI</span>
              </button>
              <button onclick="window.openMapWikiReader('${escapeStr(schools.wiki || entity.name)}', 'el', '${escapeStr(entity.name)} education')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
                <span>Wikipedia</span>
              </button>
              <button onclick="window.openEducationVideo('Σχολικές Μονάδες Σχολεία', '${escapeStr(entity.name)}'${schools.youtubeId ? `, '${schools.youtubeId}'` : ''})" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Βίντεο σχολικών μονάδων">
                <i class="fa-solid fa-play text-sky-400"></i>
                <span>Βίντεο Σχολείων 📹</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- 3. Universities & Higher Education Section -->
        ${universities && universities.length > 0 ? `
          <div class="pt-1.5">
            <div class="text-[11px] font-bold uppercase tracking-wider text-sky-400/90 flex items-center gap-1.5 mb-2 px-1">
              <i class="fa-solid fa-university text-sky-400"></i>
              <span>Πανεπιστήμια & Ανώτατη Εκπαίδευση (${universities.length})</span>
            </div>

            <div class="space-y-2.5">
              ${universities.map(item => `
                <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-sky-500/50 transition border border-slate-700/40 rounded-xl">
                  <div class="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950/80 text-sky-300 border border-sky-600/40 mb-1">
                        ${item.tag || '🎓 Πανεπιστήμιο'}
                      </span>
                      <h5 class="font-bold text-slate-100 text-sm text-sky-200">${item.title}</h5>
                    </div>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
                  <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                    <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                      <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                      <span>Ανάλυση AI</span>
                    </button>
                    <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(item.title)} ${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI αναζήτηση για το ίδρυμα">
                      <i class="fa-solid fa-magnifying-glass text-sky-200"></i>
                      <span>Bing AI</span>
                    </button>
                    <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el', '${escapeStr(item.title)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                      <i class="fa-brands fa-wikipedia-w"></i>
                      <span>Wikipedia</span>
                    </button>
                    <button onclick="window.openEducationVideo('${escapeStr(item.title)}', '${escapeStr(entity.name)}'${item.youtubeId ? `, '${item.youtubeId}'` : ''})" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Προβολή βίντεο ιδρύματος">
                      <i class="fa-solid fa-play text-sky-400"></i>
                      <span>Βίντεο 🎓</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 4. Colleges, SAEK (IEK) & Vocational Education Section -->
        ${collegesVocational && collegesVocational.length > 0 ? `
          <div class="pt-1.5">
            <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-400/90 flex items-center gap-1.5 mb-2 px-1">
              <i class="fa-solid fa-briefcase text-emerald-400"></i>
              <span>Κολέγια, ΣΑΕΚ (ΙΕΚ) & Επαγγελματική Κατάρτιση (${collegesVocational.length})</span>
            </div>

            <div class="space-y-2.5">
              ${collegesVocational.map(item => `
                <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-emerald-500/50 transition border border-slate-700/40 rounded-xl">
                  <div class="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 mb-1">
                        ${item.tag || '💼 Επαγγελματική Κατάρτιση'}
                      </span>
                      <h5 class="font-bold text-slate-100 text-sm text-emerald-200">${item.title}</h5>
                    </div>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
                  <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                    <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                      <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                      <span>Ανάλυση AI</span>
                    </button>
                    <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(item.title)} ${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI αναζήτηση για τη σχολή">
                      <i class="fa-solid fa-magnifying-glass text-emerald-200"></i>
                      <span>Bing AI</span>
                    </button>
                    <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el', '${escapeStr(item.title)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                      <i class="fa-brands fa-wikipedia-w"></i>
                      <span>Wikipedia</span>
                    </button>
                    <button onclick="window.openEducationVideo('${escapeStr(item.title)}', '${escapeStr(entity.name)}'${item.youtubeId ? `, '${item.youtubeId}'` : ''})" class="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-white border border-emerald-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Προβολή βίντεο κατάρτισης">
                      <i class="fa-solid fa-play text-emerald-400"></i>
                      <span>Βίντεο 📚</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 5. Research Centers & Innovation Section -->
        ${researchInnovation && researchInnovation.length > 0 ? `
          <div class="pt-1.5">
            <div class="text-[11px] font-bold uppercase tracking-wider text-purple-400/90 flex items-center gap-1.5 mb-2 px-1">
              <i class="fa-solid fa-flask text-purple-400"></i>
              <span>Ερευνητικά Κέντρα & Καινοτομία (${researchInnovation.length})</span>
            </div>

            <div class="space-y-2.5">
              ${researchInnovation.map(item => `
                <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-purple-500/50 transition border border-slate-700/40 rounded-xl">
                  <div class="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950/80 text-purple-300 border border-purple-600/40 mb-1">
                        ${item.tag || '💡 Έρευνα & Καινοτομία'}
                      </span>
                      <h5 class="font-bold text-slate-100 text-sm text-purple-200">${item.title}</h5>
                    </div>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
                  <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                    <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                      <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                      <span>Ανάλυση AI</span>
                    </button>
                    <button onclick="window.openDeepDiveBingAiSearch('${escapeStr(item.title)} ${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI αναζήτηση για το ερευνητικό κέντρο">
                      <i class="fa-solid fa-magnifying-glass text-purple-200"></i>
                      <span>Bing AI</span>
                    </button>
                    <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el', '${escapeStr(item.title)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                      <i class="fa-brands fa-wikipedia-w"></i>
                      <span>Wikipedia</span>
                    </button>
                    <button onclick="window.openEducationVideo('${escapeStr(item.title)}', '${escapeStr(entity.name)}'${item.youtubeId ? `, '${item.youtubeId}'` : ''})" class="px-2.5 py-1 rounded-lg bg-purple-950/80 hover:bg-purple-900 text-purple-300 hover:text-white border border-purple-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Προβολή βίντεο καινοτομίας">
                      <i class="fa-solid fa-play text-purple-400"></i>
                      <span>Βίντεο 💡</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  } else if (tabId === 'timeline') {
    const isUnknownYear = (activeYear === 'unknown');
    const yr = isUnknownYear ? 'unknown' : ((activeYear === 'all' || !activeYear) ? 'all' : parseInt(activeYear, 10));
    const yrNum = isUnknownYear ? 'Άγνωστο' : ((yr === 'all' || !yr) ? 2026 : (typeof yr === 'number' ? yr : parseInt(yr, 10) || 2026));
    const context = getHistoricalContextForEra(entity, yr);

    // Filter spots relevant to current entity
    const spotsForEntity = (activeSpots || []).filter(spot => {
      const isPrivate = Boolean(spot.visibility === 'private' || spot.isPrivate);
      if (isPrivate) {
        const curUser = window.getCurrentUser ? window.getCurrentUser() : null;
        const isAllowed = curUser && (curUser.role === 'admin' || (curUser.email && curUser.email === spot.authorEmail) || (curUser.uid && curUser.uid === spot.authorUid));
        if (!isAllowed) return false;
      }
      if (entity.id && spot.cityId && spot.cityId !== entity.id) {
        return false;
      }
      return true;
    });

    // Collect active chronicles & photos for this era
    const activeChronicleCards = [];
    const eraPhotos = [];

    spotsForEntity.forEach(spot => {
      if (!spot.chronicles || !spot.chronicles.length) return;
      let matched = null;
      if (yr === 'all') {
        matched = spot.chronicles[spot.chronicles.length - 1];
      } else if (yr === 'unknown') {
        matched = spot.chronicles.find(c => c.fromYear === null || c.isUnknownDate || c.date === 'unknown') || (spot.isUnknownDate ? spot.chronicles[0] : null);
      } else {
        matched = spot.chronicles.find(c => 
          c.fromYear === yr || 
          (c.date && typeof c.date === 'string' && c.date.startsWith(String(yr))) || 
          (c.photos && c.photos.some(p => p.year === yr))
        );
        if (!matched && openTimelineEntryId && spot.chronicles.some(c => c.id === openTimelineEntryId)) {
          matched = spot.chronicles.find(c => c.id === openTimelineEntryId);
        }
      }

      if (matched) {
        activeChronicleCards.push({ spot, chronicle: matched });
        if (matched.photos && matched.photos.length) {
          matched.photos.forEach(p => {
            let imgUrl = p.url;
            let isYt = Boolean(p.isYouTube);
            let ytId = p.youtubeId || null;
            if (!ytId && typeof imgUrl === 'string') {
              const m = imgUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
              if (m && m[1]) {
                ytId = m[1];
                isYt = true;
              }
            }
            if (isYt && ytId) {
              imgUrl = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
            }
            eraPhotos.push({ ...p, url: imgUrl, isYouTube: isYt, youtubeId: ytId, spotName: spot.name, spotId: spot.id });
          });
        }
      }
    });

    // Calendar Definitions for the Annual Horizontal Timeline
    const isLeap = (typeof yrNum === 'number') ? ((yrNum % 4 === 0 && yrNum % 100 !== 0) || (yrNum % 400 === 0)) : false;
    const MONTHS_DEF = [
      { num: 1, short: 'Ιαν', name: 'Ιανουάριος', days: 31 },
      { num: 2, short: 'Φεβ', name: 'Φεβρουάριος', days: isLeap ? 29 : 28 },
      { num: 3, short: 'Μαρ', name: 'Μάρτιος', days: 31 },
      { num: 4, short: 'Απρ', name: 'Απρίλιος', days: 30 },
      { num: 5, short: 'Μαϊ', name: 'Μάιος', days: 31 },
      { num: 6, short: 'Ιουν', name: 'Ιούνιος', days: 30 },
      { num: 7, short: 'Ιουλ', name: 'Ιούλιος', days: 31 },
      { num: 8, short: 'Αυγ', name: 'Αύγουστος', days: 31 },
      { num: 9, short: 'Σεπ', name: 'Σεπτέμβριος', days: 30 },
      { num: 10, short: 'Οκτ', name: 'Οκτώβριος', days: 31 },
      { num: 11, short: 'Νοε', name: 'Νοέμβριος', days: 30 },
      { num: 12, short: 'Δεκ', name: 'Δεκέμβριος', days: 31 }
    ];

    // Build hierarchical monthMap: monthNum => Map(dayNum => Array<entry>)
    const monthMap = new Map();

    activeChronicleCards.forEach(({ spot, chronicle }) => {
      let mNum = 'unknown';
      let dNum = 'unknown';
      let timeStr = '—';

      if (chronicle.isUnknownDate || chronicle.date === 'unknown' || chronicle.fromYear === null) {
        mNum = 'unknown';
        dNum = 'unknown';
      } else if (chronicle.date && typeof chronicle.date === 'string' && chronicle.date.length >= 10) {
        mNum = parseInt(chronicle.date.slice(5, 7), 10) || 'unknown';
        dNum = parseInt(chronicle.date.slice(8, 10), 10) || 'unknown';
      } else if (chronicle.date && typeof chronicle.date === 'string' && chronicle.date.length >= 7) {
        mNum = parseInt(chronicle.date.slice(5, 7), 10) || 'unknown';
        dNum = 'unknown';
      } else {
        mNum = 'unknown';
        dNum = 'unknown';
      }

      if (chronicle.time && typeof chronicle.time === 'string' && chronicle.time.trim()) {
        timeStr = chronicle.time.trim();
      }

      let ytId = chronicle.youtubeId || null;
      if (!ytId && chronicle.videoUrl) {
        const m = chronicle.videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
        if (m && m[1]) ytId = m[1];
      }
      if (!ytId && chronicle.photos) {
        const found = chronicle.photos.find(p => p.youtubeId || p.isYouTube);
        if (found) ytId = found.youtubeId;
      }

      let photoUrl = null;
      if (chronicle.photos && chronicle.photos.length) {
        photoUrl = chronicle.photos[0].url;
      }

      const entry = {
        id: chronicle.id || `${spot.id}-${yrNum}-${mNum}-${dNum}`,
        spot,
        chronicle,
        year: yrNum,
        month: mNum,
        day: dNum,
        time: timeStr,
        youtubeId: ytId,
        photoUrl: photoUrl
      };

      if (!monthMap.has(mNum)) {
        monthMap.set(mNum, new Map());
      }
      const dayMap = monthMap.get(mNum);
      if (!dayMap.has(dNum)) {
        dayMap.set(dNum, []);
      }
      dayMap.get(dNum).push(entry);
    });

    const hasUnknownMonths = monthMap.has('unknown');
    const unknownMonthCount = hasUnknownMonths ? Array.from(monthMap.get('unknown').values()).reduce((sum, arr) => sum + arr.length, 0) : 0;

    // Auto-select first month with entries if none selected or if selected month has no entries
    if (selectedTimelineMonth && !monthMap.has(selectedTimelineMonth)) {
      selectedTimelineMonth = null;
      selectedTimelineDay = null;
    }
    if (!selectedTimelineMonth && monthMap.size > 0) {
      selectedTimelineMonth = monthMap.keys().next().value;
    }

    let selectedMonthObj = null;
    if (selectedTimelineMonth === 'unknown') {
      selectedMonthObj = { num: 'unknown', short: '?', name: 'Άγνωστος / Απροσδιόριστος Μήνας', days: 0, isUnknown: true };
    } else if (typeof selectedTimelineMonth === 'number') {
      selectedMonthObj = MONTHS_DEF[selectedTimelineMonth - 1] || null;
    }

    const selectedDayMap = (selectedTimelineMonth && monthMap.has(selectedTimelineMonth)) ? monthMap.get(selectedTimelineMonth) : null;

    if (selectedTimelineDay && selectedDayMap && !selectedDayMap.has(selectedTimelineDay)) {
      selectedTimelineDay = null;
    }
    if (!selectedTimelineDay && selectedDayMap && selectedDayMap.size > 0) {
      selectedTimelineDay = selectedDayMap.keys().next().value;
    }

    const dayEntries = (selectedDayMap && selectedTimelineDay && selectedDayMap.has(selectedTimelineDay)) 
      ? selectedDayMap.get(selectedTimelineDay) 
      : ((selectedDayMap && selectedMonthObj && selectedMonthObj.isUnknown) ? Array.from(selectedDayMap.values()).flat() : []);

    html = `
      <div class="space-y-4">
        <!-- 1. ANNUAL HORIZONTAL TIMELINE (ΟΡΙΖΟΝΤΙΑ TIMELINE ΜΗΝΩΝ ΣΤΟ ΠΑΝΩ ΜΕΡΟΣ) -->
        <div class="p-3.5 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl border border-amber-500/40 shadow-xl space-y-3">
          <!-- Timeline Limits Row: 1st of Jan to Today / End of Year -->
          <div class="flex items-center justify-between gap-2 text-xs border-b border-slate-700/60 pb-2">
            <span class="font-bold text-amber-300 flex items-center gap-1.5">
              <i class="fa-solid fa-flag-checkered text-[11px] text-amber-400"></i>
              <span>${isUnknownYear ? 'Αρχείο Χωρίς Χρονολογία' : `1 Ιανουαρίου ${yrNum}`}</span>
            </span>
            <span class="font-black text-white uppercase tracking-wider text-[11px] flex items-center gap-1">
              <i class="fa-solid fa-timeline text-amber-400"></i>
              <span>${isUnknownYear ? 'Χρονολόγιο Αταυτοποίητου Υλικού' : `Ετήσιο Χρονολόγιο ${yrNum}`}</span>
            </span>
            <span class="font-bold ${yrNum === 2026 ? 'text-emerald-400' : 'text-slate-300'} flex items-center gap-1.5">
              <i class="fa-regular fa-calendar-check text-[11px]"></i>
              <span>${isUnknownYear ? 'Συνεισφορά Κοινότητας' : (yrNum === 2026 ? '20 Νοεμβρίου 2026 (Σήμερα)' : `31 Δεκεμβρίου ${yrNum}`)}</span>
            </span>
          </div>

          <!-- Segmented Horizontal Bar: '?' (Unknown) Slot + 12 Months -->
          <div class="grid grid-cols-[38px_repeat(12,minmax(0,1fr))] bg-slate-950/90 border border-slate-700/80 rounded-xl overflow-hidden shadow-inner">
            <!-- Unknown Month Slot -->
            <div class="flex flex-col items-center justify-between py-2 px-1 text-center border-r border-slate-800 ${selectedTimelineMonth === 'unknown' ? 'bg-amber-500/15' : 'hover:bg-slate-900/50'} transition">
              <span class="text-[10px] font-bold ${selectedTimelineMonth === 'unknown' ? 'text-amber-400 font-black' : (hasUnknownMonths ? 'text-amber-300' : 'text-slate-500')}">?</span>
              <div class="h-6 flex items-center justify-center mt-1">
                ${hasUnknownMonths ? `
                  <button onclick="window.selectTimelineMonth('unknown')" class="w-5 h-5 rounded-full ${selectedTimelineMonth === 'unknown' ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 scale-110' : 'bg-amber-500/20 text-amber-400 border border-amber-500/60 hover:bg-amber-500 hover:text-slate-950'} flex items-center justify-center text-[9px] font-black transition cursor-pointer shadow" title="Άγνωστος / Απροσδιόριστος Μήνας: ${unknownMonthCount} εγγραφές">
                    <i class="fa-solid fa-question text-[8px]"></i>
                  </button>
                ` : `
                  <span class="text-[9px] text-slate-700 select-none">-</span>
                `}
              </div>
            </div>

            <!-- 12 Calendar Months -->
            ${MONTHS_DEF.map((m, idx) => {
              const hasEntries = monthMap.has(m.num);
              const isSelected = selectedTimelineMonth === m.num;
              const count = hasEntries ? Array.from(monthMap.get(m.num).values()).reduce((sum, arr) => sum + arr.length, 0) : 0;
              const borderRight = (idx < 11) ? 'border-r border-slate-800' : '';
              return `
                <div class="flex flex-col items-center justify-between py-2 px-1 text-center ${borderRight} ${isSelected ? 'bg-amber-500/10' : 'hover:bg-slate-900/50'} transition">
                  <span class="text-[10px] font-bold ${isSelected ? 'text-amber-400 font-black' : (hasEntries ? 'text-slate-200' : 'text-slate-500')}">${m.short}</span>
                  <div class="h-6 flex items-center justify-center mt-1">
                    ${hasEntries ? `
                      <button onclick="window.selectTimelineMonth(${m.num})" class="w-5 h-5 rounded-full ${isSelected ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 scale-110' : 'bg-amber-500/20 text-amber-400 border border-amber-500/60 hover:bg-amber-500 hover:text-slate-950'} flex items-center justify-center text-[9px] font-black transition cursor-pointer shadow" title="${m.name}: ${count} ${count === 1 ? 'εγγραφή' : 'εγγραφές'}">
                        <i class="fa-solid fa-calendar-check"></i>
                      </button>
                    ` : `
                      <span class="text-[9px] text-slate-700 select-none">-</span>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- 2. SUB-TIMELINE: HORIZONTAL DAYS STRIP (ΕΜΦΑΝΙΖΕΤΑΙ ΟΤΑΝ ΕΠΙΛΕΓΕΙ ΜΗΝΑΣ) -->
          ${selectedMonthObj ? `
            <div class="pt-2 border-t border-slate-800/80 space-y-2">
              <div class="flex items-center justify-between text-xs px-1">
                <span class="font-bold text-amber-300 flex items-center gap-1.5">
                  <i class="fa-regular fa-calendar-days text-amber-400"></i>
                  <span>${selectedMonthObj.isUnknown ? 'Αρχειακές Εγγραφές:' : 'Ημέρες Μήνα:'} <strong class="text-white">${selectedMonthObj.name}</strong></span>
                </span>
                <span class="text-[10px] text-slate-400">Επιλέξτε ημέρα με σύμβολο <i class="fa-solid fa-clock text-amber-400 ml-0.5"></i></span>
              </div>

              <!-- Horizontal Scrolling Days Container -->
              <div class="flex items-center gap-1.5 overflow-x-auto py-2 px-1 bg-slate-950/80 border border-slate-800 rounded-xl scrollbar-thin">
                <!-- Slot: Άγνωστη / Απροσδιόριστη Ημέρα (?) -->
                ${(selectedDayMap && selectedDayMap.has('unknown')) ? `
                  <button onclick="window.selectTimelineDay('unknown')" class="shrink-0 w-8 h-10 rounded-lg ${selectedTimelineDay === 'unknown' ? 'bg-amber-400 text-slate-950 font-black ring-2 ring-amber-300 shadow-md' : 'bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-500/50'} flex flex-col items-center justify-center p-1 transition cursor-pointer" title="Άγνωστη / Απροσδιόριστη Ημέρα">
                    <span class="text-[10px] font-mono leading-none font-bold">?</span>
                    <i class="fa-solid fa-question text-[9px] mt-1 ${selectedTimelineDay === 'unknown' ? 'text-slate-950' : 'text-amber-400'}"></i>
                  </button>
                ` : ''}

                <!-- Days 1 to N -->
                ${selectedMonthObj.days > 0 ? Array.from({ length: selectedMonthObj.days }, (_, i) => i + 1).map(d => {
                  const dayHasEntries = selectedDayMap && selectedDayMap.has(d);
                  const isDaySelected = selectedTimelineDay === d;
                  const dayCount = dayHasEntries ? selectedDayMap.get(d).length : 0;
                  return dayHasEntries ? `
                    <button onclick="window.selectTimelineDay(${d})" class="shrink-0 w-8 h-10 rounded-lg ${isDaySelected ? 'bg-amber-400 text-slate-950 font-black ring-2 ring-amber-300 shadow-md' : 'bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-500/50'} flex flex-col items-center justify-center p-1 transition cursor-pointer" title="${d} ${selectedMonthObj.name}: ${dayCount} εγγραφές">
                      <span class="text-[10px] font-mono leading-none font-bold">${d}</span>
                      <i class="fa-solid fa-clock text-[9px] mt-1 ${isDaySelected ? 'text-slate-950' : 'text-amber-400 animate-pulse'}"></i>
                    </button>
                  ` : `
                    <div class="shrink-0 w-6 h-10 rounded-lg bg-slate-900/30 text-slate-600 flex items-center justify-center text-[9px] font-mono opacity-30 select-none">
                      ${d}
                    </div>
                  `;
                }).join('') : ''}
              </div>
            </div>
          ` : ''}

          <!-- 3. DAY ENTRIES LIST (ΛΙΣΤΑ ΣΗΜΕΙΩΝ ΗΜΕΡΑΣ ΜΕ ΚΛΙΚ ΓΙΑ ΞΕΔΙΠΛΩΜΑ & ΠΡΟΒΟΛΗ) -->
          ${(selectedMonthObj && selectedTimelineDay && dayEntries.length) ? `
            <div class="pt-2 border-t border-slate-800/80 space-y-2.5">
              <div class="flex items-center justify-between px-1">
                <span class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check text-amber-400"></i>
                  <span>Σημεία & Εγγραφές: <strong class="text-white">${selectedTimelineDay === 'unknown' ? 'Άγνωστη Ημέρα' : selectedTimelineDay} ${selectedMonthObj.name} ${yrNum}</strong></span>
                </span>
                <span class="text-[10px] font-mono bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-600/40">
                  ${dayEntries.length} ${dayEntries.length === 1 ? 'εγγραφή' : 'εγγραφές'}
                </span>
              </div>

              <!-- List of Entries ordered by Time of Day -->
              <div class="space-y-2">
                ${dayEntries.map(entry => {
                  const isUnfolded = openTimelineEntryId === entry.id;
                  const isOfficial = entry.chronicle.authorType === 'official';
                  const memory = entry.chronicle.memories && entry.chronicle.memories[0];

                  return `
                    <div class="bg-slate-850/90 border ${isUnfolded ? 'border-amber-400/80 shadow-lg shadow-amber-500/10' : 'border-slate-700/70 hover:border-slate-600'} rounded-xl p-3 transition">
                      <!-- Collapsible Header -->
                      <div class="flex items-center justify-between gap-2 cursor-pointer" onclick="window.toggleTimelineEntry('${entry.id}')">
                        <div class="flex items-center gap-2 min-w-0">
                          <span class="px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-700 font-mono text-[10px] font-black shrink-0 flex items-center gap-1">
                            <i class="fa-regular fa-clock text-[9px]"></i>
                            <span>${entry.time}</span>
                          </span>
                          <div class="truncate">
                            <h5 class="text-xs font-bold text-slate-100 truncate">${entry.chronicle.title || entry.spot.name}</h5>
                            <span class="text-[10px] text-slate-400 truncate block">${entry.spot.name}</span>
                          </div>
                        </div>

                        <div class="flex items-center gap-1.5 shrink-0">
                          ${entry.youtubeId ? `
                            <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-950/80 text-rose-300 border border-rose-700/50 flex items-center gap-1">
                              <i class="fa-brands fa-youtube text-red-500"></i> Video
                            </span>
                          ` : ''}
                          <button onclick="event.stopPropagation(); window.openEditSpotModal('${entry.spot.id}', '${entry.chronicle.id}')" title="Επεξεργασία Σημείου" class="w-6 h-6 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xs transition cursor-pointer">
                            <i class="fa-solid fa-pen text-[10px]"></i>
                          </button>
                          <button class="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs">
                            <i class="fa-solid fa-chevron-down transition-transform duration-200 ${isUnfolded ? 'rotate-180 text-amber-400' : ''}"></i>
                          </button>
                        </div>
                      </div>

                      <!-- Unfolded Body with Details and Map Projector Links -->
                      ${isUnfolded ? `
                        <div class="mt-3 pt-3 border-t border-slate-700/70 space-y-2.5 text-xs text-slate-200 animate-fadeIn">
                          <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isOfficial ? 'bg-sky-900/80 text-sky-300 border border-sky-600/50' : 'bg-emerald-900/80 text-emerald-300 border border-emerald-600/50'}">
                              ${isOfficial ? '🏛️ Επίσημο Ιστορικό Αρχείο' : '👤 Μαρτυρία Πολίτη'}
                            </span>
                            <span class="text-[10px] text-slate-400 italic">Πηγή: ${entry.chronicle.authorName || 'Αρχείο'}</span>
                          </div>

                          <p class="text-xs text-slate-300 leading-relaxed">${entry.chronicle.story}</p>

                          ${memory ? `
                            <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/50 text-[11px] text-slate-300 italic flex items-start gap-2">
                              <i class="fa-solid fa-quote-left text-amber-400 text-xs mt-0.5 shrink-0"></i>
                              <div>
                                <span>«${memory.text}»</span>
                                <div class="not-italic text-slate-400 text-[10px] mt-0.5 font-bold">— ${memory.author} (${memory.year})</div>
                              </div>
                            </div>
                          ` : ''}

                          <!-- ACTION BUTTONS: PROJECT ON MAP (VIDEO OR PHOTO) -->
                          <div class="flex items-center gap-2 pt-1 flex-wrap">
                            ${entry.youtubeId ? `
                              <button onclick="window.openTimeCapsuleVideo('${entry.youtubeId}', '${escapeStr(entry.chronicle.title)}', '${escapeStr(entry.spot.name)}')" class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition cursor-pointer" title="Αναπαραγωγή βίντεο στο πλαίσιο του χάρτη">
                                <i class="fa-solid fa-play"></i>
                                <span>Προβολή Βίντεο στο Χάρτη 📹</span>
                              </button>
                            ` : ''}

                            ${entry.photoUrl ? `
                              <button onclick="window.openTimeCapsuleMedia('${entry.photoUrl}', '${escapeStr(entry.chronicle.title)}', '${escapeStr(entry.spot.name)}')" class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition cursor-pointer" title="Προβολή εικόνας στο πλαίσιο του χάρτη">
                                <i class="fa-solid fa-image"></i>
                                <span>Προβολή Εικόνας στο Χάρτη 🖼️</span>
                              </button>
                            ` : ''}

                            <button onclick="window.focusSpotOnMap('${entry.spot.id}')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-bold text-xs flex items-center gap-1.5 shadow transition cursor-pointer" title="Εστίαση του χάρτη στο σημείο αυτό">
                              <i class="fa-solid fa-location-dot"></i>
                              <span>Εστίαση στον Χάρτη 📍</span>
                            </button>

                            <button onclick="window.openEditSpotModal('${entry.spot.id}', '${entry.chronicle.id}')" class="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs flex items-center gap-1.5 shadow transition cursor-pointer" title="Επεξεργασία Σημείου">
                              <i class="fa-solid fa-pen-to-square"></i>
                              <span>Επεξεργασία ✏️</span>
                            </button>
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Live Chrono Header -->
        <div class="p-4 bg-gradient-to-r from-amber-950/40 via-slate-850 to-slate-900 rounded-2xl border border-amber-500/40 shadow-xl">
          <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="relative flex h-3 w-3">
                <span class="${isPlaying ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span class="text-xs font-black text-amber-400 uppercase tracking-wider">
                ${isPlaying ? '▶ Ζωντανή Αναπαραγωγή Εποχών' : '⏳ Χρονολογική Ροή Εποχής'}
              </span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-black font-mono bg-amber-500 text-slate-950 shadow">
                ${yr === 'all' ? '1900 - 2026' : yr}
              </span>
            </div>
          </div>

          <h3 class="text-base font-black text-white mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-monument text-amber-400"></i> ${context.era}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed">${context.summary}</p>

          <!-- Key facts of era -->
          <div class="mt-3 pt-3 border-t border-slate-700/60 space-y-1.5">
            ${context.keyFacts.map(fact => `
              <div class="flex items-start gap-2 text-xs text-slate-200">
                <i class="fa-solid fa-check text-emerald-400 mt-0.5 text-[10px]"></i>
                <span>${fact}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Archival Photos of the Era -->
        ${eraPhotos.length ? `
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-camera-retro text-amber-400"></i> Ιστορικές Φωτογραφίες & Τεκμήρια (${eraPhotos.length})
              </h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${eraPhotos.slice(0, 4).map(photo => `
                <div class="group relative rounded-xl overflow-hidden border ${photo.isYouTube ? 'border-amber-500/70 shadow-amber-500/10' : 'border-slate-700/80'} bg-slate-950 shadow cursor-pointer hover:border-amber-400 transition" onclick="${photo.isYouTube ? `window.openTimeCapsuleVideo('${photo.youtubeId}', '${escapeStr(photo.caption || photo.spotName)}', '${escapeStr(entity.name)}')` : `openSpotTimeCapsule('${photo.spotId}')`}">
                  <img src="${photo.url}" alt="${photo.caption}" class="w-full h-32 object-cover group-hover:scale-105 transition duration-300" loading="lazy">
                  ${photo.isYouTube ? `
                    <div class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                      <div class="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl">
                        <i class="fa-solid fa-play text-sm ml-0.5"></i>
                      </div>
                    </div>
                  ` : ''}
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-2.5 flex flex-col justify-end pointer-events-none">
                    <span class="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded w-max border border-amber-600/50 mb-1 flex items-center gap-1">
                      ${photo.isYouTube ? '<i class="fa-brands fa-youtube text-red-500"></i>' : ''}
                      <span>${photo.year || yr}</span>
                    </span>
                    <p class="text-[11px] font-medium text-slate-100 line-clamp-2 leading-tight">${photo.caption}</p>
                    <span class="text-[9px] text-slate-400 mt-0.5 italic truncate">${photo.credit || photo.spotName}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Past vs Present Historical Milestones -->
        <div class="pt-2 border-t border-slate-800">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
            <i class="fa-solid fa-arrows-split-up-and-left text-amber-400"></i> Σύγκριση Εποχών: Τότε & Τώρα
          </h4>
          <div class="grid grid-cols-1 gap-2.5">
            ${(() => {
              const pvp = entity.pastVsPresent;
              let items = [];
              if (Array.isArray(pvp)) {
                items = pvp.map(p => ({ epoch: p.epoch, content: p.content }));
              } else if (pvp && typeof pvp === 'object') {
                if (pvp.past) items.push({ epoch: 'Τότε', content: pvp.past });
                if (pvp.present) items.push({ epoch: 'Σήμερα', content: pvp.present });
                if (pvp.comparison) items.push({ epoch: 'Η Εξέλιξη', content: pvp.comparison });
              }
              const styles = [
                { box: 'bg-amber-950/20 border-amber-800/50', text: 'text-amber-400', icon: 'fa-scroll' },
                { box: 'bg-sky-950/20 border-sky-800/50', text: 'text-sky-400', icon: 'fa-building-columns' },
                { box: 'bg-emerald-950/20 border-emerald-800/50', text: 'text-emerald-400', icon: 'fa-chart-line' }
              ];
              return items.map((p, idx) => {
                const s = styles[idx] || styles[1];
                return `
              <div class="p-3 rounded-xl border ${s.box}">
                <div class="flex items-center gap-2 font-black text-xs mb-1 ${s.text}">
                  <i class="fa-solid ${s.icon}"></i>
                  <span>${p.epoch}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${p.content}</p>
              </div>
            `;
              }).join('');
            })()}
          </div>
        </div>
      </div>
    `;
  } else if (tabId === 'admin') {
    const isLogged = window.isUserLoggedIn ? window.isUserLoggedIn() : false;
    const allSpots = window.getTimeCapsules ? window.getTimeCapsules() : [];
    const pendingSpots = allSpots.filter(s => s.status === 'pending');
    const customSpotsCount = (() => {
      try {
        const c = localStorage.getItem('earthtimes_custom_spots');
        return c ? JSON.parse(c).length : 0;
      } catch (e) { return 0; }
    })();

    let currentUser = null;
    try {
      const u = localStorage.getItem('earthtimes_user');
      if (u) currentUser = JSON.parse(u);
    } catch (e) {}

    const userName = currentUser?.name || 'Επισκέπτης';
    const userEmail = currentUser?.email || 'Μη συνδεδεμένος';
    const userRole = currentUser?.role || 'guest';
    const isAdmin = (userRole === 'admin' || (userEmail && (userEmail.includes('alexandris') || userEmail.includes('vas') || userEmail.includes('admin'))));

    html = `
      <div class="space-y-4">
        <!-- 1. Master Admin Header -->
        <div class="p-4 bg-gradient-to-r from-sky-950/60 via-slate-900 to-slate-950 rounded-2xl border border-sky-500/50 shadow-xl text-slate-200">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center text-lg shadow-inner">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h3 class="font-black text-white text-base">Κέντρο Διαχείρισης & Ελέγχου</h3>
                <p class="text-[11px] text-sky-300 font-medium">Πίνακας Συντονισμού Αρχείων, Υποβολών & Συγχρονισμού</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg text-xs font-bold font-mono ${isAdmin ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'bg-slate-800 text-slate-400 border border-slate-700'} flex items-center gap-1.5">
                <i class="fa-solid ${isAdmin ? 'fa-crown text-amber-400' : 'fa-user'} text-[10px]"></i>
                <span>${isAdmin ? 'Διαχειριστής (Admin)' : (isLogged ? 'Μέλος (Member)' : 'Επισκέπτης')}</span>
              </span>
            </div>
          </div>

          <!-- User Info Banner -->
          <div class="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full ${isLogged ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}"></div>
              <span class="text-slate-300">Συνδεδεμένος ως: <strong class="text-white">${userName}</strong> <span class="text-slate-400 text-[11px]">(${userEmail})</span></span>
            </div>
            <div>
              ${isLogged ? `
                <button onclick="window.logoutUser()" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Αποσύνδεση</span>
                </button>
              ` : `
                <button onclick="window.loginWithGoogle()" class="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow">
                  <i class="fa-brands fa-google"></i>
                  <span>Σύνδεση με Google</span>
                </button>
              `}
            </div>
          </div>
        </div>

        <!-- 2. Admin Operational Actions (Συγχρονισμός & Έλεγχος) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          <!-- Card A: Moderation Queue -->
          <div class="p-3.5 bg-slate-850/90 rounded-xl border border-sky-600/40 hover:border-sky-500 transition shadow space-y-2.5 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="text-xs font-black text-sky-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check"></i>
                  <span>Έλεγχος & Έγκριση</span>
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-black ${pendingSpots.length > 0 ? 'bg-amber-500 text-slate-950 animate-pulse' : 'bg-slate-800 text-slate-400'} shadow-sm">
                  ${pendingSpots.length} ${pendingSpots.length === 1 ? 'εκκρεμές' : 'εκκρεμή'}
                </span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Πίνακας ελέγχου προτάσεων και νέων ιστορικών σημείων που υποβλήθηκαν από τους χρήστες. Έγκριση για δημοσίευση ή απόρριψη.
              </p>
            </div>
            <button onclick="window.openModerationModal()" class="w-full py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition cursor-pointer">
              <i class="fa-solid fa-shield-halved"></i>
              <span>Άνοιγμα Πίνακα Ελέγχου (${pendingSpots.length})</span>
            </button>
          </div>

          <!-- Card B: Cloud / Local Sync & Backup -->
          <div class="p-3.5 bg-slate-850/90 rounded-xl border border-emerald-600/40 hover:border-emerald-500 transition shadow space-y-2.5 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                  <span>Συγχρονισμός & Backup</span>
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-emerald-300 border border-emerald-700/50">
                  ${customSpotsCount} τοπικά
                </span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Εξαγωγή όλων των σημείων και χρονοκαψουλών σε αρχείο JSON, ή εισαγωγή δεδομένων για μεταφορά σε άλλο PC / Browser.
              </p>
            </div>
            <button onclick="window.openSyncSpotsModal()" class="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition cursor-pointer">
              <i class="fa-solid fa-arrow-right-arrow-left"></i>
              <span>Εξαγωγή & Εισαγωγή Δεδομένων</span>
            </button>
          </div>

          <!-- Card C: Cloud Firestore / Firebase Integration -->
          <div class="p-3.5 bg-slate-850/90 rounded-xl border border-amber-600/40 hover:border-amber-500 transition shadow space-y-2.5 flex flex-col justify-between sm:col-span-2">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="text-xs font-black text-amber-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-database"></i>
                  <span>Ρυθμίσεις Cloud Firestore / Firebase & AI Backend</span>
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-600/40">
                  Firebase Cloud
                </span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Παραμετροποίηση του Cloud Database config, του API Key και των Cloud Functions για ασφαλή επικοινωνία backend (Google Gemini AI Search, YouTube Data, έλεγχος πρόσβασης).
              </p>
            </div>
            <button onclick="window.openCloudDbSettingsModal()" class="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/50 font-bold text-xs flex items-center justify-center gap-2 shadow transition cursor-pointer">
              <i class="fa-solid fa-sliders"></i>
              <span>Διαμόρφωση Παραμέτρων Cloud Database</span>
            </button>
          </div>
        </div>

        <!-- 3. Database Statistics Card -->
        <div class="p-4 bg-slate-900/90 rounded-xl border border-slate-700/60 shadow space-y-3">
          <div class="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
            <span class="font-bold text-slate-300 flex items-center gap-1.5">
              <i class="fa-solid fa-chart-column text-sky-400"></i>
              <span>Στατιστικά Βάσης & Αρχείου (${entity.name})</span>
            </span>
            <span class="text-[10px] text-slate-500">Live Status</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div class="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
              <div class="text-[10px] text-slate-400">Συνολικά Σημεία</div>
              <div class="text-base font-black text-amber-400 font-mono mt-0.5">${allSpots.length}</div>
            </div>
            <div class="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
              <div class="text-[10px] text-slate-400">Υπό Έγκριση</div>
              <div class="text-base font-black text-sky-400 font-mono mt-0.5">${pendingSpots.length}</div>
            </div>
            <div class="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
              <div class="text-[10px] text-slate-400">Τοπικά Custom</div>
              <div class="text-base font-black text-emerald-400 font-mono mt-0.5">${customSpotsCount}</div>
            </div>
            <div class="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
              <div class="text-[10px] text-slate-400">Τρέχον Έτος</div>
              <div class="text-base font-black text-indigo-400 font-mono mt-0.5">${activeYear === 'all' ? 'Όλα' : (activeYear === 'unknown' ? 'Άγνωστο' : activeYear)}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}


export function stopNarrate() {
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn('SpeechSynthesis cancel error', e);
    }
  }
  isNarrating = false;
  const icon = document.getElementById('ttsIcon');
  if (icon) {
    icon.className = 'fa-solid fa-volume-high text-xs text-sky-400';
  }
  const btn = document.getElementById('ttsBtn') || (icon && icon.closest('button'));
  if (btn) {
    btn.setAttribute('title', 'Ακρόαση σύνοψης (Text-to-speech)');
    btn.classList.remove('bg-rose-950/80', 'text-rose-400', 'border-rose-700/60');
    btn.classList.add('bg-slate-800', 'text-sky-400', 'border-slate-700');
  }
}

export function narrateBrief(entity) {
  if (!('speechSynthesis' in window)) {
    const quoteEl = document.getElementById('docuQuote');
    if (quoteEl) {
      quoteEl.classList.add('text-sky-300', 'font-bold');
      setTimeout(() => {
        quoteEl.classList.remove('text-sky-300', 'font-bold');
      }, 3000);
    }
    return;
  }

  // Toggle STOP if already speaking or narrating
  if (isNarrating || window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    stopNarrate();
    return;
  }

  if (!entity) return;

  const textToRead = `${entity.name}. ${entity.quote || ''} ${entity.geo?.summary || ''}`.trim();
  if (!textToRead) return;

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'el-GR';
    utterance.rate = 1.0;

    isNarrating = true;
    const icon = document.getElementById('ttsIcon');
    if (icon) {
      icon.className = 'fa-solid fa-stop text-xs text-rose-400 animate-pulse';
    }
    const btn = document.getElementById('ttsBtn') || (icon && icon.closest('button'));
    if (btn) {
      btn.setAttribute('title', 'Διακοπή ακρόασης (Κλικ για παύση)');
      btn.classList.remove('bg-slate-800', 'text-sky-400', 'border-slate-700');
      btn.classList.add('bg-rose-950/80', 'text-rose-400', 'border-rose-700/60');
    }

    const resetAfterPlayback = () => {
      stopNarrate();
    };

    utterance.onend = resetAfterPlayback;
    utterance.onerror = resetAfterPlayback;

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('SpeechSynthesis error:', err);
    stopNarrate();
  }
}

// Global hook to refresh live geo weather and air quality
window.refreshLiveGeoData = function() {
  const curEntity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  if (curEntity && curEntity.coords) {
    const content = document.getElementById('geoLiveWeatherContent');
    if (content) {
      content.innerHTML = `
        <div class="py-3 flex items-center justify-center gap-3 text-slate-400 text-xs animate-pulse">
          <i class="fa-solid fa-circle-notch fa-spin text-sky-400 text-base"></i>
          <span>Ανανέωση live μετεωρολογικών & περιβαλλοντικών δεδομένων...</span>
        </div>
      `;
    }
    mountLiveWeatherData(curEntity.coords);
  }
};

/**
 * Open Bing Search directly inside the in-app map overlay (NO external tabs/windows)
 */
export function openInAppBingSearch(query = '', customTitle = '') {
  closeDeepDiveOverlay();
  closeMapWikiOverlay();
  closeMapStreetViewOverlay();

  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const icon = document.getElementById('videoOverlayIcon');
  const searchInput = document.getElementById('videoSearchInput');

  if (!overlay || !iframe) return;

  currentOverlayQuery = query;
  if (searchInput) searchInput.value = query;

  if (title) title.innerText = customTitle ? `🔍 ${customTitle}` : `🔍 Bing Search: ${query}`;
  if (icon) icon.className = 'fa-brands fa-microsoft text-sky-400 text-xs shrink-0';

  iframe.classList.remove('hidden');
  iframe.className = 'w-full h-full max-w-5xl rounded-xl shadow-2xl border border-sky-500/40 bg-white transition-all duration-300';
  iframe.src = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;

  setOverlayMediaMode('ai_search');
  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}
window.openInAppBingSearch = openInAppBingSearch;

