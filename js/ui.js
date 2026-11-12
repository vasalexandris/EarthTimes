/**
 * UI Module
 * Handles DOM rendering for Dossier, Breadcrumbs, Tabs, Flight Status, Filters,
 * Base Map Layer selector, Date display, Video Overlay, and Deep Dive views.
 */

import { getCityVideo, getAvailableVideoTypes, getAvailableCityTours, CITY_VIDEOS, findPoiLiveCam } from './video-service.js?v=20261113_us3';
import { getDeepDiveData } from './deep-dive.js?v=20261113_us3';
import { fetchWikiArticle, fetchWikiArticleHtml, cleanWikiTitle } from './wiki-service.js?v=20261113_us3';

let currentActiveVideoCityId = null;
let currentActiveVideoType = 'drone';

let currentWikiTitle = '';
let currentWikiLang = 'el';
let currentWikiFallbackEn = '';
let activeDeepDiveData = null;

function escapeStr(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/\n/g, ' ');
}

export function syncMapFloatingControlsVisibility() {
  const container = document.getElementById('addSpotFloatingContainer');
  if (!container) return;

  const videoOverlay = document.getElementById('mapVideoOverlay');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');

  const isVideoOpen = videoOverlay && !videoOverlay.classList.contains('hidden');
  const isDeepDiveOpen = deepDiveOverlay && !deepDiveOverlay.classList.contains('hidden');
  const isWikiOpen = wikiOverlay && !wikiOverlay.classList.contains('hidden');
  const isStreetViewOpen = streetViewOverlay && !streetViewOverlay.classList.contains('hidden');

  if (isVideoOpen || isDeepDiveOpen || isWikiOpen || isStreetViewOpen) {
    container.classList.add('hidden');
  } else {
    container.classList.remove('hidden');
  }
}

export function openCityVideo(cityId, preferredType = 'drone') {
  currentActiveVideoCityId = cityId;
  currentActiveVideoType = preferredType;

  const vid = getCityVideo(cityId, preferredType);
  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const deepDiveOverlay = document.getElementById('mapDeepDiveOverlay');
  const wikiOverlay = document.getElementById('mapWikiOverlay');
  const streetViewOverlay = document.getElementById('mapStreetViewOverlay');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');

  if (!overlay || !iframe) return;

  // Close other overlays if open
  if (deepDiveOverlay) deepDiveOverlay.classList.add('hidden');
  if (wikiOverlay) wikiOverlay.classList.add('hidden');
  if (streetViewOverlay) {
    const svFrame = document.getElementById('mapStreetViewIframe');
    if (svFrame) svFrame.src = 'about:blank';
    streetViewOverlay.classList.add('hidden');
  }

  const youtubeId = vid?.youtubeId || '54nbsW6jYN4';
  const videoTitle = vid?.title || `Περιήγηση 4K: ${cityId}`;

  if (title) title.innerText = videoTitle;
  if (directLink) directLink.href = `https://www.youtube.com/watch?v=${youtubeId}`;
  iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;

  // Render switcher pills for all available tour options (Drone, Walking, Guide, Live)
  if (typeSelector) {
    const tours = getAvailableCityTours(cityId);
    if (tours.length > 1) {
      typeSelector.innerHTML = tours.map(t => {
        const isActive = preferredType === t.type;
        const isLive = t.type === 'live';
        const shortLabel = t.type === 'drone' ? 'Drone 4K' : (t.type === 'walking' ? 'Walking 4K' : (isLive ? 'Live Cam' : 'Αξιοθέατα 4K'));
        return `
          <button onclick="switchCityVideoType('${t.type}')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${isActive ? (isLive ? 'bg-red-600 text-white shadow-md shadow-red-900/50' : 'bg-sky-600 text-white shadow-md') : (isLive ? 'bg-red-950/70 text-red-300 hover:text-white border border-red-700/60 hover:bg-red-900/80' : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700')}">
            ${isLive ? '<span class="relative flex h-2 w-2 mr-0.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>' : `<i class="${t.icon}"></i>`}
            <span>${shortLabel}</span>
          </button>
        `;
      }).join('');
      typeSelector.classList.remove('hidden');
    } else {
      typeSelector.classList.add('hidden');
    }
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
  syncMapFloatingControlsVisibility();
}

export function switchCityVideoType(type) {
  if (currentActiveVideoCityId) {
    openCityVideo(currentActiveVideoCityId, type);
  }
}

export function closeMapVideoOverlay() {
  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  if (iframe) iframe.src = '';
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
}

export function openLiveCamModal(youtubeId, titleText = 'Ζωντανή Μετάδοση') {
  const overlay = document.getElementById('mapVideoOverlay');
  const iframe = document.getElementById('mapVideoIframe');
  const title = document.getElementById('videoOverlayTitle');
  const directLink = document.getElementById('videoDirectLink');
  const typeSelector = document.getElementById('videoTypeSelector');

  if (!overlay || !iframe) return;

  closeMapWikiOverlay();
  closeMapStreetViewOverlay();
  closeDeepDiveOverlay();

  if (title) title.innerText = `🔴 Live Cam: ${titleText}`;
  if (directLink) directLink.href = `https://www.youtube.com/watch?v=${youtubeId}`;
  iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;

  if (typeSelector) typeSelector.classList.add('hidden');

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function toggleCityVideoDropdown(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById('cityVideoDropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

export function selectCityVideoTour(cityId, type) {
  const dropdown = document.getElementById('cityVideoDropdown');
  if (dropdown) dropdown.classList.add('hidden');
  openCityVideo(cityId, type);
}

export function renderCityVideoDropdownMenu(cityId) {
  const dropdown = document.getElementById('cityVideoDropdown');
  if (!dropdown) return;
  const tours = getAvailableCityTours(cityId);
  if (!tours || tours.length === 0) {
    dropdown.innerHTML = `<div class="p-3 text-slate-400 text-center text-xs">Δεν υπάρχουν διαθέσιμα βίντεο</div>`;
    return;
  }
  dropdown.innerHTML = `
    <div class="px-3 py-1.5 border-b border-slate-800 text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
      <i class="fa-brands fa-youtube text-red-500"></i> Επιλογή Τύπου Περιήγησης
    </div>
    <div class="py-1">
      ${tours.map(t => {
        const isLive = t.type === 'live';
        return `
        <button onclick="selectCityVideoTour('${cityId}', '${t.type}')" class="w-full text-left px-3 py-2 hover:bg-slate-800 hover:text-sky-300 text-slate-200 transition flex items-center gap-2.5 group">
          <div class="w-7 h-7 rounded-lg ${isLive ? 'bg-red-950/80 text-red-400 group-hover:bg-red-600/30 group-hover:text-red-300 border border-red-700/60' : 'bg-slate-800 group-hover:bg-sky-600/20 group-hover:text-sky-300 text-amber-400 border border-slate-700/60'} flex items-center justify-center shrink-0">
            ${isLive ? '<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>' : `<i class="${t.icon} text-xs"></i>`}
          </div>
          <div class="min-w-0 flex-1">
            <div class="font-bold text-xs truncate ${isLive ? 'text-red-300 group-hover:text-red-200 flex items-center gap-1.5' : 'group-hover:text-sky-200'}">
              <span>${t.label}</span>
              ${isLive ? '<span class="px-1.5 py-0.2 text-[9px] bg-red-600 text-white rounded font-extrabold uppercase tracking-wide">LIVE</span>' : ''}
            </div>
            <div class="text-[10px] text-slate-400 truncate">${t.title}</div>
          </div>
        </button>
      `;}).join('')}
    </div>
  `;
}

/**
 * In-Map Embedded Wikipedia Reader
 * Opens full Wikipedia article inside the map container overlay without external tabs
 */
export async function openMapWikiReader(queryOrTitle, lang = 'el', fallbackEnQuery = '') {
  currentWikiTitle = queryOrTitle;
  currentWikiLang = lang;
  currentWikiFallbackEn = fallbackEnQuery;

  const overlay = document.getElementById('mapWikiOverlay');
  const iframe = document.getElementById('mapWikiIframe');
  const titleEl = document.getElementById('wikiOverlayTitle');
  const langBadge = document.getElementById('wikiOverlayLangBadge');
  const langLabel = document.getElementById('wikiOverlayLangLabel');
  const loading = document.getElementById('wikiOverlayLoading');

  if (!overlay || !iframe) return;

  // Close video overlay and street view overlay if open
  closeMapVideoOverlay();
  closeMapStreetViewOverlay();

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
  syncMapFloatingControlsVisibility();
  if (loading) loading.classList.remove('hidden');
  iframe.classList.add('hidden');

  if (titleEl) titleEl.innerText = queryOrTitle;
  if (langBadge) langBadge.innerText = lang.toUpperCase();
  if (langLabel) langLabel.innerText = lang === 'el' ? 'English' : 'Ελληνικά';

  const res = await fetchWikiArticleHtml(queryOrTitle, lang, fallbackEnQuery);

  const translateBtn = document.getElementById('wikiTranslateBtn');
  const translateLabel = document.getElementById('wikiTranslateBtnLabel');
  if (translateBtn) {
    if (res && res.lang === 'en') {
      translateBtn.classList.remove('hidden');
      if (translateLabel) translateLabel.innerText = 'Μετάφραση στα Ελληνικά';
    } else {
      translateBtn.classList.add('hidden');
    }
  }

  if (res && res.docHtml) {
    currentWikiLang = res.lang;
    if (titleEl) titleEl.innerText = res.title;
    if (langBadge) langBadge.innerText = res.lang.toUpperCase();
    if (langLabel) langLabel.innerText = res.lang === 'el' ? 'English' : 'Ελληνικά';

    iframe.srcdoc = res.docHtml;
    if (loading) loading.classList.add('hidden');
    iframe.classList.remove('hidden');
  } else {
    // Fallback message inside reader frame
    iframe.srcdoc = `
      <div style="background:#0b0f19;color:#cbd5e1;font-family:system-ui,-apple-system,sans-serif;padding:48px 24px;text-align:center;">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(239,68,68,0.15);color:#f87171;display:inline-flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;">
          ✕
        </div>
        <h2 style="color:#f8fafc;font-size:18px;margin-bottom:8px;font-weight:700;">Δεν βρέθηκε άρθρο στη Wikipedia</h2>
        <p style="color:#94a3b8;font-size:13px;max-width:440px;margin:0 auto 20px auto;line-height:1.6;">
          Δεν κατέστη δυνατή η φόρτωση επίσημου λήμματος για το θέμα "<strong>${escapeStr(queryOrTitle)}</strong>" στη γλώσσα <strong>${lang.toUpperCase()}</strong>.
        </p>
        <button onclick="window.parent.postMessage({ type: 'EARTH_TIMES_CLOSE_WIKI' }, '*')" style="background:#0284c7;color:white;border:none;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:bold;cursor:pointer;">
          Επιστροφή στον Χάρτη
        </button>
      </div>
    `;
    if (loading) loading.classList.add('hidden');
    iframe.classList.remove('hidden');
  }
}

export function toggleWikiReaderLanguage() {
  const nextLang = currentWikiLang === 'el' ? 'en' : 'el';
  openMapWikiReader(currentWikiTitle, nextLang, currentWikiFallbackEn);
}

export function translateWikiReaderInPlace() {
  const iframe = document.getElementById('mapWikiIframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'EARTH_TIMES_TRANSLATE_EL' }, '*');
  }
}
window.translateWikiReaderInPlace = translateWikiReaderInPlace;

// Listen for translation status events from within the wiki iframe
window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'EARTH_TIMES_TRANSLATE_STATUS') {
    const btnLabel = document.getElementById('wikiTranslateBtnLabel');
    if (btnLabel) {
      if (e.data.isTranslating) {
        btnLabel.innerText = 'Μετάφραση...';
      } else if (e.data.isTranslated) {
        btnLabel.innerText = 'Επαναφορά (English)';
      } else {
        btnLabel.innerText = 'Μετάφραση στα Ελληνικά';
      }
    }
  }
});

export function closeMapWikiOverlay() {
  const overlay = document.getElementById('mapWikiOverlay');
  const iframe = document.getElementById('mapWikiIframe');
  if (iframe) iframe.srcdoc = '';
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
}

/**
 * In-Map Embedded Google Street View Overlay
 * Opens street view / 360 viewer inside the map canvas without external navigation
 */
export function openMapStreetView(lat, lng, title = '') {
  const overlay = document.getElementById('mapStreetViewOverlay');
  const iframe = document.getElementById('mapStreetViewIframe');
  const titleEl = document.getElementById('streetViewOverlayTitle');
  const coordsEl = document.getElementById('streetViewOverlayCoords');
  const directLink = document.getElementById('streetViewDirectLink');

  if (!overlay || !iframe) return;

  // Close other overlays
  closeMapVideoOverlay();
  closeMapWikiOverlay();
  closeDeepDiveOverlay();

  if (titleEl) {
    titleEl.innerText = title || 'Περιήγηση Δρόμων (Street View)';
  }
  if (coordsEl && lat !== undefined && lng !== undefined) {
    coordsEl.innerText = `${Number(lat).toFixed(4)}, ${Number(lng).toFixed(4)}`;
  }
  if (directLink && lat !== undefined && lng !== undefined) {
    directLink.href = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
  }

  // If a Google Maps API Key is provided by the user in settings, load the native 360° Street View embed directly
  const savedApiKey = localStorage.getItem('earthtimes_google_maps_key') || window.EARTH_TIMES_GOOGLE_API_KEY;
  if (savedApiKey && lat !== undefined && lng !== undefined) {
    iframe.src = `https://www.google.com/maps/embed/v1/streetview?key=${savedApiKey}&location=${lat},${lng}&heading=210&pitch=10&fov=85`;
  } else {
    // Google interactive embed centered on query or coords with zoom 17
    const queryParam = encodeURIComponent(title ? `${title}` : `${lat},${lng}`);
    iframe.src = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${queryParam}!6i17`;
  }

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();
}

export function closeMapStreetViewOverlay() {
  const overlay = document.getElementById('mapStreetViewOverlay');
  const iframe = document.getElementById('mapStreetViewIframe');
  if (iframe) iframe.src = 'about:blank';
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
  if (window.MapModule && typeof window.MapModule.invalidateMapSize === 'function') {
    window.MapModule.invalidateMapSize();
  }
}

export function openDeepDiveWikiReader() {
  if (activeDeepDiveData) {
    const title = activeDeepDiveData.wikiQuery || activeDeepDiveData.title;
    const fallbackEn = activeDeepDiveData.wikiEnQuery || '';
    openMapWikiReader(title, 'el', fallbackEn);
  }
}

export async function openDeepDive(keyOrTitle, fallbackSummary = '', contextEntityName = '') {
  const data = getDeepDiveData(keyOrTitle, fallbackSummary, contextEntityName);
  activeDeepDiveData = data;

  const overlay = document.getElementById('mapDeepDiveOverlay');
  const title = document.getElementById('deepDiveTitle');
  const badge = document.getElementById('deepDiveBadge');
  const content = document.getElementById('deepDiveContent');
  const wikiHeaderBtn = document.getElementById('deepDiveWikiHeaderBtn');

  if (!overlay || !content) return;

  // Close video overlay, wiki overlay, and street view overlay if open
  closeMapVideoOverlay();
  closeMapWikiOverlay();
  closeMapStreetViewOverlay();

  if (title) title.innerText = data.title;
  if (badge) badge.innerText = data.badge || data.category;
  if (wikiHeaderBtn) wikiHeaderBtn.classList.remove('hidden');

  const poiLive = data.liveCam ? { youtubeId: data.liveCam, title: data.title } : findPoiLiveCam(data.title || keyOrTitle);

  let sectionsHtml = '';
  if (data.sections && data.sections.length) {
    sectionsHtml = data.sections.map(s => `
      <div class="bg-slate-900/90 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
        <h4 class="text-base font-bold text-amber-300 mb-2.5 flex items-center gap-2">
          <i class="fa-solid fa-bookmark text-amber-400 text-xs"></i> ${s.heading}
        </h4>
        <div class="text-slate-200 text-sm leading-relaxed">${s.content}</div>
      </div>
    `).join('');
  }

  // Initial Content with AI Narrative
  content.innerHTML = `
    <!-- Hero Image Banner -->
    <div class="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl h-64 sm:h-80 bg-slate-900">
      <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold w-fit mb-2 backdrop-blur-md">
          <i class="fa-solid fa-landmark"></i> ${data.category} • ${data.epoch}
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">${data.title}</h2>
        <p class="text-xs text-slate-300 mt-1 italic drop-shadow">${data.caption || ''}</p>
      </div>
    </div>

    ${poiLive ? `
      <!-- Live Camera Banner Callout -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-red-950/80 via-slate-900 to-slate-900 border border-red-600/50 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/40 flex items-center justify-center text-lg">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div>
            <div class="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>Ζωντανή Μετάδοση 24/7</span>
              <span class="px-1.5 py-0.2 bg-red-600 text-white text-[9px] font-extrabold rounded">LIVE CAM</span>
            </div>
            <div class="text-sm font-bold text-white">${poiLive.title || data.title}</div>
          </div>
        </div>
        <button onclick="window.openLiveCamModal('${poiLive.youtubeId}', '${escapeStr(poiLive.title || data.title)}')" class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-red-900/50 transition cursor-pointer">
          <i class="fa-solid fa-play text-xs"></i>
          <span>Προβολή Live Stream</span>
        </button>
      </div>
    ` : ''}

    <!-- Detailed Knowledge Chapters -->
    <div class="space-y-4">
      ${sectionsHtml}
    </div>

    <!-- 3. Live Wikipedia Encyclopedia Integration Section -->
    <div id="deepDiveWikiContainer" class="p-5 sm:p-6 bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-2xl">
      <div class="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center text-sm font-bold shadow">
            <i class="fa-brands fa-wikipedia-w"></i>
          </div>
          <div>
            <h4 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Εγκυκλοπαιδική Τεκμηρίωση Wikipedia
            </h4>
            <p id="wikiStatusLabel" class="text-[11px] text-slate-400">Αναζήτηση στην Ελληνική Βικιπαίδεια (με αγγλικό fallback)...</p>
          </div>
        </div>
        <div id="wikiLangBadge" class="hidden text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-600/50">
          EL
        </div>
      </div>

      <!-- Wiki Live Card Content -->
      <div id="wikiArticleBox" class="space-y-3">
        <div class="flex items-center gap-2 text-xs text-slate-400 py-3">
          <i class="fa-solid fa-circle-notch fa-spin text-sky-400"></i>
          <span>Φόρτωση επίσημης εγκυκλοπαιδικής σελίδας...</span>
        </div>
      </div>
    </div>

    <!-- Return to Map Button at bottom -->
    <div class="pt-6 border-t border-slate-800 flex justify-center">
      <button onclick="closeDeepDiveOverlay()" class="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:scale-105 text-white font-bold text-sm shadow-xl flex items-center gap-2.5 transition">
        <i class="fa-solid fa-arrow-left"></i>
        <span>Επιστροφή στον Χάρτη</span>
      </button>
    </div>
  `;

  overlay.classList.remove('hidden');
  syncMapFloatingControlsVisibility();

  // Load Wikipedia article asynchronously with Greek priority & English fallback
  try {
    const wikiQuery = data.wikiQuery || data.title;
    const wikiEnQuery = data.wikiEnQuery || '';
    const article = await fetchWikiArticle(wikiQuery, wikiEnQuery);

    const wikiBox = document.getElementById('wikiArticleBox');
    const wikiStatus = document.getElementById('wikiStatusLabel');
    const wikiBadge = document.getElementById('wikiLangBadge');

    if (article && wikiBox) {
      if (wikiStatus) wikiStatus.innerText = `Πηγή: ${article.langLabel}`;
      if (wikiBadge) {
        wikiBadge.innerText = article.lang.toUpperCase();
        wikiBadge.classList.remove('hidden');
      }

      wikiBox.innerHTML = `
        <div class="flex flex-col sm:flex-row gap-4 items-start">
          ${article.thumbnail ? `
            <img src="${article.thumbnail}" alt="${article.title}" class="w-full sm:w-36 h-28 object-cover rounded-xl border border-slate-700 shadow shrink-0">
          ` : ''}
          <div class="flex-1 space-y-2">
            <h5 class="text-sm font-bold text-white flex items-center gap-2">
              <span>${article.title}</span>
              ${article.description ? `<span class="text-xs text-slate-400 font-normal italic">(${article.description})</span>` : ''}
            </h5>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${article.extract}
            </p>
          </div>
        </div>
        <div class="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <span class="text-[11px] text-slate-400 italic">
            Άμεση πρόσβαση για περαιτέρω διάβασμα:
          </span>
          <button onclick="openMapWikiReader('${escapeStr(article.rawTitle || article.title)}', '${article.lang}', '${escapeStr(data.wikiEnQuery || '')}')" class="px-4 py-2 rounded-xl bg-sky-600/20 hover:bg-sky-600/40 text-sky-300 hover:text-white border border-sky-500/40 text-xs font-bold transition flex items-center gap-2 shadow">
            <i class="fa-brands fa-wikipedia-w text-sky-400"></i>
            <span>Ανάγνωση ολόκληρου του άρθρου στον Χάρτη (${article.lang.toUpperCase()})</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      `;
    } else if (wikiBox) {
      if (wikiStatus) wikiStatus.innerText = 'Πρωτότυπη Ανάλυση EarthTimes AI';
      wikiBox.innerHTML = `
        <div class="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
          <i class="fa-solid fa-feather text-amber-400 text-sm mt-0.5"></i>
          <div>
            <p class="font-semibold text-slate-200">Πλήρης Πρωτότυπη Καταγραφή EarthTimes</p>
            <p class="text-slate-400 mt-0.5">Δεν βρέθηκε αυτοτελές λήμμα στη Wikipedia. Η ανάλυση που διαβάζετε παραπάνω συντέθηκε αποκλειστικά από την AI και το ψηφιακό αρχείο του EarthTimes.</p>
          </div>
        </div>
      `;
    }
  } catch (err) {
    console.warn('[DeepDive] Wikipedia fetch error:', err);
  }
}

export function closeDeepDiveOverlay() {
  const overlay = document.getElementById('mapDeepDiveOverlay');
  if (overlay) overlay.classList.add('hidden');
  syncMapFloatingControlsVisibility();
}

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
  const layerMeta = {
    dark: { name: 'Χάρτες - Dark', icon: 'fa-moon text-amber-400' },
    satellite: { name: 'Χάρτες - Δορυφόρος', icon: 'fa-satellite text-emerald-400' },
    osm: { name: 'Χάρτες - Πολιτικός', icon: 'fa-map text-sky-400' },
    topo: { name: 'Χάρτες - Ανάγλυφο', icon: 'fa-mountain-sun text-teal-400' },
    googleRoad: { name: 'Χάρτες - Google Maps', icon: 'fa-diamond-turn-right text-red-400' },
    googleHybrid: { name: 'Χάρτες - Google Δορυφόρος', icon: 'fa-earth-americas text-emerald-300' }
  };
  const activeLabel = document.getElementById('activeMapLayerName');
  if (activeLabel && layerMeta[activeKey]) {
    activeLabel.innerText = layerMeta[activeKey].name;
  }
  const activeIcon = document.getElementById('activeMapLayerIcon');
  if (activeIcon && layerMeta[activeKey]) {
    activeIcon.className = `fa-solid ${layerMeta[activeKey].icon}`;
  }
}

export function updatePoiFilterButtons(activeCategory) {
  const filterNames = {
    all: 'Σημεία (Όλα)',
    history: 'Σημεία (Ιστορικά)',
    culture: 'Σημεία (Πολιτισμός)',
    nature: 'Σημεία (Φύση)'
  };
  const activeLabel = document.getElementById('activeSpotsFilterName');
  if (activeLabel && filterNames[activeCategory]) {
    activeLabel.innerText = filterNames[activeCategory];
  }
}

export function updateTabButtons(activeTab) {
  const tabs = ['geo', 'hist', 'cult', 'guide', 'gastro', 'eco', 'demo', 'timeline'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-${t}`);
    if (!btn) return;
    if (t === activeTab) {
      btn.className = 'tab-btn py-2.5 px-3 border-b-2 border-sky-500 text-sky-400 font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap bg-slate-800/30';
    } else {
      btn.className = 'tab-btn py-2.5 px-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 whitespace-nowrap';
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

  // Show/Hide City Video Tour dropdown menu
  const cityVideoContainer = document.getElementById('cityVideoContainer');
  const cityVideoDropdown = document.getElementById('cityVideoDropdown');
  if (cityVideoContainer) {
    if (entityType === 'city' && entity.id && CITY_VIDEOS[entity.id]) {
      cityVideoContainer.classList.remove('hidden');
      renderCityVideoDropdownMenu(entity.id);
    } else {
      cityVideoContainer.classList.add('hidden');
      if (cityVideoDropdown) cityVideoDropdown.classList.add('hidden');
    }
  }

  // Show/Hide City Street View Button
  const cityStreetViewBtn = document.getElementById('cityStreetViewBtn');
  if (cityStreetViewBtn) {
    if (entityType === 'city' && entity.coords) {
      cityStreetViewBtn.classList.remove('hidden');
    } else {
      cityStreetViewBtn.classList.add('hidden');
    }
  }

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

  if (id === 'paris') {
    if (y < 1920) {
      return {
        era: '1900 - 1920: Η Μπελ Επόκ & η Παγκόσμια Έκθεση του Παρισιού',
        summary: 'Το Παρίσι αποτελεί το αδιαφιλονίκητο κέντρο του κόσμου. Εγκαίνια του πρώτου Μετρό (1900), ανέγερση του Grand Palais, και οι ζωγράφοι του Ιμπρεσιονισμού και του Κυβισμού (Πικάσο) στη Μονμάρτη.',
        keyFacts: [
          '1900: Exposition Universelle και λειτουργία της πρώτης γραμμής του Μετρό',
          'Ο Πύργος του Άιφελ γίνεται παγκόσμιος ραδιοφωνικός πομπός',
          'Τα καφέ της Μονμάρτης γεμίζουν από τους πρωτοπόρους της παγκόσμιας τέχνης'
        ]
      };
    } else if (y < 1945) {
      return {
        era: '1920 - 1945: Les Années Folles & Απελευθέρωση 1944',
        summary: 'Η ξέφρενη δεκαετία του 1920: Hemingway, Fitzgerald, Josephine Baker και η τζαζ στο Μονπαρνάς. Ακολουθεί η σκοτεινή περίοδος της Κατοχής και η ηρωική Απελευθέρωση του Παρισιού στις 25 Αυγούστου 1944.',
        keyFacts: [
          'Τα λογοτεχνικά στέκια του Σηκουάνα και η «Κινητή Γιορτή»',
          '1944: Είσοδος της 2ης Μεραρχίας Τεθωρακισμένων και πανηγυρισμοί στα Ηλύσια Πεδία'
        ]
      };
    } else if (y < 1980) {
      return {
        era: '1945 - 1980: Υπαρξισμός, Nouvelle Vague & Μάιος του 1968',
        summary: 'Ο Ζαν-Πωλ Σαρτρ και η Σιμόν ντε Μποβουάρ στο Café de Flore, η έκρηξη του γαλλικού νέου κύματος στο σινεμά (Godard, Truffaut) και η ιστορική εξέγερση των φοιτητών τον Μάιο του 1968 στο Καρτιέ Λατέν.',
        keyFacts: [
          'Το Saint-Germain-des-Prés επίκεντρο της παγκόσμιας φιλοσοφικής σκέψης',
          '1968: Ο Μάης του 1968 αλλάζει τη σύγχρονη κοινωνία και τα πανεπιστήμια'
        ]
      };
    } else {
      return {
        era: '1980 - 2026: Grands Projets, Ολυμπιακό Παρίσι & Πράσινη Μετάβαση',
        summary: 'Τα μεγάλα έργα του Μιτεράν (Γυάλινη Πυραμίδα του Λούβρου, Όπερα Βαστίλης), η αναγέννηση της Παναγίας των Παρισίων και οι θεαματικοί Ολυμπιακοί Αγώνες του 2024 στον Σηκουάνα.',
        keyFacts: [
          '1989: Εγκαίνια της Πυραμίδας του Λούβρου από τον I.M. Pei',
          '2024: Ιστορικοί Ολυμπιακοί Αγώνες με τελετή έναρξης στον ποταμό Σηκουάνα'
        ]
      };
    }
  }

  if (id === 'rome') {
    if (y < 1945) {
      return {
        era: '1900 - 1945: Πρωτεύουσα της Ιταλίας & Αρχαιολογική Αποκάλυψη',
        summary: 'Η Ρώμη εκσυγχρονίζεται ως πρωτεύουσα του νέου ιταλικού βασιλείου. Μεγάλες αρχαιολογικές ανασκαφές αποκαλύπτουν τα Fori Imperiali και τα υπόγεια του Κολοσσαίου.',
        keyFacts: [
          '1911: Εγκαίνια του επιβλητικού Vittoriano στην Piazza Venezia',
          'Αποκάλυψη των αρχαίων ρωμαϊκών αγορών και αναστήλωση των μνημείων'
        ]
      };
    } else if (y < 1980) {
      return {
        era: '1945 - 1980: La Dolce Vita & Κινηματογραφικός Μύθος',
        summary: 'Η χρυσή εποχή της Ρώμης: τα στούντιο της Cinecittà γίνονται το «Χόλιγουντ στον Τίβερη», ο Fellini γυρίζει το La Dolce Vita και η Via Veneto σφύζει από κοσμοπολίτικη ζωή.',
        keyFacts: [
          '1960: Ολυμπιακοί Αγώνες της Ρώμης με φόντο τα αρχαία μνημεία',
          'Η Φοντάνα ντι Τρέβι γίνεται το παγκόσμιο σύμβολο της ιταλικής σαγήνης'
        ]
      };
    } else {
      return {
        era: '1980 - 2026: Αιώνια Πόλη & Σύγχρονη Προστασία Κληρονομιάς',
        summary: 'Πλήρης πεζοδρόμηση των αυτοκρατορικών αγορών, νέες επεκτάσεις του μετρό με υπόγειες αρχαιολογικές εκθέσεις και προετοιμασία για το Ιωβηλαίο (Giubileo).',
        keyFacts: [
          'Προστασία ολόκληρου του ιστορικού κέντρου ως ενιαίου Μνημείου UNESCO',
          'Σύγχρονα αρχιτεκτονικά ορόσημα (MAXXI της Zaha Hadid, Auditorium του Renzo Piano)'
        ]
      };
    }
  }

  if (id === 'london') {
    if (y < 1945) {
      return {
        era: '1900 - 1945: Η Αυτοκρατορική Μητρόπολη & το Blitz',
        summary: 'Από την εδουαρδιανή αίγλη και τα πρώτα ηλεκτρικά λεωφορεία, μέχρι την ηρωική αντοχή των Λονδρέζων απέναντι στους βομβαρδισμούς της Luftwaffe το 1940.',
        keyFacts: [
          '1908: Πρώτοι Ολυμπιακοί Αγώνες στο Λονδίνο (White City)',
          '1940: Το Big Ben εκπέμπει αδιάκοπα μέσω BBC ως φωνή ελευθερίας για την Ευρώπη'
        ]
      };
    } else if (y < 1980) {
      return {
        era: '1945 - 1980: Swinging London, Beatlemania & Ποπ Επανάσταση',
        summary: 'Η πρωτεύουσα της παγκόσμιας νεανικής κουλτούρας: Abbey Road, μίνι φούστες στην Carnaby Street, The Beatles, The Rolling Stones, πανκ και David Bowie.',
        keyFacts: [
          '1960s: Το Λονδίνο καθορίζει τη μόδα, τη μουσική και το lifestyle του πλανήτη',
          'Ίδρυση του Εθνικού Συστήματος Υγείας (NHS) και σύγχρονη ανοικοδόμηση'
        ]
      };
    } else {
      return {
        era: '1980 - 2026: Παγκόσμιο Χρηματοοικονομικό Κέντρο & Υπερσύγχρονο Hub',
        summary: 'Ανάπλαση των Docklands και του Canary Wharf, κατασκευή του London Eye, της γραμμής Elizabeth Line και ουρανοξυστών όπως το The Shard.',
        keyFacts: [
          '2012: Εντυπωσιακοί Ολυμπιακοί Αγώνες του Λονδίνου',
          'Κορυφαίος ευρωπαϊκός κόμβος τεχνολογίας, τεχνητής νοημοσύνης και FinTech'
        ]
      };
    }
  }

  if (id === 'berlin') {
    if (y < 1945) {
      return {
        era: '1900 - 1945: Η Βαϊμάρη των Τεχνών & οι Πληγές του Πολέμου',
        summary: 'Το Βερολίνο της δεκαετίας του 1920 αποτελεί την πιο πρωτοποριακή πόλη της Ευρώπης σε θέατρο (Μπρεχτ), σινεμά και επιστήμες (Αϊνστάιν), πριν την καταστροφή του Β΄ Παγκοσμίου Πολέμου.',
        keyFacts: [
          '1920s: Παγκόσμια πρωτεύουσα της πρωτοπορίας, του εξπρεσιονισμού και της επιστήμης',
          '1945: Η Μάχη του Βερολίνου και η πτώση της Πύλης του Βραδεμβούργου'
        ]
      };
    } else if (y < 1990) {
      return {
        era: '1945 - 1989: Το Διαιρεμένο Βερολίνο & το Τείχος',
        summary: 'Η καρδιά του Ψυχρού Πολέμου. Η ανέγερση του Τείχους το 1961 χώρισε οικογένειες για 28 χρόνια, μέχρι το ιστορικό βράδυ της 9ης Νοεμβρίου 1989 που οι πολίτες το γκρέμισαν με τα χέρια τους.',
        keyFacts: [
          '1961: Ανέγερση του Τείχους του Βερολίνου',
          '1989: Η ειρηνική επανάσταση ρίχνει το Τείχος και ενώνει την Ευρώπη'
        ]
      };
    } else {
      return {
        era: '1990 - 2026: Η Επανενωμένη Πρωτεύουσα της Δημιουργίας',
        summary: 'Η μεταμόρφωση του Βερολίνου στη νέα ομοσπονδιακή πρωτεύουσα: ο γυάλινος θόλος του Reichstag, η Potsdamer Platz και το παγκόσμιο κέντρο ηλεκτρονικής μουσικής και startups.',
        keyFacts: [
          '1999: Επιστροφή της Γερμανικής Κυβέρνησης και του Κοινοβουλίου στο Βερολίνο',
          'Η East Side Gallery γίνεται το μεγαλύτερο ανοιχτό μνημείο ελευθερίας στον κόσμο'
        ]
      };
    }
  }

  if (id === 'vienna') {
    if (y < 1920) {
      return {
        era: '1790 - 1920: Αυτοκρατορική Αίγλη & Νεοελληνικός Διαφωτισμός',
        summary: 'Η αυτοκρατορική πρωτεύουσα των Αψβούργων. Για την Ελλάδα υπήρξε το λίκνο της εθνικής αφύπνισης: οι Κοζανίτες έμποροι και ο Ρήγας Φεραίος τυπώνουν τη Χάρτα και τον Θούριο στο Fleischmarkt.',
        keyFacts: [
          '1797: Εκτύπωση της «Χάρτας της Ελλάδος» του Ρήγα στη Βιέννη (φυλάσσεται στην Κοζάνη)',
          'Η χρυσή εποχή του Μπετόβεν, του Μότσαρτ και των βαλς του Στράους',
          '1900: Το Fin-de-Siècle με τον Κλιμτ και τον Φρόυντ'
        ]
      };
    } else if (y < 1970) {
      return {
        era: '1920 - 1970: «Κόκκινη Βιέννη», Μεταπολεμική Ανασυγκρότηση & Ουδετερότητα',
        summary: 'Πρωτοποριακά κοινωνικά προγράμματα δημόσιας στέγασης (Karl-Marx-Hof), μεταπολεμική ανοικοδόμηση και η Συνθήκη του 1955 που καθιερώνει τη μόνιμη ουδετερότητα της Αυστρίας.',
        keyFacts: [
          '1955: Συνθήκη του Αυστριακού Κράτους και επαναλειτουργία της Κρατικής Όπερας',
          'Καθιέρωση της Βιέννης ως ουδέτερης γέφυρας ανάμεσα σε Ανατολή και Δύση'
        ]
      };
    } else {
      return {
        era: '1970 - 2026: Έδρα των Ηνωμένων Εθνών & Κορυφαία Ποιότητα Ζωής',
        summary: 'Ίδρυση της πόλης του ΟΗΕ (UNO-City), διατήρηση του ιστορικού κέντρου UNESCO και σταθερή κατάκτηση της 1ης θέσης παγκοσμίως σε ποιότητα ζωής.',
        keyFacts: [
          '1979: Εγκαίνια του Διεθνούς Κέντρου της Βιέννης (VIC / UN Vienna)',
          'Ζωντανός σεβασμός στην ιστορική ελληνική συνοικία και την Griechengasse'
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

export function getCuratedGuideItems(entity) {
  if (entity.guide?.items && Array.isArray(entity.guide.items) && entity.guide.items.length > 0) {
    return entity.guide.items;
  }
  const id = entity.id || '';
  if (id === 'kozani') {
    return [
      {
        title: 'Ιστορικό Καμπαναριό & Πλατεία Νίκης',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Το σύμβολο της Κοζάνης (Μαμάτσιος), κατασκευασμένο το 1855, δεσπόζει στην κεντρική πλατεία της πόλης.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Κοβεντάρειος Δημοτική Βιβλιοθήκη',
        cat: 'museum',
        catLabel: '🖼️ Μουσείο',
        desc: 'Η δεύτερη πλουσιότερη ιστορική βιβλιοθήκη στην Ελλάδα, με σπάνια χειρόγραφα και την πρωτότυπη Χάρτα του Ρήγα Φεραίου (1797).',
        wiki: 'Κοβεντάρειος_Δημοτική_Βιβλιοθήκη_Κοζάνης'
      },
      {
        title: 'Αρχοντικό Γρηγορίου Λασσάνη',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Επιβλητικό αρχοντικό του 18ου αιώνα, πατρικό σπίτι του Φιλικού και λόγιου Γεωργίου Λασσάνη, σήμερα Δημοτική Χαρτοθήκη.',
        wiki: 'Γεώργιος_Λασσάνης'
      },
      {
        title: 'Ιστορικό-Λαογραφικό & Φυσικής Ιστορίας Μουσείο',
        cat: 'museum',
        catLabel: '🖼️ Μουσείο',
        desc: 'Εντυπωσιακό πολυθεματικό μουσείο παραδοσιακής μακεδονικής αρχιτεκτονικής, με σπάνιες λαογραφικές συλλογές.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Λίμνη Πολυφύτου & Υψηλή Γέφυρα Σερβίων',
        cat: 'nature',
        catLabel: '🌿 Φύση',
        desc: 'Μία από τις μακρύτερες γέφυρες των Βαλκανίων (1.372 μέτρα) πάνω από τον τεχνητό ταμιευτήρα του Αλιάκμονα με εκπληκτική πανοραμική θέα.',
        wiki: 'Υψηλή_Γέφυρα_Σερβίων'
      }
    ];
  }
  if (id === 'athens') {
    return [
      {
        title: 'Ακρόπολη Αθηνών & Παρθενώνας',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Το αιώνιο αρχιτεκτονικό σύμβολο της παγκόσμιας δημοκρατίας και του δυτικού πολιτισμού στον Ιερό Βράχο.',
        wiki: 'Ακρόπολη_Αθηνών'
      },
      {
        title: 'Μουσείο Ακρόπολης',
        cat: 'museum',
        catLabel: '🖼️ Μουσείο',
        desc: 'Από τα κορυφαία μουσεία του κόσμου με υπερσύγχρονη γυάλινη αρχιτεκτονική και άμεση οπτική επαφή με τον Παρθενώνα.',
        wiki: 'Μουσείο_Ακρόπολης'
      },
      {
        title: 'Πλάκα & Αναφιώτικα',
        cat: 'nature',
        catLabel: '🌿 Περίπατος',
        desc: 'Η ιστορική «συνοικία των θεών» στους πρόποδες της Ακρόπολης με κυκλαδίτικα ασβεστωμένα σπίτια και νεοκλασικά σοκάκια.',
        wiki: 'Πλάκα'
      },
      {
        title: 'Αρχαία Αγορά & Ναός Ηφαίστου',
        cat: 'monument',
        catLabel: '🏛️ Μνημείο',
        desc: 'Το πολιτικό, εμπορικό και φιλοσοφικό κέντρο της αρχαίας πόλης, όπου δίδαξαν ο Σωκράτης και ο Πλάτων.',
        wiki: 'Αρχαία_Αγορά_της_Αθήνας'
      }
    ];
  }
  return (entity.cult?.items || []).map(it => ({
    title: it.title,
    cat: 'monument',
    catLabel: '🏛️ Αξιοθέατο',
    desc: it.desc,
    wiki: it.title
  }));
}

export function getCuratedGastroItems(entity) {
  if (entity.gastro?.items && Array.isArray(entity.gastro.items) && entity.gastro.items.length > 0) {
    return entity.gastro.items;
  }
  const id = entity.id || '';
  if (id === 'kozani') {
    return [
      {
        title: 'Κρόκος Κοζάνης (Σαφράν ΠΟΠ)',
        cat: 'product',
        catLabel: '🍇 Προϊόν ΠΟΠ',
        desc: 'Ο «κόκκινος χρυσός» της κοζανίτικης γης, ένα από τα ποιοτικότερα μπαχαρικά παγκοσμίως με σπάνιες αντιοξειδωτικές ιδιότητες.',
        wiki: 'Κρόκος_Κοζάνης'
      },
      {
        title: 'Κοζανίτικο Κιχί',
        cat: 'recipe',
        catLabel: '🥧 Παραδοσιακή Πίτα',
        desc: 'Η διάσημη στριφτή πίτα σε σπειροειδές σχήμα με τραγανό χειροποίητο φύλλο και πλούσια γέμιση από ντόπια φέτα.',
        wiki: 'Κιχί'
      },
      {
        title: 'Κοζανίτικα Γιαπράκια',
        cat: 'recipe',
        catLabel: '🥧 Εορταστική Γεύση',
        desc: 'Παραδοσιακοί λαχανοντολμάδες από αρμιά (λάχανο τουρσί) με χοιρινό και μοσχαρίσιο κιμά, κυρίαρχο πιάτο του χειμώνα.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Κρασιά & Τσίπουρο Βελβεντού / Σιάτιστας',
        cat: 'product',
        catLabel: '🍇 Τοπικός Οίνος',
        desc: 'Εκλεκτές ποικιλίες (Ξινόμαυρο, Μοσχόμαυρο) και ονομαστά ηλιαστά κρασιά από τους παραδοσιακούς αμπελώνες της περιοχής.',
        wiki: 'Βελβεντό'
      },
      {
        title: 'Σιροπιαστά & Τουλούμπες Κοζάνης',
        cat: 'cafe',
        catLabel: '☕ Ζαχαροπλαστική',
        desc: 'Μακρά παράδοση στα περίφημα ζαχαροπλαστεία της Πλατείας Νίκης με τραγανές τουλούμπες και κουραμπιέδες.',
        wiki: 'Κοζάνη'
      }
    ];
  }
  if (id === 'athens') {
    return [
      {
        title: 'Αυθεντικό Σουβλάκι Μοναστηρακίου',
        cat: 'recipe',
        catLabel: '🥧 Κλασική Γεύση',
        desc: 'Το απόλυτο αθηναϊκό street food με ψητή πίτα, ντομάτα, κρεμμύδι και παραδοσιακό γύρο ή καλαμάκι.',
        wiki: 'Σουβλάκι'
      },
      {
        title: 'Παραδοσιακές Ταβέρνες της Πλάκας',
        cat: 'cafe',
        catLabel: '☕ Εστίαση & Κρασί',
        desc: 'Ιστορικά κουτούκια και οινομαγειρεία με ρετσίνα Μεσογείων, κεφτεδάκια και ζωντανή κιθάρα.',
        wiki: 'Πλάκα'
      },
      {
        title: 'Κουλούρι Αθηνών / Θεσσαλονίκης',
        cat: 'product',
        catLabel: '🍇 Καθημερινή Συνήθεια',
        desc: 'Το τραγανό κουλούρι με σουσάμι που πωλείται από τους πρωινούς πλανόδιους πωλητές σε κάθε κεντρική γωνιά.',
        wiki: 'Κουλούρι_Θεσσαλονίκης'
      }
    ];
  }
  return [
    {
      title: `Παραδοσιακή Κουζίνα & Γεύσεις (${entity.name})`,
      cat: 'recipe',
      catLabel: '🥧 Τοπική Κουζίνα',
      desc: `Αυθεντικές συνταγές, υλικά και γαστρονομικές συνήθειες που διαμόρφωσαν την κουλτούρα της περιοχής.`,
      wiki: entity.name
    }
  ];
}

export function getCuratedEcoItems(entity) {
  if (entity.eco?.items && Array.isArray(entity.eco.items) && entity.eco.items.length > 0) {
    return entity.eco.items;
  }
  const id = entity.id || '';
  if (id === 'kozani') {
    return [
      {
        title: 'Πανεπιστήμιο Δυτικής Μακεδονίας (Νέο Campus)',
        cat: 'university',
        catLabel: '🎓 Πανεπιστήμιο',
        desc: 'Υπερσύγχρονο βιοκλιματικό campus στην περιοχή ΖΕΠ με Πολυτεχνική Σχολή, Σχολή Οικονομικών και ερευνητικά εργαστήρια.',
        wiki: 'Πανεπιστήμιο_Δυτικής_Μακεδονίας'
      },
      {
        title: 'Δίκαιη Αναπτυξιακή Μετάβαση & Πράσινο Υδρογόνο',
        cat: 'energy',
        catLabel: '⚡ Πράσινη Ενέργεια',
        desc: 'Μετασχηματισμός από λιγνιτικό σε ευρωπαϊκό κόμβο καθαρής ενέργειας, φωτοβολταϊκών πάρκων και τεχνολογιών υδρογόνου.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Πρωτοποριακό Δημοτικό Δίκτυο Τηλεθέρμανσης (ΔΕΥΑΚ)',
        cat: 'energy',
        catLabel: '⚡ Υποδομές',
        desc: 'Το πρώτο και μεγαλύτερο σύστημα τηλεθέρμανσης στην Ελλάδα, παρέχοντας οικολογική θέρμανση σε όλη την πόλη.',
        wiki: 'Κοζάνη'
      },
      {
        title: 'Εξαγωγικός Κλάδος & Αγροδιατροφή',
        cat: 'business',
        catLabel: '💼 Επιχειρηματικότητα',
        desc: 'Παγκόσμιο δίκτυο εξαγωγών Κρόκου, μαρμάρων, ροδάκινων και τοπικών αγροτικών προϊόντων υψηλής προστιθέμενης αξίας.',
        wiki: 'Κοζάνη'
      }
    ];
  }
  if (id === 'athens') {
    return [
      {
        title: 'Εθνικό & Καποδιστριακό Πανεπιστήμιο & ΕΜΠ',
        cat: 'university',
        catLabel: '🎓 Παιδεία & Έρευνα',
        desc: 'Κορυφαία ακαδημαϊκά ιδρύματα της χώρας με παγκόσμια διάκριση στη μηχανική, την ιατρική και τις θεωρητικές επιστήμες.',
        wiki: 'Εθνικό_και_Καποδιστριακό_Πανεπιστήμιο_Αθηνών'
      },
      {
        title: 'Οικοσύστημα Startups & Τεχνολογίας',
        cat: 'business',
        catLabel: '💼 Καινοτομία',
        desc: 'Ραγδαία αναπτυσσόμενος κόμβος τεχνολογίας, θερμοκοιτίδων και διεθνών επενδύσεων στη Νοτιοανατολική Ευρώπη.',
        wiki: 'Αθήνα'
      },
      {
        title: 'Παγκόσμια Ναυτιλιακή Έδρα',
        cat: 'business',
        catLabel: '💼 Ναυτιλία',
        desc: 'Η μητρόπολη της μεγαλύτερης εμπορικής ναυτιλίας στον πλανήτη με κέντρο διοίκησης το ευρύτερο πολεοδομικό συγκρότημα.',
        wiki: 'Ελληνική_εμπορική_ναυτιλία'
      }
    ];
  }
  return [
    {
      title: `Οικονομία & Αναπτυξιακή Ταυτότητα (${entity.name})`,
      cat: 'business',
      catLabel: '💼 Οικονομία',
      desc: `Σύγχρονοι παραγωγικοί τομείς, εμπόριο, υποδομές και απασχόληση στην περιοχή.`,
      wiki: entity.name
    }
  ];
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
            <div onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="p-3 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl cursor-pointer group">
              <div class="flex items-center justify-between gap-2">
                <div class="font-bold text-slate-100 text-sm mb-0.5 text-sky-300 group-hover:text-amber-300 transition">${item.title}</div>
                <span class="text-[10px] text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition flex items-center gap-1 shrink-0">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Ανάλυση
                </span>
              </div>
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
            <div onclick="window.openDeepDive('${escapeStr(h.event)}', '${escapeStr(h.desc)}', '${escapeStr(entity.name)}')" class="relative group cursor-pointer p-2 rounded-xl hover:bg-slate-800/60 transition">
              <div class="absolute -left-[27px] top-3 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-slate-900 group-hover:scale-125 transition"></div>
              <div class="flex items-center justify-between gap-2">
                <div class="text-xs font-black text-amber-400 tracking-wide">${h.year}</div>
                <span class="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition font-semibold flex items-center gap-1">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Λεπτομέρειες
                </span>
              </div>
              <div class="font-bold text-slate-100 text-sm group-hover:text-amber-200 transition">${h.event}</div>
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
            <div onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="p-3 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl cursor-pointer group">
              <div class="flex items-center justify-between gap-2">
                <div class="font-bold text-slate-100 text-sm mb-0.5 text-violet-300 group-hover:text-amber-300 transition">${item.title}</div>
                <span class="text-[10px] text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition flex items-center gap-1 shrink-0">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Ανάλυση
                </span>
              </div>
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
  } else if (tabId === 'guide') {
    const items = getCuratedGuideItems(entity);
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-sky-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-compass"></i> Αξιοθέατα & Ταξιδιωτικός Οδηγός
          </div>
          <p class="leading-relaxed">Τα κορυφαία ιστορικά μνημεία, τα μουσεία και τα σημεία που αξίζει να ανακαλύψετε στην περιοχή (${entity.name}).</p>
        </div>

        <div class="space-y-2.5 mt-3">
          ${items.map(item => {
            const matchedPoi = (entity.pois || []).find(p => p.name === item.title || (item.title && p.name && (item.title.toLowerCase().includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(item.title.toLowerCase()))));
            const itemCoords = matchedPoi?.coords || entity.coords || [37.9715, 23.7257];
            const searchPlace = `${item.title}, ${entity.name}`;
            return `
            <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-sky-500/50 transition border border-slate-700/40 rounded-xl">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950/80 text-sky-300 border border-sky-600/40 mb-1">
                    ${item.catLabel}
                  </span>
                  <h5 class="font-bold text-slate-100 text-sm text-sky-200">${item.title}</h5>
                </div>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
                <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                  <span>Ανάλυση AI</span>
                </button>
                <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-brands fa-wikipedia-w"></i>
                  <span>Wikipedia</span>
                </button>
                <button onclick="window.openMapStreetView(${itemCoords[0]}, ${itemCoords[1]}, '${escapeStr(searchPlace)}')" class="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-white border border-amber-500/30 text-[11px] font-bold transition flex items-center gap-1.5 shadow" title="Περιήγηση Street View στον Χάρτη">
                  <i class="fa-solid fa-street-view text-amber-400"></i>
                  <span>Street View</span>
                </button>
              </div>
            </div>
          `;
          }).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'gastro') {
    const items = getCuratedGastroItems(entity);
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-amber-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-utensils"></i> Γαστρονομία & Τοπικές Γεύσεις
          </div>
          <p class="leading-relaxed">Παραδοσιακές συνταγές, προϊόντα με Προστατευόμενη Ονομασία Προέλευσης (ΠΟΠ) και τοπική κουζίνα (${entity.name}).</p>
        </div>

        <div class="space-y-2.5 mt-3">
          ${items.map(item => `
            <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-amber-500/50 transition border border-slate-700/40 rounded-xl">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-600/40 mb-1">
                    ${item.catLabel}
                  </span>
                  <h5 class="font-bold text-slate-100 text-sm text-amber-200">${item.title}</h5>
                </div>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
              <div class="flex items-center gap-2 pt-2 border-t border-slate-800/70">
                <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                  <span>Ανάλυση AI</span>
                </button>
                <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-brands fa-wikipedia-w"></i>
                  <span>Wikipedia στον Χάρτη</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'eco') {
    const items = getCuratedEcoItems(entity);
    html = `
      <div class="space-y-3">
        <div class="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-slate-200">
          <div class="flex items-center gap-2 text-emerald-400 font-semibold mb-1 text-sm">
            <i class="fa-solid fa-lightbulb"></i> Καινοτομία, Οικονομία & Παιδεία
          </div>
          <p class="leading-relaxed">Πανεπιστημιακή εκπαίδευση, σύγχρονες υποδομές, πράσινη ενέργεια και επιχειρηματικότητα (${entity.name}).</p>
        </div>

        <div class="space-y-2.5 mt-3">
          ${items.map(item => `
            <div class="p-3.5 bg-slate-800/30 hover:bg-slate-800/80 hover:border-emerald-500/50 transition border border-slate-700/40 rounded-xl">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 mb-1">
                    ${item.catLabel}
                  </span>
                  <h5 class="font-bold text-slate-100 text-sm text-emerald-200">${item.title}</h5>
                </div>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.desc}</p>
              <div class="flex items-center gap-2 pt-2 border-t border-slate-800/70">
                <button onclick="window.openDeepDive('${escapeStr(item.title)}', '${escapeStr(item.desc)}', '${escapeStr(entity.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
                  <span>Ανάλυση AI</span>
                </button>
                <button onclick="window.openMapWikiReader('${escapeStr(item.wiki || item.title)}', 'el')" class="px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-700/50 text-[11px] font-bold transition flex items-center gap-1.5 shadow">
                  <i class="fa-brands fa-wikipedia-w"></i>
                  <span>Wikipedia στον Χάρτη</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
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
