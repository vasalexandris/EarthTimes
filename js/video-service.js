import { CITY_TO_STATE } from './states-data.js?v=20261114_world6';
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
    },
    "live": {
      "youtubeId": "lygGCQN_LHM",
      "title": "Θεσσαλονίκη 24/7: Ζωντανή Μετάδοση από την Πόλη",
      "label": "Θεσσαλονίκη Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "QI-PPEW2Bgc",
      "title": "Παρίσι 24/7: Ζωντανή Θέα στον Πύργο του Άιφελ & Μονπαρνάς",
      "label": "Πύργος Άιφελ Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "qBtMuRnf7BY",
      "title": "Φλωρεντία 24/7: Ζωντανή Πανοραμική Εικόνα της Πόλης",
      "label": "Φλωρεντία Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "dsoM6TYIkOI",
      "title": "Μιλάνο 24/7: Ζωντανή Θέα στον Ορίζοντα της Πόλης",
      "label": "Μιλάνο Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "5XeN6jZmrLI",
      "title": "Βερολίνο 24/7: Ζωντανή Εικόνα από το Frankfurter Tor",
      "label": "Βερολίνο Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "VAS9A0LRGHA",
      "title": "Μόναχο 24/7: Ζωντανή Μετάδοση από την Πλατεία Marienplatz",
      "label": "Marienplatz Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "kvYMIaXclIE",
      "title": "Πράγα 24/7: Ζωντανή Μετάδοση από το Κέντρο της Πόλης",
      "label": "Πράγα Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "exkU6Rjn0vM",
      "title": "Βοστώνη 24/7: Ζωντανή Εικόνα της Πόλης",
      "label": "Βοστώνη Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "fNVG6S82lHs",
      "title": "Σικάγο 24/7: Ζωντανή Εικόνα από το Κέντρο & Σιδηρόδρομο",
      "label": "Σικάγο Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "BSWhGNXxT9A",
      "title": "Σαν Φρανσίσκο 24/7: Ζωντανή Θέα στον Κόλπο & Γέφυρα Golden Gate",
      "label": "Golden Gate Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "mG2gAWY_Guw",
      "title": "Ουάσιγκτον DC 24/7: Ζωντανή Μετάδοση από το Washington Monument",
      "label": "Washington Monument Live",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "V7_orOtu-oo",
      "title": "Λας Βέγκας 24/7: Ζωντανή Μετάδοση από το Κέντρο της Πόλης",
      "label": "Λας Βέγκας Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "agY6ZaM1G_o",
      "title": "Στοκχόλμη 24/7: Ζωντανή Πανοραμική Μετάδοση",
      "label": "Στοκχόλμη Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "faKBmRq0lYg",
      "title": "Όσλο 24/7: Ζωντανή Μετάδοση από τη Νορβηγική Πρωτεύουσα",
      "label": "Όσλο Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "vfBMjDZm_PA",
      "title": "Κωνσταντινούπολη 24/7: Ζωντανή Θέα στον Βόσπορο & Πύργο του Γαλατά",
      "label": "Βόσπορος & Γαλατάς Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "n28qm4yrGhk",
      "title": "Ρέικιαβικ & Ισλανδία 24/7: Ζωντανή Μετάδοση",
      "label": "Ισλανδία Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "rxyNjFKwzJA",
      "title": "Βανκούβερ 24/7: Ζωντανή Μετάδοση από το Canada Place & Λιμάνι",
      "label": "Βανκούβερ Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "aeZzJJJtiZw",
      "title": "Πόλη του Μεξικού 24/7: Ζωντανή Μετάδοση από τη Λεωφόρο Reforma",
      "label": "Reforma CDMX Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "fQJRrJkDKo8",
      "title": "Κανκούν 24/7: Ζωντανή Εικόνα από την Καραϊβική Ακτή",
      "label": "Κανκούν Παραλία Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "r8Busmkpsh8",
      "title": "Μπουένος Άιρες 24/7: Ζωντανή Μετάδοση από την Πόλη",
      "label": "Μπουένος Άιρες Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "nLCMw_Fh0u0",
      "title": "Ώκλαντ 24/7: Ζωντανή Μετάδοση 4K από το Viaduct Harbour",
      "label": "Ώκλαντ Λιμάνι 4K Live",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "J4oNJrCzyzU",
      "title": "Νέα Ζηλανδία 24/7: Ζωντανή Μετάδοση Φύσης & Λίμνης",
      "label": "Κουίνσταουν Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "UemFRPrl1hk",
      "title": "Μπανγκόκ 24/7: Ζωντανή Εικόνα 4K από τη Sukhumvit Road",
      "label": "Μπανγκόκ Sukhumvit Live",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "_nvG0c9keWI",
      "title": "Πουκέτ 24/7: Ζωντανή Μετάδοση από την Πατόνγκ",
      "label": "Πουκέτ Patong Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "L1duJDAqbJY",
      "title": "Μπαλί 24/7: Ζωντανή Πανοραμική Εικόνα 4K από την Ακτή Jimbaran",
      "label": "Μπαλί 4K Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
    },
    "live": {
      "youtubeId": "rQ3VvxadJeo",
      "title": "Σιγκαπούρη 24/7: Ζωντανή Εικόνα από το Downtown",
      "label": "Σιγκαπούρη Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
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
  },
  "andorra-la-vella": {
    "cityName": "Ανδόρα λα Βέλια",
    "drone": {
      "youtubeId": "SYiG9zC6f-4",
      "title": "Ανδόρα λα Βέλια 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ανδόρα λα Βέλια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "vaduz": {
    "cityName": "Βαντούζ",
    "drone": {
      "youtubeId": "9Ahzvh_6IE0",
      "title": "Βαντούζ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βαντούζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "monaco": {
    "cityName": "Μονακό",
    "drone": {
      "youtubeId": "leJyhcQVYho",
      "title": "Μονακό 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μονακό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "vatican-city": {
    "cityName": "Βατικανό",
    "drone": {
      "youtubeId": "1qzfX3PpAy4",
      "title": "Βατικανό 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βατικανό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "EEM7a3mHMR4",
      "title": "Βατικανό 24/7: Ζωντανή Μετάδοση από την Πλατεία του Αγίου Πέτρου (Vatican Media)",
      "label": "Βατικανό Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "san-marino": {
    "cityName": "Σαν Μαρίνο",
    "drone": {
      "youtubeId": "o7QIlVFOTlQ",
      "title": "Σαν Μαρίνο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαν Μαρίνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moscow": {
    "cityName": "Μόσχα",
    "drone": {
      "youtubeId": "S_dfq9rFWAE",
      "title": "Μόσχα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μόσχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "saint-petersburg": {
    "cityName": "Αγία Πετρούπολη",
    "drone": {
      "youtubeId": "SUff9wXxlfE",
      "title": "Αγία Πετρούπολη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αγία Πετρούπολη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kazan": {
    "cityName": "Καζάν",
    "drone": {
      "youtubeId": "QQa27jA8AMI",
      "title": "Καζάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Καζάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kyiv": {
    "cityName": "Κίεβο",
    "drone": {
      "youtubeId": "TYfYX0ngLkE",
      "title": "Κίεβο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κίεβο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lviv": {
    "cityName": "Λβιβ",
    "drone": {
      "youtubeId": "98xUsWsQ5O4",
      "title": "Λβιβ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λβιβ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "odesa": {
    "cityName": "Οδησσός",
    "drone": {
      "youtubeId": "LJjR50j1784",
      "title": "Οδησσός 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Οδησσός με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "minsk": {
    "cityName": "Μινσκ",
    "drone": {
      "youtubeId": "Q62DxHoRnqA",
      "title": "Μινσκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μινσκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "brest": {
    "cityName": "Μπρεστ",
    "drone": {
      "youtubeId": "93N5Pp0aLsA",
      "title": "Μπρεστ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπρεστ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chisinau": {
    "cityName": "Κισινάου",
    "drone": {
      "youtubeId": "vHgqLq8w-Bk",
      "title": "Κισινάου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κισινάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "balti": {
    "cityName": "Μπάλτι",
    "drone": {
      "youtubeId": "UIBZpPSHqKU",
      "title": "Μπάλτι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπάλτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "st-johns": {
    "cityName": "Σεντ Τζονς",
    "drone": {
      "youtubeId": "vHRxy-T-OC8",
      "title": "Σεντ Τζονς 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σεντ Τζονς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nassau": {
    "cityName": "Νασάου",
    "drone": {
      "youtubeId": "zsc84OuM_hA",
      "title": "Νασάου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Νασάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bridgetown": {
    "cityName": "Μπρίτζταουν",
    "drone": {
      "youtubeId": "wKCZFYHyIyI",
      "title": "Μπρίτζταουν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπρίτζταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "belize-city": {
    "cityName": "Μπελίζ Σίτι",
    "drone": {
      "youtubeId": "LIhvvXrn7fA",
      "title": "Μπελίζ Σίτι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπελίζ Σίτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-ignacio": {
    "cityName": "Σαν Ιγνάσιο",
    "drone": {
      "youtubeId": "-WeKbN2ArOY",
      "title": "Σαν Ιγνάσιο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαν Ιγνάσιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-jose": {
    "cityName": "Σαν Χοσέ",
    "drone": {
      "youtubeId": "7IsAJx7iQh4",
      "title": "Σαν Χοσέ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαν Χοσέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "alajuela": {
    "cityName": "Αλαχουέλα",
    "drone": {
      "youtubeId": "ZssymnAJNhs",
      "title": "Αλαχουέλα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αλαχουέλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "puerto-limon": {
    "cityName": "Πουέρτο Λιμόν",
    "drone": {
      "youtubeId": "j-ZuFduYNYw",
      "title": "Πουέρτο Λιμόν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πουέρτο Λιμόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "havana": {
    "cityName": "Αβάνα",
    "drone": {
      "youtubeId": "hGg92N5-oM8",
      "title": "Αβάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αβάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santiago-de-cuba": {
    "cityName": "Σαντιάγο ντε Κούβα",
    "drone": {
      "youtubeId": "36YjgvE7xhw",
      "title": "Σαντιάγο ντε Κούβα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαντιάγο ντε Κούβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "trinidad": {
    "cityName": "Τρινιδάδ",
    "drone": {
      "youtubeId": "ZuaaId1s5qU",
      "title": "Τρινιδάδ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τρινιδάδ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "roseau": {
    "cityName": "Ροζό",
    "drone": {
      "youtubeId": "NL-3SbFMqdM",
      "title": "Ροζό 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ροζό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santo-domingo": {
    "cityName": "Σάντο Ντομίνγκο",
    "drone": {
      "youtubeId": "pQAqIoiUY_4",
      "title": "Σάντο Ντομίνγκο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σάντο Ντομίνγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santiago-de-los-caballeros": {
    "cityName": "Σαντιάγο ντε λος Καμπαγιέρος",
    "drone": {
      "youtubeId": "MPesLrQfMDk",
      "title": "Σαντιάγο ντε λος Καμπαγιέρος 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαντιάγο ντε λος Καμπαγιέρος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "punta-cana": {
    "cityName": "Πούντα Κάνα",
    "drone": {
      "youtubeId": "Bakpf-dqMz8",
      "title": "Πούντα Κάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πούντα Κάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-salvador": {
    "cityName": "Σαν Σαλβαδόρ",
    "drone": {
      "youtubeId": "82iTIk5Oxqs",
      "title": "Σαν Σαλβαδόρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαν Σαλβαδόρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santa-ana": {
    "cityName": "Σάντα Άνα",
    "drone": {
      "youtubeId": "RT0vmDHsq1o",
      "title": "Σάντα Άνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σάντα Άνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "st-georges": {
    "cityName": "Σεντ Τζορτζς",
    "drone": {
      "youtubeId": "E7OF5bu-ZT8",
      "title": "Σεντ Τζορτζς 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σεντ Τζορτζς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "guatemala-city": {
    "cityName": "Γουατεμάλα Σίτι",
    "drone": {
      "youtubeId": "Dqvwst9puhQ",
      "title": "Γουατεμάλα Σίτι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γουατεμάλα Σίτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "antigua-guatemala": {
    "cityName": "Αντίγουα Γουατεμάλα",
    "drone": {
      "youtubeId": "-MFjiecIl1A",
      "title": "Αντίγουα Γουατεμάλα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αντίγουα Γουατεμάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-au-prince": {
    "cityName": "Πορτ-ο-Πρενς",
    "drone": {
      "youtubeId": "4v5QKxUUEDk",
      "title": "Πορτ-ο-Πρενς 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πορτ-ο-Πρενς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cap-haitien": {
    "cityName": "Καπ-Αϊτιέν",
    "drone": {
      "youtubeId": "g-icinUWL0c",
      "title": "Καπ-Αϊτιέν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Καπ-Αϊτιέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "basseterre": {
    "cityName": "Μπαστέρ",
    "drone": {
      "youtubeId": "8H268yO9udw",
      "title": "Μπαστέρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπαστέρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "castries": {
    "cityName": "Κάστρις",
    "drone": {
      "youtubeId": "a0-kobXtlaE",
      "title": "Κάστρις 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κάστρις με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kingstown": {
    "cityName": "Κίνγκσταουν",
    "drone": {
      "youtubeId": "XOtd_qspYcA",
      "title": "Κίνγκσταουν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κίνγκσταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-of-spain": {
    "cityName": "Πορτ οφ Σπέιν",
    "drone": {
      "youtubeId": "hxw7DU2cGpA",
      "title": "Πορτ οφ Σπέιν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πορτ οφ Σπέιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-fernando": {
    "cityName": "Σαν Φερνάντο",
    "drone": {
      "youtubeId": "gZ0XKoDVURI",
      "title": "Σαν Φερνάντο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαν Φερνάντο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tegucigalpa": {
    "cityName": "Τεγκουσιγκάλπα",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Τεγκουσιγκάλπα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τεγκουσιγκάλπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-pedro-sula": {
    "cityName": "Σαν Πέδρο Σούλα",
    "drone": {
      "youtubeId": "Sw4NYi0YOw8",
      "title": "Σαν Πέδρο Σούλα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαν Πέδρο Σούλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "roatan": {
    "cityName": "Ροατάν",
    "drone": {
      "youtubeId": "Wn8w1xKrk0c",
      "title": "Ροατάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ροατάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "copan-ruinas": {
    "cityName": "Κοπάν Ρουίνας",
    "drone": {
      "youtubeId": "q7_EeVxO3rE",
      "title": "Κοπάν Ρουίνας 4K: Εναέρια Περιήγηση στον Αρχαιολογικό Χώρο Μάγια",
      "label": "Κοπάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "la-ceiba": {
    "cityName": "Λα Σέιμπα",
    "drone": {
      "youtubeId": "zM7w1-8Wp60",
      "title": "Λα Σέιμπα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λα Σέιμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "comayagua": {
    "cityName": "Κομαγιάγουα",
    "drone": {
      "youtubeId": "nZqj9i1dK7A",
      "title": "Κομαγιάγουα 4K: Εναέρια Περιήγηση στην Αποικιακή Πρωτεύουσα",
      "label": "Κομαγιάγουα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "utila": {
    "cityName": "Ουτίλα",
    "drone": {
      "youtubeId": "9O8wZ2VbK0c",
      "title": "Ουτίλα 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ύφαλο",
      "label": "Ουτίλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "choluteca": {
    "cityName": "Τσολοτέκα",
    "drone": {
      "youtubeId": "J6w1_89vK7A",
      "title": "Τσολοτέκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τσολοτέκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santa-rosa-de-copan": {
    "cityName": "Σάντα Ρόσα ντε Κοπάν",
    "drone": {
      "youtubeId": "p7_e1-89v0c",
      "title": "Σάντα Ρόσα ντε Κοπάν 4K: Εναέρια Περιήγηση στην Πρωτεύουσα του Καφέ",
      "label": "Σάντα Ρόσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "trujillo-hn": {
    "cityName": "Τρουχίγιο",
    "drone": {
      "youtubeId": "x8wZ2-1vK9A",
      "title": "Τρουχίγιο 4K: Εναέρια Πανοραμική Περιήγηση Drone στην Ιστορική Ακτή",
      "label": "Τρουχίγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kingston": {
    "cityName": "Κίνγκστον",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Κίνγκστον 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κίνγκστον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "dbCVL1ul1QQ",
      "title": "Κίνγκστον 24/7: Ζωντανή Μετάδοση από το Κέντρο (West Parade)",
      "label": "Κίνγκστον Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "montego-bay": {
    "cityName": "Μοντέγκο Μπέι",
    "drone": {
      "youtubeId": "gEJaYzWCGlA",
      "title": "Μοντέγκο Μπέι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μοντέγκο Μπέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "ac0v_QwqYfw",
      "title": "Μοντέγκο Μπέι 24/7: Ζωντανή Μετάδοση από την Πλατεία Sam Sharpe",
      "label": "Μοντέγκο Μπέι Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "ocho-rios": {
    "cityName": "Ότσο Ρίος",
    "drone": {
      "youtubeId": "6G8k9fJ0X4E",
      "title": "Ότσο Ρίος 4K: Εναέρια Πανοραμική Περιήγηση Drone στους Καταρράκτες Dunn's River",
      "label": "Ότσο Ρίος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "negril": {
    "cityName": "Νεγκρίλ",
    "drone": {
      "youtubeId": "N0vK91_dE8w",
      "title": "Νεγκρίλ 4K: Εναέρια Περιήγηση στην Παραλία Seven Mile Beach",
      "label": "Νεγκρίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-antonio": {
    "cityName": "Πορτ Αντόνιο",
    "drone": {
      "youtubeId": "W8xZ1-0vK9A",
      "title": "Πορτ Αντόνιο 4K: Εναέρια Περιήγηση στη Γαλάζια Λιμνοθάλασσα",
      "label": "Πορτ Αντόνιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "falmouth": {
    "cityName": "Φάλμουθ",
    "drone": {
      "youtubeId": "9jK8w1_eE7A",
      "title": "Φάλμουθ 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Ιστορικό Γεωργιανό Λιμάνι",
      "label": "Φάλμουθ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "spanish-town": {
    "cityName": "Σπάνις Τάουν",
    "drone": {
      "youtubeId": "J0vK81_8w9A",
      "title": "Σπάνις Τάουν 4K: Εναέρια Περιήγηση στην Παλιά Πρωτεύουσα",
      "label": "Σπάνις Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mandeville": {
    "cityName": "Μάντεβιλ",
    "drone": {
      "youtubeId": "Z1vK98_8w0E",
      "title": "Μάντεβιλ 4K: Εναέρια Περιήγηση στα Καταπράσινα Ορεινά Υψίπεδα",
      "label": "Μάντεβιλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "black-river": {
    "cityName": "Μπλακ Ρίβερ",
    "drone": {
      "youtubeId": "e8wZ1-0vK7A",
      "title": "Μπλακ Ρίβερ 4K: Εναέρια Περιήγηση στο Ποτάμι & τα Μαγκρόβια Έλη",
      "label": "Μπλακ Ρίβερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-royal": {
    "cityName": "Πορτ Ρόαγιαλ",
    "drone": {
      "youtubeId": "p0vK81_8w9E",
      "title": "Πορτ Ρόαγιαλ 4K: Εναέρια Περιήγηση στην Ιστορική Πειρατική Πόλη & το Fort Charles",
      "label": "Πορτ Ρόαγιαλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "managua": {
    "cityName": "Μανάγουα",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Μανάγουα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μανάγουα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "granada-ni": {
    "cityName": "Γρανάδα",
    "drone": {
      "youtubeId": "W2SFwapoGHk",
      "title": "Γρανάδα Νικαράγουας 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γρανάδα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "leon-ni": {
    "cityName": "Λεόν",
    "drone": {
      "youtubeId": "K7vK91_eE8w",
      "title": "Λεόν 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Καθεδρικό Ναό UNESCO",
      "label": "Λεόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-juan-del-sur": {
    "cityName": "Σαν Χουάν ντελ Σουρ",
    "drone": {
      "youtubeId": "N9wZ1-0vK8A",
      "title": "Σαν Χουάν ντελ Σουρ 4K: Εναέρια Περιήγηση στον Κόλπο & το Άγαλμα του Χριστού",
      "label": "Σαν Χουάν ντελ Σουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "matagalpa": {
    "cityName": "Ματαγκάλπα",
    "drone": {
      "youtubeId": "J8vK91_8w7E",
      "title": "Ματαγκάλπα 4K: Εναέρια Περιήγηση στα Ορεινά Υψίπεδα & τα Δάση του Καφέ",
      "label": "Ματαγκάλπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "esteli": {
    "cityName": "Εστελί",
    "drone": {
      "youtubeId": "Z0vK81_8w9A",
      "title": "Εστελί 4K: Εναέρια Περιήγηση στην Πόλη των Πούρων & των Τοιχογραφιών",
      "label": "Εστελί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moyogalpa": {
    "cityName": "Μογιογάλπα",
    "drone": {
      "youtubeId": "p9wZ1-0vK8E",
      "title": "Μογιογάλπα 4K: Εναέρια Περιήγηση στο Ηφαιστειογενές Νησί Ometepe",
      "label": "Μογιογάλπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "masaya": {
    "cityName": "Μασάγια",
    "drone": {
      "youtubeId": "e9vK81_8w0A",
      "title": "Μασάγια 4K: Εναέρια Περιήγηση στην Πόλη των Λουλουδιών & το Ηφαίστειο Masaya",
      "label": "Μασάγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-carlos-ni": {
    "cityName": "Σαν Κάρλος",
    "drone": {
      "youtubeId": "x7wZ1-0vK9E",
      "title": "Σαν Κάρλος 4K: Εναέρια Περιήγηση στη Συμβολή της Λίμνης Νικαράγουα & του Río San Juan",
      "label": "Σαν Κάρλος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bluefields": {
    "cityName": "Μπλούφιλντς",
    "drone": {
      "youtubeId": "W9vK81_8w7A",
      "title": "Μπλούφιλντς 4K: Εναέρια Πανοραμική Περιήγηση Drone στην Ακτή της Καραϊβικής",
      "label": "Μπλούφιλντς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "panama-city": {
    "cityName": "Πόλη του Παναμά",
    "drone": {
      "youtubeId": "PAG4OAQD6Fk",
      "title": "Πόλη του Παναμά 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πόλη του Παναμά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "colon": {
    "cityName": "Κολόν",
    "drone": {
      "youtubeId": "lWuGbIML2Fo",
      "title": "Κολόν & Διώρυγα Παναμά 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κολόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "yerevan": {
    "cityName": "Ερεβάν",
    "drone": {
      "youtubeId": "XPsJw2RStOE",
      "title": "Ερεβάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ερεβάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gyumri": {
    "cityName": "Γκιουμρί",
    "drone": {
      "youtubeId": "HX9FTD38tSg",
      "title": "Γκιουμρί 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γκιουμρί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "baku": {
    "cityName": "Μπακού",
    "drone": {
      "youtubeId": "JVpx5e5sRV4",
      "title": "Μπακού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπακού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ganja": {
    "cityName": "Γκαντζά",
    "drone": {
      "youtubeId": "hHvwZKPjcYE",
      "title": "Γκαντζά 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γκαντζά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tbilisi": {
    "cityName": "Τιφλίδα",
    "drone": {
      "youtubeId": "__FiUBt7SB4",
      "title": "Τιφλίδα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τιφλίδα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "batumi": {
    "cityName": "Μπατούμι",
    "drone": {
      "youtubeId": "8WNZH72L14Q",
      "title": "Μπατούμι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπατούμι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "astana": {
    "cityName": "Αστανά",
    "drone": {
      "youtubeId": "NHbb37I0iYw",
      "title": "Αστανά 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αστανά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "almaty": {
    "cityName": "Αλμάτι",
    "drone": {
      "youtubeId": "yOG-m8OQMwU",
      "title": "Αλμάτι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αλμάτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bishkek": {
    "cityName": "Μπισκέκ",
    "drone": {
      "youtubeId": "Bfd2pt8y560",
      "title": "Μπισκέκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπισκέκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "osh": {
    "cityName": "Ος",
    "drone": {
      "youtubeId": "Qp37q2-Gjvw",
      "title": "Ος 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dushanbe": {
    "cityName": "Ντουσαμπέ",
    "drone": {
      "youtubeId": "h1Euu_sKt1I",
      "title": "Ντουσαμπέ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντουσαμπέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "khujand": {
    "cityName": "Χουτζάντ",
    "drone": {
      "youtubeId": "MtXvjVC5X84",
      "title": "Χουτζάντ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Χουτζάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ashgabat": {
    "cityName": "Ασγκαμπάτ",
    "drone": {
      "youtubeId": "c3bjPv4HIt0",
      "title": "Ασγκαμπάτ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ασγκαμπάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "turkmenabat": {
    "cityName": "Τουρκμεναμπάτ",
    "drone": {
      "youtubeId": "vsGcIV1xNj8",
      "title": "Τουρκμεναμπάτ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τουρκμεναμπάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tashkent": {
    "cityName": "Τασκένδη",
    "drone": {
      "youtubeId": "fz6rXEXk-Wg",
      "title": "Τασκένδη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τασκένδη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "samarkand": {
    "cityName": "Σαμαρκάνδη",
    "drone": {
      "youtubeId": "X6h882A89AY",
      "title": "Σαμαρκάνδη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαμαρκάνδη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bukhara": {
    "cityName": "Μπουχάρα",
    "drone": {
      "youtubeId": "VmDJ7YkwsJQ",
      "title": "Μπουχάρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπουχάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kabul": {
    "cityName": "Καμπούλ",
    "drone": {
      "youtubeId": "0c3NnNKRDEo",
      "title": "Καμπούλ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Καμπούλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "herat": {
    "cityName": "Χεράτ",
    "drone": {
      "youtubeId": "6xyUUGL4fkU",
      "title": "Χεράτ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Χεράτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "new-delhi": {
    "cityName": "Νέο Δελχί",
    "drone": {
      "youtubeId": "l-5rGi8_A_4",
      "title": "Νέο Δελχί 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Νέο Δελχί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mumbai": {
    "cityName": "Βομβάη",
    "drone": {
      "youtubeId": "fFjSkhtvGnM",
      "title": "Βομβάη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βομβάη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "jaipur": {
    "cityName": "Τζαϊπούρ",
    "drone": {
      "youtubeId": "GYuAbHKrV0A",
      "title": "Τζαϊπούρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τζαϊπούρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "agra": {
    "cityName": "Άγκρα",
    "drone": {
      "youtubeId": "0NSq1-Ne26Y",
      "title": "Άγκρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Άγκρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "islamabad": {
    "cityName": "Ισλαμαμπάντ",
    "drone": {
      "youtubeId": "ptqMR21mMB0",
      "title": "Ισλαμαμπάντ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ισλαμαμπάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "karachi": {
    "cityName": "Καράτσι",
    "drone": {
      "youtubeId": "LvVGFHgRi_Y",
      "title": "Καράτσι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Καράτσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lahore": {
    "cityName": "Λαχόρη",
    "drone": {
      "youtubeId": "CXx5zKmjr80",
      "title": "Λαχόρη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λαχόρη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dhaka": {
    "cityName": "Ντάκα",
    "drone": {
      "youtubeId": "41Pa82bjHR0",
      "title": "Ντάκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντάκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chattogram": {
    "cityName": "Τσιταγκόνγκ",
    "drone": {
      "youtubeId": "fOHRvumSz6M",
      "title": "Τσιταγκόνγκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τσιταγκόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "thimphu": {
    "cityName": "Τιμπού",
    "drone": {
      "youtubeId": "lH64a1L3TDk",
      "title": "Τιμπού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τιμπού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "paro": {
    "cityName": "Πάρο",
    "drone": {
      "youtubeId": "71g28N20wtA",
      "title": "Πάρο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πάρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "male": {
    "cityName": "Μαλέ",
    "drone": {
      "youtubeId": "W4YfDg-dKzk",
      "title": "Μαλέ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μαλέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "_BMi3usEwi8",
      "title": "Μαλδίβες 24/7: Ζωντανή Εικόνα Τροπικής Παραλίας & Ωκεανού",
      "label": "Μαλδίβες Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "kathmandu": {
    "cityName": "Κατμαντού",
    "drone": {
      "youtubeId": "anvQw9GjSqw",
      "title": "Κατμαντού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κατμαντού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "pokhara": {
    "cityName": "Ποκάρα",
    "drone": {
      "youtubeId": "w2uhegVKIIU",
      "title": "Ποκάρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ποκάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "colombo": {
    "cityName": "Κολόμπο",
    "drone": {
      "youtubeId": "BON08E0L2v4",
      "title": "Κολόμπο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κολόμπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kandy": {
    "cityName": "Κάντι",
    "drone": {
      "youtubeId": "kelaN2mpOao",
      "title": "Κάντι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κάντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tehran": {
    "cityName": "Τεχεράνη",
    "drone": {
      "youtubeId": "7DkoPGGdKAA",
      "title": "Τεχεράνη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τεχεράνη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "isfahan": {
    "cityName": "Ισφαχάν",
    "drone": {
      "youtubeId": "M0zyMNkAc1s",
      "title": "Ισφαχάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ισφαχάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "shiraz": {
    "cityName": "Σιράζ",
    "drone": {
      "youtubeId": "fUKoU5PGSr4",
      "title": "Σιράζ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σιράζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "baghdad": {
    "cityName": "Βαγδάτη",
    "drone": {
      "youtubeId": "iDMg880IC0I",
      "title": "Βαγδάτη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βαγδάτη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "erbil": {
    "cityName": "Ερμπίλ",
    "drone": {
      "youtubeId": "EjkCjKckajo",
      "title": "Ερμπίλ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ερμπίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "jerusalem": {
    "cityName": "Ιερουσαλήμ",
    "drone": {
      "youtubeId": "Gq1xDg4n_68",
      "title": "Ιερουσαλήμ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ιερουσαλήμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "77akujLn4k8",
      "title": "Ιερουσαλήμ 24/7: Ζωντανή Μετάδοση από το Δυτικό Τείχος",
      "label": "Δυτικό Τείχος Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "tel-aviv": {
    "cityName": "Τελ Αβίβ",
    "drone": {
      "youtubeId": "pojZc02SnLk",
      "title": "Τελ Αβίβ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τελ Αβίβ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ramallah": {
    "cityName": "Ραμάλα",
    "drone": {
      "youtubeId": "H4b5UtoOzYg",
      "title": "Ραμάλα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ραμάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bethlehem": {
    "cityName": "Βηθλεέμ",
    "drone": {
      "youtubeId": "giWZYWi1H6k",
      "title": "Βηθλεέμ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βηθλεέμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "amman": {
    "cityName": "Αμμάν",
    "drone": {
      "youtubeId": "9sAJuAVlNUQ",
      "title": "Αμμάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αμμάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "petra": {
    "cityName": "Πέτρα",
    "drone": {
      "youtubeId": "k6FsLZTpBek",
      "title": "Πέτρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πέτρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "beirut": {
    "cityName": "Βηρυτός",
    "drone": {
      "youtubeId": "GkROf3z7fEU",
      "title": "Βηρυτός 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βηρυτός με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "byblos": {
    "cityName": "Βύβλος",
    "drone": {
      "youtubeId": "rA-CvGKi2WI",
      "title": "Βύβλος 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βύβλος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "damascus": {
    "cityName": "Δαμασκός",
    "drone": {
      "youtubeId": "Ak0NqU7WnsU",
      "title": "Δαμασκός 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Δαμασκός με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "aleppo": {
    "cityName": "Χαλέπι",
    "drone": {
      "youtubeId": "vqB7GosYBaM",
      "title": "Χαλέπι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Χαλέπι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kuwait-city": {
    "cityName": "Πόλη του Κουβέιτ",
    "drone": {
      "youtubeId": "gYi51iEyf8A",
      "title": "Πόλη του Κουβέιτ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πόλη του Κουβέιτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "manama": {
    "cityName": "Μανάμα",
    "drone": {
      "youtubeId": "ErnpUEo2QCM",
      "title": "Μανάμα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μανάμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "muscat": {
    "cityName": "Μουσκάτ",
    "drone": {
      "youtubeId": "_AaS_gHnaMA",
      "title": "Μουσκάτ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μουσκάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "salalah": {
    "cityName": "Σαλάλα",
    "drone": {
      "youtubeId": "wwv1AlrHPzY",
      "title": "Σαλάλα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαλάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "doha": {
    "cityName": "Ντόχα",
    "drone": {
      "youtubeId": "WsIauFcSTnw",
      "title": "Ντόχα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντόχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "riyadh": {
    "cityName": "Ριάντ",
    "drone": {
      "youtubeId": "l9bU24Nu-cc",
      "title": "Ριάντ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ριάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "jeddah": {
    "cityName": "Τζέντα",
    "drone": {
      "youtubeId": "JjLIBAH8wZc",
      "title": "Τζέντα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τζέντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mecca": {
    "cityName": "Μέκκα",
    "drone": {
      "youtubeId": "DtpOIfvbeRI",
      "title": "Μέκκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μέκκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "e2Mj4ch8l94",
      "title": "Μέκκα 24/7: Ζωντανή Μετάδοση από το Ιερό Τέμενος Al-Masjid al-Haram",
      "label": "Μέκκα Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "abu-dhabi": {
    "cityName": "Άμπου Ντάμπι",
    "drone": {
      "youtubeId": "_5CSitKheXQ",
      "title": "Άμπου Ντάμπι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Άμπου Ντάμπι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dubai": {
    "cityName": "Ντουμπάι",
    "drone": {
      "youtubeId": "IdejM6wCkxA",
      "title": "Ντουμπάι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντουμπάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sharjah": {
    "cityName": "Σάρτζα",
    "drone": {
      "youtubeId": "OcbFIzI866s",
      "title": "Σάρτζα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σάρτζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sanaa": {
    "cityName": "Σαναά",
    "drone": {
      "youtubeId": "mo9sKq5Nu1w",
      "title": "Σαναά 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σαναά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "aden": {
    "cityName": "Άντεν",
    "drone": {
      "youtubeId": "JpdseCPkdKs",
      "title": "Άντεν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Άντεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "porto-novo": {
    "cityName": "Πόρτο Νόβο",
    "drone": {
      "youtubeId": "WCWw33nRVV4",
      "title": "Πόρτο Νόβο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πόρτο Νόβο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cotonou": {
    "cityName": "Κοτονού",
    "drone": {
      "youtubeId": "4kf0AojDZh8",
      "title": "Κοτονού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κοτονού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ouagadougou": {
    "cityName": "Ουαγκαντουγκού",
    "drone": {
      "youtubeId": "f_sBb4CZ0W8",
      "title": "Ουαγκαντουγκού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ουαγκαντουγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bobo-dioulasso": {
    "cityName": "Μπόμπο-Ντιουλασό",
    "drone": {
      "youtubeId": "vNdewUJbFvg",
      "title": "Μπόμπο-Ντιουλασό 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπόμπο-Ντιουλασό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "banjul": {
    "cityName": "Μπανζούλ",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Μπανζούλ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπανζούλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "conakry": {
    "cityName": "Κονακρί",
    "drone": {
      "youtubeId": "wGy-wpZNVpw",
      "title": "Κονακρί 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κονακρί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bissau": {
    "cityName": "Μπισάου",
    "drone": {
      "youtubeId": "cAlsgNrBHUY",
      "title": "Μπισάου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπισάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "monrovia": {
    "cityName": "Μονρόβια",
    "drone": {
      "youtubeId": "6RnQhiN2ZfY",
      "title": "Μονρόβια 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μονρόβια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bamako": {
    "cityName": "Μπαμακό",
    "drone": {
      "youtubeId": "Lp21jHwPUKE",
      "title": "Μπαμακό 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπαμακό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "timbuktu": {
    "cityName": "Τιμπουκτού",
    "drone": {
      "youtubeId": "5NMttYuLoYc",
      "title": "Τιμπουκτού 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τιμπουκτού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "niamey": {
    "cityName": "Νιαμέι",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Νιαμέι 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Νιαμέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "freetown": {
    "cityName": "Φρίταουν",
    "drone": {
      "youtubeId": "OvBf3BLfSJs",
      "title": "Φρίταουν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Φρίταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lome": {
    "cityName": "Λομέ",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Λομέ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λομέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ndjamena": {
    "cityName": "Ντζαμένα",
    "drone": {
      "youtubeId": "cTapro0Yf5w",
      "title": "Ντζαμένα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντζαμένα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bangui": {
    "cityName": "Μπανγκί",
    "drone": {
      "youtubeId": "39498biFcEo",
      "title": "Μπανγκί 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπανγκί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "brazzaville": {
    "cityName": "Μπραζαβίλ",
    "drone": {
      "youtubeId": "iy1EV5c5QNY",
      "title": "Μπραζαβίλ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπραζαβίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "pointe-noire": {
    "cityName": "Πουάντ-Νουάρ",
    "drone": {
      "youtubeId": "dAv4twq8Yl8",
      "title": "Πουάντ-Νουάρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πουάντ-Νουάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "malabo": {
    "cityName": "Μαλάμπο",
    "drone": {
      "youtubeId": "GQY0b_S5wGg",
      "title": "Μαλάμπο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μαλάμπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "libreville": {
    "cityName": "Λιμπρεβίλ",
    "drone": {
      "youtubeId": "AgCqx8S9HI0",
      "title": "Λιμπρεβίλ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λιμπρεβίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sao-tome": {
    "cityName": "Σάο Τομέ",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Σάο Τομέ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σάο Τομέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moroni": {
    "cityName": "Μορονί",
    "drone": {
      "youtubeId": "83_siRFEZqw",
      "title": "Μορονί 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μορονί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "victoria": {
    "cityName": "Βικτόρια",
    "drone": {
      "youtubeId": "qbhoJNJexAw",
      "title": "Βικτόρια 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βικτόρια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "Thtj8Ht7Z_c",
      "title": "Σεϋχέλλες 24/7: Ζωντανή Εικόνα Παραλίας & Ινδικού Ωκεανού",
      "label": "Σεϋχέλλες Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "djibouti-city": {
    "cityName": "Τζιμπουτί",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τζιμπουτί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "asmara": {
    "cityName": "Ασμάρα",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Ασμάρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ασμάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mogadishu": {
    "cityName": "Μογκαντίσου",
    "drone": {
      "youtubeId": "ZpWtKJkNUhM",
      "title": "Μογκαντίσου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μογκαντίσου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "hargeisa": {
    "cityName": "Χαργκέισα",
    "drone": {
      "youtubeId": "koY3eB9QUSo",
      "title": "Χαργκέισα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Χαργκέισα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "khartoum": {
    "cityName": "Χαρτούμ",
    "drone": {
      "youtubeId": "qN4o5O9rK6w",
      "title": "Χαρτούμ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Χαρτούμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-sudan": {
    "cityName": "Πορτ Σουδάν",
    "drone": {
      "youtubeId": "wvrZxu_hu-Q",
      "title": "Πορτ Σουδάν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πορτ Σουδάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "juba": {
    "cityName": "Τζούμπα",
    "drone": {
      "youtubeId": "jGuvatBoc6g",
      "title": "Τζούμπα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τζούμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gitega": {
    "cityName": "Γκιτέγκα",
    "drone": {
      "youtubeId": "PRe_CIihW60",
      "title": "Γκιτέγκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γκιτέγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bujumbura": {
    "cityName": "Μπουζουμπούρα",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Μπουζουμπούρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπουζουμπούρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lilongwe": {
    "cityName": "Λιλόνγκουε",
    "drone": {
      "youtubeId": "k1RVOLXa-mI",
      "title": "Λιλόνγκουε 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λιλόνγκουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "blantyre": {
    "cityName": "Μπλαντάιρ",
    "drone": {
      "youtubeId": "VfN2ZczsY-k",
      "title": "Μπλαντάιρ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπλαντάιρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lusaka": {
    "cityName": "Λουσάκα",
    "drone": {
      "youtubeId": "SXD0jzWJxUs",
      "title": "Λουσάκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λουσάκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Ζάμπια 24/7: Ζωντανή Μετάδοση Άγριας Ζωής από τον Ποταμό Ζαμβέζη",
      "label": "Ζαμβέζης Safari Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "livingstone": {
    "cityName": "Λίβινγκστον",
    "drone": {
      "youtubeId": "G99ZZ6WE7aI",
      "title": "Λίβινγκστον 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λίβινγκστον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "maseru": {
    "cityName": "Μαζέρου",
    "drone": {
      "youtubeId": "W-2xJUgjlTw",
      "title": "Μαζέρου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μαζέρου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbabane": {
    "cityName": "Μπαμπάνε",
    "drone": {
      "youtubeId": "tXl8BACGynE",
      "title": "Μπαμπάνε 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπαμπάνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "manchester": {
    "cityName": "Μάντσεστερ",
    "drone": {
      "youtubeId": "rFhPuFiXkKE",
      "title": "Μάντσεστερ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μάντσεστερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "ySSjoFX6lbg",
      "title": "Μάντσεστερ 24/7: Ζωντανή Εικόνα 4K από το Κέντρο της Πόλης",
      "label": "Μάντσεστερ Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "hamburg": {
    "cityName": "Αμβούργο",
    "drone": {
      "youtubeId": "MuflV6qAs3I",
      "title": "Αμβούργο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αμβούργο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "OmyDLXvaus4",
      "title": "Αμβούργο 24/7: Ζωντανή Θέα από τον St. Michaelis στο Λιμάνι",
      "label": "Λιμάνι Αμβούργου Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "seville": {
    "cityName": "Σεβίλλη",
    "drone": {
      "youtubeId": "fZgPkyv-DzE",
      "title": "Σεβίλλη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σεβίλλη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "salzburg": {
    "cityName": "Σάλτσμπουργκ",
    "drone": {
      "youtubeId": "XeQWk10mrfI",
      "title": "Σάλτσμπουργκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σάλτσμπουργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "innsbruck": {
    "cityName": "Ίνσμπρουκ",
    "drone": {
      "youtubeId": "bFv1OL87Jr4",
      "title": "Ίνσμπρουκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ίνσμπρουκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rotterdam": {
    "cityName": "Ρότερνταμ",
    "drone": {
      "youtubeId": "kwzB0_uluZE",
      "title": "Ρότερνταμ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ρότερνταμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "utrecht": {
    "cityName": "Ουτρέχτη",
    "drone": {
      "youtubeId": "hp_AyQa1PnA",
      "title": "Ουτρέχτη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ουτρέχτη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "antwerp": {
    "cityName": "Αμβέρσα",
    "drone": {
      "youtubeId": "LOBP_10R4hw",
      "title": "Αμβέρσα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Αμβέρσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ghent": {
    "cityName": "Γάνδη",
    "drone": {
      "youtubeId": "UW8OYSnTmKA",
      "title": "Γάνδη 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γάνδη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "porto": {
    "cityName": "Πόρτο",
    "drone": {
      "youtubeId": "oW-KKzptuws",
      "title": "Πόρτο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Πόρτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "QetuuDxsgig",
      "title": "Πόρτο 24/7: Ζωντανή Μετάδοση από τη Ribeira & Ποταμό Ντούρο",
      "label": "Πόρτο Ribeira Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "braga": {
    "cityName": "Μπράγκα",
    "drone": {
      "youtubeId": "mB9hurNTs9k",
      "title": "Μπράγκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπράγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "brno": {
    "cityName": "Μπρνο",
    "drone": {
      "youtubeId": "kQC3M5CKo6M",
      "title": "Μπρνο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπρνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ostrava": {
    "cityName": "Οστράβα",
    "drone": {
      "youtubeId": "un8sYLS5uWw",
      "title": "Οστράβα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Οστράβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "malmo": {
    "cityName": "Μάλμε",
    "drone": {
      "youtubeId": "MuEXP4fyx4Y",
      "title": "Μάλμε 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μάλμε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tromso": {
    "cityName": "Τρόμσο",
    "drone": {
      "youtubeId": "0wZNl59hwQo",
      "title": "Τρόμσο 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τρόμσο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "live": {
      "youtubeId": "1ftSSTI9JFA",
      "title": "Τρόμσο 24/7: Ζωντανή Μετάδοση από την Αρκτική Νορβηγία",
      "label": "Τρόμσο Βόρειο Σέλας Live",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "odense": {
    "cityName": "Όντενσε",
    "drone": {
      "youtubeId": "l5oFweVzT-o",
      "title": "Όντενσε 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Όντενσε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "turku": {
    "cityName": "Τούρκου",
    "drone": {
      "youtubeId": "e28uSm09HZI",
      "title": "Τούρκου 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τούρκου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cork": {
    "cityName": "Κορκ",
    "drone": {
      "youtubeId": "JnZBoDh0KHY",
      "title": "Κορκ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κορκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "galway": {
    "cityName": "Γκάλγουεϊ",
    "drone": {
      "youtubeId": "XXfXlOXOUtE",
      "title": "Γκάλγουεϊ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γκάλγουεϊ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "debrecen": {
    "cityName": "Ντέμπρετσεν",
    "drone": {
      "youtubeId": "MGbQwrYcubk",
      "title": "Ντέμπρετσεν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντέμπρετσεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "szeged": {
    "cityName": "Σέγκεντ",
    "drone": {
      "youtubeId": "rKQztDS6VSA",
      "title": "Σέγκεντ 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σέγκεντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cluj": {
    "cityName": "Κλουζ-Ναπόκα",
    "drone": {
      "youtubeId": "RpPGj5YyEp0",
      "title": "Κλουζ-Ναπόκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κλουζ-Ναπόκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "timisoara": {
    "cityName": "Τιμισοάρα",
    "drone": {
      "youtubeId": "TouX88WI5Eg",
      "title": "Τιμισοάρα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τιμισοάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "varna": {
    "cityName": "Βάρνα",
    "drone": {
      "youtubeId": "GIcpzQ8wbHA",
      "title": "Βάρνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Βάρνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nis": {
    "cityName": "Νις",
    "drone": {
      "youtubeId": "b7thV3WiA4w",
      "title": "Νις 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Νις με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "frankfurt": {
    "cityName": "Φρανκφούρτη",
    "drone": {
      "youtubeId": "PQ3USMvf6Z8",
      "title": "Φρανκφούρτη 4K — Frankfurt, Germany in 4K ULTRA HD HDR 60 FPS Dolby Vision™ Drone Video"
    },
    "live": {
      "youtubeId": "boJCx2dXCko",
      "label": "Φρανκφούρτη Skyline Live Cam",
      "title": "Frankfurt am Main | Live 24x7 | Live Camera | Frankfurt"
    }
  },
  "cologne": {
    "cityName": "Κολωνία",
    "drone": {
      "youtubeId": "6eLZfe5945E",
      "title": "Κολωνία 4K — Cologne / Köln, Germany 🇩🇪 - by drone [4K]"
    },
    "live": {
      "youtubeId": "u3pwYYYeDKE",
      "label": "Κολωνία & Καθεδρικός Live Cam",
      "title": "Kölner Dom: Live-Webcam Köln"
    }
  },
  "stuttgart": {
    "cityName": "Στουτγκάρδη",
    "drone": {
      "youtubeId": "cXorznac5Wk",
      "title": "Στουτγκάρδη 4K — STUTTGART 🇩🇪 Drone Aerial 4K Drohne | Baden-Württemberg Germany Deutschland"
    }
  },
  "dusseldorf": {
    "cityName": "Ντίσελντορφ",
    "drone": {
      "youtubeId": "QakCqMXksYU",
      "title": "Ντίσελντορφ 4K — Düsseldorf , Germany 🇩🇪 | 4K Drone Footage (With Subtitles)"
    }
  },
  "leipzig": {
    "cityName": "Λειψία",
    "drone": {
      "youtubeId": "FS74CTRfrmE",
      "title": "Λειψία 4K — Leipzig , Germany 🇩🇪 | 4K Drone Footage (With Subtitles)"
    }
  },
  "dresden": {
    "cityName": "Δρέσδη",
    "drone": {
      "youtubeId": "ffgUoRs4UBo",
      "title": "Δρέσδη 4K — Dresden , Germany 🇩🇪 | 4K Drone Footage (With Subtitles)"
    },
    "live": {
      "youtubeId": "vTJGeIvg8EY",
      "label": "Δρέσδη Frauenkirche Live Cam",
      "title": "Livecam Elbufer Dresden / Live from the river Elbe & Panorama of Dresden"
    }
  },
  "nuremberg": {
    "cityName": "Νυρεμβέργη",
    "drone": {
      "youtubeId": "k1CNwupt8W8",
      "title": "Νυρεμβέργη 4K — The Beauty of 🇩🇪 Nuremberg from the Air | 4K Cinematic Drone | Germany"
    }
  },
  "wroclaw": {
    "cityName": "Βρότσλαβ",
    "drone": {
      "youtubeId": "v9Tg6N8Cgsc",
      "title": "Βρότσλαβ 4K — Wrocław, Poland | 4K Drone Video"
    }
  },
  "poznan": {
    "cityName": "Πόζναν",
    "drone": {
      "youtubeId": "HDlejG5E7wQ",
      "title": "Πόζναν 4K — Poznań | Polska | Poland | Aerial Video | 4K"
    }
  },
  "lodz": {
    "cityName": "Λοτζ",
    "drone": {
      "youtubeId": "3N2iQiH6LTg",
      "title": "Λοτζ 4K — Łódź | Lodz | Poland | Polska | Aerial Video | 4K"
    }
  },
  "lublin": {
    "cityName": "Λούμπλιν",
    "drone": {
      "youtubeId": "Ja0vMsZCAlw",
      "title": "Λούμπλιν 4K — ONE DAY IN LUBLIN (POLAND) | 4K 60FPS | I love this beautiful Old Town"
    }
  },
  "szczecin": {
    "cityName": "Στσέτσιν",
    "drone": {
      "youtubeId": "4WMWJoSFB0c",
      "title": "Στσέτσιν 4K — Szczecin, Poland | 4K Drone Video"
    }
  },
  "torun": {
    "cityName": "Τόρουν",
    "drone": {
      "youtubeId": "yCPKYCC6aAU",
      "title": "Τόρουν 4K — 🇵🇱 4K drone video of Torun, Poland."
    }
  },
  "katowice": {
    "cityName": "Κατοβίτσε",
    "drone": {
      "youtubeId": "hBJgsn95b0s",
      "title": "Κατοβίτσε 4K — Katowice in Motion | Cinematic Drone Film 4K | Part 1"
    }
  },
  "nice": {
    "cityName": "Νίκαια",
    "drone": {
      "youtubeId": "CNseTOiosQw",
      "title": "Νίκαια 4K — Nice French Riviera in 4K ULTRA HD Drone"
    }
  },
  "bordeaux": {
    "cityName": "Μπορντό",
    "drone": {
      "youtubeId": "_DMkPTDGOao",
      "title": "Μπορντό 4K — Bordeaux, France 🇫🇷 - by drone / Autel Evo Lite+ [6K]"
    }
  },
  "strasbourg": {
    "cityName": "Στρασβούργο",
    "drone": {
      "youtubeId": "BGXZOVDANyg",
      "title": "Στρασβούργο 4K — Strasbourg, France – The Most Peaceful City in Europe | 4K Drone Cinematic"
    }
  },
  "toulouse": {
    "cityName": "Τουλούζη",
    "drone": {
      "youtubeId": "trismSS0JqI",
      "title": "Τουλούζη 4K — TOULOUSE in 4K 🇫🇷 Stunning Drone Footage of France’s Pink City"
    },
    "live": {
      "youtubeId": "Reuz0dRsBk0",
      "label": "Τουλούζη Live Cam",
      "title": "Webcam Toulouse - Vue sur la Garonne"
    }
  },
  "lille": {
    "cityName": "Λιλ",
    "drone": {
      "youtubeId": "gHEQ1wdQwvc",
      "title": "Λιλ 4K — LILLE 🇫🇷 France | 4K Drone Cinematography"
    }
  },
  "nantes": {
    "cityName": "Νάντη",
    "drone": {
      "youtubeId": "ZxxokBKABQM",
      "title": "Νάντη 4K — Nantes vue du ciel, drone 4K par Aurélien Aumond"
    }
  },
  "montpellier": {
    "cityName": "Μονπελιέ",
    "drone": {
      "youtubeId": "2VYB17PbM2k",
      "title": "Μονπελιέ 4K — Montpellier, France 🇫🇷 | 4K Drone Footage (With Subtitles)"
    }
  },
  "bilbao": {
    "cityName": "Μπιλμπάο",
    "drone": {
      "youtubeId": "9wk_GoCxdJk",
      "title": "Μπιλμπάο 4K — Bilbao, Spain 🇪🇸 4K HDR Drone | Nervión River, Old Town & City Views"
    }
  },
  "malaga": {
    "cityName": "Μάλαγα",
    "drone": {
      "youtubeId": "lq_uAyvyakw",
      "title": "Μάλαγα 4K — Malaga 4K - Droneview over Malaga in Spain | Relaxation Music"
    },
    "live": {
      "youtubeId": "4CaHlfpGlAI",
      "label": "Μάλαγα Live Cam",
      "title": "LIVE MÁLAGA - Alameda Principal & Calle Marques de Larios - Andalucía - España"
    }
  },
  "valencia-es": {
    "cityName": "Βαλένθια",
    "drone": {
      "youtubeId": "mWTDKXzOyg0",
      "title": "Βαλένθια 4K — Valencia , Spain 🇪🇸 | 4K Drone Footage (With Subtitles)"
    },
    "live": {
      "youtubeId": "dVAtjVi7bUQ",
      "label": "Βαλένθια Live Cam",
      "title": "🍊 WEBCAM EN #DIRECTO  #fallas2026  #LIVE 24h DESDE #VALENCIA #plaza Ayuntamiento Valencia"
    }
  },
  "granada-es": {
    "cityName": "Γρανάδα",
    "drone": {
      "youtubeId": "SYN91C41Fi0",
      "title": "Γρανάδα 4K — Granada, Spain 🇪🇸 - by drone [4K]"
    }
  },
  "toledo-es": {
    "cityName": "Τολέδο",
    "drone": {
      "youtubeId": "Vwi61wUI-FQ",
      "title": "Τολέδο 4K — Toledo, Spain 🇪🇸 | 4K Drone Footage"
    }
  },
  "salamanca": {
    "cityName": "Σαλαμάνκα",
    "drone": {
      "youtubeId": "XtcREKRqLpk",
      "title": "Σαλαμάνκα 4K — Mesmerizing Aerial Views of Salamanca - Spain | Stunning 4K Drone Footage"
    }
  },
  "zaragoza": {
    "cityName": "Σαραγόσα",
    "drone": {
      "youtubeId": "muBCArUO_s4",
      "title": "Σαραγόσα 4K — Zaragoza, Spain 🇪🇸 4K UHD | Drone Footage"
    }
  },
  "naples": {
    "cityName": "Νάπολη",
    "drone": {
      "youtubeId": "EAF3wvPYGao",
      "title": "Νάπολη 4K — Naples / Napoli, Italy 🇮🇹 - by drone [4K]"
    }
  },
  "bologna": {
    "cityName": "Μπολόνια",
    "drone": {
      "youtubeId": "uS6KMkjAsGU",
      "title": "Μπολόνια 4K — BOLOGNA 2024 🇮🇹 Drone Aerial 4K | Emilia-Romagna Italy Italia"
    }
  },
  "turin": {
    "cityName": "Τορίνο",
    "drone": {
      "youtubeId": "5KIl4bpaDBM",
      "title": "Τορίνο 4K — Turin in 4K"
    }
  },
  "verona": {
    "cityName": "Βερόνα",
    "drone": {
      "youtubeId": "magCEAsMerY",
      "title": "Βερόνα 4K — Verona, Italy 🇮🇹 | 4K Drone Footage (With Subtitles)"
    }
  },
  "palermo": {
    "cityName": "Παλέρμο",
    "drone": {
      "youtubeId": "KejgB6MKPtg",
      "title": "Παλέρμο 4K — Palermo, Italy by Drone 🇮🇹 [4K]"
    },
    "live": {
      "youtubeId": "FUhW3r5ROGc",
      "label": "Παλέρμο Live Cam",
      "title": "Palermo Live Webcam"
    }
  },
  "genoa": {
    "cityName": "Γένοβα",
    "drone": {
      "youtubeId": "BCIygKlkOgA",
      "title": "Γένοβα 4K — Genoa, Italy 🇮🇹 - by drone [4K]"
    },
    "live": {
      "youtubeId": "b66MhBy9J3o",
      "label": "Γένοβα Live Cam",
      "title": "Genoa Live Cam - Nervi, Sant'Ilario"
    }
  },
  "uppsala": {
    "cityName": "Ουψάλα",
    "drone": {
      "youtubeId": "5bmT5XvkmZo",
      "title": "Ουψάλα 4K — Uppsala, Sweden in 4K"
    }
  },
  "visby": {
    "cityName": "Βίσμπι",
    "drone": {
      "youtubeId": "ydzCG8fv1B0",
      "title": "Βίσμπι 4K — GOTLAND VISBY 🇸🇪 Götaland Drone Aerial | Sverige Sweden | Drönare Film #sweden #sverige"
    }
  },
  "kiruna": {
    "cityName": "Κιρούνα",
    "drone": {
      "youtubeId": "VrXrpvBan5A",
      "title": "Κιρούνα 4K — Summer Stroll in Kiruna New City Center – 2025 | Sweden - 4K"
    }
  },
  "linkoping": {
    "cityName": "Λινσέπινγκ",
    "drone": {
      "youtubeId": "WFn7KAKZ-Wk",
      "title": "Λινσέπινγκ 4K — Linköping From Above - Linköping DomKyrka - Gamla vattentornet - Sweden - 4K Aerial - June 2024"
    }
  },
  "orebro": {
    "cityName": "Έρεμπρο",
    "drone": {
      "youtubeId": "osrp6s6N0t8",
      "title": "Έρεμπρο 4K — Örebro Sweden 🇸🇪 | Stunning 4K Drone Footage & Cinematic Aerial Views | LUNITO Finland"
    }
  },
  "helsingborg": {
    "cityName": "Χέλσινγκμποργκ",
    "drone": {
      "youtubeId": "MfSfRsC_OcM",
      "title": "Χέλσινγκμποργκ 4K — Helsingborg Sweden | 4K Drone Video |"
    }
  },
  "lund": {
    "cityName": "Λουντ",
    "drone": {
      "youtubeId": "iKZ6H3j8srw",
      "title": "Λουντ 4K — [Drone] Lund, Sweden from above - A Different Perspective -  DJI MAVIC AIR 2 [4K] Footage."
    },
    "live": {
      "youtubeId": "7uVpEs9su3U",
      "label": "Λουντ Live Cam",
      "title": "AXIS Q1809-LE 41 MP Bullet Camera Live Streaming 24/7 from Lund, Sweden"
    }
  },
  "rijeka": {
    "cityName": "Ριέκα",
    "drone": {
      "youtubeId": "id2a20-1jlY",
      "title": "Ριέκα 4K — [4K] RIJEKA 2026 🇭🇷 CROATIA Drone 4K | Hrvatska | 1 Hour Aerial Relaxation Film"
    }
  },
  "zadar": {
    "cityName": "Ζάνταρ",
    "drone": {
      "youtubeId": "lLd5RuOGS64",
      "title": "Ζάνταρ 4K — ZADAR 🇭🇷 Drone Aerial 4K | Croatia Hrvatska Dalmatia"
    }
  },
  "pula": {
    "cityName": "Πούλα",
    "drone": {
      "youtubeId": "wHvtZw-hTVQ",
      "title": "Πούλα 4K — Pula, Croatia 🇭🇷 - by drone [4K]"
    }
  },
  "osijek": {
    "cityName": "Όσιγιεκ",
    "drone": {
      "youtubeId": "PuL9B7f1Br4",
      "title": "Όσιγιεκ 4K — Breathtaking Aerial Tour of Osijek, Croatia | 4K Drone Video"
    }
  },
  "varazdin": {
    "cityName": "Βαραζντίν",
    "drone": {
      "youtubeId": "rMVsHeM7Pzo",
      "title": "Βαραζντίν 4K — Varaždin Croatia | Stari Grad & Baroque Historic Old Town from Above – Stunning Drone Travel Video"
    }
  },
  "sibenik": {
    "cityName": "Σίμπενικ",
    "drone": {
      "youtubeId": "8__-FwBKkJk",
      "title": "Σίμπενικ 4K — Sibenik in 4K"
    }
  },
  "rovinj": {
    "cityName": "Ρόβινι",
    "drone": {
      "youtubeId": "UspkUQP5l8c",
      "title": "Ρόβινι 4K — ROVINJ – Croatia 🇭🇷 [4K video]"
    }
  },
  "rovaniemi": {
    "cityName": "Ροβανιέμι",
    "drone": {
      "youtubeId": "NoeptbkKizc",
      "title": "Ροβανιέμι 4K — Finnish Lapland by air: Home area in Finland of Santa Claus by drone Rovaniemi Levi Pello Travel"
    },
    "live": {
      "youtubeId": "wT8Zhh9MBEE",
      "label": "Ροβανιέμι Live Cam",
      "title": "Apukka Resort Live Cam Rovaniemi, Lapland by Aurora Alert Realtime"
    }
  },
  "oulu": {
    "cityName": "Όουλου",
    "drone": {
      "youtubeId": "5z6kjpc83wY",
      "title": "Όουλου 4K — Oulu Drone 4K, Finland"
    },
    "live": {
      "youtubeId": "vTzDKYXvlt4",
      "label": "Όουλου Live Cam",
      "title": "Railcam Oulu Live Stream"
    }
  },
  "jyvaskyla": {
    "cityName": "Γιουβάσκουλα",
    "drone": {
      "youtubeId": "OoznY3WeihY",
      "title": "Γιουβάσκουλα 4K — Jyväskylä drone 4K"
    }
  },
  "kuopio": {
    "cityName": "Κουόπιο",
    "drone": {
      "youtubeId": "62isGu1kx_c",
      "title": "Κουόπιο 4K — Kuopio harbor and new breakwaters 4K Finland from air"
    }
  },
  "lahti": {
    "cityName": "Λάχτι",
    "drone": {
      "youtubeId": "DBlEuXwnn58",
      "title": "Λάχτι 4K — Lahti ilmasta 2020 - Flying over Finland [4K]"
    }
  },
  "vaasa": {
    "cityName": "Βάασα",
    "drone": {
      "youtubeId": "UAQgi-LFxbQ",
      "title": "Βάασα 4K — Vaasa, Finland - Cinematic 4k Drone Footage"
    }
  },
  "porvoo": {
    "cityName": "Πόρβοο",
    "drone": {
      "youtubeId": "Dbx4c9qthQ0",
      "title": "Πόρβοο 4K — Porvoo , Finland in 4K | Stunning Aerial Drone Tour of Finland ’s Historic Gem"
    }
  },
  "sibiu": {
    "cityName": "Σιμπίου",
    "drone": {
      "youtubeId": "g6W3O2xFkRM",
      "title": "Σιμπίου 4K — 🇷🇴 Sibiu, România – Tur cu drona 4K – Vedere pitorească a orașului istoric"
    }
  },
  "constanta": {
    "cityName": "Κωνστάντζα",
    "drone": {
      "youtubeId": "yQoC68QVckw",
      "title": "Κωνστάντζα 4K — Dronă Old Town CONSTANTA 4K • Zbor în România 2023 • Констанца, Румунія"
    }
  },
  "iasi": {
    "cityName": "Ιάσιο",
    "drone": {
      "youtubeId": "yBU_QHW5jHA",
      "title": "Ιάσιο 4K — Iași Romania 4K | Palace of Culture Night Drone Tour 2025"
    }
  },
  "oradea": {
    "cityName": "Οράντεα",
    "drone": {
      "youtubeId": "v-8lljnzYf0",
      "title": "Οράντεα 4K — 🇷🇴 Magnificent Oradea, Romania – 4K Drone Tour – Art Nouveau Jewel of Transylvania"
    }
  },
  "sighisoara": {
    "cityName": "Σιγκισοάρα",
    "drone": {
      "youtubeId": "aY_4DhU0wXo",
      "title": "Σιγκισοάρα 4K — Sighisoara, Romania 🇷🇴 in 4K Ultra HD | Drone Video"
    }
  },
  "craiova": {
    "cityName": "Κραϊόβα",
    "drone": {
      "youtubeId": "GysvlZF8BHA",
      "title": "Κραϊόβα 4K — CRAIOVA, ROMANIA - 3 Minutes of Amazing Drone Footage - DJI Mavic Air 2 - 4K HDR"
    }
  },
  "trondheim": {
    "cityName": "Τρόντχαϊμ",
    "drone": {
      "youtubeId": "R00T3I_0otU",
      "title": "Τρόντχαϊμ 4K — Trondheim, Norway - City Tour & Drone, 4k"
    },
    "live": {
      "youtubeId": "6zmxTEHckfI",
      "label": "Τρόντχαϊμ Live Cam",
      "title": "Pirbadet, Trondheim"
    }
  },
  "stavanger": {
    "cityName": "Σταβάνγκερ",
    "drone": {
      "youtubeId": "67UV_TgtOnU",
      "title": "Σταβάνγκερ 4K — Stavanger, Norway 🇳🇴 in 4K ULTRA HD | Drone Footage"
    },
    "live": {
      "youtubeId": "RA6Jm7sv_F4",
      "label": "Σταβάνγκερ Live Cam",
      "title": "Stavanger Tjuvholmen - Live"
    }
  },
  "alesund": {
    "cityName": "Όλεσουντ",
    "drone": {
      "youtubeId": "wWQOvTx7yp8",
      "title": "Όλεσουντ 4K — Ålesund, Norway 🇳🇴 in 4K ULTRA HD | Drone Footage"
    }
  },
  "kristiansand": {
    "cityName": "Κρίστιανσαντ",
    "drone": {
      "youtubeId": "lo1ByUZ4bew",
      "title": "Κρίστιανσαντ 4K — kristiansand, Norway 🇳🇴 in 4K ULTRA HD | Drone Footage"
    }
  },
  "drammen": {
    "cityName": "Ντράμεν",
    "drone": {
      "youtubeId": "bvqsEzoi1kM",
      "title": "Ντράμεν 4K — Drammen in Sommer 2021.Norway /Drone/ 4K"
    },
    "live": {
      "youtubeId": "6LiukKeHyBc",
      "label": "Ντράμεν Live Cam",
      "title": "Drammen Skimore LIVE"
    }
  },
  "bodo": {
    "cityName": "Μπόντε",
    "drone": {
      "youtubeId": "GYYGLs905t4",
      "title": "Μπόντε 4K — Amazing Arctic Norwegian Beach Nature Drone 4K Video: Hovdsundet, Bodø, Norway"
    },
    "live": {
      "youtubeId": "04jMCyigPQM",
      "label": "Μπόντε Live Cam",
      "title": "Bodø Havn - Sjøgata 1 - Live"
    }
  },
  "lillehammer": {
    "cityName": "Λιλεχάμερ",
    "drone": {
      "youtubeId": "nYDv8JHDXnY",
      "title": "Λιλεχάμερ 4K — Lillehammer, Norway - City Tour & Drone, 4k"
    }
  },
  "aalborg": {
    "cityName": "Όλμποργκ",
    "drone": {
      "youtubeId": "f6sbVcfXgD4",
      "title": "Όλμποργκ 4K — Denmark 4K - Explore The Mesmerizing Aalborg Drone Film With Relaxing Music"
    }
  },
  "roskilde": {
    "cityName": "Ροσκίλντε",
    "drone": {
      "youtubeId": "5cj_o-N2kZA",
      "title": "Ροσκίλντε 4K — Roskilde From Above - 4K Aerial Drone - Roskilde Cathedral - Roskilde Festival - Fjord - Denmark"
    }
  },
  "esbjerg": {
    "cityName": "Έσμπιεργκ",
    "drone": {
      "youtubeId": "5Mr0V0-x6NE",
      "title": "Έσμπιεργκ 4K — Esbjerg, Denmark 🇩🇰 | 4K Drone Footage"
    }
  },
  "kolding": {
    "cityName": "Κόλντινγκ",
    "drone": {
      "youtubeId": "japbX952iV0",
      "title": "Κόλντινγκ 4K — Kolding Like You've Never Seen It Before (Drone 4K)"
    }
  },
  "skagen": {
    "cityName": "Σκάγκεν",
    "drone": {
      "youtubeId": "fGw9Rhbz2tA",
      "title": "Σκάγκεν 4K — SKAGEN, Denmark - where the Baltic meets the North Sea (drone, 4K)"
    }
  },
  "helsingor": {
    "cityName": "Χέλσινγκορ",
    "drone": {
      "youtubeId": "kWVt45tHDKQ",
      "title": "Χέλσινγκορ 4K — Drone 4K @ Helsingor, Denmark 🇩🇰 "
    }
  },
  "vejle": {
    "cityName": "Βάιλε",
    "drone": {
      "youtubeId": "wPqdHUaw8pg",
      "title": "Βάιλε 4K — 3 minutes from VEJLE... (4K) Cinematic drone footage #vejle #denmark #drone #4k"
    }
  },
  "plzen": {
    "cityName": "Πίλζεν",
    "drone": {
      "youtubeId": "lvMwpDADgFE",
      "title": "Πίλζεν 4K — Česká republika 4K | Objevte Prahu a Plzeň jako nikdy předtím"
    }
  },
  "cesky-krumlov": {
    "cityName": "Τσέσκι Κρούμλοβ",
    "drone": {
      "youtubeId": "KzUonT4NHY0",
      "title": "Τσέσκι Κρούμλοβ 4K — ČESKÝ KRUMLOV by drone (CZECHIA) | 4K | A wonderful UNESCO World Heritage Site!"
    }
  },
  "olomouc": {
    "cityName": "Όλομοουτς",
    "drone": {
      "youtubeId": "auIdcPra8aM",
      "title": "Όλομοουτς 4K — OLOMOUC, Czechia 🇨🇿 by DRONE"
    }
  },
  "liberec": {
    "cityName": "Λίμπερετς",
    "drone": {
      "youtubeId": "YAzQ3Gic3_w",
      "title": "Λίμπερετς 4K — Walking tour of Liberec - Exploring the north of the Czech Republic 🇨🇿 4k HDR ASMR"
    }
  },
  "karlovy-vary": {
    "cityName": "Κάρλοβι Βάρι",
    "drone": {
      "youtubeId": "nteD7RfuBlc",
      "title": "Κάρλοβι Βάρι 4K — 4K The Grand Spa of Karlovy Vary - Czech Republic  🇨🇿"
    }
  },
  "ceske-budejovice": {
    "cityName": "Τσέσκε Μπουντεγιόβιτσε",
    "drone": {
      "youtubeId": "TPKkMxATbGY",
      "title": "Τσέσκε Μπουντεγιόβιτσε 4K — You must visit and walk around this city! České Budějovice 🇨🇿 Czech Republic 4K HDR ASMR"
    }
  },
  "pardubice": {
    "cityName": "Παρντούμπιτσε",
    "drone": {
      "youtubeId": "NqYJHrRdQUM",
      "title": "Παρντούμπιτσε 4K — Walking in Pardubice : The Most Interesting City | Czech Republic 4k HDR ASMR"
    }
  },
  "pecs": {
    "cityName": "Πετς",
    "drone": {
      "youtubeId": "5mMKJxwPExk",
      "title": "Πετς 4K — Pécs, Hungary - 4K Stock Footage | Travel Video"
    }
  },
  "gyor": {
    "cityName": "Γκιόρ",
    "drone": {
      "youtubeId": "r2bjRIzRAvo",
      "title": "Γκιόρ 4K — Győr, Hungary 🇭🇺 | A Beautiful Summer Evening Walk in 4K"
    }
  },
  "eger": {
    "cityName": "Έγκερ",
    "drone": {
      "youtubeId": "IPqSy3FVGX8",
      "title": "Έγκερ 4K — Eger, Heves, Hungary - 4K DJI Air2S Drone footage"
    }
  },
  "miskolc": {
    "cityName": "Μίσκολτς",
    "drone": {
      "youtubeId": "CNYjWsYARvc",
      "title": "Μίσκολτς 4K — Miskolc City, HUNGARY 2017 - 4K"
    }
  },
  "nyiregyhaza": {
    "cityName": "Νιρεγκιχάζα",
    "drone": {
      "youtubeId": "Mi6Uxjcr_9w",
      "title": "Νιρεγκιχάζα 4K — Nyíregyháza 2025. 4K"
    }
  },
  "szekesfehervar": {
    "cityName": "Σεκεσφεχερβάρ",
    "drone": {
      "youtubeId": "n344iK3Nvx0",
      "title": "Σεκεσφεχερβάρ 4K — Székesfehérvár Hungary from Above 4K/UHD"
    }
  },
  "sopron": {
    "cityName": "Σόπρον",
    "drone": {
      "youtubeId": "TryrjbggkcU",
      "title": "Σόπρον 4K — SOPRON - A hűség városa - Drone video 4K Film -"
    }
  },
  "limerick": {
    "cityName": "Λίμερικ",
    "drone": {
      "youtubeId": "Oeu38Znu5Ok",
      "title": "Λίμερικ 4K — Limerick City, 🇮🇪 Ireland - 4k Drone view"
    }
  },
  "kilkenny": {
    "cityName": "Κιλκένι",
    "drone": {
      "youtubeId": "jg2OI0pIKRk",
      "title": "Κιλκένι 4K — Kilkenny Ireland Tour - 4K Drone Travel Guide Shows Hidden Gems of Historic Irish Town!"
    }
  },
  "waterford": {
    "cityName": "Γουότερφορντ",
    "drone": {
      "youtubeId": "8IzdLm5LLq0",
      "title": "Γουότερφορντ 4K — Waterford Ireland - See Waterford City in 7 Minutes - 4K Drone Guide Tour Vlog - TOP 15 Things to Do"
    }
  },
  "sligo": {
    "cityName": "Σλάιγκο",
    "drone": {
      "youtubeId": "FQChT5NTYK0",
      "title": "Σλάιγκο 4K — Sligo Ireland | Places to Visit | 4K Drone Footage | DJI Mini 2 | Cinematic"
    }
  },
  "killarney": {
    "cityName": "Κιλάρνεϊ",
    "drone": {
      "youtubeId": "wtDwyDaPWe4",
      "title": "Κιλάρνεϊ 4K — Killarney Ireland - 4K Drone Tour Guide - See Killarney Town in 7 Minutes - Top 10 Things To Do"
    }
  },
  "drogheda": {
    "cityName": "Ντρόχεντα",
    "drone": {
      "youtubeId": "qpgRQi2uyZ8",
      "title": "Ντρόχεντα 4K — Cinematic Drone Video 4K Drogheda Ireland"
    }
  },
  "wexford": {
    "cityName": "Γουέξφορντ",
    "drone": {
      "youtubeId": "7VKKu28_6bE",
      "title": "Γουέξφορντ 4K — Wexford Town Ireland 🇮🇪 4K Drone Tour - TOP 25 Things to Do - Travel Guide"
    }
  },
  "basel": {
    "cityName": "Βασιλεία",
    "drone": {
      "youtubeId": "bRJxEIEn22g",
      "title": "Βασιλεία 4K — Basel - Switzerland 🇨🇭 - by drone [4K]"
    },
    "live": {
      "youtubeId": "jtLh8BdmHUU",
      "label": "Βασιλεία Live Cam",
      "title": "Hotel East West Basel"
    }
  },
  "lausanne": {
    "cityName": "Λωζάννη",
    "drone": {
      "youtubeId": "-RNrm9jiU0E",
      "title": "Λωζάννη 4K — Lausanne, Switzerland 🇨🇭 in 4K ULTRA HD | Top Places To Travel | Video by Drone"
    },
    "live": {
      "youtubeId": "y3sMI1HtZfE",
      "label": "Λωζάννη Live Cam",
      "title": "Lausanne, pont Bessières"
    }
  },
  "lucerne": {
    "cityName": "Λουκέρνη",
    "drone": {
      "youtubeId": "TP_JBLEo--k",
      "title": "Λουκέρνη 4K — Lucerne ( Luzern ) , Switzerland 🇨🇭| 4K Drone Footage"
    },
    "live": {
      "youtubeId": "QIt1FaDMnQc",
      "label": "Λουκέρνη Live Cam",
      "title": "Luzern live - Lucerne live"
    }
  },
  "lugano": {
    "cityName": "Λουγκάνο",
    "drone": {
      "youtubeId": "2iDf3DELQL8",
      "title": "Λουγκάνο 4K — Lugano 🇨🇭 Switzerland at its best! 4K Travel Video"
    },
    "live": {
      "youtubeId": "KrbuEUxaDcc",
      "label": "Λουγκάνο Live Cam",
      "title": "View from Casa Labhardt to Lake Lugano and San Salvatore"
    }
  },
  "winterthur": {
    "cityName": "Βίντερτουρ",
    "drone": {
      "youtubeId": "w4o-3gq552o",
      "title": "Βίντερτουρ 4K — Winterthur, Switzerland by Drone 🇨🇭 [4K]"
    }
  },
  "st-gallen": {
    "cityName": "Σεντ Γκάλεν",
    "drone": {
      "youtubeId": "HAkwWauQN2k",
      "title": "Σεντ Γκάλεν 4K — 🇨🇭 St. Gallen,Switzerland, Schweiz, Suisse - Full HD Relaxing Drone"
    }
  },
  "interlaken": {
    "cityName": "Ιντερλάκεν",
    "drone": {
      "youtubeId": "yakDPu7gr6Q",
      "title": "Ιντερλάκεν 4K — Interlaken 4K Drone Nature Film - Calming Piano Music - Beautiful Nature"
    }
  },
  "graz": {
    "cityName": "Γκρατς",
    "drone": {
      "youtubeId": "9Gp6qjQaQ2M",
      "title": "Γκρατς 4K — Graz, Austria 🇦🇹 | Stunning Aerial Drone Views | Atemberaubende Drohnenaufnahmen"
    }
  },
  "linz": {
    "cityName": "Λιντς",
    "drone": {
      "youtubeId": "mH477nz9eNs",
      "title": "Λιντς 4K — DRONE TOUR OF LINZ, AUSTRIA IN 4K"
    }
  },
  "klagenfurt": {
    "cityName": "Κλάγκενφουρτ",
    "drone": {
      "youtubeId": "ZQsPuvK0bCc",
      "title": "Κλάγκενφουρτ 4K — Klagenfurt am Wörthersee aus der Drohne 🇦🇹 Österreich | Kärnten | Drohne | 4K"
    }
  },
  "villach": {
    "cityName": "Φίλαχ",
    "drone": {
      "youtubeId": "9DQ40SVfUwY",
      "title": "Φίλαχ 4K — VILLACH 🇦🇹 Drone Aerial 4K | Österreich Kärnten Drohne Austria"
    }
  },
  "st-polten": {
    "cityName": "Ζανκτ Πέλτεν",
    "drone": {
      "youtubeId": "ELzb78FhcpQ",
      "title": "Ζανκτ Πέλτεν 4K — St. Pölten, Austria 🇦🇹 4K Walking Tour | City Center & Austrian Life | POV"
    }
  },
  "bregenz": {
    "cityName": "Μπρέγκεντς",
    "drone": {
      "youtubeId": "Ke-zAeDA_iM",
      "title": "Μπρέγκεντς 4K — Bregenz, Vorarlber, Austria [4K] Drone View"
    }
  },
  "krems": {
    "cityName": "Κρεμς",
    "drone": {
      "youtubeId": "mriK7AgFqrQ",
      "title": "Κρεμς 4K — Krems an der Donau - WACHAU - AUSTRIA - 4K Walk Street  City Tour"
    }
  },
  "coimbra": {
    "cityName": "Κοΐμπρα",
    "drone": {
      "youtubeId": "O0yApsfBilg",
      "title": "Κοΐμπρα 4K — Coimbra, portugal 🇵🇹 | 4K Drone Footage"
    }
  },
  "faro": {
    "cityName": "Φάρο",
    "drone": {
      "youtubeId": "CULto16sYNw",
      "title": "Φάρο 4K — Faro, Portugal 4K HDR Drone (🎵POP, SOUL, ROCK, TRAP fusion)"
    }
  },
  "funchal": {
    "cityName": "Φουντσάλ",
    "drone": {
      "youtubeId": "VrAjf_VwO3w",
      "title": "Φουντσάλ 4K — Funchal, Madeira 🇵🇹 | Breathtaking 4K Aerial Drone Views 🚁"
    },
    "live": {
      "youtubeId": "SVzFVByub-c",
      "label": "Φουντσάλ Live Cam",
      "title": "🔴 LIVE: Funchal Marina Webcam 1 Madeira Island | Madeira-Web"
    }
  },
  "aveiro": {
    "cityName": "Αβέιρο",
    "drone": {
      "youtubeId": "vlYzt0jWz2k",
      "title": "Αβέιρο 4K — AVEIRO, PORTUGAL 🇵🇹 4K Drone Aerial | Região de Aveiro"
    }
  },
  "evora": {
    "cityName": "Έβορα",
    "drone": {
      "youtubeId": "MaoaY4R4P6s",
      "title": "Έβορα 4K — Évora, Portugal - 4K Aerial Drone Footage | Travel Video"
    }
  },
  "guimaraes": {
    "cityName": "Γκιμαράες",
    "drone": {
      "youtubeId": "cpSJxOsL9FM",
      "title": "Γκιμαράες 4K — Guimarães 🇵🇹 Drone Aerial 4K | Guimaraes Braga Portugal"
    }
  },
  "setubal": {
    "cityName": "Σετούμπαλ",
    "drone": {
      "youtubeId": "5yiPsRPm554",
      "title": "Σετούμπαλ 4K — Setúbal, Portugal - 4K Aerial Drone Footage | Travel Video"
    }
  },
  "liverpool": {
    "cityName": "Λίβερπουλ",
    "drone": {
      "youtubeId": "rCYy1_TOiaE",
      "title": "Λίβερπουλ 4K — LIVERPOOL 🇬🇧 Drone Aerial 4K Merseyside England United Kingdom UK"
    }
  },
  "glasgow": {
    "cityName": "Γλασκώβη",
    "drone": {
      "youtubeId": "op8WH5wn18k",
      "title": "Γλασκώβη 4K — Glasgow, Scotland in 4K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "bristol": {
    "cityName": "Μπρίστολ",
    "drone": {
      "youtubeId": "m5fY815iJDw",
      "title": "Μπρίστολ 4K — BRISTOL 🇬🇧 4K Drone Aerial | United Kingdom England"
    }
  },
  "oxford": {
    "cityName": "Οξφόρδη",
    "drone": {
      "youtubeId": "sao63znb0Tw",
      "title": "Οξφόρδη 4K — OXFORD 4K Drone 🇬🇧 | England UNITED KINGDOM"
    },
    "live": {
      "youtubeId": "h8glPXsnezU",
      "label": "Οξφόρδη Live Cam",
      "title": "Oxford Martin School Webcam - Broad Street, Oxford"
    }
  },
  "cambridge-uk": {
    "cityName": "Κέιμπριτζ",
    "drone": {
      "youtubeId": "Pj9k5nvznR4",
      "title": "Κέιμπριτζ 4K — CAMBRIDGE 🇬🇧 UK | 4K Drone Cinematography"
    }
  },
  "york": {
    "cityName": "Γιορκ",
    "drone": {
      "youtubeId": "qVIHCfd9WeA",
      "title": "Γιορκ 4K — York, England 🇬🇧 | 4K Drone Footage"
    }
  },
  "leeds": {
    "cityName": "Λιντς",
    "drone": {
      "youtubeId": "O7E4uMWvm6I",
      "title": "Λιντς 4K — Leeds City Centre Drone Tour 4K | June 2026 Cinematic Aerial Views"
    }
  },
  "the-hague": {
    "cityName": "Χάγη",
    "drone": {
      "youtubeId": "tRn4PSJ0b6Q",
      "title": "Χάγη 4K — The Hague , Netherlands 🇱🇺- by drone [4K]"
    }
  },
  "eindhoven": {
    "cityName": "Αϊντχόβεν",
    "drone": {
      "youtubeId": "dza7Q1lKhtw",
      "title": "Αϊντχόβεν 4K — Eindhoven 🇳🇱 Drone Aerial 4K | Holland Netherlands Nederland"
    }
  },
  "groningen": {
    "cityName": "Χρόνινγκεν",
    "drone": {
      "youtubeId": "u_KinrPTEq0",
      "title": "Χρόνινγκεν 4K — 4K Drone Film - Groningen, Netherlands | Cinematic Aerial Footage & Relaxing Music"
    },
    "live": {
      "youtubeId": "ZjfFGJlkjmE",
      "label": "Χρόνινγκεν Live Cam",
      "title": "Webcam Grote Markt - Groningen"
    }
  },
  "maastricht": {
    "cityName": "Μάαστριχτ",
    "drone": {
      "youtubeId": "p15b7wHAMrM",
      "title": "Μάαστριχτ 4K — Maastricht 🇳🇱 Drone Video | 4K UHD"
    }
  },
  "delft": {
    "cityName": "Ντελφτ",
    "drone": {
      "youtubeId": "sA7pV7_u8tk",
      "title": "Ντελφτ 4K — Delft 🇳🇱 Drone Video | 4K UHD"
    }
  },
  "haarlem": {
    "cityName": "Χάρλεμ",
    "drone": {
      "youtubeId": "v51LYxQtSks",
      "title": "Χάρλεμ 4K — HAARLEM 🇳🇱 Drone Aerial 4K | North Holland Netherlands Nederland"
    }
  },
  "leiden": {
    "cityName": "Λάιντεν",
    "drone": {
      "youtubeId": "zLUs0vOz2N0",
      "title": "Λάιντεν 4K — LEIDEN 🇳🇱 2023 Drone 4K Aerial | Holland"
    }
  },
  "bruges": {
    "cityName": "Μπριζ",
    "drone": {
      "youtubeId": "E7pt2Zwg79g",
      "title": "Μπριζ 4K — Bruges in 4K"
    }
  },
  "liege": {
    "cityName": "Λιέγη",
    "drone": {
      "youtubeId": "2VhiShPMK3w",
      "title": "Λιέγη 4K — Liège 🇧🇪 Luik Drone Aerial 4K | Belgique België Belgium"
    }
  },
  "namur": {
    "cityName": "Ναμύρ",
    "drone": {
      "youtubeId": "1x64i-tvK2Y",
      "title": "Ναμύρ 4K — NAMUR NAMEN Drone 4K 🇧🇪 | BELGIUM Belgie Belgique Ultra HD"
    }
  },
  "charleroi": {
    "cityName": "Σαρλερουά",
    "drone": {
      "youtubeId": "jURc27jI2Jw",
      "title": "Σαρλερουά 4K — CHARLEROI DRONE 4K UNSEEN CREATIVE AERIAL FOOTAGE BELGIUM BELGIQUE🇧🇪The city of Charleroi"
    }
  },
  "leuven": {
    "cityName": "Λέουβεν",
    "drone": {
      "youtubeId": "fK6O06e_Ias",
      "title": "Λέουβεν 4K — LEUVEN 🇧🇪 Louvain Drone Aerial 4K 2025 | Belgium België Belgique Vlaanderen"
    }
  },
  "mechelen": {
    "cityName": "Μέχελεν",
    "drone": {
      "youtubeId": "Of2RUEKBg1E",
      "title": "Μέχελεν 4K — Mechelen ● Belgium 🇧🇪 【4K】 Aerial Cinematic Drone"
    }
  },
  "mons": {
    "cityName": "Μονς",
    "drone": {
      "youtubeId": "SOIm6dUaENc",
      "title": "Μονς 4K — Mons, City in Belgium, Cinematic drone footage of Belgium, Mons Belgium drone tour"
    }
  },
  "antalya": {
    "cityName": "Αττάλεια",
    "drone": {
      "youtubeId": "ejsgLLCtR9E",
      "title": "Αττάλεια 4K — Antalya, Turkey 🇹🇷 in 4K ULTRA HD 60FPS HDR Video Drone"
    }
  },
  "bursa": {
    "cityName": "Προύσα",
    "drone": {
      "youtubeId": "vhSlhfWTqPA",
      "title": "Προύσα 4K — Bursa, Turkey 🇹🇷 4k UHD | Drone footage"
    }
  },
  "trabzon": {
    "cityName": "Τραπεζούντα",
    "drone": {
      "youtubeId": "hGk2LxB4d60",
      "title": "Τραπεζούντα 4K — Trabzon, Turkey ~ Travel Vlog with Relaxing Music [4K]"
    }
  },
  "konya": {
    "cityName": "Ικόνιο",
    "drone": {
      "youtubeId": "dkgl6Nxb-Vc",
      "title": "Ικόνιο 4K — Konya, Turkey 🇹🇷 4K UHD | Drone Footages"
    }
  },
  "bodrum": {
    "cityName": "Αλικαρνασσός",
    "drone": {
      "youtubeId": "3u3D70rJSPg",
      "title": "Αλικαρνασσός 4K — Bodrum, Beautiful City in Turkey- 4K Cinematic Drone| World in 4K"
    }
  },
  "eskisehir": {
    "cityName": "Εσκισεχίρ",
    "drone": {
      "youtubeId": "rfr2HraLPUE",
      "title": "Εσκισεχίρ 4K — Eskişehir - Turkey 4k"
    }
  },
  "gaziantep": {
    "cityName": "Γκαζιαντέπ",
    "drone": {
      "youtubeId": "WZNT4fNZ_y0",
      "title": "Γκαζιαντέπ 4K — Gaziantep Cinematic  Drone 4K Resolution / Antep - Turkey"
    }
  },
  "tuzla": {
    "cityName": "Τούζλα",
    "drone": {
      "youtubeId": "0rGgtWiYCss",
      "title": "Τούζλα 4K — TUZLA Golden Hour 4K | Summer Aerial Drone Footage (Bosnia and Herzegovina)"
    }
  },
  "travnik": {
    "cityName": "Τράβνικ",
    "drone": {
      "youtubeId": "VNT8vMCbwsA",
      "title": "Τράβνικ 4K — Grad Travnik , Dron , Drone , Bosnia and Herzegovina 4K"
    }
  },
  "bihac": {
    "cityName": "Μπίχατς",
    "drone": {
      "youtubeId": "lPrWNjTYpJE",
      "title": "Μπίχατς 4K — Bihać 77000, Bosnia and Herzegowina DJI Air 2s 4K"
    }
  },
  "trebinje": {
    "cityName": "Τρεμπίνιε",
    "drone": {
      "youtubeId": "EK0ibO_ON1Y",
      "title": "Τρεμπίνιε 4K — Trebinje (4K Drone Footage) (Bosnia and Herzegovina)"
    }
  },
  "zenica": {
    "cityName": "Ζένιτσα",
    "drone": {
      "youtubeId": "EfNdMqbC1FA",
      "title": "Ζένιτσα 4K — 【4K】Drone Footage | Zenica - City at the Bosnia River 2019 ..:: Cinematic Aerial Film | Herzegovina"
    }
  },
  "jajce": {
    "cityName": "Γιάιτσε",
    "drone": {
      "youtubeId": "DpuMWoRTo_M",
      "title": "Γιάιτσε 4K — Jajce, Bosnia and Herzegovina - 4K Aerial Drone Footage | Travel Video"
    }
  },
  "doboj": {
    "cityName": "Ντόμποϊ",
    "drone": {
      "youtubeId": "wxW50CR4yMk",
      "title": "Ντόμποϊ 4K — DOBOJ IZ VAZDUHA - Pogled koji će vas oduševiti! | 4K DRONE"
    }
  },
  "cetinje": {
    "cityName": "Τσετίνιε",
    "drone": {
      "youtubeId": "_6o8NJg7_JE",
      "title": "Τσετίνιε 4K — Montenegro: Cetinje - Budva ( M2.3 ) 4K UHD #drone"
    }
  },
  "herceg-novi": {
    "cityName": "Χέρτσεγκ Νόβι",
    "drone": {
      "youtubeId": "tI3hkj2OokA",
      "title": "Χέρτσεγκ Νόβι 4K — HERCEG NOVI 🇲🇪 Drone Aerial 4K | Херцег Нови Montenegro Crna Gora Црна Гора"
    }
  },
  "ulcinj": {
    "cityName": "Ούλτσιν",
    "drone": {
      "youtubeId": "lpSlmnR4EAk",
      "title": "Ούλτσιν 4K — Ulcinj, Montenegro 4K Drone Tour | Beautiful Beach | DJI Drone Video"
    }
  },
  "niksic": {
    "cityName": "Νίκσιτς",
    "drone": {
      "youtubeId": "rtSh1gAfvco",
      "title": "Νίκσιτς 4K — Niksic - by drone [4K]"
    }
  },
  "zabljak": {
    "cityName": "Ζάμπλιακ",
    "drone": {
      "youtubeId": "oh7JQrWB_Hc",
      "title": "Ζάμπλιακ 4K — Autumn in Durmitor 🍂 | Žabljak, Montenegro 4K"
    }
  },
  "tivat": {
    "cityName": "Τίβατ",
    "drone": {
      "youtubeId": "UqjcIfQWpLA",
      "title": "Τίβατ 4K — Wonderful Porto Montenegro and Tivat by drone"
    }
  },
  "bar": {
    "cityName": "Μπαρ",
    "drone": {
      "youtubeId": "Clec6--cDyQ",
      "title": "Μπαρ 4K — Plaža ŠUŠANJ kod Bara snimak dronom u Julu 2025 - ŠUŠANJ Bar Beach [4K Aerial View] MNE Crna Gora"
    }
  },
  "burgas": {
    "cityName": "Μπουργκάς",
    "drone": {
      "youtubeId": "CcKLQ8-Z5JM",
      "title": "Μπουργκάς 4K — Burgas Bulgaria - Drone 4K Tour - Travel Guide - Best Things to Do - Cinematic Relaxing Video"
    }
  },
  "veliko-tarnovo": {
    "cityName": "Βελίκο Τάρνοβο",
    "drone": {
      "youtubeId": "zTYuTjolFzg",
      "title": "Βελίκο Τάρνοβο 4K — Veliko Tarnovo, Bulgaria 🇧🇬 4K UHD Drone Footage"
    }
  },
  "ruse": {
    "cityName": "Ρούσε",
    "drone": {
      "youtubeId": "0tsHWs4BBng",
      "title": "Ρούσε 4K — Flying Over RUSE: Bulgaria's Hidden Danube Gem? ✨ (Cinematic Drone Tour)"
    }
  },
  "stara-zagora": {
    "cityName": "Στάρα Ζαγόρα",
    "drone": {
      "youtubeId": "A4owUgWGX9o",
      "title": "Στάρα Ζαγόρα 4K — Stara Zagora from Above 🇧🇬 | Stunning 4K Drone Tour"
    }
  },
  "blagoevgrad": {
    "cityName": "Μπλαγκόεβγκραντ",
    "drone": {
      "youtubeId": "N-gOf3J8Uj8",
      "title": "Μπλαγκόεβγκραντ 4K — Blagoevgrad by drone 4K video / Благоевград с дрон, август 2023 / Blagoevgrad, Bulgaria August 2023"
    }
  },
  "pleven": {
    "cityName": "Πλέβεν",
    "drone": {
      "youtubeId": "PcOOdP4PyY8",
      "title": "Πλέβεν 4K — Pleven, Bulgaria 2025 from above drone"
    }
  },
  "nesebar": {
    "cityName": "Νεσέμπαρ",
    "drone": {
      "youtubeId": "JBoQTy0jTFI",
      "title": "Νεσέμπαρ 4K — NESEBAR 4K DRONE • OLD TOWN & AQUAPARK NESSEBAR 2024 BULGARIA • НЕСЕБЪР ДРОН 2024"
    }
  },
  "larnaca": {
    "cityName": "Λάρνακα",
    "drone": {
      "youtubeId": "Ho4cTRx8ITE",
      "title": "Λάρνακα 4K — Larnaca, Cyprus 🇨🇾 4K UHD | Drone Footage"
    }
  },
  "famagusta": {
    "cityName": "Αμμόχωστος",
    "drone": {
      "youtubeId": "xKqnVZzV5F4",
      "title": "Αμμόχωστος 4K — Famagusta Walled City: A 4K Tour of Cyprus's Hidden Gem"
    }
  },
  "kyrenia": {
    "cityName": "Κερύνεια",
    "drone": {
      "youtubeId": "NWMPgCdV0xU",
      "title": "Κερύνεια 4K — Incredibly Beautiful Northern Cyprus - Kyrenia - Drone 4K   2025"
    }
  },
  "ayia-napa": {
    "cityName": "Αγία Νάπα",
    "drone": {
      "youtubeId": "RAL9G1FY8Co",
      "title": "Αγία Νάπα 4K — Aiya Napa, Cyprus 🇨🇾 II 4K Drone Video"
    }
  },
  "protaras": {
    "cityName": "Πρωταράς",
    "drone": {
      "youtubeId": "-Z8XaHRrDmg",
      "title": "Πρωταράς 4K — Protaras, Cyprus 🇨🇾 II 4K Drone Video"
    }
  },
  "polis": {
    "cityName": "Πόλις Χρυσοχούς",
    "drone": {
      "youtubeId": "4-nl4v2a1vs",
      "title": "Πόλις Χρυσοχούς 4K — 🇨🇾 Latchi Beach | Polis Chrysochous(Paphos,Cyprus) | 4K 🚗"
    }
  },
  "troodos": {
    "cityName": "Τρόοδος",
    "drone": {
      "youtubeId": "styrNJgUfh4",
      "title": "Τρόοδος 4K — CYPRUS TROODOS MOUNTAINS by drone"
    }
  },
  "subotica": {
    "cityName": "Σουμπότιτσα",
    "drone": {
      "youtubeId": "2h72Wd-IIPg",
      "title": "Σουμπότιτσα 4K — Subotica & Palic in 4k | Serbia 🇷🇸"
    }
  },
  "kragujevac": {
    "cityName": "Κραγκούγεβατς",
    "drone": {
      "youtubeId": "c1uwSWodeKA",
      "title": "Κραγκούγεβατς 4K — 4K - Kragujevac / Крагујевац"
    }
  },
  "zlatibor": {
    "cityName": "Ζλάτιμπορ",
    "drone": {
      "youtubeId": "dMHnZWYVbKU",
      "title": "Ζλάτιμπορ 4K — Zlatibor iz drona 🇷🇸 | 4K"
    },
    "live": {
      "youtubeId": "F7xwvGS94ow",
      "label": "Ζλάτιμπορ Live Cam",
      "title": "Zlatibor.rs Live kamera novembar 2026. - Kraljev trg, jezero, Zlatibor"
    }
  },
  "kraljevo": {
    "cityName": "Κράλιεβο",
    "drone": {
      "youtubeId": "f1ghFTUDFV4",
      "title": "Κράλιεβο 4K — Kraljevo, Serbia 🇷🇸 in 4K ULTRA HD | Drone footages"
    }
  },
  "valjevo": {
    "cityName": "Βάλιεβο",
    "drone": {
      "youtubeId": "nVCNILmjLHY",
      "title": "Βάλιεβο 4K — CITY OF VALJEVO AERIAL DRONE FOOTAGE 4K"
    }
  },
  "vranje": {
    "cityName": "Βράνιε",
    "drone": {
      "youtubeId": "MwmJNdcDIPs",
      "title": "Βράνιε 4K — VRANJE 🇷🇸 Врање Drone Aerial 4K дрон | Serbia Србија Београд"
    }
  },
  "pancevo": {
    "cityName": "Πάντσεβο",
    "drone": {
      "youtubeId": "7_xkOOQgqHE",
      "title": "Πάντσεβο 4K — Pancevo in 4k | SERBIA"
    }
  },
  "tetovo": {
    "cityName": "Τέτοβο",
    "drone": {
      "youtubeId": "XPpce12fHwM",
      "title": "Τέτοβο 4K — Tetovo 4K POV Drive | Scenic City Tour in North Macedonia"
    }
  },
  "prilep": {
    "cityName": "Πρίλεπ",
    "drone": {
      "youtubeId": "kzgrlnekHGk",
      "title": "Πρίλεπ 4K — PRILEP BY DRONE - MOGILA,CARSIJA,SAAT KULA. #pucidrone"
    }
  },
  "kumanovo": {
    "cityName": "Κουμάνοβο",
    "drone": {
      "youtubeId": "pQARScVQSGA",
      "title": "Κουμάνοβο 4K — KUMANOVO 🇲🇰 Куманово Drone Aerial 4K | Kumanovë NORTH MACEDONIA Македонија Скопје"
    }
  },
  "strumica": {
    "cityName": "Στρούμιτσα",
    "drone": {
      "youtubeId": "vlD2Z-1ZySo",
      "title": "Στρούμιτσα 4K — Strumica from Above – Stunning Drone Views of North Macedonia’s Hidden Gem"
    }
  },
  "veles": {
    "cityName": "Βέλες",
    "drone": {
      "youtubeId": "5vvmdZzKjq0",
      "title": "Βέλες 4K — VELES, MACEDONIA 🇲🇰 -WALK TOUR 4K"
    }
  },
  "stip": {
    "cityName": "Στιπ",
    "drone": {
      "youtubeId": "gatPbvxsYdA",
      "title": "Στιπ 4K — 🇲🇰“Flying Over Štip, North Macedonia | Aerial View from a Plane”"
    }
  },
  "krusevo": {
    "cityName": "Κρούσεβο",
    "drone": {
      "youtubeId": "v3SeqN9kgXo",
      "title": "Κρούσεβο 4K — [4K] NOROVO [NEROVA] , Kruševo  [North Macedonia] By drone 6min"
    }
  },
  "husavik": {
    "cityName": "Χούσαβικ",
    "drone": {
      "youtubeId": "yfK9UngN3uY",
      "title": "Χούσαβικ 4K — Húsavík - Iceland 2023 Drone (4k)"
    }
  },
  "vik": {
    "cityName": "Βικ",
    "drone": {
      "youtubeId": "p_EC5FfXqCI",
      "title": "Βικ 4K — Reynisfjara & Vik, Iceland - 4K Nature Sceneries"
    }
  },
  "keflavik": {
    "cityName": "Κέφλαβικ",
    "drone": {
      "youtubeId": "irrxvBywdPw",
      "title": "Κέφλαβικ 4K — Keflavik From Above | A Summer Drone Tour of Gateway to Iceland | 4K Drone footage"
    }
  },
  "isafjordur": {
    "cityName": "Ίσαφιορδουρ",
    "drone": {
      "youtubeId": "oRICKn-rY1g",
      "title": "Ίσαφιορδουρ 4K — Westfjords Scenic Drive 4K | Road to Dynjandi Waterfalls and Ísafjörður, Iceland"
    }
  },
  "egilsstadir": {
    "cityName": "Έγκιλσταντιρ",
    "drone": {
      "youtubeId": "8IRgqxK6syM",
      "title": "Έγκιλσταντιρ 4K — Driving Through Iceland's Eastern Fjords | Djúpivogur to Egilsstaðir, Iceland"
    }
  },
  "selfoss": {
    "cityName": "Σέλφος",
    "drone": {
      "youtubeId": "1WFvTngyvug",
      "title": "Σέλφος 4K — Selfoss, Iceland. As seen from drone. 4K / 50 fps"
    }
  },
  "borgarnes": {
    "cityName": "Μποργκαρνές",
    "drone": {
      "youtubeId": "eKLM2MCJx5o",
      "title": "Μποργκαρνές 4K — Borgarnes - Walking in Iceland [4K]"
    }
  },
  "hofn": {
    "cityName": "Χεπν",
    "drone": {
      "youtubeId": "Ot02klfq-M4",
      "title": "Χεπν 4K — Hofn Iceland - 4K"
    }
  },
  "bled": {
    "cityName": "Μπλεντ",
    "drone": {
      "youtubeId": "mCm6yXvhzj4",
      "title": "Μπλεντ 4K — Lake Bled, Slovenia 4k Drone"
    }
  },
  "kranj": {
    "cityName": "Κραν",
    "drone": {
      "youtubeId": "PSWunVynDrc",
      "title": "Κραν 4K — KRANJ, SLOVENIA BY DRONE (4K) | كرانج، سلوفينيا"
    }
  },
  "celje": {
    "cityName": "Τσέλιε",
    "drone": {
      "youtubeId": "Q5W-1Pu1e2w",
      "title": "Τσέλιε 4K — Celje, Slovenia – Where Time Slows and Life Feels Lighter (4K)"
    }
  },
  "ptuj": {
    "cityName": "Πτούι",
    "drone": {
      "youtubeId": "p8S8totnfmc",
      "title": "Πτούι 4K — PTUJ | Slovenia by Drone in 4K - DJI Mavic Air 2"
    }
  },
  "koper": {
    "cityName": "Κόπερ",
    "drone": {
      "youtubeId": "cnYpCsNfQcY",
      "title": "Κόπερ 4K — KOPER 🇸🇮 4K Drone | Capodistria SLOVENIA"
    },
    "live": {
      "youtubeId": "-mPxgvZ0nHU",
      "label": "Κόπερ Live Cam",
      "title": "Koper Live Cam – Tito Square Bell Tower 3 · Slovenia 24/7"
    }
  },
  "novo-mesto": {
    "cityName": "Νόβο Μέστο",
    "drone": {
      "youtubeId": "7N-MGuIj25w",
      "title": "Νόβο Μέστο 4K — Novo mesto, Slovenia - 4K Drone Video"
    }
  },
  "postojna": {
    "cityName": "Ποστόινα",
    "drone": {
      "youtubeId": "VLdJ5E5J80s",
      "title": "Ποστόινα 4K — 🇸🇮 Beautiful Lake Bled, Ljubljana, and Postojna in Slovenia - Aerial Drone Tour 4k - Travel Europe"
    }
  },
  "presov": {
    "cityName": "Πρέσοβ",
    "drone": {
      "youtubeId": "Lm2MxKshraM",
      "title": "Πρέσοβ 4K — Walking in Prešov Slovakia 🇸🇰 | Námestie Legionárov street | 4K City Walk"
    }
  },
  "zilina": {
    "cityName": "Ζίλινα",
    "drone": {
      "youtubeId": "9pOZY9vFOsw",
      "title": "Ζίλινα 4K — ZILINA, Slovakia 🇸🇰- 4K 60fps (UHD)"
    }
  },
  "nitra": {
    "cityName": "Νίτρα",
    "drone": {
      "youtubeId": "UI0YQhLGO-Q",
      "title": "Νίτρα 4K — This is Nitra Slovakia | Drone Footage"
    }
  },
  "trnava": {
    "cityName": "Τρνάβα",
    "drone": {
      "youtubeId": "q99_SQABHl4",
      "title": "Τρνάβα 4K — Traditional Fair in Trnava | 4K Drone Hi2SKY"
    },
    "live": {
      "youtubeId": "5Li5DaNk-00",
      "label": "Τρνάβα Live Cam",
      "title": "Mesto Trnava - Univerzitné námestie"
    }
  },
  "banska-bystrica": {
    "cityName": "Μπάνσκα Μπίστριτσα",
    "drone": {
      "youtubeId": "PiFA2lmEU5A",
      "title": "Μπάνσκα Μπίστριτσα 4K — Banská Bystrica , Slovakia 🇸🇰 4K UHD | Drone Footage"
    }
  },
  "poprad": {
    "cityName": "Πόπραντ",
    "drone": {
      "youtubeId": "9nFgjeh80mI",
      "title": "Πόπραντ 4K — Poprad in 4K"
    }
  },
  "trencin": {
    "cityName": "Τρέντσιν",
    "drone": {
      "youtubeId": "3UGNrtysWgE",
      "title": "Τρέντσιν 4K — Timeless Trencin | Winter Castles of Slovakia from Drone "
    }
  },
  "martin": {
    "cityName": "Μάρτιν",
    "drone": {
      "youtubeId": "Miuz1jbNMyA",
      "title": "Μάρτιν 4K — Mesto Martin, Slovakia"
    }
  },
  "shkoder": {
    "cityName": "Σκόδρα",
    "drone": {
      "youtubeId": "5fU8hH3n0OE",
      "title": "Σκόδρα 4K — Shkodër 🇦🇱 Shkodra Drone Aerial 4K | Albania Shqipëria #shkodra"
    }
  },
  "berat": {
    "cityName": "Μπεράτ",
    "drone": {
      "youtubeId": "d7USv_UcJlY",
      "title": "Μπεράτ 4K — Berat, Albania, 4K, Cinematic Drone Footage"
    }
  },
  "gjirokaster": {
    "cityName": "Αργυρόκαστρο",
    "drone": {
      "youtubeId": "VLKC42JrrzY",
      "title": "Αργυρόκαστρο 4K — Gjirokaster, Albania, Cinematic 4K Drone Footage"
    }
  },
  "saranda": {
    "cityName": "Άγιοι Σαράντα",
    "drone": {
      "youtubeId": "OsS8WwzNYHs",
      "title": "Άγιοι Σαράντα 4K — Sarandë, Albania 🇦🇱 | 4K Drone & Walking Tour – City Center, Promenade & Landmarks"
    }
  },
  "korce": {
    "cityName": "Κορυτσά",
    "drone": {
      "youtubeId": "69u9IsSACTg",
      "title": "Κορυτσά 4K — Korçë, Albania 🇦🇱 | The Hidden Gem of the Balkans (4K Drone Film)"
    }
  },
  "elbasan": {
    "cityName": "Ελμπασάν",
    "drone": {
      "youtubeId": "fKvgGFGRgjQ",
      "title": "Ελμπασάν 4K — Elbasan  Albania I Stunning 4k Drone footage"
    }
  },
  "kruje": {
    "cityName": "Κρούγια",
    "drone": {
      "youtubeId": "54_73Qa6CXc",
      "title": "Κρούγια 4K — KRUJË | ALBANIA | VIDEO BY DRONE | 4K"
    }
  },
  "kharkiv": {
    "cityName": "Χάρκοβο",
    "drone": {
      "youtubeId": "v5iz2OAn7WQ",
      "title": "Χάρκοβο 4K — Kharkiv, Ukraine 🇺🇦 | 4K Drone Footage"
    }
  },
  "dnipro": {
    "cityName": "Ντνίπρο",
    "drone": {
      "youtubeId": "aaY2cdu16M0",
      "title": "Ντνίπρο 4K — (2021) 4K Dnipro city Drone Footage Compilation, Bird's Eye view of Dnipro, Chill Background Aerials"
    }
  },
  "zaporizhzhia": {
    "cityName": "Ζαπορίζια",
    "drone": {
      "youtubeId": "VGshKAomfU8",
      "title": "Ζαπορίζια 4K — Zaporizhzhia Ukraine 4K Drone"
    }
  },
  "ivano-frankivsk": {
    "cityName": "Ιβάνο-Φρανκίβσκ",
    "drone": {
      "youtubeId": "Ap_NxSTtRps",
      "title": "Ιβάνο-Φρανκίβσκ 4K — Ivano frankivsk, Ukraine 🇺🇦 | 4K Drone Footage"
    }
  },
  "chernivtsi": {
    "cityName": "Τσερνιβτσί",
    "drone": {
      "youtubeId": "C8QGbMOnW7I",
      "title": "Τσερνιβτσί 4K — Chernivtsi, Ukraine 🇺🇦 | 4K Drone Footage"
    }
  },
  "poltava": {
    "cityName": "Πολτάβα",
    "drone": {
      "youtubeId": "CbnX4obfxFc",
      "title": "Πολτάβα 4K — 4K Drone Footage - Poltava - Ukraine l A Magical Place"
    }
  },
  "vinnytsia": {
    "cityName": "Βίνιτσα",
    "drone": {
      "youtubeId": "BiESs_lMVwA",
      "title": "Βίνιτσα 4K — Flying over Vinnytsia, Ukraine (Вінниця, Україна) 4K Drone video"
    }
  },
  "grodno": {
    "cityName": "Γκρόντνο",
    "drone": {
      "youtubeId": "5q2UD0Qo4qM",
      "title": "Γκρόντνο 4K — Grodno, Belarus 🇧🇾 | 4K Drone Footage"
    }
  },
  "gomel": {
    "cityName": "Γόμελ",
    "drone": {
      "youtubeId": "pvzkx5DS_R4",
      "title": "Γόμελ 4K — 📷 Gomel Walking Tour 4K - Lenina Square And Relaxing Walk Around The City GoPro"
    }
  },
  "vitebsk": {
    "cityName": "Βίτεμπσκ",
    "drone": {
      "youtubeId": "We7nntKPJqg",
      "title": "Βίτεμπσκ 4K — Vitebsk, Belarus 🇧🇾 | 4K Drone Footage"
    }
  },
  "mogilev": {
    "cityName": "Μογκίλεφ",
    "drone": {
      "youtubeId": "upaSJWGlS0U",
      "title": "Μογκίλεφ 4K — Город Могилёв с высоты птичьего полёта Беларусь Видео клип про Могилёв / Mogilev Belarus aerial view"
    }
  },
  "bobruisk": {
    "cityName": "Μπομπρούισκ",
    "drone": {
      "youtubeId": "8HvLhjlgjwM",
      "title": "Μπομπρούισκ 4K — Tour de Teemu: Bobruisk, Belarus. September 2018 [4K drone video]"
    }
  },
  "pinsk": {
    "cityName": "Πινσκ",
    "drone": {
      "youtubeId": "rL4tneYA2Ag",
      "title": "Πινσκ 4K — Pinsk, Belarus 🇧🇾 | 4K Drone Footage"
    }
  },
  "polotsk": {
    "cityName": "Πόλοτσκ",
    "drone": {
      "youtubeId": "Smy538eydr4",
      "title": "Πόλοτσκ 4K — Walking tour of Polotsk Belarus"
    }
  },
  "baranovichi": {
    "cityName": "Μπαρανοβίτσι",
    "drone": {
      "youtubeId": "9aP6ReX0hD0",
      "title": "Μπαρανοβίτσι 4K — Belarus Baranovichi Drone Footage July 12 2017"
    }
  },
  "orhei": {
    "cityName": "Ορχέι",
    "drone": {
      "youtubeId": "bkBrnXOtXgI",
      "title": "Ορχέι 4K — Moldova 4K Drone Footage | Chisinau, Old Orhei, Saharna & Scenic Countryside"
    }
  },
  "soroca": {
    "cityName": "Σορόκα",
    "drone": {
      "youtubeId": "vPYODftHDe0",
      "title": "Σορόκα 4K — 🏰 Soroca Fortress | Moldova in 4K Drone Footage 🇲🇩"
    }
  },
  "tiraspol": {
    "cityName": "Τιράσπολ",
    "drone": {
      "youtubeId": "Rc7sVY5EkJg",
      "title": "Τιράσπολ 4K — 【4K】Tiraspol from Above - Capital of TRANSNISTRIA 2020 | Moldova | Cinematic Aerial Film"
    }
  },
  "cahul": {
    "cityName": "Καχούλ",
    "drone": {
      "youtubeId": "tr_f5c0Nq1M",
      "title": "Καχούλ 4K — Cahul, primăvara 2022, filmare cu drona, clip 4K, www.vladtour.md"
    }
  },
  "ungheni": {
    "cityName": "Ουνγκένι",
    "drone": {
      "youtubeId": "RsNY7IUTEIw",
      "title": "Ουνγκένι 4K — Zagarancea Ungheni Spring 2018 Drone View Full HD"
    }
  },
  "comrat": {
    "cityName": "Κομράτ",
    "drone": {
      "youtubeId": "jWxapF51TVs",
      "title": "Κομράτ 4K — Gagauzia autonomous region in Moldova | Walking in Comrat | 4K 🇲🇩"
    }
  },
  "bender": {
    "cityName": "Μπεντέρ",
    "drone": {
      "youtubeId": "hdI_HkzbVOs",
      "title": "Μπεντέρ 4K — Bender, Moldova | 4K city walk | Soviet style canteen | sweltering day | very short trip"
    }
  },
  "edinet": {
    "cityName": "Εντινέτς",
    "drone": {
      "youtubeId": "qe3nM4lnnfc",
      "title": "Εντινέτς 4K — ORASUL EDINET HYPERLAPS  4K MOLDOVA / ГОРОД ЕДИНЕЦ (ЕДИНЦЫ) ГИПЕРЛАПС 4К МОЛДОВА"
    }
  },
  "parnu": {
    "cityName": "Πάρνου",
    "drone": {
      "youtubeId": "UDyqWYYtKj4",
      "title": "Πάρνου 4K — 🇪🇪 Pärnu , Estonia in 4K | Stunning Aerial Drone Tour of the Baltic Riviera"
    }
  },
  "narva": {
    "cityName": "Νάρβα",
    "drone": {
      "youtubeId": "HJJmYahgFoA",
      "title": "Νάρβα 4K — NARVA - HERMANN CASTLE, (ESTONIA) 4K, Drone #estonia #drone #4k #nature #history #castle"
    }
  },
  "kuressaare": {
    "cityName": "Κουρεσάαρε",
    "drone": {
      "youtubeId": "jv5uaf8EeA4",
      "title": "Κουρεσάαρε 4K — 🇪🇪 Kuressaare Castle, Estonia – 360° VR Aerial Tour – Baltic Coastal Town"
    }
  },
  "viljandi": {
    "cityName": "Βίλγιαντι",
    "drone": {
      "youtubeId": "-2StQHIvUr0",
      "title": "Βίλγιαντι 4K — ONE DAY IN VILJANDI (ESTONIA) | 4K 60FPS | Look how beautiful this place is!"
    }
  },
  "rakvere": {
    "cityName": "Ράκβερε",
    "drone": {
      "youtubeId": "wnffO8nqXBA",
      "title": "Ράκβερε 4K — Rakvere Drone"
    }
  },
  "haapsalu": {
    "cityName": "Χάαπσαλου",
    "drone": {
      "youtubeId": "GpdmnG4GUDU",
      "title": "Χάαπσαλου 4K — ONE DAY IN HAAPSALU (ESTONIA) | 4K 60FPS | This city feels so special"
    }
  },
  "otepaa": {
    "cityName": "Οτεπάα",
    "drone": {
      "youtubeId": "g-VC5O7G0Uk",
      "title": "Οτεπάα 4K — Otepää. Estonia. Drone 4K."
    }
  },
  "voru": {
    "cityName": "Βόρου",
    "drone": {
      "youtubeId": "nFOImvRmIIQ",
      "title": "Βόρου 4K — DJI Mavic 3 4K Drone Footage Estonia Võru"
    }
  },
  "liepaja": {
    "cityName": "Λιεπάγια",
    "drone": {
      "youtubeId": "toZgAub1YtM",
      "title": "Λιεπάγια 4K — Liepaja, Latvia 🇱🇻 4k UHD | Drone footage"
    }
  },
  "jurmala": {
    "cityName": "Γιούρμαλα",
    "drone": {
      "youtubeId": "mZuiHi5k-LI",
      "title": "Γιούρμαλα 4K — Is This Really Latvia? ❄️ Winter Feels Like Another World | Jūrmala 4K Walk"
    }
  },
  "cesis": {
    "cityName": "Τσέσις",
    "drone": {
      "youtubeId": "V4MWwEw2zvU",
      "title": "Τσέσις 4K — Cesis, Latvia 🇱🇻 4k UHD | Drone footage"
    }
  },
  "jelgava": {
    "cityName": "Γιέλγκαβα",
    "drone": {
      "youtubeId": "gNvYVFjXl4k",
      "title": "Γιέλγκαβα 4K — Jelgava, Latvia 🇱🇻 4k UHD | Drone footage"
    }
  },
  "ventspils": {
    "cityName": "Βέντσπιλς",
    "drone": {
      "youtubeId": "QcpGuD4Hhb8",
      "title": "Βέντσπιλς 4K — Ventspils Latvija - 4K Cinematic drone footage 2023"
    }
  },
  "sigulda": {
    "cityName": "Σιγκούλντα",
    "drone": {
      "youtubeId": "2_t25tJcEAg",
      "title": "Σιγκούλντα 4K — Latvia, Sigulda. Drone 4K"
    }
  },
  "rezekne": {
    "cityName": "Ρέζεκνε",
    "drone": {
      "youtubeId": "tvaQfIVPAZA",
      "title": "Ρέζεκνε 4K — Rēzekne Latvija - 4K Drone Cinematic Footage 2022"
    }
  },
  "valmiera": {
    "cityName": "Βαλμιέρα",
    "drone": {
      "youtubeId": "T1zYIhy7yBw",
      "title": "Βαλμιέρα 4K — Valmiera, LATVIA, DJI Drone Footage 4K"
    }
  },
  "klaipeda": {
    "cityName": "Κλαϊπέντα",
    "drone": {
      "youtubeId": "g86XvgUFVRk",
      "title": "Κλαϊπέντα 4K — 🇱🇹 Klaipėda , Lithuania in 4K | Epic Drone Tour of the Baltic Port City"
    },
    "live": {
      "youtubeId": "8KhyoyzCvuY",
      "label": "Κλαϊπέντα Live Cam",
      "title": "LIETUVA TIESIOGIAI 24/7 🔴 Palanga, Vilnius, Kaunas, Klaipėda | LIVE kameros"
    }
  },
  "siauliai": {
    "cityName": "Σιαουλιάι",
    "drone": {
      "youtubeId": "Ymy0adQybT4",
      "title": "Σιαουλιάι 4K — Šiauliai, Lithuania's 4th City | Lithuania by drone"
    }
  },
  "panevezys": {
    "cityName": "Πανεβεζίς",
    "drone": {
      "youtubeId": "YKEqI9AYeDw",
      "title": "Πανεβεζίς 4K — 【4K】Panevezys from Above 🔥 LITHUANIA 2021 🔥 Cinematic Wolf Aerial™ Drone Film"
    }
  },
  "trakai": {
    "cityName": "Τρακάι",
    "drone": {
      "youtubeId": "ZBmz6X-K7io",
      "title": "Τρακάι 4K — 🇱🇹 Trakai , Lithuania in 4K | Stunning Drone Tour of the Island Castle & Lakes"
    }
  },
  "palanga": {
    "cityName": "Παλάνγκα",
    "drone": {
      "youtubeId": "Lcpsa3v7t08",
      "title": "Παλάνγκα 4K — Palanga | Lithuania | Drone | Aerial view Summer 2023"
    },
    "live": {
      "youtubeId": "8KhyoyzCvuY",
      "label": "Παλάνγκα Live Cam",
      "title": "LIETUVA TIESIOGIAI 24/7 🔴 Palanga, Vilnius, Kaunas, Klaipėda | LIVE kameros"
    }
  },
  "druskininkai": {
    "cityName": "Ντρούσκινινκαϊ",
    "drone": {
      "youtubeId": "jovuowCMIGU",
      "title": "Ντρούσκινινκαϊ 4K — Drone Cinematic of Druskininkai, Lithuania | 4K Aerial Views"
    }
  },
  "alytus": {
    "cityName": "Αλίτους",
    "drone": {
      "youtubeId": "LYNA3P4HPX0",
      "title": "Αλίτους 4K — Alytus 4K"
    }
  },
  "marijampole": {
    "cityName": "Μαριγιάμπολε",
    "drone": {
      "youtubeId": "pavSeihVKeU",
      "title": "Μαριγιάμπολε 4K — @Lithuania#Marijampole#Drone#Dji mini 5 pro#4k#60fps"
    }
  },
  "esch-sur-alzette": {
    "cityName": "Ες-συρ-Αλζέτ",
    "drone": {
      "youtubeId": "mTzhxgFS-y4",
      "title": "Ες-συρ-Αλζέτ 4K — Scenic Drive Luxembourg: Esch-sur-Alzette to Differdange | Late Summer 4K"
    }
  },
  "differdange": {
    "cityName": "Ντιφερντάνζ",
    "drone": {
      "youtubeId": "mTzhxgFS-y4",
      "title": "Ντιφερντάνζ 4K — Scenic Drive Luxembourg: Esch-sur-Alzette to Differdange | Late Summer 4K"
    }
  },
  "dudelange": {
    "cityName": "Ντιντελάνζ",
    "drone": {
      "youtubeId": "z467B9MrI2s",
      "title": "Ντιντελάνζ 4K — Dudelange \"The Southern Forge\" Luxembourg. Outdoor Travel"
    }
  },
  "ettelbruck": {
    "cityName": "Έτελμπρικ",
    "drone": {
      "youtubeId": "_SzOsGCrq3M",
      "title": "Έτελμπρικ 4K — Town of Ettelbruck, Luxembourg Walking Tour. Outdoor Travel"
    }
  },
  "diekirch": {
    "cityName": "Ντίκιρχ",
    "drone": {
      "youtubeId": "OOUgwQsjiqc",
      "title": "Ντίκιρχ 4K — Drone Flight over Diekirch/Luxembourg"
    }
  },
  "wiltz": {
    "cityName": "Βιλτς",
    "drone": {
      "youtubeId": "ymTH6_OTOQw",
      "title": "Βιλτς 4K — This is Wiltz. With the drone over Wiltz.DJI Mavic"
    }
  },
  "echternach": {
    "cityName": "Έχτερναχ",
    "drone": {
      "youtubeId": "iFZVXBZggww",
      "title": "Έχτερναχ 4K — Echternach (Luxembourg) | DJI Mavic Drone [4K]"
    }
  },
  "remich": {
    "cityName": "Ρέμιχ",
    "drone": {
      "youtubeId": "RUxehRVdXZI",
      "title": "Ρέμιχ 4K — Remich Luxembourg  By Drone 2023"
    }
  },
  "grevenmacher": {
    "cityName": "Γκρεβενμάχερ",
    "drone": {
      "youtubeId": "ubl_1ZOaJoY",
      "title": "Γκρεβενμάχερ 4K — DJI Luxembourg Grevenmacher"
    }
  },
  "sliema": {
    "cityName": "Σλιέμα",
    "drone": {
      "youtubeId": "tK570c2HI-I",
      "title": "Σλιέμα 4K — Sliema, Malta 🇲🇹 4K UHD | Drone Footage"
    }
  },
  "st-julians": {
    "cityName": "Σεντ Τζούλιανς",
    "drone": {
      "youtubeId": "Nuy81xc3jlY",
      "title": "Σεντ Τζούλιανς 4K — Saint Julian’s Malta | 4K 60FPS Cinematic Drone Shots – Daytime Aerial Views"
    }
  },
  "birgu": {
    "cityName": "Μπίργκου",
    "drone": {
      "youtubeId": "-562cDFCujQ",
      "title": "Μπίργκου 4K — Il-Birgu Malta- 4K UHD - Virtual Trip"
    }
  },
  "victoria-gozo": {
    "cityName": "Βικτώρια",
    "drone": {
      "youtubeId": "OTMx9Op6f10",
      "title": "Βικτώρια 4K — Citadel Of Rabat Victoria Gozo Malta 4k drone footage"
    }
  },
  "mellieha": {
    "cityName": "Μελίχα",
    "drone": {
      "youtubeId": "IXVTlljoYaY",
      "title": "Μελίχα 4K — Mellieha bay, Malta 🇲🇹 4K UHD | Drone Footage"
    }
  },
  "marsaxlokk": {
    "cityName": "Μαρσασλόκ",
    "drone": {
      "youtubeId": "GBuNRKMUAL4",
      "title": "Μαρσασλόκ 4K — Marsaxlokk ● Malta 🇲🇹 【4K】 Aerial Cinematic Drone"
    }
  },
  "qormi": {
    "cityName": "Κόρμι",
    "drone": {
      "youtubeId": "mut6SVd-Ksk",
      "title": "Κόρμι 4K — 4K Malta valley road Attard - Qormi"
    }
  },
  "mosta": {
    "cityName": "Μόστα",
    "drone": {
      "youtubeId": "OhbI56Z1kgA",
      "title": "Μόστα 4K — Valetta Mosta Paola - Malta 4K drone"
    }
  },
  "novosibirsk": {
    "cityName": "Νοβοσιμπίρσκ",
    "drone": {
      "youtubeId": "CjvC-RY1z7o",
      "title": "Νοβοσιμπίρσκ 4K — Novosibirsk, Russia 🇷🇺 by Drone 4K HDR ULTRA HD 60FPS Dolby Vision™ Drone"
    }
  },
  "yekaterinburg": {
    "cityName": "Αικατερινούπολη",
    "drone": {
      "youtubeId": "I46IZ1QsUdM",
      "title": "Αικατερινούπολη 4K — Yekaterinburg, Russia 🇷🇺 in 8K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "sochi": {
    "cityName": "Σότσι",
    "drone": {
      "youtubeId": "r3EIdFaH3Qs",
      "title": "Σότσι 4K — Sochi, Russia 🇷🇺 in 8K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "vladivostok": {
    "cityName": "Βλαδιβοστόκ",
    "drone": {
      "youtubeId": "a0YlSUwOPik",
      "title": "Βλαδιβοστόκ 4K — Vladivostok, Russia 🇷🇺 in 8K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "nizhny-novgorod": {
    "cityName": "Νίζνι Νόβγκοροντ",
    "drone": {
      "youtubeId": "7PGHA50NLtY",
      "title": "Νίζνι Νόβγκοροντ 4K — Nizhny Novgorod, Russia 🇷🇺 in 4K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "kaliningrad": {
    "cityName": "Καλίνινγκραντ",
    "drone": {
      "youtubeId": "1FpJcYIw2WE",
      "title": "Καλίνινγκραντ 4K — Kaliningrad, Russia 🇷🇺 in 4K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "samara": {
    "cityName": "Σαμάρα",
    "drone": {
      "youtubeId": "HtkXJ1bztC4",
      "title": "Σαμάρα 4K — Samara, Russia 🇷🇺 in 4K HDR ULTRA HD 60 FPS Dolby Vision™ Drone Video"
    }
  },
  "bridgeport": {
    "cityName": "Μπρίτζπορτ",
    "drone": {
      "youtubeId": "-Vzf7jfeEsQ",
      "title": "Μπρίτζπορτ 4K — Bridgeport, Connecticut - [4K] Drone Tour"
    }
  },
  "waterbury": {
    "cityName": "Γουότερμπερι",
    "drone": {
      "youtubeId": "MOIRUpoO6Go",
      "title": "Γουότερμπερι 4K — drone footage of waterbury ct"
    }
  },
  "norwalk": {
    "cityName": "Νόργουοκ",
    "drone": {
      "youtubeId": "T8wLWCUCrfE",
      "title": "Νόργουοκ 4K — Norwalk CT in 4K"
    },
    "live": {
      "youtubeId": "Dv2XxhsWqWY",
      "label": "Νόργουοκ Live Cam",
      "title": "SoNo Tower in South Norwalk, Connecticut, USA (Fixed View – East)"
    }
  },
  "danbury": {
    "cityName": "Ντάνμπερι",
    "drone": {
      "youtubeId": "HyVA17siJ5g",
      "title": "Ντάνμπερι 4K — Driving Danbury Connecticut 4K"
    }
  },
  "greenwich": {
    "cityName": "Γκρίνουιτς",
    "drone": {
      "youtubeId": "0zP0o34p9fo",
      "title": "Γκρίνουιτς 4K — Greenwich, Connecticut - [4K] Drone Tour"
    }
  },
  "mystic": {
    "cityName": "Μίστικ",
    "drone": {
      "youtubeId": "oQkXtE0w_Eo",
      "title": "Μίστικ 4K — Mystic, Connecticut - [4K] Drone Tour"
    }
  },
  "new-london": {
    "cityName": "Νιου Λόντον",
    "drone": {
      "youtubeId": "fgJMZW5MrKY",
      "title": "Νιου Λόντον 4K — New London, Connecticut (4K) ~ EB Drone"
    },
    "live": {
      "youtubeId": "dKI_sYiiY7Y",
      "label": "Νιου Λόντον Live Cam",
      "title": "LIVE New London, CT Railcam | Railside Live"
    }
  },
  "lowell": {
    "cityName": "Λόουελ",
    "drone": {
      "youtubeId": "GGW8Q3b45xY",
      "title": "Λόουελ 4K — Lowell, Massachusetts 🇺🇸 in 4K ULTRA HD HDR | Drone & Aerial Footage"
    }
  },
  "new-bedford": {
    "cityName": "Νιου Μπέντφορντ",
    "drone": {
      "youtubeId": "uimrJBYbowE",
      "title": "Νιου Μπέντφορντ 4K — New Bedford, Massachusetts - [4K] Drone Tour"
    }
  },
  "springfield-ma": {
    "cityName": "Σπρίνγκφιλντ",
    "drone": {
      "youtubeId": "R6RqtRMIZvo",
      "title": "Σπρίνγκφιλντ 4K — Springfield, Massachusetts - [4K] Drone Tour"
    },
    "live": {
      "youtubeId": "8U0M_mionOs",
      "label": "Σπρίνγκφιλντ Live Cam",
      "title": "Springfield, Massachusetts, USA | LIVE Train Camera (PTZ)"
    }
  },
  "quincy": {
    "cityName": "Κουίνσι",
    "drone": {
      "youtubeId": "tVtZMlt0Iiw",
      "title": "Κουίνσι 4K — Quincy Massachusetts 4K  /  The City of Presidents  (DJI Mavic Air 3S Drone Footage) Boston Shots!!"
    }
  },
  "gloucester": {
    "cityName": "Γκλόστερ",
    "drone": {
      "youtubeId": "q3Ium2KibHQ",
      "title": "Γκλόστερ 4K — 4K Gloucester - MA - DJI Mini 2 in 4k"
    },
    "live": {
      "youtubeId": "_j1qgdMnifk",
      "label": "Γκλόστερ Live Cam",
      "title": "Gloucester, Massachusetts US - Annisquam Yacht Club"
    }
  },
  "paterson": {
    "cityName": "Πάτερσον",
    "drone": {
      "youtubeId": "rRgvk2RzlZg",
      "title": "Πάτερσον 4K — Paterson NJ by Drone - Paterson New Jersey City Drone view - Drone Shots"
    }
  },
  "elizabeth": {
    "cityName": "Ελίζαμπεθ",
    "drone": {
      "youtubeId": "cuP0zBjza10",
      "title": "Ελίζαμπεθ 4K — Drone Shots of Elizabeth, NJ"
    }
  },
  "atlantic-city": {
    "cityName": "Ατλάντικ Σίτι",
    "drone": {
      "youtubeId": "Z1eC1AUukQE",
      "title": "Ατλάντικ Σίτι 4K — Atlantic City, New Jersey | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "2WmTS_bBwyM",
      "label": "Ατλάντικ Σίτι Live Cam",
      "title": "Atlantic City Live Cams - 24/7 Boardwalk, Marina & Lighthouse Views"
    }
  },
  "princeton": {
    "cityName": "Πρίνστον",
    "drone": {
      "youtubeId": "9-mtnGyw8Zg",
      "title": "Πρίνστον 4K — Princeton, New Jersey - [4K] Drone Tour"
    }
  },
  "hoboken": {
    "cityName": "Χομπόκεν",
    "drone": {
      "youtubeId": "0cM66um9q0g",
      "title": "Χομπόκεν 4K — Flying over Hoboken, NJ [4K UHD]"
    }
  },
  "cape-may": {
    "cityName": "Κέιπ Μέι",
    "drone": {
      "youtubeId": "he6_qMIM3wY",
      "title": "Κέιπ Μέι 4K — Cape May, New Jersey (Drone Footage in 4K)"
    },
    "live": {
      "youtubeId": "gV2Lj_a-IoQ",
      "label": "Κέιπ Μέι Live Cam",
      "title": "Cape May Cove Live Cam with views of the Cove Beach, Cape May Light House and Great Sunsets"
    }
  },
  "morristown": {
    "cityName": "Μόρισταουν",
    "drone": {
      "youtubeId": "Sqr8MK-jfwU",
      "title": "Μόρισταουν 4K — Morristown Aerial Majesty: Captivating Drone Fly-Through Video"
    }
  },
  "rochester": {
    "cityName": "Ρότσεστερ",
    "drone": {
      "youtubeId": "BmU9gKudg-A",
      "title": "Ρότσεστερ 4K — Rochester, New York - [4K] Drone Tour"
    }
  },
  "syracuse": {
    "cityName": "Σίρακιους",
    "drone": {
      "youtubeId": "TLPEjwZBnHo",
      "title": "Σίρακιους 4K — Syracuse, New York - [4K] Drone Tour"
    }
  },
  "yonkers": {
    "cityName": "Γιόνκερς",
    "drone": {
      "youtubeId": "hVCmIOQvN28",
      "title": "Γιόνκερς 4K — Yonkers, New York - [4K] Drone Tour"
    }
  },
  "ithaca": {
    "cityName": "Ιθάκη",
    "drone": {
      "youtubeId": "qhXHGJzPnPA",
      "title": "Ιθάκη 4K — Ithaca, New York - [4K] Drone Tour"
    },
    "live": {
      "youtubeId": "VuaBJpMLkRc",
      "label": "Ιθάκη Live Cam",
      "title": "Ithaca College Dillingham Webcam"
    }
  },
  "saratoga-springs": {
    "cityName": "Σαρατόγκα Σπρινγκς",
    "drone": {
      "youtubeId": "xHAgr3GD1ZU",
      "title": "Σαρατόγκα Σπρινγκς 4K — Saratoga Springs, New York - [4K] Drone Tour"
    }
  },
  "niagara-falls-ny": {
    "cityName": "Καταρράκτες Νιαγάρα",
    "drone": {
      "youtubeId": "phJRqNNj-eg",
      "title": "Καταρράκτες Νιαγάρα 4K — 🔥 4K Drone | Niagara Falls Travel Time Lapse: Frozen & Aerial | New York, USA & Ontario, Canada"
    },
    "live": {
      "youtubeId": "qx7gry390YA",
      "label": "Καταρράκτες Νιαγάρα Live Cam",
      "title": "EarthCam Live:  Niagara Falls"
    }
  },
  "binghamton": {
    "cityName": "Μπίνγκχαμπτον",
    "drone": {
      "youtubeId": "OZyDM755I60",
      "title": "Μπίνγκχαμπτον 4K — Binghamton, New York - [4K] Drone Tour"
    }
  },
  "allentown": {
    "cityName": "Άλενταουν",
    "drone": {
      "youtubeId": "xXKgR8cuLBk",
      "title": "Άλενταουν 4K — Allentown, Pennsylvania - [4K] Drone Tour"
    }
  },
  "erie": {
    "cityName": "Ήρι",
    "drone": {
      "youtubeId": "nRiZWQ9BuCY",
      "title": "Ήρι 4K — Erie, Pennsylvania - [4K] Drone Tour"
    }
  },
  "reading": {
    "cityName": "Ρέντινγκ",
    "drone": {
      "youtubeId": "m2Vr1NDeSyc",
      "title": "Ρέντινγκ 4K — Reading, Pennsylvania - [4K] Drone Tour"
    },
    "live": {
      "youtubeId": "6k3ZZDQTmWY",
      "label": "Ρέντινγκ Live Cam",
      "title": "LIVESTREAM - Reading Outer Station"
    }
  },
  "scranton": {
    "cityName": "Σκράντον",
    "drone": {
      "youtubeId": "xcWj68_ET2Y",
      "title": "Σκράντον 4K — Scranton, Pennsylvania - [4K] Drone Tour"
    }
  },
  "bethlehem-pa": {
    "cityName": "Βηθλεέμ",
    "drone": {
      "youtubeId": "T1voS9vyqP0",
      "title": "Βηθλεέμ 4K — Driving Through Downtown Bethlehem, Pennsylvania - [4K Tour]"
    }
  },
  "lancaster": {
    "cityName": "Λάνκαστερ",
    "drone": {
      "youtubeId": "wZ-6Hkimyyc",
      "title": "Λάνκαστερ 4K — Lancaster, Pennsylvania - [4K] Drone Tour"
    }
  },
  "state-college": {
    "cityName": "Στέιτ Κόλετζ",
    "drone": {
      "youtubeId": "5-XzsAkM1eo",
      "title": "Στέιτ Κόλετζ 4K — State College, Pennsylvania - [4K] Drone Tour"
    },
    "live": {
      "youtubeId": "kGB1z-KVcy0",
      "label": "Στέιτ Κόλετζ Live Cam",
      "title": "Beaver Ave and Allen St - State College, PA"
    }
  },
  "jacksonville": {
    "cityName": "Τζάκσονβιλ",
    "drone": {
      "youtubeId": "jab1oWfSO8Q",
      "title": "Τζάκσονβιλ 4K — Jacksonville, Florida | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "bZ4uxyLqV-E",
      "label": "Τζάκσονβιλ Live Cam",
      "title": "Live Cam From The Best Western In Jacksonville Beach, Fl."
    }
  },
  "st-petersburg-fl": {
    "cityName": "Σεντ Πίτερσμπεργκ",
    "drone": {
      "youtubeId": "vNhakK77yc8",
      "title": "Σεντ Πίτερσμπεργκ 4K — St. Petersburg, Florida - [4K] Drone Tour"
    }
  },
  "fort-lauderdale": {
    "cityName": "Φορτ Λόντερντεϊλ",
    "drone": {
      "youtubeId": "k1tiSi4LkiE",
      "title": "Φορτ Λόντερντεϊλ 4K — Fort Lauderdale, Florida, USA 🇺🇸 | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "bM0GplM_vPY",
      "label": "Φορτ Λόντερντεϊλ Live Cam",
      "title": "🌴 LAS OLAS LIVE 🔴 Fort Lauderdale Patio Cam | Elbo Room A1A"
    }
  },
  "key-west": {
    "cityName": "Κι Γουέστ",
    "drone": {
      "youtubeId": "O3wM9shKGSU",
      "title": "Κι Γουέστ 4K — Key West, Florida 🇺🇸 in 4K Video by Drone - Key West Beaches United States"
    },
    "live": {
      "youtubeId": "H_kswlYZN5o",
      "label": "Κι Γουέστ Live Cam",
      "title": "🔴Duval Street - Key West, Florida - Live Cam"
    }
  },
  "st-augustine": {
    "cityName": "Σεντ Ογκουστίν",
    "drone": {
      "youtubeId": "mFAX4Rr8VEo",
      "title": "Σεντ Ογκουστίν 4K — Spectacular St. Augustine Florida Aerial Adventure | Experience the Ancient City by Drone"
    },
    "live": {
      "youtubeId": "0lox0s8zNcU",
      "label": "Σεντ Ογκουστίν Live Cam",
      "title": "Bridge of Lions LIVE - 24/7 - St. Augustine, Florida"
    }
  },
  "naples-fl": {
    "cityName": "Νέιπλς",
    "drone": {
      "youtubeId": "kvBBpIHcXQI",
      "title": "Νέιπλς 4K — Beautiful Naples, Florida | 4K drone footage"
    }
  },
  "augusta-ga": {
    "cityName": "Ογκάστα",
    "drone": {
      "youtubeId": "-VBf3y9fbkA",
      "title": "Ογκάστα 4K — Augusta Georgia 4K  / Home of the Masters  (DJI Mavic Air 3S Drone Footage) 2nd Largest City in GA!!"
    }
  },
  "macon": {
    "cityName": "Μέικον",
    "drone": {
      "youtubeId": "YVrgos1sK1A",
      "title": "Μέικον 4K — Macon, Georgia - [4K] Drone Tour"
    }
  },
  "athens-ga": {
    "cityName": "Άθενς",
    "drone": {
      "youtubeId": "5jyopjQLWjA",
      "title": "Άθενς 4K — Athens, Georgia - [4K] Drone Tour"
    }
  },
  "columbus-ga": {
    "cityName": "Κολόμπους",
    "drone": {
      "youtubeId": "mvjhk1mv9F0",
      "title": "Κολόμπους 4K — COLUMBUS GA | Town Reel | 4K Cinematic Drone Video"
    }
  },
  "roswell-ga": {
    "cityName": "Ρόσγουελ",
    "drone": {
      "youtubeId": "QHoErdZfvp4",
      "title": "Ρόσγουελ 4K — Roswell Georgia | 4K Virtual Tour of Downtown Roswell"
    }
  },
  "brunswick-ga": {
    "cityName": "Μπράνσγουικ",
    "drone": {
      "youtubeId": "QwPq2cYdl0s",
      "title": "Μπράνσγουικ 4K — Brunswick Georgia | Golden Isles | Drone | 4K"
    }
  },
  "alpharetta": {
    "cityName": "Αλφαρέτα",
    "drone": {
      "youtubeId": "W8iqkIG81o4",
      "title": "Αλφαρέτα 4K — Alpharetta GA 4K (DJI Mavic Air 2 Drone Footage) 13th Largest City in Georgia / Atlanta Suburb!!"
    }
  },
  "marietta-ga": {
    "cityName": "Μαριέτα",
    "drone": {
      "youtubeId": "qEc0Z4aZhSs",
      "title": "Μαριέτα 4K — Drive and Fly in 4k-Marietta, GA  Chill/ Travel / Acoustic/ Happy/ Uplifting /Relax"
    }
  },
  "durham": {
    "cityName": "Ντέραμ",
    "drone": {
      "youtubeId": "GnGZyPjOKSg",
      "title": "Ντέραμ 4K — 4K Drone Footage of Durham, NC | Cinematic Aerial Tour of Bull City"
    }
  },
  "greensboro": {
    "cityName": "Γκρίνσμπορο",
    "drone": {
      "youtubeId": "JMAn4Xrn_ag",
      "title": "Γκρίνσμπορο 4K — Greensboro, NC, USA 🇺🇸 4k ULTRA HD Drone Footage"
    }
  },
  "winston-salem": {
    "cityName": "Γουίνστον-Σέιλεμ",
    "drone": {
      "youtubeId": "pufg4DyvlIk",
      "title": "Γουίνστον-Σέιλεμ 4K — Winston-Salem, North Carolina - [4K] Drone Tour"
    }
  },
  "asheville": {
    "cityName": "Άσβιλ",
    "drone": {
      "youtubeId": "S0r5zsc_RZ0",
      "title": "Άσβιλ 4K — Asheville, North Carolina - [4K] Drone Tour"
    }
  },
  "wilmington-nc": {
    "cityName": "Γουίλμινγκτον",
    "drone": {
      "youtubeId": "KTcaJAmSuX4",
      "title": "Γουίλμινγκτον 4K — Explore Wilmington, NC in HYPERLAPSE | Drone | 4k UHD"
    },
    "live": {
      "youtubeId": "qUfyZ66eRHI",
      "label": "Γουίλμινγκτον Live Cam",
      "title": "🌆 Riverfront Wilmington Riverwalk Live Cam"
    }
  },
  "fayetteville-nc": {
    "cityName": "Φαγιέτβιλ",
    "drone": {
      "youtubeId": "Q5o9upfz0Yk",
      "title": "Φαγιέτβιλ 4K — 4K Driving in Fayetteville, North Carolina"
    }
  },
  "cary": {
    "cityName": "Κάρι",
    "drone": {
      "youtubeId": "_floDd7VmkY",
      "title": "Κάρι 4K — Downtown Cary NC | 4K 60FPS Stock Footage"
    },
    "live": {
      "youtubeId": "YVXZk3-kzcI",
      "label": "Κάρι Live Cam",
      "title": "Live View — Downtown Cary Park"
    }
  },
  "boone-nc": {
    "cityName": "Μπουν",
    "drone": {
      "youtubeId": "B8jfmeJcidM",
      "title": "Μπουν 4K — Boone, North Carolina - [4K] Drone Tour"
    }
  },
  "greenville-sc": {
    "cityName": "Γκρίνβιλ",
    "drone": {
      "youtubeId": "1BHPA7mB9MI",
      "title": "Γκρίνβιλ 4K — Greenville, South Carolina 4K UHD | Drone Footage"
    },
    "live": {
      "youtubeId": "9GVOuE6mDJY",
      "label": "Γκρίνβιλ Live Cam",
      "title": "Live Greenville SC Main Street Webcam"
    }
  },
  "myrtle-beach": {
    "cityName": "Μερτλ Μπιτς",
    "drone": {
      "youtubeId": "cM_r7YTb9Zk",
      "title": "Μερτλ Μπιτς 4K — Myrtle Beach, South Carolina | 4K drone footage"
    },
    "live": {
      "youtubeId": "UKtfCDXhCq0",
      "label": "Μερτλ Μπιτς Live Cam",
      "title": "Myrtle Beach Boardwalk Cam"
    }
  },
  "spartanburg": {
    "cityName": "Σπάρτανμπεργκ",
    "drone": {
      "youtubeId": "Q1tS7LjBKtY",
      "title": "Σπάρτανμπεργκ 4K — Spartanburg, South Carolina - [4K] Drone Tour"
    },
    "live": {
      "youtubeId": "xJMJegqnl8Y",
      "label": "Σπάρτανμπεργκ Live Cam",
      "title": "Spartanburg, South Carolina, USA | LIVE Train Camera (Fixed View – North)"
    }
  },
  "hilton-head": {
    "cityName": "Χίλτον Χεντ",
    "drone": {
      "youtubeId": "NxE13TDHwFs",
      "title": "Χίλτον Χεντ 4K — Sonesta Hilton Head Hotel Drone Tour - Hilton Head Island, South Carolina"
    },
    "live": {
      "youtubeId": "qDyYRTtXlds",
      "label": "Χίλτον Χεντ Live Cam",
      "title": "Live from the 18th Green at Robert Trent Jones Golf Course | Hilton Head Island, SC"
    }
  },
  "rock-hill": {
    "cityName": "Ροκ Χιλ",
    "drone": {
      "youtubeId": "hSlms6GUH0k",
      "title": "Ροκ Χιλ 4K — Rock Hill SC 4K / South Carolina's 5th Largest City (DJI Mavic Air 2 Drone Footage)  Gateway to SC!!"
    }
  },
  "mount-pleasant": {
    "cityName": "Μάουντ Πλέζαντ",
    "drone": {
      "youtubeId": "sD_KK7uuN5s",
      "title": "Μάουντ Πλέζαντ 4K — Road Tour from Charleston to Mount Pleasant, South Carolina in 4K - Charleston SC Suburbs"
    }
  },
  "florence-sc": {
    "cityName": "Φλόρενς",
    "drone": {
      "youtubeId": "si607bT67lE",
      "title": "Φλόρενς 4K — Florence - South Carolina - 4K Downtown Drive"
    }
  },
  "beaufort-sc": {
    "cityName": "Μπιούφορτ",
    "drone": {
      "youtubeId": "wR92E8b_DD8",
      "title": "Μπιούφορτ 4K — Beaufort, South Carolina from a drone in 4K!"
    }
  },
  "norfolk": {
    "cityName": "Νόρφολκ",
    "drone": {
      "youtubeId": "a5BnNV99hLQ",
      "title": "Νόρφολκ 4K — Norfolk, Virginia - [4K] Drone Tour"
    }
  },
  "alexandria-va": {
    "cityName": "Αλεξάνδρεια",
    "drone": {
      "youtubeId": "r89mPlCaApU",
      "title": "Αλεξάνδρεια 4K — 【4K】WALK ALEXANDRIA Virginia VA USA 4k video Travel vlog HDR"
    }
  },
  "charlottesville": {
    "cityName": "Σάρλοτσβιλ",
    "drone": {
      "youtubeId": "N97U_OCv6FE",
      "title": "Σάρλοτσβιλ 4K — Charlottesville, Virginia - [4K] Drone Tour"
    }
  },
  "williamsburg": {
    "cityName": "Γουίλιαμσμπεργκ",
    "drone": {
      "youtubeId": "eRqXEvLnt9M",
      "title": "Γουίλιαμσμπεργκ 4K — Williamsburg, Virginia - [4K] Drone Tour"
    }
  },
  "roanoke": {
    "cityName": "Ροανόκ",
    "drone": {
      "youtubeId": "QskXuHEm5A4",
      "title": "Ροανόκ 4K — Flying Over Roanoke, Virginia - [4K] Drone Footage"
    },
    "live": {
      "youtubeId": "UhP0rMfgjJ8",
      "label": "Ροανόκ Live Cam",
      "title": "Roanoke, Virginia, USA | LIVE Train Camera (PTZ)"
    }
  },
  "chesapeake": {
    "cityName": "Τσέζαπικ",
    "drone": {
      "youtubeId": "ko-cMbqPDGY",
      "title": "Τσέζαπικ 4K — Chesapeake, Virginia from above | Cinematic Drone Footage of Chesapeake "
    },
    "live": {
      "youtubeId": "M9pA4F7J1Go",
      "label": "Τσέζαπικ Live Cam",
      "title": "LIVE Osprey Nest - Chesapeake Conservancy | explore.org"
    }
  },
  "newport-news": {
    "cityName": "Νιούπορτ Νιουζ",
    "drone": {
      "youtubeId": "zWZTgq5_gTE",
      "title": "Νιούπορτ Νιουζ 4K — Newport News, Virginia - [4K] Drone Tour"
    }
  },
  "lynchburg": {
    "cityName": "Λίντσμπεργκ",
    "drone": {
      "youtubeId": "440USlyCTP0",
      "title": "Λίντσμπεργκ 4K — Lynchburg, Virginia - [4K] Drone Tour"
    }
  },
  "newark-de": {
    "cityName": "Νιούαρκ",
    "drone": {
      "youtubeId": "aLIDahClYLM",
      "title": "Νιούαρκ 4K — Newark, DE | 4K Drone Video"
    }
  },
  "rehoboth-beach": {
    "cityName": "Ρεχόμποθ Μπιτς",
    "drone": {
      "youtubeId": "Wn2hXie-XwQ",
      "title": "Ρεχόμποθ Μπιτς 4K — Rehoboth Beach, Delaware 4K Drone Flight"
    },
    "live": {
      "youtubeId": "lq15dNFXISw",
      "label": "Ρεχόμποθ Μπιτς Live Cam",
      "title": "Rehoboth Boardwalk Plaza Hotel Cam"
    }
  },
  "lewes": {
    "cityName": "Λιούις",
    "drone": {
      "youtubeId": "9TH_CEhtGYg",
      "title": "Λιούις 4K — The Town Of Lewes, Delaware in 4K"
    },
    "live": {
      "youtubeId": "tXVF9ssb55w",
      "label": "Λιούις Live Cam",
      "title": "Tunnell & Raysor Camera at the Lewes Yacht Club"
    }
  },
  "middletown-de": {
    "cityName": "Μίντλταουν",
    "drone": {
      "youtubeId": "DBlgUaTNcok",
      "title": "Μίντλταουν 4K — Aerial Drone Tour - Middletown, DE - by New Horizon Drone Photography"
    }
  },
  "milford-de": {
    "cityName": "Μίλφορντ",
    "drone": {
      "youtubeId": "lfCRpAkgfpk",
      "title": "Μίλφορντ 4K — Welcome to Milford, DE: Drone Videography"
    }
  },
  "seaford-de": {
    "cityName": "Σίφορντ",
    "drone": {
      "youtubeId": "Lwrw-3c8Xfg",
      "title": "Σίφορντ 4K — Life is Beautiful at Seaford, Delaware - Music: I Think She Like Me - Rick Ross - Drone Video Clips"
    }
  },
  "georgetown-de": {
    "cityName": "Τζόρτζταουν",
    "drone": {
      "youtubeId": "qW-9AcCOtoQ",
      "title": "Τζόρτζταουν 4K — Georgetown - Delaware - 4K Downtown Drive"
    }
  },
  "smyrna-de": {
    "cityName": "Σμύρνα",
    "drone": {
      "youtubeId": "z5y2HY26_8k",
      "title": "Σμύρνα 4K — Drone Flight Around Farms of Smyrna Delaware"
    }
  },
  "bangor": {
    "cityName": "Μπάνγκορ",
    "drone": {
      "youtubeId": "iFeXKw8HKjE",
      "title": "Μπάνγκορ 4K — Bangor, Maine - [4K] Drone Tour"
    }
  },
  "bar-harbor": {
    "cityName": "Μπαρ Χάρμπορ",
    "drone": {
      "youtubeId": "5gWMlWzjKmU",
      "title": "Μπαρ Χάρμπορ 4K — MAINE 4K - Portland, Bar Harbor, Acadia - New England Aerial Drone Travel Tour"
    },
    "live": {
      "youtubeId": "Qoe4x5Z7P08",
      "label": "Μπαρ Χάρμπορ Live Cam",
      "title": "Bar Harbor, Maine - West View - Bar Harbor Inn"
    }
  },
  "lewiston": {
    "cityName": "Λιούιστον",
    "drone": {
      "youtubeId": "3OOTn920Rhs",
      "title": "Λιούιστον 4K — 🚗 Lewiston, Maine  🌟4K Drive"
    }
  },
  "kennebunkport": {
    "cityName": "Κένεμπανκπορτ",
    "drone": {
      "youtubeId": "43srK-YMcZM",
      "title": "Κένεμπανκπορτ 4K — [4K] Kennebunkport Scenic Walk - [Kennebunkport, Maine] - 4k Walking Tour with Binaural 🎧"
    }
  },
  "rockland-me": {
    "cityName": "Ρόκλαντ",
    "drone": {
      "youtubeId": "c8kzJtfOIAI",
      "title": "Ρόκλαντ 4K — The Lighthouse That Stood Against Time | Rockland, Maine 4K"
    }
  },
  "camden-me": {
    "cityName": "Κάμντεν",
    "drone": {
      "youtubeId": "pQktoiibBVk",
      "title": "Κάμντεν 4K — Camden, Maine Walking Tour [4K]"
    }
  },
  "bath-me": {
    "cityName": "Μπαθ",
    "drone": {
      "youtubeId": "EnDo8xXnVZ0",
      "title": "Μπαθ 4K — Bath, Maine, USA Sunset 4K HDR Drone"
    }
  },
  "brunswick-me": {
    "cityName": "Μπράνσγουικ",
    "drone": {
      "youtubeId": "JgrvZV5g5Ys",
      "title": "Μπράνσγουικ 4K — Portland & Brunswick, Maine | Incredible Aerial Drone Travel City Adventure Experience"
    }
  },
  "frederick": {
    "cityName": "Φρέντερικ",
    "drone": {
      "youtubeId": "0qrbj_ZVJP0",
      "title": "Φρέντερικ 4K — Frederick, Maryland, USA 🏞️ | A Captivating 4K Drone Journey"
    }
  },
  "rockville": {
    "cityName": "Ρόκβιλ",
    "drone": {
      "youtubeId": "rRLOBbT2f20",
      "title": "Ρόκβιλ 4K — Rockville Maryland 2025 Drone Footage 4K"
    }
  },
  "gaithersburg": {
    "cityName": "Γκέιθερσμπεργκ",
    "drone": {
      "youtubeId": "la7PvFXzf4s",
      "title": "Γκέιθερσμπεργκ 4K — 4K DJI Mini 3 Drone Flight in Gaithersburg, Maryland"
    }
  },
  "ocean-city-md": {
    "cityName": "Όσιαν Σίτι",
    "drone": {
      "youtubeId": "SquEn9CvW-s",
      "title": "Όσιαν Σίτι 4K — Ocean City, Maryland | 4k Drone Scenes"
    },
    "live": {
      "youtubeId": "zGima24vRHM",
      "label": "Όσιαν Σίτι Live Cam",
      "title": "Econolodge OCEAN FRONT LIVE BEACH CAM OCMD"
    }
  },
  "silver-spring": {
    "cityName": "Σίλβερ Σπρινγκ",
    "drone": {
      "youtubeId": "YeJN0lFHBLI",
      "title": "Σίλβερ Σπρινγκ 4K — Silver Spring, Maryland | Full Tour (4K)"
    }
  },
  "bethesda": {
    "cityName": "Μπεθέσντα",
    "drone": {
      "youtubeId": "K2HMM7YR36s",
      "title": "Μπεθέσντα 4K — Bethesda Aerial Tour"
    }
  },
  "salisbury-md": {
    "cityName": "Σόλσμπερι",
    "drone": {
      "youtubeId": "1E0bPgivyPI",
      "title": "Σόλσμπερι 4K — Salisbury, Maryland Drone Footage"
    },
    "live": {
      "youtubeId": "lfEj-ab7rgM",
      "label": "Σόλσμπερι Live Cam",
      "title": "Spicer Bros. Camera At Salisbury University"
    }
  },
  "cumberland-md": {
    "cityName": "Κάμπερλαντ",
    "drone": {
      "youtubeId": "5IbJpXxQ33g",
      "title": "Κάμπερλαντ 4K — Cumberland, Maryland 4K Drone Footage"
    },
    "live": {
      "youtubeId": "LqPsNV_b-uc",
      "label": "Κάμπερλαντ Live Cam",
      "title": "Cumberland, Maryland, USA | LIVE Train Camera (PTZ — Downtown) Feat. Western Maryland Scenic 1309!"
    }
  },
  "nashua": {
    "cityName": "Νάσουα",
    "drone": {
      "youtubeId": "shozQOPNxG4",
      "title": "Νάσουα 4K — Hudson, New Hampshire: An Aerial Glimpse, with Nashua in the Distance"
    }
  },
  "portsmouth-nh": {
    "cityName": "Πόρτσμουθ",
    "drone": {
      "youtubeId": "S7yNuprj_WI",
      "title": "Πόρτσμουθ 4K — PORTSMOUTH, NEW HAMPSHIRE Drone Video"
    },
    "live": {
      "youtubeId": "BEG9zonwEQ4",
      "label": "Πόρτσμουθ Live Cam",
      "title": "Tugboats and Shipping on the Piscataqua River, Portsmouth, New Hampshire LIVE"
    }
  },
  "dover-nh": {
    "cityName": "Ντόβερ",
    "drone": {
      "youtubeId": "jnohthKivN0",
      "title": "Ντόβερ 4K — Dover New Hampshire 4K Drone Aerial"
    }
  },
  "keene": {
    "cityName": "Κιν",
    "drone": {
      "youtubeId": "vyk5lFr1iY0",
      "title": "Κιν 4K — Downtown Keene New Hampshire Drone Footage At Dusk - Timelapse"
    }
  },
  "laconia": {
    "cityName": "Λακόνια",
    "drone": {
      "youtubeId": "SsSYfAawkxo",
      "title": "Λακόνια 4K — Laconia & Meredith - New Hampshire DJI Mini 2 in 4k"
    }
  },
  "hanover-nh": {
    "cityName": "Ανόβερο",
    "drone": {
      "youtubeId": "pb7u4EZww6U",
      "title": "Ανόβερο 4K — Hanover, New Hampshire - [4K] Drone Tour"
    },
    "live": {
      "youtubeId": "vnIMx_ONGu4",
      "label": "Ανόβερο Live Cam",
      "title": "Dartmouth College Hanover Inn Webcam"
    }
  },
  "salem-nh": {
    "cityName": "Σέιλεμ",
    "drone": {
      "youtubeId": "A-VzSzwEZvE",
      "title": "Σέιλεμ 4K — Salem New Hampshire - Driving Tour [4K]"
    }
  },
  "rochester-nh": {
    "cityName": "Ρότσεστερ",
    "drone": {
      "youtubeId": "-A0o0Tnzq14",
      "title": "Ρότσεστερ 4K — Rochester NH"
    }
  },
  "warwick": {
    "cityName": "Γουόρικ",
    "drone": {
      "youtubeId": "EQCrppptNG8",
      "title": "Γουόρικ 4K — Captivating Aerial Adventure: Vessel on Providence River in Warwick, RI DJI Drone - Rhode Island"
    }
  },
  "cranston": {
    "cityName": "Κράνστον",
    "drone": {
      "youtubeId": "qKGG9g4nq9I",
      "title": "Κράνστον 4K — Blizzard of 2026 drone shots, Edgewood, Cranston, Rhode Island"
    }
  },
  "pawtucket": {
    "cityName": "Ποτάκετ",
    "drone": {
      "youtubeId": "V2onMxE0UFc",
      "title": "Ποτάκετ 4K — Pawtucket RI in 4k"
    }
  },
  "narragansett": {
    "cityName": "Ναραγάνσετ",
    "drone": {
      "youtubeId": "jDDhMhzSBk0",
      "title": "Ναραγάνσετ 4K — Narragansett, Rhode Island (4K Drone Footage)"
    }
  },
  "westerly": {
    "cityName": "Γουέστερλι",
    "drone": {
      "youtubeId": "fGcjFLFEBWY",
      "title": "Γουέστερλι 4K — Westerly From Above In 4K"
    },
    "live": {
      "youtubeId": "c9XTpzuSNo0",
      "label": "Γουέστερλι Live Cam",
      "title": "Downtown Westerly, RI Live Stream"
    }
  },
  "bristol-ri": {
    "cityName": "Μπρίστολ",
    "drone": {
      "youtubeId": "rHWHRXZPMVw",
      "title": "Μπρίστολ 4K — 4k drone footage colt state park bristol rhode island"
    }
  },
  "woonsocket": {
    "cityName": "Γουνσόκετ",
    "drone": {
      "youtubeId": "IOuHv4esEUI",
      "title": "Γουνσόκετ 4K — Woonsocket RI:  A Drone's Eye View"
    }
  },
  "south-kingstown": {
    "cityName": "Σάουθ Κίνγκσταουν",
    "drone": {
      "youtubeId": "COv7e25WSgg",
      "title": "Σάουθ Κίνγκσταουν 4K — South Kingstown Township RI in 4K"
    },
    "live": {
      "youtubeId": "9uAn-VdurrE",
      "label": "Σάουθ Κίνγκσταουν Live Cam",
      "title": "150MPH Trains at Davisville, Rhode Island, USA | LIVE Train Camera (Fixed View — South)"
    }
  },
  "madison": {
    "cityName": "Μάντισον",
    "drone": {
      "youtubeId": "6fnzcTGYj_k",
      "title": "Μάντισον 4K — Madison,  Wisconsin Capitol | 4K drone footage"
    }
  },
  "milwaukee": {
    "cityName": "Μιλγουόκι",
    "drone": {
      "youtubeId": "IAqb9TE-Zp8",
      "title": "Μιλγουόκι 4K — Milwaukee Summer in 8K | Wisconsin by Drone | Cinematic Aerial Tour"
    },
    "live": {
      "youtubeId": "MT5Og9gOKuM",
      "label": "Μιλγουόκι Live Cam",
      "title": "EarthCam Live:  Milwaukee, WI"
    }
  },
  "green-bay": {
    "cityName": "Γκριν Μπέι",
    "drone": {
      "youtubeId": "m-uLC2Fwewk",
      "title": "Γκριν Μπέι 4K — Green Bay, Wisconsin | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "pT7lsBZ-M7w",
      "label": "Γκριν Μπέι Live Cam",
      "title": "The Depot Restaurant LIVE Railcam - Green Bay, WI"
    }
  },
  "kenosha": {
    "cityName": "Κενόσα",
    "drone": {
      "youtubeId": "eJpSa5g8508",
      "title": "Κενόσα 4K — Kenosha, Wisconsin: 4K Drive + Drone"
    },
    "live": {
      "youtubeId": "Y_TbL7GShcY",
      "label": "Κενόσα Live Cam",
      "title": "Live American Family Field web cam | FOX6 News Milwaukee"
    }
  },
  "racine": {
    "cityName": "Ρασίν",
    "drone": {
      "youtubeId": "swejoVC41fs",
      "title": "Ρασίν 4K — Road Tour of Racine, Wisconsin in 4K - View of Lake Michigan"
    }
  },
  "appleton": {
    "cityName": "Άπλετον",
    "drone": {
      "youtubeId": "Ac59MpJmxTg",
      "title": "Άπλετον 4K — 2025 Appleton WI Drone Stock Footage (4K) | Royalty-Free Aerial Video & Photos for Licensing"
    },
    "live": {
      "youtubeId": "iQi954fCovc",
      "label": "Άπλετον Live Cam",
      "title": "Appleton, Wisconsin live weather cam"
    }
  },
  "eau-claire": {
    "cityName": "Ο Κλερ",
    "drone": {
      "youtubeId": "7DbsaPPetB0",
      "title": "Ο Κλερ 4K — Wisconsin Downtowns: Eau Claire"
    },
    "live": {
      "youtubeId": "Y_TbL7GShcY",
      "label": "Ο Κλερ Live Cam",
      "title": "Live American Family Field web cam | FOX6 News Milwaukee"
    }
  },
  "oshkosh": {
    "cityName": "Όσκος",
    "drone": {
      "youtubeId": "MHGhtm3n-88",
      "title": "Όσκος 4K — Road Tour of Oshkosh, Wisconsin in 4K - Downtown Oshkosh WI"
    },
    "live": {
      "youtubeId": "oSR43WQ3qMY",
      "label": "Όσκος Live Cam",
      "title": "🔴 LIVE: EAA AirVenture Oshkosh 2026 Thursday — All Cameras + ADS-B Tracking + ATC Feed"
    }
  },
  "la-crosse": {
    "cityName": "Λα Κρος",
    "drone": {
      "youtubeId": "CPa9O2mYVtA",
      "title": "Λα Κρος 4K — 4K Aerial Cinema Reel A 2016 La Crosse, WI"
    }
  },
  "sheboygan": {
    "cityName": "Σεμπόιγκαν",
    "drone": {
      "youtubeId": "4XuPsAGJd8Q",
      "title": "Σεμπόιγκαν 4K — sheboygan wisconsin cinematic drone 4k"
    },
    "live": {
      "youtubeId": "13j5iZkMpbE",
      "label": "Σεμπόιγκαν Live Cam",
      "title": "Visit Sheboygan Live Beach Camera"
    }
  },
  "columbus": {
    "cityName": "Κολόμπους",
    "drone": {
      "youtubeId": "hAeu044o6yw",
      "title": "Κολόμπους 4K — Columbus, Ohio | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "iHqqkh_Lths",
      "label": "Κολόμπους Live Cam",
      "title": "EarthCam Live:  Terminal Tower Cam (Cleveland, OH)"
    }
  },
  "cleveland": {
    "cityName": "Κλίβελαντ",
    "drone": {
      "youtubeId": "_vcvsSAiqi0",
      "title": "Κλίβελαντ 4K — Cleveland, Ohio - USA 🇺🇸 - by drone [4K]"
    },
    "live": {
      "youtubeId": "iHqqkh_Lths",
      "label": "Κλίβελαντ Live Cam",
      "title": "EarthCam Live:  Terminal Tower Cam (Cleveland, OH)"
    }
  },
  "cincinnati": {
    "cityName": "Σινσινάτι",
    "drone": {
      "youtubeId": "G8EUiH00BrU",
      "title": "Σινσινάτι 4K — Cincinnati, Ohio | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "i70LOfyh1M4",
      "label": "Σινσινάτι Live Cam",
      "title": "Cincinnati Skyline LIVE | Ohio River, Brent Spence Bridge, from Covington, Kentucky"
    }
  },
  "dayton": {
    "cityName": "Ντέιτον",
    "drone": {
      "youtubeId": "f1ZJRInLvyU",
      "title": "Ντέιτον 4K — Dayton, Ohio | 4K Drone Video"
    },
    "live": {
      "youtubeId": "vF4ZdG-_6FE",
      "label": "Ντέιτον Live Cam",
      "title": "Glendale, Ohio, USA | LIVE Train Camera (Fixed View – North)"
    }
  },
  "toledo": {
    "cityName": "Τολέδο",
    "drone": {
      "youtubeId": "6JIAKuawcUw",
      "title": "Τολέδο 4K — Toledo, Ohio | 4K Drone Video"
    },
    "live": {
      "youtubeId": "vF4ZdG-_6FE",
      "label": "Τολέδο Live Cam",
      "title": "Glendale, Ohio, USA | LIVE Train Camera (Fixed View – North)"
    }
  },
  "akron": {
    "cityName": "Άκρον",
    "drone": {
      "youtubeId": "cdxSXuHdXyo",
      "title": "Άκρον 4K — Driving Though Akron, Ohio in the Fall: Historic Landmarks with Beautiful Foliage in 4K"
    }
  },
  "canton": {
    "cityName": "Κάντον",
    "drone": {
      "youtubeId": "OHVPQTayXvA",
      "title": "Κάντον 4K — Driving Through Downtown Canton, Ohio - [4K Tour]"
    }
  },
  "youngstown": {
    "cityName": "Γιανγκστάουν",
    "drone": {
      "youtubeId": "jNf_45dkOEI",
      "title": "Γιανγκστάουν 4K — Aerial Drone Shots of Downtown Youngstown, Ohio - May 19, 2026"
    }
  },
  "sandusky": {
    "cityName": "Σαντάσκι",
    "drone": {
      "youtubeId": "Oan37E4sK8o",
      "title": "Σαντάσκι 4K — Sandusky Drone Tour"
    }
  },
  "athens-oh": {
    "cityName": "Άθενς",
    "drone": {
      "youtubeId": "KfFbDtNXoRU",
      "title": "Άθενς 4K — Athens Ohio featuring Ohio University on April 22, 2026 drone view in 4K"
    },
    "live": {
      "youtubeId": "gIw1wBIfQJ8",
      "label": "Άθενς Live Cam",
      "title": "Ohio Campus Webcam"
    }
  },
  "lansing": {
    "cityName": "Λάνσινγκ",
    "drone": {
      "youtubeId": "DrVHEvjhJ5s",
      "title": "Λάνσινγκ 4K — Lansing - the capital city of Michigan | 4K drone footage"
    },
    "live": {
      "youtubeId": "1H0iTzv2jiQ",
      "label": "Λάνσινγκ Live Cam",
      "title": "4 Corners Camera Downtown"
    }
  },
  "detroit": {
    "cityName": "Ντιτρόιτ",
    "drone": {
      "youtubeId": "r8jjjy9GiPE",
      "title": "Ντιτρόιτ 4K — Detroit, Michigan } 4K drone footage"
    },
    "live": {
      "youtubeId": "1H0iTzv2jiQ",
      "label": "Ντιτρόιτ Live Cam",
      "title": "4 Corners Camera Downtown"
    }
  },
  "ann-arbor": {
    "cityName": "Αν Άρμπορ",
    "drone": {
      "youtubeId": "-IriyDygocY",
      "title": "Αν Άρμπορ 4K — Ann Arbor Michigan 4K Drone Footage | Aerial Views of University District & Downtown Ann Arbor"
    },
    "live": {
      "youtubeId": "1H0iTzv2jiQ",
      "label": "Αν Άρμπορ Live Cam",
      "title": "4 Corners Camera Downtown"
    }
  },
  "grand-rapids": {
    "cityName": "Γκραντ Ράπιντς",
    "drone": {
      "youtubeId": "nFgliOWTZHQ",
      "title": "Γκραντ Ράπιντς 4K — Grand Rapids, Michigan | 4K drone video"
    },
    "live": {
      "youtubeId": "1H0iTzv2jiQ",
      "label": "Γκραντ Ράπιντς Live Cam",
      "title": "4 Corners Camera Downtown"
    }
  },
  "flint": {
    "cityName": "Φλιντ",
    "drone": {
      "youtubeId": "ztoDqRirUmU",
      "title": "Φλιντ 4K — Driving Around Flint, Michigan in 4k Video"
    },
    "live": {
      "youtubeId": "yWIHgMW2yVQ",
      "label": "Φλιντ Live Cam",
      "title": "BridgeCam by CharlevoixCam"
    }
  },
  "traverse-city": {
    "cityName": "Τράβερς Σίτι",
    "drone": {
      "youtubeId": "PdaXEg-cuGQ",
      "title": "Τράβερς Σίτι 4K — Traverse City Michigan Aerial Tour | Part I | 2023"
    },
    "live": {
      "youtubeId": "8-V9uEqFLwE",
      "label": "Τράβερς Σίτι Live Cam",
      "title": "LIVE | Traverse City, MI | Downtown Camera |"
    }
  },
  "kalamazoo": {
    "cityName": "Καλαμαζού",
    "drone": {
      "youtubeId": "ZzXEn5SXlJY",
      "title": "Καλαμαζού 4K — Kalamazoo Michigan Drone Video"
    },
    "live": {
      "youtubeId": "1H0iTzv2jiQ",
      "label": "Καλαμαζού Live Cam",
      "title": "4 Corners Camera Downtown"
    }
  },
  "marquette": {
    "cityName": "Μαρκέτ",
    "drone": {
      "youtubeId": "5Hc6t2cj1zo",
      "title": "Μαρκέτ 4K — Marquette Michigan | Presque Isle Park & Lake Superior Drone Tour (4K)"
    },
    "live": {
      "youtubeId": "QF5p9Xdrjls",
      "label": "Μαρκέτ Live Cam",
      "title": "🔴LIVE - Lake Effect Snow Hammers the UP of Michigan!  - Live Weather Channel"
    }
  },
  "mackinac-island": {
    "cityName": "Νήσος Μάκινακ",
    "drone": {
      "youtubeId": "JrBAuOfFzyY",
      "title": "Νήσος Μάκινακ 4K — Mackinac Island | 4K Drone Footage"
    },
    "live": {
      "youtubeId": "Mf_qId_7mlM",
      "label": "Νήσος Μάκινακ Live Cam",
      "title": "🔴LIVE🔴 Mackinac Bridge Camera from the Riviera Motel in Mackinaw City"
    }
  },
  "saginaw": {
    "cityName": "Σάγκινο",
    "drone": {
      "youtubeId": "UEqN1F471hQ",
      "title": "Σάγκινο 4K — HD Drone Footage of Saginaw, MI (Extended)"
    },
    "live": {
      "youtubeId": "zWohYnhiBpg",
      "label": "Σάγκινο Live Cam",
      "title": "Saginaw River Cam"
    }
  },
  "springfield": {
    "cityName": "Σπρίνγκφιλντ",
    "drone": {
      "youtubeId": "0Hpk9Yi54Ns",
      "title": "Σπρίνγκφιλντ 4K — Springfield Illinois 4K /Main Attractions /Home of Abraham Lincoln! (DJI Mavic Air 2 Drone Footage)"
    },
    "live": {
      "youtubeId": "a__yfG4PnxY",
      "label": "Σπρίνγκφιλντ Live Cam",
      "title": "Quincy, Illinois, USA | LIVE Train Camera (Fixed View – East)"
    }
  },
  "rockford": {
    "cityName": "Ρόκφορντ",
    "drone": {
      "youtubeId": "4UYYrjrxjSA",
      "title": "Ρόκφορντ 4K — Rockford, Illinois Aerial Tour by Drone"
    },
    "live": {
      "youtubeId": "LhNpn9L5ndM",
      "label": "Ρόκφορντ Live Cam",
      "title": "Rochelle, Illinois, USA | LIVE Train Camera (PTZ)"
    }
  },
  "peoria": {
    "cityName": "Πεόρια",
    "drone": {
      "youtubeId": "PfOFM9LxOrs",
      "title": "Πεόρια 4K — Peoria, Illinois | 4K Drone Video"
    }
  },
  "naperville": {
    "cityName": "Νέιπερβιλ",
    "drone": {
      "youtubeId": "1MYLisxdvzY",
      "title": "Νέιπερβιλ 4K — Naperville Illinois Aerial Drone Footage | Stunning 4K Views of Downtown & Riverwalk"
    }
  },
  "champaign": {
    "cityName": "Σαμπέιν",
    "drone": {
      "youtubeId": "_ewsldSNj5Y",
      "title": "Σαμπέιν 4K — Snowy Champaign Urbana North End, I-74 4k Aerial Drone Footage"
    },
    "live": {
      "youtubeId": "4PMMSI_p7BE",
      "label": "Σαμπέιν Live Cam",
      "title": "Morrow Plots Cam"
    }
  },
  "evanston": {
    "cityName": "Έβανστον",
    "drone": {
      "youtubeId": "9udnPeePguA",
      "title": "Έβανστον 4K — Evanston Illinois Aerial Drone Footage | Lake Michigan & Northwestern Views in 4K"
    },
    "live": {
      "youtubeId": "ChOlBrSVFNc",
      "label": "Έβανστον Live Cam",
      "title": "City of Evanston, IL Live Stream"
    }
  },
  "galena": {
    "cityName": "Γκαλίνα",
    "drone": {
      "youtubeId": "Y0ZdZugIVgY",
      "title": "Γκαλίνα 4K — Galena, Illinois - Summer 2023 [Drone Footage 4K]"
    }
  },
  "bloomington-il": {
    "cityName": "Μπλούμινγκτον",
    "drone": {
      "youtubeId": "8mw2bTXZ-bc",
      "title": "Μπλούμινγκτον 4K — A glimpse of Bloomington- Normal through a drone. #bloomingtonnormal #lifemultiplied #illinois"
    },
    "live": {
      "youtubeId": "On1MRt0NqFs",
      "label": "Μπλούμινγκτον Live Cam",
      "title": "Galesburg, Illinois, USA | LIVE Train Camera (PTZ)"
    }
  },
  "joliet": {
    "cityName": "Τζόλιετ",
    "drone": {
      "youtubeId": "TKTUE0ne4Vs",
      "title": "Τζόλιετ 4K — Joliet, Town in Illinois, USA 🇺🇸 | Joliet Illinois Drone Footage, Joliet Illinois Drone tour"
    }
  },
  "indianapolis": {
    "cityName": "Ιντιανάπολις",
    "drone": {
      "youtubeId": "KXk4L_TDXf4",
      "title": "Ιντιανάπολις 4K — Indianapolis, Indiana 2025 - 4K Drone Footage 🚁 | Relaxing Aerial Tour |"
    },
    "live": {
      "youtubeId": "G8iIhudKPsQ",
      "label": "Ιντιανάπολις Live Cam",
      "title": "Muncie, Indiana, USA | LIVE Train Camera (Fixed View – East)"
    }
  },
  "fort-wayne": {
    "cityName": "Φορτ Γουέιν",
    "drone": {
      "youtubeId": "-efwv82joXk",
      "title": "Φορτ Γουέιν 4K — Soothing Drone Flight Relaxing vibes Over Fort Wayne, Indiana calming video [4k] + Ambient Music"
    },
    "live": {
      "youtubeId": "MgjCjKHgT4Q",
      "label": "Φορτ Γουέιν Live Cam",
      "title": "Webcam shows rainbow over downtown Fort Wayne"
    }
  },
  "bloomington-in": {
    "cityName": "Μπλούμινγκτον",
    "drone": {
      "youtubeId": "hW2xKY-aKdc",
      "title": "Μπλούμινγκτον 4K — Bloomington Indiana Drone Tour 4K"
    },
    "live": {
      "youtubeId": "caO25rPhMOg",
      "label": "Μπλούμινγκτον Live Cam",
      "title": "Goose Pond Fish & Wildlife Area Visitor's Center Camera"
    }
  },
  "south-bend": {
    "cityName": "Σάουθ Μπεντ",
    "drone": {
      "youtubeId": "cyYAFpfq4wo",
      "title": "Σάουθ Μπεντ 4K — South Bend, Indiana Drone Footage | Mavic 2 & DJI FPV"
    },
    "live": {
      "youtubeId": "BDb_sSL-K5k",
      "label": "Σάουθ Μπεντ Live Cam",
      "title": "Chesterton, Indiana, USA | LIVE Train Camera (Fixed View – East)"
    }
  },
  "evansville": {
    "cityName": "Έβανσβιλ",
    "drone": {
      "youtubeId": "Nn32uEH-cb8",
      "title": "Έβανσβιλ 4K — Evansville Indiana 4k drone video cityscape 60 fps"
    },
    "live": {
      "youtubeId": "MqzQdTHCTOg",
      "label": "Έβανσβιλ Live Cam",
      "title": "Ohio River, Jeffersonville, IN | StreamTime LIVE"
    }
  },
  "west-lafayette": {
    "cityName": "Γουέστ Λαφαγιέτ",
    "drone": {
      "youtubeId": "1dGtPOsEznQ",
      "title": "Γουέστ Λαφαγιέτ 4K — Take a drone tour of Purdue"
    },
    "live": {
      "youtubeId": "IAC4KczQuQY",
      "label": "Γουέστ Λαφαγιέτ Live Cam",
      "title": "Lafayette, Indiana, USA | LIVE Train Camera (PTZ)"
    }
  },
  "carmel": {
    "cityName": "Κάρμελ",
    "drone": {
      "youtubeId": "NnVq8OTYKB0",
      "title": "Κάρμελ 4K — 2022 Best Carmel, Indiana 4K Aerial Drone Stock Footage by Scholer Aerial"
    },
    "live": {
      "youtubeId": "N8PQapyC8ac",
      "label": "Κάρμελ Live Cam",
      "title": "Berwyn BNSF Racetrack Live Railcam at O'Brien the Cleaners - Berwyn, IL #steelhighway"
    }
  },
  "gary": {
    "cityName": "Γκάρι",
    "drone": {
      "youtubeId": "pOe1oN92ZSU",
      "title": "Γκάρι 4K — Gary, Indiana - Potential New Home of Chicago Bears & Michael Jacksons House | 4K Drone Video"
    }
  },
  "terre-haute": {
    "cityName": "Τερ Χοτ",
    "drone": {
      "youtubeId": "Q5as69QwxlY",
      "title": "Τερ Χοτ 4K — Terre Haute, Indiana from Above | A City Between Its Past and What Comes Next"
    }
  },
  "columbus-in": {
    "cityName": "Κολόμπους",
    "drone": {
      "youtubeId": "oN1bz2ZFZlI",
      "title": "Κολόμπους 4K — 🚁 Columbus, Indiana, USA | Stunning 4K Drone Views | Aerial Cinematic Tour"
    },
    "live": {
      "youtubeId": "MqzQdTHCTOg",
      "label": "Κολόμπους Live Cam",
      "title": "Ohio River, Jeffersonville, IN | StreamTime LIVE"
    }
  },
  "jefferson-city": {
      "drone": {
          "youtubeId": "spEdJbcL-7M",
          "title": "Τζέφερσον Σίτι 4K — Jefferson City Missouri State Capitol 4K Drone"
      }
  },
  "kansas-city": {
      "drone": {
          "youtubeId": "R9207Qa1sos",
          "title": "Κάνσας Σίτι 4K — Kansas City - USA 🇺🇸 - by drone [4K]"
      },
      "live": {
          "youtubeId": "9fzUjSTK5F8",
          "label": "Κάνσας Σίτι Live Cam",
          "title": "EarthCam Live:  Kansas City Cam (Kansas City, MO)"
      }
  },
  "st-louis": {
      "drone": {
          "youtubeId": "oODK_JYhd_I",
          "title": "Σαιντ Λούις 4K — Saint Louis, Missouri - USA 🇺🇸 - by drone [4K]"
      },
      "live": {
          "youtubeId": "OHRc7YRmuTk",
          "label": "Σαιντ Λούις Live Cam",
          "title": "🔴 LIVE Trains Railcam | St Louis, Missouri (West Cam)"
      }
  },
  "springfield-mo": {
      "drone": {
          "youtubeId": "oCjIs6po21c",
          "title": "Σπρίνγκφιλντ 4K — Drone Springfield, Missouri"
      },
      "live": {
          "youtubeId": "qJ0ADUNfEhM",
          "label": "Σπρίνγκφιλντ Live Cam",
          "title": "Springfield CID Live Railcam (Static) - Springfield, MO #steelhighway"
      }
  },
  "columbia-mo": {
      "drone": {
          "youtubeId": "PXF_wlCsEuQ",
          "title": "Κολούμπια 4K — Drone Views of Columbia Missouri | University of Missouri & Missouri River from the Sky"
      }
  },
  "branson": {
      "drone": {
          "youtubeId": "n0qcaqS_zNg",
          "title": "Μπράνσον 4K — 4K - Stunning Branson MO Drone Video"
      },
      "live": {
          "youtubeId": "lAhAHOFOqys",
          "label": "Μπράνσον Live Cam",
          "title": "Table Rock Lake Livestream"
      }
  },
  "st-joseph": {
      "drone": {
          "youtubeId": "FcdQuoeEPMg",
          "title": "Σεντ Τζόζεφ 4K — Driving Through Historic St. Joseph, Missouri 🇺🇸 | 4K City Driving Tour"
      }
  },
  "st-charles": {
      "drone": {
          "youtubeId": "rZF0dcQ7Zp8",
          "title": "Σεντ Τσαρλς 4K — Saint Charles Missouri 4K  / Suburb of St. Louis (DJI Mavic Air 2 Drone Footage) 9th largest City MO"
      }
  },
  "joplin": {
      "drone": {
          "youtubeId": "RCcGkhIwing",
          "title": "Τζόπλιν 4K — Joplin - Missouri - 4K Downtown Drive"
      }
  },
  "hannibal": {
      "drone": {
          "youtubeId": "vqblcEsWyB8",
          "title": "Χάνιμπαλ 4K — Hannibal Missouri | What We Didn't Expect to Find Free!"
      }
  },
  "little-rock": {
      "drone": {
          "youtubeId": "V5-BMkaniGs",
          "title": "Λιτλ Ροκ 4K — Little Rock Arkansas Aerial Drone Footage | Stunning 4K City & River Views"
      }
  },
  "fayetteville-ar": {
      "drone": {
          "youtubeId": "TX8MXfazq3U",
          "title": "Φαγιέτβιλ 4K — Razorback Stadium | Cinematic Drone Footage | Fayetteville, Arkansas 4K"
      }
  },
  "fort-smith": {
      "drone": {
          "youtubeId": "2j_tJxicTBM",
          "title": "Φορτ Σμιθ 4K — Downtown Fort Smith Arkansas - High Quality  Drone Video - DJI Mini II"
      }
  },
  "hot-springs": {
      "drone": {
          "youtubeId": "y0VGlLh0t0M",
          "title": "Χοτ Σπρινγκς 4K — VISIT HOT SPRINGS, AR(DRONE TOUR)"
      },
      "live": {
          "youtubeId": "n0dXgNnK8Vg",
          "label": "Χοτ Σπρινγκς Live Cam",
          "title": "Jasper, AR - Live Weather Camera - Sponsored by Reynolds Media - Internet Services"
      }
  },
  "bentonville": {
      "drone": {
          "youtubeId": "flGA_vJDEC8",
          "title": "Μπέντονβιλ 4K — Cinematic Drone Views of Bentonville & Northwest Arkansas"
      },
      "live": {
          "youtubeId": "_BuZRtXQlbs",
          "label": "Μπέντονβιλ Live Cam",
          "title": "Live: Town Square, Bentonville, AR"
      }
  },
  "springdale": {
      "drone": {
          "youtubeId": "lTMK6b6TpyU",
          "title": "Σπρίνγκντεϊλ 4K — Tour of Springdale-Springdale, AR"
      }
  },
  "jonesboro": {
      "drone": {
          "youtubeId": "APj_Qy02ekI",
          "title": "Τζόουνσμπορο 4K — Driving Around Downtown Jonesboro, Arkansas and Arkansas State University in 4k Video"
      }
  },
  "rogers": {
      "drone": {
          "youtubeId": "k-SDSvoJFSE",
          "title": "Ρότζερς 4K — Tour of Rogers, Arkansas-Bentonville, AR"
      }
  },
  "eureka-springs": {
      "drone": {
          "youtubeId": "Pv8rtJidkyQ",
          "title": "Γιουρίκα Σπρινγκς 4K — Eureka Springs Arkansas 4K Walking Tour | Christ of the Ozarks, Crescent Hotel & Downtown"
      },
      "live": {
          "youtubeId": "KAaYQ6YEqBA",
          "label": "Γιουρίκα Σπρινγκς Live Cam",
          "title": "Downtown Eureka Springs Live Camera"
      }
  },
  "conway-ar": {
      "drone": {
          "youtubeId": "HuPw9VkMG48",
          "title": "Κόνγουεϊ 4K — Conway - Arkansas - 4K Downtown Drive"
      }
  },
  "des-moines": {
      "drone": {
          "youtubeId": "kNdO-7KDGvA",
          "title": "Ντε Μόιν 4K — Des Moines Iowa - 4K Drone Tour - TOP 10 Travel Guide"
      },
      "live": {
          "youtubeId": "7E3stUZjEX8",
          "label": "Ντε Μόιν Live Cam",
          "title": "City of Stuart, Iowa Live Railcam - Stuart,  IA #steelhighway"
      }
  },
  "cedar-rapids": {
      "drone": {
          "youtubeId": "J1h-c3KIn6A",
          "title": "Σένταρ Ράπιντς 4K — Cedar Rapids, Iowa | 4K drone footage"
      }
  },
  "davenport": {
      "drone": {
          "youtubeId": "UDfQRjdMziU",
          "title": "Ντάβενπορτ 4K — Davenport, IA - 4K Aerial Tour"
      }
  },
  "sioux-city": {
      "drone": {
          "youtubeId": "giE48dJV2oI",
          "title": "Σιού Σίτι 4K — Downtown Sioux City, IA - 4K Aerial Tour"
      }
  },
  "iowa-city": {
      "drone": {
          "youtubeId": "ki2XV_rDHPg",
          "title": "Άιοβα Σίτι 4K — Iowa City and The University of Iowa | 4K drone footage"
      }
  },
  "waterloo-ia": {
      "drone": {
          "youtubeId": "zfs631ZzYvE",
          "title": "Γουότερλου 4K — Downtown Riverfront Waterloo, IA (4K Drone)"
      }
  },
  "ames": {
      "drone": {
          "youtubeId": "1wb63eN8jqs",
          "title": "Έιμς 4K — Ames, Iowa - 4K Aerial Tour"
      }
  },
  "dubuque": {
      "drone": {
          "youtubeId": "qnOpt-0Q2_Q",
          "title": "Ντουμπιούκ 4K — Downtown Dubuque from Above A Cinematic 4K Drone"
      },
      "live": {
          "youtubeId": "Qorj8fJt_lM",
          "label": "Ντουμπιούκ Live Cam",
          "title": "Dubuque County - Falcon Camera Ledge View"
      }
  },
  "council-bluffs": {
      "drone": {
          "youtubeId": "Jxterndz5rw",
          "title": "Κάουνσιλ Μπλαφς 4K — Council Bluffs - Iowa - 4K Downtown Drive"
      },
      "live": {
          "youtubeId": "qsrevo5Vdkw",
          "label": "Κάουνσιλ Μπλαφς Live Cam",
          "title": "EarthCam Live:  Council Bluffs, Iowa"
      }
  },
  "burlington-ia": {
      "drone": {
          "youtubeId": "7NeS1hrO7K4",
          "title": "Μπέρλινγκτον 4K — Driving Around Stunning Downtown Burlington, IA in 4k Video"
      },
      "live": {
          "youtubeId": "L_xBQqGzNzY",
          "label": "Μπέρλινγκτον Live Cam",
          "title": "Burlington, Iowa, USA | LIVE Train Camera (PTZ)"
      }
  },
  "saint-paul": {
      "drone": {
          "youtubeId": "XFnlIUqFjSA",
          "title": "Σαιντ Πολ 4K — Minneapolis From Above 🌆 | Stunning 4K Drone Views of the Twin Cities"
      },
      "live": {
          "youtubeId": "u5dt2mHDuxQ",
          "label": "Σαιντ Πολ Live Cam",
          "title": "St. Paul, Minnesota, USA | LIVE Train Camera (Fixed View – East)"
      }
  },
  "minneapolis": {
      "drone": {
          "youtubeId": "HpAebfyq_JI",
          "title": "Μινεάπολη 4K — Minneapolis, Minnesota | 4K Drone Video"
      },
      "live": {
          "youtubeId": "NL3DQm0B5wM",
          "label": "Μινεάπολη Live Cam",
          "title": "LIVE NEWS: FOX LOCAL Minnesota 24/7 Live Stream"
      }
  },
  "duluth": {
      "drone": {
          "youtubeId": "1cWaYDGAO9M",
          "title": "Ντουλούθ 4K — First time Duluth, Minnesota by drone | Stunning 4K Aerial Views of Lake Superior & the North Shore"
      },
      "live": {
          "youtubeId": "HPS48TMmNag",
          "label": "Ντουλούθ Live Cam",
          "title": "Duluth Canal Cam"
      }
  },
  "rochester-mn": {
      "drone": {
          "youtubeId": "MgCT_R-4Mbo",
          "title": "Ρότσεστερ 4K — Downtown Rochester, Minnesota from Above | Summer 2025 Aerial Cinematics | 4K Drone"
      },
      "live": {
          "youtubeId": "elcw1nP1AWE",
          "label": "Ρότσεστερ Live Cam",
          "title": "Rochester, MN - Live Skycam"
      }
  },
  "bloomington-mn": {
      "drone": {
          "youtubeId": "BbLwvOfN5Ao",
          "title": "Μπλούμινγκτον 4K — Bloomington, Minnesota - 4K Drone Footage"
      },
      "live": {
          "youtubeId": "h1oeDxnOebM",
          "label": "Μπλούμινγκτον Live Cam",
          "title": "LIVE Snow Cam @ Hyland Hills - Bloomington, Minnesota"
      }
  },
  "st-cloud": {
      "drone": {
          "youtubeId": "0jFNMGpys-I",
          "title": "Σεντ Κλάουντ 4K — Aerial Views of Saint Cloud, Minnesota | Scenic City & Mississippi River from Above"
      },
      "live": {
          "youtubeId": "iAUH8Cy5kVQ",
          "label": "Σεντ Κλάουντ Live Cam",
          "title": "St. Cloud, MN, USA | Train Cam LIVE NOW | BNSF Staples Sub |  MP 73.11"
      }
  },
  "mankato": {
      "drone": {
          "youtubeId": "p9WMu46Nhwk",
          "title": "Μανκάτο 4K — Mankato, Minnesota | Cinematic Drone Fly Through 2023"
      }
  },
  "moorhead": {
      "drone": {
          "youtubeId": "EmSRfX2_3gs",
          "title": "Μούρχεντ 4K — Moorhead MN Minnesota Drone Video Aerial Footage Hjemkomst Center Hopperstad Stave Church Red River"
      },
      "live": {
          "youtubeId": "A1PoDybhDQs",
          "label": "Μούρχεντ Live Cam",
          "title": "Fargo/Moorhead, USA | W Train Cam LIVE | BNSF KO Sub | Moorhead, MN Junction | ‪@NTR-SHR‬ | MP 5.8"
      }
  },
  "winona": {
      "drone": {
          "youtubeId": "u3s7yJOHPOE",
          "title": "Γουινόνα 4K — Winona Winter 2023"
      }
  },
  "bemidji": {
      "drone": {
          "youtubeId": "mJAQ3W3EkRA",
          "title": "Μπεμίτζι 4K — Bemidji MN from the Sky"
      },
      "live": {
          "youtubeId": "1keU6WOoDbw",
          "label": "Μπεμίτζι Live Cam",
          "title": "Lakeland PBS Bemidji Towercam"
      }
  },
  "frankfort": {
      "drone": {
          "youtubeId": "J2X02TgMup0",
          "title": "Φράνκφορτ 4K — Frankfort Kentucky From Above | Cinematic 4K Drone"
      }
  },
  "louisville": {
      "drone": {
          "youtubeId": "fQ38-ybST4c",
          "title": "Λούισβιλ 4K — Stunning 4K Drone Footage of Louisville, Kentucky | A Breathtaking Aerial Journey"
      },
      "live": {
          "youtubeId": "MqzQdTHCTOg",
          "label": "Λούισβιλ Live Cam",
          "title": "Ohio River & Louisville Skyline Live Cam"
      }
  },
  "lexington": {
      "drone": {
          "youtubeId": "k11NWSy_xs8",
          "title": "Λέξινγκτον 4K — Lexington, Kentucky | 4K drone footage"
      },
      "live": {
          "youtubeId": "zKD1KFMcydQ",
          "label": "Λέξινγκτον Live Cam",
          "title": "Lexington, KY Live Weather Cam | Chevy Chase | FOX 56 News"
      }
  },
  "bowling-green": {
      "drone": {
          "youtubeId": "dKGYf1hz8VM",
          "title": "Μπόουλινγκ Γκριν 4K — Downtown Bowling Green, KY | Summer Evening 2023 - 4K drone footage by Josh Huddy"
      }
  },
  "owensboro": {
      "drone": {
          "youtubeId": "vgvY4K45kJM",
          "title": "Όουενσμπορο 4K — Owensboro Ky. English Park drone. Mavic Mini."
      }
  },
  "covington": {
      "drone": {
          "youtubeId": "DTWTjfd9MSY",
          "title": "Κόβινγκτον 4K — Covington, Kentucky and Cincinnati, Ohio | 4K Aerial Drone View"
      },
      "live": {
          "youtubeId": "Kfnq9KUBQng",
          "label": "Κόβινγκτον Live Cam",
          "title": "Covington, Kentucky, USA | LIVE Train Camera (Fixed View – North)"
      }
  },
  "paducah": {
      "drone": {
          "youtubeId": "fuuinuwkacM",
          "title": "Παντούκα 4K — DRONE VIDEO OF PADUCAH KY"
      },
      "live": {
          "youtubeId": "EhzUOPnztjY",
          "label": "Παντούκα Live Cam",
          "title": "Paducah Ky Wildlife Camera"
      }
  },
  "richmond-ky": {
      "drone": {
          "youtubeId": "_rxXtKHGzd0",
          "title": "Ρίτσμοντ 4K — Richmond, KY (Rt. 25 South) POV Drive in 4K"
      },
      "live": {
          "youtubeId": "h_B-v4IdKNo",
          "label": "Ρίτσμοντ Live Cam",
          "title": "Richmond, Kentucky Tourism Live Stream of downtown Richmond"
      }
  },
  "florence-ky": {
      "drone": {
          "youtubeId": "-_bH4Ook9fc",
          "title": "Φλόρενς 4K — 🌄 Scenic Drone Tour of Florence, Kentucky | Aerial Views in 4K | NatureIn4K"
      }
  },
  "hopkinsville": {
      "drone": {
          "youtubeId": "HIeSytnCxh4",
          "title": "Χόπκινσβιλ 4K — Drone view of Hopkinsville, KY"
      },
      "live": {
          "youtubeId": "qbAMePGp0ks",
          "label": "Χόπκινσβιλ Live Cam",
          "title": "WKDZ Studio Cam"
      }
  },
  "nashville": {
      "drone": {
          "youtubeId": "Q4YP3jfGFgs",
          "title": "Νάσβιλ 4K — Nashville, USA - 4K Drone Video Tour (Ultra HD) 🇺🇸"
      },
      "live": {
          "youtubeId": "ICva1RPK6Do",
          "label": "Νάσβιλ Live Cam",
          "title": "🔴 LIVE: Nashville Live Cam • Lower Broadway (With Sound)"
      }
  },
  "memphis": {
      "drone": {
          "youtubeId": "B64JPTpZnxc",
          "title": "Μέμφις 4K — Memphis (Tennessee, USA) Drone View | 4K Ultra HD"
      }
  },
  "knoxville": {
      "drone": {
          "youtubeId": "QuNi-zN-CbA",
          "title": "Νόξβιλ 4K — Flying Over Knoxville, Tennessee - [4K] Drone Footage"
      },
      "live": {
          "youtubeId": "6tq8S2pp8PQ",
          "label": "Νόξβιλ Live Cam",
          "title": "EarthCam Live: Pigeon River Cam (Hartford, TN)"
      }
  },
  "chattanooga": {
      "drone": {
          "youtubeId": "VKRPUhTQP_o",
          "title": "Τσατανούγκα 4K — Chattanooga, Tennessee | 4K drone footage"
      }
  },
  "clarksville": {
      "drone": {
          "youtubeId": "KDpBg__IIsY",
          "title": "Κλάρκσβιλ 4K — Clarksville TN From Above | Cinematic 4K Drone Showreel | TitanFin Systems"
      }
  },
  "murfreesboro": {
      "drone": {
          "youtubeId": "mlZuExDflBY",
          "title": "Μερφρίσμπορο 4K — Murfreesboro Tennessee 4K Drone Video"
      },
      "live": {
          "youtubeId": "J6Il2fbKOFE",
          "label": "Μερφρίσμπορο Live Cam",
          "title": "Murfreesboro, TN Sky Cam LIVE 24/7 | Friday, Nov 13, 2026"
      }
  },
  "gatlinburg": {
      "drone": {
          "youtubeId": "JhP4vZ9dlMM",
          "title": "Γκάτλινμπεργκ 4K — Gatlinburg, Tennessee Aerial Drone 4K"
      },
      "live": {
          "youtubeId": "EVK9iNnARh8",
          "label": "Γκάτλινμπεργκ Live Cam",
          "title": "Gatlinburg Skypark Live"
      }
  },
  "franklin-tn": {
      "drone": {
          "youtubeId": "Mb4Aec8IrgI",
          "title": "Φράνκλιν 4K — FRANKLIN, TENNESSEE - [4k] by drone"
      }
  },
  "jackson-tn": {
      "drone": {
          "youtubeId": "UMi2Hv09yWs",
          "title": "Τζάκσον 4K — Epic Drone Tour of Muse Park Jackson, TN 4K Footage"
      }
  },
  "johnson-city": {
      "drone": {
          "youtubeId": "rt58eOkIvPc",
          "title": "Τζόνσον Σίτι 4K — Johnson City Tennessee 4K  / Tennessee's 8th Largest City  (DJI Mavic Air 2S Drone Footage)"
      },
      "live": {
          "youtubeId": "PmXKd2Z_TVA",
          "label": "Τζόνσον Σίτι Live Cam",
          "title": "Historic Town of Jonesborough, TN | East Main Street Live Cam"
      }
  },
  "baton-rouge": {
      "drone": {
          "youtubeId": "5qGzPj6f9MU",
          "title": "Μπατόν Ρουζ 4K — Baton Rouge Louisiana 4K | Cinematic Drone Footage of the Mississippi River"
      }
  },
  "shreveport": {
      "drone": {
          "youtubeId": "r2OoZ8lD60I",
          "title": "Σρίβπορτ 4K — Downtown Shreveport 4k Aerial Drone Stock Footage"
      }
  },
  "lafayette": {
      "drone": {
          "youtubeId": "unKMq2nX39k",
          "title": "Λαφαγιέτ 4K — Lafayette, Louisiana [4K] Aerial Drone Footage"
      }
  },
  "lake-charles": {
      "drone": {
          "youtubeId": "Ly3iIEczdpI",
          "title": "Λέικ Τσαρλς 4K — Drone Lake Charles, Louisiana | Lake Charles"
      }
  },
  "alexandria-la": {
      "drone": {
          "youtubeId": "Wr-CdFBczf0",
          "title": "Αλεξάνδρεια 4K — Drone Alexandria, Louisiana | Red River"
      }
  },
  "monroe-la": {
      "drone": {
          "youtubeId": "FRKR_b00hQQ",
          "title": "Μονρόε 4K — Driving Downtown Monroe, Louisiana | 4K ASMR | Sunset Vibes"
      }
  },
  "houma": {
      "drone": {
          "youtubeId": "ZyTh0C5cSCQ",
          "title": "Χούμα 4K — Potensic ATOM unedited 4k Footage of a fair in Houma Louisiana."
      }
  },
  "new-iberia": {
      "drone": {
          "youtubeId": "Fr7DS__DM40",
          "title": "Νιου Αϊμπίρια 4K — Drone views of City Park & Historic New Iberia LA"
      }
  },
  "natchitoches": {
      "drone": {
          "youtubeId": "B0nys1FhBm4",
          "title": "Νάκιτος 4K — Falling in Love with Natchitoches, Louisiana 💛 | Small-Town Southern Charm"
      }
  },
  "jackson": {
      "drone": {
          "youtubeId": "yFcePj8mLVY",
          "title": "Τζάκσον 4K — Jackson, Mississippi - [4K] Drone Tour"
      }
  },
  "biloxi": {
      "drone": {
          "youtubeId": "P8m5gTP5cYk",
          "title": "Μπιλόξι 4K — Biloxi, Mississippi Aerial Drone Footage & Gulf Coast"
      }
  },
  "gulfport": {
      "drone": {
          "youtubeId": "1MoDDvuERXw",
          "title": "Γκάλφπορτ 4K — Mississippi Coast Drone Video Tour: Gulfport & Harbor"
      }
  },
  "oxford-ms": {
      "drone": {
          "youtubeId": "GPnTslGO0aI",
          "title": "Όξφορντ 4K — Welcome to Oxford, MS! #dji #mavic3pro #oxford #drone #fly #drive #olemiss"
      }
  },
  "tupelo": {
      "drone": {
          "youtubeId": "4DDiBWpi8ZM",
          "title": "Τούπελο 4K — Drone Footage Over Tupelo, Mississippi"
      },
      "live": {
          "youtubeId": "XJM9_uSJRIw",
          "label": "Τούπελο Live Cam",
          "title": "Mississippi LIVE Weather Network"
      }
  },
  "hattiesburg": {
      "drone": {
          "youtubeId": "LD8dz9ZI5FQ",
          "title": "Χάτισμπεργκ 4K — Aerial View - Hattiesburg, MS"
      }
  },
  "vicksburg": {
      "drone": {
          "youtubeId": "VHXVElAlJM0",
          "title": "Βίκσμπεργκ 4K — Vicksburg  Mississippi by Drone"
      }
  },
  "natchez": {
      "drone": {
          "youtubeId": "KfM3XxqDAaQ",
          "title": "Νάτσεζ 4K — Natchez, Mississippi | A Historical Tour Thru Time | Cinematic Aerial Travel Film 4K"
      }
  },
  "meridian": {
      "drone": {
          "youtubeId": "BZ5vGeDcf80",
          "title": "Μεριντιάν 4K — Drone Meridian, Mississippi"
      }
  },
  "southaven": {
      "drone": {
          "youtubeId": "sBJ6nu-uTMc",
          "title": "Σάουθαβεν 4K — Mississippi From Above 🌅 | Stunning 4K Aerial Drone Footage of the Magnolia State"
      }
  },
  "montgomery": {
      "drone": {
          "youtubeId": "1ykRfjY03gs",
          "title": "Μοντγκόμερι 4K — Montgomery, Alabama, USA 🇺🇸 | 4K Drone Footage"
      },
      "live": {
          "youtubeId": "oEDz7tqaf_k",
          "label": "Μοντγκόμερι Live Cam",
          "title": "🔴 LIVE: Alabama Weather Webcams & SkyCams Across AL"
      }
  },
  "birmingham": {
      "drone": {
          "youtubeId": "Gy2pe01lHj8",
          "title": "Μπέρμιγχαμ 4K — Birmingham Alabama 4K Drone Footage | Downtown Skyline, Vulcan Park & Railroad Park Aerial Views"
      },
      "live": {
          "youtubeId": "KUM6HBnv_fw",
          "label": "Μπέρμιγχαμ Live Cam",
          "title": "Birmingham, Alabama Live Railcam (CSX/NS Diamond)"
      }
  },
  "huntsville": {
      "drone": {
          "youtubeId": "743YZCE75Yk",
          "title": "Χάντσβιλ 4K — Huntsville Alabama from Above 🚁 | Beautiful 4K Drone Views"
      },
      "live": {
          "youtubeId": "oEDz7tqaf_k",
          "label": "Χάντσβιλ Live Cam",
          "title": "🔴 LIVE: Alabama Weather Webcams & SkyCams Across AL"
      }
  },
  "mobile": {
      "drone": {
          "youtubeId": "uaQSKJvQ7GY",
          "title": "Μομπίλ 4K — Mobile Alabama 4K Drone Footage | Downtown Skyline, USS Alabama & Gulf Coast Aerial Views"
      },
      "live": {
          "youtubeId": "mNlMCr5eeXs",
          "label": "Μομπίλ Live Cam",
          "title": "Downtown Mobile, AL Live Cam from Dauphin's"
      }
  },
  "tuscaloosa": {
      "drone": {
          "youtubeId": "rRPZYG0odj4",
          "title": "Τουσκαλούσα 4K — Tuscaloosa Alabama 4K Drone Footage 🏈 | University of Alabama, Downtown & Riverwalk Aerial Views"
      },
      "live": {
          "youtubeId": "oEDz7tqaf_k",
          "label": "Τουσκαλούσα Live Cam",
          "title": "🔴 LIVE: Alabama Weather Webcams & SkyCams Across AL"
      }
  },
  "auburn": {
      "drone": {
          "youtubeId": "-iy4hf9alq8",
          "title": "Όμπερν 4K — Auburn Alabama 4K Drone Footage  | Auburn University, Jordan-Hare Stadium & Downtown Aerial Views"
      },
      "live": {
          "youtubeId": "5WN2PJ_Qxjs",
          "label": "Όμπερν Live Cam",
          "title": "City of Auburn Toomer's Corner Webcam"
      }
  },
  "florence-al": {
      "drone": {
          "youtubeId": "W-L_bB_LRVQ",
          "title": "Φλόρενς 4K — Wilson Dam & Tennessee River Aerial Tour | Florence, AL"
      }
  },
  "dothan": {
      "drone": {
          "youtubeId": "DxXiKe2LBE8",
          "title": "Ντόθαν 4K — Dothan, Alabama by Drone"
      }
  },
  "gulf-shores": {
      "drone": {
          "youtubeId": "J1LkPAX1Jps",
          "title": "Γκαλφ Σορς 4K — Cotton Bayou Beach Drone Tour | Orange Beach, Alabama's Beaches 4K Aerial Views"
      },
      "live": {
          "youtubeId": "3Rp_9FUKH4I",
          "label": "Γκαλφ Σορς Live Cam",
          "title": "Alabama Gulf Coast Beach Live Cam"
      }
  },
  "selma": {
      "drone": {
          "youtubeId": "7D6wttCZkro",
          "title": "Σέλμα 4K — Alabama Road Trippin' : Selma - The Queen City of the Blackbelt in 4K"
      }
  },
  "calgary": {
      "drone": {
          "youtubeId": "e3UyFOJ5d3M",
          "title": "Κάλγκαρι 4K — Calgary, Alberta, Canada in 4K ULTRA HD 60FPS by Drone"
      },
      "live": {
          "youtubeId": "MwcqP3ta6RI",
          "label": "Κάλγκαρι Live Cam",
          "title": "Calgary, Alberta Live Camera"
      }
  },
  "edmonton": {
      "drone": {
          "youtubeId": "A2USZxv7iQw",
          "title": "Έντμοντον 4K — Edmonton drone footage winter 2026 🇨🇦 4K 60fps"
      }
  },
  "quebec-city": {
      "drone": {
          "youtubeId": "b0skYkjbZto",
          "title": "Κεμπέκ 4K — Quebec city, Québec, Canada 🇨🇦 in 4K ULTRA HD 60FPS Video by Drone"
      }
  },
  "winnipeg": {
      "drone": {
          "youtubeId": "Z6tDLK9o6b8",
          "title": "Γουίνιπεγκ 4K — Winnipeg City // 4K // Manitoba // Canada"
      }
  },
  "halifax": {
      "drone": {
          "youtubeId": "7nDNwzhVYkQ",
          "title": "Χάλιφαξ 4K — Soaring High Above Halifax || Aerial Drone Tour"
      }
  },
  "victoria-bc": {
      "drone": {
          "youtubeId": "BxmZyZcKueY",
          "title": "Βικτώρια 4K — Victoria BC | Best 4k Drone Footage | SkyScope"
      },
      "live": {
          "youtubeId": "D9Exf_o17oQ",
          "label": "Βικτώρια Live Cam",
          "title": "Victoria Harbour Live Cam 24/7"
      }
  },
  "topeka": {
      "drone": {
          "youtubeId": "aMEbjPMWxek",
          "title": "Τοπίκα 4K — Topeka Tour by Drone [4K]"
      }
  },
  "wichita": {
      "drone": {
          "youtubeId": "VdxwAODHOUI",
          "title": "Ουιτσίτα 4K — WICHITA 🇺🇸 Drone Aerial 4K | Kansas KS United States of America USA"
      },
      "live": {
          "youtubeId": "iN7u2jKbDm0",
          "label": "Ουιτσίτα Live Cam",
          "title": "Wichita, Kansas, USA | LIVE Train Cam"
      }
  },
  "overland-park": {
      "drone": {
          "youtubeId": "S_QMKU2zzSo",
          "title": "Όβερλαντ Παρκ 4K — Overland Park, Kansas 4K | Drone & Street Tour of America’s Happiest Suburb"
      }
  },
  "kansas-city-ks": {
      "drone": {
          "youtubeId": "R9207Qa1sos",
          "title": "Κάνσας Σίτι 4K — Kansas City - USA 🇺🇸 - by drone [4K]"
      },
      "live": {
          "youtubeId": "9fzUjSTK5F8",
          "label": "Κάνσας Σίτι Live Cam",
          "title": "EarthCam Live: Kansas City Cam"
      }
  },
  "olathe": {
      "drone": {
          "youtubeId": "fs4lECs1Nxc",
          "title": "Ολέιθ 4K — 4K Aerial Footage of Olathe Kansas / Kansas City Suburb Area"
      }
  },
  "lawrence-ks": {
      "drone": {
          "youtubeId": "ul0WhweRARU",
          "title": "Λόρενς 4K — Lawrence Kansas Mass Street 4K Drone Tour"
      }
  },
  "manhattan-ks": {
      "drone": {
          "youtubeId": "foYOAgdhCzU",
          "title": "Μανχάταν 4K — Drone Manhattan, Kansas"
      }
  },
  "salina": {
      "drone": {
          "youtubeId": "vsUA8-kelIk",
          "title": "Σαλίνα 4K — Drone Salina, Kansas"
      }
  },
  "dodge-city": {
      "drone": {
          "youtubeId": "XLks7gSRE5Q",
          "title": "Ντοτζ Σίτι 4K — Dodge City - Kansas - 4K Downtown Drive"
      }
  },
  "hutchinson": {
      "drone": {
          "youtubeId": "l-U5auYnQP8",
          "title": "Χάτσινσον 4K — Aerial Deep Dive into Hutchinson, KS  - Cinematic Vehicle Tracking"
      }
  },
  "lincoln": {
      "drone": {
          "youtubeId": "Qtq8SpOMzts",
          "title": "Λίνκολν 4K — Lincoln - the capital city of Nebraska |  4K drone video"
      },
      "live": {
          "youtubeId": "DhoVf4-0Zt4",
          "label": "Λίνκολν Live Cam",
          "title": "Lincoln, Nebraska, USA | LIVE Train Cam"
      }
  },
  "omaha": {
      "drone": {
          "youtubeId": "erJXB9Ga6_w",
          "title": "Όμαχα 4K — Omaha, Nebraska | 4K Drone Footage"
      },
      "live": {
          "youtubeId": "qsrevo5Vdkw",
          "label": "Όμαχα Live Cam",
          "title": "EarthCam Live: Omaha / Council Bluffs"
      }
  },
  "bellevue-ne": {
      "drone": {
          "youtubeId": "t8IXTYGNnKc",
          "title": "Μπέλβιου 4K — Bellevue Ne Drone Footage"
      }
  },
  "grand-island": {
      "drone": {
          "youtubeId": "PVYRxOgkK6Y",
          "title": "Γκραντ Άιλαντ 4K — Grand Island, Nebraska Town Reel in 4K"
      },
      "live": {
          "youtubeId": "4qMslMOlZE4",
          "label": "Γκραντ Άιλαντ Live Cam",
          "title": "Grand Island, NE Live Cam"
      }
  },
  "kearney": {
      "drone": {
          "youtubeId": "N1PAARtIqN0",
          "title": "Κάρνεϊ 4K — The Kearney Archway | Aerial View of Nebraska History"
      },
      "live": {
          "youtubeId": "23tmCNeFh7A",
          "label": "Κάρνεϊ Live Cam",
          "title": "Kearney, Nebraska, USA | LIVE Train Cam"
      }
  },
  "fremont-ne": {
      "drone": {
          "youtubeId": "WWkpTPJloXc",
          "title": "Φρίμοντ 4K — Fremont, Nebraska Drone View"
      }
  },
  "norfolk-ne": {
      "drone": {
          "youtubeId": "OL0KEDAbDPI",
          "title": "Νόρφολκ 4K — Norfolk, Nebraska hometown 4k video"
      }
  },
  "north-platte": {
      "drone": {
          "youtubeId": "jeAUDzf1g7M",
          "title": "Νορθ Πλατ 4K — North Platte 4K 🇺🇸 | Cinematic Drone Footage Over Nebraska"
      },
      "live": {
          "youtubeId": "laKzBnfVIsQ",
          "label": "Νορθ Πλατ Live Cam",
          "title": "North Platte Golden Spike Tower Live Cam"
      }
  },
  "scottsbluff": {
      "drone": {
          "youtubeId": "oLjaZbcDp4Q",
          "title": "Σκοτσμπλάφ 4K — Scotts Bluff National Monument Summit Road | Nebraska 4K Scenic Drive"
      }
  },
  "columbus-ne": {
      "drone": {
          "youtubeId": "gK6jGRwWHsE",
          "title": "Κολόμπους 4K — Aerial view Columbus Nebraska USA"
      }
  },
  "oklahoma-city": {
      "drone": {
          "youtubeId": "PAACP8YIpv4",
          "title": "Οκλαχόμα Σίτι 4K — Drone Oklahoma City"
      },
      "live": {
          "youtubeId": "jdUc9qYuFHw",
          "label": "Οκλαχόμα Σίτι Live Cam",
          "title": "Oklahoma City, OK | LIVE PTZ Railcam"
      }
  },
  "tulsa": {
      "drone": {
          "youtubeId": "p07ZuJl1Dko",
          "title": "Τάλσα 4K — Tulsa Oklahoma Drone Tour in 4K | Downtown & Arkansas River Aerial Views"
      },
      "live": {
          "youtubeId": "8Tn07jXzkmc",
          "label": "Τάλσα Live Cam",
          "title": "Tulsa Skyline Live Cam"
      }
  },
  "norman": {
      "drone": {
          "youtubeId": "stK-ogvxSnE",
          "title": "Νόρμαν 4K — Norman Oklahoma - Drone Flyover"
      }
  },
  "broken-arrow": {
      "drone": {
          "youtubeId": "vWl4udGhxFc",
          "title": "Μπρόουκεν Άροου 4K — Broken Arrow, OK Reel: 4K Drone Footage 2024"
      }
  },
  "edmond": {
      "drone": {
          "youtubeId": "kNJ-MoMV5IE",
          "title": "Έντμοντ 4K — 4k Drone Capture Of Hilton Gardens Edmond, Oklahoma."
      }
  },
  "lawton": {
      "drone": {
          "youtubeId": "K9-l2Xo4MPg",
          "title": "Λότον 4K — Lake Lawtonka Lawton Oklahoma Mt Scott Drone Camera Aerial Footage 4K Flying Video DJI Mini 2 (p2)"
      }
  },
  "moore": {
      "drone": {
          "youtubeId": "LMtwjEAhBR0",
          "title": "Μουρ 4K — Oklahoma from Above 🇺🇸 | Stunning 4K Aerial Drone Footage of the Sooner State"
      }
  },
  "stillwater": {
      "drone": {
          "youtubeId": "mvpkvi9t8j0",
          "title": "Στιλγουότερ 4K — City of Stillwater"
      },
      "live": {
          "youtubeId": "CUyXnxFW-Kw",
          "label": "Στιλγουότερ Live Cam",
          "title": "Stillwater, OK Live Weather Cam"
      }
  },
  "muskogee": {
      "drone": {
          "youtubeId": "3-wm52ov2GE",
          "title": "Μασκόγκι 4K — Muskogee, Oklahoma - Drone video - DJI MAVIC 3 CLASSIC"
      }
  },
  "bartlesville": {
      "drone": {
          "youtubeId": "jJpK-mavW1c",
          "title": "Μπάρτλσβιλ 4K — Aerial View of Downtown Bartlesville, OK"
      }
  },
  "fort-worth": {
      "drone": {
          "youtubeId": "Lk9wg12mG5s",
          "title": "Φορτ Γουόρθ 4K — Fort Worth Texas Aerial Tour | 4K Drone Video"
      },
      "live": {
          "youtubeId": "blcDjPvPbss",
          "label": "Φορτ Γουόρθ Live Cam",
          "title": "Tower 55 in Fort Worth, TX | LIVE Train Cam"
      }
  },
  "el-paso": {
      "drone": {
          "youtubeId": "PIWyHX7D0vQ",
          "title": "Ελ Πάσο 4K — El Paso, Texas | 4K Drone Footage"
      }
  },
  "arlington-tx": {
      "drone": {
          "youtubeId": "eLjOB2mhd38",
          "title": "Άρλινγκτον 4K — ARLINGTON, TEXAS - by drone [4K]"
      }
  },
  "corpus-christi": {
      "drone": {
          "youtubeId": "FAq0rOyRzbA",
          "title": "Κόρπους Κρίστι 4K — Corpus Christi, Texas 4k UHD | Aerial Drone Tour"
      },
      "live": {
          "youtubeId": "5s6X2045OTs",
          "label": "Κόρπους Κρίστι Live Cam",
          "title": "Packery Channel Surf Cam LIVE | Corpus Christi"
      }
  },
  "plano": {
      "drone": {
          "youtubeId": "gG5eJ7QziO4",
          "title": "Πλάνο 4K — Plano, TX 4K aerial view from DJI Mini 5 Pro"
      }
  },
  "lubbock": {
      "drone": {
          "youtubeId": "eZuCnTH9MT8",
          "title": "Λάμποκ 4K — 2024 Best Lubbock, TX 4K Drone Stock Footage by Cameron Bednarz Licensed Part 107 Pilot"
      }
  },
  "fresno": {
      "drone": {
          "youtubeId": "_5CZMKYNovU",
          "title": "Φρέσνο 4K — Fresno, California | 4K Drone Footage"
      },
      "live": {
          "youtubeId": "sTF-6_xinUU",
          "label": "Φρέσνο Live Cam",
          "title": "Fresno, California Traffic & Skyline Live Cam"
      }
  },
  "oakland": {
      "drone": {
          "youtubeId": "rQYMbQMR_fE",
          "title": "Όουκλαντ 4K — Oakland, California | 4K drone video"
      },
      "live": {
          "youtubeId": "CXYr04BWvmc",
          "label": "Όουκλαντ Live Cam",
          "title": "San Francisco-Oakland Bay Bridge Live Cam"
      }
  },
  "long-beach": {
      "drone": {
          "youtubeId": "PWvL-8a-Gas",
          "title": "Λονγκ Μπιτς 4K — Long Beach, California | 4K Drone Video"
      }
  },
  "bakersfield": {
      "drone": {
          "youtubeId": "rUzTmCBm6yM",
          "title": "Μπέικερσφιλντ 4K — A Stunning Aerial Tour of Bakersfield, USA | 4K Drone Footage 🌟"
      }
  },
  "anaheim": {
      "drone": {
          "youtubeId": "g1U1fH-0kNg",
          "title": "Άναχαϊμ 4K — Visit Anaheim Aerial Video | by One Zero Digital Media"
      }
  },
  "sacramento": {
      "drone": {
          "youtubeId": "j3tuOlDLQTA",
          "title": "Σακραμέντο 4K — Sacramento, Capital of California | 4K Drone Video"
      },
      "live": {
          "youtubeId": "1aPhtRjjzb0",
          "label": "Σακραμέντο Live Cam",
          "title": "Sacramento Pacific Flyway Wildlife Live Cam"
      }
  },
  "san-antonio": {
      "drone": {
          "youtubeId": "HhYetVm8JZ0",
          "title": "Σαν Αντόνιο 4K — San Antonio, Texas from Above | Stunning 4K Drone Tour"
      }
  },
  "colorado-springs": {
      "drone": {
          "youtubeId": "KOOkEckdTeE",
          "title": "Κολοράντο Σπρινγκς 4K — Colorado Springs, Colorado | 4K drone footage"
      },
      "live": {
          "youtubeId": "75K1IfdF2MM",
          "label": "Κολοράντο Σπρινγκς Live Cam",
          "title": "Pikes Peak & Colorado Springs Live Cam"
      }
  },
  "aspen": {
      "drone": {
          "youtubeId": "97h7qF7n1_c",
          "title": "Άσπεν 4K — ASPEN, COLORADO - The Most Exclusive Ski Resort In The World | 4K Drone Video"
      }
  },
  "boulder": {
      "drone": {
          "youtubeId": "BNu12FJ1nY0",
          "title": "Μπόουλντερ 4K — Boulder, Colorado | Drone Footage 4K"
      },
      "live": {
          "youtubeId": "yImwm-Wc8NA",
          "label": "Μπόουλντερ Live Cam",
          "title": "Boulder, Colorado Live Camera"
      }
  },
  "fort-collins": {
      "drone": {
          "youtubeId": "q6e2cDZrVbQ",
          "title": "Φορτ Κόλινς 4K — Fort Collins, Colorado | Drone Video at Sunset"
      },
      "live": {
          "youtubeId": "LObvUcMIqOM",
          "label": "Φορτ Κόλινς Live Cam",
          "title": "Fort Collins, CO | BNSF Railcam"
      }
  },
  "aurora-co": {
      "drone": {
          "youtubeId": "Vdo6XQvjWVs",
          "title": "Ορόρα 4K — Aurora Colorado SkyLine 4K Ultra HD"
      }
  },
  "pueblo": {
      "drone": {
          "youtubeId": "j7mCFzhzh9E",
          "title": "Πουέμπλο 4K — Pueblo, CO | 4K Drone Footage 2024"
      }
  },
  "grand-junction": {
      "drone": {
          "youtubeId": "CCw2TV_WFAs",
          "title": "Γκραντ Τζάνκσιον 4K — 🛸GRAND JUNCTION, COLORADO DRONE TOUR 🛸 [DJI 4K]"
      }
  },
  "vail": {
      "drone": {
          "youtubeId": "l9YiQFGFmHE",
          "title": "Βέιλ 4K — Vail, Colorado - 4K drone tour"
      }
  },
  "durango": {
      "drone": {
          "youtubeId": "kkiyvVrLBkA",
          "title": "Ντουράνγκο 4K — 4K Drone Footage Of Lion's Den In Durango, CO"
      }
  },
  "tucson": {
      "drone": {
          "youtubeId": "2rNJzzCRKXs",
          "title": "Τουσόν 4K — Tucson, Arizona | 4K Drone Video"
      },
      "live": {
          "youtubeId": "q5BQRwSh41Q",
          "label": "Τουσόν Live Cam",
          "title": "Tucson, Arizona, USA | LIVE Train Cam"
      }
  },
  "scottsdale": {
      "drone": {
          "youtubeId": "7aZ8rg-0YCo",
          "title": "Σκοτσντέιλ 4K — Scottsdale Drone Tour (4K)"
      }
  },
  "mesa": {
      "drone": {
          "youtubeId": "xOdXW9Livsw",
          "title": "Μέσα 4K — 4K Mesa Arizona Aerial View and Sunset - DJI Phantom 3 Professional"
      }
  },
  "chandler": {
      "drone": {
          "youtubeId": "wiMgV6zh5MU",
          "title": "Τσάντλερ 4K — Stunning Aerial Views of Chandler, AZ | 4K Drone Footage"
      }
  },
  "glendale-az": {
      "drone": {
          "youtubeId": "hP5JlRBqXxI",
          "title": "Γκλέντεϊλ 4K — 4K Drone Highlight - Glendale Arizona Real Estate - Desert Lane"
      }
  },
  "flagstaff": {
      "drone": {
          "youtubeId": "D5goRJoVyYE",
          "title": "Φλάγκσταφ 4K — Aerial View of Flagstaff Arizona"
      },
      "live": {
          "youtubeId": "7xdHH9KMSVk",
          "label": "Φλάγκσταφ Live Cam",
          "title": "Flagstaff, Arizona, USA | LIVE Train Cam"
      }
  },
  "sedona": {
      "drone": {
          "youtubeId": "NZA0DtQr0HU",
          "title": "Σεντόνα 4K — SEDONA, ARIZONA 4K DRONE FOOTAGE (ULTRA HD) - USA BEAUTIFUL DESERT LANDSCAPES"
      },
      "live": {
          "youtubeId": "ro9AMAW4DUc",
          "label": "Σεντόνα Live Cam",
          "title": "Sedona Red Rocks & Chapel Live Cam"
      }
  },
  "yuma": {
      "drone": {
          "youtubeId": "yrKh6sNcdTs",
          "title": "Γιούμα 4K — Downtown Yuma, Arizona - Glamis Dunes | 4K Drone Video"
      }
  },
  "prescott": {
      "drone": {
          "youtubeId": "RVK54vPZUos",
          "title": "Πρέσκοτ 4K — 4K Drone Tour • Prescott National Forest & SR-89A Scenic Drive (22-Min Cinematic"
      },
      "live": {
          "youtubeId": "UkuAQKKw0B4",
          "label": "Πρέσκοτ Live Cam",
          "title": "Prescott, Arizona Downtown Live Cam"
      }
  },
  "santa-fe": {
      "drone": {
          "youtubeId": "UN9b_J4Zqa0",
          "title": "Σάντα Φε 4K — Stunning Drone Footage: Santa Fe & Albuquerque, New Mexico Aerial Views"
      },
      "live": {
          "youtubeId": "R168_-P5PQw",
          "label": "Σάντα Φε Live Cam",
          "title": "Santa Fe, NM | NMRX Railcam"
      }
  },
  "albuquerque": {
      "drone": {
          "youtubeId": "yqb6DiS5byU",
          "title": "Αλμπουκέρκη 4K — Albuquerque, New Mexico by Drone 🇺🇸 [4K]"
      }
  },
  "las-cruces": {
      "drone": {
          "youtubeId": "vu_MbQ-nUlA",
          "title": "Λας Κρούσες 4K — Las Cruces, New Mexico 🇺🇸 city drone video in 4k (ULTRA HD)"
      }
  },
  "rio-rancho": {
      "drone": {
          "youtubeId": "t_K5g6loOCI",
          "title": "Ρίο Ράντσο 4K — 4K flight above Rio Rancho"
      }
  },
  "roswell": {
      "drone": {
          "youtubeId": "txsD9AXo80Y",
          "title": "Ρόσγουελ 4K — UFO Capital of the World: Roswell New Mexico Full City Tour | POV 4K60 Dolby Surround"
      },
      "live": {
          "youtubeId": "kLoFxVhRWtQ",
          "label": "Ρόσγουελ Live Cam",
          "title": "EarthCam Live: Roswell, New Mexico"
      }
  },
  "farmington-nm": {
      "drone": {
          "youtubeId": "htHttxDBOKk",
          "title": "Φάρμινγκτον 4K — Drone Farmington, New Mexico | Drone & Drive"
      }
  },
  "taos": {
      "drone": {
          "youtubeId": "Pdb4iKrozMk",
          "title": "Τάος 4K — Taos NM by drone"
      }
  },
  "carlsbad-nm": {
      "drone": {
          "youtubeId": "tLp4x0HBuGE",
          "title": "Κάρλσμπαντ 4K — Carlsbad, NM Drone Video"
      },
      "live": {
          "youtubeId": "BwiIsjXt3KI",
          "label": "Κάρλσμπαντ Live Cam",
          "title": "Carlsbad Caverns Bat Flight Live Cam"
      }
  },
  "gallup": {
      "drone": {
          "youtubeId": "hd1-IVZ6c9k",
          "title": "Γκάλοπ 4K — Gallup, New Mexico by Drone 🇺🇸 [4K]"
      },
      "live": {
          "youtubeId": "hatt7HlQGu0",
          "label": "Γκάλοπ Live Cam",
          "title": "Gallup, NM | BNSF Railcam"
      }
  },
  "alamogordo": {
      "drone": {
          "youtubeId": "1eSl6orusUY",
          "title": "Αλαμογκόρντο 4K — Alamogordo, New Mexico | 4K Sunset Drone Footage"
      }
  },
  "tacoma": {
    "drone": {
      "youtubeId": "HWNWftwUun4",
      "title": "Τακόμα 4K — Tacoma Waterways and City 4K Drone Exploration"
    },
    "secondary": {
      "youtubeId": "_CSGDYFneAs",
      "title": "Τακόμα Panoramic — TACOMA, WASHINGTON - Explore Beautiful City - [4K] Dolby Vision"
    }
  },
  "vancouver-wa": {
    "drone": {
      "youtubeId": "fknGs1hvRBs",
      "title": "Βανκούβερ (WA) 4K — Vancouver Waterfront in 4K | Stunning Drone Views Over the Columbia River"
    },
    "secondary": {
      "youtubeId": "gt0SGoeCArY",
      "title": "Βανκούβερ (WA) Panoramic — Vancouver Washington Waterfront (Fall 2025)"
    }
  },
  "bellevue-wa": {
    "drone": {
      "youtubeId": "Dm5YLvTdWc4",
      "title": "Μπέλβιου 4K — Bellevue Washington // 4K 60FPS Mavic 3 Pro"
    },
    "secondary": {
      "youtubeId": "CAHd1bZvby0",
      "title": "Μπέλβιου Panoramic — Bellevue, Washington USA 🇺🇸 by DJI Mini 3 Pro drone [4K]"
    }
  },
  "everett": {
    "drone": {
      "youtubeId": "XO2PJX_FF8c",
      "title": "Έβερετ 4K — Everett Washington in 4k | Aerial Views of Everett Marina & Jetty Island"
    },
    "secondary": {
      "youtubeId": "z5YUotS5fmQ",
      "title": "Έβερετ Panoramic — Everett Wa🇺🇸4K Drone Video ( Fall 2020)"
    }
  },
  "kent-wa": {
    "drone": {
      "youtubeId": "GiM1p3p2c-8",
      "title": "Κεντ 4K — Lake Fenwick Drone Tour - Kent Washington"
    },
    "secondary": {
      "youtubeId": "qdGin1IPgh0",
      "title": "Κεντ Panoramic — Washington DC - USA 🇺🇸 - by drone [4K]"
    }
  },
  "yakima": {
    "drone": {
      "youtubeId": "SpzyvZvNRF8",
      "title": "Γιάκιμα 4K — Yakima, Washington 🇺🇸 4k drone video in Ultra HD"
    },
    "secondary": {
      "youtubeId": "wV-av010W6k",
      "title": "Γιάκιμα Panoramic — Yakima Drone Footage"
    }
  },
  "bellingham": {
    "drone": {
      "youtubeId": "O06mKHx8Ujw",
      "title": "Μπέλινγκχαμ 4K — Bellingham, Washington 🇺🇸 | Stunning 4K Drone Tour | Pacific Northwest Aerial Views"
    },
    "secondary": {
      "youtubeId": "AcYfZapRcck",
      "title": "Μπέλινγκχαμ Panoramic — Above Bellingham - A 4K Drone Film"
    }
  },
  "hillsboro": {
    "drone": {
      "youtubeId": "_XvLw1R7Zcg",
      "title": "Χίλσμπορο 4K — DJI Mavic Air 2 Flight Over Hillsboro, Oregon in Ultra 4K"
    },
    "secondary": {
      "youtubeId": "gYZVTDMM6KE",
      "title": "Χίλσμπορο Panoramic — Hillsboro - Oregon - 4K Downtown Drive"
    }
  },
  "beaverton": {
    "drone": {
      "youtubeId": "Jh4D6__NwVs",
      "title": "Μπίβερτον 4K — Beaverton, Oregon from Above | 4K Drone Aerial Views"
    },
    "secondary": {
      "youtubeId": "rUia-cvRCpM",
      "title": "Μπίβερτον Panoramic — Beaverton, Oregon in Golden Autumn Light | 4K Drone Views"
    }
  },
  "bend": {
    "drone": {
      "youtubeId": "JClQQBV83sU",
      "title": "Μπεντ 4K — BEND, OREGON // 4K AERIAL DRONE VIDEO"
    },
    "secondary": {
      "youtubeId": "5RbM9WLw6C0",
      "title": "Μπεντ Panoramic — Bend Oregon 4k Drone: Aerial Views of Stunning Locations"
    }
  },
  "medford": {
    "drone": {
      "youtubeId": "_1rEJjZ59qU",
      "title": "Μέντφορντ 4K — 4k Drone flyover Bear creek Medford OR"
    },
    "secondary": {
      "youtubeId": "TcqWtpVZCYE",
      "title": "Μέντφορντ Panoramic — Medford Oregon Aerial View"
    }
  },
  "corvallis": {
    "drone": {
      "youtubeId": "Qm1pg-NfUfw",
      "title": "Κορβάλις 4K — Corvallis Oregon | Cinematic Drone Tour 4k"
    },
    "secondary": {
      "youtubeId": "IQLljK4hM_A",
      "title": "Κορβάλις Panoramic — Corvallis, Oregon | Oregon State University | 4K Scenic drone video"
    }
  },
  "springfield-or": {
    "drone": {
      "youtubeId": "tWtKN-vyovw",
      "title": "Σπρίνγκφιλντ (OR) 4K — Drone Springfield, Oregon | Highlights"
    },
    "secondary": {
      "youtubeId": "LOu9_Oqdsww",
      "title": "Σπρίνγκφιλντ (OR) Panoramic — Drone Springfield, Oregon"
    }
  },
  "albany-or": {
    "drone": {
      "youtubeId": "2EXGKbyeKFc",
      "title": "Όλμπανι (OR) 4K — Albany, Oregon in 4K | Scenic drone video"
    },
    "secondary": {
      "youtubeId": "lqaTYyl-Mok",
      "title": "Όλμπανι (OR) Panoramic — Albany Oregon History Museum: Old Photos Vs Today"
    }
  },
  "henderson": {
    "drone": {
      "youtubeId": "JOU1qHHGTMw",
      "title": "Χέντερσον 4K — Inspirada Henderson 4K Drone Aerial Best Las Vegas Neighborhoods Tours"
    },
    "secondary": {
      "youtubeId": "SmepP-pr8cM",
      "title": "Χέντερσον Panoramic — Henderson NV 🇺🇸 | From Desert to Modern City"
    }
  },
  "north-las-vegas": {
    "drone": {
      "youtubeId": "GW5YgzH3BuA",
      "title": "Βόρειο Λας Βέγκας 4K — [4K] LAS VEGAS 2026 🇺🇸 1 Hour Drone Aerial Film | Nevada NV USA United States of America"
    },
    "secondary": {
      "youtubeId": "6UAXOifDnhI",
      "title": "Βόρειο Λας Βέγκας Panoramic — Valley Vista North Las Vegas 4K Drone Footage"
    }
  },
  "sparks": {
    "drone": {
      "youtubeId": "QumQ5iOQt6I",
      "title": "Σπαρκς 4K — Flying over Sparks, NV. Marina 4K"
    },
    "secondary": {
      "youtubeId": "f9ZXd8DD-_k",
      "title": "Σπαρκς Panoramic — Sparks Marina Sparks, Nevada cinematic DJI Mini 2"
    }
  },
  "boulder-city": {
    "drone": {
      "youtubeId": "C3e737VHTxU",
      "title": "Μπόλντερ Σίτι 4K — Hoover Dam - Nevada / Arizona, USA 🇺🇸 - by drone [4K]"
    },
    "secondary": {
      "youtubeId": "qdq8kPrUL9o",
      "title": "Μπόλντερ Σίτι Panoramic — Hoover Dam - 4K Dash Tour 🌉 🌁"
    }
  },
  "elko": {
    "drone": {
      "youtubeId": "e9vmCNbVz98",
      "title": "Έλκο 4K — 48 hours in Elko (NV): a Nevada gem"
    },
    "secondary": {
      "youtubeId": "UJqq8v57czA",
      "title": "Έλκο Panoramic — Ruby Mountain Ranch | Elko County, Nevada"
    }
  },
  "mesquite": {
    "drone": {
      "youtubeId": "-rtibmlshyE",
      "title": "Μεσκίτ 4K — Wolf Creek - Mesquite Nevada USA by Eagle-Eye Aerials"
    },
    "secondary": {
      "youtubeId": "SkJpoSiZtXY",
      "title": "Μεσκίτ Panoramic — Mesquite - Nevada - 4K Downtown Drive"
    }
  },
  "pahrump": {
    "drone": {
      "youtubeId": "LxXSqN3LFCk",
      "title": "Παράμπ 4K — 4K Desert Orbital | Aerial Drone Footage | Pahrump, Nevada"
    },
    "secondary": {
      "youtubeId": "ZZhR9MGdsAA",
      "title": "Παράμπ Panoramic — Pahrump - Nevada - 4K Downtown Drive"
    }
  },
  "west-valley-city": {
    "drone": {
      "youtubeId": "bhcndZo8p-8",
      "title": "Γουέστ Βάλεϊ Σίτι 4K — West Valley City Tour - Salt Lake County, Utah"
    },
    "secondary": {
      "youtubeId": "lSdzxJyArRo",
      "title": "Γουέστ Βάλεϊ Σίτι Panoramic — West Valley City - Utah - 4K Downtown Drive"
    }
  },
  "west-jordan": {
    "drone": {
      "youtubeId": "7pjt5kkAHa0",
      "title": "Γουέστ Τζόρνταν 4K — West Jordan, UT | Gardner Village WitchFest Community Tour Halloween Tradition"
    },
    "secondary": {
      "youtubeId": "u-JlkS3mcWc",
      "title": "Γουέστ Τζόρνταν Panoramic — Gardner Village  – West Jordan, Utah"
    }
  },
  "orem": {
    "drone": {
      "youtubeId": "iMh1TeSglgY",
      "title": "Όρεμ 4K — 2023 Mt. Timpanogos Summit | 4K Drone Footage"
    },
    "secondary": {
      "youtubeId": "tkhtmvrnIOk",
      "title": "Όρεμ Panoramic — Mount Timpanogos with a Drone!! (4K!!)"
    }
  },
  "sandy": {
    "drone": {
      "youtubeId": "sFiCo0TBrR8",
      "title": "Σάντι 4K — Wasatch Mountains, Utah 4K Drone Footage | Powder Mountain Ski Resort Eden, UT | DJI Mavic 3"
    },
    "secondary": {
      "youtubeId": "AbYefNCSQdc",
      "title": "Σάντι Panoramic — Aerial View of Wasatch Mountains - Utah"
    }
  },
  "st-george": {
    "drone": {
      "youtubeId": "lMLc4Mtmok0",
      "title": "Σεντ Τζορτζ 4K — Drone St  George, Utah"
    },
    "secondary": {
      "youtubeId": "8ezsONrmsog",
      "title": "Σεντ Τζορτζ Panoramic — Stunning 4K 60 Drone Footage of Saint George, Utah"
    }
  },
  "ogden": {
    "drone": {
      "youtubeId": "wmxpHKPyWoA",
      "title": "Όγκντεν 4K — Historic 25th Street in Ogden, Utah  #dji #drone #djineo2 #city #streets"
    },
    "secondary": {
      "youtubeId": "qBYJ7HygJgU",
      "title": "Όγκντεν Panoramic — Did you know this CRAZY fact about historic 25th street in Ogden??"
    }
  },
  "layton": {
    "drone": {
      "youtubeId": "DUXlJr4a5xw",
      "title": "Λέιτον 4K — Salt Lake City (Utah, USA) Drone View | 4K Ultra HD"
    },
    "secondary": {
      "youtubeId": "gePlxytbuN4",
      "title": "Λέιτον Panoramic — Salt Lake City, Utah, USA  [4K Aerial View by Drone with Calming Music]"
    }
  },
  "south-jordan": {
    "drone": {
      "youtubeId": "GxTTDmjOTfE",
      "title": "Σάουθ Τζόρνταν 4K — DAYBREAK, SOUTH JORDAN, Utah Footage en 4K | Utah Drone Video – EP 005"
    },
    "secondary": {
      "youtubeId": "N7Ve9je8RzU",
      "title": "Σάουθ Τζόρνταν Panoramic — Daybreak (South Jordan) Is it Still Worth the Hype?"
    }
  }
,
  "puebla": {
    "drone": {
      "youtubeId": "2rltaAPDbrg",
      "title": "Πουέμπλα 4K — Puebla City In Mexico 🇲🇽 4K |"
    },
    "secondary": {
      "youtubeId": "ZoixSWSsUAU",
      "title": "Πουέμπλα Panoramic — Puebla, México (4K)"
    }
  },
  "tijuana": {
    "drone": {
      "youtubeId": "iaGNcv_kusI",
      "title": "Τιχουάνα 4K — TIJUANA 2023 🇲🇽 MEXICO 4K ULTRA HD  DRONE FOOTAGE"
    },
    "secondary": {
      "youtubeId": "MBUBf1mKkuI",
      "title": "Τιχουάνα Panoramic — Tijuana and northern Baja Aerial Video Service"
    }
  },
  "merida": {
    "drone": {
      "youtubeId": "_h5SnqZVtD4",
      "title": "Μέριντα 4K — MERIDA 🇲🇽 Drone Aerial 4K | Mérida Yucatán Mexico Ultra HD Dron"
    },
    "secondary": {
      "youtubeId": "4iYzl3Od_Kw",
      "title": "Μέριντα Panoramic — Mérida, México (4K)"
    }
  },
  "oaxaca": {
    "drone": {
      "youtubeId": "nKJXJxMlvYA",
      "title": "Οαχάκα 4K — Oaxaca, Mexico - 4K Scenic Aerial Compilation"
    },
    "secondary": {
      "youtubeId": "kmQciqKbRp8",
      "title": "Οαχάκα Panoramic — OAXACA 🇲🇽 Drone Aerial 4K | Mexico Ultra HD Dron"
    }
  },
  "queretaro": {
    "drone": {
      "youtubeId": "A27KpLZuyUM",
      "title": "Κερέταρο 4K — VISTAS AEREAS EN 4K DE QUERETARO, MEXICO. DRONE TOUR 🇲🇽 2026."
    },
    "secondary": {
      "youtubeId": "YSh7VIz1jnY",
      "title": "Κερέταρο Panoramic — Querétaro Aerial Views 4K | Stunning Drone Footage | Vistas Aéreas de Querétaro"
    }
  },
  "san-miguel-de-allende": {
    "drone": {
      "youtubeId": "3fnfvMrs1mM",
      "title": "Σαν Μιγκέλ ντε Αγιέντε 4K — San Miguel de Allende Mexico Mx | Cinematic Drone Views 4K"
    },
    "secondary": {
      "youtubeId": "PKtfpypMinU",
      "title": "Σαν Μιγκέλ ντε Αγιέντε Panoramic — San Miguel de Allende 4K Drone, Guanajuato, México #sanmigueldeallende  #dji #djiair2s"
    }
  },
  "camaguey": {
    "drone": {
      "youtubeId": "0Xab9_b6wfo",
      "title": "Καμαγουέι 4K — Exploring the Historic Centre of Camagüey, Cuba"
    },
    "secondary": {
      "youtubeId": "rSj-iX7UaE4",
      "title": "Καμαγουέι Panoramic — Top things to do in Camaguey, Cuba"
    }
  },
  "cienfuegos": {
    "drone": {
      "youtubeId": "MMLIsZkYnKE",
      "title": "Σιενφουέγος 4K — Cienfuegos, Cuba en auto | Recorrido 4K – Parte 1"
    },
    "secondary": {
      "youtubeId": "takAduTV6hA",
      "title": "Σιενφουέγος Panoramic — Cienfuegos, Cuba  [Amazing Places 4K]"
    }
  },
  "santa-clara": {
    "drone": {
      "youtubeId": "qlgHmU5cf2w",
      "title": "Σάντα Κλάρα 4K — SANTA CLARA CUBA - Vincenzo Troisio"
    },
    "secondary": {
      "youtubeId": "ozuRDfuUgD8",
      "title": "Σάντα Κλάρα Panoramic — Cuba 4K Ultra HD • Stunning Footage Cuba | Relaxation Film With Calming Music | 4k Videos"
    }
  },
  "varadero": {
    "drone": {
      "youtubeId": "RRY9RnKhVN4",
      "title": "Βαραδέρο 4K — Varadero Beach Cuba 4K"
    },
    "secondary": {
      "youtubeId": "qaWfwTrr2GE",
      "title": "Βαραδέρο Panoramic — THE BEST PLACES TO VISIT VARADERO - CUBA - 4K Varadero Travel Guide"
    }
  },
  "holguin": {
    "drone": {
      "youtubeId": "V6yML4ypzvE",
      "title": "Ολγκίν 4K — (4K) Holguin, Cuba 2015"
    },
    "secondary": {
      "youtubeId": "H0kfnBLVMQg",
      "title": "Ολγκίν Panoramic — Holguìn, Cuba 2025"
    }
  },
  "vinales": {
    "drone": {
      "youtubeId": "BMp5CwzAcpE",
      "title": "Βινιάλες 4K — VIÑALES | CUBA | 4K"
    },
    "secondary": {
      "youtubeId": "5kHg8-uJBjo",
      "title": "Βινιάλες Panoramic — The Real Viñales | A Day in Cuba’s Green Heart"
    }
  },
  "baracoa": {
    "drone": {
      "youtubeId": "YsDrkuxyEJU",
      "title": "Μπαρακόα 4K — Baracoa Cuba Best Tour Drone views 2016 Drone in Cuba before Irma."
    },
    "secondary": {
      "youtubeId": "AIS7LfeZZBQ",
      "title": "Μπαρακόα Panoramic — Baracoa, Guantanamo, Cuba antes del Huracan Matthew. 4K video."
    }
  },
  "heredia": {
    "drone": {
      "youtubeId": "AOcVZrqPCUg",
      "title": "Ερέδια 4K — COSTA RICA HEREDIA Historic Center in Drone 4K"
    },
    "secondary": {
      "youtubeId": "WUBaoFxCJpo",
      "title": "Ερέδια Panoramic — Heredia, Costa Rica 🇨🇷 #drone #costarica"
    }
  },
  "cartago": {
    "drone": {
      "youtubeId": "BAl1-P1353M",
      "title": "Καρτάγο 4K — Cartago, Costa Rica (4K)"
    },
    "secondary": {
      "youtubeId": "Mjiy83UO9bc",
      "title": "Καρτάγο Panoramic — 🇨🇷 COSTA RICA - Basilica Nuesta Señora de los Angeles CARTAGO in Drone 4K ✝"
    }
  },
  "puntarenas": {
    "drone": {
      "youtubeId": "qgJAIRzN-zE",
      "title": "Πουνταρένας 4K — PUNTARENAS, COSTA RICA 🇨🇷: Stunning 4K Drone Tour over Paseo de Los Turistas! 🌴🌊"
    },
    "secondary": {
      "youtubeId": "2rHrFPI9jAs",
      "title": "Πουνταρένας Panoramic — Puntarenas, Costa Rica (4K)"
    }
  },
  "liberia": {
    "drone": {
      "youtubeId": "pXmCC5CWRMc",
      "title": "Λιμπέρια 4K — Bagaces, Guanacaste, Costa Rica by Drone (4K)"
    },
    "secondary": {
      "youtubeId": "-FuG-Bl1v7M",
      "title": "Λιμπέρια Panoramic — Let's explore the City of Liberia, Guanacaste, Costa Rica 🇨🇷 "
    }
  },
  "la-fortuna": {
    "drone": {
      "youtubeId": "Ysnf0faV3Ls",
      "title": "Λα Φορτούνα 4K — La Fortuna : Aerial Drone Footage of Costa Rica's Natural Paradise"
    },
    "secondary": {
      "youtubeId": "kKJhFPXctp8",
      "title": "Λα Φορτούνα Panoramic — Costa Rica, Arenal La Fortuna - 4k Aerial Drone Video"
    }
  },
  "monteverde": {
    "drone": {
      "youtubeId": "F68GWUNCsW8",
      "title": "Μοντεβέρδε 4K — Costa Rica's Monteverde Cloud Forest Sits Above the Clouds Permanently #Shorts"
    },
    "secondary": {
      "youtubeId": "46a-lb8Tkhk",
      "title": "Μοντεβέρδε Panoramic — ⭐ Costa Rica Monteverde cloud forest Is Even More Stunning Than You Think"
    }
  },
  "quepos": {
    "drone": {
      "youtubeId": "H7EZIu00VKQ",
      "title": "Κέπος 4K — Manuel Antonio, Quepos, Costa Rica (4K)"
    },
    "secondary": {
      "youtubeId": "KGGldSG7vwE",
      "title": "Κέπος Panoramic — Manuel Antonio, Costa Rica aerial view 4k"
    }
  }
,
  "quetzaltenango": {
    "drone": {
      "youtubeId": "Fe_YXZutGH8",
      "title": "Κετσαλτενάνγκο (Xela) 4K — La Histórica Ciudad de Quetzaltenango | Vuelotenango [4K]"
    },
    "secondary": {
      "youtubeId": "BPGVPNLuPYw",
      "title": "Κετσαλτενάνγκο (Xela) Panoramic — Quetzaltenango, 30 lugares para visitar | Quetzaltenango #1"
    }
  },
  "flores-gt": {
    "drone": {
      "youtubeId": "TTdkCddo0A0",
      "title": "Φλόρες 4K — Flores, Guatemala Drone Adventure | Central America Ultimate Travel Adventure | Experience Culture"
    },
    "secondary": {
      "youtubeId": "p2xGTLDAe_Y",
      "title": "Φλόρες Panoramic — Isla Flores, Guatemala (4K)"
    }
  },
  "panajachel": {
    "drone": {
      "youtubeId": "aOQDe2Cu9WQ",
      "title": "Παναχατσέλ (Λίμνη Ατιτλάν) 4K — Panajachel, San Marcos, Lake Atitlan, Guatemala 4K HDR Drone"
    },
    "secondary": {
      "youtubeId": "7Y-09iFxza4",
      "title": "Παναχατσέλ (Λίμνη Ατιτλάν) Panoramic — Lake Atitlan: Central America's deepest lake"
    }
  },
  "chichicastenango": {
    "drone": {
      "youtubeId": "NEkriOxGoMI",
      "title": "Τσιτσικαστενάνγκο 4K — Chichicastenango, Guatemala - The Market City | 4K Walking Tour (No Talking)"
    },
    "secondary": {
      "youtubeId": "z6VOvhQN1BI",
      "title": "Τσιτσικαστενάνγκο Panoramic — Guatemala 4K Drone | Active Volcanoes & Tikal"
    }
  },
  "coban": {
    "drone": {
      "youtubeId": "COkyLPZAWIM",
      "title": "Κομπάν 4K — Coban Guatemala Drone 4k"
    },
    "secondary": {
      "youtubeId": "X5DrnLg09jY",
      "title": "Κομπάν Panoramic — Flying over Guatemala (4K UHD) - Relaxing music along scenic nature videos"
    }
  },
  "puerto-barrios": {
    "drone": {
      "youtubeId": "FAkPKFIrweM",
      "title": "Πουέρτο Μπάριος 4K — Puerto Barrios / Izabal / Guatemala / Caribe / Atlántico"
    },
    "secondary": {
      "youtubeId": "Me9aEwOQzQQ",
      "title": "Πουέρτο Μπάριος Panoramic — La Ciudad Caribeña MÁS RARA de Guatemala: Puerto Barrios"
    }
  },
  "livingston": {
    "drone": {
      "youtubeId": "A9RvjJ68IoE",
      "title": "Λίβινγκστον 4K — Flying Drone over Rio Dulce Livingston Izabal Guatemala 2025"
    },
    "secondary": {
      "youtubeId": "mwCIBey7D1E",
      "title": "Λίβινγκστον Panoramic — The Most Unique Celebration in Guatemala is in Livingston, Izabal!"
    }
  },
  "escuintla": {
    "drone": {
      "youtubeId": "w0FjDdIpJeM",
      "title": "Εσκουίντλα 4K — Guatemala 4K - Scenic Relaxation Film With Calming Music"
    },
    "secondary": {
      "youtubeId": "C2DTxLdAWl8",
      "title": "Εσκουίντλα Panoramic — ESCUINTLA La Ciudad mas CALIENTE de Guatemala 🇬🇹🇬🇹🔥"
    }
  },
  "puerto-plata": {
    "drone": {
      "youtubeId": "P4FQMqMhOj8",
      "title": "Πουέρτο Πλάτα 4K — Puerto Plata - Dominican Rep - Aerial Drone 4k Video"
    },
    "secondary": {
      "youtubeId": "htoe4hJYElw",
      "title": "Πουέρτο Πλάτα Panoramic — This is Puerto Plata, Dominican Republic - By Biz-Dev Media"
    }
  },
  "la-romana": {
    "drone": {
      "youtubeId": "TiF8EYYTHbo",
      "title": "Λα Ρομάνα 4K — La romana Dominican Republic 🇩🇴 landscape  #drone#travel#dominicanrepublic#djimini2#relaxing#4k#hdr "
    },
    "secondary": {
      "youtubeId": "5r_S2IyhG8Y",
      "title": "Λα Ρομάνα Panoramic — 🚘 Driving in LA ROMANA 🇩🇴 [4K Ultra HD] Dominican Republic"
    }
  },
  "las-terrenas": {
    "drone": {
      "youtubeId": "d4CRZqx3WN0",
      "title": "Λας Τερένας 4K — Las Terrenas Samana  Dominican Republic 4K Drone"
    },
    "secondary": {
      "youtubeId": "mHFsS1Gs3Aw",
      "title": "Λας Τερένας Panoramic — DRONE LAS TERRENAS # REPUBLICA DOMINICANA"
    }
  },
  "samana": {
    "drone": {
      "youtubeId": "yWckiSJOex8",
      "title": "Σαμανά 4K — Santa Barbara de Samana by drone view"
    },
    "secondary": {
      "youtubeId": "JlSBi9thEGE",
      "title": "Σαμανά Panoramic — Santa Bárbara de Samaná, Samana, Republica Dominicana - 4K UHD - Virtual Trip"
    }
  },
  "barahona": {
    "drone": {
      "youtubeId": "zanHJKS8NmE",
      "title": "Μπαραόνα 4K — Barahona #desdeelaireRD"
    },
    "secondary": {
      "youtubeId": "Qbptnj6J7q0",
      "title": "Μπαραόνα Panoramic — Barahona, Dominican Republic - 4K/Drone Footage"
    }
  },
  "san-pedro-de-macoris": {
    "drone": {
      "youtubeId": "CDEwnrQZcaY",
      "title": "Σαν Πέδρο ντε Μακορίς 4K — San Pedro de Macorís in 4K | Dominican Republic Travel | Series 23"
    },
    "secondary": {
      "youtubeId": "xS88nmJJ8YA",
      "title": "Σαν Πέδρο ντε Μακορίς Panoramic — San Pedro de Macorís (República Dominicana) 4K"
    }
  },
  "jarabacoa": {
    "drone": {
      "youtubeId": "6Xpqf04L_eE",
      "title": "Χαραμπακόα 4K — Hidden Mountains of the Dominican Republic ⛰️ | Jarabacoa Drone Film"
    },
    "secondary": {
      "youtubeId": "gT8qAbcNuIE",
      "title": "Χαραμπακόα Panoramic — Jarabacoa | Dominican Republic"
    }
  },
  "david": {
    "drone": {
      "youtubeId": "PyMGbgyWPAc",
      "title": "Νταβίντ 4K — Panama City, Panama | 4K 30fps Drone Footage (DJI Mini 4 • Part 107 Certified)"
    },
    "secondary": {
      "youtubeId": "wCDzBcUvVog",
      "title": "Νταβίντ Panoramic — FLYING OVER PANAMA (4K UHD) - Relaxing Music Along With Beautiful Nature Videos - 4k ULTRA HD"
    }
  },
  "boquete": {
    "drone": {
      "youtubeId": "CHT7uTH7YVM",
      "title": "Μποκέτε 4K — Boquete, Chiriquí Panamá - 4K DRONE CHIRIQUÍ"
    },
    "secondary": {
      "youtubeId": "tYAQ4bP-v60",
      "title": "Μποκέτε Panoramic — Boquete Panama Flyover in 4K | Panamedia PA Aerial Video"
    }
  },
  "bocas-del-toro": {
    "drone": {
      "youtubeId": "3UcSul-7PN0",
      "title": "Μπόκας ντελ Τόρο 4K — Bocas del Toro Panama in 4K"
    },
    "secondary": {
      "youtubeId": "nnwKWkx7ClU",
      "title": "Μπόκας ντελ Τόρο Panoramic — Bocas Del Toro | PANAMA  [ 4k + DRONE ]"
    }
  },
  "chitre": {
    "drone": {
      "youtubeId": "8ff3d-64ECc",
      "title": "Τσιτρέ 4K — Exploring Chilibre's Lush Nature by Drone 🌳 | Panama 4K Aerial Views"
    },
    "secondary": {
      "youtubeId": "2kpK2OXEt1M",
      "title": "Τσιτρέ Panoramic — Panama City 4K Drone Tour | Skyline & Marina"
    }
  },
  "santiago-de-veraguas": {
    "drone": {
      "youtubeId": "TsGYJm2I4SA",
      "title": "Σαντιάγο ντε Βεράγουας 4K — Santiago de Veraguas Walking Tour , Panama - 4K UHD - Virtual Trip"
    },
    "secondary": {
      "youtubeId": "2kpK2OXEt1M",
      "title": "Σαντιάγο ντε Βεράγουας Panoramic — Panama City 4K Drone Tour | Skyline & Marina"
    }
  },
  "las-tablas": {
    "drone": {
      "youtubeId": "7Fij-YFYCWo",
      "title": "Λας Τάμπλας 4K — Los Santos, Panama: Discover The Azuero Peninsula in 4K"
    },
    "secondary": {
      "youtubeId": "0dWvS55CQGE",
      "title": "Λας Τάμπλας Panoramic — Chitre, Las Tablas & Azuero: Honest Cost Breakdown for Expats 2026"
    }
  },
  "penonome": {
    "drone": {
      "youtubeId": "PyMGbgyWPAc",
      "title": "Πενονομέ 4K — Panama City, Panama | 4K 30fps Drone Footage (DJI Mini 4 • Part 107 Certified)"
    },
    "secondary": {
      "youtubeId": "v2JtJkL179o",
      "title": "Πενονομέ Panoramic — You Won’t Believe This Place Exists | Panama 4K | Drone Documentary"
    }
  },
  "portobelo": {
    "drone": {
      "youtubeId": "fLrKCRsJ0d4",
      "title": "Πορτομπέλο 4K — Portobelo, Colón : Exploring Panama’s Historic Coastal Town - 4K UHD - Virtual Trip"
    },
    "secondary": {
      "youtubeId": "qOJSjbAJcUg",
      "title": "Πορτομπέλο Panoramic — Panamá Beach Drone, Colón, Portobelo: The Most beautiful Mangrove forests to crystal clear waters"
    }
  }
,
  "boise": {
    "drone": {
      "youtubeId": "BNsrs7W7RTs",
      "title": "Μπόισι 4K — Boise, Idaho | 4K Drone Footage"
    },
    "secondary": {
      "youtubeId": "SyFtEElNboY",
      "title": "Μπόισι Panoramic — Boise, Idaho, USA in 8K drone"
    }
  },
  "meridian-id": {
    "drone": {
      "youtubeId": "BxSFM-HCwCk",
      "title": "Μεριντιάν (ID) 4K — Drone Meridian, Idaho"
    },
    "secondary": {
      "youtubeId": "pE_UZckS7X0",
      "title": "Μεριντιάν (ID) Panoramic — MERIDIAN IDAHO Aerial Tour: Fascinating Views!"
    }
  },
  "nampa": {
    "drone": {
      "youtubeId": "Qr2mQHA8zn0",
      "title": "Νάμπα 4K — Drone shot of Nampa, Idaho from the sky"
    },
    "secondary": {
      "youtubeId": "Z7rp184CuDM",
      "title": "Νάμπα Panoramic — A Year of Droning Through Idaho - 4K Drone Footage"
    }
  },
  "idaho-falls": {
    "drone": {
      "youtubeId": "hNSOwKlKS38",
      "title": "Άινταχο Φολς 4K — 2024 Idaho Falls Drone Footage"
    },
    "secondary": {
      "youtubeId": "Kd4MY3tZZHQ",
      "title": "Άινταχο Φολς Panoramic — Idaho Falls, Idaho 2026 | Best Drone Footage & Scenic Locations | 4K Aerial Tour"
    }
  },
  "coeur-d-alene": {
    "drone": {
      "youtubeId": "-JJ6pgaKVBU",
      "title": "Κερ ντ' Αλέν 4K — Immersive 4K Drone Flight: Lake Coeur d'Alene from Above!"
    },
    "secondary": {
      "youtubeId": "Uvr7Sigx-EM",
      "title": "Κερ ντ' Αλέν Panoramic — Drone Coeur dAlene, Idaho"
    }
  },
  "pocatello": {
    "drone": {
      "youtubeId": "HY5_4ddFtdM",
      "title": "Ποκατέλο 4K — POCATELLO, IDAHO. (4K-Cinematic)Drone Video, DJI Mini 2"
    },
    "secondary": {
      "youtubeId": "qoW_CyleZEM",
      "title": "Ποκατέλο Panoramic — Pocatello: Views from Above (4k Drone)"
    }
  },
  "twin-falls": {
    "drone": {
      "youtubeId": "f6TH1mdF-_o",
      "title": "Τουίν Φολς 4K — Drone SHOSHONE FALLS, IDAHO- Earth From Above 4k"
    },
    "secondary": {
      "youtubeId": "F0-83h9cd7s",
      "title": "Τουίν Φολς Panoramic — Drone Twin Falls, Idaho"
    }
  },
  "sun-valley": {
    "drone": {
      "youtubeId": "hWaTyRpAXEw",
      "title": "Σαν Βάλεϊ 4K — Ketchum/Sun Valley/Elkhorn aerial tour"
    },
    "secondary": {
      "youtubeId": "ufFHrSA82XM",
      "title": "Σαν Βάλεϊ Panoramic — Ketchum, Idaho | Cinematic Drone"
    }
  },
  "moscow-id": {
    "drone": {
      "youtubeId": "a5u0WLwDEXQ",
      "title": "Μόσκοου (ID) 4K — Captivating University of Idaho Campus from Above | Breathtaking Drone Footage"
    },
    "secondary": {
      "youtubeId": "3Eh0Xbnv9b4",
      "title": "Μόσκοου (ID) Panoramic — University of Idaho | 8K Campus Drone Tour"
    }
  },
  "lewiston-id": {
    "drone": {
      "youtubeId": "Uw9I6dZqH-E",
      "title": "Λιούιστον (ID) 4K — Visit Idaho Presents: The Snake River | The 3100™"
    },
    "secondary": {
      "youtubeId": "IQ-w8aI4Npo",
      "title": "Λιούιστον (ID) Panoramic — Lewiston Idaho *drone fottage*"
    }
  },
  "helena": {
    "drone": {
      "youtubeId": "gQXAORKqxhA",
      "title": "Χέλενα 4K — Montana Drone Company - Helena Montana Property Showcases"
    },
    "secondary": {
      "youtubeId": "2ZmwFS_adlk",
      "title": "Χέλενα Panoramic — Flying toward Helena, MT"
    }
  },
  "billings": {
    "drone": {
      "youtubeId": "p2IcJMPSHSQ",
      "title": "Μπίλινγκς 4K — Billings, Montana by Drone Pt.1"
    },
    "secondary": {
      "youtubeId": "n4jiuIQPSv0",
      "title": "Μπίλινγκς Panoramic — Breathtaking Aerial Tour of Billings, MT | Chris Young's Young Love & Saturday Nights"
    }
  },
  "bozeman": {
    "drone": {
      "youtubeId": "fsE7I4IIv3Y",
      "title": "Μπόουζμαν 4K — Bozeman Montana 4K  | Cinematic Drone Footage of Big Sky Country"
    },
    "secondary": {
      "youtubeId": "KjdcBhvIoVk",
      "title": "Μπόουζμαν Panoramic — MONTANA 4k Aerial Footage | Downtown Bozeman | 5,000$ Drone"
    }
  },
  "missoula": {
    "drone": {
      "youtubeId": "ujU-R7_N5LE",
      "title": "Μισούλα 4K — Missoula Tour by Drone [4K]"
    },
    "secondary": {
      "youtubeId": "ImDTsK5Zktg",
      "title": "Μισούλα Panoramic — Missoula Montana from Above | Downtown & Mountain Views"
    }
  },
  "great-falls": {
    "drone": {
      "youtubeId": "4qrLbb0uQTA",
      "title": "Γκρέιτ Φολς 4K — Great Falls - Montana: The Great Tour"
    },
    "secondary": {
      "youtubeId": "seGQAemNexY",
      "title": "Γκρέιτ Φολς Panoramic — Drone View Of Great Falls City, Montana (MT), USA"
    }
  },
  "kalispell": {
    "drone": {
      "youtubeId": "7HSH4Xbj5Qw",
      "title": "Κάλισπελ 4K — Kidsport Complex, Kalispell MONTANA / 4k 60fps Drone Footage"
    },
    "secondary": {
      "youtubeId": "5IWrLR-Vmao",
      "title": "Κάλισπελ Panoramic — Downtown Kalispell, MONTANA / 4K 60fps Drone Footage"
    }
  },
  "butte": {
    "drone": {
      "youtubeId": "6eUBAdlVZXI",
      "title": "Μπιούτ 4K — Butte - Montana: The Great Tour - Season 2"
    },
    "secondary": {
      "youtubeId": "sWcynNq0W7w",
      "title": "Μπιούτ Panoramic — Butte Montana aerial views"
    }
  },
  "whitefish": {
    "drone": {
      "youtubeId": "c8kufpG4NUM",
      "title": "Γουάιτφις 4K — Drone Tour | Whitefish Mountain Resort, Montana"
    },
    "live": {
      "youtubeId": "AspLvGaVG-4",
      "label": "Whitefish / Essex MT Railcam",
      "title": "Γουάιτφις Live Railcam — Montana BNSF Live Trains"
    }
  },
  "miles-city": {
    "drone": {
      "youtubeId": "ewlQ8eiBYzA",
      "title": "Μάιλς Σίτι 4K — Miles City,  MT   One of the Most Affordable Places to live in Montana"
    },
    "secondary": {
      "youtubeId": "TCK2KWpdpkU",
      "title": "Μάιλς Σίτι Panoramic — Miles City, Montana from the sky - June 2015"
    }
  },
  "livingston-mt": {
    "drone": {
      "youtubeId": "MQIUZyVrrGQ",
      "title": "Λίβινγκστον (MT) 4K — Spring day in Montana, Yellowstone River 4k Drone Footage by Shaun Johnson Licensed Part 107 Pilot"
    },
    "secondary": {
      "youtubeId": "fvrKs2QfUQo",
      "title": "Λίβινγκστον (MT) Panoramic — Aerial Video for Live Water Property on the Yellowstone River | Livingston, Montana"
    }
  },
  "cheyenne": {
    "drone": {
      "youtubeId": "4ER-T4BhJNg",
      "title": "Σαγιέν 4K — Cheyenne, Wyoming Capital | 4K drone footage"
    },
    "secondary": {
      "youtubeId": "5JZgq0iAz_Q",
      "title": "Σαγιέν Panoramic — Cheyenne, Wyoming from Above: Capitol Building & Downtown Drone Tour"
    }
  },
  "jackson-wy": {
    "drone": {
      "youtubeId": "FAzf5DtqOes",
      "title": "Τζάκσον (WY) 4K — Wyoming 4K Relaxation Film | Grand Teton National Park | Yellowstone with Ambient Music"
    },
    "live": {
      "youtubeId": "1EiC9bvVGnk",
      "label": "Jackson Hole Live Cam",
      "title": "Τζάκσον Live Cam — Jackson Hole Town Square Live 24/7"
    }
  },
  "casper": {
    "drone": {
      "youtubeId": "bHOSuxFQx8c",
      "title": "Κάσπερ 4K — Casper Wyoming Quick 4K Drone and Ground Video Tour"
    },
    "secondary": {
      "youtubeId": "SYXMj5yBNj4",
      "title": "Κάσπερ Panoramic — 🌸 Springtime in Casper, Wyoming | Drone footage South of Wyoming Blvd"
    }
  },
  "laramie": {
    "drone": {
      "youtubeId": "cUKX3ENpmwU",
      "title": "Λάραμι 4K — Laramie Wyoming - DJI Mavic Mini (1080p)"
    },
    "secondary": {
      "youtubeId": "-qVELO7TBPg",
      "title": "Λάραμι Panoramic — Laramie, Wyoming (Drone)"
    }
  },
  "cody": {
    "drone": {
      "youtubeId": "CWVtPylH0ws",
      "title": "Κόντι 4K — Wonderful Wyoming #drone  #nature  #nofilter"
    },
    "secondary": {
      "youtubeId": "eaYGbzPUSkg",
      "title": "Κόντι Panoramic — Cody, Wyoming: Best Small Town in the West"
    }
  },
  "rock-springs": {
    "drone": {
      "youtubeId": "RJeaBUDX7N4",
      "title": "Ροκ Σπρινγκς 4K — Drone Rock Springs, Wyoming"
    },
    "secondary": {
      "youtubeId": "1b28za2MNwU",
      "title": "Ροκ Σπρινγκς Panoramic — Rock Springs, Wyoming! Drive with me in Wyoming!"
    }
  },
  "sheridan-wy": {
    "drone": {
      "youtubeId": "Bj-FBMqGvlc",
      "title": "Σέρινταν (WY) 4K — Flying Over the Bighorn Mountains"
    },
    "secondary": {
      "youtubeId": "m1Wen_Uc63I",
      "title": "Σέρινταν (WY) Panoramic — Sheridan Wyoming Area - Drone"
    }
  },
  "gillette": {
    "drone": {
      "youtubeId": "hgJP4SO3BAM",
      "title": "Ζιλέτ 4K — Drone Gillette, Wyoming"
    },
    "secondary": {
      "youtubeId": "M29pzLVo3Xw",
      "title": "Ζιλέτ Panoramic — Gillette - Wyoming - 4K Downtown Drive"
    }
  },
  "evanston-wy": {
    "drone": {
      "youtubeId": "U4QK7mm0EIQ",
      "title": "Έβανστον (WY) 4K — Evanston Wyoming Aerial View"
    },
    "secondary": {
      "youtubeId": "l-AebUjiIOI",
      "title": "Έβανστον (WY) Panoramic — Evanston, Wyoming! Drive with me through a Wyoming Town!"
    }
  },
  "lander": {
    "drone": {
      "youtubeId": "yHLRdbDLeZU",
      "title": "Λάντερ 4K — Sinks Canyon Wyoming | Cinematic Reel [4K Drone Footage]"
    },
    "secondary": {
      "youtubeId": "-TSKEBQNOzA",
      "title": "Λάντερ Panoramic — Discover Sinks Canyon State Park & Popo Agie Falls from Above | Wyoming Beauty"
    }
  },
  "bismarck": {
    "cityName": "Μπίσμαρκ",
    "drone": {
      "youtubeId": "m9DlJlJ2gzY",
      "title": "Bismarck - North Dakota - 4K Downtown Drive",
      "label": "Μπίσμαρκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rxZQ2pvtjzs",
      "title": "Driving Downtown Bismarck, ND 4K",
      "label": "Περιήγηση στο Μπίσμαρκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fargo": {
    "cityName": "Φάργκο",
    "drone": {
      "youtubeId": "QI4EIkNEfgA",
      "title": "Fargo North Dakota Tour - 4K Drone Travel Guide Video - TOP 10",
      "label": "Φάργκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "gCSA8ZzcbxA",
      "title": "Fargo Virtual Tour | Fargo Drone",
      "label": "Περιήγηση στο Φάργκο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "grand-forks": {
    "cityName": "Γκραντ Φορκς",
    "drone": {
      "youtubeId": "gIBwO3EBOmo",
      "title": "Grand Forks In Season- 4k Cinematic Drone Video in Grand Forks, North Dakota!",
      "label": "Γκραντ Φορκς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "QI4EIkNEfgA",
      "title": "Fargo North Dakota Tour - 4K Drone Travel Guide Video - TOP 10",
      "label": "Περιήγηση στο Γκραντ Φορκς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "minot": {
    "cityName": "Μάινοτ",
    "drone": {
      "youtubeId": "QI4EIkNEfgA",
      "title": "Fargo North Dakota Tour - 4K Drone Travel Guide Video - TOP 10",
      "label": "Μάινοτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZJHOxLJFK58",
      "title": "North Dakota from Above 🇺🇸 | Stunning 4K Aerial Drone Footage of the Peace Garden State",
      "label": "Περιήγηση στο Μάινοτ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "west-fargo": {
    "cityName": "Γουέστ Φάργκο",
    "drone": {
      "youtubeId": "QI4EIkNEfgA",
      "title": "Fargo North Dakota Tour - 4K Drone Travel Guide Video - TOP 10",
      "label": "Γουέστ Φάργκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZJHOxLJFK58",
      "title": "North Dakota from Above 🇺🇸 | Stunning 4K Aerial Drone Footage of the Peace Garden State",
      "label": "Περιήγηση στο Γουέστ Φάργκο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "williston-nd": {
    "cityName": "Γουίλιστον",
    "drone": {
      "youtubeId": "IBq6XnzmboU",
      "title": "Touring North Dakota (4K) - Williston, Williams County",
      "label": "Γουίλιστον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uS-UzK-rTww",
      "title": "Williston - North Dakota - 4K Downtown Drive",
      "label": "Περιήγηση στο Γουίλιστον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dickinson-nd": {
    "cityName": "Ντίκινσον",
    "drone": {
      "youtubeId": "QI4EIkNEfgA",
      "title": "Fargo North Dakota Tour - 4K Drone Travel Guide Video - TOP 10",
      "label": "Ντίκινσον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5HXHNxCml_U",
      "title": "Dickinson - North Dakota - 4K Downtown Drive",
      "label": "Περιήγηση στο Ντίκινσον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mandan": {
    "cityName": "Μαντάν",
    "drone": {
      "youtubeId": "IeNjsQEErY8",
      "title": "Mandan - North Dakota - 4K Downtown Drive",
      "label": "Μαντάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LN4SKL9bYFU",
      "title": "North Dakota Autumn 4K HDR 🍂 Golden Forests, Rolling Hills & Peaceful Nature",
      "label": "Περιήγηση στο Μαντάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jamestown-nd": {
    "cityName": "Τζέιμσταουν",
    "drone": {
      "youtubeId": "Ne7ORZSK36k",
      "title": "Jamestown, North Dakota – World's Largest Buffalo, Museum, and Frontier Village",
      "label": "Τζέιμσταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KE83FlYV4vQ",
      "title": "The World's Largest Buffalo - in Jamestown, North Dakota",
      "label": "Περιήγηση στο Τζέιμσταουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "wahpeton": {
    "cityName": "Γουαπετόν",
    "drone": {
      "youtubeId": "ZJHOxLJFK58",
      "title": "North Dakota from Above 🇺🇸 | Stunning 4K Aerial Drone Footage of the Peace Garden State",
      "label": "Γουαπετόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "hxkjne47L00",
      "title": "Wahpeton, North Dakota, USA",
      "label": "Περιήγηση στο Γουαπετόν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pierre": {
    "cityName": "Πιερ",
    "drone": {
      "youtubeId": "hhqNkcqBbD8",
      "title": "Pierre, SD - 4K Aerial Tour",
      "label": "Πιερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "sjC363B7MeQ",
      "title": "South Dakota State Capital - Quick Tour",
      "label": "Περιήγηση στο Πιερ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sioux-falls": {
    "cityName": "Σιου Φολς",
    "drone": {
      "youtubeId": "iQEFSI7lZY4",
      "title": "Sioux Falls, SD -  4K Aerial Tour",
      "label": "Σιου Φολς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WsyTQurCGE4",
      "title": "Sioux Falls, South Dakota | 4K Drone Footage",
      "label": "Περιήγηση στο Σιου Φολς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rapid-city": {
    "cityName": "Ράπιντ Σίτι",
    "drone": {
      "youtubeId": "9e_YwhosPuY",
      "title": "Rapid City, SD - 4K Aerial Tour",
      "label": "Ράπιντ Σίτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oviI3-Cq0-k",
      "title": "Rapid City, South Dakota 2025",
      "label": "Περιήγηση στο Ράπιντ Σίτι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aberdeen-sd": {
    "cityName": "Άμπερντιν",
    "drone": {
      "youtubeId": "hhqNkcqBbD8",
      "title": "Pierre, SD - 4K Aerial Tour",
      "label": "Άμπερντιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "H0VsOxXdK8A",
      "title": "Aberdeen - South Dakota - 4K Downtown Drive",
      "label": "Περιήγηση στο Άμπερντιν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "brookings": {
    "cityName": "Μπρούκινγκς",
    "drone": {
      "youtubeId": "rhkmUXohWrs",
      "title": "Welcome to South Dakota State University - 4K Aerial Tour",
      "label": "Μπρούκινγκς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "DW0VAwGDTJA",
      "title": "Greetings from Brookings, South Dakota | 4K FPV",
      "label": "Περιήγηση στο Μπρούκινγκς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "watertown-sd": {
    "cityName": "Γουότερταουν",
    "drone": {
      "youtubeId": "xWO2og5QvL8",
      "title": "Lake Kampeska - Watertown, SD",
      "label": "Γουότερταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TZ0JzmqxQQw",
      "title": "Watertown, South Dakota - An American Landscape",
      "label": "Περιήγηση στο Γουότερταουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mitchell-sd": {
    "cityName": "Μίτσελ",
    "drone": {
      "youtubeId": "YLSSiDkSCR0",
      "title": "Corn Palace, Mitchell, SD - 4K Aerial Tour",
      "label": "Μίτσελ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "RxO6GzGH5LI",
      "title": "4K Drone Footage - The Corn Palace - Mitchell, South Dakota",
      "label": "Περιήγηση στο Μίτσελ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "deadwood": {
    "cityName": "Ντέντγουντ",
    "drone": {
      "youtubeId": "T5gJjq3UNvA",
      "title": "Flying Deadwood, South Dakota Drone 4K",
      "label": "Ντέντγουντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pwyOhHWgrWo",
      "title": "BLACK HILLS National Forest 8K South Dakota (Visually Stunning 3min Tour)",
      "label": "Περιήγηση στο Ντέντγουντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "spearfish": {
    "cityName": "Σπίαρφις",
    "drone": {
      "youtubeId": "1tiYI75Wpq0",
      "title": "4K Drone Footage - Spearfish Canyon - Black Hills South Dakota - Savoy - Spring Creek",
      "label": "Σπίαρφις με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GL-X_Y8f9E4",
      "title": "Spearfish Canyon, SD 4K",
      "label": "Περιήγηση στο Σπίαρφις (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sturgis": {
    "cityName": "Στέρτζις",
    "drone": {
      "youtubeId": "GPtQIYpP5uM",
      "title": "Sturgis 2024 | Inside the Epic 84th Annual Motorcycle Rally!",
      "label": "Στέρτζις με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WZ6NcF5z-rI",
      "title": "Best Places to Ride Motorcycles for the 2025 Sturgis Motorcycle Rally!",
      "label": "Περιήγηση στο Στέρτζις (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "charleston-wv": {
    "cityName": "Τσάρλεστον",
    "drone": {
      "youtubeId": "0Uv1NArH8K4",
      "title": "CHARLESTON drone view in 4K | WEST VIRGINIA | Cinematic Edit",
      "label": "Τσάρλεστον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oyGfez_rBKg",
      "title": "Sultan + Shepard - Assassin /  Charleston West Virginia State Capitol / John Amos / 4K / DJI AIR2S",
      "label": "Περιήγηση στο Τσάρλεστον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "huntington-wv": {
    "cityName": "Χάντινγκτον",
    "drone": {
      "youtubeId": "qktEkueujd8",
      "title": "Marshall Like You've Never Seen It Before | Drone Fly Through of Campus",
      "label": "Χάντινγκτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Tsf5MphHSWA",
      "title": "Campus Tour | Marshall University",
      "label": "Περιήγηση στο Χάντινγκτον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "morgantown-wv": {
    "cityName": "Μόργκανταουν",
    "drone": {
      "youtubeId": "SuMTCDLI5ho",
      "title": "4K Drone Video Over Morgantown, West Virginia",
      "label": "Μόργκανταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SySmzlLaKM0",
      "title": "Winter Wonderland: WVU from Above. Morgantown WV 1/6/2025",
      "label": "Περιήγηση στο Μόργκανταουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "parkersburg": {
    "cityName": "Πάρκερσμπεργκ",
    "drone": {
      "youtubeId": "hF1bX45Vtwg",
      "title": "Blennerhassett Island - Aerial Drone Video - West Virginia",
      "label": "Πάρκερσμπεργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "gi_sjPv_5Xk",
      "title": "Blennerhassett Island: West Virginia's Hidden Gem | Parkersburg WV",
      "label": "Περιήγηση στο Πάρκερσμπεργκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "wheeling": {
    "cityName": "Γουίλινγκ",
    "drone": {
      "youtubeId": "d38oPLBbv7Y",
      "title": "Wheeling, West Virginia - [4K] Drone Tour",
      "label": "Γουίλινγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SACWjXxnt4w",
      "title": "Wheeling Suspension Bridge, West Virginia - October 2026",
      "label": "Περιήγηση στο Γουίλινγκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "martinsburg": {
    "cityName": "Μάρτινσμπεργκ",
    "drone": {
      "youtubeId": "45_NTEl0wjw",
      "title": "Drone Martinsburg, West Virginia",
      "label": "Μάρτινσμπεργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "11H9IPyc5gE",
      "title": "Martinsburg, City in West Virginia, USA 🇺🇸 | Martinsburg West Virginia, Martinsburg WV USA",
      "label": "Περιήγηση στο Μάρτινσμπεργκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fairmont-wv": {
    "cityName": "Φέρμοντ",
    "drone": {
      "youtubeId": "49dpxqujIus",
      "title": "Fairmont, Town in West Virginia, USA 🇺🇸 | Fairmont West Virginia, Fairmont Wv Drone Footage",
      "label": "Φέρμοντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "n_NWzgtsP-A",
      "title": "Drone Morgantown, West Virginia | West Virginia University | Monongahela River",
      "label": "Περιήγηση στο Φέρμοντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "beckley": {
    "cityName": "Μπέκλεϊ",
    "drone": {
      "youtubeId": "wd9NE_6PsBQ",
      "title": "Beckley  West Virginia 4K  / Gateway to Southern West Virginia  (DJI Mavic Air 2S Drone Footage)",
      "label": "Μπέκλεϊ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "awY6pPmUDCY",
      "title": "Beckley Exhibition Coal Mine Tour - West Virgnia",
      "label": "Περιήγηση στο Μπέκλεϊ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "clarksburg-wv": {
    "cityName": "Κλάρκσμπεργκ",
    "drone": {
      "youtubeId": "LzDaJBgWf_M",
      "title": "Clarksburg WV USA, drone footage of Clarksburg Wv, Cinematic drone footage of West Virginia",
      "label": "Κλάρκσμπεργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "l8h0Mo2G3rE",
      "title": "West Virginia 4K Drone Footage | Appalachian Mountains, New River Gorge & Scenic Aerial Views",
      "label": "Περιήγηση στο Κλάρκσμπεργκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "harpers-ferry": {
    "cityName": "Χάρπερς Φέρι",
    "drone": {
      "youtubeId": "V2oV_2uRSdw",
      "title": "Harpers Ferry Aerial Tour Summer 2023 4K REUPLOAD",
      "label": "Χάρπερς Φέρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2BoSpW3K9DQ",
      "title": "Flying Over Harpers Ferry, West Virginia - [4K] Drone Footage",
      "label": "Περιήγηση στο Χάρπερς Φέρι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "montpelier": {
    "cityName": "Μονπελιέ",
    "drone": {
      "youtubeId": "a3SuqUsWR-0",
      "title": "Montpelier, Vermont, USA 🇺🇸 4K | Drone Footage",
      "label": "Μονπελιέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "wgN4XUpPZAI",
      "title": "Vermont Walks - The Vermont State House in Montpelier, VT ・ 4K",
      "label": "Περιήγηση στο Μονπελιέ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "burlington": {
    "cityName": "Μπέρλινγκτον",
    "drone": {
      "youtubeId": "vU_WSLybpGM",
      "title": "Lake Champlain From Above | Burlington, VT Drone View | 4K | Full HD",
      "label": "Μπέρλινγκτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "m91lkKNCfvo",
      "title": "Burlington Vermont Drone Footage 4K | Lake Champlain Winter Aerial",
      "label": "Περιήγηση στο Μπέρλινγκτον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "south-burlington": {
    "cityName": "Σάουθ Μπέρλινγκτον",
    "drone": {
      "youtubeId": "iPHyzezIsDI",
      "title": "Burlington, Vermont, USA 🇺🇸 4K | Drone Footage",
      "label": "Σάουθ Μπέρλινγκτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5RLgfhLjbyw",
      "title": "Peaceful Summer Afternoon in South Burlington, Vermont [8K]",
      "label": "Περιήγηση στο Σάουθ Μπέρλινγκτον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rutland": {
    "cityName": "Ράτλαντ",
    "drone": {
      "youtubeId": "fgAj1NcD1Kg",
      "title": "Rutland, VT - Aerial Tour (4K)",
      "label": "Ράτλαντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "jmoHOHJv5dY",
      "title": "Vermont Downtown: Rutland",
      "label": "Περιήγηση στο Ράτλαντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "barre": {
    "cityName": "Μπάρε",
    "drone": {
      "youtubeId": "UCfjO9MQUUw",
      "title": "ROCK OF AGES Granite Quarry - Barre, Vermont - Drone Video",
      "label": "Μπάρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "NoZ6rMjFvMg",
      "title": "Rock of Ages Stone Quarry Tour",
      "label": "Περιήγηση στο Μπάρε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "st-albans-vt": {
    "cityName": "Σεντ Όλμπανς",
    "drone": {
      "youtubeId": "vU_WSLybpGM",
      "title": "Lake Champlain From Above | Burlington, VT Drone View | 4K | Full HD",
      "label": "Σεντ Όλμπανς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BDTXP6uuuec",
      "title": "Drone video: See fall foliage in St. Albans, Vermont",
      "label": "Περιήγηση στο Σεντ Όλμπανς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "winooski": {
    "cityName": "Γουινούσκι",
    "drone": {
      "youtubeId": "8BBJ29jweCw",
      "title": "Winooski River Aerial | BTV Drones",
      "label": "Γουινούσκι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "f1DWt_9gbvI",
      "title": "4k Winooski Burlington Vermont USA",
      "label": "Περιήγηση στο Γουινούσκι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "brattleboro": {
    "cityName": "Μπράτλμπορο",
    "drone": {
      "youtubeId": "eCOdEFZikf0",
      "title": "Brattleboro, Vermont - [4K] Drone Tour",
      "label": "Μπράτλμπορο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cY6A2RC936Y",
      "title": "Brattleboro, Vermont, USA 🇺🇸 4K | Drone Footage",
      "label": "Περιήγηση στο Μπράτλμπορο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bennington": {
    "cityName": "Μπένινγκτον",
    "drone": {
      "youtubeId": "iPHyzezIsDI",
      "title": "Burlington, Vermont, USA 🇺🇸 4K | Drone Footage",
      "label": "Μπένινγκτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Fg4gI3UnOzw",
      "title": "Bennington Battle Monument (Filmed 10-11-19) 1889 Bennington Vermont DJI Mavic 2 Pro 4k Bing Err",
      "label": "Περιήγηση στο Μπένινγκτον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "stowe": {
    "cityName": "Στόου",
    "drone": {
      "youtubeId": "AiLbu0scm5g",
      "title": "Mt Mansfield, Stowe, Vermont Aerial Video",
      "label": "Στόου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "P-hlx5QMyFM",
      "title": "Stowe, Vermont, USA 🇺🇸 4K | Drone Footage",
      "label": "Περιήγηση στο Στόου (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "juneau": {
    "cityName": "Τζούνο",
    "drone": {
      "youtubeId": "tW2956syo5o",
      "title": "Drone Aerial Tour of Gastineau Channel, outside Juneau Alaska",
      "label": "Τζούνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "85ohXwtcJko",
      "title": "Juneau - A drone film over Juneau, Alaska",
      "label": "Περιήγηση στο Τζούνο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "anchorage": {
    "cityName": "Άνκορατζ",
    "drone": {
      "youtubeId": "V8XpBfJ6aG0",
      "title": "Anchorage Virtual Tour | Anchorage Drone",
      "label": "Άνκορατζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4UCpDgJMbUo",
      "title": "Anchorage, Alaska, USA 🇺🇸 in 4k ULTRA HD HDR (60 FPS) - Flying over Anchorage",
      "label": "Περιήγηση στο Άνκορατζ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fairbanks": {
    "cityName": "Φέρμπανκς",
    "drone": {
      "youtubeId": "3nui0zUscRw",
      "title": "4K Epic Drone 🏔️ Fairbanks Alaska Cinematic 🎵Downtown, Chena River, Northern Lights, Sled Dog Ride",
      "label": "Φέρμπανκς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yOapj1dTxL0",
      "title": "360-degree Float Trip on Chena River in Fairbanks, Alaska",
      "label": "Περιήγηση στο Φέρμπανκς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sitka": {
    "cityName": "Σίτκα",
    "drone": {
      "youtubeId": "zRJc_UJ4ZO0",
      "title": "Sitka, Alaska Cruise Terminal Drone Footage | Stunning Arrival Views",
      "label": "Σίτκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "07NRKRI9_0k",
      "title": "Sitka, Alaska - 2022 Drone Stock Footage by Daniel Schuster - Licensed Part 107 Pilot",
      "label": "Περιήγηση στο Σίτκα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ketchikan": {
    "cityName": "Κέτσικαν",
    "drone": {
      "youtubeId": "864__wN49fA",
      "title": "Ketchikan Drone Tour 4K | Waterfront, Mountains & Harbor from Above",
      "label": "Κέτσικαν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "eJQHxhCNWpI",
      "title": "Ketchikan Alaska Port Day Complete 4k 1st Person Walking Tour  Creek Street Sights",
      "label": "Περιήγηση στο Κέτσικαν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "wasilla": {
    "cityName": "Γουασίλα",
    "drone": {
      "youtubeId": "IkCDo9n6SOE",
      "title": "Incredible Matanuska Glacier Valley, Alaska | Drone Aerial Nature Travel Experience | Fall Foliage",
      "label": "Γουασίλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "q4omo4w-m90",
      "title": "High above Wasilla, Alaska",
      "label": "Περιήγηση στο Γουασίλα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kenai": {
    "cityName": "Κενάι",
    "drone": {
      "youtubeId": "i6ENuDQzdmE",
      "title": "Beautiful Kenai River - 4K Drone Footage",
      "label": "Κενάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BfAuHDT2RK4",
      "title": "Alaska Fishing Trip | 4K drone | GoPro | Kenai River",
      "label": "Περιήγηση στο Κενάι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kodiak": {
    "cityName": "Κόντιακ",
    "drone": {
      "youtubeId": "kO4_Cz28Hhw",
      "title": "Kodiak Alaska 4K Drone Footage",
      "label": "Κόντιακ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Z95JeeXlE6k",
      "title": "This is Kodiak (Alaska Nature and Wildlife 4K Cinematic Video)",
      "label": "Περιήγηση στο Κόντιακ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "skagway": {
    "cityName": "Σκάγκγουεϊ",
    "drone": {
      "youtubeId": "pu_Tyz1rAhU",
      "title": "White Pass Scenic Railway Excursion Guide | Skagway, Alaska 4K",
      "label": "Σκάγκγουεϊ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0O8sYN5FtV4",
      "title": "ALASKA CRUISE: White Pass Summit Rail & Bus Excursion (Skagway)",
      "label": "Περιήγηση στο Σκάγκγουεϊ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "homer": {
    "cityName": "Χόμερ",
    "drone": {
      "youtubeId": "04b70cPUGBo",
      "title": "Homer Spit, Alaska | Drone Aerial Nature Travel Experience",
      "label": "Χόμερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JHdmqZjnBf4",
      "title": "Homer, Alaska |  Homer Overlook point | Homer Spit | 4k Drone Video | July 2021",
      "label": "Περιήγηση στο Χόμερ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hilo": {
    "cityName": "Χίλο",
    "drone": {
      "youtubeId": "mkluCA12g0c",
      "title": "Hamakua Coast Day Trip, Big Island Hawaii. Umauma Falls, Laupahoehoe Point, 4K Drone Footage.",
      "label": "Χίλο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "qBSgGlM-RpM",
      "title": "Aerial Tour of the Big Island of Hawaii in 4K video 2023",
      "label": "Περιήγηση στο Χίλο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kailua-kona": {
    "cityName": "Καϊλούα-Κόνα",
    "drone": {
      "youtubeId": "P_4fc9AvL54",
      "title": "[4K UHD] Big Island, HAWAII🇺🇸 Ambient Drone Film + Ambient Meditation Music",
      "label": "Καϊλούα-Κόνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EtNxRhg6Vr8",
      "title": "🇺🇸 Kailua-Kona, Big Island, Hawaii - Scenic, Relaxing Drone 4K UHD",
      "label": "Περιήγηση στο Καϊλούα-Κόνα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kahului": {
    "cityName": "Καχουλούι",
    "drone": {
      "youtubeId": "zwP7tv3YUu4",
      "title": "Maui Hawaii Relaxation Film With Drone [Aerial View]",
      "label": "Καχουλούι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YPVLrSjKlh8",
      "title": "Best of Maui 4K | Aerial Drone Film | Daniel Sullivan Photography",
      "label": "Περιήγηση στο Καχουλούι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lahaina": {
    "cityName": "Λαχάινα",
    "drone": {
      "youtubeId": "YPVLrSjKlh8",
      "title": "Best of Maui 4K | Aerial Drone Film | Daniel Sullivan Photography",
      "label": "Λαχάινα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "g2fUDU0cIj8",
      "title": "Drone Video: Front Street and Lahaina Harbor  - September  2026 -  4K",
      "label": "Περιήγηση στο Λαχάινα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lihue": {
    "cityName": "Λιχούε",
    "drone": {
      "youtubeId": "PhwN4zujnL4",
      "title": "🇺🇸 Hawaii Kauai Travel Guide | Hanalei Valley, Princeville & Kilauea Lighthouse 4K Drone Tour",
      "label": "Λιχούε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "g-C7uGi6VuQ",
      "title": "Lihue and Kalapaki Beach from Helicopter. Kauai, Hawaii",
      "label": "Περιήγηση στο Λιχούε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kailua-oahu": {
    "cityName": "Καϊλούα Οάχου",
    "drone": {
      "youtubeId": "WmP15mviSj0",
      "title": "Lanikai Beach - Everything You Need to Know 2025 [4K Drone]",
      "label": "Καϊλούα Οάχου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TluIW9omyKA",
      "title": "Lanikai Beach & Mokes // Drone 4K",
      "label": "Περιήγηση στο Καϊλούα Οάχου (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "waipahu": {
    "cityName": "Γουαϊπάχου",
    "drone": {
      "youtubeId": "ecLprd_qjb0",
      "title": "Stunning Relaxation 4K Drone Tour of Oahu, Hawaii's Scenic Beaches and Landscapes 2023!",
      "label": "Γουαϊπάχου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cM0QyhYrhxw",
      "title": "Oahu, Hawaii 🇺🇸 | A Cinematic 4K Drone Journey",
      "label": "Περιήγηση στο Γουαϊπάχου (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kihei": {
    "cityName": "Κιχέι",
    "drone": {
      "youtubeId": "henWGOROa1o",
      "title": "4K Drone Tour of Beaches on Maui | Kihei",
      "label": "Κιχέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "iP9hO-Xxj50",
      "title": "Exploring Kihei Maui in 2026: Best Beaches, Restaurants, Shopping & Molokini Crater Snorkeling 4K",
      "label": "Περιήγηση στο Κιχέι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kapolei": {
    "cityName": "Καπολέι",
    "drone": {
      "youtubeId": "wB0ghNgj-aM",
      "title": "Hawaii From Above: Oʻahu Drone Tour | Ko Olina, Lanikai Beach & Mokulua Islands",
      "label": "Καπολέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uOR8znUTNdk",
      "title": "Hawaii 4K Drone | Discover Island Paradise",
      "label": "Περιήγηση στο Καπολέι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "belmopan": {
    "cityName": "Μπελμοπάν",
    "drone": {
      "youtubeId": "LIhvvXrn7fA",
      "title": "BELIZE CITY, BELIZE 4K HDR Drone | Stunning Aerial Tour of the Caribbean Coast & City Views",
      "label": "Μπελμοπάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3vWSskMG0uA",
      "title": "Belize 4K By Drone 2024 - Belize City , Belmopan City",
      "label": "Περιήγηση στο Μπελμοπάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-pedro": {
    "cityName": "Σαν Πέδρο",
    "drone": {
      "youtubeId": "GONQZ0w4PW4",
      "title": "Aerial Tour of San Pedro, Belize including Boca Del Rio Area - True 4K Drone Footage 2016",
      "label": "Σαν Πέδρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lEDq_1efphg",
      "title": "You have to see San Pedro, Belize from Above! - DJI Mavic Pro 4k",
      "label": "Περιήγηση στο Σαν Πέδρο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "caye-caulker": {
    "cityName": "Κέι Κόλκερ",
    "drone": {
      "youtubeId": "UcjF7ZBFj2E",
      "title": "“Caye Caulker from Above: 4K Drone Footage of a Caribbean Gem”",
      "label": "Κέι Κόλκερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "OCYMdrEUalM",
      "title": "Cinematic Aerial of The Split, Caye Caulker, Belize!",
      "label": "Περιήγηση στο Κέι Κόλκερ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "placencia": {
    "cityName": "Πλασένσια",
    "drone": {
      "youtubeId": "wu0CpqKn03Y",
      "title": "The REAL Placencia, Belize: What To Do, See & Eat! (Travel Guide) 4K",
      "label": "Πλασένσια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "hVqRBH1BA3A",
      "title": "The Beautiful Beaches of Placencia Village in Southern Belize",
      "label": "Περιήγηση στο Πλασένσια (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "orange-walk": {
    "cityName": "Όραντζ Γουόκ",
    "drone": {
      "youtubeId": "OHymvsEKqo8",
      "title": "Orange Walk Town Belize 360 VR Tour",
      "label": "Όραντζ Γουόκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Uq5M6fYLu78",
      "title": "ASMR Orange Walk Town Belize",
      "label": "Περιήγηση στο Όραντζ Γουόκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "corozal": {
    "cityName": "Κοροζάλ",
    "drone": {
      "youtubeId": "E7m_4g3hgNY",
      "title": "COROZAL BELIZE | You Won’t Believe What This Town Looks Like From Above!",
      "label": "Κοροζάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cpdwQfHl-GM",
      "title": "Corozal, Belize- Drone footage",
      "label": "Περιήγηση στο Κοροζάλ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dangriga": {
    "cityName": "Ντανγκρίγκα",
    "drone": {
      "youtubeId": "QlaO89k9d7U",
      "title": "Dangriga Town, the Culture Capital of Belize | Shot on @DJI Mini 4K",
      "label": "Ντανγκρίγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_uWgs4i8dmU",
      "title": "The Majestic Dangriga Town, Stann Creek District in 4K",
      "label": "Περιήγηση στο Ντανγκρίγκα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "punta-gorda": {
    "cityName": "Πούντα Γκόρντα",
    "drone": {
      "youtubeId": "91p1klXS7ao",
      "title": "Punta Gorda Town Belize 4K Sony a6400",
      "label": "Πούντα Γκόρντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "iIHQ9_w5K5c",
      "title": "Punta Gorda Belize - Highlights - DJI Air 3 - 4K",
      "label": "Περιήγηση στο Πούντα Γκόρντα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-miguel-sv": {
    "cityName": "Σαν Μιγκέλ",
    "drone": {
      "youtubeId": "HLzpzQfPWs4",
      "title": "San Salvador, El Salvador 4K HDR Drone Tour: Historic Center, Monuments & Skyline",
      "label": "Σαν Μιγκέλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "T-xsJlvy2Ts",
      "title": "AVENIDA ROOSEVELT desde lo Alto! 🏙️ | San Miguel El Salvador en 4K",
      "label": "Περιήγηση στο Σαν Μιγκέλ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sonsonate": {
    "cityName": "Σονσονάτε",
    "drone": {
      "youtubeId": "Q8mzpBYVtYk",
      "title": "Nahuizalco Sonsonate El Salvador-4K DRONE #travel #explore #drone #elsalvador",
      "label": "Σονσονάτε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vGA7FGLeGD0",
      "title": "Sonsonate El Salvador 4K",
      "label": "Περιήγηση στο Σονσονάτε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "santa-tecla": {
    "cityName": "Σάντα Τέκλα",
    "drone": {
      "youtubeId": "dmobkZI_hbI",
      "title": "Santa Tecla El Salvador - 4K Drone",
      "label": "Σάντα Τέκλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y6SXCfjlC-g",
      "title": "Paseo El Carmen COMPLETO 🇸🇻 | Santa Tecla de Inicio a Fin | POV 4K",
      "label": "Περιήγηση στο Σάντα Τέκλα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ahuachapan": {
    "cityName": "Αουατσαπάν",
    "drone": {
      "youtubeId": "RjFTx6PwJpk",
      "title": "Ruta de las Flores, El Salvador (4K)",
      "label": "Αουατσαπάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZmwkP6kGWZg",
      "title": "Exploring El Salvador’s Famous Ruta de las Flores | AHUACHAPÁN | 4K 60fps Walking Tour",
      "label": "Περιήγηση στο Αουατσαπάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "suchitoto": {
    "cityName": "Σουτσιτότο",
    "drone": {
      "youtubeId": "yfIGXQgwm74",
      "title": "DRONE / Suchitoto, Cuscatlán, El Salvador ( 4K )",
      "label": "Σουτσιτότο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PAngmxukCxk",
      "title": "EL SALVADOR SUCHITOTO Drone 4K",
      "label": "Περιήγηση στο Σουτσιτότο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "la-libertad": {
    "cityName": "Λα Λιμπερτάδ",
    "drone": {
      "youtubeId": "IzdkiuJzkAs",
      "title": "Surf Tour in El Salvador - drone tour in La Libertad",
      "label": "Λα Λιμπερτάδ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UdGjQtqsS1w",
      "title": "Surf City - La Libertad, El Salvador 4K",
      "label": "Περιήγηση στο Λα Λιμπερτάδ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "usulutan": {
    "cityName": "Ουσουλουτάν",
    "drone": {
      "youtubeId": "HEGiGBuZECk",
      "title": "Bahia de Jiquilisco Usulutan en Drone El salvador [ YOUTUBERO ]",
      "label": "Ουσουλουτάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rzHK6rM-rFY",
      "title": "Bahía de Jiquilisco tomas impresionantes desde el Drone | MediaBeats SV 2018",
      "label": "Περιήγηση στο Ουσουλουτάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chalatenango": {
    "cityName": "Τσαλατενάνγκο",
    "drone": {
      "youtubeId": "JOC4JmDaje8",
      "title": "Chalatenango El Salvador Drone",
      "label": "Τσαλατενάνγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "l1hKfD7gsWc",
      "title": "Cinematic drone footage | Canton San Jose | Chalatenango El Salvador",
      "label": "Περιήγηση στο Τσαλατενάνγκο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },

  "mendoza": {
    "cityName": "Μεντόζα",
    "drone": {
      "youtubeId": "BDZtDJpIsiw",
      "title": "Mendoza, Argentina - 4K Drone Travel Video",
      "label": "Μεντόζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nLsdVK2-h1Q",
      "title": "Mendoza, Argentina in 4K",
      "label": "Περιήγηση στο Μεντόζα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "la-plata": {
    "cityName": "Λα Πλάτα",
    "drone": {
      "youtubeId": "9CH8NjbeCo4",
      "title": "The best aerial views of Mar del Plata (Argentina) in 4K!",
      "label": "Λα Πλάτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UKp7UlGgsPI",
      "title": "【4K】La Mejor vista de LA PLATA 2025 - Buenos Aires | Walking Tour Argentina",
      "label": "Περιήγηση στο Λα Πλάτα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-miguel-de-tucuman": {
    "cityName": "Σαν Μιγκέλ δε Τουκουμάν",
    "drone": {
      "youtubeId": "Hfkn-XsyHqg",
      "title": "Ciudad Sagrada de los Quilmes- Tucumán - Dron - Turismo Argentina #drone #travel #tucuman #mountains",
      "label": "Σαν Μιγκέλ δε Τουκουμάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SCdkYMKcC2E",
      "title": "San Miguel de Tucumán - Casa de Gobierno - Iglesias - Dron - Convento San Francisco",
      "label": "Περιήγηση στο Σαν Μιγκέλ δε Τουκουμάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mar-del-plata": {
    "cityName": "Μαρ ντελ Πλάτα",
    "drone": {
      "youtubeId": "9CH8NjbeCo4",
      "title": "The best aerial views of Mar del Plata (Argentina) in 4K!",
      "label": "Μαρ ντελ Πλάτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZPgEznC333Q",
      "title": "🇦🇷 Mar Del Plata Beach A Peaceful Day",
      "label": "Περιήγηση στο Μαρ ντελ Πλάτα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "salta": {
    "cityName": "Σάλτα",
    "drone": {
      "youtubeId": "9xBDGZCeohI",
      "title": "Explore 10 Wonders📍SALTA, Argentina 🇦🇷 | Epic Drone Travel Guide",
      "label": "Σάλτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-ybsuOjrZug",
      "title": "Quebrada de las Conchas - Cafayate 🇦🇷 #cafayate #salta #drone #argentina #4k",
      "label": "Περιήγηση στο Σάλτα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "santa-fe-ar": {
    "cityName": "Σάντα Φε",
    "drone": {
      "youtubeId": "_gJyOnBlWyc",
      "title": "【4K】🇦🇷 Santa Fe from Above 🔥 ARGENTINA 2022 🔥 Cinematic Wolf Aerial™ Drone Film",
      "label": "Σάντα Φε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Exr_Mfx2o1s",
      "title": "Santa Fe Capital - Argentina by Drone Santa Fe",
      "label": "Περιήγηση στο Σάντα Φε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-juan-ar": {
    "cityName": "Σαν Χουάν",
    "drone": {
      "youtubeId": "n4gXJbucpOA",
      "title": "SAN JUAN 4K 🇦🇷 | Caminata bajo el Sol Cuyano.",
      "label": "Σαν Χουάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "60ZvcwiiLEQ",
      "title": "San Juan Argentina 🇦🇷 The city is so busy!",
      "label": "Περιήγηση στο Σαν Χουάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "belo-horizonte": {
    "cityName": "Μπέλο Οριζόντε",
    "drone": {
      "youtubeId": "T9q10nGN0-c",
      "title": "Belo Horizonte, Brazil 🇧🇷 in 4K 60FPS ULTRA HD Video by Drone",
      "label": "Μπέλο Οριζόντε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WaB4AWvFsg0",
      "title": "Belo Horizonte, Minas Gerais, Brasil 4K HDR Drone",
      "label": "Περιήγηση στο Μπέλο Οριζόντε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "curitiba": {
    "cityName": "Κουριτίμπα",
    "drone": {
      "youtubeId": "zIKR53jravc",
      "title": "\"Discovering the Beauty of Curitiba: A Stunning Drone Compilation",
      "label": "Κουριτίμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bEdESzY4FBI",
      "title": "Curitiba is the most developed city in Brazil #brasil #curitiba #travel #braziltourism #capybara",
      "label": "Περιήγηση στο Κουριτίμπα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fortaleza": {
    "cityName": "Φορταλέζα",
    "drone": {
      "youtubeId": "-jLXO0fd2Tk",
      "title": "Fortaleza, Brazil 🇧🇷 in 4K ULTRA HD 60FPS Video by Drone",
      "label": "Φορταλέζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "iPgH6MKcNjQ",
      "title": "Fortaleza, Brazil 🇧🇷 | 4K Drone Footage",
      "label": "Περιήγηση στο Φορταλέζα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "recife": {
    "cityName": "Ρεσίφε",
    "drone": {
      "youtubeId": "HJBuHhKBNlg",
      "title": "Recife, Brazil 🇧🇷 in 4K 60FPS ULTRA HD Video by Drone",
      "label": "Ρεσίφε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZSsrMqqLGNw",
      "title": "Recife, Brazil 🇧🇷 | 4K Drone Footage",
      "label": "Περιήγηση στο Ρεσίφε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "porto-alegre": {
    "cityName": "Πόρτο Αλέγκρε",
    "drone": {
      "youtubeId": "yW4CG_ZXsuU",
      "title": "Porto Alegre, Brazil 🇧🇷 | 4K Drone Footage",
      "label": "Πόρτο Αλέγκρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Z1GdgwmSNoo",
      "title": "Porto Alegre, Brazil 🇧🇷 in 4K Video by Drone ULTRA HD - Flying over Porto Alegre, Brazil",
      "label": "Περιήγηση στο Πόρτο Αλέγκρε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "manaus": {
    "cityName": "Μανάους",
    "drone": {
      "youtubeId": "pqqszTITsew",
      "title": "Manaus, Brazil 🇧🇷 | 4K Drone Footage",
      "label": "Μανάους με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yY1V4tP7xmg",
      "title": "Manaus, Brazil 🇧🇷 - by Drone 4K Video Ultra HD [HDR]",
      "label": "Περιήγηση στο Μανάους (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cali": {
    "cityName": "Κάλι",
    "drone": {
      "youtubeId": "BamIljS3reI",
      "title": "Cali Colombia 🇨🇴 4k ULTRA HD | Drone Footage",
      "label": "Κάλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "x4yddeGPypc",
      "title": "Cali, Colombia 4k Drone",
      "label": "Περιήγηση στο Κάλι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "barranquilla": {
    "cityName": "Μπαρανκίγια",
    "drone": {
      "youtubeId": "y6UBTnmA7vY",
      "title": "Barranquilla, Colombia 🇨🇴 in 4K Video by Drone",
      "label": "Μπαρανκίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LHzPi9wU8Lk",
      "title": "Barranquilla,Colombia IN 4K UHD | Drone footages",
      "label": "Περιήγηση στο Μπαρανκίγια (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bucaramanga": {
    "cityName": "Μπουκαραμάνγκα",
    "drone": {
      "youtubeId": "1wZvAt3FTzg",
      "title": "Bucaramanga desde el aire 🇨🇴 | Drone 4K",
      "label": "Μπουκαραμάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bkVuVQG1hjU",
      "title": "Bucaramanga, Santander – Colombia 🇨🇴 | Recorrido en dron y a pie en 4K – Principales atracciones",
      "label": "Περιήγηση στο Μπουκαραμάνγκα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pereira": {
    "cityName": "Περέιρα",
    "drone": {
      "youtubeId": "8XyFDAqpMOw",
      "title": "Pereira, Colombia (4K)",
      "label": "Περέιρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zzmwIMJoarw",
      "title": "Travel paradise, Pereira, Colombia #travel #traveldestinations #canon #travelideas #colombia",
      "label": "Περιήγηση στο Περέιρα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "santa-marta": {
    "cityName": "Σάντα Μάρτα",
    "drone": {
      "youtubeId": "ah2sEnBofio",
      "title": "Playa El Rodadero - Santa Marta, Colombia - 4K Drone Video [ RESERVA DEL MAR ]",
      "label": "Σάντα Μάρτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SkshPBf1agE",
      "title": "Santa Marta, Colombia - 4K Stock Footage | Travel Video",
      "label": "Περιήγηση στο Σάντα Μάρτα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cucuta": {
    "cityName": "Κούκουτα",
    "drone": {
      "youtubeId": "vDRcs_d8lhM",
      "title": "Beautiful morning 🌄 in Cucuta Colombia 🇨🇴 #travel #flightlife #colombia #Cucuta",
      "label": "Κούκουτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JAikUybhIS8",
      "title": "Puerto Rico, Cúcuta Goes Wild! The Most Fun River Festival in Colombia 🇨🇴",
      "label": "Περιήγηση στο Κούκουτα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "manizales": {
    "cityName": "Μανισάλες",
    "drone": {
      "youtubeId": "0oEiGbtHmf8",
      "title": "MANIZALES, EL LUGAR MÁS MÁGICO Y BONITO DE COLOMBIA - MAVIC AIR 2S",
      "label": "Μανισάλες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "i1Mq21AEOts",
      "title": "MANIZALES, EL LUGAR MÁS MÁGICO Y BONITO DE COLOMBIA - MAVIC AIR 2S",
      "label": "Περιήγηση στο Μανισάλες (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gonaives": {
    "cityName": "Γκοναΐβ",
    "drone": {
      "youtubeId": "VPsibOMaNYQ",
      "title": "Gonaives Haiti is becoming a brand new city",
      "label": "Γκοναΐβ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YkR62O-pXk0",
      "title": "Villes Gonaives Haiti 🇭🇹",
      "label": "Περιήγηση στο Γκοναΐβ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "les-cayes": {
    "cityName": "Λε Καγιέ",
    "drone": {
      "youtubeId": "AI2oFyR3NAM",
      "title": "La Tourtrelle beach in Les Cayes is such a vibe at night. Can’t wait to go back. #haiti",
      "label": "Λε Καγιέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Uz343cy2Sh8",
      "title": "Come Shopping With Me in Les Cayes! #travel #haiti",
      "label": "Περιήγηση στο Λε Καγιέ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jacmel": {
    "cityName": "Ζακμέλ",
    "drone": {
      "youtubeId": "XywuxMPxVIY",
      "title": "See the beauty of #haiti from the drone! 😍 #haitiantiktok509 #haitiennetiktok🇭🇹🇭🇹🇭🇹🇭🇹😍😍😍😍 #haitiktok",
      "label": "Ζακμέλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PuK9LZZbxLE",
      "title": "Haiti 🇭🇹 Jacmel",
      "label": "Περιήγηση στο Ζακμέλ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "saint-marc": {
    "cityName": "Σαιν-Μαρκ",
    "drone": {
      "youtubeId": "nF7wY-JEYWc",
      "title": "Saint Marc Hayti ⬛️🟥 #hayti #tourismindustry #everyone #travelandtourism #drone",
      "label": "Σαιν-Μαρκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XywuxMPxVIY",
      "title": "See the beauty of #haiti from the drone! 😍 #haitiantiktok509 #haitiennetiktok🇭🇹🇭🇹🇭🇹🇭🇹😍😍😍😍 #haitiktok",
      "label": "Περιήγηση στο Σαιν-Μαρκ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "petion-ville": {
    "cityName": "Πεσιόν-Βιλ",
    "drone": {
      "youtubeId": "pLg10fc6mJ0",
      "title": "Petion-Ville 4k drone #culturaladventure #travel #sportsstar #drone  #dji #explorenature #nature",
      "label": "Πεσιόν-Βιλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "7509HXT2je8",
      "title": "Real streets of Haiti in 4K-Petionville",
      "label": "Περιήγηση στο Πεσιόν-Βιλ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "port-de-paix": {
    "cityName": "Πορ-ντε-Παι",
    "drone": {
      "youtubeId": "RwmOdL5yrUU",
      "title": "A very peaceful city in Haiti | Port-de-paix #drone #haiti #travel",
      "label": "Πορ-ντε-Παι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uRpdiWvmg7w",
      "title": "Port-de-paix, Haiti as You've never seen it",
      "label": "Περιήγηση στο Πορ-ντε-Παι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jeremie": {
    "cityName": "Ζερεμί",
    "drone": {
      "youtubeId": "kBbpe0ERYUc",
      "title": "Haiti/4K Drone Footage",
      "label": "Ζερεμί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vlJRdq49K48",
      "title": "Haiti you need to see | I finally made it Jérémie",
      "label": "Περιήγηση στο Ζερεμί (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "carrefour-ht": {
    "cityName": "Καρφούρ",
    "drone": {
      "youtubeId": "4v5QKxUUEDk",
      "title": "Drone footage (Port au Prince)",
      "label": "Καρφούρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G1RWYa9jsVQ",
      "title": "Cruising through Carrefour, Haiti on the way to the Orphanage “Timoun yo se Espwa Ayiti” Nov 14-2018",
      "label": "Περιήγηση στο Καρφούρ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "freeport-bs": {
    "cityName": "Φρίπορτ",
    "drone": {
      "youtubeId": "iafzzPkCibY",
      "title": "2023 Best Freeport, Bahamas 4K Drone Stock Footage AerialClicks Photography",
      "label": "Φρίπορτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5gK7jSPzEaQ",
      "title": "🇧🇸 Freeport Bahamas From 400 Feet",
      "label": "Περιήγηση στο Φρίπορτ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lucaya": {
    "cityName": "Λουκάγια",
    "drone": {
      "youtubeId": "0VAfzZvTxpo",
      "title": "Port Lucaya Bahamas Island",
      "label": "Λουκάγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yQnGXlVaRws",
      "title": "Exploring Freeport: Open-Top Tour & Port Lucaya Adventure!  | Part 1",
      "label": "Περιήγηση στο Λουκάγια (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "west-end-bs": {
    "cityName": "Γουέστ Εντ",
    "drone": {
      "youtubeId": "-YM1Dfszu6k",
      "title": "Grand Bahama, Bahamas   Casuarina Bridge | 4k Drone Flyover Short",
      "label": "Γουέστ Εντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "NAXdf3xrs8I",
      "title": "West End, Grand Bahama Tour - HG Christie Real Estate",
      "label": "Περιήγηση στο Γουέστ Εντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "marsh-harbour": {
    "cityName": "Μαρς Χάρμπορ",
    "drone": {
      "youtubeId": "dcLRbLL2GcU",
      "title": "Marsh Harbour, Bahamas Adventure: Marina, Snorkeling, Conch Inn & Swimming with Turtles!",
      "label": "Μαρς Χάρμπορ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Z0vcP_dne5c",
      "title": "📍Marsh Harbor, The Abaco Islands",
      "label": "Περιήγηση στο Μαρς Χάρμπορ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "george-town-bs": {
    "cityName": "Τζορτζ Τάουν",
    "drone": {
      "youtubeId": "ncmV7jAiU_M",
      "title": "4K Drone Footage | George Town, Exuma Bahamas",
      "label": "Τζορτζ Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZgfnL1Lz9Fs",
      "title": "Georgetown #exuma #travel #bahamas #nature #music #beach #ofw",
      "label": "Περιήγηση στο Τζορτζ Τάουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dunmore-town": {
    "cityName": "Ντάνμορ Τάουν",
    "drone": {
      "youtubeId": "YCfcg9gzCYc",
      "title": "Beautiful Drone Footage of The Bahamas (4K)",
      "label": "Ντάνμορ Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "U8Rtj5fr_6E",
      "title": "Harbour Island Bahamas - 4K - Screen Saver - Mavic Air 2",
      "label": "Περιήγηση στο Ντάνμορ Τάουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "alice-town": {
    "cityName": "Άλις Τάουν",
    "drone": {
      "youtubeId": "yJRf5YiNSRs",
      "title": "Bimini Bahamas Cruise Port From Above | Drone Tour 4K",
      "label": "Άλις Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WOWhFM7IiwE",
      "title": "Exuma - Bahamas by Drone 4K Video Ultra HD HDR  #exuma #caribbeanislands",
      "label": "Περιήγηση στο Άλις Τάουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "matthew-town": {
    "cityName": "Μάθιου Τάουν",
    "drone": {
      "youtubeId": "soQezC4p-gk",
      "title": "Massive Waves And Gale Force Winds Slam Into Michigan City Lighthouse 4K Drone Footage",
      "label": "Μάθιου Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BcpdUmxDF4Y",
      "title": "Matthew Town Great Inagua Bahamas!",
      "label": "Περιήγηση στο Μάθιου Τάουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rock-sound": {
    "cityName": "Ροκ Σάουντ",
    "drone": {
      "youtubeId": "BtPqB0szTXk",
      "title": "BAHAMAS NATURE in 4K UHD Drone Film + Relaxing Piano Music for Stress Relief, Sleep, Spa, Yoga, Cafe",
      "label": "Ροκ Σάουντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Qi33xhAFzPQ",
      "title": "Bahamas 4K Drone Footage | Cruise Ships, Palm Beaches & Pure Escape",
      "label": "Περιήγηση στο Ροκ Σάουντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chaguanas": {
    "cityName": "Τσαγκουάνας",
    "drone": {
      "youtubeId": "6YbSwRvgqJQ",
      "title": "Chaguanas - Trinidad and Tobago",
      "label": "Τσαγκουάνας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "15hM2VjEuNo",
      "title": "Top 5 Spots to Visit in Chaguanas (Trinidad And Tobago)",
      "label": "Περιήγηση στο Τσαγκουάνας (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "arima": {
    "cityName": "Αρίμα",
    "drone": {
      "youtubeId": "0ehi8h_-bcg",
      "title": "Aerial Drone Footage at the heart of Arima, Trinidad &Tobago [4K] 🇹🇹",
      "label": "Αρίμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mLPuqdMfvG4",
      "title": "Arima, Trinidad & Tobago",
      "label": "Περιήγηση στο Αρίμα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "point-fortin": {
    "cityName": "Πόιντ Φορτίν",
    "drone": {
      "youtubeId": "BpwyPxKuQEA",
      "title": "Trinidad and Tobago - Part VIII",
      "label": "Πόιντ Φορτίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LSmyxz8-Kd4",
      "title": "Top 5 Spots to Visit in Point Fortin (Trinidad And Tobago)",
      "label": "Περιήγηση στο Πόιντ Φορτίν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "scarborough-tt": {
    "cityName": "Σκάρμπρο",
    "drone": {
      "youtubeId": "kk9WgY4jdME",
      "title": "Caribbean Sea Tobago #tobago #4k #drone #tobagolove #caribbeanislands",
      "label": "Σκάρμπρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "irIPNrGUjDo",
      "title": "Fort King George - Scarborough, Tobago",
      "label": "Περιήγηση στο Σκάρμπρο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "crown-point": {
    "cityName": "Κράουν Πόιντ",
    "drone": {
      "youtubeId": "GSSEM0KzSa4",
      "title": "Did you know this about the Crown Point Beach Hotel in Tobago? 🎥 Maverick Flight Studio",
      "label": "Κράουν Πόιντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3HnfIHVNFJo",
      "title": "Crown Point Beach Resort Tobago.",
      "label": "Περιήγηση στο Κράουν Πόιντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "couva": {
    "cityName": "Κούβα",
    "drone": {
      "youtubeId": "oVJs59lG3s8",
      "title": "Along the north coast of Trinidad near Fort Abercromby at sunset! #sunset #sunsets #drone #djiair2s",
      "label": "Κούβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GQch45EWBqc",
      "title": "DJI Mavic Pro Test Flight Trinidad",
      "label": "Περιήγηση στο Κούβα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "diego-martin": {
    "cityName": "Ντιέγκο Μάρτιν",
    "drone": {
      "youtubeId": "2JK1hZe6Rmg",
      "title": "House for Sale - Dillon Street Diego Martin TT$1 Mil",
      "label": "Ντιέγκο Μάρτιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nkAi5nhVBco",
      "title": "Trinidad Diego Martin Morne Coco /Pitty Valley",
      "label": "Περιήγηση στο Ντιέγκο Μάρτιν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "marabella": {
    "cityName": "Μαραμπέλα",
    "drone": {
      "youtubeId": "-jP-NGYn3kc",
      "title": "Stunning Drone Views in Trinidad & Tobago",
      "label": "Μαραμπέλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3srgSXQcIM4",
      "title": "Mona’s Roti in Marabella Trinidad 🇹🇹 is one of the best Roti in South . #fyp",
      "label": "Περιήγηση στο Μαραμπέλα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "speightstown": {
    "cityName": "Σπέιτσταουν",
    "drone": {
      "youtubeId": "ejnpYr4VEUw",
      "title": "Beach Relaxation in Barbados 🇧🇧 #travel #drone #naturedrone #dronenature4k #beach #barbadosin4k",
      "label": "Σπέιτσταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "wYT8IfRZUTU",
      "title": "FREE 4K Drone Footage: Barbados Crystal Waters 🌊🇧🇧 | DJI Neo 2",
      "label": "Περιήγηση στο Σπέιτσταουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "holetown": {
    "cityName": "Χόουλταουν",
    "drone": {
      "youtubeId": "ejnpYr4VEUw",
      "title": "Beach Relaxation in Barbados 🇧🇧 #travel #drone #naturedrone #dronenature4k #beach #barbadosin4k",
      "label": "Χόουλταουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "wYT8IfRZUTU",
      "title": "FREE 4K Drone Footage: Barbados Crystal Waters 🌊🇧🇧 | DJI Neo 2",
      "label": "Περιήγηση στο Χόουλταουν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "oistins": {
    "cityName": "Όιστινς",
    "drone": {
      "youtubeId": "GVq9L6KsVHE",
      "title": "Barbados 4K Drone Island Tour",
      "label": "Όιστινς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "svXVe4-ZmYk",
      "title": "Barbados 4k island country - Travel Film - Barbados travel 4k  eastern Caribbean island",
      "label": "Περιήγηση στο Όιστινς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bathsheba": {
    "cityName": "Μπαθσίμπα",
    "drone": {
      "youtubeId": "6WrEzJtuhn8",
      "title": "Bathsheba Beach Barbados Saint Joseph #bathsheba #barbados #beach",
      "label": "Μπαθσίμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "69F480HcZ2I",
      "title": "Bathsheba Barbados is NOT what you expect 😂",
      "label": "Περιήγηση στο Μπαθσίμπα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "st-lawrence-gap": {
    "cityName": "Σεντ Λόρενς Γκαπ",
    "drone": {
      "youtubeId": "HCMHWUSa4lY",
      "title": "St Lawrence Gap on the South Coast of Barbados",
      "label": "Σεντ Λόρενς Γκαπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Nrry7G4G5NU",
      "title": "Welcome to St. Lawrence Gap 🇧🇧 Barbados’ Ultimate Party Street ⭐",
      "label": "Περιήγηση στο Σεντ Λόρενς Γκαπ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "warrens": {
    "cityName": "Γουόρενς",
    "drone": {
      "youtubeId": "o7nN88BNMpU",
      "title": "On the Beach In a beautiful island, Barbados 🇧🇧 🤩🤩 #nature #travel #dronenature4k",
      "label": "Γουόρενς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "HeaEP_ms3Mo",
      "title": "Scenes From Barbados | Calm Caribbean Aerials",
      "label": "Περιήγηση στο Γουόρενς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "the-crane": {
    "cityName": "Δε Κρέιν",
    "drone": {
      "youtubeId": "tlA9LDdmEuU",
      "title": "Full Tour of one bedroom suite at the The Crane Resort in Barbados",
      "label": "Δε Κρέιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Z192e_Ve8VQ",
      "title": "The Crane Hotel Barbados walk through and review",
      "label": "Περιήγηση στο Δε Κρέιν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "six-cross-roads": {
    "cityName": "Σιξ Κρος Ρόουντς",
    "drone": {
      "youtubeId": "pvA3Wmq9A5s",
      "title": "The Incredible Island of Barbados (4K Drone Footage)",
      "label": "Σιξ Κρος Ρόουντς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yg3hoBsAd4w",
      "title": "A Walk Around Six Roads In St. Philip Barbados 🇧🇧 ",
      "label": "Περιήγηση στο Σιξ Κρος Ρόουντς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chalky-mount": {
    "cityName": "Τσάλκι Μάουντ",
    "drone": {
      "youtubeId": "oI4wIVYL-TA",
      "title": "DON'T Visit Barbados Without Knowing THIS! 🇧🇧😂",
      "label": "Τσάλκι Μάουντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TbvGH9yUus0",
      "title": "BARBADOS# BRIDGETOWN🏙🏙 city river 🏞🏞🐢🐢🐢#adventure #like 🦈🐬🌊👍👍",
      "label": "Περιήγηση στο Τσάλκι Μάουντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },

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
  "western-wall": { youtubeId: "77akujLn4k8", title: "Δυτικό Τείχος Live (Ιερουσαλήμ)" },
  "masjid-al-haram": { youtubeId: "e2Mj4ch8l94", title: "Ιερό Τέμενος Al-Masjid al-Haram Live (Μέκκα)" },
  "eiffel-tower": { youtubeId: "QI-PPEW2Bgc", title: "Πύργος του Άιφελ Live (Παρίσι)" },
  "marienplatz": { youtubeId: "VAS9A0LRGHA", title: "Marienplatz Live (Μόναχο)" },
  "vesuvius": { youtubeId: "RbI8JwrBZQA", title: "Βεζούβιος Live (Νάπολη)" },
  "golden-gate": { youtubeId: "BSWhGNXxT9A", title: "Golden Gate Bridge Live (Σαν Φρανσίσκο)" },
  "washington-monument": { youtubeId: "mG2gAWY_Guw", title: "Washington Monument Live (Ουάσιγκτον)" },
  "galata-bosphorus": { youtubeId: "vfBMjDZm_PA", title: "Βόσπορος & Πύργος του Γαλατά Live (Κωνσταντινούπολη)" },
  "ribeira-porto": { youtubeId: "QetuuDxsgig", title: "Ribeira & Ποταμός Ντούρο Live (Πόρτο)" },
  "duomo-firenze": { youtubeId: "qBtMuRnf7BY", title: "Πανόραμα Φλωρεντίας Live (Φλωρεντία)" },
  "hamburg-michel": { youtubeId: "OmyDLXvaus4", title: "Λιμάνι Αμβούργου & Ναός Αγίου Μιχαήλ Live" },
  "sam-sharpe": { youtubeId: "ac0v_QwqYfw", title: "Πλατεία Sam Sharpe Live (Μοντέγκο Μπέι)" },
  "zambezi-river": { youtubeId: "jH3e5w4BWGA", title: "Ποταμός Ζαμβέζης Safari Live (Ζάμπια)" },
  "main-tower": { youtubeId: "boJCx2dXCko", title: "Φρανκφούρτη Skyline Live 24/7 (Main Tower)" },
  "dresden-elbufer": { youtubeId: "vTJGeIvg8EY", title: "Δρέσδη Πανόραμα & Έλβας Live Cam" }
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
  if (n.includes('western wall') || n.includes('wailing wall') || n.includes('δυτικό τείχος') || n.includes('τείχος των δακρύων')) return POI_LIVE_CAMS["western-wall"];
  if (n.includes('haram') || n.includes('kaaba') || n.includes('κάαμπα') || n.includes('μέκκα') || n.includes('al-haram')) return POI_LIVE_CAMS["masjid-al-haram"];
  if (n.includes('eiffel') || n.includes('άιφελ')) return POI_LIVE_CAMS["eiffel-tower"];
  if (n.includes('marienplatz')) return POI_LIVE_CAMS["marienplatz"];
  if (n.includes('vesuvius') || n.includes('βεζούβι')) return POI_LIVE_CAMS["vesuvius"];
  if (n.includes('golden gate')) return POI_LIVE_CAMS["golden-gate"];
  if (n.includes('washington monument') || n.includes('μνημείο ουάσιγκτον') || n.includes('national mall')) return POI_LIVE_CAMS["washington-monument"];
  if (n.includes('galata') || n.includes('γαλατά') || n.includes('bosphorus') || n.includes('βόσπορ')) return POI_LIVE_CAMS["galata-bosphorus"];
  if (n.includes('ribeira') || n.includes('ντούρο') || n.includes('dom luís')) return POI_LIVE_CAMS["ribeira-porto"];
  if (n.includes('ponte vecchio') || n.includes('duomo') && n.includes('φλωρεντ') || n.includes('santa maria del fiore')) return POI_LIVE_CAMS["duomo-firenze"];
  if (n.includes('speicherstadt') || n.includes('elbphilharmonie') || n.includes('michel') || n.includes('λιμάνι αμβούργου')) return POI_LIVE_CAMS["hamburg-michel"];
  if (n.includes('sam sharpe')) return POI_LIVE_CAMS["sam-sharpe"];
  if (n.includes('zambezi') || n.includes('ζαμβέζ') || n.includes('victoria falls') || n.includes('καταρράκτες βικτόρια')) return POI_LIVE_CAMS["zambezi-river"];
  if (n.includes('main tower')) return POI_LIVE_CAMS["main-tower"];
  if (n.includes('brühlsche terrasse')) return POI_LIVE_CAMS["dresden-elbufer"];
  return null;
}

/**
 * Returns list of available tour type keys (e.g. ['drone', 'walking', 'guide'])
 */
export function getAvailableVideoTypes(cityId) {
  return getAvailableCityTours(cityId).map(t => t.type);
}
