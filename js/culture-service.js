/**
 * Culture Service
 * Provides rich cultural data and rendering for the Culture (Πολιτισμός) tab:
 * - Music & Traditional Sounds (Bands, Traditional Instruments, Composers, Songs)
 * - Theatre & Performing Arts (Municipal Theatres, Ancient Theatres, Historical Plays)
 * - Cinema & Films (Movies filmed in or inspired by the region, Film Festivals, Directors)
 * - Cultural Festivals, Customs & Living Heritage (Carnivals, Lanterns, Arts Festivals)
 * - In-App Bing Search integration with automatic AI Overview inside the map frame
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
 * Registry of Cultural Pillars for Cities & Countries
 */
const CULTURE_DATABASE = {
  // Kozani
  'kozani': {
    music: [
      {
        title: 'Τα Χάλκινα της Κοζάνης & Δυτικής Μακεδονίας',
        period: 'Παραδοσιακή Μουσική & Σύγχρονη Εξέλιξη',
        icon: 'fa-solid fa-guitar text-amber-400',
        description: 'Εκρηκτικός συνδυασμός χάλκινων πνευστών (τρομπέτες, κλαρίνα, τρομπόνια, ευφώνια και νταούλια). Χαρακτηρίζουν κάθε γιορτή και πανηγύρι με αυθεντικούς βαλκανικούς και μακεδονικούς ρυθμούς.',
        bingQuery: 'Χάλκινα Κοζάνης παράδοση μουσική ορχήστρες'
      },
      {
        title: 'Φιλαρμονική Δήμου Κοζάνης «Πανδώρα»',
        period: 'Ίδρυση 1902 (Από τις αρχαιότερες στην Ελλάδα)',
        icon: 'fa-solid fa-music text-sky-400',
        description: 'Ιστορικό μουσικό σώμα που συμπλήρωσε πάνω από έναν αιώνα συνεχούς παρουσίας. Συνοδεύει όλες τις ιστορικές επετείους, λιτανείες και καλλιτεχνικά φεστιβάλ της πόλης.',
        bingQuery: 'Φιλαρμονική Πανδώρα Κοζάνη ιστορία 1902'
      },
      {
        title: 'Τραγούδια των Φανών & Χορός «Έντεκα»',
        period: 'Αποκριάτικη Μουσική Παράδοση',
        icon: 'fa-solid fa-compact-disc text-rose-400',
        description: 'Μοναδικό ρεπερτόριο σατιρικών και ιστορικών τραγουδιών στο γνήσιο κοζανίτικο γλωσσικό ιδίωμα. Ο περίφημος χορός «Έντεκα» (σε σύνθετο ρυθμό 11/8) αποτελεί το μουσικό σήμα κατατεθέν της περιοχής.',
        bingQuery: 'Κοζάνη τραγούδια Φανών χορός Έντεκα ρυθμός'
      }
    ],
    theatre: [
      {
        title: 'ΔΗ.ΠΕ.ΘΕ. Κοζάνης — Το Πρώτο Δημοτικό Θέατρο στην Ελλάδα',
        period: 'Ίδρυση 1983 (Υπουργείο Πολιτισμού - Μελίνα Μερκούρη)',
        icon: 'fa-solid fa-masks-theater text-emerald-400',
        description: 'Ιδρύθηκε πρώτο σε ολόκληρη τη χώρα στο πλαίσιο της πολιτιστικής αποκέντρωσης. Έχει ανεβάσει εκατοντάδες παραστάσεις κλασικού και σύγχρονου δραματολογίου, αποτελώντας φάρο θεατρικής παιδείας.',
        bingQuery: 'ΔΗΠΕΘΕ Κοζάνης 1983 Μελίνα Μερκούρη ιστορία'
      },
      {
        title: '«Ελλάς» του Γεωργίου Λασσάνη (1819)',
        period: 'Το Πρώτο Νεοελληνικό Θεατρικό Έργο',
        icon: 'fa-solid fa-scroll text-amber-300',
        description: 'Ο Κοζανίτης λόγιος και οπλαρχηγός Γεώργιος Λασσάνης έγραψε στην Οδησσό το πατριωτικό δράμα «Ελλάς», εγκαινιάζοντας τη νεοελληνική δραματουργία πριν την Επανάσταση του 1821.',
        bingQuery: 'Γεώργιος Λασσάνης Ελλάς θεατρικό έργο 1819 Οδησσός'
      },
      {
        title: 'Υπαίθριο Δημοτικό Θέατρο Κοζάνης',
        period: 'Άλσος Αγίου Δημητρίου',
        icon: 'fa-solid fa-people-roof text-indigo-400',
        description: 'Χτισμένο μέσα στο καταπράσινο πευκοδάσος του Αγίου Δημητρίου, φιλοξενεί κάθε καλοκαίρι παραστάσεις αρχαίας τραγωδίας, κωμωδίας και συναυλίες κορυφαίων καλλιτεχνών.',
        bingQuery: 'Υπαίθριο Δημοτικό Θέατρο Κοζάνης Άγιος Δημήτριος εκδηλώσεις'
      }
    ],
    cinema: [
      {
        title: 'Οι Ταινίες του Θόδωρου Αγγελόπουλου στη Δυτική Μακεδονία',
        period: '1986 - 1991 (Κινηματογραφικά Αριστουργήματα)',
        icon: 'fa-solid fa-film text-cyan-400',
        description: '«Το Μετέωρο Βήμα του Πελαργού» (1991) με τους Marcello Mastroianni και Jeanne Moreau, «Τοπίο στην Ομίχλη» (1988) και «Ο Μελισσοκόμος» (1986). Η μοναδική χειμερινή ατμόσφαιρα, η ομίχλη και τα τοπία της περιοχής ενέπνευσαν τον παγκόσμιο Έλληνα δημιουργό.',
        bingQuery: 'Θόδωρος Αγγελόπουλος ταινίες Δυτική Μακεδονία Μετέωρο Βήμα Πελαργού'
      },
      {
        title: 'Κινηματογράφος «Ολύμπιον» & Κινηματογραφική Λέσχη Κοζάνης',
        period: 'Ιστορική Αίθουσα & Cinephile Κοινότητα',
        icon: 'fa-solid fa-clapperboard text-amber-400',
        description: 'Ο διατηρητέος κινηματογράφος «Ολύμπιον» στην κεντρική πλατεία και η δραστήρια Κινηματογραφική Λέσχη προσφέρουν επί δεκαετίες αφιερώματα σε ανεξάρτητο, ευρωπαϊκό και διεθνές σινεμά.',
        bingQuery: 'Κινηματογραφική Λέσχη Κοζάνης Ολύμπιον αφιερώματα'
      }
    ],
    festivals: [
      {
        title: 'Κοζανίτικο Καρναβάλι & Το Άναμμα των Φανών',
        period: 'Άυλη Πολιτιστική Κληρονομιά UNESCO / Εθνικό Ευρετήριο',
        icon: 'fa-solid fa-fire text-orange-500',
        description: 'Το αρχαιότερο και πιο αυθεντικό έθιμο της πόλης. Τη νύχτα της Μεγάλης Αποκριάς ανάβουν γιγάντιες φωτιές (Φανοί) σε 15 γειτονιές, με παραδοσιακό κρασί, κοζανίτικα κιχιά και ακατάπαυστο τραγούδι μέχρι το ξημέρωμα.',
        bingQuery: 'Κοζανίτικο καρναβάλι Φανοί έθιμο άναμμα ιστορία'
      },
      {
        title: 'Πολιτιστικό Φεστιβάλ «Λασσάνεια»',
        period: 'Ετήσιο Καλοκαιρινό Φεστιβάλ',
        icon: 'fa-solid fa-star text-amber-400',
        description: 'Ο κορυφαίος πολιτιστικός θεσμός του καλοκαιριού στη Δυτική Μακεδονία, αφιερωμένος στη μνήμη του Γεωργίου Λασσάνη, με συναυλίες, εικαστικές εκθέσεις και χορευτικά ανταμώματα.',
        bingQuery: 'Λασσάνεια Κοζάνη πολιτιστικές εκδηλώσεις συναυλίες'
      },
      {
        title: 'Γιορτή του Κρόκου στα Κροκοχώρια',
        period: 'Οκτώβριος - Νοέμβριος (Εποχή Ανθοφορίας)',
        icon: 'fa-solid fa-seedling text-purple-400',
        description: 'Γιορτή αφιερωμένη στον «κόκκινο χρυσό» της μακεδονικής γης. Περιλαμβάνει επισκέψεις στα μωβ άνθη του κρόκου, γαστρονομικές δοκιμές και παραδοσιακά δρώμενα.',
        bingQuery: 'Γιορτή Κρόκου Κοζάνης συγκομιδή σαφράν εκδηλώσεις'
      }
    ]
  },

  // Athens
  'athens': {
    music: [
      {
        title: 'Το Ρεμπέτικο & η Αστική Λαϊκή Σκηνή',
        period: '1922 - Σήμερα (Άυλη Πολιτιστική Κληρονομιά UNESCO)',
        icon: 'fa-solid fa-guitar text-amber-400',
        description: 'Γεννήθηκε στις γειτονιές της Αθήνας και του Πειραιά μετά τη Μικρασιατική Καταστροφή (Μάρκος Βαμβακάρης, Βασίλης Τσιτσάνης).',
        bingQuery: 'Ρεμπέτικο τραγούδι Αθήνα Πειραιάς ιστορία UNESCO'
      },
      {
        title: 'Η Αθηναϊκή Καντάδα στην Πλάκα',
        period: 'Τέλη 19ου - Αρχές 20ού Αιώνα',
        icon: 'fa-solid fa-music text-rose-400',
        description: 'Ρομαντικές μελωδίες με κιθάρες και μαντολίνα στα σοκάκια της Πλάκας και των Αναφιώτικων, επηρεασμένες από την επτανησιακή πολυφωνία.',
        bingQuery: 'Αθηναϊκή καντάδα Πλάκα ιστορία τραγούδια'
      }
    ],
    theatre: [
      {
        title: 'Ωδείο Ηρώδου του Αττικού (Ηρώδειο)',
        period: '161 μ.Χ. (Ρωμαϊκή Εποχή) - Σήμερα',
        icon: 'fa-solid fa-landmark text-amber-400',
        description: 'Το επιβλητικό ρωμαϊκό ωδείο κάτω από την Ακρόπολη, κεντρική σκηνή του Φεστιβάλ Αθηνών με εμφανίσεις κορυφαίων καλλιτεχνών (Μαρία Κάλλας, Luciano Pavarotti).',
        bingQuery: 'Ηρώδειο Ωδείο Ηρώδου Αττικού Φεστιβάλ Αθηνών ιστορία'
      },
      {
        title: 'Εθνικό Θέατρο (Κτίριο Τσίλλερ)',
        period: 'Ίδρυση 1900 (Ερνέστος Τσίλλερ)',
        icon: 'fa-solid fa-masks-theater text-emerald-400',
        description: 'Το αρχιτεκτονικό στολίδι της οδού Αγίου Κωνσταντίνου και η ιστορική κοιτίδα της νεοελληνικής θεατρικής τέχνης.',
        bingQuery: 'Εθνικό Θέατρο κτίριο Τσίλλερ ιστορία παραστάσεις'
      }
    ],
    cinema: [
      {
        title: 'Η Χρυσή Εποχή του Ελληνικού Κινηματογράφου',
        period: '1950 - 1970 (Finos Film & Διεθνής Αναγνώριση)',
        icon: 'fa-solid fa-film text-cyan-400',
        description: '«Στέλλα» (1955) του Μιχάλη Κακογιάννη με τη Μελίνα Μερκούρη, «Ποτέ την Κυριακή» (Όσκαρ Μουσικής Μάνου Χατζιδάκι 1960).',
        bingQuery: 'Χρυσή εποχή ελληνικού κινηματογράφου Φίνος Φιλμ Αθήνα'
      }
    ],
    festivals: [
      {
        title: 'Φεστιβάλ Αθηνών & Επιδαύρου',
        period: 'Από το 1955 (Ο κορυφαίος πολιτιστικός θεσμός της χώρας)',
        icon: 'fa-solid fa-ticket text-purple-400',
        description: 'Διεθνές φεστιβάλ παραστατικών τεχνών που φιλοξενεί όπερα, αρχαίο δράμα, κλασικό χορό και σύγχρονο θέατρο.',
        bingQuery: 'Φεστιβάλ Αθηνών Επιδαύρου ιστορία πρόγραμμα'
      }
    ]
  },

  // Thessaloniki
  'thessaloniki': {
    music: [
      {
        title: 'Η Μουσική Σκηνή της Θεσσαλονίκης & το Ελληνικό Ροκ',
        period: '1980 - Σήμερα',
        icon: 'fa-solid fa-guitar text-rose-500',
        description: 'Η πόλη γέννησε τις κορυφαίες ελληνικές ροκ και έντεχνες μπάντες (Τρύπες, Ξύλινα Σπαθιά, Νίκος Παπάζογλου, Χειμερινοί Κολυμβητές).',
        bingQuery: 'Μουσική σκηνή Θεσσαλονίκης Τρύπες Ξύλινα Σπαθιά Παπάζογλου'
      }
    ],
    theatre: [
      {
        title: 'Κρατικό Θέατρο Βορείου Ελλάδος (ΚΘΒΕ)',
        period: 'Ίδρυση 1961 (Σωκράτης Καραντινός)',
        icon: 'fa-solid fa-masks-theater text-emerald-400',
        description: 'Ο μεγαλύτερος θεατρικός οργανισμός στην Ελλάδα με 5 μόνιμες σκηνές (Βασιλικό Θέατρο, Εταιρεία Μακεδονικών Σπουδών, Μονή Λαζαριστών).',
        bingQuery: 'Κρατικό Θέατρο Βορείου Ελλάδος ΚΘΒΕ ιστορία'
      }
    ],
    cinema: [
      {
        title: 'Διεθνές Φεστιβάλ Κινηματογράφου Θεσσαλονίκης (TIFF)',
        period: 'Από το 1960 (Κορυφαίο κινηματογραφικό φεστιβάλ στα Βαλκάνια)',
        icon: 'fa-solid fa-film text-amber-400',
        description: 'Ετήσιο διεθνές ραντεβού του παγκόσμιου ανεξάρτητου κινηματογράφου με απονομή του «Χρυσού Αλέξανδρου» στις ιστορικές αποθήκες του Λιμανιού.',
        bingQuery: 'Φεστιβάλ Κινηματογράφου Θεσσαλονίκης Χρυσός Αλέξανδρος ιστορία'
      }
    ],
    festivals: [
      {
        title: 'Τα «Δημήτρια» Θεσσαλονίκης',
        period: 'Βυζαντινή Εποχή / Αναβίωση από το 1966',
        icon: 'fa-solid fa-star text-amber-300',
        description: 'Ο ιστορικότερος πολιτιστικός θεσμός της πόλης με εκθέσεις, χορό, θέατρο και συναυλίες προς τιμήν του πολιούχου Αγίου Δημητρίου.',
        bingQuery: 'Δημήτρια Θεσσαλονίκης πολιτιστικό φεστιβάλ ιστορία'
      }
    ]
  }
};

/**
 * Fallback generator for locations not explicitly mapped
 */
function getGenericCulture(entity) {
  const name = entity.name || 'Περιοχή';
  const englishName = entity.englishName || name;
  return {
    music: [
      {
        title: `Μουσική Παράδοση & Ήχοι (${name})`,
        period: 'Παραδοσιακή & Σύγχρονη Μουσική',
        icon: 'fa-solid fa-music text-amber-400',
        description: `Τοπικοί ρυθμοί, παραδοσιακά όργανα και μελωδίες που συνοδεύουν τις γιορτές και την καθημερινή ζωή στην περιοχή ${name}.`,
        bingQuery: `${englishName} traditional music songs folklore instruments`
      }
    ],
    theatre: [
      {
        title: `Θεατρική & Παραστατική Δημιουργία (${name})`,
        period: 'Τοπικές Σκηνές & Πολιτιστικά Κέντρα',
        icon: 'fa-solid fa-masks-theater text-emerald-400',
        description: `Θεατρικές παραγωγές, υπαίθρια φεστιβάλ και δρώμενα παραστατικών τεχνών που αναδεικνύουν την τοπική πνευματική ζωή.`,
        bingQuery: `${englishName} theatre performing arts cultural center`
      }
    ],
    cinema: [
      {
        title: `Κινηματογράφος & Ταινίες (${name})`,
        period: 'Κινηματογραφικές Παραγωγές & Τοπία',
        icon: 'fa-solid fa-film text-cyan-400',
        description: `Ταινίες και ντοκιμαντέρ που γυρίστηκαν ή εμπνεύστηκαν από την ιστορία, τους ανθρώπους και τα φυσικά τοπία της περιοχής.`,
        bingQuery: `${englishName} movies films cinema festival`
      }
    ],
    festivals: [
      {
        title: `Πολιτιστικά Φεστιβάλ & Έθιμα (${name})`,
        period: 'Ετήσιοι Πολιτιστικοί Θεσμοί',
        icon: 'fa-solid fa-star text-purple-400',
        description: `Παραδοσιακά πανηγύρια, γιορτές τοπικών προϊόντων και καλλιτεχνικά φεστιβάλ που ενώνουν την κοινότητα.`,
        bingQuery: `${englishName} cultural festivals traditions events`
      }
    ]
  };
}

export function getCultureData(entity) {
  const id = (entity.id || '').toLowerCase();
  return CULTURE_DATABASE[id] || getGenericCulture(entity);
}

/**
 * Main Renderer for the Culture (Πολιτισμός) Tab
 */
export function renderCultureTabHtml(entity) {
  if (!entity) return '';

  const name = entity.name || 'Περιοχή';
  const cultData = getCultureData(entity);

  // General summary narrative
  const summary = entity.cult?.summary || entity.cult?.overview
    || (typeof entity.culture === 'string' ? entity.culture : '')
    || [entity.cult?.traditions, entity.cult?.cuisine].filter(Boolean).join(' ')
    || `Πλούσια πολιτιστική κληρονομιά που συνδυάζει ζωντανές μουσικές παραδόσεις, θεατρική πρωτοπορία, κινηματογραφικές μνήμες και ετήσια λαϊκά δρώμενα.`;

  return `
    <div class="space-y-4">

      <!-- Cultural Summary Card -->
      <div class="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/60 text-slate-200 shadow-lg">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-violet-400 font-bold text-sm">
            <i class="fa-solid fa-masks-theater"></i>
            <span>Πολιτισμός, Τέχνες & Ζωντανή Παράδοση</span>
          </div>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono font-semibold">
            Πολιτιστική Ταυτότητα
          </span>
        </div>
        <p class="leading-relaxed text-xs sm:text-sm text-slate-300">${summary}</p>
      </div>

      <!-- 1. ΜΟΥΣΙΚΗ & ΠΑΡΑΔΟΣΙΑΚΟΙ ΗΧΟΙ -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-2">
            <i class="fa-solid fa-music"></i>
            <span>Μουσική, Ήχοι & Μουσικά Σύνολα</span>
          </h4>
          <span class="text-[11px] text-slate-400">Μελωδική Κληρονομιά</span>
        </div>

        <div class="grid grid-cols-1 gap-2.5 pt-1">
          ${cultData.music.map(m => {
            const bingQueryEsc = escapeStr(m.bingQuery || `${m.title} ${name} μουσική`);
            const titleEsc = escapeStr(m.title);
            return `
              <div class="p-3 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-amber-500/40 transition flex flex-col gap-2">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 text-xs">
                      <i class="${m.icon}"></i>
                    </span>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white">${m.title}</div>
                      <div class="text-[10px] text-amber-400/90 font-mono">${m.period}</div>
                    </div>
                  </div>

                  <!-- IN-APP BING SEARCH BUTTON (With AI Overview in "ΟΛΑ") -->
                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>AI Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed pl-9">${m.description}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 2. ΘΕΑΤΡΟ & ΠΑΡΑΣΤΑΤΙΚΕΣ ΤΕΧΝΕΣ -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-2">
            <i class="fa-solid fa-masks-theater"></i>
            <span>Θέατρο & Παραστατικές Τέχνες</span>
          </h4>
          <span class="text-[11px] text-slate-400">Σκηνική Δημιουργία</span>
        </div>

        <div class="grid grid-cols-1 gap-2.5 pt-1">
          ${cultData.theatre.map(t => {
            const bingQueryEsc = escapeStr(t.bingQuery || `${t.title} ${name} θέατρο`);
            const titleEsc = escapeStr(t.title);
            return `
              <div class="p-3 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-emerald-500/40 transition flex flex-col gap-2">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 text-xs">
                      <i class="${t.icon}"></i>
                    </span>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white">${t.title}</div>
                      <div class="text-[10px] text-emerald-400/90 font-mono">${t.period}</div>
                    </div>
                  </div>

                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>AI Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed pl-9">${t.description}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. ΚΙΝΗΜΑΤΟΓΡΑΦΟΣ & ΤΑΙΝΙΕΣ -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-2">
            <i class="fa-solid fa-film"></i>
            <span>Κινηματογράφος & Ταινίες</span>
          </h4>
          <span class="text-[11px] text-slate-400">Έβδομη Τέχνη</span>
        </div>

        <div class="grid grid-cols-1 gap-2.5 pt-1">
          ${cultData.cinema.map(c => {
            const bingQueryEsc = escapeStr(c.bingQuery || `${c.title} ${name} ταινία κινηματογράφος`);
            const titleEsc = escapeStr(c.title);
            return `
              <div class="p-3 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-cyan-500/40 transition flex flex-col gap-2">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0 text-xs">
                      <i class="${c.icon}"></i>
                    </span>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white">${c.title}</div>
                      <div class="text-[10px] text-cyan-400/90 font-mono">${c.period}</div>
                    </div>
                  </div>

                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>AI Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed pl-9">${c.description}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 4. ΚΑΛΛΙΤΕΧΝΙΚΑ ΔΡΩΜΕΝΑ, ΕΘΙΜΑ & ΦΕΣΤΙΒΑΛ -->
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 class="text-xs uppercase tracking-wider font-bold text-purple-400 flex items-center gap-2">
            <i class="fa-solid fa-fire"></i>
            <span>Καλλιτεχνικά Δρώμενα, Έθιμα & Φεστιβάλ</span>
          </h4>
          <span class="text-[11px] text-slate-400">Ζωντανή Παράδοση</span>
        </div>

        <div class="grid grid-cols-1 gap-2.5 pt-1">
          ${cultData.festivals.map(f => {
            const bingQueryEsc = escapeStr(f.bingQuery || `${f.title} ${name} έθιμο φεστιβάλ`);
            const titleEsc = escapeStr(f.title);
            return `
              <div class="p-3 rounded-xl bg-slate-850/80 border border-slate-700/50 hover:border-purple-500/40 transition flex flex-col gap-2">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0 text-xs">
                      <i class="${f.icon}"></i>
                    </span>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-white">${f.title}</div>
                      <div class="text-[10px] text-purple-400/90 font-mono">${f.period}</div>
                    </div>
                  </div>

                  <button onclick="window.openInAppBingSearch('${bingQueryEsc}', '${titleEsc}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 hover:text-white text-[11px] font-semibold transition shrink-0 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer" title="Άνοιγμα Έρευνας στο πλαίσιο χάρτη">
                    <i class="fa-brands fa-microsoft text-[10px]"></i>
                    <span>AI Έρευνα στο Bing</span>
                    <i class="fa-solid fa-expand text-[9px] opacity-75"></i>
                  </button>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed pl-9">${f.description}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
}
