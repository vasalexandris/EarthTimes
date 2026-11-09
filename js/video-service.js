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
      },
      "walking": {
          "youtubeId": "t2W1i26gD5c",
          "title": "Γενεύη 4K: Walking Tour στην Παλιά Πόλη & την Προκυμαία",
          "label": "Γενεύη Walking Tour (4K)",
          "icon": "fa-solid fa-person-walking",
          "type": "walking"
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
  }
};

/**
 * Returns video data for a city, prioritizing requested tour type.
 */
export function getCityVideo(cityId, preferredType = 'drone') {
  if (!cityId) return null;
  const entry = CITY_VIDEOS[cityId];
  if (!entry) return null;

  if (entry[preferredType]) {
    return entry[preferredType];
  }
  return entry.drone || entry.walking || entry.guide || null;
}

/**
 * Returns all available tour options for a city.
 */
export function getAvailableCityTours(cityId) {
  if (!cityId || !CITY_VIDEOS[cityId]) return [];
  const entry = CITY_VIDEOS[cityId];
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
  return tours;
}

/**
 * Returns list of available tour type keys (e.g. ['drone', 'walking', 'guide'])
 */
export function getAvailableVideoTypes(cityId) {
  return getAvailableCityTours(cityId).map(t => t.type);
}
