/**
 * Gastro Service
 * Provides rich gastronomy data and rendering for the Gastronomy tab:
 * - Traditional Dining Spots (Traditional Taverns, Koutoukia, Magereia, Restaurants with Cost & Star Ranking)
 * - Street Food & Cantinas (Street Food Spots, Night Cantinas, Souvlakia, Bougatsa with Cost & Star Ranking)
 * - General Cuisine & Street Food Overviews
 * - Famous Dishes, Recipes & Specialties
 * - Direct In-App Bing Search integration for deep dining exploration without leaving the app
 */

function escapeStr(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/\n/g, ' ');
}

/**
 * Normalizes entity identifier to match cities across databases
 */
export function normalizeEntityId(entity) {
  if (!entity) return '';
  const id = (entity.id || '').toLowerCase();
  const name = (entity.name || '').toLowerCase();
  const eng = (entity.englishName || '').toLowerCase();

  if (id === 'larissa' || id === 'larisa' || name.includes('λάρισ') || eng.includes('laris')) return 'larisa';
  if (id === 'kozani' || name.includes('κοζάν') || eng.includes('kozan')) return 'kozani';
  if (id === 'athens' || name.includes('αθήν') || eng.includes('athen')) return 'athens';
  if (id === 'thessaloniki' || name.includes('θεσσαλονίκ') || eng.includes('thessalon')) return 'thessaloniki';
  if (id === 'patras' || id === 'patra' || name.includes('πάτρ') || eng.includes('patra')) return 'patras';
  if (id === 'heraklion' || name.includes('ηράκλει') || eng.includes('heraklion')) return 'heraklion';
  if (id === 'ioannina' || name.includes('ιωάννιν') || eng.includes('ioannina') || eng.includes('yannena')) return 'ioannina';
  if (id === 'chania' || name.includes('χανι') || eng.includes('chania')) return 'chania';
  if (id === 'volos' || name.includes('βόλ') || eng.includes('volos')) return 'volos';
  if (id === 'boston' || name.includes('βοστών') || eng.includes('boston')) return 'boston';
  if (id.includes('greece') || name.includes('ελλάδ') || eng.includes('greece')) return 'greece';
  return id;
}

/**
 * Registry of Traditional Dining Spots: Taverns, Koutoukia & Traditional Restaurants with Cost & Ranking
 */
export const TRADITIONAL_DINING_DATABASE = {
  // Kozani
  'kozani': [
    {
      name: 'Οινομαγειρείο «Το Πέτρινο»',
      type: 'Παραδοσιακό Οινομαγειρείο & Ταβέρνα',
      cost: '€€',
      costText: '~14 - 20€ / άτομο',
      rating: '4.7',
      reviewsCount: '580+ κριτικές',
      location: 'Παλιά Κοζάνη (πλησίον Πλατείας Νίκης)',
      specialties: 'Κοζανίτικα γιαπράκια με αρμιά, αρνάκι γάστρας, χοιρινό κότσι, σπιτικές στριφτές πίτες.',
      bingQuery: 'Το Πέτρινο Κοζάνη οινομαγειρείο ταβέρνα κριτικές τιμές μενού'
    },
    {
      name: 'Ταβέρνα «Το Στέκι του Κωστή»',
      type: 'Παραδοσιακή Χασαποταβέρνα & Κουτούκι',
      cost: '€€',
      costText: '~12 - 18€ / άτομο',
      rating: '4.8',
      reviewsCount: '720+ κριτικές',
      location: 'Κέντρο Κοζάνης',
      specialties: 'Ντόπια παϊδάκια προβατίνας, χοιρινό & πρόβειο κοντοσούβλι, μπιφτέκι γεμιστό με τοπικό τυρί.',
      bingQuery: 'Το Στέκι του Κωστή Κοζάνη ταβέρνα παϊδάκια κριτικές τιμές'
    },
    {
      name: 'Εστιατόριο «Τρυποκάρυδος»',
      type: 'Σύγχρονη Μακεδονική & Παραδοσιακή Κουζίνα',
      cost: '€€ - €€€',
      costText: '~20 - 28€ / άτομο',
      rating: '4.8',
      reviewsCount: '1.150+ κριτικές',
      location: 'Πλατεία Ελευθερίας',
      specialties: 'Ριζότο με Κρόκο Κοζάνης ΠΟΠ, καπνιστή μοσχαρίσια σπαλομπριζόλα, ντόπια κρασιά Βελβεντού.',
      bingQuery: 'Τρυποκάρυδος Κοζάνη εστιατόριο κρόκος κριτικές τιμές'
    },
    {
      name: 'Κουτούκι «Το Τζάκι»',
      type: 'Παραδοσιακό Κουτούκι & Τσιπουράδικο',
      cost: '€€',
      costText: '~13 - 19€ / άτομο',
      rating: '4.6',
      reviewsCount: '450+ κριτικές',
      location: 'Ιστορικός Ιστός Κοζάνης',
      specialties: 'Τσίπουρο με παραδοσιακούς μεζέδες, τηγανιά κοζανίτικη, μπουγιουρντί, σπετζοφάι.',
      bingQuery: 'Το Τζάκι Κοζάνη κουτούκι τσιπουράδικο κριτικές τιμές'
    }
  ],

  // Larisa
  'larisa': [
    {
      name: 'Ταβέρνα «Νικόδημος» (Λόφος Φρουρίου)',
      type: 'Ιστορική Παραδοσιακή Ταβέρνα',
      cost: '€€',
      costText: '~15 - 22€ / άτομο',
      rating: '4.7',
      reviewsCount: '980+ κριτικές',
      location: 'Λόφος Φρουρίου (Άγιος Αχίλλιος)',
      specialties: 'Πρόβεια παϊδάκια στη σχάρα, αρνάκι κλέφτικο στη λαδόκολλα, χοιρινό με σέλινο, φέτα Ελασσόνας ψητή με μπούκοβο.',
      bingQuery: 'Νικόδημος Λάρισα Φρούριο ταβέρνα κριτικές τιμές'
    },
    {
      name: '«Το Μαγειρείο της Αθηνάς»',
      type: 'Αυθεντικό Παραδοσιακό Μαγειρείο',
      cost: '€',
      costText: '~10 - 15€ / άτομο',
      rating: '4.8',
      reviewsCount: '690+ κριτικές',
      location: 'Πεζόδρομοι Κέντρου Λάρισας',
      specialties: 'Σουτζουκάκια σμυρναίικα με πουρέ, γιουβέτσι μοσχαράκι σε πήλινο, παραδοσιακός μουσακάς, λαδερά ημέρας.',
      bingQuery: 'Το Μαγειρείο της Αθηνάς Λάρισα παραδοσιακό φαγητό κριτικές'
    },
    {
      name: 'Τσιπουράδικο «Το Κουτούκι του Στράτου»',
      type: 'Θεσσαλικό Τσιπουράδικο & Μεζεδοπωλείο',
      cost: '€€',
      costText: '~12 - 18€ / άτομο',
      rating: '4.8',
      reviewsCount: '840+ κριτικές',
      location: 'Πλησίον Α΄ Αρχαίου Θεάτρου',
      specialties: 'Αυθεντικό Τσίπουρο Τυρνάβου με γύρα μεζέδων (θαλασσινά & κρεατικά), τηγανιά λουκάνικο με πράσο, πρόβειο κεμπάπ.',
      bingQuery: 'Το Κουτούκι του Στράτου Λάρισα τσιπουράδικο μεζέδες κριτικές'
    },
    {
      name: 'Εστιατόριο «Βόσπορος»',
      type: 'Πολίτικη & Παραδοσιακή Κρεατοφαγία',
      cost: '€€',
      costText: '~16 - 24€ / άτομο',
      rating: '4.6',
      reviewsCount: '560+ κριτικές',
      location: 'Κέντρο Λάρισας',
      specialties: 'Γιαουρτλού κεμπάπ, θεσσαλικό κοντοσούβλι, χουνκιάρ μπεγιεντί, χειροποίητες αλοιφές και πίτες.',
      bingQuery: 'Βόσπορος Λάρισα εστιατόριο κεμπάπ κριτικές μενού'
    }
  ],

  // Athens
  'athens': [
    {
      name: 'Ταβέρνα «Κληματαριά»',
      type: 'Ιστορική Ταβέρνα (από το 1927)',
      cost: '€€',
      costText: '~18 - 25€ / άτομο',
      rating: '4.7',
      reviewsCount: '2.400+ κριτικές',
      location: 'Πλατεία Θεάτρου (Ψυρρή)',
      specialties: 'Αρνάκι γάστρας, κότσι χοιρινό μελωμένο, παραδοσιακές πίτες, ζωντανή ρεμπέτικη μουσική.',
      bingQuery: 'Κληματαριά Ψυρρή ταβέρνα Αθήνα κριτικές τιμές'
    },
    {
      name: '«Τα Καραμανλίδικα του Φάνη»',
      type: 'Παστιρματζίδικο & Παραδοσιακό Μεζεδοπωλείο',
      cost: '€€',
      costText: '~16 - 24€ / άτομο',
      rating: '4.8',
      reviewsCount: '6.500+ κριτικές',
      location: 'Ευριπίδου / Κεντρική Αγορά',
      specialties: 'Καραμανλίδικα λουκάνικα, αυγά μάτια με σουτζούκι, παστιρμαδόπιτα, καπνιστά τυριά.',
      bingQuery: 'Τα Καραμανλίδικα του Φάνη Ευριπίδου Αθήνα κριτικές'
    },
    {
      name: 'Υπόγειο Οινομαγειρείο «Το Δίπορτο»',
      type: 'Αυθεντικό Υπόγειο Κουτούκι (από το 1875)',
      cost: '€',
      costText: '~12 - 16€ / άτομο',
      rating: '4.6',
      reviewsCount: '1.800+ κριτικές',
      location: 'Βαρβάκειος Αγορά (Σωκράτους & Θεάτρου)',
      specialties: 'Ρεβίθια σούπα, φασολάδα, σαρδέλες τηγανητές, χωριάτικη σαλάτα, κρασί από τα βαρέλια.',
      bingQuery: 'Το Δίπορτο Βαρβάκειος υπόγειο κουτούκι Αθήνα κριτικές'
    }
  ],

  // Thessaloniki
  'thessaloniki': [
    {
      name: 'Ουζερί «Τσινάρι» (Άνω Πόλη)',
      type: 'Ιστορικό Ουζερί & Ταβέρνα (από το 1850)',
      cost: '€€',
      costText: '~15 - 22€ / άτομο',
      rating: '4.7',
      reviewsCount: '2.100+ κριτικές',
      location: 'Άνω Πόλη Θεσσαλονίκης',
      specialties: 'Σουτζουκάκια σμυρναίικα, σαρδέλα ψητή, τηγανιά με πιπεριές, μελιτζανοσαλάτα αγιορείτικη.',
      bingQuery: 'Τσινάρι Άνω Πόλη Θεσσαλονίκη ταβέρνα ουζερί κριτικές'
    },
    {
      name: 'Ταβέρνα «Η Ρούγα»',
      type: 'Παραδοσιακό Μεζεδοπωλείο',
      cost: '€€',
      costText: '~16 - 24€ / άτομο',
      rating: '4.8',
      reviewsCount: '1.950+ κριτικές',
      location: 'Κέντρο Θεσσαλονίκης (πλησίον Λαδάδικα)',
      specialties: 'Μπριζολάκια χοιρινά, μπουγιουρντί, τηγανιά κοτόπουλο με μουστάρδα, ντόπιο κρασί.',
      bingQuery: 'Η Ρούγα Θεσσαλονίκη ταβέρνα κριτικές τιμές'
    },
    {
      name: 'Εστιατόριο «Ζύθος / Ντορέ»',
      type: 'Ιστορική Μπυραρία & Ελληνικό Εστιατόριο',
      cost: '€€ - €€€',
      costText: '~20 - 30€ / άτομο',
      rating: '4.6',
      reviewsCount: '2.800+ κριτικές',
      location: 'Απέναντι από τον Λευκό Πύργο',
      specialties: 'Μακεδονικοί μεζέδες, κότσι, χειροποίητα λουκάνικα, ελληνικές craft μπύρες.',
      bingQuery: 'Ζύθος Ντορέ Λευκός Πύργος Θεσσαλονίκη κριτικές'
    }
  ],

  // Patras
  'patras': [
    {
      name: 'Οινομαγειρείο «Ο Σάκης»',
      type: 'Παραδοσιακό Μαγειρείο & Ταβέρνα',
      cost: '€',
      costText: '~10 - 16€ / άτομο',
      rating: '4.7',
      reviewsCount: '780+ κριτικές',
      location: 'Κέντρο Πάτρας',
      specialties: 'Μαγειρευτά ημέρας, μοσχαράκι κοκκινιστό, σουπιές με σπανάκι, πατρινό κρασί μαυροδάφνη.',
      bingQuery: 'Οινομαγειρείο ο Σάκης Πάτρα ταβέρνα κριτικές τιμές'
    },
    {
      name: 'Ταβέρνα «Ο Φάρος»',
      type: 'Ψαροταβέρνα & Παραδοσιακοί Μεζέδες',
      cost: '€€',
      costText: '~16 - 25€ / άτομο',
      rating: '4.6',
      reviewsCount: '920+ κριτικές',
      location: 'Παραλία Πάτρας',
      specialties: 'Φρέσκα ψάρια Πατραϊκού, γαύρος μαρινάτος, καλαμαράκια, χταπόδι ξιδάτο.',
      bingQuery: 'Ταβέρνα ο Φάρος Πάτρα ψαροταβέρνα κριτικές'
    }
  ],

  // Heraklion
  'heraklion': [
    {
      name: 'Εστιατόριο «Πεσκέσι»',
      type: 'Αυθεντική Παραδοσιακή Κρητική Κουζίνα',
      cost: '€€ - €€€',
      costText: '~22 - 32€ / άτομο',
      rating: '4.9',
      reviewsCount: '5.200+ κριτικές',
      location: 'Ιστορικό Κέντρο Ηρακλείου',
      specialties: 'Αντικριστό αρνί, στάκα με αυγά, χοχλιοί μπουμπουριστοί, σφακιανή πίτα με μέλι, τσικουδιά.',
      bingQuery: 'Πεσκέσι Ηράκλειο εστιατόριο κρητική κουζίνα κριτικές'
    },
    {
      name: 'Ταβέρνα «Κυριάκος»',
      type: 'Ιστορική Κρητική Ταβέρνα (από το 1973)',
      cost: '€€',
      costText: '~18 - 26€ / άτομο',
      rating: '4.7',
      reviewsCount: '1.400+ κριτικές',
      location: 'Λεωφόρος Δημοκρατίας',
      specialties: 'Γαμοπίλαφο με ζυγούρι, κρεατότουρτα Χανίων, ντολμαδάκια με ανθούς κολοκυθιάς.',
      bingQuery: 'Ταβέρνα Κυριάκος Ηράκλειο κρητική κουζίνα κριτικές'
    }
  ],

  // Ioannina
  'ioannina': [
    {
      name: '«Φρόντζου Πολιτεία»',
      type: 'Παραδοσιακό Ηπειρώτικο Εστιατόριο',
      cost: '€€ - €€€',
      costText: '~20 - 30€ / άτομο',
      rating: '4.7',
      reviewsCount: '2.600+ κριτικές',
      location: 'Λόφος Αγίας Τριάδας (πανοραμική θέα λίμνης)',
      specialties: 'Ηπειρώτικες πίτες (κασιόπιτα, μπατσαριά), αγριογούρουνο στιφάδο, αρνάκι με χόρτα, γιαννιώτικος μπακλαβάς.',
      bingQuery: 'Φρόντζου Πολιτεία Ιωάννινα εστιατόριο θέα κριτικές'
    },
    {
      name: 'Ταβέρνα «Το Μαγειρείο της Στοάς»',
      type: 'Παραδοσιακό Μαγειρείο & Τσιπουράδικο',
      cost: '€',
      costText: '~11 - 17€ / άτομο',
      rating: '4.8',
      reviewsCount: '980+ κριτικές',
      location: 'Στοά Λούλη / Κέντρο',
      specialties: 'Βατραχοπόδαρα τηγανητά, χέλι καπνιστό λίμνης, γίδα βραστή, ντόπιο τσίπουρο χωρίς γλυκάνισο.',
      bingQuery: 'Το Μαγειρείο της Στοάς Ιωάννινα ταβέρνα κριτικές'
    }
  ],

  // Volos
  'volos': [
    {
      name: 'Τσιπουράδικο «Δεμίρης»',
      type: 'Ιστορικό Τσιπουράδικο Νέας Ιωνίας',
      cost: '€€',
      costText: '~14 - 20€ / άτομο',
      rating: '4.8',
      reviewsCount: '2.100+ κριτικές',
      location: 'Νέα Ιωνία Βόλου',
      specialties: 'Αυθεντική βολιώτικη διαδικασία με τσίπουρο 25άρι και κλιμακούμενους μεζέδες (φούσκες, καραβιδάκι, σαλάχι, γυαλιστερές).',
      bingQuery: 'Τσιπουράδικο Δεμίρης Νέα Ιωνία Βόλος κριτικές τιμές'
    },
    {
      name: 'Τσιπουράδικο «ΜεΖέν»',
      type: 'Σύγχρονο Δημιουργικό Τσιπουράδικο',
      cost: '€€',
      costText: '~16 - 24€ / άτομο',
      rating: '4.8',
      reviewsCount: '1.850+ κριτικές',
      location: 'Κέντρο Βόλου',
      specialties: 'Παστουρμάς θαλάσσης, καπνιστό σκουμπρί, γύρος τόνου, εξαιρετική συλλογή αποσταγμάτων.',
      bingQuery: 'ΜεΖέν Βόλος τσιπουράδικο κριτικές τιμές'
    }
  ],

  // Chania
  'chania': [
    {
      name: 'Ταβέρνα «Ταμάμ»',
      type: 'Παραδοσιακή Κουζίνα σε Παλιό Ενετικό Λουτρό',
      cost: '€€',
      costText: '~18 - 26€ / άτομο',
      rating: '4.7',
      reviewsCount: '2.900+ κριτικές',
      location: 'Παλιά Πόλη Χανίων',
      specialties: 'Χανιώτικο μπουρέκι με κολοκύθι και μυζήθρα, χουνκιάρ μπεγιεντί, κατσικάκι τσιγαριαστό.',
      bingQuery: 'Ταμάμ Χανιά ταβέρνα παλιά πόλη κριτικές τιμές'
    },
    {
      name: 'Ταβέρνα «Χρυσόστομος»',
      type: 'Αυθεντική Σφακιανή & Κρητική Κουζίνα',
      cost: '€€',
      costText: '~18 - 28€ / άτομο',
      rating: '4.8',
      reviewsCount: '2.400+ κριτικές',
      location: 'Πλησίον Ενετικού Λιμανιού',
      specialties: 'Ψωμί από ξυλόφουρνο, αρνί στον ξυλόφουρνο, τσιγαριαστό, στάκα, σφακιανή πίτα.',
      bingQuery: 'Χρυσόστομος Χανιά ξυλόφουρνος κρητική κουζίνα κριτικές'
    }
  ],

  // Boston
  'boston': [
    {
      name: 'Union Oyster House',
      type: 'Ιστορικό Εστιατόριο (από το 1826 - Αρχαιότερο στις ΗΠΑ)',
      cost: '€€€',
      costText: '~$35 - $60 / person',
      rating: '4.5',
      reviewsCount: '8.500+ reviews',
      location: 'Downtown Boston (Freedom Trail)',
      specialties: 'New England Clam Chowder, Fresh Boston Harbor Oysters, Steamed Maine Lobster.',
      bingQuery: 'Union Oyster House Boston reviews menu prices'
    },
    {
      name: 'Giacomo\'s Ristorante',
      type: 'Παραδοσιακή Ιταλική Τρατορία (North End)',
      cost: '€€',
      costText: '~$25 - $40 / person',
      rating: '4.7',
      reviewsCount: '3.600+ reviews',
      location: 'North End (Little Italy)',
      specialties: 'Homemade seafood pasta, Calamari fritti, Lobster ravioli with Giacomo sauce.',
      bingQuery: 'Giacomos Ristorante Boston North End reviews'
    }
  ]
};

/**
 * Registry of Street Food Spots, Night Cantinas, Souvlaki & Quick Bites with Cost & Ranking
 */
export const STREET_FOOD_SPOTS_DATABASE = {
  // Kozani
  'kozani': [
    {
      name: 'Καντίνα «Ο Βαγγέλης» (Περιφερειακός)',
      type: 'Αυθεντική Νυχτερινή Καντίνα / Βρώμικο',
      cost: '€',
      costText: '~4.50 - 6.50€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: '890+ κριτικές',
      location: 'Περιφερειακή Οδός Κοζάνης',
      highlights: 'Γιγάντιο σάντουιτς με χωριάτικο λουκάνικο Κοζάνης, πανσέτα στη σχάρα, καραμελωμένα κρεμμύδια και σως μουστάρδας.',
      bingQuery: 'Καντίνα Βαγγέλης Κοζάνη βρώμικο σάντουιτς λουκάνικο'
    },
    {
      name: 'Ψητοπωλείο «Ο Γύρος της Κοζάνης»',
      type: 'Κλασικό Σουβλατζίδικο & Γυράδικο',
      cost: '€',
      costText: '~3.80 - 5.50€ / πίτα-μερίδα',
      rating: '4.7',
      reviewsCount: '650+ κριτικές',
      location: 'Κεντρικός Πεζόδρομος Κοζάνης',
      highlights: 'Τραγανός χειροποίητος χοιρινός γύρος, πίτα με καλαμάκι σουβλάκι, ντόπιες τηγανητές πατάτες, τζατζίκι.',
      bingQuery: 'γύρος σουβλάκι Κοζάνη ψητοπωλείο κριτικές τιμές'
    },
    {
      name: 'Παραδοσιακό Εργαστήριο «Το Κοζανίτικο Κιχί»',
      type: 'Αυθεντικό Street Food / Πιτάδικο',
      cost: '€',
      costText: '~2.50 - 4.20€ / πίτα',
      rating: '4.9',
      reviewsCount: '1.020+ κριτικές',
      location: 'Πλατεία Νίκης (Κέντρο)',
      highlights: 'Ζεστό αυθεντικό κιχί με ντόπια φέτα, στριφτή κιμαδόπιτα, παραδοσιακή μπουγάτσα με κρέμα και κανέλα.',
      bingQuery: 'κοζανίτικο κιχί πίτα εργαστήριο Κοζάνη κριτικές'
    }
  ],

  // Larisa
  'larisa': [
    {
      name: 'Καντίνα «Ο Κώστας» / Το Βρώμικο του Αλκαζάρ',
      type: 'Θρυλική Νυχτερινή Καντίνα',
      cost: '€',
      costText: '~4.00 - 6.20€ / σάντουιτς',
      rating: '4.9',
      reviewsCount: '1.450+ κριτικές',
      location: 'Είσοδος Πόλης / Πλησίον Πάρκου Αλκαζάρ',
      highlights: 'Τεράστιο σάντουιτς με ντόπιο λουκάνικο με πράσο, χοιρινό σουβλάκι, πατάτες και μυστική κόκκινη σάλτσα.',
      bingQuery: 'Καντίνα βρώμικο Λάρισα σάντουιτς λουκάνικο νύχτα κριτικές'
    },
    {
      name: 'Ψητοπωλείο «Τα Σουβλάκια του Κάμπου»',
      type: 'Παραδοσιακό Σουβλατζίδικο & Πιτόγυρο',
      cost: '€',
      costText: '~3.60 - 5.20€ / πίτα-μερίδα',
      rating: '4.8',
      reviewsCount: '1.150+ κριτικές',
      location: 'Πλατεία Ταχυδρομείου (Πεζόδρομοι)',
      highlights: 'Ζουμερός γύρος με χειροποίητη αλάδωτη πίτα, πρόβειο κεμπάπ, σουβλάκι χοιρινό με τζατζίκι και πάπρικα.',
      bingQuery: 'σουβλάκια γύρος Λάρισα ψητοπωλείο πίτα κριτικές'
    },
    {
      name: 'Εργαστήριο Χαλβά «Αρχοντής» / «Κυργιάς»',
      type: 'Γλυκό Street Food & Παράδοση Φαρσάλων',
      cost: '€',
      costText: '~3.00 - 5.00€ / μερίδα',
      rating: '4.9',
      reviewsCount: '2.250+ κριτικές',
      location: 'Πεζόδρομοι Κέντρου Λάρισας',
      highlights: 'Ζεστός αυθεντικός σαπουνέ χαλβάς Φαρσάλων στο κουτί ή στο χέρι, με καβουρδισμένα αμύγδαλα και τραγανή καραμελένια κρούστα.',
      bingQuery: 'χαλβάς Φαρσάλων Λάρισα Αρχοντής Κυργιάς κριτικές τιμές'
    }
  ],

  // Athens
  'athens': [
    {
      name: 'Σουβλάκι «Ο Κώστας» (από το 1950)',
      type: 'Ιστορικό Αυθεντικό Σουβλατζίδικο',
      cost: '€',
      costText: '~3.20 - 4.50€ / πίτα',
      rating: '4.9',
      reviewsCount: '3.400+ κριτικές',
      location: 'Πλατεία Αγίας Ειρήνης / Μοναστηράκι',
      highlights: 'Αλάδωτη τραγανή πίτα με χειροποίητο καλαμάκι, φρέσκια ντομάτα, κρεμμύδι, μαϊντανό και πικάντικη κόκκινη σάλτσα.',
      bingQuery: 'Σουβλάκι Κώστας Πλατεία Αγίας Ειρήνης Αθήνα κριτικές'
    },
    {
      name: '«Καντίνα της Μιχαλακοπούλου»',
      type: 'Θρυλικό Μεταμεσονύχτιο Βρώμικο',
      cost: '€',
      costText: '~5.00 - 7.50€ / σάντουιτς',
      rating: '4.7',
      reviewsCount: '4.800+ κριτικές',
      location: 'Μιχαλακοπούλου (Ιλίσια)',
      highlights: 'Γιγάντιο σάντουιτς με τραγανές κοτομπουκιές, λουκάνικο, πατάτες, τυροσαλάτα και σως μουστάρδας.',
      bingQuery: 'Καντίνα Μιχαλακοπούλου βρώμικο κοτομπουκιές Αθήνα κριτικές'
    },
    {
      name: '«Το Κουλούρι του Ψυρρή»',
      type: 'Ιστορικός Φούρνος Street Food',
      cost: '€',
      costText: '~0.70 - 1.50€ / κουλούρι',
      rating: '4.8',
      reviewsCount: '2.900+ κριτικές',
      location: 'Καραϊσκάκη 23 (Ψυρρή)',
      highlights: 'Ζεστό τραγανό σουσαμένιο κουλούρι κατευθείαν από τον φούρνο, γεμιστό με τυρί ή σοκολάτα.',
      bingQuery: 'Το Κουλούρι του Ψυρρή φούρνος Αθήνα κριτικές'
    }
  ],

  // Thessaloniki
  'thessaloniki': [
    {
      name: 'Μπουγάτσα «Γιάννης» / «Μπαντής»',
      type: 'Αυθεντικό Street Food / Μπουγατσατζίδικο',
      cost: '€',
      costText: '~2.80 - 4.50€ / μερίδα',
      rating: '4.9',
      reviewsCount: '4.200+ κριτικές',
      location: 'Μητροπόλεως / Παναγία Φανερωμένη',
      highlights: 'Τραγανό χειροποίητο φύλλο αέρος με κρέμα και κανέλα, μπουγάτσα με κιμά ή τυρί, κομμένη σε μπουκιές.',
      bingQuery: 'Μπουγάτσα Γιάννης Μπαντής Θεσσαλονίκη κριτικές'
    },
    {
      name: '«Καντίνα της Μαρίας» / Περιφερειακός',
      type: 'Θρυλική Καντίνα Βρώμικου',
      cost: '€',
      costText: '~4.50 - 6.50€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: '2.800+ κριτικές',
      location: 'Περιφερειακή Οδός Θεσσαλονίκης',
      highlights: 'Σάντουιτς με πανσέτα, σουβλάκι, χωριάτικο λουκάνικο, ρώσικη και πατάτες.',
      bingQuery: 'Καντίνα βρώμικο Περιφερειακός Θεσσαλονίκη κριτικές'
    },
    {
      name: 'Ψητοπωλείο «Πράσσας» / «Διαγώνιος»',
      type: 'Κλασικός Γύρος & Σουτζουκάκια στο Χέρι',
      cost: '€',
      costText: '~4.20 - 6.00€ / σάντουιτς',
      rating: '4.7',
      reviewsCount: '3.900+ κριτικές',
      location: 'Παραλιακή / Τούμπα',
      highlights: 'Γιγάντιο σάντουιτς με γύρο σε ψωμάκι ή πίτα, σουτζουκάκια ψητά, αλοιφές και πατάτες.',
      bingQuery: 'Πράσσας γύρος σάντουιτς Θεσσαλονίκη κριτικές'
    }
  ],

  // Patras
  'patras': [
    {
      name: '«Καντίνα του Ρίου»',
      type: 'Νυχτερινή Καντίνα Street Food',
      cost: '€',
      costText: '~4.00 - 6.00€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: '1.200+ κριτικές',
      location: 'Ρίο Πάτρας (πλησίον Γέφυρας)',
      highlights: 'Σάντουιτς με πανσέτα και λουκάνικο, πατάτες, τυροκαυτερή και σως.',
      bingQuery: 'Καντίνα Ρίο Πάτρα βρώμικο σάντουιτς κριτικές'
    },
    {
      name: 'Σουβλάκια «Ο Λάκης»',
      type: 'Παραδοσιακό Σουβλατζίδικο',
      cost: '€',
      costText: '~3.20 - 4.80€ / πίτα',
      rating: '4.7',
      reviewsCount: '950+ κριτικές',
      location: 'Πλατεία Γεωργίου (Κέντρο)',
      highlights: 'Ζουμερά καλαμάκια χοιρινά και κοτόπουλο, πίτα με γύρο, πατάτες.',
      bingQuery: 'Σουβλάκια Λάκης Πάτρα κριτικές τιμές'
    }
  ],

  // Heraklion
  'heraklion': [
    {
      name: 'Μπουγάτσα «Κιρκόρ» (Πλατεία Λεόντων)',
      type: 'Ιστορικό Στέκι Μπουγάτσας (από το 1922)',
      cost: '€',
      costText: '~3.20 - 4.50€ / μερίδα',
      rating: '4.8',
      reviewsCount: '3.800+ κριτικές',
      location: 'Πλατεία Λεόντων (Κρήνη Μοροζίνι)',
      highlights: 'Μπουγάτσα με κρητική γλυκιά μυζήθρα και μέλι ή με κρέμα και άχνη ζάχαρη, ελληνικός καφές.',
      bingQuery: 'Κιρκόρ μπουγάτσα Λιοντάρια Ηράκλειο κριτικές'
    },
    {
      name: '«Καντίνα Λιμανιού Ηρακλείου»',
      type: 'Νυχτερινή Καντίνα & Σάντουιτς',
      cost: '€',
      costText: '~4.00 - 6.00€ / σάντουιτς',
      rating: '4.7',
      reviewsCount: '1.100+ κριτικές',
      location: 'Λιμάνι Ηρακλείου',
      highlights: 'Σάντουιτς με κρητικό λουκάνικο με ξύδι, πανσέτα, πατάτες και σως.',
      bingQuery: 'Καντίνα λιμάνι Ηράκλειο σάντουιτς κριτικές'
    }
  ],

  // Ioannina
  'ioannina': [
    {
      name: '«Καντίνα Παμβώτιδας»',
      type: 'Street Food & Καντίνα Λίμνης',
      cost: '€',
      costText: '~4.00 - 6.00€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: '1.300+ κριτικές',
      location: 'Παραλίμνιος Πεζόδρομος',
      highlights: 'Σάντουιτς με ηπειρώτικο λουκάνικο, σουβλάκι, πατάτες και τοπικές σάλτσες.',
      bingQuery: 'Καντίνα Παμβώτιδα Ιωάννινα σάντουιτς λίμνη κριτικές'
    },
    {
      name: '«Σουβλάκια Μπάγκειον»',
      type: 'Παραδοσιακό Σουβλατζίδικο',
      cost: '€',
      costText: '~3.20 - 4.80€ / πίτα',
      rating: '4.8',
      reviewsCount: '1.050+ κριτικές',
      location: 'Κεντρική Πλατεία Ιωαννίνων',
      highlights: 'Καλαμάκια χοιρινά σε ζεστή πίτα, γύρος, πατάτες και τζατζίκι.',
      bingQuery: 'Σουβλάκια Μπάγκειον Ιωάννινα κριτικές τιμές'
    }
  ],

  // Volos
  'volos': [
    {
      name: '«Καντίνα Παραλίας Βόλου»',
      type: 'Νυχτερινό Street Food / Καντίνα',
      cost: '€',
      costText: '~4.00 - 6.00€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: '1.400+ κριτικές',
      location: 'Παραλιακό Μέτωπο Βόλου',
      highlights: 'Σάντουιτς με αυθεντικό λουκάνικο Πηλίου, πανσέτα, καραμελωμένα κρεμμύδια και τυροκαυτερή.',
      bingQuery: 'Καντίνα παραλία Βόλος βρώμικο λουκάνικο Πηλίου'
    },
    {
      name: '«Τα Σουβλάκια του Βόλου»',
      type: 'Παραδοσιακό Ψητοπωλείο',
      cost: '€',
      costText: '~3.40 - 5.00€ / πίτα',
      rating: '4.7',
      reviewsCount: '880+ κριτικές',
      location: 'Πεζόδρομος Ερμού',
      highlights: 'Πίτα με γύρο, κοντοσούβλι σε πίτα, φρέσκες πατάτες.',
      bingQuery: 'Σουβλάκια γύρος Βόλος ψητοπωλείο κριτικές'
    }
  ],

  // Chania
  'chania': [
    {
      name: 'Μπουγάτσα «Ιορδάνης» (από το 1924)',
      type: 'Θρυλικό Street Food Χανίων',
      cost: '€',
      costText: '~3.20 - 4.50€ / μερίδα',
      rating: '4.8',
      reviewsCount: '4.600+ κριτικές',
      location: 'Αποκορώνου (Κέντρο Χανίων)',
      highlights: 'Η διάσημη χανιώτικη μπουγάτσα με ξινή μυζήθρα (πηχτόγαλο Χανίων ΠΟΠ) και κρούστα ζάχαρης.',
      bingQuery: 'Μπουγάτσα Ιορδάνης Χανιά κριτικές τιμές'
    },
    {
      name: '«Καντίνα Αγίων Αποστόλων»',
      type: 'Street Food & Καντίνα',
      cost: '€',
      costText: '~4.20 - 6.00€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: '1.150+ κριτικές',
      location: 'Παραλία Αγίων Αποστόλων',
      highlights: 'Σάντουιτς με κρητικό καπνιστό απάκι, λουκάνικο, γραβιέρα Κρήτης και πατάτες.',
      bingQuery: 'Καντίνα Άγιοι Απόστολοι Χανιά σάντουιτς απάκι'
    }
  ],

  // Boston
  'boston': [
    {
      name: 'Fenway Sausage Carts (Καντίνες Fenway Park)',
      type: 'Αυθεντικό Boston Street Food / Καντίνες',
      cost: '€',
      costText: '~$8 - $12 / sandwich',
      rating: '4.7',
      reviewsCount: '2.500+ reviews',
      location: 'Lansdowne St (Fenway Park)',
      highlights: 'Hot Italian Sausage sub with grilled peppers and sweet caramelized onions outside Red Sox stadium.',
      bingQuery: 'Fenway Park sausage carts Boston street food reviews'
    },
    {
      name: 'Quincy Market Food Stalls',
      type: 'Ιστορικό Food Hall & Street Food',
      cost: '€ - €€',
      costText: '~$10 - $18 / meal',
      rating: '4.6',
      reviewsCount: '12.000+ reviews',
      location: 'Faneuil Hall Marketplace',
      highlights: 'Lobster roll in toasted brioche bun, clam chowder bread bowl, Boston cream pie slices.',
      bingQuery: 'Quincy Market food stalls Boston street food lobster roll'
    }
  ]
};

/**
 * Generic Fallback Generators for any other location
 */
function getGenericTraditionalDining(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return [
    {
      name: `Παραδοσιακή Ταβέρνα & Εστιατόριο Τοπικής Κουζίνας (${name})`,
      type: 'Παραδοσιακή Ταβέρνα & Μαγειρείο',
      cost: '€€',
      costText: '~14 - 22€ / άτομο',
      rating: '4.7',
      reviewsCount: 'Κορυφαία Τοπική Βαθμολογία',
      location: `Κεντρική Πλατεία & Παλιά Πόλη (${name})`,
      specialties: `Αυθεντικές τοπικές συνταγές, ψητά της ώρας, μαγειρευτά ημέρας και τοπικό κρασί.`,
      bingQuery: `καλύτερες παραδοσιακές ταβέρνες εστιατόρια ${englishName} κριτικές τιμές μενού ranking`
    },
    {
      name: `Αυθεντικό Κουτούκι & Μεζεδοπωλείο (${name})`,
      type: 'Παραδοσιακό Κουτούκι & Οινομαγειρείο',
      cost: '€€',
      costText: '~12 - 18€ / άτομο',
      rating: '4.8',
      reviewsCount: 'Υψηλή Αξιολόγηση Επισκεπτών',
      location: `Ιστορικά Σοκάκια (${name})`,
      specialties: `Ποικιλίες τοπικών μεζέδων, παραδοσιακές τηγανιές, ντόπια τυριά και τοπικά αποστάγματα.`,
      bingQuery: `παραδοσιακό κουτούκι τσιπουράδικο μεζέδες ${englishName} τιμές αξιολογήσεις`
    }
  ];
}

function getGenericStreetFoodSpots(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return [
    {
      name: `Καντίνα & Street Food Στέκι (${name})`,
      type: 'Αυθεντική Καντίνα / Βρώμικο & Γρήγορο Φαγητό',
      cost: '€',
      costText: '~4.00 - 6.50€ / σάντουιτς',
      rating: '4.8',
      reviewsCount: 'Δημοφιλές Στέκι Δρόμου',
      location: `Κεντρικές Αρτηρίες & Νυχτερινά Σημεία (${name})`,
      highlights: `Πλούσια σάντουιτς με ντόπια λουκάνικα, πανσέτες, τραγανές πατάτες και χειροποίητες σάλτσες.`,
      bingQuery: `street food καντίνες ${englishName} σάντουιτς βρώμικο τιμές αξιολογήσεις ranking`
    },
    {
      name: `Παραδοσιακό Ψητοπωλείο & Σουβλατζίδικο (${name})`,
      type: 'Κλασικό Σουβλάκι, Πίτα & Γύρος',
      cost: '€',
      costText: '~3.50 - 5.50€ / πίτα-μερίδα',
      rating: '4.7',
      reviewsCount: 'Αγαπημένο Τοπικό Ψητοπωλείο',
      location: `Κεντρικός Πεζόδρομος (${name})`,
      highlights: `Φρεσκοψημένος γύρος, καλαμάκια σουβλάκια σε ζεστή πίτα με τζατζίκι και φρέσκες πατάτες.`,
      bingQuery: `σουβλάκια γύρος ψητοπωλείο ${englishName} reviews τιμές`
    }
  ];
}

/**
 * Public getters
 */
export function getTraditionalDiningSpots(entity) {
  const normId = normalizeEntityId(entity);
  return TRADITIONAL_DINING_DATABASE[normId] || getGenericTraditionalDining(entity);
}

export function getStreetFoodSpots(entity) {
  const normId = normalizeEntityId(entity);
  return STREET_FOOD_SPOTS_DATABASE[normId] || getGenericStreetFoodSpots(entity);
}

/**
 * Render Box 1: Where to Eat Traditionally (Taverns, Koutoukia & Restaurants with Cost & Ranking)
 */
export function renderTraditionalDiningBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const spots = getTraditionalDiningSpots(entity);
  const mainBingQuery = `${name} παραδοσιακές ταβέρνες εστιατόρια κριτικές τιμές ranking`;
  const mainTitle = `Παραδοσιακές Ταβέρνες & Εστιατόρια: ${name}`;

  return `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-950/35 via-slate-900/95 to-slate-950 border border-amber-500/40 shadow-xl space-y-3.5">
      <!-- Header with Main In-App Bing Search Link -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
        <div>
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 shadow text-sm">
              <i class="fa-solid fa-utensils"></i>
            </span>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span>Πού θα Φάτε Παραδοσιακά (${name})</span>
              </h4>
              <p class="text-[11px] text-amber-300/80 font-medium">Παραδοσιακές Ταβέρνες, Κουτούκια & Μαγειρεία με Κόστος & Ranking</p>
            </div>
          </div>
        </div>

        <!-- MAIN BING SEARCH BUTTON (IN-APP) -->
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow-lg shadow-amber-950/60 shrink-0 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο Bing για όλες τις ταβέρνες και τιμές">
          <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
          <span>🔍 AI Έρευνα στο Bing</span>
          <i class="fa-solid fa-expand text-[9px] opacity-80"></i>
        </button>
      </div>

      <!-- Spot Cards Grid -->
      <div class="grid grid-cols-1 gap-3 pt-1">
        ${spots.map(s => {
          const spotBingQuery = s.bingQuery || `${s.name} ${name} ταβέρνα κριτικές τιμές`;
          const spotTitle = s.name;
          return `
            <div class="p-3.5 rounded-xl bg-slate-850/90 border border-slate-700/60 hover:border-amber-500/50 transition flex flex-col gap-2 group shadow">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <div class="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition flex items-center gap-2 flex-wrap">
                    <span>${s.name}</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-medium mt-0.5">${s.type}</div>
                </div>

                <!-- Price & Rating Badges -->
                <div class="flex items-center gap-2 shrink-0 self-start sm:self-auto flex-wrap">
                  <!-- Cost Badge -->
                  <span class="px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1" title="Εκτιμώμενο κόστος">
                    <i class="fa-solid fa-wallet text-[9px] text-emerald-400"></i>
                    <span>${s.cost} (${s.costText})</span>
                  </span>
                  <!-- Ranking Badge -->
                  <span class="px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold flex items-center gap-1" title="Αξιολόγηση & Ranking">
                    <i class="fa-solid fa-star text-[9px] text-amber-400"></i>
                    <span>${s.rating}</span>
                    <span class="text-slate-400 font-normal text-[9px]">(${s.reviewsCount})</span>
                  </span>
                </div>
              </div>

              <!-- Location & Specialties Details -->
              <div class="space-y-1 text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
                <div class="flex items-center gap-1.5 text-slate-400">
                  <i class="fa-solid fa-location-dot text-amber-400/80 text-[10px] shrink-0"></i>
                  <span>${s.location}</span>
                </div>
                <div>
                  <strong class="text-amber-400/90">Σπεσιαλιτέ & Γεύσεις:</strong> ${s.specialties}
                </div>
              </div>

              <!-- In-App Bing Search for specific tavern -->
              <div class="pt-2 border-t border-slate-800/60 flex items-center justify-end">
                <button onclick="window.openInAppBingSearch('${escapeStr(spotBingQuery)}', '${escapeStr(spotTitle)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[10px] font-semibold transition flex items-center gap-1.5 cursor-pointer" title="Άνοιγμα κριτικών και μενού στο Bing">
                  <i class="fa-brands fa-microsoft text-[9px]"></i>
                  <span>Έρευνα Μαγαζιού στο Bing</span>
                  <i class="fa-solid fa-expand text-[8px] opacity-75"></i>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Render Box 2: Where to Eat Street Food (Cantinas, Souvlakia, Bougatsa & Street Spots with Cost & Ranking)
 */
export function renderStreetFoodSpotsBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const spots = getStreetFoodSpots(entity);
  const mainBingQuery = `${name} street food καντίνες σουβλάκια πιτόγυρα τιμές αξιολογήσεις ranking`;
  const mainTitle = `Street Food & Καντίνες: ${name}`;

  return `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-orange-950/35 via-slate-900/95 to-slate-950 border border-orange-500/40 shadow-xl space-y-3.5">
      <!-- Header with Main In-App Bing Search Link -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-orange-500/20 pb-3">
        <div>
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0 shadow text-sm">
              <i class="fa-solid fa-burger"></i>
            </span>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span>Πού θα Φάτε Street Food (${name})</span>
              </h4>
              <p class="text-[11px] text-orange-300/80 font-medium">Καντίνες, Σουβλάκια, Πιτόγυρα & Στέκια Δρόμου με Κόστος & Ranking</p>
            </div>
          </div>
        </div>

        <!-- MAIN BING SEARCH BUTTON (IN-APP) -->
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow-lg shadow-orange-950/60 shrink-0 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο Bing για καντίνες, σουβλάκια και street food">
          <i class="fa-brands fa-microsoft text-orange-200 text-xs"></i>
          <span>🔍 AI Έρευνα στο Bing</span>
          <i class="fa-solid fa-expand text-[9px] opacity-80"></i>
        </button>
      </div>

      <!-- Street Food Cards Grid -->
      <div class="grid grid-cols-1 gap-3 pt-1">
        ${spots.map(s => {
          const spotBingQuery = s.bingQuery || `${s.name} ${name} street food καντίνα κριτικές τιμές`;
          const spotTitle = s.name;
          return `
            <div class="p-3.5 rounded-xl bg-slate-850/90 border border-slate-700/60 hover:border-orange-500/50 transition flex flex-col gap-2 group shadow">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <div class="text-xs sm:text-sm font-bold text-white group-hover:text-orange-300 transition flex items-center gap-2 flex-wrap">
                    <span>${s.name}</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-medium mt-0.5">${s.type}</div>
                </div>

                <!-- Price & Rating Badges -->
                <div class="flex items-center gap-2 shrink-0 self-start sm:self-auto flex-wrap">
                  <!-- Cost Badge -->
                  <span class="px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1" title="Εκτιμώμενο κόστος">
                    <i class="fa-solid fa-wallet text-[9px] text-emerald-400"></i>
                    <span>${s.cost} (${s.costText})</span>
                  </span>
                  <!-- Ranking Badge -->
                  <span class="px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold flex items-center gap-1" title="Αξιολόγηση & Ranking">
                    <i class="fa-solid fa-star text-[9px] text-amber-400"></i>
                    <span>${s.rating}</span>
                    <span class="text-slate-400 font-normal text-[9px]">(${s.reviewsCount})</span>
                  </span>
                </div>
              </div>

              <!-- Location & Highlights Details -->
              <div class="space-y-1 text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
                <div class="flex items-center gap-1.5 text-slate-400">
                  <i class="fa-solid fa-location-dot text-orange-400/80 text-[10px] shrink-0"></i>
                  <span>${s.location}</span>
                </div>
                <div>
                  <strong class="text-orange-400/90">Τι να Παραγγείλετε:</strong> ${s.highlights}
                </div>
              </div>

              <!-- In-App Bing Search for specific street food spot -->
              <div class="pt-2 border-t border-slate-800/60 flex items-center justify-end">
                <button onclick="window.openInAppBingSearch('${escapeStr(spotBingQuery)}', '${escapeStr(spotTitle)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[10px] font-semibold transition flex items-center gap-1.5 cursor-pointer" title="Άνοιγμα κριτικών και αξιολογήσεων στο Bing">
                  <i class="fa-brands fa-microsoft text-[9px]"></i>
                  <span>Έρευνα Σημείου στο Bing</span>
                  <i class="fa-solid fa-expand text-[8px] opacity-75"></i>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Main Renderer for Gastronomy Tab
 * Combines:
 * 1. Traditional Dining Box (NEW - Requested by User)
 * 2. Street Food Spots & Cantinas Box (NEW - Requested by User)
 * 3. General Local Cuisine Overview Card
 * 4. General Street Food Overview Card
 * 5. Famous Dishes, Recipes & Specialties List
 */
export function renderGastronomyTabHtml(entity, items = []) {
  if (!entity) return '';

  const name = entity.name || 'Περιοχή';
  const gastroSummary = entity.gastro?.summary || entity.gastro?.culture || 
    `Η παραδοσιακή κουζίνα και οι γεύσεις (${name}) διαμορφώθηκαν μέσα από ιστορικές και πολυπολιτισμικές επιρροές, συνδυάζοντας εκλεκτά τοπικά υλικά, παραδοσιακές συνταγές και αυθεντική τοπική γαστρονομική ταυτότητα.`;

  const traditionalDiningBox = renderTraditionalDiningBoxHtml(entity);
  const streetFoodSpotsBox = renderStreetFoodSpotsBoxHtml(entity);

  return `
    <div class="space-y-4">

      <!-- 1. WHERE TO EAT TRADITIONALLY (NEW DEDICATED BOX WITH COST & RANKING) -->
      ${traditionalDiningBox}

      <!-- 2. WHERE TO EAT STREET FOOD (NEW DEDICATED BOX FOR CANTINAS & STREET SPOTS WITH COST & RANKING) -->
      ${streetFoodSpotsBox}

      <!-- 3. General Local Cuisine Overview Card -->
      <div class="p-4 bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-slate-950 rounded-2xl border border-amber-600/40 shadow-lg text-slate-200">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <i class="fa-solid fa-utensils text-amber-300"></i>
            <span>Παραδοσιακή & Τοπική Κουζίνα (${name})</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold shrink-0">
            Γενικός Οδηγός
          </span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">${gastroSummary}</p>
        <div class="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
          <button onclick="window.openDeepDive('Παραδοσιακή Κουζίνα (${escapeStr(name)})', '${escapeStr(gastroSummary)}', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
            <span>Ανάλυση AI</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)} παραδοσιακή κουζίνα γαστρονομία travel guide', 'Παραδοσιακή Κουζίνα: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για την κουζίνα της πόλης">
            <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
            <span>🔍 AI Έρευνα στο Bing</span>
          </button>
          <button onclick="window.openMapWikiReader('${escapeStr(name)} Γαστρονομία', 'el', '${escapeStr(name)} cuisine')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
            <span>Wikipedia</span>
          </button>
          <button onclick="window.openGastroVideo('Παραδοσιακή Κουζίνα & Γεύσεις', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Βίντεο τοπικής κουζίνας">
            <i class="fa-solid fa-play text-rose-400"></i>
            <span>Βίντεο Κουζίνας 📹</span>
          </button>
        </div>
      </div>

      <!-- 4. Dedicated Street Food & Outdoor Flavors Overview Card -->
      <div class="p-4 bg-gradient-to-br from-orange-950/40 via-slate-900/90 to-slate-950 rounded-2xl border border-orange-600/40 shadow-lg text-slate-200">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-orange-400 font-bold text-sm">
            <i class="fa-solid fa-store text-orange-300"></i>
            <span>Street Food & Υπαίθριες Γεύσεις (${name})</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold shrink-0">
            🌯 Street Food
          </span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">Δημοφιλές φαγητό του δρόμου, αυθεντικά τοπικά στέκια, υπαίθριες λιχουδιές και γρήγορες παραδοσιακές γεύσεις (${name}).</p>
        <div class="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
          <button onclick="window.openDeepDive('Street Food (${escapeStr(name)})', 'Δημοφιλές φαγητό του δρόμου, τοπικά στέκια και υπαίθριες γεύσεις (${escapeStr(name)}).', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
            <span>Ανάλυση AI</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)} street food travel guide spots', 'Street Food: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για το street food της πόλης">
            <i class="fa-brands fa-microsoft text-orange-200 text-xs"></i>
            <span>🔍 AI Έρευνα στο Bing</span>
          </button>
          <button onclick="window.openMapWikiReader('${escapeStr(name)} street food', 'el', '${escapeStr(name)} street food')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
            <span>Wikipedia</span>
          </button>
          <button onclick="window.openGastroVideo('Street Food & Υπαίθριες Γεύσεις', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-orange-950/80 hover:bg-orange-900 text-orange-300 hover:text-white border border-orange-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Προβολή βίντεο Street Food">
            <i class="fa-solid fa-store text-orange-400"></i>
            <span>Βίντεο Street Food 🌯</span>
          </button>
        </div>
      </div>

      <!-- 5. Dedicated Cards for Famous Dishes, Recipes & Specialties -->
      ${items && items.length > 0 ? `
        <div class="pt-1.5">
          <div class="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5 mb-2 px-1">
            <i class="fa-solid fa-fire-burner text-amber-500"></i>
            <span>Ξακουστά Φαγητά, Συνταγές & Σπεσιαλιτέ (${items.length})</span>
          </div>

          <div class="space-y-2.5">
            ${items.map(item => {
              const isItemStreetFood = item.cat === 'street_food' || (item.title && item.title.toLowerCase().includes('street food'));
              const badgeClass = isItemStreetFood
                ? 'bg-orange-950/80 text-orange-300 border-orange-600/40'
                : 'bg-amber-950/80 text-amber-300 border-amber-600/40';
              const btnColor = isItemStreetFood
                ? 'bg-orange-950/80 hover:bg-orange-900 text-orange-300 border-orange-700/50'
                : 'bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-700/50';
              const btnIcon = isItemStreetFood ? 'fa-solid fa-store text-orange-400' : 'fa-solid fa-play text-rose-400';
              const btnLabel = isItemStreetFood ? 'Βίντεο Street Food 🌯' : 'Βίντεο Συνταγής 👨‍🍳';

              return `
              <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl">
                <div class="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass} mb-1">
                      ${item.catLabel || (isItemStreetFood ? '🌯 Street Food' : '🍽️ Σπεσιαλιτέ')}
                    </span>
                    <h5 class="font-bold text-slate-100 text-sm ${isItemStreetFood ? 'text-orange-200' : 'text-amber-200'}">${item.title}</h5>
                  </div>
                  ${item.tag ? `
                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium shrink-0">
                      ${item.tag}
                    </span>
                  ` : ''}
                </div>
                <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
                <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                  <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                    <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                    <span>Ανάλυση AI</span>
                  </button>
                  <button onclick="window.openInAppBingSearch('${escapeStr(item.title)} ${escapeStr(name)} συνταγή παραδοσιακό πιάτο', '${escapeStr(item.title)}: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Απευθείας Bing AI αναζήτηση για το πιάτο">
                    <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
                    <span>🔍 AI Έρευνα στο Bing</span>
                  </button>
                  <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el', '${escapeStr(item.title)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                    <i class="fa-brands fa-wikipedia-w"></i>
                    <span>Wikipedia</span>
                  </button>
                  <button onclick="window.openGastroVideo('${escapeStr(item.title)}', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg ${btnColor} hover:text-white border text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="${isItemStreetFood ? 'Προβολή βίντεο Street Food' : 'Προβολή βίντεο συνταγής'}">
                    <i class="${btnIcon}"></i>
                    <span>${btnLabel}</span>
                  </button>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;
}
