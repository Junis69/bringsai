import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getHrefLangs } from "../../lib/routes";

const seoData = {
    de: {
        title: "BringsAI - Mehr Effizienz und weniger Stress im Unternehmen durch KI | Brings AI",
        description: "Wir sind BringsAI – wir unterstützen Unternehmen dabei, wiederkehrende Aufgaben mit KI zu automatisieren. So entstehen effizientere Abläufe, weniger Stress im Alltag und mehr Zeit für das Wesentliche."
    },
    en: {
        title: "BringsAI - More Efficiency and Less Stress in Business Through AI | Brings AI",
        description: "We are BringsAI – we help businesses automate recurring tasks with AI. The result: more efficient workflows, less stress in daily operations, and more time for what matters."
    }
};

/**
 * Global component that injects canonical URLs, hreflang tags,
 * and language-specific title/description on every route change.
 */
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
        const noindexPaths = ['/leistungen', '/en/services'];
        let robotsMeta = document.querySelector('meta[name="robots"]');
        if (robotsMeta) {
            if (noindexPaths.includes(path)) {
                robotsMeta.setAttribute("content", "noindex, nofollow");
            } else {
                robotsMeta.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
            }
        }

    }, [location.pathname]);

    return null;
}
