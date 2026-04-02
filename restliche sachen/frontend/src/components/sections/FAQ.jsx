import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

const INITIAL_COUNT = 5

export function FAQ() {
    const { t } = useLanguage()
    const [showAll, setShowAll] = useState(false)

    const faqData = t('faq.items')
    const faqItems = Array.isArray(faqData) ? faqData : []
    const showMoreLabel = t('faq.show_more') || "Alle Fragen ansehen"
    const showLessLabel = t('faq.show_less') || "Weniger anzeigen"

    const visibleItems = showAll ? faqItems : faqItems.slice(0, INITIAL_COUNT)

    return (
        <section id="faq" className="py-20 sm:py-28 bg-[var(--background)] relative">
            <div className="mx-auto max-w-4xl px-8 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">{t('faq.title')}</h2>
                </motion.div>

                <div className="space-y-3">
                    {visibleItems.map((item, index) => (
                        <FAQItem key={index} question={item.q} answer={item.a} index={index} />
                    ))}
                </div>

                {faqItems.length > INITIAL_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-center mt-10"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/50 transition-all"
                        >
                            {showAll ? showLessLabel : showMoreLabel}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

function FAQItem({ question, answer, index }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className={`rounded-xl border bg-[var(--card)] overflow-hidden transition-all duration-300 ${
                isOpen 
                    ? 'border-[var(--accent)]/30 shadow-sm' 
                    : 'border-[var(--border)] hover:border-[var(--border-hover)]'
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-5 text-left"
                aria-expanded={isOpen}
            >
                <span className="text-base font-semibold text-[var(--foreground)] pr-4">{question}</span>
                <div className={`shrink-0 rounded-full p-2 transition-all duration-300 ${
                    isOpen 
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] rotate-180' 
                        : 'bg-[var(--muted)] text-[var(--foreground)]'
                }`}>
                    <ChevronDown className="h-4 w-4" />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-5 pb-5 pt-0 text-[var(--muted-foreground)] leading-relaxed text-sm">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
