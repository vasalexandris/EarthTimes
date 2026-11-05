/**
 * UI Module
 * Handles DOM rendering for Dossier, Breadcrumbs, Tabs, Flight Status, Filters,
 * Base Map Layer selector, Date display, and Landing Page visibility.
 */

export function updateCurrentDate() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  // Greek locale format
  const formatted = now.toLocaleDateString('el-GR', options);
  const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  const el1 = document.getElementById('currentDateDisplay');
  if (el1) el1.innerText = capitalized;

  const el2 = document.getElementById('landingDateDisplay');
  if (el2) el2.innerText = capitalized;
}

export function updateStatusBadge(text) {
  const el = document.getElementById('flightStatusText');
  if (el) el.innerText = text;
}

export function updateJumpSelect(val) {
  const select = document.getElementById('quickJumpSelect');
  if (select) select.value = val;
}

export function updateBreadcrumbs(scope, stateOrCountry, city) {
  const bcWorld = document.getElementById('bc-world');
  const bcStateSep = document.getElementById('bc-state-sep');
  const bcState = document.getElementById('bc-state');
  const bcCitySep = document.getElementById('bc-city-sep');
  const bcCity = document.getElementById('bc-city');

  if (!bcWorld) return;

  if (scope === 'world') {
    bcWorld.className = 'text-emerald-400 font-bold flex items-center gap-1.5';
    if (bcStateSep) bcStateSep.classList.add('hidden');
    if (bcState) bcState.classList.add('hidden');
    if (bcCitySep) bcCitySep.classList.add('hidden');
    if (bcCity) bcCity.classList.add('hidden');
  } else if (scope === 'country') {
    bcWorld.className = 'text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition';
    if (bcStateSep) bcStateSep.classList.remove('hidden');
    if (bcState) {
      bcState.classList.remove('hidden');
      bcState.innerText = stateOrCountry ? stateOrCountry.name : 'Χώρα';
      bcState.className = 'text-sky-300 font-bold hover:text-sky-200 transition';
    }
    if (bcCitySep) bcCitySep.classList.add('hidden');
    if (bcCity) bcCity.classList.add('hidden');
  } else if (scope === 'state' || scope === 'usa') {
    bcWorld.className = 'text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition';
    if (bcStateSep) bcStateSep.classList.remove('hidden');
    if (bcState) {
      bcState.classList.remove('hidden');
      bcState.innerText = stateOrCountry ? stateOrCountry.name : 'ΗΠΑ';
      bcState.className = 'text-sky-300 font-medium hover:text-sky-200 transition';
    }
    if (bcCitySep) bcCitySep.classList.add('hidden');
    if (bcCity) bcCity.classList.add('hidden');
  } else if (scope === 'city') {
    bcWorld.className = 'text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition';
    if (bcStateSep) bcStateSep.classList.remove('hidden');
    if (bcState) {
      bcState.classList.remove('hidden');
      bcState.innerText = stateOrCountry ? stateOrCountry.name : 'Ελλάδα';
      bcState.className = 'text-slate-400 hover:text-sky-300 transition';
    }
    if (bcCitySep) bcCitySep.classList.remove('hidden');
    if (bcCity) {
      bcCity.classList.remove('hidden');
      bcCity.innerText = city ? city.name : '';
    }
  }
}

export function updateBaseLayerUI(activeKey) {
  const layerKeys = ['dark', 'satellite', 'osm', 'topo'];
  layerKeys.forEach(k => {
    const btn = document.getElementById(`layer-btn-${k}`);
    if (!btn) return;
    if (k === activeKey) {
      btn.className = 'layer-switcher-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 text-white shadow-md flex items-center gap-1.5 transition';
    } else {
      btn.className = 'layer-switcher-btn px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 bg-slate-900/60 flex items-center gap-1.5 transition border border-slate-700/50';
    }
  });
}

export function updatePoiFilterButtons(activeCategory) {
  const filterIds = ['all', 'history', 'culture', 'nature'];
  filterIds.forEach(id => {
    const btn = document.getElementById(`filter-${id}`);
    if (!btn) return;
    if (id === activeCategory) {
      btn.className = 'poi-filter-btn px-2.5 py-1 rounded-md bg-sky-600 text-white font-medium hover:bg-sky-500 transition';
    } else {
      btn.className = 'poi-filter-btn px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
    }
  });
}

export function updateTabButtons(activeTab) {
  const tabs = ['geo', 'hist', 'demo', 'cult', 'timeline'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-${t}`);
    if (!btn) return;
    if (t === activeTab) {
      btn.className = 'tab-btn flex-1 py-2.5 px-3 border-b-2 border-sky-500 text-sky-400 font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap bg-slate-800/30';
    } else {
      btn.className = 'tab-btn flex-1 py-2.5 px-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 whitespace-nowrap';
    }
  });
}

export function renderDossier(entity, entityType = 'state', currentTab = 'geo', activeYear = null, activeSpots = [], isPlaying = false) {
  if (!entity) return;

  const badgeCategory = document.getElementById('badgeCategory');
  if (badgeCategory) {
    if (entityType === 'world') {
      badgeCategory.innerText = 'Παγκόσμιος Φάκελος Γης';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-600/50';
    } else if (entityType === 'country') {
      badgeCategory.innerText = 'Εθνικός Φάκελος Χώρας';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-600/50';
    } else if (entityType === 'city') {
      badgeCategory.innerText = 'Αστικός Φάκελος';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-amber-900/60 text-amber-300 border border-amber-700/50';
    } else {
      badgeCategory.innerText = 'Πολιτειακός / Περιφερειακός Φάκελος';
      badgeCategory.className = 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-sky-900/60 text-sky-300 border border-sky-700/50';
    }
  }

  const badgeNickname = document.getElementById('badgeNickname');
  if (badgeNickname) {
    badgeNickname.innerText = entity.nickname ? `"${entity.nickname}"` : '';
  }

  const entityTitle = document.getElementById('entityTitle');
  if (entityTitle) entityTitle.innerText = entity.name;

  const entitySubtitle = document.getElementById('entitySubtitle');
  if (entitySubtitle) {
    if (entityType === 'world') {
      entitySubtitle.innerText = `${entity.englishName} • 3ος Πλανήτης Ηλιακού Συστήματος`;
    } else if (entityType === 'country') {
      entitySubtitle.innerText = `${entity.englishName} • Πρωτεύουσα: ${entity.capital || 'Αθήνα'}`;
    } else if (entityType === 'city') {
      entitySubtitle.innerText = `${entity.englishName}`;
    } else {
      entitySubtitle.innerText = `${entity.englishName} • Πρωτεύουσα: ${entity.capital || 'Βοστώνη'}`;
    }
  }

  const stat1Label = document.getElementById('stat1-label');
  const stat2Label = document.getElementById('stat2-label');
  const stat3Label = document.getElementById('stat3-label');
  const stat1 = document.getElementById('stat1');
  const stat2 = document.getElementById('stat2');
  const stat3 = document.getElementById('stat3');

  if (entityType === 'world') {
    if (stat1Label) stat1Label.innerText = 'Πληθυσμός';
    if (stat1) stat1.innerText = entity.stats?.population || '8.15 Δισ.';

    if (stat2Label) stat2Label.innerText = 'Κράτη / Ήπειροι';
    if (stat2) stat2.innerText = `${entity.stats?.countries?.split(' ')[0] || '195'} / 7`;

    if (stat3Label) stat3Label.innerText = 'Επιφάνεια';
    if (stat3) stat3.innerText = entity.stats?.area || '510M km²';
  } else if (entityType === 'country') {
    if (stat1Label) stat1Label.innerText = 'Πληθυσμός';
    if (stat1) stat1.innerText = entity.stats?.population || '-';

    if (stat2Label) stat2Label.innerText = 'Ίδρυση / Ανεξαρτησία';
    if (stat2) stat2.innerText = entity.stats?.founded || '-';

    if (stat3Label) stat3Label.innerText = 'Έκταση / ΑΕΠ';
    if (stat3) stat3.innerText = entity.stats?.area || entity.stats?.gdp || '-';
  } else {
    if (stat1Label) stat1Label.innerText = 'Πληθυσμός';
    if (stat1) stat1.innerText = entity.stats?.population || '-';

    if (stat2Label) stat2Label.innerText = entityType === 'city' ? 'Ορόσημο' : 'Ίδρυση / Ενσωμ.';
    if (stat2) stat2.innerText = entity.stats?.founded || entity.stats?.famousFor || '-';

    if (stat3Label) stat3Label.innerText = 'Έκταση / ΑΕΠ';
    if (stat3) stat3.innerText = entity.stats?.area || entity.stats?.gdp || '-';
  }

  const docuQuote = document.getElementById('docuQuote');
  if (docuQuote) docuQuote.innerText = entity.quote || '';

  updateTabButtons(currentTab);
  renderTabContent(currentTab, entity, activeYear, activeSpots, isPlaying);
}

export function updateTimelineLiveIndicator(isPlaying) {
  const dot = document.getElementById('timelineTabDot');
  if (dot) {
    if (isPlaying) dot.classList.remove('hidden');
    else dot.classList.add('hidden');
  }
}

export function getHistoricalContextForEra(entity, year) {
  const y = (year === 'all' || !year) ? 2026 : parseInt(year, 10);
  const id = entity.id || '';

  if (id === 'kozani') {
    if (y < 1920) {
      return {
        era: '1900 - 1920: Απελευθέρωση & Μακεδονική Αρχοντιά',
        summary: 'Η Κοζάνη απελευθερώνεται από τον οθωμανικό ζυγό στις 11 Οκτωβρίου 1912 μετά τη μάχη του Σαρανταπόρου. Στην κεντρική πλατεία δεσπόζει το καμπαναριό του Μαμάτσιου (1855) και τα πέτρινα αρχοντικά των εμπόρων κρόκου και γούνας.',
        keyFacts: [
          '1912: Είσοδος του Ελληνικού Στρατού και πανηγυρισμοί στην Πλατεία Νίκης',
          'Παραδοσιακά χάνια και καφενεία αγωγιατών γύρω από τον Άγιο Νικόλαο',
          'Άνθηση της καλλιέργειας και εξαγωγής του κρόκου Κοζάνης στην Κεντρική Ευρώπη'
        ]
      };
    } else if (y < 1945) {
      return {
        era: '1920 - 1945: Μεσοπόλεμος, Γράμματα & Παραδοσιακοί Φανοί',
        summary: 'Περίοδος πνευματικής άνθησης και διαφύλαξης των τοπικών παραδόσεων. Στο ιστορικό αναγνωστήριο φυλάσσεται η αυθεντική Χάρτα του Ρήγα Φεραίου (1797), ενώ στις ιστορικές γειτονιές (Σκ\'ρκα, Κεραμαριό, Πλατάνια) ανάβουν οι μεγάλοι Φανοί.',
        keyFacts: [
          'Ενίσχυση της ιστορικής Κοβενταρείου Δημοτικής Βιβλιοθήκης με χιλιάδες παλαίτυπα',
          'Ολονύχτια γλέντια γύρω από τους Φανούς με σκωπτικά αποκριάτικα τραγούδια',
          'Η πόλη διατηρεί τον παραδοσιακό μακεδονικό πολεοδομικό της ιστό'
        ]
      };
    } else if (y < 1970) {
      return {
        era: '1945 - 1970: Μεταπολεμική Ανοικοδόμηση & Πρώτα Ενεργειακά Έργα',
        summary: 'Μεταπολεμική αναγέννηση της Κοζάνης. Η κεντρική πλατεία ασφαλτοστρώνεται, ανοίγουν τα φημισμένα ζαχαροπλαστεία με τα ζεστά κιχιά, και ξεκινά η εκμετάλλευση των λιγνιτικών κοιτασμάτων που θα μετατρέψει την πόλη σε ενεργειακό κέντρο.',
        keyFacts: [
          'Έναρξη λειτουργίας των μεγάλων μονάδων παραγωγής ηλεκτρικής ενέργειας της ΔΕΗ',
          'Τα ζαχαροπλαστεία της Πλατείας Νίκης γίνονται το επίκεντρο της κοινωνικής ζωής',
          'Καθιέρωση των οργανωμένων αποκριάτικων παρελάσεων και εκδηλώσεων'
        ]
      };
    } else if (y < 1995) {
      return {
        era: '1970 - 1995: Ενεργειακή Καρδιά της Ελλάδας & Ανώτατη Εκπαίδευση',
        summary: 'Η Κοζάνη παράγει πάνω από το 60% της ηλεκτρικής ενέργειας της χώρας. Ιδρύονται ανώτατες σχολές, ενώ η πόλη αναβαθμίζει τις υποδομές της και δημιουργεί το πρώτο δημοτικό δίκτυο τηλεθέρμανσης στην Ελλάδα.',
        keyFacts: [
          'Κολοσσιαία βιομηχανική και οικονομική ανάπτυξη του λεκανοπεδίου',
          'Πρωτοποριακό δίκτυο τηλεθέρμανσης από τα θερμά νερά των σταθμών',
          'Ο κρόκος Κοζάνης αναγνωρίζεται ως προϊόν Προστατευόμενης Ονομασίας Προέλευσης (ΠΟΠ)'
        ]
      };
    } else {
      return {
        era: '1995 - 2026: Σύγχρονη Ευρωπαϊκή Πόλη, Πολιτισμός & Πράσινη Μετάβαση',
        summary: 'Η νέα Κοζάνη. Πλήρης πεζοδρόμηση του κέντρου, υπερσύγχρονο νέο campus του Πανεπιστημίου Δυτικής Μακεδονίας, εγκαινίαση της νέας βιοκλιματικής Κοβενταρείου Βιβλιοθήκης (2018) και ηγετικός ρόλος στη Δίκαιη Αναπτυξιακή Μετάβαση.',
        keyFacts: [
          '2018: Εγκαίνια του νέου εμβληματικού κτιρίου της Κοβενταρείου Βιβλιοθήκης',
          'Μετάβαση σε καθαρές πηγές ενέργειας (φωτοβολταϊκά, πράσινο υδρογόνο)',
          'Μοναδικός συνδυασμός σύγχρονης τεχνολογίας και ζωντανής αποκριάτικης παράδοσης'
        ]
      };
    }
  }

  if (id === 'athens') {
    if (y < 1920) {
      return {
        era: '1900 - 1920: Η Μπελ Επόκ των Αθηνών & τα Παλιά Τραμ',
        summary: 'Μια κομψή νεοκλασική πρωτεύουσα. Οι πλατείες Ομονοίας και Συντάγματος περιστοιχίζονται από μέγαρα του Τσίλλερ, ιππήλατα και ηλεκτρικά τραμ διασχίζουν την Πανεπιστημίου, και στα καφενεία συγκεντρώνεται η πνευματική ελίτ.',
        keyFacts: [
          'Νεοκλασικά ξενοδοχεία («Μπάγκειον», «Μέγας Αλέξανδρος») στην Ομόνοια',
          'Τα γραφικά ταβερνάκια της Πλάκας κάτω από τη φωτισμένη Ακρόπολη',
          'Επέκταση του δικτύου ηλεκτρικού σιδηροδρόμου'
        ]
      };
    } else if (y < 1945) {
      return {
        era: '1920 - 1945: Μεσοπόλεμος, Προσφυγιά & Σύγχρονες Υποδομές',
        summary: 'Η Αθήνα υποδέχεται εκατοντάδες χιλιάδες πρόσφυγες από τη Μικρά Ασία δημιουργώντας νέους συνοικισμούς. Το 1930 εγκαινιάζεται ο υπόγειος σταθμός Ομονοίας και το 1932 αποκαλύπτεται το Μνημείο του Αγνώστου Στρατιώτη στη Βουλή.',
        keyFacts: [
          '1930: Εγκαίνια του υπόγειου σταθμού Ομονοίας με τις πρώτες κυλιόμενες σκάλες',
          '1932: Αποκαλυπτήρια Μνημείου Αγνώστου Στρατιώτη στα Παλαιά Ανάκτορα (Βουλή)',
          'Άνθηση του ρεμπέτικου και των λαϊκών καφενείων σε Μοναστηράκι και Ψυρρή'
        ]
      };
    } else if (y < 1970) {
      return {
        era: '1945 - 1970: Μεταπολεμική Ανοικοδόμηση & Χρυσή Εποχή του Κινηματογράφου',
        summary: 'Η εποχή της αντιπαροχής και της ραγδαίας αστικοποίησης. Το 1960 εγκαινιάζεται το θρυλικό κυκλικό σιντριβάνι της Ομόνοιας με τα νέον φώτα, τα πράσινα τρόλεϊ γεμίζουν τους δρόμους και στην Πλάκα γεννιούνται οι μπουάτ του Νέου Κύματος.',
        keyFacts: [
          '1960: Το εμβληματικό σιντριβάνι της Ομόνοιας γίνεται το σύμβολο της μοντέρνας Αθήνας',
          'Οι μπουάτ της Πλάκας (Χατζιδάκις, Σαββόπουλος, Αρλέτα)',
          'Εκατοντάδες κινηματογράφοι και θέατρα στην οδό Σταδίου και Πανεπιστημίου'
        ]
      };
    } else if (y < 1995) {
      return {
        era: '1970 - 1995: Μεταπολίτευση, Πολιτικός Παλμός & Τουριστική Έκρηξη',
        summary: 'Η αποκατάσταση της Δημοκρατίας το 1974 φέρνει ογκώδεις πολιτικές συγκεντρώσεις στο Σύνταγμα. Η Αθήνα καθιερώνεται ως κορυφαίος παγκόσμιος τουριστικός προορισμός με την Πλάκα και το Μοναστηράκι να σφύζουν από ζωή.',
        keyFacts: [
          '1974: Ιστορικές λαϊκές συγκεντρώσεις για τη Δημοκρατία στην Πλατεία Συντάγματος',
          'Ανάπτυξη του εμπορικού τριγώνου και του παζαριού στο Μοναστηράκι',
          'Σχεδιασμός των μεγάλων έργων υποδομής (Μετρό, Αττική Οδός)'
        ]
      };
    } else {
      return {
        era: '1995 - 2026: Ολυμπιακή Μητρόπολη, Μετρό, Μουσείο Ακρόπολης & Αναγέννηση',
        summary: 'Η μεταμόρφωση της σύγχρονης Αθήνας: παράδοση του Μετρό (2000), Ολυμπιακοί Αγώνες 2004, νέο Μουσείο Ακρόπολης (2009), ΚΠΙΣΝ (2016) και η ανάπλαση του μεγάλου υδάτινου σιντριβανιού στην Ομόνοια.',
        keyFacts: [
          'Υπερσύγχρονο δίκτυο Μετρό που λειτουργεί και ως υπόγειο μουσείο αρχαιοτήτων',
          'Μεγάλος αρχαιολογικός περίπατος Διονυσίου Αρεοπαγίτου - Μοναστηράκι - Θησείο',
          'Αναγέννηση του κέντρου με το νέο οικολογικό σιντριβάνι της Ομονοίας'
        ]
      };
    }
  }

  // Generic Country / World fallback
  if (y < 1945) {
    return {
      era: `${y}: Αρχές 20ού Αιώνα & Μεσοπόλεμος`,
      summary: `Ιστορική περίοδος βαθιών ανακατατάξεων, βιομηχανικών αλλαγών και εθνικών οροσήμων στην περιοχή (${entity.name}).`,
      keyFacts: ['Βιομηχανικός εκσυγχρονισμός και σιδηροδρομικές συνδέσεις', 'Κοινωνικές μεταρρυθμίσεις και αστικοποίηση']
    };
  } else if (y < 1980) {
    return {
      era: `${y}: Μεταπολεμική Ανάπτυξη & Δεκαετίες '60-'70`,
      summary: `Ραγδαία οικονομική άνοδος, ανοικοδόμηση και πολιτιστική άνθηση στην περιοχή (${entity.name}).`,
      keyFacts: ['Εκσυγχρονισμός πόλεων και δικτύων υποδομών', 'Εισαγωγή σύγχρονων τεχνολογιών και μαζικής επικοινωνίας']
    };
  } else {
    return {
      era: `${y}: Σύγχρονη Εποχή & Ψηφιακός Μετασχηματισμός`,
      summary: `Παγκοσμιοποίηση, ψηφιακή επανάσταση και βιώσιμη ανάπτυξη στον 21ο αιώνα (${entity.name}).`,
      keyFacts: ['Ψηφιακές τεχνολογίες και έξυπνες πόλεις', 'Προστασία πολιτιστικής κληρονομιάς και πράσινη ενέργεια']
    };
  }
}

export function renderTabContent(tabId, entity, activeYear = null, activeSpots = [], isPlaying = false) {
  const container = document.getElementById('tabContent');
  if (!container || !entity) return;

  let html = '';

  if (tabId === 'geo') {
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-sky-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-map-location-dot"></i> Γεωγραφικό Ανάγλυφο & Φύση
          </div>
          <p class="leading-relaxed">${entity.geo.summary}</p>
        </div>

        <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mt-4 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-compass text-sky-400"></i> Κυριότερα Γεωγραφικά Ορόσημα
        </h4>
        <div class="space-y-2.5">
          ${(entity.geo.highlights || []).map(item => `
            <div class="p-3 bg-slate-800/30 hover:bg-slate-800/60 transition border border-slate-700/40 rounded-xl">
              <div class="font-bold text-slate-100 text-sm mb-0.5 text-sky-300">${item.title}</div>
              <div class="text-slate-300 text-xs leading-relaxed">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'hist') {
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-amber-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-landmark-dome"></i> Ιστορικό Υπόβαθρο & Εξέλιξη
          </div>
          <p class="leading-relaxed">${entity.hist.summary}</p>
        </div>

        <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mt-4 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-hourglass-half text-amber-400"></i> Σημαντικοί Σταθμοί στο Χρόνο
        </h4>
        <div class="relative pl-5 border-l-2 border-slate-700 space-y-4 my-3">
          ${(entity.hist.highlights || []).map(h => `
            <div class="relative group">
              <div class="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-slate-900 group-hover:scale-125 transition"></div>
              <div class="text-xs font-black text-amber-400 tracking-wide">${h.year}</div>
              <div class="font-bold text-slate-100 text-sm">${h.event}</div>
              <div class="text-xs text-slate-300 mt-0.5 leading-relaxed">${h.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'demo') {
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-emerald-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-chart-pie"></i> Κοινωνία, Πληθυσμός & Οικονομία
          </div>
          <p class="leading-relaxed">${entity.demo.summary}</p>
        </div>

        <div class="space-y-2.5 mt-3">
          ${(entity.demo.details || []).map(d => `
            <div class="p-3 bg-slate-800/30 border border-slate-700/40 rounded-xl">
              <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-0.5">${d.label}</div>
              <div class="text-xs text-slate-200 leading-relaxed">${d.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'cult') {
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-violet-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-masks-theater"></i> Πολιτισμός, Γλώσσες & Παραδόσεις
          </div>
          <p class="leading-relaxed">${entity.cult.summary}</p>
        </div>

        <div class="space-y-2.5 mt-3">
          ${(entity.cult.items || []).map(item => `
            <div class="p-3 bg-slate-800/30 hover:bg-slate-800/60 transition border border-slate-700/40 rounded-xl">
              <div class="font-bold text-slate-100 text-sm mb-0.5 text-violet-300">${item.title}</div>
              <div class="text-slate-300 text-xs leading-relaxed">${item.desc}</div>
            </div>
          `).join('')}
        </div>

        ${entity.pois ? `
          <div class="p-3 bg-sky-950/40 border border-sky-800/50 rounded-xl mt-4">
            <div class="flex items-center gap-2 text-sky-300 font-bold text-xs mb-1">
              <i class="fa-solid fa-map-pin"></i> Σημεία στον Χάρτη
            </div>
            <div class="text-xs text-slate-300">
              Έχουν τοποθετηθεί ${entity.pois.length} διαδραστικά σημεία στον χάρτη. Κάντε κλικ στα εικονίδια για να δείτε λεπτομέρειες.
            </div>
          </div>
        ` : ''}
      </div>
    `;
  } else if (tabId === 'timeline') {
    const yr = (activeYear === 'all' || !activeYear) ? 'all' : parseInt(activeYear, 10);
    const context = getHistoricalContextForEra(entity, yr);

    // Filter spots relevant to current entity
    const spotsForEntity = (activeSpots || []).filter(spot => {
      if (entity.id && spot.cityId && spot.cityId !== entity.id) {
        return false;
      }
      return true;
    });

    // Collect active chronicles & photos for this era
    const activeChronicleCards = [];
    const eraPhotos = [];

    spotsForEntity.forEach(spot => {
      if (!spot.chronicles || !spot.chronicles.length) return;
      let matched = null;
      if (yr === 'all') {
        matched = spot.chronicles[spot.chronicles.length - 1];
      } else {
        matched = spot.chronicles.find(c => c.fromYear <= yr && (c.toYear === null || c.toYear >= yr));
      }

      if (matched) {
        activeChronicleCards.push({ spot, chronicle: matched });
        if (matched.photos && matched.photos.length) {
          matched.photos.forEach(p => eraPhotos.push({ ...p, spotName: spot.name, spotId: spot.id }));
        }
      }
    });

    html = `
      <div class="space-y-4">
        <!-- Live Chrono Header -->
        <div class="p-4 bg-gradient-to-r from-amber-950/40 via-slate-850 to-slate-900 rounded-2xl border border-amber-500/40 shadow-xl">
          <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="relative flex h-3 w-3">
                <span class="${isPlaying ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span class="text-xs font-black text-amber-400 uppercase tracking-wider">
                ${isPlaying ? '▶ Ζωντανή Αναπαραγωγή Εποχών' : '⏳ Χρονολογική Ροή Εποχής'}
              </span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-black font-mono bg-amber-500 text-slate-950 shadow">
                ${yr === 'all' ? '1900 - 2026' : yr}
              </span>
            </div>
          </div>

          <h3 class="text-base font-black text-white mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-monument text-amber-400"></i> ${context.era}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed">${context.summary}</p>

          <!-- Key facts of era -->
          <div class="mt-3 pt-3 border-t border-slate-700/60 space-y-1.5">
            ${context.keyFacts.map(fact => `
              <div class="flex items-start gap-2 text-xs text-slate-200">
                <i class="fa-solid fa-check text-emerald-400 mt-0.5 text-[10px]"></i>
                <span>${fact}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Archival Photos of the Era -->
        ${eraPhotos.length ? `
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-camera-retro text-amber-400"></i> Ιστορικές Φωτογραφίες & Τεκμήρια (${eraPhotos.length})
              </h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${eraPhotos.slice(0, 4).map(photo => `
                <div class="group relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow cursor-pointer hover:border-amber-400 transition" onclick="openSpotTimeCapsule('${photo.spotId}')">
                  <img src="${photo.url}" alt="${photo.caption}" class="w-full h-32 object-cover group-hover:scale-105 transition duration-300" loading="lazy">
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-2.5 flex flex-col justify-end">
                    <span class="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded w-max border border-amber-600/50 mb-1">
                      ${photo.year || yr}
                    </span>
                    <p class="text-[11px] font-medium text-slate-100 line-clamp-2 leading-tight">${photo.caption}</p>
                    <span class="text-[9px] text-slate-400 mt-0.5 italic truncate">${photo.credit || photo.spotName}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Active Time Capsules / Spots in this Era -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
              <i class="fa-solid fa-hourglass-start text-sky-400"></i> Ενεργές Χρονοκάψουλες στο Χάρτη (${activeChronicleCards.length})
            </h4>
          </div>

          <div class="space-y-2.5">
            ${activeChronicleCards.map(({ spot, chronicle }) => {
              const isOfficial = chronicle.authorType === 'official';
              const memory = chronicle.memories && chronicle.memories[0];
              return `
                <div class="p-3.5 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/60 rounded-xl transition shadow">
                  <div class="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        isOfficial 
                          ? 'bg-sky-900/80 text-sky-300 border border-sky-600/50' 
                          : 'bg-emerald-900/80 text-emerald-300 border border-emerald-600/50'
                      }">
                        ${isOfficial ? '🏛️ Επίσημο Αρχείο' : '👤 Μαρτυρία Πολίτη'}
                      </span>
                      <h5 class="font-bold text-slate-100 text-sm mt-1">${spot.name}</h5>
                      <span class="text-[11px] text-amber-400 font-semibold">${chronicle.title}</span>
                    </div>
                    <button onclick="openSpotTimeCapsule('${spot.id}', ${yr === 'all' ? chronicle.fromYear : yr})" class="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 text-xs font-bold shrink-0 transition flex items-center gap-1">
                      <i class="fa-solid fa-eye text-[10px]"></i>
                      <span>Προβολή</span>
                    </button>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed mb-2 line-clamp-3">${chronicle.story}</p>
                  
                  ${memory ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/40 text-[11px] text-slate-300 italic flex items-start gap-2">
                      <i class="fa-solid fa-quote-left text-amber-400 text-xs mt-0.5 shrink-0"></i>
                      <div>
                        <span>«${memory.text}»</span>
                        <div class="not-italic text-slate-400 text-[10px] mt-0.5 font-bold">— ${memory.author} (${memory.year})</div>
                      </div>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Past vs Present Historical Milestones -->
        <div class="pt-2 border-t border-slate-800">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
            <i class="fa-solid fa-arrows-split-up-and-left text-amber-400"></i> Σύγκριση Εποχών: Τότε & Τώρα
          </h4>
          <div class="grid grid-cols-1 gap-2.5">
            ${(entity.pastVsPresent || []).map((p, idx) => `
              <div class="p-3 rounded-xl border ${idx === 0 ? 'bg-amber-950/20 border-amber-800/50' : 'bg-sky-950/20 border-sky-800/50'}">
                <div class="flex items-center gap-2 font-black text-xs mb-1 ${idx === 0 ? 'text-amber-400' : 'text-sky-400'}">
                  <i class="fa-solid ${idx === 0 ? 'fa-scroll' : 'fa-building-columns'}"></i>
                  <span>${p.epoch}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${p.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}


export function narrateBrief(entity) {
  if (!entity) return;

  const textToRead = `${entity.name}. ${entity.quote || ''} ${entity.geo?.summary || ''}`;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'el-GR';
    utterance.rate = 1.0;

    const icon = document.getElementById('ttsIcon');
    if (icon) icon.className = 'fa-solid fa-spinner fa-spin text-sky-400';

    const restoreIcon = () => {
      if (icon) icon.className = 'fa-solid fa-volume-high text-sky-400';
    };

    utterance.onend = restoreIcon;
    utterance.onerror = restoreIcon;

    window.speechSynthesis.speak(utterance);
  } else {
    const quoteEl = document.getElementById('docuQuote');
    if (quoteEl) {
      quoteEl.classList.add('text-sky-300', 'font-bold');
      setTimeout(() => {
        quoteEl.classList.remove('text-sky-300', 'font-bold');
      }, 3000);
    }
  }
}
