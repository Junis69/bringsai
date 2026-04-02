import { motion } from "framer-motion"
import { Search, Cog, CheckCircle2 } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

function ProcessStep({ step, index, isLast }) {
    return (
        <div className="relative flex flex-col items-center">
            {/* Card with icon */}
            <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-lg">
                    {step.order}
                </div>
                
                {/* Icon card */}
                <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                    <step.icon className="h-12 w-12 text-[var(--foreground)]" strokeWidth={1.5} />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="mt-8 text-center max-w-xs"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
                    <span className="text-[var(--accent)]">0{step.order}</span> {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed italic">
                    {step.description}
                </p>
            </motion.div>
        </div>
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
        <section id="prozess" className="relative py-20 sm:py-28 bg-[var(--background)] overflow-hidden">
            <div className="mx-auto max-w-5xl px-8 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl font-semibold tracking-tight sm:text-4xl text-[var(--foreground)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('process.title')}
                    </motion.h2>
                </div>

                {/* Process Steps with Connecting Lines */}
                <div className="relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-14 left-[20%] right-[20%] pointer-events-none" aria-hidden="true">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />
                    </div>

                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
                        {steps.map((step, index) => (
                            <ProcessStep 
                                key={index} 
                                step={step} 
                                index={index} 
                                isLast={index === steps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
