/**
 * Wikipedia Service Module
 * Handles retrieval of official encyclopedia summaries and direct reading links
 * with Greek priority (el.wikipedia.org) and automatic English fallback (en.wikipedia.org).
 */

const wikiCache = new Map();

export async function fetchWikiArticle(queryOrTitle, fallbackEnQuery = '') {
  if (!queryOrTitle) return null;
  const cacheKey = `${queryOrTitle}_${fallbackEnQuery}`;
  if (wikiCache.has(cacheKey)) {
    return wikiCache.get(cacheKey);
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
            description: data.description || ''
          };
        }
      }
    } catch (err) {
      console.warn(`[WikiService] Error fetching ${cleanTitle} in ${lang}:`, err);
    }
    return null;
  }

  // 1. Try Greek first (user's preferred language)
  let result = await fetchFromLang('el', queryOrTitle);

  // If title has parentheses e.g. "Σχολή Bauhaus (1919)", try stripped
  if (!result && (queryOrTitle.includes('(') || queryOrTitle.includes('–') || queryOrTitle.includes('-'))) {
    const stripped = queryOrTitle.replace(/\(.*?\)/g, '').split('–')[0].split('-')[0].trim();
    result = await fetchFromLang('el', stripped);
  }

  // 2. Fallback to English if Greek article doesn't exist
  if (!result) {
    const enQuery = fallbackEnQuery || queryOrTitle;
    result = await fetchFromLang('en', enQuery);
    if (!result && (enQuery.includes('(') || enQuery.includes('–') || enQuery.includes('-'))) {
      const strippedEn = enQuery.replace(/\(.*?\)/g, '').split('–')[0].split('-')[0].trim();
      result = await fetchFromLang('en', strippedEn);
    }
  }

  if (result) {
    wikiCache.set(cacheKey, result);
  }
  return result;
}
