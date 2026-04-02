import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ChevronRight, Plus, Minus } from "lucide-react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useLanguage } from "../../lib/i18n"
import { Reveal } from "../animations/Reveal"

const layoutT = {
    de: {
        home: "Startseite",
        fallbackTitle: "BringsAI - Mehr Effizienz und weniger Stress im Unternehmen durch KI | Brings AI",
        ctaTitle: "Bereit für den nächsten Schritt?",
        ctaSubtitle: "Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie wir Ihre Prozesse optimieren können.",
        ctaBtn: "Kostenloses Erstgespräch"
    },
    en: {
        home: "Home",
        fallbackTitle: "BringsAI – AI Automation for Businesses in Germany",
        ctaTitle: "Ready for the next step?",
        ctaSubtitle: "In a free consultation, let's find out how we can optimize your processes together.",
        ctaBtn: "Free Consultation"
    }
}

/**
 * Shared layout wrapper for all subpages.
 * Handles: scroll-to-top, SEO meta injection, Navbar, Footer, breadcrumbs.
 */
export function PageLayout({ title, description, canonicalPath, h1, breadcrumbs = [], schema = null, children, maxWidth = "max-w-4xl" }) {
    const location = useLocation()
    const navigate = useNavigate()
    const { language } = useLanguage()
    const t = layoutT[language] || layoutT.de

    const handleBack = (e) => {
        e.preventDefault()
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate(language === 'en' ? '/en' : '/')
        }
    }

    useEffect(() => {
        const prevTitle = document.title
        document.title = title

        let metaDesc = document.querySelector('meta[name="description"]')
        if (!metaDesc) {
            metaDesc = document.createElement("meta")
            metaDesc.setAttribute("name", "description")
            document.head.appendChild(metaDesc)
        }
        const prevDesc = metaDesc.getAttribute("content")
        metaDesc.setAttribute("content", description)

        let robots = document.querySelector('meta[name="robots"]')
        if (robots) {
            robots.setAttribute("content", "index, follow")
        }

        let schemaScriptId = `schema-${canonicalPath.replace(/\//g, "-")}`
        let schemaScript = document.getElementById(schemaScriptId)

        if (schema) {
            if (!schemaScript) {
                schemaScript = document.createElement("script")
                schemaScript.setAttribute("type", "application/ld+json")
                schemaScript.setAttribute("id", schemaScriptId)
                document.head.appendChild(schemaScript)
            }
            let schemaArr = Array.isArray(schema) ? schema : [schema]

            if (language === 'en') {
                schemaArr = schemaArr.filter(s => s['@type'] !== 'FAQPage')
            }

            schemaScript.textContent = JSON.stringify(schemaArr.length === 1 ? schemaArr[0] : schemaArr)
        }

        return () => {
            document.title = prevTitle || t.fallbackTitle
            if (metaDesc) metaDesc.setAttribute("content", prevDesc || "")
            if (schemaScript) schemaScript.remove()
        }
    }, [title, description, canonicalPath, location.pathname, schema, t.fallbackTitle, language])

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[var(--background)] pt-32 pb-24 px-4 sm:px-6 relative z-10">
                <div className={`mx-auto ${maxWidth}`}>
                    {/* Breadcrumbs */}
                    {breadcrumbs.length > 0 && (
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] flex-wrap">
                                <li>
                                    <a href={language === 'en' ? '/en' : '/'} onClick={handleBack} className="hover:text-[var(--foreground)] transition-colors">
                                        {t.home}
                                    </a>
                                </li>
                                {breadcrumbs.map((crumb, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <ChevronRight className="h-3 w-3 text-[var(--border)]" />
                                        {crumb.href ? (
                                            <Link to={crumb.href} className="hover:text-[var(--foreground)] transition-colors">
                                                {crumb.label}
                                            </Link>
                                        ) : (
                                            <span className="text-[var(--foreground)]">{crumb.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">{h1}</h1>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

/**
 * Reusable section component for consistent spacing & styling on subpages
 */
export function PageSection({ title, children, className = "" }) {
    return (
        <section className={`mb-16 ${className}`}>
            {title && (
                <Reveal direction="up">
                    <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">{title}</h2>
                </Reveal>
            )}
            {children}
        </section>
    )
}

/**
 * FAQ accordion for subpages
 */
export function PageFAQ({ items }) {
    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <FAQAccordion key={i} question={item.q} answer={item.a} />
            ))}
        </div>
    )
}

function FAQAccordion({ question, answer }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-bold text-[var(--foreground)] pr-4">{question}</span>
                <div className="ml-4 shrink-0 rounded-full bg-[var(--muted)] p-2 text-[var(--foreground)]">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
            </button>
            {open && (
                <div className="px-6 pb-6 pt-0 text-[var(--muted-foreground)] leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    )
}

/**
 * CTA block for subpages
 */
export function PageCTA({ title, subtitle, buttonText }) {
    const { language } = useLanguage()
    const t = layoutT[language] || layoutT.de
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"

    const displayTitle = title || t.ctaTitle
    const displaySubtitle = subtitle || t.ctaSubtitle
    const displayButtonText = buttonText || t.ctaBtn

    return (
        <Reveal direction="up" delay={0.1}>
            <section className="mt-16 rounded-2xl border border-[var(--border)] bg-white p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow duration-500 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">{displayTitle}</h2>
                    <p className="text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">{displaySubtitle}</p>
                    <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-[var(--foreground)] hover:bg-[var(--foreground)]/90 border-0 rounded-full transition-all duration-300 group"
                    >
                        <span className="flex items-center gap-2">
                            {displayButtonText}
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                    </a>
                </div>
            </section>
        </Reveal>
    )
}
