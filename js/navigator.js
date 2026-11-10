import { US_STATES, CITY_TO_STATE } from './states-data.js';
/**
 * Navigator Module
 * Hierarchical Cascading Navigation: Continents -> Countries -> Cities
 */

export const CONTINENTS_DATA = [
  {
    id: 'europe',
    name: 'Ευρώπη',
    icon: 'fa-earth-europe',
    countries: [
      {
        id: 'greece',
        name: 'Ελλάδα',
        flag: '🇬🇷',
        cities: [
          { id: 'kozani', name: 'Κοζάνη', badge: 'Πόλη Κρόκου' },
          { id: 'athens', name: 'Αθήνα', badge: 'Πρωτεύουσα' },
          { id: 'thessaloniki', name: 'Θεσσαλονίκη', badge: 'Συμπρωτεύουσα' },
          { id: 'patras', name: 'Πάτρα' },
          { id: 'heraklion', name: 'Ηράκλειο' },
          { id: 'larissa', name: 'Λάρισα' },
          { id: 'volos', name: 'Βόλος' },
          { id: 'ioannina', name: 'Ιωάννινα' },
          { id: 'trikala', name: 'Τρίκαλα' },
          { id: 'chania', name: 'Χανιά' },
          { id: 'chalkida', name: 'Χαλκίδα' }
        ]
      },
      {
        id: 'france',
        name: 'Γαλλία',
        flag: '🇫🇷',
        cities: [
          { id: 'paris', name: 'Παρίσι', badge: 'Πρωτεύουσα' },
          { id: 'marseille', name: 'Μασσαλία' },
          { id: 'lyon', name: 'Λυών' }
        ]
      },
      {
        id: 'italy',
        name: 'Ιταλία',
        flag: '🇮🇹',
        cities: [
          { id: 'rome', name: 'Ρώμη', badge: 'Πρωτεύουσα' },
          { id: 'florence', name: 'Φλωρεντία' },
          { id: 'milan', name: 'Μιλάνο' },
          { id: 'venice', name: 'Βενετία' }
        ]
      },
      {
        id: 'germany',
        name: 'Γερμανία',
        flag: '🇩🇪',
        cities: [
          { id: 'berlin', name: 'Βερολίνο', badge: 'Πρωτεύουσα' },
          { id: 'munich', name: 'Μόναχο' },
          { id: 'hamburg', name: 'Αμβούργο' }
        ]
      },
      {
        id: 'uk',
        name: 'Ηνωμένο Βασίλειο',
        flag: '🇬🇧',
        cities: [
          { id: 'london', name: 'Λονδίνο', badge: 'Πρωτεύουσα' },
          { id: 'edinburgh', name: 'Εδιμβούργο' },
          { id: 'manchester', name: 'Μάντσεστερ' }
        ]
      },
      {
        id: 'spain',
        name: 'Ισπανία',
        flag: '🇪🇸',
        cities: [
          { id: 'madrid', name: 'Μαδρίτη', badge: 'Πρωτεύουσα' },
          { id: 'barcelona', name: 'Βαρκελώνη' },
          { id: 'seville', name: 'Σεβίλλη' }
        ]
      },
      {
        id: 'austria',
        name: 'Αυστρία',
        flag: '🇦🇹',
        cities: [
          { id: 'vienna', name: 'Βιέννη', badge: 'Πρωτεύουσα' },
          { id: 'salzburg', name: 'Σάλτσμπουργκ' },
          { id: 'innsbruck', name: 'Ίνσμπρουκ' }
        ]
      },
      {
        id: 'switzerland',
        name: 'Ελβετία',
        flag: '🇨🇭',
        cities: [
          { id: 'bern', name: 'Βέρνη', badge: 'Πρωτεύουσα' },
          { id: 'zurich', name: 'Ζυρίχη' },
          { id: 'geneva', name: 'Γενεύη' }
        ]
      },
      {
        id: 'netherlands',
        name: 'Ολλανδία',
        flag: '🇳🇱',
        cities: [
          { id: 'amsterdam', name: 'Άμστερνταμ', badge: 'Πρωτεύουσα' },
          { id: 'rotterdam', name: 'Ρότερνταμ' },
          { id: 'utrecht', name: 'Ουτρέχτη' }
        ]
      },
      {
        id: 'belgium',
        name: 'Βέλγιο',
        flag: '🇧🇪',
        cities: [
          { id: 'brussels', name: 'Βρυξέλλες', badge: 'Πρωτεύουσα' },
          { id: 'antwerp', name: 'Αμβέρσα' },
          { id: 'ghent', name: 'Γάνδη' }
        ]
      },
      {
        id: 'portugal',
        name: 'Πορτογαλία',
        flag: '🇵🇹',
        cities: [
          { id: 'lisbon', name: 'Λισαβόνα', badge: 'Πρωτεύουσα' },
          { id: 'porto', name: 'Πόρτο' },
          { id: 'braga', name: 'Μπράγκα' }
        ]
      },
      {
        id: 'czech',
        name: 'Τσεχία',
        flag: '🇨🇿',
        cities: [
          { id: 'prague', name: 'Πράγα', badge: 'Πρωτεύουσα' },
          { id: 'brno', name: 'Μπρνο' },
          { id: 'ostrava', name: 'Οστράβα' }
        ]
      },
      {
        id: 'poland',
        name: 'Πολωνία',
        flag: '🇵🇱',
        cities: [
          { id: 'warsaw', name: 'Βαρσοβία', badge: 'Πρωτεύουσα' },
          { id: 'krakow', name: 'Κρακοβία' },
          { id: 'gdansk', name: 'Γκντανσκ' }
        ]
      },
      {
        id: 'sweden',
        name: 'Σουηδία',
        flag: '🇸🇪',
        cities: [
          { id: 'stockholm', name: 'Στοκχόλμη', badge: 'Πρωτεύουσα' },
          { id: 'gothenburg', name: 'Γκέτεμποργκ' },
          { id: 'malmo', name: 'Μάλμε' }
        ]
      },
      {
        id: 'norway',
        name: 'Νορβηγία',
        flag: '🇳🇴',
        cities: [
          { id: 'oslo', name: 'Όσλο', badge: 'Πρωτεύουσα' },
          { id: 'bergen', name: 'Μπέργκεν' },
          { id: 'tromso', name: 'Τρόμσο' }
        ]
      },
      {
        id: 'denmark',
        name: 'Δανία',
        flag: '🇩🇰',
        cities: [
          { id: 'copenhagen', name: 'Κοπεγχάγη', badge: 'Πρωτεύουσα' },
          { id: 'aarhus', name: 'Ώρχους' },
          { id: 'odense', name: 'Όντενσε' }
        ]
      },
      {
        id: 'finland',
        name: 'Φινλανδία',
        flag: '🇫🇮',
        cities: [
          { id: 'helsinki', name: 'Ελσίνκι', badge: 'Πρωτεύουσα' },
          { id: 'tampere', name: 'Τάμπερε' },
          { id: 'turku', name: 'Τούρκου' }
        ]
      },
      {
        id: 'ireland',
        name: 'Ιρλανδία',
        flag: '🇮🇪',
        cities: [
          { id: 'dublin', name: 'Δουβλίνο', badge: 'Πρωτεύουσα' },
          { id: 'cork', name: 'Κορκ' },
          { id: 'galway', name: 'Γκάλγουεϊ' }
        ]
      },
      {
        id: 'hungary',
        name: 'Ουγγαρία',
        flag: '🇭🇺',
        cities: [
          { id: 'budapest', name: 'Βουδαπέστη', badge: 'Πρωτεύουσα' },
          { id: 'debrecen', name: 'Ντέμπρετσεν' },
          { id: 'szeged', name: 'Σέγκεντ' }
        ]
      },
      {
        id: 'romania',
        name: 'Ρουμανία',
        flag: '🇷🇴',
        cities: [
          { id: 'bucharest', name: 'Βουκουρέστι', badge: 'Πρωτεύουσα' },
          { id: 'cluj', name: 'Κλουζ-Ναπόκα' },
          { id: 'timisoara', name: 'Τιμισοάρα' }
        ]
      },
      {
        id: 'bulgaria',
        name: 'Βουλγαρία',
        flag: '🇧🇬',
        cities: [
          { id: 'sofia', name: 'Σόφια', badge: 'Πρωτεύουσα' },
          { id: 'plovdiv', name: 'Φιλιππούπολη' },
          { id: 'varna', name: 'Βάρνα' }
        ]
      },
      {
        id: 'serbia',
        name: 'Σερβία',
        flag: '🇷🇸',
        cities: [
          { id: 'belgrade', name: 'Βελιγράδι', badge: 'Πρωτεύουσα' },
          { id: 'novi-sad', name: 'Νόβι Σαντ' },
          { id: 'nis', name: 'Νις' }
        ]
      },
      {
        id: 'croatia',
        name: 'Κροατία',
        flag: '🇭🇷',
        cities: [
          { id: 'zagreb', name: 'Ζάγκρεμπ', badge: 'Πρωτεύουσα' },
          { id: 'split', name: 'Σπλιτ' },
          { id: 'dubrovnik', name: 'Ντουμπρόβνικ' }
        ]
      },
      {
        id: 'cyprus',
        name: 'Κύπρος',
        flag: '🇨🇾',
        cities: [
          { id: 'nicosia', name: 'Λευκωσία', badge: 'Πρωτεύουσα' },
          { id: 'limassol', name: 'Λεμεσός' },
          { id: 'paphos', name: 'Πάφος' }
        ]
      },
      {
        id: 'turkey',
        name: 'Τουρκία',
        flag: '🇹🇷',
        cities: [
          { id: 'ankara', name: 'Άγκυρα', badge: 'Πρωτεύουσα' },
          { id: 'istanbul', name: 'Κωνσταντινούπολη', badge: 'Μητρόπολη' },
          { id: 'izmir', name: 'Σμύρνη' }
        ]
      },
      {
        id: 'albania',
        name: 'Αλβανία',
        flag: '🇦🇱',
        cities: [
          { id: 'tirana', name: 'Τίρανα', badge: 'Πρωτεύουσα' },
          { id: 'durres', name: 'Δυρράχιο' },
          { id: 'vlore', name: 'Αυλώνας' }
        ]
      },
      {
        id: 'north-macedonia',
        name: 'Βόρεια Μακεδονία',
        flag: '🇲🇰',
        cities: [
          { id: 'skopje', name: 'Σκόπια', badge: 'Πρωτεύουσα' },
          { id: 'ohrid', name: 'Οχρίδα' },
          { id: 'bitola', name: 'Μπίτολα' }
        ]
      },
      {
        id: 'montenegro',
        name: 'Μαυροβούνιο',
        flag: '🇲🇪',
        cities: [
          { id: 'podgorica', name: 'Ποντγκόριτσα', badge: 'Πρωτεύουσα' },
          { id: 'kotor', name: 'Κότορ' },
          { id: 'budva', name: 'Μπούντβα' }
        ]
      },
      {
        id: 'bosnia',
        name: 'Βοσνία & Ερζεγοβίνη',
        flag: '🇧🇦',
        cities: [
          { id: 'sarajevo', name: 'Σαράγεβο', badge: 'Πρωτεύουσα' },
          { id: 'mostar', name: 'Μόσταρ' },
          { id: 'banja-luka', name: 'Μπάνια Λούκα' }
        ]
      },
      {
        id: 'slovenia',
        name: 'Σλοβενία',
        flag: '🇸🇮',
        cities: [
          { id: 'ljubljana', name: 'Λιουμπλιάνα', badge: 'Πρωτεύουσα' },
          { id: 'maribor', name: 'Μάριμπορ' },
          { id: 'piran', name: 'Πιράν' }
        ]
      },
      {
        id: 'slovakia',
        name: 'Σλοβακία',
        flag: '🇸🇰',
        cities: [
          { id: 'bratislava', name: 'Μπρατισλάβα', badge: 'Πρωτεύουσα' },
          { id: 'kosice', name: 'Κόσιτσε' }
        ]
      },
      {
        id: 'estonia',
        name: 'Εσθονία',
        flag: '🇪🇪',
        cities: [
          { id: 'tallinn', name: 'Τάλιν', badge: 'Πρωτεύουσα' },
          { id: 'tartu', name: 'Τάρτου' }
        ]
      },
      {
        id: 'latvia',
        name: 'Λετονία',
        flag: '🇱🇻',
        cities: [
          { id: 'riga', name: 'Ρίγα', badge: 'Πρωτεύουσα' },
          { id: 'daugavpils', name: 'Νταουγκάβπιλς' }
        ]
      },
      {
        id: 'lithuania',
        name: 'Λιθουανία',
        flag: '🇱🇹',
        cities: [
          { id: 'vilnius', name: 'Βίλνιους', badge: 'Πρωτεύουσα' },
          { id: 'kaunas', name: 'Κάουνας' }
        ]
      },
      {
        id: 'iceland',
        name: 'Ισλανδία',
        flag: '🇮🇸',
        cities: [
          { id: 'reykjavik', name: 'Ρέικιαβικ', badge: 'Πρωτεύουσα' },
          { id: 'akureyri', name: 'Άκουρεϊρι' }
        ]
      },
      {
        id: 'luxembourg',
        name: 'Λουξεμβούργο',
        flag: '🇱🇺',
        cities: [
          { id: 'luxembourg-city', name: 'Πόλη του Λουξεμβούργου', badge: 'Πρωτεύουσα' }
        ]
      },
      {
        id: 'malta',
        name: 'Μάλτα',
        flag: '🇲🇹',
        cities: [
          { id: 'valletta', name: 'Βαλέτα', badge: 'Πρωτεύουσα' },
          { id: 'mdina', name: 'Μντίνα' }
        ]
      }
    ]
  },
  {
    id: 'north_america',
    name: 'Βόρεια Αμερική',
    icon: 'fa-earth-americas',
    countries: [
      {
        id: 'usa',
        name: 'Ηνωμένες Πολιτείες (ΗΠΑ)',
        flag: '🇺🇸',
        cities: [
          { id: 'new-york', name: 'Νέα Υόρκη', badge: 'Μητρόπολη' },
          { id: 'los-angeles', name: 'Λος Άντζελες' },
          { id: 'chicago', name: 'Σικάγο' },
          { id: 'boston', name: 'Βοστώνη' },
          { id: 'houston', name: 'Χιούστον' },
          { id: 'philadelphia', name: 'Φιλαδέλφεια' },
          { id: 'phoenix', name: 'Φοίνιξ' },
          { id: 'san-diego', name: 'Σαν Ντιέγκο' },
          { id: 'dallas', name: 'Ντάλας' },
          { id: 'san-antonio', name: 'Σαν Αντόνιο' }
        ]
      },
      {
        id: 'canada',
        name: 'Καναδάς',
        flag: '🇨🇦',
        cities: [
          { id: 'ottawa', name: 'Οττάβα', badge: 'Πρωτεύουσα' },
          { id: 'toronto', name: 'Τορόντο' },
          { id: 'montreal', name: 'Μόντρεαλ' },
          { id: 'vancouver', name: 'Βανκούβερ' }
        ]
      },
      {
        id: 'mexico',
        name: 'Μεξικό',
        flag: '🇲🇽',
        cities: [
          { id: 'mexico-city', name: 'Πόλη του Μεξικού', badge: 'Πρωτεύουσα' },
          { id: 'guadalajara', name: 'Γκουανταλαχάρα' },
          { id: 'monterrey', name: 'Μοντερέι' },
          { id: 'cancun', name: 'Κανκούν' }
        ]
      }
    ]
  },
  {
    id: 'south_america',
    name: 'Νότια Αμερική',
    icon: 'fa-earth-americas',
    countries: [
      {
        id: 'brazil',
        name: 'Βραζιλία',
        flag: '🇧🇷',
        cities: [
          { id: 'brasilia', name: 'Μπραζίλια', badge: 'Πρωτεύουσα' },
          { id: 'rio-de-janeiro', name: 'Ρίο ντε Τζανέιρο' },
          { id: 'sao-paulo', name: 'Σάο Πάολο' },
          { id: 'salvador', name: 'Σαλβαδόρ' }
        ]
      },
      {
        id: 'argentina',
        name: 'Αργεντινή',
        flag: '🇦🇷',
        cities: [
          { id: 'buenos-aires', name: 'Μπουένος Άιρες', badge: 'Πρωτεύουσα' },
          { id: 'cordoba', name: 'Κόρδοβα' },
          { id: 'rosario', name: 'Ροσάριο' }
        ]
      },
      {
        id: 'chile',
        name: 'Χιλή',
        flag: '🇨🇱',
        cities: [
          { id: 'santiago', name: 'Σαντιάγο', badge: 'Πρωτεύουσα' },
          { id: 'valparaiso', name: 'Βαλπαραΐσο' }
        ]
      },
      {
        id: 'peru',
        name: 'Περού',
        flag: '🇵🇪',
        cities: [
          { id: 'lima', name: 'Λίμα', badge: 'Πρωτεύουσα' },
          { id: 'cusco', name: 'Κούσκο' },
          { id: 'arequipa', name: 'Αρεκίπα' }
        ]
      },
      {
        id: 'colombia',
        name: 'Κολομβία',
        flag: '🇨🇴',
        cities: [
          { id: 'bogota', name: 'Μπογκοτά', badge: 'Πρωτεύουσα' },
          { id: 'medellin', name: 'Μεδεγίν' },
          { id: 'cartagena', name: 'Καρθαγένη' }
        ]
      },
      {
        id: 'venezuela',
        name: 'Βενεζουέλα',
        flag: '🇻🇪',
        cities: [
          { id: 'caracas', name: 'Καράκας', badge: 'Πρωτεύουσα' },
          { id: 'maracaibo', name: 'Μαρακαΐμπο' },
          { id: 'valencia', name: 'Βαλένθια' }
        ]
      },
      {
        id: 'ecuador',
        name: 'Εκουαδόρ',
        flag: '🇪🇨',
        cities: [
          { id: 'quito', name: 'Κίτο', badge: 'Πρωτεύουσα' },
          { id: 'guayaquil', name: 'Γουαγιακίλ' },
          { id: 'cuenca', name: 'Κουένκα' }
        ]
      },
      {
        id: 'bolivia',
        name: 'Βολιβία',
        flag: '🇧🇴',
        cities: [
          { id: 'la-paz', name: 'Λα Παζ', badge: 'Πρωτεύουσα' },
          { id: 'sucre', name: 'Σούκρε', badge: 'Συνταγματική' },
          { id: 'santa-cruz', name: 'Σάντα Κρουζ' }
        ]
      },
      {
        id: 'paraguay',
        name: 'Παραγουάη',
        flag: '🇵🇾',
        cities: [
          { id: 'asuncion', name: 'Ασουνσιόν', badge: 'Πρωτεύουσα' },
          { id: 'ciudad-del-este', name: 'Σιουδάδ δελ Έστε' }
        ]
      },
      {
        id: 'uruguay',
        name: 'Ουρουγουάη',
        flag: '🇺🇾',
        cities: [
          { id: 'montevideo', name: 'Μοντεβιδέο', badge: 'Πρωτεύουσα' },
          { id: 'punta-del-este', name: 'Πούντα δελ Έστε' }
        ]
      },
      {
        id: 'guyana',
        name: 'Γουιάνα',
        flag: '🇬🇾',
        cities: [
          { id: 'georgetown', name: 'Τζορτζτάουν', badge: 'Πρωτεύουσα' },
          { id: 'linden', name: 'Λίντεν' }
        ]
      },
      {
        id: 'suriname',
        name: 'Σουρινάμ',
        flag: '🇸🇷',
        cities: [
          { id: 'paramaribo', name: 'Παραμαρίμπο', badge: 'Πρωτεύουσα' },
          { id: 'lelydorp', name: 'Λέλινορπ' }
        ]
      }
    ]
  }
];

let isNavDropdownOpen = false;
let expandedContinents = new Set(['europe']);
let expandedCountries = new Set(['greece']);
let expandedStates = new Set(['massachusetts']);
let showAllStates = false;

export function initContinentNavigator() {
  renderContinentNav();

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    const container = document.getElementById('continentNavContainer');
    if (container && !container.contains(e.target) && isNavDropdownOpen) {
      closeContinentNavDropdown();
    }
  });
}

export function toggleContinentNavDropdown(event) {
  if (event) event.stopPropagation();
  isNavDropdownOpen = !isNavDropdownOpen;
  const dropdown = document.getElementById('continentNavDropdown');
  const arrow = document.getElementById('continentNavArrow');
  if (!dropdown) return;

  if (isNavDropdownOpen) {
    dropdown.classList.remove('hidden');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
    renderContinentNav();
    const searchInput = document.getElementById('continentNavSearch');
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 50);
    }
  } else {
    dropdown.classList.add('hidden');
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  }
}

export function closeContinentNavDropdown() {
  isNavDropdownOpen = false;
  const dropdown = document.getElementById('continentNavDropdown');
  const arrow = document.getElementById('continentNavArrow');
  if (dropdown) dropdown.classList.add('hidden');
  if (arrow) arrow.style.transform = 'rotate(0deg)';
}

export function toggleContinentSection(continentId, event) {
  if (event) event.stopPropagation();
  if (expandedContinents.has(continentId)) {
    expandedContinents.delete(continentId);
  } else {
    expandedContinents.add(continentId);
  }
  renderContinentNav();
}

export function toggleCountrySection(countryId, event) {
  if (event) event.stopPropagation();
  if (expandedCountries.has(countryId)) {
    expandedCountries.delete(countryId);
  } else {
    expandedCountries.add(countryId);
  }
  renderContinentNav();
}

export function selectNavTarget(targetValue, targetName = '') {
  closeContinentNavDropdown();
  if (window.handleJumpChange) {
    window.handleJumpChange(targetValue);
  }
  updateNavigatorBtnLabel(targetValue, targetName);
}

export function updateNavigatorBtnLabel(targetValue, targetName = '') {
  const labelEl = document.getElementById('continentNavBtnLabel');
  if (!labelEl) return;

  if (targetValue === 'world') {
    labelEl.innerText = '🌍 Πλανήτης Γη';
    return;
  }

  if (targetName) {
    labelEl.innerText = targetName;
    return;
  }

  // Lookup in US_STATES
  if (targetValue.startsWith('state:')) {
    const sId = targetValue.split(':')[1];
    const st = US_STATES.find(s => s.id === sId);
    labelEl.innerText = st ? `🏛️ ${st.name} (ΗΠΑ)` : targetValue;
    return;
  }
  if (targetValue.startsWith('city:')) {
    const cId = targetValue.split(':')[1];
    const sId = CITY_TO_STATE[cId];
    if (sId) {
      const st = US_STATES.find(s => s.id === sId);
      if (st) {
        const c = st.cities.find(ci => ci.id === cId);
        labelEl.innerText = `📍 ${c ? c.name : cId} (${st.name})`;
        return;
      }
    }
  }

  // Lookup in data
  for (const continent of CONTINENTS_DATA) {
    for (const country of continent.countries) {
      if (targetValue === `country:${country.id}`) {
        labelEl.innerText = `${country.flag} ${country.name}`;
        return;
      }
      for (const city of country.cities) {
        if (targetValue === `city:${city.id}`) {
          labelEl.innerText = `📍 ${city.name} (${country.flag})`;
          return;
        }
      }
    }
  }
}

export function filterContinentNav(query) {
  const q = (query || '').trim().toLowerCase();
  const searchResultsEl = document.getElementById('navSearchResults');
  const treeEl = document.getElementById('navHierarchyTree');

  if (!searchResultsEl || !treeEl) return;

  if (!q) {
    searchResultsEl.classList.add('hidden');
    treeEl.classList.remove('hidden');
    return;
  }

  searchResultsEl.classList.remove('hidden');
  treeEl.classList.add('hidden');

  const matches = [];
  for (const continent of CONTINENTS_DATA) {
    for (const country of continent.countries) {
      // Check country match
      if (country.name.toLowerCase().includes(q) || country.id.includes(q)) {
        matches.push({
          type: 'country',
          value: `country:${country.id}`,
          title: `${country.flag} ${country.name}`,
          sub: `${continent.name} • Εθνική Επισκόπηση`,
          icon: 'fa-landmark text-amber-400'
        });
      }
      // Check cities
      for (const city of country.cities) {
        if (city.name.toLowerCase().includes(q) || city.id.includes(q)) {
          matches.push({
            type: 'city',
            value: `city:${city.id}`,
            title: city.name,
            sub: `${country.flag} ${country.name} • ${continent.name}`,
            icon: 'fa-location-dot text-sky-400',
            badge: city.badge
          });
        }
      }
    }
  }

  // Check all 51 US States and 121 Cities
  for (const state of US_STATES) {
    if (state.name.toLowerCase().includes(q) || 
        state.englishName.toLowerCase().includes(q) || 
        state.id.includes(q) || 
        state.capital.toLowerCase().includes(q)) {
      matches.push({
        type: 'state',
        value: `state:${state.id}`,
        title: `🏛️ ${state.name} (${state.englishName})`,
        sub: `Πολιτεία ΗΠΑ • Πρωτεύουσα: ${state.capital}`,
        icon: 'fa-landmark text-emerald-400',
        badge: 'Πολιτεία ΗΠΑ'
      });
    }
    for (const city of state.cities) {
      if (city.name.toLowerCase().includes(q) || 
          city.englishName.toLowerCase().includes(q) || 
          city.id.includes(q)) {
        if (!matches.some(m => m.value === `city:${city.id}`)) {
          matches.push({
            type: 'city',
            value: `city:${city.id}`,
            title: city.name,
            sub: `🇺🇸 ${state.name} (${state.englishName}) • Βόρεια Αμερική`,
            icon: 'fa-location-dot text-sky-400',
            badge: city.badge || 'ΗΠΑ'
          });
        }
      }
    }
  }

  if (matches.length === 0) {
    searchResultsEl.innerHTML = `
      <div class="p-4 text-center text-slate-400 text-xs">
        <i class="fa-solid fa-magnifying-glass text-slate-600 text-lg mb-1 block"></i>
        Δεν βρέθηκε πόλη ή χώρα για "<strong>${q}</strong>"
      </div>
    `;
    return;
  }

  searchResultsEl.innerHTML = `
    <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
      Αποτελέσματα Αναζήτησης (${matches.length})
    </div>
    <div class="py-1">
      ${matches.map(m => `
        <button onclick="window.selectNavTarget('${m.value}', '${m.title.replace(/'/g, "\\'")}')" class="w-full text-left px-3 py-2 hover:bg-slate-800/90 text-slate-200 transition flex items-center justify-between group">
          <div class="flex items-center gap-2.5 min-w-0">
            <i class="fa-solid ${m.icon} text-xs shrink-0"></i>
            <div class="min-w-0">
              <div class="font-bold text-xs text-white group-hover:text-sky-300 truncate">${m.title}</div>
              <div class="text-[10px] text-slate-400 truncate">${m.sub}</div>
            </div>
          </div>
          ${m.badge ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0 font-medium">${m.badge}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `;
}

export function renderContinentNav() {
  const container = document.getElementById('navHierarchyTree');
  if (!container) return;

  container.innerHTML = CONTINENTS_DATA.map(continent => {
    const isContExpanded = expandedContinents.has(continent.id);
    const countryCount = continent.countries.length;
    const totalCities = continent.countries.reduce((acc, c) => acc + c.cities.length, 0);

    return `
      <div class="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-950/40 mb-1.5">
        <!-- Continent Header Bar -->
        <button onclick="window.toggleContinentSection('${continent.id}', event)" class="w-full px-3 py-2.5 bg-slate-800/60 hover:bg-slate-800 text-left flex items-center justify-between text-xs font-bold text-white transition group">
          <div class="flex items-center gap-2">
            <i class="fa-solid ${continent.icon} text-sky-400"></i>
            <span class="group-hover:text-sky-300">${continent.name}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-700/80 text-slate-300 font-normal">
              ${countryCount} χώρες
            </span>
          </div>
          <i class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform duration-200 ${isContExpanded ? 'rotate-180 text-sky-400' : ''}"></i>
        </button>

        <!-- Countries List -->
        ${isContExpanded ? `
          <div class="p-1 space-y-1 bg-slate-900/50">
            ${continent.countries.map(country => {
              const isCountryExpanded = expandedCountries.has(country.id);
              const cityCount = country.cities.length;

              return `
                <div class="rounded-lg overflow-hidden border border-slate-800/50 bg-slate-950/30">
                  <!-- Country Header -->
                  <div class="w-full px-2.5 py-1.5 hover:bg-slate-800/70 flex items-center justify-between transition">
                    <button onclick="window.selectNavTarget('country:${country.id}', '${country.flag} ${country.name.replace(/'/g, "\\'")}')" class="flex items-center gap-2 text-left min-w-0 flex-1 py-0.5 group">
                      <span class="text-sm shrink-0">${country.flag}</span>
                      <span class="font-bold text-xs text-slate-200 group-hover:text-sky-300 truncate">${country.name}</span>
                      <span class="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 font-mono shrink-0">${cityCount}</span>
                    </button>
                    <button onclick="window.toggleCountrySection('${country.id}', event)" class="p-1 text-slate-400 hover:text-white transition" title="Προβολή πόλεων">
                      <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${isCountryExpanded ? 'rotate-180 text-sky-400' : ''}"></i>
                    </button>
                  </div>

                  <!-- Cities List -->
                  ${isCountryExpanded ? `
                    <div class="px-2 py-1 bg-slate-950/60 border-t border-slate-800/40 space-y-0.5">
                      <!-- Country Overview Action -->
                      <button onclick="window.selectNavTarget('country:${country.id}', '${country.flag} ${country.name.replace(/'/g, "\\'")}')" class="w-full text-left px-2 py-1 rounded hover:bg-slate-800/80 text-amber-300 hover:text-white transition flex items-center gap-2 text-[11px] font-semibold">
                        <i class="fa-solid fa-landmark text-amber-400 text-[10px]"></i>
                        <span>Εθνική Επισκόπηση (${country.name})</span>
                      </button>

                      <!-- Individual Cities -->
                      ${country.cities.map(city => `
                        <button onclick="window.selectNavTarget('city:${city.id}', '📍 ${city.name.replace(/'/g, "\\'")}')" class="w-full text-left px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-sky-300 transition flex items-center justify-between text-[11px] group">
                          <span class="flex items-center gap-1.5 truncate">
                            <i class="fa-solid fa-location-dot text-[9px] text-sky-400 group-hover:scale-110 transition-transform"></i>
                            <span class="truncate">${city.name}</span>
                          </span>
                          ${city.badge ? `<span class="text-[8px] px-1 rounded bg-slate-800 text-slate-400 border border-slate-700/60 group-hover:border-sky-500/40 group-hover:text-sky-300 shrink-0">${city.badge}</span>` : ''}
                        </button>
                      `).join('')}

                      ${country.id === 'usa' ? `
                        <!-- Collapsible All US States Section (51 States, 121 Cities) -->
                        <div class="mt-2 pt-2 border-t border-slate-800/60">
                          <button onclick="window.toggleAllStatesSection(event)" class="w-full px-2 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/40 flex items-center justify-between text-left text-[11px] font-bold text-emerald-300 hover:text-emerald-200 transition group">
                            <div class="flex items-center gap-1.5">
                              <i class="fa-solid fa-flag-usa text-emerald-400"></i>
                              <span>🏛️ 50 Πολιτείες & D.C.</span>
                              <span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-900/60 text-emerald-300 font-mono">121 πόλεις</span>
                            </div>
                            <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${showAllStates ? 'rotate-180 text-emerald-300' : ''}"></i>
                          </button>

                          ${showAllStates ? `
                            <div class="mt-1 pl-1 space-y-1 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
                              ${US_STATES.map(state => {
                                const isStExpanded = expandedStates.has(state.id);
                                return `
                                  <div class="rounded border border-slate-800/40 bg-slate-900/40 overflow-hidden">
                                    <div class="w-full px-2 py-1 hover:bg-slate-800/60 flex items-center justify-between transition text-[11px]">
                                      <button onclick="window.selectNavTarget('state:${state.id}', '🏛️ ${state.name.replace(/'/g, "\\'")}')" class="flex items-center gap-1.5 text-left min-w-0 flex-1 group">
                                        <i class="fa-solid fa-landmark text-[9px] text-emerald-400 shrink-0"></i>
                                        <span class="font-medium text-slate-300 group-hover:text-emerald-300 truncate">${state.name}</span>
                                        <span class="text-[8px] text-slate-500 font-mono">(${state.cities.length})</span>
                                      </button>
                                      ${state.cities.length > 0 ? `
                                        <button onclick="window.toggleStateSection('${state.id}', event)" class="p-1 text-slate-400 hover:text-white transition" title="Προβολή πόλεων ${state.name}">
                                          <i class="fa-solid fa-chevron-down text-[8px] transition-transform duration-200 ${isStExpanded ? 'rotate-180 text-emerald-400' : ''}"></i>
                                        </button>
                                      ` : ''}
                                    </div>
                                    ${isStExpanded && state.cities.length > 0 ? `
                                      <div class="px-2 py-0.5 bg-slate-950/80 border-t border-slate-800/30 space-y-0.5 pl-4">
                                        ${state.cities.map(sc => `
                                          <button onclick="window.selectNavTarget('city:${sc.id}', '📍 ${sc.name.replace(/'/g, "\\'")}')" class="w-full text-left px-1.5 py-0.5 rounded hover:bg-slate-800 text-slate-400 hover:text-sky-300 transition flex items-center justify-between text-[10px] group">
                                            <span class="truncate">📍 ${sc.name}</span>
                                            ${sc.badge ? `<span class="text-[7px] px-1 rounded bg-slate-800 text-amber-300 border border-amber-600/30 shrink-0">${sc.badge}</span>` : ''}
                                          </button>
                                        `).join('')}
                                      </div>
                                    ` : ''}
                                  </div>
                                `;
                              }).join('')}
                            </div>
                          ` : ''}
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}


export function toggleStateSection(stateId, event) {
  if (event) event.stopPropagation();
  if (expandedStates.has(stateId)) {
    expandedStates.delete(stateId);
  } else {
    expandedStates.add(stateId);
  }
  renderContinentNav();
}

export function toggleAllStatesSection(event) {
  if (event) event.stopPropagation();
  showAllStates = !showAllStates;
  renderContinentNav();
}

// Global window bindings
window.toggleContinentNavDropdown = toggleContinentNavDropdown;
window.closeContinentNavDropdown = closeContinentNavDropdown;
window.toggleContinentSection = toggleContinentSection;
window.toggleCountrySection = toggleCountrySection;
window.selectNavTarget = selectNavTarget;
window.filterContinentNav = filterContinentNav;

window.toggleStateSection = toggleStateSection;
window.toggleAllStatesSection = toggleAllStatesSection;
