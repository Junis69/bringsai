export const routeMap = {
    home: { de: '/', en: '/en' },
    leistungen: { de: '/leistungen', en: '/en/services' },
    zusammenarbeit: { de: '/zusammenarbeit', en: '/en/process' },
    automationen: { de: '/automationen', en: '/en/automations' },
    ueberUns: { de: '/ueber-uns', en: '/en/about' },
    faq: { de: '/faq', en: '/en/faq' },
    impressum: { de: '/impressum', en: '/en/imprint' },
    datenschutz: { de: '/datenschutz', en: '/en/privacy' },
    agb: { de: '/agb', en: '/en/terms' },
    caseStudies: { de: '/fallstudien', en: '/en/case-studies' }
};

/**
 * Gets the route for the given key in the target language.
 * @param {string} currentPath - The current pathname
 * @param {string} targetLang - The target language ('de' or 'en')
 * @returns {string} - The route
 */
export function getTranslatedRoute(currentPath, targetLang = 'de') {
    let normalizedPath = currentPath;
    if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
        normalizedPath = normalizedPath.slice(0, -1);
    }

    for (const key in routeMap) {
        if (routeMap[key].de === normalizedPath || routeMap[key].en === normalizedPath) {
            return routeMap[key][targetLang] || routeMap[key].de;
        }
    }

    return targetLang === 'en' ? '/en' : '/';
}

/**
 * Gets the canonical URL for a given path
 * @param {string} currentPath - The current React Router pathname
 * @param {string} baseUrl - e.g., 'https://bringsai.io'
 * @returns {Object} - { de: '...', en: '...', x_default: '...' }
 */
export function getHrefLangs(currentPath, baseUrl = 'https://bringsai.io') {
    return {
        de: `${baseUrl}${getTranslatedRoute(currentPath, 'de')}`,
        en: `${baseUrl}${getTranslatedRoute(currentPath, 'en')}`,
        x_default: `${baseUrl}${getTranslatedRoute(currentPath, 'en')}`
    };
}
