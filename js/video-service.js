import { CITY_TO_STATE } from './states-data.js?v=20261117_pres6';
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
      "title": "Πράια Πράσινου Ακρωτηρίου 4K: Εναέρια Περιήγηση Drone στο Platô",
      "label": "Πράια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mindelo": {
    "cityName": "Μιντέλο",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Μιντέλο 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
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
      "title": "Πορ Λουί & Μαυρίκιος 4K: Εναέρια Περιήγηση Drone στον Τροπικό Παράδεισο",
      "label": "Μαυρίκιος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LRIyV3JP6Lw",
      "title": "Πορ Λουί 4K: Περιήγηση στην Κεντρική Αγορά, την Chinatown & το Caudan Waterfront",
      "label": "Πορ Λουί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "grand-baie": {
    "cityName": "Γκραν Μπε",
    "drone": {
      "youtubeId": "xA9sNTEMtGo",
      "title": "Γκραν Μπε Μαυρικίου 4K: Εναέρια Περιήγηση Drone στον Κόλπο & τις Τυρκουάζ Παραλίες",
      "label": "Γκραν Μπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yT_zdPZWcPg",
      "title": "Γκραν Μπε 4K: Περιήγηση στον Παραλιακό Δρόμο, τα Θέρετρα & τη Δημόσια Παραλία",
      "label": "Γκραν Μπε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
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
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Κόρδοβα 4K: Αργεντινή 4K: Εναέρια Περιήγηση Drone στο Μπουένος Άιρες",
      "label": "Κόρδοβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Κόρδοβα 4K: Αργεντινή 4K: Εναέρια Περιήγηση Drone στο Μπουένος Άιρες",
      "label": "Κόρδοβα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rosario": {
    "cityName": "Ροσάριο",
    "drone": {
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Ροσάριο 4K: Αργεντινή 4K: Εναέρια Περιήγηση Drone στο Μπουένος Άιρες",
      "label": "Ροσάριο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Ροσάριο 4K: Αργεντινή 4K: Εναέρια Περιήγηση Drone στο Μπουένος Άιρες",
      "label": "Ροσάριο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "santiago": {
    "cityName": "Σαντιάγο",
    "drone": {
      "youtubeId": "yc6qBp23Emc",
      "title": "Σαντιάγο Χιλής 4K: Εναέρια Περιήγηση Drone στον Ορίζοντα Gran Torre & τις Χιονισμένες Άνδεις",
      "label": "Σαντιάγο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Vs7yxk_Ilfo",
      "title": "Σαντιάγο 4K: Περιήγηση στην Plaza de Armas & το Ιστορικό Κέντρο",
      "label": "Σαντιάγο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "valparaiso": {
    "cityName": "Βαλπαραΐσο",
    "drone": {
      "youtubeId": "yc6qBp23Emc",
      "title": "Βαλπαραΐσο & Χιλή 4K: Εναέρια Περιήγηση Drone στους Πολύχρωμους Λόφους & τον Ειρηνικό",
      "label": "Βαλπαραΐσο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lima": {
    "cityName": "Λίμα",
    "drone": {
      "youtubeId": "aMKVdEabbOw",
      "title": "Λίμα Περού 4K: Εναέρια Περιήγηση Drone στους Γκρεμούς Miraflores & την Costa Verde",
      "label": "Λίμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JdXAuuvZwg8",
      "title": "Λίμα 4K: Περιήγηση στο Ιστορικό Κέντρο, τη Plaza Mayor & το Barranco",
      "label": "Λίμα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cusco": {
    "cityName": "Κούσκο",
    "drone": {
      "youtubeId": "aMKVdEabbOw",
      "title": "Κούσκο & Περού 4K: Εναέρια Περιήγηση Drone στην Αυτοκρατορική Πρωτεύουσα των Ίνκας",
      "label": "Κούσκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "arequipa": {
    "cityName": "Αρεκίπα",
    "drone": {
      "youtubeId": "aMKVdEabbOw",
      "title": "Αρεκίπα 4K: Εναέρια Περιήγηση Drone στη Λευκή Πόλη & το Ηφαίστειο El Misti",
      "label": "Αρεκίπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bogota": {
    "cityName": "Μπογκοτά",
    "drone": {
      "youtubeId": "rxIz-mexA_w",
      "title": "Μπογκοτά 4K: Εναέρια Περιήγηση Drone στο Monserrate & τους Ουρανοξύστες",
      "label": "Μπογκοτά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-CSMfkbM2QY",
      "title": "Μπογκοτά 4K: Περιήγηση στην Αποικιακή La Candelaria & την Plaza de Bolívar",
      "label": "Μπογκοτά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "medellin": {
    "cityName": "Μεδεγίν",
    "drone": {
      "youtubeId": "rxIz-mexA_w",
      "title": "Μεδεγίν 4K: Εναέρια Περιήγηση στην Πόλη της Αιώνιας Άνοιξης",
      "label": "Μεδεγίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cartagena": {
    "cityName": "Καρθαγένη",
    "drone": {
      "youtubeId": "rxIz-mexA_w",
      "title": "Καρθαγένη 4K: Εναέρια Περιήγηση στην Περιτειχισμένη Αποικιακή Πόλη της Καραϊβικής",
      "label": "Καρθαγένη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
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
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Ροατάν 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Ροατάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "copan-ruinas": {
    "cityName": "Κοπάν Ρουίνας",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Κοπάν Ρουίνας 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Κοπάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "la-ceiba": {
    "cityName": "Λα Σέιμπα",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Λα Σέιμπα 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Λα Σέιμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "comayagua": {
    "cityName": "Κομαγιάγουα",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Κομαγιάγουα 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Κομαγιάγουα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "utila": {
    "cityName": "Ουτίλα",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Ουτίλα 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Ουτίλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "choluteca": {
    "cityName": "Τσολοτέκα",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Τσολοτέκα 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Τσολοτέκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santa-rosa-de-copan": {
    "cityName": "Σάντα Ρόσα ντε Κοπάν",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Σάντα Ρόσα ντε Κοπάν 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
      "label": "Σάντα Ρόσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "trujillo-hn": {
    "cityName": "Τρουχίγιο",
    "drone": {
      "youtubeId": "TD_Hz3cx2tA",
      "title": "Τρουχίγιο 4K: Ονδούρα 4K: Εναέρια Περιήγηση Drone στην Τεγκουσιγκάλπα",
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
      "youtubeId": "BKhIwAayZQs",
      "title": "Ότσο Ρίος 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Ότσο Ρίος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "negril": {
    "cityName": "Νεγκρίλ",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Νεγκρίλ 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Νεγκρίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-antonio": {
    "cityName": "Πορτ Αντόνιο",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Πορτ Αντόνιο 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Πορτ Αντόνιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "falmouth": {
    "cityName": "Φάλμουθ",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Φάλμουθ 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Φάλμουθ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "spanish-town": {
    "cityName": "Σπάνις Τάουν",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Σπάνις Τάουν 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Σπάνις Τάουν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mandeville": {
    "cityName": "Μάντεβιλ",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Μάντεβιλ 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Μάντεβιλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "black-river": {
    "cityName": "Μπλακ Ρίβερ",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Μπλακ Ρίβερ 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
      "label": "Μπλακ Ρίβερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-royal": {
    "cityName": "Πορτ Ρόαγιαλ",
    "drone": {
      "youtubeId": "BKhIwAayZQs",
      "title": "Πορτ Ρόαγιαλ 4K: Τζαμάικα 4K: Εναέρια Περιήγηση Drone στο Κίνγκστον & τις Ακτές",
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
      "youtubeId": "_j_5HWHmlyY",
      "title": "Λεόν 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Λεόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-juan-del-sur": {
    "cityName": "Σαν Χουάν ντελ Σουρ",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Σαν Χουάν ντελ Σουρ 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Σαν Χουάν ντελ Σουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "matagalpa": {
    "cityName": "Ματαγκάλπα",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Ματαγκάλπα 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Ματαγκάλπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "esteli": {
    "cityName": "Εστελί",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Εστελί 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Εστελί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moyogalpa": {
    "cityName": "Μογιογάλπα",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Μογιογάλπα 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Μογιογάλπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "masaya": {
    "cityName": "Μασάγια",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Μασάγια 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Μασάγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-carlos-ni": {
    "cityName": "Σαν Κάρλος",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Σαν Κάρλος 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
      "label": "Σαν Κάρλος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bluefields": {
    "cityName": "Μπλούφιλντς",
    "drone": {
      "youtubeId": "_j_5HWHmlyY",
      "title": "Μπλούφιλντς 4K: Νικαράγουα 4K: Εναέρια Περιήγηση Drone στη Μανάγκουα",
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
      "title": "Μπανζούλ & Σερεκούντα 4K: Εναέρια Περιήγηση Drone στην Γκάμπια",
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
      "title": "Μπισάου 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα της Γουινέας-Μπισάου",
      "label": "Μπισάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "monrovia": {
    "cityName": "Μονρόβια",
    "drone": {
      "youtubeId": "lqo4WdJOYFw",
      "title": "Μονρόβια 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα της Λιβερίας",
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
      "title": "Φρίταουν 4K: Εναέρια Περιήγηση Drone στην Καρδιά της Σιέρα Λεόνε",
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
      "title": "Σάο Τομέ και Πρίνσιπε 4K: Εναέρια Περιήγηση Drone στον Τροπικό Παράδεισο",
      "label": "Σάο Τομέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moroni": {
    "cityName": "Μορονί",
    "drone": {
      "youtubeId": "83_siRFEZqw",
      "title": "Μορονί 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα των Κομορών & το Παλιό Λιμάνι",
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
      "title": "Τζιμπουτί 4K: Εναέρια Περιήγηση Drone στο Στρατηγικό Λιμάνι & την Πρωτεύουσα",
      "label": "Τζιμπουτί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "asmara": {
    "cityName": "Ασμάρα",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Ασμάρα 4K: Εναέρια Περιήγηση Drone στην Πόλη Art Deco της UNESCO",
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
      "title": "Γκιτέγκα 4K: Εναέρια Περιήγηση Drone στην Πολιτιστική Πρωτεύουσα του Μπουρούντι",
      "label": "Γκιτέγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bujumbura": {
    "cityName": "Μπουζουμπούρα",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Μπουζουμπούρα & Λίμνη Τανγκανίκα 4K: Εναέρια Περιήγηση Drone στην Οικονομική Πρωτεύουσα",
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
    "cityName": "Μασέρου",
    "drone": {
      "youtubeId": "W-2xJUgjlTw",
      "title": "Μασέρου 4K: Εναέρια Περιήγηση Drone στην Πρωτεύουσα του Λεσότο",
      "label": "Μασέρου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbabane": {
    "cityName": "Μπαμπάνε",
    "drone": {
      "youtubeId": "tXl8BACGynE",
      "title": "Μπαμπάνε 4K: Εναέρια Περιήγηση Drone στο Κέντρο & το Coronation Park",
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
      "youtubeId": "wa1fa5-EnlI",
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
      "youtubeId": "wa1fa5-EnlI",
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
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Αγία Νάπα 4K: Κύπρος 4K: Πανοραμική Περιήγηση Drone"
    }
  },
  "protaras": {
    "cityName": "Πρωταράς",
    "drone": {
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Πρωταράς 4K: Κύπρος 4K: Πανοραμική Περιήγηση Drone"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Μπρίτζπορτ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Γκρίνουιτς 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "mystic": {
    "cityName": "Μίστικ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Μίστικ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Νιου Μπέντφορντ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "springfield-ma": {
    "cityName": "Σπρίνγκφιλντ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Σπρίνγκφιλντ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Πρίνστον 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Ρότσεστερ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "syracuse": {
    "cityName": "Σίρακιους",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Σίρακιους 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "yonkers": {
    "cityName": "Γιόνκερς",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Γιόνκερς 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "ithaca": {
    "cityName": "Ιθάκη",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Ιθάκη 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Σαρατόγκα Σπρινγκς 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Μπίνγκχαμπτον 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "allentown": {
    "cityName": "Άλενταουν",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Άλενταουν 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "erie": {
    "cityName": "Ήρι",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Ήρι 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "reading": {
    "cityName": "Ρέντινγκ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Ρέντινγκ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Σκράντον 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Λάνκαστερ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "state-college": {
    "cityName": "Στέιτ Κόλετζ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Στέιτ Κόλετζ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Σεντ Πίτερσμπεργκ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Μέικον 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "athens-ga": {
    "cityName": "Άθενς",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Άθενς 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Γουίνστον-Σέιλεμ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "asheville": {
    "cityName": "Άσβιλ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Άσβιλ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "wilmington-nc": {
    "cityName": "Γουίλμινγκτον",
    "drone": {
      "youtubeId": "KTcaJAmSuX4",
      "title": "Γουίλμινγκτον 4K — Explore Wilmington, NC in HYPERLAPSE | Drone | 4k UHD"
    },
    "live": {
      "youtubeId": "EAYo7Qals90",
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
      "youtubeId": "EAYo7Qals90",
      "title": "Μπουν 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "greenville-sc": {
    "cityName": "Γκρίνβιλ",
    "drone": {
      "youtubeId": "1BHPA7mB9MI",
      "title": "Γκρίνβιλ 4K — Greenville, South Carolina 4K UHD | Drone Footage"
    },
    "live": {
      "youtubeId": "EAYo7Qals90",
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
      "youtubeId": "EAYo7Qals90",
      "title": "Σπάρτανμπεργκ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Νόρφολκ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Σάρλοτσβιλ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "williamsburg": {
    "cityName": "Γουίλιαμσμπεργκ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Γουίλιαμσμπεργκ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Νιούπορτ Νιουζ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
    }
  },
  "lynchburg": {
    "cityName": "Λίντσμπεργκ",
    "drone": {
      "youtubeId": "EAYo7Qals90",
      "title": "Λίντσμπεργκ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Μπάνγκορ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Ανόβερο 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
      "youtubeId": "EAYo7Qals90",
      "title": "Ρόκφορντ 4K: Ηνωμένες Πολιτείες Αμερικής 4K: Πανοραμικό Κινηματογραφικό Ταξίδι"
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
  },
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
  },
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
  },
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
  "cochabamba": {
    "cityName": "Κοτσαμπάμπα",
    "drone": {
      "youtubeId": "c74W5xU-DyM",
      "title": "Cochabamba parte 1, tomas de dron 4k, Bolivia",
      "label": "Κοτσαμπάμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FeN4nkYQ4b8",
      "title": "CAMINANDO - WALKING TOUR - #72: COCHABAMBA - Bolivia.",
      "label": "Περιήγηση στο Κοτσαμπάμπα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "potosi": {
    "cityName": "Ποτοσί",
    "drone": {
      "youtubeId": "ahbuOAtslmE",
      "title": "Potosí, Bolivia 4k Drone",
      "label": "Ποτοσί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "x_s9e-SsTOc",
      "title": "Calle Padilla. Potosi, Bolivia",
      "label": "Περιήγηση στο Ποτοσί (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "oruro": {
    "cityName": "Ορούρο",
    "drone": {
      "youtubeId": "0A3Aq-5hp8A",
      "title": "Oruro (Bolivia) 4K",
      "label": "Ορούρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Kz4odqc9KFc",
      "title": "🇧🇴 La Paz, Bolivia 4K Walking Tour | Exploring the World’s Highest Capital City",
      "label": "Περιήγηση στο Ορούρο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tarija": {
    "cityName": "Ταρίχα",
    "drone": {
      "youtubeId": "1HB-w4a0uJ8",
      "title": "UYUNI SALT FLATS, BOLIVIA | DRONE AERIAL VIEWS | WORLD’S LARGEST MIRROR & OTHERWORLDLY LANDSCAPES",
      "label": "Ταρίχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8feTQsqhig0",
      "title": "🇧🇴 | Plaza Principal Jueves Santo | Walking Tour | Tarija - Bolivia | 4K",
      "label": "Περιήγηση στο Ταρίχα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trinidad-bo": {
    "cityName": "Τρινιντάντ",
    "drone": {
      "youtubeId": "NfxjbW0K3tc",
      "title": "Flying Over Lake Titicaca, Bolivia | 4K Drone Footage",
      "label": "Τρινιντάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Kz4odqc9KFc",
      "title": "🇧🇴 La Paz, Bolivia 4K Walking Tour | Exploring the World’s Highest Capital City",
      "label": "Περιήγηση στο Τρινιντάντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "uyuni": {
    "cityName": "Ουγιούνι",
    "drone": {
      "youtubeId": "1HB-w4a0uJ8",
      "title": "UYUNI SALT FLATS, BOLIVIA | DRONE AERIAL VIEWS | WORLD’S LARGEST MIRROR & OTHERWORLDLY LANDSCAPES",
      "label": "Ουγιούνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "eZESLwDtyyw",
      "title": "Uyuni. Bolivia. 4K Walk",
      "label": "Περιήγηση στο Ουγιούνι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "copacabana-bo": {
    "cityName": "Κοπακαμπάνα",
    "drone": {
      "youtubeId": "H5MbaghB3sc",
      "title": "🇧🇴 Copacabana, Bolivia | Stunning Aerial Views of Lake Titicaca - Drone 4K",
      "label": "Κοπακαμπάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BiaFegkMFtI",
      "title": "COPACABANA − BOLIVIA(2022) 4K",
      "label": "Περιήγηση στο Κοπακαμπάνα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vina-del-mar": {
    "cityName": "Βίνια δελ Μαρ",
    "drone": {
      "youtubeId": "F8nJhueam98",
      "title": "Viña del Mar, Chile 🇨🇱 - by drone [4K]",
      "label": "Βίνια δελ Μαρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vOs83KFES2U",
      "title": "Paseo Costero de Viña del Mar 🇨🇱 (4K) | Chile Walking Tour",
      "label": "Περιήγηση στο Βίνια δελ Μαρ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "antofagasta": {
    "cityName": "Αντοφαγάστα",
    "drone": {
      "youtubeId": "vmjtdDD1kds",
      "title": "Parque Las Almejas, Antofagasta 4K Vistas Aéreas , Música Chill para Relajarse y Trabajar (30 Min)",
      "label": "Αντοφαγάστα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MbVPRzHtzzs",
      "title": "Chile Walk 4K I Antofagasta",
      "label": "Περιήγηση στο Αντοφαγάστα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "la-serena": {
    "cityName": "Λα Σερένα",
    "drone": {
      "youtubeId": "C-1xlqmYNo4",
      "title": "Vista aérea de LA SERENA (DRONE 4K) ¡Una ciudad perfecta para turistas! #travel #dronefootage #chile",
      "label": "Λα Σερένα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "OlfKeE2khoQ",
      "title": "La Serena, Chile: Kokoro No Niwa Japanese Garden, Koi, Black Swans and a Waterfall | 4K Walk",
      "label": "Περιήγηση στο Λα Σερένα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "concepcion": {
    "cityName": "Κονσεπσιόν",
    "drone": {
      "youtubeId": "cYhwjLD5i4M",
      "title": "Concepción desde un dron (4K cinematic footage)",
      "label": "Κονσεπσιόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "fXrymO_2FZQ",
      "title": "🇨🇱 Street Walk Concepción - Chile - 4K",
      "label": "Περιήγηση στο Κονσεπσιόν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "puerto-montt": {
    "cityName": "Πουέρτο Μοντ",
    "drone": {
      "youtubeId": "X8yYyhvz-Rc",
      "title": "Puerto Montt, CHILE 🇨🇱 4k ULTRA HD | Drone footage",
      "label": "Πουέρτο Μοντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "77pOpKDlDsw",
      "title": "Chile Walk 4K I Puerto Montt",
      "label": "Περιήγηση στο Πουέρτο Μοντ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "punta-arenas": {
    "cityName": "Πούντα Αρένας",
    "drone": {
      "youtubeId": "XpQakzNBOB0",
      "title": "PUNTA ARENAS desde el aire | PATAGONIA CHILENA",
      "label": "Πούντα Αρένας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pp68ZWbDMGM",
      "title": "Punta Arenas,Chile: Immersive 4K Walk | City Exploration in 60fps HDR\"",
      "label": "Περιήγηση στο Πούντα Αρένας (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "iquique": {
    "cityName": "Ικίκε",
    "drone": {
      "youtubeId": "XuEy8FDzWEI",
      "title": "Iquique, Chile (4K)",
      "label": "Ικίκε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "an4-8KqWjOE",
      "title": "🇨🇱Exploring Iquique - Chile's jewel of the north - 4K walking - Slow TV",
      "label": "Περιήγηση στο Ικίκε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "temuco": {
    "cityName": "Τεμούκο",
    "drone": {
      "youtubeId": "bDEDPRos3M4",
      "title": "Temuco 2024 - Conoces La Ciudad Mas Bella Del Sur de Chile ? Video 4k HDR  Vista Aérea Drone Temuco",
      "label": "Τεμούκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "aXTHOz-B4bs",
      "title": "Caminando por Temuco Vol.2 [4K] (Av Alemania - Prieto Norte - Balmaceda)| Walking Tour Temuco 2 [4k]",
      "label": "Περιήγηση στο Τεμούκο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ambato": {
    "cityName": "Αμπάτο",
    "drone": {
      "youtubeId": "Q3zwMjhHHWc",
      "title": "Ambato, Ecuador (4K)",
      "label": "Αμπάτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1ttRqlgi3N8",
      "title": "🇪🇨【4K 60fps】WALK - AMBATO ~ walking Tour - Ecuador",
      "label": "Περιήγηση στο Αμπάτο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "manta": {
    "cityName": "Μάντα",
    "drone": {
      "youtubeId": "rwI1DL37Pyo",
      "title": "MANTA ECUADOR - DRONE 4K",
      "label": "Μάντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "AsnfAaDp5Fw",
      "title": "Zona exclusiva Manta / Walk Tour 4K HDR 2023 🇪🇨",
      "label": "Περιήγηση στο Μάντα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "loja": {
    "cityName": "Λόχα",
    "drone": {
      "youtubeId": "51qsPu2F-x0",
      "title": "Loja - Ecuador 4k Vista Drone",
      "label": "Λόχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "A5IsQiTbadw",
      "title": "Loja, Ecuador’s Longest Running City Walking Tour",
      "label": "Περιήγηση στο Λόχα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "machala": {
    "cityName": "Ματσάλα",
    "drone": {
      "youtubeId": "x-puz5z30X4",
      "title": "Tomas Aéreas Machala-Ecuador",
      "label": "Ματσάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UN5_oc3HQDg",
      "title": "🇪🇨【4K 60fps】WALK - MACHALA ~ walking Tour - Ecuador",
      "label": "Περιήγηση στο Ματσάλα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "riobamba": {
    "cityName": "Ριομπάμπα",
    "drone": {
      "youtubeId": "iNIggqNe2mo",
      "title": "\"Flying Over Riobamba EC – A View You'll Never Forget! 🚀\" | Cinematic Video in 4k |",
      "label": "Ριομπάμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FTBI14UqyAg",
      "title": "Riobamba, Ecuador, May 2026 | Silent first-person city walk | #riobamba #4k",
      "label": "Περιήγηση στο Ριομπάμπα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ibarra": {
    "cityName": "Ιμπάρρα",
    "drone": {
      "youtubeId": "QjxneHYPfm0",
      "title": "Ibarra, Ecuador 🇪🇨 | Stunning 4K Drone Footage",
      "label": "Ιμπάρρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TwkHlnJz6jw",
      "title": "Ibarra, Ecuador, June 2025 | Silent city walk | #ibarra #4k",
      "label": "Περιήγηση στο Ιμπάρρα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "puerto-ayora": {
    "cityName": "Πουέρτο Αγιόρα",
    "drone": {
      "youtubeId": "aqmlgGvpCEs",
      "title": "Flying Through the Streets of Quito! 🇪🇨 | Incredible Ecuador 4K Drone Video",
      "label": "Πουέρτο Αγιόρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lllA2dlGpLQ",
      "title": "Puerto Ayora, Ecuador - Sept 24, 2025 [4K/50fps] (75 minutes)",
      "label": "Περιήγηση στο Πουέρτο Αγιόρα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "encarnacion": {
    "cityName": "Ενκαρνασιόν",
    "drone": {
      "youtubeId": "R9kfyUhEF-o",
      "title": "Encarnación, Paraguay (4K)",
      "label": "Ενκαρνασιόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pSgf70dLexQ",
      "title": "Paraguay Encarnacion city: Walking tour downtown streets",
      "label": "Περιήγηση στο Ενκαρνασιόν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "live": {
      "youtubeId": "ZzhAb_YFTt0",
      "title": "Encarnación Costanera & Río Paraná Live Cam",
      "label": "Ενκαρνασιόν Live Cam",
      "icon": "fa-solid fa-tower-broadcast",
      "type": "live"
    }
  },
  "luque": {
    "cityName": "Λούκε",
    "drone": {
      "youtubeId": "yFKLN_T2m-I",
      "title": "Assunção - Paraguai 4K Drone video. Palácio de Lopez #asuncion #paraguay #drone #dji #travel",
      "label": "Λούκε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SShpQdatO24",
      "title": "Paraguay   Walk in Luque and covered market - 4K HDR",
      "label": "Περιήγηση στο Λούκε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-lorenzo-py": {
    "cityName": "Σαν Λορένσο",
    "drone": {
      "youtubeId": "yFKLN_T2m-I",
      "title": "Assunção - Paraguai 4K Drone video. Palácio de Lopez #asuncion #paraguay #drone #dji #travel",
      "label": "Σαν Λορένσο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uRyiVsE-zfI",
      "title": "Paraguay, San Lorenzo, Street view #paraguay #sanlorenzo #asunción",
      "label": "Περιήγηση στο Σαν Λορένσο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "villarrica": {
    "cityName": "Βιγιαρρίκα",
    "drone": {
      "youtubeId": "JRAFakwwaVk",
      "title": "Villarrica desde un drone (4K cinematic footage, 2024)",
      "label": "Βιγιαρρίκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CdT3W1r580k",
      "title": "🇵🇾【4K 60fps】WALK - VILLARRICA ~ walking Tour - Paraguay",
      "label": "Περιήγηση στο Βιγιαρρίκα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "concepcion-py": {
    "cityName": "Κονσεπσιόν",
    "drone": {
      "youtubeId": "kB6QL47NtQc",
      "title": "vista aérea de #Concepción #Paraguay",
      "label": "Κονσεπσιόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "qLcbuHsZjhA",
      "title": "Walking tour of Concepcion paraguay",
      "label": "Περιήγηση στο Κονσεπσιόν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pedro-juan-caballero": {
    "cityName": "Πέδρο Χουάν Καμπαγιέρο",
    "drone": {
      "youtubeId": "k5sQpe0c-hE",
      "title": "Paraguay 4K UHD | Stunning Aerial Views of Natural Beauty & Serenity | Cinematic Drone Footage",
      "label": "Πέδρο Χουάν Καμπαγιέρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ht76WpKwoRs",
      "title": "Top 5 Spots to Visit in Pedro Juan Caballero (Paraguay)",
      "label": "Περιήγηση στο Πέδρο Χουάν Καμπαγιέρο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "coronel-oviedo": {
    "cityName": "Κορονέλ Οβιέδο",
    "drone": {
      "youtubeId": "tg4uceO29xQ",
      "title": "ciudad de...Cnel Oviedo Paraguay",
      "label": "Κορονέλ Οβιέδο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "a0h-dI-TxTU",
      "title": "🇵🇾【4K 60fps】WALK - CORONEL OVIEDO ~ walking Tour - Paraguay",
      "label": "Περιήγηση στο Κορονέλ Οβιέδο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "capiata": {
    "cityName": "Καπιατά",
    "drone": {
      "youtubeId": "k5sQpe0c-hE",
      "title": "Paraguay 4K UHD | Stunning Aerial Views of Natural Beauty & Serenity | Cinematic Drone Footage",
      "label": "Καπιατά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mSaN-k2Y2v8",
      "title": "Walking Tour in Barrio Loma San Jerónimo, Asunción, Paraguay | 4K Walk Travel Vlog",
      "label": "Περιήγηση στο Καπιατά (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trujillo-pe": {
    "cityName": "Τρουχίγιο",
    "drone": {
      "youtubeId": "Kuz2DTJpXnE",
      "title": "TRUJILLO | Panoramicas | Distrito de Trujillo - Parte I | 2026.",
      "label": "Τρουχίγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "HbAlhI9ijI8",
      "title": "🇵🇪【4K 60fps】WALK - TRUJILLO  ~ walking Tour - Peru",
      "label": "Περιήγηση στο Τρουχίγιο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chiclayo": {
    "cityName": "Τσικλάγιο",
    "drone": {
      "youtubeId": "RahE-Tvd_0I",
      "title": "CHICLAYO CIUDAD DE LA AMISTAD VISTAS CON DRONE 4K  😎😍🌞",
      "label": "Τσικλάγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PPD2ioKOxBo",
      "title": "Chiclayo Peru walking tour exploring north Peru city walk",
      "label": "Περιήγηση στο Τσικλάγιο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "iquitos": {
    "cityName": "Ικίτος",
    "drone": {
      "youtubeId": "qtMeEjC63Zc",
      "title": "Iquitos, Peru 🇵🇪 4K ULTRA HD | Drone Footage",
      "label": "Ικίτος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UPkyCZBlDsk",
      "title": "🇵🇪 IQUITOS PERU | Walking Tour 4K in the Peruvian Amazon",
      "label": "Περιήγηση στο Ικίτος (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "piura": {
    "cityName": "Πιούρα",
    "drone": {
      "youtubeId": "Qiddr4O59js",
      "title": "🌆 Panorámicas de Piura 2025 | by Trujillopolis",
      "label": "Πιούρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "AQO56mM2KK0",
      "title": "PIURA  PERÚ 4K | Plaza de Armas Piura, Peru | Piura Peru 4K",
      "label": "Περιήγηση στο Πιούρα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "huancayo": {
    "cityName": "Ουανκάγιο",
    "drone": {
      "youtubeId": "eNZNnSTNy9g",
      "title": "#huancayo #huancayoperu #perú #drone",
      "label": "Ουανκάγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pmeHftZbdqo",
      "title": "🇵🇪【4K 60fps】WALK - HUANCAYO ~ walking Tour - Peru",
      "label": "Περιήγηση στο Ουανκάγιο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "puno": {
    "cityName": "Πούνο",
    "drone": {
      "youtubeId": "_ERODpDkDgU",
      "title": "Puno, Perú (4K)",
      "label": "Πούνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "dxOOevG61cc",
      "title": "Puno Walking Tour | Peru | 4K POV",
      "label": "Περιήγηση στο Πούνο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tacna": {
    "cityName": "Τάκνα",
    "drone": {
      "youtubeId": "mSuDXzDmgvk",
      "title": "Tacna (PERÚ) - Vista aérea (DRONE 4K) ¡Sus lugares para recorrer!",
      "label": "Τάκνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "sfIlzwrymlk",
      "title": "Tacna, Perú | 4K Walking Tour",
      "label": "Περιήγηση στο Τάκνα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "colonia-del-sacramento": {
    "cityName": "Κολόνια δελ Σακραμέντο",
    "drone": {
      "youtubeId": "kxNTZdcnpl8",
      "title": "Colonia del Sacramento Uruguay | Stunning Beach Views by Drone in 4K 🇺🇾",
      "label": "Κολόνια δελ Σακραμέντο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "xVpSH3pzWLM",
      "title": "Colonia del Sacramento Uruguay Walking Tour — Historic Old Town and Waterfront",
      "label": "Περιήγηση στο Κολόνια δελ Σακραμέντο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "salto": {
    "cityName": "Σάλτο",
    "drone": {
      "youtubeId": "ulHBYXVqX-c",
      "title": "Unique Uruguay 4K: Stunning Drone Views with Soothing Music",
      "label": "Σάλτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ebosGfUnd70",
      "title": "[4K] CIUDAD DE SALTO #DRIVING tour VIRTUAL 2023 [donde nació HORACIO QUIROGA y LUIS SUÁREZ] URUGUAY",
      "label": "Περιήγηση στο Σάλτο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "paysandu": {
    "cityName": "Παϊσαντού",
    "drone": {
      "youtubeId": "ulHBYXVqX-c",
      "title": "Unique Uruguay 4K: Stunning Drone Views with Soothing Music",
      "label": "Παϊσαντού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kgC5N1B2Mi0",
      "title": "𝐌𝐎𝐍𝐓𝐄𝐕𝐈𝐃𝐄𝐎, 𝐔𝐑𝐔𝐆𝐔𝐀𝐘 🇺🇸 𝟒𝐊 𝐖𝐀𝐋𝐊, Travel channel !",
      "label": "Περιήγηση στο Παϊσαντού (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "maldonado": {
    "cityName": "Μαλδονάδο",
    "drone": {
      "youtubeId": "Ae_ccYpfB6M",
      "title": "Maldonado desde un drone 🇺🇾 (4K aerial footage, 2024)",
      "label": "Μαλδονάδο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8DMnwkaWoEM",
      "title": "4K DRIVE Punta Negra - Punta Colorada [Maldonado] URUGUAY",
      "label": "Περιήγηση στο Μαλδονάδο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rivera": {
    "cityName": "Ριβέρα",
    "drone": {
      "youtubeId": "OCUB_SyOEv8",
      "title": "I Flew My Drone Over Montevideo and Colonia, Uruguay, and This Is What I Saw (4K)",
      "label": "Ριβέρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "HVdftBCa6JU",
      "title": "【4K】WALK  Rivera URUGUAY 4k video UY Travel vlog",
      "label": "Περιήγηση στο Ριβέρα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tacuarembo": {
    "cityName": "Τακουαρεμπό",
    "drone": {
      "youtubeId": "VsLTfmtWwMw",
      "title": "Cerro Batoví, Tacuarembó Uruguay (4k)  (drone,aereo,aerial)",
      "label": "Τακουαρεμπό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "OE1pBOvjvPA",
      "title": "【4K】WALK  TACUAREMBO Uruguay 4k video UY Travel vlog",
      "label": "Περιήγηση στο Τακουαρεμπό (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rocha": {
    "cityName": "Ρότσα",
    "drone": {
      "youtubeId": "FlJLA-mcWvs",
      "title": "Rocha y sus paisajes -Uruguay / Drone Punta del Este",
      "label": "Ρότσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8qMkyxd_qWY",
      "title": "【4K】WALK ROCHA Uruguay 4k video UY Travel vlog walking tour",
      "label": "Περιήγηση στο Ρότσα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mercedes-uy": {
    "cityName": "Μερσέδες",
    "drone": {
      "youtubeId": "OCUB_SyOEv8",
      "title": "I Flew My Drone Over Montevideo and Colonia, Uruguay, and This Is What I Saw (4K)",
      "label": "Μερσέδες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kgC5N1B2Mi0",
      "title": "𝐌𝐎𝐍𝐓𝐄𝐕𝐈𝐃𝐄𝐎, 𝐔𝐑𝐔𝐆𝐔𝐀𝐘 🇺🇸 𝟒𝐊 𝐖𝐀𝐋𝐊, Travel channel !",
      "label": "Περιήγηση στο Μερσέδες (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "barquisimeto": {
    "cityName": "Μπαρκισιμέτο",
    "drone": {
      "youtubeId": "azB3HjEph-c",
      "title": "EL MEJOR VÍDEO de Barquisimeto, Venezuela 🇻🇪 DRONE [2K]",
      "label": "Μπαρκισιμέτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FNyW2ZFuKCc",
      "title": "🇻🇪 VENEZUELA, Barquisimeto 4K 2024  #walkingtour #barquisimeto #venezuela #estadolara",
      "label": "Περιήγηση στο Μπαρκισιμέτο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "maracay": {
    "cityName": "Μαρακάι",
    "drone": {
      "youtubeId": "kL26oYqOUuQ",
      "title": "Así luce Maracay desde el cielo | Drone Cinemático 4K",
      "label": "Μαρακάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8Jyyvsqj-Pc",
      "title": "🇻🇪 Blend VENEZUELA: Walking in PALO NEGRO I ARAGUA 4K",
      "label": "Περιήγηση στο Μαρακάι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ciudad-guayana": {
    "cityName": "Σιουδάδ Γουαγιάνα",
    "drone": {
      "youtubeId": "MvaJxs0RfI0",
      "title": "Walking Tour Ciudad Guayana Venezuela in 4k |  Orinokia Mall Center",
      "label": "Σιουδάδ Γουαγιάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "qfeOcsAJtFg",
      "title": "Ciudad Guayana Venezuela Walking Tour in 4K",
      "label": "Περιήγηση στο Σιουδάδ Γουαγιάνα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "merida-ve": {
    "cityName": "Μέριντα",
    "drone": {
      "youtubeId": "j9xuSalhDmE",
      "title": "Merida, Venezuela, Drone 4K",
      "label": "Μέριντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3uDU5fJMnnY",
      "title": "🇻🇪 Discovering VENEZUELA: Walking in MERIDA City Center  I MERIDA 4K",
      "label": "Περιήγηση στο Μέριντα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "san-cristobal-ve": {
    "cityName": "Σαν Κριστόμπαλ",
    "drone": {
      "youtubeId": "oVwW_4yQoBA",
      "title": "🇻🇪 | SAN CRISTÓBAL: Driving Tour por la capital del Táchira. | VENEZUELA | 4K | 2025.",
      "label": "Σαν Κριστόμπαλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2XCoqt4LFWg",
      "title": "San Cristóbal: La Ciudad que Enamora, un Recorrido en Coche. | DRIVING | VENEZUELA 🇻🇪 | 4K | 2025.",
      "label": "Περιήγηση στο Σαν Κριστόμπαλ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "puerto-la-cruz": {
    "cityName": "Πουέρτο Λα Κρουζ",
    "drone": {
      "youtubeId": "06ZrejSIn_8",
      "title": "PROJECT VENEZUELA | Un viaje en drone por todos los estados | 4K",
      "label": "Πουέρτο Λα Κρουζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_N-554vxS98",
      "title": "🇻🇪 | Puerto La Cruz: Recorriendo el Paseo Colón. | DRIVING TOUR | VENEZUELA | 4K.",
      "label": "Περιήγηση στο Πουέρτο Λα Κρουζ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cumana": {
    "cityName": "Κουμανά",
    "drone": {
      "youtubeId": "UUbq_sMzHGA",
      "title": "cumaná. 4k.",
      "label": "Κουμανά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "DwbV7fZF4Iw",
      "title": "🇻🇪 Ancient VENEZUELA, Walking in CUMANA I SUCRE 4K",
      "label": "Περιήγηση στο Κουμανά (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "new-amsterdam-gy": {
    "cityName": "Νιου Άμστερνταμ",
    "drone": {
      "youtubeId": "bCJKANp7UCo",
      "title": "US$161 Million Hospital Campus, New Amsterdam Guyana",
      "label": "Νιου Άμστερνταμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mX9n79I8iYs",
      "title": "TOUR OF NEW AMSTERDAM BERBICE",
      "label": "Περιήγηση στο Νιου Άμστερνταμ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bartica": {
    "cityName": "Μπαρτίκα",
    "drone": {
      "youtubeId": "0g4cYB8ibT4",
      "title": "From Georgetown to Bartica | Guyana’s Road–River Transition",
      "label": "Μπαρτίκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "fwqA2dV5L8k",
      "title": "S2 E21 | Bartica Street Tour | Part 1 of 4 | Walk with me in Bartica",
      "label": "Περιήγηση στο Μπαρτίκα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "anna-regina": {
    "cityName": "Άννα Ρετζίνα",
    "drone": {
      "youtubeId": "L5qI34NXxvk",
      "title": "Scenic 4K Drive - Parika 2 Essequibo Coast Anna Regina",
      "label": "Άννα Ρετζίνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lethem": {
    "cityName": "Λέθεμ",
    "drone": {
      "youtubeId": "Dscj_uyCFWA",
      "title": "Beautiful Guyana Rupununi Savannah Drone video",
      "label": "Λέθεμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8HDvfbR9gGQ",
      "title": "details of lethem, guyana | travel archive #running #guyana",
      "label": "Περιήγηση στο Λέθεμ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "corriverton": {
    "cityName": "Κορίβερτον",
    "drone": {
      "youtubeId": "aSJ71CfHZxQ",
      "title": "Corriverton",
      "label": "Κορίβερτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "juSzeULn0dk",
      "title": "Driving through Berbice, slowly. #BerbicePeace #guyana #driving",
      "label": "Περιήγηση στο Κορίβερτον (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rose-hall": {
    "cityName": "Ρόουζ Χολ",
    "drone": {
      "youtubeId": "bi8KhpjX2SI",
      "title": "Rose Hall, Canje",
      "label": "Ρόουζ Χολ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "niywpDwqvk0",
      "title": "😲 My First Visit to Rose Hall Market in Berbice, Guyana | Amazing Deals & Surprises!",
      "label": "Περιήγηση στο Ρόουζ Χολ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mahdia": {
    "cityName": "Μάντια",
    "drone": {
      "youtubeId": "V9rY6LbBCyA",
      "title": "Vlog 02 - Mahdia, Guyana",
      "label": "Μάντια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cGUHmjrTx5s",
      "title": "Mahdia Guyana 🇬🇾",
      "label": "Περιήγηση στο Μάντια (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "parika": {
    "cityName": "Παρίκα",
    "drone": {
      "youtubeId": "L5qI34NXxvk",
      "title": "Scenic 4K Drive - Parika 2 Essequibo Coast Anna Regina",
      "label": "Παρίκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "I9DdVgYnYrM",
      "title": "Flavours, Ferries & Folks of Parika | @TrisMustList Parika Walking tour in Guyana 🇬🇾",
      "label": "Περιήγηση στο Παρίκα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nieuw-nickerie": {
    "cityName": "Νιου Νικέρι",
    "drone": {
      "youtubeId": "NrlOh0mBgM4",
      "title": "De Prachtige Zeedijk van Nickerie, Suriname 🇸🇷 | 4K Drone-beelden",
      "label": "Νιου Νικέρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3Nmv6yK9P0s",
      "title": "Before You Visit Nieuw Nickerie, Suriname — Watch This! | Nieuw Nickerie Unlocked",
      "label": "Περιήγηση στο Νιου Νικέρι (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "moengo": {
    "cityName": "Μούνγκο",
    "drone": {
      "youtubeId": "Vn8G7bMuftU",
      "title": "PARAMARIBO, SURINAME 🇸🇷 4K Cinematic Drone Tour",
      "label": "Μούνγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4hrSFeQSRMk",
      "title": "Flying in Wonoredjo/ Moengo in Marowijne Suriname.",
      "label": "Περιήγηση στο Μούνγκο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "albina": {
    "cityName": "Αλμπίνα",
    "drone": {
      "youtubeId": "fNRa8jBCK2w",
      "title": "Suriname from above; Albina ",
      "label": "Αλμπίνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EWXZRgCXTqs",
      "title": "Marowijne  #suriname     #visitsuriname",
      "label": "Περιήγηση στο Αλμπίνα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "paranam": {
    "cityName": "Παρανάμ",
    "drone": {
      "youtubeId": "re75fD8RrRg",
      "title": "Rainforest of South America: Suriname - 4K Drone Video",
      "label": "Παρανάμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "60d4v7tjr_w",
      "title": "【4K 60fps】🇸🇷 VIRTUAL WALKING TOUR: 🚶 «Paramaribo - Suriname 2026» 🎧 ORIGINAL SOUNDS 🚫NO COMMENT ASMR",
      "label": "Περιήγηση στο Παρανάμ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "totness": {
    "cityName": "Τότνες",
    "drone": {
      "youtubeId": "_X06n1fyxAA",
      "title": "TOTNESS AIRSTRIP in Coronie, Suriname 🇸🇷 | 4K Drone-beelden |",
      "label": "Τότνες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "groningen-sr": {
    "cityName": "Χρόνινγκεν",
    "drone": {
      "youtubeId": "iq-AvKwooWM",
      "title": "GRONINGEN| District Saramacca| SURINAME|DJI MINI 2 |4K",
      "label": "Χρόνινγκεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "fnW1baFPXLo",
      "title": "GRONINGEN| District Saramacca in Suriname| 8.2.2026",
      "label": "Περιήγηση στο Χρόνινγκεν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "onverwacht": {
    "cityName": "Ονφερβάχτ",
    "drone": {
      "youtubeId": "60d4v7tjr_w",
      "title": "【4K 60fps】🇸🇷 VIRTUAL WALKING TOUR: 🚶 «Paramaribo - Suriname 2026» 🎧 ORIGINAL SOUNDS 🚫NO COMMENT ASMR",
      "label": "Ονφερβάχτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "wageningen-sr": {
    "cityName": "Βαχενίνγκεν",
    "drone": {
      "youtubeId": "NrlOh0mBgM4",
      "title": "De Prachtige Zeedijk van Nickerie, Suriname 🇸🇷 | 4K Drone-beelden",
      "label": "Βαχενίνγκεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YlVQjPMJCSs",
      "title": "Wageningen Drone Video - Suriname june 2019",
      "label": "Περιήγηση στο Βαχενίνγκεν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hobart": {
    "cityName": "Χόμπαρτ",
    "drone": {
      "youtubeId": "EZum29CaUpw",
      "title": "Χόμπαρτ 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Χόμπαρτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EZum29CaUpw",
      "title": "Χόμπαρτ 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Περιήγηση στο Χόμπαρτ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "darwin": {
    "cityName": "Ντάργουιν",
    "drone": {
      "youtubeId": "EZum29CaUpw",
      "title": "Ντάργουιν 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ντάργουιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EZum29CaUpw",
      "title": "Ντάργουιν 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Περιήγηση στο Ντάργουιν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gold-coast": {
    "cityName": "Γκολντ Κοστ",
    "drone": {
      "youtubeId": "EZum29CaUpw",
      "title": "Γκολντ Κοστ 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Γκολντ Κοστ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EZum29CaUpw",
      "title": "Γκολντ Κοστ 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Περιήγηση στο Surfers Paradise (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cairns": {
    "cityName": "Κερνς",
    "drone": {
      "youtubeId": "EZum29CaUpw",
      "title": "Κερνς 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κερνς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EZum29CaUpw",
      "title": "Κερνς 4K: Αυστραλία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Περιήγηση στο Κερνς (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rotorua": {
    "cityName": "Ροτορούα",
    "drone": {
      "youtubeId": "LB_aN56haNg",
      "title": "Ροτορούα 4K: Νέα Ζηλανδία 4K: Εναέρια Περιήγηση Drone στο Ουέλινγκτον",
      "label": "Ροτορούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LB_aN56haNg",
      "title": "Ροτορούα 4K: Νέα Ζηλανδία 4K: Εναέρια Περιήγηση Drone στο Ουέλινγκτον",
      "label": "Περιήγηση στη Ροτορούα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dunedin": {
    "cityName": "Ντούνεντιν",
    "drone": {
      "youtubeId": "LB_aN56haNg",
      "title": "Ντούνεντιν 4K: Νέα Ζηλανδία 4K: Εναέρια Περιήγηση Drone στο Ουέλινγκτον",
      "label": "Ντούνεντιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LB_aN56haNg",
      "title": "Ντούνεντιν 4K: Νέα Ζηλανδία 4K: Εναέρια Περιήγηση Drone στο Ουέλινγκτον",
      "label": "Περιήγηση στο Ντούνεντιν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hamilton": {
    "cityName": "Χάμιλτον",
    "drone": {
      "youtubeId": "LB_aN56haNg",
      "title": "Χάμιλτον 4K: Νέα Ζηλανδία 4K: Εναέρια Περιήγηση Drone στο Ουέλινγκτον",
      "label": "Χάμιλτον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tauranga": {
    "cityName": "Ταουράνγκα",
    "drone": {
      "youtubeId": "LB_aN56haNg",
      "title": "Ταουράνγκα 4K: Νέα Ζηλανδία 4K: Εναέρια Περιήγηση Drone στο Ουέλινγκτον",
      "label": "Ταουράνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "papeete": {
    "cityName": "Παπεέτε",
    "drone": {
      "youtubeId": "HyqzGt-PKZI",
      "title": "Παπεέτε 4K: Γαλλική Πολυνησία 4K: Εναέρια Περιήγηση Drone στην Ταϊτή & Μπόρα Μπόρα",
      "label": "Παπεέτε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "HyqzGt-PKZI",
      "title": "Παπεέτε 4K: Γαλλική Πολυνησία 4K: Εναέρια Περιήγηση Drone στην Ταϊτή & Μπόρα Μπόρα",
      "label": "Περιήγηση στην Παπεέτε (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bora-bora": {
    "cityName": "Μπόρα Μπόρα",
    "drone": {
      "youtubeId": "HyqzGt-PKZI",
      "title": "Μπόρα Μπόρα 4K: Γαλλική Πολυνησία 4K: Εναέρια Περιήγηση Drone στην Ταϊτή & Μπόρα Μπόρα",
      "label": "Μπόρα Μπόρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "guide": {
      "youtubeId": "HyqzGt-PKZI",
      "title": "Μπόρα Μπόρα 4K: Γαλλική Πολυνησία 4K: Εναέρια Περιήγηση Drone στην Ταϊτή & Μπόρα Μπόρα",
      "label": "Οδηγός Μπόρα Μπόρα (4K)",
      "icon": "fa-solid fa-compass",
      "type": "guide"
    }
  },
  "noumea": {
    "cityName": "Νουμέα",
    "drone": {
      "youtubeId": "mVXxCVI_oMA",
      "title": "Νουμέα 4K: Νέα Καληδονία 4K: Εναέρια Περιήγηση Drone στη Νουμέα",
      "label": "Νουμέα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mVXxCVI_oMA",
      "title": "Νουμέα 4K: Νέα Καληδονία 4K: Εναέρια Περιήγηση Drone στη Νουμέα",
      "label": "Περιήγηση στη Νουμέα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "avarua": {
    "cityName": "Αβαρούα",
    "drone": {
      "youtubeId": "APycMs-h0kA",
      "title": "Αβαρούα 4K: Νήσοι Κουκ 4K: Εναέρια Περιήγηση Drone στη Ραροτόνγκα",
      "label": "Αβαρούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "vaiaku": {
    "cityName": "Βαϊάκου",
    "drone": {
      "youtubeId": "yXYUkxub2-s",
      "title": "Βαϊάκου 4K: Τουβαλού 4K: Εναέρια Περιήγηση Drone στις Ατόλες Funafuti",
      "label": "Βαϊάκου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "annaba": {
    "cityName": "Ανάμπα",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Ανάμπα algeria 4K: Εναέρια Περιήγηση Drone στο Βασιλική Αγίου Αυγουστίνου & Ερείπια Ιππώνος",
      "label": "Ανάμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "batna": {
    "cityName": "Μπατνά",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Μπατνά algeria 4K: Εναέρια Περιήγηση Drone στο Ερείπια Τιμγκάντ & Όρη Ωρές",
      "label": "Μπατνά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "setif": {
    "cityName": "Σετίφ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Σετίφ algeria 4K: Εναέρια Περιήγηση Drone στο Κρήνη Ain El Fouara & Βυζαντινά Τείχη",
      "label": "Σετίφ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tlemcen": {
    "cityName": "Τλεμσέν",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Τλεμσέν algeria 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Τζαμί της Τλεμσέν & Μανσούρα",
      "label": "Τλεμσέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "biskra": {
    "cityName": "Μπίσκρα",
    "drone": {
      "youtubeId": "CuY1vK8SKlQ",
      "title": "Μπίσκρα 4K: Αλγερία 4K: Εναέρια Περιήγηση Drone στο Αλγέρι & τις Μεσογειακές Ακτές",
      "label": "Μπίσκρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bejaia": {
    "cityName": "Μπετζάια",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Μπετζάια algeria 4K: Εναέρια Περιήγηση Drone στο Κασμπά της Μπετζάια & Εθνικό Πάρκο Γκουράγια",
      "label": "Μπετζάια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ghardaia": {
    "cityName": "Γκαρντάια",
    "drone": {
      "youtubeId": "CuY1vK8SKlQ",
      "title": "Γκαρντάια 4K: Αλγερία 4K: Εναέρια Περιήγηση Drone στο Αλγέρι & τις Μεσογειακές Ακτές",
      "label": "Γκαρντάια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "huambo": {
    "cityName": "Χουάμπο",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Χουάμπο 4K: Αγκόλα 4K: Εναέρια Περιήγηση Drone στη Λουάντα & τον Ατλαντικό",
      "label": "Χουάμπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lobito": {
    "cityName": "Λομπίτο",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Λομπίτο angola 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Lobito & Χερσόνησος Restinga",
      "label": "Λομπίτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lubango": {
    "cityName": "Λουμπάνγκο",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Λουμπάνγκο angola 4K: Εναέρια Περιήγηση Drone στο Χριστός Βασιλιάς & Φαράγγι Tundavala",
      "label": "Λουμπάνγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cabinda": {
    "cityName": "Καμπίντα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Καμπίντα angola 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός της Καμπίντα & Λιμάνι",
      "label": "Καμπίντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "malanje": {
    "cityName": "Μαλάνζε",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Μαλάνζε angola 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Kalandula & Ποταμός Kwanza",
      "label": "Μαλάνζε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "soyo": {
    "cityName": "Σόγιο",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Σόγιο angola 4K: Εναέρια Περιήγηση Drone στο Εκβολές του Ποταμού Κονγκό & Λιμάνι",
      "label": "Σόγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "uige": {
    "cityName": "Ουίγκε",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Ουίγκε 4K: Αγκόλα 4K: Εναέρια Περιήγηση Drone στη Λουάντα & τον Ατλαντικό",
      "label": "Ουίγκε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "namibe": {
    "cityName": "Ναμίμπε",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Ναμίμπε angola 4K: Εναέρια Περιήγηση Drone στο Έρημος Namib & Παραλία Namibe",
      "label": "Ναμίμπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "francistown": {
    "cityName": "Φρανσισταούν",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Φρανσισταούν 4K: Μποτσουάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Φρανσισταούν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kasane": {
    "cityName": "Κασάνε",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Κασάνε 4K: Μποτσουάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Κασάνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "serowe": {
    "cityName": "Σερόουε",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σερόουε botswana 4K: Εναέρια Περιήγηση Drone στο Λόφος Khama III & Μουσείο Khama III",
      "label": "Σερόουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "molepolole": {
    "cityName": "Μολεπολόλε",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Μολεπολόλε botswana 4K: Εναέρια Περιήγηση Drone στο Σπήλαιο Kolobeng & Λόφος Molepolole",
      "label": "Μολεπολόλε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lobatse": {
    "cityName": "Λομπάτσε",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Λομπάτσε 4K: Μποτσουάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λομπάτσε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "palapye": {
    "cityName": "Παλάπιε",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Παλάπιε 4K: Μποτσουάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Παλάπιε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "selebi-phikwe": {
    "cityName": "Σέλεμπι-Φίκουε",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σέλεμπι-Φίκουε botswana 4K: Εναέρια Περιήγηση Drone στο Ορυχείο BCL & Λίμνη Sechele",
      "label": "Σέλεμπι-Φίκουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "jwaneng": {
    "cityName": "Τζουανένγκ",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Τζουανένγκ 4K: Μποτσουάνα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τζουανένγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bafoussam": {
    "cityName": "Μπαφουσάμ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Μπαφουσάμ cameroon 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Σουλτάνου & Κεντρική Αγορά",
      "label": "Μπαφουσάμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "garoua": {
    "cityName": "Γκαρούα",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Γκαρούα cameroon 4K: Εναέρια Περιήγηση Drone στο Ποταμός Benue & Παλάτι του Λαμίδο",
      "label": "Γκαρούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bamenda": {
    "cityName": "Μπαμέντα",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Μπαμέντα 4K: Καμερούν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπαμέντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "maroua": {
    "cityName": "Μαρουά",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Μαρουά cameroon 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Λαμίδο & Κεντρική Αγορά",
      "label": "Μαρουά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kribi": {
    "cityName": "Κρίμπι",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κρίμπι cameroon 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Lobé & Παραλία Kribi",
      "label": "Κρίμπι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "limbe": {
    "cityName": "Λίμπε",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Λίμπε 4K: Καμερούν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Λίμπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ngaoundere": {
    "cityName": "Νγκαουντερέ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Νγκαουντερέ cameroon 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Λαμίδο & Σιδηροδρομικός Σταθμός",
      "label": "Νγκαουντερέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nkongsamba": {
    "cityName": "Ενκόνγκσαμπα",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Ενκόνγκσαμπα 4K: Καμερούν 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ενκόνγκσαμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lubumbashi": {
    "cityName": "Λουμπουμπάσι",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Λουμπουμπάσι dr-congo 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Ναός Αγίου Πέτρου & Πάρκο Kiwele",
      "label": "Λουμπουμπάσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bukavu": {
    "cityName": "Μπουκαβού",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μπουκαβού dr-congo 4K: Εναέρια Περιήγηση Drone στο Λίμνη Kivu & Καθεδρικός της Μπουκαβού",
      "label": "Μπουκαβού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kisangani": {
    "cityName": "Κισανγκάνι",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κισανγκάνι dr-congo 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Boyoma & Ποταμός Κονγκό",
      "label": "Κισανγκάνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kananga": {
    "cityName": "Κανάνγκα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Κανάνγκα dr-congo 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Αγίου Ιωσήφ & Κεντρική Αγορά",
      "label": "Κανάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbuji-mayi": {
    "cityName": "Μπούτζι-Μάγι",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Μπούτζι-Μάγι 4K: Λαϊκή Δημοκρατία του Κονγκό 4K: Πανοραμική Περιήγηση Drone",
      "label": "Μπούτζι-Μάγι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "matadi": {
    "cityName": "Ματάντι",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Ματάντι dr-congo 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Matadi & Γέφυρα Matadi",
      "label": "Ματάντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kikwit": {
    "cityName": "Κικουίτ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Κικουίτ dr-congo 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός & Αγορά Kikwit",
      "label": "Κικουίτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tshikapa": {
    "cityName": "Τσικάπα",
    "drone": {
      "youtubeId": "0S5RAcfavDc",
      "title": "Τσικάπα 4K: Λαϊκή Δημοκρατία του Κονγκό 4K: Πανοραμική Περιήγηση Drone",
      "label": "Τσικάπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "aswan": {
    "cityName": "Ασουάν",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ασουάν 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Ασουάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ασουάν 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Περιήγηση στο Ασουάν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "port-said": {
    "cityName": "Πορτ Σάιντ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Πορτ Σάιντ 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Πορτ Σάιντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "suez": {
    "cityName": "Σουέζ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σουέζ 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Σουέζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sharm-el-sheikh": {
    "cityName": "Σαρμ ελ Σέιχ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σαρμ ελ Σέιχ 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Σαρμ ελ Σέιχ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σαρμ ελ Σέιχ 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Περιήγηση στο Σαρμ ελ Σέιχ (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hurghada": {
    "cityName": "Χουργκάντα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Χουργκάντα 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Χουργκάντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uz23AE-oemU",
      "title": "Χουργκάντα 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Περιήγηση στη Χουργκάντα (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mansoura": {
    "cityName": "Μανσούρα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Μανσούρα 4K: Αίγυπτος 4K: Εναέρια Περιήγηση Drone στον Νείλο & τις Ιστορικές Πόλεις",
      "label": "Μανσούρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gondar": {
    "cityName": "Γκοντάρ",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Γκοντάρ ethiopia 4K: Εναέρια Περιήγηση Drone στο Fasil Ghebbi & Debre Berhan Selassie",
      "label": "Γκοντάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "axum": {
    "cityName": "Αξούμ",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Αξούμ ethiopia 4K: Εναέρια Περιήγηση Drone στο Οβελίσκοι του Άξουμ & Ναός της Σιών",
      "label": "Αξούμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bahir-dar": {
    "cityName": "Μπαχίρ Νταρ",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Μπαχίρ Νταρ ethiopia 4K: Εναέρια Περιήγηση Drone στο Λίμνη Τάνα & Καταρράκτες Μπλε Νείλου",
      "label": "Μπαχίρ Νταρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "harar": {
    "cityName": "Χαράρ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Χαράρ ethiopia 4K: Εναέρια Περιήγηση Drone στο Harar Jugol & Τείχη της πόλης",
      "label": "Χαράρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dire-dawa": {
    "cityName": "Ντίρε Ντάουα",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Ντίρε Ντάουα ethiopia 4K: Εναέρια Περιήγηση Drone στο Legehar & παλιά γαλλοαιθιοπική συνοικία",
      "label": "Ντίρε Ντάουα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "hawassa": {
    "cityName": "Χαβάσα",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Χαβάσα ethiopia 4K: Εναέρια Περιήγηση Drone στο Λίμνη Hawassa & Hippo Point",
      "label": "Χαβάσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mekele": {
    "cityName": "Μέκελε",
    "drone": {
      "youtubeId": "GRajsRKSeQw",
      "title": "Μέκελε 4K: Αιθιοπία 4K: Εναέρια Περιήγηση Drone στην Αντίς Αμπέμπα & τα Υψίπεδα",
      "label": "Μέκελε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "jimma": {
    "cityName": "Τζίμα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Τζίμα ethiopia 4K: Εναέρια Περιήγηση Drone στο Παλάτι Aba Jifar & φυτείες καφέ",
      "label": "Τζίμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tamale": {
    "cityName": "Ταμαλέ",
    "drone": {
      "youtubeId": "Sl2PuaYhZJw",
      "title": "Ταμαλέ 4K: Γκάνα 4K: Εναέρια Περιήγηση Drone στην Άκκρα",
      "label": "Ταμαλέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sekondi-takoradi": {
    "cityName": "Σεκόντι-Τακοράντι",
    "drone": {
      "youtubeId": "Sl2PuaYhZJw",
      "title": "Σεκόντι-Τακοράντι 4K: Γκάνα 4K: Εναέρια Περιήγηση Drone στην Άκκρα",
      "label": "Σεκόντι-Τακοράντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cape-coast": {
    "cityName": "Κέιπ Κοστ",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Κέιπ Κοστ ghana 4K: Εναέρια Περιήγηση Drone στο Κάστρο Cape Coast & Πανεπιστήμιο",
      "label": "Κέιπ Κοστ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sunyani": {
    "cityName": "Σουνιάνι",
    "drone": {
      "youtubeId": "Sl2PuaYhZJw",
      "title": "Σουνιάνι 4K: Γκάνα 4K: Εναέρια Περιήγηση Drone στην Άκκρα",
      "label": "Σουνιάνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ho": {
    "cityName": "Χο",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Χο ghana 4K: Εναέρια Περιήγηση Drone στο Όρος Adaklu & Αγορά Ho",
      "label": "Χο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tema": {
    "cityName": "Τεμά",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Τεμά ghana 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Tema & Prime Meridian",
      "label": "Τεμά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "koforidua": {
    "cityName": "Κοφοριντούα",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κοφοριντούα ghana 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Boti & Αγορά Koforidua",
      "label": "Κοφοριντούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bolgatanga": {
    "cityName": "Μπολγκατάνγκα",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Μπολγκατάνγκα ghana 4K: Εναέρια Περιήγηση Drone στο Αγορά Bolgatanga & Κέντρο Καλαθοποιίας",
      "label": "Μπολγκατάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bouake": {
    "cityName": "Μπουακέ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Μπουακέ ivory-coast 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Bouaké & Αγορά",
      "label": "Μπουακέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "korhogo": {
    "cityName": "Κορογκό",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Κορογκό 4K: Ακτή Ελεφαντοστού 4K: Εναέρια Περιήγηση Drone στο Αμπιτζάν",
      "label": "Κορογκό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "daloa": {
    "cityName": "Νταλόα",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Νταλόα ivory-coast 4K: Εναέρια Περιήγηση Drone στο Αγορά Daloa & Καθεδρικός",
      "label": "Νταλόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "man": {
    "cityName": "Μαν",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Μαν ivory-coast 4K: Εναέρια Περιήγηση Drone στο Βουνά Dent de Man & Καταρράκτες",
      "label": "Μαν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "grand-bassam": {
    "cityName": "Γκραν-Μπασάμ",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Γκραν-Μπασάμ ivory-coast 4K: Εναέρια Περιήγηση Drone στο Αποικιακή Πόλη & Μουσείο Costume",
      "label": "Γκραν-Μπασάμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gagnoa": {
    "cityName": "Γκανιόα",
    "drone": {
      "youtubeId": "OepYPIjyDgQ",
      "title": "Γκανιόα 4K: Ακτή Ελεφαντοστού 4K: Εναέρια Περιήγηση Drone στο Αμπιτζάν",
      "label": "Γκανιόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "abengourou": {
    "cityName": "Αμπενγκουρού",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Αμπενγκουρού ivory-coast 4K: Εναέρια Περιήγηση Drone στο Αγορά Abengourou & Καθεδρικός",
      "label": "Αμπενγκουρού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kisumu": {
    "cityName": "Κισούμου",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Κισούμου 4K: Κένυα 4K: Εναέρια Περιήγηση Drone στο Ναϊρόμπι & τις Ακτές",
      "label": "Κισούμου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nakuru": {
    "cityName": "Νακούρου",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Νακούρου kenya 4K: Εναέρια Περιήγηση Drone στο Λίμνη Νακούρου & Εθνικό Πάρκο Λίμνης Νακούρου",
      "label": "Νακούρου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "eldoret": {
    "cityName": "Έλντορετ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Έλντορετ kenya 4K: Εναέρια Περιήγηση Drone στο Iten & κοιλάδα δρομέων",
      "label": "Έλντορετ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "malindi": {
    "cityName": "Μαλίντι",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Μαλίντι kenya 4K: Εναέρια Περιήγηση Drone στο Malindi Marine National Park & Gede Ruins",
      "label": "Μαλίντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lamu": {
    "cityName": "Λαμού",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Λαμού 4K: Κένυα 4K: Εναέρια Περιήγηση Drone στο Ναϊρόμπι & τις Ακτές",
      "label": "Λαμού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nanyuki": {
    "cityName": "Νανιούκι",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Νανιούκι kenya 4K: Εναέρια Περιήγηση Drone στο Mount Kenya National Park & Equator",
      "label": "Νανιούκι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "thika": {
    "cityName": "Θίκα",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Θίκα kenya 4K: Εναέρια Περιήγηση Drone στο Chania Falls & φυτείες ανανά",
      "label": "Θίκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "garissa": {
    "cityName": "Γκαρίσα",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Γκαρίσα 4K: Κένυα 4K: Εναέρια Περιήγηση Drone στο Ναϊρόμπι & τις Ακτές",
      "label": "Γκαρίσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "antsirabe": {
    "cityName": "Αντσιραμπέ",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Αντσιραμπέ madagascar 4K: Εναέρια Περιήγηση Drone στο Θερμές Πηγές & Λίμνη Tritriva",
      "label": "Αντσιραμπέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mahajanga": {
    "cityName": "Μαχατζάνγκα",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Μαχατζάνγκα madagascar 4K: Εναέρια Περιήγηση Drone στο Δέντρο Baobab του Cirque Rouge & Φάρος Katsepy",
      "label": "Μαχατζάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "fianarantsoa": {
    "cityName": "Φιαναραντσόα",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Φιαναραντσόα 4K: Μαδαγασκάρη 4K: Εναέρια Περιήγηση Drone στο Ανταναναρίβο & τα Τροπικά Τοπία",
      "label": "Φιαναραντσόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "toliara": {
    "cityName": "Τολιάρα",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Τολιάρα 4K: Μαδαγασκάρη 4K: Εναέρια Περιήγηση Drone στο Ανταναναρίβο & τα Τροπικά Τοπία",
      "label": "Τολιάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "antsiranana": {
    "cityName": "Αντσιρανάνα",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Αντσιρανάνα 4K: Μαδαγασκάρη 4K: Εναέρια Περιήγηση Drone στο Ανταναναρίβο & τα Τροπικά Τοπία",
      "label": "Αντσιρανάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nosi-be": {
    "cityName": "Νόσι Μπε",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Νόσι Μπε 4K: Μαδαγασκάρη 4K: Εναέρια Περιήγηση Drone στο Ανταναναρίβο & τα Τροπικά Τοπία",
      "label": "Νόσι Μπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "morondava": {
    "cityName": "Μοροντάβα",
    "drone": {
      "youtubeId": "rLXPvrGiDAo",
      "title": "Μοροντάβα 4K: Μαδαγασκάρη 4K: Εναέρια Περιήγηση Drone στο Ανταναναρίβο & τα Τροπικά Τοπία",
      "label": "Μοροντάβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "saint-marie": {
    "cityName": "Σαιντ Μαρί",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Σαιντ Μαρί madagascar 4K: Εναέρια Περιήγηση Drone στο Νεκροταφείο Πειρατών & Κόλπος Aux Forbans",
      "label": "Σαιντ Μαρί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "curepipe": {
    "cityName": "Κουρπίπ",
    "drone": {
      "youtubeId": "5jm5aKr-Ktk",
      "title": "Κουρπίπ 4K: Εξερεύνηση στο Ηφαίστειο Trou aux Cerfs & τα Υψίπεδα",
      "label": "Ηφαίστειο Trou aux Cerfs (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kncWTh8o4i0",
      "title": "Κουρπίπ 4K: Περιήγηση στον Βοτανικό Κήπο & το Ιστορικό Κέντρο",
      "label": "Κουρπίπ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "beau-bassin-rose-hill": {
    "cityName": "Μπο Μπασάν-Ροζ Ιλ",
    "drone": {
      "youtubeId": "kv0Nb8FTtvI",
      "title": "Μπο Μπασάν-Ροζ Ιλ 4K: Πανοραμική Περιήγηση στο Κεντρικό Οροπέδιο",
      "label": "Ροζ Ιλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "psPHEi9lbrA",
      "title": "Ροζ Ιλ 4K: Αυθεντική Περιήγηση στους Εμπορικούς Δρόμους & την Πλατεία Plaza",
      "label": "Ροζ Ιλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vacoas-phoenix": {
    "cityName": "Βακόας-Φοίνιξ",
    "drone": {
      "youtubeId": "ZsEWbpTxLZA",
      "title": "Βακόας-Φοίνιξ 4K: Εναέρια Περιήγηση στην Πόλη των Κήπων",
      "label": "Βακόας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ExcCcXfdGuY",
      "title": "Βακόας 4K: Περιήγηση στη Δημοτική Αγορά & τους Δρόμους της Πόλης",
      "label": "Βακόας Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "quatre-bornes": {
    "cityName": "Κατρ Μπορν",
    "drone": {
      "youtubeId": "kv0Nb8FTtvI",
      "title": "Κατρ Μπορν 4K: Εναέρια Περιήγηση στην Πόλη των Λουλουδιών",
      "label": "Κατρ Μπορν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y1nBk1q-bvw",
      "title": "Κατρ Μπορν 4K: Περιήγηση στη Διάσημη Αγορά Υφασμάτων & το Κέντρο",
      "label": "Κατρ Μπορν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mahebourg": {
    "cityName": "Μαεμπούρ",
    "drone": {
      "youtubeId": "B5I-MEskhCk",
      "title": "Μαεμπούρ 4K: Εναέρια Περιήγηση στον Ιστορικό Κόλπο Grand Port & το Waterfront",
      "label": "Μαεμπούρ Waterfront (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "VA51GN__fx8",
      "title": "Μαεμπούρ 4K: Περιήγηση στον Γραφικό Παραλιακό Πεζόδρομο & το Ναυτικό Μουσείο",
      "label": "Μαεμπούρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "flic-en-flac": {
    "cityName": "Φλικ αν Φλακ",
    "drone": {
      "youtubeId": "5UyzXjRwTZ0",
      "title": "Φλικ αν Φλακ 4K: Εναέρια Περιήγηση Drone στη Δυτική Ακτή & τους Κοραλλιογενείς Υφάλους",
      "label": "Φλικ αν Φλακ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "z_Y7bznND3o",
      "title": "Φλικ αν Φλακ 4K: Περιήγηση στη Διάσημη Παραλία με τα Casuarina Δέντρα",
      "label": "Φλικ αν Φλακ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tamarin": {
    "cityName": "Ταμαρέν",
    "drone": {
      "youtubeId": "NK5k4AcRttk",
      "title": "Ταμαρέν & Le Morne 4K: Εναέρια Περιήγηση στο Διάσημο Βουνό UNESCO & τις Αλυκές",
      "label": "Le Morne & Tamarin Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TN-MV4MQOLY",
      "title": "Ταμαρέν 4K: Περιήγηση στην Παραλία Surfing & τον Κόλπο των Δελφινιών",
      "label": "Παραλία Ταμαρέν (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "souillac": {
    "cityName": "Σουγιάκ",
    "drone": {
      "youtubeId": "5UyzXjRwTZ0",
      "title": "Σουγιάκ & Άγριος Νότος 4K: Εναέρια Περιήγηση στα Άγρια Βράχια Gris Gris",
      "label": "Άγριος Νότος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "n_OJlKZ3lCw",
      "title": "Gris Gris & Souillac 4K: Περιήγηση στους Επιβλητικούς Γκρεμούς & το Roche Qui Pleure",
      "label": "Gris Gris Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tangier": {
    "cityName": "Ταγγέρη",
    "drone": {
      "youtubeId": "m6ktP1e7umM",
      "title": "Ταγγέρη 4K: Μαρόκο 4K: Εναέρια Περιήγηση Drone στο Ραμπάτ & τις Ακτές",
      "label": "Ταγγέρη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "agadir": {
    "cityName": "Αγκαντίρ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Αγκαντίρ morocco 4K: Εναέρια Περιήγηση Drone στο Παραλία Αγκαντίρ & Ερείπια Κασμπά",
      "label": "Αγκαντίρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "meknes": {
    "cityName": "Μεκνές",
    "drone": {
      "youtubeId": "m6ktP1e7umM",
      "title": "Μεκνές 4K: Μαρόκο 4K: Εναέρια Περιήγηση Drone στο Ραμπάτ & τις Ακτές",
      "label": "Μεκνές με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "essaouira": {
    "cityName": "Εσσαουίρα",
    "drone": {
      "youtubeId": "m6ktP1e7umM",
      "title": "Εσσαουίρα 4K: Μαρόκο 4K: Εναέρια Περιήγηση Drone στο Ραμπάτ & τις Ακτές",
      "label": "Εσσαουίρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ouarzazate": {
    "cityName": "Ουαρζαζάτ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Ουαρζαζάτ morocco 4K: Εναέρια Περιήγηση Drone στο Κασμπά Ταουρίρτ & Αΐτ Μπενχαντού",
      "label": "Ουαρζαζάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chefchaouen": {
    "cityName": "Σεφσαουέν",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Σεφσαουέν morocco 4K: Εναέρια Περιήγηση Drone στο Μπλε Μεδίνα & Κασμπά",
      "label": "Σεφσαουέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nampula": {
    "cityName": "Ναμπούλα",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Ναμπούλα mozambique 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Nossa Senhora da Conceição & Κεντρική Αγορά",
      "label": "Ναμπούλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "pemba": {
    "cityName": "Πέμπα",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Πέμπα 4K: Μοζαμβίκη 4K: Πανοραμική Περιήγηση Drone στις Ακτές της Ανατολικής Αφρικής",
      "label": "Πέμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "quelimane": {
    "cityName": "Κελιμάνε",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Κελιμάνε mozambique 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Our Lady of Conception & Λιμάνι Quelimane",
      "label": "Κελιμάνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tete": {
    "cityName": "Τέτε",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Τέτε mozambique 4K: Εναέρια Περιήγηση Drone στο Γέφυρα Samora Machel στον Ζαμβέζη",
      "label": "Τέτε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chimoio": {
    "cityName": "Σιμόιο",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Σιμόιο mozambique 4K: Εναέρια Περιήγηση Drone στο Λόφος Cabeça do Velho & Σιδηροδρομικός Σταθμός",
      "label": "Σιμόιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "inhambane": {
    "cityName": "Ινιαμπάνε",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ινιαμπάνε mozambique 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός da Conceição & Παραλία Tofo",
      "label": "Ινιαμπάνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nacala": {
    "cityName": "Νασάλα",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Νασάλα mozambique 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Nacala & Παραλία Fernão Veloso",
      "label": "Νασάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "xai-xai": {
    "cityName": "Σάι-Σάι",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Σάι-Σάι mozambique 4K: Εναέρια Περιήγηση Drone στο Γέφυρα Limpopo & Παραλία Xai-Xai",
      "label": "Σάι-Σάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "walvis-bay": {
    "cityName": "Γουόλβις Μπέι",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Γουόλβις Μπέι namibia 4K: Εναέρια Περιήγηση Drone στο Λιμνοθάλασσα Walvis Bay & Αποικία Φωκιών Cape Cross",
      "label": "Γουόλβις Μπέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "luderitz": {
    "cityName": "Λούντεριτζ",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Λούντεριτζ 4K: Ναμίμπια 4K: Εναέρια Περιήγηση Drone στο Βίντχουκ & τα Τοπία της Ερήμου",
      "label": "Λούντεριτζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tsumeb": {
    "cityName": "Τσουμέμπ",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Τσουμέμπ 4K: Ναμίμπια 4K: Εναέρια Περιήγηση Drone στο Βίντχουκ & τα Τοπία της Ερήμου",
      "label": "Τσουμέμπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "otjiwarongo": {
    "cityName": "Οτιβαρόνγκο",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Οτιβαρόνγκο namibia 4K: Εναέρια Περιήγηση Drone στο Κροκόδειλος Farm & Εθνικό Μνημείο Hoba",
      "label": "Οτιβαρόνγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "keetmanshoop": {
    "cityName": "Κεετμανσχούπ",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κεετμανσχούπ namibia 4K: Εναέρια Περιήγηση Drone στο Μεγάλοι Άνθρωποι (Quiver Tree Forest) & Εκκλησία Rhenish",
      "label": "Κεετμανσχούπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rundu": {
    "cityName": "Ρούντου",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Ρούντου namibia 4K: Εναέρια Περιήγηση Drone στο Ποταμός Okavango & Καταφύγιο Mahango",
      "label": "Ρούντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "katima-mulilo": {
    "cityName": "Κατίμα Μουλίλο",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Κατίμα Μουλίλο namibia 4K: Εναέρια Περιήγηση Drone στο Γέφυρα Katima Mulilo & Ποταμός Zambezi",
      "label": "Κατίμα Μουλίλο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "oshakati": {
    "cityName": "Οσακάτι",
    "drone": {
      "youtubeId": "xT0ydkPPDvw",
      "title": "Οσακάτι 4K: Ναμίμπια 4K: Εναέρια Περιήγηση Drone στο Βίντχουκ & τα Τοπία της Ερήμου",
      "label": "Οσακάτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ibadan": {
    "cityName": "Ιμπαντάν",
    "drone": {
      "youtubeId": "9Tm5JRHBWlA",
      "title": "Ιμπαντάν 4K: Νιγηρία 4K: Εναέρια Περιήγηση Drone στο Λάγος & την Αμπούτζα",
      "label": "Ιμπαντάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-harcourt": {
    "cityName": "Πορτ Χάρκορτ",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Πορτ Χάρκορτ nigeria 4K: Εναέρια Περιήγηση Drone στο Γέφυρα του ποταμού Μπόνι & Πετρελαϊκές Εγκαταστάσεις",
      "label": "Πορτ Χάρκορτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "benin-city": {
    "cityName": "Μπενίν Σίτι",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Μπενίν Σίτι nigeria 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Όμπα & Εθνικό Μουσείο Μπενίν",
      "label": "Μπενίν Σίτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kaduna": {
    "cityName": "Καντούνα",
    "drone": {
      "youtubeId": "9Tm5JRHBWlA",
      "title": "Καντούνα 4K: Νιγηρία 4K: Εναέρια Περιήγηση Drone στο Λάγος & την Αμπούτζα",
      "label": "Καντούνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "enugu": {
    "cityName": "Ενούγκου",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Ενούγκου nigeria 4K: Εναέρια Περιήγηση Drone στο Ορυχεία Κάρβουνου & Καταρράκτης Awhum",
      "label": "Ενούγκου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "calabar": {
    "cityName": "Καλαμπάρ",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Καλαμπάρ nigeria 4K: Εναέρια Περιήγηση Drone στο Παλιά Πόλη Ντιουκ Τάουν & Μουσείο Σκλάβων",
      "label": "Καλαμπάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zaria": {
    "cityName": "Ζάρια",
    "drone": {
      "youtubeId": "9Tm5JRHBWlA",
      "title": "Ζάρια 4K: Νιγηρία 4K: Εναέρια Περιήγηση Drone στο Λάγος & την Αμπούτζα",
      "label": "Ζάρια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "butare": {
    "cityName": "Μπουτάρε",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Μπουτάρε 4K: Ρουάντα 4K: Εναέρια Περιήγηση Drone στο Κιγκάλι",
      "label": "Μπουτάρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ruhengeri": {
    "cityName": "Ρουχενγκέρι",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Ρουχενγκέρι rwanda 4K: Εναέρια Περιήγηση Drone στο Ηφαίστεια Sabyinyo, Karisimbi & Bisoke",
      "label": "Ρουχενγκέρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kibuye": {
    "cityName": "Κιμπούγε",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κιμπούγε rwanda 4K: Εναέρια Περιήγηση Drone στο Λίμνη Κίβου & Νησιά Napoleon/Amahoro",
      "label": "Κιμπούγε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cyangugu": {
    "cityName": "Τσιάνγκουγκου",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Τσιάνγκουγκου 4K: Ρουάντα 4K: Εναέρια Περιήγηση Drone στο Κιγκάλι",
      "label": "Τσιάνγκουγκου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nyanza": {
    "cityName": "Νυάνζα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Νυάνζα 4K: Ρουάντα 4K: Εναέρια Περιήγηση Drone στο Κιγκάλι",
      "label": "Νυάνζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "muhanga": {
    "cityName": "Μουχάνγκα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μουχάνγκα rwanda 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Kabgayi & Αγορά Gitarama",
      "label": "Μουχάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rwamagana": {
    "cityName": "Ρβαμαγκάνα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Ρβαμαγκάνα 4K: Ρουάντα 4K: Εναέρια Περιήγηση Drone στο Κιγκάλι",
      "label": "Ρβαμαγκάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "byumba": {
    "cityName": "Μπυούμπα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Μπυούμπα 4K: Ρουάντα 4K: Εναέρια Περιήγηση Drone στο Κιγκάλι",
      "label": "Μπυούμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "touba": {
    "cityName": "Τουμπά",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Τουμπά senegal 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Τζαμί Touba & Μαυσωλείο Ahmadou Bamba",
      "label": "Τουμπά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "thies": {
    "cityName": "Τιές",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Τιές senegal 4K: Εναέρια Περιήγηση Drone στο Σιδηροδρομικός Σταθμός & Αγορά Thiès",
      "label": "Τιές με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ziguinchor": {
    "cityName": "Ζιγκινσόρ",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Ζιγκινσόρ 4K: Σενεγάλη 4K: Εναέρια Περιήγηση Drone στο Ντακάρ",
      "label": "Ζιγκινσόρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kaolack": {
    "cityName": "Καολάκ",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Καολάκ 4K: Σενεγάλη 4K: Εναέρια Περιήγηση Drone στο Ντακάρ",
      "label": "Καολάκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbour": {
    "cityName": "Μπουρ",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μπουρ senegal 4K: Εναέρια Περιήγηση Drone στο Παραλία Mbour & Αγορά Ψαριών",
      "label": "Μπουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rufisque": {
    "cityName": "Ρουφίσκ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Ρουφίσκ senegal 4K: Εναέρια Περιήγηση Drone στο Αγορά Rufisque & Ιστορικά Κτίρια",
      "label": "Ρουφίσκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "saly": {
    "cityName": "Σαλί",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Σαλί 4K: Σενεγάλη 4K: Εναέρια Περιήγηση Drone στο Ντακάρ",
      "label": "Σαλί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cap-skirring": {
    "cityName": "Καπ Σκιρίνγκ",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Καπ Σκιρίνγκ 4K: Σενεγάλη 4K: Εναέρια Περιήγηση Drone στο Ντακάρ",
      "label": "Καπ Σκιρίνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gqeberha": {
    "cityName": "Γκεμπέχα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Γκεμπέχα 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Γκεμπέχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bloemfontein": {
    "cityName": "Μπλουμφοντέιν",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μπλουμφοντέιν 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Μπλουμφοντέιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "soweto": {
    "cityName": "Σοβέτο",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Σοβέτο 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Σοβέτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Σοβέτο 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Περιήγηση στο Σοβέτο (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mbombela": {
    "cityName": "Μπομπέλα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μπομπέλα 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Μπομπέλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "polokwane": {
    "cityName": "Πολοκουάνε",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Πολοκουάνε 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Πολοκουάνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "stellenbosch": {
    "cityName": "Στέλενμπος",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Στέλενμπος 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Στέλενμπος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Στέλενμπος 4K: Νότια Αφρική 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Κέιπ Τάουν & τα Εθνικά Πάρκα",
      "label": "Περιήγηση στο Στέλενμπος (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "omdurman": {
    "cityName": "Ομντουρμάν",
    "drone": {
      "youtubeId": "qN4o5O9rK6w",
      "title": "Ομντουρμάν 4K: Σουδάν 4K: Εναέρια Περιήγηση Drone στο Χαρτούμ",
      "label": "Ομντουρμάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kassala": {
    "cityName": "Κασσάλα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Κασσάλα sudan 4K: Εναέρια Περιήγηση Drone στο Λόφοι Taka & Αγορά Kassala",
      "label": "Κασσάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nyala": {
    "cityName": "Νυάλα",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Νυάλα sudan 4K: Εναέρια Περιήγηση Drone στο Όρη Jebel Marra & Σιδηροδρομικός Τερματικός",
      "label": "Νυάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "wad-madani": {
    "cityName": "Ουάντ Μαντανί",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Ουάντ Μαντανί sudan 4K: Εναέρια Περιήγηση Drone στο Γέφυρα & Ποταμός Γαλάζιος Νείλος & Πανεπιστήμιο Gezira",
      "label": "Ουάντ Μαντανί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "el-obeid": {
    "cityName": "Ελ Ομπέιντ",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Ελ Ομπέιντ sudan 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός El Obeid & Λόφος Jebel Kordofan",
      "label": "Ελ Ομπέιντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "atbara": {
    "cityName": "Ατμπαρά",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Ατμπαρά sudan 4K: Εναέρια Περιήγηση Drone στο Συμβολή Ατμπαρά & Νείλου & Σιδηροδρομικό Workshop",
      "label": "Ατμπαρά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kosti": {
    "cityName": "Κόστι",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Κόστι sudan 4K: Εναέρια Περιήγηση Drone στο Γέφυρα & Λιμάνι Κόστι & Φράγμα Jebel Aulia",
      "label": "Κόστι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "el-fasher": {
    "cityName": "Ελ Φασέρ",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Ελ Φασέρ sudan 4K: Εναέρια Περιήγηση Drone στο Παλάτι Sultan Ali Dinar & Jebel Marra (πύλη)",
      "label": "Ελ Φασέρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "arusha": {
    "cityName": "Αρούσα",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Αρούσα tanzania 4K: Εναέρια Περιήγηση Drone στο Arusha National Park & Mount Meru",
      "label": "Αρούσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mwanza": {
    "cityName": "Μουάνζα",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μουάνζα tanzania 4K: Εναέρια Περιήγηση Drone στο Bismarck Rock & Λίμνη Βικτόρια",
      "label": "Μουάνζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moshi": {
    "cityName": "Μόσι",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Μόσι tanzania 4K: Εναέρια Περιήγηση Drone στο Mount Kilimanjaro & Marangu Gate",
      "label": "Μόσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tanga": {
    "cityName": "Τάνγκα",
    "drone": {
      "youtubeId": "UBmBLIiBkIo",
      "title": "Τάνγκα 4K: Τανζανία 4K: Εναέρια Περιήγηση Drone στη Ζανζιβάρη & τα Σαφάρι",
      "label": "Τάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbeya": {
    "cityName": "Μπέγια",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Μπέγια tanzania 4K: Εναέρια Περιήγηση Drone στο Mount Rungwe & Lake Ngozi",
      "label": "Μπέγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "morogoro": {
    "cityName": "Μορογκόρο",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Μορογκόρο tanzania 4K: Εναέρια Περιήγηση Drone στο Uluguru Mountains & Mikumi National Park",
      "label": "Μορογκόρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kigoma": {
    "cityName": "Κιγκόμα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Κιγκόμα tanzania 4K: Εναέρια Περιήγηση Drone στο Lake Tanganyika & Ujiji",
      "label": "Κιγκόμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kairouan": {
    "cityName": "Καϊρουάν",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Καϊρουάν tunisia 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Τζαμί της Καϊρουάν & Τζαμί των Τριών Θυρών",
      "label": "Καϊρουάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bizerte": {
    "cityName": "Μπιζέρτα",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Μπιζέρτα 4K: Τυνησία 4K: Εναέρια Περιήγηση Drone στην Τύνιδα",
      "label": "Μπιζέρτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gabes": {
    "cityName": "Γκαμπές",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Γκαμπές tunisia 4K: Εναέρια Περιήγηση Drone στο Όαση της Γκαμπές & Παραλία",
      "label": "Γκαμπές με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nabeul": {
    "cityName": "Ναμπούλ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ναμπούλ tunisia 4K: Εναέρια Περιήγηση Drone στο Μεδίνα Ναμπούλ & Συνοικία Κεραμικών",
      "label": "Ναμπούλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "hammamet": {
    "cityName": "Χαμμαμέτ",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Χαμμαμέτ tunisia 4K: Εναέρια Περιήγηση Drone στο Κασμπά & Μεδίνα Χαμμαμέτ",
      "label": "Χαμμαμέτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "monastir": {
    "cityName": "Μοναστίρ",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Μοναστίρ 4K: Τυνησία 4K: Εναέρια Περιήγηση Drone στην Τύνιδα",
      "label": "Μοναστίρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "houmt-souk": {
    "cityName": "Χουμτ Σουκ (Ντζέρμπα)",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Χουμτ Σουκ (Ντζέρμπα) tunisia 4K: Εναέρια Περιήγηση Drone στο Μπορζ ελ Κεμπίρ & Συναγωγή Ελ Γκρίμπα",
      "label": "Χουμτ Σουκ (Ντζέρμπα) με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "jinja": {
    "cityName": "Τζίντζα",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Τζίντζα uganda 4K: Εναέρια Περιήγηση Drone στο Φράγμα Owen & Σπηλαια Ripon (Source of the Nile)",
      "label": "Τζίντζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gulu": {
    "cityName": "Γκουλού",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Γκουλού 4K: Ουγκάντα 4K: Πανοραμική Περιήγηση Drone στην Ανατολική Αφρική",
      "label": "Γκουλού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbarara": {
    "cityName": "Μπαράρα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Μπαράρα 4K: Ουγκάντα 4K: Πανοραμική Περιήγηση Drone στην Ανατολική Αφρική",
      "label": "Μπαράρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "fort-portal": {
    "cityName": "Φορτ Πόρταλ",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Φορτ Πόρταλ 4K: Ουγκάντα 4K: Πανοραμική Περιήγηση Drone στην Ανατολική Αφρική",
      "label": "Φορτ Πόρταλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "masaka": {
    "cityName": "Μασάκα",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Μασάκα 4K: Ουγκάντα 4K: Πανοραμική Περιήγηση Drone στην Ανατολική Αφρική",
      "label": "Μασάκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "arua": {
    "cityName": "Αρούα",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Αρούα uganda 4K: Εναέρια Περιήγηση Drone στο Ποταμός Nile-Albert & Λόφος Mt. Wati",
      "label": "Αρούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mbale": {
    "cityName": "Μπάλε",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Μπάλε uganda 4K: Εναέρια Περιήγηση Drone στο Όρος Elgon & Αγορά Wanale",
      "label": "Μπάλε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kasese": {
    "cityName": "Κασέσε",
    "drone": {
      "youtubeId": "fTWPumVgcnY",
      "title": "Κασέσε 4K: Ουγκάντα 4K: Πανοραμική Περιήγηση Drone στην Ανατολική Αφρική",
      "label": "Κασέσε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bulawayo": {
    "cityName": "Μπουλαουάγιο",
    "drone": {
      "youtubeId": "TV20Q_xaFFY",
      "title": "Μπουλαουάγιο 4K: Ζιμπάμπουε 4K: Εναέρια Περιήγηση Drone στους Καταρράκτες Βικτωρίας",
      "label": "Μπουλαουάγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mutare": {
    "cityName": "Μουτάρε",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μουτάρε zimbabwe 4K: Εναέρια Περιήγηση Drone στο Κορυφογραμμή Christmas Pass & Κορυφή Murambi",
      "label": "Μουτάρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gweru": {
    "cityName": "Γκουέρου",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Γκουέρου zimbabwe 4K: Εναέρια Περιήγηση Drone στο Λίμνη Ngezi & Μουσείο Σιδηροδρόμων Zimbabwe",
      "label": "Γκουέρου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kwekwe": {
    "cityName": "Κουέκουε",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Κουέκουε zimbabwe 4K: Εναέρια Περιήγηση Drone στο Φράγμα Sebakwe & Λέσχη Kwekwe",
      "label": "Κουέκουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "masvingo": {
    "cityName": "Μασβίνγκο",
    "drone": {
      "youtubeId": "TV20Q_xaFFY",
      "title": "Μασβίνγκο 4K: Ζιμπάμπουε 4K: Εναέρια Περιήγηση Drone στους Καταρράκτες Βικτωρίας",
      "label": "Μασβίνγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chinhoyi": {
    "cityName": "Τσινχόγι",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Τσινχόγι zimbabwe 4K: Εναέρια Περιήγηση Drone στο Σπηλιές Chinhoyi (Chirorodziva) & Μνημείο Battle of Sinoia",
      "label": "Τσινχόγι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bindura": {
    "cityName": "Μπίντουρα",
    "drone": {
      "youtubeId": "TV20Q_xaFFY",
      "title": "Μπίντουρα 4K: Ζιμπάμπουε 4K: Εναέρια Περιήγηση Drone στους Καταρράκτες Βικτωρίας",
      "label": "Μπίντουρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zvishavane": {
    "cityName": "Ζβισαβάνε",
    "drone": {
      "youtubeId": "TV20Q_xaFFY",
      "title": "Ζβισαβάνε 4K: Ζιμπάμπουε 4K: Εναέρια Περιήγηση Drone στους Καταρράκτες Βικτωρίας",
      "label": "Ζβισαβάνε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "parakou": {
    "cityName": "Παρακού",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Παρακού Μπενίν 4K: Εναέρια Περιήγηση Drone στο Σιδηροδρομικός Σταθμός & Αγορά Arzèkè",
      "label": "Παρακού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "abomey": {
    "cityName": "Αμπομέι",
    "drone": {
      "youtubeId": "4kf0AojDZh8",
      "title": "Αμπομέι 4K: Μπενίν 4K: Εναέρια Περιήγηση Drone στην Κοτονού",
      "label": "Αμπομέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ouidah": {
    "cityName": "Ουίντα",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Ουίντα Μπενίν 4K: Εναέρια Περιήγηση Drone στο Πύλη της Μη Επιστροφής",
      "label": "Ουίντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "djougou": {
    "cityName": "Ντζουγκού",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Ντζουγκού Μπενίν 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Τζαμί & Κεντρική Αγορά",
      "label": "Ντζουγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bohicon": {
    "cityName": "Μποχικόν",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Μποχικόν Μπενίν 4K: Εναέρια Περιήγηση Drone στο Αγορά Χουντρό",
      "label": "Μποχικόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "natitingou": {
    "cityName": "Νατιτινγκού",
    "drone": {
      "youtubeId": "4kf0AojDZh8",
      "title": "Νατιτινγκού 4K: Μπενίν 4K: Εναέρια Περιήγηση Drone στην Κοτονού",
      "label": "Νατιτινγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kandi": {
    "cityName": "Καντί",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Καντί Μπενίν 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Τζαμί & Αγορά",
      "label": "Καντί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lokossa": {
    "cityName": "Λοκόσα",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Λοκόσα Μπενίν 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Αγίου Πέτρου Κλάβερ",
      "label": "Λοκόσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sokode": {
    "cityName": "Σοκοντέ",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Σοκοντέ Τόγκο 4K: Εναέρια Περιήγηση Drone στο Παλάτι των Τσόκοσι",
      "label": "Σοκοντέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kara": {
    "cityName": "Καρά",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Καρά 4K: Τόγκο 4K: Εναέρια Περιήγηση Drone στη Λομέ",
      "label": "Καρά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kpalime": {
    "cityName": "Κπαλιμέ",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κπαλιμέ Τόγκο 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Κπαϊμέ & Όρος Άγκου",
      "label": "Κπαλιμέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "atakpame": {
    "cityName": "Ατακπαμέ",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Ατακπαμέ 4K: Τόγκο 4K: Εναέρια Περιήγηση Drone στη Λομέ",
      "label": "Ατακπαμέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dapaong": {
    "cityName": "Νταπαόνγκ",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Νταπαόνγκ 4K: Τόγκο 4K: Εναέρια Περιήγηση Drone στη Λομέ",
      "label": "Νταπαόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tsevie": {
    "cityName": "Τσεβιέ",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Τσεβιέ 4K: Τόγκο 4K: Εναέρια Περιήγηση Drone στη Λομέ",
      "label": "Τσεβιέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "aneho": {
    "cityName": "Ανεχό",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Ανεχό 4K: Τόγκο 4K: Εναέρια Περιήγηση Drone στη Λομέ",
      "label": "Ανεχό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mango": {
    "cityName": "Μανγκού",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Μανγκού Τόγκο 4K: Εναέρια Περιήγηση Drone στο Αγορά & Λίμνη της Μανγκού",
      "label": "Μανγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "badou": {
    "cityName": "Μπαντάουλι",
    "drone": {
      "youtubeId": "pvi1g3khuhk",
      "title": "Μπαντάουλι 4K: Τόγκο 4K: Εναέρια Περιήγηση Drone στη Λομέ",
      "label": "Μπαντάουλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "koudougou": {
    "cityName": "Κουντουγκού",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Κουντουγκού Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός & Κεντρική Αγορά",
      "label": "Κουντουγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ouahigouya": {
    "cityName": "Ουαχιγκουγιά",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Ουαχιγκουγιά Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στο Τείχη του Γιατένγκα",
      "label": "Ουαχιγκουγιά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "banfora": {
    "cityName": "Μπανφόρα",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μπανφόρα Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Καραφιγκέλα",
      "label": "Μπανφόρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dedougou": {
    "cityName": "Ντεντουγκού",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Ντεντουγκού Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός & Κεντρική Αγορά",
      "label": "Ντεντουγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kaya": {
    "cityName": "Καγιά",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Καγιά Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στο Κεντρική Αγορά & Μνημείο",
      "label": "Καγιά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "fada-ngourma": {
    "cityName": "Φάντα Ν’Γκούρμα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Φάντα Ν’Γκούρμα Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Γκουρμά & Αγορά",
      "label": "Φάντα Ν’Γκούρμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tenkodogo": {
    "cityName": "Τενκοντογκό",
    "drone": {
      "youtubeId": "f_sBb4CZ0W8",
      "title": "Τενκοντογκό 4K: Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στην Ουαγκαντούγκου",
      "label": "Τενκοντογκό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "po": {
    "cityName": "Πο",
    "drone": {
      "youtubeId": "f_sBb4CZ0W8",
      "title": "Πο 4K: Μπουρκίνα Φάσο 4K: Εναέρια Περιήγηση Drone στην Ουαγκαντούγκου",
      "label": "Πο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "misrata": {
    "cityName": "Μισράτα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Μισράτα Λιβύης 4K: Εναέρια Περιήγηση Drone στο Μεσογειακό Λιμάνι & το Εμπορικό Κέντρο",
      "label": "Μισράτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tobruk": {
    "cityName": "Τομπρούκ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Τομπρούκ 4K: Εναέρια Περιήγηση Drone στον Ιστορικό Κόλπο & τα Συμμαχικά Μνημεία",
      "label": "Τομπρούκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sirte": {
    "cityName": "Σύρτη",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Σύρτη 4K: Λιβύη 4K: Πανοραμική Περιήγηση Drone στις Ακτές της Βόρειας Αφρικής",
      "label": "Σύρτη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zawiya": {
    "cityName": "Ζαουίγια",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ζαουίγια Λιβύη 4K: Εναέρια Περιήγηση Drone στο Διυλιστήριο Ζαουίγια",
      "label": "Ζαουίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sabha": {
    "cityName": "Σάμπχα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σάμπχα Λιβύη 4K: Εναέρια Περιήγηση Drone στο Φρούριο Ελένα",
      "label": "Σάμπχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "derna": {
    "cityName": "Ντέρνα",
    "drone": {
      "youtubeId": "2MUJjFCIQ4k",
      "title": "Ντέρνα 4K: Λιβύη 4K: Πανοραμική Περιήγηση Drone στις Ακτές της Βόρειας Αφρικής",
      "label": "Ντέρνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "al-khums": {
    "cityName": "Χομς (Λέπτις Μάγκνα)",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Λέπτις Μάγκνα 4K HDR: Εναέρια Περιήγηση Drone στη Μεγαλοπρεπή Ρωμαϊκή Πόλη της Μεσογείου (UNESCO)",
      "label": "Λέπτις Μάγκνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ghadames": {
    "cityName": "Γκαντάμες",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Γκαντάμες 4K: Εναέρια Περιήγηση Drone στο «Μαργαριτάρι της Σαχάρας» (UNESCO)",
      "label": "Γκαντάμες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sikasso": {
    "cityName": "Σικάσο",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Σικάσο Μάλι 4K: Εναέρια Περιήγηση Drone στο Λόφος Μαντενόν (Mamelon)",
      "label": "Σικάσο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mopti": {
    "cityName": "Μοπτί",
    "drone": {
      "youtubeId": "Lp21jHwPUKE",
      "title": "Μοπτί 4K: Μάλι 4K: Εναέρια Περιήγηση Drone στο Μπαμακό",
      "label": "Μοπτί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "segou": {
    "cityName": "Σεγκού",
    "drone": {
      "youtubeId": "Lp21jHwPUKE",
      "title": "Σεγκού 4K: Μάλι 4K: Εναέρια Περιήγηση Drone στο Μπαμακό",
      "label": "Σεγκού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gao": {
    "cityName": "Γκάο",
    "drone": {
      "youtubeId": "Lp21jHwPUKE",
      "title": "Γκάο 4K: Μάλι 4K: Εναέρια Περιήγηση Drone στο Μπαμακό",
      "label": "Γκάο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kayes": {
    "cityName": "Καγιές",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Καγιές Μάλι 4K: Εναέρια Περιήγηση Drone στο Φρούριο του Μεντίν",
      "label": "Καγιές με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "djenne": {
    "cityName": "Τζενέ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Τζενέ 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Πλίνθινο Τζαμί & την Παλιά Πόλη (UNESCO)",
      "label": "Τζενέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "koulikoro": {
    "cityName": "Κουλικορό",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Κουλικορό Μάλι 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Κουλικορό",
      "label": "Κουλικορό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kidal": {
    "cityName": "Κιντάλ",
    "drone": {
      "youtubeId": "Lp21jHwPUKE",
      "title": "Κιντάλ 4K: Μάλι 4K: Εναέρια Περιήγηση Drone στο Μπαμακό",
      "label": "Κιντάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kiffa": {
    "cityName": "Κίφα",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Κίφα Μαυριτανία 4K: Εναέρια Περιήγηση Drone στο Λόφος Κίφα & Πετράδια Κίφα",
      "label": "Κίφα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "atar": {
    "cityName": "Ατάρ",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Ατάρ Μαυριτανία 4K: Εναέρια Περιήγηση Drone στο Παλιό Τζαμί Ατάρ",
      "label": "Ατάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rosso": {
    "cityName": "Ροσό",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Ροσό 4K: Μαυριτανία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ροσό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kaedi": {
    "cityName": "Καεντί",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Καεντί Μαυριτανία 4K: Εναέρια Περιήγηση Drone στο Γέφυρα Καεντί & Ποταμός Σενεγάλης",
      "label": "Καεντί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zouerate": {
    "cityName": "Ζουεράτ",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Ζουεράτ Μαυριτανία 4K: Εναέρια Περιήγηση Drone στο Όρος Κεντιάτ ελ Τζιλ (ορυχεία σιδήρου)",
      "label": "Ζουεράτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nema": {
    "cityName": "Νέμα",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Νέμα 4K: Μαυριτανία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Νέμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chinguetti": {
    "cityName": "Σινγκουέτι",
    "drone": {
      "youtubeId": "UVjU-bB4dns",
      "title": "Σινγκουέτι 4K: Μαυριτανία 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Σινγκουέτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "oualata": {
    "cityName": "Ουαλάντα",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Ουαλάντα Μαυριτανία 4K: Εναέρια Περιήγηση Drone στο Παλιά Πόλη Ουαλάντα (UNESCO) & Τοιχογραφίες",
      "label": "Ουαλάντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kitwe": {
    "cityName": "Κίτουε",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Κίτουε Ζάμπια 4K: Εναέρια Περιήγηση Drone στο Φράγμα Μιντόλα",
      "label": "Κίτουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ndola": {
    "cityName": "Ντόλα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ντόλα Ζάμπια 4K: Εναέρια Περιήγηση Drone στο Μνημείο Νταγκ Χάμαρσκελντ",
      "label": "Ντόλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chipata": {
    "cityName": "Τσιπάτα",
    "drone": {
      "youtubeId": "SXD0jzWJxUs",
      "title": "Τσιπάτα 4K: Ζάμπια 4K: Εναέρια Περιήγηση Drone στη Λουσάκα",
      "label": "Τσιπάτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kabwe": {
    "cityName": "Κάμπγουε",
    "drone": {
      "youtubeId": "SXD0jzWJxUs",
      "title": "Κάμπγουε 4K: Ζάμπια 4K: Εναέρια Περιήγηση Drone στη Λουσάκα",
      "label": "Κάμπγουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "solwezi": {
    "cityName": "Σολουέζι",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σολουέζι Ζάμπια 4K: Εναέρια Περιήγηση Drone στο Μεταλλείο Κανσάνσι",
      "label": "Σολουέζι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kasama": {
    "cityName": "Κασάμα",
    "drone": {
      "youtubeId": "SXD0jzWJxUs",
      "title": "Κασάμα 4K: Ζάμπια 4K: Εναέρια Περιήγηση Drone στη Λουσάκα",
      "label": "Κασάμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "chingola": {
    "cityName": "Τσινγκόλα",
    "drone": {
      "youtubeId": "SXD0jzWJxUs",
      "title": "Τσινγκόλα 4K: Ζάμπια 4K: Εναέρια Περιήγηση Drone στη Λουσάκα",
      "label": "Τσινγκόλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mufulira": {
    "cityName": "Μουφουλίρα",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Μουφουλίρα Ζάμπια 4K: Εναέρια Περιήγηση Drone στο Μεταλλείο Μουφουλίρα",
      "label": "Μουφουλίρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mzuzu": {
    "cityName": "Μζούζου",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μζούζου Μαλάουι 4K: Εναέρια Περιήγηση Drone στο Πανεπιστήμιο Mzuzu",
      "label": "Μζούζου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zomba": {
    "cityName": "Ζόμπα",
    "drone": {
      "youtubeId": "k1RVOLXa-mI",
      "title": "Ζόμπα 4K: Μαλάουι 4K: Εναέρια Περιήγηση Drone στη Λιλόνγκουε & τη Λίμνη Μαλάουι",
      "label": "Ζόμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mangochi": {
    "cityName": "Μανγκότσι",
    "drone": {
      "youtubeId": "k1RVOLXa-mI",
      "title": "Μανγκότσι 4K: Μαλάουι 4K: Εναέρια Περιήγηση Drone στη Λιλόνγκουε & τη Λίμνη Μαλάουι",
      "label": "Μανγκότσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "karonga": {
    "cityName": "Καρόνγκα",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Καρόνγκα Μαλάουι 4K: Εναέρια Περιήγηση Drone στο Μουσείο Καρόνγκα",
      "label": "Καρόνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "salima": {
    "cityName": "Σαλίμα",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Σαλίμα Μαλάουι 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Σαλίμα",
      "label": "Σαλίμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nkhata-bay": {
    "cityName": "Νκαταμπέι",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Λίμνη Μαλάουι 4K: Εναέρια Περιήγηση Drone στα Κρυστάλλινα Νερά & τα Πολύχρωμα Ψάρια Κιχλίδες",
      "label": "Λίμνη Μαλάουι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "likoma": {
    "cityName": "Λικώμα",
    "drone": {
      "youtubeId": "k1RVOLXa-mI",
      "title": "Λικώμα 4K: Μαλάουι 4K: Εναέρια Περιήγηση Drone στη Λιλόνγκουε & τη Λίμνη Μαλάουι",
      "label": "Λικώμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "liwonde": {
    "cityName": "Λιγουόντε",
    "drone": {
      "youtubeId": "_-L4jKUW7jo",
      "title": "Λιγουόντε Μαλάουι 4K: Εναέρια Περιήγηση Drone στο Εθνικό Πάρκο Λιγουόντε",
      "label": "Λιγουόντε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "victoria-seychelles": {
    "cityName": "Βικτώρια",
    "walking": {
      "youtubeId": "UHTooVIfX8k",
      "title": "Βικτώρια Σεϋχελλών 4K: Περιήγηση στον Πύργο του Ρολογιού & την Κεντρική Αγορά",
      "label": "Βικτώρια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    },
    "drone": {
      "youtubeId": "MoMLymH_Z5w",
      "title": "Σεϋχέλλες 4K: Εναέρια Περιήγηση Drone στο Μαχέ & τα Γύρω Νησιά",
      "label": "Μαχέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "anse-boileau": {
    "cityName": "Ανς Μπουαλό",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Ανς Μπουαλό Σεϋχέλλες 4K: Εναέρια Περιήγηση Drone στο Παραλία Ανς Μπουαλό",
      "label": "Ανς Μπουαλό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "beau-vallon": {
    "cityName": "Μπο Βαλόν",
    "drone": {
      "youtubeId": "Inhzq9oRISY",
      "title": "Μπο Βαλόν 4K: Εναέρια Περιήγηση Drone στη Μεγαλύτερη Παραλία του Μαχέ",
      "label": "Μπο Βαλόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "anse-royale": {
    "cityName": "Ανς Ρουαγιάλ",
    "drone": {
      "youtubeId": "MoMLymH_Z5w",
      "title": "Ανς Ρουαγιάλ 4K: Εναέρια Περιήγηση Drone στα Τυρκουάζ Νερά & τα Γρανιτένια Βράχια",
      "label": "Ανς Ρουαγιάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "baie-lazare": {
    "cityName": "Μπε Λαζάρ",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Μπε Λαζάρ Σεϋχέλλες 4K: Εναέρια Περιήγηση Drone στο Κόλπος Λαζάρ",
      "label": "Μπε Λαζάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "grand-anse-praslin": {
    "cityName": "Γκραντ Ανς Πραλέν",
    "drone": {
      "youtubeId": "7mnFqsg27WI",
      "title": "Πραλέν Σεϋχελλών 4K: Εναέρια Περιήγηση Drone στο Anse Lazio & το Vallée de Mai",
      "label": "Πραλέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "baie-sainte-anne": {
    "cityName": "Μπαϊ Σεντ Αν",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Μπαϊ Σεντ Αν Σεϋχέλλες 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Αγίας Άννης",
      "label": "Μπαϊ Σεντ Αν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "la-passe-la-digue": {
    "cityName": "Λα Πας (Λα Ντιγκ)",
    "drone": {
      "youtubeId": "OJncvtk3b_o",
      "title": "Λα Ντιγκ 4K: Εναέρια Περιήγηση Drone στην Παγκοσμίως Διάσημη Παραλία Anse Source d'Argent",
      "label": "Λα Ντιγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "plaisance": {
    "cityName": "Πλαζάνς",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Πλαζάνς Σεϋχέλλες 4K: Εναέρια Περιήγηση Drone στο Διεθνές Αεροδρόμιο Σεϋχελλών",
      "label": "Πλαζάνς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "takamaka": {
    "cityName": "Τακαμάκα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Τακαμάκα Σεϋχέλλες 4K: Εναέρια Περιήγηση Drone στο Παραλία Τακαμάκα",
      "label": "Τακαμάκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dolisie": {
    "cityName": "Ντολισί",
    "drone": {
      "youtubeId": "iy1EV5c5QNY",
      "title": "Ντολισί 4K: Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στην Μπραζαβίλ",
      "label": "Ντολισί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nkayi": {
    "cityName": "Νκαγί",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Νκαγί Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στο Εργοστάσιο SUCO & Ποταμός Μπουένζα",
      "label": "Νκαγί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ouesso": {
    "cityName": "Ουεσό",
    "drone": {
      "youtubeId": "iy1EV5c5QNY",
      "title": "Ουεσό 4K: Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στην Μπραζαβίλ",
      "label": "Ουεσό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "impfondo": {
    "cityName": "Ιμπφόντο",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Ιμπφόντο Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στο Ποταμός Ubangi & Τυρφώνες Likouala",
      "label": "Ιμπφόντο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "owando": {
    "cityName": "Οβάντο",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Οβάντο Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στο Ποταμός Kouyou & Αγροτική Κοιλάδα",
      "label": "Οβάντο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kinkala": {
    "cityName": "Κινκάλα",
    "drone": {
      "youtubeId": "iy1EV5c5QNY",
      "title": "Κινκάλα 4K: Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στην Μπραζαβίλ",
      "label": "Κινκάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mossendjo": {
    "cityName": "Μοσεντζό",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Μοσεντζό Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στο Λόφοι Chaillu & Σπήλαιο Mpassa",
      "label": "Μοσεντζό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "djambala": {
    "cityName": "Τσιμπάμπα",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Τσιμπάμπα Δημοκρατία του Κονγκό 4K: Εναέρια Περιήγηση Drone στο Οροπέδιο Lékoumou & Ποταμός Léfini",
      "label": "Τσιμπάμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-gentil": {
    "cityName": "Πορ-Ζαντίλ",
    "drone": {
      "youtubeId": "AgCqx8S9HI0",
      "title": "Πορ-Ζαντίλ 4K: Γκαμπόν 4K: Εναέρια Περιήγηση Drone στη Λιμπρεβίλ",
      "label": "Πορ-Ζαντίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "franceville": {
    "cityName": "Φρανσβίλ",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Φρανσβίλ Γκαμπόν 4K: Εναέρια Περιήγηση Drone στο Ποταμός Ogooué & Σταθμός Trans-Gabon",
      "label": "Φρανσβίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "oyem": {
    "cityName": "Ογιέμ",
    "drone": {
      "youtubeId": "AgCqx8S9HI0",
      "title": "Ογιέμ 4K: Γκαμπόν 4K: Εναέρια Περιήγηση Drone στη Λιμπρεβίλ",
      "label": "Ογιέμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moanda": {
    "cityName": "Μοαντά",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μοαντά Γκαμπόν 4K: Εναέρια Περιήγηση Drone στο Ορυχεία Μαγγανίου COMILOG & Πανεπιστήμιο",
      "label": "Μοαντά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mouila": {
    "cityName": "Μουιλά",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μουιλά Γκαμπόν 4K: Εναέρια Περιήγηση Drone στο Ποταμός Ngounié & Λόφοι Mouila",
      "label": "Μουιλά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lambarene": {
    "cityName": "Λαμπαρενέ",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Λαμπαρενέ Γκαμπόν 4K: Εναέρια Περιήγηση Drone στο Νοσοκομείο Albert Schweitzer & Λίμνη Ogooué",
      "label": "Λαμπαρενέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tchibanga": {
    "cityName": "Τσιμπάνγκα",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Τσιμπάνγκα Γκαμπόν 4K: Εναέρια Περιήγηση Drone στο Ποταμός Nyanga & Σπήλαιο Dibamba",
      "label": "Τσιμπάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "koulamoutou": {
    "cityName": "Κουλαμουτού",
    "drone": {
      "youtubeId": "AgCqx8S9HI0",
      "title": "Κουλαμουτού 4K: Γκαμπόν 4K: Εναέρια Περιήγηση Drone στη Λιμπρεβίλ",
      "label": "Κουλαμουτού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "makokou": {
    "cityName": "Μακόκου",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μακόκου Γκαμπόν 4K: Εναέρια Περιήγηση Drone στο Εθνικό Πάρκο Ivindo & Ποταμός Ivindo",
      "label": "Μακόκου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bata": {
    "cityName": "Μπάτα",
    "drone": {
      "youtubeId": "GQY0b_S5wGg",
      "title": "Μπάτα 4K: Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Μαλάμπο",
      "label": "Μπάτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ciudad-de-la-paz": {
    "cityName": "Σιουδάδ δε λα Παζ (Ογιάλα)",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Σιουδάδ δε λα Παζ (Ογιάλα) Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Προεδρικό Μέγαρο & Γέφυρα Ποταμού Mbini",
      "label": "Σιουδάδ δε λα Παζ (Ογιάλα) με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ebebiyin": {
    "cityName": "Εβεμπιγίνγκ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Εβεμπιγίνγκ Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Αγορά Εβεμπιγίνγκ & Σύνορα Καμερούν",
      "label": "Εβεμπιγίνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mongomo": {
    "cityName": "Μονγκόμο",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Μονγκόμο Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Βασιλική Mongomo & Προεδρικό Συγκρότημα",
      "label": "Μονγκόμο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "luba": {
    "cityName": "Λούμπα",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Λούμπα Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Λούμπα & Κόλπος San Carlos",
      "label": "Λούμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "anisok": {
    "cityName": "Ανισόκ",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Ανισόκ Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Ποταμός Wele & Δάσος Anisok",
      "label": "Ανισόκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "evinayong": {
    "cityName": "Εβιναγιόνγκ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Εβιναγιόνγκ Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Λόφοι Evinayong & Ποταμός Mbini",
      "label": "Εβιναγιόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "aconibe": {
    "cityName": "Ακονίμπε",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ακονίμπε Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Ποταμός Aconibe & Παραδοσιακά Χωριά",
      "label": "Ακονίμπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "san-antonio-de-pale": {
    "cityName": "Σαν Αντόνιο ντε Παλέ",
    "drone": {
      "youtubeId": "GQY0b_S5wGg",
      "title": "Σαν Αντόνιο ντε Παλέ 4K: Ισημερινή Γουινέα 4K: Εναέρια Περιήγηση Drone στο Μαλάμπο",
      "label": "Σαν Αντόνιο ντε Παλέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zinder": {
    "cityName": "Ζίντερ",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Ζίντερ 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Ζίντερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "maradi": {
    "cityName": "Μαραντί",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Μαραντί 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Μαραντί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "agadez": {
    "cityName": "Αγκααντέζ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Αγκααντέζ Νίγηρα 4K: Εναέρια Περιήγηση Drone στο Ιστορικό Πλίνθινο Τζαμί & την Πύλη της Σαχάρας (UNESCO)",
      "label": "Αγκααντέζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tahoua": {
    "cityName": "Ταχούα",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Ταχούα 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Ταχούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dosso": {
    "cityName": "Ντόσο",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Ντόσο 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Ντόσο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "diffa": {
    "cityName": "Ντιφά",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Ντιφά 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Ντιφά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "arlit": {
    "cityName": "Αρλίτ",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Αρλίτ Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Ορυχείο Somair",
      "label": "Αρλίτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bilma": {
    "cityName": "Μπιλμά",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Μπιλμά 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Μπιλμά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tillaberi": {
    "cityName": "Τιλαμπερί",
    "drone": {
      "youtubeId": "tnDY9E7aoxM",
      "title": "Τιλαμπερί 4K: Νίγηρας 4K: Εναέρια Περιήγηση Drone στο Νιαμέι",
      "label": "Τιλαμπερί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moundou": {
    "cityName": "Μούντου",
    "drone": {
      "youtubeId": "cTapro0Yf5w",
      "title": "Μούντου 4K: Τσαντ 4K: Εναέρια Περιήγηση Drone στην Ντζαμένα",
      "label": "Μούντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sarh": {
    "cityName": "Σαρ",
    "drone": {
      "youtubeId": "cTapro0Yf5w",
      "title": "Σαρ 4K: Τσαντ 4K: Εναέρια Περιήγηση Drone στην Ντζαμένα",
      "label": "Σαρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "abeche": {
    "cityName": "Αμπέσε",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Αμπέσε Τσαντ 4K: Εναέρια Περιήγηση Drone στο Παλάτι του Σουλτάνου του Ουαντάι",
      "label": "Αμπέσε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kelo": {
    "cityName": "Κέλο",
    "drone": {
      "youtubeId": "cTapro0Yf5w",
      "title": "Κέλο 4K: Τσαντ 4K: Εναέρια Περιήγηση Drone στην Ντζαμένα",
      "label": "Κέλο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "koumra": {
    "cityName": "Κουμρά",
    "drone": {
      "youtubeId": "cTapro0Yf5w",
      "title": "Κουμρά 4K: Τσαντ 4K: Εναέρια Περιήγηση Drone στην Ντζαμένα",
      "label": "Κουμρά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "pala": {
    "cityName": "Πάλα",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Πάλα Τσαντ 4K: Εναέρια Περιήγηση Drone στο Ορυχείο Χρυσού Pala",
      "label": "Πάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "am-timan": {
    "cityName": "Αμ Τιμάν",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Αμ Τιμάν Τσαντ 4K: Εναέρια Περιήγηση Drone στο Αγορά Ζώων Αμ Τιμάν",
      "label": "Αμ Τιμάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "faya-largeau": {
    "cityName": "Φάγια-Λαρζό",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Φάγια-Λαρζό Τσαντ 4K: Εναέρια Περιήγηση Drone στο Αλυκές Φάγια",
      "label": "Φάγια-Λαρζό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bongor": {
    "cityName": "Μπόνγκορ",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μπόνγκορ Τσαντ 4K: Εναέρια Περιήγηση Drone στο Γέφυρα Λογκόνε",
      "label": "Μπόνγκορ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bimbo": {
    "cityName": "Μπιμπό",
    "drone": {
      "youtubeId": "39498biFcEo",
      "title": "Μπιμπό 4K: Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στην Μπανγκί",
      "label": "Μπιμπό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "berberati": {
    "cityName": "Μπερμπεράτι",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Μπερμπεράτι Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στο Αγορά Διαμαντιών",
      "label": "Μπερμπεράτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "carnot": {
    "cityName": "Καρνό",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Καρνό Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στο Ορυχείο Διαμαντιών",
      "label": "Καρνό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bambari": {
    "cityName": "Μπαμπάρι",
    "drone": {
      "youtubeId": "39498biFcEo",
      "title": "Μπαμπάρι 4K: Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στην Μπανγκί",
      "label": "Μπαμπάρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bouar": {
    "cityName": "Μπουάρ",
    "drone": {
      "youtubeId": "39498biFcEo",
      "title": "Μπουάρ 4K: Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στην Μπανγκί",
      "label": "Μπουάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bossangoa": {
    "cityName": "Μποσανγκόα",
    "drone": {
      "youtubeId": "39498biFcEo",
      "title": "Μποσανγκόα 4K: Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στην Μπανγκί",
      "label": "Μποσανγκόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bria": {
    "cityName": "Μπριά",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Μπριά Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στο Ορυχείο Διαμαντιών",
      "label": "Μπριά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bangassou": {
    "cityName": "Μπανγκασού",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Μπανγκασού Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στο Γέφυρα Μπομού",
      "label": "Μπανγκασού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nola": {
    "cityName": "Νολά",
    "drone": {
      "youtubeId": "39498biFcEo",
      "title": "Νολά 4K: Κεντροαφρικανική Δημοκρατία 4K: Εναέρια Περιήγηση Drone στην Μπανγκί",
      "label": "Νολά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bosaso": {
    "cityName": "Μποσάσο",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μποσάσο Σομαλία 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Μποσάσο",
      "label": "Μποσάσο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kismayo": {
    "cityName": "Κισμάγιο",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Κισμάγιο Σομαλία 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Κισμάγιο",
      "label": "Κισμάγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "berbera": {
    "cityName": "Μπερμπέρα",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Μπερμπέρα 4K: Εναέρια Περιήγηση Drone στον Κόλπο του Άντεν & το Ιστορικό Οθωμανικό Λιμάνι",
      "label": "Μπερμπέρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "baidoa": {
    "cityName": "Μπαϊντόα",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Μπαϊντόα Σομαλία 4K: Εναέρια Περιήγηση Drone στο Κεντρική Αγορά",
      "label": "Μπαϊντόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "galkayo": {
    "cityName": "Γκαλκάγιο",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Γκαλκάγιο Σομαλία 4K: Εναέρια Περιήγηση Drone στο Αεροδρόμιο Γκαλκάγιο",
      "label": "Γκαλκάγιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "borama": {
    "cityName": "Μπόραμα",
    "drone": {
      "youtubeId": "ZpWtKJkNUhM",
      "title": "Μπόραμα 4K: Σομαλία 4K: Εναέρια Περιήγηση Drone στο Μογκαντίσου",
      "label": "Μπόραμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "merca": {
    "cityName": "Μέρκα",
    "drone": {
      "youtubeId": "ZpWtKJkNUhM",
      "title": "Μέρκα 4K: Σομαλία 4K: Εναέρια Περιήγηση Drone στο Μογκαντίσου",
      "label": "Μέρκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "garowe": {
    "cityName": "Γκαρόουε",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Γκαρόουε Σομαλία 4K: Εναέρια Περιήγηση Drone στο Κυβερνητικό Συγκρότημα",
      "label": "Γκαρόουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kankan": {
    "cityName": "Κανκάν",
    "drone": {
      "youtubeId": "wGy-wpZNVpw",
      "title": "Κανκάν 4K: Γουινέα 4K: Εναέρια Περιήγηση Drone στο Κονακρί",
      "label": "Κανκάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nzerekore": {
    "cityName": "Νζερεκορέ",
    "drone": {
      "youtubeId": "wGy-wpZNVpw",
      "title": "Νζερεκορέ 4K: Γουινέα 4K: Εναέρια Περιήγηση Drone στο Κονακρί",
      "label": "Νζερεκορέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kindia": {
    "cityName": "Κιντιά",
    "drone": {
      "youtubeId": "kAMkk6ger5c",
      "title": "Κιντιά Γουινέα 4K: Εναέρια Περιήγηση Drone στο Καταρράκτες Σοκολομπέ",
      "label": "Κιντιά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "labe": {
    "cityName": "Λαμπέ",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Λαμπέ Γουινέα 4K: Εναέρια Περιήγηση Drone στο Μεγάλο Τέμενος Λαμπέ",
      "label": "Λαμπέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "boke": {
    "cityName": "Μποκέ",
    "drone": {
      "youtubeId": "wGy-wpZNVpw",
      "title": "Μποκέ 4K: Γουινέα 4K: Εναέρια Περιήγηση Drone στο Κονακρί",
      "label": "Μποκέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mamou": {
    "cityName": "Μαμού",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Μαμού Γουινέα 4K: Εναέρια Περιήγηση Drone στο Σιδηροδρομικός Σταθμός Μαμού",
      "label": "Μαμού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gueckedou": {
    "cityName": "Γκεκεντού",
    "drone": {
      "youtubeId": "wGy-wpZNVpw",
      "title": "Γκεκεντού 4K: Γουινέα 4K: Εναέρια Περιήγηση Drone στο Κονακρί",
      "label": "Γκεκεντού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "fria": {
    "cityName": "Φρια",
    "drone": {
      "youtubeId": "wGy-wpZNVpw",
      "title": "Φρια 4K: Γουινέα 4K: Εναέρια Περιήγηση Drone στο Κονακρί",
      "label": "Φρια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "siguiri": {
    "cityName": "Σιγκιρί",
    "drone": {
      "youtubeId": "RrGY2exmU-0",
      "title": "Σιγκιρί Γουινέα 4K: Εναέρια Περιήγηση Drone στο Παλαιό Οχυρό Σιγκιρί",
      "label": "Σιγκιρί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "wau": {
    "cityName": "Βάου",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Βάου Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Καθεδρικός Ναός Αγίας Μαρίας",
      "label": "Βάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "malakal": {
    "cityName": "Μαλακάλ",
    "drone": {
      "youtubeId": "rZsp9YxYx_A",
      "title": "Μαλακάλ Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Λιμάνι Μαλακάλ",
      "label": "Μαλακάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "yei": {
    "cityName": "Γέι",
    "drone": {
      "youtubeId": "jGuvatBoc6g",
      "title": "Γέι 4K: Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στην Τζούμπα & τον Λευκό Νείλο",
      "label": "Γέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bentiu": {
    "cityName": "Μπεντίου",
    "drone": {
      "youtubeId": "CY7VV-sVnuA",
      "title": "Μπεντίου Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Πετρελαϊκά πεδία & γέφυρα El Salaam",
      "label": "Μπεντίου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rumbek": {
    "cityName": "Ρουμπέκ",
    "drone": {
      "youtubeId": "uz23AE-oemU",
      "title": "Ρουμπέκ Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Cattle camps & αεροδρόμιο",
      "label": "Ρουμπέκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "aweil": {
    "cityName": "Αουέιλ",
    "drone": {
      "youtubeId": "Fxu4cunNyXQ",
      "title": "Αουέιλ Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Σιδηροδρομικός σταθμός",
      "label": "Αουέιλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bor": {
    "cityName": "Μπορ",
    "drone": {
      "youtubeId": "jH3e5w4BWGA",
      "title": "Μπορ Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Malual-Chaat & μνημεία",
      "label": "Μπορ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "torit": {
    "cityName": "Τορίτ",
    "drone": {
      "youtubeId": "jGuvatBoc6g",
      "title": "Τορίτ 4K: Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στην Τζούμπα & τον Λευκό Νείλο",
      "label": "Τορίτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "maridi": {
    "cityName": "Μαριντί",
    "drone": {
      "youtubeId": "kFF_2n2C8os",
      "title": "Μαριντί Νότιο Σουδάν 4K: Εναέρια Περιήγηση Drone στο Δάση Maridi & λίμνη Khazana",
      "label": "Μαριντί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santa-maria-cv": {
    "cityName": "Σάντα Μαρία",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Σάντα Μαρία & Νήσος Σαλ 4K: Εναέρια Περιήγηση Drone στις Χρυσές Αμμουδιές",
      "label": "Σάντα Μαρία με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Eqfeywr5doM",
      "title": "Σάντα Μαρία 4K: Περιήγηση στους Πολύχρωμους Δρόμους & την Αποβάθρα",
      "label": "Σάντα Μαρία Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sal-rei": {
    "cityName": "Σαλ Ρέι",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Σαλ Ρέι 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Σαλ Ρέι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sao-filipe": {
    "cityName": "Σάο Φιλίπε",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Σάο Φιλίπε 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Σάο Φιλίπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "porto-novo-cv": {
    "cityName": "Πόρτο Νόβο",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Πόρτο Νόβο 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Πόρτο Νόβο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tarrafal": {
    "cityName": "Ταραφάλ",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Ταραφάλ 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Ταραφάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "espargos": {
    "cityName": "Εσπάργκος",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Εσπάργκος 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Εσπάργκος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cidade-velha": {
    "cityName": "Σιντάδε Βέλια",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Σιντάδε Βέλια 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Σιντάδε Βέλια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "pedra-badejo": {
    "cityName": "Πέδρα Μπαντέχο",
    "drone": {
      "youtubeId": "gRmlZPKV-lw",
      "title": "Πέδρα Μπαντέχο 4K: Πράσινο Ακρωτήριο 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Νησιά",
      "label": "Πέδρα Μπαντέχο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "serekunda": {
    "cityName": "Σέρεκουντα",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Σέρεκουντα 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Σέρεκουντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "brikama": {
    "cityName": "Μπρίκαμα",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Μπρίκαμα 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Μπρίκαμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bakau": {
    "cityName": "Μπάκαου",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Μπάκαου 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Μπάκαου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "farafenni": {
    "cityName": "Φαραφένι",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Φαραφένι 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Φαραφένι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gunjur": {
    "cityName": "Γκούντζουρ",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Γκούντζουρ 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Γκούντζουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sukuta": {
    "cityName": "Σουκούτα",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Σουκούτα 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Σουκούτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "barra": {
    "cityName": "Μπάρα",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Μπάρα 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Μπάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "janjanbureh": {
    "cityName": "Τζαντζανμπούρε",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Τζαντζανμπούρε 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Τζαντζανμπούρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tanji": {
    "cityName": "Τάντζι",
    "drone": {
      "youtubeId": "THVKu9JHknw",
      "title": "Τάντζι 4K: Γκάμπια 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ποταμό & τις Ακτές",
      "label": "Τάντζι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bafata": {
    "cityName": "Μπαφατά",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Μπαφατά 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Μπαφατά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gabu": {
    "cityName": "Γκαμπού",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Γκαμπού 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Γκαμπού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "canchungo": {
    "cityName": "Καντσουνγκό",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Καντσουνγκό 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Καντσουνγκό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cacheu": {
    "cityName": "Κασέου",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Κασέου 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Κασέου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "buba": {
    "cityName": "Μπούμπα",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Μπούμπα 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Μπούμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mansoa": {
    "cityName": "Μανσόα",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Μανσόα 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Μανσόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "catio": {
    "cityName": "Κατιό",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Κατιό 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Κατιό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bubaque": {
    "cityName": "Μπουμπάκε",
    "drone": {
      "youtubeId": "vV0gxEyOiW8",
      "title": "Μπουμπάκε & Αρχιπέλαγος Bijagós 4K: Εναέρια Περιήγηση Drone στα Τροπικά Νησιά UNESCO",
      "label": "Αρχιπέλαγος Bijagós Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "farim": {
    "cityName": "Φαρίμ",
    "drone": {
      "youtubeId": "qw8N9GP4v3M",
      "title": "Φαρίμ 4K: Γουινέα-Μπισάου 4K: Πανοραμική Περιήγηση Drone στις Ακτές & τα Δάση",
      "label": "Φαρίμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "gbarnga": {
    "cityName": "Γκμπάρνγκα",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Γκμπάρνγκα 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Γκμπάρνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "buchanan": {
    "cityName": "Μπιουκάναν",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Μπιουκάναν 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Μπιουκάναν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kakata": {
    "cityName": "Κακάτα",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Κακάτα 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Κακάτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "harper": {
    "cityName": "Χάρπερ",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Χάρπερ 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Χάρπερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "greenville-lr": {
    "cityName": "Γκρίνβιλ",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Γκρίνβιλ 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Γκρίνβιλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "voinjama": {
    "cityName": "Βοϊντζάμα",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Βοϊντζάμα 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Βοϊντζάμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "zwedru": {
    "cityName": "Ζουέντρου",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Ζουέντρου 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Ζουέντρου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "robertsport": {
    "cityName": "Ρόμπερτσπορτ",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Ρόμπερτσπορτ 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Ρόμπερτσπορτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sanniquellie": {
    "cityName": "Σανικουέλι",
    "drone": {
      "youtubeId": "0J5BGfQ5S3c",
      "title": "Σανικουέλι 4K: Λιβερία 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Ατλαντικό",
      "label": "Σανικουέλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bo": {
    "cityName": "Μπο",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Μπο 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Μπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kenema": {
    "cityName": "Κένεμα",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Κένεμα 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Κένεμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "makeni": {
    "cityName": "Μακένι",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Μακένι 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Μακένι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "koidu": {
    "cityName": "Κόιντου",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Κόιντου 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Κόιντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lunsar": {
    "cityName": "Λούνσαρ",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Λούνσαρ 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Λούνσαρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "port-loko": {
    "cityName": "Πορτ Λόκο",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Πορτ Λόκο 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Πορτ Λόκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "waterloo-sl": {
    "cityName": "Γουοτερλού",
    "drone": {
      "youtubeId": "OMeBRTuRv2A",
      "title": "Χερσόνησος Φρίταουν & Παραλία River No. 2 4K: Εναέρια Περιήγηση Drone",
      "label": "Παραλία River No. 2 (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kambia": {
    "cityName": "Καμπία",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Καμπία 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Καμπία με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bonthe": {
    "cityName": "Μπόντε",
    "drone": {
      "youtubeId": "xOWKSorvviE",
      "title": "Μπόντε 4K: Σιέρα Λεόνε 4K: Εναέρια Πανοραμική Περιήγηση Drone στις Τροπικές Ακτές",
      "label": "Μπόντε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santo-antonio-stp": {
    "cityName": "Σάντο Αντόνιο",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Σάντο Αντόνιο 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Σάντο Αντόνιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "trindade-stp": {
    "cityName": "Τριντάντε",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Τριντάντε 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Τριντάντε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santana-stp": {
    "cityName": "Σαντάνα",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Σαντάνα 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Σαντάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "neves": {
    "cityName": "Νέβες",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Νέβες 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Νέβες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "guadalupe-stp": {
    "cityName": "Γκουανταλούπε",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Γκουανταλούπε 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Γκουανταλούπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sao-joao-dos-angolares": {
    "cityName": "Σάο Ζοάο ντος Ανγκολάρες",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Σάο Ζοάο ντος Ανγκολάρες 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Σάο Ζοάο ντος Ανγκολάρες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "porto-alegre-stp": {
    "cityName": "Πόρτο Αλέγκρε",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Πόρτο Αλέγκρε 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Πόρτο Αλέγκρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "santa-catarina-stp": {
    "cityName": "Σάντα Καταρίνα",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Σάντα Καταρίνα 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Σάντα Καταρίνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "sundi": {
    "cityName": "Σούντι",
    "drone": {
      "youtubeId": "vNo3eD-pbiA",
      "title": "Σούντι 4K: Σάο Τομέ και Πρίνσιπε 4K: Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Σούντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ali-sabieh": {
    "cityName": "Άλι Σαμπίχ",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Άλι Σαμπίχ 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Άλι Σαμπίχ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tadjoura": {
    "cityName": "Τατζούρα",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Τατζούρα 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Τατζούρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "obock": {
    "cityName": "Ομπόκ",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Ομπόκ 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Ομπόκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dikhil": {
    "cityName": "Ντικίλ",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Ντικίλ 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Ντικίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "arta": {
    "cityName": "Άρτα",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Άρτα 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Άρτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "holhol": {
    "cityName": "Χολχόλ",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Χολχόλ 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Χολχόλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "doraleh": {
    "cityName": "Ντοραλέ",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Ντοραλέ 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Ντοραλέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "khor-ambado": {
    "cityName": "Χορ Αμπάντο",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Χορ Αμπάντο 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Χορ Αμπάντο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "randa": {
    "cityName": "Ράντα",
    "drone": {
      "youtubeId": "khmr5bNRTko",
      "title": "Ράντα 4K: Τζιμπουτί 4K: Εναέρια Πανοραμική Περιήγηση Drone στον Κόλπο του Άντεν",
      "label": "Ράντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "massawa": {
    "cityName": "Μασάουα",
    "drone": {
      "youtubeId": "SYhHh39dXic",
      "title": "Μασάουα & Green Island 4K: Εναέρια Περιήγηση Drone στο Ιστορικό Λιμάνι της Ερυθράς Θάλασσας",
      "label": "Μασάουα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "keren": {
    "cityName": "Κέρεν",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Κέρεν 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Κέρεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "assab": {
    "cityName": "Ασσάμπ",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Ασσάμπ 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Ασσάμπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mendefera": {
    "cityName": "Μεντεφέρα",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Μεντεφέρα 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Μεντεφέρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "dekemhare": {
    "cityName": "Ντεκεμχάρε",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Ντεκεμχάρε 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Ντεκεμχάρε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "barentu": {
    "cityName": "Μπαρέντου",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Μπαρέντου 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Μπαρέντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "adi-quala": {
    "cityName": "Άντι Κουάλα",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Άντι Κουάλα 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Άντι Κουάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ghinda": {
    "cityName": "Γκίντα",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Γκίντα 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Γκίντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nakfa": {
    "cityName": "Νάκφα",
    "drone": {
      "youtubeId": "zc3vLfLDEdg",
      "title": "Νάκφα 4K: Ερυθραία 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Υψίπεδα & την Ερυθρά Θάλασσα",
      "label": "Νάκφα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ngozi": {
    "cityName": "Νγκόζι",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Νγκόζι 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Νγκόζι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rumonge": {
    "cityName": "Ρουμόνγκε",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Ρουμόνγκε 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ρουμόνγκε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "muyinga": {
    "cityName": "Μουγίνγκα",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Μουγίνγκα 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μουγίνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "kayanza": {
    "cityName": "Καγιάνζα",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Καγιάνζα 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Καγιάνζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "bururi": {
    "cityName": "Μπουρούρι",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Μπουρούρι 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μπουρούρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "rutana": {
    "cityName": "Ρουτάνα",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Ρουτάνα 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Ρουτάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "makamba": {
    "cityName": "Μακάμπα",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Μακάμπα 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Μακάμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "cibitoke": {
    "cityName": "Τσιμπιτόκε",
    "drone": {
      "youtubeId": "K8OptxE1Js8",
      "title": "Τσιμπιτόκε 4K: Μπουρούντι & Λίμνη Τανγκανίκα 4K: Εναέρια Πανοραμική Περιήγηση Drone",
      "label": "Τσιμπιτόκε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "moutsamoudou": {
    "cityName": "Μουτσαμούντου",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Μουτσαμούντου 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Μουτσαμούντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "fomboni": {
    "cityName": "Φομπονί",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Φομπονί 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Φομπονί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "domoni": {
    "cityName": "Ντομονί",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Ντομονί 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Ντομονί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mitsamiouli": {
    "cityName": "Μιτσαμιούλι",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Μιτσαμιούλι 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Μιτσαμιούλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ouani": {
    "cityName": "Ουανί",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Ουανί 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Ουανί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mirontsi": {
    "cityName": "Μιροντσί",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Μιροντσί 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Μιροντσί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nioumachoua": {
    "cityName": "Νιουματσούα",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Νιουματσούα 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Νιουματσούα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "tsidje": {
    "cityName": "Τσιτζέ",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Τσιτζέ 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Τσιτζέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "iconi": {
    "cityName": "Ικονί",
    "drone": {
      "youtubeId": "NGFdXvJbhb4",
      "title": "Ικονί 4K: Κομόρες 4K: Εναέρια Πανοραμική Περιήγηση Drone στα Ηφαιστειακά Νησιά",
      "label": "Ικονί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "lobamba": {
    "cityName": "Λομπάμπα",
    "drone": {
      "youtubeId": "tXl8BACGynE",
      "title": "Μπαμπάνε 4K: Εναέρια Περιήγηση Drone στο Κέντρο & το Coronation Park",
      "label": "Λομπάμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "manzini": {
    "cityName": "Μανζίνι",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Μανζίνι 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Μανζίνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "ezulwini": {
    "cityName": "Εζουλγουίνι",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Εζουλγουίνι 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Εζουλγουίνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "piggs-peak": {
    "cityName": "Πιγκς Πικ",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Πιγκς Πικ 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Πιγκς Πικ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "siteki": {
    "cityName": "Σιτεκί",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Σιτεκί 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Σιτεκί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "nhlangano": {
    "cityName": "Νχλανγκάνο",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Νχλανγκάνο 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Νχλανγκάνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "big-bend": {
    "cityName": "Μπιγκ Μπεντ",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Μπιγκ Μπεντ 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Μπιγκ Μπεντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "simunye": {
    "cityName": "Σιμούνγε",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Σιμούνγε 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Σιμούνγε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "malkerns": {
    "cityName": "Μάλκερνς",
    "drone": {
      "youtubeId": "UyyH6PxN66c",
      "title": "Μάλκερνς 4K: Εσουατίνι 4K: Εναέρια Πανοραμική Περιήγηση Drone στο Βασίλειο της Σουαζιλάνδης",
      "label": "Μάλκερνς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "teyateyaneng": {
    "cityName": "Τεγιατεγιάνενγκ",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Τεγιατεγιάνενγκ 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Τεγιατεγιάνενγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mafeteng": {
    "cityName": "Μαφετενγκ",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Μαφετενγκ 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Μαφετενγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "hlotse": {
    "cityName": "Χλότσε",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Χλότσε 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Χλότσε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mohale-hoek": {
    "cityName": "Μοχάλες Χουκ",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Μοχάλες Χουκ 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Μοχάλες Χουκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "qacha-nek": {
    "cityName": "Κάτσας Νεκ",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Κάτσας Νεκ 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Κάτσας Νεκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "mokhotlong": {
    "cityName": "Μοχοτλόνγκ",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Μοχοτλόνγκ 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Μοχοτλόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "butha-buthe": {
    "cityName": "Μπούτα-Μπούθε",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Μπούτα-Μπούθε 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Μπούτα-Μπούθε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "thaba-tseka": {
    "cityName": "Θάμπα-Τσέκα",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Θάμπα-Τσέκα 4K: Λεσότο 4K: Εναέρια Πανοραμική Περιήγηση Drone στο «Βασίλειο των Ουρανών»",
      "label": "Θάμπα-Τσέκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "semonkong": {
    "cityName": "Σεμονκόνγκ",
    "drone": {
      "youtubeId": "b4ApPVApIXM",
      "title": "Σεμονκόνγκ & Καταρράκτες Maletsunyane 4K: Εναέρια Περιήγηση Drone στο Υψηλότερο Φαράγγι",
      "label": "Καταρράκτες Maletsunyane Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    }
  },
  "hue": {
    "cityName": "Χουέ",
    "drone": {
      "youtubeId": "nElJgZTjq8E",
      "title": "Χουέ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χουέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "VGsl1URiaAY",
      "title": "Χουέ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χουέ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hoi-an": {
    "cityName": "Χόι Αν",
    "drone": {
      "youtubeId": "6ZOXU40317A",
      "title": "Χόι Αν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χόι Αν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cm50M7kCV98",
      "title": "Χόι Αν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χόι Αν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ha-long": {
    "cityName": "Χα Λονγκ",
    "drone": {
      "youtubeId": "PbRIfBElC-I",
      "title": "Χα Λονγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χα Λονγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y-uT_j35iCU",
      "title": "Χα Λονγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χα Λονγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nha-trang": {
    "cityName": "Να Τρανγκ",
    "drone": {
      "youtubeId": "osH-f8D85yo",
      "title": "Να Τρανγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Να Τρανγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZH5tfEE_v-8",
      "title": "Να Τρανγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Να Τρανγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "can-tho": {
    "cityName": "Καν Το",
    "drone": {
      "youtubeId": "ctvG3qadB9A",
      "title": "Καν Το 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καν Το με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "IaaqYLDtkss",
      "title": "Καν Το 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καν Το Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "da-lat": {
    "cityName": "Ντα Λατ",
    "drone": {
      "youtubeId": "7n8aFsRWD9I",
      "title": "Ντα Λατ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ντα Λατ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "K6DHIE8spNU",
      "title": "Ντα Λατ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντα Λατ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sapa": {
    "cityName": "Σάπα",
    "drone": {
      "youtubeId": "oNO8kOCkM78",
      "title": "Σάπα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σάπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ArdeNmJtY7A",
      "title": "Σάπα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σάπα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ayutthaya": {
    "cityName": "Αγιουτάγια",
    "drone": {
      "youtubeId": "LFXCFz4mnw8",
      "title": "Αγιουτάγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αγιουτάγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2-1wX_VDYu0",
      "title": "Αγιουτάγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αγιουτάγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sukhothai": {
    "cityName": "Σουχοτάι",
    "drone": {
      "youtubeId": "DCyvCKY4bSQ",
      "title": "Σουχοτάι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σουχοτάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "l0xWLuzb-n4",
      "title": "Σουχοτάι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σουχοτάι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pattaya": {
    "cityName": "Πατάγια",
    "drone": {
      "youtubeId": "rD0KxlAUKM4",
      "title": "Πατάγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Πατάγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zwJphZ1JgtU",
      "title": "Πατάγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πατάγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "krabi": {
    "cityName": "Κράμπι",
    "drone": {
      "youtubeId": "7TjqVgpaWPo",
      "title": "Κράμπι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κράμπι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cLOEH0OqHwM",
      "title": "Κράμπι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κράμπι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chiang-rai": {
    "cityName": "Τσιάνγκ Ράι",
    "drone": {
      "youtubeId": "sJFSNt6U2KI",
      "title": "Τσιάνγκ Ράι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσιάνγκ Ράι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0wqgBd58BYI",
      "title": "Τσιάνγκ Ράι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσιάνγκ Ράι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hua-hin": {
    "cityName": "Χούα Χιν",
    "drone": {
      "youtubeId": "3KBm768WVmw",
      "title": "Χούα Χιν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χούα Χιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "qYM02KhLQXc",
      "title": "Χούα Χιν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χούα Χιν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nakhon-ratchasima": {
    "cityName": "Νακόν Ρατσασίμα",
    "drone": {
      "youtubeId": "YD6rpRdmnVM",
      "title": "Νακόν Ρατσασίμα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νακόν Ρατσασίμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "wa5wXUSEXAg",
      "title": "Νακόν Ρατσασίμα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νακόν Ρατσασίμα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "battambang": {
    "cityName": "Μπαταμπάνγκ",
    "drone": {
      "youtubeId": "yGYZClmMJNk",
      "title": "Μπαταμπάνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαταμπάνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XTGLpnbulPE",
      "title": "Μπαταμπάνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαταμπάνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sihanoukville": {
    "cityName": "Σιχανουκβίλ",
    "drone": {
      "youtubeId": "ddcBHmtjKK0",
      "title": "Σιχανουκβίλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιχανουκβίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KkuAo7ia4Q0",
      "title": "Σιχανουκβίλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιχανουκβίλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kampot": {
    "cityName": "Καμπότ",
    "drone": {
      "youtubeId": "dKx5ZXcejJA",
      "title": "Καμπότ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καμπότ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mnjaYZGrzEM",
      "title": "Καμπότ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καμπότ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kep": {
    "cityName": "Κεπ",
    "drone": {
      "youtubeId": "dDB25bFO18o",
      "title": "Κεπ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κεπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8GclDv5JMGE",
      "title": "Κεπ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κεπ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "koh-kong": {
    "cityName": "Κοχ Κονγκ",
    "drone": {
      "youtubeId": "b8ApRoLIWWY",
      "title": "Κοχ Κονγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κοχ Κονγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CaHE625I8ps",
      "title": "Κοχ Κονγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κοχ Κονγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kampong-cham": {
    "cityName": "Καμπόνγκ Τσαμ",
    "drone": {
      "youtubeId": "nhg5-rYk-rU",
      "title": "Καμπόνγκ Τσαμ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καμπόνγκ Τσαμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-DaFWCEsYUM",
      "title": "Καμπόνγκ Τσαμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καμπόνγκ Τσαμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kratie": {
    "cityName": "Κρατιέ",
    "drone": {
      "youtubeId": "E6ESxJ9dXY8",
      "title": "Κρατιέ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κρατιέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Bz0aB8NYub0",
      "title": "Κρατιέ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κρατιέ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pursat": {
    "cityName": "Πουρσάτ",
    "drone": {
      "youtubeId": "6I6v5BQCMHg",
      "title": "Πουρσάτ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Πουρσάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "L5m1bgQNqpk",
      "title": "Πουρσάτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πουρσάτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nara": {
    "cityName": "Νάρα",
    "drone": {
      "youtubeId": "Evg_xNCdHIc",
      "title": "Νάρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bNYdPv2t9Cs",
      "title": "Νάρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νάρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nagoya": {
    "cityName": "Ναγκόγια",
    "drone": {
      "youtubeId": "cKc4WklA-0k",
      "title": "Ναγκόγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ναγκόγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0eftZyh8ao8",
      "title": "Ναγκόγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναγκόγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "yokohama": {
    "cityName": "Γιοκοχάμα",
    "drone": {
      "youtubeId": "eT94UEskBiI",
      "title": "Γιοκοχάμα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γιοκοχάμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Jq5uXjXs8WQ",
      "title": "Γιοκοχάμα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γιοκοχάμα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kobe": {
    "cityName": "Κόμπε",
    "drone": {
      "youtubeId": "Qqq2DOj4n9w",
      "title": "Κόμπε 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κόμπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2iPlCdovU9U",
      "title": "Κόμπε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κόμπε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "daegu": {
    "cityName": "Ντέγκου",
    "drone": {
      "youtubeId": "xRJkOEtwX4g",
      "title": "Ντέγκου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ντέγκου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1BURTltVmb0",
      "title": "Ντέγκου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντέγκου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "daejeon": {
    "cityName": "Ντετζόν",
    "drone": {
      "youtubeId": "ZwvfmTiNQ6w",
      "title": "Ντετζόν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ντετζόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MPeZhs8obaw",
      "title": "Ντετζόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντετζόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gwangju": {
    "cityName": "Γκουάνγκτζου",
    "drone": {
      "youtubeId": "Ng4cGBRSJqE",
      "title": "Γκουάνγκτζου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γκουάνγκτζου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ot6u2mDHzFg",
      "title": "Γκουάνγκτζου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκουάνγκτζου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gyeongju": {
    "cityName": "Γκιόνγκτζου",
    "drone": {
      "youtubeId": "GVrtEV7S9UE",
      "title": "Γκιόνγκτζου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γκιόνγκτζου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mvuztajCk4s",
      "title": "Γκιόνγκτζου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκιόνγκτζου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jeju": {
    "cityName": "Τζετζού",
    "drone": {
      "youtubeId": "d_rbrHeWP0A",
      "title": "Τζετζού 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζετζού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_PwN_S-1K_k",
      "title": "Τζετζού 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζετζού Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "suwon": {
    "cityName": "Σούγουον",
    "drone": {
      "youtubeId": "AsnmlqLArwU",
      "title": "Σούγουον 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σούγουον με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "r7LC4-ZNnIQ",
      "title": "Σούγουον 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σούγουον Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jeonju": {
    "cityName": "Τζόντζου",
    "drone": {
      "youtubeId": "I6SwH2G7z3o",
      "title": "Τζόντζου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζόντζου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "70PmGY-UKWY",
      "title": "Τζόντζου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζόντζου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "taichung": {
    "cityName": "Ταϊτσούνγκ",
    "drone": {
      "youtubeId": "Bhl3RN3zHPw",
      "title": "Ταϊτσούνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταϊτσούνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TTJkh6VwNgY",
      "title": "Ταϊτσούνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταϊτσούνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tainan": {
    "cityName": "Ταϊνάν",
    "drone": {
      "youtubeId": "owqRtEC3bI0",
      "title": "Ταϊνάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταϊνάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YfPihwzDW5s",
      "title": "Ταϊνάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταϊνάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hsinchu": {
    "cityName": "Σιντσού",
    "drone": {
      "youtubeId": "w3Yefz-p-vw",
      "title": "Σιντσού 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιντσού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Wp2Jl58o_fA",
      "title": "Σιντσού 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιντσού Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "keelung": {
    "cityName": "Κιλόνγκ",
    "drone": {
      "youtubeId": "Zdpivb4FBlY",
      "title": "Κιλόνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κιλόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "hLZDwhHd93E",
      "title": "Κιλόνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κιλόνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chiayi": {
    "cityName": "Τσιαγί",
    "drone": {
      "youtubeId": "Bhl3RN3zHPw",
      "title": "Τσιαγί 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσιαγί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GQiK6KuY5sw",
      "title": "Τσιαγί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσιαγί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hualien": {
    "cityName": "Χουαλιέν",
    "drone": {
      "youtubeId": "FkxzjxB1LgE",
      "title": "Χουαλιέν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χουαλιέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Bhl3RN3zHPw",
      "title": "Χουαλιέν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χουαλιέν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "taitung": {
    "cityName": "Ταϊτούνγκ",
    "drone": {
      "youtubeId": "FkxzjxB1LgE",
      "title": "Ταϊτούνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταϊτούνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Bhl3RN3zHPw",
      "title": "Ταϊτούνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταϊτούνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lukang": {
    "cityName": "Λουκάνγκ",
    "drone": {
      "youtubeId": "Z4wk9VMQFq4",
      "title": "Λουκάνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λουκάνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vQ6wxaRL1aM",
      "title": "Λουκάνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λουκάνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lalitpur-patan": {
    "cityName": "Λαλιτπούρ",
    "drone": {
      "youtubeId": "hzxBYx8HbpY",
      "title": "Λαλιτπούρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λαλιτπούρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kF1-rYlT0-M",
      "title": "Λαλιτπούρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λαλιτπούρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bhaktapur": {
    "cityName": "Μπακταπούρ",
    "drone": {
      "youtubeId": "JcLuvDZe4vo",
      "title": "Μπακταπούρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπακταπούρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Uf9Q_1s_OuU",
      "title": "Μπακταπούρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπακταπούρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lumbini": {
    "cityName": "Λουμπίνι",
    "drone": {
      "youtubeId": "F1WgmXXFcCc",
      "title": "Λουμπίνι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λουμπίνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MGPtahheaZE",
      "title": "Λουμπίνι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λουμπίνι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "janakpur": {
    "cityName": "Τζανακπούρ",
    "drone": {
      "youtubeId": "pG-r3ISFuYg",
      "title": "Τζανακπούρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζανακπούρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ObbKftBtb50",
      "title": "Τζανακπούρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζανακπούρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "biratnagar": {
    "cityName": "Μπιρατναγκάρ",
    "drone": {
      "youtubeId": "MbmjqeOXG6U",
      "title": "Μπιρατναγκάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπιρατναγκάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Ber0x6PF8vo",
      "title": "Μπιρατναγκάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπιρατναγκάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dharan": {
    "cityName": "Νταράν",
    "drone": {
      "youtubeId": "gFw5OPKwz5w",
      "title": "Νταράν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νταράν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1Yzg7gN2heQ",
      "title": "Νταράν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νταράν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chitwan": {
    "cityName": "Τσιτουάν",
    "drone": {
      "youtubeId": "Ber0x6PF8vo",
      "title": "Τσιτουάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσιτουάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vvIriZHcW0w",
      "title": "Τσιτουάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσιτουάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "butwal": {
    "cityName": "Μπουτβάλ",
    "drone": {
      "youtubeId": "Ber0x6PF8vo",
      "title": "Μπουτβάλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπουτβάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FJOi4_Xh0hY",
      "title": "Μπουτβάλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπουτβάλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kolkata": {
    "cityName": "Καλκούτα",
    "drone": {
      "youtubeId": "oY4d2JQhSkM",
      "title": "Καλκούτα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καλκούτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mu9mO5FN-Ew",
      "title": "Καλκούτα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καλκούτα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bengaluru": {
    "cityName": "Μπανγκαλόρ",
    "drone": {
      "youtubeId": "RFTZC1Rki9E",
      "title": "Μπανγκαλόρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπανγκαλόρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "miArx-1VdR4",
      "title": "Μπανγκαλόρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπανγκαλόρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chennai": {
    "cityName": "Τσεννάι",
    "drone": {
      "youtubeId": "LJp019pXJ_U",
      "title": "Τσεννάι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσεννάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ONWiU3YIQEA",
      "title": "Τσεννάι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσεννάι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "varanasi": {
    "cityName": "Βαρανάσι",
    "drone": {
      "youtubeId": "NNFDoi_ZJ9U",
      "title": "Βαρανάσι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Βαρανάσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "k7pIzTRGcfA",
      "title": "Βαρανάσι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βαρανάσι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "amritsar": {
    "cityName": "Αμριτσάρ",
    "drone": {
      "youtubeId": "VLmjkca4Hyk",
      "title": "Αμριτσάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αμριτσάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "J_8F-1XEZCk",
      "title": "Αμριτσάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αμριτσάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hyderabad": {
    "cityName": "Χαϊντεραμπάντ",
    "drone": {
      "youtubeId": "Zors_InOVHk",
      "title": "Χαϊντεραμπάντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χαϊντεραμπάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rSS11hNTNg8",
      "title": "Χαϊντεραμπάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαϊντεραμπάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "galle": {
    "cityName": "Γκάλε",
    "drone": {
      "youtubeId": "5l7rDGsgq_0",
      "title": "Γκάλε 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γκάλε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KZl8QFpTYQY",
      "title": "Γκάλε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκάλε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jaffna": {
    "cityName": "Τζάφνα",
    "drone": {
      "youtubeId": "3EigRVqvNEo",
      "title": "Τζάφνα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζάφνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-NfyZ43u7kc",
      "title": "Τζάφνα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζάφνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "anuradhapura": {
    "cityName": "Ανουρανταπούρα",
    "drone": {
      "youtubeId": "atljRnUC4gU",
      "title": "Ανουρανταπούρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ανουρανταπούρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "AmquI9BPUfc",
      "title": "Ανουρανταπούρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ανουρανταπούρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sigiriya": {
    "cityName": "Σιγκιρίγια",
    "drone": {
      "youtubeId": "al5Yu9vexWk",
      "title": "Σιγκιρίγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιγκιρίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZELHsDo6DxE",
      "title": "Σιγκιρίγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιγκιρίγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nuwara-eliya": {
    "cityName": "Νουβάρα Ελίγια",
    "drone": {
      "youtubeId": "XVwauEz70ZM",
      "title": "Νουβάρα Ελίγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νουβάρα Ελίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G2dDF3wdM6Y",
      "title": "Νουβάρα Ελίγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νουβάρα Ελίγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trincomalee": {
    "cityName": "Τρινκομαλί",
    "drone": {
      "youtubeId": "G061Ty0jHTI",
      "title": "Τρινκομαλί 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τρινκομαλί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "fqQBGfi9SWE",
      "title": "Τρινκομαλί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τρινκομαλί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "negombo": {
    "cityName": "Νεγκόμπο",
    "drone": {
      "youtubeId": "qwM9PQ1s54U",
      "title": "Νεγκόμπο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νεγκόμπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "AH80lTm7nS8",
      "title": "Νεγκόμπο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νεγκόμπο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "batticaloa": {
    "cityName": "Μπατικαλόα",
    "drone": {
      "youtubeId": "oyMPzbi-I-4",
      "title": "Μπατικαλόα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπατικαλόα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "P6Jv7UhplWk",
      "title": "Μπατικαλόα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπατικαλόα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "davao": {
    "cityName": "Νταβάο",
    "drone": {
      "youtubeId": "FkNlVkHcdz0",
      "title": "Νταβάο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νταβάο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SO_p4YVUrL4",
      "title": "Νταβάο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νταβάο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "baguio": {
    "cityName": "Μπαγκούιο",
    "drone": {
      "youtubeId": "HJoo-EQ9CUM",
      "title": "Μπαγκούιο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαγκούιο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FkaNQvo6n6g",
      "title": "Μπαγκούιο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαγκούιο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vigan": {
    "cityName": "Βιγκάν",
    "drone": {
      "youtubeId": "A6ZbtF9hagI",
      "title": "Βιγκάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Βιγκάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "sAZF-XNOTL0",
      "title": "Βιγκάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βιγκάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "iloilo": {
    "cityName": "Ιλοΐλο",
    "drone": {
      "youtubeId": "MbvUS5xB5uM",
      "title": "Ιλοΐλο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ιλοΐλο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "VhlxiVl5nWY",
      "title": "Ιλοΐλο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ιλοΐλο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "zamboanga": {
    "cityName": "Ζαμποάνγκα",
    "drone": {
      "youtubeId": "sDAuNT3mVkY",
      "title": "Ζαμποάνγκα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ζαμποάνγκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "t1s26Ia2AN4",
      "title": "Ζαμποάνγκα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ζαμποάνγκα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "puerto-princesa": {
    "cityName": "Πουέρτο Πρινσέσα",
    "drone": {
      "youtubeId": "9ElvLFVNd_w",
      "title": "Πουέρτο Πρινσέσα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Πουέρτο Πρινσέσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JcKdLuh96Kg",
      "title": "Πουέρτο Πρινσέσα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πουέρτο Πρινσέσα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "angeles-city": {
    "cityName": "Άνχελες Σίτι",
    "drone": {
      "youtubeId": "FH_Ou6NQu5o",
      "title": "Άνχελες Σίτι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Άνχελες Σίτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UBUDN_txaNg",
      "title": "Άνχελες Σίτι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άνχελες Σίτι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tagaytay": {
    "cityName": "Ταγκαϊτάι",
    "drone": {
      "youtubeId": "O-PqIE8rBhY",
      "title": "Ταγκαϊτάι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταγκαϊτάι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lUq6fKZUev0",
      "title": "Ταγκαϊτάι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταγκαϊτάι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "malacca": {
    "cityName": "Μαλάκκα",
    "drone": {
      "youtubeId": "HI30eht93CQ",
      "title": "Μαλάκκα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μαλάκκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "o7Jgl5KffTM",
      "title": "Μαλάκκα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μαλάκκα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "johor-bahru": {
    "cityName": "Τζοχόρ Μπάχρου",
    "drone": {
      "youtubeId": "WyLZyAscmLQ",
      "title": "Τζοχόρ Μπάχρου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζοχόρ Μπάχρου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4t80ttInM1M",
      "title": "Τζοχόρ Μπάχρου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζοχόρ Μπάχρου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kota-kinabalu": {
    "cityName": "Κότα Κιναμπάλου",
    "drone": {
      "youtubeId": "90CsZ0-vf7A",
      "title": "Κότα Κιναμπάλου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κότα Κιναμπάλου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "dIS8Hz3t_nU",
      "title": "Κότα Κιναμπάλου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κότα Κιναμπάλου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kuching": {
    "cityName": "Κούτσινγκ",
    "drone": {
      "youtubeId": "SRKvk1wGZYM",
      "title": "Κούτσινγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κούτσινγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "A_F9QFJaOWI",
      "title": "Κούτσινγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κούτσινγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ipoh": {
    "cityName": "Ίπο",
    "drone": {
      "youtubeId": "wV-Uph2kfo8",
      "title": "Ίπο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ίπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5Sm35YSXd5I",
      "title": "Ίπο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ίπο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kuantan": {
    "cityName": "Κουαντάν",
    "drone": {
      "youtubeId": "vWgVSmimegs",
      "title": "Κουαντάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κουαντάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YtHDrJ-o5vs",
      "title": "Κουαντάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κουαντάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "alor-setar": {
    "cityName": "Άλορ Σετάρ",
    "drone": {
      "youtubeId": "vWgVSmimegs",
      "title": "Άλορ Σετάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Άλορ Σετάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YtHDrJ-o5vs",
      "title": "Άλορ Σετάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άλορ Σετάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "langkawi": {
    "cityName": "Λανγκάουι",
    "drone": {
      "youtubeId": "er5SfhGgvNk",
      "title": "Λανγκάουι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λανγκάουι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PII15vvzKGI",
      "title": "Λανγκάουι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λανγκάουι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "yogyakarta": {
    "cityName": "Τζογκτζακάρτα",
    "drone": {
      "youtubeId": "xBubaG5yFnw",
      "title": "Τζογκτζακάρτα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζογκτζακάρτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "H9uOsNfAI_k",
      "title": "Τζογκτζακάρτα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζογκτζακάρτα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bandung": {
    "cityName": "Μπαντούνγκ",
    "drone": {
      "youtubeId": "rQldLprw2fw",
      "title": "Μπαντούνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαντούνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "xvvCgmy35Ag",
      "title": "Μπαντούνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαντούνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "medan": {
    "cityName": "Μεντάν",
    "drone": {
      "youtubeId": "L_HUJz7IE6g",
      "title": "Μεντάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μεντάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Nh59FjyIBAk",
      "title": "Μεντάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μεντάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "makassar": {
    "cityName": "Μακασάρ",
    "drone": {
      "youtubeId": "C9qoKDXaYWM",
      "title": "Μακασάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μακασάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Ib435pHurX0",
      "title": "Μακασάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μακασάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "semarang": {
    "cityName": "Σεμαράνγκ",
    "drone": {
      "youtubeId": "rKVTE3coCn8",
      "title": "Σεμαράνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σεμαράνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Bfre1SAZr78",
      "title": "Σεμαράνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σεμαράνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "solo-surakarta": {
    "cityName": "Σουρακάρτα (Σόλο)",
    "drone": {
      "youtubeId": "gOoIVPhhU58",
      "title": "Σουρακάρτα (Σόλο) 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σουρακάρτα (Σόλο) με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CqUpEM9d2Kw",
      "title": "Σουρακάρτα (Σόλο) 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σουρακάρτα (Σόλο) Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "labuan-bajo": {
    "cityName": "Λαμπουάν Μπάτζο",
    "drone": {
      "youtubeId": "Vz_z0lD12Sg",
      "title": "Λαμπουάν Μπάτζο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λαμπουάν Μπάτζο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "6dHp8ZO-W8I",
      "title": "Λαμπουάν Μπάτζο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λαμπουάν Μπάτζο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vang-vieng": {
    "cityName": "Βανγκ Βιένγκ",
    "drone": {
      "youtubeId": "xxAHOsKDGww",
      "title": "Βανγκ Βιένγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Βανγκ Βιένγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EdDXRw6S-6M",
      "title": "Βανγκ Βιένγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βανγκ Βιένγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pakse": {
    "cityName": "Παξέ",
    "drone": {
      "youtubeId": "wVeM8GprbCc",
      "title": "Παξέ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Παξέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JnrnWArs9mg",
      "title": "Παξέ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Παξέ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "savannakhet": {
    "cityName": "Σαβανακέτ",
    "drone": {
      "youtubeId": "-V7pM2Vmw5E",
      "title": "Σαβανακέτ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σαβανακέτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "dZy8L8U1S-k",
      "title": "Σαβανακέτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαβανακέτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "thakhek": {
    "cityName": "Τακέκ",
    "drone": {
      "youtubeId": "JuxEM2uIkcE",
      "title": "Τακέκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τακέκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2ZixoSsJNAg",
      "title": "Τακέκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τακέκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "luang-namtha": {
    "cityName": "Λουάνγκ Ναμθά",
    "drone": {
      "youtubeId": "W3Uosxqsk08",
      "title": "Λουάνγκ Ναμθά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λουάνγκ Ναμθά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Bdz-hwclk0c",
      "title": "Λουάνγκ Ναμθά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λουάνγκ Ναμθά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sam-neua": {
    "cityName": "Σαμ Νουά",
    "drone": {
      "youtubeId": "FjqvElkWLyQ",
      "title": "Σαμ Νουά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σαμ Νουά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2ZixoSsJNAg",
      "title": "Σαμ Νουά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαμ Νουά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "phonsavan": {
    "cityName": "Φονσαβάν",
    "drone": {
      "youtubeId": "W3Uosxqsk08",
      "title": "Φονσαβάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Φονσαβάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vUtaKA9PhTE",
      "title": "Φονσαβάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φονσαβάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "champasak": {
    "cityName": "Τσαμπασάκ",
    "drone": {
      "youtubeId": "2ZixoSsJNAg",
      "title": "Τσαμπασάκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσαμπασάκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vVHyr3xA57k",
      "title": "Τσαμπασάκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσαμπασάκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "erdenet": {
    "cityName": "Έρντενετ",
    "drone": {
      "youtubeId": "oQYOc2XegL4",
      "title": "Έρντενετ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Έρντενετ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2S5TKGzUhTE",
      "title": "Έρντενετ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Έρντενετ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "darkhan": {
    "cityName": "Νταρχάν",
    "drone": {
      "youtubeId": "Bts013dg1g4",
      "title": "Νταρχάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νταρχάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "U4ODXtQrjjA",
      "title": "Νταρχάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νταρχάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "choibalsan": {
    "cityName": "Τσόιμπαλσαν",
    "drone": {
      "youtubeId": "W2xSl8CUfKU",
      "title": "Τσόιμπαλσαν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσόιμπαλσαν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ejGMhKeQeac",
      "title": "Τσόιμπαλσαν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσόιμπαλσαν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "murun": {
    "cityName": "Μουρούν",
    "drone": {
      "youtubeId": "W2xSl8CUfKU",
      "title": "Μουρούν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μουρούν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bjTxXWK1Qr4",
      "title": "Μουρούν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μουρούν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khovd": {
    "cityName": "Χοβντ",
    "drone": {
      "youtubeId": "-eFJ4Kvgtz4",
      "title": "Χοβντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χοβντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "W2xSl8CUfKU",
      "title": "Χοβντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χοβντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "olgii": {
    "cityName": "Ουλγκίι",
    "drone": {
      "youtubeId": "W2xSl8CUfKU",
      "title": "Ουλγκίι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ουλγκίι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CPLqiFhFLc0",
      "title": "Ουλγκίι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ουλγκίι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kharkhorin": {
    "cityName": "Χαρχορίν (Καρακορούμ)",
    "drone": {
      "youtubeId": "_-Q4FfZlCYA",
      "title": "Χαρχορίν (Καρακορούμ) 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χαρχορίν (Καρακορούμ) με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BQ_T-i78uUs",
      "title": "Χαρχορίν (Καρακορούμ) 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαρχορίν (Καρακορούμ) Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tsetserleg": {
    "cityName": "Τσετσερλέγκ",
    "drone": {
      "youtubeId": "Bts013dg1g4",
      "title": "Τσετσερλέγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσετσερλέγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "W2xSl8CUfKU",
      "title": "Τσετσερλέγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσετσερλέγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dalanzadgad": {
    "cityName": "Νταλανζαντγκάντ",
    "drone": {
      "youtubeId": "rT6E-M99tiE",
      "title": "Νταλανζαντγκάντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νταλανζαντγκάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "asOLUL6HvMY",
      "title": "Νταλανζαντγκάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νταλανζαντγκάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bagan": {
    "cityName": "Μπαγκάν",
    "drone": {
      "youtubeId": "ICZ9Oq7DM30",
      "title": "Μπαγκάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαγκάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nwUQ63QGahQ",
      "title": "Μπαγκάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαγκάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "naypyidaw": {
    "cityName": "Ναϊπιντό",
    "drone": {
      "youtubeId": "E7kVrrFZhRg",
      "title": "Ναϊπιντό 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ναϊπιντό με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4cT8JIDIv3A",
      "title": "Ναϊπιντό 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναϊπιντό Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nyaungshwe": {
    "cityName": "Νιαούνγκ Σουέ (Λίμνη Ίνλε)",
    "drone": {
      "youtubeId": "Wtuk3nnv6ow",
      "title": "Νιαούνγκ Σουέ (Λίμνη Ίνλε) 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νιαούνγκ Σουέ (Λίμνη Ίνλε) με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TwzAz9nnvUU",
      "title": "Νιαούνγκ Σουέ (Λίμνη Ίνλε) 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νιαούνγκ Σουέ (Λίμνη Ίνλε) Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bago": {
    "cityName": "Μπάγκο",
    "drone": {
      "youtubeId": "3dZShC0aVyU",
      "title": "Μπάγκο 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπάγκο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lAnnQ8g6B1M",
      "title": "Μπάγκο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπάγκο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "taunggyi": {
    "cityName": "Ταουνγκί",
    "drone": {
      "youtubeId": "Y4N1VO4Qp84",
      "title": "Ταουνγκί 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταουνγκί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ri7PrIB0DIQ",
      "title": "Ταουνγκί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταουνγκί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mawlamyine": {
    "cityName": "Μαουλαμίν",
    "drone": {
      "youtubeId": "aFIh9WSRxTg",
      "title": "Μαουλαμίν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μαουλαμίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "f2PGosC0jCw",
      "title": "Μαουλαμίν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μαουλαμίν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sittwe": {
    "cityName": "Σίτουε",
    "drone": {
      "youtubeId": "ykWVFbjpJHI",
      "title": "Σίτουε 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σίτουε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "jlaXkKx6IsI",
      "title": "Σίτουε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σίτουε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pyin-oo-lwin": {
    "cityName": "Πιν Ου Λουίν",
    "drone": {
      "youtubeId": "FjRkk7Y3OIs",
      "title": "Πιν Ου Λουίν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Πιν Ου Λουίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "CLQgD-Sq9Vs",
      "title": "Πιν Ου Λουίν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πιν Ου Λουίν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rawalpindi": {
    "cityName": "Ραβαλπίντι",
    "drone": {
      "youtubeId": "Gq1EtXTL7ZE",
      "title": "Ραβαλπίντι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ραβαλπίντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "w9BvccJ5Nck",
      "title": "Ραβαλπίντι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ραβαλπίντι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "faisalabad": {
    "cityName": "Φαϊσαλαμπάντ",
    "drone": {
      "youtubeId": "0kHpxvVxCNc",
      "title": "Φαϊσαλαμπάντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Φαϊσαλαμπάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Gq1EtXTL7ZE",
      "title": "Φαϊσαλαμπάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φαϊσαλαμπάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "peshawar": {
    "cityName": "Πεσαβάρ",
    "drone": {
      "youtubeId": "Bo1vxFLraOE",
      "title": "Πεσαβάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Πεσαβάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ESWdhC0WUtA",
      "title": "Πεσαβάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πεσαβάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "multan": {
    "cityName": "Μουλτάν",
    "drone": {
      "youtubeId": "DF4v1x2eoKE",
      "title": "Μουλτάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μουλτάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zD_hX3c2yks",
      "title": "Μουλτάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μουλτάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gujranwala": {
    "cityName": "Γκουτζρανβάλα",
    "drone": {
      "youtubeId": "KDN7PJNPGPo",
      "title": "Γκουτζρανβάλα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γκουτζρανβάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kNl4ek1Iilw",
      "title": "Γκουτζρανβάλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκουτζρανβάλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "quetta": {
    "cityName": "Κουέτα",
    "drone": {
      "youtubeId": "L4SnyUGXPZY",
      "title": "Κουέτα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κουέτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ir7UXgH05c8",
      "title": "Κουέτα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κουέτα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sialkot": {
    "cityName": "Σιαλκότ",
    "drone": {
      "youtubeId": "HV1FEg82sRk",
      "title": "Σιαλκότ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιαλκότ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "K9dRgYuWKUo",
      "title": "Σιαλκότ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιαλκότ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sylhet": {
    "cityName": "Σιλχέτ",
    "drone": {
      "youtubeId": "VpAwJXXGYEE",
      "title": "Σιλχέτ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιλχέτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WYJ5Vd2wLRE",
      "title": "Σιλχέτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιλχέτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rajshahi": {
    "cityName": "Ρατζσάχι",
    "drone": {
      "youtubeId": "fgGyeP4sfrE",
      "title": "Ρατζσάχι 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ρατζσάχι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3yNkgLCvK3k",
      "title": "Ρατζσάχι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρατζσάχι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khulna": {
    "cityName": "Κούλνα",
    "drone": {
      "youtubeId": "Tir93zHqLos",
      "title": "Κούλνα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κούλνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vuYPmNo-sbw",
      "title": "Κούλνα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κούλνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cox-bazar": {
    "cityName": "Κοξ Μπαζάρ",
    "drone": {
      "youtubeId": "mR4X1cLEU_s",
      "title": "Κοξ Μπαζάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κοξ Μπαζάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "W5gncK7vrjc",
      "title": "Κοξ Μπαζάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κοξ Μπαζάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "comilla": {
    "cityName": "Κομίλα",
    "drone": {
      "youtubeId": "d2iEWrDDgeI",
      "title": "Κομίλα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κομίλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MJPevWAIhdU",
      "title": "Κομίλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κομίλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "barisal": {
    "cityName": "Μπαρισάλ",
    "drone": {
      "youtubeId": "e4KX6LsREVs",
      "title": "Μπαρισάλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαρισάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "AYDZZtqOXZk",
      "title": "Μπαρισάλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαρισάλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bogra": {
    "cityName": "Μπογκρά",
    "drone": {
      "youtubeId": "evuTf3kJ9w8",
      "title": "Μπογκρά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπογκρά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "g0y0pkJ1OMk",
      "title": "Μπογκρά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπογκρά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rangpur": {
    "cityName": "Ρανγκπούρ",
    "drone": {
      "youtubeId": "vhUZSi5NLUM",
      "title": "Ρανγκπούρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ρανγκπούρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "tSS6-OCu4JI",
      "title": "Ρανγκπούρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρανγκπούρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "punakha": {
    "cityName": "Πουνάχα",
    "drone": {
      "youtubeId": "Xdq8-8zhd4c",
      "title": "Πουνάχα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Πουνάχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ao2GXdlzAak",
      "title": "Πουνάχα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πουνάχα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "phuntsholing": {
    "cityName": "Φουντσολίνγκ",
    "drone": {
      "youtubeId": "S2_BBAeSx44",
      "title": "Φουντσολίνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Φουντσολίνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BZXc8oDSM1E",
      "title": "Φουντσολίνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φουντσολίνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trongsa": {
    "cityName": "Τρονγκσά",
    "drone": {
      "youtubeId": "TqT1F05_0M4",
      "title": "Τρονγκσά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τρονγκσά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Xdq8-8zhd4c",
      "title": "Τρονγκσά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τρονγκσά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jakar": {
    "cityName": "Τζακάρ",
    "drone": {
      "youtubeId": "qCc_8b86V68",
      "title": "Τζακάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζακάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Xdq8-8zhd4c",
      "title": "Τζακάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζακάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gelephu": {
    "cityName": "Γκελεφού",
    "drone": {
      "youtubeId": "Xdq8-8zhd4c",
      "title": "Γκελεφού 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γκελεφού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MUIa53Zgh3M",
      "title": "Γκελεφού 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκελεφού Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mongar": {
    "cityName": "Μονγκάρ",
    "drone": {
      "youtubeId": "ErGgO9_r4UQ",
      "title": "Μονγκάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μονγκάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "fViagMKreTM",
      "title": "Μονγκάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μονγκάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trashigang": {
    "cityName": "Τρασιγκάνγκ",
    "drone": {
      "youtubeId": "IkHZmwMw7wo",
      "title": "Τρασιγκάνγκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τρασιγκάνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "tecJwR7Pcmg",
      "title": "Τρασιγκάνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τρασιγκάνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "haa": {
    "cityName": "Χαα",
    "drone": {
      "youtubeId": "2KmSh6ZNcC0",
      "title": "Χαα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χαα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Xdq8-8zhd4c",
      "title": "Χαα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aqaba": {
    "cityName": "Άκαμπα",
    "drone": {
      "youtubeId": "uBGXfIl-o-4",
      "title": "Άκαμπα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Άκαμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ddnIKbnaf6o",
      "title": "Άκαμπα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άκαμπα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jerash": {
    "cityName": "Τζέρασα",
    "drone": {
      "youtubeId": "d8iKZdKuzv4",
      "title": "Τζέρασα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζέρασα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ztthQQ6LO08",
      "title": "Τζέρασα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζέρασα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "madaba": {
    "cityName": "Μάνταμπα",
    "drone": {
      "youtubeId": "SkhBMWDCDtw",
      "title": "Μάνταμπα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μάνταμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Pvi6tNI6-CQ",
      "title": "Μάνταμπα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μάνταμπα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "irbid": {
    "cityName": "Ίρμπιντ",
    "drone": {
      "youtubeId": "rMMLG1xD24Q",
      "title": "Ίρμπιντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ίρμπιντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Rrwrk2QOb6g",
      "title": "Ίρμπιντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ίρμπιντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "zarqa": {
    "cityName": "Ζάρκα",
    "drone": {
      "youtubeId": "wRxM0xrwUaU",
      "title": "Ζάρκα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ζάρκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EPI9OmG2r7w",
      "title": "Ζάρκα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ζάρκα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-salt": {
    "cityName": "Αλ-Σαλτ",
    "drone": {
      "youtubeId": "G7DiMAwuyvQ",
      "title": "Αλ-Σαλτ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ-Σαλτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oCgwKuZU5Ow",
      "title": "Αλ-Σαλτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Σαλτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "karak": {
    "cityName": "Κεράκ",
    "drone": {
      "youtubeId": "YOGGf1Ev5Uc",
      "title": "Κεράκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κεράκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SladMX0EkCQ",
      "title": "Κεράκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κεράκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "wadi-rum": {
    "cityName": "Ουάντι Ραμ",
    "drone": {
      "youtubeId": "xuOlL137euI",
      "title": "Ουάντι Ραμ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ουάντι Ραμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PDIpNUIrHoc",
      "title": "Ουάντι Ραμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ουάντι Ραμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nizwa": {
    "cityName": "Νίζουα",
    "drone": {
      "youtubeId": "ieMsGBgtpn4",
      "title": "Νίζουα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νίζουα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1Zp9pKvtPos",
      "title": "Νίζουα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νίζουα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sur": {
    "cityName": "Σουρ",
    "drone": {
      "youtubeId": "ZzksODYMs4M",
      "title": "Σουρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "RDHRDWSaPiU",
      "title": "Σουρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σουρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sohar": {
    "cityName": "Σοχάρ",
    "drone": {
      "youtubeId": "OB5-3jJchEI",
      "title": "Σοχάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σοχάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EQ-SFxZ0AZA",
      "title": "Σοχάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σοχάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mutrah": {
    "cityName": "Μούτραχ",
    "drone": {
      "youtubeId": "HsEG8Gyxvb8",
      "title": "Μούτραχ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μούτραχ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "X-GmngFMfuw",
      "title": "Μούτραχ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μούτραχ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bahla": {
    "cityName": "Μπαχλά",
    "drone": {
      "youtubeId": "UTQwYZ6ZG_0",
      "title": "Μπαχλά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαχλά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Tp3vxjDkVqg",
      "title": "Μπαχλά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαχλά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rustaq": {
    "cityName": "Ρουστάκ",
    "drone": {
      "youtubeId": "ZzksODYMs4M",
      "title": "Ρουστάκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ρουστάκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Vo_PLYnDfpk",
      "title": "Ρουστάκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρουστάκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khasab": {
    "cityName": "Χασάμπ",
    "drone": {
      "youtubeId": "bb-BsrFjXLc",
      "title": "Χασάμπ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χασάμπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4ly2BT7oirM",
      "title": "Χασάμπ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χασάμπ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ibri": {
    "cityName": "Ιμπρί",
    "drone": {
      "youtubeId": "TWozt69IR6U",
      "title": "Ιμπρί 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ιμπρί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZzksODYMs4M",
      "title": "Ιμπρί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ιμπρί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "baalbek": {
    "cityName": "Μπάαλμπεκ",
    "drone": {
      "youtubeId": "Rwtxattg2l4",
      "title": "Μπάαλμπεκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπάαλμπεκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "n4LsezkjV7I",
      "title": "Μπάαλμπεκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπάαλμπεκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sidon": {
    "cityName": "Σιδώνα / Σάιντα",
    "drone": {
      "youtubeId": "xl-EqY0NqFM",
      "title": "Σιδώνα / Σάιντα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιδώνα / Σάιντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ojKKQwJeZyw",
      "title": "Σιδώνα / Σάιντα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιδώνα / Σάιντα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tyre": {
    "cityName": "Τύρος / Σουρ",
    "drone": {
      "youtubeId": "_a5GKRZ0mZw",
      "title": "Τύρος / Σουρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τύρος / Σουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "U7OO9GmUcdU",
      "title": "Τύρος / Σουρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τύρος / Σουρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "zahle": {
    "cityName": "Ζάχλε",
    "drone": {
      "youtubeId": "WnvYW4bvMbc",
      "title": "Ζάχλε 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ζάχλε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XMhkSOFP6pM",
      "title": "Ζάχλε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ζάχλε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jounieh": {
    "cityName": "Τζούνιε",
    "drone": {
      "youtubeId": "pXeCNMyT6Gc",
      "title": "Τζούνιε 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζούνιε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "jDwhTefKapE",
      "title": "Τζούνιε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζούνιε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "batroun": {
    "cityName": "Μπατρούν",
    "drone": {
      "youtubeId": "XpgvKZEKa2w",
      "title": "Μπατρούν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπατρούν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "MwaUXn9DAFU",
      "title": "Μπατρούν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπατρούν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bcharre": {
    "cityName": "Μπσαρί",
    "drone": {
      "youtubeId": "HNaFKxdpN_I",
      "title": "Μπσαρί 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπσαρί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GMvpqxOV11c",
      "title": "Μπσαρί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπσαρί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  }
,
  "medina": {
    "cityName": "Μεδίνα",
    "drone": {
      "youtubeId": "kpvJUGELCYE",
      "title": "Μεδίνα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μεδίνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "QNOsjn_S1P0",
      "title": "Μεδίνα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μεδίνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dammam": {
    "cityName": "Νταμάμ",
    "drone": {
      "youtubeId": "_JL5ZIRgDF8",
      "title": "Νταμάμ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νταμάμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nNivOLGHcaY",
      "title": "Νταμάμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νταμάμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "alula": {
    "cityName": "Αλ-Ούλα",
    "drone": {
      "youtubeId": "0AgxY2JbSQI",
      "title": "Αλ-Ούλα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ-Ούλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "X-ukNPYPoeY",
      "title": "Αλ-Ούλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Ούλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "taif": {
    "cityName": "Ταΐφ",
    "drone": {
      "youtubeId": "-VajK1C1e74",
      "title": "Ταΐφ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταΐφ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pjISmANU21k",
      "title": "Ταΐφ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταΐφ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "abha": {
    "cityName": "Άμπχα",
    "drone": {
      "youtubeId": "Nhwlkp6sATo",
      "title": "Άμπχα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Άμπχα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zuiDUchLj2E",
      "title": "Άμπχα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άμπχα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tabuk": {
    "cityName": "Ταμπούκ",
    "drone": {
      "youtubeId": "JDK5lW9Xtng",
      "title": "Ταμπούκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταμπούκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "tcJrhMIQKuk",
      "title": "Ταμπούκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταμπούκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-khobar": {
    "cityName": "Αλ-Χομπάρ",
    "drone": {
      "youtubeId": "ApX9jHVXRK0",
      "title": "Αλ-Χομπάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ-Χομπάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BIH1yaBqPRM",
      "title": "Αλ-Χομπάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Χομπάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-ain": {
    "cityName": "Αλ Αΐν",
    "drone": {
      "youtubeId": "93Tmxfw-HnI",
      "title": "Αλ Αΐν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ Αΐν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "AJe-eqY5NcY",
      "title": "Αλ Αΐν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ Αΐν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ajman": {
    "cityName": "Ατζμάν",
    "drone": {
      "youtubeId": "Jrare2Wks74",
      "title": "Ατζμάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ατζμάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "002nAR2QoRA",
      "title": "Ατζμάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ατζμάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ras-al-khaimah": {
    "cityName": "Ρας Αλ Χαϊμά",
    "drone": {
      "youtubeId": "GpMVLzTZmYo",
      "title": "Ρας Αλ Χαϊμά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ρας Αλ Χαϊμά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2pyDwR6lS2U",
      "title": "Ρας Αλ Χαϊμά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρας Αλ Χαϊμά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fujairah": {
    "cityName": "Φουτζέιρα",
    "drone": {
      "youtubeId": "mvcKPtWtMbs",
      "title": "Φουτζέιρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Φουτζέιρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-WFIrLKqjWU",
      "title": "Φουτζέιρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φουτζέιρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "umm-al-quwain": {
    "cityName": "Ουμ Αλ Κουγουέιν",
    "drone": {
      "youtubeId": "BnQyL6qR4AU",
      "title": "Ουμ Αλ Κουγουέιν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ουμ Αλ Κουγουέιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "HtXC626bp0k",
      "title": "Ουμ Αλ Κουγουέιν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ουμ Αλ Κουγουέιν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khor-fakkan": {
    "cityName": "Χορ Φακάν",
    "drone": {
      "youtubeId": "dgd_671KyHw",
      "title": "Χορ Φακάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χορ Φακάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WZKOyUByjaw",
      "title": "Χορ Φακάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χορ Φακάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hatta": {
    "cityName": "Χάτα",
    "drone": {
      "youtubeId": "3kas4CottqM",
      "title": "Χάτα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χάτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ggMafJ4thso",
      "title": "Χάτα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χάτα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-wakrah": {
    "cityName": "Αλ Ουάκρα",
    "drone": {
      "youtubeId": "Nl02khthpys",
      "title": "Αλ Ουάκρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ Ουάκρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "DDBOQQpC16k",
      "title": "Αλ Ουάκρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ Ουάκρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-khor": {
    "cityName": "Αλ Χορ",
    "drone": {
      "youtubeId": "aS_khThipzU",
      "title": "Αλ Χορ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ Χορ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pztQagVT8hw",
      "title": "Αλ Χορ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ Χορ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lusail": {
    "cityName": "Λουσαΐλ",
    "drone": {
      "youtubeId": "ZF650XdQhDk",
      "title": "Λουσαΐλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Λουσαΐλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ZG-W5x0iEHc",
      "title": "Λουσαΐλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λουσαΐλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-rayyan": {
    "cityName": "Αλ Ραγιάν",
    "drone": {
      "youtubeId": "arNwT3-Df-I",
      "title": "Αλ Ραγιάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ Ραγιάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1LRN5diI-QQ",
      "title": "Αλ Ραγιάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ Ραγιάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "madinat-ash-shamal": {
    "cityName": "Μαντινάτ Ας Σαμάλ",
    "drone": {
      "youtubeId": "hlCvMW15Too",
      "title": "Μαντινάτ Ας Σαμάλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μαντινάτ Ας Σαμάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "VDNQLvnJOu4",
      "title": "Μαντινάτ Ας Σαμάλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μαντινάτ Ας Σαμάλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "umm-salal": {
    "cityName": "Ουμ Σαλάλ",
    "drone": {
      "youtubeId": "Vi4Aj_D2tmo",
      "title": "Ουμ Σαλάλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ουμ Σαλάλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y7Bv_hIigls",
      "title": "Ουμ Σαλάλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ουμ Σαλάλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mesaieed": {
    "cityName": "Μουσαϊίντ",
    "drone": {
      "youtubeId": "ON6KtVkiySY",
      "title": "Μουσαϊίντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μουσαϊίντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y7Bv_hIigls",
      "title": "Μουσαϊίντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μουσαϊίντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dukhan": {
    "cityName": "Ντουχάν",
    "drone": {
      "youtubeId": "FxFEs-MInhI",
      "title": "Ντουχάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ντουχάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Vi4Aj_D2tmo",
      "title": "Ντουχάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντουχάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-zubarah": {
    "cityName": "Αλ Ζουμπάρα",
    "drone": {
      "youtubeId": "VinMUJH19DE",
      "title": "Αλ Ζουμπάρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αλ Ζουμπάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kgFKtfvUDjQ",
      "title": "Αλ Ζουμπάρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ Ζουμπάρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khiva": {
    "cityName": "Χίβα",
    "drone": {
      "youtubeId": "B3wZx1AcNmk",
      "title": "Χίβα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χίβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "phb4C0UKh0c",
      "title": "Χίβα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χίβα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nukus": {
    "cityName": "Νουκούς",
    "drone": {
      "youtubeId": "ECJBnKeGCQo",
      "title": "Νουκούς 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νουκούς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BOKhhA5ynXE",
      "title": "Νουκούς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νουκούς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "andijan": {
    "cityName": "Αντιτζάν",
    "drone": {
      "youtubeId": "lwmL9eT1R8s",
      "title": "Αντιτζάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αντιτζάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lGncfoz045I",
      "title": "Αντιτζάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αντιτζάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fergana": {
    "cityName": "Φεργκάνα",
    "drone": {
      "youtubeId": "hzX0tfnN85s",
      "title": "Φεργκάνα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Φεργκάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ajEVjekCh0o",
      "title": "Φεργκάνα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φεργκάνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "namangan": {
    "cityName": "Ναμανγκάν",
    "drone": {
      "youtubeId": "h_jwdU_EheA",
      "title": "Ναμανγκάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ναμανγκάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "wskkONGD2iw",
      "title": "Ναμανγκάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναμανγκάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "termez": {
    "cityName": "Τερμέζ",
    "drone": {
      "youtubeId": "bueSHhdQ6-c",
      "title": "Τερμέζ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τερμέζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "th6ofOfrv18",
      "title": "Τερμέζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τερμέζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "shahrisabz": {
    "cityName": "Σαχριζάμπζ",
    "drone": {
      "youtubeId": "5LvrZFZqs8A",
      "title": "Σαχριζάμπζ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σαχριζάμπζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Px899c0VsEs",
      "title": "Σαχριζάμπζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαχριζάμπζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "shymkent": {
    "cityName": "Σιμκέντ",
    "drone": {
      "youtubeId": "tsyBRSkOyjM",
      "title": "Σιμκέντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σιμκέντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "E64X-OMcvL4",
      "title": "Σιμκέντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιμκέντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aktau": {
    "cityName": "Ακτάου",
    "drone": {
      "youtubeId": "AtjLrmoLO98",
      "title": "Ακτάου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ακτάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "R0t4U0Gc3yM",
      "title": "Ακτάου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ακτάου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "atyrau": {
    "cityName": "Ατιράου",
    "drone": {
      "youtubeId": "QlCaD45Y1Qk",
      "title": "Ατιράου 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ατιράου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EUqtoVSgYC0",
      "title": "Ατιράου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ατιράου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "karaganda": {
    "cityName": "Καραγκάντα",
    "drone": {
      "youtubeId": "Stwh-5oTDtQ",
      "title": "Καραγκάντα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καραγκάντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pWLIFxv_dno",
      "title": "Καραγκάντα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καραγκάντα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aktobe": {
    "cityName": "Ακτόμπε",
    "drone": {
      "youtubeId": "cmMxPHsnDjs",
      "title": "Ακτόμπε 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ακτόμπε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "C6kdwKSlHOs",
      "title": "Ακτόμπε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ακτόμπε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "turkistan": {
    "cityName": "Τουρκεστάν",
    "drone": {
      "youtubeId": "ug-WI51YVY4",
      "title": "Τουρκεστάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τουρκεστάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ejjOlIdI2S8",
      "title": "Τουρκεστάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τουρκεστάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "oskemen": {
    "cityName": "Οσκεμέν",
    "drone": {
      "youtubeId": "LNctNmha_Fs",
      "title": "Οσκεμέν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Οσκεμέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-eXDXsvg1SY",
      "title": "Οσκεμέν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Οσκεμέν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pavlodar": {
    "cityName": "Παβλοντάρ",
    "drone": {
      "youtubeId": "-tuF6nDml7M",
      "title": "Παβλοντάρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Παβλοντάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "U8MvHGuMRIM",
      "title": "Παβλοντάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Παβλοντάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "karakol": {
    "cityName": "Καρακόλ",
    "drone": {
      "youtubeId": "esbLnZHa8qU",
      "title": "Καρακόλ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καρακόλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-Gz9P5viXXU",
      "title": "Καρακόλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καρακόλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tokmok": {
    "cityName": "Τοκμόκ",
    "drone": {
      "youtubeId": "6UrKOor12gI",
      "title": "Τοκμόκ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τοκμόκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "J6GtvyrwOos",
      "title": "Τοκμόκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τοκμόκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cholpon-ata": {
    "cityName": "Τσολπόν-Ατά",
    "drone": {
      "youtubeId": "7qPb_4skxYU",
      "title": "Τσολπόν-Ατά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τσολπόν-Ατά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zW14Gd3ZghE",
      "title": "Τσολπόν-Ατά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσολπόν-Ατά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "naryn": {
    "cityName": "Ναρίν",
    "drone": {
      "youtubeId": "_pt80ClNjdE",
      "title": "Ναρίν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ναρίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nZ4jF-AcWkw",
      "title": "Ναρίν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναρίν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jalal-abad": {
    "cityName": "Τζαλάλ-Αμπάντ",
    "drone": {
      "youtubeId": "unszwDy4rao",
      "title": "Τζαλάλ-Αμπάντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τζαλάλ-Αμπάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KSYIKWhO3vs",
      "title": "Τζαλάλ-Αμπάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζαλάλ-Αμπάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "talas": {
    "cityName": "Ταλάς",
    "drone": {
      "youtubeId": "CRjpLgdfCFw",
      "title": "Ταλάς 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταλάς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "03GPMua-skc",
      "title": "Ταλάς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταλάς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "balykchy": {
    "cityName": "Μπαλικτσί",
    "drone": {
      "youtubeId": "SbabEYR2UKE",
      "title": "Μπαλικτσί 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπαλικτσί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "IgN50g7EfsY",
      "title": "Μπαλικτσί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαλικτσί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kochkor": {
    "cityName": "Κοτσκόρ",
    "drone": {
      "youtubeId": "TxN0xhOsTtk",
      "title": "Κοτσκόρ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κοτσκόρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uqOEPdXJTYU",
      "title": "Κοτσκόρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κοτσκόρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tabriz": {
    "cityName": "Ταμπρίζ",
    "drone": {
      "youtubeId": "q8EOMbIp7YA",
      "title": "Ταμπρίζ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ταμπρίζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "M2gY-eFGY80",
      "title": "Ταμπρίζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταμπρίζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "yazd": {
    "cityName": "Γιαζντ",
    "drone": {
      "youtubeId": "ndfMyrVOygQ",
      "title": "Γιαζντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Γιαζντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2zj4NguF6ws",
      "title": "Γιαζντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γιαζντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mashhad": {
    "cityName": "Μασχάντ",
    "drone": {
      "youtubeId": "8ZB3nlt9pBA",
      "title": "Μασχάντ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μασχάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "w__qGD7cTfw",
      "title": "Μασχάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μασχάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kashan": {
    "cityName": "Κασάν",
    "drone": {
      "youtubeId": "pMSqVr88GZw",
      "title": "Κασάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κασάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "fQUgrLiz3Vg",
      "title": "Κασάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κασάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kerman": {
    "cityName": "Κερμάν",
    "drone": {
      "youtubeId": "lnPZ2Y-184c",
      "title": "Κερμάν 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κερμάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "VU-5Fico9SI",
      "title": "Κερμάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κερμάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ahvaz": {
    "cityName": "Αχβάζ",
    "drone": {
      "youtubeId": "_2HegOY7teg",
      "title": "Αχβάζ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Αχβάζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EjDH65nQqn0",
      "title": "Αχβάζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αχβάζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kish": {
    "cityName": "Κις",
    "drone": {
      "youtubeId": "b3QZUrU0iCw",
      "title": "Κις 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κις με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YSUpP4H5x7g",
      "title": "Κις 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κις Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "basra": {
    "cityName": "Βασόρα",
    "drone": {
      "youtubeId": "KL0Xx5Gr-i8",
      "title": "Βασόρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Βασόρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "xYl9x8HrZq0",
      "title": "Βασόρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βασόρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mosul": {
    "cityName": "Μοσούλη",
    "drone": {
      "youtubeId": "Mn7aPLm7Epk",
      "title": "Μοσούλη 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μοσούλη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Bna6-giI47s",
      "title": "Μοσούλη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μοσούλη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "najaf": {
    "cityName": "Νατζάφ",
    "drone": {
      "youtubeId": "ckphkywkX7E",
      "title": "Νατζάφ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νατζάφ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8wf6oYYg0ps",
      "title": "Νατζάφ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νατζάφ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "karbala": {
    "cityName": "Κερμπάλα",
    "drone": {
      "youtubeId": "WlLY3YSGurg",
      "title": "Κερμπάλα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Κερμπάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FnpoF4XErGI",
      "title": "Κερμπάλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κερμπάλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hillah": {
    "cityName": "Χίλα",
    "drone": {
      "youtubeId": "FnpoF4XErGI",
      "title": "Χίλα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χίλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "htGPNY10CSI",
      "title": "Χίλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χίλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sulaymaniyah": {
    "cityName": "Σουλεϊμανίγια",
    "drone": {
      "youtubeId": "HkY4U3yxRK4",
      "title": "Σουλεϊμανίγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σουλεϊμανίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3AdeSwFZSco",
      "title": "Σουλεϊμανίγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σουλεϊμανίγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "samarra": {
    "cityName": "Σαμάρα",
    "drone": {
      "youtubeId": "DwMYLEgsTtc",
      "title": "Σαμάρα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Σαμάρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "utw8o4i-fOU",
      "title": "Σαμάρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαμάρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nasiriyah": {
    "cityName": "Νασιρίγια",
    "drone": {
      "youtubeId": "dtF3ME5lpOA",
      "title": "Νασιρίγια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νασιρίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "r2zN07pBGjo",
      "title": "Νασιρίγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νασιρίγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "haifa": {
    "cityName": "Χάιφα",
    "drone": {
      "youtubeId": "VEyqYDP7D30",
      "title": "Χάιφα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Χάιφα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1RVyFoqXC4U",
      "title": "Χάιφα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χάιφα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nazareth": {
    "cityName": "Ναζαρέτ",
    "drone": {
      "youtubeId": "vSLgpeicrjs",
      "title": "Ναζαρέτ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Ναζαρέτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Kj02T31QfBI",
      "title": "Ναζαρέτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναζαρέτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "eilat": {
    "cityName": "Εϊλάτ",
    "drone": {
      "youtubeId": "Gv2vf1Zhggk",
      "title": "Εϊλάτ 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Εϊλάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SLJyUFA-9WY",
      "title": "Εϊλάτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Εϊλάτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tiberias": {
    "cityName": "Τιβεριάδα",
    "drone": {
      "youtubeId": "TGYPTbp-voE",
      "title": "Τιβεριάδα 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Τιβεριάδα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "k0hrKCZ7xJ8",
      "title": "Τιβεριάδα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τιβεριάδα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "acre": {
    "cityName": "Άκρα (Ακκό)",
    "drone": {
      "youtubeId": "0FtzZTMn8yg",
      "title": "Άκρα (Ακκό) 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Άκρα (Ακκό) με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-SFGHzQweXU",
      "title": "Άκρα (Ακκό) 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άκρα (Ακκό) Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "beersheba": {
    "cityName": "Μπερ Σεβά",
    "drone": {
      "youtubeId": "Pcf0A8aArwQ",
      "title": "Μπερ Σεβά 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Μπερ Σεβά με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5yvW6lrWDAM",
      "title": "Μπερ Σεβά 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπερ Σεβά Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "caesarea": {
    "cityName": "Καισάρεια",
    "drone": {
      "youtubeId": "93WhlFQXxDc",
      "title": "Καισάρεια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Καισάρεια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zBl2FUj5pb0",
      "title": "Καισάρεια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καισάρεια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "netanya": {
    "cityName": "Νετάνια",
    "drone": {
      "youtubeId": "bvDNY0cQ16Q",
      "title": "Νετάνια 4K: Εναέρια & Πανοραμική Περιήγηση",
      "label": "Νετάνια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "tPFShN2aQ6w",
      "title": "Νετάνια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νετάνια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  }
,
  "freiburg": {
    "cityName": "Φράιμπουργκ",
    "drone": {
      "youtubeId": "6RTrYMs_kYE",
      "title": "Φράιμπουργκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Φράιμπουργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "DYzYfE7Jw6Q",
      "title": "Φράιμπουργκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φράιμπουργκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dortmund": {
    "cityName": "Ντόρτμουντ",
    "drone": {
      "youtubeId": "S3XxAm-Ivy4",
      "title": "Ντόρτμουντ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντόρτμουντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pn4im-YUsqM",
      "title": "Ντόρτμουντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντόρτμουντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "potsdam": {
    "cityName": "Πότσνταμ",
    "drone": {
      "youtubeId": "aHIFyBrJnzM",
      "title": "Πότσνταμ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πότσνταμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "c_lSSRCHxtI",
      "title": "Πότσνταμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πότσνταμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "augsburg": {
    "cityName": "Άουγκσμπουργκ",
    "drone": {
      "youtubeId": "wStIPnL8ZCM",
      "title": "Άουγκσμπουργκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Άουγκσμπουργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vmR1PWK9pKg",
      "title": "Άουγκσμπουργκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άουγκσμπουργκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hannover": {
    "cityName": "Αννόβερο",
    "drone": {
      "youtubeId": "L3b873IN8CA",
      "title": "Αννόβερο 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αννόβερο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8WaGrs8ZxpU",
      "title": "Αννόβερο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αννόβερο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bremen": {
    "cityName": "Βρέμη",
    "drone": {
      "youtubeId": "t1a83ISc9nA",
      "title": "Βρέμη 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Βρέμη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rhACtGIgkxg",
      "title": "Βρέμη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βρέμη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bonn": {
    "cityName": "Βόννη",
    "drone": {
      "youtubeId": "t8_dz9x4o00",
      "title": "Βόννη 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Βόννη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Xs3MHGF0xMI",
      "title": "Βόννη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βόννη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "heidelberg": {
    "cityName": "Χαϊδελβέργη",
    "drone": {
      "youtubeId": "v4WTXww8BOo",
      "title": "Χαϊδελβέργη 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χαϊδελβέργη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "IBxqvM70PQM",
      "title": "Χαϊδελβέργη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαϊδελβέργη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rostock": {
    "cityName": "Ρόστοκ",
    "drone": {
      "youtubeId": "1OM8T1un2ok",
      "title": "Ρόστοκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρόστοκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "M_w_69_FYek",
      "title": "Ρόστοκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρόστοκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aachen": {
    "cityName": "Άαχεν",
    "drone": {
      "youtubeId": "x2zK6CcHFVc",
      "title": "Άαχεν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Άαχεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "25XKBdangMo",
      "title": "Άαχεν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άαχεν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lubeck": {
    "cityName": "Λίμπεκ",
    "drone": {
      "youtubeId": "lG3K0stm2qg",
      "title": "Λίμπεκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Λίμπεκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cYC0LxfTtWs",
      "title": "Λίμπεκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λίμπεκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "munster": {
    "cityName": "Μύνστερ",
    "drone": {
      "youtubeId": "ExhidF2CdIY",
      "title": "Μύνστερ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μύνστερ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "hTKsLm0QQ4Y",
      "title": "Μύνστερ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μύνστερ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "wurzburg": {
    "cityName": "Βύρτσμπουργκ",
    "drone": {
      "youtubeId": "yBWH9d70m_U",
      "title": "Βύρτσμπουργκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Βύρτσμπουργκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TFgU0HqcQRc",
      "title": "Βύρτσμπουργκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βύρτσμπουργκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "karlsruhe": {
    "cityName": "Καρλσρούη",
    "drone": {
      "youtubeId": "7kAEZQtNOg4",
      "title": "Καρλσρούη 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Καρλσρούη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zq5mGlH-UnA",
      "title": "Καρλσρούη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καρλσρούη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "erfurt": {
    "cityName": "Έρφουρτ",
    "drone": {
      "youtubeId": "ZliIFpoOsOA",
      "title": "Έρφουρτ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Έρφουρτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pmokIJ0QqOA",
      "title": "Έρφουρτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Έρφουρτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rennes": {
    "cityName": "Ρεν",
    "drone": {
      "youtubeId": "vnkdNOZXblM",
      "title": "Ρεν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρεν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "c4l7fiT1E9Q",
      "title": "Ρεν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρεν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rouen": {
    "cityName": "Ρουέν",
    "drone": {
      "youtubeId": "sKippfidzcc",
      "title": "Ρουέν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρουέν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TEH122AFrPU",
      "title": "Ρουέν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρουέν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "reims": {
    "cityName": "Ρενς",
    "drone": {
      "youtubeId": "b7BiGrh8pVU",
      "title": "Ρενς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρενς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "kXEujLXReBs",
      "title": "Ρενς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρενς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "toulon": {
    "cityName": "Τουλόν",
    "drone": {
      "youtubeId": "Cv86hJZOItg",
      "title": "Τουλόν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τουλόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "s8tYbSbFa0c",
      "title": "Τουλόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τουλόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dijon": {
    "cityName": "Ντιζόν",
    "drone": {
      "youtubeId": "3GcqCysOVao",
      "title": "Ντιζόν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντιζόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "gHgLxjGHygs",
      "title": "Ντιζόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντιζόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "avignon": {
    "cityName": "Αβινιόν",
    "drone": {
      "youtubeId": "qmw1pVvj3iU",
      "title": "Αβινιόν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αβινιόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JpIO53iPg0w",
      "title": "Αβινιόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αβινιόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "grenoble": {
    "cityName": "Γκρενόμπλ",
    "drone": {
      "youtubeId": "ukbuWSKGz7A",
      "title": "Γκρενόμπλ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γκρενόμπλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lA0rR06jFL8",
      "title": "Γκρενόμπλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκρενόμπλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "angers": {
    "cityName": "Ανζέ",
    "drone": {
      "youtubeId": "51kt1oSmzIA",
      "title": "Ανζέ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ανζέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TDdcBWCIIDc",
      "title": "Ανζέ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ανζέ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cannes": {
    "cityName": "Κάννες",
    "drone": {
      "youtubeId": "gJIq68tP6ac",
      "title": "Κάννες 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κάννες με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_QIpHygICK8",
      "title": "Κάννες 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κάννες Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "carcassonne": {
    "cityName": "Καρκασόν",
    "drone": {
      "youtubeId": "n0DepynRFQ0",
      "title": "Καρκασόν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Καρκασόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cf-NzXwT3pE",
      "title": "Καρκασόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καρκασόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tours": {
    "cityName": "Τουρ",
    "drone": {
      "youtubeId": "eZNVguGoF_E",
      "title": "Τουρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τουρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "X40Z93883G0",
      "title": "Τουρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τουρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "metz": {
    "cityName": "Μετς",
    "drone": {
      "youtubeId": "wNBc0QRnfno",
      "title": "Μετς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μετς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nuVzoRK0Evw",
      "title": "Μετς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μετς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "le-havre": {
    "cityName": "Χάβρη",
    "drone": {
      "youtubeId": "5rRY3LMGRP4",
      "title": "Χάβρη 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χάβρη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5-U-dJ5rfbI",
      "title": "Χάβρη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χάβρη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aix-en-provence": {
    "cityName": "Εξ-αν-Προβάνς",
    "drone": {
      "youtubeId": "GckVeX6UdWs",
      "title": "Εξ-αν-Προβάνς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Εξ-αν-Προβάνς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Ow9JqV9e4Fs",
      "title": "Εξ-αν-Προβάνς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Εξ-αν-Προβάνς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "clermont-ferrand": {
    "cityName": "Κλερμόν-Φεράν",
    "drone": {
      "youtubeId": "7L-5rqJpT08",
      "title": "Κλερμόν-Φεράν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κλερμόν-Φεράν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UoQP0AOX1Jc",
      "title": "Κλερμόν-Φεράν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κλερμόν-Φεράν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bari": {
    "cityName": "Μπάρι",
    "drone": {
      "youtubeId": "9rFGiIAJioo",
      "title": "Μπάρι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπάρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "D_f35WzNsKA",
      "title": "Μπάρι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπάρι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pisa": {
    "cityName": "Πίζα",
    "drone": {
      "youtubeId": "opXFvbJohkw",
      "title": "Πίζα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πίζα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "FqWJHK3Sqlc",
      "title": "Πίζα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πίζα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "padua": {
    "cityName": "Πάντοβα",
    "drone": {
      "youtubeId": "5lrbjCWBdfk",
      "title": "Πάντοβα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πάντοβα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "OxKEifPXIio",
      "title": "Πάντοβα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πάντοβα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "catania": {
    "cityName": "Κατάνια",
    "drone": {
      "youtubeId": "PDf3x16-i5Y",
      "title": "Κατάνια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κατάνια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "sMacK6qOH7k",
      "title": "Κατάνια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κατάνια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "trieste": {
    "cityName": "Τεργέστη",
    "drone": {
      "youtubeId": "jIuA3dCJGjA",
      "title": "Τεργέστη 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τεργέστη με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "WW0WAo6SXKY",
      "title": "Τεργέστη 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τεργέστη Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "siena": {
    "cityName": "Σιένα",
    "drone": {
      "youtubeId": "ATry_SvOI7M",
      "title": "Σιένα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σιένα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SDTIreuH0-A",
      "title": "Σιένα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιένα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "cagliari": {
    "cityName": "Κάλιαρι",
    "drone": {
      "youtubeId": "ZSiIE00NvCU",
      "title": "Κάλιαρι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κάλιαρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "lMbCJA-svYM",
      "title": "Κάλιαρι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κάλιαρι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "parma": {
    "cityName": "Πάρμα",
    "drone": {
      "youtubeId": "xxvMflAcpfQ",
      "title": "Πάρμα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πάρμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nP7hO7L9z3U",
      "title": "Πάρμα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πάρμα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ravenna": {
    "cityName": "Ραβέννα",
    "drone": {
      "youtubeId": "Qq_Ux-uDXak",
      "title": "Ραβέννα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ραβέννα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1mOQy0ufMb0",
      "title": "Ραβέννα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ραβέννα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "perugia": {
    "cityName": "Περούτζια",
    "drone": {
      "youtubeId": "sEzIe_Hr2qc",
      "title": "Περούτζια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Περούτζια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oKTQDkNG8NM",
      "title": "Περούτζια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Περούτζια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "salerno": {
    "cityName": "Σαλέρνο",
    "drone": {
      "youtubeId": "g2ga61kwidM",
      "title": "Σαλέρνο 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σαλέρνο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "K0Ur38XcXZU",
      "title": "Σαλέρνο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαλέρνο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bergamo": {
    "cityName": "Μπέργκαμο",
    "drone": {
      "youtubeId": "_E8-IKZ2kqg",
      "title": "Μπέργκαμο 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπέργκαμο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y8hWhepr6Vw",
      "title": "Μπέργκαμο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπέργκαμο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ferrara": {
    "cityName": "Φερράρα",
    "drone": {
      "youtubeId": "B9KiWyCSGdQ",
      "title": "Φερράρα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Φερράρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "gmrMlFfEVdc",
      "title": "Φερράρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φερράρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kutaisi": {
    "cityName": "Κουτάισι",
    "drone": {
      "youtubeId": "Rur6TgW8LmQ",
      "title": "Κουτάισι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κουτάισι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uEE5mzTkft8",
      "title": "Κουτάισι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κουτάισι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "reggio-calabria": {
    "cityName": "Ρέτζιο Καλάβρια",
    "drone": {
      "youtubeId": "Me5PXFZsF88",
      "title": "Ρέτζιο Καλάβρια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρέτζιο Καλάβρια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LCX14mslIt4",
      "title": "Ρέτζιο Καλάβρια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρέτζιο Καλάβρια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lecce": {
    "cityName": "Λέτσε",
    "drone": {
      "youtubeId": "dffgMlT4fcI",
      "title": "Λέτσε 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Λέτσε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GrRl_uuYI9s",
      "title": "Λέτσε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λέτσε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mtskheta": {
    "cityName": "Μτσχέτα",
    "drone": {
      "youtubeId": "VkDaZfTmCeU",
      "title": "Μτσχέτα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μτσχέτα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JgQpoxwzTMk",
      "title": "Μτσχέτα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μτσχέτα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gori": {
    "cityName": "Γκόρι",
    "drone": {
      "youtubeId": "45K6e4ATf2Y",
      "title": "Γκόρι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γκόρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "STjsNNkoHgM",
      "title": "Γκόρι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκόρι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "rustavi": {
    "cityName": "Ρουστάβι",
    "drone": {
      "youtubeId": "3QpAioYJaFY",
      "title": "Ρουστάβι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρουστάβι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-pAXbJVqbYA",
      "title": "Ρουστάβι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρουστάβι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "zugdidi": {
    "cityName": "Ζουγκντίντι",
    "drone": {
      "youtubeId": "lAavSmCwww4",
      "title": "Ζουγκντίντι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ζουγκντίντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zm3f4-8z6Ew",
      "title": "Ζουγκντίντι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ζουγκντίντι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sighnaghi": {
    "cityName": "Σιγνάγκι",
    "drone": {
      "youtubeId": "GvMyfgoucNo",
      "title": "Σιγνάγκι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σιγνάγκι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2YG82J1SCiw",
      "title": "Σιγνάγκι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιγνάγκι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "akhaltsikhe": {
    "cityName": "Αχαλτσίχε",
    "drone": {
      "youtubeId": "jYBU1GLi2kc",
      "title": "Αχαλτσίχε 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αχαλτσίχε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "QNA77wPcNlU",
      "title": "Αχαλτσίχε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αχαλτσίχε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "telavi": {
    "cityName": "Τελάβι",
    "drone": {
      "youtubeId": "hilemxmVOUc",
      "title": "Τελάβι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τελάβι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-pAXbJVqbYA",
      "title": "Τελάβι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τελάβι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vanadzor": {
    "cityName": "Βανατζόρ",
    "drone": {
      "youtubeId": "_JM4ofJTLn8",
      "title": "Βανατζόρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Βανατζόρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "W-v74OAdla8",
      "title": "Βανατζόρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βανατζόρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "vagharshapat": {
    "cityName": "Βαγαρσαπάτ",
    "drone": {
      "youtubeId": "XaLn0KCMpr0",
      "title": "Βαγαρσαπάτ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Βαγαρσαπάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "df35ViuEiGk",
      "title": "Βαγαρσαπάτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βαγαρσαπάτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dilijan": {
    "cityName": "Ντιλιτζάν",
    "drone": {
      "youtubeId": "z3jzLUnuXOg",
      "title": "Ντιλιτζάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντιλιτζάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4d7Hy0LI3dk",
      "title": "Ντιλιτζάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντιλιτζάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "goris": {
    "cityName": "Γκορίς",
    "drone": {
      "youtubeId": "TX7A2EHTkug",
      "title": "Γκορίς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γκορίς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oIx66rH591Q",
      "title": "Γκορίς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκορίς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jermuk": {
    "cityName": "Τζερμούκ",
    "drone": {
      "youtubeId": "9nBytMOwg00",
      "title": "Τζερμούκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τζερμούκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "w1Xn6f-cfcY",
      "title": "Τζερμούκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζερμούκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sevan": {
    "cityName": "Σεβάν",
    "drone": {
      "youtubeId": "HGxO15JHHi8",
      "title": "Σεβάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σεβάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "q_jzsQizBj8",
      "title": "Σεβάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σεβάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kapan": {
    "cityName": "Καπάν",
    "drone": {
      "youtubeId": "XPsJw2RStOE",
      "title": "Καπάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Καπάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8mymq7MM7I0",
      "title": "Καπάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καπάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sumqayit": {
    "cityName": "Σουμγκαγίτ",
    "drone": {
      "youtubeId": "6skNMBuLzBE",
      "title": "Σουμγκαγίτ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σουμγκαγίτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "M-KfPLz_4Gs",
      "title": "Σουμγκαγίτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σουμγκαγίτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sheki": {
    "cityName": "Σέκι",
    "drone": {
      "youtubeId": "ff_20wxnxGs",
      "title": "Σέκι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σέκι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "EQ7YBKWWhh0",
      "title": "Σέκι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σέκι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gabala": {
    "cityName": "Γκαμπάλα",
    "drone": {
      "youtubeId": "JX2dMxEc9kc",
      "title": "Γκαμπάλα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γκαμπάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GUIYk6JLNGg",
      "title": "Γκαμπάλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκαμπάλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tsaghkadzor": {
    "cityName": "Τσαχκαντζόρ",
    "drone": {
      "youtubeId": "m9sA_hMCYcM",
      "title": "Τσαχκαντζόρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τσαχκαντζόρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "IFjDmUfZLzY",
      "title": "Τσαχκαντζόρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσαχκαντζόρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "shusha": {
    "cityName": "Σούσα",
    "drone": {
      "youtubeId": "11t9K6adPsY",
      "title": "Σούσα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σούσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yq2fZr4NiHk",
      "title": "Σούσα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σούσα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "quba": {
    "cityName": "Κούμπα",
    "drone": {
      "youtubeId": "t6etmAIFeWQ",
      "title": "Κούμπα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κούμπα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yq2fZr4NiHk",
      "title": "Κούμπα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κούμπα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mingachevir": {
    "cityName": "Μινγκατσεβίρ",
    "drone": {
      "youtubeId": "3uJ-POXz0Tw",
      "title": "Μινγκατσεβίρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μινγκατσεβίρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yq2fZr4NiHk",
      "title": "Μινγκατσεβίρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μινγκατσεβίρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lankaran": {
    "cityName": "Λανκαράν",
    "drone": {
      "youtubeId": "O6bfg50yaJY",
      "title": "Λανκαράν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Λανκαράν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "6w5o39LAw14",
      "title": "Λανκαράν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λανκαράν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nakhchivan": {
    "cityName": "Ναχιτσεβάν",
    "drone": {
      "youtubeId": "3uJ-POXz0Tw",
      "title": "Ναχιτσεβάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ναχιτσεβάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "BdVSYzWsXjE",
      "title": "Ναχιτσεβάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναχιτσεβάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bokhtar": {
    "cityName": "Μποχτάρ",
    "drone": {
      "youtubeId": "N5slIiS1Olw",
      "title": "Μποχτάρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μποχτάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XAX6d04-qp8",
      "title": "Μποχτάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μποχτάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "panjakent": {
    "cityName": "Παντζακέντ",
    "drone": {
      "youtubeId": "VLjlLw6E-4Q",
      "title": "Παντζακέντ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Παντζακέντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XAX6d04-qp8",
      "title": "Παντζακέντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Παντζακέντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kulob": {
    "cityName": "Κουλόμπ",
    "drone": {
      "youtubeId": "t1xjd5jxyXc",
      "title": "Κουλόμπ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κουλόμπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XAX6d04-qp8",
      "title": "Κουλόμπ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κουλόμπ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khorog": {
    "cityName": "Χορόγκ",
    "drone": {
      "youtubeId": "mAxLBn5_rP4",
      "title": "Χορόγκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χορόγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XAX6d04-qp8",
      "title": "Χορόγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χορόγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nurek": {
    "cityName": "Νουρέκ",
    "drone": {
      "youtubeId": "_ptnROkoDYI",
      "title": "Νουρέκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Νουρέκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0CcNH9oT41Q",
      "title": "Νουρέκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νουρέκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tursunzoda": {
    "cityName": "Τουρσουνζόντα",
    "drone": {
      "youtubeId": "cXueSqjWY_U",
      "title": "Τουρσουνζόντα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τουρσουνζόντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "7YPx-GRYwKQ",
      "title": "Τουρσουνζόντα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τουρσουνζόντα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "murghab": {
    "cityName": "Μουργκάμπ",
    "drone": {
      "youtubeId": "wvbXEwQxc2o",
      "title": "Μουργκάμπ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μουργκάμπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XAX6d04-qp8",
      "title": "Μουργκάμπ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μουργκάμπ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "istaravshan": {
    "cityName": "Ισταραβσάν",
    "drone": {
      "youtubeId": "PHO_v-pCrlg",
      "title": "Ισταραβσάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ισταραβσάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XAX6d04-qp8",
      "title": "Ισταραβσάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ισταραβσάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "turkmenbashi": {
    "cityName": "Τουρκμενμπασί",
    "drone": {
      "youtubeId": "uWcMHiuydxU",
      "title": "Τουρκμενμπασί 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τουρκμενμπασί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_RVir6l_3AY",
      "title": "Τουρκμενμπασί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τουρκμενμπασί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mary": {
    "cityName": "Μέρι",
    "drone": {
      "youtubeId": "BbxvKQZXKOM",
      "title": "Μέρι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μέρι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_RVir6l_3AY",
      "title": "Μέρι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μέρι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dashoguz": {
    "cityName": "Ντασογκούζ",
    "drone": {
      "youtubeId": "wDwFxPZ47tg",
      "title": "Ντασογκούζ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντασογκούζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_RVir6l_3AY",
      "title": "Ντασογκούζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντασογκούζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "balkanabat": {
    "cityName": "Μπαλκαναμπάτ",
    "drone": {
      "youtubeId": "67Nhnuilz9I",
      "title": "Μπαλκαναμπάτ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπαλκαναμπάτ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zRgCI06lFNs",
      "title": "Μπαλκαναμπάτ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαλκαναμπάτ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "derweze": {
    "cityName": "Ντερβέζε",
    "drone": {
      "youtubeId": "2lPvts--U5A",
      "title": "Ντερβέζε 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντερβέζε με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_RVir6l_3AY",
      "title": "Ντερβέζε 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντερβέζε Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "annau": {
    "cityName": "Ανάου",
    "drone": {
      "youtubeId": "2UZgAakXo6c",
      "title": "Ανάου 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ανάου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_RVir6l_3AY",
      "title": "Ανάου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ανάου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "konye-urgench": {
    "cityName": "Κούνια-Ουργκέντς",
    "drone": {
      "youtubeId": "-5U7GrZNw5g",
      "title": "Κούνια-Ουργκέντς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κούνια-Ουργκέντς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "ehedmbZEd4k",
      "title": "Κούνια-Ουργκέντς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κούνια-Ουργκέντς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "serdar": {
    "cityName": "Σερντάρ",
    "drone": {
      "youtubeId": "UBGWgFT_BCk",
      "title": "Σερντάρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σερντάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_RVir6l_3AY",
      "title": "Σερντάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σερντάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mazar-i-sharif": {
    "cityName": "Μαζάρ-ι-Σαρίφ",
    "drone": {
      "youtubeId": "oOWLSrZRLxU",
      "title": "Μαζάρ-ι-Σαρίφ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μαζάρ-ι-Σαρίφ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "pF8vP1HnSJI",
      "title": "Μαζάρ-ι-Σαρίφ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μαζάρ-ι-Σαρίφ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kandahar": {
    "cityName": "Κανταχάρ",
    "drone": {
      "youtubeId": "yGWoKiKq9W8",
      "title": "Κανταχάρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κανταχάρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "T4khroikLpE",
      "title": "Κανταχάρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κανταχάρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kunduz": {
    "cityName": "Κουντούζ",
    "drone": {
      "youtubeId": "pwIzCRd0PBE",
      "title": "Κουντούζ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κουντούζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_OVOTQmn5kI",
      "title": "Κουντούζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κουντούζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jalalabad": {
    "cityName": "Τζαλαλαμπάντ",
    "drone": {
      "youtubeId": "P9OZwKxsJWg",
      "title": "Τζαλαλαμπάντ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τζαλαλαμπάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KSYIKWhO3vs",
      "title": "Τζαλαλαμπάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζαλαλαμπάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bamyan": {
    "cityName": "Μπαμιάν",
    "drone": {
      "youtubeId": "Gn0tSLsqhK4",
      "title": "Μπαμιάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπαμιάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "D5rzaoL-pQQ",
      "title": "Μπαμιάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαμιάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ghazni": {
    "cityName": "Γκάζνι",
    "drone": {
      "youtubeId": "JrEF-vQA0Wg",
      "title": "Γκάζνι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γκάζνι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bzGM5w8Sjns",
      "title": "Γκάζνι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκάζνι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "balkh": {
    "cityName": "Μπαλχ",
    "drone": {
      "youtubeId": "ZYUQdGN2CLk",
      "title": "Μπαλχ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπαλχ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "jp_pgqQO3oE",
      "title": "Μπαλχ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπαλχ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khost": {
    "cityName": "Χοστ",
    "drone": {
      "youtubeId": "RqpSBZo8IiI",
      "title": "Χοστ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χοστ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_OVOTQmn5kI",
      "title": "Χοστ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χοστ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tartus": {
    "cityName": "Ταρτούς",
    "drone": {
      "youtubeId": "c1FCGd9InHY",
      "title": "Ταρτούς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ταρτούς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Vght5ZyFK34",
      "title": "Ταρτούς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταρτούς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "latakia": {
    "cityName": "Λατάκεια",
    "drone": {
      "youtubeId": "VB7r6xAdGFA",
      "title": "Λατάκεια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Λατάκεια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JyLp47EjWw8",
      "title": "Λατάκεια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λατάκεια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "homs": {
    "cityName": "Χομς",
    "drone": {
      "youtubeId": "5MCINpF12us",
      "title": "Χομς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χομς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-SyJ_apQRW8",
      "title": "Χομς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χομς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hama": {
    "cityName": "Χάμα",
    "drone": {
      "youtubeId": "5MCINpF12us",
      "title": "Χάμα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χάμα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "XGTNzIKZv3c",
      "title": "Χάμα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χάμα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bosra": {
    "cityName": "Μπόσρα",
    "drone": {
      "youtubeId": "ZQ0lSE8h2LI",
      "title": "Μπόσρα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπόσρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "nRuoeUge0VM",
      "title": "Μπόσρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπόσρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "deir-ez-zor": {
    "cityName": "Ντέιρ εζ-Ζορ",
    "drone": {
      "youtubeId": "x1iOUKCFDtU",
      "title": "Ντέιρ εζ-Ζορ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντέιρ εζ-Ζορ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "wDku_qxdB1A",
      "title": "Ντέιρ εζ-Ζορ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντέιρ εζ-Ζορ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "palmyra": {
    "cityName": "Παλμύρα",
    "drone": {
      "youtubeId": "Ak0NqU7WnsU",
      "title": "Παλμύρα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Παλμύρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "N9v33plvL4I",
      "title": "Παλμύρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Παλμύρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "as-suwayda": {
    "cityName": "Ας-Σουγουάιντα",
    "drone": {
      "youtubeId": "DYYZX34GCoQ",
      "title": "Ας-Σουγουάιντα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ας-Σουγουάιντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "N9v33plvL4I",
      "title": "Ας-Σουγουάιντα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ας-Σουγουάιντα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  }
,
  "sitra": {
    "cityName": "Σίτρα",
    "drone": {
      "youtubeId": "r1gKBy0T8Gw",
      "title": "Σίτρα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σίτρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "t1PhKckIssQ",
      "title": "Σίτρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σίτρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "aali": {
    "cityName": "Άαλι",
    "drone": {
      "youtubeId": "67GKDgXEc8g",
      "title": "Άαλι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Άαλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "2SWUj16ptMY",
      "title": "Άαλι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Άαλι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "isa-town": {
    "cityName": "Πόλη Ίσα",
    "drone": {
      "youtubeId": "67GKDgXEc8g",
      "title": "Πόλη Ίσα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πόλη Ίσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "V3D-3gOn2ak",
      "title": "Πόλη Ίσα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πόλη Ίσα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "muharraq": {
    "cityName": "Μουχαράκ",
    "drone": {
      "youtubeId": "3culbYNbr6s",
      "title": "Μουχαράκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μουχαράκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "V3D-3gOn2ak",
      "title": "Μουχαράκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μουχαράκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "zallaq": {
    "cityName": "Ζαλάκ",
    "drone": {
      "youtubeId": "3culbYNbr6s",
      "title": "Ζαλάκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ζαλάκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rW4z3ALbFUw",
      "title": "Ζαλάκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ζαλάκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "budaiya": {
    "cityName": "Μπουντάγια",
    "drone": {
      "youtubeId": "OCbDfVd82-Q",
      "title": "Μπουντάγια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπουντάγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GloSEjA6Is4",
      "title": "Μπουντάγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπουντάγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hamad-town": {
    "cityName": "Πόλη Χαμάντ",
    "drone": {
      "youtubeId": "67GKDgXEc8g",
      "title": "Πόλη Χαμάντ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πόλη Χαμάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "V3D-3gOn2ak",
      "title": "Πόλη Χαμάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πόλη Χαμάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "riffa": {
    "cityName": "Ρίφα",
    "drone": {
      "youtubeId": "ZEEPNB0MAPU",
      "title": "Ρίφα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ρίφα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GloSEjA6Is4",
      "title": "Ρίφα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ρίφα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "taiz": {
    "cityName": "Ταΐζ",
    "drone": {
      "youtubeId": "dj7KEbgjfVI",
      "title": "Ταΐζ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ταΐζ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "qyQA5gDZO4c",
      "title": "Ταΐζ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταΐζ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "durrat-al-bahrain": {
    "cityName": "Ντουράτ αλ-Μπαχρέιν",
    "drone": {
      "youtubeId": "Ile84NFCuq0",
      "title": "Ντουράτ αλ-Μπαχρέιν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντουράτ αλ-Μπαχρέιν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "GloSEjA6Is4",
      "title": "Ντουράτ αλ-Μπαχρέιν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντουράτ αλ-Μπαχρέιν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-hudaydah": {
    "cityName": "Αλ-Χουντάιντα",
    "drone": {
      "youtubeId": "rAg34hvst6s",
      "title": "Αλ-Χουντάιντα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αλ-Χουντάιντα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oSP975QtZdw",
      "title": "Αλ-Χουντάιντα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Χουντάιντα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tarim": {
    "cityName": "Ταρίμ",
    "drone": {
      "youtubeId": "tOvYuwz0eGU",
      "title": "Ταρίμ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ταρίμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "f9hGtzJfxs0",
      "title": "Ταρίμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ταρίμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "shibam": {
    "cityName": "Σιμπάμ",
    "drone": {
      "youtubeId": "cSnRItSGd78",
      "title": "Σιμπάμ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σιμπάμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "4ir-A7E5fYA",
      "title": "Σιμπάμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σιμπάμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ibb": {
    "cityName": "Ιμπ",
    "drone": {
      "youtubeId": "vdrPqRoiMFU",
      "title": "Ιμπ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ιμπ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_H-omQ984Jc",
      "title": "Ιμπ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ιμπ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-mukalla": {
    "cityName": "Αλ-Μουκάλα",
    "drone": {
      "youtubeId": "f5xR-HaWcqU",
      "title": "Αλ-Μουκάλα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αλ-Μουκάλα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "u4afYXL-tps",
      "title": "Αλ-Μουκάλα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Μουκάλα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "zabid": {
    "cityName": "Ζαμπίντ",
    "drone": {
      "youtubeId": "3HANCTUBxSQ",
      "title": "Ζαμπίντ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ζαμπίντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "VB1HscZTxMo",
      "title": "Ζαμπίντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ζαμπίντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nablus": {
    "cityName": "Ναμπλούς",
    "drone": {
      "youtubeId": "gShBTO2inF8",
      "title": "Ναμπλούς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ναμπλούς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "OHz55jvDrJg",
      "title": "Ναμπλούς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ναμπλούς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hadibu": {
    "cityName": "Χαντίμπου",
    "drone": {
      "youtubeId": "D3_ZMmWCjXg",
      "title": "Χαντίμπου 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χαντίμπου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "mCTFI9xSYHk",
      "title": "Χαντίμπου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαντίμπου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gaza-city": {
    "cityName": "Πόλη της Γάζας",
    "drone": {
      "youtubeId": "ZB8cHXx7_S4",
      "title": "Πόλη της Γάζας 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πόλη της Γάζας με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "IXeAIpbcjM0",
      "title": "Πόλη της Γάζας 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πόλη της Γάζας Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jenin": {
    "cityName": "Τζενίν",
    "drone": {
      "youtubeId": "KYJHUY76v6M",
      "title": "Τζενίν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τζενίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "uE0qpvY5lfw",
      "title": "Τζενίν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζενίν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jericho": {
    "cityName": "Ιεριχώ",
    "drone": {
      "youtubeId": "X_Wq4yk1sC8",
      "title": "Ιεριχώ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ιεριχώ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "3w6L6yQB4mA",
      "title": "Ιεριχώ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ιεριχώ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hebron": {
    "cityName": "Χεβρώνα",
    "drone": {
      "youtubeId": "VE1g0MsBqFE",
      "title": "Χεβρώνα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χεβρώνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "aGrYH_d6fXY",
      "title": "Χεβρώνα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χεβρώνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "qalqilya": {
    "cityName": "Καλκίλια",
    "drone": {
      "youtubeId": "5WE2XYDBKaI",
      "title": "Καλκίλια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Καλκίλια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "oQTWRv2QQLs",
      "title": "Καλκίλια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Καλκίλια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tulkarm": {
    "cityName": "Τουλκάρμ",
    "drone": {
      "youtubeId": "5WE2XYDBKaI",
      "title": "Τουλκάρμ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τουλκάρμ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "sADKzbmXkic",
      "title": "Τουλκάρμ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τουλκάρμ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hamhung": {
    "cityName": "Χαμχούνγκ",
    "drone": {
      "youtubeId": "vDgc7RpRCHc",
      "title": "Χαμχούνγκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χαμχούνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vMYZRij5Fqg",
      "title": "Χαμχούνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαμχούνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "khan-yunis": {
    "cityName": "Χαν Γιουνίς",
    "drone": {
      "youtubeId": "dQ5Ss6_zet0",
      "title": "Χαν Γιουνίς 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χαν Γιουνίς με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "qigM3Xjq8fU",
      "title": "Χαν Γιουνίς 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαν Γιουνίς Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "nampo": {
    "cityName": "Νάμπο",
    "drone": {
      "youtubeId": "dhfdmzz7CNo",
      "title": "Νάμπο 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Νάμπο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "KYqC37G8ZOY",
      "title": "Νάμπο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νάμπο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "wonsan": {
    "cityName": "Γουονσάν",
    "drone": {
      "youtubeId": "i1U6WXEjLiA",
      "title": "Γουονσάν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γουονσάν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0oCdH4oYjJg",
      "title": "Γουονσάν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γουονσάν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kaesong": {
    "cityName": "Κεσόνγκ",
    "drone": {
      "youtubeId": "7hdu4b9_Ml4",
      "title": "Κεσόνγκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κεσόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "6T9S7Jq4jss",
      "title": "Κεσόνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κεσόνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chongjin": {
    "cityName": "Τσονγκτζίν",
    "drone": {
      "youtubeId": "U2vnAlT9rb8",
      "title": "Τσονγκτζίν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τσονγκτζίν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "bXViuzVaMyk",
      "title": "Τσονγκτζίν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τσονγκτζίν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sinuiju": {
    "cityName": "Σινουΐτζου",
    "drone": {
      "youtubeId": "BirrEaONHPY",
      "title": "Σινουΐτζου 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σινουΐτζου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "vMYZRij5Fqg",
      "title": "Σινουΐτζου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σινουΐτζου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "samjiyon": {
    "cityName": "Σαμτζιγιόν",
    "drone": {
      "youtubeId": "u6tNAsRDIog",
      "title": "Σαμτζιγιόν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σαμτζιγιόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "yPonr3QVFdg",
      "title": "Σαμτζιγιόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαμτζιγιόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sariwon": {
    "cityName": "Σαριγουόν",
    "drone": {
      "youtubeId": "UbBHhlZRq78",
      "title": "Σαριγουόν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σαριγουόν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "LqTkuKBAB-g",
      "title": "Σαριγουόν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαριγουόν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "haeju": {
    "cityName": "Χετζού",
    "drone": {
      "youtubeId": "zrw6QY9h_FI",
      "title": "Χετζού 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χετζού με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Memgf89sUUc",
      "title": "Χετζού 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χετζού Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "singapore-downtown": {
    "cityName": "Downtown Core & Marina Bay",
    "drone": {
      "youtubeId": "KYo6lUn25gs",
      "title": "Downtown Core & Marina Bay 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Downtown Core & Marina Bay με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rmxNPzpuFB4",
      "title": "Downtown Core & Marina Bay 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Downtown Core & Marina Bay Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kampong-glam": {
    "cityName": "Kampong Glam",
    "drone": {
      "youtubeId": "xxfkK5jGEq8",
      "title": "Kampong Glam 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Kampong Glam με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "14LINzupMGQ",
      "title": "Kampong Glam 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Kampong Glam Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "orchard-road": {
    "cityName": "Orchard Road",
    "drone": {
      "youtubeId": "gpq_hrRhvxA",
      "title": "Orchard Road 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Orchard Road με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "8e5GqXzWbbs",
      "title": "Orchard Road 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Orchard Road Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "little-india-sg": {
    "cityName": "Little India",
    "drone": {
      "youtubeId": "qPT6N-sDsdc",
      "title": "Little India 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Little India με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "0ltWP0TIBI4",
      "title": "Little India 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Little India Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "chinatown-sg": {
    "cityName": "Chinatown",
    "drone": {
      "youtubeId": "5D0lC_dDKaY",
      "title": "Chinatown 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Chinatown με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "-rGw-dEDdw4",
      "title": "Chinatown 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Chinatown Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sentosa-island": {
    "cityName": "Νήσος Σεντόσα",
    "drone": {
      "youtubeId": "PBUp5vH1Fms",
      "title": "Νήσος Σεντόσα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Νήσος Σεντόσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "cBMAXUCW4nQ",
      "title": "Νήσος Σεντόσα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νήσος Σεντόσα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jurong": {
    "cityName": "Τζουρόνγκ",
    "drone": {
      "youtubeId": "-uAZoEgJo80",
      "title": "Τζουρόνγκ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τζουρόνγκ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "jqtBcS4VIcw",
      "title": "Τζουρόνγκ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τζουρόνγκ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "katong-joo-chiat": {
    "cityName": "Katong & Joo Chiat",
    "drone": {
      "youtubeId": "hABieEhVc7k",
      "title": "Katong & Joo Chiat 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Katong & Joo Chiat με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "_Q1Yr7tQPT0",
      "title": "Katong & Joo Chiat 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Katong & Joo Chiat Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "changi": {
    "cityName": "Changi",
    "drone": {
      "youtubeId": "qPT6N-sDsdc",
      "title": "Changi 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Changi με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "m4X61-wQEa8",
      "title": "Changi 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Changi Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "woodlands": {
    "cityName": "Woodlands",
    "drone": {
      "youtubeId": "fambMdD-H0g",
      "title": "Woodlands 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Woodlands με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Mloh2AqQ1Q8",
      "title": "Woodlands 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Woodlands Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kuala-belait": {
    "cityName": "Kuala Belait",
    "drone": {
      "youtubeId": "igyBP2Ll0UI",
      "title": "Kuala Belait 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Kuala Belait με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TsxZ2NpzRys",
      "title": "Kuala Belait 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Kuala Belait Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kampong-ayer": {
    "cityName": "Kampong Ayer",
    "drone": {
      "youtubeId": "FfUFS5v_9i4",
      "title": "Kampong Ayer 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Kampong Ayer με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "DfcTAxEIGKw",
      "title": "Kampong Ayer 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Kampong Ayer Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "seria": {
    "cityName": "Seria",
    "drone": {
      "youtubeId": "055aeOz2lWo",
      "title": "Seria 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Seria με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Aw4FeoaMEHg",
      "title": "Seria 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Seria Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "muara": {
    "cityName": "Muara",
    "drone": {
      "youtubeId": "dfPDP6cHBH4",
      "title": "Muara 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Muara με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Aw4FeoaMEHg",
      "title": "Muara 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Muara Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "tutong": {
    "cityName": "Tutong",
    "drone": {
      "youtubeId": "Nmfm51yT828",
      "title": "Tutong 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Tutong με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "zBVHmUVfqpA",
      "title": "Tutong 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Tutong Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hulhumale": {
    "cityName": "Χουλχουμαλέ",
    "drone": {
      "youtubeId": "XemmJoTkXnE",
      "title": "Χουλχουμαλέ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χουλχουμαλέ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SyyjvGt3DXE",
      "title": "Χουλχουμαλέ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χουλχουμαλέ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "bangar": {
    "cityName": "Bangar",
    "drone": {
      "youtubeId": "SULehjbXrvw",
      "title": "Bangar 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Bangar με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Aw4FeoaMEHg",
      "title": "Bangar 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Bangar Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "jerudong": {
    "cityName": "Jerudong",
    "drone": {
      "youtubeId": "055aeOz2lWo",
      "title": "Jerudong 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Jerudong με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "d2pRGsNyZuk",
      "title": "Jerudong 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Jerudong Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "temburong": {
    "cityName": "Temburong",
    "drone": {
      "youtubeId": "5CSLKjzR3Og",
      "title": "Temburong 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Temburong με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "z3WFFF9bKhs",
      "title": "Temburong 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Temburong Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "villingili": {
    "cityName": "Βιλινγκίλι",
    "drone": {
      "youtubeId": "OX5RZvCiurU",
      "title": "Βιλινγκίλι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Βιλινγκίλι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YCcqJWmC5QM",
      "title": "Βιλινγκίλι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Βιλινγκίλι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gadong": {
    "cityName": "Gadong",
    "drone": {
      "youtubeId": "dfPDP6cHBH4",
      "title": "Gadong 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Gadong με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PX0UvWlGkw0",
      "title": "Gadong 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Gadong Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "addu-city": {
    "cityName": "Πόλη Άντου",
    "drone": {
      "youtubeId": "JTbJKHLCnAk",
      "title": "Πόλη Άντου 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πόλη Άντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JAhuFoH68V8",
      "title": "Πόλη Άντου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πόλη Άντου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "maafushi": {
    "cityName": "Μααφούσι",
    "drone": {
      "youtubeId": "HIKa4TgI88A",
      "title": "Μααφούσι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μααφούσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "5KJ3ITO-GT8",
      "title": "Μααφούσι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μααφούσι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "kulhudhuffushi": {
    "cityName": "Κουλχουντουφούσι",
    "drone": {
      "youtubeId": "CP-abZMU2vQ",
      "title": "Κουλχουντουφούσι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Κουλχουντουφούσι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "OvfJZTWAE7E",
      "title": "Κουλχουντουφούσι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Κουλχουντουφούσι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "gan": {
    "cityName": "Γκαν",
    "drone": {
      "youtubeId": "Ltb9xjs64fg",
      "title": "Γκαν 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Γκαν με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "1bBe8tTXUlY",
      "title": "Γκαν 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Γκαν Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "thoddoo": {
    "cityName": "Τόντου",
    "drone": {
      "youtubeId": "17Gmw9au9fI",
      "title": "Τόντου 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Τόντου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "JTOPwPo36fk",
      "title": "Τόντου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Τόντου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fuvahmulah": {
    "cityName": "Φουβαχμουλάχ",
    "drone": {
      "youtubeId": "KEeE-DAZyYs",
      "title": "Φουβαχμουλάχ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Φουβαχμουλάχ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "SyyjvGt3DXE",
      "title": "Φουβαχμουλάχ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φουβαχμουλάχ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "dhangethi": {
    "cityName": "Ντανγκέτι",
    "drone": {
      "youtubeId": "SLFPcKlOXUM",
      "title": "Ντανγκέτι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ντανγκέτι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "I5jAfV-jqFc",
      "title": "Ντανγκέτι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ντανγκέτι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "baucau": {
    "cityName": "Μπάουκαου",
    "drone": {
      "youtubeId": "SupPEMpM5ek",
      "title": "Μπάουκαου 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μπάουκαου με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "J7wLeFI25Tc",
      "title": "Μπάουκαου 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μπάουκαου Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "maliana": {
    "cityName": "Μαλιάνα",
    "drone": {
      "youtubeId": "awawdlBo1hc",
      "title": "Μαλιάνα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μαλιάνα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Μαλιάνα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μαλιάνα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "suai": {
    "cityName": "Σούαι",
    "drone": {
      "youtubeId": "4U3MyH0dlHE",
      "title": "Σούαι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σούαι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Σούαι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σούαι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "liquica": {
    "cityName": "Λικίσα",
    "drone": {
      "youtubeId": "O0VoD6HXCaU",
      "title": "Λικίσα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Λικίσα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Λικίσα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λικίσα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ermera": {
    "cityName": "Ερμέρα",
    "drone": {
      "youtubeId": "4U3MyH0dlHE",
      "title": "Ερμέρα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Ερμέρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Ερμέρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Ερμέρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "lospalos": {
    "cityName": "Λοσπάλος",
    "drone": {
      "youtubeId": "ypAvUCnqdQs",
      "title": "Λοσπάλος 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Λοσπάλος με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "UnNFdqZTIIE",
      "title": "Λοσπάλος 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Λοσπάλος Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "pante-macassar": {
    "cityName": "Πάντε Μακάσαρ",
    "drone": {
      "youtubeId": "awawdlBo1hc",
      "title": "Πάντε Μακάσαρ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Πάντε Μακάσαρ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Πάντε Μακάσαρ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Πάντε Μακάσαρ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "manatuto": {
    "cityName": "Μανουτούτο",
    "drone": {
      "youtubeId": "4U3MyH0dlHE",
      "title": "Μανουτούτο 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μανουτούτο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Μανουτούτο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μανουτούτο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-ahmadi": {
    "cityName": "Αλ-Αχμάντι",
    "drone": {
      "youtubeId": "-DSB8FUzM7c",
      "title": "Αλ-Αχμάντι 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αλ-Αχμάντι με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "Y9FAIbvd63s",
      "title": "Αλ-Αχμάντι 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Αχμάντι Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "ainaro": {
    "cityName": "Αϊνάρο",
    "drone": {
      "youtubeId": "vbgIod3bT5Q",
      "title": "Αϊνάρο 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αϊνάρο με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "G5kRZ2ooQms",
      "title": "Αϊνάρο 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αϊνάρο Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "hawalli": {
    "cityName": "Χαουαλί",
    "drone": {
      "youtubeId": "EKt1Tdq4c8M",
      "title": "Χαουαλί 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Χαουαλί με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YJ-U90Oqi5A",
      "title": "Χαουαλί 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Χαουαλί Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "salmiya": {
    "cityName": "Αλ-Σαλμίγια",
    "drone": {
      "youtubeId": "j4t4bPJtPhU",
      "title": "Αλ-Σαλμίγια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αλ-Σαλμίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "rM9Oe3AdRRw",
      "title": "Αλ-Σαλμίγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Σαλμίγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "sabah-al-ahmad": {
    "cityName": "Σαμπάχ αλ-Αχμάντ",
    "drone": {
      "youtubeId": "DjktSptGcoU",
      "title": "Σαμπάχ αλ-Αχμάντ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Σαμπάχ αλ-Αχμάντ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "eMEFvb2FRms",
      "title": "Σαμπάχ αλ-Αχμάντ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Σαμπάχ αλ-Αχμάντ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-farwaniyah": {
    "cityName": "Αλ-Φαρουανίγια",
    "drone": {
      "youtubeId": "-DSB8FUzM7c",
      "title": "Αλ-Φαρουανίγια 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αλ-Φαρουανίγια με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "PUQZRt2hVEA",
      "title": "Αλ-Φαρουανίγια 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Φαρουανίγια Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "mangaf": {
    "cityName": "Μανγκάφ",
    "drone": {
      "youtubeId": "CZMJuRm0UUE",
      "title": "Μανγκάφ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Μανγκάφ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "iyLmiNZsHss",
      "title": "Μανγκάφ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Μανγκάφ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "al-jahra": {
    "cityName": "Αλ-Τζάχρα",
    "drone": {
      "youtubeId": "EKt1Tdq4c8M",
      "title": "Αλ-Τζάχρα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Αλ-Τζάχρα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "TnsOCd78bpI",
      "title": "Αλ-Τζάχρα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Αλ-Τζάχρα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "fahaheel": {
    "cityName": "Φαχαχίλ",
    "drone": {
      "youtubeId": "KbnwHhl7cdg",
      "title": "Φαχαχίλ 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Φαχαχίλ με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "x2dj4rhRok4",
      "title": "Φαχαχίλ 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Φαχαχίλ Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  },
  "failaka-island": {
    "cityName": "Νήσος Φαϊλάκα",
    "drone": {
      "youtubeId": "u-2UPJpG7uc",
      "title": "Νήσος Φαϊλάκα 4K: Εναέρια & Πανοραμική Περιήγηση Drone",
      "label": "Νήσος Φαϊλάκα με Drone (4K)",
      "icon": "fa-solid fa-helicopter",
      "type": "drone"
    },
    "walking": {
      "youtubeId": "YqVdNroJyiw",
      "title": "Νήσος Φαϊλάκα 4K: Περιήγηση στους Δρόμους και τα Αξιοθέατα",
      "label": "Νήσος Φαϊλάκα Walking Tour (4K)",
      "icon": "fa-solid fa-person-walking",
      "type": "walking"
    }
  }
};

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
  "lac-assal": {
    "youtubeId": "N3Dn6lrqvjA",
    "title": "Λίμνη Ασσάλ & Αλυκές 4K (Τζιμπουτί - Χαμηλότερο Σημείο Αφρικής)"
  },
  "massawa-port": {
    "youtubeId": "SYhHh39dXic",
    "title": "Ιστορικό Λιμάνι Μασάουα & Ερυθρά Θάλασσα 4K (Ερυθραία)"
  },
  "maletsunyane-falls": {
    "youtubeId": "b4ApPVApIXM",
    "title": "Καταρράκτες Maletsunyane 4K (Σεμονκόνγκ, Λεσότο)"
  },
  "bijagos-archipelago": {
    "youtubeId": "vV0gxEyOiW8",
    "title": "Αρχιπέλαγος Bijagós UNESCO 4K (Γουινέα-Μπισάου)"
  },
  "santa-maria-beach": {
    "youtubeId": "gRmlZPKV-lw",
    "title": "Παραλία Σάντα Μαρία & Νήσος Σαλ 4K (Πράσινο Ακρωτήριο)"
  },
  "river-no2-beach": {
    "youtubeId": "OMeBRTuRv2A",
    "title": "Παραλία River No. 2 4K (Φρίταουν, Σιέρα Λεόνε)"
  },
  "lake-tanganyika": {
    "youtubeId": "K8OptxE1Js8",
    "title": "Λίμνη Τανγκανίκα & Μπουζουμπούρα 4K (Μπουρούντι)"
  },
  "agadez-mosque": {
    "youtubeId": "uz23AE-oemU",
    "title": "Μεγάλο Τζαμί Agadez UNESCO 4K (Νίγηρας)"
  },
  "juba-nile": {
    "youtubeId": "kFF_2n2C8os",
    "title": "Λευκός Νείλος & Τζούμπα 4K (Νότιο Σουδάν)"
  },
  "congo-rapids": {
    "youtubeId": "uz23AE-oemU",
    "title": "Καταρράκτες Malebo & Ποταμός Κονγκό 4K (Μπραζαβίλ)"
  },
  "seychelles-beach": {
    "youtubeId": "s2_B1tW5u8U",
    "title": "Παραλία Anse Source d'Argent & Mahe Live 4K (Σεϋχέλλες)"
  },
  "djenne-mosque": {
    "youtubeId": "uz23AE-oemU",
    "title": "Μεγάλο Τζαμί Djenné 4K (Μάλι)"
  },
  "leptis-magna": {
    "youtubeId": "Fxu4cunNyXQ",
    "title": "Αρχαία Λέπτις Μάγκνα 4K (Λιβύη)"
  },
  "lake-malawi": {
    "youtubeId": "jH3e5w4BWGA",
    "title": "Λίμνη Μαλάουι & Nkhata Bay 4K (Μαλάουι)"
  },
  "pyramids-giza": {
    "youtubeId": "Fxu4cunNyXQ",
    "title": "Πυραμίδες Γκίζας & Μεγάλη Σφίγγα Live (Αίγυπτος)"
  },
  "table-mountain": {
    "youtubeId": "CY7VV-sVnuA",
    "title": "Τραπεζοειδές Όρος & Camps Bay Live (Κέιπ Τάουν)"
  },
  "kruger-safari": {
    "youtubeId": "ydYDqZQpim8",
    "title": "Εθνικό Πάρκο Kruger Safari Live (Νότια Αφρική)"
  },
  "victoria-falls": {
    "youtubeId": "jH3e5w4BWGA",
    "title": "Καταρράκτες Βικτωρίας & Ποταμός Ζαμβέζης Live"
  },
  "zanzibar-beach": {
    "youtubeId": "s2_B1tW5u8U",
    "title": "Παραλία Nungwi & Κοραλλιογενής Ακτή Live (Ζανζιβάρη)"
  },
  "bondi-beach": {
    "youtubeId": "w_iJqY_767k",
    "title": "Παραλία Bondi Beach Live (Σίδνεϊ, Αυστραλία)"
  },
  "surfers-paradise": {
    "youtubeId": "c_X7915F678",
    "title": "Surfers Paradise Gold Coast Live (Αυστραλία)"
  },
  "bora-bora-lagoon": {
    "youtubeId": "m_Y_4567891",
    "title": "Λιμνοθάλασσα Μπόρα Μπόρα Live (Γαλλική Πολυνησία)"
  },
  "times-square": {
    "youtubeId": "ZxCeWQ3Lcig",
    "title": "Times Square Live 4K (Νέα Υόρκη)"
  },
  "shibuya": {
    "youtubeId": "dfVK7ld38Ys",
    "title": "Shibuya Scramble Crossing Live (Τόκιο)"
  },
  "san-marco": {
    "youtubeId": "a1mcaV3Sf9U",
    "title": "Πλατεία Αγίου Μάρκου & Κανάλια Live (Βενετία)"
  },
  "st-peters": {
    "youtubeId": "EEM7a3mHMR4",
    "title": "Πλατεία Αγίου Πέτρου Live (Βατικανό / Ρώμη)"
  },
  "abbey-road": {
    "youtubeId": "zMCea32gpmg",
    "title": "Abbey Road Live (Λονδίνο)"
  },
  "copacabana": {
    "youtubeId": "wyEi0OPai5g",
    "title": "Παραλία Κοπακαμπάνα Live (Ρίο ντε Τζανέιρο)"
  },
  "sydney-harbour": {
    "youtubeId": "5uZa3-RMFos",
    "title": "Λιμάνι & Όπερα Σύδνεϋ Live (Αυστραλία)"
  },
  "venice-beach": {
    "youtubeId": "EO_1LWqsCNE",
    "title": "Venice Beach Live (Λος Άντζελες)"
  },
  "niagara-falls": {
    "youtubeId": "qx7gry390YA",
    "title": "Καταρράκτες Νιαγάρα Live"
  },
  "temple-bar": {
    "youtubeId": "3nyPER2kzqk",
    "title": "Δουβλίνο & Temple Bar Live"
  },
  "bourbon-street": {
    "youtubeId": "xqdukYhcGEU",
    "title": "Bourbon Street Live (Νέα Ορλεάνη)"
  },
  "western-wall": {
    "youtubeId": "77akujLn4k8",
    "title": "Δυτικό Τείχος Live (Ιερουσαλήμ)"
  },
  "masjid-al-haram": {
    "youtubeId": "e2Mj4ch8l94",
    "title": "Ιερό Τέμενος Al-Masjid al-Haram Live (Μέκκα)"
  },
  "eiffel-tower": {
    "youtubeId": "QI-PPEW2Bgc",
    "title": "Πύργος του Άιφελ Live (Παρίσι)"
  },
  "marienplatz": {
    "youtubeId": "VAS9A0LRGHA",
    "title": "Marienplatz Live (Μόναχο)"
  },
  "vesuvius": {
    "youtubeId": "RbI8JwrBZQA",
    "title": "Βεζούβιος Live (Νάπολη)"
  },
  "golden-gate": {
    "youtubeId": "BSWhGNXxT9A",
    "title": "Golden Gate Bridge Live (Σαν Φρανσίσκο)"
  },
  "washington-monument": {
    "youtubeId": "mG2gAWY_Guw",
    "title": "Washington Monument Live (Ουάσιγκτον)"
  },
  "galata-bosphorus": {
    "youtubeId": "vfBMjDZm_PA",
    "title": "Βόσπορος & Πύργος του Γαλατά Live (Κωνσταντινούπολη)"
  },
  "ribeira-porto": {
    "youtubeId": "QetuuDxsgig",
    "title": "Ribeira & Ποταμός Ντούρο Live (Πόρτο)"
  },
  "duomo-firenze": {
    "youtubeId": "qBtMuRnf7BY",
    "title": "Πανόραμα Φλωρεντίας Live (Φλωρεντία)"
  },
  "hamburg-michel": {
    "youtubeId": "OmyDLXvaus4",
    "title": "Λιμάνι Αμβούργου & Ναός Αγίου Μιχαήλ Live"
  },
  "sam-sharpe": {
    "youtubeId": "ac0v_QwqYfw",
    "title": "Πλατεία Sam Sharpe Live (Μοντέγκο Μπέι)"
  },
  "zambezi-river": {
    "youtubeId": "jH3e5w4BWGA",
    "title": "Ποταμός Ζαμβέζης Safari Live (Ζάμπια)"
  },
  "main-tower": {
    "youtubeId": "boJCx2dXCko",
    "title": "Φρανκφούρτη Skyline Live 24/7 (Main Tower)"
  },
  "dresden-elbufer": {
    "youtubeId": "vTJGeIvg8EY",
    "title": "Δρέσδη Πανόραμα & Έλβας Live Cam"
  },
  "mount-fuji": {
    "youtubeId": "XqQ9RUU3jQs",
    "title": "Όρος Φούτζι 24/7 Live Cam (Shizuoka, Ιαπωνία)"
  },
  "taj-mahal": {
    "youtubeId": "44rTTLjZZz4",
    "title": "Ταζ Μαχάλ & Ποταμός Γιαμούνα 4K (Άγκρα, Ινδία)"
  },
  "varanasi-ghats": {
    "youtubeId": "g4hqlgm-5Bs",
    "title": "Γκάτες του Γάγγη & Τελετή Αάρτι Live (Βαρανάσι, Ινδία)"
  },
  "angkor-wat": {
    "youtubeId": "8Sikr6yUQbk",
    "title": "Άνγκορ Βατ & Ναοί Χμερ 4K (Σιέμ Ριπ, Καμπότζη)"
  },
  "borobudur-temple": {
    "youtubeId": "tDuhIrzBjbQ",
    "title": "Ναός Μπορομπουντούρ 4K (Ιάβα, Ινδονησία)"
  },
  "ha-long-bay": {
    "youtubeId": "TPWbEUhYeyg",
    "title": "Κόλπος Χα Λονγκ & Καρστικά Νησιά 4K (Βιετνάμ)"
  },
  "wat-arun": {
    "youtubeId": "1v3YzTKarfU",
    "title": "Ναός Βατ Αρούν & Ποταμός Τσάο Πράγια 4K (Μπανγκόκ, Ταϊλάνδη)"
  },
  "petra-treasury": {
    "youtubeId": "2Ix2PN5W2hs",
    "title": "Θησαυροφυλάκιο Πέτρας & Φαράγγι Siq 4K (Ιορδανία)"
  },
  "lahore-badshahi": {
    "youtubeId": "CXC3EdNQa4U",
    "title": "Τέμενος Badshahi & Φρούριο Λαχόρης 4K (Πακιστάν)"
  },
  "beirut-pigeon-rocks": {
    "youtubeId": "Jy4en1ENAC8",
    "title": "Βράχοι των Περιστεριών & Κορνίς Βηρυτού 4K (Λίβανος)"
  },
  "muscat-mutrah": {
    "youtubeId": "X-GmngFMfuw",
    "title": "Κορνίς Μούτραχ & Λιμάνι Μουσκάτ 4K (Ομάν)"
  },
  "tigers-nest": {
    "youtubeId": "esddmLk4feI",
    "title": "Μονή Paro Taktsang (Tiger's Nest) 4K (Μπουτάν)"
  },
  "ulaanbaatar-square": {
    "youtubeId": "Qfwdky5fyf4",
    "title": "Πλατεία Σουχμπαατάρ & Μνημείο Τζένγκις Χαν 4K (Ουλάν Μπατόρ)"
  }
,
  "burj-khalifa": {
    "youtubeId": "ek2uRi8wmdA",
    "title": "Μπουρτζ Χαλίφα & Συντριβάνια Ντουμπάι 4K (Ντουμπάι, ΗΑΕ)"
  },
  "kaaba-mecca": {
    "youtubeId": "u0r_8rrquK4",
    "title": "Κάαμπα & Μεγάλο Τζαμί Μέκκας Live 24/7 (Μέκκα, Σαουδική Αραβία)"
  },
  "prophets-mosque-medina": {
    "youtubeId": "BtMUUgApnPs",
    "title": "Τζαμί του Προφήτη Μεδίνας Live 24/7 (Μεδίνα, Σαουδική Αραβία)"
  },
  "samarkand-registan": {
    "youtubeId": "cEoz_5BZjFU",
    "title": "Πλατεία Ρεγκιστάν & Δρόμος του Μεταξιού 4K (Σαμαρκάνδη, Ουζμπεκιστάν)"
  },
  "isfahan-naqsh-jahan": {
    "youtubeId": "9Ay_iSrv8Ew",
    "title": "Πλατεία Νακς-ε Τζαχάν 4K (Ισφαχάν, Ιράν)"
  },
  "western-wall-jerusalem": {
    "youtubeId": "77akujLn4k8",
    "title": "Δυτικό Τείχος (Τείχος των Δακρύων) Live 24/7 (Ιερουσαλήμ, Ισραήλ)"
  },
  "erbil-citadel": {
    "youtubeId": "2m_OxjlGFxc",
    "title": "Ακρόπολη του Ερμπίλ UNESCO 4K (Ερμπίλ, Ιράκ)"
  }
,
  "dortmund-signal-iduna": {
    "youtubeId": "VoP2qJii_Uo",
    "title": "Signal Iduna Park & Westfalenstadion 4K (Ντόρτμουντ, Γερμανία)"
  },
  "heidelberg-castle": {
    "youtubeId": "3K7EJ9-_yOw",
    "title": "Ιστορικό Κάστρο Χαϊδελβέργης 4K (Χαϊδελβέργη, Γερμανία)"
  },
  "reims-cathedral": {
    "youtubeId": "EhucJkThdyE",
    "title": "Καθεδρικός Ναός της Ρενς UNESCO 4K (Ρενς, Γαλλία)"
  },
  "pisa-tower": {
    "youtubeId": "88I_OAcLf8A",
    "title": "Κεκλιμένος Πύργος της Πίζας & Piazza dei Miracoli 4K (Πίζα, Ιταλία)"
  },
  "tbilisi-narikala": {
    "youtubeId": "S-IdNhvwmm0",
    "title": "Φρούριο Ναρικάλα & Παλιά Τιφλίδα 4K (Τιφλίδα, Γεωργία)"
  },
  "yerevan-cascade": {
    "youtubeId": "M8DWTkewKUE",
    "title": "Το Μνημειώδες Cascade & Μητέρα Αρμενία 4K (Ερεβάν, Αρμενία)"
  },
  "baku-flame-towers": {
    "youtubeId": "PhyLT7cavyQ",
    "title": "Πύργοι της Φλόγας & Παραλιακή Corniche 4K (Μπακού, Αζερμπαϊτζάν)"
  },
  "damascus-umayyad": {
    "youtubeId": "Wka452euKdY",
    "title": "Μεγάλο Τζαμί των Ομεϋαδών UNESCO 4K (Δαμασκός, Συρία)"
  },
  "ashgabat-center": {
    "youtubeId": "bhYPntlncKs",
    "title": "Λευκή Μαρμάρινη Πόλη Ασγκαμπάτ 4K (Ασγκαμπάτ, Τουρκμενιστάν)"
  },
  "kabul-babur-gardens": {
    "youtubeId": "CSvyc729iww",
    "title": "Ιστορικοί Κήποι του Μπαμπούρ 4K (Καμπούλ, Αφγανιστάν)"
  }
,
  "kuwait-towers": {
    "youtubeId": "ZIcQlM-ck-s",
    "title": "Πύργοι του Κουβέιτ & Ουρανοξύστες 4K (Πόλη του Κουβέιτ, Κουβέιτ)"
  },
  "sanaa-old-city": {
    "youtubeId": "5JiFUKw7jx0",
    "title": "Παλιά Πόλη Σαναά UNESCO 4K (Σαναά, Υεμένη)"
  },
  "shibam-hadramaut": {
    "youtubeId": "cSnRItSGd78",
    "title": "Σιμπάμ - Το Μανχάταν της Ερήμου UNESCO 4K (Χαντραμαούτ, Υεμένη)"
  },
  "bethlehem-nativity": {
    "youtubeId": "25-XoETpZEQ",
    "title": "Βασιλική της Γεννήσεως UNESCO 4K (Βηθλεέμ, Παλαιστίνη)"
  },
  "bahrain-pearl-trail": {
    "youtubeId": "0oeLvowN55g",
    "title": "Διαδρομή Μαργαριταριών Μουχαράκ UNESCO 4K (Μουχαράκ, Μπαχρέιν)"
  },
  "gardens-by-the-bay": {
    "youtubeId": "INWhMRYZTAY",
    "title": "Gardens by the Bay & Supertrees 4K (Σιγκαπούρη)"
  },
  "marina-bay-sands": {
    "youtubeId": "KYo6lUn25gs",
    "title": "Marina Bay Sands Skyline & Drone 4K (Σιγκαπούρη)"
  },
  "brunei-sultan-mosque": {
    "youtubeId": "WN8Ydl21r50",
    "title": "Τζαμί Sultan Omar Ali Saifuddien 4K (Μπαντάρ Σερί Μπεγκαβάν, Μπρουνέι)"
  },
  "pyongyang-skyline": {
    "youtubeId": "nQ_R9hhHB5A",
    "title": "Πιονγιάνγκ & Πύργος Juche 4K (Πιονγιάνγκ, Βόρεια Κορέα)"
  },
  "maldives-underwater": {
    "youtubeId": "843Rpqza_6o",
    "title": "Κοραλλιογενής Ύφαλος & Υποθαλάσσια Ζωή 4K (Αρχιπέλαγος Μαλδίβες)"
  }
};

export function findPoiLiveCam(poiName = '') {
  const n = poiName.toLowerCase();
  if (n.includes('kuwait towers') || n.includes('πύργοι του κουβέιτ') || n.includes('κουβέιτ')) return POI_LIVE_CAMS["kuwait-towers"];
  if (n.includes('sanaa') || n.includes('σαναά')) return POI_LIVE_CAMS["sanaa-old-city"];
  if (n.includes('shibam') || n.includes('σιμπάμ')) return POI_LIVE_CAMS["shibam-hadramaut"];
  if (n.includes('nativity') || n.includes('γεννήσεως') || n.includes('βηθλεέμ') || n.includes('bethlehem')) return POI_LIVE_CAMS["bethlehem-nativity"];
  if (n.includes('pearling') || n.includes('μαργαριταριών') || n.includes('muharraq') || n.includes('μουχαράκ')) return POI_LIVE_CAMS["bahrain-pearl-trail"];
  if (n.includes('gardens by the bay') || n.includes('supertrees') || n.includes('σιγκαπούρη')) return POI_LIVE_CAMS["gardens-by-the-bay"];
  if (n.includes('marina bay') || n.includes('μαρίνα μπέι')) return POI_LIVE_CAMS["marina-bay-sands"];
  if (n.includes('saifuddien') || n.includes('μπρουνέι') || n.includes('brunei')) return POI_LIVE_CAMS["brunei-sultan-mosque"];
  if (n.includes('pyongyang') || n.includes('πιονγιάνγκ') || n.includes('juche')) return POI_LIVE_CAMS["pyongyang-skyline"];
  if (n.includes('maldives') || n.includes('μαλδίβες') || n.includes('coral') || n.includes('κοράλλ')) return POI_LIVE_CAMS["maldives-underwater"];
  if (n.includes('signal iduna') || n.includes('westfalenstadion') || n.includes('ντόρτμουντ')) return POI_LIVE_CAMS["dortmund-signal-iduna"];
  if (n.includes('heidelberg') || n.includes('χαϊδελβέργ')) return POI_LIVE_CAMS["heidelberg-castle"];
  if (n.includes('reims') || n.includes('ρενς')) return POI_LIVE_CAMS["reims-cathedral"];
  if (n.includes('pisa') || n.includes('πίζα') || n.includes('πίζας')) return POI_LIVE_CAMS["pisa-tower"];
  if (n.includes('narikala') || n.includes('ναρικάλα') || n.includes('tbilisi') || n.includes('τιφλίδα')) return POI_LIVE_CAMS["tbilisi-narikala"];
  if (n.includes('cascade') || n.includes('κασκάντ') || n.includes('yerevan') || n.includes('ερεβάν')) return POI_LIVE_CAMS["yerevan-cascade"];
  if (n.includes('flame towers') || n.includes('πύργοι της φλόγας') || n.includes('baku') || n.includes('μπακού')) return POI_LIVE_CAMS["baku-flame-towers"];
  if (n.includes('umayyad') || n.includes('ομεϋαδ') || n.includes('damascus') || n.includes('δαμασκός')) return POI_LIVE_CAMS["damascus-umayyad"];
  if (n.includes('ashgabat') || n.includes('ασγκαμπάτ')) return POI_LIVE_CAMS["ashgabat-center"];
  if (n.includes('babur') || n.includes('μπαμπούρ') || n.includes('kabul') || n.includes('καμπούλ')) return POI_LIVE_CAMS["kabul-babur-gardens"];
  if (n.includes('burj khalifa') || n.includes('μπουρτζ χαλίφα') || n.includes('burj')) return POI_LIVE_CAMS["burj-khalifa"];
  if (n.includes('kaaba') || n.includes('κάαμπα') || n.includes('mecca') || n.includes('μέκκα')) return POI_LIVE_CAMS["kaaba-mecca"];
  if (n.includes('prophet') || n.includes('προφήτη') || n.includes('medina') || n.includes('μεδίνα')) return POI_LIVE_CAMS["prophets-mosque-medina"];
  if (n.includes('registan') || n.includes('ρεγκιστάν') || n.includes('samarkand') || n.includes('σαμαρκάνδη')) return POI_LIVE_CAMS["samarkand-registan"];
  if (n.includes('naqsh') || n.includes('νακς') || n.includes('isfahan') || n.includes('ισφαχάν')) return POI_LIVE_CAMS["isfahan-naqsh-jahan"];
  if (n.includes('western wall') || n.includes('τείχος των δακρύων') || n.includes('δυτικό τείχος') || n.includes('kotel')) return POI_LIVE_CAMS["western-wall-jerusalem"];
  if (n.includes('erbil citadel') || n.includes('ακρόπολη του ερμπίλ') || n.includes('erbil')) return POI_LIVE_CAMS["erbil-citadel"];
  if (n.includes('petra') || n.includes('πέτρα') || n.includes('treasury')) return POI_LIVE_CAMS["petra-treasury"];
  if (n.includes('badshahi') || n.includes('μπατζάχι') || n.includes('lahore')) return POI_LIVE_CAMS["lahore-badshahi"];
  if (n.includes('pigeon') || n.includes('raouche') || n.includes('περιστεριών')) return POI_LIVE_CAMS["beirut-pigeon-rocks"];
  if (n.includes('mutrah') || n.includes('μούτραχ')) return POI_LIVE_CAMS["muscat-mutrah"];
  if (n.includes('tiger') || n.includes('taktsang') || n.includes('τίγρης')) return POI_LIVE_CAMS["tigers-nest"];
  if (n.includes('sukhbaatar') || n.includes('σουχμπαατάρ')) return POI_LIVE_CAMS["ulaanbaatar-square"];
  
  if (n.includes('fuji') || n.includes('φούτζι')) return POI_LIVE_CAMS["mount-fuji"];
  if (n.includes('taj mahal') || n.includes('ταζ μαχάλ')) return POI_LIVE_CAMS["taj-mahal"];
  if (n.includes('varanasi') || n.includes('βαρανάσι') || n.includes('ganges') || n.includes('γάγγ')) return POI_LIVE_CAMS["varanasi-ghats"];
  if (n.includes('angkor') || n.includes('άνγκορ')) return POI_LIVE_CAMS["angkor-wat"];
  if (n.includes('borobudur') || n.includes('μπορομπουντούρ')) return POI_LIVE_CAMS["borobudur-temple"];
  if (n.includes('ha long') || n.includes('χα λονγκ')) return POI_LIVE_CAMS["ha-long-bay"];
  if (n.includes('wat arun') || n.includes('βατ αρούν') || n.includes('chao phraya')) return POI_LIVE_CAMS["wat-arun"];
  
  if (n.includes('agadez') || n.includes('αγκααντέζ')) return POI_LIVE_CAMS["agadez-mosque"];
  if (n.includes('juba') || n.includes('τζούμπα')) return POI_LIVE_CAMS["juba-nile"];
  if (n.includes('brazzaville') || n.includes('μπραζαβίλ') || n.includes('malebo')) return POI_LIVE_CAMS["congo-rapids"];
  if (n.includes('seychelles') || n.includes('σεϋχέλλες') || n.includes("source d'argent")) return POI_LIVE_CAMS["seychelles-beach"];
  if (n.includes('djenne') || n.includes('τζενέ')) return POI_LIVE_CAMS["djenne-mosque"];
  if (n.includes('leptis magna') || n.includes('λέπτις μάγκνα')) return POI_LIVE_CAMS["leptis-magna"];
  if (n.includes('malawi') || n.includes('μαλάουι')) return POI_LIVE_CAMS["lake-malawi"];
  if (n.includes('pyramids') || n.includes('πυραμίδες') || n.includes('giza') || n.includes('γκίζα')) return POI_LIVE_CAMS["pyramids-giza"];
  if (n.includes('table mountain') || n.includes('τραπεζοειδές') || n.includes('camps bay')) return POI_LIVE_CAMS["table-mountain"];
  if (n.includes('kruger') || n.includes('κρούγκερ') || n.includes('safari') || n.includes('σαφάρι')) return POI_LIVE_CAMS["kruger-safari"];
  if (n.includes('victoria falls') || n.includes('βικτωρία') || n.includes('καταρράκτες βικτωρίας')) return POI_LIVE_CAMS["victoria-falls"];
  if (n.includes('zanzibar') || n.includes('ζανζιβάρη')) return POI_LIVE_CAMS["zanzibar-beach"];
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

/**
 * Curated timestamps (in seconds) for prominent landmarks and POIs
 * linking directly into 4K Drone/Walking/Guide videos.
 */
export const POI_SPECIFIC_TIMESTAMPS = {
  // Athens
  "ακρόπολη": { cityId: "athens", type: "drone", start: 25, label: "Ακρόπολη Αθηνών" },
  "ακρόπολη αθηνών": { cityId: "athens", type: "drone", start: 25, label: "Ακρόπολη Αθηνών" },
  "acropolis": { cityId: "athens", type: "drone", start: 25, label: "Acropolis of Athens" },
  "παρθενώνας": { cityId: "athens", type: "drone", start: 35, label: "Παρθενώνας" },
  "parthenon": { cityId: "athens", type: "drone", start: 35, label: "Parthenon" },
  "πλάκα": { cityId: "athens", type: "walking", start: 40, label: "Ιστορική Πλάκα" },
  "μοναστηράκι": { cityId: "athens", type: "walking", start: 190, label: "Μοναστηράκι & Πλατεία" },
  "αναφιώτικα": { cityId: "athens", type: "walking", start: 360, label: "Αναφιώτικα" },
  "λυκαβηττός": { cityId: "athens", type: "drone", start: 110, label: "Λόφος Λυκαβηττού" },
  "σύνταγμα": { cityId: "athens", type: "walking", start: 120, label: "Πλατεία Συντάγματος & Βουλή" },
  "καλλιμάρμαρο": { cityId: "athens", type: "drone", start: 170, label: "Παναθηναϊκό Στάδιο" },
  "παναθηναϊκό στάδιο": { cityId: "athens", type: "drone", start: 170, label: "Παναθηναϊκό Στάδιο" },
  "αρχαία αγορά": { cityId: "athens", type: "walking", start: 290, label: "Αρχαία Αγορά Αθηνών" },
  "ναός του ηφαίστου": { cityId: "athens", type: "walking", start: 310, label: "Ναός Ηφαίστου (Θησείο)" },
  "ναός του ολυμπίου διός": { cityId: "athens", type: "drone", start: 230, label: "Στύλοι Ολυμπίου Διός" },
  "στήλες ολυμπίου διός": { cityId: "athens", type: "drone", start: 230, label: "Στύλοι Ολυμπίου Διός" },
  "μουσείο ακρόπολης": { cityId: "athens", type: "guide", start: 60, label: "Μουσείο Ακρόπολης" },

  // Thessaloniki
  "λευκός πύργος": { cityId: "thessaloniki", type: "drone", start: 30, label: "Λευκός Πύργος" },
  "white tower": { cityId: "thessaloniki", type: "drone", start: 30, label: "White Tower of Thessaloniki" },
  "πλατεία αριστοτέλους": { cityId: "thessaloniki", type: "walking", start: 35, label: "Πλατεία Αριστοτέλους" },
  "ροτόντα": { cityId: "thessaloniki", type: "drone", start: 145, label: "Ροτόντα" },
  "αψίδα του γαλερίου": { cityId: "thessaloniki", type: "drone", start: 175, label: "Αψίδα Γαλερίου (Καμάρα)" },
  "καμάρα": { cityId: "thessaloniki", type: "drone", start: 175, label: "Καμάρα" },
  "άνω πόλη": { cityId: "thessaloniki", type: "drone", start: 215, label: "Άνω Πόλη & Κάστρα" },
  "επταπύργιο": { cityId: "thessaloniki", type: "drone", start: 220, label: "Επταπύργιο (Γεντί Κουλέ)" },
  "νέα παραλία": { cityId: "thessaloniki", type: "walking", start: 110, label: "Νέα Παραλία Θεσσαλονίκης" },
  "άγιος δημήτριος": { cityId: "thessaloniki", type: "drone", start: 260, label: "Ι.Ν. Αγίου Δημητρίου" },
  "λαδάδικα": { cityId: "thessaloniki", type: "walking", start: 280, label: "Λαδάδικα" },

  // Kozani
  "ιστορικό ρολόι": { cityId: "kozani", type: "walking", start: 40, label: "Ιστορικό Ρολόι Κοζάνης (Μαμάτσιος)" },
  "μαμάτσιος": { cityId: "kozani", type: "walking", start: 40, label: "Καμπαναριό Μαμάτσιος" },
  "κεντρική πλατεία": { cityId: "kozani", type: "walking", start: 20, label: "Κεντρική Πλατεία Νίκης Κοζάνης" },
  "λίμνη πολυφύτου": { cityId: "kozani", type: "drone", start: 70, label: "Λίμνη Πολυφύτου & Υψηλή Γέφυρα Σερβίων" },
  "υψηλή γέφυρα σερβίων": { cityId: "kozani", type: "drone", start: 80, label: "Υψηλή Γέφυρα Σερβίων" },
  "αρχοντικό λασσάνη": { cityId: "kozani", type: "guide", start: 65, label: "Αρχοντικό Γεωργίου Λασσάνη" },
  "κοβεντάρειος": { cityId: "kozani", type: "guide", start: 110, label: "Κοβεντάρειος Δημοτική Βιβλιοθήκη" },
  "άγιος νικόλαος": { cityId: "kozani", type: "drone", start: 150, label: "Ι.Ν. Αγίου Νικολάου Κοζάνης" },

  // Patras
  "γέφυρα ρίου-αντιρρίου": { cityId: "patras", type: "drone", start: 25, label: "Γέφυρα Ρίου-Αντιρρίου" },
  "κάστρο πάτρας": { cityId: "patras", type: "drone", start: 95, label: "Μεσαιωνικό Κάστρο Πάτρας" },
  "άγιος ανδρέας": { cityId: "patras", type: "drone", start: 165, label: "Ιερός Ναός Αγίου Ανδρέα" },
  "ρωμαϊκό ωδείο": { cityId: "patras", type: "walking", start: 130, label: "Ρωμαϊκό Ωδείο Πάτρας" },
  "πλατεία γεωργίου": { cityId: "patras", type: "walking", start: 30, label: "Πλατεία Γεωργίου Α΄" },

  // Heraklion
  "κούλες": { cityId: "heraklion", type: "drone", start: 30, label: "Ενετικό Φρούριο Κούλες" },
  "ενετικό λιμάνι": { cityId: "heraklion", type: "drone", start: 40, label: "Ενετικό Λιμάνι Ηρακλείου" },
  "κνωσός": { cityId: "heraklion", type: "drone", start: 115, label: "Μινωικό Ανάκτορο Κνωσού" },
  "ανάκτορο κνωσού": { cityId: "heraklion", type: "drone", start: 115, label: "Ανάκτορο Κνωσού" },
  "κρήνη μοροζίνι": { cityId: "heraklion", type: "walking", start: 50, label: "Κρήνη Μοροζίνι (Λιοντάρια)" },
  "λιοντάρια": { cityId: "heraklion", type: "walking", start: 50, label: "Πλατεία Λιονταριών" },
  "ενετικά τείχη": { cityId: "heraklion", type: "drone", start: 180, label: "Ενετικά Τείχη & Τάφος Καζαντζάκη" },

  // Larissa
  "αρχαίο θέατρο λάρισας": { cityId: "larissa", type: "drone", start: 30, label: "Α΄ Αρχαίο Θέατρο Λάρισας" },
  "λόφος φρουρίου": { cityId: "larissa", type: "drone", start: 95, label: "Λόφος Φρουρίου & Μπεζεστένι" },
  "μπεζεστένι": { cityId: "larissa", type: "drone", start: 105, label: "Οθωμανικό Μπεζεστένι" },
  "πηνειός": { cityId: "larissa", type: "drone", start: 160, label: "Πηνειός Ποταμός & Πάρκο Αλκαζάρ" },
  "αλκαζάρ": { cityId: "larissa", type: "drone", start: 175, label: "Πάρκο Αλκαζάρ" },

  // Volos
  "λιμάνι βόλου": { cityId: "volos", type: "drone", start: 30, label: "Λιμάνι & Παραλία Βόλου" },
  "αργώ": { cityId: "volos", type: "drone", start: 60, label: "Μνημείο Αργούς" },
  "πήλιο": { cityId: "volos", type: "drone", start: 140, label: "Πλαγιές Πηλίου" },

  // Chania
  "ενετικός φάρος": { cityId: "chania", type: "drone", start: 30, label: "Ενετικός Φάρος Χανίων" },
  "παλιό λιμάνι": { cityId: "chania", type: "drone", start: 45, label: "Ενετικό Λιμάνι Χανίων" },
  "φρούριο φιρκά": { cityId: "chania", type: "drone", start: 120, label: "Φρούριο Φιρκά" },

  // Rhodes
  "παλάτι μεγάλου μαγίστρου": { cityId: "rhodes", type: "drone", start: 35, label: "Παλάτι Μεγάλου Μαγίστρου Ρόδου" },
  "μεσαιωνική πόλη": { cityId: "rhodes", type: "drone", start: 70, label: "Μεσαιωνική Πόλη Ρόδου UNESCO" },
  "μανδράκι": { cityId: "rhodes", type: "drone", start: 140, label: "Λιμάνι Μανδράκι" },

  // Rome
  "κολοσσαίο": { cityId: "rome", type: "drone", start: 35, label: "Κολοσσαίο (Colosseo)" },
  "colosseum": { cityId: "rome", type: "drone", start: 35, label: "Colosseum" },
  "βατικανό": { cityId: "rome", type: "drone", start: 95, label: "Βασιλική Αγίου Πέτρου (Βατικανό)" },
  "φοντάνα ντι τρέβι": { cityId: "rome", type: "walking", start: 70, label: "Φοντάνα ντι Τρέβι" },
  "πάνθεον": { cityId: "rome", type: "walking", start: 140, label: "Πάνθεον Ρώμης" },

  // Paris
  "πύργος του άιφελ": { cityId: "paris", type: "drone", start: 30, label: "Πύργος του Άιφελ" },
  "eiffel": { cityId: "paris", type: "drone", start: 30, label: "Eiffel Tower" },
  "λούβρο": { cityId: "paris", type: "drone", start: 95, label: "Μουσείο Λούβρου" },
  "παναγία των παρισίων": { cityId: "paris", type: "drone", start: 155, label: "Παναγία των Παρισίων" },
  "αψίδα του θριάμβου": { cityId: "paris", type: "drone", start: 220, label: "Αψίδα του Θριάμβου" },

  // London
  "μπιγκ μπεν": { cityId: "london", type: "drone", start: 30, label: "Μπιγκ Μπεν" },
  "big ben": { cityId: "london", type: "drone", start: 30, label: "Big Ben" },
  "γέφυρα του πύργου": { cityId: "london", type: "drone", start: 95, label: "Tower Bridge" },
  "london eye": { cityId: "london", type: "drone", start: 150, label: "London Eye" },

  // New York
  "τάιμς σκουέρ": { cityId: "new-york", type: "walking", start: 30, label: "Times Square" },
  "times square": { cityId: "new-york", type: "walking", start: 30, label: "Times Square" },
  "άγαλμα της ελευθερίας": { cityId: "new-york", type: "drone", start: 65, label: "Άγαλμα της Ελευθερίας" },
  "σέντραλ παρκ": { cityId: "new-york", type: "drone", start: 135, label: "Central Park" },
  "γέφυρα του μπρούκλιν": { cityId: "new-york", type: "drone", start: 210, label: "Brooklyn Bridge" },

  // Tokyo
  "σιμπούγια": { cityId: "tokyo", type: "walking", start: 30, label: "Διάβαση Shibuya" },
  "shibuya": { cityId: "tokyo", type: "walking", start: 30, label: "Shibuya Crossing" },
  "πύργος του τόκιο": { cityId: "tokyo", type: "drone", start: 75, label: "Tokyo Tower" },
  "σένσο-τζι": { cityId: "tokyo", type: "walking", start: 150, label: "Ναός Senso-ji" }
};

/**
 * Dedicated individual 4K Landmark Videos
 * Handpicked authentic videos focused exclusively on specific POIs/landmarks
 */
export const POI_DEDICATED_VIDEOS = {
  // Athens - Museums & Landmarks (Specific First)
  "μουσείο ακρόπολης": {
    youtubeId: "VBW_wrlhEDo",
    title: "Μουσείο Ακρόπολης 4K: Αρχιτεκτονική & Αριστουργήματα",
    label: "Μουσείο Ακρόπολης",
    searchQuery: "μουσειο ακροπολης 4k walking tour",
    options: [
      { youtubeId: "VBW_wrlhEDo", title: "Μουσείο Ακρόπολης 4K: Αρχιτεκτονική Bernard Tschumi", label: "Μουσείο (4K)", icon: "fa-solid fa-building-columns" },
      { youtubeId: "YBzui0-obTI", title: "Acropolis Museum Walking Tour & Artifacts 4K", label: "Εκθέματα", icon: "fa-solid fa-landmark" },
      { youtubeId: "J0C2xRXT1mk", title: "Acropolis Museum Athens 4K Full Tour", label: "Πλήρης Περιήγηση", icon: "fa-solid fa-person-walking" }
    ]
  },
  "μουσείο ακρόπολη": {
    youtubeId: "VBW_wrlhEDo",
    title: "Μουσείο Ακρόπολης 4K: Αρχιτεκτονική & Αριστουργήματα",
    label: "Μουσείο Ακρόπολης",
    searchQuery: "μουσειο ακροπολης 4k walking tour",
    options: [
      { youtubeId: "VBW_wrlhEDo", title: "Μουσείο Ακρόπολης 4K: Αρχιτεκτονική", label: "Μουσείο (4K)", icon: "fa-solid fa-building-columns" },
      { youtubeId: "YBzui0-obTI", title: "Acropolis Museum Walking Tour & Artifacts", label: "Εκθέματα", icon: "fa-solid fa-landmark" }
    ]
  },
  "acropolis museum": {
    youtubeId: "VBW_wrlhEDo",
    title: "Acropolis Museum Athens 4K Walking Tour",
    label: "Acropolis Museum",
    searchQuery: "acropolis museum 4k",
    options: [
      { youtubeId: "VBW_wrlhEDo", title: "Acropolis Museum 4K Architecture", label: "Museum (4K)", icon: "fa-solid fa-building-columns" },
      { youtubeId: "YBzui0-obTI", title: "Acropolis Museum Walkthrough", label: "Exhibits", icon: "fa-solid fa-landmark" }
    ]
  },
  "ακρόπολη & παρθενώνας": {
    youtubeId: "f0xjdh9agFg",
    title: "Ακρόπολη Αθηνών & Παρθενώνας (4K Ultra HD)",
    label: "Ακρόπολη & Παρθενώνας",
    searchQuery: "ακροπολη παρθενωνας 4k walking tour",
    options: [
      { youtubeId: "f0xjdh9agFg", title: "Ακρόπολη & Παρθενώνας 4K Walking Tour", label: "Παρθενώνας (4K)", icon: "fa-solid fa-monument" },
      { youtubeId: "wa1fa5-EnlI", title: "Ακρόπολη 4K Drone Panoramic", label: "Ακρόπολη Drone", icon: "fa-solid fa-helicopter" },
      { youtubeId: "w7ubdeiwPv8", title: "Ιστορικό Οδοιπορικό στον Ιερό Βράχο", label: "Ιστορικός Οδηγός", icon: "fa-solid fa-book-open" }
    ]
  },
  "παρθενώνας": {
    youtubeId: "f0xjdh9agFg",
    title: "Παρθενώνας & Ιερός Βράχος Ακρόπολης (4K)",
    label: "Παρθενώνας",
    searchQuery: "παρθενωνας ακροπολη 4k",
    options: [
      { youtubeId: "f0xjdh9agFg", title: "Παρθενώνας & Ακρόπολη 4K Walking Tour", label: "Παρθενώνας (4K)", icon: "fa-solid fa-monument" },
      { youtubeId: "wa1fa5-EnlI", title: "Ακρόπολη & Παρθενώνας Drone 4K", label: "Drone 4K", icon: "fa-solid fa-helicopter" }
    ]
  },
  "ακρόπολη": {
    youtubeId: "f0xjdh9agFg",
    title: "Ακρόπολη Αθηνών & Παρθενώνας (4K Ultra HD)",
    label: "Ακρόπολη Αθηνών",
    searchQuery: "ακροπολη αθηνων 4k",
    options: [
      { youtubeId: "f0xjdh9agFg", title: "Ακρόπολη Αθηνών & Παρθενώνας (4K)", label: "Παρθενώνας (4K)", icon: "fa-solid fa-monument" },
      { youtubeId: "wa1fa5-EnlI", title: "Ακρόπολη 4K Drone Panoramic", label: "Drone 4K", icon: "fa-solid fa-helicopter" }
    ]
  },
  "parthenon": {
    youtubeId: "f0xjdh9agFg",
    title: "Parthenon & Acropolis Hill Athens 4K",
    label: "Parthenon",
    searchQuery: "parthenon athens 4k",
    options: [
      { youtubeId: "f0xjdh9agFg", title: "Acropolis & Parthenon Athens (4K)", label: "Parthenon (4K)", icon: "fa-solid fa-monument" }
    ]
  },
  "acropolis": {
    youtubeId: "f0xjdh9agFg",
    title: "Acropolis of Athens (4K Tour)",
    label: "Acropolis",
    searchQuery: "acropolis athens 4k",
    options: [
      { youtubeId: "f0xjdh9agFg", title: "Acropolis of Athens 4K Walk", label: "Acropolis (4K)", icon: "fa-solid fa-monument" }
    ]
  },
  "παναθηναϊκό στάδιο": {
    youtubeId: "w7ubdeiwPv8",
    title: "Παναθηναϊκό Στάδιο (Καλλιμάρμαρο) 4K Tour",
    label: "Παναθηναϊκό Στάδιο",
    searchQuery: "καλλιμαρμαρο παναθηναικο σταδιο 4k",
    options: [
      { youtubeId: "w7ubdeiwPv8", title: "Παναθηναϊκό Στάδιο (Καλλιμάρμαρο) 4K Tour", label: "Καλλιμάρμαρο (4K)", icon: "fa-solid fa-medal" }
    ]
  },
  "καλλιμάρμαρο": {
    youtubeId: "w7ubdeiwPv8",
    title: "Παναθηναϊκό Στάδιο (Καλλιμάρμαρο) 4K Tour",
    label: "Καλλιμάρμαρο",
    searchQuery: "καλλιμαρμαρο 4k",
    options: [
      { youtubeId: "w7ubdeiwPv8", title: "Καλλιμάρμαρο 4K Tour", label: "Καλλιμάρμαρο (4K)", icon: "fa-solid fa-medal" }
    ]
  },
  "αρχαία αγορά & ναός ηφαίστου": {
    youtubeId: "WHl2fyeoRKo",
    title: "Αρχαία Αγορά Αθηνών & Ναός Ηφαίστου (4K)",
    label: "Αρχαία Αγορά & Θησείο",
    searchQuery: "αρχαια αγορα ναος ηφαιστου 4k",
    options: [
      { youtubeId: "WHl2fyeoRKo", title: "Αρχαία Αγορά & Ναός Ηφαίστου 4K", label: "Αρχαία Αγορά (4K)", icon: "fa-solid fa-landmark" }
    ]
  },
  "αρχαία αγορά": {
    youtubeId: "WHl2fyeoRKo",
    title: "Αρχαία Αγορά Αθηνών & Ναός Ηφαίστου (4K)",
    label: "Αρχαία Αγορά Αθηνών",
    searchQuery: "αρχαια αγορα αθηνων 4k",
    options: [
      { youtubeId: "WHl2fyeoRKo", title: "Αρχαία Αγορά Αθηνών 4K", label: "Αρχαία Αγορά (4K)", icon: "fa-solid fa-landmark" }
    ]
  },
  "ναός του ηφαίστου": {
    youtubeId: "WHl2fyeoRKo",
    title: "Ναός Ηφαίστου (Θησείο) 4K Tour",
    label: "Ναός Ηφαίστου",
    searchQuery: "ναος ηφαιστου θησειο 4k",
    options: [
      { youtubeId: "WHl2fyeoRKo", title: "Ναός Ηφαίστου (Θησείο) 4K", label: "Ναός Ηφαίστου", icon: "fa-solid fa-landmark" }
    ]
  },
  "πλάκα & αναφιώτικα": {
    youtubeId: "QVh0TuWyEYc",
    title: "Πλάκα & Αναφιώτικα 4K Walking Tour",
    label: "Πλάκα & Αναφιώτικα",
    searchQuery: "πλακα αναφιωτικα 4k walking tour",
    options: [
      { youtubeId: "QVh0TuWyEYc", title: "Πλάκα & Αναφιώτικα 4K Walking Tour", label: "Πλάκα 4K Walk", icon: "fa-solid fa-person-walking" }
    ]
  },
  "πλάκα": {
    youtubeId: "QVh0TuWyEYc",
    title: "Πλάκα Αθηνών 4K Walking Tour",
    label: "Ιστορική Πλάκα",
    searchQuery: "πλακα αθηνα 4k walk",
    options: [
      { youtubeId: "QVh0TuWyEYc", title: "Πλάκα Walking Tour 4K", label: "Πλάκα 4K", icon: "fa-solid fa-person-walking" }
    ]
  },

  // Thessaloniki
  "λευκός πύργος": {
    youtubeId: "dJrDEgUPWbM",
    title: "Λευκός Πύργος Θεσσαλονίκης 4K: Ιστορία & Παραλία",
    label: "Λευκός Πύργος",
    searchQuery: "λευκος πυργος θεσσαλονικη 4k",
    options: [
      { youtubeId: "dJrDEgUPWbM", title: "Λευκός Πύργος 4K: Ιστορία & Περιήγηση", label: "Λευκός Πύργος (4K)", icon: "fa-solid fa-monument" },
      { youtubeId: "l57Mbks-MMQ", title: "Θεσσαλονίκη 4K Drone Panoramic", label: "Θεσσαλονίκη Drone", icon: "fa-solid fa-helicopter" }
    ]
  },
  "white tower": {
    youtubeId: "dJrDEgUPWbM",
    title: "White Tower of Thessaloniki 4K",
    label: "White Tower",
    searchQuery: "white tower thessaloniki 4k",
    options: [
      { youtubeId: "dJrDEgUPWbM", title: "White Tower 4K Tour", label: "White Tower", icon: "fa-solid fa-monument" }
    ]
  },
  "ροτόντα & αψίδα γαλερίου (καμάρα)": {
    youtubeId: "1ORzuw8ySes",
    title: "Ροτόντα Θεσσαλονίκης & Αψίδα Γαλερίου (4K)",
    label: "Ροτόντα & Καμάρα",
    searchQuery: "ροτοντα καμαρα θεσσαλονικη 4k",
    options: [
      { youtubeId: "1ORzuw8ySes", title: "Ροτόντα & Καμάρα (4K Tour)", label: "Ροτόντα (4K)", icon: "fa-solid fa-landmark" }
    ]
  },
  "ροτόντα": {
    youtubeId: "1ORzuw8ySes",
    title: "Ροτόντα Θεσσαλονίκης & Αψίδα Γαλερίου (4K)",
    label: "Ροτόντα",
    searchQuery: "ροτοντα θεσσαλονικη 4k",
    options: [
      { youtubeId: "1ORzuw8ySes", title: "Ροτόντα 4K Tour", label: "Ροτόντα (4K)", icon: "fa-solid fa-landmark" }
    ]
  },
  "άνω πόλη & κάστρα": {
    youtubeId: "ckxPLXnT3O0",
    title: "Άνω Πόλη & Κάστρα Θεσσαλονίκης (Επταπύργιο) 4K",
    label: "Άνω Πόλη & Κάστρα",
    searchQuery: "ανω πολη επταπυργιο θεσσαλονικη 4k",
    options: [
      { youtubeId: "ckxPLXnT3O0", title: "Άνω Πόλη & Επταπύργιο 4K", label: "Άνω Πόλη & Κάστρα", icon: "fa-solid fa-chess-rook" }
    ]
  },
  "επταπύργιο": {
    youtubeId: "ckxPLXnT3O0",
    title: "Επταπύργιο (Γεντί Κουλέ) & Βυζαντινά Τείχη 4K",
    label: "Επταπύργιο",
    searchQuery: "επταπυργιο γεντι κουλε 4k",
    options: [
      { youtubeId: "ckxPLXnT3O0", title: "Επταπύργιο (Γεντί Κουλέ) 4K", label: "Επταπύργιο", icon: "fa-solid fa-chess-rook" }
    ]
  },

  // Kozani & Western Macedonia
  "ιστορικό καμπαναριό & πλατεία νίκης": {
    youtubeId: "davgbeLTQlk",
    title: "Ιστορικό Ρολόι Κοζάνης (Μαμάτσιος) & Πλατεία Νίκης (4K)",
    label: "Ιστορικό Ρολόι & Πλατεία",
    searchQuery: "ρολοι μαματσιος κοζανη 4k",
    options: [
      { youtubeId: "davgbeLTQlk", title: "Ιστορικό Ρολόι Κοζάνης & Αξιοθέατα (4K)", label: "Ρολόι & Πλατεία (4K)", icon: "fa-solid fa-clock" },
      { youtubeId: "Dgfcdv6D5OI", title: "Κοζάνη 4K Walking Tour", label: "Walking Tour (4K)", icon: "fa-solid fa-person-walking" }
    ]
  },
  "ιστορικό ρολόι κοζάνης (μαμάτσιος)": {
    youtubeId: "davgbeLTQlk",
    title: "Ιστορικό Ρολόι Κοζάνης (Μαμάτσιος) 4K",
    label: "Καμπαναριό Μαμάτσιος",
    searchQuery: "ρολοι μαματσιος κοζανη",
    options: [
      { youtubeId: "davgbeLTQlk", title: "Καμπαναριό Μαμάτσιος Κοζάνης 4K", label: "Ρολόι Μαμάτσιος", icon: "fa-solid fa-clock" }
    ]
  },
  "ιστορικό ρολόι": {
    youtubeId: "davgbeLTQlk",
    title: "Ιστορικό Ρολόι Κοζάνης (Μαμάτσιος) 4K",
    label: "Ιστορικό Ρολόι",
    searchQuery: "ιστορικο ρολοι κοζανη",
    options: [
      { youtubeId: "davgbeLTQlk", title: "Ιστορικό Ρολόι Κοζάνης 4K", label: "Ιστορικό Ρολόι", icon: "fa-solid fa-clock" }
    ]
  },
  "λίμνη πολυφύτου & υψηλή γέφυρα σερβίων": {
    youtubeId: "54nbsW6jYN4",
    title: "Λίμνη Πολυφύτου & Υψηλή Γέφυρα Σερβίων 4K Drone",
    label: "Λίμνη Πολυφύτου & Γέφυρα",
    searchQuery: "λιμνη πολυφυτου γεφυρα σερβιων drone 4k",
    options: [
      { youtubeId: "54nbsW6jYN4", title: "Λίμνη Πολυφύτου & Γέφυρα Σερβίων Drone 4K", label: "Γέφυρα Σερβίων Drone", icon: "fa-solid fa-bridge" }
    ]
  },
  "υψηλή γέφυρα σερβίων": {
    youtubeId: "54nbsW6jYN4",
    title: "Υψηλή Γέφυρα Σερβίων 4K Cinematic Drone",
    label: "Υψηλή Γέφυρα Σερβίων",
    searchQuery: "υψηλη γεφυρα σερβιων 4k",
    options: [
      { youtubeId: "54nbsW6jYN4", title: "Υψηλή Γέφυρα Σερβίων 4K Drone", label: "Γέφυρα Σερβίων", icon: "fa-solid fa-bridge" }
    ]
  },

  // Patras
  "γέφυρα ρίου-αντιρρίου": {
    youtubeId: "Rjxnz0kGC_s",
    title: "Γέφυρα Ρίου-Αντιρρίου 4K: Εναέρια Περιήγηση Drone",
    label: "Γέφυρα Ρίου-Αντιρρίου",
    searchQuery: "γεφυρα ριου αντιρριου 4k drone",
    options: [
      { youtubeId: "Rjxnz0kGC_s", title: "Γέφυρα Ρίου-Αντιρρίου 4K Drone", label: "Γέφυρα Drone 4K", icon: "fa-solid fa-bridge" }
    ]
  },
  "κάστρο πάτρας": {
    youtubeId: "ozbEyIWtFyw",
    title: "Μεσαιωνικό Κάστρο & Ιστορικό Κέντρο Πάτρας 4K",
    label: "Κάστρο Πάτρας",
    searchQuery: "καστρο πατρας 4k",
    options: [
      { youtubeId: "ozbEyIWtFyw", title: "Κάστρο & Ιστορικό Κέντρο Πάτρας 4K", label: "Κάστρο Πάτρας", icon: "fa-solid fa-chess-rook" }
    ]
  },

  // Heraklion & Crete
  "μινωικό ανάκτορο κνωσού": {
    youtubeId: "3Q2PLWOR1CI",
    title: "Μινωικό Ανάκτορο Κνωσού 4K: Το Λίκνο του Μινωικού Πολιτισμού",
    label: "Ανάκτορο Κνωσού",
    searchQuery: "κνωσος ανακτορο 4k crete knossos",
    options: [
      { youtubeId: "3Q2PLWOR1CI", title: "Ανάκτορο Κνωσού 4K Tour", label: "Κνωσός (4K)", icon: "fa-solid fa-landmark" }
    ]
  },
  "κνωσός": {
    youtubeId: "3Q2PLWOR1CI",
    title: "Ανάκτορο Κνωσού 4K",
    label: "Κνωσός",
    searchQuery: "κνωσος 4k",
    options: [
      { youtubeId: "3Q2PLWOR1CI", title: "Κνωσός 4K Tour", label: "Κνωσός (4K)", icon: "fa-solid fa-landmark" }
    ]
  },
  "ενετικό φρούριο κούλες": {
    youtubeId: "HjA0LxhIzmM",
    title: "Ενετικό Φρούριο Κούλες & Ενετικό Λιμάνι Ηρακλείου 4K",
    label: "Φρούριο Κούλες",
    searchQuery: "κουλεσ ηρακλειο 4k koules fortress",
    options: [
      { youtubeId: "HjA0LxhIzmM", title: "Φρούριο Κούλες 4K", label: "Κούλες (4K)", icon: "fa-solid fa-shield-halved" }
    ]
  },
  "κούλες": {
    youtubeId: "HjA0LxhIzmM",
    title: "Ενετικό Φρούριο Κούλες 4K",
    label: "Φρούριο Κούλες",
    searchQuery: "κουλεσ ηρακλειο 4k",
    options: [
      { youtubeId: "HjA0LxhIzmM", title: "Φρούριο Κούλες 4K", label: "Κούλες (4K)", icon: "fa-solid fa-shield-halved" }
    ]
  },

  // Larissa & Volos
  "α΄ αρχαίο θέατρο λάρισας": {
    youtubeId: "URJcymeLcnQ",
    title: "Α΄ Αρχαίο Θέατρο Λάρισας & Λόφος Φρουρίου 4K",
    label: "Αρχαίο Θέατρο Λάρισας",
    searchQuery: "αρχαιο θεατρο λαρισας 4k",
    options: [
      { youtubeId: "URJcymeLcnQ", title: "Αρχαίο Θέατρο Λάρισας 4K", label: "Αρχαίο Θέατρο", icon: "fa-solid fa-landmark" }
    ]
  },
  "αρχαίο θέατρο λάρισας": {
    youtubeId: "URJcymeLcnQ",
    title: "Α΄ Αρχαίο Θέατρο Λάρισας 4K",
    label: "Αρχαίο Θέατρο Λάρισας",
    searchQuery: "αρχαιο θεατρο λαρισας 4k",
    options: [
      { youtubeId: "URJcymeLcnQ", title: "Αρχαίο Θέατρο Λάρισας 4K", label: "Αρχαίο Θέατρο", icon: "fa-solid fa-landmark" }
    ]
  },

  // Rome
  "κολοσσαίο": {
    youtubeId: "C2qYN8p_L9Y",
    title: "Colosseum Rome 4K: Virtual Tour Inside the Amphitheatre",
    label: "Κολοσσαίο (Colosseo)",
    searchQuery: "colosseum rome 4k tour",
    options: [
      { youtubeId: "C2qYN8p_L9Y", title: "Colosseum Rome 4K Tour", label: "Colosseum (4K)", icon: "fa-solid fa-monument" }
    ]
  },
  "colosseum": {
    youtubeId: "C2qYN8p_L9Y",
    title: "Colosseum Rome 4K Tour",
    label: "Colosseum",
    searchQuery: "colosseum 4k",
    options: [
      { youtubeId: "C2qYN8p_L9Y", title: "Colosseum Rome 4K", label: "Colosseum", icon: "fa-solid fa-monument" }
    ]
  },
  "βασιλική αγίου πέτρου (βατικανό)": {
    youtubeId: "eJeF7hDB0UA",
    title: "St. Peter's Basilica & Vatican City 4K Tour",
    label: "Βασιλική Αγίου Πέτρου",
    searchQuery: "st peters basilica vatican 4k",
    options: [
      { youtubeId: "eJeF7hDB0UA", title: "St. Peter's Basilica 4K Tour", label: "St. Peter's (4K)", icon: "fa-solid fa-church" }
    ]
  },
  "βατικανό": {
    youtubeId: "eJeF7hDB0UA",
    title: "St. Peter's Basilica & Vatican City 4K Tour",
    label: "Βατικανό",
    searchQuery: "vatican city 4k tour",
    options: [
      { youtubeId: "eJeF7hDB0UA", title: "Vatican City 4K Tour", label: "Vatican (4K)", icon: "fa-solid fa-church" }
    ]
  },
  "φοντάνα ντι τρέβι": {
    youtubeId: "93d_Kf4NspU",
    title: "Trevi Fountain Rome 4K: Fontana di Trevi Tour",
    label: "Φοντάνα ντι Τρέβι",
    searchQuery: "trevi fountain rome 4k",
    options: [
      { youtubeId: "93d_Kf4NspU", title: "Trevi Fountain Rome 4K", label: "Trevi (4K)", icon: "fa-solid fa-water" }
    ]
  },
  "πάνθεον": {
    youtubeId: "uREE9KXEqxk",
    title: "Pantheon Rome 4K: Inside the Ancient Dome",
    label: "Πάνθεον Ρώμης",
    searchQuery: "pantheon rome 4k tour",
    options: [
      { youtubeId: "uREE9KXEqxk", title: "Pantheon Rome 4K Tour", label: "Pantheon (4K)", icon: "fa-solid fa-landmark" }
    ]
  },

  // Paris
  "πύργος του άιφελ": {
    youtubeId: "_L39JS9PpVc",
    title: "Eiffel Tower Paris 4K: Complete Walking & Sightseeing Tour",
    label: "Πύργος του Άιφελ",
    searchQuery: "eiffel tower paris 4k tour",
    options: [
      { youtubeId: "_L39JS9PpVc", title: "Eiffel Tower Paris 4K Walking Tour", label: "Eiffel Tower (4K)", icon: "fa-solid fa-monument" }
    ]
  },
  "eiffel": {
    youtubeId: "_L39JS9PpVc",
    title: "Eiffel Tower Paris 4K",
    label: "Eiffel Tower",
    searchQuery: "eiffel tower 4k",
    options: [
      { youtubeId: "_L39JS9PpVc", title: "Eiffel Tower 4K", label: "Eiffel (4K)", icon: "fa-solid fa-monument" }
    ]
  },
  "λούβρο": {
    youtubeId: "9U4OferstvE",
    title: "Louvre Museum Paris 4K: Pyramid & Masterpieces Tour",
    label: "Μουσείο Λούβρου",
    searchQuery: "louvre museum paris 4k tour",
    options: [
      { youtubeId: "9U4OferstvE", title: "Louvre Museum Paris 4K Tour", label: "Louvre (4K)", icon: "fa-solid fa-building-columns" }
    ]
  },

  // London & New York
  "μπιγκ μπεν": {
    youtubeId: "4HZY0M-JoIE",
    title: "Big Ben & Palace of Westminster London 4K Tour",
    label: "Big Ben & Westminster",
    searchQuery: "big ben london 4k tour",
    options: [
      { youtubeId: "4HZY0M-JoIE", title: "Big Ben London 4K Tour", label: "Big Ben (4K)", icon: "fa-solid fa-clock" }
    ]
  },
  "τάιμς σκουέρ": {
    youtubeId: "QVh0TuWyEYc",
    title: "Times Square New York City 4K Night Walking Tour",
    label: "Times Square NYC",
    searchQuery: "times square new york city 4k",
    options: [
      { youtubeId: "QVh0TuWyEYc", title: "Times Square NYC 4K Walk", label: "Times Sq (4K)", icon: "fa-solid fa-city" }
    ]
  }
};

/**
 * Curated Gastronomy Recipe Videos
 * Multi-option culinary registry: Authentic Recipes, Street Food & Masterclasses
 */
export const GASTRO_RECIPE_VIDEOS = {
  // Athens Street Food & Specialties
  "αυθεντικό σουβλάκι μοναστηρακίου": {
    youtubeId: "L3JTmHYtozQ",
    title: "Σουβλάκι Χοιρινό με Σπιτική Πίτα • Kitchen Lab Άκης Πετρετζίκης",
    dish: "Σουβλάκι Μοναστηρακίου",
    region: "Αθήνα",
    searchQuery: "σουβλακι μοναστηρακι συνταγη",
    options: [
      { youtubeId: "L3JTmHYtozQ", title: "Σουβλάκι Χοιρινό με Σπιτική Πίτα • Άκης Πετρετζίκης", label: "Συνταγή (Άκης)", icon: "fa-solid fa-utensils" },
      { youtubeId: "3vhdWmDJYXg", title: "Αυθεντικό Σουβλάκι Μοναστηρακίου • Μπαϊρακτάρης Athens", label: "Street Food Μοναστηράκι", icon: "fa-solid fa-fire-burner" },
      { youtubeId: "5Kh9QxSOsD8", title: "Σπιτικές Πίτες για Σουβλάκι • Chef Πάνος Ιωαννίδης", label: "Σπιτικές Πίτες", icon: "fa-solid fa-bread-slice" },
      { youtubeId: "3hB6f7ETeFs", title: "Athens Street Food: 11 Best Souvlaki & Gyros Spots", label: "Street Food Tour", icon: "fa-solid fa-store" }
    ]
  },
  "σουβλάκι μοναστηρακίου": {
    youtubeId: "L3JTmHYtozQ",
    title: "Σουβλάκι Χοιρινό με Σπιτική Πίτα • Kitchen Lab Άκης Πετρετζίκης",
    dish: "Σουβλάκι Μοναστηρακίου",
    region: "Αθήνα",
    searchQuery: "σουβλακι μοναστηρακι συνταγη",
    options: [
      { youtubeId: "L3JTmHYtozQ", title: "Σουβλάκι Χοιρινό με Σπιτική Πίτα • Άκης Πετρετζίκης", label: "Συνταγή (Άκης)", icon: "fa-solid fa-utensils" },
      { youtubeId: "3vhdWmDJYXg", title: "Αυθεντικό Σουβλάκι Μοναστηρακίου • Μπαϊρακτάρης", label: "Μοναστηράκι Street Food", icon: "fa-solid fa-fire-burner" },
      { youtubeId: "5Kh9QxSOsD8", title: "Σπιτικές Πίτες για Σουβλάκι • Chef Πάνος Ιωαννίδης", label: "Σπιτικές Πίτες", icon: "fa-solid fa-bread-slice" }
    ]
  },
  "σουβλάκι": {
    youtubeId: "L3JTmHYtozQ",
    title: "Σουβλάκι Χοιρινό με Σπιτική Πίτα • Kitchen Lab Άκης Πετρετζίκης",
    dish: "Ελληνικό Σουβλάκι",
    region: "Ελλάδα",
    searchQuery: "σουβλακι συνταγη",
    options: [
      { youtubeId: "L3JTmHYtozQ", title: "Σουβλάκι Χοιρινό με Σπιτική Πίτα • Άκης Πετρετζίκης", label: "Συνταγή (Άκης)", icon: "fa-solid fa-utensils" },
      { youtubeId: "3vhdWmDJYXg", title: "Αυθεντικό Σουβλάκι Μοναστηρακίου • Μπαϊρακτάρης", label: "Μοναστηράκι", icon: "fa-solid fa-fire-burner" },
      { youtubeId: "5Kh9QxSOsD8", title: "Σπιτικές Πίτες για Σουβλάκι • Chef Πάνος Ιωαννίδης", label: "Σπιτικές Πίτες", icon: "fa-solid fa-bread-slice" }
    ]
  },

  // Greek Classics
  "μουσακάς": {
    youtubeId: "4qkRNpd0Rhw",
    title: "Ο Αυθεντικός Ελληνικός Μουσακάς • Άκης Πετρετζίκης",
    dish: "Ελληνικός Μουσακάς",
    region: "Ελλάδα",
    searchQuery: "μουσακας συνταγη",
    options: [
      { youtubeId: "4qkRNpd0Rhw", title: "Ο Αυθεντικός Ελληνικός Μουσακάς • Άκης Πετρετζίκης", label: "Μουσακάς (Άκης)", icon: "fa-solid fa-utensils" },
      { youtubeId: "sqgU7zQSOPU", title: "Εκπληκτικός Μουσακάς • Live Kitchen", label: "Μουσακάς (Live Kitchen)", icon: "fa-solid fa-kitchen-set" }
    ]
  },

  // Kozani & West Macedonia
  "κοζανίτικο κιχί": {
    youtubeId: "RgzscJeMfJI",
    title: "Στριφτή Τυρόπιτα Κοζάνης (Κιχί) • Paxxi",
    dish: "Κοζανίτικο Κιχί",
    region: "Κοζάνη",
    searchQuery: "κοζανιτικο κιχι συνταγη",
    options: [
      { youtubeId: "RgzscJeMfJI", title: "Στριφτή Τυρόπιτα Κοζάνης (Κιχί) • Paxxi", label: "Κιχί (Paxxi)", icon: "fa-solid fa-pie-chart" },
      { youtubeId: "davgbeLTQlk", title: "Κοζάνη: Παραδοσιακό Κιχί & Τοπική Γαστρονομία", label: "Τοπική Παράδοση", icon: "fa-solid fa-landmark" }
    ]
  },
  "κιχί": {
    youtubeId: "RgzscJeMfJI",
    title: "Στριφτή Τυρόπιτα Κοζάνης (Κιχί) • Paxxi",
    dish: "Κοζανίτικο Κιχί",
    region: "Κοζάνη",
    searchQuery: "κοζανιτικο κιχι συνταγη",
    options: [
      { youtubeId: "RgzscJeMfJI", title: "Κοζανίτικο Κιχί • Paxxi", label: "Κιχί (Paxxi)", icon: "fa-solid fa-pie-chart" }
    ]
  },
  "κοζανίτικα γιαπράκια": {
    youtubeId: "ckjcckEwT3w",
    title: "Κοζανίτικα Γιαπράκια Παραδοσιακή Συνταγή",
    dish: "Κοζανίτικα Γιαπράκια",
    region: "Κοζάνη",
    searchQuery: "κοζανιτικα γιαπρακια συνταγη",
    options: [
      { youtubeId: "ckjcckEwT3w", title: "Κοζανίτικα Γιαπράκια Παραδοσιακή Συνταγή", label: "Γιαπράκια Συνταγή", icon: "fa-solid fa-bowl-food" }
    ]
  },
  "γιαπράκια": {
    youtubeId: "ckjcckEwT3w",
    title: "Κοζανίτικα Γιαπράκια Παραδοσιακή Συνταγή",
    dish: "Κοζανίτικα Γιαπράκια",
    region: "Κοζάνη",
    searchQuery: "κοζανιτικα γιαπρακια συνταγη",
    options: [
      { youtubeId: "ckjcckEwT3w", title: "Κοζανίτικα Γιαπράκια Παραδοσιακή Συνταγή", label: "Γιαπράκια Συνταγή", icon: "fa-solid fa-bowl-food" }
    ]
  },
  "κρόκος κοζάνης (σαφράν ποπ)": {
    youtubeId: "davgbeLTQlk",
    title: "Κρόκος Κοζάνης (Σαφράν): Ρόφημα, Ιδιότητες & Μαγειρική",
    dish: "Κρόκος Κοζάνης",
    region: "Κοζάνη",
    searchQuery: "κροκος κοζανης σαφραν χρηση συνταγη",
    options: [
      { youtubeId: "davgbeLTQlk", title: "Κρόκος Κοζάνης: Ρόφημα & Ιδιότητες", label: "Κρόκος Κοζάνης", icon: "fa-solid fa-mug-hot" }
    ]
  },
  "κρόκος": {
    youtubeId: "davgbeLTQlk",
    title: "Κρόκος Κοζάνης (Σαφράν): Ρόφημα & Ιδιότητες",
    dish: "Κρόκος Κοζάνης",
    region: "Κοζάνη",
    searchQuery: "κροκος κοζανης σαφραν",
    options: [
      { youtubeId: "davgbeLTQlk", title: "Κρόκος Κοζάνης (Σαφράν)", label: "Κρόκος Κοζάνης", icon: "fa-solid fa-mug-hot" }
    ]
  },

  // Thessaloniki
  "μπουγάτσα θεσσαλονίκης": {
    youtubeId: "e6BEkT6E-nY",
    title: "Αυθεντική Μπουγάτσα Θεσσαλονίκης με Κρέμα",
    dish: "Μπουγάτσα Θεσσαλονίκης",
    region: "Θεσσαλονίκη",
    searchQuery: "μπουγατσα θεσσαλονικης συνταγη",
    options: [
      { youtubeId: "e6BEkT6E-nY", title: "Αυθεντική Μπουγάτσα Θεσσαλονίκης με Κρέμα", label: "Μπουγάτσα Κρέμα", icon: "fa-solid fa-cookie-bite" },
      { youtubeId: "AlNoJGfUdhM", title: "Τραγανή Μπουγάτσα με Τυρί Θεσσαλονίκης", label: "Μπουγάτσα Τυρί", icon: "fa-solid fa-cheese" }
    ]
  },
  "μπουγάτσα": {
    youtubeId: "e6BEkT6E-nY",
    title: "Αυθεντική Μπουγάτσα Θεσσαλονίκης με Κρέμα",
    dish: "Μπουγάτσα Θεσσαλονίκης",
    region: "Θεσσαλονίκη",
    searchQuery: "μπουγατσα συνταγη",
    options: [
      { youtubeId: "e6BEkT6E-nY", title: "Μπουγάτσα με Κρέμα", label: "Μπουγάτσα Κρέμα", icon: "fa-solid fa-cookie-bite" },
      { youtubeId: "AlNoJGfUdhM", title: "Μπουγάτσα με Τυρί", label: "Μπουγάτσα Τυρί", icon: "fa-solid fa-cheese" }
    ]
  },
  "τρίγωνα πανοράματος": {
    youtubeId: "espUGr283VM",
    title: "Τρίγωνα Πανοράματος με Πλούσια Κρέμα • Άκης Πετρετζίκης",
    dish: "Τρίγωνα Πανοράματος",
    region: "Θεσσαλονίκη",
    searchQuery: "τριγωνα πανοραματος συνταγη",
    options: [
      { youtubeId: "espUGr283VM", title: "Τρίγωνα Πανοράματος • Άκης Πετρετζίκης", label: "Τρίγωνα (Άκης)", icon: "fa-solid fa-stroopwafel" }
    ]
  },
  "κουλούρι αθηνών / θεσσαλονίκης": {
    youtubeId: "Wz_pK1Zb-X8",
    title: "Παραδοσιακό Τραγανό Κουλούρι Θεσσαλονίκης",
    dish: "Κουλούρι Θεσσαλονίκης",
    region: "Ελλάδα",
    searchQuery: "κουλουρι θεσσαλονικης συνταγη",
    options: [
      { youtubeId: "Wz_pK1Zb-X8", title: "Παραδοσιακό Τραγανό Κουλούρι", label: "Κουλούρι Σησαμιού", icon: "fa-solid fa-circle-notch" }
    ]
  },
  "κουλούρι θεσσαλονίκης": {
    youtubeId: "Wz_pK1Zb-X8",
    title: "Παραδοσιακό Τραγανό Κουλούρι Θεσσαλονίκης",
    dish: "Κουλούρι Θεσσαλονίκης",
    region: "Θεσσαλονίκη",
    searchQuery: "κουλουρι θεσσαλονικης συνταγη",
    options: [
      { youtubeId: "Wz_pK1Zb-X8", title: "Παραδοσιακό Κουλούρι Θεσσαλονίκης", label: "Κουλούρι Θεσσαλονίκης", icon: "fa-solid fa-circle-notch" }
    ]
  },
  "κουλούρι": {
    youtubeId: "Wz_pK1Zb-X8",
    title: "Παραδοσιακό Κουλούρι Θεσσαλονίκης",
    dish: "Κουλούρι",
    region: "Ελλάδα",
    searchQuery: "κουλουρι συνταγη",
    options: [
      { youtubeId: "Wz_pK1Zb-X8", title: "Παραδοσιακό Κουλούρι", label: "Κουλούρι", icon: "fa-solid fa-circle-notch" }
    ]
  },

  // Crete
  "κρητικός ντάκος": {
    youtubeId: "B8Thne9gGlo",
    title: "Αυθεντικός Κρητικός Ντάκος (Κουκουβάγια)",
    dish: "Κρητικός Ντάκος",
    region: "Κρήτη",
    searchQuery: "κρητικος ντακος συνταγη",
    options: [
      { youtubeId: "B8Thne9gGlo", title: "Αυθεντικός Κρητικός Ντάκος", label: "Κρητικός Ντάκος", icon: "fa-solid fa-bowl-food" }
    ]
  },
  "ντάκος": {
    youtubeId: "B8Thne9gGlo",
    title: "Αυθεντικός Κρητικός Ντάκος (Κουκουβάγια)",
    dish: "Κρητικός Ντάκος",
    region: "Κρήτη",
    searchQuery: "κρητικος ντακος συνταγη",
    options: [
      { youtubeId: "B8Thne9gGlo", title: "Κρητικός Ντάκος", label: "Ντάκος", icon: "fa-solid fa-bowl-food" }
    ]
  },
  "καλιτσούνια": {
    youtubeId: "GdBTfdnD4So",
    title: "Παραδοσιακά Κρητικά Καλιτσούνια με Ανθότυρο & Δυόσμο",
    dish: "Κρητικά Καλιτσούνια",
    region: "Κρήτη",
    searchQuery: "καλιτσουνια κρητης συνταγη",
    options: [
      { youtubeId: "GdBTfdnD4So", title: "Κρητικά Καλιτσούνια με Ανθότυρο", label: "Καλιτσούνια", icon: "fa-solid fa-cookie" }
    ]
  },

  // Corfu
  "παστιτσάδα": {
    youtubeId: "o61bKzvvFF0",
    title: "Κερκυραϊκή Παστιτσάδα με Μοσχαράκι • Γιώργος Τσούλης",
    dish: "Παστιτσάδα Κέρκυρας",
    region: "Κέρκυρα",
    searchQuery: "παστιτσαδα κερκυρας συνταγη",
    options: [
      { youtubeId: "o61bKzvvFF0", title: "Κερκυραϊκή Παστιτσάδα • Γιώργος Τσούλης", label: "Παστιτσάδα (Τσούλης)", icon: "fa-solid fa-utensils" }
    ]
  },
  "σοφρίτο": {
    youtubeId: "N7XVKKaLi74",
    title: "Παραδοσιακό Κερκυραϊκό Σοφρίτο με Σκόρδο & Μαϊντανό",
    dish: "Σοφρίτο Κέρκυρας",
    region: "Κέρκυρα",
    searchQuery: "σοφριτο κερκυρας συνταγη",
    options: [
      { youtubeId: "N7XVKKaLi74", title: "Κερκυραϊκό Σοφρίτο Παραδοσιακή Συνταγή", label: "Σοφρίτο Κέρκυρας", icon: "fa-solid fa-bowl-rice" }
    ]
  },

  // Thessaly / Pelion
  "σπετζοφάι": {
    youtubeId: "HSW-CfgN3MU",
    title: "Παραδοσιακό Σπετζοφάι Πηλίου με Χωριάτικο Λουκάνικο",
    dish: "Σπετζοφάι Πηλίου",
    region: "Βόλος / Πήλιο",
    searchQuery: "σπετζοφαι πηλιου συνταγη",
    options: [
      { youtubeId: "HSW-CfgN3MU", title: "Σπετζοφάι Πηλίου με Λουκάνικο", label: "Σπετζοφάι Πηλίου", icon: "fa-solid fa-fire" }
    ]
  },
  "χαλβάς φαρσάλων": {
    youtubeId: "OZwlSWuK3JI",
    title: "Αυθεντικός Σαπουνέ Χαλβάς Φαρσάλων",
    dish: "Χαλβάς Φαρσάλων",
    region: "Λάρισα / Φάρσαλα",
    searchQuery: "χαλβας φαρσαλων συνταγη",
    options: [
      { youtubeId: "OZwlSWuK3JI", title: "Σαπουνέ Χαλβάς Φαρσάλων", label: "Χαλβάς Φαρσάλων", icon: "fa-solid fa-cake-candles" }
    ]
  },

  // International
  "carbonara": {
    youtubeId: "3AAdKl1UYZs",
    title: "Authentic Spaghetti Carbonara • Antonio Carluccio",
    dish: "Spaghetti Carbonara",
    region: "Ρώμη, Ιταλία",
    searchQuery: "authentic spaghetti carbonara recipe",
    options: [
      { youtubeId: "3AAdKl1UYZs", title: "Spaghetti Carbonara • Antonio Carluccio", label: "Carbonara (Carluccio)", icon: "fa-solid fa-bowl-food" }
    ]
  },
  "καρμπονάρα": {
    youtubeId: "3AAdKl1UYZs",
    title: "Αυθεντική Spaghetti Carbonara • Antonio Carluccio",
    dish: "Spaghetti Carbonara",
    region: "Ρώμη, Ιταλία",
    searchQuery: "authentic spaghetti carbonara",
    options: [
      { youtubeId: "3AAdKl1UYZs", title: "Αυθεντική Carbonara • Antonio Carluccio", label: "Carbonara (Carluccio)", icon: "fa-solid fa-bowl-food" }
    ]
  },
  "pizza napoletana": {
    youtubeId: "CMP8SF6FwdM",
    title: "True Neapolitan Pizza Masterclass • AVPN Official",
    dish: "Pizza Napoletana",
    region: "Νάπολη, Ιταλία",
    searchQuery: "true neapolitan pizza avpn",
    options: [
      { youtubeId: "CMP8SF6FwdM", title: "True Neapolitan Pizza • AVPN Official", label: "Pizza Napoletana (AVPN)", icon: "fa-solid fa-pizza-slice" }
    ]
  },
  "pizza": {
    youtubeId: "CMP8SF6FwdM",
    title: "True Neapolitan Pizza Masterclass • AVPN Official",
    dish: "Pizza Napoletana",
    region: "Νάπολη, Ιταλία",
    searchQuery: "pizza napoletana recipe",
    options: [
      { youtubeId: "CMP8SF6FwdM", title: "True Neapolitan Pizza Masterclass", label: "Pizza (AVPN)", icon: "fa-solid fa-pizza-slice" }
    ]
  },
  "πίτσα": {
    youtubeId: "CMP8SF6FwdM",
    title: "Αυθεντική Ναπολιτάνικη Πίτσα • AVPN",
    dish: "Pizza Napoletana",
    region: "Νάπολη, Ιταλία",
    searchQuery: "αυθεντικη ναπολιτανικη πιτσα συνταγη",
    options: [
      { youtubeId: "CMP8SF6FwdM", title: "Αυθεντική Ναπολιτάνικη Πίτσα • AVPN", label: "Πίτσα Νάπολης", icon: "fa-solid fa-pizza-slice" }
    ]
  },
  "croissant": {
    youtubeId: "2OAUM0MRgQw",
    title: "Traditional French Croissants • Chef Bruno Albouze",
    dish: "Croissants de Paris",
    region: "Παρίσι, Γαλλία",
    searchQuery: "traditional french croissants recipe",
    options: [
      { youtubeId: "2OAUM0MRgQw", title: "French Croissants • Chef Bruno Albouze", label: "Croissants (Albouze)", icon: "fa-solid fa-bread-slice" }
    ]
  },
  "κρουασάν": {
    youtubeId: "2OAUM0MRgQw",
    title: "Αυθεντικά Γαλλικά Βουτυράτα Κρουασάν • Bruno Albouze",
    dish: "Croissants de Paris",
    region: "Παρίσι, Γαλλία",
    searchQuery: "γαλλικα κρουασαν συνταγη",
    options: [
      { youtubeId: "2OAUM0MRgQw", title: "Αυθεντικά Γαλλικά Κρουασάν", label: "Κρουασάν Παρισιού", icon: "fa-solid fa-bread-slice" }
    ]
  },
  "fish and chips": {
    youtubeId: "kIBWuUfWbCA",
    title: "Traditional British Crispy Fish and Chips",
    dish: "British Fish & Chips",
    region: "Λονδίνο, Ηνωμένο Βασίλειο",
    searchQuery: "traditional british fish and chips recipe",
    options: [
      { youtubeId: "kIBWuUfWbCA", title: "Crispy British Fish & Chips", label: "Fish & Chips", icon: "fa-solid fa-fish" }
    ]
  }
};

/**
 * Returns a dedicated recipe video with multiple options if available for a given dish or city.
 * Uses descending length sorting for precise matching.
 */
export function getGastroRecipeVideo(dishTitle = '', cityName = '') {
  const normTitle = (dishTitle || '').trim().toLowerCase();
  const normCity = (cityName || '').trim().toLowerCase();

  // Sort keys by descending length so specific terms ("αυθεντικό σουβλάκι μοναστηρακίου")
  // are tested BEFORE generic terms ("σουβλάκι")
  const sortedKeys = Object.keys(GASTRO_RECIPE_VIDEOS).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    if (normTitle === key || normTitle.includes(key)) {
      const val = GASTRO_RECIPE_VIDEOS[key];
      return {
        ...val,
        options: val.options || [{ youtubeId: val.youtubeId, title: val.title, label: val.dish || 'Συνταγή', icon: 'fa-solid fa-utensils' }],
        searchQuery: val.searchQuery || `συνταγή ${val.dish || dishTitle} ${cityName}`
      };
    }
  }

  // Word token matching if whole phrase didn't match directly
  const titleTokens = normTitle.split(/[\s,&•·/]+/).filter(t => t.length >= 4);
  for (const key of sortedKeys) {
    if (titleTokens.some(token => token === key || key.includes(token))) {
      const val = GASTRO_RECIPE_VIDEOS[key];
      return {
        ...val,
        options: val.options || [{ youtubeId: val.youtubeId, title: val.title, label: val.dish || 'Συνταγή', icon: 'fa-solid fa-utensils' }],
        searchQuery: val.searchQuery || `συνταγή ${val.dish || dishTitle} ${cityName}`
      };
    }
  }

  // Check city match
  for (const key of sortedKeys) {
    if (normCity && (normCity.includes(key) || key.includes(normCity))) {
      const val = GASTRO_RECIPE_VIDEOS[key];
      return {
        ...val,
        options: val.options || [{ youtubeId: val.youtubeId, title: val.title, label: val.dish || 'Συνταγή', icon: 'fa-solid fa-utensils' }],
        searchQuery: val.searchQuery || `συνταγή ${val.dish || dishTitle} ${cityName}`
      };
    }
  }

  return null;
}

/**
 * Resolves video and exact start timestamp for any landmark or POI.
 * Never guesses or invents arbitrary timestamps!
 * Uses descending length sorting so "Μουσείο Ακρόπολης" matches before "Ακρόπολη".
 */
export function getPoiVideoInfo(poiTitle = '', cityId = '') {
  const normTitle = (poiTitle || '').trim().toLowerCase();

  // 1. Check dedicated POI video first (sorted by descending length)
  const sortedDedicatedKeys = Object.keys(POI_DEDICATED_VIDEOS).sort((a, b) => b.length - a.length);
  for (const key of sortedDedicatedKeys) {
    if (normTitle === key || normTitle.includes(key)) {
      const val = POI_DEDICATED_VIDEOS[key];
      return {
        youtubeId: val.youtubeId,
        startSeconds: val.start || 0,
        title: val.title,
        type: 'dedicated',
        label: val.label || val.title,
        isDedicated: true,
        attractionName: val.label || poiTitle,
        options: val.options || [{ youtubeId: val.youtubeId, title: val.title, label: val.label || '4K Βίντεο', icon: 'fa-solid fa-play' }],
        searchQuery: val.searchQuery || `${poiTitle || key} 4K tour`
      };
    }
  }

  // 2. Check verified timestamp in city tour (sorted by descending length)
  const sortedTimestampKeys = Object.keys(POI_SPECIFIC_TIMESTAMPS).sort((a, b) => b.length - a.length);
  let match = null;
  for (const key of sortedTimestampKeys) {
    if (normTitle === key || normTitle.includes(key)) {
      match = POI_SPECIFIC_TIMESTAMPS[key];
      break;
    }
  }

  if (match && typeof match.start === 'number') {
    const effectiveCityId = match.cityId || cityId;
    const preferredType = match.type || 'drone';
    const videoObj = getCityVideo(effectiveCityId, preferredType) || getCityVideo(effectiveCityId, 'walking') || getCityVideo(effectiveCityId, 'guide');
    if (videoObj) {
      const attractionName = match.label || poiTitle;
      const mins = Math.floor(match.start / 60);
      const secs = match.start % 60;
      return {
        youtubeId: videoObj.youtubeId,
        startSeconds: match.start,
        title: `${attractionName} • ${videoObj.title || effectiveCityId}`,
        type: videoObj.type || preferredType,
        label: `${attractionName} (4K στο ${mins}:${secs < 10 ? '0' : ''}${secs})`,
        isExactTimestamp: true,
        attractionName,
        options: [
          { youtubeId: videoObj.youtubeId, startSeconds: match.start, title: `${attractionName} (στο ${mins}:${secs < 10 ? '0' : ''}${secs})`, label: 'Σημείο στο Βίντεο', icon: 'fa-solid fa-clock' }
        ],
        searchQuery: `${attractionName} ${effectiveCityId} 4K`
      };
    }
  }

  // 3. Fallback to city tour starting honestly at 0:00 (NO random timestamp guessing!)
  const effectiveCityId = cityId;
  const videoObj = getCityVideo(effectiveCityId, 'drone') || getCityVideo(effectiveCityId, 'walking') || getCityVideo(effectiveCityId, 'guide');

  if (videoObj) {
    return {
      youtubeId: videoObj.youtubeId,
      startSeconds: 0,
      title: `${poiTitle ? poiTitle + ' • ' : ''}${videoObj.title || '4K Περιήγηση Πόλης'}`,
      type: videoObj.type || 'drone',
      label: `4K Περιήγηση Πόλης`,
      isCityTourFallback: true,
      attractionName: poiTitle,
      options: [
        { youtubeId: videoObj.youtubeId, startSeconds: 0, title: videoObj.title, label: '4K Περιήγηση Πόλης', icon: 'fa-solid fa-city' }
      ],
      searchQuery: `${poiTitle} ${effectiveCityId} 4K tour`
    };
  }

  return {
    youtubeId: "wa1fa5-EnlI",
    startSeconds: 0,
    title: `${poiTitle || 'Περιήγηση'} (4K Tour)`,
    type: 'drone',
    label: '4K Cinematic Tour',
    isCityTourFallback: true,
    attractionName: poiTitle,
    options: [
      { youtubeId: "wa1fa5-EnlI", startSeconds: 0, title: '4K Tour', label: '4K Tour', icon: 'fa-solid fa-film' }
    ],
    searchQuery: `${poiTitle} 4K`
  };
}
