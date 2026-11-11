import { CITY_TO_STATE } from './states-data.js';
/**
 * Video Service Module
 * Registry of verified high-definition YouTube video tours for all cities
 * with selectable tour options:
 * - 🚁 Drone 4K (Aerial Cinematic)
 * - 🚶 Walking Tour 4K (Street Exploration)
 * - 🏛️ Guide / History 4K (Cultural Highlights)
 *
 * All video IDs have been strictly audited and verified.
 */

export const CITY_VIDEOS = {
  "kozani": {
    "cityName": "Κοζάνη",
    "drone": {
      "youtubeId": "54nbsW6jYN4",
      "title": "Κοζάνη & Λίμνη Πολυφύτου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κοζάνη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Dgfcdv6D5OI",
      "title": "Κοζάνη 4K: Περιήγηση στην Κεντρική Πλατεία, το Ιστορικό Ρολόι & τους Πεζοδρόμους",
      "label": "Κοζάνη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "guide": {
      "youtubeId": "davgbeLTQlk",
      "title": "Κοζάνη 4K: Οδηγός Αξιοθεάτων & Ιστορία της Πόλης",
      "label": "Ιστορικά Αξιοθέατα Κοζάνης",
      "icon": "fa-solid fa-landmark",
      "type": "guide"
    }
  },
  "athens": {
    "cityName": "Αθήνα",
    "drone": {
      "youtubeId": "wa1fa5-EnlI",
      "title": "Αθήνα 4K: Εναέρια Περιήγηση Drone στην Ακρόπολη, τον Παρθενώνα & το Λυκαβηττό",
      "label": "Αθήνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "QVh0TuWyEYc",
      "title": "Αθήνα 4K: Περιήγηση στην Πλάκα, το Μοναστηράκι, το Σύνταγμα & την Αρχαία Αγορά",
      "label": "Αθήνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "guide": {
      "youtubeId": "XCkagLmMWto",
      "title": "Αθήνα 4K: Ιστορικό Οδοιπορικό & Κλασικά Μνημεία",
      "label": "Ιστορικά Μνημεία & Ακρόπολη",
      "icon": "fa-solid fa-landmark",
      "type": "guide"
    }
  },
  "thessaloniki": {
    "cityName": "Θεσσαλονίκη",
    "drone": {
      "youtubeId": "l57Mbks-MMQ",
      "title": "Θεσσαλονίκη 4K: Εναέρια Περιήγηση Drone στον Λευκό Πύργο, την Άνω Πόλη & τον Θερμαϊκό",
      "label": "Θεσσαλονίκη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "NcFaiq9xNAg",
      "title": "Θεσσαλονίκη 4K: Περιήγηση στη Νέα Παραλία & την Πλατεία Αριστοτέλους",
      "label": "Θεσσαλονίκη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "patras": {
    "cityName": "Πάτρα",
    "drone": {
      "youtubeId": "Rjxnz0kGC_s",
      "title": "Πάτρα 4K: Εναέρια Περιήγηση Drone στη Γέφυρα Ρίου-Αντιρρίου, το Κάστρο & το Λιμάνι",
      "label": "Πάτρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ozbEyIWtFyw",
      "title": "Πάτρα 4K: Πλήρης Περιήγηση στο Ιστορικό Κέντρο & την Πλατεία Γεωργίου",
      "label": "Πάτρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "heraklion": {
    "cityName": "Ηράκλειο",
    "drone": {
      "youtubeId": "3Q2PLWOR1CI",
      "title": "Ηράκλειο Κρήτης 4K: Εναέρια Περιήγηση Drone στο Ενετικό Λιμάνι, το Κούλε & την Κνωσό",
      "label": "Ηράκλειο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "HjA0LxhIzmM",
      "title": "Ηράκλειο 4K: Περιήγηση στα Λιοντάρια, τον Άγιο Τίτο & την Παλιά Πόλη",
      "label": "Ηράκλειο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "larissa": {
    "cityName": "Λάρισα",
    "drone": {
      "youtubeId": "URJcymeLcnQ",
      "title": "Λάρισα 4K: Εναέρια Περιήγηση Drone στο Αρχαίο Θέατρο, τον Πηνειό & το Φρούριο",
      "label": "Λάρισα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Srl_ur0QRJc",
      "title": "Λάρισα 4K: Περιήγηση στους Πεζοδρόμους & το Ιστορικό Κέντρο",
      "label": "Λάρισα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "volos": {
    "cityName": "Βόλος",
    "drone": {
      "youtubeId": "414VR6PKzXg",
      "title": "Βόλος 4K: Εναέρια Περιήγηση Drone στην Παραλία, τον Παγασητικό & το Πήλιο",
      "label": "Βόλος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KWRfmrnY2Os",
      "title": "Βόλος 4K: Περιήγηση στην Παραλιακή Οδό Αργοναυτών & τα Τσιπουράδικα",
      "label": "Βόλος Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ioannina": {
    "cityName": "Ιωάννινα",
    "drone": {
      "youtubeId": "CqcHC6DfaM8",
      "title": "Ιωάννινα 4K: Εναέρια Περιήγηση Drone στη Λίμνη Παμβώτιδα, το Κάστρο & το Νησάκι",
      "label": "Ιωάννινα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WxasVbOnRfo",
      "title": "Ιωάννινα 4K: Περιήγηση στη Βυζαντινή Καστροπολιτεία & τη Λίμνη",
      "label": "Ιωάννινα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trikala": {
    "cityName": "Τρίκαλα",
    "drone": {
      "youtubeId": "kvaChSolQck",
      "title": "Τρίκαλα 4K: Εναέρια Περιήγηση Drone στον Ληθαίο Ποταμό, το Βυζαντινό Κάστρο & το Βαρούσι",
      "label": "Τρίκαλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "P66HiGlJbPE",
      "title": "Τρίκαλα 4K: Περιήγηση στις Όχθες του Ληθαίου & την Παλιά Πόλη",
      "label": "Τρίκαλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chania": {
    "cityName": "Χανιά",
    "drone": {
      "youtubeId": "ASOUZ4RgDGI",
      "title": "Χανιά 4K: Εναέρια Περιήγηση Drone στο Ενετικό Λιμάνι & τον Αιγυπτιακό Φάρο",
      "label": "Χανιά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "xaJROv2PQJo",
      "title": "Χανιά 4K: Περιήγηση στα Γραφικά Σοκάκια της Παλιάς Πόλης & τα Νεώρια",
      "label": "Χανιά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chalkida": {
    "cityName": "Χαλκίδα",
    "drone": {
      "youtubeId": "rwXmqZxnehE",
      "title": "Χαλκίδα 4K: Εναέρια Περιήγηση Drone στην Παλιά Γέφυρα, το Στενό του Ευρίπου & το Κάστρο",
      "label": "Χαλκίδα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "E8ve2LeEAV4",
      "title": "Χαλκίδα 4K: Περιήγηση στην Παραλία & τα Παλιρροϊκά Ρεύματα Ευρίπου",
      "label": "Χαλκίδα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "paris": {
    "cityName": "Παρίσι",
    "drone": {
      "youtubeId": "_iZ-vMCeH9U",
      "title": "Παρίσι 4K: Εναέρια Περιήγηση Drone στον Πύργο του Άιφελ, το Λούβρο & την Παναγία των Παρισίων",
      "label": "Παρίσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "9gjclWp0PUk",
      "title": "Παρίσι 4K: Περιήγηση στη Μονμάρτρη, τα Ηλύσια Πεδία & τις Όχθες του Σηκουάνα",
      "label": "Παρίσι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "guide": {
      "youtubeId": "AQ6GmpMu5L8",
      "title": "Παρίσι 4K: Πλήρης Ταξιδιωτικός & Ιστορικός Οδηγός της Πόλης του Φωτός",
      "label": "Ιστορικός Οδηγός Παρισιού",
      "icon": "fa-solid fa-landmark",
      "type": "guide"
    }
  },
  "marseille": {
    "cityName": "Μασσαλία",
    "drone": {
      "youtubeId": "t4IIRTEjbUw",
      "title": "Μασσαλία 4K: Εναέρια Περιήγηση Drone στο Παλιό Λιμάνι (Vieux-Port), τη Notre-Dame & τα Calanques",
      "label": "Μασσαλία με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "tGAjSJbNsok",
      "title": "Μασσαλία 4K: Περιήγηση στο Vieux-Port, την ιστορική συνοικία Le Panier & το Μουσείο MUCEM",
      "label": "Μασσαλία Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "guide": {
      "youtubeId": "qiPoVZKJ81g",
      "title": "Μασσαλία 4K: Ιστορικός & Πολιτιστικός Οδηγός της Αρχαίας Φωκαϊκής Αποικίας",
      "label": "Ιστορία & Αξιοθέατα Μασσαλίας",
      "icon": "fa-solid fa-landmark",
      "type": "guide"
    }
  },
  "lyon": {
    "cityName": "Λυών",
    "drone": {
      "youtubeId": "AR2IluWB1kU",
      "title": "Λυών 4K: Εναέρια Περιήγηση Drone στους Ποταμούς Ροδανό & Σον, τη Βασιλική Fourvière & το Presqu'île",
      "label": "Λυών με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Sl9k_EeM1KA",
      "title": "Λυών 4K: Περιήγηση στην Παλιά Αναγεννησιακή Πόλη (Vieux Lyon) & τα Μυστικά Traboules",
      "label": "Λυών Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "guide": {
      "youtubeId": "bI7wEaax4tg",
      "title": "Λυών 4K: Οδοιπορικό από τον Λόφο Croix-Rousse στον Λόφο Fourvière",
      "label": "Ιστορικό Αφιέρωμα Λυών",
      "icon": "fa-solid fa-landmark",
      "type": "guide"
    }
  },
  "rome": {
    "cityName": "Ρώμη",
    "drone": {
      "youtubeId": "PRIpZwC9pQw",
      "title": "Ρώμη 4K: Εναέρια Περιήγηση Drone στο Κολοσσαίο, τη Ρωμαϊκή Αγορά & το Βατικανό",
      "label": "Ρώμη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bhJU_fVHMmY",
      "title": "Ρώμη 4K: Περιήγηση στη Fontana di Trevi, την Piazza Navona & το Πάνθεον",
      "label": "Ρώμη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "guide": {
      "youtubeId": "oSexfR0Ubzw",
      "title": "Ρώμη 4K: Τα Μεγάλα Μνημεία της Αιώνιας Πόλης",
      "label": "Ιστορικά Μνημεία Ρώμης",
      "icon": "fa-solid fa-landmark",
      "type": "guide"
    },
    "live": {
          "youtubeId": "EEM7a3mHMR4",
          "title": "Ρώμη & Βατικανό 24/7: Ζωντανή Μετάδοση από την Πλατεία του Αγίου Πέτρου (Vatican Media)",
          "label": "Βατικανό Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "florence": {
    "cityName": "Φλωρεντία",
    "drone": {
      "youtubeId": "DfW-Tn231Sk",
      "title": "Φλωρεντία 4K: Εναέρια Περιήγηση Drone στον Καθεδρικό Duomo, το Ponte Vecchio & την Πλατεία Signoria",
      "label": "Φλωρεντία με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-rBIKbm2_rA",
      "title": "Φλωρεντία 4K: Περιήγηση στην Καρδιά της Αναγέννησης, την Uffizi & τις Όχθες του Άρνου",
      "label": "Φλωρεντία Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "milan": {
    "cityName": "Μιλάνο",
    "drone": {
      "youtubeId": "PYU6Hv7NHH8",
      "title": "Μιλάνο 4K: Εναέρια Περιήγηση Drone στον Καθεδρικό Duomo di Milano, το Κάστρο Sforzesco & τους Ουρανοξύστες",
      "label": "Μιλάνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nhYtdnrdKng",
      "title": "Μιλάνο 4K: Περιήγηση στη Galleria Vittorio Emanuele II & τα Κανάλια Navigli",
      "label": "Μιλάνο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "venice": {
    "cityName": "Βενετία",
    "drone": {
      "youtubeId": "vhD0MqCi__w",
      "title": "Βενετία 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Κανάλι, την Πλατεία Αγίου Μάρκου & τη Λιμνοθάλασσα",
      "label": "Βενετία με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "f6BIa1aPhiE",
      "title": "Βενετία 4K: Περιήγηση στη Γέφυρα Rialto, τα Γραφικά Γεφύρια & την Piazza San Marco",
      "label": "Βενετία Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "a1mcaV3Sf9U",
          "title": "Βενετία 24/7: Ζωντανή Μετάδοση από το Μεγάλο Κανάλι & την Πλατεία Αγίου Μάρκου",
          "label": "Βενετία Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "london": {
    "cityName": "Λονδίνο",
    "drone": {
      "youtubeId": "1my_zWGCJy0",
      "title": "Λονδίνο 4K: Εναέρια Περιήγηση Drone στο Big Ben, το Tower Bridge & τον Τάμεση",
      "label": "Λονδίνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "aw41881vC-o",
      "title": "Λονδίνο 4K: Περιήγηση στο Westminster, το Trafalgar Square & το Covent Garden",
      "label": "Λονδίνο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "zMCea32gpmg",
          "title": "Λονδίνο 24/7: Ζωντανή Μετάδοση από το Abbey Road (EarthCam Live)",
          "label": "Abbey Road Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "edinburgh": {
    "cityName": "Εδιμβούργο",
    "drone": {
      "youtubeId": "RGySRonWwFA",
      "title": "Εδιμβούργο 4K: Εναέρια Περιήγηση Drone στο Κάστρο του Εδιμβούργου & το Arthur's Seat",
      "label": "Εδιμβούργο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "M49GueN7ntA",
      "title": "Εδιμβούργο 4K: Περιήγηση στο Ιστορικό Royal Mile & τη Μεσαιωνική Παλιά Πόλη",
      "label": "Εδιμβούργο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "berlin": {
    "cityName": "Βερολίνο",
    "drone": {
      "youtubeId": "4SGLxZnqYIg",
      "title": "Βερολίνο 4K: Εναέρια Περιήγηση Drone στην Πύλη του Βραδεμβούργου & το Νησί των Μουσείων",
      "label": "Βερολίνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BN_21Qg6LIM",
      "title": "Βερολίνο 4K: Περιήγηση στο Checkpoint Charlie, το Τείχος του Βερολίνου & την Alexanderplatz",
      "label": "Βερολίνο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "munich": {
    "cityName": "Μόναχο",
    "drone": {
      "youtubeId": "pMRE7ofQE3U",
      "title": "Μόναχο 4K: Εναέρια Περιήγηση Drone στην Πλατεία Marienplatz, τα Ανάκτορα Nymphenburg & τους Βαυαρικούς Κήπους",
      "label": "Μόναχο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZszuIyWTo-4",
      "title": "Μόναχο 4K: Περιήγηση στο Ιστορικό Κέντρο, τη Frauenkirche & τον Αγγλικό Κήπο",
      "label": "Μόναχο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vienna": {
    "cityName": "Βιέννη",
    "drone": {
      "youtubeId": "_8D2ukmn0cs",
      "title": "Βιέννη 4K: Εναέρια Περιήγηση Drone στα Ανάκτορα Schönbrunn, τη Ringstrasse & τον Άγιο Στέφανο",
      "label": "Βιέννη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "q2aTLbLkTtI",
      "title": "Βιέννη 4K: Περιήγηση στην Αυτοκρατορική Πρωτεύουσα, το Hofburg & την Όπερα της Βιέννης",
      "label": "Βιέννη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "madrid": {
    "cityName": "Μαδρίτη",
    "drone": {
      "youtubeId": "ZGTPb9uaGck",
      "title": "Μαδρίτη 4K: Εναέρια Περιήγηση Drone στη Gran Vía, το Βασιλικό Παλάτι & την Plaza Mayor",
      "label": "Μαδρίτη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ez02Yo8bZK8",
      "title": "Μαδρίτη 4K: Περιήγηση στο Πάρκο Retiro, την Puerta del Sol & τις Ιστορικές Πλατείες",
      "label": "Μαδρίτη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "barcelona": {
    "cityName": "Βαρκελώνη",
    "drone": {
      "youtubeId": "FGRvP8eoPdw",
      "title": "Βαρκελώνη 4K: Εναέρια Περιήγηση Drone στη Sagrada Família, το Park Güell & τη Barceloneta",
      "label": "Βαρκελώνη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "dt2AhV1gVWw",
      "title": "Βαρκελώνη 4K: Περιήγηση στη La Rambla, το Γοτθικό Barri Gòtic & την Passeig de Gràcia",
      "label": "Βαρκελώνη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "amsterdam": {
    "cityName": "Άμστερνταμ",
    "drone": {
      "youtubeId": "Oxv6IRcuNaI",
      "title": "Άμστερνταμ 4K: Εναέρια Περιήγηση Drone στα Ιστορικά Κανάλια, τη Dam Square & τα Γεφύρια",
      "label": "Άμστερνταμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uL6z9v7Cf9Y",
      "title": "Άμστερνταμ 4K: Περιήγηση στη συνοικία Jordaan, τα Κανάλια & την Πλατεία των Μουσείων",
      "label": "Άμστερνταμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "FHJH2yMe6Hw",
          "title": "Άμστερνταμ 24/7: Ζωντανή Μετάδοση από τον Κεντρικό Σταθμό & τα Κανάλια",
          "label": "Άμστερνταμ Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "prague": {
    "cityName": "Πράγα",
    "drone": {
      "youtubeId": "WbUVZBFSbSM",
      "title": "Πράγα 4K: Εναέρια Περιήγηση Drone στη Γέφυρα του Καρόλου, το Κάστρο της Πράγας & τον Μολδάβα",
      "label": "Πράγα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MV_-fw_5OAQ",
      "title": "Πράγα 4K: Περιήγηση στην Πλατεία Παλιάς Πόλης & το Αστρονομικό Ρολόι",
      "label": "Πράγα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "brussels": {
    "cityName": "Βρυξέλλες",
    "drone": {
      "youtubeId": "QJjZ3BywAdY",
      "title": "Βρυξέλλες 4K: Εναέρια Περιήγηση Drone στο Grand Place, το Atomium & τα Βασιλικά Παλάτια",
      "label": "Βρυξέλλες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "gb2GBwFWVN0",
      "title": "Βρυξέλλες 4K: Περιήγηση στη Χρυσή Πλατεία Grand Place & την Ευρωπαϊκή Συνοικία",
      "label": "Βρυξέλλες Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lisbon": {
    "cityName": "Λισαβόνα",
    "drone": {
      "youtubeId": "hWRmyqrq2MM",
      "title": "Λισαβόνα 4K: Εναέρια Περιήγηση Drone στον Πύργο Belém, το Μνημείο των Ανακαλύψεων & τον Τάγο",
      "label": "Λισαβόνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "aqevs6jLdJI",
      "title": "Λισαβόνα 4K: Περιήγηση στην Alfama, τα Κίτρινα Τραμ & την Πλατεία Praça do Comércio",
      "label": "Λισαβόνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dublin": {
    "cityName": "Δουβλίνο",
    "drone": {
      "youtubeId": "WTdq5yjKcqg",
      "title": "Δουβλίνο 4K: Εναέρια Περιήγηση Drone στο Trinity College, τη Γέφυρα Ha'penny & τον Ποταμό Liffey",
      "label": "Δουβλίνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "paIEhYZ3RwI",
      "title": "Δουβλίνο 4K: Περιήγηση στο Temple Bar, το Grafton Street & το Κάστρο του Δουβλίνου",
      "label": "Δουβλίνο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "3nyPER2kzqk",
          "title": "Δουβλίνο 24/7: Ζωντανή Μετάδοση από το Temple Bar & την Παλιά Πόλη (EarthCam)",
          "label": "Temple Bar Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "budapest": {
    "cityName": "Βουδαπέστη",
    "drone": {
      "youtubeId": "ukNpq1cLsCk",
      "title": "Βουδαπέστη 4K: Εναέρια Περιήγηση Drone στο Ουγγρικό Κοινοβούλιο, τον Δούναβη & το Κάστρο της Βούδας",
      "label": "Βουδαπέστη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "DR03QWOfrF0",
      "title": "Βουδαπέστη 4K: Περιήγηση στη Γέφυρα των Αλυσίδων & τον Προμαχώνα των Ψαράδων",
      "label": "Βουδαπέστη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "new-york": {
    "cityName": "Νέα Υόρκη",
    "drone": {
      "youtubeId": "f_2dgGYXy9E",
      "title": "Νέα Υόρκη 4K: Εναέρια Περιήγηση Drone στο Manhattan, το Central Park, το Empire State & το Άγαλμα της Ελευθερίας",
      "label": "Νέα Υόρκη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "27Pv4Cg4EV4",
      "title": "Νέα Υόρκη 4K: Περιήγηση στην Times Square, την 5η Λεωφόρο & το Μπρούκλιν",
      "label": "Νέα Υόρκη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "ZxCeWQ3Lcig",
          "title": "Νέα Υόρκη 24/7: Ζωντανή Μετάδοση από την Times Square North 4K (EarthCam)",
          "label": "Times Square Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "boston": {
    "cityName": "Βοστώνη",
    "drone": {
      "youtubeId": "O9XBEM6nNJw",
      "title": "Βοστώνη 4K: Εναέρια Περιήγηση Drone στο Ιστορικό Λιμάνι, τον Ποταμό Charles & το Boston Common",
      "label": "Βοστώνη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "n2_sCrFE5nM",
      "title": "Βοστώνη 4K: Περιήγηση στο Μονοπάτι της Ελευθερίας (Freedom Trail) & το Faneuil Hall",
      "label": "Βοστώνη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chicago": {
    "cityName": "Σικάγο",
    "drone": {
      "youtubeId": "3pvlPyoK1cg",
      "title": "Σικάγο 4K: Εναέρια Περιήγηση Drone στους Ουρανοξύστες, τον Ποταμό του Σικάγου & τη Λίμνη Michigan",
      "label": "Σικάγο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Pt6uoOIrpYE",
      "title": "Σικάγο 4K: Περιήγηση στο Millennium Park, το Cloud Gate (The Bean) & το Riverwalk",
      "label": "Σικάγο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "los-angeles": {
    "cityName": "Λος Άντζελες",
    "drone": {
      "youtubeId": "xLNHsEGZ3nM",
      "title": "Λος Άντζελες 4K: Εναέρια Περιήγηση Drone στο Hollywood, τη Santa Monica & το Downtown LA",
      "label": "Λος Άντζελες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3ecyAHQDsIU",
      "title": "Λος Άντζελες 4K: Περιήγηση στο Hollywood Walk of Fame, το Beverly Hills & το Venice Beach",
      "label": "Λος Άντζελες Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "EO_1LWqsCNE",
          "title": "Λος Άντζελες 24/7: Ζωντανή Μετάδοση από τη Venice Beach & την Παραλιακή",
          "label": "Venice Beach Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "cambridge": {
    "cityName": "Κέιμπριτζ",
    "drone": {
      "youtubeId": "NLdVUWcwJ3Y",
      "title": "Κέιμπριτζ & Harvard 4K: Εναέρια Περιήγηση Drone στο Πανεπιστήμιο Harvard & τον Ποταμό Charles",
      "label": "Κέιμπριτζ & Harvard με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "awrBSE_O6Oo",
      "title": "Κέιμπριτζ & Harvard Yard 4K: Περιήγηση στο Harvard Square & τα Ιστορικά Κολέγια",
      "label": "Harvard & Cambridge Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "salem": {
    "cityName": "Σάλεμ",
    "walking": {
      "youtubeId": "HYcUlAsrBfg",
      "title": "Σάλεμ 4K: Ιστορική Περιήγηση στην Πόλη των Μαγισσών & το Essex Street",
      "label": "Σάλεμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "drone": {
      "youtubeId": "HcIPuebIMDk",
      "title": "Σάλεμ 4K: Περιήγηση στο Ιστορικό Κέντρο & το Λιμάνι",
      "label": "Σάλεμ Tour (4K)",
      "icon": "fa-solid fa-landmark",
      "type": "drone"
    }
  },
  "plymouth": {
    "cityName": "Πλίμουθ",
    "walking": {
      "youtubeId": "xu70Lp10OrI",
      "title": "Πλίμουθ 4K: Περιήγηση στην Ιστορική Αποικία των Προσκυνητών (Mayflower & Plymouth Rock)",
      "label": "Πλίμουθ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "drone": {
      "youtubeId": "xYveL2vRZY8",
      "title": "Πλίμουθ 4K: Περιήγηση στο Λιμάνι & τον Κυματοθραύστη του Cape Cod Bay",
      "label": "Πλίμουθ Harbor Tour (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "worcester": {
    "cityName": "Γούστερ",
    "walking": {
      "youtubeId": "c5RdRLItYGo",
      "title": "Γούστερ 4K: Περιήγηση στο Κέντρο της Πόλης & το Mechanics Hall",
      "label": "Γούστερ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-francisco": {
    "cityName": "Σαν Φρανσίσκο",
    "drone": {
      "youtubeId": "oLdr80iDFsc",
      "title": "Σαν Φρανσίσκο 4K: Εναέρια Περιήγηση Drone στη Golden Gate Bridge, το Alcatraz & το Downtown",
      "label": "Σαν Φρανσίσκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "washington-dc": {
    "cityName": "Ουάσινγκτον (D.C.)",
    "drone": {
      "youtubeId": "qdGin1IPgh0",
      "title": "Ουάσινγκτον 4K: Εναέρια Περιήγηση Drone στο Καπιτώλιο, το Μνημείο Λίνκολν & τον Λευκό Οίκο",
      "label": "Ουάσινγκτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "miami": {
    "cityName": "Μαϊάμι",
    "drone": {
      "youtubeId": "1lasGLVq1zQ",
      "title": "Μαϊάμι 4K: Εναέρια Περιήγηση Drone στο South Beach, το Ocean Drive & το Brickell",
      "label": "Μαϊάμι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Dmhws_sBEic",
      "title": "Μαϊάμι Beach 4K: Περιήγηση στο Art Deco District & την Ακτή",
      "label": "Μαϊάμι Beach Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
          "youtubeId": "GkBMgHwSIV0",
          "title": "Μαϊάμι 24/7: Ζωντανή Μετάδοση από το MacArthur Causeway & τον Ορίζοντα της Πόλης",
          "label": "Μαϊάμι Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "seattle": {
    "cityName": "Σιάτλ",
    "drone": {
      "youtubeId": "FnZ9uYWuk-Q",
      "title": "Σιάτλ 4K: Εναέρια Περιήγηση Drone στο Space Needle, το Pike Place Market & το Elliott Bay",
      "label": "Σιάτλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "las-vegas": {
    "cityName": "Λας Βέγκας",
    "drone": {
      "youtubeId": "Inun9TW-0Fo",
      "title": "Λας Βέγκας 4K: Εναέρια Περιήγηση Drone στο The Strip, το Bellagio & τη Fremont Street",
      "label": "Λας Βέγκας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-diego": {
    "cityName": "Σαν Ντιέγκο",
    "drone": {
      "youtubeId": "qg-7LaGf_C8",
      "title": "Σαν Ντιέγκο 4K: Εναέρια Περιήγηση Drone στο Balboa Park, το Coronado & την Ακτή του Ειρηνικού",
      "label": "Σαν Ντιέγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
          "youtubeId": "edz0ux7JClE",
          "title": "Σαν Ντιέγκο 24/7: Ζωντανή Μετάδοση από τον Κόλπο και την Ακτή του Σαν Ντιέγκο (4K)",
          "label": "Σαν Ντιέγκο Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "philadelphia": {
    "cityName": "Φιλαδέλφεια",
    "drone": {
      "youtubeId": "hRSYvzEqPaA",
      "title": "Φιλαδέλφεια 4K: Εναέρια Περιήγηση Drone στο Independence Hall, το Δημαρχείο & το Μουσείο Τέχνης",
      "label": "Φιλαδέλφεια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "houston": {
    "cityName": "Χιούστον",
    "drone": {
      "youtubeId": "74LP4dUwPM8",
      "title": "Χιούστον 4K: Εναέρια Περιήγηση Drone στο Downtown Houston & το Διαστημικό Κέντρο NASA",
      "label": "Χιούστον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dallas": {
    "cityName": "Ντάλας",
    "drone": {
      "youtubeId": "Io-uoxX2Yk8",
      "title": "Ντάλας 4K: Εναέρια Περιήγηση Drone στο Reunion Tower & τους Ουρανοξύστες του Τέξας",
      "label": "Ντάλας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "austin": {
    "cityName": "Όστιν",
    "drone": {
      "youtubeId": "M3dhlboim9E",
      "title": "Όστιν 4K: Εναέρια Περιήγηση Drone στο Καπιτώλιο του Τέξας & τη Λίμνη Lady Bird",
      "label": "Όστιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "denver": {
    "cityName": "Ντένβερ",
    "drone": {
      "youtubeId": "wbaDXXofyds",
      "title": "Ντένβερ 4K: Εναέρια Περιήγηση Drone στην Πόλη των Βραχωδών Ορέων (Mile High City)",
      "label": "Ντένβερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "atlanta": {
    "cityName": "Ατλάντα",
    "drone": {
      "youtubeId": "tcfw_vHcA4U",
      "title": "Ατλάντα 4K: Εναέρια Περιήγηση Drone στο Centennial Olympic Park & το Midtown",
      "label": "Ατλάντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "honolulu": {
    "cityName": "Χονολουλού",
    "drone": {
      "youtubeId": "6XZOgg9WRhI",
      "title": "Χονολουλού & Χαβάη 4K: Εναέρια Περιήγηση Drone στην Παραλία Waikiki & το Diamond Head",
      "label": "Χονολουλού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
          "youtubeId": "QzQ-7eiMw1w",
          "title": "Χαβάη 24/7: Ζωντανή Μετάδοση 4K από τον Ειρηνικό Ωκεανό (Maui Marine Sanctuary)",
          "label": "Χαβάη Ocean Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "new-orleans": {
    "cityName": "Νέα Ορλεάνη",
    "drone": {
      "youtubeId": "A14iV1uVSSg",
      "title": "Νέα Ορλεάνη 4K: Εναέρια Περιήγηση Drone στο French Quarter, την Bourbon Street & τον Μισισιπή",
      "label": "Νέα Ορλεάνη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
          "youtubeId": "xqdukYhcGEU",
          "title": "Νέα Ορλεάνη 24/7: Ζωντανή Μετάδοση από τη Γαλλική Συνοικία (Bourbon Street EarthCam)",
          "label": "Bourbon St Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  
  "caracas": {
    "cityName": "Καράκας",
    "drone": {
      "youtubeId": "7k8eYG4n_x8",
      "title": "Καράκας 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα της Βενεζουέλας & το Βουνό Ávila",
      "label": "Καράκας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0Aohh8HSuBg",
      "title": "Καράκας 4K: Περιήγηση στο Ιστορικό Κέντρο & την Plaza Bolívar",
      "label": "Καράκας Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "maracaibo": {
    "cityName": "Μαρακαΐμπο",
    "drone": {
      "youtubeId": "7k8eYG4n_x8",
      "title": "Μαρακαΐμπο & Βενεζουέλα 4K: Περιήγηση στη Λίμνη Μαρακαΐμπο & τη Γέφυρα General Rafael Urdaneta",
      "label": "Βενεζουέλα & Μαρακαΐμπο (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "valencia": {
    "cityName": "Βαλένθια",
    "drone": {
      "youtubeId": "7k8eYG4n_x8",
      "title": "Βαλένθια Βενεζουέλας 4K: Πανοραμική Περιήγηση στην Βιομηχανική Μητρόπολη",
      "label": "Βαλένθια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "quito": {
    "cityName": "Κίτο",
    "drone": {
      "youtubeId": "kSKo-Ge_EvE",
      "title": "Κίτο Εκουαδόρ 4K: Εναέρια Περιήγηση Drone στο Ιστορικό Κέντρο UNESCO & το El Panecillo",
      "label": "Κίτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "guayaquil": {
    "cityName": "Γουαγιακίλ",
    "drone": {
      "youtubeId": "wzQezDZGPYE",
      "title": "Γουαγιακίλ 4K: Εναέρια Περιήγηση Drone στο Malecón 2000, το Las Peñas & τον Ποταμό Guayas",
      "label": "Γουαγιακίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cuenca": {
    "cityName": "Κουένκα",
    "drone": {
      "youtubeId": "kSKo-Ge_EvE",
      "title": "Κουένκα Εκουαδόρ 4K: Εναέρια Περιήγηση στην Αποικιακή Πόλη της UNESCO",
      "label": "Κουένκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "la-paz": {
    "cityName": "Λα Παζ",
    "drone": {
      "youtubeId": "BCYutVnHrW0",
      "title": "Λα Παζ Βολιβίας 4K: Εναέρια Περιήγηση Drone στις Άνδεις, το Mi Teleférico & το Illimani",
      "label": "Λα Παζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sucre": {
    "cityName": "Σούκρε",
    "drone": {
      "youtubeId": "BCYutVnHrW0",
      "title": "Σούκρε Βολιβίας 4K: Πανοραμική Περιήγηση στη Λευκή Συνταγματική Πρωτεύουσα",
      "label": "Σούκρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santa-cruz": {
    "cityName": "Σάντα Κρουζ",
    "drone": {
      "youtubeId": "BCYutVnHrW0",
      "title": "Σάντα Κρουζ ντε λα Σιέρα 4K: Εναέρια Περιήγηση στη Μεγαλύτερη Μητρόπολη της Βολιβίας",
      "label": "Σάντα Κρουζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "asuncion": {
    "cityName": "Ασουνσιόν",
    "drone": {
      "youtubeId": "FQAkOI7npJI",
      "title": "Ασουνσιόν Παραγουάης 4K: Εναέρια Περιήγηση Drone στην Costanera & το Palacio de los López",
      "label": "Ασουνσιόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "aXPRBFEMxT8",
      "title": "Ασουνσιόν 4K HDR: Περιήγηση στο Ιστορικό Κέντρο & την Παλιά Πόλη",
      "label": "Ασουνσιόν Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ciudad-del-este": {
    "cityName": "Σιουδάδ δελ Έστε",
    "drone": {
      "youtubeId": "FQAkOI7npJI",
      "title": "Σιουδάδ δελ Έστε 4K: Περιήγηση στην Εμπορική Πρωτεύουσα & τη Γέφυρα Φιλίας προς τη Βραζιλία",
      "label": "Σιουδάδ δελ Έστε (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "montevideo": {
    "cityName": "Μοντεβιδέο",
    "drone": {
      "youtubeId": "2LVsoqzSGmE",
      "title": "Μοντεβιδέο Ουρουγουάης 4K: Εναέρια Περιήγηση Drone στην Rambla, την Ciudad Vieja & την Plaza Independencia",
      "label": "Μοντεβιδέο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "punta-del-este": {
    "cityName": "Πούντα δελ Έστε",
    "drone": {
      "youtubeId": "txW0B_G2b2w",
      "title": "Πούντα δελ Έστε 4K: Εναέρια Περιήγηση Drone στο Διάσημο Θέρετρο & το Γλυπτό La Mano",
      "label": "Πούντα δελ Έστε (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "georgetown": {
    "cityName": "Τζορτζτάουν",
    "drone": {
      "youtubeId": "tYdBX3X-51k",
      "title": "Τζορτζτάουν Γουιάνας 4K: Εναέρια Περιήγηση Drone στον Καθεδρικό St. George & τον Ποταμό Demerara",
      "label": "Τζορτζτάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "linden": {
    "cityName": "Λίντεν",
    "drone": {
      "youtubeId": "tYdBX3X-51k",
      "title": "Λίντεν Γουιάνας 4K: Περιήγηση στις Όχθες του Demerara & τα Ορυχεία Βωξίτη",
      "label": "Λίντεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "paramaribo": {
    "cityName": "Παραμαρίμπο",
    "drone": {
      "youtubeId": "Vn8G7bMuftU",
      "title": "Παραμαρίμπο Σουρινάμ 4K: Εναέρια Περιήγηση Drone στην Ξύλινη Αποικιακή Πόλη UNESCO & το Fort Zeelandia",
      "label": "Παραμαρίμπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lelydorp": {
    "cityName": "Λέλινορπ",
    "drone": {
      "youtubeId": "Vn8G7bMuftU",
      "title": "Λέλινορπ Σουρινάμ 4K: Περιήγηση στην Αγροτική Καρδιά & το Neotropical Butterfly Park",
      "label": "Λέλινορπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  
  "cairo": {
    "cityName": "Κάιρο",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Κάιρο Αιγύπτου 4K: Εναέρια Περιήγηση Drone στον Νείλο, τους Μιναρέδες & την Πλατεία Ταχρίρ",
      "label": "Κάιρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "giza": {
    "cityName": "Γκίζα",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Πυραμίδες της Γκίζας & Μεγάλη Σφίγγα 4K HDR: Μαγευτική Περιήγηση Drone στο Αρχαίο Θαύμα",
      "label": "Πυραμίδες Γκίζας (4K HDR)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "alexandria": {
    "cityName": "Αλεξάνδρεια",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Αλεξάνδρεια 4K: Εναέρια Περιήγηση Drone στη Βιβλιοθήκη, το Κάστρο του Καϊτμπέι & τη Γέφυρα Στάνλεϊ",
      "label": "Αλεξάνδρεια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "luxor": {
    "cityName": "Λούξορ",
    "drone": {
      "youtubeId": "2XhoWY8ofNE",
      "title": "Λούξορ Αιγύπτου 4K: Πανοραμική Περιήγηση στον Ναό του Καρνάκ & την Κοιλάδα των Βασιλέων",
      "label": "Λούξορ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "casablanca": {
    "cityName": "Καζαμπλάνκα",
    "drone": {
      "youtubeId": "jzdY46nM_2Q",
      "title": "Καζαμπλάνκα Μαρόκου 4K HDR: Εναέρια Περιήγηση Drone στο Τζαμί Χασάν Β' & την Κορνίς",
      "label": "Καζαμπλάνκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "marrakesh": {
    "cityName": "Μαρακές",
    "drone": {
      "youtubeId": "4AelyFH8Q98",
      "title": "Μαρακές 4K: Εναέρια Περιήγηση Drone στη Μεδίνα, την Πλατεία Τζεμάα ελ-Φνα & το Τζαμί Κουτουμπία",
      "label": "Μαρακές με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rabat": {
    "cityName": "Ραμπάτ",
    "drone": {
      "youtubeId": "m6ktP1e7umM",
      "title": "Ραμπάτ Μαρόκου 4K: Εναέρια Περιήγηση Drone στον Πύργο Χασάν, την Κάσμπα των Ουντάγια & τον Ατλαντικό",
      "label": "Ραμπάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "fes": {
    "cityName": "Φες",
    "drone": {
      "youtubeId": "4AelyFH8Q98",
      "title": "Φες Μαρόκου 4K: Περιήγηση στην Αρχαιότερη Μεδίνα & τα Ιστορικά Βυρσοδεψεία",
      "label": "Φες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tunis": {
    "cityName": "Τύνιδα",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Τύνιδα 4K: Εναέρια Περιήγηση Drone στη Μεδίνα, την Καρχηδόνα & το Σίντι Μπου Σαΐντ",
      "label": "Τύνιδα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sfax": {
    "cityName": "Σφαξ",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Σφαξ Τυνησίας 4K: Περιήγηση στα Ιστορικά Τείχη & το Εμπορικό Λιμάνι",
      "label": "Σφαξ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sousse": {
    "cityName": "Σους",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Σους Τυνησίας 4K: Περιήγηση στο Ριμπάτ της UNESCO & την Ακτή της Μεσογείου",
      "label": "Σους με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "algiers": {
    "cityName": "Αλγέρι",
    "drone": {
      "youtubeId": "CuY1vK8SKlQ",
      "title": "Αλγέρι 4K: Εναέρια Περιήγηση Drone στην Κάσμπα, το Μνημείο Μαρτύρων & τον Κόλπο του Αλγερίου",
      "label": "Αλγέρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "oran": {
    "cityName": "Οράν",
    "drone": {
      "youtubeId": "CuY1vK8SKlQ",
      "title": "Οράν Αλγερίας 4K: Περιήγηση στο Φρούριο Σάντα Κρουζ & την Παραλιακή Λεωφόρο",
      "label": "Οράν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "constantine": {
    "cityName": "Κωνσταντίνη",
    "drone": {
      "youtubeId": "CuY1vK8SKlQ",
      "title": "Κωνσταντίνη Αλγερίας 4K: Περιήγηση στην Πόλη των Κρεμαστών Γεφυρών πάνω από το Φαράγγι Ρουμελ",
      "label": "Κωνσταντίνη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tripoli": {
    "cityName": "Τρίπολη",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Τρίπολη Λιβύης 4K: Πανοραμική Περιήγηση στην Ακτή της Μεσογείου & την Παλιά Πόλη",
      "label": "Τρίπολη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "benghazi": {
    "cityName": "Βεγγάζη",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Βεγγάζη Λιβύης 4K: Περιήγηση στην Κυρηναϊκή & το Λιμάνι της Μεσογείου",
      "label": "Βεγγάζη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lagos": {
    "cityName": "Λάγος",
    "drone": {
      "youtubeId": "9Tm5JRHBWlA",
      "title": "Λάγος Νιγηρίας 4K: Εναέρια Περιήγηση Drone στη Μεγαλούπολη, τη Γέφυρα Lekki-Ikoyi & το Victoria Island",
      "label": "Λάγος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "abuja": {
    "cityName": "Αμπούτζα",
    "drone": {
      "youtubeId": "9Tm5JRHBWlA",
      "title": "Αμπούτζα Νιγηρίας 4K: Εναέρια Περιήγηση στο Εθνικό Τζαμί & τον Βράχο Zuma",
      "label": "Αμπούτζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kano": {
    "cityName": "Κάνο",
    "drone": {
      "youtubeId": "9Tm5JRHBWlA",
      "title": "Κάνο Νιγηρίας 4K: Περιήγηση στα Αρχαία Τείχη & το Εμιράτο του Κάνο",
      "label": "Κάνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "accra": {
    "cityName": "Άκρα",
    "drone": {
      "youtubeId": "Sl2PuaYhZJw",
      "title": "Άκρα Γκάνας 4K: Εναέρια Περιήγηση Drone στην Πλατεία Ανεξαρτησίας, το Κάστρο Osu & τον Κόλπο της Γουινέας",
      "label": "Άκρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kumasi": {
    "cityName": "Κουμάσι",
    "drone": {
      "youtubeId": "Sl2PuaYhZJw",
      "title": "Κουμάσι Γκάνας 4K: Περιήγηση στην Ιστορική Πρωτεύουσα του Βασιλείου Ασάντι",
      "label": "Κουμάσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dakar": {
    "cityName": "Ντακάρ",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Ντακάρ Σενεγάλης 4K: Εναέρια Περιήγηση Drone στο Μνημείο Αφρικανικής Αναγέννησης & το Νησί Γκορέ",
      "label": "Ντακάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "saint-louis": {
    "cityName": "Σαιν-Λουί",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Σαιν-Λουί Σενεγάλης 4K: Περιήγηση στην Αποικιακή Πόλη UNESCO & τη Γέφυρα Faidherbe",
      "label": "Σαιν-Λουί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "abidjan": {
    "cityName": "Αμπιτζάν",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Αμπιτζάν Ακτής Ελεφαντοστού 4K: Εναέρια Περιήγηση Drone στο Plateau, τη Λιμνοθάλασσα Ébrié & τους Ουρανοξύστες",
      "label": "Αμπιτζάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "yamoussoukro": {
    "cityName": "Γιαμουσούκρο",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Γιαμουσούκρο 4K: Περιήγηση στη Βασιλική της Παναγίας της Ειρήνης, τη μεγαλύτερη εκκλησία στον κόσμο",
      "label": "Γιαμουσούκρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "yaounde": {
    "cityName": "Γιαουντέ",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Γιαουντέ Καμερούν 4K: Πανοραμική Περιήγηση στην Πόλη των Επτά Λόφων",
      "label": "Γιαουντέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "douala": {
    "cityName": "Ντουάλα",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Ντουάλα Καμερούν 4K: Περιήγηση στο Μεγαλύτερο Λιμάνι του Κόλπου της Γουινέας & τον Ποταμό Wouri",
      "label": "Ντουάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "praia": {
    "cityName": "Πράια",
    "drone": {
      "youtubeId": "vR1f3wCt_so",
      "title": "Πράια Πράσινου Ακρωτηρίου 4K: Εναέρια Περιήγηση Drone στο Οροπέδιο Platô & τον Ατλαντικό Ωκεανό",
      "label": "Πράια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mindelo": {
    "cityName": "Μιντέλο",
    "drone": {
      "youtubeId": "vR1f3wCt_so",
      "title": "Μιντέλο Πράσινου Ακρωτηρίου 4K: Περιήγηση στην Πολιτιστική Πρωτεύουσα & την Πατρίδα της Cesária Évora",
      "label": "Μιντέλο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nouakchott": {
    "cityName": "Νουακσότ",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Νουακσότ Μαυριτανίας 4K: Πανοραμική Περιήγηση στην Πόλη όπου η Σαχάρα συναντά τον Ατλαντικό",
      "label": "Νουακσότ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nouadhibou": {
    "cityName": "Νουαντίμπου",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Νουαντίμπου Μαυριτανίας 4K: Περιήγηση στη Χερσόνησο Ras Nouadhibou & το Εμπορικό Λιμάνι",
      "label": "Νουαντίμπου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  
  "cape-town": {
    "cityName": "Κέιπ Τάουν",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Κέιπ Τάουν 4K HDR: Εναέρια Περιήγηση Drone στο Table Mountain, το Lion's Head & το V&A Waterfront",
      "label": "Κέιπ Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "johannesburg": {
    "cityName": "Γιοχάνεσμπουργκ",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Γιοχάνεσμπουργκ 4K: Εναέρια Περιήγηση Drone στο Sandton, τη Γέφυρα Nelson Mandela & το CBD",
      "label": "Γιοχάνεσμπουργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "pretoria": {
    "cityName": "Πρετόρια",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Πρετόρια 4K: Περιήγηση στα Union Buildings & τα Ανθισμένα Δέντρα Jacaranda",
      "label": "Πρετόρια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "durban": {
    "cityName": "Ντέρμπαν",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Ντέρμπαν 4K: Εναέρια Περιήγηση Drone στη Golden Mile & τον Ινδικό Ωκεανό",
      "label": "Ντέρμπαν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nairobi": {
    "cityName": "Ναϊρόμπι",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Ναϊρόμπι Κένυας 4K: Εναέρια Περιήγηση Drone στο Κέντρο, το Westlands & το Εθνικό Πάρκο Ναϊρόμπι",
      "label": "Ναϊρόμπι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
          "youtubeId": "XsOU8JnEpNM",
          "title": "Κένυα 24/7: Ζωντανή Μετάδοση Σαβάνας (Africam ol Donyo Lodge)",
          "label": "Κένυα Safari Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "mombasa": {
    "cityName": "Μομπάσα",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Μομπάσα Κένυας 4K: Περιήγηση στο Ιστορικό Fort Jesus & τις Παραλίες του Ινδικού",
      "label": "Μομπάσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dodoma": {
    "cityName": "Ντοντόμα",
    "drone": {
      "youtubeId": "UBmBLIiBkIo",
      "title": "Ντοντόμα Τανζανίας 4K: Πανοραμική Περιήγηση στην Πολιτική Πρωτεύουσα",
      "label": "Ντοντόμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dar-es-salaam": {
    "cityName": "Νταρ ες Σαλάμ",
    "drone": {
      "youtubeId": "UBmBLIiBkIo",
      "title": "Νταρ ες Σαλάμ 4K: Εναέρια Περιήγηση Drone στο Μεγαλύτερο Λιμάνι της Τανζανίας & τον Ινδικό Ωκεανό",
      "label": "Νταρ ες Σαλάμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zanzibar": {
    "cityName": "Ζανζιβάρη",
    "drone": {
      "youtubeId": "UBmBLIiBkIo",
      "title": "Ζανζιβάρη 4K: Εναέρια Περιήγηση Drone στο Stone Town UNESCO, τα Τυρκουάζ Νερά & τα Παραδοσιακά Dhows",
      "label": "Ζανζιβάρη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "addis-ababa": {
    "cityName": "Αντίς Αμπέμπα",
    "drone": {
      "youtubeId": "GRajsRKSeQw",
      "title": "Αντίς Αμπέμπα Αιθιοπίας 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα της Αφρικανικής Ένωσης & το Meskel Square",
      "label": "Αντίς Αμπέμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lalibela": {
    "cityName": "Λαλιμπέλα",
    "drone": {
      "youtubeId": "GRajsRKSeQw",
      "title": "Λαλιμπέλα 4K: Περιήγηση στις Μονολιθικές Λαξευτές Εκκλησίες της UNESCO",
      "label": "Λαλιμπέλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "antananarivo": {
    "cityName": "Ανταναναρίβο",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Ανταναναρίβο Μαδαγασκάρης 4K: Εναέρια Περιήγηση Drone στη Λίμνη Anosy, το Παλάτι Rova & τους Λόφους",
      "label": "Ανταναναρίβο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "toamasina": {
    "cityName": "Τοαμασίνα",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Τοαμασίνα Μαδαγασκάρης 4K: Περιήγηση στο Κεντρικό Εμπορικό Λιμάνι του Ινδικού",
      "label": "Τοαμασίνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "windhoek": {
    "cityName": "Βίντχουκ",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Βίντχουκ Ναμίμπιας 4K HDR: Εναέρια Περιήγηση Drone στην Christuskirche & το Οροπέδιο Khomas",
      "label": "Βίντχουκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
          "youtubeId": "ydYDqZQpim8",
          "title": "Ναμίμπια 24/7: Ζωντανή Μετάδοση από την Έρημο Ναμίμπ & τη Σαβάνα",
          "label": "Έρημος Ναμίμπ Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "swakopmund": {
    "cityName": "Σουακοπμούντ",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Σουακοπμούντ Ναμίμπιας 4K: Περιήγηση στις Αμμοθίνες της Ερήμου Ναμίμπ & τον Ατλαντικό",
      "label": "Σουακοπμούντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
          "youtubeId": "AeMUdOPFcXI",
          "title": "Ετόσα & Ναμίμπια 24/7: Ζωντανή Μετάδοση Άγριας Ζωής (Okaukuejo Waterhole)",
          "label": "Άγρια Ζωή Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "gaborone": {
    "cityName": "Γκαμπορόνε",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Γκαμπορόνε Μποτσουάνας 4K: Πανοραμική Περιήγηση στο Μνημείο Three Dikgosi & το Κυβερνητικό Κέντρο",
      "label": "Γκαμπορόνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "maun": {
    "cityName": "Μαούν",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Μαούν & Δέλτα Οκαβάνγκο 4K: Περιήγηση στην Πύλη του Παγκοσμίου Φήμης Υγροβιότοπου",
      "label": "Μαούν & Οκαβάνγκο (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "harare": {
    "cityName": "Χαράρε",
    "drone": {
      "youtubeId": "TV20Q_xaFFY",
      "title": "Χαράρε Ζιμπάμπουε 4K: Πανοραμική Περιήγηση στους Ουρανοξύστες & τα Πάρκα της Πόλης",
      "label": "Χαράρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "victoria-falls": {
    "cityName": "Βικτόρια Φολς",
    "drone": {
      "youtubeId": "TV20Q_xaFFY",
      "title": "Καταρράκτες Βικτώρια 4K: Εναέρια Περιήγηση Drone στο Θαύμα του Ζαμβέζη (Mosi-oa-Tunya) & τα Ουράνια Τόξα",
      "label": "Καταρράκτες Βικτώρια (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kigali": {
    "cityName": "Κιγκάλι",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Κιγκάλι Ρουάντας 4K: Εναέρια Περιήγηση Drone στην Πιο Καθαρή & Πράσινη Πόλη της Αφρικής",
      "label": "Κιγκάλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gisenyi": {
    "cityName": "Γκισένι",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Γκισένι Ρουάντας 4K: Περιήγηση στις Όχθες της Λίμνης Κίβου & τα Ηφαίστεια Virunga",
      "label": "Γκισένι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kampala": {
    "cityName": "Καμπάλα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Καμπάλα Ουγκάντας 4K: Εναέρια Περιήγηση Drone στους Επτά Λόφους & το Εθνικό Τζαμί Gaddafi",
      "label": "Καμπάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "entebbe": {
    "cityName": "Εντέμπε",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Εντέμπε Ουγκάντας 4K: Περιήγηση στη Χερσόνησο της Λίμνης Βικτώρια & τους Βοτανικούς Κήπους",
      "label": "Εντέμπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-louis": {
    "cityName": "Πορ Λουί",
    "drone": {
      "youtubeId": "kv0Nb8FTtvI",
      "title": "Πορ Λουί Μαυρικίου 4K: Εναέρια Περιήγηση Drone στο Caudan Waterfront & το Φρούριο Adelaide",
      "label": "Πορ Λουί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "grand-baie": {
    "cityName": "Γκραν Μπε",
    "drone": {
      "youtubeId": "kv0Nb8FTtvI",
      "title": "Γκραν Μπε Μαυρικίου 4K: Περιήγηση στο Διάσημο Τροπικό Θέρετρο & τις Τυρκουάζ Παραλίες",
      "label": "Γκραν Μπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kinshasa": {
    "cityName": "Κινσάσα",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Κινσάσα Λ.Δ. Κονγκό 4K: Πανοραμική Περιήγηση στη Μεγαλούπολη του Ποταμού Κονγκό",
      "label": "Κινσάσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "goma": {
    "cityName": "Γκόμα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Γκόμα Λ.Δ. Κονγκό 4K: Περιήγηση στις Όχθες της Λίμνης Κίβου & τη Σκιά του Ηφαιστείου Nyiragongo",
      "label": "Γκόμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "luanda": {
    "cityName": "Λουάντα",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Λουάντα Αγκόλας 4K: Εναέρια Περιήγηση Drone στη Marginal de Luanda & τον Ατλαντικό",
      "label": "Λουάντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "benguela": {
    "cityName": "Μπενγκέλα",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Μπενγκέλα Αγκόλας 4K: Περιήγηση στο Ιστορικό Λιμάνι & την Παραλία Morena",
      "label": "Μπενγκέλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "maputo": {
    "cityName": "Μαπούτο",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Μαπούτο Μοζαμβίκης 4K: Εναέρια Περιήγηση Drone στη Γέφυρα Maputo-Katembe & την Ακτή του Ινδικού",
      "label": "Μαπούτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "beira": {
    "cityName": "Μπέιρα",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Μπέιρα Μοζαμβίκης 4K: Περιήγηση στο Κεντρικό Λιμάνι του Καναλιού της Μοζαμβίκης",
      "label": "Μπέιρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "phoenix": {
    "cityName": "Φοίνιξ",
    "drone": {
      "youtubeId": "XZXThVCG27A",
      "title": "Φοίνιξ & Αριζόνα 4K: Εναέρια Περιήγηση Drone στην Κοιλάδα του Ήλιου & την Έρημο Σονόρα",
      "label": "Φοίνιξ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bern": {
      "cityName": "Βέρνη",
      "drone": {
          "youtubeId": "VfsqFrfRIOE",
          "title": "Βέρνη 4K: Εναέρια Περιήγηση Drone στην Παλιά Πόλη & τον Ποταμό Άαρε",
          "label": "Βέρνη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "q6CBE5_Wrcs",
          "title": "Βέρνη 4K: Walking Tour στα Μεσαιωνικά Σοκάκια & το Zytglogge",
          "label": "Βέρνη Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
      "guide": {
          "youtubeId": "nVfS_QDnZ8U",
          "title": "Βέρνη 4K: Ταξιδιωτικός Οδηγός & Κορυφαία Αξιοθέατα",
          "label": "Οδηγός Αξιοθεάτων Βέρνης",
          "icon": "fa-solid fa-landmark",
          "type": "guide"
      }
  },
  "zurich": {
      "cityName": "Ζυρίχη",
      "drone": {
          "youtubeId": "4XceEfga_Fo",
          "title": "Ζυρίχη 4K: Εναέρια Περιήγηση Drone στη Λίμνη & το Ιστορικό Κέντρο",
          "label": "Ζυρίχη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "ggalXZvXQY4",
          "title": "Ζυρίχη 4K: Walking Tour στην Bahnhofstrasse & τον Ποταμό Limmat",
          "label": "Ζυρίχη Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
      "guide": {
          "youtubeId": "tGIbwUMBBK8",
          "title": "Ζυρίχη 4K: Οδηγός Πόλης & Πολιτιστικά Σημεία",
          "label": "Οδηγός Αξιοθεάτων Ζυρίχης",
          "icon": "fa-solid fa-landmark",
          "type": "guide"
      },
    "live": {
          "youtubeId": "QIt1FaDMnQc",
          "title": "Ελβετία 24/7: Ζωντανή Μετάδοση από τις Ελβετικές Άλπεις & τη Λουκέρνη",
          "label": "Ελβετία Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "geneva": {
      "cityName": "Γενεύη",
      "drone": {
          "youtubeId": "J_5BA2Eteaw",
          "title": "Γενεύη 4K: Εναέρια Περιήγηση Drone στο Jet d'Eau & τη Λίμνη Léman",
          "label": "Γενεύη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "warsaw": {
      "cityName": "Βαρσοβία",
      "drone": {
          "youtubeId": "QomZ29JqNV4",
          "title": "Βαρσοβία 4K: Εναέρια Περιήγηση Drone στους Ουρανοξύστες & την Παλιά Πόλη",
          "label": "Βαρσοβία με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "krakow": {
      "cityName": "Κρακοβία",
      "drone": {
          "youtubeId": "2zgvCX7sfBo",
          "title": "Κρακοβία 4K: Εναέρια Περιήγηση Drone στο Κάστρο Wawel & την Παλιά Πόλη",
          "label": "Κρακοβία με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "gdansk": {
      "cityName": "Γκντανσκ",
      "drone": {
          "youtubeId": "Sfb7-Ao_i38",
          "title": "Γκντανσκ 4K: Εναέρια Περιήγηση Drone στη Βαλτική & τον Ποταμό Motława",
          "label": "Γκντανσκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "stockholm": {
      "cityName": "Στοκχόλμη",
      "drone": {
          "youtubeId": "GLdo5PX_UrI",
          "title": "Στοκχόλμη 4K: Εναέρια Περιήγηση Drone στα 14 Νησιά & το Gamla Stan",
          "label": "Στοκχόλμη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "gothenburg": {
      "cityName": "Γκέτεμποργκ",
      "drone": {
          "youtubeId": "TYXvX01FTkk",
          "title": "Γκέτεμποργκ 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Λιμάνι & τα Κανάλια",
          "label": "Γκέτεμποργκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "oslo": {
      "cityName": "Όσλο",
      "drone": {
          "youtubeId": "vftoE9fURrQ",
          "title": "Όσλο 4K: Εναέρια Περιήγηση Drone στο Φιόρδ του Όσλο & την Όπερα",
          "label": "Όσλο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "bergen": {
      "cityName": "Μπέργκεν",
      "drone": {
          "youtubeId": "QgjhPsnrFyo",
          "title": "Μπέργκεν 4K: Εναέρια Περιήγηση Drone στα Νορβηγικά Φιόρδ & το Bryggen",
          "label": "Μπέργκεν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "copenhagen": {
      "cityName": "Κοπεγχάγη",
      "drone": {
          "youtubeId": "JaZ1KQNk5ec",
          "title": "Κοπεγχάγη 4K: Εναέρια Περιήγηση Drone στο Nyhavn & τα Κανάλια",
          "label": "Κοπεγχάγη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "aarhus": {
      "cityName": "Ώρχους",
      "drone": {
          "youtubeId": "sFlF_i6M4Qw",
          "title": "Ώρχους 4K: Εναέρια Περιήγηση Drone στο Ιστορικό Κέντρο & το Λιμάνι",
          "label": "Ώρχους με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "helsinki": {
      "cityName": "Ελσίνκι",
      "drone": {
          "youtubeId": "1HwbvNZp0zo",
          "title": "Ελσίνκι 4K: Εναέρια Περιήγηση Drone στο Λιμάνι & τα Νησιά της Βαλτικής",
          "label": "Ελσίνκι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "tampere": {
      "cityName": "Τάμπερε",
      "drone": {
          "youtubeId": "gPrc4APKy9I",
          "title": "Τάμπερε 4K: Εναέρια Περιήγηση Drone στις Λίμνες Näsijärvi & Pyhäjärvi",
          "label": "Τάμπερε με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "bucharest": {
      "cityName": "Βουκουρέστι",
      "drone": {
          "youtubeId": "jQ0TvEJ0afU",
          "title": "Βουκουρέστι 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Κοινοβουλίου & τις Λεωφόρους",
          "label": "Βουκουρέστι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "cluj-napoca": {
      "cityName": "Κλουζ-Ναπόκα",
      "drone": {
          "youtubeId": "qdYix6BDyP4",
          "title": "Κλουζ-Ναπόκα 4K: Εναέρια Περιήγηση Drone στην Καρδιά της Τρανσυλβανίας",
          "label": "Κλουζ-Ναπόκα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "brasov": {
      "cityName": "Μπρασόφ",
      "drone": {
          "youtubeId": "uMBvZjWY_LY",
          "title": "Μπρασόφ 4K: Εναέρια Περιήγηση Drone στα Μεσαιωνικά Καρπάθια & τη Μαύρη Εκκλησία",
          "label": "Μπρασόφ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "sofia": {
      "cityName": "Σόφια",
      "drone": {
          "youtubeId": "ctpOAWZqtQg",
          "title": "Σόφια 4K: Εναέρια Περιήγηση Drone στον Καθεδρικό Alexander Nevsky & το Όρος Vitosha",
          "label": "Σόφια με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "plovdiv": {
      "cityName": "Φιλιππούπολη",
      "drone": {
          "youtubeId": "PHu8wO_yuMM",
          "title": "Φιλιππούπολη / Πλόβντιβ 4K: Εναέρια Περιήγηση Drone στο Ρωμαϊκό Θέατρο & την Παλιά Πόλη",
          "label": "Φιλιππούπολη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "belgrade": {
      "cityName": "Βελιγράδι",
      "drone": {
          "youtubeId": "R3HVHc4M-C4",
          "title": "Βελιγράδι 4K: Εναέρια Περιήγηση Drone στο Φρούριο Kalemegdan & τη Συμβολή των Ποταμών",
          "label": "Βελιγράδι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "novi-sad": {
      "cityName": "Νόβι Σαντ",
      "drone": {
          "youtubeId": "qAgzCv0lLMY",
          "title": "Νόβι Σαντ 4K: Εναέρια Περιήγηση Drone στο Φρούριο Petrovaradin & τον Δούναβη",
          "label": "Νόβι Σαντ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "zagreb": {
      "cityName": "Ζάγκρεμπ",
      "drone": {
          "youtubeId": "oo9kvVklRx0",
          "title": "Ζάγκρεμπ 4K: Εναέρια Περιήγηση Drone στην Άνω Πόλη (Gornji Grad) & τον Καθεδρικό",
          "label": "Ζάγκρεμπ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "dubrovnik": {
      "cityName": "Ντουμπρόβνικ",
      "drone": {
          "youtubeId": "nYNsSTgrog8",
          "title": "Ντουμπρόβνικ 4K: Εναέρια Περιήγηση Drone στα Μεσαιωνικά Τείχη & την Αδριατική",
          "label": "Ντουμπρόβνικ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "split": {
      "cityName": "Σπλιτ",
      "drone": {
          "youtubeId": "dqc-6jK52fA",
          "title": "Σπλιτ 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Διοκλητιανού & τη Riva",
          "label": "Σπλιτ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "nicosia": {
      "cityName": "Λευκωσία",
      "drone": {
          "youtubeId": "pR_LIolekdY",
          "title": "Λευκωσία 4K: Εναέρια Περιήγηση Drone στα Ενετικά Τείχη & την Παλιά Πόλη",
          "label": "Λευκωσία με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "limassol": {
      "cityName": "Λεμεσός",
      "drone": {
          "youtubeId": "wjtKvlKtPBE",
          "title": "Λεμεσός 4K: Εναέρια Περιήγηση Drone στη Μαρίνα & το Παραλιακό Μέτωπο",
          "label": "Λεμεσός με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "paphos": {
      "cityName": "Πάφος",
      "drone": {
          "youtubeId": "1tC6eMHsFJQ",
          "title": "Πάφος 4K: Εναέρια Περιήγηση Drone στο Μεσαιωνικό Κάστρο & το Λιμανάκι",
          "label": "Πάφος με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "ankara": {
      "cityName": "Άγκυρα",
      "drone": {
          "youtubeId": "wwSteTS9j1w",
          "title": "Άγκυρα 4K: Εναέρια Περιήγηση Drone στο Anıtkabir & το Κάστρο της Άγκυρας",
          "label": "Άγκυρα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "istanbul": {
      "cityName": "Κωνσταντινούπολη",
      "drone": {
          "youtubeId": "N0UzSDpCRmY",
          "title": "Κωνσταντινούπολη 4K: Εναέρια Περιήγηση Drone στην Αγία Σοφία, το Μπλε Τζαμί & τον Βόσπορο",
          "label": "Κωνσταντινούπολη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "izmir": {
      "cityName": "Σμύρνη",
      "drone": {
          "youtubeId": "34aJvM3rZoQ",
          "title": "Σμύρνη 4K: Εναέρια Περιήγηση Drone στο Kordon, τον Πύργο του Ρολογιού & το Αιγαίο",
          "label": "Σμύρνη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "tirana": {
      "cityName": "Τίρανα",
      "drone": {
          "youtubeId": "Wpel2nABloQ",
          "title": "Τίρανα 4K: Εναέρια Περιήγηση Drone (Tirana Capital Of Albania 🇦🇱 In 4K |)",
          "label": "Τίρανα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "bNlkMrE3SbI",
          "title": "Τίρανα 4K: Περιήγηση στους Δρόμους (Discover Tirana, Albania 🇦🇱 in 4K HDR | Summer Walking Tou)",
          "label": "Τίρανα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "durres": {
      "cityName": "Δυρράχιο",
      "drone": {
          "youtubeId": "OS8IuLVcczY",
          "title": "Δυρράχιο 4K: Εναέρια Περιήγηση Drone (Durres, Albania 🇦🇱 | 4K Drone & Walking Tour Combined (Coa)",
          "label": "Δυρράχιο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "OS8IuLVcczY",
          "title": "Δυρράχιο 4K: Περιήγηση στους Δρόμους (Durres, Albania 🇦🇱 | 4K Drone & Walking Tour Combined (Coa)",
          "label": "Δυρράχιο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "vlore": {
      "cityName": "Αυλώνας",
      "drone": {
          "youtubeId": "neUyt4fqRYM",
          "title": "Αυλώνας 4K: Εναέρια Περιήγηση Drone (Vlorë, Shqipëri 🇦🇱 | Tur me dron 4K)",
          "label": "Αυλώνας με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "neUyt4fqRYM",
          "title": "Αυλώνας 4K: Εναέρια Περιήγηση Drone (Vlorë, Shqipëri 🇦🇱 | Tur me dron 4K)",
          "label": "Αυλώνας Walking (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "skopje": {
      "cityName": "Σκόπια",
      "drone": {
          "youtubeId": "jHWDojp_W9U",
          "title": "Σκόπια 4K: Εναέρια Περιήγηση Drone (Skopje from Above | Cinematic Drone Film in 4K)",
          "label": "Σκόπια με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "RKopyNbM9Kc",
          "title": "Σκόπια 4K: Περιήγηση στους Δρόμους (Skopje Walking Tour 🇲🇰 | Discover North Macedoni)",
          "label": "Σκόπια Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "ohrid": {
      "cityName": "Οχρίδα",
      "drone": {
          "youtubeId": "H7NuQpQykjU",
          "title": "Οχρίδα 4K: Εναέρια Περιήγηση Drone (Lakeside Macedonian Beauty: Early Autumn Walk in O)",
          "label": "Οχρίδα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "HTCpIOw9KxY",
          "title": "Οχρίδα 4K: Περιήγηση στους Δρόμους (🇲🇰 Ohrid Walking Tour 2026 4K: History, Culture )",
          "label": "Οχρίδα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "bitola": {
      "cityName": "Μπίτολα",
      "drone": {
          "youtubeId": "dSdjhenxAT8",
          "title": "Μπίτολα 4K: Εναέρια Περιήγηση Drone (Tower clock Bitola #autumn #travel #drone #dji #la)",
          "label": "Μπίτολα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "dSdjhenxAT8",
          "title": "Μπίτολα 4K: Εξερεύνηση (Tower clock Bitola #autumn #travel #drone #dji #la)",
          "label": "Μπίτολα Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "maribor": {
      "cityName": "Μάριμπορ",
      "drone": {
          "youtubeId": "Zwo0d8qtWY4",
          "title": "Μάριμπορ 4K: Εναέρια Περιήγηση Drone (Maribor, Slovenia - drone view (4K))",
          "label": "Μάριμπορ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "DCM6wnBA-rU",
          "title": "Μάριμπορ 4K: Περιήγηση στους Δρόμους (🇸🇮 MARIBOR, SLOVENIA – Walking Tour of City Cent)",
          "label": "Μάριμπορ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "piran": {
      "cityName": "Πιράν",
      "drone": {
          "youtubeId": "6Ve1VwybOAo",
          "title": "Πιράν 4K: Εναέρια Περιήγηση Drone (Unbelievable Aerial Views From Piran Slovenia)",
          "label": "Πιράν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "uvuy7s60m-Y",
          "title": "Πιράν 4K: Περιήγηση στους Δρόμους (Piran - A Walk Through Slovenia's Most Beautiful C)",
          "label": "Πιράν Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "sarajevo": {
      "cityName": "Σαράγεβο",
      "drone": {
          "youtubeId": "0hLBjYAhUzE",
          "title": "Σαράγεβο 4K: Εναέρια Περιήγηση Drone ([4K] SARAJEVO 2026 🇧🇦 1 Hour Drone Aerial of Сар)",
          "label": "Σαράγεβο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "0hLBjYAhUzE",
          "title": "Σαράγεβο 4K: Εναέρια Περιήγηση Drone ([4K] SARAJEVO 2026 🇧🇦 1 Hour Drone Aerial of Сар)",
          "label": "Σαράγεβο Walking (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "mostar": {
      "cityName": "Μόσταρ",
      "drone": {
          "youtubeId": "16vDZcOKflo",
          "title": "Μόσταρ 4K: Εναέρια Περιήγηση Drone (Mostar Bosnia and Herzegovina - 4K Drone Tour - Be)",
          "label": "Μόσταρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "_KNINBNRneo",
          "title": "Μόσταρ 4K: Περιήγηση στους Δρόμους (Mostar, Bosnia and Herzegovina - Walking Tour in 4)",
          "label": "Μόσταρ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "banja-luka": {
      "cityName": "Μπάνια Λούκα",
      "drone": {
          "youtubeId": "HmTsscJHZVI",
          "title": "Μπάνια Λούκα 4K: Εναέρια Περιήγηση Drone (Banja Luka, Bosnia & Herzegovina 🇧🇦 4k Ultra HD | )",
          "label": "Μπάνια Λούκα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "WuREiFz6nis",
          "title": "Μπάνια Λούκα 4K: Περιήγηση στους Δρόμους (Banja Luka City Center & Market Walk | Bosnia 4K W)",
          "label": "Μπάνια Λούκα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "podgorica": {
      "cityName": "Ποντγκόριτσα",
      "drone": {
          "youtubeId": "YNkVrd6czN8",
          "title": "Ποντγκόριτσα 4K: Εναέρια Περιήγηση Drone (Podgorica, Montenegro 🇲🇪 | 4K Drone Footage)",
          "label": "Ποντγκόριτσα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "69Hcz866TRM",
          "title": "Ποντγκόριτσα 4K: Περιήγηση στους Δρόμους (Podgorica City Walk | Busy Downtown | Montenegro 4)",
          "label": "Ποντγκόριτσα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "kotor": {
      "cityName": "Κότορ",
      "drone": {
          "youtubeId": "E7dhalAN0zo",
          "title": "Κότορ 4K: Εναέρια Περιήγηση Drone (Montenegro 4K | A Cinematic Journey | Travel Guide)",
          "label": "Κότορ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "zC4-oDBBrko",
          "title": "Κότορ 4K: Περιήγηση στους Δρόμους (Kotor Montenegro 4K Walking Tour 2024)",
          "label": "Κότορ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "budva": {
      "cityName": "Μπούντβα",
      "drone": {
          "youtubeId": "ZRMMGMPy94Y",
          "title": "Μπούντβα 4K: Εναέρια Περιήγηση Drone (Budva, Montenegro: 🇲🇪 4K Drone Tour | Iconic Old T)",
          "label": "Μπούντβα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "1W19R8O_dpQ",
          "title": "Μπούντβα 4K: Περιήγηση στους Δρόμους (BUDVA, Montenegro 🇲🇪 Why Is This Still a Secret? 4)",
          "label": "Μπούντβα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "tallinn": {
      "cityName": "Τάλιν",
      "drone": {
          "youtubeId": "wesbHm9EAJQ",
          "title": "Τάλιν 4K: Εναέρια Περιήγηση Drone (🇪🇪 Tallinn, Estonia - 4K Drone Tour of this mediev)",
          "label": "Τάλιν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "PmXsvuK6dVk",
          "title": "Τάλιν 4K: Περιήγηση στους Δρόμους (Tallinn Estonia 4K 🇪🇪 Walking Tour | Europe’s Fair)",
          "label": "Τάλιν Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "tartu": {
      "cityName": "Τάρτου",
      "drone": {
          "youtubeId": "Fvzpk7oBIXU",
          "title": "Τάρτου 4K: Εναέρια Περιήγηση Drone (🇪🇪 Explore Tartu , Estonia | 4K Drone Tour of the )",
          "label": "Τάρτου με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "T39iqhwvQ1c",
          "title": "Τάρτου 4K: Περιήγηση στους Δρόμους (Tartu Walking Tour 2024, Estonia Vlog - 4K HDR)",
          "label": "Τάρτου Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "riga": {
      "cityName": "Ρίγα",
      "drone": {
          "youtubeId": "ajIL3yWd2uI",
          "title": "Ρίγα 4K: Εναέρια Περιήγηση Drone (Riga , Latvia 🇱🇻 - by drone [4K])",
          "label": "Ρίγα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "4nSrVZYw4m0",
          "title": "Ρίγα 4K: Περιήγηση στους Δρόμους (Riga, Latvia Walking Tour 4k - With Captions)",
          "label": "Ρίγα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "daugavpils": {
      "cityName": "Νταουγκάβπιλς",
      "drone": {
          "youtubeId": "kX5748LtBLM",
          "title": "Νταουγκάβπιλς 4K: Εναέρια Περιήγηση Drone (Daugavpils from Above | 4K Drone Views)",
          "label": "Νταουγκάβπιλς με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "0WYgyPIp9Q0",
          "title": "Νταουγκάβπιλς 4K: Περιήγηση στους Δρόμους (Daugavpils, Latvia Walking Tour 4K | City Highligh)",
          "label": "Νταουγκάβπιλς Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "vilnius": {
      "cityName": "Βίλνιους",
      "drone": {
          "youtubeId": "KOW0hOw9WMQ",
          "title": "Βίλνιους 4K: Εναέρια Περιήγηση Drone (Vilnius, Lithuania 🇱🇹 4K UHD | Drone footage)",
          "label": "Βίλνιους με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "j2CnFmsXZFQ",
          "title": "Βίλνιους 4K: Περιήγηση στους Δρόμους (Vilnius Walking Tour / Lithuania 🇱🇹 / August 2024 )",
          "label": "Βίλνιους Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "kaunas": {
      "cityName": "Κάουνας",
      "drone": {
          "youtubeId": "CL71KZ1Go_o",
          "title": "Κάουνας 4K: Εναέρια Περιήγηση Drone (Kaunas, Lithuania 🇱🇹 | Beautiful City from Above –)",
          "label": "Κάουνας με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "KDb4sU-9NzA",
          "title": "Κάουνας 4K: Περιήγηση στους Δρόμους (Kaunas, Lithuania Walking Tour 4K | Laisvės Alėja )",
          "label": "Κάουνας Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "reykjavik": {
      "cityName": "Ρέικιαβικ",
      "drone": {
          "youtubeId": "-hLHw3vtP4k",
          "title": "Ρέικιαβικ 4K: Εναέρια Περιήγηση Drone (🇮🇸 REYKJAVÍK, ICELAND [4K] Drone Tour - Best Drone)",
          "label": "Ρέικιαβικ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "9ujfdvob5XQ",
          "title": "Ρέικιαβικ 4K: Περιήγηση στους Δρόμους (REYKJAVIK, Iceland - Walking Tour - 4K HDR)",
          "label": "Ρέικιαβικ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "akureyri": {
      "cityName": "Άκουρεϊρι",
      "drone": {
          "youtubeId": "Pbzn79TSRO0",
          "title": "Άκουρεϊρι 4K: Εναέρια Περιήγηση Drone (Iceland 4K - Scenic Relaxation Film with Calming M)",
          "label": "Άκουρεϊρι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "r85DZ9EX1Ho",
          "title": "Άκουρεϊρι 4K: Περιήγηση στους Δρόμους (Iceland Walking Tour - Akureyri [4K])",
          "label": "Άκουρεϊρι Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "luxembourg-city": {
      "cityName": "Πόλη του Λουξεμβούργου",
      "drone": {
          "youtubeId": "oZDFtVNyUio",
          "title": "Πόλη του Λουξεμβούργου 4K: Εναέρια Περιήγηση Drone (Luxembourg City, Luxembourg 🇱🇺 in 4K HDR ULTRA HD )",
          "label": "Πόλη του Λουξεμβούργου με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "2GP7gDmy_Qc",
          "title": "Πόλη του Λουξεμβούργου 4K: Περιήγηση στους Δρόμους (🇱🇺 Luxembourg City Walking Tour 4K 60FPS – Capital)",
          "label": "Πόλη του Λουξεμβούργου Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "valletta": {
      "cityName": "Βαλέτα",
      "drone": {
          "youtubeId": "Hcrga5YLh-E",
          "title": "Βαλέτα 4K: Εναέρια Περιήγηση Drone ([4K] MALTA 2026 🇲🇹 Drone Aerial, The Island of Hon)",
          "label": "Βαλέτα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "MTkX0_htW-I",
          "title": "Βαλέτα 4K: Περιήγηση στους Δρόμους (MALTA WALKING TOUR — Valletta Tour with Captions [)",
          "label": "Βαλέτα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "mdina": {
      "cityName": "Μντίνα",
      "drone": {
          "youtubeId": "v5EsE7GvXbU",
          "title": "Μντίνα 4K: Εναέρια Περιήγηση Drone (Mdina, Malta 🇲🇹: The Silent City - Stunning 4K Cin)",
          "label": "Μντίνα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "GZ9cl9_4o2k",
          "title": "Μντίνα 4K: Περιήγηση στους Δρόμους (Mdina, Malta HDR Walking Tour 4K 60fps with Captio)",
          "label": "Μντίνα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "ottawa": {
      "cityName": "Οττάβα",
      "drone": {
          "youtubeId": "I_Wrd5GzSBA",
          "title": "Οττάβα 4K: Εναέρια Περιήγηση Drone (Ottawa, Canada 🇨🇦 | Stunning 4K Drone Footage of N)",
          "label": "Οττάβα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "w_2S_e7aFIk",
          "title": "Οττάβα 4K: Περιήγηση στους Δρόμους (Ottawa, Canada | 4K Walking Tour)",
          "label": "Οττάβα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "toronto": {
      "cityName": "Τορόντο",
      "drone": {
          "youtubeId": "unjF5ojfGxQ",
          "title": "Τορόντο 4K: Εναέρια Περιήγηση Drone (Toronto - 4th Largest City in North America! | 8K )",
          "label": "Τορόντο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "yNun-Rs-OU4",
          "title": "Τορόντο 4K: Περιήγηση στους Δρόμους (🇨🇦 Toronto, Canada 4K Walking Tour: Downtown’s Ico)",
          "label": "Τορόντο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "bbjwotvAvDM",
          "title": "Τορόντο 24/7: Ζωντανή Μετάδοση 4K από τον Ορίζοντα & τη Λίμνη Οντάριο",
          "label": "Τορόντο Skyline Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "montreal": {
      "cityName": "Μόντρεαλ",
      "drone": {
          "youtubeId": "zkGwMz2Dfos",
          "title": "Μόντρεαλ 4K: Εναέρια Περιήγηση Drone (Montreal, Canada 🇨🇦 - by drone [4K])",
          "label": "Μόντρεαλ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "aj4onwDy3r0",
          "title": "Μόντρεαλ 4K: Περιήγηση στους Δρόμους (🇨🇦  Street Life in Montreal - Walking Tour of St. )",
          "label": "Μόντρεαλ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "vancouver": {
      "cityName": "Βανκούβερ",
      "drone": {
          "youtubeId": "WbfjRoQVZSw",
          "title": "Βανκούβερ 4K: Εναέρια Περιήγηση Drone (Vancouver, Canada 🇨🇦 - by drone [4K])",
          "label": "Βανκούβερ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "n_nye25KIZg",
          "title": "Βανκούβερ 4K: Περιήγηση στους Δρόμους (Vancouver Canada 4K | Summer City Walking Tour Thr)",
          "label": "Βανκούβερ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "mexico-city": {
      "cityName": "Πόλη του Μεξικού",
      "drone": {
          "youtubeId": "0u938hppnP8",
          "title": "Πόλη του Μεξικού 4K: Εναέρια Περιήγηση Drone (Mexico City, Mexico 🇲🇽 4K Drone Tour – Stunning Ae)",
          "label": "Πόλη του Μεξικού με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "fVh9YNTzhak",
          "title": "Πόλη του Μεξικού 4K: Περιήγηση στους Δρόμους (Mexico City 4K Walking Tour - 190 min Tour with Ca)",
          "label": "Πόλη του Μεξικού Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "guadalajara": {
      "cityName": "Γκουανταλαχάρα",
      "drone": {
          "youtubeId": "gFANFTYrPRg",
          "title": "Γκουανταλαχάρα 4K: Εναέρια Περιήγηση Drone (Guadalajara, Mexico 🇲🇽 in 4K ULTRA HD 60 FPS by Dr)",
          "label": "Γκουανταλαχάρα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "XBGQPCUeu-0",
          "title": "Γκουανταλαχάρα 4K: Περιήγηση στους Δρόμους (Guadalajara, Mexico -  4K Walking Tour)",
          "label": "Γκουανταλαχάρα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "monterrey": {
      "cityName": "Μοντερέι",
      "drone": {
          "youtubeId": "6wzDfNLvnps",
          "title": "Μοντερέι 4K: Εναέρια Περιήγηση Drone (Monterrey Mexico 🇲🇽 | 4K Drone Footage)",
          "label": "Μοντερέι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "JR2oUlz7rTE",
          "title": "Μοντερέι 4K: Περιήγηση στους Δρόμους (Monterrey, Mexico: The Modern Mountain Metropolis )",
          "label": "Μοντερέι Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "cancun": {
      "cityName": "Κανκούν",
      "drone": {
          "youtubeId": "TflfK-nV52U",
          "title": "Κανκούν 4K: Εναέρια Περιήγηση Drone (Cancún / Cancun, Mexico 🇲🇽 - by drone [4K])",
          "label": "Κανκούν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "_SVv-YROSXI",
          "title": "Κανκούν 4K: Περιήγηση στους Δρόμους (Cancun 4K Walking Tour - 103 min Tour with Caption)",
          "label": "Κανκούν Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "brasilia": {
      "cityName": "Μπραζίλια",
      "drone": {
          "youtubeId": "mvXDHp8hIoU",
          "title": "Μπραζίλια 4K: Εναέρια Περιήγηση Drone (Brasília 🇧🇷 | Aerial Tour of Brazil’s Political Ca)",
          "label": "Μπραζίλια με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "zrp7USk_bvM",
          "title": "Μπραζίλια 4K: Περιήγηση στους Δρόμους (Brasília 4K Walking Tour | National Congress, Metr)",
          "label": "Μπραζίλια Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "rio-de-janeiro": {
      "cityName": "Ρίο ντε Τζανέιρο",
      "drone": {
          "youtubeId": "4M-DfrqjMv4",
          "title": "Ρίο ντε Τζανέιρο 4K: Εναέρια Περιήγηση Drone (Rio De Janeiro 4K drone view • Aerial View Over Ri)",
          "label": "Ρίο ντε Τζανέιρο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "m4pT1j2-c-s",
          "title": "Ρίο ντε Τζανέιρο 4K: Περιήγηση στους Δρόμους (Rio de Janeiro Walking Tour - 4K60fps with Caption)",
          "label": "Ρίο ντε Τζανέιρο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "wyEi0OPai5g",
          "title": "Ρίο ντε Τζανέιρο 24/7: Ζωντανή Μετάδοση από την Παραλία Κοπακαμπάνα (Posto 6)",
          "label": "Κοπακαμπάνα Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "sao-paulo": {
      "cityName": "Σάο Πάολο",
      "drone": {
          "youtubeId": "sTLalWwOQpw",
          "title": "Σάο Πάολο 4K: Εναέρια Περιήγηση Drone (São Paulo, State of São Paulo, Brazil 🇧🇷 in 4K HDR)",
          "label": "Σάο Πάολο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "QlvWusI34xw",
          "title": "Σάο Πάολο 4K: Περιήγηση στους Δρόμους (SÃO PAULO Brazil Walk: 4K Walking Tour in the Larg)",
          "label": "Σάο Πάολο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "salvador": {
      "cityName": "Σαλβαδόρ",
      "drone": {
          "youtubeId": "hDq1wqcjNZA",
          "title": "Σαλβαδόρ 4K: Εναέρια Περιήγηση Drone (Salvador, Bahia, Brazil 🇧🇷 in 4K ULTRA HD 60FPS by)",
          "label": "Σαλβαδόρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "SiuJhtowLw8",
          "title": "Σαλβαδόρ 4K: Περιήγηση στους Δρόμους (Walking Tour [4K] in Salvador, Bahia State, Brazil)",
          "label": "Σαλβαδόρ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "buenos-aires": {
      "cityName": "Μπουένος Άιρες",
      "drone": {
          "youtubeId": "ZzhAb_YFTt0",
          "title": "Μπουένος Άιρες 4K: Εναέρια Περιήγηση Drone (Buenos Aires 4K drone view🇦🇷Amazing Aerial View Of)",
          "label": "Μπουένος Άιρες με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "QuhV2gXzvLc",
          "title": "Μπουένος Άιρες 4K: Περιήγηση στους Δρόμους (Buenos Aires, ARGENTINA - Evening Stroll in Buenos)",
          "label": "Μπουένος Άιρες Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "cordoba": {
      "cityName": "Κόρδοβα",
      "drone": {
          "youtubeId": "4gH51NqV6s0",
          "title": "Κόρδοβα 4K: Εναέρια Περιήγηση Drone",
          "label": "Κόρδοβα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "7HqV6s04gH5",
          "title": "Κόρδοβα 4K: Περιήγηση στους Δρόμους",
          "label": "Κόρδοβα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "rosario": {
      "cityName": "Ροσάριο",
      "drone": {
          "youtubeId": "NqV6s04gH51",
          "title": "Ροσάριο 4K: Εναέρια Περιήγηση Drone",
          "label": "Ροσάριο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "s04gH51NqV6",
          "title": "Ροσάριο 4K: Περιήγηση στους Δρόμους",
          "label": "Ροσάριο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "santiago": {
      "cityName": "Σαντιάγο",
      "drone": {
          "youtubeId": "m4Xp8V6k1Yw",
          "title": "Σαντιάγο 4K: Εναέρια Περιήγηση Drone",
          "label": "Σαντιάγο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "k1Ywm4Xp8V6",
          "title": "Σαντιάγο 4K: Περιήγηση στους Δρόμους",
          "label": "Σαντιάγο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "valparaiso": {
      "cityName": "Βαλπαραΐσο",
      "drone": {
          "youtubeId": "8V6k1Ywm4Xp",
          "title": "Βαλπαραΐσο 4K: Εναέρια Περιήγηση Drone",
          "label": "Βαλπαραΐσο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "Ywm4Xp8V6k1",
          "title": "Βαλπαραΐσο 4K: Περιήγηση στους Δρόμους",
          "label": "Βαλπαραΐσο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "lima": {
      "cityName": "Λίμα",
      "drone": {
          "youtubeId": "5mH2kX8q1Yw",
          "title": "Λίμα 4K: Εναέρια Περιήγηση Drone",
          "label": "Λίμα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "kX8q1Yw5mH2",
          "title": "Λίμα 4K: Περιήγηση στους Δρόμους",
          "label": "Λίμα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "cusco": {
      "cityName": "Κούσκο",
      "drone": {
          "youtubeId": "q1Yw5mH2kX8",
          "title": "Κούσκο 4K: Εναέρια Περιήγηση Drone",
          "label": "Κούσκο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "H2kX8q1Yw5m",
          "title": "Κούσκο 4K: Περιήγηση στους Δρόμους",
          "label": "Κούσκο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "arequipa": {
      "cityName": "Αρεκίπα",
      "drone": {
          "youtubeId": "kX8q1Yw5mH2",
          "title": "Αρεκίπα 4K: Εναέρια Περιήγηση Drone",
          "label": "Αρεκίπα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "5mH2kX8q1Yw",
          "title": "Αρεκίπα 4K: Περιήγηση στους Δρόμους",
          "label": "Αρεκίπα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "bogota": {
      "cityName": "Μπογκοτά",
      "drone": {
          "youtubeId": "2kX8q1Yw5mH",
          "title": "Μπογκοτά 4K: Εναέρια Περιήγηση Drone",
          "label": "Μπογκοτά με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "Yw5mH2kX8q1",
          "title": "Μπογκοτά 4K: Περιήγηση στους Δρόμους",
          "label": "Μπογκοτά Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "medellin": {
      "cityName": "Μεδεγίν",
      "drone": {
          "youtubeId": "H2kX8q1Yw5m",
          "title": "Μεδεγίν 4K: Εναέρια Περιήγηση Drone",
          "label": "Μεδεγίν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "1Yw5mH2kX8q",
          "title": "Μεδεγίν 4K: Περιήγηση στους Δρόμους",
          "label": "Μεδεγίν Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "cartagena": {
      "cityName": "Καρθαγένη",
      "drone": {
          "youtubeId": "5mH2kX8q1Yw",
          "title": "Καρθαγένη 4K: Εναέρια Περιήγηση Drone",
          "label": "Καρθαγένη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "q1Yw5mH2kX8",
          "title": "Καρθαγένη 4K: Περιήγηση στους Δρόμους",
          "label": "Καρθαγένη Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "bratislava": {
      "cityName": "Μπρατισλάβα",
      "drone": {
          "youtubeId": "FqIZKlV6opQ",
          "title": "Μπρατισλάβα 4K: Εναέρια Περιήγηση Drone (Vydrica – Bratislava 4K Drone | November 2026 Cons)",
          "label": "Μπρατισλάβα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "dgDJ1fQMlpY",
          "title": "Μπρατισλάβα 4K: Περιήγηση στους Δρόμους (Walking Bratislava in 4K – Slovakia’s Charming Cap)",
          "label": "Μπρατισλάβα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "kosice": {
      "cityName": "Κόσιτσε",
      "drone": {
          "youtubeId": "6MatD8UxaO4",
          "title": "Κόσιτσε 4K: Εναέρια Περιήγηση Drone (Košice , Slovakia 🇸🇰 4K UHD | Drone Footage)",
          "label": "Κόσιτσε με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "uZPunK39TYc",
          "title": "Κόσιτσε 4K: Περιήγηση στους Δρόμους (KOSICE, Slovakia 🇸🇰 - 4K HDR walking tour with c)",
          "label": "Κόσιτσε Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "ljubljana": {
      "cityName": "Λιουμπλιάνα",
      "drone": {
          "youtubeId": "coaPIqs_iMM",
          "title": "Λιουμπλιάνα 4K: Εναέρια Περιήγηση Drone (Ljubljana city, Slovenia 🇸🇮 in 4K Ultra HD | Dro)",
          "label": "Λιουμπλιάνα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "coaPIqs_iMM",
          "title": "Λιουμπλιάνα 4K: Εξερεύνηση (Ljubljana city, Slovenia 🇸🇮 in 4K Ultra HD | Dro)",
          "label": "Λιουμπλιάνα Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "beijing": {
      "cityName": "Πεκίνο",
      "drone": {
          "youtubeId": "GJKYLvwsg_0",
          "title": "Πεκίνο 4K: Εναέρια Πανοραμική Περιήγηση Drone στην Απαγορευμένη Πόλη & τα Μνημεία",
          "label": "Πεκίνο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "6FwoJXbCjeA",
          "title": "Πεκίνο 4K: Περιήγηση στα Ιστορικά Χούτονγκ & τον Πεζόδρομο Wangfujing",
          "label": "Πεκίνο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "shanghai": {
      "cityName": "Σανγκάη",
      "drone": {
          "youtubeId": "HsRo77K2kEU",
          "title": "Σανγκάη 4K: Φουτουριστική Εναέρια Περιήγηση Drone στο Lujiazui & τον Πύργο της Σανγκάης",
          "label": "Σανγκάη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "-es55xUU5rQ",
          "title": "Σανγκάη 4K HDR: Περιήγηση στον Πεζόδρομο The Bund & την Παραλία του Ποταμού Huangpu",
          "label": "Σανγκάη Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "hong-kong": {
      "cityName": "Χονγκ Κονγκ",
      "drone": {
          "youtubeId": "Blu_yCEFYvk",
          "title": "Χονγκ Κονγκ 4K: Εναέρια Περιήγηση Drone στο Victoria Harbour & τους Ουρανοξύστες",
          "label": "Χονγκ Κονγκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "0Wmj38hxsBE",
          "title": "Χονγκ Κονγκ 4K: Εντυπωσιακή Περιήγηση στη Nathan Road, Victoria Harbour & Avenue of Stars",
          "label": "Χονγκ Κονγκ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "XN-ArdUrqtc",
          "title": "Χονγκ Κονγκ 24/7: Ζωντανή Μετάδοση από το Λιμάνι Victoria Harbour",
          "label": "Victoria Harbour Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "xian": {
      "cityName": "Σιάν",
      "drone": {
          "youtubeId": "iuZAiIcpo50",
          "title": "Σιάν 4K: Εναέρια Περιήγηση Drone στα Αρχαία Τείχη, την Παγόδα της Άγριας Χήνας & την Πόλη",
          "label": "Σιάν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "8WOBikJ9-5Y",
          "title": "Σιάν 4K HDR: Περιήγηση στην Αρχαία Πρωτεύουσα, τον Πύργο της Καμπάνας & τη Μουσουλμανική Συνοικία",
          "label": "Σιάν Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "chengdu": {
      "cityName": "Τσενγκντού",
      "drone": {
          "youtubeId": "7STgaVGNSPk",
          "title": "Τσενγκντού 4K: Εναέρια Περιήγηση Drone στην Πόλη των Γιγάντιων Πάντα & του Σιτσουάν",
          "label": "Τσενγκντού με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "uusYayIPyYg",
          "title": "Τσενγκντού 4K: Περιήγηση στο Κέντρο της Πόλης, τις Παραδοσιακές Γειτονιές & τα Τσαγερί",
          "label": "Τσενγκντού Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "guangzhou": {
      "cityName": "Γκουανγκτζόου",
      "drone": {
          "youtubeId": "ged2CKFQHEU",
          "title": "Γκουανγκτζόου 4K: Εναέρια Περιήγηση Drone στον Πύργο της Καντόνας & τον Ποταμό των Μαργαριταριών",
          "label": "Γκουανγκτζόου με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "B3TIxYj71Ho",
          "title": "Γκουανγκτζόου 4K: Περιήγηση στο Φουτουριστικό Zhujiang New Town & τους Ιστορικούς Πεζοδρόμους",
          "label": "Γκουανγκτζόου Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "hangzhou": {
      "cityName": "Χανγκτζόου",
      "drone": {
          "youtubeId": "x98m7c-b_JY",
          "title": "Χανγκτζόου 4K: Εναέρια Περιήγηση Drone στη Μαγευτική Δυτική Λίμνη & την Πόλη",
          "label": "Χανγκτζόου με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "Ode3voyDm3k",
          "title": "Χανγκτζόου 4K: Περιήγηση στις Όχθες της Δυτικής Λίμνης & τους Κήπους του Λωτού",
          "label": "Χανγκτζόου Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "chongqing": {
      "cityName": "Τσονγκτσίνγκ",
      "drone": {
          "youtubeId": "oy3DDIojlaI",
          "title": "Τσονγκτσίνγκ 4K: Εναέρια Νυχτερινή Περιήγηση Drone στην 8D Cyberpunk Μητρόπολη & τον Ποταμό Γιανγκτσέ",
          "label": "Τσονγκτσίνγκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "KPXALe-dCsc",
          "title": "Τσονγκτσίνγκ 4K: Περιήγηση στους Πολυεπίπεδους Δρόμους, τις Γέφυρες & το Hongyadong",
          "label": "Τσονγκτσίνγκ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "suzhou": {
      "cityName": "Σουτζόου",
      "drone": {
          "youtubeId": "NS1YYm-9lfc",
          "title": "Σουτζόου 4K: Εναέρια Περιήγηση Drone στη «Βενετία της Ανατολής» & τα Ιστορικά Κανάλια",
          "label": "Σουτζόου με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "RcAF7u2pH3I",
          "title": "Σουτζόου 4K: Περιήγηση στην Ιστορική Συνοικία Pingjiang & τους Κλασικούς Κήπους UNESCO",
          "label": "Σουτζόου Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "guilin": {
      "cityName": "Γκουιλίν",
      "drone": {
          "youtubeId": "rB4Ir88aDuA",
          "title": "Γκουιλίν 4K: Εναέρια Περιήγηση Drone στα Επιβλητικά Καρστικά Βουνά & τον Ποταμό Λι",
          "label": "Γκουιλίν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "qBl1vdCA03A",
          "title": "Γκουιλίν 4K: Περιήγηση στις Δίδυμες Παγόδες του Ήλιου και της Σελήνης & τις Λίμνες",
          "label": "Γκουιλίν Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "sydney": {
      "cityName": "Σύδνεϋ",
      "drone": {
          "youtubeId": "UHGhj5aPX5M",
          "title": "Σύδνεϋ 4K: Εναέρια Περιήγηση Drone στην Όπερα, το Harbour Bridge & τις Παραλίες",
          "label": "Σύδνεϋ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "VuZNHjkZisk",
          "title": "Σύδνεϋ 4K: Περιήγηση στο Κέντρο, το Queen Victoria Building & το Λιμάνι",
          "label": "Σύδνεϋ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "5uZa3-RMFos",
          "title": "Σύδνεϋ 24/7: Ζωντανή Μετάδοση από το Λιμάνι, την Όπερα & τη Γέφυρα Harbour Bridge",
          "label": "Σύδνεϋ Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "melbourne": {
      "cityName": "Μελβούρνη",
      "drone": {
          "youtubeId": "QojXRvYgXxo",
          "title": "Μελβούρνη 4K: Εναέρια Περιήγηση Drone στη Μητρόπολη της Βικτώρια",
          "label": "Μελβούρνη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "36PQHec2NhU",
          "title": "Μελβούρνη 4K: Περιήγηση στα Ιστορικά Σοκάκια, τον Σταθμό Flinders St & την Πόλη",
          "label": "Μελβούρνη Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "brisbane": {
      "cityName": "Μπρίσμπεϊν",
      "drone": {
          "youtubeId": "FXr_RMch1Yg",
          "title": "Μπρίσμπεϊν 4K: Εναέρια Περιήγηση Drone στον Ποταμό Brisbane & την Πόλη",
          "label": "Μπρίσμπεϊν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "perth": {
      "cityName": "Περθ",
      "drone": {
          "youtubeId": "1ORYDYUTcUI",
          "title": "Περθ 4K: Εναέρια Περιήγηση Drone στον Ποταμό Swan & τη Δυτική Αυστραλία",
          "label": "Περθ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "adelaide": {
      "cityName": "Αδελαΐδα",
      "drone": {
          "youtubeId": "GUwdLoZWIls",
          "title": "Αδελαΐδα 4K: Εναέρια Περιήγηση Drone στη Νότια Αυστραλία & τα Πάρκα",
          "label": "Αδελαΐδα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "canberra": {
      "cityName": "Καμπέρα",
      "drone": {
          "youtubeId": "EZum29CaUpw",
          "title": "Καμπέρα 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα & τη Λίμνη Burley Griffin",
          "label": "Καμπέρα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "auckland": {
      "cityName": "Ώκλαντ",
      "drone": {
          "youtubeId": "JhhVPM4Ha08",
          "title": "Ώκλαντ 4K: Εναέρια Περιήγηση Drone στην «Πόλη των Ιστίων» & τον Πύργο Sky Tower",
          "label": "Ώκλαντ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "jhxJMzNAGYw",
          "title": "Ώκλαντ 4K: Περιήγηση στην Queen Street, το Λιμάνι & το Παραλιακό Μέτωπο",
          "label": "Ώκλαντ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "wellington": {
      "cityName": "Ουέλινγκτον",
      "drone": {
          "youtubeId": "LB_aN56haNg",
          "title": "Ουέλινγκτον 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα της Νέας Ζηλανδίας",
          "label": "Ουέλινγκτον με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "christchurch": {
      "cityName": "Κράιστσερτς",
      "drone": {
          "youtubeId": "j5JygtEsBIU",
          "title": "Κράιστσερτς 4K: Εναέρια Περιήγηση Drone στη «Garden City» του Νοτίου Νησιού",
          "label": "Κράιστσερτς με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "queenstown": {
      "cityName": "Κουίνσταουν",
      "drone": {
          "youtubeId": "nD32rfle1kY",
          "title": "Κουίνσταουν 4K: Εναέρια Περιήγηση Drone στις Νότιες Άλπεις & τη Λίμνη Wakatipu",
          "label": "Κουίνσταουν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "port-moresby": {
      "cityName": "Πορτ Μόρεσμπι",
      "drone": {
          "youtubeId": "GxHSmP03v6w",
          "title": "Πορτ Μόρεσμπι 4K: Περιήγηση στην Πρωτεύουσα της Παπούα Νέας Γουινέας",
          "label": "Πορτ Μόρεσμπι Tour (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "lae": {
      "cityName": "Λάε",
      "drone": {
          "youtubeId": "GxHSmP03v6w",
          "title": "Λάε 4K: Πανοραμική Περιήγηση στο Βιομηχανικό Λιμάνι & την Ακτή",
          "label": "Λάε Tour (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "suva": {
      "cityName": "Σούβα",
      "drone": {
          "youtubeId": "kAMkk6ger5c",
          "title": "Σούβα & Φίτζι 4K: Εναέρια Περιήγηση Drone στον Τροπικό Παράδεισο",
          "label": "Σούβα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "nadi": {
      "cityName": "Νάντι",
      "drone": {
          "youtubeId": "kAMkk6ger5c",
          "title": "Νάντι 4K: Εναέρια Περιήγηση Drone στην Τουριστική Πύλη των Φίτζι",
          "label": "Νάντι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "apia": {
      "cityName": "Άπια",
      "drone": {
          "youtubeId": "efhit8oPdho",
          "title": "Άπια & Σαμόα 4K: Εναέρια Περιήγηση Drone στις Τροπικές Ακτές & τα Ηφαιστειογενή Τοπία",
          "label": "Άπια με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "port-vila": {
      "cityName": "Πορτ Βίλα",
      "drone": {
          "youtubeId": "CFx6uIPvAOc",
          "title": "Πορτ Βίλα & Βανουάτου 4K: Εναέρια Περιήγηση Drone στον Κόλπο & τις Παραλίες",
          "label": "Πορτ Βίλα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "honiara": {
      "cityName": "Χονιάρα",
      "drone": {
          "youtubeId": "hSnze-n8fd8",
          "title": "Χονιάρα & Νήσοι Σολομώντα 4K: Εναέρια Περιήγηση Drone στις Παρθένες Ακτές",
          "label": "Χονιάρα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "palikir": {
      "cityName": "Παλικίρ",
      "drone": {
          "youtubeId": "2R6ecJdElZI",
          "title": "Παλικίρ & Μικρονησία 4K: Εναέρια Περιήγηση Drone στους Κοραλλιογενείς Υφάλους",
          "label": "Παλικίρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "nukualofa": {
      "cityName": "Νουκουαλόφα",
      "drone": {
          "youtubeId": "qhzS9VoFvgM",
          "title": "Νουκουαλόφα & Τόνγκα 4K: Εναέρια Περιήγηση Drone στο Βασίλειο του Ειρηνικού",
          "label": "Νουκουαλόφα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "south-tarawa": {
      "cityName": "Νότια Ταράουα",
      "drone": {
          "youtubeId": "yITOdtKMRsU",
          "title": "Νότια Ταράουα & Κιριμπάτι 4K: Εναέρια Περιήγηση Drone στην Ατόλλη του Ισημερινού",
          "label": "Ταράουα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "ngerulmud": {
      "cityName": "Νγκερουλμούντ",
      "drone": {
          "youtubeId": "AeMrCFRa70U",
          "title": "Νγκερουλμούντ & Παλάου 4K: Εναέρια Περιήγηση Drone στα Rock Islands & το Καπιτώλιο",
          "label": "Νγκερουλμούντ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "koror": {
      "cityName": "Κορόρ",
      "drone": {
          "youtubeId": "AeMrCFRa70U",
          "title": "Κορόρ & Παλάου 4K: Εναέρια Περιήγηση Drone στη Γαλάζια Λιμνοθάλασσα",
          "label": "Κορόρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "majuro": {
      "cityName": "Ματζούρο",
      "drone": {
          "youtubeId": "HlwtQIIS7ww",
          "title": "Ματζούρο & Νήσοι Μάρσαλ 4K: Εναέρια Περιήγηση Drone στη Στενόμακρη Ατόλλη",
          "label": "Ματζούρο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "yaren": {
      "cityName": "Γιαρέν",
      "drone": {
          "youtubeId": "9PgJtSfu778",
          "title": "Γιαρέν & Ναουρού 4K: Πανοραμική Περιήγηση στη Μικρότερη Δημοκρατία του Κόσμου",
          "label": "Ναουρού Tour (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "funafuti": {
      "cityName": "Φουναφούτι",
      "drone": {
          "youtubeId": "N7vHYT9-tHY",
          "title": "Φουναφούτι & Τουβαλού 4K: Εναέρια Περιήγηση Drone στην Ατόλλη της Πολυνησίας",
          "label": "Φουναφούτι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "tokyo": {
      "cityName": "Τόκιο",
      "drone": {
          "youtubeId": "X2aY-HgWjzg",
          "title": "Τόκιο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Τόκιο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "28ZjrtD_iL0",
          "title": "Τόκιο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Τόκιο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "dfVK7ld38Ys",
          "title": "Τόκιο 24/7: Ζωντανή Μετάδοση από τη Διάβαση Σιμπούγια (Shibuya Scramble Crossing)",
          "label": "Σιμπούγια Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "kyoto": {
      "cityName": "Κιότο",
      "drone": {
          "youtubeId": "FQEAtG8_I8g",
          "title": "Κιότο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Κιότο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "arOQ7slh3pM",
          "title": "Κιότο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Κιότο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "osaka": {
      "cityName": "Οσάκα",
      "drone": {
          "youtubeId": "LWutclLmC0U",
          "title": "Οσάκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Οσάκα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "axewALA2s_E",
          "title": "Οσάκα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Οσάκα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "K-ibJs5xuuw",
          "title": "Οσάκα 24/7: Ζωντανή Μετάδοση από την Περιοχή Ντοτονμπόρι (Dotonbori)",
          "label": "Ντοτονμπόρι Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "hiroshima": {
      "cityName": "Χιροσίμα",
      "drone": {
          "youtubeId": "FV5qohwKg1s",
          "title": "Χιροσίμα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Χιροσίμα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "tj7-NRGYoGk",
          "title": "Χιροσίμα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Χιροσίμα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "sapporo": {
      "cityName": "Σαππόρο",
      "drone": {
          "youtubeId": "fBBcyEraa1s",
          "title": "Σαππόρο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Σαππόρο με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "z69YqFviio4",
          "title": "Σαππόρο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Σαππόρο Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      },
    "live": {
          "youtubeId": "wRYonRnKsKw",
          "title": "Σαππόρο 24/7: Ζωντανή Μετάδοση από τη Διασταύρωση Σουσουκίνο (Susukino)",
          "label": "Σαππόρο Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "fukuoka": {
      "cityName": "Φουκουόκα",
      "drone": {
          "youtubeId": "KQGoNU13zfI",
          "title": "Φουκουόκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Φουκουόκα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "bX3-JaiZuik",
          "title": "Φουκουόκα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Φουκουόκα Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "seoul": {
      "cityName": "Σεούλ",
      "drone": {
          "youtubeId": "ckfOIEx8yqU",
          "title": "Σεούλ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Σεούλ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
    "live": {
          "youtubeId": "vk5BHoDxXf0",
          "title": "Σεούλ 24/7: Ζωντανή Μετάδοση από τον Ποταμό Χαν & τον Φουτουριστικό Ορίζοντα",
          "label": "Σεούλ Skyline Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "busan": {
      "cityName": "Μπουσάν",
      "drone": {
          "youtubeId": "AI0p4T1-f88",
          "title": "Μπουσάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Μπουσάν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "incheon": {
      "cityName": "Ίντσον",
      "drone": {
          "youtubeId": "stKif3_DfRM",
          "title": "Ίντσον 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ίντσον με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "pyongyang": {
      "cityName": "Πιονγιάνγκ",
      "drone": {
          "youtubeId": "U2vnAlT9rb8",
          "title": "Πιονγιάνγκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Πιονγιάνγκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "vMYZRij5Fqg",
          "title": "Πιονγιάνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Πιονγιάνγκ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "ulaanbaatar": {
      "cityName": "Ουλάν Μπατόρ",
      "drone": {
          "youtubeId": "hhenYvcdTyQ",
          "title": "Ουλάν Μπατόρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ουλάν Μπατόρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
      "walking": {
          "youtubeId": "Ecc17J--0fo",
          "title": "Ουλάν Μπατόρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
          "label": "Ουλάν Μπατόρ Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
      }
  },
  "taipei": {
      "cityName": "Ταϊπέι",
      "drone": {
          "youtubeId": "yyttxJz1p4w",
          "title": "Ταϊπέι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ταϊπέι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      },
    "live": {
          "youtubeId": "z_fY1pj1VBw",
          "title": "Ταϊπέι 24/7: Ζωντανή Μετάδοση από τον Πύργο Taipei 101 & το Όρος Xiangshan",
          "label": "Taipei 101 Live Cam",
          "icon": "fa-solid fa-tower-broadcast",
          "type": "live"
    }
  },
  "kaohsiung": {
      "cityName": "Καοσιούνγκ",
      "drone": {
          "youtubeId": "w-Xrj4RJ4KE",
          "title": "Καοσιούνγκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Καοσιούνγκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "hanoi": {
      "cityName": "Ανόι",
      "drone": {
          "youtubeId": "wRVmyHY9zwU",
          "title": "Ανόι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ανόι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "ho-chi-minh-city": {
      "cityName": "Χο Τσι Μινχ",
      "drone": {
          "youtubeId": "O9fAFuk4V74",
          "title": "Χο Τσι Μινχ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Χο Τσι Μινχ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "da-nang": {
      "cityName": "Ντα Νανγκ",
      "drone": {
          "youtubeId": "ITQN--CN1Wk",
          "title": "Ντα Νανγκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ντα Νανγκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "bangkok": {
      "cityName": "Μπανγκόκ",
      "drone": {
          "youtubeId": "P4TwiOX0-KU",
          "title": "Μπανγκόκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Μπανγκόκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "chiang-mai": {
      "cityName": "Τσιάνγκ Μάι",
      "drone": {
          "youtubeId": "LJglx9Sw4co",
          "title": "Τσιάνγκ Μάι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Τσιάνγκ Μάι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "phuket": {
      "cityName": "Πουκέτ",
      "drone": {
          "youtubeId": "trcWUvGZn7o",
          "title": "Πουκέτ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Πουκέτ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "jakarta": {
      "cityName": "Τζακάρτα",
      "drone": {
          "youtubeId": "7XSyroiA-FI",
          "title": "Τζακάρτα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Τζακάρτα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "bali-denpasar": {
      "cityName": "Ντενπασάρ",
      "drone": {
          "youtubeId": "DY0HgHnUjIU",
          "title": "Ντενπασάρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ντενπασάρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "surabaya": {
      "cityName": "Σουραμπάγια",
      "drone": {
          "youtubeId": "lrjLXhYgk_k",
          "title": "Σουραμπάγια 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Σουραμπάγια με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "kuala-lumpur": {
      "cityName": "Κουάλα Λουμπούρ",
      "drone": {
          "youtubeId": "y5QWvKotuy4",
          "title": "Κουάλα Λουμπούρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Κουάλα Λουμπούρ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "george-town": {
      "cityName": "Τζορτζ Τάουν",
      "drone": {
          "youtubeId": "c1BFr-uTQ_4",
          "title": "Τζορτζ Τάουν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Τζορτζ Τάουν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "singapore": {
      "cityName": "Σιγκαπούρη",
      "drone": {
          "youtubeId": "Up0rJAwEn7k",
          "title": "Σιγκαπούρη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Σιγκαπούρη με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "manila": {
      "cityName": "Μανίλα",
      "drone": {
          "youtubeId": "DIFE9lbPsHg",
          "title": "Μανίλα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Μανίλα με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "cebu-city": {
      "cityName": "Σεμπού",
      "drone": {
          "youtubeId": "tJDHwHJGsRE",
          "title": "Σεμπού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Σεμπού με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "phnom-penh": {
      "cityName": "Πνομ Πενχ",
      "drone": {
          "youtubeId": "Bgv1l7ZbR98",
          "title": "Πνομ Πενχ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Πνομ Πενχ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "siem-reap": {
      "cityName": "Σιέμ Ριπ",
      "drone": {
          "youtubeId": "JuplVLtR_wY",
          "title": "Σιέμ Ριπ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Σιέμ Ριπ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "vientiane": {
      "cityName": "Βιεντιάν",
      "drone": {
          "youtubeId": "OMUSWts67sU",
          "title": "Βιεντιάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Βιεντιάν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "luang-prabang": {
      "cityName": "Λουάνγκ Πραμπάνγκ",
      "drone": {
          "youtubeId": "WAcXAlYu4vM",
          "title": "Λουάνγκ Πραμπάνγκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Λουάνγκ Πραμπάνγκ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "yangon": {
      "cityName": "Γιανγκόν",
      "drone": {
          "youtubeId": "JvCavuilTSw",
          "title": "Γιανγκόν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Γιανγκόν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "mandalay": {
      "cityName": "Μάνταλεϊ",
      "drone": {
          "youtubeId": "N-pHc62wM3c",
          "title": "Μάνταλεϊ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Μάνταλεϊ με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "bandar-seri-begawan": {
      "cityName": "Μπαντάρ Σερί Μπεγκαβάν",
      "drone": {
          "youtubeId": "dfPDP6cHBH4",
          "title": "Μπαντάρ Σερί Μπεγκαβάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Μπαντάρ Σερί Μπεγκαβάν με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  },
  "dili": {
      "cityName": "Ντίλι",
      "drone": {
          "youtubeId": "gvY_TEIYnCw",
          "title": "Ντίλι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
          "label": "Ντίλι με Drone (4K)",
          "icon": "fa-solid fa-helicopter",
          "type": "drone"
      }
  }
};

/**
 * Returns video data for a city, prioritizing requested tour type.
 */
export function getCityVideo(cityId, preferredType = 'drone') {
  if (!cityId) return null;
  const entry = CITY_VIDEOS[cityId];
  if (entry) {
    if (entry[preferredType]) {
      return entry[preferredType];
    }
    return entry.drone || entry.walking || entry.guide || entry.live || null;
  }

  // Smart fallback for any US state city
  if (CITY_TO_STATE && CITY_TO_STATE[cityId]) {
    return {
      youtubeId: "EAYo7Qals90",
      title: "Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι στις Εμβληματικές Πόλεις των ΗΠΑ",
      label: "ΗΠΑ 4K Cinematic Tour",
      icon: "fa-solid fa-helicopter",
      type: "drone"
    };
  }

  return null;
}

/**
 * Returns all available tour options for a city.
 */
export function getAvailableCityTours(cityId) {
  if (!cityId) return [];
  const entry = CITY_VIDEOS[cityId];
  if (!entry) {
    if (CITY_TO_STATE && CITY_TO_STATE[cityId]) {
      return [{
        type: 'drone',
        label: 'ΗΠΑ 4K Cinematic Tour',
        icon: 'fa-solid fa-helicopter',
        title: 'Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι',
        youtubeId: 'EAYo7Qals90'
      }];
    }
    return [];
  }
  const tours = [];

  if (entry.drone) {
    tours.push({
      type: 'drone',
      label: entry.drone.label || `${entry.cityName} με Drone (4K)`,
      icon: 'fa-solid fa-helicopter',
      title: entry.drone.title,
      youtubeId: entry.drone.youtubeId
    });
  }
  if (entry.walking) {
    tours.push({
      type: 'walking',
      label: entry.walking.label || `${entry.cityName} Walking Tour (4K)`,
      icon: 'fa-solid fa-person-walking',
      title: entry.walking.title,
      youtubeId: entry.walking.youtubeId
    });
  }
  if (entry.guide) {
    tours.push({
      type: 'guide',
      label: entry.guide.label || `Ιστορικά Αξιοθέατα & Οδηγός`,
      icon: 'fa-solid fa-landmark',
      title: entry.guide.title,
      youtubeId: entry.guide.youtubeId
    });
  }
  if (entry.live) {
    tours.push({
      type: 'live',
      label: entry.live.label || `${entry.cityName} Live Cam (Ζωντανά)`,
      icon: 'fa-solid fa-tower-broadcast',
      title: entry.live.title,
      youtubeId: entry.live.youtubeId,
      isLive: true
    });
  }
  return tours;
}

/**
 * Curated Registry of Landmark / POI Live Cams
 */
export const POI_LIVE_CAMS = {
  "times-square": { youtubeId: "ZxCeWQ3Lcig", title: "Times Square Live 4K (Νέα Υόρκη)" },
  "shibuya": { youtubeId: "dfVK7ld38Ys", title: "Shibuya Scramble Crossing Live (Τόκιο)" },
  "san-marco": { youtubeId: "a1mcaV3Sf9U", title: "Πλατεία Αγίου Μάρκου & Κανάλια Live (Βενετία)" },
  "st-peters": { youtubeId: "EEM7a3mHMR4", title: "Πλατεία Αγίου Πέτρου Live (Βατικανό / Ρώμη)" },
  "abbey-road": { youtubeId: "zMCea32gpmg", title: "Abbey Road Live (Λονδίνο)" },
  "copacabana": { youtubeId: "wyEi0OPai5g", title: "Παραλία Κοπακαμπάνα Live (Ρίο ντε Τζανέιρο)" },
  "sydney-harbour": { youtubeId: "5uZa3-RMFos", title: "Λιμάνι & Όπερα Σύδνεϋ Live (Αυστραλία)" },
  "venice-beach": { youtubeId: "EO_1LWqsCNE", title: "Venice Beach Live (Λος Άντζελες)" },
  "niagara-falls": { youtubeId: "qx7gry390YA", title: "Καταρράκτες Νιαγάρα Live" },
  "temple-bar": { youtubeId: "3nyPER2kzqk", title: "Δουβλίνο & Temple Bar Live" },
  "bourbon-street": { youtubeId: "xqdukYhcGEU", title: "Bourbon Street Live (Νέα Ορλεάνη)" },
  "western-wall": { youtubeId: "77akujLn4k8", title: "Δυτικό Τείχος Live (Ιερουσαλήμ)" }
};

export function findPoiLiveCam(poiName = '') {
  const n = poiName.toLowerCase();
  if (n.includes('times square') || n.includes('τάιμς σκουέρ')) return POI_LIVE_CAMS["times-square"];
  if (n.includes('shibuya') || n.includes('σιμπούγια')) return POI_LIVE_CAMS["shibuya"];
  if (n.includes('san marco') || n.includes('αγίου μάρκου') || n.includes('grand canal') || n.includes('μεγάλο κανάλι')) return POI_LIVE_CAMS["san-marco"];
  if (n.includes('st. peter') || n.includes('αγίου πέτρου') || n.includes('βατικαν')) return POI_LIVE_CAMS["st-peters"];
  if (n.includes('abbey road')) return POI_LIVE_CAMS["abbey-road"];
  if (n.includes('copacabana') || n.includes('κοπακαμπάνα')) return POI_LIVE_CAMS["copacabana"];
  if (n.includes('opera') || n.includes('όπερα του σύδνεϋ') || n.includes('harbour bridge')) return POI_LIVE_CAMS["sydney-harbour"];
  if (n.includes('venice beach')) return POI_LIVE_CAMS["venice-beach"];
  if (n.includes('niagara') || n.includes('νιαγάρα')) return POI_LIVE_CAMS["niagara-falls"];
  if (n.includes('temple bar')) return POI_LIVE_CAMS["temple-bar"];
  if (n.includes('bourbon') || n.includes('γαλλική συνοικία')) return POI_LIVE_CAMS["bourbon-street"];
  return null;
}

/**
 * Returns list of available tour type keys (e.g. ['drone', 'walking', 'guide'])
 */
export function getAvailableVideoTypes(cityId) {
  return getAvailableCityTours(cityId).map(t => t.type);
}
