import { Button } from "../ui/Button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/i18n"
import { useMemo } from "react"

// Generate random stars for background
function generateStars(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
    }));
}

export function Hero() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    const stars = useMemo(() => generateStars(35), [])

    return (
        <section
            className="relative flex min-h-[90svh] flex-col items-center justify-start sm:justify-center overflow-hidden px-4 sm:px-8 md:px-12 pt-[160px] sm:pt-[120px] pb-8 sm:pb-12 text-center"
        >
            {/* Gradient background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(59,130,246,0.12) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 45%), radial-gradient(ellipse 60% 40% at 20% 60%, rgba(59,130,246,0.06) 0%, transparent 40%)',
                }}
            />

            {/* Starfield background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white/50"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animation: `twinkle-subtle ${star.duration}s ease-in-out ${star.delay}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Subtle noise texture overlay */}
            <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl space-y-8 sm:space-y-10 w-full">
                {/* DSGVO Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)]/50 py-2 px-5 text-xs sm:text-sm font-medium text-[var(--muted-foreground)] backdrop-blur-sm">
                        <svg className="h-4 w-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span className="tracking-tight">100% DSGVO-konform</span>
                    </div>
                </motion.div>

                {/* Headline group */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                >
                    {/* Line 1 */}
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] leading-[1.1]"
                        style={{ fontWeight: 800, letterSpacing: '-0.03em' }}
                    >
                        {t('hero.title_line1')}
                    </h1>

                    {/* Line 2 - with gradient */}
                    <p
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
                        style={{ 
                            fontWeight: 700, 
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {t('hero.title_line2')}
                    </p>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base sm:text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed"
                >
                    {t('hero.subtitle_top')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    {/* Primary CTA with glow */}
                    <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-cta-primary"
                        className="relative group"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[var(--accent)] to-indigo-500 hover:from-[var(--accent-hover)] hover:to-indigo-600 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25">
                            <span>{t('hero.cta_primary')}</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    {/* Secondary CTA */}
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => document.getElementById('fallstudien')?.scrollIntoView({ behavior: 'smooth' })}
                        data-testid="hero-cta-secondary"
                        className="px-8 py-4 text-base font-semibold border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--muted)]"
                    >
                        {t('hero.cta_secondary')}
                    </Button>
                </motion.div>

                {/* Trust note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs sm:text-sm text-[var(--muted-foreground)]/70 pt-2"
                >
                    {t('hero.note')}
                </motion.p>
            </div>
        </section>
    )
}
