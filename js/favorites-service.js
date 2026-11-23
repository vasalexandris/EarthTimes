/**
 * Favorites Service (Αγαπημένα EarthTimes)
 * Manages bookmarks for Cities, Recipes/Gastronomy, and POIs/Landmarks.
 * Supports persistent localStorage, categorized filtering, in-app navigation,
 * dynamic UI updates, and instant visual feedback (toasts & star toggles).
 */

const STORAGE_KEY = 'earthtimes_favorites';

export const COUNTRY_NAMES_GR = {
  greece: 'Ελλάδα',
  france: 'Γαλλία',
  italy: 'Ιταλία',
  uk: 'Ηνωμένο Βασίλειο',
  germany: 'Γερμανία',
  spain: 'Ισπανία',
  poland: 'Πολωνία',
  austria: 'Αυστρία',
  netherlands: 'Ολλανδία',
  czech: 'Τσεχία',
  belgium: 'Βέλγιο',
  portugal: 'Πορτογαλία',
  ireland: 'Ιρλανδία',
  hungary: 'Ουγγαρία',
  switzerland: 'Ελβετία',
  sweden: 'Σουηδία',
  norway: 'Νορβηγία',
  finland: 'Φινλανδία',
  denmark: 'Δανία',
  croatia: 'Κροατία',
  romania: 'Ρουμανία',
  usa: 'ΗΠΑ'
};

let currentFilter = 'all'; // 'all' | 'city' | 'poi' | 'recipe'

/**
 * Resolve Country Greek Name from country ID
 */
export function getCountryName(countryId) {
  if (!countryId) return '';
  const cleanId = String(countryId).toLowerCase().trim();
  return COUNTRY_NAMES_GR[cleanId] || countryId;
}

/**
 * Load all favorites from localStorage
 */
export function getFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('[FavoritesService] Error parsing favorites:', e);
    return [];
  }
}

/**
 * Save favorites to localStorage and notify UI
 */
export function saveFavorites(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('[FavoritesService] Error saving favorites:', e);
  }
  updateFavoritesBadge();
  updateAllFavoriteButtons();
  window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: items }));
}

/**
 * Check if an item is favorited
 */
export function isFavorite(id) {
  if (!id) return false;
  const list = getFavorites();
  return list.some(item => item.id === id);
}

/**
 * Toggle favorite item (add if absent, remove if present)
 */
export function toggleFavorite(item) {
  if (!item || !item.id) return false;
  const list = getFavorites();
  const idx = list.findIndex(x => x.id === item.id);

  if (idx >= 0) {
    // Remove
    const removed = list.splice(idx, 1)[0];
    saveFavorites(list);
    showToast(`Αφαιρέθηκε από τα Αγαπημένα: ${removed.title}`, 'fa-regular fa-trash-can', 'warning');
    return false;
  } else {
    // Add with timestamp
    const newItem = {
      ...item,
      countryName: item.countryName || getCountryName(item.countryId),
      timestamp: Date.now()
    };
    list.unshift(newItem);
    saveFavorites(list);
    showToast(`Προστέθηκε στα Αγαπημένα: ${newItem.title}`, 'fa-solid fa-star', 'success');
    return true;
  }
}

/**
 * Remove favorite by ID
 */
export function removeFavorite(id) {
  if (!id) return;
  const list = getFavorites();
  const filtered = list.filter(x => x.id !== id);
  saveFavorites(filtered);
  showToast('Το στοιχείο αφαιρέθηκε από τα Αγαπημένα', 'fa-regular fa-trash-can', 'info');
  renderFavoritesList();
}

/**
 * Clear all favorites with confirmation
 */
export function clearAllFavorites() {
  const list = getFavorites();
  if (list.length === 0) return;
  if (!confirm('Είστε βέβαιοι ότι θέλετε να διαγράψετε όλα τα αγαπημένα σας στοιχεία;')) {
    return;
  }
  saveFavorites([]);
  showToast('Όλα τα αγαπημένα εκκαθαρίστηκαν', 'fa-solid fa-broom', 'info');
  renderFavoritesList();
}

/**
 * Get count by type
 */
export function getFavoritesCounts() {
  const list = getFavorites();
  return {
    total: list.length,
    city: list.filter(x => x.type === 'city').length,
    poi: list.filter(x => x.type === 'poi').length,
    recipe: list.filter(x => x.type === 'recipe').length
  };
}

/**
 * Update all badge counters across the app
 */
export function updateFavoritesBadge() {
  const counts = getFavoritesCounts();
  
  // Top nav badge
  const navBadge = document.getElementById('favoritesBadgeCount');
  if (navBadge) {
    navBadge.innerText = counts.total;
    if (counts.total > 0) {
      navBadge.classList.remove('opacity-50');
      navBadge.classList.add('bg-amber-500', 'text-slate-950');
      navBadge.classList.remove('bg-amber-500/25', 'text-amber-300');
    } else {
      navBadge.classList.add('opacity-50');
      navBadge.classList.remove('bg-amber-500', 'text-slate-950');
      navBadge.classList.add('bg-amber-500/25', 'text-amber-300');
    }
  }

  // Modal header badge
  const modalBadge = document.getElementById('modalFavoritesTotalBadge');
  if (modalBadge) modalBadge.innerText = counts.total;

  // Filter tab badges
  const cAll = document.getElementById('favCountAll');
  if (cAll) cAll.innerText = counts.total;

  const cCity = document.getElementById('favCountCity');
  if (cCity) cCity.innerText = counts.city;

  const cPoi = document.getElementById('favCountPoi');
  if (cPoi) cPoi.innerText = counts.poi;

  const cRecipe = document.getElementById('favCountRecipe');
  if (cRecipe) cRecipe.innerText = counts.recipe;
}

/**
 * Update City Favorite button in Dossier Header
 */
export function updateCityFavoriteBtn(cityEntity) {
  const btn = document.getElementById('cityFavoriteBtn');
  if (!btn) return;

  if (!cityEntity || !cityEntity.id) {
    btn.classList.add('hidden');
    return;
  }

  btn.classList.remove('hidden');
  const favId = `city:${cityEntity.id}`;
  const fav = isFavorite(favId);

  const icon = document.getElementById('cityFavoriteIcon');
  const label = document.getElementById('cityFavoriteLabel');

  if (fav) {
    btn.className = 'px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 border border-amber-400 text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-amber-950/40 cursor-pointer';
    if (icon) icon.className = 'fa-solid fa-star text-slate-950 text-xs';
    if (label) label.innerText = 'Στα Αγαπημένα ⭐';
  } else {
    btn.className = 'px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-white border border-amber-500/35 text-xs font-bold transition flex items-center gap-1.5 shadow cursor-pointer';
    if (icon) icon.className = 'fa-regular fa-star text-amber-400 text-xs';
    if (label) label.innerText = '+ Αγαπημένη';
  }
}

/**
 * Update all DOM favorite buttons (with data-fav-id)
 */
export function updateAllFavoriteButtons() {
  const buttons = document.querySelectorAll('[data-fav-id]');
  buttons.forEach(btn => {
    const favId = btn.getAttribute('data-fav-id');
    const fav = isFavorite(favId);
    const icon = btn.querySelector('i');

    if (fav) {
      btn.classList.add('text-amber-400', 'border-amber-500/60', 'bg-amber-500/20');
      btn.classList.remove('text-slate-400');
      if (icon) {
        icon.classList.remove('fa-regular', 'text-slate-400');
        icon.classList.add('fa-solid', 'text-amber-400');
      }
    } else {
      btn.classList.remove('text-amber-400', 'border-amber-500/60', 'bg-amber-500/20');
      btn.classList.add('text-slate-400');
      if (icon) {
        icon.classList.remove('fa-solid', 'text-amber-400');
        icon.classList.add('fa-regular', 'text-slate-400');
      }
    }
  });

  // Also refresh current city favorite button if visible
  if (window.getCurrentCity) {
    const city = window.getCurrentCity();
    if (city) updateCityFavoriteBtn(city);
  }
}

/**
 * Toggle Favorite for Current City
 */
export function toggleFavoriteCurrentCity() {
  const city = window.getCurrentCity ? window.getCurrentCity() : null;
  if (!city || !city.id) {
    showToast('Δεν υπάρχει επιλεγμένη πόλη', 'fa-solid fa-circle-exclamation', 'warning');
    return;
  }

  const countryId = city._countryId || (window.CITY_TO_COUNTRY && window.CITY_TO_COUNTRY[city.id]) || '';
  const countryName = city.countryName || getCountryName(countryId);

  const item = {
    id: `city:${city.id}`,
    type: 'city',
    title: city.name,
    englishName: city.englishName || city.name,
    cityId: city.id,
    cityName: city.name,
    countryId,
    countryName,
    desc: city.nickname || city.quote || (city.stats ? city.stats.famousFor : '') || 'Ιστορική και πολιτιστική πόλη',
    coords: city.coords,
    category: 'Πόλη'
  };

  toggleFavorite(item);
  updateCityFavoriteBtn(city);
}

/**
 * Toggle Favorite for a Recipe
 */
export function toggleFavoriteRecipe(dishTitle, cityId, cityName, dishDesc, category, countryId) {
  if (!dishTitle || !cityId) return;

  const resolvedCountryId = countryId || (window.CITY_TO_COUNTRY && window.CITY_TO_COUNTRY[cityId]) || '';
  const countryName = getCountryName(resolvedCountryId);

  const item = {
    id: `recipe:${cityId}-${dishTitle}`,
    type: 'recipe',
    title: dishTitle,
    cityId,
    cityName: cityName || cityId,
    countryId: resolvedCountryId,
    countryName,
    desc: dishDesc || 'Παραδοσιακή συνταγή και τοπική γεύση',
    category: category || 'Συνταγή / Γαστρονομία'
  };

  toggleFavorite(item);
}

/**
 * Toggle Favorite for a POI / Landmark
 */
export function toggleFavoritePoi(poiName, cityId, cityName, poiDesc, coords, category, countryId) {
  if (!poiName || !cityId) return;

  const resolvedCountryId = countryId || (window.CITY_TO_COUNTRY && window.CITY_TO_COUNTRY[cityId]) || '';
  const countryName = getCountryName(resolvedCountryId);

  const item = {
    id: `poi:${cityId}-${poiName}`,
    type: 'poi',
    title: poiName,
    cityId,
    cityName: cityName || cityId,
    countryId: resolvedCountryId,
    countryName,
    desc: poiDesc || 'Ιστορικό μνημείο & σημείο ενδιαφέροντος',
    coords: coords || null,
    category: category || 'Αξιοθέατο'
  };

  toggleFavorite(item);
}

/**
 * Switch Active Filter in Favorites Modal
 */
export function switchFavoritesFilter(filterType) {
  currentFilter = filterType;

  const tabs = ['all', 'city', 'poi', 'recipe'];
  tabs.forEach(t => {
    const btn = document.getElementById(`favTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === filterType) {
        btn.className = 'px-3 py-1.5 rounded-lg font-semibold transition bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm';
      } else {
        btn.className = 'px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 font-semibold transition border border-transparent';
      }
    }
  });

  renderFavoritesList();
}

/**
 * Open Favorites Modal
 */
export function openFavoritesModal() {
  const modal = document.getElementById('favoritesModal');
  if (!modal) return;

  modal.classList.remove('hidden');
  updateFavoritesBadge();
  switchFavoritesFilter('all');

  const searchInput = document.getElementById('favoritesSearchInput');
  if (searchInput) {
    searchInput.value = '';
    setTimeout(() => searchInput.focus(), 100);
  }
}

/**
 * Close Favorites Modal
 */
export function closeFavoritesModal() {
  const modal = document.getElementById('favoritesModal');
  if (modal) modal.classList.add('hidden');
}

/**
 * Render List of Favorite Cards inside Modal
 */
export function renderFavoritesList() {
  const container = document.getElementById('favoritesListContainer');
  if (!container) return;

  const searchInput = document.getElementById('favoritesSearchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let list = getFavorites();

  // Filter by Type
  if (currentFilter !== 'all') {
    list = list.filter(item => item.type === currentFilter);
  }

  // Filter by Search Query
  if (query) {
    list = list.filter(item => {
      const t = (item.title || '').toLowerCase();
      const c = (item.cityName || '').toLowerCase();
      const co = (item.countryName || '').toLowerCase();
      const d = (item.desc || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      return t.includes(query) || c.includes(query) || co.includes(query) || d.includes(query) || cat.includes(query);
    });
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center py-12 px-4 space-y-3">
        <div class="h-16 w-16 rounded-3xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-2xl text-amber-400/60 shadow-inner">
          <i class="fa-regular fa-star"></i>
        </div>
        <div>
          <h4 class="text-sm sm:text-base font-bold text-white">Δεν βρέθηκαν αγαπημένα</h4>
          <p class="text-xs text-slate-400 max-w-sm mt-1 leading-relaxed">
            ${query ? 'Δεν υπάρχουν αποτελέσματα για την αναζήτησή σας. Δοκιμάστε άλλον όρο.' : 'Πατήστε το αστέρι ⭐ σε οποιαδήποτε πόλη, αξιοθέατο ή συνταγή για να τη βρείτε άμεσα εδώ!'}
          </p>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    let typeIcon = 'fa-solid fa-city text-sky-400';
    let typeBadge = 'bg-sky-950/80 text-sky-300 border-sky-600/40';
    let typeLabel = 'Πόλη';

    if (item.type === 'recipe') {
      typeIcon = 'fa-solid fa-utensils text-orange-400';
      typeBadge = 'bg-orange-950/80 text-orange-300 border-orange-600/40';
      typeLabel = 'Συνταγή / Γαστρονομία';
    } else if (item.type === 'poi') {
      typeIcon = 'fa-solid fa-landmark text-amber-400';
      typeBadge = 'bg-amber-950/80 text-amber-300 border-amber-600/40';
      typeLabel = item.category || 'Αξιοθέατο';
    }

    const cityLoc = item.cityName ? `${item.cityName}${item.countryName ? ', ' + item.countryName : ''}` : (item.countryName || 'Ευρώπη');

    return `
      <div class="p-4 bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl transition shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
        <!-- Left: Icon & Info -->
        <div class="flex items-start gap-3.5 min-w-0 flex-1">
          <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow text-base group-hover:scale-105 transition">
            <i class="${typeIcon}"></i>
          </div>
          <div class="min-w-0 flex-1 space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${typeBadge}">
                ${typeLabel}
              </span>
              <!-- City & Country Location Badge (Always visible for recipes & POIs!) -->
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900 text-slate-300 border border-slate-700/80 truncate">
                <i class="fa-solid fa-location-dot text-rose-400 text-[9px]"></i>
                <span>${cityLoc}</span>
              </span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-amber-300 transition truncate">${item.title}</h4>
            <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">${item.desc || ''}</p>
          </div>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/80">
          <button onclick="window.navigateToFavorite('${item.id}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs transition shadow-md flex items-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-location-arrow text-[11px]"></i>
            <span>Μετάβαση</span>
          </button>
          <button onclick="window.removeFavorite('${item.id}')" class="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/80 text-slate-400 hover:text-rose-300 border border-slate-800 hover:border-rose-700/50 transition cursor-pointer text-xs" title="Αφαίρεση από τα Αγαπημένα">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Navigate to Favorite Item
 */
export async function navigateToFavorite(id) {
  const list = getFavorites();
  const item = list.find(x => x.id === id);
  if (!item) return;

  closeFavoritesModal();

  if (item.type === 'city') {
    if (window.flyToCity) {
      window.flyToCity(item.cityId);
      showToast(`Μετάβαση στην πόλη: ${item.title}`, 'fa-solid fa-city', 'info');
    }
  } else if (item.type === 'recipe') {
    if (window.flyToCity) {
      await window.flyToCity(item.cityId);
      if (window.switchTab) {
        window.switchTab('gastro');
        showToast(`Συνταγή: ${item.title} (${item.cityName})`, 'fa-solid fa-utensils', 'info');
        // Smoothly highlight dish card
        setTimeout(() => {
          const cards = document.querySelectorAll('#tab-content h5');
          for (const card of cards) {
            if (card.textContent.trim().toLowerCase().includes(item.title.toLowerCase())) {
              const el = card.closest('.rounded-xl');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('ring-2', 'ring-amber-400');
                setTimeout(() => el.classList.remove('ring-2', 'ring-amber-400'), 3500);
              }
              break;
            }
          }
        }, 400);
      }
    }
  } else if (item.type === 'poi') {
    if (window.flyToCity) {
      await window.flyToCity(item.cityId);
      if (window.switchTab) {
        window.switchTab('guide');
        showToast(`Αξιοθέατο: ${item.title} (${item.cityName})`, 'fa-solid fa-landmark', 'info');
        setTimeout(() => {
          const cards = document.querySelectorAll('#tab-content h5');
          for (const card of cards) {
            if (card.textContent.trim().toLowerCase().includes(item.title.toLowerCase())) {
              const el = card.closest('.rounded-xl');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('ring-2', 'ring-sky-400');
                setTimeout(() => el.classList.remove('ring-2', 'ring-sky-400'), 3500);
              }
              break;
            }
          }
        }, 400);
      }
      if (item.coords && window.flyToCoordinates) {
        window.flyToCoordinates(item.coords[0], item.coords[1], 16);
      }
    }
  }
}

/**
 * Toast Notification System
 */
let toastTimeout = null;
export function showToast(message, iconClass = 'fa-solid fa-star', type = 'info') {
  let container = document.getElementById('earthtimesToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'earthtimesToastContainer';
    container.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-[3000] pointer-events-none transition-all duration-300 flex flex-col items-center gap-2';
    document.body.appendChild(container);
  }

  let bgClass = 'bg-slate-900/95 border-amber-500/50 text-white shadow-amber-950/50';
  let iconColor = 'text-amber-400';

  if (type === 'warning') {
    bgClass = 'bg-slate-900/95 border-rose-500/50 text-white shadow-rose-950/50';
    iconColor = 'text-rose-400';
  } else if (type === 'success') {
    bgClass = 'bg-slate-900/95 border-emerald-500/50 text-white shadow-emerald-950/50';
    iconColor = 'text-emerald-400';
  }

  const toast = document.createElement('div');
  toast.className = `px-4 py-2.5 rounded-2xl border ${bgClass} shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-xs font-semibold animate-bounce-in pointer-events-auto transition-opacity duration-300`;
  toast.innerHTML = `
    <i class="${iconClass} ${iconColor} text-sm"></i>
    <span>${message}</span>
  `;

  container.innerHTML = '';
  container.appendChild(toast);

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('opacity-0');
    setTimeout(() => {
      if (container.contains(toast)) container.removeChild(toast);
    }, 300);
  }, 2700);
}

// Window global bindings
window.openFavoritesModal = openFavoritesModal;
window.closeFavoritesModal = closeFavoritesModal;
window.switchFavoritesFilter = switchFavoritesFilter;
window.renderFavoritesList = renderFavoritesList;
window.clearAllFavorites = clearAllFavorites;
window.toggleFavoriteCurrentCity = toggleFavoriteCurrentCity;
window.toggleFavoriteRecipe = toggleFavoriteRecipe;
window.toggleFavoritePoi = toggleFavoritePoi;
window.navigateToFavorite = navigateToFavorite;
window.removeFavorite = removeFavorite;
