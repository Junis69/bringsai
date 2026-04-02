import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getHrefLangs } from "../../lib/routes";

const seoData = {
    de: {
        title: "BringsAI – KI-Automatisierung für Unternehmen",
        description: "BringsAI automatisiert wiederkehrende Aufgaben mit KI. Effizientere Abläufe, weniger Stress, mehr Zeit für das Wesentliche. DSGVO-konform."
    },
    en: {
        title: "BringsAI – AI Automation for Businesses",
        description: "BringsAI automates recurring tasks with AI. More efficient workflows, less stress, more time for what matters. GDPR compliant."
    }
};

/**
 * Global component that injects canonical URLs, hreflang tags,
 * and language-specific title/description on every route change.
 */
// Check if current environment is a preview/staging deployment
function isPreviewEnvironment() {
    if (typeof window === 'undefined') return false;
    const hostname = window.location.hostname;
    // Production domain
    if (hostname === 'bringsai.io' || hostname === 'www.bringsai.io') return false;
    // Localhost for development
    if (hostname === 'localhost' || hostname === '127.0.0.1') return false;
    // Everything else is preview/staging
    return true;
}

export function SEOHead() {
    const location = useLocation();

    useEffect(() => {
        // In case path has a trailing slash (e.g., from external link)
        let path = location.pathname;
        if (path.length > 1 && path.endsWith("/")) {
            path = path.slice(0, -1);
        }

        const isEnglish = path === '/en' || path.startsWith('/en/');
        const lang = isEnglish ? 'en' : 'de';
        const isPreview = isPreviewEnvironment();
        // Always use production URL for canonicals/OG - never preview domains
        const baseUrl = "https://bringsai.io";
        const dynamicCanonical = `${baseUrl}${path === "/" ? "" : path}`;

        // 1. Canonical injection
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", dynamicCanonical);

        // 2. hreflang injection
        const hrefLangs = getHrefLangs(path, baseUrl);

        Object.entries(hrefLangs).forEach(([hLangKey, url]) => {
            const hLang = hLangKey === "x_default" ? "x-default" : hLangKey;
            let link = document.querySelector(`link[rel="alternate"][hreflang="${hLang}"]`);
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "alternate");
                link.setAttribute("hreflang", hLang);
                document.head.appendChild(link);
            }
            link.setAttribute("href", url);
        });

        // 3. Dynamic title and meta description based on language
        document.title = seoData[lang].title;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", seoData[lang].description);

        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", seoData[lang].title);

        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", seoData[lang].description);

        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", dynamicCanonical);

        let ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) ogLocale.setAttribute("content", isEnglish ? "en_US" : "de_DE");

        let twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute("content", seoData[lang].title);

        let twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute("content", seoData[lang].description);

        let htmlLang = document.documentElement;
        htmlLang.setAttribute("lang", lang);

        // 4. noindex for sub-pages that shouldn't appear in search results
        //    AND noindex for all preview/staging environments
        const noindexPaths = ['/leistungen', '/en/services'];
        let robotsMeta = document.querySelector('meta[name="robots"]');
        if (robotsMeta) {
            if (isPreview) {
                // Preview/staging: always noindex to prevent Google from indexing
                robotsMeta.setAttribute("content", "noindex, nofollow");
            } else if (noindexPaths.includes(path)) {
                robotsMeta.setAttribute("content", "noindex, nofollow");
            } else {
                robotsMeta.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
            }
        }

    }, [location.pathname]);

    return null;
}
