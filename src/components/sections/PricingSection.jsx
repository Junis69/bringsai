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
        <section id="pakete" className="relative py-20 sm:py-24 pb-32 text-center bg-[var(--background)]" data-testid="pricing-section">
            <div className="max-w-6xl mx-auto px-8 md:px-6 relative z-10">

                {/* Header */}
                <Reveal direction="up" className="mb-16">
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
                    <Reveal direction="left" delay={0} className="h-full">
                        <div className="group relative rounded-2xl bg-[#0c0c14] border border-white/[0.06] p-10 flex flex-col gap-8 transition-all duration-500 hover:border-white/[0.1] hover:-translate-y-1 overflow-hidden h-full">
                            <div className="relative z-10" style={{ minHeight: '130px' }}>
                                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">{t('pricing.foundation.title')}</h3>
                                <p className="text-[var(--muted-foreground)] mt-3 text-sm leading-relaxed">
                                    {t('pricing.foundation.desc')}
                                </p>
                            </div>

                            <div className="h-px w-full bg-white/[0.06] relative z-10" />

                            <a href={calUrl} target="_blank" rel="noopener noreferrer" className="relative z-10">
                                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-0 py-6 rounded-2xl text-[15px] font-semibold transition-all">
                                    {t('pricing.foundation.btn')}
                                </Button>
                            </a>

                            <div className="h-px w-full bg-white/[0.06] relative z-10" />

                            <ul className="space-y-4 pt-4 flex-grow relative z-10">
                                {t('pricing.foundation.features').map((feature, idx) => (
                                    <FeatureItem key={idx} feature={feature} index={idx} />
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* GROWTH - Featured */}
                    <Reveal direction="up" delay={0} className="h-full">
                        <div className="group relative rounded-2xl bg-[#0c0c14] border border-[var(--accent)]/25 p-10 flex flex-col gap-8 transition-all duration-500 hover:border-[var(--accent)]/40 hover:-translate-y-1 overflow-hidden h-full">
                            {/* Top accent line */}
                            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
                            
                            {/* Most Popular Badge */}
                            <div className="absolute top-6 right-6 bg-[var(--accent)] text-white text-xs font-semibold px-4 py-1.5 rounded-full z-10">
                                {t('pricing.growth.badge')}
                            </div>

                            <div className="relative z-10" style={{ minHeight: '130px' }}>
                                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">{t('pricing.growth.title')}</h3>
                                <p className="text-[var(--muted-foreground)] mt-3 text-sm leading-relaxed">
                                    {t('pricing.growth.desc')}
                                </p>
                            </div>

                            <div className="h-px w-full bg-white/[0.08] relative z-10" />

                            <a href={calUrl} target="_blank" rel="noopener noreferrer" className="relative z-10">
                                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-0 py-6 rounded-2xl text-[15px] font-semibold transition-all">
                                    {t('pricing.growth.btn')}
                                </Button>
                            </a>

                            <div className="h-px w-full bg-white/[0.08] relative z-10" />

                            <ul className="space-y-4 pt-4 flex-grow relative z-10">
                                {t('pricing.growth.features').map((feature, idx) => (
                                    <FeatureItem key={idx} feature={feature} index={idx} />
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* ENTERPRISE */}
                    <Reveal direction="right" delay={0} className="h-full">
                        <div className="group relative rounded-2xl bg-[#0c0c14] border border-white/[0.06] p-10 flex flex-col gap-8 transition-all duration-500 hover:border-white/[0.1] hover:-translate-y-1 overflow-hidden h-full">
                            <div className="relative z-10" style={{ minHeight: '130px' }}>
                                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">{t('pricing.enterprise.title')}</h3>
                                <p className="text-[var(--muted-foreground)] mt-3 text-sm leading-relaxed">
                                    {t('pricing.enterprise.desc')}
                                </p>
                            </div>

                            <div className="h-px w-full bg-white/[0.06] relative z-10" />

                            <a href={calUrl} target="_blank" rel="noopener noreferrer" className="relative z-10">
                                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-0 py-6 rounded-2xl text-[15px] font-semibold transition-all">
                                    {t('pricing.enterprise.btn')}
                                </Button>
                            </a>

                            <div className="h-px w-full bg-white/[0.06] relative z-10" />

                            <ul className="space-y-4 pt-4 flex-grow relative z-10">
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
