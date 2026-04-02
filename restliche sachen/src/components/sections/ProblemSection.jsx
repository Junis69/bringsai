import { Reveal } from "../animations/Reveal"
import { X, Check } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

export function ProblemSection() {
    const { t } = useLanguage()
    const problems = t('problem_section.problems')
    const solutions = t('problem_section.solutions')

    return (
        <section className="px-8 md:px-6 py-20 sm:py-24 bg-[var(--section-alt)] relative">
            <div className="mx-auto max-w-6xl">
                <Reveal direction="up" className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl mb-4">
                        {t('problem_section.title')}
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Problem Card */}
                    <Reveal
                        direction="left"
                        className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 shadow-sm flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">{t('problem_section.card1_title')}</h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {problems.map((item, i) => (
                                <Reveal
                                    key={i}
                                    direction="left"
                                    delay={0.25 + i * 0.12}
                                    className="flex items-center gap-3 text-[var(--foreground)]/80"
                                >
                                    <X className="h-4 w-4 text-red-400 shrink-0" strokeWidth={2.5} />
                                    <span>{item}</span>
                                </Reveal>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-[var(--border)]">
                            <p className="font-semibold text-[var(--foreground)] leading-relaxed whitespace-pre-wrap">
                                {t('problem_section.card1_result')}
                            </p>
                        </div>
                    </Reveal>

                    {/* Solution Card */}
                    <Reveal
                        direction="right"
                        delay={0.2}
                        className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--card)] p-8 sm:p-10 shadow-sm flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">{t('problem_section.card2_title')}</h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {solutions.map((item, i) => (
                                <Reveal
                                    key={i}
                                    direction="right"
                                    delay={0.35 + i * 0.12}
                                    className="flex items-center gap-3 text-[var(--foreground)]/80"
                                >
                                    <Check className="h-4 w-4 text-[var(--accent)] shrink-0" strokeWidth={2.5} />
                                    <span>{item}</span>
                                </Reveal>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-[var(--border)]">
                            <p className="font-semibold text-[var(--foreground)] leading-relaxed whitespace-pre-wrap">
                                {t('problem_section.card2_result')}
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
