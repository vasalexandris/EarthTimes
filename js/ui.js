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

export function renderDossier(entity, entityType = 'state', currentTab = 'geo') {
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
  renderTabContent(currentTab, entity);
}

export function renderTabContent(tabId, entity) {
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
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-amber-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-arrows-split-up-and-left"></i> Η Εξέλιξη στο Χρόνο: Τότε & Τώρα
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Σύγκριση της ιστορικής διαδρομής με τη σύγχρονη πραγματικότητα του 21ου αιώνα.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-3 mt-3">
          ${(entity.pastVsPresent || []).map((p, idx) => `
            <div class="p-3.5 rounded-xl border ${idx === 0 ? 'bg-amber-950/20 border-amber-800/50' : 'bg-sky-950/20 border-sky-800/50'}">
              <div class="flex items-center gap-2 font-black text-sm mb-1.5 ${idx === 0 ? 'text-amber-400' : 'text-sky-400'}">
                <i class="fa-solid ${idx === 0 ? 'fa-scroll' : 'fa-building-columns'}"></i>
                <span>${p.epoch}</span>
              </div>
              <p class="text-xs text-slate-200 leading-relaxed">${p.content}</p>
            </div>
          `).join('')}
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
