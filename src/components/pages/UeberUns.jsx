import { Navbar } from "../ui/Navbar"
import { Footer } from "../ui/Footer"
import { Mail, Phone, Zap, Link2, Shield, TrendingUp, ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/i18n"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.15 })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

const coreValues = {
    de: [
        {
            icon: Zap,
            title: "Prozesse statt Tools",
            desc: "Komplette Abläufe automatisieren."
        },
        {
            icon: Link2,
            title: "Individuelle Lösungen",
            desc: "Exakt auf Sie zugeschnitten."
        },
        {
            icon: Shield,
            title: "DSGVO-konform",
            desc: "Server in Deutschland/EU."
        },
        {
            icon: TrendingUp,
            title: "Skalierbar",
            desc: "Wächst mit Ihrem Unternehmen."
        }
    ],
    en: [
        {
            icon: Zap,
            title: "Processes, not Tools",
            desc: "Automate complete workflows."
        },
        {
            icon: Link2,
            title: "Custom Solutions",
            desc: "Tailored to your needs."
        },
        {
            icon: Shield,
            title: "GDPR Compliant",
            desc: "Servers in Germany/EU."
        },
        {
            icon: TrendingUp,
            title: "Scalable",
            desc: "Grows with your business."
        }
    ]
}

const pageContent = {
    de: {
        seo_title: "Über uns – Team & Vision | BringsAI",
        seo_desc: "Lernen Sie das Team hinter BringsAI kennen. Wir helfen Unternehmen, wiederkehrende Aufgaben zu automatisieren.",
        badge: "Über uns",
        headline: "Wir bauen Systeme,",
        headline2: "die für Sie arbeiten.",
        intro: "Keine Einzellösungen. Vollständige Automatisierungssysteme für weniger manuelle Arbeit und klare Abläufe.",
        section_what: "Was uns unterscheidet",
        section_team: "Ihre Ansprechpartner",
        junis_role: "Geschäftsführer",
        junis_quote: "Klare Abläufe, saubere Verbindungen.",
        simon_role: "Head of Sales",
        simon_quote: "In Minuten wissen Sie, was möglich ist.",
        cta_title: "Bereit für weniger manuelle Arbeit?",
        cta_subtitle: "Finden Sie heraus, wie viel Zeit Sie sparen können.",
        cta_button: "Kostenloses Erstgespräch"
    },
    en: {
        seo_title: "About Us – Team & Vision | BringsAI",
        seo_desc: "Meet the team behind BringsAI. We help businesses automate recurring tasks.",
        badge: "About us",
        headline: "We build systems",
        headline2: "that work for you.",
        intro: "No single solutions. Complete automation systems for less manual work and clear processes.",
        section_what: "What makes us different",
        section_team: "Your Contacts",
        junis_role: "CEO",
        junis_quote: "Clear processes, clean integrations.",
        simon_role: "Head of Sales",
        simon_quote: "In minutes, you'll know what's possible.",
        cta_title: "Ready for less manual work?",
        cta_subtitle: "Find out how much time you can save.",
        cta_button: "Free Consultation"
    }
}

export function UeberUns() {
    const { language } = useLanguage()
    const t = pageContent[language] || pageContent.de
    const values = coreValues[language] || coreValues.de
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"

    useEffect(() => {
        document.title = t.seo_title
        let metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) {
            metaDesc.setAttribute("content", t.seo_desc)
        }
    }, [t.seo_title, t.seo_desc])

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--background)] relative overflow-hidden" data-testid="about-page">

                {/* Hero Section */}
                <section className="relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-8">
                    <div className="mx-auto max-w-4xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.06] py-1.5 px-4 text-xs font-medium text-[var(--accent)] mb-8">
                                {t.badge}
                            </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.12}>
                            <h1 
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-[1.1] mb-4"
                                style={{ letterSpacing: '-0.02em' }}
                                data-testid="about-headline"
                            >
                                {t.headline}
                                <br />
                                <span className="text-[var(--accent)]">
                                    {t.headline2}
                                </span>
                            </h1>
                        </FadeIn>
                        
                        <FadeIn delay={0.24}>
                            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                                {t.intro}
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Core Values Cards */}
                <section className="relative z-10 py-20 sm:py-28 px-6 sm:px-8">
                    <div className="mx-auto max-w-5xl">
                        <FadeIn>
                            <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-12 text-center">
                                {t.section_what}
                            </p>
                        </FadeIn>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                            {values.map((value, i) => (
                                <FadeIn key={i} delay={0.1 + i * 0.08}>
                                    <div 
                                        className="group relative rounded-2xl bg-[#0c0c14] border border-white/[0.06] hover:border-[var(--accent)]/20 transition-all duration-500 overflow-hidden flex flex-col"
                                        style={{ minHeight: '200px' }}
                                        data-testid={`value-card-${i}`}
                                    >
                                        {/* Top accent line on hover */}
                                        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/0 group-hover:via-[var(--accent)]/25 to-transparent transition-all duration-500" />
                                        
                                        <div className="p-6 sm:p-7 flex flex-col flex-1">
                                            <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center mb-5 group-hover:bg-[var(--accent)]/[0.12] transition-all duration-500">
                                                <value.icon className="w-5 h-5 text-[var(--accent)]" />
                                            </div>
                                            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">{value.title}</h3>
                                            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="relative z-10 py-20 sm:py-28 px-6 sm:px-8">
                    <div className="mx-auto max-w-4xl">
                        <FadeIn>
                            <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-12 text-center">
                                {t.section_team}
                            </p>
                        </FadeIn>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Junis */}
                            <FadeIn delay={0.1}>
                                <div 
                                    className="group relative rounded-2xl bg-[#0c0c14] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden flex flex-col"
                                    style={{ minHeight: '280px' }}
                                    data-testid="team-card-junis"
                                >
                                    {/* Subtle top accent */}
                                    <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/0 group-hover:via-[var(--accent)]/20 to-transparent transition-all duration-500" />
                                    
                                    <div className="p-7 sm:p-9 flex flex-col flex-1">
                                        <div className="mb-6">
                                            <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-1">Junis Ismail</h3>
                                            <p className="text-[var(--accent)] font-medium text-sm">{t.junis_role}</p>
                                        </div>
                                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-auto italic">
                                            "{t.junis_quote}"
                                        </p>
                                        <div className="flex flex-col gap-3 mt-7 pt-6 border-t border-white/[0.05]">
                                            <a href="mailto:info@bringsai.de" className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300">
                                                <Mail className="h-4 w-4 flex-shrink-0" />
                                                <span>info@bringsai.de</span>
                                            </a>
                                            <a href="tel:+4917672986127" className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300">
                                                <Phone className="h-4 w-4 flex-shrink-0" />
                                                <span>+49 176 72986127</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Simon */}
                            <FadeIn delay={0.22}>
                                <div 
                                    className="group relative rounded-2xl bg-[#0c0c14] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden flex flex-col"
                                    style={{ minHeight: '280px' }}
                                    data-testid="team-card-simon"
                                >
                                    {/* Subtle top accent */}
                                    <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/0 group-hover:via-[var(--accent)]/20 to-transparent transition-all duration-500" />
                                    
                                    <div className="p-7 sm:p-9 flex flex-col flex-1">
                                        <div className="mb-6">
                                            <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-1">Simon Poscher</h3>
                                            <p className="text-[var(--accent)] font-medium text-sm">{t.simon_role}</p>
                                        </div>
                                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-auto italic">
                                            "{t.simon_quote}"
                                        </p>
                                        <div className="flex flex-col gap-3 mt-7 pt-6 border-t border-white/[0.05]">
                                            <a href="mailto:simonposcher139@gmail.com" className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300">
                                                <Mail className="h-4 w-4 flex-shrink-0" />
                                                <span className="truncate">simonposcher139@gmail.com</span>
                                            </a>
                                            <a href="tel:+436603195452" className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300">
                                                <Phone className="h-4 w-4 flex-shrink-0" />
                                                <span>+43 660 3195452</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative z-10 py-20 sm:py-28 px-6 sm:px-8 pb-28 sm:pb-36">
                    <FadeIn>
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="relative p-10 sm:p-14 md:p-18 rounded-3xl bg-[#0c0c14] border border-[var(--accent)]/20 overflow-hidden" data-testid="about-cta">
                                {/* Top accent line */}
                                <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
                                
                                <div className="relative z-10">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-5">
                                        {t.cta_title}
                                    </h2>
                                    <p className="text-[var(--muted-foreground)] mb-10 text-sm sm:text-base max-w-lg mx-auto">
                                        {t.cta_subtitle}
                                    </p>
                                    <a
                                        href={calUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full transition-all duration-300 group"
                                        data-testid="about-cta-button"
                                    >
                                        <span>{t.cta_button}</span>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </>
    )
}
