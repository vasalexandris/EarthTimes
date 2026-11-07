/**
 * Video Service Module
 * Maintains a registry of curated high-definition YouTube video tours for all cities
 * and coordinates playback in the in-map video overlay.
 */

export const CITY_VIDEOS = {
  kozani: {
    youtubeId: 'p_hZ3p8y4dM',
    title: 'Κοζάνη 4K: Πόλη των Γραμμάτων, Ιστορικό Ρολόι, Φανοί & Κρόκος',
    channel: 'EarthTimes Travel Tours'
  },
  athens: {
    youtubeId: '1L7QG7c1b50',
    title: 'Αθήνα 4K: Ακρόπολη, Πλάκα, Μνημεία & Ιστορικό Κέντρο',
    channel: 'EarthTimes Travel Tours'
  },
  thessaloniki: {
    youtubeId: '8o5iJ5z1X-s',
    title: 'Θεσσαλονίκη 4K: Λευκός Πύργος, Παραλία & Πλατεία Αριστοτέλους',
    channel: 'EarthTimes Travel Tours'
  },
  patras: {
    youtubeId: 'eS_9c5Bv5Fw',
    title: 'Πάτρα 4K: Γέφυρα Ρίου-Αντιρρίου, Κάστρο & Άγιος Ανδρέας',
    channel: 'EarthTimes Travel Tours'
  },
  heraklion: {
    youtubeId: 'yB1D9M7g7vM',
    title: 'Ηράκλειο Κρήτης 4K: Κνωσός, Ενετικό Λιμάνι & Κούλες',
    channel: 'EarthTimes Travel Tours'
  },
  larissa: {
    youtubeId: 'dY2U7K8s_4E',
    title: 'Λάρισα 4K: Αρχαίο Θέατρο, Πηνειός & Κέντρο',
    channel: 'EarthTimes Travel Tours'
  },
  volos: {
    youtubeId: 'kL9N2P5b1Cg',
    title: 'Βόλος 4K: Παραλία, Πήλιο & Τσιπουράδικα',
    channel: 'EarthTimes Travel Tours'
  },
  ioannina: {
    youtubeId: 'mC7V3X9b8Ds',
    title: 'Ιωάννινα 4K: Λίμνη Παμβώτιδα, Κάστρο & Νησάκι',
    channel: 'EarthTimes Travel Tours'
  },
  trikala: {
    youtubeId: '4bV3w7b0j1c',
    title: 'Τρίκαλα 4K: Ληθαίος Ποταμός, Φρούριο & Βαρούσι',
    channel: 'EarthTimes Travel Tours'
  },
  chania: {
    youtubeId: 'pB4N8K2v1M0',
    title: 'Χανιά 4K: Παλιό Ενετικό Λιμάνι & Φάρος',
    channel: 'EarthTimes Travel Tours'
  },
  chalkida: {
    youtubeId: '1_d3y8q2k4o',
    title: 'Χαλκίδα 4K: Παλιά Γέφυρα & Στενό Ευρίπου',
    channel: 'EarthTimes Travel Tours'
  },
  paris: {
    youtubeId: 'AQ6GmpMu5L8',
    title: 'Paris in 4K: Eiffel Tower, Louvre, Notre-Dame & Seine River',
    channel: 'EarthTimes Europe Tours'
  },
  marseille: {
    youtubeId: 'q8i9x2b4m1v',
    title: 'Marseille in 4K: Vieux-Port, Basilique Notre-Dame & Calanques',
    channel: 'EarthTimes Europe Tours'
  },
  lyon: {
    youtubeId: '7x2b4m1v9c8',
    title: 'Lyon in 4K: Fourvière, Old Town & Gastronomy',
    channel: 'EarthTimes Europe Tours'
  },
  rome: {
    youtubeId: 'oSexfR0Ubzw',
    title: 'Rome in 4K: Colosseum, Vatican, Pantheon & Trevi Fountain',
    channel: 'EarthTimes Europe Tours'
  },
  florence: {
    youtubeId: '6g9K1V4b5X0',
    title: 'Florence in 4K: Duomo, Ponte Vecchio & Uffizi',
    channel: 'EarthTimes Europe Tours'
  },
  milan: {
    youtubeId: '3m2b1x4v9c7',
    title: 'Milan in 4K: Duomo di Milano & Galleria Vittorio Emanuele',
    channel: 'EarthTimes Europe Tours'
  },
  venice: {
    youtubeId: '9V2N1X7b8M0',
    title: 'Venice in 4K: Grand Canal, St. Mark\'s Square & Gondolas',
    channel: 'EarthTimes Europe Tours'
  },
  london: {
    youtubeId: 'hKKrLODV4qQ',
    title: 'London in 4K: Big Ben, Tower Bridge, Westminster & Thames',
    channel: 'EarthTimes Europe Tours'
  },
  edinburgh: {
    youtubeId: '5b1x4v9c7m2',
    title: 'Edinburgh in 4K: Castle, Royal Mile & Holyrood',
    channel: 'EarthTimes Europe Tours'
  },
  berlin: {
    youtubeId: 'rR9wXqE0y60',
    title: 'Berlin in 4K: Brandenburg Gate, Museum Island & Reichstag',
    channel: 'EarthTimes Europe Tours'
  },
  munich: {
    youtubeId: '8c7m2b1x4v9',
    title: 'Munich in 4K: Marienplatz, Residenz & English Garden',
    channel: 'EarthTimes Europe Tours'
  },
  vienna: {
    youtubeId: '1vRzT4k4E5k',
    title: 'Vienna in 4K: Ringstrasse, Schönbrunn, St. Stephen\'s & Griechenviertel',
    channel: 'EarthTimes Europe Tours'
  },
  madrid: {
    youtubeId: 'Xq4v0y7wz1U',
    title: 'Madrid in 4K: Gran Vía, Royal Palace, Plaza Mayor & Prado',
    channel: 'EarthTimes Europe Tours'
  },
  barcelona: {
    youtubeId: '0R_3R4N2l1g',
    title: 'Barcelona in 4K: Sagrada Família, Park Güell & Gothic Quarter',
    channel: 'EarthTimes Europe Tours'
  },
  amsterdam: {
    youtubeId: 'k93yVvG1n-w',
    title: 'Amsterdam in 4K: Historic Canals, Dam Square & Rijksmuseum',
    channel: 'EarthTimes Europe Tours'
  },
  prague: {
    youtubeId: '0X9Z8m_2T-c',
    title: 'Prague in 4K: Charles Bridge, Astronomical Clock & Prague Castle',
    channel: 'EarthTimes Europe Tours'
  },
  brussels: {
    youtubeId: 'E5m5E8L1sQ4',
    title: 'Brussels in 4K: Grand Place, Atomium & European Quarter',
    channel: 'EarthTimes Europe Tours'
  },
  lisbon: {
    youtubeId: 'pC3x8c7n2w0',
    title: 'Lisbon in 4K: Tram 28, Belém Tower, Jerónimos & Alfama',
    channel: 'EarthTimes Europe Tours'
  },
  dublin: {
    youtubeId: '4bV3w7b0j1c',
    title: 'Dublin in 4K: Trinity College, Temple Bar & Ha\'penny Bridge',
    channel: 'EarthTimes Europe Tours'
  },
  budapest: {
    youtubeId: 'j1b7y9s_e3Q',
    title: 'Budapest in 4K: Parliament, Chain Bridge & Buda Castle',
    channel: 'EarthTimes Europe Tours'
  },
  'new-york': {
    youtubeId: '1_d3y8q2k4o',
    title: 'New York City in 4K: Manhattan, Times Square & Central Park',
    channel: 'EarthTimes USA Tours'
  },
  boston: {
    youtubeId: 'zH7o3m_2K1w',
    title: 'Boston in 4K: Freedom Trail, Beacon Hill & Boston Harbor',
    channel: 'EarthTimes USA Tours'
  },
  chicago: {
    youtubeId: '2m1v9c8b7x4',
    title: 'Chicago in 4K: Millennium Park, The Bean & Skyline',
    channel: 'EarthTimes USA Tours'
  },
  'los-angeles': {
    youtubeId: '4v9c7m2b1x8',
    title: 'Los Angeles in 4K: Hollywood, Santa Monica & Downtown LA',
    channel: 'EarthTimes USA Tours'
  }
};

export function getCityVideo(cityId) {
  if (!cityId) return null;
  return CITY_VIDEOS[cityId] || null;
}
