import { useLanguage } from "../../lib/i18n"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Contact() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section id="contact" className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-28">
            <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="relative space-y-8 rounded-3xl border border-[var(--accent)]/15 bg-gradient-to-br from-[var(--card)] to-[var(--accent)]/5 px-8 sm:px-12 py-14 sm:py-16 text-center overflow-hidden"
                >
                    
                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                        <TrendingUp className="h-8 w-8 text-[var(--accent)]" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
                            {t('contact.title')}
                        </h2>

                        <p className="mx-auto max-w-xl text-lg text-[var(--muted-foreground)]">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-2">
                        {/* CTA with glow */}
                        <a
                            href={calUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group"
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500" />
                            <div className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[var(--accent)] to-indigo-500 hover:from-[var(--accent-hover)] hover:to-indigo-600 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20">
                                <span>{t('contact.cta')}</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                        <p className="text-sm text-[var(--muted-foreground)]">{t('contact.note')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
