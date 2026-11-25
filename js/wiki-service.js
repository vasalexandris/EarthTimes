/**
 * Wikipedia Service Module
 * Handles retrieval of official encyclopedia summaries and full standalone articles
 * with English priority (en.wikipedia.org) and automatic Greek counterpart resolution (el.wikipedia.org).
 * Powers the embedded In-Map Wikipedia Reader with dark mode and in-app search hub.
 */

const wikiSummaryCache = new Map();
const wikiHtmlCache = new Map();

/**
 * Cleans a query/title string from extra dates or parenthetical expressions
 */
export function cleanWikiTitle(str) {
  if (!str) return '';
  return str.replace(/\(.*?\)/g, '').split('–')[0].split('-')[0].trim();
}

/**
 * Checks whether a text string contains Greek characters
 */
export function containsGreek(str) {
  return /[\u0370-\u03FF]/.test(str || '');
}

/**
 * Translates a Greek query or POI name to English via Google Translate API
 */
export async function translateQueryToEnglish(query) {
  if (!query || !containsGreek(query)) return query;
  const clean = query.replace(/\(.*?\)/g, '').replace(/[&,]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!clean) return query;
  try {
    const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=el&tl=en&dt=t&q=${encodeURIComponent(clean)}`;
    const res = await fetch(endpoint);
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data[0])) {
        const translated = data[0].map(s => s[0]).join('').trim();
        if (translated) return translated;
      }
    }
  } catch (err) {
    console.warn('[WikiService] translateQueryToEnglish error:', err);
  }
  return clean;
}

/**
 * Resolves counterpart article title in another language via Wikipedia langlinks API
 */
export async function fetchLangLinks(title, fromLang = 'en', targetLang = 'el') {
  if (!title) return null;
  const cleanTitle = title.replace(/\s+/g, '_').trim();
  try {
    const endpoint = `https://${fromLang}.wikipedia.org/w/api.php?action=query&prop=langlinks&lllang=${targetLang}&titles=${encodeURIComponent(cleanTitle)}&format=json&origin=*`;
    const res = await fetch(endpoint);
    if (res.ok) {
      const data = await res.json();
      const pages = data.query?.pages;
      if (pages) {
        for (const k in pages) {
          const llinks = pages[k].langlinks;
          if (llinks && llinks.length > 0) {
            return llinks[0]['*'] || llinks[0].title;
          }
        }
      }
    }
  } catch (e) {
    console.warn(`[WikiService] LangLinks error (${fromLang} -> ${targetLang}):`, e);
  }
  return null;
}

/**
 * Resolves an English Wikipedia title for a Greek POI/term:
 * 1. Checks el.wikipedia interlanguage links (langlinks) to English
 * 2. Translates Greek to English and queries en.wikipedia list=search API for closest article
 */
export async function resolveEnglishWikiTitle(queryOrTitle) {
  if (!queryOrTitle) return '';
  if (!containsGreek(queryOrTitle)) return queryOrTitle;

  const cleanGreek = cleanWikiTitle(queryOrTitle);

  // 1. Direct interlanguage link from Greek Wikipedia
  try {
    const enCounterpart = await fetchLangLinks(cleanGreek, 'el', 'en');
    if (enCounterpart) return enCounterpart;
  } catch (e) {}

  // 2. Translate query to English and query en.wikipedia search API
  try {
    const translated = await translateQueryToEnglish(queryOrTitle);
    if (translated && !containsGreek(translated)) {
      const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(translated)}&utf8=&format=json&origin=*&srlimit=1`;
      const res = await fetch(endpoint);
      if (res.ok) {
        const data = await res.json();
        const topHit = data.query?.search?.[0]?.title;
        if (topHit) return topHit;
      }
      return translated;
    }
  } catch (e) {}

  return cleanGreek || queryOrTitle;
}

/**
 * Fetches Wikipedia article summary (for cards and previews) - Defaults to English first
 */
export async function fetchWikiArticle(queryOrTitle, fallbackEnQuery = '') {
  if (!queryOrTitle) return null;
  const cacheKey = `${queryOrTitle}_${fallbackEnQuery}`;
  if (wikiSummaryCache.has(cacheKey)) {
    return wikiSummaryCache.get(cacheKey);
  }

  async function fetchFromLang(lang, title) {
    if (!title) return null;
    const cleanTitle = title.replace(/\s+/g, '_').trim();
    const endpoint = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTitle)}`;
    try {
      const response = await fetch(endpoint, {
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.type !== 'disambiguation' && data.extract) {
          return {
            lang,
            langLabel: lang === 'en' ? 'English Wikipedia' : 'Ελληνική Βικιπαίδεια',
            title: data.title,
            displayTitle: data.displaytitle || data.title,
            extract: data.extract,
            thumbnail: data.thumbnail?.source || null,
            pageUrl: data.content_urls?.desktop?.page || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(cleanTitle)}`,
            description: data.description || '',
            rawTitle: cleanTitle
          };
        }
      }
    } catch (err) {
      console.warn(`[WikiService] Error fetching summary for ${cleanTitle} in ${lang}:`, err);
    }
    return null;
  }

  // 1. Try English first with resolved English title
  let enQuery = fallbackEnQuery || queryOrTitle;
  if (containsGreek(enQuery)) {
    const resolvedEn = await resolveEnglishWikiTitle(enQuery);
    if (resolvedEn) enQuery = resolvedEn;
  }

  let result = await fetchFromLang('en', enQuery);

  if (!result && (enQuery.includes('(') || enQuery.includes('–') || enQuery.includes('-'))) {
    result = await fetchFromLang('en', cleanWikiTitle(enQuery));
  }

  // 2. Fallback to Greek if English article doesn't exist
  if (!result) {
    result = await fetchFromLang('el', queryOrTitle);
    if (!result && (queryOrTitle.includes('(') || queryOrTitle.includes('–') || queryOrTitle.includes('-'))) {
      result = await fetchFromLang('el', cleanWikiTitle(queryOrTitle));
    }
  }

  if (result) {
    wikiSummaryCache.set(cacheKey, result);
  }
  return result;
}

/**
 * Fetches full article HTML for the in-map embedded reader - Defaults to English ('en')
 */
export async function fetchWikiArticleHtml(queryOrTitle, lang = 'en', fallbackQuery = '') {
  if (!queryOrTitle) return null;

  async function tryFetchHtml(targetLang, title) {
    if (!title) return null;
    const cleanTitle = title.replace(/\s+/g, '_').trim();
    const cacheKey = `${targetLang}_${cleanTitle}`;
    if (wikiHtmlCache.has(cacheKey)) {
      return wikiHtmlCache.get(cacheKey);
    }

    const endpoint = `https://${targetLang}.wikipedia.org/api/rest_v1/page/html/${encodeURIComponent(cleanTitle)}`;
    try {
      const res = await fetch(endpoint, {
        headers: { 'Accept': 'text/html' }
      });
      if (res.ok) {
        const rawHtml = await res.text();
        if (rawHtml && rawHtml.length > 200) {
          // Check for counterpart in opposite language
          const oppositeLang = targetLang === 'en' ? 'el' : 'en';
          const alternateTitle = await fetchLangLinks(cleanTitle, targetLang, oppositeLang);

          const processed = buildReaderDocument(rawHtml, targetLang, cleanTitle, alternateTitle, Boolean(alternateTitle));
          const out = {
            lang: targetLang,
            langLabel: targetLang === 'en' ? 'English (Wikipedia)' : 'Ελληνικά (Βικιπαίδεια)',
            title: title.replace(/_/g, ' '),
            rawTitle: cleanTitle,
            docHtml: processed,
            alternateTitle: alternateTitle || null,
            alternateLang: oppositeLang,
            hasAlternate: Boolean(alternateTitle)
          };
          wikiHtmlCache.set(cacheKey, out);
          return out;
        }
      }
    } catch (e) {
      console.warn(`[WikiService] Error fetching HTML for ${cleanTitle} in ${targetLang}:`, e);
    }
    return null;
  }

  async function tryOpenSearch(targetLang, query) {
    if (!query) return null;
    const cleanQ = cleanWikiTitle(query) || query;
    try {
      const searchEndpoint = `https://${targetLang}.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(cleanQ)}&limit=1&namespace=0&format=json&origin=*`;
      const sRes = await fetch(searchEndpoint);
      if (sRes.ok) {
        const sData = await sRes.json();
        if (sData && Array.isArray(sData[1]) && sData[1].length > 0) {
          const candidate = sData[1][0];
          return await tryFetchHtml(targetLang, candidate);
        }
      }
    } catch (err) {
      console.warn(`[WikiService] OpenSearch error for ${cleanQ} in ${targetLang}:`, err);
    }
    return null;
  }

  async function trySearchQuery(targetLang, query) {
    if (!query) return null;
    const cleanQ = cleanWikiTitle(query) || query;
    try {
      const endpoint = `https://${targetLang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(cleanQ)}&utf8=&format=json&origin=*&srlimit=1`;
      const sRes = await fetch(endpoint);
      if (sRes.ok) {
        const sData = await sRes.json();
        const topTitle = sData?.query?.search?.[0]?.title;
        if (topTitle) {
          return await tryFetchHtml(targetLang, topTitle);
        }
      }
    } catch (err) {
      console.warn(`[WikiService] SearchQuery error for ${cleanQ} in ${targetLang}:`, err);
    }
    return null;
  }

  // If English requested and input contains Greek characters, resolve English title first
  let primaryTitle = queryOrTitle;
  if (lang === 'en' && containsGreek(queryOrTitle)) {
    const resolved = await resolveEnglishWikiTitle(queryOrTitle);
    if (resolved) primaryTitle = resolved;
  }

  // 1. Try requested language (default 'en')
  let res = await tryFetchHtml(lang, primaryTitle);

  // If failed and title has parentheses or special symbols, try stripped title
  if (!res) {
    const stripped = cleanWikiTitle(primaryTitle);
    if (stripped && stripped !== primaryTitle) {
      res = await tryFetchHtml(lang, stripped);
    }
  }

  // 2. If fallbackQuery provided, resolve in English and try
  if (!res && fallbackQuery && fallbackQuery !== queryOrTitle) {
    let effectiveFallback = fallbackQuery;
    if (lang === 'en' && containsGreek(fallbackQuery)) {
      const resolvedFb = await resolveEnglishWikiTitle(fallbackQuery);
      if (resolvedFb) effectiveFallback = resolvedFb;
    }
    res = await tryFetchHtml(lang, effectiveFallback);
    if (!res) {
      const strippedFb = cleanWikiTitle(effectiveFallback);
      if (strippedFb && strippedFb !== effectiveFallback) {
        res = await tryFetchHtml(lang, strippedFb);
      }
    }
  }

  // 3. OpenSearch and List Search fallbacks to resolve closest article in requested language
  if (!res) {
    res = await tryOpenSearch(lang, primaryTitle) || await trySearchQuery(lang, primaryTitle);
    if (!res && fallbackQuery) {
      res = await tryOpenSearch(lang, fallbackQuery) || await trySearchQuery(lang, fallbackQuery);
    }
  }

  // 4. Secondary fallback: if requested was 'en' and still not found, try Greek article
  if (!res && lang === 'en') {
    const greekSearchTitle = cleanWikiTitle(queryOrTitle) || queryOrTitle;
    res = await tryFetchHtml('el', greekSearchTitle);
  }

  return res;
}

/**
 * Injects base href, dark mode styling, language navigation banners, and translation script
 */
function buildReaderDocument(rawHtml, lang, currentTitle, alternateTitle = '', hasAlternate = false) {
  const baseTag = `<base href="https://${lang}.wikipedia.org/">`;
  const darkStyles = `
    <style>
      :root {
        color-scheme: dark;
      }
      body {
        background-color: #0b0f19 !important;
        color: #cbd5e1 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
        font-size: 15px !important;
        line-height: 1.7 !important;
        padding: 24px 20px 80px 20px !important;
        max-width: 960px !important;
        margin: 0 auto !important;
        word-wrap: break-word !important;
      }
      h1, h2, h3, h4, h5, h6 {
        color: #f8fafc !important;
        border-bottom-color: #1e293b !important;
        font-weight: 700 !important;
      }
      h1 { font-size: 26px !important; margin-bottom: 16px !important; }
      h2 { font-size: 20px !important; margin-top: 28px !important; margin-bottom: 12px !important; border-bottom: 1px solid #1e293b !important; padding-bottom: 6px !important; }
      h3 { font-size: 17px !important; margin-top: 20px !important; }
      a {
        color: #38bdf8 !important;
        text-decoration: none !important;
      }
      a:hover {
        color: #7dd3fc !important;
        text-decoration: underline !important;
      }
      p {
        margin-bottom: 14px !important;
      }
      table, .infobox, .thumbinner, .toc, .wikitable, .navbox {
        background-color: #111827 !important;
        border: 1px solid #1f293d !important;
        color: #cbd5e1 !important;
        border-radius: 12px !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
      }
      th, td {
        border-color: #1f293d !important;
        background-color: transparent !important;
        color: #cbd5e1 !important;
        padding: 8px 10px !important;
      }
      th {
        background-color: #1e293b !important;
        color: #f1f5f9 !important;
      }
      img {
        border-radius: 8px !important;
        background: #1e293b !important;
      }
      .mw-editsection, .noprint, #siteSub, #contentSub, .mw-jump-link {
        display: none !important;
      }
      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0b0f19;
      }
      ::-webkit-scrollbar-thumb {
        background: #334155;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #475569;
      }
    </style>
  `;

  // Top Action Banners (Language Switch Link & In-place Translation Button)
  let topBannersHtml = '<div style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 10px;">';

  // If in English and Greek version exists, display prominent link to Greek Wikipedia
  if (lang === 'en' && hasAlternate && alternateTitle) {
    topBannersHtml += `
      <div style="background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.4); border-radius: 14px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 13px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">🇬🇷</span>
          <span style="color: #e2e8f0;">Διατίθεται και στην <strong>Ελληνική Βικιπαίδεια</strong>: <em style="color: #38bdf8; font-style: normal; font-weight: 700;">${alternateTitle}</em></span>
        </div>
        <button type="button" class="action-switch-lang" data-title="${encodeURIComponent(alternateTitle)}" data-lang="el" style="background: #0284c7; color: white; border: none; padding: 7px 16px; border-radius: 9px; font-weight: 700; cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; transition: background 0.2s;">
          <span>Διαβάστε στα Ελληνικά</span> &rarr;
        </button>
      </div>
    `;
  } else if (lang === 'el' && hasAlternate && alternateTitle) {
    topBannersHtml += `
      <div style="background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.4); border-radius: 14px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 13px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">🇬🇧</span>
          <span style="color: #e2e8f0;">Available in <strong>English Wikipedia</strong>: <em style="color: #38bdf8; font-style: normal; font-weight: 700;">${alternateTitle}</em></span>
        </div>
        <button type="button" class="action-switch-lang" data-title="${encodeURIComponent(alternateTitle)}" data-lang="en" style="background: #0284c7; color: white; border: none; padding: 7px 16px; border-radius: 9px; font-weight: 700; cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;">
          <span>Read in English</span> &rarr;
        </button>
      </div>
    `;
  }

  // Prominent in-article translation bar (Always present on English articles)
  if (lang === 'en') {
    topBannersHtml += `
      <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 14px; padding: 10px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 13px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 18px;">🌐</span>
          <span style="color: #cbd5e1;">Αυτόματη μετάφραση άρθρου στα Ελληνικά</span>
        </div>
        <button id="et-btn-translate-auto" onclick="window.translateInPlace()" style="background: #059669; color: white; border: none; padding: 7px 15px; border-radius: 9px; font-weight: 700; cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; transition: background 0.2s;">
          <span>🌐 Μετάφραση στα Ελληνικά</span>
        </button>
      </div>
    `;
  }

  topBannersHtml += '</div>';

  // Script to intercept in-article link clicks and handle in-place Greek translation
  const linkInterceptor = `
    <script>
      document.addEventListener('click', function(e) {
        var switchBtn = e.target.closest('.action-switch-lang');
        if (switchBtn) {
          e.preventDefault();
          e.stopPropagation();
          var raw = switchBtn.getAttribute('data-title');
          var targetLang = switchBtn.getAttribute('data-lang') || 'en';
          if (raw) {
            var targetTitle = decodeURIComponent(raw);
            try {
              if (window.parent && typeof window.parent.openMapWikiReader === 'function') {
                window.parent.openMapWikiReader(targetTitle, targetLang);
                return false;
              }
            } catch (err) {}
            window.parent.postMessage({
              type: 'EARTH_TIMES_WIKI_NAV',
              title: targetTitle,
              lang: targetLang
            }, '*');
          }
          return false;
        }

        var anchor = e.target.closest('a');
        if (!anchor) return;
        var href = anchor.getAttribute('href');
        if (!href) return;

        // In-page hash jumps (#...)
        if (href.startsWith('#')) {
          return;
        }

        // Wikipedia internal article links
        if (href.startsWith('/wiki/') || href.includes('.wikipedia.org/wiki/')) {
          e.preventDefault();
          e.stopPropagation();
          var parts = href.split('/wiki/');
          var targetTitle = parts.length > 1 ? decodeURIComponent(parts[1].split('#')[0]) : '';
          if (targetTitle) {
            try {
              if (window.parent && typeof window.parent.openMapWikiReader === 'function') {
                window.parent.openMapWikiReader(targetTitle, '${lang}');
                return false;
              }
            } catch (err) {}
            window.parent.postMessage({
              type: 'EARTH_TIMES_WIKI_NAV',
              title: targetTitle,
              lang: '${lang}'
            }, '*');
          }
          return false;
        }

        // For any external links, do not let them replace parent window
        e.preventDefault();
      }, true);

      // --- IN-PLACE GREEK TRANSLATION ENGINE ---
      var isTranslated = false;
      var originalTexts = new WeakMap();

      async function translateText(text) {
        if (!text || text.trim().length < 2) return text;
        try {
          var res = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=el&dt=t&q=' + encodeURIComponent(text));
          if (!res.ok) return text;
          var json = await res.json();
          if (json && json[0]) {
            return json[0].map(function(item) { return item[0]; }).join('');
          }
        } catch (err) {
          console.warn('[WikiTranslator] Error translating snippet:', err);
        }
        return text;
      }

      window.translateInPlace = async function() {
        var bannerBtn = document.getElementById('et-btn-translate-auto');
        if (isTranslated) {
          // Revert to original
          var elements = document.querySelectorAll('h1, h2, h3, h4, p, li, th, td');
          elements.forEach(function(el) {
            if (originalTexts.has(el)) {
              el.innerText = originalTexts.get(el);
            }
          });
          isTranslated = false;
          if (bannerBtn) bannerBtn.innerHTML = '🌐 Μετάφραση στα Ελληνικά';
          window.parent.postMessage({ type: 'EARTH_TIMES_TRANSLATE_STATUS', isTranslated: false }, '*');
          return;
        }

        if (bannerBtn) bannerBtn.innerHTML = '<span style="animation:spin 1s linear infinite;display:inline-block;">↻</span> Μετάφραση σε εξέλιξη...';
        window.parent.postMessage({ type: 'EARTH_TIMES_TRANSLATE_STATUS', isTranslating: true }, '*');

        var elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, p, li'));
        for (var i = 0; i < elements.length; i++) {
          var el = elements[i];
          var raw = el.innerText ? el.innerText.trim() : '';
          if (raw.length > 3 && raw.length < 2000) {
            if (!originalTexts.has(el)) {
              originalTexts.set(el, el.innerText);
            }
            var translated = await translateText(raw);
            if (translated && translated !== raw) {
              el.innerText = translated;
            }
          }
        }

        isTranslated = true;
        if (bannerBtn) bannerBtn.innerHTML = '✓ Επαναφορά στα Αγγλικά';
        window.parent.postMessage({ type: 'EARTH_TIMES_TRANSLATE_STATUS', isTranslated: true }, '*');
      };

      // Listen for parent header button clicks
      window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'EARTH_TIMES_TRANSLATE_EL') {
          window.translateInPlace();
        }
      });
    </script>
  `;

  // Inject top action banner after body tag
  let htmlWithBanner = rawHtml;
  if (htmlWithBanner.includes('<body')) {
    htmlWithBanner = htmlWithBanner.replace(/<body[^>]*>/i, `$&${topBannersHtml}`);
  } else {
    htmlWithBanner = topBannersHtml + htmlWithBanner;
  }

  // Inject inside <head> if present, or prepend
  if (htmlWithBanner.includes('<head')) {
    return htmlWithBanner.replace(/<head[^>]*>/i, `$&${baseTag}${darkStyles}${linkInterceptor}`);
  }
  return `<!DOCTYPE html><html><head>${baseTag}${darkStyles}${linkInterceptor}</head><body>${htmlWithBanner}</body></html>`;
}

/**
 * Builds the interactive English Wikipedia Search Page in dark mode
 * Allows user to view live search results, see what exists, or type new searches directly
 */

/**
 * Builds the interactive Dual Wikipedia Search Page in dark mode
 * Renders TWO editable search inputs:
 * 1. English Wikipedia (en.wikipedia.org)
 * 2. Local Language Wikipedia ([localLang].wikipedia.org, based on city/country)
 * Allows user to modify search terms and browse live results in either Wikipedia directly.
 */
export function buildWikiSearchDocumentHtml(enQueryOrParams = '', fallbackLocalQuery = '', countryId = '') {
  let enQ = '';
  let localQ = '';
  let cId = countryId;

  if (typeof enQueryOrParams === 'object' && enQueryOrParams !== null) {
    enQ = enQueryOrParams.enQuery || enQueryOrParams.query || '';
    localQ = enQueryOrParams.localQuery || '';
    cId = enQueryOrParams.countryId || cId;
  } else {
    enQ = String(enQueryOrParams || '');
    localQ = String(fallbackLocalQuery || enQ);
  }

  const localInfo = getCountryLocalWikiLang(cId);
  const localCode = localInfo.code || 'el';
  const localLabel = localInfo.label || 'Ελληνική Βικιπαίδεια';
  const localFlag = localInfo.flag || '🏛️';

  const cleanEnQ = (enQ || '').replace(/"/g, '&quot;');
  const cleanLocalQ = (localQ || '').replace(/"/g, '&quot;');

  return `<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <base href="https://en.wikipedia.org/">
  <title>Wikipedia Multi-Search - EarthTimes</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #0b0f19;
      color: #cbd5e1;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      padding: 20px 16px 80px 16px;
      max-width: 960px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .search-header {
      background: #111827;
      border: 1px solid #1f293d;
      border-radius: 18px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
    }
    .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
      border-bottom: 1px solid #1f293d;
      padding-bottom: 12px;
    }
    .wiki-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(14, 165, 233, 0.15);
      border: 1px solid rgba(14, 165, 233, 0.35);
      color: #38bdf8;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    h2 {
      color: #f8fafc;
      font-size: 17px;
      font-weight: 800;
    }
    .dual-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    @media (min-width: 640px) {
      .dual-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .field-card {
      background: rgba(15, 23, 42, 0.65);
      border-radius: 14px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .field-card-en {
      border: 1px solid rgba(56, 189, 248, 0.3);
    }
    .field-card-local {
      border: 1px solid rgba(245, 158, 11, 0.3);
    }
    .field-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
    .field-title {
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .field-domain {
      font-size: 10px;
      color: #94a3b8;
      font-family: monospace;
    }
    .search-form {
      display: flex;
      gap: 6px;
      width: 100%;
    }
    .search-input {
      flex: 1;
      background: #0b0f19;
      border: 1px solid #334155;
      color: #f8fafc;
      padding: 9px 12px;
      border-radius: 10px;
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }
    .search-input:focus {
      border-color: #38bdf8;
      box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
    }
    .search-btn {
      color: white;
      border: none;
      padding: 9px 14px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      transition: opacity 0.15s;
    }
    .btn-en {
      background: linear-gradient(135deg, #0284c7, #2563eb);
    }
    .btn-local {
      background: linear-gradient(135deg, #d97706, #ea580c);
    }
    .search-btn:hover {
      opacity: 0.9;
    }
    .tabs-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid #1f293d;
    }
    .tab-btn {
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      border: 1px solid transparent;
    }
    .tab-btn.active {
      background: #0284c7;
      color: white;
      border-color: #38bdf8;
    }
    .tab-btn.inactive {
      background: #1e293b;
      color: #94a3b8;
      border-color: #334155;
    }
    .tab-btn.inactive:hover {
      color: #f8fafc;
      border-color: #475569;
    }
    .results-count {
      font-size: 11px;
      color: #94a3b8;
      font-family: monospace;
    }
    .results-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .result-card {
      background: #111827;
      border: 1px solid #1f293d;
      border-radius: 14px;
      padding: 16px 18px;
      transition: border-color 0.2s, background 0.2s;
    }
    .result-card:hover {
      border-color: rgba(56, 189, 248, 0.45);
      background: #131d31;
    }
    .result-title {
      font-size: 16px;
      font-weight: 700;
      color: #38bdf8;
      cursor: pointer;
      margin-bottom: 6px;
      display: inline-block;
      text-decoration: none;
      background: none;
      border: none;
      text-align: left;
    }
    .result-title:hover {
      text-decoration: underline;
      color: #7dd3fc;
    }
    .result-snippet {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .result-snippet .searchmatch {
      color: #f8fafc;
      font-weight: 700;
      background: rgba(56, 189, 248, 0.15);
      padding: 1px 3px;
      border-radius: 3px;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #1f293d;
      padding-top: 8px;
      font-size: 11px;
      color: #64748b;
    }
    .action-btn {
      background: rgba(14, 165, 233, 0.15);
      border: 1px solid rgba(14, 165, 233, 0.35);
      color: #38bdf8;
      padding: 5px 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s;
    }
    .action-btn:hover {
      background: #0284c7;
      color: white;
      border-color: #0284c7;
    }
    .loading-state {
      text-align: center;
      padding: 36px 16px;
      color: #94a3b8;
      font-size: 13px;
    }
    .spinner {
      width: 28px;
      height: 28px;
      border: 3px solid rgba(56, 189, 248, 0.2);
      border-top-color: #38bdf8;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 10px auto;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="search-header">
    <div class="header-top">
      <h2>Αναζήτηση στη Wikipedia (Αγγλική & Τοπική Γλώσσα)</h2>
      <span class="wiki-badge">Dual Reader Hub</span>
    </div>

    <!-- DUAL SEARCH INPUT FIELDS -->
    <div class="dual-grid">
      
      <!-- Field 1: English Wikipedia -->
      <div class="field-card field-card-en">
        <div class="field-title-row">
          <span class="field-title" style="color: #38bdf8;">🇬🇧 English Wikipedia (en)</span>
          <span class="field-domain">en.wikipedia.org</span>
        </div>
        <form class="search-form" onsubmit="event.preventDefault(); doSearch('en');">
          <input id="enSearchInput" type="text" class="search-input" value="${cleanEnQ}" placeholder="Όρος στα Αγγλικά...">
          <button type="submit" class="search-btn btn-en">🔍 Αναζήτηση EN</button>
        </form>
      </div>

      <!-- Field 2: Local Language Wikipedia -->
      <div class="field-card field-card-local">
        <div class="field-title-row">
          <span class="field-title" style="color: #fbbf24;">${localFlag} ${localLabel} (${localCode})</span>
          <span class="field-domain">${localCode}.wikipedia.org</span>
        </div>
        <form class="search-form" onsubmit="event.preventDefault(); doSearch('${localCode}');">
          <input id="localSearchInput" type="text" class="search-input" value="${cleanLocalQ}" placeholder="Όρος στην τοπική γλώσσα / Ελληνικά...">
          <button type="submit" class="search-btn btn-local">🔍 Αναζήτηση ${localCode.toUpperCase()}</button>
        </form>
      </div>

    </div>

    <!-- Results Switching Tabs & Count -->
    <div class="tabs-row">
      <div style="display: flex; gap: 8px;">
        <button id="tabBtnEn" class="tab-btn active" onclick="switchTab('en')">
          <span>🇬🇧 Αποτελέσματα EN</span>
        </button>
        <button id="tabBtnLocal" class="tab-btn inactive" onclick="switchTab('${localCode}')">
          <span>${localFlag} Αποτελέσματα ${localCode.toUpperCase()}</span>
        </button>
      </div>
      <span id="resultsCount" class="results-count">Αναμονή αναζήτησης...</span>
    </div>
  </div>

  <div id="resultsList" class="results-list">
    <div class="loading-state">
      <div class="spinner"></div>
      <div>Εκτέλεση αναζήτησης άρθρων...</div>
    </div>
  </div>

  <script>
    var currentActiveLang = 'en';
    var localLangCode = '${localCode}';

    function switchTab(lang) {
      currentActiveLang = lang;
      var btnEn = document.getElementById('tabBtnEn');
      var btnLocal = document.getElementById('tabBtnLocal');
      if (btnEn && btnLocal) {
        if (lang === 'en') {
          btnEn.className = 'tab-btn active';
          btnLocal.className = 'tab-btn inactive';
        } else {
          btnEn.className = 'tab-btn inactive';
          btnLocal.className = 'tab-btn active';
        }
      }
      doSearch(lang);
    }

    async function doSearch(targetLang) {
      if (!targetLang) targetLang = currentActiveLang;
      currentActiveLang = targetLang;

      var btnEn = document.getElementById('tabBtnEn');
      var btnLocal = document.getElementById('tabBtnLocal');
      if (btnEn && btnLocal) {
        btnEn.className = (targetLang === 'en') ? 'tab-btn active' : 'tab-btn inactive';
        btnLocal.className = (targetLang !== 'en') ? 'tab-btn active' : 'tab-btn inactive';
      }

      var inputEl = (targetLang === 'en') ? document.getElementById('enSearchInput') : document.getElementById('localSearchInput');
      var q = (inputEl ? inputEl.value : '').trim();
      var listEl = document.getElementById('resultsList');
      var countEl = document.getElementById('resultsCount');

      if (!q) {
        listEl.innerHTML = '<div class="loading-state">Εισαγάγετε όρο αναζήτησης στο αντίστοιχο πεδίο παραπάνω.</div>';
        if (countEl) countEl.innerText = '';
        return;
      }

      listEl.innerHTML = '<div class="loading-state"><div class="spinner"></div><div>Αναζήτηση στην ' + targetLang.toUpperCase() + ' Wikipedia για "' + q + '"...</div></div>';
      if (countEl) countEl.innerText = 'Αναζήτηση...';

      try {
        var endpoint = 'https://' + targetLang + '.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURIComponent(q) + '&utf8=&format=json&origin=*&srlimit=20';
        var res = await fetch(endpoint);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        var data = await res.json();
        var results = data.query?.search || [];
        var total = data.query?.searchinfo?.totalhits || results.length;

        if (countEl) countEl.innerText = total + ' αποτελέσματα (' + targetLang.toUpperCase() + ') για "' + q + '"';

        if (results.length === 0) {
          listEl.innerHTML = '<div class="loading-state">Δεν βρέθηκαν αποτελέσματα στην ' + targetLang.toUpperCase() + ' Wikipedia. Δοκιμάστε με διαφορετικό όρο ή αλλάξτε γλώσσα αναζήτησης παραπάνω.</div>';
          return;
        }

        listEl.innerHTML = results.map(function(item) {
          var escTitle = (item.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          var encTitle = encodeURIComponent(item.title || '');
          return '<div class="result-card">' +
            '<button type="button" class="result-title action-open-article" data-title="' + encTitle + '" data-lang="' + targetLang + '">' + escTitle + '</button>' +
            '<div class="result-snippet">' + (item.snippet || '') + '...</div>' +
            '<div class="card-footer">' +
              '<span>' + (item.wordcount ? item.wordcount + ' λέξεις' : '') + '</span>' +
              '<button type="button" class="action-btn action-open-article" data-title="' + encTitle + '" data-lang="' + targetLang + '">📖 Ανάγνωση Άρθρου (' + targetLang.toUpperCase() + ') &rarr;</button>' +
            '</div>' +
          '</div>';
        }).join('');
      } catch (err) {
        console.error('Search error:', err);
        listEl.innerHTML = '<div class="loading-state" style="color: #f87171;">Σφάλμα κατά την επικοινωνία με τη Wikipedia (' + targetLang + '). Παρακαλώ δοκιμάστε ξανά.</div>';
      }
    }

    function openArticle(title, lang) {
      if (!title) return;
      var targetLang = lang || currentActiveLang || 'en';
      try {
        if (window.parent && typeof window.parent.openMapWikiReader === 'function') {
          window.parent.openMapWikiReader(title, targetLang);
          return;
        }
      } catch (err) {
        console.warn('Direct parent openMapWikiReader call failed:', err);
      }
      try {
        window.parent.postMessage({
          type: 'EARTH_TIMES_WIKI_NAV',
          title: title,
          lang: targetLang
        }, '*');
      } catch (err) {
        console.error('postMessage failed:', err);
      }
    }

    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.action-open-article');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        var raw = btn.getAttribute('data-title');
        var lang = btn.getAttribute('data-lang') || currentActiveLang;
        if (raw) {
          openArticle(decodeURIComponent(raw), lang);
        }
        return false;
      }
    }, true);

    // Initial search on load
    window.addEventListener('DOMContentLoaded', function() {
      doSearch('en');
    });
  </script>
</body>
</html>`;
}
