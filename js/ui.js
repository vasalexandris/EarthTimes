/**
 * UI Module
 * Handles DOM rendering for Dossier, Breadcrumbs, Tabs, Flight Status, Filters, and TTS narration.
 */

export function updateStatusBadge(text) {
  const el = document.getElementById('flightStatusText');
  if (el) el.innerText = text;
}

export function updateJumpSelect(val) {
  const select = document.getElementById('quickJumpSelect');
  if (select) select.value = val;
}

export function updateBreadcrumbs(scope, city) {
  const bcState = document.getElementById('bc-state');
  const bcSep = document.getElementById('bc-sep');
  const bcCity = document.getElementById('bc-city');

  if (!bcState || !bcSep || !bcCity) return;

  if (scope === 'usa') {
    bcState.classList.remove('text-sky-300', 'font-medium');
    bcState.classList.add('text-slate-400');
    bcSep.classList.add('hidden');
    bcCity.classList.add('hidden');
  } else if (scope === 'state') {
    bcState.classList.remove('text-slate-400');
    bcState.classList.add('text-sky-300', 'font-medium');
    bcSep.classList.add('hidden');
    bcCity.classList.add('hidden');
  } else if (scope === 'city') {
    bcState.classList.remove('text-sky-300');
    bcState.classList.add('text-slate-400');
    bcSep.classList.remove('hidden');
    bcCity.classList.remove('hidden');
    bcCity.innerText = city ? city.name : '';
  }
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

export function renderDossier(entity, isState, currentTab) {
  if (!entity) return;

  const badgeCategory = document.getElementById('badgeCategory');
  if (badgeCategory) {
    badgeCategory.innerText = isState ? 'Πολιτειακός Φάκελος' : 'Αστικός Φάκελος';
    badgeCategory.className = isState 
      ? 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-sky-900/60 text-sky-300 border border-sky-700/50'
      : 'px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-amber-900/60 text-amber-300 border border-amber-700/50';
  }

  const badgeNickname = document.getElementById('badgeNickname');
  if (badgeNickname) {
    badgeNickname.innerText = entity.nickname ? `"${entity.nickname}"` : '';
  }

  const entityTitle = document.getElementById('entityTitle');
  if (entityTitle) entityTitle.innerText = entity.name;

  const entitySubtitle = document.getElementById('entitySubtitle');
  if (entitySubtitle) {
    entitySubtitle.innerText = `${entity.englishName} • ${isState ? 'Πρωτεύουσα: ' + entity.capital : 'Πολιτεία: Μασαχουσέτη'}`;
  }

  const stat1 = document.getElementById('stat1');
  if (stat1) stat1.innerText = entity.stats?.population || '-';

  const stat2 = document.getElementById('stat2');
  if (stat2) stat2.innerText = entity.stats?.founded || entity.stats?.famousFor || '-';

  const stat3 = document.getElementById('stat3');
  if (stat3) stat3.innerText = entity.stats?.area || entity.stats?.gdp || '-';

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
          <p>${entity.geo.summary}</p>
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
            <i class="fa-solid fa-landmark-dome"></i> Ιστορικό Υπόβαθρο
          </div>
          <p>${entity.hist.summary}</p>
        </div>

        <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mt-4 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-hourglass-half text-amber-400"></i> Σημαντικοί Σταθμοί
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
            <i class="fa-solid fa-chart-pie"></i> Κοινωνία, Παιδεία & Οικονομία
          </div>
          <p>${entity.demo.summary}</p>
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
            <i class="fa-solid fa-masks-theater"></i> Πολιτισμός, Τέχνες & Αξιοθέατα
          </div>
          <p>${entity.cult.summary}</p>
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
              Έχουν τοποθετηθεί ${entity.pois.length} διαδραστικά σημεία στον χάρτη. Κάντε κλικ στα εικονίδια για να δείτε φωτογραφίες και λεπτομέρειες.
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
          <p class="text-xs text-slate-300">
            Σύγκριση της ιστορικής κληρονομιάς με τη σύγχρονη πραγματικότητα του 21ου αιώνα.
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
