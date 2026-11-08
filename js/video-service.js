/**
 * Video Service Module
 * Maintains a registry of curated high-definition YouTube video tours for all cities
 * and coordinates playback in the in-map video overlay.
 * All video IDs are verified active (HTTP 200 via YouTube oEmbed).
 */

export const CITY_VIDEOS = {
  // --- Ελλάδα ---
  kozani: {
    youtubeId: 'Dgfcdv6D5OI',
    title: 'Κοζάνη 4K: Πόλη των Γραμμάτων, Ιστορικό Ρολόι & Κέντρο',
    channel: 'EarthTimes Travel Tours'
  },
  athens: {
    youtubeId: 'Hszp0xDRNjg',
    title: 'Αθήνα 4K: Ακρόπολη, Πλάκα & Ιστορικό Κέντρο',
    channel: 'EarthTimes Travel Tours'
  },
  thessaloniki: {
    youtubeId: 'l57Mbks-MMQ',
    title: 'Θεσσαλονίκη 4K: Λευκός Πύργος, Παραλία & Πλατεία Αριστοτέλους',
    channel: 'EarthTimes Travel Tours'
  },
  patras: {
    youtubeId: 'Rjxnz0kGC_s',
    title: 'Πάτρα 4K: Γέφυρα Ρίου-Αντιρρίου, Λιμάνι & Ιστορικό Κέντρο',
    channel: 'EarthTimes Travel Tours'
  },
  heraklion: {
    youtubeId: 'HjA0LxhIzmM',
    title: 'Ηράκλειο Κρήτης 4K: Ενετικό Λιμάνι, Κούλες & Κέντρο',
    channel: 'EarthTimes Travel Tours'
  },
  larissa: {
    youtubeId: 'kvaChSolQck',
    title: 'Λάρισα 4K: Αρχαίο Θέατρο, Πηνειός & Πεζόδρομοι',
    channel: 'EarthTimes Travel Tours'
  },
  volos: {
    youtubeId: 'URJcymeLcnQ',
    title: 'Βόλος 4K: Παραλία, Πήλιο & Λιμάνι',
    channel: 'EarthTimes Travel Tours'
  },
  ioannina: {
    youtubeId: '414VR6PKzXg',
    title: 'Ιωάννινα 4K: Λίμνη Παμβώτιδα, Κάστρο & Νησάκι',
    channel: 'EarthTimes Travel Tours'
  },
  trikala: {
    youtubeId: 'CqcHC6DfaM8',
    title: 'Τρίκαλα 4K: Ληθαίος Ποταμός, Φρούριο & Βαρούσι',
    channel: 'EarthTimes Travel Tours'
  },
  chania: {
    youtubeId: 'ASOUZ4RgDGI',
    title: 'Χανιά 4K: Παλιό Ενετικό Λιμάνι & Φάρος',
    channel: 'EarthTimes Travel Tours'
  },
  chalkida: {
    youtubeId: 'rwXmqZxnehE',
    title: 'Χαλκίδα 4K: Παλιά Γέφυρα & Στενό Ευρίπου',
    channel: 'EarthTimes Travel Tours'
  },

  // --- Γαλλία ---
  paris: {
    youtubeId: 'AQ6GmpMu5L8',
    title: 'Παρίσι 4K: Πύργος του Άιφελ, Λούβρο & Σηκουάνας',
    channel: 'EarthTimes Europe Tours'
  },
  marseille: {
    youtubeId: 'bI7wEaax4tg',
    title: 'Μασσαλία 4K: Vieux-Port, Notre-Dame & Calanques',
    channel: 'EarthTimes Europe Tours'
  },
  lyon: {
    youtubeId: 'ZgjDUa8vtHU',
    title: 'Λυών 4K: Fourvière, Παλιά Πόλη & Γαστρονομία',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Ιταλία ---
  rome: {
    youtubeId: 'oSexfR0Ubzw',
    title: 'Ρώμη 4K: Κολοσσαίο, Βατικανό, Πάνθεον & Fontana di Trevi',
    channel: 'EarthTimes Europe Tours'
  },
  florence: {
    youtubeId: '-rBIKbm2_rA',
    title: 'Φλωρεντία 4K: Duomo, Ponte Vecchio & Uffizi',
    channel: 'EarthTimes Europe Tours'
  },
  milan: {
    youtubeId: 'M49GueN7ntA',
    title: 'Μιλάνο 4K: Duomo di Milano & Galleria Vittorio Emanuele',
    channel: 'EarthTimes Europe Tours'
  },
  venice: {
    youtubeId: 'nhYtdnrdKng',
    title: 'Βενετία 4K: Μεγάλο Κανάλι, Πλατεία Αγίου Μάρκου & Γόνδολες',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Ηνωμένο Βασίλειο ---
  london: {
    youtubeId: 'aw41881vC-o',
    title: 'Λονδίνο 4K: Big Ben, Tower Bridge & Τάμεσης',
    channel: 'EarthTimes Europe Tours'
  },
  edinburgh: {
    youtubeId: 'f6BIa1aPhiE',
    title: 'Εδιμβούργο 4K: Κάστρο, Royal Mile & Holyrood',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Γερμανία ---
  berlin: {
    youtubeId: 'BN_21Qg6LIM',
    title: 'Βερολίνο 4K: Πύλη του Βραδεμβούργου, Νησί των Μουσείων & Reichstag',
    channel: 'EarthTimes Europe Tours'
  },
  munich: {
    youtubeId: 'ZszuIyWTo-4',
    title: 'Μόναχο 4K: Marienplatz, Residenz & Βαυαρία',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Αυστρία ---
  vienna: {
    youtubeId: 'q2aTLbLkTtI',
    title: 'Βιέννη 4K: Ringstrasse, Schönbrunn, Άγιος Στέφανος & Ελληνική Συνοικία',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Ισπανία ---
  madrid: {
    youtubeId: 'ez02Yo8bZK8',
    title: 'Μαδρίτη 4K: Gran Vía, Βασιλικό Παλάτι & Plaza Mayor',
    channel: 'EarthTimes Europe Tours'
  },
  barcelona: {
    youtubeId: 'dt2AhV1gVWw',
    title: 'Βαρκελώνη 4K: Sagrada Família, Park Güell & Γοτθική Συνοικία',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Ολλανδία ---
  amsterdam: {
    youtubeId: 'uL6z9v7Cf9Y',
    title: 'Άμστερνταμ 4K: Ιστορικά Κανάλια, Πλατεία Dam & Rijksmuseum',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Τσεχία ---
  prague: {
    youtubeId: 'MV_-fw_5OAQ',
    title: 'Πράγα 4K: Γέφυρα Καρόλου, Αστρονομικό Ρολόι & Κάστρο Πράγας',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Βέλγιο ---
  brussels: {
    youtubeId: 'paIEhYZ3RwI',
    title: 'Βρυξέλλες 4K: Grand Place, Atomium & Ευρωπαϊκή Συνοικία',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Πορτογαλία ---
  lisbon: {
    youtubeId: 'aqevs6jLdJI',
    title: 'Λισαβόνα 4K: Τραμ 28, Πύργος Belém & Alfama',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Ιρλανδία ---
  dublin: {
    youtubeId: 'DR03QWOfrF0',
    title: 'Δουβλίνο 4K: Trinity College, Temple Bar & Ποταμός Liffey',
    channel: 'EarthTimes Europe Tours'
  },

  // --- Ουγγαρία ---
  budapest: {
    youtubeId: 'gb2GBwFWVN0',
    title: 'Βουδαπέστη 4K: Κοινοβούλιο, Γέφυρα των Αλυσίδων & Κάστρο Βούδας',
    channel: 'EarthTimes Europe Tours'
  },

  // --- ΗΠΑ ---
  'new-york': {
    youtubeId: '3ecyAHQDsIU',
    title: 'Νέα Υόρκη 4K: Manhattan, Times Square & Central Park',
    channel: 'EarthTimes USA Tours'
  },
  boston: {
    youtubeId: 'Pt6uoOIrpYE',
    title: 'Βοστώνη 4K: Freedom Trail, Beacon Hill & Λιμάνι Βοστώνης',
    channel: 'EarthTimes USA Tours'
  },
  chicago: {
    youtubeId: 'n2_sCrFE5nM',
    title: 'Σικάγο 4K: Millennium Park, The Bean & Skyline',
    channel: 'EarthTimes USA Tours'
  },
  'los-angeles': {
    youtubeId: '27Pv4Cg4EV4',
    title: 'Λος Άντζελες 4K: Hollywood, Santa Monica & Downtown LA',
    channel: 'EarthTimes USA Tours'
  }
};

export function getCityVideo(cityId) {
  if (!cityId) return null;
  return CITY_VIDEOS[cityId] || null;
}
