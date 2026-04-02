import { ArrowLeft, CheckCircle2, ArrowRight, Zap, Target, Layers, Settings2, BarChart3, Bot, Network, Sparkles } from "lucide-react"
import { useLayoutEffect, useRef } from "react"
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

/* --- Custom UI Sub-components --- */

function ProcessFlowDiagram({ steps }) {
    if (!steps || steps.length === 0) return null
    return (
        <div className="relative w-full py-4 sm:py-8 overflow-hidden">
            <div className="flex flex-col gap-0 sm:hidden">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 relative">
                        {idx < steps.length - 1 && (
                            <div className="absolute left-5 top-10 w-[2px] h-[calc(100%)] bg-gradient-to-b from-[var(--border)] to-[var(--border-light)]" />
                        )}
                        <div className="w-10 h-10 rounded-xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center shrink-0 relative z-10">
                            <span className="text-xs font-bold text-[var(--muted-foreground)]">0{idx + 1}</span>
                        </div>
                        <div className="pb-6 pt-2">
                            <span className="text-sm font-semibold text-[var(--foreground)]/80">{step}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden sm:flex items-start justify-between relative z-10 w-full mt-2">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center relative group w-1/5">
                        {idx > 0 && (
                            <div className="absolute top-6 right-1/2 w-full h-[2px] bg-gradient-to-r from-[var(--border-light)] via-[var(--border)] to-[var(--border-light)] -z-10" />
                        )}
                        <div className="w-12 h-12 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-md">
                            <span className="text-sm font-bold text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">0{idx + 1}</span>
                        </div>
                        <div className="text-xs font-semibold text-[var(--foreground)]/80 text-center px-2 group-hover:text-[var(--foreground)] transition-colors">{step}</div>
                    </div>
                ))}
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

function PremiumKPICard({ impactOptions, labels }) {
    return (
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-8 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                {labels.results || "ERGEBNIS"}
            </h3>
            <div className="space-y-8 relative z-10">
                {impactOptions.map((impact, i) => (
                    <Reveal key={i} direction="left" delay={i * 0.15} distance={20}>
                        <div className="flex flex-col border-l-2 border-emerald-500/30 pl-5 hover:border-emerald-400 transition-colors">
                            <div className="flex items-baseline gap-0 mb-1">
                                {/^[–\-−]/.test(impact.value) ? (
                                    <>
                                        <span className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-emerald-400 mr-2">–</span>
                                        <span className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">{impact.value.replace(/^[–\-−]\s*/, '')}</span>
                                    </>
                                ) : (
                                    <span className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">{impact.value}</span>
                                )}
                            </div>
                            <div className="text-sm font-semibold text-[var(--foreground)]">{impact.label}</div>
                            {impact.context && (
                                <div className="text-xs text-[var(--muted-foreground)] mt-1">{impact.context}</div>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    )
}

function EndCTA({ ctaConfig, language }) {
    if (!ctaConfig) return null
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    return (
        <Reveal direction="up">
            <div className="mt-32 relative rounded-[2.5rem] bg-gradient-to-br from-[var(--accent)]/10 to-indigo-500/5 border border-[var(--accent)]/20 overflow-hidden px-6 py-20 text-center hover:border-[var(--accent)]/30 transition-all duration-500">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] to-indigo-500" />
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-indigo-500 flex items-center justify-center mb-8 shadow-lg">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight tracking-tight">{ctaConfig.title}</h2>
                    <p className="text-lg text-[var(--muted-foreground)] mb-10 max-w-2xl leading-relaxed">{ctaConfig.subtitle}</p>
                    <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[var(--accent)] to-indigo-500 rounded-full transition-all shadow-lg">
                            <span className="flex items-center gap-2">
                                {ctaConfig.button}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>
                </div>
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

                    {/* Header */}
                    <motion.div {...fadeUp(0.1)} className="max-w-4xl">
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-[var(--muted)] text-[var(--foreground)]/80 border border-[var(--border)] uppercase tracking-wider flex items-center gap-2">
                                <Layers className="w-3.5 h-3.5" />{study.industry}
                            </span>
                            <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-white border border-[var(--border)] text-[var(--foreground)]/8 text-[var(--foreground)] border border-[var(--foreground)]/15 uppercase tracking-wider flex items-center gap-2">
                                <Settings2 className="w-3.5 h-3.5" />{study.clientType}
                            </span>
                            <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-purple-50 text-purple-700 border border-purple-200 uppercase tracking-wider flex items-center gap-2">
                                <Target className="w-3.5 h-3.5" />{study.focusArea}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">{study.title}</h1>
                        {study.subtitle && (
                            <p className="text-xl md:text-2xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mb-16 font-medium">{study.subtitle}</p>
                        )}
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-8">

                        {/* Left column */}
                        <div className="lg:col-span-7 space-y-24">

                            {/* Challenge */}
                            <motion.section {...fadeUp(0.25)}>
                                <h3 className="text-sm flex items-center gap-3 font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-8">
                                    <span className="w-8 h-[1px] bg-[var(--border)]" />
                                    {labels.challenge || "AUSGANGSLAGE"}
                                </h3>
                                <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed font-medium">{study.challenge}</p>
                            </motion.section>

                            {/* Solution */}
                            <Reveal direction="up">
                                <section>
                                    <h3 className="text-sm flex items-center gap-3 font-bold tracking-widest text-[var(--foreground)] uppercase mb-8">
                                        <span className="w-8 h-[1px] bg-white border border-[var(--border)] text-[var(--foreground)]" />
                                        {labels.solution || "LÖSUNG"}
                                    </h3>
                                    {study.solutionBlocks ? (
                                        <div className="space-y-6">
                                            {study.solutionBlocks.map((block, i) => (
                                                <Reveal key={i} direction="up" delay={i * 0.12}>
                                                    <div className="flex gap-6 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-sm transition-all">
                                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-[var(--foreground)] mb-2">{block.title}</h4>
                                                            <p className="text-[var(--muted-foreground)] leading-relaxed">{block.desc}</p>
                                                        </div>
                                                    </div>
                                                </Reveal>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-[var(--foreground)]/80 leading-relaxed space-y-6 text-lg">
                                            {study.solution?.split('\n\n').map((paragraph, i) => {
                                                if (paragraph.startsWith('**') && paragraph.includes('**', 2)) {
                                                    const parts = paragraph.split('**')
                                                    return (
                                                        <div key={i} className="mb-6 p-6 rounded-2xl bg-white border border-[var(--border)]">
                                                            <strong className="block text-[var(--foreground)] text-xl mb-3 flex items-center gap-3">
                                                                <Zap className="w-5 h-5 text-[var(--foreground)]" />{parts[1]}
                                                            </strong>
                                                            <p className="text-[var(--muted-foreground)]">{parts[2]}</p>
                                                        </div>
                                                    )
                                                }
                                                return <p key={i}>{paragraph}</p>
                                            })}
                                        </div>
                                    )}
                                </section>
                            </Reveal>

                            {/* Process Flow */}
                            {study.processFlow && study.processFlow.length > 0 && (
                                <Reveal direction="up">
                                    <section>
                                        <h3 className="text-sm flex items-center gap-3 font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-8">
                                            <span className="w-8 h-[1px] bg-[var(--border)]" />
                                            {labels.processFlow || "ABLAUF IM ÜBERBLICK"}
                                        </h3>
                                        <div className="bg-[var(--muted)] p-8 rounded-[2rem] border border-[var(--border)]">
                                            <ProcessFlowDiagram steps={study.processFlow} />
                                        </div>
                                    </section>
                                </Reveal>
                            )}

                            {/* Implementation Steps */}
                            {study.implementationSteps && study.implementationSteps.length > 0 && (
                                <Reveal direction="up">
                                    <section>
                                        <h3 className="text-sm flex items-center gap-3 font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-8">
                                            <span className="w-8 h-[1px] bg-[var(--border)]" />
                                            {labels.implementation || "SO LIEF DIE UMSETZUNG"}
                                        </h3>
                                        <ImplementationCards steps={study.implementationSteps} />
                                    </section>
                                </Reveal>
                            )}
                        </div>

                        {/* Sidebar */}
                        <motion.div {...fadeUp(0.35)} className="lg:col-span-5 space-y-12">
                            <div className="sticky top-32 space-y-10">
                                <PremiumKPICard impactOptions={study.impactOptions} labels={labels} />

                                {study.automatedComponents && study.automatedComponents.length > 0 && (
                                    <div className="p-8 rounded-[2rem] bg-[var(--card)] border border-[var(--border)]">
                                        <h3 className="text-sm font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-6 flex items-center gap-2">
                                            <Bot className="w-4 h-4" />{labels.automatedComponents || "WAS AUTOMATISIERT WURDE"}
                                        </h3>
                                        <AutomatedBadges components={study.automatedComponents} />
                                    </div>
                                )}

                                {study.tools && study.tools.length > 0 && (
                                    <div className="p-8 rounded-[2rem] bg-[var(--card)] border border-[var(--border)]">
                                        <h3 className="text-sm font-bold tracking-widest text-[var(--muted-foreground)] uppercase mb-6 flex items-center gap-2">
                                            <Network className="w-4 h-4" />{labels.tools || "VERWENDETE TECHNOLOGIEN"}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {study.tools.map((tool, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--muted)] text-[var(--foreground)]/80 border border-[var(--border)]">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Feedback */}
                    <Reveal direction="up" className="mt-32 max-w-4xl mx-auto">
                        <h3 className="text-sm font-bold tracking-widest text-center text-[var(--muted-foreground)] uppercase mb-12">
                            {labels.feedback || "KUNDENFEEDBACK"}
                        </h3>
                        <blockquote className="relative p-10 md:p-16 rounded-[2.5rem] bg-[var(--card)] border border-[var(--border)] text-center shadow-sm">
                            <div className="absolute top-8 left-8 text-[120px] font-serif leading-none text-[var(--foreground)]/[0.05] select-none pointer-events-none">&ldquo;</div>
                            <p className="relative z-10 text-2xl md:text-4xl font-medium text-[var(--foreground)] italic leading-snug mb-12 tracking-tight">
                                &ldquo;{study.feedback.quote}&rdquo;
                            </p>
                            <footer className="relative z-10 flex flex-col items-center justify-center">
                                {study.feedback.image ? (
                                    <img src={study.feedback.image} alt={study.feedback.author} className="w-16 h-16 rounded-full object-cover mb-4 shadow-lg ring-2 ring-[var(--border)]" />
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-indigo-500 mb-4 shadow-lg flex items-center justify-center">
                                        <span className="text-xl font-bold text-white">{study.feedback.author.charAt(0)}</span>
                                    </div>
                                )}
                                <div className="text-center bg-[var(--muted)] px-6 py-2 rounded-full border border-[var(--border)]">
                                    <p className="font-bold text-[var(--foreground)]">{study.feedback.author}</p>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5 tracking-wide uppercase">{study.feedback.role}</p>
                                </div>
                            </footer>
                        </blockquote>
                    </Reveal>

                    <EndCTA ctaConfig={detailCta} language={language} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
