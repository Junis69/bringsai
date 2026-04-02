import { motion } from "framer-motion"
import { Search, Cog, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "../../lib/i18n"

const STEP_DURATION = 1450   // ms each step stays active (~15% faster than before)
const PAUSE_AFTER_LAST = 900  // ms pause after last step before reset
const LINE_TRAVEL_TIME = 480  // ms — box glow starts AFTER line reaches it
const ICONS = [Search, Cog, CheckCircle2]

function useStepLoop(totalSteps) {
    const [activeStep, setActiveStep] = useState(-1)  // drives line animation
    const [glowStep, setGlowStep] = useState(-1)      // drives box glow (delayed by line travel)
    const timerRef = useRef(null)
    const glowTimerRef = useRef(null)

    useEffect(() => {
        function advance(step) {
            if (step < totalSteps) {
                setActiveStep(step)
                if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
                // First box has no line before it — activate immediately
                const delay = step === 0 ? 0 : LINE_TRAVEL_TIME
                glowTimerRef.current = setTimeout(() => setGlowStep(step), delay)
                timerRef.current = setTimeout(() => advance(step + 1), STEP_DURATION)
            } else {
                timerRef.current = setTimeout(() => {
                    setActiveStep(-1)
                    setGlowStep(-1)
                    timerRef.current = setTimeout(() => advance(0), 500)
                }, PAUSE_AFTER_LAST)
            }
        }
        timerRef.current = setTimeout(() => advance(0), 900)
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
        }
    }, [totalSteps])

    return { activeStep, glowStep }
}

function ProcessStep({ step, index, isLast, isActive, hasPassed }) {
    const Icon = step.icon

    return (
        <div className="relative flex flex-col items-center pb-4 lg:pb-0">
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Step number badge */}
                <motion.div
                    className="absolute -top-3 -right-3 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm font-bold shadow-md"
                    animate={{
                        backgroundColor: isActive
                            ? 'rgba(59,130,246,1)'
                            : hasPassed
                            ? 'rgba(59,130,246,0.55)'
                            : 'rgba(26,26,36,1)',
                        color: isActive || hasPassed ? '#ffffff' : 'rgba(140,140,160,1)',
                    }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                >
                    0{step.order}
                </motion.div>

                {/* Icon card */}
                <motion.div
                    className="relative flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-2xl overflow-hidden border"
                    animate={{
                        borderColor: isActive
                            ? 'rgba(59,130,246,0.5)'
                            : hasPassed
                            ? 'rgba(59,130,246,0.4)'
                            : 'rgba(30,30,42,1)',
                        boxShadow: isActive
                            ? '0 0 22px rgba(59,130,246,0.1), inset 0 0 18px rgba(59,130,246,0.06)'
                            : hasPassed
                            ? '0 0 10px rgba(59,130,246,0.05)'
                            : 'none',
                    }}
                    style={{ backgroundColor: 'var(--card)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {/* Top streak */}
                    <motion.div
                        className="absolute inset-x-0 top-0 h-[1px]"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.55), transparent)',
                        }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -3 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                    {/* Bottom streak */}
                    <motion.div
                        className="absolute inset-x-0 bottom-0 h-[1px]"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.55), transparent)',
                        }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 3 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                    <Icon
                        className="h-8 w-8 sm:h-12 sm:w-12 relative z-10 transition-colors duration-500"
                        style={{ color: isActive ? 'rgba(147,197,253,1)' : 'var(--foreground)' }}
                        strokeWidth={1.5}
                    />
                </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div
                className="mt-5 sm:mt-8 text-center max-w-xs px-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <h3 className="text-sm sm:text-lg font-bold text-[var(--foreground)] mb-2">
                    <span className="text-[var(--accent)]">0{step.order}</span> {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {step.description}
                </p>
            </motion.div>

            {/* Vertical connector — mobile */}
            {!isLast && (
                <div
                    className="lg:hidden mt-6 w-[2px] h-8 bg-gradient-to-b from-[var(--accent)]/50 to-[var(--accent)]/20"
                    aria-hidden="true"
                />
            )}
        </div>
    )
}

export function Process() {
    const { t } = useLanguage()

    const stepsData = t('process.steps')
    const stepsArr = Array.isArray(stepsData) ? stepsData : []
    const steps = stepsArr.map((s, i) => ({
        order: i + 1,
        title: s.title,
        description: s.desc,
        icon: ICONS[i] || Cog,
    }))

    const { activeStep, glowStep } = useStepLoop(steps.length)

    return (
        <section
            id="prozess"
            className="relative py-16 sm:py-20 md:py-28 bg-[var(--background)] overflow-hidden"
            data-testid="process-section"
        >
            <div className="mx-auto max-w-5xl px-6 sm:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('process.title')}
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Horizontal connecting lines — desktop only */}
                    <div
                        className="hidden lg:block absolute top-[54px] pointer-events-none z-0"
                        style={{ left: '16.7%', right: '16.7%' }}
                        aria-hidden="true"
                    >
                        <div className="flex h-[2px]">
                            {steps.slice(0, -1).map((_, i) => (
                                <div key={i} className="flex-1 relative overflow-hidden rounded-full">
                                    {/* Base line */}
                                    <div className="absolute inset-0 bg-white/[0.05]" />
                                    {/* Animated fill — lights up when next step activates */}
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'linear-gradient(90deg, rgba(96,165,250,0.55) 0%, rgba(99,102,241,0.3) 100%)',
                                            originX: 0,
                                        }}
                                        animate={{
                                            scaleX: activeStep > i ? 1 : 0,
                                            opacity: activeStep > i ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-3 lg:gap-8">
                        {steps.map((step, index) => (
                            <ProcessStep
                                key={index}
                                step={step}
                                index={index}
                                isLast={index === steps.length - 1}
                                isActive={glowStep === index}
                                hasPassed={glowStep > index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
