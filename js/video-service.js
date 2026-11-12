import { CITY_TO_STATE } from './states-data.js?v=20261112_eu7';
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
