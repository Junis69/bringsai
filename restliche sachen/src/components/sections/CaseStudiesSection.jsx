import { useLanguage } from "../../lib/i18n"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Reveal } from "../animations/Reveal"

export function CaseStudiesSection() {
    const { t, language } = useLanguage()

    const cases = t('caseStudies.cases')
    if (!Array.isArray(cases)) return null

    const cardStyles = [
        { bg: "bg-[var(--muted)]", icon: "/logoipsum-371.png" },
        { bg: "bg-[var(--muted)]", icon: "/logoipsum-376.png" },
        { bg: "bg-[var(--muted)]", icon: "/logoipsum-381.png" },
        { bg: "bg-[var(--muted)]", icon: "/logoipsum-392.png" },
    ]

    const directions = ["left", "up", "right", "up"]
    const pathPrefix = language === 'en' ? '/en/case-studies' : '/fallstudien'

    return (
        <section id="fallstudien" className="relative py-24 pb-32 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-6">

                <Reveal direction="down" className="mb-16 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 tracking-tight leading-tight">
                        {t('caseStudies.sectionTitle')}
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] whitespace-pre-line">
                        {t('caseStudies.sectionSubtitle')}
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cases.map((study, idx) => {
                        const style = cardStyles[idx % cardStyles.length]
                        return (
                            <Reveal key={study.id} direction={directions[idx % directions.length]} delay={idx * 0.15}>
                                <Link
                                    to={`${pathPrefix}/${study.id}`}
                                    className="block h-full group"
                                >
                                    <div className="relative flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden cursor-pointer hover:border-[var(--border-hover)] hover:shadow-md transition-all duration-500">
                                        {/* Top visual part */}
                                        <div className={`h-64 flex items-center justify-center ${style.bg} border-b border-[var(--border)] transition-all duration-500 group-hover:scale-[1.02]`}>
                                            <div className="relative z-10">
                                                <img
                                                    src={style.icon}
                                                    alt="Case Study Logo"
                                                    className="h-10 w-auto object-contain opacity-100"
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom text part */}
                                        <div className="p-8 flex-grow flex flex-col bg-[var(--card)] relative z-20">
                                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--muted-foreground)] mb-3">
                                                {study.industry}
                                            </span>
                                            {study.metric && (
                                                <p className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 leading-snug">
                                                    {study.metric}
                                                </p>
                                            )}
                                            <p className="text-[15px] font-medium text-[var(--muted-foreground)] leading-relaxed mb-4">
                                                {study.title}
                                            </p>
                                            <div className="mt-auto flex items-center justify-end">
                                                <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
