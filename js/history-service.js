/**
 * History Service
 * Provides rich historical data and rendering for the History tab:
 * - Prominent & Famous Historical Figures (Name, Period, Specialty, Major Work & Legacy)
 * - Decisive Battles, Conflicts & Political Developments (Date, Forces, Outcome, Historic Impact)
 * - Historical Monuments, Archaeology & Cultural Relics (Century, Relics, Significance)
 * - 100-Year Comparative Perspective (1926 vs 2026)
 * - In-App Bing Search integration for deep exploration inside the map frame
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
 * Registry of Famous People & Historical Figures
 */
const FAMOUS_PEOPLE_DATABASE = {
  // Kozani
  'kozani': [
    {
      name: 'Γεώργιος Λασσάνης',
      years: '1793 - 1870',
      role: 'Κορυφαίος Φιλικός, Στρατηγός & Λόγιος',
      work: 'Υπασπιστής του Αλέξανδρου Υψηλάντη, συγγραφέας του πρώτου νεοελληνικού θεατρικού έργου («Ελλάς»), πολιτικός και υπουργός.',
      legacy: 'Αφιέρωσε τη ζωή και την περιουσία του στην Ελληνική Επανάσταση του 1821. Το αρχοντικό του στην Κοζάνη σώζεται σήμερα ως Δημοτική Χαρτοθήκη.',
      bingQuery: 'Γεώργιος Λασσάνης Φιλική Εταιρεία Κοζάνη βιογραφία έργο'
    },
    {
      name: 'Γεώργιος Σακελλάριος',
      years: '1765 - 1838',
      role: 'Ιατροφιλόσοφος, Ποιητής & Λόγιος του Διαφωτισμού',
      work: 'Προσωπικός γιατρός του Αλή Πασά στα Ιωάννινα, εισήγαγε τη σύγχρονη βοτανολογία και ιατρική, μετέφρασε έργα του Rousseau.',
      legacy: 'Πρωτοπόρος του Νεοελληνικού Διαφωτισμού που συνδύασε την ιατρική επιστήμη με την ποίηση και την εθνική αφύπνιση.',
      bingQuery: 'Γεώργιος Σακελλάριος ιατρός Κοζάνη Διαφωτισμός'
    },
    {
      name: 'Χαρίσιος Μεγδάνης',
      years: '1768 - 1823',
      role: 'Πρωθιερέας, Ιστορικός, Ιατρός & Διδάσκαλος',
      work: 'Συνέγραψε την περίφημη «Συνοπτική Ιστορία της Κοζάνης» (1820) και πλήθος φιλολογικών και ιατρικών πραγματειών.',
      legacy: 'Ο πρώτος συστηματικός ιστοριογράφος της Κοζάνης, θεμελίωσε την καταγραφή της τοπικής αυτοδιοίκησης και των σουλτανικών προνομίων.',
      bingQuery: 'Χαρίσιος Μεγδάνης Κοζάνη ιστορικός έργο'
    },
    {
      name: 'Ευγένιος Βούλγαρης',
      years: '1716 - 1806',
      role: 'Επιφανής Στοχαστής & Δάσκαλος του Γένους',
      work: 'Δίδαξε στην ιστορική Σχολή της Κοζάνης (1746-1749), εισάγοντας τη νεότερη ευρωπαϊκή φυσική και φιλοσοφία (Locke, Leibniz).',
      legacy: 'Από τις λαμπρότερες πνευματικές φυσιογνωμίες του ελληνισμού, μετέτρεψε την Κοζάνη σε ακτινοβόλο κέντρο παιδείας της Οθωμανικής Αυτοκρατορίας.',
      bingQuery: 'Ευγένιος Βούλγαρης Σχολή Κοζάνης φιλοσοφία'
    },
    {
      name: 'Μιχαήλ Περδικάρης',
      years: '1766 - 1828',
      role: 'Ιατρός, Λόγιος & Σατιρικός Ποιητής',
      work: 'Συγγραφέας του «Ρήγας ή κατά ψευδοφιλελευθέρων» και άλλων ηθικοπολιτικών ποιημάτων, γιατρός στην αυλή της Βλαχίας.',
      legacy: 'Πνεύμα οξύ και ασυμβίβαστο, συνέβαλε στη γλώσσα και τις πνευματικές διαμάχες της προεπαναστατικής Ελλάδας.',
      bingQuery: 'Μιχαήλ Περδικάρης Κοζάνη ιατρός ποιητής'
    },
    {
      name: 'Νικόλαος Δελιαλής',
      years: '1896 - 1980',
      role: 'Οραματιστής Ερευνητής & Βιβλιοθηκονόμος',
      work: 'Αφιέρωσε δεκαετίες στη συλλογή, καταλογογράφηση και διάσωση των σπάνιων χειρογράφων της Κοβενταρείου Δημοτικής Βιβλιοθήκης.',
      legacy: 'Χάρη στην επιμονή του διασώθηκε η 2η σημαντικότερη ιστορική βιβλιοθήκη της χώρας και ανεκτίμητα αρχαία κειμήλια.',
      bingQuery: 'Νικόλαος Δελιαλής Κοβεντάρειος Βιβλιοθήκη Κοζάνη'
    }
  ],

  // Athens
  'athens': [
    {
      name: 'Περικλής',
      years: '495 - 429 π.Χ.',
      role: 'Ηγέτης της Αθηναϊκής Δημοκρατίας & Στρατηγός',
      work: 'Αρχιτέκτονας του «Χρυσού Αιώνα», εισηγητής της άμεσης λαϊκής δημοκρατίας και εμπνευστής της ανοικοδόμησης του Παρθενώνα.',
      legacy: 'Ο Επιτάφιος Λόγος του παραμένει το κορυφαίο παγκόσμιο μνημείο της δημοκρατικής ελευθερίας και της πολιτικής ισότητας.',
      bingQuery: 'Περικλής Χρυσός Αιών Αθήνα Παρθενώνας Δημοκρατία'
    },
    {
      name: 'Σωκράτης',
      years: '470 - 399 π.Χ.',
      role: 'Θεμελιωτής της Δυτικής Ηθικής Φιλοσοφίας',
      work: 'Εισήγαγε τη μαιευτική μέθοδο και τον αδιάκοπο έλεγχο των πεποιθήσεων. Επέλεξε τον θάνατο με κώνειο υπερασπιζόμενος τους νόμους της πόλης.',
      legacy: 'Άλλαξε για πάντα την πορεία της ανθρωπότητας στρέφοντας τη φιλοσοφία από τη μελέτη της φύσης στην ηθική και την αυτογνωσία («Γνώθι σεαυτόν»).',
      bingQuery: 'Σωκράτης φιλοσοφία μαιευτική μέθοδος δίκη Αθήνα'
    },
    {
      name: 'Σόλων ο Αθηναίος',
      years: '638 - 558 π.Χ.',
      role: 'Νομοθέτης & Ένας εκ των Επτά Σοφών',
      work: 'Θέσπισε τη «Σεισάχθεια» (κατάργηση των χρεών και της υποδούλωσης), αναδιοργάνωσε την Ηλιαία και το πολίτευμα.',
      legacy: 'Έθεσε τις πρώτες βάσεις της κοινωνικής δικαιοσύνης και του κράτους δικαίου στην αρχαία Αθήνα.',
      bingQuery: 'Σόλων ο Αθηναίος σεισάχθεια νομοθεσία Αθήνα'
    },
    {
      name: 'Θεμιστοκλής',
      years: '524 - 459 π.Χ.',
      role: 'Πολιτικός, Στρατηγός & Ναύαρχος',
      work: 'Έπεισε τους Αθηναίους να ναυπηγήσουν τον στόλο των τριήρεων και σχεδίασε την τακτική νίκης στη Ναυμαχία της Σαλαμίνας (480 π.Χ.).',
      legacy: 'Έσωσε την Ελλάδα και τον δυτικό πολιτισμό από την περσική υποδούλωση, δημιουργώντας την αθηναϊκή ναυτική ηγεμονία.',
      bingQuery: 'Θεμιστοκλής Ναυμαχία Σαλαμίνας τριήρεις Αθήνα'
    }
  ],

  // Thessaloniki
  'thessaloniki': [
    {
      name: 'Κάσσανδρος',
      years: '355 - 297 π.Χ.',
      role: 'Βασιλιάς της Μακεδονίας & Ιδρυτής της Πόλης',
      work: 'Ίδρυσε τη Θεσσαλονίκη το 315 π.Χ. ενώνοντας 26 οικισμούς και της έδωσε το όνομα της συζύγου του (ετεροθαλούς αδελφής του Μεγάλου Αλεξάνδρου).',
      legacy: 'Δημιούργησε τη σημαντικότερη ναυτική και εμπορική πύλη της Μακεδονίας προς το Αιγαίο.',
      bingQuery: 'Κάσσανδρος ίδρυση Θεσσαλονίκης 315 πΧ'
    },
    {
      name: 'Κύριλλος & Μεθόδιος',
      years: '9ος Αιώνας μ.Χ.',
      role: 'Θεσσαλονικείς Λόγιοι & Ισαπόστολοι των Σλάβων',
      work: 'Επινόησαν το πρώτο σλαβικό αλφάβητο (Γλαγολιτικό/Κυριλλικό) και μετέφρασαν τα ιερά κείμενα στη σλαβική γλώσσα.',
      legacy: 'Προστάτες της Ευρώπης, διαμόρφωσαν τον πολιτισμό και τη γραφή εκατοντάδων εκατομμυρίων ανθρώπων.',
      bingQuery: 'Κύριλλος και Μεθόδιος Θεσσαλονίκη κυριλλικό αλφάβητο'
    },
    {
      name: 'Άγιος Δημήτριος ο Μυροβλύτης',
      years: '270 - 306 μ.Χ.',
      role: 'Αξιωματικός & Πολιούχος της Θεσσαλονίκης',
      work: 'Ρωμαίος αξιωματούχος που μαρτύρησε για την πίστη του επί Διοκλητιανού στα ρωμαϊκά λουτρά της πόλης.',
      legacy: 'Αιώνιος προστάτης και σωτήρας της πόλης σε όλες τις πολιορκίες και ιστορικές δοκιμασίες.',
      bingQuery: 'Άγιος Δημήτριος πολιούχος Θεσσαλονίκης ιστορία ναός'
    }
  ],

  // Heraklion
  'heraklion': [
    {
      name: 'Νίκος Καζαντζάκης',
      years: '1883 - 1957',
      role: 'Συγγραφέας, Στοχαστής & Φιλόσοφος',
      work: '«Βίος και Πολιτεία του Αλέξη Ζορμπά», «Ο Χριστός Ξανασταυρώνεται», «Οδύσεια» (33.333 στίχοι), «Ασκητική».',
      legacy: 'Ο πιο μεταφρασμένος σύγχρονος Έλληνας συγγραφέας παγκοσμίως. Ο τάφος του δεσπόζει στα ενετικά τείχη της πόλης με το θρυλικό «Δεν ελπίζω τίποτα, δεν φοβούμαι τίποτα, είμαι λέφτερος».',
      bingQuery: 'Νίκος Καζαντζάκης έργο Ηράκλειο τάφος τείχη'
    },
    {
      name: 'Δομήνικος Θεοτοκόπουλος (El Greco)',
      years: '1541 - 1614',
      role: 'Μέγας Ζωγράφος της Αναγέννησης',
      work: 'Μαθήτευσε στην Κρητική Σχολή Αγιογραφίας στο Ηράκλειο (Χάνδακα) πριν κατακτήσει τη Βενετία, τη Ρώμη και το Τολέδο.',
      legacy: 'Μία από τις μεγαλύτερες ιδιοφυΐες της παγκόσμιας ζωγραφικής, γεφύρωσε τη βυζαντινή πνευματικότητα με τον δυτικό εξπρεσιονισμό.',
      bingQuery: 'Δομήνικος Θεοτοκόπουλος El Greco Κρητική Σχολή Ηράκλειο'
    }
  ],

  // Boston
  'boston': [
    {
      name: 'Benjamin Franklin',
      years: '1706 - 1790',
      role: 'Ιδρυτικός Πατέρας, Πολυμαθής & Επιστήμονας',
      work: 'Γεννήθηκε στη Βοστώνη, συνέταξε τη Διακήρυξη της Ανεξαρτησίας, εφηύρε το αλεξικέραυνο, πρωτοστάτησε στον Αμερικανικό Διαφωτισμό.',
      legacy: 'Ενσάρκωση του αμερικανικού πνεύματος και της επιστημονικής καινοτομίας.',
      bingQuery: 'Benjamin Franklin Boston founding father inventor biography'
    },
    {
      name: 'John F. Kennedy',
      years: '1917 - 1963',
      role: '35ος Πρόεδρος των Ηνωμένων Πολιτειών',
      work: 'Γεννήθηκε στο Brookline της Βοστώνης, απόφοιτος του Harvard, ηγήθηκε κατά την Κρίση των Πυραύλων της Κούβας και εγκαινίασε το πρόγραμμα Apollo.',
      legacy: 'Εμβληματική μορφή της σύγχρονης πολιτικής με διεθνή ακτινοβολία («Ask not what your country can do for you»).',
      bingQuery: 'John F Kennedy Massachusetts Boston presidency legacy'
    }
  ]
};

/**
 * Registry of Decisive Battles, Conflicts & Political Developments
 */
const HISTORIC_BATTLES_DATABASE = {
  // Kozani
  'kozani': [
    {
      title: 'Μάχη του Σαρανταπόρου & Απελευθέρωση Κοζάνης',
      date: '9 - 11 Οκτωβρίου 1912',
      type: 'battle',
      icon: 'fa-solid fa-shield-halved text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      forces: 'Ελληνικός Στρατός (Διάδοχος Κωνσταντίνος) εναντίον Οθωμανικού Στρατού (Χασάν Ταχσίν Πασάς)',
      outcome: 'Συντριπτική ελληνική νίκη, διάσπαση των πανίσχυρων οχυρών των στενών.',
      impact: 'Στις 11 Οκτωβρίου 1912 ο Ελληνικός Στρατός εισήλθε απελευθερωτής στην Κοζάνη, τερματίζοντας σχεδόν πέντε αιώνες οθωμανικού ζυγού και ανοίγοντας τον δρόμο για τη Θεσσαλονίκη.',
      bingQuery: 'Μάχη Σαρανταπόρου 1912 απελευθέρωση Κοζάνης ιστορία'
    },
    {
      title: 'Τα Σουλτανικά Προνόμια & Αυτοδιοίκηση Κοζάνης',
      date: '1664 (17ος Αιώνας)',
      type: 'politics',
      icon: 'fa-solid fa-scroll text-emerald-400',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
      forces: 'Κοζανίτες Πρόκριτοι & Βαλιδέ Σουλτάνα (Μητέρα του Σουλτάνου)',
      outcome: 'Έκδοση αυτοκρατορικών φιρμανίων ειδικής προστασίας (Χάσι/Μαλικιανές).',
      impact: 'Απαγορεύτηκε η μόνιμη εγκατάσταση Τούρκων στην πόλη, κατοχυρώθηκε πλήρης τοπική αυτοδιοίκηση και φορολογικά προνόμια, επιτρέποντας την ίδρυση της περίφημης Σχολής και τη δημιουργία ακμαίων εμπορικών οίκων στη Βιέννη και τη Βουδαπέστη.',
      bingQuery: 'Σουλτανικά προνόμια Κοζάνη 1664 Βαλιδέ Σουλτάνα αυτοδιοίκηση'
    },
    {
      title: 'Ο Μακεδονικός Αγώνας στη Δυτική Μακεδονία',
      date: '1904 - 1908',
      type: 'conflict',
      icon: 'fa-solid fa-crosshairs text-rose-400',
      badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-500/10',
      forces: 'Ελληνικά Αντάρτικα Σώματα & Μακεδονομάχοι εναντίον Κομιτατζήδων & Οθωμανών',
      outcome: 'Διατήρηση της ελληνικότητας της υπαίθρου και των σχολείων.',
      impact: 'Η Κοζάνη λειτούργησε ως το ασφαλές στρατηγικό κέντρο υποστήριξης, περίθαλψης και ανεφοδιασμού των μαχητών του Παύλου Μελά και του Καπετάν Βάρδα.',
      bingQuery: 'Μακεδονικός Αγώνας Κοζάνη Παύλος Μελάς Δυτική Μακεδονία'
    },
    {
      title: 'Μάχη των Στενών των Σερβίων / Αλιάκμονα 1941',
      date: '13 - 15 Απριλίου 1941 (Β΄ Παγκόσμιος Πόλεμος)',
      type: 'battle',
      icon: 'fa-solid fa-jet-fighter text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-300 bg-sky-500/10',
      forces: 'Βρετανικές, Αυστραλιανές & Νεοζηλανδικές Δυνάμεις (ANZAC) εναντίον Γερμανικών Μεραρχιών Panzer',
      outcome: 'Ηρωική επιβραδυντική μάχη στα στενά του Αλιάκμονα.',
      impact: 'Καθυστέρησε τη γερμανική προέλαση προς τη νότια Ελλάδα, επιτρέποντας την ασφαλή εκκένωση των συμμαχικών στρατευμάτων.',
      bingQuery: 'Μάχη Σερβίων 1941 ANZAC Αλιάκμονας γερμανική εισβολή'
    }
  ],

  // Athens
  'athens': [
    {
      title: 'Ναυμαχία της Σαλαμίνας',
      date: 'Σεπτέμβριος 480 π.Χ.',
      type: 'battle',
      icon: 'fa-solid fa-ship text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-300 bg-sky-500/10',
      forces: 'Συμμαχικός Ελληνικός Στόλος (Θεμιστοκλής, Ευρυβιάδης) εναντίον Περσικού Στόλου (Ξέρξης Α΄)',
      outcome: 'Συντριπτική ελληνική νίκη στα στενά της Σαλαμίνας.',
      impact: 'Έσωσε την αρχαία Ελλάδα από τον περσικό δεσποτισμό και επέτρεψε την άνθηση της κλασικής φιλοσοφίας, της τέχνης και της δημοκρατίας.',
      bingQuery: 'Ναυμαχία Σαλαμίνας 480 πΧ Θεμιστοκλής σημασία'
    },
    {
      title: 'Μάχη του Μαραθώνα',
      date: 'Αύγουστος/Σεπτέμβριος 490 π.Χ.',
      type: 'battle',
      icon: 'fa-solid fa-person-running text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      forces: '10.000 Αθηναίοι & 1.000 Πλαταιείς (Μιλτιάδης) εναντίον 25.000 Περσών (Δάτης & Αρταφέρνης)',
      outcome: 'Περίλαμπρη νίκη της οπλιτικής φάλαγγας.',
      impact: 'Απέδειξε ότι οι Πέρσες δεν ήταν ανίκητοι. Γέννησε τον ιστορικό θρύλο του Μαραθωνοδρόμου και το ολυμπιακό αγώνισμα.',
      bingQuery: 'Μάχη Μαραθώνα 490 πΧ Μιλτιάδης τακτική σημασία'
    },
    {
      title: 'Επανάσταση της 3ης Σεπτεμβρίου 1843 & Σύνταγμα',
      date: '3 Σεπτεμβρίου 1843',
      type: 'politics',
      icon: 'fa-solid fa-landmark text-purple-400',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
      forces: 'Στρατηγός Δημήτριος Καλλέργης, Ιωάννης Μακρυγιάννης & Λαός των Αθηνών',
      outcome: 'Αποδοχή των λαϊκών αιτημάτων από τον Βασιλιά Όθωνα.',
      impact: 'Τερματισμός της απόλυτης μοναρχίας και παραχώρηση του πρώτου Συντάγματος του νεοελληνικού κράτους. Έδωσε το όνομα στην Πλατεία Συντάγματος.',
      bingQuery: 'Επανάσταση 3ης Σεπτεμβρίου 1843 Σύνταγμα Καλλέργης'
    }
  ],

  // Thessaloniki
  'thessaloniki': [
    {
      title: 'Απελευθέρωση Θεσσαλονίκης 1912',
      date: '26 Οκτωβρίου 1912 (Ημέρα Αγίου Δημητρίου)',
      type: 'battle',
      icon: 'fa-solid fa-crown text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      forces: 'Ελληνικός Στρατός εναντίον Οθωμανικής Φρουράς Θεσσαλονίκης',
      outcome: 'Άνευ όρων παράδοση της πόλης από τον Χασάν Ταχσίν Πασά στον Διάδοχο Κωνσταντίνο.',
      impact: 'Ενσωμάτωση της πρωτεύουσας της Μακεδονίας στο ελληνικό κράτος μόλις λίγες ώρες πριν από την άφιξη του βουλγαρικού στρατού.',
      bingQuery: 'Απελευθέρωση Θεσσαλονίκης 26 Οκτωβρίου 1912 πρωτόκολλο παράδοσης'
    },
    {
      title: 'Κίνημα Εθνικής Αμύνης & Κυβέρνηση Θεσσαλονίκης',
      date: '17 Αυγούστου 1916',
      type: 'politics',
      icon: 'fa-solid fa-flag text-blue-400',
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
      forces: 'Ελευθέριος Βενιζέλος, Στρατηγός Δαγκλής, Ναύαρχος Κουντουριώτης (Τριανδρία)',
      outcome: 'Ίδρυση Προσωρινής Κυβέρνησης Εθνικής Αμύνης με έδρα τη Θεσσαλονίκη.',
      impact: 'Είσοδος της Ελλάδας στον Α΄ Παγκόσμιο Πόλεμο στο πλευρό της Αντάντ και απελευθέρωση της Ανατολικής Μακεδονίας.',
      bingQuery: 'Κίνημα Εθνικής Αμύνης Θεσσαλονίκη 1916 Ελευθέριος Βενιζέλος'
    }
  ]
};

/**
 * Registry of Historic Heritage Monuments & Archaeological Treasures
 */
const HISTORIC_MONUMENTS_DATABASE = {
  // Kozani
  'kozani': [
    {
      title: 'Ιστορικό Κωδωνοστάσιο (Μαμάτσιος)',
      date: '1855 (19ος Αιώνας)',
      type: 'monument',
      icon: 'fa-solid fa-bell text-amber-400',
      description: 'Το εξαγωνικό πέτρινο ρολόι-σύμβολο της Κοζάνης στην κεντρική Πλατεία Νίκης. Χτίστηκε με δωρεές Κοζανιτών της διασποράς και του γιατρού Κωνσταντίνου Μαμάτσιου.',
      bingQuery: 'Καμπαναριό Μαμάτσιος Κοζάνη ιστορία ρολόι'
    },
    {
      title: 'Κοβεντάρειος Δημοτική Βιβλιοθήκη Κοζάνης',
      date: 'Ιδρύθηκε το 1668 / Σύγχρονο Μέγαρο',
      type: 'archive',
      icon: 'fa-solid fa-book-bookmark text-emerald-400',
      description: 'Η 2η μεγαλύτερη ιστορική βιβλιοθήκη στην Ελλάδα. Θεματοφύλακας 380 σπάνιων χειρογράφων (11ος-19ος αι.), 70.000 παλαιτύπων και ενός εκ των ελαχίστων σωζόμενων πρωτοτύπων της Χάρτας του Ρήγα Φεραίου (1797).',
      bingQuery: 'Κοβεντάρειος Δημοτική Βιβλιοθήκη Κοζάνης Χάρτα Ρήγα χειρόγραφα'
    },
    {
      title: 'Ιερός Μητροπολιτικός Ναός Αγίου Νικολάου',
      date: '1664 (17ος Αιώνας)',
      type: 'church',
      icon: 'fa-solid fa-church text-sky-400',
      description: 'Χτίστηκε χάρη στα σουλτανικά προνόμια. Φιλοξενεί εξαιρετικό ξυλόγλυπτο επιχρυσωμένο τέμπλο, ιστορικές εικόνες και τοιχογραφίες των αδελφών Χατζημιχαήλ.',
      bingQuery: 'Ναός Αγίου Νικολάου Κοζάνη 1664 τέμπλο'
    },
    {
      title: 'Αρχοντικό Γεωργίου Λασσάνη',
      date: '18ος Αιώνας (Μακεδονική Αρχιτεκτονική)',
      type: 'mansion',
      icon: 'fa-solid fa-house-chimney-window text-rose-400',
      description: 'Διατηρητέο τριώροφο αρχοντικό παραδοσιακής μακεδονικής αρχιτεκτονικής στην ιστορική πλατεία Λασσάνη. Σήμερα στεγάζει τη Δημοτική Χαρτοθήκη Κοζάνης.',
      bingQuery: 'Αρχοντικό Λασσάνη Κοζάνη Χαρτοθήκη'
    },
    {
      title: 'Αρχαία Αιανή & Αρχαιολογικό Μουσείο',
      date: '2η Χιλιετία π.Χ. - Ελληνιστική Εποχή',
      type: 'archaeology',
      icon: 'fa-solid fa-monument text-amber-300',
      description: 'Η μητρόπολη του αρχαίου βασιλείου της Ελιμιώτιδας. Οι ανασκαφές έφεραν στο φως εντυπωσιακούς βασιλικούς τάφους, αρχαϊκές επιγραφές και χρυσά κτερίσματα.',
      bingQuery: 'Αρχαία Αιανή Κοζάνη Ελίμεια Αρχαιολογικό Μουσείο ευρήματα'
    }
  ],

  // Athens
  'athens': [
    {
      title: 'Παρθενώνας & Ιερός Βράχος Ακρόπολης',
      date: '447 - 432 π.Χ. (Ικτίνος, Καλλικράτης, Φειδίας)',
      type: 'monument',
      icon: 'fa-solid fa-landmark text-amber-400',
      description: 'Το κορυφαίο αριστούργημα της κλασικής αρχιτεκτονικής και παγκόσμιο σύμβολο της Δημοκρατίας και της ανθρώπινης διάνοιας.',
      bingQuery: 'Παρθενώνας Ακρόπολη αρχιτεκτονική ιστορία Φειδίας'
    },
    {
      title: 'Αρχαία Αγορά & Ναός Ηφαίστου (Θησείο)',
      date: '6ος - 5ος Αιώνας π.Χ.',
      type: 'archaeology',
      icon: 'fa-solid fa-columns text-emerald-400',
      description: 'Η καρδιά της αθηναϊκής πολιτικής ζωής, τόπος διδασκαλίας του Σωκράτη. Ο Ναός του Ηφαίστου είναι ο πιο καλοδιατηρημένος αρχαίος δωρικός ναός στον κόσμο.',
      bingQuery: 'Αρχαία Αγορά Αθηνών Ναός Ηφαίστου Στοά Αττάλου'
    }
  ],

  // Thessaloniki
  'thessaloniki': [
    {
      title: 'Λευκός Πύργος',
      date: '15ος Αιώνας (Οθωμανική Οχύρωση)',
      type: 'monument',
      icon: 'fa-solid fa-chess-rook text-amber-400',
      description: 'Το ιστορικό έμβλημα της Θεσσαλονίκης στην παραλία. Αρχικά γνωστός ως Πύργος του Αίματος, σήμερα στεγάζει τη μόνιμη έκθεση της ιστορίας της πόλης.',
      bingQuery: 'Λευκός Πύργος Θεσσαλονίκη ιστορία μουσείο'
    },
    {
      title: 'Ροτόντα & Αψίδα του Γαλερίου (Καμάρα)',
      date: '306 μ.Χ. (Ρωμαϊκή Εποχή)',
      type: 'archaeology',
      icon: 'fa-solid fa-archway text-sky-400',
      description: 'Μνημειώδες κυκλικό κτίσμα με διάμετρο 24 μ. που λειτούργησε ως ρωμαϊκό μαυσωλείο, χριστιανικός ναός και οθωμανικό τζαμί. Μνημείο UNESCO.',
      bingQuery: 'Ροτόντα Καμάρα Θεσσαλονίκη Γαλέριος ψηφιδωτά'
    }
  ]
};

/**
 * Generic Fallback Generators for any other location
 */
function getGenericFamousPeople(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return [
    {
      name: `Ιστορικές Προσωπικότητες & Ηγέτες (${name})`,
      years: 'Ιστορική Διαδρομή',
      role: 'Πνευματικοί Ηγέτες, Επιστήμονες & Δημιουργοί',
      work: `Προσωπικότητες που γεννήθηκαν, έδρασαν ή συνέδεσαν το όνομά τους με την πολιτιστική και κοινωνική εξέλιξη της περιοχής ${name}.`,
      legacy: `Άφησαν ανεξίτηλο αποτύπωμα στην επιστήμη, την τέχνη και τους κοινωνικούς αγώνες.`,
      bingQuery: `${englishName} famous historical figures prominent people biography`
    }
  ];
}

function getGenericBattles(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return [
    {
      title: `Ιστορικές Συγκρούσεις & Πολιτικές Εξελίξεις (${name})`,
      date: 'Ιστορικό Αρχείο',
      type: 'battle',
      icon: 'fa-solid fa-shield-halved text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      forces: `Τοπικές & Εθνικές Δυνάμεις κατά τις ιστορικές περιόδους`,
      outcome: `Διαμόρφωση των σύγχρονων συνόρων και της διοικητικής αυτοτέλειας.`,
      impact: `Κομβικά ιστορικά γεγονότα που καθόρισαν την πορεία των κατοίκων και των τοπικών θεσμών.`,
      bingQuery: `${englishName} historical battles decisive events conflicts history`
    }
  ];
}

function getGenericMonuments(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return [
    {
      title: `Ιστορικά Μνημεία & Αρχιτεκτονική Κληρονομιά (${name})`,
      date: 'Ιστορικές Εποχές',
      type: 'monument',
      icon: 'fa-solid fa-landmark text-amber-400',
      description: `Κτίρια, αρχαιολογικά ευρήματα και διατηρητέα τοπόσημα που αφηγούνται την ιστορική συνέχεια της περιοχής.`,
      bingQuery: `${englishName} historical monuments architecture heritage sights`
    }
  ];
}

/**
 * Public getters
 */
export function getFamousPeople(entity) {
  const id = (entity.id || '').toLowerCase();
  return FAMOUS_PEOPLE_DATABASE[id] || getGenericFamousPeople(entity);
}

export function getHistoricBattles(entity) {
  const id = (entity.id || '').toLowerCase();
  return HISTORIC_BATTLES_DATABASE[id] || getGenericBattles(entity);
}

export function getHistoricMonuments(entity) {
  const id = (entity.id || '').toLowerCase();
  return HISTORIC_MONUMENTS_DATABASE[id] || getGenericMonuments(entity);
}

/**
 * Main Renderer for the History Tab
 */
export function renderHistoryTabHtml(entity) {
  if (!entity) return '';

  const isCity = entity.type === 'city';
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;

  // 1. Summary Narrative
  const summary = entity.hist?.summary || entity.hist?.overview || entity.hist?.description
    || (typeof entity.history === 'string' ? entity.history : '')
    || [entity.hist?.founded, entity.hist?.keyEvent].filter(Boolean).join(' · ')
    || entity.brief || '';

  // 2. Timeline Highlights
  const rawHighlights = entity.hist?.highlights || entity.hist?.keyEvents || entity.hist?.timeline || (Array.isArray(entity.history) ? entity.history : []);
  const highlights = rawHighlights.map(h => ({
    year: String(h.year || ''),
    event: h.event || h.title || '',
    desc: h.desc || h.description || ''
  }));

  // 3. Famous People
  const people = getFamousPeople(entity);

  // 4. Decisive Battles & Politics
  const battles = getHistoricBattles(entity);

  // 5. Monuments & Heritage
  const monuments = getHistoricMonuments(entity);

  // 6. Past vs Present (100 Years: 1926 vs 2026)
  const pastVsPresent = entity.pastVsPresent || (entity.historyComparison ? [
    { epoch: 'Πριν 100 Χρόνια (~1926)', content: entity.historyComparison.past || 'Παραδοσιακή κοινωνία, αγροτική και εμπορική ανάπτυξη, πρώτες βιομηχανικές υποδομές.' },
    { epoch: 'Σήμερα (2026)', content: entity.historyComparison.present || 'Σύγχρονο αστικό και περιφερειακό κέντρο με ψηφιακές υποδομές, τουρισμό και βιώσιμη ανάπτυξη.' }
  ] : [
    { epoch: 'Πριν 100 Χρόνια (~1926)', content: `Μια εποχή βαθιών ανακατατάξεων, με την ενσωμάτωση προσφύγων, έντονη παραδοσιακή ζωή και θεμελίωση των πρώτων σύγχρονων θεσμών.` },
    { epoch: 'Σήμερα (2026)', content: `Δυναμική εξέλιξη σε σύγχρονο ευρωπαϊκό κόμβο, με σεβασμό στην πολιτιστική κληρονομιά και προσανατολισμό στην καινοτομία και την πράσινη ανάπτυξη.` }
  ]);

  return `
    <div class="space-y-4">

      <!-- Historical Overview Card -->
      <div class="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/60 text-slate-200 shadow-lg">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <i class="fa-solid fa-landmark-dome"></i>
            <span>Ιστορικό Υπόβαθρο & Εξέλιξη</span>
          </div>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-semibold">
            ${entity.stats?.founded ? `Ίδρυση: ${entity.stats.founded}` : (isCity ? 'Ιστορική Πόλη' : 'Ιστορικό Έθνος')}
          </span>
        </div>
        <p class="leading-relaxed text-xs sm:text-sm text-slate-300">${summary || 'Δεν υπάρχουν διαθέσιμες πληροφορίες.'}</p>
      </div>

      <!-- PROMINENT & FAMOUS HISTORICAL FIGURES -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-2">
            <i class="fa-solid fa-users-line"></i>
            <span>Σημαντικές & Επιφανείς Προσωπικότητες</span>
          </h4>
          <span class="text-[11px] text-slate-400">Έργο & Ιστορικό Αποτύπωμα</span>
        </div>

        <div class="grid grid-cols-1 gap-3 pt-1">
          ${people.map(p => {
            const bingQueryEsc = escapeStr(p.bingQuery || `${p.name} ${name} βιογραφία έργο`);
            const titleEsc = escapeStr(p.name);
            return `
              <div class="p-3.5 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-amber-500/40 transition flex flex-col gap-2 group">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 font-bold text-sm shadow">
                      <i class="fa-solid fa-feather-pointed"></i>
                    </div>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition flex items-center gap-2">
                        <span>${p.name}</span>
                        <span class="text-[10px] font-mono font-normal text-amber-400/90 px-1.5 py-0.2 rounded bg-amber-500/10 border border-amber-500/20">${p.years}</span>
                      </div>
                      <div class="text-[11px] text-slate-400 font-medium">${p.role}</div>
                    </div>
                  </div>

                  <!-- IN-APP BING SEARCH BUTTON -->
                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>

                <!-- Work & Impact Description -->
                <div class="pl-10 space-y-1 text-xs leading-relaxed">
                  <div class="text-slate-200"><strong class="text-slate-400">Έργο:</strong> ${p.work}</div>
                  <div class="text-slate-300 italic"><strong class="text-slate-400 not-italic">Κληρονομιά:</strong> «${p.legacy}»</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- DECISIVE BATTLES, CONFLICTS & POLITICAL DEVELOPMENTS -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-rose-400 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved"></i>
            <span>Ιστορικές Μάχες, Συγκρούσεις & Πολιτικές Εξελίξεις</span>
          </h4>
          <span class="text-[11px] text-slate-400">Καθοριστικοί Σταθμοί</span>
        </div>

        <div class="space-y-3 pt-1">
          ${battles.map(b => {
            const bingQueryEsc = escapeStr(b.bingQuery || `${b.title} ${name} ιστορία μάχη`);
            const titleEsc = escapeStr(b.title);
            return `
              <div class="p-3.5 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-rose-500/40 transition flex flex-col gap-2">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg ${b.badgeColor || 'bg-slate-700 text-slate-300'} flex items-center justify-center shrink-0 text-xs shadow">
                      <i class="${b.icon || 'fa-solid fa-shield-halved'}"></i>
                    </span>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white">${b.title}</div>
                      <div class="text-[11px] text-slate-400 font-mono">${b.date}</div>
                    </div>
                  </div>

                  <!-- IN-APP BING SEARCH BUTTON -->
                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>

                <div class="pl-9 space-y-1 text-xs text-slate-300 leading-relaxed">
                  ${b.forces ? `<div><strong class="text-slate-400">Δυνάμεις:</strong> ${b.forces}</div>` : ''}
                  ${b.outcome ? `<div><strong class="text-amber-400">Έκβαση:</strong> ${b.outcome}</div>` : ''}
                  <div><strong class="text-slate-400">Ιστορικό Αποτέλεσμα:</strong> ${b.impact}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- HISTORICAL HERITAGE & MONUMENTS (Great Idea: Relics, Archives & Architecture) -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-2">
            <i class="fa-solid fa-landmark"></i>
            <span>Ιστορικά Μνημεία, Αρχαιολογία & Κειμήλια</span>
          </h4>
          <span class="text-[11px] text-slate-400">Πολιτιστικοί Θησαυροί</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          ${monuments.map(m => {
            const bingQueryEsc = escapeStr(m.bingQuery || `${m.title} ${name} μνημείο ιστορία`);
            const titleEsc = escapeStr(m.title);
            return `
              <div class="p-3.5 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-emerald-500/40 transition flex flex-col justify-between gap-2.5">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <div class="flex items-center gap-2 font-bold text-white text-xs sm:text-sm">
                      <i class="${m.icon || 'fa-solid fa-landmark'} text-emerald-400"></i>
                      <span>${m.title}</span>
                    </div>
                    <span class="text-[10px] text-amber-400 font-mono font-semibold shrink-0">${m.date}</span>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed">${m.description}</p>
                </div>

                <div class="pt-2 border-t border-slate-800 flex items-center justify-end">
                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[10px] font-semibold transition flex items-center gap-1.5 cursor-pointer">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 100 YEARS COMPARISON (1926 vs 2026: Then & Now) -->
      ${pastVsPresent && pastVsPresent.length ? `
        <div class="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-indigo-500/30 shadow-xl space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <h4 class="text-xs uppercase tracking-wider font-bold text-indigo-300 flex items-center gap-2">
              <i class="fa-solid fa-clock-rotate-left text-amber-400"></i>
              <span>Ιστορικό «Τότε & Τώρα»: Ένας Αιώνας Εξέλιξης (1926 - 2026)</span>
            </h4>
            <span class="text-[10px] text-amber-400 font-mono font-bold">100 ΧΡΟΝΙΑ</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            ${pastVsPresent.map((p, idx) => `
              <div class="p-3.5 rounded-xl ${idx === 0 ? 'bg-amber-950/20 border-amber-500/30' : 'bg-indigo-950/20 border-indigo-500/30'} border">
                <div class="text-xs font-bold ${idx === 0 ? 'text-amber-400' : 'text-indigo-300'} mb-1 flex items-center gap-1.5">
                  <i class="${idx === 0 ? 'fa-solid fa-hourglass-start' : 'fa-solid fa-rocket'}"></i>
                  <span>${p.epoch}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${p.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- CHRONOLOGICAL TIMELINE MILESTONES -->
      ${highlights.length ? `
        <div class="mt-4">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-timeline text-amber-400"></i> Χρονολόγιο Ιστορικών Σταθμών
          </h4>
          <div class="space-y-2.5">
            ${highlights.map(h => `
              <div onclick="window.openDeepDive('${escapeStr(h.event)}', '${escapeStr(h.desc)}', '${escapeStr(name)}')" class="p-3 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl cursor-pointer group">
                <div class="flex items-center justify-between gap-2 mb-0.5">
                  <span class="text-[11px] font-mono font-bold text-amber-400">${h.year}</span>
                  <span class="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition font-semibold flex items-center gap-1">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Λεπτομέρειες
                  </span>
                </div>
                <div class="font-bold text-slate-100 text-xs sm:text-sm group-hover:text-amber-200 transition">${h.event}</div>
                <div class="text-xs text-slate-300 mt-0.5 leading-relaxed">${h.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;
}
