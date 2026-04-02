import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, ChevronDown } from "lucide-react"
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
        <section id="faq" className="py-20 sm:py-32 bg-[var(--background)] relative">

            <div className="mx-auto max-w-4xl px-8 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-5xl">{t('faq.title')}</h2>
                </motion.div>

                <div className="space-y-4">
                    {visibleItems.map((item, index) => (
                        <FAQItem key={index} question={item.q} answer={item.a} index={index} />
                    ))}
                </div>

                {/* Show more / less button */}
                {faqItems.length > INITIAL_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-center mt-10"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-sm font-medium hover:bg-[var(--muted)] hover:shadow-sm transition-all"
                        >
                            {showAll ? showLessLabel : showMoreLabel}
                            <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all hover:border-[var(--border-hover)] hover:shadow-sm"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-bold text-[var(--foreground)]">{question}</span>
                <div className="ml-4 shrink-0 rounded-full bg-[var(--muted)] p-2 text-[var(--foreground)] transition-colors hover:bg-[var(--border-light)]">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0 text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
