import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

export function FinalCTA() {
    const { language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const headline = language === 'en' 
        ? "Less manual work. More structure every day."
        : "Weniger manuelle Arbeit. Mehr Struktur im Alltag."
    
    const subline = language === 'en'
        ? "We build workflows that accurately capture inquiries, route tasks automatically, and save your team time every single day."
        : "Wir bauen Abläufe, die Anfragen sauber erfassen, Aufgaben automatisch weiterleiten und Ihrem Team täglich Zeit sparen."
    
    const smallText = language === 'en'
        ? ""
        : ""
    
    const ctaText = language === 'en'
        ? "Book free consultation"
        : "Kostenloses Erstgespräch sichern"
    
    const ctaNote = language === 'en'
        ? "In a short call, we show you exactly where your team is losing time and where automation makes real sense."
        : "Wir schauen uns gemeinsam an, welche Abläufe bei Ihnen aktuell Zeit kosten – und wo sich Automatisierung wirklich lohnt."

    return (
        <section 
            ref={ref}
            className="relative py-32 sm:py-40 md:py-48 bg-[var(--background)] overflow-hidden"
            data-testid="final-cta-section"
        >
            {/* Subtle gradient background integrated from button colors */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.055) 0%, rgba(99,102,241,0.028) 40%, transparent 70%)',
                }}
            />

            <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 text-center">
                {/* Main Headline with reveal animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-[1.15] mb-6"
                    style={{ letterSpacing: '-0.02em' }}
                    data-testid="final-cta-headline"
                >
                    {headline}
                </motion.h2>

                {/* Subline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg sm:text-xl md:text-2xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed mb-4"
                >
                    {subline}
                </motion.p>

                {/* Small text (Empty but kept for layout safety) */}
                {smallText && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm sm:text-base text-[var(--muted-foreground)]/70 max-w-2xl mx-auto mb-10 sm:mb-12"
                    >
                        {smallText}
                    </motion.p>
                )}

                {/* CTA Button - Same style as Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-8 mt-8"
                >
                    <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-cta-button"
                        className="relative group"
                    >
                        {/* Button */}
                        <div className="inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[var(--accent)] to-indigo-500 hover:from-[var(--accent-hover)] hover:to-indigo-600 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_32px_rgba(59,130,246,0.45)]">
                            <span>{ctaText}</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>
                    
                    {/* CTA Note */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1.0, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs sm:text-sm text-[var(--muted-foreground)]/60"
                    >
                        {ctaNote}
                    </motion.span>
                </motion.div>
            </div>
        </section>
    )
}
