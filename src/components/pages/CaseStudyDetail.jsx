import { ArrowLeft, CheckCircle2, ArrowRight, Zap, Target, Layers, Settings2, BarChart3, Bot, Network, Sparkles } from "lucide-react"
import { useLayoutEffect, useRef, useState, useEffect } from "react"
import { useParams, Navigate, Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../../lib/i18n"
import { Navbar } from "../ui/Navbar"
import { Footer } from "../ui/Footer"
import { SEOHead } from "../ui/SEOHead"
import { Reveal } from "../animations/Reveal"

/* ── animation shorthand ── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
})

/* ── Step loop hook (same logic as Process.jsx) ── */
const PF_STEP_DURATION = 1450
const PF_PAUSE_AFTER_LAST = 900
const PF_LINE_TRAVEL_TIME = 480  // box glow starts AFTER line reaches it

function useStepLoop(totalSteps) {
    const [activeStep, setActiveStep] = useState(-1)  // drives line animation
    const [glowStep, setGlowStep] = useState(-1)      // drives box glow (delayed)
    const timerRef = useRef(null)
    const glowTimerRef = useRef(null)

    useEffect(() => {
        function advance(step) {
            if (step < totalSteps) {
                setActiveStep(step)
                if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
                const delay = step === 0 ? 0 : PF_LINE_TRAVEL_TIME
                glowTimerRef.current = setTimeout(() => setGlowStep(step), delay)
                timerRef.current = setTimeout(() => advance(step + 1), PF_STEP_DURATION)
            } else {
                timerRef.current = setTimeout(() => {
                    setActiveStep(-1)
                    setGlowStep(-1)
                    timerRef.current = setTimeout(() => advance(0), 500)
                }, PF_PAUSE_AFTER_LAST)
            }
        }
        timerRef.current = setTimeout(() => advance(0), 1200)
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
        }
    }, [totalSteps])

    return { activeStep, glowStep }
}

/* --- Custom UI Sub-components --- */

function ProcessFlowDiagram({ steps }) {
    if (!steps || steps.length === 0) return null
    const { activeStep, glowStep } = useStepLoop(steps.length)

    return (
        <div className="relative w-full py-4 sm:py-8">
            {/* Mobile — vertical list with animated borders */}
            <div className="flex flex-col gap-0 sm:hidden">
                {steps.map((step, idx) => {
                    // Box glow uses glowStep (delayed), line uses activeStep
                    const isActive = glowStep === idx
                    const hasPassed = glowStep > idx
                    return (
                        <div key={idx} className="flex items-start gap-4 relative">
                            {idx < steps.length - 1 && (
                                <div className="absolute left-5 top-[42px] bottom-2 w-[2px] bg-gradient-to-b from-[var(--border)] to-[var(--border-light)]" />
                            )}
                            <motion.div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 border"
                                animate={{
                                    borderColor: isActive
                                        ? 'rgba(59,130,246,0.62)'
                                        : hasPassed
                                        ? 'rgba(59,130,246,0.5)'
                                        : 'rgba(59,130,246,0.1)',
                                    backgroundColor: isActive
                                        ? 'rgba(59,130,246,0.13)'
                                        : 'rgba(255,255,255,0.03)',
                                    boxShadow: isActive
                                        ? '0 0 14px rgba(59,130,246,0.19), inset 0 0 10px rgba(59,130,246,0.075)'
                                        : hasPassed
                                        ? '0 0 7px rgba(59,130,246,0.063)'
                                        : 'none',
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <motion.span
                                    className="text-xs font-bold"
                                    animate={{ color: isActive || hasPassed ? 'rgba(147,197,253,1)' : 'rgba(140,140,160,1)' }}
                                    transition={{ duration: 0.4 }}
                                >0{idx + 1}</motion.span>
                            </motion.div>
                            <div className="pb-6 pt-2">
                                <span className="text-sm font-semibold text-[var(--foreground)]/80">{step}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Desktop — interleaved: box → line → box → line → box
                Lines use activeStep (immediate), boxes use glowStep (delayed = line reaches box first) */}
            <div className="hidden sm:flex items-start w-full mt-2">
                {steps.flatMap((step, idx) => {
                    const isActive = glowStep === idx
                    const hasPassed = glowStep > idx
                    const items = []

                    // Connecting line — uses activeStep (fires immediately)
                    if (idx > 0) {
                        items.push(
                            <div key={`line-${idx}`} className="flex-1 min-w-0 h-12 flex items-center" aria-hidden="true">
                                <div className="w-full h-[2px] relative overflow-hidden rounded-full">
                                    <div className="absolute inset-0 bg-white/[0.05]" />
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'linear-gradient(90deg, rgba(96,165,250,0.55) 0%, rgba(99,102,241,0.3) 100%)',
                                            originX: 0,
                                        }}
                                        animate={{
                                            scaleX: activeStep > idx - 1 ? 1 : 0,
                                            opacity: activeStep > idx - 1 ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    />
                                </div>
                            </div>
                        )
                    }

                    // Step box — uses glowStep (activates after line arrives)
                    items.push(
                        <div key={`step-${idx}`} className="flex-1 min-w-0 flex flex-col items-center">
                            <motion.div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10 border"
                                animate={{
                                    borderColor: isActive
                                        ? 'rgba(59,130,246,0.62)'
                                        : hasPassed
                                        ? 'rgba(59,130,246,0.5)'
                                        : 'rgba(59,130,246,0.12)',
                                    backgroundColor: isActive
                                        ? 'rgba(59,130,246,0.13)'
                                        : hasPassed
                                        ? 'rgba(59,130,246,0.063)'
                                        : 'rgba(255,255,255,0.03)',
                                    boxShadow: isActive
                                        ? '0 0 20px rgba(59,130,246,0.19), inset 0 0 14px rgba(59,130,246,0.075)'
                                        : hasPassed
                                        ? '0 0 10px rgba(59,130,246,0.063)'
                                        : 'none',
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <motion.span
                                    className="text-sm font-bold"
                                    animate={{ color: isActive ? 'rgba(147,197,253,1)' : hasPassed ? 'rgba(147,197,253,0.8)' : 'rgba(140,140,160,1)' }}
                                    transition={{ duration: 0.4 }}
                                >0{idx + 1}</motion.span>
                            </motion.div>
                            <div className="mt-3 text-xs font-semibold text-[var(--foreground)]/80 text-center w-full px-1">{step}</div>
                        </div>
                    )

                    return items
                })}
            </div>
        </div>
    )
}

function ImplementationCards({ steps }) {
    if (!steps || steps.length === 0) return null
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.12}>
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--border-hover)] hover:shadow-sm transition-all h-full">
                        <div className="text-[var(--accent)] font-bold text-sm mb-4 tracking-wider">SCHRITT 0{idx + 1}</div>
                        <h4 className="text-lg font-bold text-[var(--foreground)] mb-2">{step.title}</h4>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.desc}</p>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}

function AutomatedBadges({ components }) {
    if (!components || components.length === 0) return null
    return (
        <div className="flex flex-wrap gap-3">
            {components.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium">{comp}</span>
                </div>
            ))}
        </div>
    )
}

function PremiumKPIContainer({ impactOptions }) {
    if (!impactOptions || impactOptions.length === 0) return null
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {impactOptions.map((impact, i) => (
                <Reveal key={i} direction="up" delay={i * 0.1} className="h-full">
                    <div className="h-full p-8 lg:p-10 rounded-[2rem] bg-[#0c0c14] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)]/50 transition-all flex flex-col justify-center items-center text-center shadow-lg">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] to-indigo-500 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex items-baseline gap-1 mb-3">
                            {/^[–\-−]/.test(impact.value) ? (
                                <>
                                    <span className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] pr-1">–</span>
                                    <span className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">{impact.value.replace(/^[–\-−]\s*/, '')}</span>
                                </>
                            ) : (
                                <span className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">{impact.value}</span>
                            )}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-widest">{impact.label}</div>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}

const TOOL_SLUGS = {
    "n8n": "n8n", "Supabase": "supabase", "Claude": "anthropic", "Make": "make", 
    "Superchat": "whatsapp", "OpenAI": "chatgpt", "HubSpot": "hubspot", "Zendesk": "zendesk", 
    "WhatsApp API": "whatsapp", "Pipedrive": "pipedrive", "Shopify": "shopify", 
    "Lexoffice": "libreoffice", "Stripe": "stripe"
};

function EndCTA({ ctaConfig, language }) {
    if (!ctaConfig) return null
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    return (
        <Reveal direction="up" className="mt-20">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/10 to-indigo-500/5 border border-[var(--accent)]/20 overflow-hidden px-6 py-12 text-center hover:border-[var(--accent)]/30 transition-all duration-500 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent)] to-indigo-500" />
                <div className="relative z-10 text-left mb-6 sm:mb-0 max-w-lg pl-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2 leading-tight tracking-tight">{ctaConfig.title || "Ähnliche Abläufe in Ihrem Unternehmen automatisieren?"}</h2>
                    <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">{ctaConfig.subtitle || "Vereinbaren Sie jetzt ein kurzes Erstgespräch."}</p>
                </div>
                <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative shrink-0"
                >
                    <div className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[var(--accent)] to-indigo-500 rounded-full transition-all shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_28px_rgba(59,130,246,0.45)]">
                        <span className="flex items-center gap-2">
                            {ctaConfig.button || "Gespräch vereinbaren"}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </a>
            </div>
        </Reveal>
    )
}

/* --- Main Page Component --- */

export function CaseStudyDetail() {
    const { id } = useParams()
    const { t, language } = useLanguage()
    const containerRef = useRef(null)
    const navigate = useNavigate()
    const fallbackBackPath = language === 'en' ? '/en#fallstudien' : '/#fallstudien'

    const cases = t('caseStudies.cases')
    const labels = t('caseStudies.labels') || {}
    const detailCta = t('caseStudies.detailCta')

    useLayoutEffect(() => {
        const el = containerRef.current
        if (el) el.style.visibility = 'hidden'
        const htmlEl = document.documentElement
        const prevBehavior = htmlEl.style.scrollBehavior
        htmlEl.style.scrollBehavior = 'auto'
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        requestAnimationFrame(() => {
            htmlEl.style.scrollBehavior = prevBehavior
            requestAnimationFrame(() => {
                if (el) el.style.visibility = 'visible'
            })
        })
    }, [id])

    const study = Array.isArray(cases) ? cases.find(c => c.id === id) : null

    if (!study) {
        return <Navigate to={language === 'en' ? '/en' : '/'} replace />
    }

    const handleBack = (e) => {
        e.preventDefault()
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate(fallbackBackPath)
        }
    }

    return (
        <div ref={containerRef} className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <SEOHead
                title={`${study.title} | BringsAI Case Study`}
                description={study.subtitle || study.challenge}
            />
            <Navbar />

            <main className="relative pt-32 pb-24 z-10">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Back button */}
                    <motion.div {...fadeUp(0)}>
                        <a
                            href={fallbackBackPath}
                            onClick={handleBack}
                            className="inline-flex items-center text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            {language === 'en' ? 'Back to Overview' : 'Zurück zur Übersicht'}
                        </a>
                    </motion.div>

                    {/* [1] Hero Section */}
                    <div className="mb-20">
                        <motion.div {...fadeUp(0.1)} className="max-w-4xl flex flex-col items-start text-left">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1.5 text-[11px] font-bold rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                                    <Layers className="w-3.5 h-3.5" />
                                    {study.industry}
                                </span>
                                <span className="px-3 py-1.5 text-[11px] font-bold rounded bg-[var(--muted)] text-[var(--foreground)]/80 border border-[var(--border)] uppercase tracking-widest flex items-center gap-2">
                                    <Settings2 className="w-3.5 h-3.5" />
                                    {study.clientType}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                                {study.title}
                            </h1>
                            {study.subtitle && (
                                <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl font-medium">
                                    {study.subtitle}
                                </p>
                            )}
                        </motion.div>
                    </div>
                    
                    {/* [2] KPIs (3 equal size cards) */}
                    <div className="mb-24 w-full mx-auto">
                        <PremiumKPIContainer impactOptions={study.impactOptions} />
                    </div>

                    {/* [2b] Ausgangslage + Lösung */}
                    <motion.div {...fadeUp(0.25)} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {/* Ausgangslage */}
                        <div className="p-8 lg:p-12 rounded-[2.5rem] bg-[#0c0c14] border border-[var(--border)] relative overflow-hidden shadow-sm">
                            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-red-500/80 to-red-600/50" />
                            <h3 className="text-sm font-bold tracking-widest text-[var(--foreground)] uppercase mb-8 ml-2">
                                {labels.challenge || "AUSGANGSLAGE"}
                            </h3>
                            {study.challengeBullets && study.challengeBullets.length > 0 && (
                                <ul className="space-y-6 text-[15px] md:text-lg text-[var(--foreground)]/90 font-medium ml-2">
                                    {study.challengeBullets.map((bullet, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="text-red-500 font-bold shrink-0 mt-[2px] w-4">–</span>
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Lösung */}
                        <div className="p-8 lg:p-12 rounded-[2.5rem] bg-[#0c0c14] border border-[var(--border)] relative overflow-hidden shadow-sm">
                            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-[var(--accent)] to-indigo-500" />
                            <h3 className="text-sm font-bold tracking-widest text-[var(--foreground)] uppercase mb-8 ml-2">
                                {labels.solution || "LÖSUNG"}
                            </h3>
                            {study.solutionBullets && study.solutionBullets.length > 0 && (
                                <ul className="space-y-6 text-[15px] md:text-lg text-[var(--foreground)]/90 font-medium ml-2">
                                    {study.solutionBullets.map((bullet, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-[var(--accent)] shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>

                    {/* [3] Ablauf im Überblick */}
                    {study.processFlow && study.processFlow.length > 0 && (
                        <Reveal direction="up" className="mb-24">
                            <div className="max-w-5xl mx-auto">
                                <h3 className="text-sm font-bold tracking-widest text-[var(--foreground)] uppercase mb-8 text-center">
                                    {labels.processFlow || "SO LÄUFT DER PROZESS HEUTE AB"}
                                </h3>
                                <div className="bg-[#0c0c14] py-8 px-6 sm:px-12 rounded-[2.5rem] border border-[var(--border)] relative shadow-lg">
                                    <ProcessFlowDiagram steps={study.processFlow} />
                                </div>
                            </div>
                        </Reveal>
                    )}

                    {/* [4] Umsetzung */}
                    {study.implementationSteps && study.implementationSteps.length > 0 && (
                        <Reveal direction="up" className="mb-24">
                            <h3 className="text-sm font-bold tracking-widest text-[var(--foreground)] uppercase mb-8 text-center mt-32">
                                {labels.implementation || "SO WURDE DAS SYSTEM AUFGEBAUT"}
                            </h3>
                            <ImplementationCards steps={study.implementationSteps} />
                        </Reveal>
                    )}

                    {/* [5] Was automatisiert wurde & Tools */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-32 px-4 mt-32">
                        {/* Was automatisiert wurde */}
                        {study.automatedComponents && study.automatedComponents.length > 0 && (
                            <Reveal direction="up" className="w-full md:text-left text-center">
                                <h3 className="text-[11px] font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
                                    <Sparkles className="w-3.5 h-3.5" />{labels.automatedComponents || "WAS AUTOMATISIERT WURDE"}
                                </h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    {study.automatedComponents.map((comp, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border)]/60 bg-[var(--card)] text-xs text-[var(--foreground)]/90 font-bold uppercase tracking-wide whitespace-nowrap shadow-sm">
                                            {comp}
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        )}

                        {/* Technologien */}
                        {study.tools && study.tools.length > 0 && (
                            <Reveal direction="up" delay={0.1} className="w-full md:text-left text-center">
                                <h3 className="text-[11px] font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
                                    <Network className="w-3.5 h-3.5" />{labels.tools || "EINGESETZTE TECHNOLOGIEN"}
                                </h3>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    {study.tools.map((tool, i) => {
                                        const slug = TOOL_SLUGS[tool] || tool.toLowerCase();
                                        return (
                                            <div key={i} className="w-12 h-12 rounded-[0.9rem] bg-[var(--card)] border border-[var(--border)]/60 flex items-center justify-center shadow-sm">
                                                <img 
                                                    src={`https://cdn.simpleicons.org/${slug}`} 
                                                    alt={tool} 
                                                    className="w-5 h-5 object-contain" 
                                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
                                                />
                                                <span className="hidden text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">{tool.substring(0, 3)}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Reveal>
                        )}
                    </div>

                    {/* [6] Kundenfeedback */}
                    <Reveal direction="up" className="mb-32 max-w-4xl mx-auto">
                        <div className="relative p-10 md:p-14 lg:p-16 rounded-[3rem] bg-gradient-to-br from-[#0c0c14] to-[var(--background)] border border-[var(--border)] flex flex-col items-center text-center overflow-hidden group hover:border-[var(--accent)]/40 hover:shadow-2xl transition-all duration-700">
                            {/* Subtle accent shadow */}
                            <div className="absolute inset-0 rounded-[3rem] shadow-[inset_0_0_60px_rgba(59,130,246,0.04)] pointer-events-none" />
                            
                            <img src={study.feedback.image || "/Fallbeispiel1.png"} alt="Testimonial Author" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-10 ring-4 ring-[#0c0c14] shadow-2xl relative z-10" />
                            
                            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-[1.3] mb-10 max-w-3xl relative z-10 mx-auto" style={{ letterSpacing: '-0.01em' }}>
                                &ldquo;{study.feedback.quote}&rdquo;
                            </p>
                            <div className="relative z-10">
                                <p className="text-sm font-medium text-[var(--muted-foreground)]/70">{study.feedback.role}</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* [7] CTA */}
                    <EndCTA ctaConfig={detailCta} language={language} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
