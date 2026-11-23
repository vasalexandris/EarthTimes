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

  // 1. Try English first (user's preferred primary edition)
  const enQuery = fallbackEnQuery || queryOrTitle;
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

  // 1. Try requested language (default 'en')
  let res = await tryFetchHtml(lang, queryOrTitle);

  // If failed and title has parentheses or special symbols, try stripped title
  if (!res) {
    const stripped = cleanWikiTitle(queryOrTitle);
    if (stripped && stripped !== queryOrTitle) {
      res = await tryFetchHtml(lang, stripped);
    }
  }

  // 2. If requested lang was 'en' and fallbackQuery provided, try fallback in English
  if (!res && lang === 'en' && fallbackQuery && fallbackQuery !== queryOrTitle) {
    res = await tryFetchHtml('en', fallbackQuery);
    if (!res) {
      const strippedFb = cleanWikiTitle(fallbackQuery);
      if (strippedFb && strippedFb !== fallbackQuery) {
        res = await tryFetchHtml('en', strippedFb);
      }
    }
  }

  // 3. OpenSearch API fallback to resolve closest titles in requested language
  if (!res) {
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

    res = await tryOpenSearch(lang, queryOrTitle);
    if (!res && lang === 'en' && fallbackQuery) {
      res = await tryOpenSearch('en', fallbackQuery);
    }
  }

  // 4. If requested was 'en' and still not found, try Greek as secondary fallback
  if (!res && lang === 'en') {
    const greekSearchTitle = fallbackQuery || queryOrTitle;
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
        <button onclick="try { if (window.parent && typeof window.parent.openMapWikiReader === 'function') { window.parent.openMapWikiReader('${alternateTitle.replace(/'/g, "\\'")}', 'el'); return; } } catch(e){}; window.parent.postMessage({ type: 'EARTH_TIMES_WIKI_NAV', title: '${alternateTitle.replace(/'/g, "\\'")}', lang: 'el' }, '*')" style="background: #0284c7; hover: background: #0369a1; color: white; border: none; padding: 7px 16px; border-radius: 9px; font-weight: 700; cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; transition: background 0.2s;">
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
        <button onclick="try { if (window.parent && typeof window.parent.openMapWikiReader === 'function') { window.parent.openMapWikiReader('${alternateTitle.replace(/'/g, "\\'")}', 'en'); return; } } catch(e){}; window.parent.postMessage({ type: 'EARTH_TIMES_WIKI_NAV', title: '${alternateTitle.replace(/'/g, "\\'")}', lang: 'en' }, '*')" style="background: #0284c7; color: white; border: none; padding: 7px 16px; border-radius: 9px; font-weight: 700; cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;">
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
export function buildWikiSearchDocumentHtml(initialQuery = '') {
  const cleanQ = (initialQuery || '').replace(/"/g, '&quot;');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <base href="https://en.wikipedia.org/">
  <title>Wikipedia Search - EarthTimes</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #0b0f19;
      color: #cbd5e1;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      padding: 24px 20px 80px 20px;
      max-width: 960px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .search-header {
      background: #111827;
      border: 1px solid #1f293d;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
    }
    .header-top {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
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
      padding: 4px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    h2 {
      color: #f8fafc;
      font-size: 20px;
      font-weight: 800;
    }
    .search-form {
      display: flex;
      gap: 10px;
      width: 100%;
    }
    .search-input-wrap {
      flex: 1;
      position: relative;
    }
    .search-input {
      width: 100%;
      background: #0b0f19;
      border: 1px solid #334155;
      color: #f8fafc;
      padding: 12px 16px 12px 42px;
      border-radius: 14px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-input:focus {
      border-color: #38bdf8;
      box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
    }
    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #64748b;
      font-size: 15px;
    }
    .search-btn {
      background: linear-gradient(135deg, #0284c7, #2563eb);
      color: white;
      border: none;
      padding: 12px 22px;
      border-radius: 14px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: transform 0.15s, opacity 0.15s;
      white-space: nowrap;
    }
    .search-btn:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }
    .results-info {
      font-size: 12px;
      color: #94a3b8;
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .results-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .result-card {
      background: #111827;
      border: 1px solid #1f293d;
      border-radius: 16px;
      padding: 18px 20px;
      transition: border-color 0.2s, transform 0.15s, background 0.2s;
    }
    .result-card:hover {
      border-color: rgba(56, 189, 248, 0.45);
      background: #131d31;
      transform: translateY(-1px);
    }
    .result-title {
      font-size: 17px;
      font-weight: 700;
      color: #38bdf8;
      cursor: pointer;
      margin-bottom: 8px;
      display: inline-block;
      text-decoration: none;
      background: none;
      border: none;
      padding: 0;
      font-family: inherit;
      text-align: left;
    }
    .result-title:hover {
      color: #7dd3fc;
      text-decoration: underline;
    }
    .result-snippet {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    .result-snippet .searchmatch {
      color: #f59e0b;
      font-weight: 700;
      background: rgba(245, 158, 11, 0.12);
      padding: 1px 3px;
      border-radius: 4px;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #1e293b;
      padding-top: 12px;
      font-size: 11px;
      color: #64748b;
    }
    .action-btn {
      background: #1e293b;
      color: #38bdf8;
      border: 1px solid #334155;
      padding: 6px 14px;
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
      padding: 40px 20px;
      color: #94a3b8;
      font-size: 14px;
    }
    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid rgba(56, 189, 248, 0.2);
      border-top-color: #38bdf8;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 12px auto;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="search-header">
    <div class="header-top">
      <span class="wiki-badge">Wikipedia Search (EN)</span>
      <h2>Αναζήτηση στην Αγγλική Wikipedia</h2>
    </div>
    <form class="search-form" onsubmit="event.preventDefault(); doSearch();">
      <div class="search-input-wrap">
        <span class="search-icon">🔍</span>
        <input id="searchInput" type="text" class="search-input" value="${cleanQ}" placeholder="Αναζητήστε οποιοδήποτε θέμα, πόλη, ιστορικό γεγονός...">
      </div>
      <button type="submit" class="search-btn">Αναζήτηση</button>
    </form>
    <div class="results-info">
      <span id="resultsCount">Αναζήτηση άρθρων...</span>
      <span>Σε μαύρο φόντο (Dark Theme)</span>
    </div>
  </div>

  <div id="resultsList" class="results-list">
    <div class="loading-state">
      <div class="spinner"></div>
      <div>Φόρτωση αποτελεσμάτων από την English Wikipedia...</div>
    </div>
  </div>

  <script>
    async function doSearch() {
      const q = document.getElementById('searchInput').value.trim();
      const listEl = document.getElementById('resultsList');
      const countEl = document.getElementById('resultsCount');
      if (!q) {
        listEl.innerHTML = '<div class="loading-state">Εισαγάγετε έναν όρο αναζήτησης παραπάνω.</div>';
        countEl.innerText = '';
        return;
      }
      listEl.innerHTML = '<div class="loading-state"><div class="spinner"></div><div>Αναζήτηση στην Wikipedia για "' + q + '"...</div></div>';
      countEl.innerText = 'Αναζήτηση...';

      try {
        const endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURIComponent(q) + '&utf8=&format=json&origin=*&srlimit=20';
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        const results = data.query?.search || [];
        const total = data.query?.searchinfo?.totalhits || results.length;

        countEl.innerText = total + ' αποτελέσματα για "' + q + '"';

        if (results.length === 0) {
          listEl.innerHTML = '<div class="loading-state">Δεν βρέθηκαν αποτελέσματα για "' + q + '". Δοκιμάστε με άλλη λέξη-κλειδί.</div>';
          return;
        }

        listEl.innerHTML = results.map(function(item) {
          return '<div class="result-card">' +
            '<button type="button" class="result-title" onclick="openArticle(' + JSON.stringify(item.title) + ')">' + item.title + '</button>' +
            '<div class="result-snippet">' + item.snippet + '...</div>' +
            '<div class="card-footer">' +
              '<span>' + (item.wordcount ? item.wordcount + ' λέξεις' : '') + '</span>' +
              '<button type="button" class="action-btn" onclick="openArticle(' + JSON.stringify(item.title) + ')">📖 Ανάγνωση Άρθρου (English) &rarr;</button>' +
            '</div>' +
          '</div>';
        }).join('');
      } catch (err) {
        console.error('Search error:', err);
        listEl.innerHTML = '<div class="loading-state" style="color: #f87171;">Σφάλμα κατά την επικοινωνία με την Wikipedia. Παρακαλώ δοκιμάστε ξανά.</div>';
      }
    }

    function openArticle(title) {
      if (!title) return;
      try {
        if (window.parent && typeof window.parent.openMapWikiReader === 'function') {
          window.parent.openMapWikiReader(title, 'en');
          return;
        }
      } catch (err) {
        console.warn('Direct parent openMapWikiReader call failed:', err);
      }
      try {
        window.parent.postMessage({
          type: 'EARTH_TIMES_WIKI_NAV',
          title: title,
          lang: 'en'
        }, '*');
      } catch (err) {
        console.error('postMessage failed:', err);
      }
    }

    // Intercept clicks on links inside snippets to prevent iframe reloading EarthTimes
    document.addEventListener('click', function(e) {
      var anchor = e.target.closest('a');
      if (anchor) {
        e.preventDefault();
        e.stopPropagation();
        var href = anchor.getAttribute('href') || '';
        if (href.includes('/wiki/')) {
          var parts = href.split('/wiki/');
          var targetTitle = parts.length > 1 ? decodeURIComponent(parts[1].split('#')[0]) : '';
          if (targetTitle) {
            openArticle(targetTitle);
          }
        }
        return false;
      }
    }, true);

    // Auto-search on load
    window.addEventListener('DOMContentLoaded', function() {
      doSearch();
    });
  </script>
</body>
</html>`;
}
