/**
 * Wikipedia Service Module
 * Handles retrieval of official encyclopedia summaries and full standalone articles
 * with Greek priority (el.wikipedia.org) and automatic English fallback (en.wikipedia.org).
 * Powers the embedded In-Map Wikipedia Reader without external tabs.
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
 * Fetches Wikipedia article summary (for cards and previews)
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
            langLabel: lang === 'el' ? 'Ελληνική Βικιπαίδεια' : 'English Wikipedia',
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

  // 1. Try Greek first (user's preferred language)
  let result = await fetchFromLang('el', queryOrTitle);

  // If title has parentheses e.g. "Σχολή Bauhaus (1919)", try stripped
  if (!result && (queryOrTitle.includes('(') || queryOrTitle.includes('–') || queryOrTitle.includes('-'))) {
    result = await fetchFromLang('el', cleanWikiTitle(queryOrTitle));
  }

  // 2. Fallback to English if Greek article doesn't exist
  if (!result) {
    const enQuery = fallbackEnQuery || queryOrTitle;
    result = await fetchFromLang('en', enQuery);
    if (!result && (enQuery.includes('(') || enQuery.includes('–') || enQuery.includes('-'))) {
      result = await fetchFromLang('en', cleanWikiTitle(enQuery));
    }
  }

  if (result) {
    wikiSummaryCache.set(cacheKey, result);
  }
  return result;
}

/**
 * Fetches full article HTML for the in-map embedded reader
 */
export async function fetchWikiArticleHtml(queryOrTitle, lang = 'el', fallbackEnQuery = '') {
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
          const processed = buildReaderDocument(rawHtml, targetLang, cleanTitle);
          const out = {
            lang: targetLang,
            langLabel: targetLang === 'el' ? 'Ελληνικά (Βικιπαίδεια)' : 'English (Wikipedia)',
            title: title.replace(/_/g, ' '),
            rawTitle: cleanTitle,
            docHtml: processed
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

  // 1. Try requested language with exact title
  let res = await tryFetchHtml(lang, queryOrTitle);

  // If failed and title has parentheses or special symbols, try stripped title
  if (!res) {
    const stripped = cleanWikiTitle(queryOrTitle);
    if (stripped && stripped !== queryOrTitle) {
      res = await tryFetchHtml(lang, stripped);
    }
  }

  // 2. If requested lang was 'el' and failed, fallback to English
  if (!res && lang === 'el') {
    const enTitle = fallbackEnQuery || queryOrTitle;
    res = await tryFetchHtml('en', enTitle);
    if (!res) {
      const strippedEn = cleanWikiTitle(enTitle);
      if (strippedEn && strippedEn !== enTitle) {
        res = await tryFetchHtml('en', strippedEn);
      }
    }
  }

  return res;
}

/**
 * Injects base href, dark mode styling, and link interception script into Wikipedia HTML
 */
function buildReaderDocument(rawHtml, lang, currentTitle) {
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
        // Process in sequential chunks
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
        if (bannerBtn) bannerBtn.innerHTML = '✓ Μεταφράστηκε (Επαναφορά)';
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

  let englishBanner = '';
  if (lang === 'en') {
    englishBanner = `
      <div id="et-translate-banner" style="background:rgba(14,165,233,0.12);border:1px solid rgba(56,189,248,0.3);border-radius:12px;padding:12px 16px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:22px;">🇬🇧</span>
          <div>
            <strong style="color:#f8fafc;font-size:13px;display:block;">Αγγλικό Άρθρο Wikipedia (English)</strong>
            <span style="color:#94a3b8;font-size:12px;">Δεν βρέθηκε αυτούσιο ελληνικό λήμμα. Διαβάστε την αυτόματη μετάφραση με 1 κλικ!</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button id="et-btn-translate-auto" onclick="window.translateInPlace()" style="background:#0284c7;color:#fff;border:none;padding:7px 14px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;box-shadow:0 2px 8px rgba(2,132,199,0.4);">
            🌐 Μετάφραση στα Ελληνικά
          </button>
          <a href="https://translate.google.com/translate?sl=en&tl=el&u=https://en.wikipedia.org/wiki/${encodeURIComponent(currentTitle)}" target="_blank" rel="noopener noreferrer" style="background:#1e293b;color:#38bdf8;border:1px solid #334155;padding:7px 12px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none;display:flex;align-items:center;gap:6px;">
            Google Translate ↗
          </a>
        </div>
      </div>
    `;
  }

  // Inject inside <head> if present, or prepend
  let doc = rawHtml;
  if (englishBanner && doc.includes('<body')) {
    doc = doc.replace(/<body[^>]*>/i, `$&${englishBanner}`);
  } else if (englishBanner) {
    doc = englishBanner + doc;
  }

  if (doc.includes('<head')) {
    return doc.replace(/<head[^>]*>/i, `$&${baseTag}${darkStyles}${linkInterceptor}`);
  }
  return `<!DOCTYPE html><html><head>${baseTag}${darkStyles}${linkInterceptor}</head><body>${englishBanner}${doc}</body></html>`;
}
