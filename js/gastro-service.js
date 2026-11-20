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
 * Render Box 1: Where to Eat Traditionally (Dedicated Bing Search Hub)
 */
export function renderTraditionalDiningBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const engName = entity.englishName && entity.englishName !== entity.name ? ` ${entity.englishName}` : '';
  const mainBingQuery = `${name}${engName} παραδοσιακά εστιατόρια τοπική κουζίνα traditional dining restaurants reviews ranking`;
  const mainTitle = `Παραδοσιακά Εστιατόρια: ${name}`;

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
          <p class="text-[11px] text-amber-300/80 font-medium">Παραδοσιακά Εστιατόρια, Αυθεντικές Γεύσεις & Τοπικές Σπεσιαλιτέ με Κόστος & Ranking</p>
        </div>
      </div>

      <!-- Description Guide -->
      <p class="text-xs text-slate-300 leading-relaxed">
        Ανακαλύψτε τα αυθεντικά παραδοσιακά εστιατόρια, τα ιστορικά στέκια και τα οινομαγειρεία της πόλης <strong>${name}</strong>. Δείτε αναλυτικές κριτικές επισκεπτών, αξιολογήσεις (ranking), εκτιμώμενο κόστος και τις πιο φημισμένες τοπικές σπεσιαλιτέ.
      </p>

      <!-- Main Action Button (In-App Bing Search) -->
      <div class="pt-1">
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-amber-950/60 cursor-pointer group">
          <i class="fa-brands fa-microsoft text-amber-200 text-xs"></i>
          <span>🔍 AI Έρευνα στο Bing: Παραδοσιακά Εστιατόρια & Τοπικές Γεύσεις (${name})</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 transition"></i>
        </button>
      </div>

      <!-- Quick Search Categories (All opening in-app Bing) -->
      <div class="pt-1 border-t border-slate-800/80">
        <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-tags text-amber-400"></i>
          <span>Άμεσες Αναζητήσεις ανά Κατηγορία:</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} καλύτερα παραδοσιακά εστιατόρια best traditional dining reviews ranking', 'Κορυφαίο Ranking: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-amber-500/40 text-[11px] text-amber-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
            <span>Κορυφαίο Ranking (4.7+)</span>
          </button>
          <button onclick="window.openInAppBingSearch('οικονομικά παραδοσιακά εστιατόρια ${escapeStr(name)}${escapeStr(engName)} budget authentic dining τιμές μενού', 'Οικονομικές Επιλογές: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-emerald-500/40 text-[11px] text-emerald-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-wallet text-[10px] text-emerald-400"></i>
            <span>Προσιτές Επιλογές (€)</span>
          </button>
          <button onclick="window.openInAppBingSearch('παραδοσιακά μαγειρευτά τοπικές σπεσιαλιτέ ${escapeStr(name)}${escapeStr(engName)} local authentic food specialties κριτικές', 'Τοπικές Σπεσιαλιτέ: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-sky-500/40 text-[11px] text-sky-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-bowl-food text-[10px] text-sky-400"></i>
            <span>Τοπικές Σπεσιαλιτέ & Μαγειρευτά</span>
          </button>
          <button onclick="window.openInAppBingSearch('ιστορικά παραδοσιακά εστιατόρια ${escapeStr(name)}${escapeStr(engName)} historic authentic dining places κριτικές τιμές', 'Ιστορικά Εστιατόρια: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-purple-500/40 text-[11px] text-purple-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-landmark text-[10px] text-purple-400"></i>
            <span>Ιστορικά Στέκια & Αυθεντικότητα</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Box 2: Where to Eat Street Food (Dedicated Bing Search Hub - Universal & Globally Relevant)
 */
export function renderStreetFoodSpotsBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const engName = entity.englishName && entity.englishName !== entity.name ? ` ${entity.englishName}` : '';
  const mainBingQuery = `${name}${engName} street food γρήγορο φαγητό φαγητό δρόμου top spots ranking reviews`;
  const mainTitle = `Street Food & Φαγητό του Δρόμου: ${name}`;

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
          <p class="text-[11px] text-orange-300/80 font-medium">Κορυφαίες Επιλογές, Ιδιαίτερες Γεύσεις & Νυχτερινό Φαγητό με Κόστος & Ranking</p>
        </div>
      </div>

      <!-- Description Guide -->
      <p class="text-xs text-slate-300 leading-relaxed">
        Βρείτε τις κορυφαίες επιλογές για γρήγορο φαγητό του δρόμου, αυθεντικά τοπικά στέκια, ιδιαίτερες γεύσεις και νυχτερινό φαγητό στην πόλη <strong>${name}</strong> με τιμές, ωράρια και αξιολογήσεις.
      </p>

      <!-- Main Action Button (In-App Bing Search) -->
      <div class="pt-1">
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-orange-950/60 cursor-pointer group">
          <i class="fa-brands fa-microsoft text-orange-200 text-xs"></i>
          <span>🔍 AI Έρευνα στο Bing: Street Food & Φαγητό του Δρόμου (${name})</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 transition"></i>
        </button>
      </div>

      <!-- Quick Search Categories (All opening in-app Bing) -->
      <div class="pt-1 border-t border-slate-800/80">
        <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-tags text-orange-400"></i>
          <span>Άμεσες Αναζητήσεις ανά Κατηγορία:</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} καλύτερο street food κορυφαίες επιλογές best top street food reviews ranking', 'Κορυφαίες Επιλογές: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-amber-500/40 text-[11px] text-amber-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
            <span>Κορυφαίες Επιλογές</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} ιδιαίτερες επιλογές street food unique special local bites hidden gems', 'Ιδιαίτερες Επιλογές: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-orange-500/40 text-[11px] text-orange-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-wand-magic-sparkles text-[10px] text-orange-400"></i>
            <span>Ιδιαίτερες Επιλογές</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} νυχτερινό φαγητό late night street food spots night bites', 'Νυχτερινό Φαγητό: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-rose-500/40 text-[11px] text-rose-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-moon text-[10px] text-rose-400"></i>
            <span>Επιλογές Νυχτερινού Φαγητού</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} υπαίθριες αγορές φαγητού street food markets food halls stalls', 'Αγορές Street Food: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-yellow-500/40 text-[11px] text-yellow-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-store text-[10px] text-yellow-400"></i>
            <span>Αγορές & Στέκια Street Food</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Box 3: Famous Desserts & Bakeries (Dedicated Bing Search Hub for Sweets, Bakeries & Pastries)
 */
export function renderFamousDessertsBoxHtml(entity) {
  const name = entity.name || 'Περιοχή';
  const engName = entity.englishName && entity.englishName !== entity.name ? ` ${entity.englishName}` : '';
  const mainBingQuery = `${name}${engName} διάσημα παραδοσιακά γλυκά ζαχαροπλαστεία επιδόρπια famous local desserts pastry bakeries ranking reviews`;
  const mainTitle = `Διάσημα Γλυκά & Ζαχαροπλαστεία: ${name}`;

  return `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-pink-950/35 via-slate-900/95 to-slate-950 border border-pink-500/40 shadow-xl space-y-3">
      <!-- Header -->
      <div class="flex items-center gap-2.5 border-b border-pink-500/20 pb-2.5">
        <span class="w-8 h-8 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0 shadow text-sm">
          <i class="fa-solid fa-cake-candles"></i>
        </span>
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
            <span>Πού θα Δοκιμάσετε Διάσημα Γλυκά & Επιδόρπια (${name})</span>
          </h4>
          <p class="text-[11px] text-pink-300/80 font-medium">Ξακουστά Τοπικά Επιδόρπια, Ιστορικά Ζαχαροπλαστεία, Bakeries & Patisseries</p>
        </div>
      </div>

      <!-- Description Guide -->
      <p class="text-xs text-slate-300 leading-relaxed">
        Ανακαλύψτε τα πιο διάσημα παραδοσιακά γλυκά, τα ξακουστά επιδόρπια που αξίζει οπωσδήποτε να δοκιμάσει κανείς και τα κορυφαία ζαχαροπλαστεία στην πόλη <strong>${name}</strong> με κριτικές, τιμές και προτάσεις.
      </p>

      <!-- Main Action Button (In-App Bing Search) -->
      <div class="pt-1">
        <button onclick="window.openInAppBingSearch('${escapeStr(mainBingQuery)}', '${escapeStr(mainTitle)}')" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:via-rose-500 hover:to-amber-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-pink-950/60 cursor-pointer group">
          <i class="fa-brands fa-microsoft text-pink-200 text-xs"></i>
          <span>🔍 AI Έρευνα στο Bing: Διάσημα Γλυκά & Ζαχαροπλαστεία (${name})</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 transition"></i>
        </button>
      </div>

      <!-- Quick Search Categories (All opening in-app Bing) -->
      <div class="pt-1 border-t border-slate-800/80">
        <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-tags text-pink-400"></i>
          <span>Άμεσες Αναζητήσεις ανά Κατηγορία:</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} καλύτερα ζαχαροπλαστεία top bakeries pastry shops ranking reviews', 'Κορυφαία Ζαχαροπλαστεία: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-pink-500/40 text-[11px] text-pink-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-cake-candles text-[10px] text-pink-400"></i>
            <span>Κορυφαία Ζαχαροπλαστεία</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} διάσημα παραδοσιακά γλυκά τοπικά επιδόρπια must try traditional sweets', 'Παραδοσιακά Γλυκά: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-amber-500/40 text-[11px] text-amber-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-cookie text-[10px] text-amber-400"></i>
            <span>Ξακουστά Τοπικά Γλυκά</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} ιστορικά cafe ζαχαροπλαστεία historic cafes patisseries coffee and pastries', 'Ιστορικά Café: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-purple-500/40 text-[11px] text-purple-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-mug-saucer text-[10px] text-purple-400"></i>
            <span>Ιστορικά Café & Patisseries</span>
          </button>
          <button onclick="window.openInAppBingSearch('${escapeStr(name)}${escapeStr(engName)} χειροποίητο παγωτό artisanal gelato παγωτατζίδικα reviews', 'Παγωτό & Gelato: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 hover:border-cyan-500/40 text-[11px] text-cyan-300 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-ice-cream text-[10px] text-cyan-400"></i>
            <span>Χειροποίητο Παγωτό & Gelato</span>
          </button>
        </div>
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
          <button onclick="window.openInAppBingSearch('${escapeStr(name)} παραδοσιακή κουζίνα γαστρονομία travel guide', 'Παραδοσιακή Κουζίνα: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για την κουζίνα της πόλης">
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
          <button onclick="window.openInAppBingSearch('${escapeStr(name)} street food travel guide spots', 'Street Food: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Bing AI Search για το street food της πόλης">
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
                  <button onclick="window.openInAppBingSearch('${escapeStr(item.title)} ${escapeStr(name)} συνταγή παραδοσιακό πιάτο', '${escapeStr(item.title)}: ${escapeStr(name)}')" class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-[11px] font-bold transition flex items-center gap-1.5 shadow cursor-pointer" title="Απευθείας Bing AI αναζήτηση για το πιάτο">
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
