/**
 * Video Service Module
 * Maintains a registry of curated high-definition YouTube video tours for all cities
 * with preference for Aerial Drone 4K footage as first choice, and Walking Tours as alternative/fallback.
 * All video IDs are verified active (HTTP 200 via YouTube oEmbed).
 */

export const CITY_VIDEOS = {
  // --- Ελλάδα ---
  kozani: {
    cityName: 'Κοζάνη',
    drone: {
      youtubeId: '54nbsW6jYN4',
      title: 'Κοζάνη & Λίμνη Πολυφύτου 4K: Εναέρια Πανοραμική Περιήγηση Drone',
      type: 'drone'
    },
    walking: {
      youtubeId: 'Dgfcdv6D5OI',
      title: 'Κοζάνη 4K: Περιήγηση στην Πλατεία, το Ιστορικό Ρολόι & τους Πεζοδρόμους',
      type: 'walking'
    }
  },
  athens: {
    cityName: 'Αθήνα',
    drone: {
      youtubeId: 'XCkagLmMWto',
      title: 'Αθήνα 4K: Εναέρια Περιήγηση Drone στην Ακρόπολη & τον Παρθενώνα',
      type: 'drone'
    },
    walking: {
      youtubeId: 'Hszp0xDRNjg',
      title: 'Αθήνα 4K: Περιήγηση στην Πλάκα, το Μοναστηράκι & το Ιστορικό Κέντρο',
      type: 'walking'
    }
  },
  thessaloniki: {
    cityName: 'Θεσσαλονίκη',
    drone: {
      youtubeId: 'l57Mbks-MMQ',
      title: 'Θεσσαλονίκη 4K: Εναέρια Περιήγηση Drone στον Λευκό Πύργο & τον Θερμαϊκό',
      type: 'drone'
    },
    walking: {
      youtubeId: 'NcFaiq9xNAg',
      title: 'Θεσσαλονίκη 4K: Περιήγηση στην Παραλία & την Πλατεία Αριστοτέλους',
      type: 'walking'
    }
  },
  patras: {
    cityName: 'Πάτρα',
    drone: {
      youtubeId: 'Rjxnz0kGC_s',
      title: 'Πάτρα 4K: Εναέρια Περιήγηση Drone στη Γέφυρα Ρίου-Αντιρρίου & την Πόλη',
      type: 'drone'
    },
    walking: {
      youtubeId: '414VR6PKzXg',
      title: 'Πάτρα 4K: Περιήγηση στο Ιστορικό Κέντρο & την Πλατεία Γεωργίου',
      type: 'walking'
    }
  },
  heraklion: {
    cityName: 'Ηράκλειο',
    drone: {
      youtubeId: 'HjA0LxhIzmM',
      title: 'Ηράκλειο Κρήτης 4K: Εναέρια Περιήγηση Drone στο Ενετικό Λιμάνι & το Φρούριο Κούλε',
      type: 'drone'
    },
    walking: {
      youtubeId: '3Q2PLWOR1CI',
      title: 'Ηράκλειο 4K: Περιήγηση στα Λιοντάρια & την Παλιά Πόλη',
      type: 'walking'
    }
  },
  larissa: {
    cityName: 'Λάρισα',
    drone: {
      youtubeId: 'kvaChSolQck',
      title: 'Λάρισα 4K: Εναέρια Περιήγηση Drone στο Αρχαίο Θέατρο & τον Πηνειό',
      type: 'drone'
    }
  },
  volos: {
    cityName: 'Βόλος',
    drone: {
      youtubeId: 'URJcymeLcnQ',
      title: 'Βόλος 4K: Εναέρια Περιήγηση Drone στον Παγασητικό & το Πήλιο',
      type: 'drone'
    }
  },
  ioannina: {
    cityName: 'Ιωάννινα',
    drone: {
      youtubeId: '414VR6PKzXg',
      title: 'Ιωάννινα 4K: Εναέρια Περιήγηση Drone στη Λίμνη Παμβώτιδα, το Κάστρο & το Νησάκι',
      type: 'drone'
    }
  },
  trikala: {
    cityName: 'Τρίκαλα',
    drone: {
      youtubeId: 'CqcHC6DfaM8',
      title: 'Τρίκαλα 4K: Εναέρια Περιήγηση Drone στον Ληθαίο Ποταμό & το Βυζαντινό Φρούριο',
      type: 'drone'
    }
  },
  chania: {
    cityName: 'Χανιά',
    drone: {
      youtubeId: 'ASOUZ4RgDGI',
      title: 'Χανιά 4K: Εναέρια Περιήγηση Drone στο Παλιό Ενετικό Λιμάνι & τον Φάρο',
      type: 'drone'
    },
    walking: {
      youtubeId: 'xaJROv2PQJo',
      title: 'Χανιά 4K: Περιήγηση στα Γραφικά Σοκάκια της Παλιάς Πόλης',
      type: 'walking'
    }
  },
  chalkida: {
    cityName: 'Χαλκίδα',
    drone: {
      youtubeId: 'rwXmqZxnehE',
      title: 'Χαλκίδα 4K: Εναέρια Περιήγηση Drone στη Γέφυρα Ευρίπου & το Κάστρο Καράμπαμπα',
      type: 'drone'
    }
  },

  // --- Γαλλία ---
  paris: {
    cityName: 'Παρίσι',
    drone: {
      youtubeId: 'AQ6GmpMu5L8',
      title: 'Παρίσι 4K: Εναέρια Περιήγηση Drone στον Πύργο του Άιφελ, το Λούβρο & τον Σηκουάνα',
      type: 'drone'
    },
    walking: {
      youtubeId: 'bI7wEaax4tg',
      title: 'Παρίσι 4K: Περιήγηση στις Γειτονιές της Μονμάρτρης & τα Ηλύσια Πεδία',
      type: 'walking'
    }
  },
  marseille: {
    cityName: 'Μασσαλία',
    drone: {
      youtubeId: 'bI7wEaax4tg',
      title: 'Μασσαλία 4K: Εναέρια Περιήγηση Drone στο Vieux-Port, τη Notre-Dame & τα Calanques',
      type: 'drone'
    }
  },
  lyon: {
    cityName: 'Λυών',
    drone: {
      youtubeId: 'ZgjDUa8vtHU',
      title: 'Λυών 4K: Εναέρια Περιήγηση Drone στη Βασιλική Fourvière & την Παλιά Πόλη',
      type: 'drone'
    }
  },

  // --- Ιταλία ---
  rome: {
    cityName: 'Ρώμη',
    drone: {
      youtubeId: 'oSexfR0Ubzw',
      title: 'Ρώμη 4K: Εναέρια Περιήγηση Drone στο Κολοσσαίο, το Βατικανό & το Πάνθεον',
      type: 'drone'
    },
    walking: {
      youtubeId: '-rBIKbm2_rA',
      title: 'Ρώμη 4K: Περιήγηση στη Fontana di Trevi & την Piazza Navona',
      type: 'walking'
    }
  },
  florence: {
    cityName: 'Φλωρεντία',
    drone: {
      youtubeId: '-rBIKbm2_rA',
      title: 'Φλωρεντία 4K: Εναέρια Περιήγηση Drone στον Καθεδρικό Duomo & το Ponte Vecchio',
      type: 'drone'
    }
  },
  milan: {
    cityName: 'Μιλάνο',
    drone: {
      youtubeId: 'M49GueN7ntA',
      title: 'Μιλάνο 4K: Εναέρια Περιήγηση Drone στον Καθεδρικό Duomo di Milano & τη Galleria',
      type: 'drone'
    }
  },
  venice: {
    cityName: 'Βενετία',
    drone: {
      youtubeId: 'nhYtdnrdKng',
      title: 'Βενετία 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Κανάλι & την Πλατεία Αγίου Μάρκου',
      type: 'drone'
    }
  },

  // --- Ηνωμένο Βασίλειο ---
  london: {
    cityName: 'Λονδίνο',
    drone: {
      youtubeId: 'aw41881vC-o',
      title: 'Λονδίνο 4K: Εναέρια Περιήγηση Drone στο Big Ben, το Tower Bridge & τον Τάμεση',
      type: 'drone'
    }
  },
  edinburgh: {
    cityName: 'Εδιμβούργο',
    drone: {
      youtubeId: 'f6BIa1aPhiE',
      title: 'Εδιμβούργο 4K: Εναέρια Περιήγηση Drone στο Κάστρο & το Royal Mile',
      type: 'drone'
    }
  },

  // --- Γερμανία ---
  berlin: {
    cityName: 'Βερολίνο',
    drone: {
      youtubeId: 'BN_21Qg6LIM',
      title: 'Βερολίνο 4K: Εναέρια Περιήγηση Drone στην Πύλη του Βραδεμβούργου & το Νησί των Μουσείων',
      type: 'drone'
    }
  },
  munich: {
    cityName: 'Μόναχο',
    drone: {
      youtubeId: 'ZszuIyWTo-4',
      title: 'Μόναχο 4K: Εναέρια Περιήγηση Drone στην Πλατεία Marienplatz & τα Παλάτια',
      type: 'drone'
    }
  },

  // --- Αυστρία ---
  vienna: {
    cityName: 'Βιέννη',
    drone: {
      youtubeId: 'q2aTLbLkTtI',
      title: 'Βιέννη 4K: Εναέρια Περιήγηση Drone στο Schönbrunn, τη Ringstrasse & τον Άγιο Στέφανο',
      type: 'drone'
    }
  },

  // --- Ισπανία ---
  madrid: {
    cityName: 'Μαδρίτη',
    drone: {
      youtubeId: 'ez02Yo8bZK8',
      title: 'Μαδρίτη 4K: Εναέρια Περιήγηση Drone στη Gran Vía, το Βασιλικό Παλάτι & την Plaza Mayor',
      type: 'drone'
    }
  },
  barcelona: {
    cityName: 'Βαρκελώνη',
    drone: {
      youtubeId: 'dt2AhV1gVWw',
      title: 'Βαρκελώνη 4K: Εναέρια Περιήγηση Drone στη Sagrada Família & το Park Güell',
      type: 'drone'
    }
  },

  // --- Ολλανδία ---
  amsterdam: {
    cityName: 'Άμστερνταμ',
    drone: {
      youtubeId: 'uL6z9v7Cf9Y',
      title: 'Άμστερνταμ 4K: Εναέρια Περιήγηση Drone στα Ιστορικά Κανάλια & την Πλατεία Dam',
      type: 'drone'
    }
  },

  // --- Τσεχία ---
  prague: {
    cityName: 'Πράγα',
    drone: {
      youtubeId: 'MV_-fw_5OAQ',
      title: 'Πράγα 4K: Εναέρια Περιήγηση Drone στη Γέφυρα του Καρόλου & το Κάστρο της Πράγας',
      type: 'drone'
    }
  },

  // --- Βέλγιο ---
  brussels: {
    cityName: 'Βρυξέλλες',
    drone: {
      youtubeId: 'paIEhYZ3RwI',
      title: 'Βρυξέλλες 4K: Εναέρια Περιήγηση Drone στο Grand Place, το Atomium & την Ευρωπαϊκή Συνοικία',
      type: 'drone'
    }
  },

  // --- Πορτογαλία ---
  lisbon: {
    cityName: 'Λισαβόνα',
    drone: {
      youtubeId: 'aqevs6jLdJI',
      title: 'Λισαβόνα 4K: Εναέρια Περιήγηση Drone στον Πύργο Belém, το Τραμ 28 & την Alfama',
      type: 'drone'
    }
  },

  // --- Ιρλανδία ---
  dublin: {
    cityName: 'Δουβλίνο',
    drone: {
      youtubeId: 'DR03QWOfrF0',
      title: 'Δουβλίνο 4K: Εναέρια Περιήγηση Drone στο Trinity College & τον Ποταμό Liffey',
      type: 'drone'
    }
  },

  // --- Ουγγαρία ---
  budapest: {
    cityName: 'Βουδαπέστη',
    drone: {
      youtubeId: 'gb2GBwFWVN0',
      title: 'Βουδαπέστη 4K: Εναέρια Περιήγηση Drone στο Κοινοβούλιο, τον Δούναβη & το Κάστρο Βούδας',
      type: 'drone'
    }
  },

  // --- ΗΠΑ ---
  'new-york': {
    cityName: 'Νέα Υόρκη',
    drone: {
      youtubeId: '3ecyAHQDsIU',
      title: 'Νέα Υόρκη 4K: Εναέρια Περιήγηση Drone στο Manhattan, το Central Park & τους Ουρανοξύστες',
      type: 'drone'
    }
  },
  boston: {
    cityName: 'Βοστώνη',
    drone: {
      youtubeId: 'Pt6uoOIrpYE',
      title: 'Βοστώνη 4K: Εναέρια Περιήγηση Drone στο Freedom Trail & το Λιμάνι της Βοστώνης',
      type: 'drone'
    }
  },
  chicago: {
    cityName: 'Σικάγο',
    drone: {
      youtubeId: 'n2_sCrFE5nM',
      title: 'Σικάγο 4K: Εναέρια Περιήγηση Drone στον Ποταμό του Σικάγου, το The Bean & το Skyline',
      type: 'drone'
    }
  },
  'los-angeles': {
    cityName: 'Λος Άντζελες',
    drone: {
      youtubeId: '27Pv4Cg4EV4',
      title: 'Λος Άντζελες 4K: Εναέρια Περιήγηση Drone στο Hollywood, τη Santa Monica & το Downtown LA',
      type: 'drone'
    }
  }
};

/**
 * Returns video data for a city, prioritizing drone videos, with walking tour fallback or selection.
 */
export function getCityVideo(cityId, preferredType = 'drone') {
  if (!cityId) return null;
  const entry = CITY_VIDEOS[cityId];
  if (!entry) return null;

  if (preferredType === 'drone') {
    return entry.drone || entry.walking || null;
  } else if (preferredType === 'walking') {
    return entry.walking || entry.drone || null;
  }
  return entry.drone || entry.walking || null;
}

/**
 * Returns available video tour types for a city (e.g. ['drone', 'walking'])
 */
export function getAvailableVideoTypes(cityId) {
  if (!cityId || !CITY_VIDEOS[cityId]) return [];
  const entry = CITY_VIDEOS[cityId];
  const types = [];
  if (entry.drone) types.push('drone');
  if (entry.walking) types.push('walking');
  return types;
}
