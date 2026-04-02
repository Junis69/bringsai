import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

export function Hero() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"

    return (
        <section
            className="relative flex min-h-[100svh] md:min-h-[100svh] flex-col items-center justify-between overflow-hidden px-4 sm:px-8 md:px-12 pt-[120px] sm:pt-[100px] pb-6 text-center hero-section-mobile"
        >
            {/* Center glow — Desktop: subtle, Mobile: intensified */}
            <div
                className="absolute inset-0 pointer-events-none hero-glow-center"
                style={{
                    background: 'radial-gradient(ellipse 55% 38% at 50% 38%, rgba(59,130,246,0.15) 0%, transparent 72%)',
                }}
            />
            {/* Mobile-only subtle glow boost - slightly stronger than desktop */}
            <div
                className="absolute inset-0 pointer-events-none md:hidden"
                style={{
                    background: 'radial-gradient(ellipse 60% 42% at 50% 36%, rgba(59,130,246,0.08) 0%, transparent 70%)',
                }}
            />
            {/* Bottom-left corner glow — subtle depth */}
            <div
                className="absolute inset-0 pointer-events-none hero-glow-bl"
                style={{
                    background: 'radial-gradient(ellipse 50% 40% at 4% 96%, rgba(59,130,246,0.082) 0%, transparent 70%)',
                }}
            />
            {/* Bottom-right corner glow — subtle depth, consistent blue */}
            <div
                className="absolute inset-0 pointer-events-none hero-glow-br"
                style={{
                    background: 'radial-gradient(ellipse 50% 40% at 96% 96%, rgba(59,130,246,0.09) 0%, transparent 70%)',
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl w-full flex-1 flex flex-col items-center justify-center">
                {/* DSGVO Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--muted)]/50 py-2 px-5 text-xs sm:text-sm font-medium text-[var(--foreground)]/80 backdrop-blur-sm" data-testid="dsgvo-badge">
                        <svg className="h-3.5 w-3.5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span className="tracking-tight">100% DSGVO-konform</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-7 text-center"
                >
                    <h1
                        className="flex flex-col items-center gap-1"
                        style={{ fontWeight: 800, letterSpacing: '-0.03em' }}
                    >
                        <span className="block text-[var(--foreground)]/75 text-3xl sm:text-4xl md:text-5xl leading-[1.15]">
                            Mehr Kunden. Weniger manuelle Arbeit.
                        </span>
                        <span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
                            style={{ backgroundSize: '200% auto' }}
                        >
                            Abläufe, die von selbst laufen
                        </span>
                    </h1>
                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10"
                >
                    <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-[620px] text-center mx-auto">
                        Mit BringsAI an Ihrer Seite läuft alles strukturiert im Hintergrund – Ihr Team spart Zeit und Kunden werden schneller bedient.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-10"
                >
                    <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-cta-primary"
                        className="relative group inline-block"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-35 blur-lg group-hover:opacity-55 transition-opacity duration-500" />
                        <div className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[var(--accent)] to-indigo-500 hover:from-[var(--accent-hover)] hover:to-indigo-600 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20">
                            <span>{t('hero.cta_primary')}</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    <p className="text-sm text-[var(--muted-foreground)]/50 tracking-wide text-center">
                        Kostenlos · Unverbindlich · In 30 Minuten startklar
                    </p>
                </motion.div>
            </div>

            {/* Customer Logos — kept at bottom, no duplicate */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full mt-auto pt-8 hero-logos-mobile"
                data-testid="hero-customer-logos"
            >
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xs sm:text-sm text-[var(--muted-foreground)]/50 mb-7 uppercase tracking-wider font-medium"
                >
                    Unternehmen, die Prozesse mit BringsAI vereinfachen
                </motion.p>
                <div
                    className="relative w-full max-w-4xl mx-auto overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 14%, black 86%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 14%, black 86%, transparent)',
                    }}
                >
                    <div
                        className="flex w-max"
                        style={{
                            animation: 'scroll-logos-half 20s linear infinite',
                        }}
                    >
                        {/* First Set */}
                        <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
                            {[
                                { src: "/logoipsum-371.png", alt: "Customer 1" },
                                { src: "/logoipsum-376.png", alt: "Customer 2" },
                                { src: "/logoipsum-377.png", alt: "Customer 3" },
                                { src: "/logoipsum-381.png", alt: "Customer 4" },
                                { src: "/logoipsum-392.png", alt: "Customer 5" },
                                { src: "/logoipsum-399.png", alt: "Customer 6" },
                                { src: "/logoipsum-405.png", alt: "Customer 7" },
                                { src: "/logoipsum-424.png", alt: "Customer 8" }
                            ].map((logo, i) => (
                                <div
                                    key={`group1-${i}`}
                                    className="flex-shrink-0 h-8 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-full w-auto object-contain invert"
                                        loading="eager"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Perfect Duplicate Set for looping */}
                        <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
                            {[
                                { src: "/logoipsum-371.png", alt: "Customer 1" },
                                { src: "/logoipsum-376.png", alt: "Customer 2" },
                                { src: "/logoipsum-377.png", alt: "Customer 3" },
                                { src: "/logoipsum-381.png", alt: "Customer 4" },
                                { src: "/logoipsum-392.png", alt: "Customer 5" },
                                { src: "/logoipsum-399.png", alt: "Customer 6" },
                                { src: "/logoipsum-405.png", alt: "Customer 7" },
                                { src: "/logoipsum-424.png", alt: "Customer 8" }
                            ].map((logo, i) => (
                                <div
                                    key={`group2-${i}`}
                                    className="flex-shrink-0 h-8 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-full w-auto object-contain invert"
                                        loading="eager"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
