import { Button } from "../ui/Button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

export function Hero() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"

    return (
        <section
            className="relative flex min-h-[86svh] flex-col items-center justify-start sm:justify-center overflow-hidden px-4 sm:px-8 md:px-12 pt-[180px] sm:pt-[130px] pb-6 sm:pb-8 text-center bg-[var(--background)]"
        >
            {/* Content */}
            <div className="relative z-10 max-w-4xl space-y-8 sm:space-y-10 w-full">
                {/* Headline group */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center justify-center gap-6 sm:gap-10 w-full"
                >
                    {/* DSGVO Pill */}
                    <div className="relative flex justify-center w-full mb-[-10px] sm:mb-[-20px]">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)]/50 py-2 px-5 text-xs sm:text-sm font-semibold text-[var(--muted-foreground)] relative z-10 transition-colors hover:bg-[var(--muted)]"
                        >
                            <svg className="h-4 w-4 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            <span className="font-bold tracking-tight">100% DSGVO-konform</span>
                        </motion.div>
                    </div>

                    {/* Line 1 – primary dark text */}
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] leading-[1.1] sm:whitespace-nowrap mb-2 sm:mb-4 text-center"
                        style={{ fontWeight: 800, letterSpacing: '-0.025em' }}
                    >
                        {typeof t('hero.title_line1') === 'string' ? t('hero.title_line1').split('. ').map((part, i, arr) => (
                            <span key={i} className="block sm:inline">
                                {part}{i < arr.length - 1 ? '. ' : ''}
                            </span>
                        )) : t('hero.title_line1')}
                    </h1>

                    {/* Line 2 */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl sm:text-3xl md:text-4xl text-[var(--foreground)]/80 leading-[1.2] text-center"
                        style={{ fontWeight: 600, letterSpacing: '-0.015em' }}
                    >
                        {t('hero.title_line2')}
                    </motion.p>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[0.95rem] sm:text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl pt-2 sm:pt-4 px-2 sm:px-0 text-center mx-auto"
                        style={{ fontWeight: 400 }}
                    >
                        {t('hero.subtitle_top')}
                    </motion.p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center gap-2 pt-2 sm:pt-4 w-full"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <a href={calUrl} target="_blank" rel="noopener noreferrer" className="relative group flex items-center justify-center w-full sm:w-auto overflow-hidden rounded-full">
                            <Button
                                size="lg"
                                className="relative z-10 w-full sm:w-auto h-12 sm:h-14 lg:h-16 rounded-full px-6 sm:px-8 lg:px-12 text-base sm:text-lg lg:text-xl bg-[var(--accent)] border border-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden group font-bold"
                                style={{ transform: 'translateZ(0)' }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('hero.cta_primary')}
                                    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ease-out group-hover:translate-x-1" style={{ transform: 'translateZ(0)' }} />
                                </span>
                            </Button>
                        </a>
                        <a
                            href="#fallstudien"
                            className="w-full sm:w-auto"
                            onClick={(e) => {
                                e.preventDefault()
                                const el = document.getElementById('fallstudien')
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-12 sm:h-14 lg:h-16 rounded-full px-6 sm:px-8 lg:px-12 text-base sm:text-lg lg:text-xl bg-transparent border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] font-semibold"
                                style={{ transform: 'translateZ(0)' }}
                            >
                                {t('hero.cta_secondary')}
                            </Button>
                        </a>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)] font-medium mt-3 sm:mt-4 text-center px-2">{t('hero.note')}</p>

                </motion.div>
            </div>
        </section>
    )
}
