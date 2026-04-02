import { motion } from "framer-motion"
import { Search, Cog, CheckCircle2 } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

function ProcessStep({ step, index }) {
    return (
        <motion.div
            className="group relative flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            transition={{ duration: 0.85, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Icon Bubble */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-[var(--muted)] border border-[var(--border)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-md">
                <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white shadow-sm">
                    {step.order}
                </span>
                <step.icon className="h-10 w-10 text-[var(--foreground)] transition-colors group-hover:text-[var(--foreground)]" />
            </div>

            {/* Content */}
            <div className="space-y-4 rounded-2xl p-6 transition-colors">
                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors">{step.title}</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {step.description}
                </p>
            </div>
        </motion.div>
    )
}

export function Process() {
    const { t } = useLanguage()

    const processIcons = [Search, Cog, CheckCircle2]
    const stepsData = t('process.steps')
    const stepsArr = Array.isArray(stepsData) ? stepsData : []
    const steps = stepsArr.map((s, i) => ({
        order: String(i + 1),
        title: s.title,
        description: s.desc,
        icon: processIcons[i] || Cog,
    }))

    return (
        <section id="prozess" className="relative py-20 sm:py-32 bg-[var(--background)] overflow-hidden">
            <div className="mx-auto max-w-6xl px-8 md:px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        className="text-3xl font-semibold tracking-tight sm:text-4xl text-[var(--foreground)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px 0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('process.title')}
                    </motion.h2>
                </div>

                {/* Process Steps with Connecting Lines */}
                <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">

                    {/* Connecting Lines (desktop only) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 pointer-events-none" aria-hidden="true">
                        <div
                            className="absolute h-[1px]"
                            style={{
                                left: 'calc(16.666% + 56px)',
                                right: 'calc(50% + 56px)',
                                top: '0',
                                background: 'var(--border)',
                            }}
                        />
                        <div
                            className="absolute h-[1px]"
                            style={{
                                left: 'calc(50% + 56px)',
                                right: 'calc(16.666% + 56px)',
                                top: '0',
                                background: 'var(--border)',
                            }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <ProcessStep key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
