/**
 * Gastro Service
 * Provides rich gastronomy data and rendering for the Gastronomy tab:
 * - Box 1: Where to Eat Traditionally (Dedicated in-app Bing Search hub for traditional restaurants, authentic eateries, ratings & prices)
 * - Box 2: Where to Eat Street Food (Dedicated in-app Bing Search hub for top picks, unique local bites, late night street food & rankings)
 * - Box 3: Famous Desserts & Bakeries (Dedicated in-app Bing Search hub for famous local sweets, historic cafes & patisseries)
 * - General Cuisine & Street Food Overviews
 * - Famous Dishes, Recipes & Specialties
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
 * Render Box 1: Where to Eat Traditionally (Dedicated Bing Search Hub - Top 10 Local Choices)
 */
export function renderTraditionalDiningBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const isCountry = entity && entity.type === 'country';
  const engName = entity.englishName || entity.name || '';
  const prefixEl = isCountry ? 'Χώρα' : 'Πόλη';
  const inCityEn = isCountry ? `in ${engName}` : `in city of ${engName}`;
  const mainBingQuery = `${prefixEl} ${name} 10 καλύτερα παραδοσιακά εστιατόρια ταβέρνες τι τρώνε οι locals, 10 best local traditional restaurants ${inCityEn}`;
  const mainTitle = `Top 10 Παραδοσιακά: ${name}`;

  return `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-950/35 via-slate-900/95 to-slate-950 border border-amber-500/40 shadow-xl space-y-3">
      <!-- Header -->
      <div class="flex items-center gap-2.5 border-b border-amber-500/20 pb-2.5">
        <span class="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 shadow text-sm">
          <i class="fa-solid fa-utensils"></i>
        </span>
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
            <span>Πού θα Φάτε Παραδοσιακά (${name})</span>
          </h4>
          <p class="text-[11px] text-amber-300/80 font-medium">Αυθεντικές Τοπικές Γεύσεις & Τι Τρώνε οι Locals</p>
        </div>
      </div>

      <!-- Description Guide -->
      <p class="text-xs text-slate-300 leading-relaxed">
        Ανακαλύψτε τις αυθεντικές παραδοσιακές γεύσεις, τι συνηθίζουν να τρώνε οι ντόπιοι στην πόλη <strong>${name}</strong> και πού αξίζει να δοκιμάσετε γνήσια τοπική κουζίνα.
      </p>

      <!-- Compact Action Button (In-App Bing Search) -->
      <div class="pt-0.5">
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs transition shadow-md hover:shadow-amber-950/60 cursor-pointer group">
          <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
          <span>🔍 AI Έρευνα Bing: Top 10 Επιλογές Locals</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 transition"></i>
        </button>
      </div>
    </div>
  `;
}

/**
 * Render Box 2: Where to Eat Street Food (Dedicated Bing Search Hub - Top 10 Street Food)
 */
export function renderStreetFoodSpotsBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const isCountry = entity && entity.type === 'country';
  const engName = entity.englishName || entity.name || '';
  const prefixEl = isCountry ? 'Χώρα' : 'Πόλη';
  const inCityEn = isCountry ? `in ${engName}` : `in city of ${engName}`;
  const mainBingQuery = `${prefixEl} ${name} 10 καλύτερα street food τι αξίζει να δοκιμάσεις τι τρώνε οι locals, 10 best local street bites ${inCityEn}`;
  const mainTitle = `Top 10 Street Food: ${name}`;

  return `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-orange-950/35 via-slate-900/95 to-slate-950 border border-orange-500/40 shadow-xl space-y-3">
      <!-- Header -->
      <div class="flex items-center gap-2.5 border-b border-orange-500/20 pb-2.5">
        <span class="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0 shadow text-sm">
          <i class="fa-solid fa-burger"></i>
        </span>
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
            <span>Πού θα Φάτε Street Food (${name})</span>
          </h4>
          <p class="text-[11px] text-orange-300/80 font-medium">Δημοφιλείς Υπαίθριες Λιχουδιές & Γρήγορες Γεύσεις</p>
        </div>
      </div>

      <!-- Description Guide -->
      <p class="text-xs text-slate-300 leading-relaxed">
        Βρείτε τις πιο φημισμένες επιλογές φαγητού του δρόμου, τι απολαμβάνουν οι ντόπιοι και τι αξίζει να δοκιμάσετε στο χέρι στην πόλη <strong>${name}</strong>.
      </p>

      <!-- Compact Action Button (In-App Bing Search) -->
      <div class="pt-0.5">
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs transition shadow-md hover:shadow-orange-950/60 cursor-pointer group">
          <i class="fa-brands fa-microsoft text-orange-200 text-xs"></i>
          <span>🔍 AI Έρευνα Bing: Top 10 Street Food</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 transition"></i>
        </button>
      </div>
    </div>
  `;
}

/**
 * Render Box 3: Famous Desserts & Bakeries (Dedicated Bing Search Hub - Top 10 Sweets & Bakeries)
 */
export function renderFamousDessertsBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const isCountry = entity && entity.type === 'country';
  const engName = entity.englishName || entity.name || '';
  const prefixEl = isCountry ? 'Χώρα' : 'Πόλη';
  const inCityEn = isCountry ? `in ${engName}` : `in city of ${engName}`;
  const mainBingQuery = `${prefixEl} ${name} 10 διάσημα παραδοσιακά γλυκά ζαχαροπλαστεία τι αξίζει να δοκιμάσεις, 10 best local pastry shops sweets ${inCityEn}`;
  const mainTitle = `Top 10 Γλυκά: ${name}`;

  return `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-pink-950/35 via-slate-900/95 to-slate-950 border border-pink-500/40 shadow-xl space-y-3">
      <!-- Header -->
      <div class="flex items-center gap-2.5 border-b border-pink-500/20 pb-2.5">
        <span class="w-8 h-8 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0 shadow text-sm">
          <i class="fa-solid fa-cake-candles"></i>
        </span>
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
            <span>Διάσημα Γλυκά & Ζαχαροπλαστεία (${name})</span>
          </h4>
          <p class="text-[11px] text-pink-300/80 font-medium">Ξακουστά Τοπικά Επιδόρπια & Παραδοσιακά Ζαχαροπλαστεία</p>
        </div>
      </div>

      <!-- Description Guide -->
      <p class="text-xs text-slate-300 leading-relaxed">
        Ανακαλύψτε τα πιο φημισμένα παραδοσιακά γλυκά και τα επιδόρπια που αξίζει οπωσδήποτε να δοκιμάσετε κατά την επίσκεψή σας στην πόλη <strong>${name}</strong>.
      </p>

      <!-- Compact Action Button (In-App Bing Search) -->
      <div class="pt-0.5">
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:via-rose-500 hover:to-amber-500 text-white font-bold text-xs transition shadow-md hover:shadow-pink-950/60 cursor-pointer group">
          <i class="fa-brands fa-microsoft text-pink-200 text-xs"></i>
          <span>🔍 AI Έρευνα Bing: Top 10 Γλυκά & Επιδόρπια</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 transition"></i>
        </button>
      </div>
    </div>
  `;
}

/**
 * Main Renderer for Gastronomy Tab
 * Combines:
 * 1. Where to Eat Traditionally Box (Dedicated Bing Search Hub - NO individual shop names)
 * 2. Where to Eat Street Food Box (Dedicated Bing Search Hub - NO individual shop names)
 * 3. General Local Cuisine Overview Card
 * 4. General Street Food Overview Card
 * 5. Famous Dishes, Recipes & Specialties List
 */
export function renderGastronomyTabHtml(entity, items = []) {
  if (!entity) return '';

  const name = entity.name || 'Περιοχή';
  const isCountry = entity && entity.type === 'country';
  const engName = entity.englishName || entity.name || '';
  const prefixEl = isCountry ? 'Χώρα' : 'Πόλη';
  const inCityEn = isCountry ? `in ${engName}` : `in city of ${engName}`;
  const gastroSummary = entity.gastro?.summary || entity.gastro?.culture || 
    `Η παραδοσιακή κουζίνα και οι γεύσεις (${name}) διαμορφώθηκαν μέσα από ιστορικές και πολυπολιτισμικές επιρροές, συνδυάζοντας εκλεκτά τοπικά υλικά, παραδοσιακές συνταγές και αυθεντική τοπική γαστρονομική ταυτότητα.`;

  const traditionalDiningBox = renderTraditionalDiningBoxHtml(entity);
  const streetFoodSpotsBox = renderStreetFoodSpotsBoxHtml(entity);
  const famousDessertsBox = renderFamousDessertsBoxHtml(entity);

  return `
    <div class="space-y-4">

      <!-- 1. WHERE TO EAT TRADITIONALLY (DEDICATED SEARCH HUB TO BING) -->
      ${traditionalDiningBox}

      <!-- 2. WHERE TO EAT STREET FOOD (DEDICATED SEARCH HUB TO BING) -->
      ${streetFoodSpotsBox}

      <!-- 3. WHERE TO TASTE FAMOUS DESSERTS & PASTRY (DEDICATED SEARCH HUB TO BING) -->
      ${famousDessertsBox}

      <!-- 4. General Local Cuisine Overview Card -->
      <div class="p-4 bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-slate-950 rounded-2xl border border-amber-600/40 shadow-lg text-slate-200">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <i class="fa-solid fa-utensils text-amber-300"></i>
            <span>Παραδοσιακή & Τοπική Κουζίνα (${name})</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold shrink-0">
            Γενικός Οδηγός
          </span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">${gastroSummary}</p>
        <div class="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
          <button onclick="window.openDeepDive('Παραδοσιακή Κουζίνα (${escapeStr(name)})', '${escapeStr(gastroSummary)}', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
            <span>Ανάλυση AI</span>
          </button>
          <button onclick="window.openInAppBingSearch('${prefixEl} ${escapeStr(name)} παραδοσιακή κουζίνα γαστρονομία ${inCityEn} travel guide', 'Παραδοσιακή Κουζίνα: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για την κουζίνα της πόλης">
            <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
            <span>🔍 AI Έρευνα στο Bing</span>
          </button>
          <button onclick="window.openMapWikiReader('${escapeStr(name)} Γαστρονομία', 'el', '${escapeStr(name)} cuisine')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
            <span>Wikipedia</span>
          </button>
          <button onclick="window.openGastroVideo('Παραδοσιακή Κουζίνα & Γεύσεις', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Βίντεο τοπικής κουζίνας">
            <i class="fa-solid fa-play text-rose-400"></i>
            <span>Βίντεο Κουζίνας 📹</span>
          </button>
        </div>
      </div>

      <!-- 5. Dedicated Street Food & Outdoor Flavors Overview Card -->
      <div class="p-4 bg-gradient-to-br from-orange-950/40 via-slate-900/90 to-slate-950 rounded-2xl border border-orange-600/40 shadow-lg text-slate-200">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 text-orange-400 font-bold text-sm">
            <i class="fa-solid fa-store text-orange-300"></i>
            <span>Street Food & Υπαίθριες Γεύσεις (${name})</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold shrink-0">
            🌯 Street Food
          </span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">Δημοφιλές φαγητό του δρόμου, αυθεντικά τοπικά στέκια, ιδιαίτερες γεύσεις και νυχτερινές επιλογές (${name}).</p>
        <div class="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
          <button onclick="window.openDeepDive('Street Food (${escapeStr(name)})', 'Δημοφιλές φαγητό του δρόμου, τοπικά στέκια και υπαίθριες γεύσεις (${escapeStr(name)}).', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
            <span>Ανάλυση AI</span>
          </button>
          <button onclick="window.openInAppBingSearch('${prefixEl} ${escapeStr(name)} street food travel guide spots ${inCityEn}', 'Street Food: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για το street food της πόλης">
            <i class="fa-brands fa-microsoft text-orange-200 text-xs"></i>
            <span>🔍 AI Έρευνα στο Bing</span>
          </button>
          <button onclick="window.openMapWikiReader('${escapeStr(name)} street food', 'el', '${escapeStr(name)} street food')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
            <span>Wikipedia</span>
          </button>
          <button onclick="window.openGastroVideo('Street Food & Υπαίθριες Γεύσεις', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-orange-950/80 hover:bg-orange-900 text-orange-300 hover:text-white border border-orange-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Προβολή βίντεο Street Food">
            <i class="fa-solid fa-store text-orange-400"></i>
            <span>Βίντεο Street Food 🌯</span>
          </button>
        </div>
      </div>

      <!-- 6. Dedicated Cards for Famous Dishes, Recipes, Sweets & Specialties -->
      ${items && items.length > 0 ? `
        <div class="pt-1.5">
          <div class="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5 mb-2 px-1">
            <i class="fa-solid fa-fire-burner text-amber-500"></i>
            <span>Ξακουστά Φαγητά, Συνταγές, Γλυκά & Σπεσιαλιτέ (${items.length})</span>
          </div>

          <div class="space-y-2.5">
            ${items.map(item => {
              const titleLower = (item.title || '').toLowerCase();
              const descLower = (item.desc || '').toLowerCase();
              const isDessert = item.cat === 'dessert' || 
                titleLower.includes('γλυκ') || titleLower.includes('κέικ') || titleLower.includes('τούρτα') || 
                titleLower.includes('τάρτα') || titleLower.includes('παγωτό') || titleLower.includes('dessert') || 
                titleLower.includes('pastry') || titleLower.includes('cake') || titleLower.includes('μπουγάτσα') ||
                descLower.includes('επιδόρπιο') || descLower.includes('γλυκό') || descLower.includes('ζαχαροπλασ');

              const isItemStreetFood = !isDessert && (item.cat === 'street_food' || titleLower.includes('street food'));

              let badgeClass = 'bg-amber-950/80 text-amber-300 border-amber-600/40';
              let badgeLabel = item.catLabel || '🍽️ Σπεσιαλιτέ';
              let btnColor = 'bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-700/50';
              let btnIcon = 'fa-solid fa-play text-rose-400';
              let btnLabel = 'Βίντεο Συνταγής 👨‍🍳';
              let titleColor = 'text-amber-200';

              if (isDessert) {
                badgeClass = 'bg-pink-950/80 text-pink-300 border-pink-600/40';
                badgeLabel = item.catLabel || '🍰 Επιδόρπιο & Γλυκό';
                btnColor = 'bg-pink-950/80 hover:bg-pink-900 text-pink-300 hover:text-white border border-pink-700/50';
                btnIcon = 'fa-solid fa-cake-candles text-pink-400';
                btnLabel = 'Βίντεο Γλυκού 🍰';
                titleColor = 'text-pink-200';
              } else if (isItemStreetFood) {
                badgeClass = 'bg-orange-950/80 text-orange-300 border-orange-600/40';
                badgeLabel = item.catLabel || '🌯 Street Food';
                btnColor = 'bg-orange-950/80 hover:bg-orange-900 text-orange-300 hover:text-white border border-orange-700/50';
                btnIcon = 'fa-solid fa-store text-orange-400';
                btnLabel = 'Βίντεο Street Food 🌯';
                titleColor = 'text-orange-200';
              }

              return `
              <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl">
                <div class="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass} mb-1">
                      ${badgeLabel}
                    </span>
                    <h5 class="font-bold text-slate-100 text-sm ${titleColor}">${item.title}</h5>
                  </div>
                  ${item.tag ? `
                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium shrink-0">
                      ${item.tag}
                    </span>
                  ` : ''}
                </div>
                <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
                <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                  <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                    <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                    <span>Ανάλυση AI</span>
                  </button>
                  <button onclick="window.openInAppBingSearch('${escapeStr(item.title)} ${prefixEl.toLowerCase()} ${escapeStr(name)} συνταγή παραδοσιακό πιάτο ${inCityEn}', '${escapeStr(item.title)}: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Απευθείας Bing AI αναζήτηση για το πιάτο">
                    <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
                    <span>🔍 AI Έρευνα στο Bing</span>
                  </button>
                  <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el', '${escapeStr(item.title)}')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                    <i class="fa-brands fa-wikipedia-w"></i>
                    <span>Wikipedia</span>
                  </button>
                  <button onclick="window.openGastroVideo('${escapeStr(item.title)}', '${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg ${btnColor} hover:text-white border text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="${btnLabel}">
                    <i class="${btnIcon}"></i>
                    <span>${btnLabel}</span>
                  </button>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;
}
