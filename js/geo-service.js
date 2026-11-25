/**
 * Geo Service
 * Provides:
 * - Live real-time Weather and Air Quality via Open-Meteo API (Free, CORS-friendly, zero-key)
 * - Elevation & Highest Point data for countries and cities
 * - Climate & Microclimate profiles (Sunshine days, humidity, precipitation, seasonal trends)
 * - Major historical geological and meteorological events (Earthquakes, Tsunamis, Cyclones, Storms, Blizzards)
 * - Direct Bing Search integration links for further scientific & historical research
 */

// Cache for live Open-Meteo responses to minimize network requests during navigation
const liveGeoCache = new Map();

/**
 * WMO Weather interpretation codes
 */
const WMO_CODES = {
  0: { label: 'Καθαρός Ουρανός / Ηλιοφάνεια', icon: 'fa-solid fa-sun text-amber-400' },
  1: { label: 'Κυρίως Αίθριος', icon: 'fa-solid fa-cloud-sun text-amber-300' },
  2: { label: 'Μερικώς Νεφελώδης', icon: 'fa-solid fa-cloud-sun text-slate-300' },
  3: { label: 'Συννεφιά / Νεφοσκεπής', icon: 'fa-solid fa-cloud text-slate-400' },
  45: { label: 'Ομίχλη', icon: 'fa-solid fa-smog text-slate-400' },
  48: { label: 'Παγωμένη Ομίχλη / Πάχνη', icon: 'fa-solid fa-smog text-slate-300' },
  51: { label: 'Ελαφρύ Ψιχάλισμα', icon: 'fa-solid fa-cloud-rain text-sky-300' },
  53: { label: 'Μέτριο Ψιχάλισμα', icon: 'fa-solid fa-cloud-rain text-sky-400' },
  55: { label: 'Πυκνό Ψιχάλισμα', icon: 'fa-solid fa-cloud-rain text-sky-500' },
  61: { label: 'Ασθενής Βροχή', icon: 'fa-solid fa-cloud-showers-heavy text-blue-300' },
  63: { label: 'Μέτρια Βροχή', icon: 'fa-solid fa-cloud-showers-heavy text-blue-400' },
  65: { label: 'Ισχυρή Βροχόπτωση', icon: 'fa-solid fa-cloud-showers-heavy text-blue-500' },
  71: { label: 'Ελαφρά Χιονόπτωση', icon: 'fa-solid fa-snowflake text-sky-200' },
  73: { label: 'Μέτρια Χιονόπτωση', icon: 'fa-solid fa-snowflake text-sky-300' },
  75: { label: 'Πυκνή Χιονόπτωση', icon: 'fa-solid fa-snowflake text-white' },
  77: { label: 'Χιονοκόκκοι', icon: 'fa-solid fa-snowflake text-slate-200' },
  80: { label: 'Ασθενής Όμβρος', icon: 'fa-solid fa-cloud-sun-rain text-sky-400' },
  81: { label: 'Μέτριος Όμβρος', icon: 'fa-solid fa-cloud-showers-water text-blue-400' },
  82: { label: 'Βίαιος Όμβρος / Μπόρα', icon: 'fa-solid fa-cloud-showers-water text-indigo-400' },
  85: { label: 'Ασθενείς Χιονομπόρες', icon: 'fa-solid fa-snowflake text-sky-200' },
  86: { label: 'Ισχυρές Χιονομπόρες', icon: 'fa-solid fa-snowflake text-cyan-200' },
  95: { label: 'Καταιγίδα', icon: 'fa-solid fa-bolt text-amber-400' },
  96: { label: 'Καταιγίδα με Ελαφρύ Χαλάζι', icon: 'fa-solid fa-bolt-lightning text-yellow-300' },
  99: { label: 'Σφοδρή Καταιγίδα με Χαλαζόπτωση', icon: 'fa-solid fa-bolt-lightning text-red-400' }
};

/**
 * European Air Quality Index (EAQI) thresholds
 */
function parseEaqi(val) {
  if (val === null || val === undefined) return { label: 'Μη Διαθέσιμο', color: 'text-slate-400', bg: 'bg-slate-700/50' };
  if (val <= 20) return { label: 'Εξαιρετική', color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/40' };
  if (val <= 40) return { label: 'Καλή', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/40' };
  if (val <= 60) return { label: 'Μέτρια', color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/40' };
  if (val <= 80) return { label: 'Επιβαρυμένη', color: 'text-orange-400', bg: 'bg-orange-500/20 border-orange-500/40' };
  return { label: 'Πολύ Κακή', color: 'text-rose-400', bg: 'bg-rose-500/20 border-rose-500/40' };
}

/**
 * Fetch Live Weather and Air Quality data using Open-Meteo
 */
export async function fetchLiveGeoData(lat, lng) {
  if (typeof lat !== 'number' || typeof lng !== 'number') return null;

  const cacheKey = `${lat.toFixed(2)},${lng.toFixed(2)}`;
  const cached = liveGeoCache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp < 10 * 60 * 1000)) { // 10 min cache
    return cached.data;
  }

  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`;
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=european_aqi,pm10,pm2_5,nitrogen_dioxide,ozone&timezone=auto`;

    const [weatherRes, aqiRes] = await Promise.all([
      fetch(weatherUrl).then(r => r.ok ? r.json() : null).catch(() => null),
      fetch(aqiUrl).then(r => r.ok ? r.json() : null).catch(() => null)
    ]);

    if (!weatherRes || !weatherRes.current) return null;

    const wCurr = weatherRes.current;
    const aCurr = aqiRes?.current || {};
    const code = wCurr.weather_code ?? 0;
    const wmo = WMO_CODES[code] || { label: 'Αίθριος', icon: 'fa-solid fa-sun text-amber-400' };
    const aqiInfo = parseEaqi(aCurr.european_aqi);

    const result = {
      temp: Math.round(wCurr.temperature_2m),
      feelsLike: Math.round(wCurr.apparent_temperature),
      humidity: Math.round(wCurr.relative_humidity_2m),
      windSpeed: Math.round(wCurr.wind_speed_10m),
      precipitation: wCurr.precipitation ?? 0,
      weatherDesc: wmo.label,
      weatherIcon: wmo.icon,
      aqi: aCurr.european_aqi ?? '—',
      aqiLabel: aqiInfo.label,
      aqiColor: aqiInfo.color,
      aqiBg: aqiInfo.bg,
      pm25: aCurr.pm2_5 != null ? Math.round(aCurr.pm2_5) : '—',
      pm10: aCurr.pm10 != null ? Math.round(aCurr.pm10) : '—',
      no2: aCurr.nitrogen_dioxide != null ? Math.round(aCurr.nitrogen_dioxide) : '—',
      elevation: weatherRes.elevation != null ? Math.round(weatherRes.elevation) : null,
      updatedAt: new Date().toLocaleTimeString('el-GR', { hour: '2-digit', minute: '2-digit' })
    };

    liveGeoCache.set(cacheKey, { timestamp: Date.now(), data: result });
  if (live.elevation != null) {
    const elevEl = document.getElementById('geoElevationVal');
    if (elevEl && (elevEl.innerText === '45' || elevEl.innerText === '—')) {
      elevEl.innerText = live.elevation.toLocaleString();
    }
  }

    return result;
  } catch (err) {
    console.warn('GeoService: Failed to fetch Open-Meteo live data:', err);
    return null;
  }
}

/**
 * Registry of Highest Points & Altitude for Countries & Major Cities
 */

/**
 * Detects whether an entity is a city or a country/state
 */
export function isCityEntity(entity) {
  if (!entity) return false;
  if (entity.cities && Array.isArray(entity.cities)) return false;
  const t = (entity.type || '').toLowerCase();
  if (['country', 'self-governing-state', 'overseas-territory', 'sui-generis-collectivity'].includes(t)) return false;
  if (entity._countryId || entity.countryId || entity.stateId || entity.cityName) return true;
  if (entity.capital && entity.stats && (entity.stats.area || entity.stats.coastline || entity.stats.gdp)) return false;
  return true;
}

const ELEVATION_DATABASE = {
  // Countries
  'greece': {
    highestPoint: 'Κορυφή Μύτικας (Όρος Όλυμπος)',
    altitudeMeters: 2918,
    details: 'Το ψηλότερο σημείο της Ελλάδας και το δεύτερο ψηλότερο των Βαλκανίων, ιστορική κατοικία των Δώδεκα Θεών.',
    meanElevation: '500 μ. (Το 80% της χώρας είναι ορεινό/ημιορεινό)'
  },
  'france': {
    highestPoint: 'Mont Blanc (Άλπεις)',
    altitudeMeters: 4809,
    details: 'Η ψηλότερη κορυφή των Άλπεων και της Δυτικής Ευρώπης, διαρκώς καλυμμένη με παγετώνες.',
    meanElevation: '375 μ.'
  },
  'italy': {
    highestPoint: 'Monte Bianco / Gran Paradiso (Άλπεις)',
    altitudeMeters: 4809,
    details: 'Εντυπωσιακός ορεινός όγκος στα σύνορα με τη Γαλλία. Στην κεντρική Ιταλία δεσπόζει το Gran Sasso στα 2.912 μ.',
    meanElevation: '538 μ.'
  },
  'usa': {
    highestPoint: 'Denali (Αλάσκα)',
    altitudeMeters: 6190,
    details: 'Η ψηλότερη κορυφή της Βόρειας Αμερικής με τεράστια τοπογραφική προεξοχή και ακραίες πολικές συνθήκες.',
    meanElevation: '760 μ.'
  },
  'japan': {
    highestPoint: 'Όρος Φούτζι (Fuji-san)',
    altitudeMeters: 3776,
    details: 'Ενεργό στρατοηφαίστειο και ιερό εθνικό σύμβολο της Ιαπωνίας με τέλεια συμμετρικό κώνο.',
    meanElevation: '438 μ.'
  },
  'germany': {
    highestPoint: 'Zugspitze (Βαυαρικές Άλπεις)',
    altitudeMeters: 2962,
    details: 'Η υψηλότερη κορυφή της Γερμανίας με τρεις παγετώνες και πανοραμική θέα 4 χωρών.',
    meanElevation: '263 μ.'
  },
  'united-kingdom': {
    highestPoint: 'Ben Nevis (Σκωτία - Grampian Mountains)',
    altitudeMeters: 1345,
    details: 'Η ψηλότερη κορυφή των Βρετανικών Νήσων, αρχαίο καταρρεύσαν ηφαίστειο με άγρια ορθοπλαγιά.',
    meanElevation: '162 μ.'
  },
  'spain': {
    highestPoint: 'Teide (Τενερίφη, 3.715 μ.) / Mulhacén (Ηπειρωτική, 3.479 μ.)',
    altitudeMeters: 3715,
    details: 'Το Teide στις Κανάριες Νήσους είναι το 3ο ψηλότερο ηφαιστειακό οικοδόμημα στον κόσμο.',
    meanElevation: '660 μ. (Μεγάλο κεντρικό οροπέδιο Meseta)'
  },
  'switzerland': {
    highestPoint: 'Dufourspitze / Monte Rosa (4.634 μ.) & Matterhorn (4.478 μ.)',
    altitudeMeters: 4634,
    details: 'Η καρδιά των Άλπεων με τους μεγαλύτερους παγετώνες της ηπειρωτικής Ευρώπης.',
    meanElevation: '1350 μ.'
  },
  'cyprus': {
    highestPoint: 'Όλυμπος (Οροσειρά Τροόδους)',
    altitudeMeters: 1952,
    details: 'Η ψηλότερη κορυφή της Κύπρου, φιλοξενεί χιονοδρομικό κέντρο και πυκνά δάση μαύρης πεύκης.',
    meanElevation: '450 μ.'
  },
  'turkey': {
    highestPoint: 'Όρος Αραράτ (Ağrı Dağı)',
    altitudeMeters: 5137,
    details: 'Κοιμώμενο ηφαίστειο στην Ανατολική Ανατολία, μυθική τοποθεσία προσάραξης της Κιβωτού του Νώε.',
    meanElevation: '1132 μ.'
  },
  'egypt': {
    highestPoint: 'Όρος Αγίας Αικατερίνης (Σινά)',
    altitudeMeters: 2629,
    details: 'Γρανιτένια κορυφή στη χερσόνησο του Σινά, κοντά στην ιστορική Μονή της Αγίας Αικατερίνης.',
    meanElevation: '321 μ.'
  },
  'china': {
    highestPoint: 'Έβερεστ / Qomolangma (Ιμαλάια)',
    altitudeMeters: 8848,
    details: 'Η στέγη του κόσμου στα σύνορα Κίνας και Νεπάλ, το απόλυτο υψομετρικό όριο του πλανήτη.',
    meanElevation: '1840 μ.'
  },

    // Additional Countries with accurate highest points & elevations
  'netherlands': {
    highestPoint: 'Vaalserberg (Limburg)',
    altitudeMeters: 322,
    details: 'Το ψηλότερο σημείο της ευρωπαϊκής Ολλανδίας, στο τριεθνές σημείο συνάντησης με το Βέλγιο και τη Γερμανία.',
    meanElevation: '30 μ. (Το 26% της χώρας βρίσκεται κάτω από την επιφάνεια της θάλασσας)'
  },
  'belgium': {
    highestPoint: 'Signal de Botrange (Hautes Fagnes)',
    altitudeMeters: 694,
    details: 'Στην επαρχία της Λιέγης, το ψηλότερο σημείο του Βελγίου και ολόκληρου του οροπεδίου των Αρδεννών.',
    meanElevation: '182 μ.'
  },
  'austria': {
    highestPoint: 'Großglockner (Hohe Tauern, Ανατολικές Άλπεις)',
    altitudeMeters: 3798,
    details: 'Η επιβλητική πυραμιδοειδής κορυφή της Αυστρίας με τον παγετώνα Pasterze, το μακρύτερο της ανατολικής αλπικής ζώνης.',
    meanElevation: '910 μ. (Τα 2/3 της χώρας καλύπτονται από τις Άλπεις)'
  },
  'norway': {
    highestPoint: 'Galdhøpiggen (Οροσειρά Jotunheimen)',
    altitudeMeters: 2469,
    details: 'Η ψηλότερη κορυφή της Σκανδιναβίας και της Βόρειας Ευρώπης, περιτριγυρισμένη από παγετώνες.',
    meanElevation: '460 μ.'
  },
  'sweden': {
    highestPoint: 'Kebnekaise (Σκανδιναβικές Άλπεις / Λαπωνία)',
    altitudeMeters: 2097,
    details: 'Στο βόρειο τμήμα της Λαπωνίας με δύο κορυφές, η νότια εκ των οποίων καλύπτεται από μόνιμο παγετώνα.',
    meanElevation: '320 μ.'
  },
  'finland': {
    highestPoint: 'Halti / Haltitunturi (Σκανδιναβική Οροσειρά)',
    altitudeMeters: 1324,
    details: 'Στα βορειοδυτικά σύνορα με τη Νορβηγία στη Λαπωνία, περιβάλλεται από αρκτική τούνδρα.',
    meanElevation: '164 μ. (Χώρα με πάνω από 187.000 λίμνες)'
  },
  'denmark': {
    highestPoint: 'Møllehøj (Γιουτλάνδη)',
    altitudeMeters: 171,
    details: 'Ο χαμηλότερος μέγιστος γεωγραφικός λόφος ευρωπαϊκού κράτους, τμήμα ήπιας λοφώδους παγετωνικής μορφολογίας.',
    meanElevation: '34 μ.'
  },
  'poland': {
    highestPoint: 'Rysy (Όρη Τάτρα / Καρπάθια)',
    altitudeMeters: 2499,
    details: 'Η βορειοδυτική κορυφή στα πολωνο-σλοβακικά σύνορα δεσπόζει πάνω από την αλπική λίμνη Morskie Oko.',
    meanElevation: '173 μ. (Κυρίως απέραντες πεδιάδες)'
  },
  'ireland': {
    highestPoint: "Carrauntoohil (MacGillycuddy's Reeks, Kerry)",
    altitudeMeters: 1038,
    details: 'Η ψηλότερη κορυφή της νήσου Ιρλανδίας, με απόκρημνες ράχες και χαρακτηριστικό μεταλλικό σταυρό 5 μέτρων στην κορυφή.',
    meanElevation: '118 μ.'
  },
  'portugal': {
    highestPoint: 'Ponta do Pico (Αζόρες, 2.351 μ.) / Torre (Serra da Estrela, 1.993 μ.)',
    altitudeMeters: 2351,
    details: 'Το στρατοηφαίστειο Pico στις Αζόρες είναι το ψηλότερο σημείο της επικράτειας, ενώ στην ηπειρωτική χώρα δεσπόζει η Serra da Estrela.',
    meanElevation: '372 μ.'
  },
  'iceland': {
    highestPoint: 'Hvannadalshnúkur (Παγετώνας Vatnajökull)',
    altitudeMeters: 2110,
    details: 'Ηφαιστειακή κορυφή στο βορειοδυτικό χείλος του κρατήρα του ηφαιστείου Öræfajökull, καλυμμένη από πάγους.',
    meanElevation: '557 μ.'
  },
  'czechia': {
    highestPoint: 'Sněžka (Όρη Krkonoše / Γιγάντια Όρη)',
    altitudeMeters: 1603,
    details: 'Στα σύνορα Τσεχίας και Πολωνίας, με μετεωρολογικό παρατηρητήριο και πανοραμική θέα στη Σιλεσία.',
    meanElevation: '430 μ.'
  },
  'czech-republic': {
    highestPoint: 'Sněžka (Όρη Krkonoše / Γιγάντια Όρη)',
    altitudeMeters: 1603,
    details: 'Στα σύνορα Τσεχίας και Πολωνίας, με μετεωρολογικό παρατηρητήριο και πανοραμική θέα στη Σιλεσία.',
    meanElevation: '430 μ.'
  },
  'slovakia': {
    highestPoint: 'Gerlachovský štít (Υψηλά Τάτρα / Καρπάθια)',
    altitudeMeters: 2655,
    details: 'Η ψηλότερη κορυφή των Καρπαθίων και ολόκληρης της Σλοβακίας, με πυραμιδοειδείς γρανιτένιους όγκους.',
    meanElevation: '458 μ.'
  },
  'hungary': {
    highestPoint: 'Kékes (Οροσειρά Mátra)',
    altitudeMeters: 1014,
    details: 'Το μοναδικό σημείο της Ουγγαρίας που ξεπερνά τα 1.000 μέτρα, με πύργο τηλεπικοινωνιών και χιονοδρομικές πίστες.',
    meanElevation: '143 μ. (Κυριαρχεί η Μεγάλη Ουγγρική Πεδιάδα Puszta)'
  },
  'romania': {
    highestPoint: 'Moldoveanu (Όρη Făgăraș / Νότια Καρπάθια)',
    altitudeMeters: 2544,
    details: 'Η καρδιά των Τρανσυλβανικών Άλπεων, ένα από τα πιο άγρια και θεαματικά ορεινά ανάγλυφα της Ανατολικής Ευρώπης.',
    meanElevation: '414 μ.'
  },
  'bulgaria': {
    highestPoint: 'Musala (Οροσειρά Rila)',
    altitudeMeters: 2925,
    details: 'Η ψηλότερη κορυφή της Βαλκανικής Χερσονήσου (7 μέτρα ψηλότερη από τον Όλυμπο), με αλπικές λίμνες και παγετωνική προέλευση.',
    meanElevation: '470 μ.'
  },
  'croatia': {
    highestPoint: 'Dinara / Sinjal (Δειναρικές Άλπεις)',
    altitudeMeters: 1831,
    details: 'Επιβλητικός ασβεστολιθικός ορεινός όγκος στα σύνορα με τη Βοσνία, με εντυπωσιακά καρστικά φαινόμενα.',
    meanElevation: '331 μ.'
  },
  'serbia': {
    highestPoint: 'Midžor (Οροσειρά Stara Planina / Αίμος)',
    altitudeMeters: 2169,
    details: 'Στα σύνορα Σερβίας και Βουλγαρίας, με γρανιτένιες κορυφογραμμές και παρθένα υποαλπικά λιβάδια.',
    meanElevation: '442 μ.'
  },
  'albania': {
    highestPoint: 'Όρος Korab (Maja e Korabit)',
    altitudeMeters: 2764,
    details: 'Στα σύνορα Αλβανίας και Βόρειας Μακεδονίας, μια από τις πιο απομονωμένες και επιβλητικές κορυφές των Βαλκανίων.',
    meanElevation: '708 μ.'
  },
  'north-macedonia': {
    highestPoint: 'Όρος Korab (Golem Korab)',
    altitudeMeters: 2764,
    details: 'Κοινό ψηλότερο σημείο με την Αλβανία, πλαισιωμένο από το Εθνικό Πάρκο Mavrovo και βαθιά φαράγγια.',
    meanElevation: '741 μ.'
  },
  'montenegro': {
    highestPoint: 'Zla Kolata (Προκλέτιγε / Καταραμένα Όρη)',
    altitudeMeters: 2534,
    details: 'Άγριες καρστικές κορυφές με κατακόρυφες ορθοπλαγιές στα σύνορα με την Αλβανία.',
    meanElevation: '1086 μ. (Εξαιρετικά ορεινή επικράτεια)'
  },
  'bosnia-and-herzegovina': {
    highestPoint: 'Maglić (Εθνικό Πάρκο Sutjeska)',
    altitudeMeters: 2386,
    details: 'Στα σύνορα με το Μαυροβούνιο, περιβάλλεται από το παρθένο αρχέγονο δάσος Perućica, ένα από τα τελευταία της Ευρώπης.',
    meanElevation: '500 μ.'
  },
  'slovenia': {
    highestPoint: 'Triglav (Ιουλιανές Άλπεις)',
    altitudeMeters: 2864,
    details: 'Το τρικέφαλο εθνικό σύμβολο της Σλοβενίας, αποτυπωμένο στη σημαία και το εθνόσημο της χώρας.',
    meanElevation: '492 μ.'
  },
  'estonia': {
    highestPoint: 'Suur Munamägi (Λόφος Haanja)',
    altitudeMeters: 318,
    details: 'Το ψηλότερο σημείο των Βαλτικών Χωρών, με πύργο παρατήρησης που βλέπει προς τη Λετονία και τη Ρωσία.',
    meanElevation: '61 μ.'
  },
  'latvia': {
    highestPoint: 'Gaiziņkalns (Κεντρικό Υψίπεδο Vidzeme)',
    altitudeMeters: 312,
    details: 'Ήπιος δασωμένος λόφος που αποτελεί το ψηλότερο γεωγραφικό σημείο της Λετονίας.',
    meanElevation: '87 μ.'
  },
  'lithuania': {
    highestPoint: 'Aukštojas Hill (Υψίπεδο Medininkai)',
    altitudeMeters: 294,
    details: 'Το ψηλότερο σημείο της Λιθουανίας κοντά στα σύνορα με τη Λευκορωσία.',
    meanElevation: '110 μ.'
  },
  'luxembourg': {
    highestPoint: 'Kneiff (Αρδέννες / Oesling)',
    altitudeMeters: 560,
    details: 'Λοφώδες σημείο στο βόρειο τμήμα του Μεγάλου Δουκάτου, κοντά στα σύνορα με το Βέλγιο.',
    meanElevation: '325 μ.'
  },
  'malta': {
    highestPoint: "Ta' Dmejrek (Dingli Cliffs)",
    altitudeMeters: 253,
    details: 'Ασβεστολιθικός βράχος στα επιβλητικά Dingli Cliffs, με κατακόρυφη θέα στη Μεσόγειο Θάλασσα.',
    meanElevation: '120 μ.'
  },
  'ukraine': {
    highestPoint: 'Hoverla (Καρπάθια / Οροσειρά Chornohora)',
    altitudeMeters: 2061,
    details: 'Η ψηλότερη κορυφή της Ουκρανίας, εθνικό σύμβολο με αλπικές πλαγιές και πανοραμική θέα.',
    meanElevation: '175 μ.'
  },
  'canada': {
    highestPoint: 'Mount Logan (Saint Elias Mountains, Yukon)',
    altitudeMeters: 5959,
    details: 'Η δεύτερη ψηλότερη κορυφή της Βόρειας Αμερικής, καλυμμένη από τεράστιους παγετώνες.',
    meanElevation: '487 μ.'
  },
  'australia': {
    highestPoint: 'Mount Kosciuszko (Snowy Mountains, New South Wales)',
    altitudeMeters: 2228,
    details: 'Η ψηλότερη κορυφή της ηπειρωτικής Αυστραλίας, τμήμα του Μεγάλου Διαχωριστικού Όρους.',
    meanElevation: '330 μ.'
  },
  'brazil': {
    highestPoint: 'Pico da Neblina (Serra do Imeri, Αμαζονία)',
    altitudeMeters: 2995,
    details: 'Η Κορυφή της Ομίχλης στα σύνορα Βραζιλίας και Βενεζουέλας, μέσα στην παρθένα ζούγκλα του Αμαζονίου.',
    meanElevation: '320 μ.'
  },
  'argentina': {
    highestPoint: 'Aconcagua (Άνδεις, Mendoza)',
    altitudeMeters: 6961,
    details: 'Η ψηλότερη κορυφή της Αμερικής, του Δυτικού και του Νότιου Ημισφαιρίου και η ψηλότερη εκτός Ασίας.',
    meanElevation: '595 μ.'
  },

  // Cities
  'kozani': {
    highestPoint: 'Οροσειρά Βερμίου (2.052 μ.) & Βούρινος (1.866 μ.)',
    altitudeMeters: 710,
    details: 'Χτισμένη σε μέσο υψόμετρο 710 μ., περιβάλλεται από το Βέρμιο, τον Βούρινο και τα Πιέρια, προσφέροντας ημιορεινό ανάγλυφο.',
    cityAltitude: '710 μ.'
  },
  'athens': {
    highestPoint: 'Λόφος Λυκαβηττού (277 μ.) & Πάρνηθα (1.413 μ.)',
    altitudeMeters: 156,
    details: 'Το λεκανοπέδιο περιβάλλεται από 4 βουνά (Πάρνηθα 1.413 μ., Πεντέλη 1.109 μ., Υμηττός 1.026 μ., Αιγάλεω 469 μ.).',
    cityAltitude: '70 - 156 μ.'
  },
  'thessaloniki': {
    highestPoint: 'Όρος Χορτιάτης (1.201 μ.) & Σέιχ Σου',
    altitudeMeters: 50,
    details: 'Αμφιθεατρική πόλη στον Θερμαϊκό κόλπο, με άμεση άνοδο προς το δάσος του Σέιχ Σου και την κορυφή του Χορτιάτη.',
    cityAltitude: '10 - 120 μ.'
  },
  'patras': {
    highestPoint: 'Παναχαϊκό Όρος (1.928 μ.)',
    altitudeMeters: 25,
    details: 'Παραθαλάσσια πόλη με το επιβλητικό Παναχαϊκό όρος να υψώνεται απότομα πίσω από τον αστικό ιστό.',
    cityAltitude: '10 - 80 μ.'
  },
  'heraklion': {
    highestPoint: 'Όρος Ίδη / Ψηλορείτης (2.456 μ.) & Γιούχτας (811 μ.)',
    altitudeMeters: 40,
    details: 'Κοντά στο ιερό βουνό Γιούχτας που μοιάζει με ανθρώπινο πρόσωπο και τον επιβλητικό Ψηλορείτη.',
    cityAltitude: '10 - 60 μ.'
  },
  'ioannina': {
    highestPoint: 'Όρος Μιτσικέλι (1.810 μ.) & Τύμφη (2.497 μ.)',
    altitudeMeters: 480,
    details: 'Οροπέδιο της λίμνης Παμβώτιδας σε υψόμετρο 480 μ., στους πρόποδες του επιβλητικού Μιτσικελίου.',
    cityAltitude: '480 μ.'
  },
  'chania': {
    highestPoint: 'Λευκά Όρη / Πάχνες (2.453 μ.)',
    altitudeMeters: 15,
    details: 'Η πόλη βλέπει προς τις χιονισμένες κορυφές των Λευκών Ορέων και το Φαράγγι της Σαμαριάς.',
    cityAltitude: '10 - 30 μ.'
  },
  'larisa': {
    highestPoint: 'Όρος Κίσσαβος / Όσσα (1.978 μ.) & Όλυμπος (2.918 μ.)',
    altitudeMeters: 75,
    details: 'Κέντρο του θεσσαλικού κάμπου με θέα προς τον Όλυμπο, τον Κίσσαβο και την κοιλάδα των Τεμπών.',
    cityAltitude: '75 μ.'
  },
  'volos': {
    highestPoint: 'Όρος Πήλιο / Πουριανός Σταυρός (1.624 μ.)',
    altitudeMeters: 15,
    details: 'Χτισμένος στον Παγασητικό κόλπο στους πρόποδες του μυθικού βουνού των Κενταύρων.',
    cityAltitude: '5 - 50 μ.'
  },
  'kastoria': {
    highestPoint: 'Όρος Γράμμος (2.520 μ.) & Βίτσι (2.128 μ.)',
    altitudeMeters: 620,
    details: 'Χτισμένη σε χερσόνησο μέσα στη λίμνη Ορεστιάδα σε υψόμετρο 620 μ., περικυκλωμένη από ψηλές κορυφές.',
    cityAltitude: '620 μ.'
  },
  'boston': {
    highestPoint: 'Great Blue Hill (194 μ.) & Beacon Hill (30 μ.)',
    altitudeMeters: 43,
    details: 'Ιστορικό παραθαλάσσιο λιμάνι της Νέας Αγγλίας με κυματιστό τοπίο παγετωνικής προέλευσης.',
    cityAltitude: '43 μ.'
  },
  'new-york': {
    highestPoint: 'Todt Hill (Staten Island, 125 μ.)',
    altitudeMeters: 10,
    details: 'Χτισμένη στις εκβολές του ποταμού Hudson, το Todt Hill είναι το ψηλότερο σημείο της ανατολικής ακτής νότια του Maine.',
    cityAltitude: '10 μ.'
  },
  'paris': {
    highestPoint: 'Montmartre (130 μ.) & Belleville (128 μ.)',
    altitudeMeters: 35,
    details: 'Χτισμένη στην κοιλάδα του Σηκουάνα, με χαρακτηριστικούς λόφους όπως η Μονμάρτρη όπου δεσπόζει η Sacré-Cœur.',
    cityAltitude: '35 μ.'
  },
  'london': {
    highestPoint: 'Westerham Heights (245 μ.) & Parliament Hill (98 μ.)',
    altitudeMeters: 15,
    details: 'Στην κοιλάδα του Τάμεση με ήπιους λοφίσκους που προσφέρουν θέα στον λονδρέζικο ορίζοντα.',
    cityAltitude: '15 μ.'
  },
  'tokyo': {
    highestPoint: 'Όρος Takao (599 μ.) & Όρος Kumotori (2.017 μ.)',
    altitudeMeters: 40,
    details: 'Απλώνεται στην πεδιάδα Kanto, με τη μητροπολιτική περιοχή να φτάνει στα δασώδη βουνά του δυτικού Τόκιο.',
    cityAltitude: '40 μ.'
  },
  'rome': {
    highestPoint: 'Monte Mario (139 μ.) & Monte Cavo / Castelli Romani (950 μ.)',
    altitudeMeters: 21,
    details: 'Η Αιώνια Πόλη των Επτά Λόφων, στους πρόποδες των ηφαιστειογενών λόφων της λίμνης Albano.',
    cityAltitude: '21 μ.'
  }
};

/**
 * Climate & Microclimate Profiles
 */
const CLIMATE_DATABASE = {
  // Countries
  'greece': {
    type: 'Μεσογειακό (Csa/Csb) & Ηπειρωτικό Ορεινό',
    sunshineDays: '280 - 310 ημέρες / έτος',
    humidity: '55% - 65% μέση σχετική υγρασία',
    rainfall: '400 mm (Αιγαίο) - 1.200 mm (Πίνδος / Δυτική Ελλάδα)',
    seasons: 'Θερμά και ξηρά καλοκαίρια με έντονο μελτέμι στο Αιγαίο, ήπιοι βροχεροί χειμώνες στα παράλια, δριμείς χιονιάδες στην Πίνδο και τη Μακεδονία.',
    microclimateNote: 'Το έντονο ορεινό ανάγλυφο (Πίνδος) δημιουργεί ισχυρό φαινόμενο Foehn (ομβροσκιά), καθιστώντας τη Δυτική Ελλάδα πολύ πιο υγρή από την Ανατολική Στερεά και τις Κυκλάδες.'
  },
  'france': {
    type: 'Ωκεάνιο (Cfb), Ηπειρωτικό & Μεσογειακό (Νότος)',
    sunshineDays: '170 (Βορράς) - 270 (Κυανή Ακτή) ημέρες / έτος',
    humidity: '72% μέση ετήσια υγρασία',
    rainfall: '650 - 900 mm / έτος',
    seasons: 'Ήπια καλοκαίρια και βροχεροί χειμώνες στα δυτικά, ψυχρότεροι χειμώνες στην Αλσατία, μεσογειακή λιακάδα με ανέμους Mistral στην Προβηγκία.',
    microclimateNote: 'Σταυροδρόμι 4 κλιματικών ζωνών: Ατλαντική υγρασία, κεντρική ηπειρωτικότητα, αλπικό ψύχος και μεσογειακός ήλιος.'
  },
  'italy': {
    type: 'Μεσογειακό (Csa), Υγρό Υποτροπικό (Κοιλάδα Πάδου) & Αλπικό',
    sunshineDays: '220 - 300 ημέρες / έτος',
    humidity: '65% - 75%',
    rainfall: '600 mm (Σικελία) - 1.500 mm (Άλπεις & Απέννινα)',
    seasons: 'Πολύ θερμά καλοκαίρια στο νότο, πυκνές ομίχλες τον χειμώνα στον Πάδο, άφθονα χιόνια στις Άλπεις.',
    microclimateNote: 'Η προστασία των Άλπεων από βόρειους παγετούς και η επιμήκης έκταση στη Μεσόγειο δημιουργούν εξαιρετική ποικιλία μικροκλιμάτων.'
  },
  'usa': {
    type: 'Ηπειρωτικό, Ωκεάνιο, Υποτροπικό, Ερημικό & Αρκτικό',
    sunshineDays: '160 (Βορειοδυτικά) - 320 (Νοτιοδυτικά) ημέρες',
    humidity: 'Ποικίλλει (25% Νεβάδα έως 80% Φλόριντα)',
    rainfall: '250 mm (Ερήμους) - 1.600 mm (Νότος/Ανατολή)',
    seasons: 'Τεράστια κλιματική ποικιλία από τα πολικά ψύχη της Αλάσκας μέχρι τους τροπικούς τυφώνες του Κόλπου του Μεξικού.',
    microclimateNote: 'Η απουσία ανατολικοδυτικών οροσειρών επιτρέπει σε πολικές αέριες μάζες να συγκρούονται απευθείας με θερμές μάζες του Μεξικού (Tornado Alley).'
  },

  // Cities
  'kozani': {
    type: 'Ημιορεινό Μεταβατικό Ηπειρωτικό (Csb / Dsb)',
    sunshineDays: '260 - 275 ημέρες / έτος',
    humidity: '62% (ξηρότερο το καλοκαίρι, έως 78% τον χειμώνα)',
    rainfall: '520 - 580 mm / έτος',
    seasons: 'Δροσερά καλοκαίρια με ευχάριστες νύχτες, ψυχροί χειμώνες με τακτικές χιονοπτώσεις και παγετό λόγω υψομέτρου 710 μ.',
    microclimateNote: 'Το οροπέδιο της Κοζάνης χαρακτηρίζεται από θερμοκρασιακές αναστροφές τον χειμώνα (εγκλωβισμός ψυχρού αέρα), ισχυρό βόρειο άνεμο (Βαρδάρης) και ξηρή καλοκαιρινή ατμόσφαιρα που ευνοεί την καλλιέργεια του γνήσιου Κρόκου.'
  },
  'athens': {
    type: 'Θερμό Μεσογειακό (Csa) με έντονη Αστική Θερμική Νησίδα',
    sunshineDays: '300 - 315 ημέρες / έτος (από τις πιο ηλιόλουστες πρωτεύουσες)',
    humidity: '53% μέση ετήσια υγρασία (εξαιρετικά ξηρό κλίμα)',
    rainfall: '410 mm / έτος (κυρίως Νοέμβριο - Φεβρουάριο)',
    seasons: 'Πολύ θερμά καλοκαίρια με καύσωνες (>38°C), ήπιοι και σύντομοι χειμώνες με σποραδικές ψυχρές εισβολές από Πάρνηθα.',
    microclimateNote: 'Το κλειστό λεκανοπέδιο παγιδεύει θερμότητα (αστική θερμονησίδα έως +4°C στο κέντρο), ενώ οι νότιες παραθαλάσσιες περιοχές (Γλυφάδα, Φάληρο) απολαμβάνουν θαλάσσια αύρα.'
  },
  'thessaloniki': {
    type: 'Μεσογειακό με Ηπειρωτικές Επιδράσεις (Csa)',
    sunshineDays: '270 ημέρες / έτος',
    humidity: '66% μέση υγρασία',
    rainfall: '450 mm / έτος',
    seasons: 'Ζεστά καλοκαίρια με υγρασία, ψυχρότεροι χειμώνες σε σχέση με την Αθήνα με χαρακτηριστικό τον ξηρό και ισχυρό άνεμο Βαρδάρη.',
    microclimateNote: 'Ο άνεμος Βαρδάρης καθαρίζει την ατμόσφαιρα ρίχνοντας απότομα τη θερμοκρασία, ενώ η θαλάσσια επίδραση του Θερμαϊκού μετριάζει τα καλοκαιρινά άκρα.'
  },
  'patras': {
    type: 'Υγρό Μεσογειακό (Csa)',
    sunshineDays: '275 ημέρες / έτος',
    humidity: '68%',
    rainfall: '680 - 750 mm / έτος (σημαντικά πιο βροχερή από Αθήνα)',
    seasons: 'Ήπιοι και βροχεροί χειμώνες, θερμά καλοκαίρια με έντονη θαλάσσια αύρα από τον Πατραϊκό κόλπο.',
    microclimateNote: 'Το Παναχαϊκό όρος δημιουργεί τοπικές καθοδικές ριπές ανέμου, ενώ ο Πατραϊκός λειτουργεί ως θερμικός ρυθμιστής.'
  },
  'heraklion': {
    type: 'Νησιωτικό Θερμό Μεσογειακό (Csa)',
    sunshineDays: '310 ημέρες / έτος',
    humidity: '62%',
    rainfall: '480 mm / έτος',
    seasons: 'Εξαιρετικά ήπιοι χειμώνες χωρίς παγετό στα παράλια, θερμά καλοκαίρια που δροσίζονται από τα έντονα μελτέμια.',
    microclimateNote: 'Η παρουσία του Ψηλορείτη στα δυτικά προστατεύει την πεδιάδα από δυτικές καταιγίδες, ενώ ο νότιος άνεμος (Λίβας) φέρνει σποραδικά θερμό αέρα και σκόνη Σαχάρας.'
  },
  'ioannina': {
    type: 'Υγρό Ηπειρωτικό Οροπεδίου (Cfb / Csa)',
    sunshineDays: '230 ημέρες / έτος',
    humidity: '73% (υψηλή υγρασία λόγω λίμνης Παμβώτιδας)',
    rainfall: '1.100 - 1.250 mm / έτος (από τις πιο βροχερές πόλεις της Ελλάδας)',
    seasons: 'Συχνές βροχοπτώσεις, ψυχροί χειμώνες με πυκνές ομίχλες πάνω από τη λίμνη και δροσερά καλοκαιρινά απογεύματα.',
    microclimateNote: 'Η λίμνη Παμβώτιδα και τα γύρω ψηλά βουνά (Μιτσικέλι, Τόμαρος) δημιουργούν μόνιμο μικροκλίμα αυξημένης υγρασίας και πρωινής ομίχλης.'
  },
  'boston': {
    type: 'Υγρό Ηπειρωτικό με Ωκεάνια Επίδραση (Dfa)',
    sunshineDays: '200 ημέρες / έτος',
    humidity: '68%',
    rainfall: '1.100 mm / έτος (ισοκατανεμημένη όλο το χρόνο) + 120 cm χιόνι',
    seasons: 'Ζεστά και υγρά καλοκαίρια, ψυχροί χιονισμένοι χειμώνες με ισχυρές θύελλες Nor\'easters από τον Ατλαντικό.',
    microclimateNote: 'Οι άνεμοι Nor\'easter φέρνουν τεράστιες ποσότητες υγρασίας και ιστορικές χιονοπτώσεις κατά τους χειμερινούς μήνες.'
  }
};

/**
 * Historical Geological & Extreme Weather Events Catalog
 */
const HISTORICAL_PHENOMENA_DATABASE = {
  // Greece
  'greece': [
    {
      title: 'Μινωική Έκρηξη Σαντορίνης & Γιγάντιο Τσουνάμι',
      type: 'volcano',
      icon: 'fa-solid fa-volcano text-rose-500',
      badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
      date: '~1600 π.Χ. (Εποχή του Χαλκού)',
      magnitude: 'Δείκτης VEI 7 (Μία από τις μεγαλύτερες εκρήξεις στην ιστορία)',
      impact: 'Κατάρρευση της καλντέρας της Σαντορίνης, εκτόξευση 60 km³ μάγματος, γιγάντια κύματα τσουνάμι έως 30 μέτρα που σάρωσαν τις ακτές της Κρήτης και της Ανατολικής Μεσογείου.',
      bingQuery: 'Μινωική έκρηξη Σαντορίνη τσουνάμι επιπτώσεις Μινωικός πολιτισμός'
    },
    {
      title: 'Σεισμός & Τσουνάμι Κρήτης 365 μ.Χ.',
      type: 'tsunami',
      icon: 'fa-solid fa-water text-cyan-400',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      date: '21 Ιουλίου 365 μ.Χ.',
      magnitude: '8.5+ Ρίχτερ (Υπερωκεάνιος Σεισμός)',
      impact: 'Ανύψωσε τη δυτική Κρήτη έως και 9 μέτρα πάνω από την επιφάνεια της θάλασσας (ορατό σήμερα στα Φαλάσαρνα). Το τσουνάμι κατέστρεψε την Αλεξάνδρεια της Αιγύπτου παρασύροντας πλοία 3 χλμ στην ενδοχώρα.',
      bingQuery: 'Σεισμός Κρήτης 365 μ.Χ. τσουνάμι Αλεξάνδρεια ανύψωση ακτών'
    },
    {
      title: 'Σεισμός Αμοργού & Τσουνάμι Αιγαίου 1956',
      type: 'tsunami',
      icon: 'fa-solid fa-water text-blue-400',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      date: '9 Ιουλίου 1956',
      magnitude: '7.7 Ρίχτερ (Ο μεγαλύτερος σεισμός στην Ευρώπη στον 20ό αιώνα)',
      impact: 'Δημιούργησε τσουνάμι ύψους έως 25-30 μέτρων στη νότια ακτή της Αμοργού, 10 μέτρων στην Αστυπάλαια και έπληξε δεκάδες νησιά των Κυκλάδων με 53 απώλειες.',
      bingQuery: 'Σεισμός Αμοργού 1956 τσουνάμι 7.7 ρίχτερ Κυκλάδες'
    },
    {
      title: 'Σεισμός Πάρνηθας / Αθηνών 1999',
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: '7 Σεπτεμβρίου 1999',
      magnitude: '5.9 Ρίχτερ (Μικρό εστιακό βάθος 10 km)',
      impact: '143 ανθρώπινες απώλειες, κατάρρευση βιομηχανικών και οικιστικών κτιρίων στη Δυτική Αττική (Μενίδι, Άνω Λιόσια), άνω των 50.000 αστέγων και ζημιές άνω των 3 δισεκατομμυρίων ευρώ.',
      bingQuery: 'Σεισμός Αθήνας 7 Σεπτεμβρίου 1999 Πάρνηθα επιπτώσεις'
    },
    {
      title: 'Μεσογειακός Κυκλώνας «Ιανός» (Medicane Ianos)',
      type: 'cyclone',
      icon: 'fa-solid fa-hurricane text-purple-400',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      date: '17 - 20 Σεπτεμβρίου 2020',
      magnitude: 'Άνεμοι 160 km/h (Ισοδύναμο Τυφώνα Κατηγορίας 1-2)',
      impact: 'Σάρωσε τα Ιόνια Νησιά (Κεφαλονιά, Ζάκυνθο, Ιθάκη) και προκάλεσε πρωτοφανείς πλημμύρες στην Καρδίτσα και τη Θεσσαλία, με καταστροφή γεφυρών και ιστορικές απώλειες.',
      bingQuery: 'Μεσογειακός κυκλώνας Ιανός 2020 επιπτώσεις Κεφαλονιά Καρδίτσα'
    },
    {
      title: 'Ιστορική Κακοκαιρία «Daniel» (Θεσσαλία 2023)',
      type: 'flood',
      icon: 'fa-solid fa-cloud-showers-heavy text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
      date: '4 - 7 Σεπτεμβρίου 2023',
      magnitude: 'Ιστορικό ρεκόρ: 800+ mm βροχής σε 24 ώρες στο Πήλιο / Ζαγορά',
      impact: 'Βύθιση ολόκληρου του θεσσαλικού κάμπου και της λίμνης Κάρλας, 17 ανθρώπινες απώλειες, καταστροφή οδικών και σιδηροδρομικών υποδομών, χιλιάδες πνιγμένα ζώα.',
      bingQuery: 'Κακοκαιρία Daniel Σεπτέμβριος 2023 πλημμύρες Θεσσαλία Πήλιο'
    },
    {
      title: 'Ιστορική Χιονοθύελλα «Ελπίδα» & Παγετός 2022',
      type: 'blizzard',
      icon: 'fa-solid fa-snowflake text-cyan-200',
      badgeColor: 'border-cyan-500/40 text-cyan-200 bg-cyan-500/10',
      date: '24 - 26 Ιανουαρίου 2022',
      magnitude: 'Χιονόστρωση 40 - 70 cm στο λεκανοπέδιο Αττικής & Αιγαίο',
      impact: 'Πλήρης παράλυση της Αττικής Οδού με χιλιάδες εγκλωβισμένα οχήματα επί 24ωρα, διακοπές ρεύματος σε δεκάδες προάστια και παρατεταμένος παγετός.',
      bingQuery: 'Χιονοθύελλα Ελπίδα Ιανουάριος 2022 Αττική Οδός αποκλεισμός'
    }
  ],

  // Kozani
  'kozani': [
    {
      title: 'Σεισμός Κοζάνης - Γρεβενών 1995',
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: '13 Μαΐου 1995 (11:47 π.μ.)',
      magnitude: '6.6 Ρίχτερ (Εστιακό βάθος 10 km)',
      impact: 'Ολοκληρωτική καταστροφή ή βαριές ζημιές σε δεκάδες οικισμούς (Χρώμιο, Ρύμνιο, Κνίδη, Κεντροχώρι). Θαύμα αποτέλεσε η απουσία νεκρών χάρη στους προσεισμούς που έβγαλαν τους κατοίκους από τα σπίτια.',
      bingQuery: 'Σεισμός Κοζάνης Γρεβενών 13 Μαΐου 1995 επιπτώσεις 6.6 ρίχτερ'
    },
    {
      title: 'Ο Μεγάλος Παγετός & Χιονοθύελλα Δεκεμβρίου 2001',
      type: 'blizzard',
      icon: 'fa-solid fa-snowflake text-cyan-200',
      badgeColor: 'border-cyan-500/40 text-cyan-200 bg-cyan-500/10',
      date: '15 - 23 Δεκεμβρίου 2001',
      magnitude: 'Θερμοκρασίες κάτω των -21°C επί 7 συνεχόμενες ημέρες',
      impact: 'Πάγωμα της τεχνητής λίμνης Πολυφύτου στον Αλιάκμονα, κατάρρευση σωληνώσεων ύδρευσης, αποκλεισμός ορεινών οικισμών και διακοπές τηλεθέρμανσης.',
      bingQuery: 'Κοζάνη μεγάλος παγετός Δεκέμβριος 2001 πάγωμα λίμνης Πολυφύτου'
    },
    {
      title: 'Σφοδρή Καταιγίδα & Χαλαζόπτωση Δυτικής Μακεδονίας 2019',
      type: 'flood',
      icon: 'fa-solid fa-cloud-showers-heavy text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
      date: '10 Ιουλίου 2019',
      magnitude: 'Χαλάζι σε μέγεθος καρυδιού και άνεμοι 100+ km/h',
      impact: 'Εκτεταμένες καταστροφές σε χιλιάδες στρέμματα κροκοκαλλιέργειας και οπωρώνων, πτώσεις δέντρων και ζημιές σε στέγες.',
      bingQuery: 'Χαλαζόπτωση καταιγίδα Κοζάνη Ιούλιος 2019 ζημιές κρόκος'
    },
    {
      title: 'Ιστορική Χιονοθύελλα & Αποκλεισμός 1963',
      type: 'blizzard',
      icon: 'fa-solid fa-icicles text-blue-300',
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
      date: 'Ιανουάριος 1963',
      magnitude: 'Χιόνι άνω των 1.5 μέτρου στην πόλη και 3 μέτρων στα ορεινά',
      impact: 'Πλήρης αποκλεισμός της Κοζάνης και των γύρω χωριών για 2 εβδομάδες, ρίψεις τροφίμων από ελικόπτερα του στρατού και ιστορικός παγετός.',
      bingQuery: 'Ιστορικός χιονιάς 1963 Δυτική Μακεδονία Κοζάνη'
    }
  ],

  // Athens
  'athens': [
    {
      title: 'Σεισμός Πάρνηθας 1999',
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: '7 Σεπτεμβρίου 1999',
      magnitude: '5.9 Ρίχτερ',
      impact: '143 θύματα, καταρρεύσεις κτιρίων (Ρικομέξ, Φαράν), 70.000 κτίρια με δομικές ζημιές στη Δυτική Αττική.',
      bingQuery: 'Σεισμός Πάρνηθας 1999 Αθήνα Ρικομέξ θύματα'
    },
    {
      title: 'Φονική Πλημμύρα Μάνδρας 2017',
      type: 'flood',
      icon: 'fa-solid fa-water text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
      date: '15 Νοεμβρίου 2017',
      magnitude: 'Χείμαρρος λάσπης από το όρος Πατέρας (200 mm βροχής)',
      impact: '24 νεκροί στη Μάνδρα Αττικής, εκατοντάδες παρασυρμένα οχήματα και τεράστιες καταστροφές σε κατοικίες και επιχειρήσεις.',
      bingQuery: 'Πλημμύρα Μάνδρα 15 Νοεμβρίου 2017 αίτια επιπτώσεις'
    },
    {
      title: 'Ιστορικός Καύσωνας Ιουλίου 1987',
      type: 'cyclone',
      icon: 'fa-solid fa-temperature-arrow-up text-red-500',
      badgeColor: 'border-red-500/40 text-red-500 bg-red-500/10',
      date: '20 - 27 Ιουλίου 1987',
      magnitude: 'Θερμοκρασίες άνω των 44°C επί 8 συνεχόμενες ημέρες',
      impact: 'Εκτιμώμενες 1.300+ απώλειες στην Αθήνα λόγω έλλειψης κλιματισμού εκείνη την εποχή, υπερφόρτωση νοσοκομείων και νεκροτομείων.',
      bingQuery: 'Καύσωνας Ιούλιος 1987 Αθήνα ιστορικό ρεκόρ νεκροί'
    }
  ],

  // Thessaloniki
  'thessaloniki': [
    {
      title: 'Σεισμός Θεσσαλονίκης 1978',
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: '20 Ιουνίου 1978 (23:03)',
      magnitude: '6.5 Ρίχτερ (Ρήγμα Στίβου - Ασσήρου)',
      impact: '49 νεκροί (οι 29 στην κατάρρευση της 8ώροφης πολυκατοικίας στην Πλατεία Ιπποδρομίου), ζημιές σε μνημεία (Ροτόντα, Αγία Σοφία) και χιλιάδες άστεγοι.',
      bingQuery: 'Σεισμός Θεσσαλονίκης 20 Ιουνίου 1978 Ιπποδρομίου 6.5 ρίχτερ'
    },
    {
      title: 'Ο Μεγάλος Παγετός Θερμαϊκού 1950 & 1987',
      type: 'blizzard',
      icon: 'fa-solid fa-snowflake text-cyan-200',
      badgeColor: 'border-cyan-500/40 text-cyan-200 bg-cyan-500/10',
      date: 'Χειμώνας 1950 & Μάρτιος 1987',
      magnitude: 'Πάγωμα του παραλιακού μετώπου του Θερμαϊκού Κόλπου',
      impact: 'Σπάνιο φαινόμενο παγώματος της θάλασσας στην παραλία της Θεσσαλονίκης, αποκλεισμός πλοίων στο λιμάνι και θερμοκρασίες έως -14°C.',
      bingQuery: 'Πάγωμα Θερμαϊκού κόλπου Θεσσαλονίκη ιστορικός παγετός'
    }
  ],

  // United States
  'usa': [
    {
      title: 'Τυφώνας Katrina (Νέα Ορλεάνη 2005)',
      type: 'cyclone',
      icon: 'fa-solid fa-hurricane text-rose-500',
      badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
      date: '29 Αυγούστου 2005',
      magnitude: 'Κατηγορία 5 (Άνεμοι 280 km/h, κύμα καταιγίδας 8 μέτρα)',
      impact: 'Κατάρρευση αναχωμάτων, βύθιση του 80% της Νέας Ορλεάνης κάτω από το νερό, 1.833 θάνατοι και ζημιές άνω των 125 δισεκατομμυρίων δολαρίων.',
      bingQuery: 'Hurricane Katrina 2005 New Orleans damage levee failure'
    },
    {
      title: 'Σεισμός & Πυρκαγιά Σαν Φρανσίσκο 1906',
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-500',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: '18 Απριλίου 1906',
      magnitude: '7.9 Ρίχτερ (Ρήγμα Αγίου Ανδρέα)',
      impact: 'Πάνω από 3.000 θύματα, καταστροφή του 80% της πόλης από τον σεισμό και την τριήμερη πυρκαγιά που ακολούθησε.',
      bingQuery: '1906 San Francisco earthquake and fire San Andreas fault'
    },
    {
      title: 'The Great Blizzard of 1978 (Βοστώνη & Νέα Αγγλία)',
      type: 'blizzard',
      icon: 'fa-solid fa-snowflake text-cyan-200',
      badgeColor: 'border-cyan-500/40 text-cyan-200 bg-cyan-500/10',
      date: '5 - 7 Φεβρουαρίου 1978',
      magnitude: 'Ιστορικός Nor\'easter με 70 cm χιόνι και ανέμους 140 km/h',
      impact: '100 θάνατοι, χιλιάδες εγκλωβισμένοι στους αυτοκινητοδρόμους Route 128, παράκτια πλημμύρα και κήρυξη κατάστασης έκτακτης ανάγκης.',
      bingQuery: 'Great Blizzard of 1978 Boston Massachusetts damage nor\'easter'
    }
  ],

  // Italy
  'italy': [
    {
      title: 'Έκρηξη Βεζούβιου 79 μ.Χ. (Πομπηία & Ηράκλειο)',
      type: 'volcano',
      icon: 'fa-solid fa-volcano text-rose-500',
      badgeColor: 'border-rose-500/40 text-rose-500 bg-rose-500/10',
      date: '24 Οκτωβρίου 79 μ.Χ.',
      magnitude: 'Πλίνια Έκρηξη (Εκτόξευση πυροκλαστικών κυμάτων & τέφρας 33 km ψηλά)',
      impact: 'Πλήρης ταφή των ρωμαϊκών πόλεων Πομπηία, Ηράκλειο (Herculaneum) και Σταβίες, διατήρηση αρχαιολογικών θησαυρών κάτω από την τέφρα.',
      bingQuery: 'Eruption of Mount Vesuvius 79 AD Pompeii Herculaneum'
    },
    {
      title: 'Σεισμός & Τσουνάμι Μεσσήνης 1908',
      type: 'tsunami',
      icon: 'fa-solid fa-water text-blue-500',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      date: '28 Δεκεμβρίου 1908',
      magnitude: '7.1 Ρίχτερ & Τσουνάμι 12 μέτρων',
      impact: 'Ο πιο θανατηφόρος σεισμός στην ευρωπαϊκή ιστορία με 75.000 έως 100.000 θύματα στις πόλεις Μεσσήνη (Σικελία) και Ρέτζιο Καλάμπρια.',
      bingQuery: '1908 Messina earthquake and tsunami casualties Italy'
    }
  ],

  // Japan
  'japan': [
    {
      title: 'Μέγας Σεισμός & Τσουνάμι Tohoku 2011',
      type: 'tsunami',
      icon: 'fa-solid fa-water text-cyan-400',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      date: '11 Μαρτίου 2011',
      magnitude: '9.1 Ρίχτερ (Ο ισχυρότερος στην ιστορία της Ιαπωνίας)',
      impact: 'Τσουνάμι ύψους έως 40 μέτρων, 19.750 νεκροί/αγνοούμενοι, πυρηνικό ατύχημα στο εργοστάσιο Fukushima Daiichi.',
      bingQuery: '2011 Tohoku earthquake and tsunami Fukushima Daiichi disaster'
    },
    {
      title: 'Μέγας Σεισμός Kanto 1923 (Τόκιο)',
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-500',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: '1 Σεπτεμβρίου 1923',
      magnitude: '7.9 Ρίχτερ',
      impact: '142.000 θάνατοι, καταστροφικές πυρκαγιές που σάρωσαν το Τόκιο και τη Γιοκοχάμα.',
      bingQuery: '1923 Great Kanto earthquake Tokyo firestorm casualties'
    }
  ]
};

/**
 * Fallback generator for locations not explicitly in the database
 */
function getGenericElevation(entity) {
  const name = entity.name || 'Τοποθεσία';
  const isCity = isCityEntity(entity);

  if (isCity) {
    const rawAlt = entity.stats?.altitude || entity.stats?.elevation;
    let altNum = rawAlt ? parseInt(rawAlt, 10) : null;
    if (!altNum || isNaN(altNum)) {
      altNum = 45; // Reasonable default for urban areas
    }
    return {
      highestPoint: `Περιβάλλοντες λόφοι & ορεινό ανάγλυφο ${name}`,
      altitudeMeters: altNum,
      details: `Το αστικό κέντρο βρίσκεται σε μέσο υψόμετρο περίπου ${altNum} μ., με άμεση σύνδεση με το γύρω γεωμορφολογικό ανάγλυφο.`,
      cityAltitude: `${altNum} μ.`
    };
  }

  // Country fallback: avoid hardcoded 2000
  const highest = entity.stats?.highestPoint || `Κυριότερη οροσειρά & κορυφή (${name})`;
  const altNum = entity.stats?.maxElevation || 1150;
  return {
    highestPoint: highest,
    altitudeMeters: altNum,
    details: `Το γεωγραφικό ανάγλυφο της επικράτειας διαθέτει ποικιλία από πεδινές ζώνες έως ορεινούς όγκους.`,
    meanElevation: '350 μ.'
  };
}

function getGenericClimate(entity) {
  const name = entity.name || 'Τοποθεσία';
  const coords = entity.coords || [38.0, 23.0];
  const lat = coords[0];

  let climateType = 'Εύκρατο Μεσογειακό';
  let sunshine = '260 ημέρες / έτος';
  let humidity = '60%';
  let rainfall = '600 mm / έτος';

  if (Math.abs(lat) > 50) {
    climateType = 'Ψυχρό Εύκρατο / Ωκεάνιο (Cfb)';
    sunshine = '180 ημέρες / έτος';
    humidity = '75%';
    rainfall = '850 mm / έτος';
  } else if (Math.abs(lat) < 25) {
    climateType = 'Τροπικό / Υποτροπικό';
    sunshine = '300 ημέρες / έτος';
    humidity = '70%';
    rainfall = '1.200 mm / έτος';
  }

  return {
    type: climateType,
    sunshineDays: sunshine,
    humidity: humidity,
    rainfall: rainfall,
    seasons: `Τυπική εποχικότητα της εύκρατης ζώνης με θερμότερη καλοκαιρινή περίοδο και δροσερότερους μήνες τον χειμώνα.`,
    microclimateNote: `Οι τοπικές γεωμορφολογικές συνθήκες και η απόσταση από θαλάσσιες μάζες διαμορφώνουν το ιδιαίτερο μικροκλίμα της περιοχής ${name}.`
  };
}

function getGenericPhenomena(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return [
    {
      title: `Ιστορικά Γεωλογικά & Σεισμικά Συμβάντα (${name})`,
      type: 'earthquake',
      icon: 'fa-solid fa-house-crack text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      date: 'Ιστορικό Αρχείο',
      magnitude: 'Τεκτονική Δραστηριότητα & Ρήγματα',
      impact: `Σεισμικές δονήσεις και γεωτεκτονικές μεταβολές που καταγράφηκαν στην ιστορία της ευρύτερης περιφέρειας.`,
      bingQuery: `${englishName} earthquake history seismic activity historical impact`
    },
    {
      title: `Ακραία Καιρικά Φαινόμενα & Ιστορικές Καταιγίδες`,
      type: 'flood',
      icon: 'fa-solid fa-cloud-showers-heavy text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
      date: 'Πρόσφατες Δεκαετίες',
      magnitude: 'Σφοδρές Βροχοπτώσεις & Πλημμύρες',
      impact: `Ιστορικές πλημμυρίδες, έντονα φαινόμενα υετού και ισχυρές θύελλες που επηρέασαν τις υποδομές και τους κατοίκους.`,
      bingQuery: `${englishName} extreme weather severe storm flood blizzard history`
    }
  ];
}

/**
 * Public getters
 */
export function getElevationData(entity) {
  const id = (entity.id || '').toLowerCase();
  return ELEVATION_DATABASE[id] || getGenericElevation(entity);
}

export function getClimateData(entity) {
  const id = (entity.id || '').toLowerCase();
  return CLIMATE_DATABASE[id] || getGenericClimate(entity);
}

export function getHistoricalPhenomena(entity) {
  const id = (entity.id || '').toLowerCase();
  // Check if city has parent country phenomena
  const direct = HISTORICAL_PHENOMENA_DATABASE[id];
  if (direct) return direct;

  // If in Greece, inherit Greece's historic events if not specific
  if (id.includes('greece') || id === 'kozani' || id === 'athens' || id === 'thessaloniki') {
    return HISTORICAL_PHENOMENA_DATABASE['greece'] || getGenericPhenomena(entity);
  }

  return getGenericPhenomena(entity);
}

/**
 * Render complete Geography Tab Content
 */
export function renderGeographyTabHtml(entity) {
  if (!entity) return '';

  const isCity = isCityEntity(entity);
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  const coords = entity.coords || [39.0742, 21.8243];
  const lat = coords[0];
  const lng = coords[1];

  // 1. Relief Summary & Highlights
  const summary = entity.geo?.summary || entity.geo?.description || entity.geo?.overview
    || [entity.geo?.location, entity.geo?.topography, entity.geo?.climate].filter(Boolean).join(' ')
    || entity.brief || '';
  const rawHighlights = entity.geo?.highlights || (Array.isArray(entity.highlights) ? entity.highlights.map(h => typeof h === 'object' ? { title: h.title || 'Ορόσημο', desc: h.desc || '' } : { title: String(h), desc: '' }) : []);
  const highlights = rawHighlights.map(item => ({
    title: item.title || item.name || 'Ορόσημο',
    desc: item.desc || item.description || ''
  }));

  // 2. Elevation & Peaks
  const elev = getElevationData(entity);

  // 3. Climate & Microclimate
  const climate = getClimateData(entity);

  // 4. Geological & Weather Events
  const phenomena = getHistoricalPhenomena(entity);

  return `
    <div class="space-y-4">
      
      <!-- Topography & Relief Summary -->
      <div class="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/60 text-slate-200 shadow-lg">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-sky-400 font-bold text-sm">
            <i class="fa-solid fa-mountain-sun"></i> Γεωγραφικό Ανάγλυφο & Φύση
          </div>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 font-mono">
            ${isCity ? '📍 Πόλη' : '🏛️ Χώρα'}
          </span>
        </div>
        <p class="leading-relaxed text-xs sm:text-sm text-slate-300">${summary || 'Δεν υπάρχουν διαθέσιμες περιγραφές.'}</p>
      </div>

      <!-- HIGHEST POINT & ELEVATION BANNER -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 text-slate-800/40 text-8xl pointer-events-none">
          <i class="fa-solid fa-mountain"></i>
        </div>
        <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <i class="fa-solid fa-mountain"></i>
              <span>${isCity ? 'Υψόμετρο & Περιβάλλοντες Ορεινοί Όγκοι' : 'Κορυφαίο Ανάγλυφο & Ψηλότερο Σημείο'}</span>
            </div>
            <div class="text-white font-bold text-base sm:text-lg flex items-center gap-2">
              <span>${elev.highestPoint}</span>
            </div>
            <div class="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">${elev.details}</div>
          </div>
          <div class="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-700/60 pt-2 sm:pt-0 sm:pl-4">
            <div class="text-[11px] text-slate-400 font-medium">${isCity ? 'Μέσο Υψόμετρο' : 'Μέγιστο Υψόμετρο'}</div>
            <div class="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-tight flex items-baseline gap-1">
              <span id="geoElevationVal">${elev.altitudeMeters ? elev.altitudeMeters.toLocaleString() : (elev.cityAltitude || '—')}</span>
              <span class="text-xs font-bold text-slate-300">μέτρα</span>
            </div>
          </div>
        </div>
      </div>

      <!-- LIVE WEATHER & AIR QUALITY API WIDGET (Open-Meteo - Only for Cities) -->
      ${isCity ? `
      <div id="geoLiveWeatherWidget" class="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-sky-950/40 border border-sky-500/30 shadow-xl text-left relative">
        <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
          <div class="flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="text-xs font-bold text-white tracking-wide uppercase">Live Δεδομένα Καιρού & Ατμόσφαιρας Πόλης</span>
          </div>
          <span class="text-[10px] text-sky-400/90 font-mono flex items-center gap-1">
            <i class="fa-solid fa-satellite-dish"></i> Open-Meteo API
          </span>
        </div>
        
        <!-- Placeholder / Loading indicator -->
        <div id="geoLiveWeatherContent" class="py-3 flex items-center justify-center gap-3 text-slate-400 text-xs animate-pulse">
          <i class="fa-solid fa-circle-notch fa-spin text-sky-400 text-base"></i>
          <span>Φόρτωση πραγματικών μετεωρολογικών & περιβαλλοντικών δεδομένων πόλης...</span>
        </div>
      </div>
      ` : ''}

      <!-- CLIMATE & MICROCLIMATE DASHBOARD -->
      <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-300 flex items-center gap-2">
            <i class="fa-solid fa-temperature-half text-amber-400"></i>
            <span>${isCity ? 'Μικροκλίμα & Κλιματικό Προφίλ Πόλης' : 'Κλίμα & Εποχικά Χαρακτηριστικά Χώρας'}</span>
          </h4>
          <span class="text-[11px] text-amber-400/90 font-medium font-mono">${climate.type}</span>
        </div>

        <!-- 4 Grid Metric Cards -->
        <div class="grid grid-cols-2 gap-2.5">
          <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-col justify-between">
            <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-sun text-amber-400"></i> Ηλιοφάνεια
            </div>
            <div class="text-xs sm:text-sm font-bold text-white font-mono">${climate.sunshineDays}</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-col justify-between">
            <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-droplet text-sky-400"></i> Υγρασία
            </div>
            <div class="text-xs sm:text-sm font-bold text-white font-mono">${climate.humidity}</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-col justify-between">
            <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-cloud-rain text-blue-400"></i> Βροχόπτωση
            </div>
            <div class="text-xs sm:text-sm font-bold text-white font-mono">${climate.rainfall}</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-col justify-between">
            <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-wind text-teal-400"></i> Τύπος
            </div>
            <div class="text-xs sm:text-sm font-bold text-emerald-300 truncate">${climate.type.split(' ')[0]}</div>
          </div>
        </div>

        <!-- Microclimate Note -->
        <div class="p-3 rounded-xl bg-slate-855/70 border border-slate-750 text-xs text-slate-300 leading-relaxed">
          <div class="font-bold text-slate-200 mb-1 flex items-center gap-1.5 text-amber-300">
            <i class="fa-solid fa-circle-info"></i> ${isCity ? 'Μικροκλιματική Ανάλυση Πόλης:' : 'Εποχική Συμπεριφορά & Τοπογραφία:'}
          </div>
          <div>${climate.microclimateNote || climate.seasons}</div>
        </div>
      </div>

      <!-- HISTORICAL GEOLOGICAL & METEOROLOGICAL EVENTS (Earthquakes, Tsunamis, Blizzards, Floods) -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-rose-400 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Σημαντικότερα Γεωλογικά & Ακραία Καιρικά Φαινόμενα</span>
          </h4>
          <span class="text-[11px] text-slate-400">Ιστορικό Αρχείο & Επιπτώσεις</span>
        </div>

        <div class="space-y-3 pt-1">
          ${phenomena.map(ev => {
            const bingQueryEsc = (ev.bingQuery || (ev.title + ' ' + name)).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            const titleEsc = ev.title.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            return `
              <div class="p-3.5 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-slate-600 transition flex flex-col gap-2.5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg ${ev.badgeColor || 'bg-slate-700 text-slate-300'} flex items-center justify-center shrink-0 text-xs">
                      <i class="${ev.icon || 'fa-solid fa-circle-exclamation'}"></i>
                    </span>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white">${ev.title}</div>
                      <div class="text-[11px] text-slate-400 font-mono">${ev.date} · <span class="text-amber-400 font-semibold">${ev.magnitude}</span></div>
                    </div>
                  </div>
                  
                  <!-- IN-APP BING SEARCH BUTTON (Opens in Map Frame) -->
                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>

                <p class="text-xs text-slate-300 leading-relaxed pl-9">${ev.impact}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- HIGHLIGHTS / LANDMARKS (Existing deep-dive points) -->
      ${highlights.length ? `
        <div class="mt-4">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-compass text-sky-400"></i> Κυριότερα Γεωγραφικά Ορόσημα
          </h4>
          <div class="space-y-2.5">
            ${highlights.map(item => `
              <div onclick="window.openDeepDive('${item.title ? item.title.replace(/'/g, "\\'") : ''}', '${item.desc ? item.desc.replace(/'/g, "\\'") : ''}', '${name.replace(/'/g, "\\'")}')" class="p-3 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl cursor-pointer group">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-bold text-slate-100 text-sm mb-0.5 text-sky-300 group-hover:text-amber-300 transition">${item.title}</div>
                  <span class="text-[10px] text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition flex items-center gap-1 shrink-0">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Ανάλυση
                  </span>
                </div>
                <div class="text-slate-300 text-xs leading-relaxed">${item.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;
}

/**
 * Asynchronously mounts live Open-Meteo data into #geoLiveWeatherContent
 */
export async function mountLiveWeatherData(coords) {
  const container = document.getElementById('geoLiveWeatherContent');
  if (!container) return;

  if (!coords || typeof coords[0] !== 'number' || typeof coords[1] !== 'number') {
    container.innerHTML = `<span class="text-slate-500 text-xs">Μη διαθέσιμες συντεταγμένες για live καιρό.</span>`;
    return;
  }

  const live = await fetchLiveGeoData(coords[0], coords[1]);
  if (!live) {
    container.innerHTML = `
      <div class="text-xs text-slate-400 flex items-center justify-between w-full py-1">
        <span>Προσωρινά μη διαθέσιμα live μετεωρολογικά δεδομένα.</span>
        <button onclick="window.refreshLiveGeoData()" class="text-sky-400 hover:underline text-[11px]">Επανάληψη</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="w-full flex flex-col gap-3 py-1">
      <div class="grid grid-cols-2 gap-3 items-center">
        
        <!-- Current Weather & Temp -->
        <div class="flex items-center gap-3">
          <div class="text-3xl shrink-0">
            <i class="${live.weatherIcon}"></i>
          </div>
          <div>
            <div class="text-2xl font-black text-white font-mono leading-none">${live.temp}°C</div>
            <div class="text-[11px] text-slate-400 font-medium">Αίσθηση ${live.feelsLike}°C</div>
          </div>
        </div>

        <!-- Weather Status & Wind -->
        <div class="border-l border-slate-800 pl-3">
          <div class="text-xs font-bold text-slate-200 truncate">${live.weatherDesc}</div>
          <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5 font-mono">
            <i class="fa-solid fa-wind text-sky-400"></i> ${live.windSpeed} km/h
          </div>
        </div>

        <!-- Humidity & Rain -->
        <div class="border-l border-slate-800 pl-3">
          <div class="text-xs text-slate-300 flex items-center gap-1.5">
            <i class="fa-solid fa-droplet text-sky-400"></i>
            <span class="font-bold text-white font-mono">${live.humidity}%</span> Υγρασία
          </div>
          <div class="text-[11px] text-slate-400 mt-0.5 font-mono">
            Υετός: ${live.precipitation} mm
          </div>
        </div>

        <!-- European AQI (Air Quality) -->
        <div class="border-l border-slate-800 pl-3">
          <div class="text-[11px] text-slate-400 mb-0.5">Ποιότητα Αέρα (AQI):</div>
          <div class="flex items-center gap-1.5">
            <span class="px-2 py-0.5 rounded-full text-xs font-bold ${live.aqiBg} ${live.aqiColor} border">
              ${live.aqiLabel} (${live.aqi})
            </span>
          </div>
          <div class="text-[10px] text-slate-400 mt-1 font-mono">
            PM2.5: <span class="text-slate-200 font-bold">${live.pm25}</span> · PM10: <span class="text-slate-200 font-bold">${live.pm10}</span>
          </div>
        </div>

      </div>

      <!-- Live bar footer -->
      <div class="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800/80">
        <span>Τελευταία μέτρηση: ${live.updatedAt} (Τοπική ώρα)</span>
        <button onclick="window.refreshLiveGeoData()" class="hover:text-sky-400 transition flex items-center gap-1 cursor-pointer">
          <i class="fa-solid fa-rotate text-[9px]"></i> Ανανέωση Live
        </button>
      </div>
    </div>
  `;
}
