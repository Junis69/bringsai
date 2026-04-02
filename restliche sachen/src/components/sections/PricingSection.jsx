import { Reveal } from "../animations/Reveal"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useLanguage } from "../../lib/i18n"
import { Button } from "../ui/Button"

/* Staggered feature list item */
function FeatureItem({ feature, index }) {
    return (
        <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-3 text-sm text-[var(--muted-foreground)] items-start"
        >
            <Check className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
            <span>{feature}</span>
        </motion.li>
    )
}

export function PricingSection() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"

    return (
        <section id="pakete" className="relative py-20 sm:py-24 pb-32 text-center bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-8 md:px-6">

                {/* Header with stars */}
                <Reveal direction="up" className="mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                        <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                        <svg className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
                        {t('pricing.title') || "Unsere Pakete"}
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)]">
                        {t('pricing.subtitle') || "Wählen Sie das passende Paket für Ihr Unternehmen"}
                    </p>
                </Reveal>

                {/* Tiers Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    
                    {/* FOUNDATION */}
                    <Reveal direction="left" delay={0}>
                        <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 flex flex-col gap-8 transition-all duration-500 hover:shadow-md hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">{t('pricing.foundation.title')}</h3>
                                <p className="text-[var(--muted-foreground)] mt-3 text-sm leading-relaxed min-h-[40px]">
                                    {t('pricing.foundation.desc')}
                                </p>
                            </div>

                            <div className="h-px w-full bg-[var(--border-light)]" />

                            <a href={calUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-0 py-6 rounded-2xl text-[15px] font-semibold transition-all">
                                    {t('pricing.foundation.btn')}
                                </Button>
                            </a>

                            <div className="h-px w-full bg-[var(--border-light)]" />

                            <ul className="space-y-4 pt-4 flex-grow">
                                {t('pricing.foundation.features').map((feature, idx) => (
                                    <FeatureItem key={idx} feature={feature} index={idx} />
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* GROWTH */}
                    <Reveal direction="up" delay={0}>
                        <div className="relative rounded-2xl border-2 border-[var(--accent)] bg-[var(--card)] p-10 flex flex-col gap-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full">
                            {/* Most Popular Badge */}
                            <div className="absolute top-6 right-6 bg-[var(--accent)] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                                {t('pricing.growth.badge')}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">{t('pricing.growth.title')}</h3>
                                <p className="text-[var(--muted-foreground)] mt-3 text-sm leading-relaxed min-h-[40px]">
                                    {t('pricing.growth.desc')}
                                </p>
                            </div>

                            <div className="h-px w-full bg-[var(--border-light)]" />

                            <a href={calUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-0 py-6 rounded-2xl text-[15px] font-semibold transition-all">
                                    {t('pricing.growth.btn')}
                                </Button>
                            </a>

                            <div className="h-px w-full bg-[var(--border-light)]" />

                            <ul className="space-y-4 pt-4 flex-grow">
                                {t('pricing.growth.features').map((feature, idx) => (
                                    <FeatureItem key={idx} feature={feature} index={idx} />
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* ENTERPRISE */}
                    <Reveal direction="right" delay={0}>
                        <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 flex flex-col gap-8 transition-all duration-500 hover:shadow-md hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">{t('pricing.enterprise.title')}</h3>
                                <p className="text-[var(--muted-foreground)] mt-3 text-sm leading-relaxed min-h-[40px]">
                                    {t('pricing.enterprise.desc')}
                                </p>
                            </div>

                            <div className="h-px w-full bg-[var(--border-light)]" />

                            <a href={calUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-0 py-6 rounded-2xl text-[15px] font-semibold transition-all">
                                    {t('pricing.enterprise.btn')}
                                </Button>
                            </a>

                            <div className="h-px w-full bg-[var(--border-light)]" />

                            <ul className="space-y-4 pt-4 flex-grow">
                                {t('pricing.enterprise.features').map((feature, idx) => (
                                    <FeatureItem key={idx} feature={feature} index={idx} />
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}
