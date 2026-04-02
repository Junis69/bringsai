import { useLanguage } from "../../lib/i18n"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar } from "lucide-react"

export function Contact() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section id="contact" className="relative overflow-hidden bg-[var(--section-alt)] py-20 sm:py-32 text-center">
            <div className="mx-auto max-w-4xl px-4 sm:px-8 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 space-y-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 sm:px-8 py-16 shadow-sm hover:shadow-md transition-shadow duration-500"
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--foreground)]">
                        <Calendar className="h-8 w-8" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[var(--foreground)]">
                        {t('contact.title')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-[var(--muted-foreground)] whitespace-pre-line">
                        {t('contact.subtitle')}
                    </p>

                    <div className="flex flex-col items-center gap-2">
                        <a
                            href={calUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] border-0 rounded-full transition-all duration-300 group w-full sm:w-auto mx-auto"
                        >
                            <span className="flex items-center gap-2">
                                {t('contact.cta')}
                                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </a>
                        <p className="text-sm text-[var(--muted-foreground)] font-medium">{t('contact.note')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
