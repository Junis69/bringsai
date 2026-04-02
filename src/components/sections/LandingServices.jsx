import { useLanguage } from "../../lib/i18n"
import { ArrowRight, Bot, Workflow, Network, Plug } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal } from "../animations/Reveal"

const ICONS = [Bot, Workflow, Network, Plug]

const CARD_ACCENTS = [
    { icon: "text-[#3b82f6]", iconBg: "bg-[#3b82f6]/10 border-[#3b82f6]/20", border: "hover:border-[#3b82f6]/30", topBar: "bg-[#3b82f6]" },
    { icon: "text-[#8b5cf6]", iconBg: "bg-[#8b5cf6]/10 border-[#8b5cf6]/20", border: "hover:border-[#8b5cf6]/30", topBar: "bg-[#8b5cf6]" },
    { icon: "text-[#10b981]", iconBg: "bg-[#10b981]/10 border-[#10b981]/20", border: "hover:border-[#10b981]/30", topBar: "bg-[#10b981]" },
    { icon: "text-[#f59e0b]", iconBg: "bg-[#f59e0b]/10 border-[#f59e0b]/20", border: "hover:border-[#f59e0b]/30", topBar: "bg-[#f59e0b]" },
]

export function LandingServices() {
    const { t, language } = useLanguage()
    const content = t('landing_services')

    if (!content) return null;

    return (
        <section id="leistungen" className="py-24 relative z-10 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-8 md:px-6 relative z-10">
                <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--foreground)]">
                        {content.title}
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] leading-relaxed font-medium">
                        {content.subtitle}
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {content.cards.map((card, idx) => {
                        const Icon = ICONS[idx % ICONS.length]
                        const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length]
                        const directions = ["left", "up", "right", "up"]

                        return (
                            <Reveal key={idx} direction={directions[idx]} delay={idx * 0.18}>
                                <div className={`group relative p-8 md:p-10 rounded-2xl bg-[var(--card)] border border-[var(--border)] ${accent.border} hover:shadow-md transition-all duration-500 overflow-hidden flex flex-col h-full`}>

                                    {/* Colored top accent bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-[3px] ${accent.topBar} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                    <div className={`w-16 h-16 rounded-2xl ${accent.iconBg} border flex items-center justify-center mb-8 relative z-10 group-hover:shadow-sm transition-all`}>
                                        <Icon className={`w-8 h-8 ${accent.icon} transition-colors`} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 relative z-10 tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-lg text-[var(--muted-foreground)] leading-relaxed relative z-10">
                                        {card.desc}
                                    </p>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>

                <Reveal direction="up" delay={0.2}>
                    <div className="mt-20 text-center">
                        <Link
                            to={language === 'en' ? "/en/services" : "/leistungen"}
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-[var(--accent)] border border-[var(--accent)] rounded-full overflow-hidden transition-all hover:bg-[var(--accent-hover)] hover:shadow-md group"
                        >
                            <span className="relative flex items-center gap-2">
                                {content.link_text}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
