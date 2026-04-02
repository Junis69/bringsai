import { useLanguage } from "../../lib/i18n"
import { Reveal } from "../animations/Reveal"

/* ─── Inline SVG Illustrations ─── */
function ChatbotIllustration() {
    return (
        <div className="relative w-full h-40 flex items-center justify-center overflow-hidden" aria-hidden="true">
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
                {/* Incoming message */}
                <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-[var(--muted)] border border-[var(--border)] shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <div className="bg-[var(--muted)] border border-[var(--border)] rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-[var(--foreground)] max-w-[140px]">
                        Wie ist der Status?
                    </div>
                </div>
                {/* Auto response */}
                <div className="flex items-start gap-2 self-end flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[var(--foreground)] shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 8V4H8" /><rect x="2" y="2" width="20" height="20" rx="5" /><path d="m2 12 5.1 5.1" /><path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                    </div>
                    <div className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-[var(--foreground)] max-w-[140px]">
                        Automatisch bearbeitet ✓
                    </div>
                </div>
                {/* Status indicator */}
                <div className="flex items-center gap-1.5 self-end mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-green-600 font-medium">Live</span>
                </div>
            </div>
        </div>
    )
}

function WorkflowIllustration() {
    return (
        <div className="relative w-full h-40 flex items-center justify-center overflow-hidden" aria-hidden="true">
            <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                        </svg>
                    </div>
                    <svg className="w-6 h-4 text-[var(--border)]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M0 8h20M16 3l5 5-5 5" />
                    </svg>
                    <div className="w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]/10 border border-[var(--foreground)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /><path d="m4.2 4.2 4.2 4.2m3.2 3.2 4.2 4.2" /><path d="M1 12h6m6 0h6" /><path d="m4.2 19.8 4.2-4.2m3.2-3.2 4.2-4.2" />
                        </svg>
                    </div>
                    <svg className="w-6 h-4 text-[var(--border)]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M0 8h20M16 3l5 5-5 5" />
                    </svg>
                    <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center gap-8 text-[10px] font-medium">
                    <span className="text-[var(--muted-foreground)]">Dateneingabe</span>
                    <span className="text-[var(--foreground)]">Abstimmung</span>
                    <span className="text-green-600">Erledigt</span>
                </div>
                {/* Progress bar */}
                <div className="w-full max-w-[180px] h-1.5 rounded-full bg-[var(--muted)] overflow-hidden mt-1">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: '75%' }} />
                </div>
            </div>
        </div>
    )
}

function OrganizeIllustration() {
    return (
        <div className="relative w-full h-40 flex items-center justify-center overflow-hidden" aria-hidden="true">
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
                {[
                    { label: "Neue Anfrage", color: "var(--foreground)", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
                    { label: "Formular", color: "#7c3aed", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" },
                    { label: "Team-Info", color: "#0ea5e9", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-[var(--card)] border border-[var(--border)] px-3 py-2 transition-all duration-300 hover:shadow-sm">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}10` }}>
                            <svg className="w-3.5 h-3.5" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d={item.icon} />
                            </svg>
                        </div>
                        <span className="text-xs text-[var(--foreground)] font-medium">{item.label}</span>
                        <div className="ml-auto">
                            <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ─── Feature Card Component ─── */
function BentoCard({ feature, index, illustration }) {
    const direction = index === 0 ? "left" : index === 1 ? "up" : "right"
    return (
        <Reveal direction={direction} delay={index * 0.18}>
            <div
                className="group relative h-full flex flex-col p-6 sm:p-8 md:p-10 transition-all duration-300 bg-[var(--card)] border border-[var(--border)] overflow-hidden rounded-2xl hover:border-[var(--border-hover)] hover:shadow-md"
            >
                {/* Illustration */}
                <div className="mb-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden">
                    {illustration}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="mb-3 text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors">
                        {feature.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">
                        {feature.description}
                    </p>
                </div>
            </div>
        </Reveal>
    )
}

/* ─── Features Section ─── */
export function Features() {
    const { t } = useLanguage()
    const itemsData = t('features.items')
    const itemsArr = Array.isArray(itemsData) ? itemsData : []

    const illustrations = [
        <ChatbotIllustration key="chat" />,
        <WorkflowIllustration key="workflow" />,
        <OrganizeIllustration key="organize" />,
    ]

    const features = itemsArr.map((item) => ({
        title: item.title,
        description: item.desc,
    }))

    return (
        <section id="services" className="px-4 sm:px-8 md:px-6 py-20 sm:py-32 bg-[var(--section-alt)] relative">
            <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <Reveal direction="down">
                        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-[var(--foreground)]">
                            {t('features.title')}
                        </h2>
                    </Reveal>
                    {t('features.subtitle') && (
                        <Reveal direction="down" delay={0.15}>
                            <p className="text-xl text-[var(--muted-foreground)]">
                                {t('features.subtitle')}
                            </p>
                        </Reveal>
                    )}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature, i) => (
                        <BentoCard
                            key={i}
                            feature={feature}
                            index={i}
                            illustration={illustrations[i]}
                        />
                    ))}
                </div>

                {/* GDPR Block */}
                <Reveal direction="up" delay={0.45} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-12 text-center relative overflow-hidden hover:shadow-sm transition-shadow duration-500">
                    <div className="relative z-10">
                        <div className="relative">
                            <div className="relative z-10 h-16 w-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center border border-[var(--accent)]/20 mx-auto mb-6">
                                <svg className="h-8 w-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">{t('features.privacy.title')}</h3>
                        <p className="text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                            {t('features.privacy.desc')}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
