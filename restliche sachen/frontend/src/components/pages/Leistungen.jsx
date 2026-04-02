import { motion } from "framer-motion"
import { PageLayout, PageCTA } from "../ui/PageLayout"
import { useLanguage } from "../../lib/i18n"

/* â”€â”€â”€ Inline SVG Illustrations for each service â”€â”€â”€ */
function WorkflowIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-6">
            {/* Chat messages mockup */}
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
                <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-xs font-semibold text-[var(--foreground)]">Anna, MöbelDirekt</span>
                            <span className="text-[10px] text-[var(--muted-foreground)]">09:45 PM</span>
                        </div>
                        <div className="bg-white border border-[var(--border)] text-[var(--foreground)]/15 border border-[var(--foreground)]/20 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-[var(--foreground)]/80">
                            &ldquo;Wir möchten unsere Abläufe automatisieren. Könnt ihr helfen?&rdquo;
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-2.5 opacity-60">
                    <div className="w-8 h-8 rounded-full bg-[var(--muted)] shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-xs font-semibold text-[var(--muted-foreground)]">BringsAI System</span>
                        </div>
                        <div className="bg-[var(--muted)] border border-[var(--border)] rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-[var(--muted-foreground)]">
                            Workflow-Analyse gestartet âœ“
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function IntegrationIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-6">
            {/* Tool integration icons grid */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { color: "#4A90D9", path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                    { color: "#8B5CF6", path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                    { color: "#06B6D4", path: "M22 12h-4l-3 9L9 3l-3 9H2" },
                    { color: "#F59E0B", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
                    { color: "#EC4899", path: "M12 8V4H8 M12 4l8 8-8 8-8-8z" },
                    { color: "#10B981", path: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" },
                ].map((icon, i) => (
                    <div key={i} className="w-14 h-14 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center transition-all duration-300 hover:bg-[var(--muted)] hover:scale-110 hover:border-white/20">
                        <svg className="w-6 h-6" style={{ color: icon.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d={icon.path} />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    )
}

function LeadGenIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-6">
            <div className="flex flex-col gap-2.5 w-full max-w-[260px]">
                {[
                    { tool: "AirTable", action: "E-Mail an Nutzer senden", color: "#4A90D9", active: true },
                    { tool: "Gmail", action: "E-Mail verfassen", color: "#EA4335", active: false },
                    { tool: "Zoom", action: "Call planen", color: "#2D8CFF", active: false },
                    { tool: "Slack", action: "Team benachrichtigen", color: "#4A154B", active: false },
                ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${item.active ? 'bg-white border border-[var(--border)] text-[var(--foreground)]/15 border border-[var(--foreground)]/30' : 'bg-[var(--muted)] border border-[var(--border)]'}`} style={{ opacity: 1 - i * 0.15 }}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                            <svg className="w-3.5 h-3.5" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="m8 21 4-4 4 4"/><path d="M12 17V9"/>
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-[var(--foreground)]">{item.tool}</div>
                            <div className="text-[10px] text-[var(--muted-foreground)]">{item.action}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function AnalyticsIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-6">
            <div className="w-full max-w-[260px]">
                {/* Mini chart header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white border border-[var(--border)] text-[var(--foreground)]" />
                        <span className="text-xs text-[var(--muted-foreground)] font-medium">Nach BringsAI</span>
                    </div>
                </div>
                {/* Stat */}
                <div className="mb-4">
                    <span className="text-3xl font-bold text-[var(--foreground)]">87%</span>
                    <span className="text-xs text-green-400 ml-1">+</span>
                </div>
                {/* Bar chart */}
                <div className="flex items-end gap-1.5 h-20">
                    {[30, 45, 35, 55, 70, 85, 78, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm transition-all" style={{
                            height: `${h}%`,
                            background: i >= 5 ? 'linear-gradient(to top, var(--foreground), var(--foreground))' : 'rgba(255,255,255,0.1)',
                        }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ChatbotIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-6">
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
                {/* Customer message */}
                <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                        <div className="text-[10px] text-[var(--muted-foreground)] mb-1">Kundenanfrage</div>
                        <div className="bg-[var(--muted)] border border-[var(--border)] rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-[var(--foreground)]/80">
                            Wie sind eure Öffnungszeiten?
                        </div>
                    </div>
                </div>
                {/* Bot response */}
                <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground)] shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8V4H8"/><rect x="2" y="2" width="20" height="20" rx="5"/><path d="m2 12 5.1 5.1"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                    </div>
                    <div>
                        <div className="text-[10px] text-[var(--muted-foreground)] mb-1 text-right">Automatische Antwort</div>
                        <div className="bg-white border border-[var(--border)] text-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-[var(--foreground)]">
                            Wir sind rund um die Uhr für dich da. Sag uns, wie wir dir helfen können.
                        </div>
                    </div>
                </div>
                {/* Status */}
                <div className="flex items-center gap-1.5 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400/80 font-medium">24/7 Active</span>
                    <span className="flex items-center gap-0.5 ml-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-500" style={{ animation: 'typing-bounce 1.4s ease-in-out infinite', animationDelay: '0s' }} />
                        <span className="w-1 h-1 rounded-full bg-neutral-500" style={{ animation: 'typing-bounce 1.4s ease-in-out infinite', animationDelay: '0.2s' }} />
                        <span className="w-1 h-1 rounded-full bg-neutral-500" style={{ animation: 'typing-bounce 1.4s ease-in-out infinite', animationDelay: '0.4s' }} />
                    </span>
                </div>
            </div>
        </div>
    )
}

function DashboardIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-4">
            {/* Dashboard mockup */}
            <div className="w-full max-w-[300px] rounded-xl bg-[var(--muted)] border border-[var(--border)] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--border)]">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                        <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    </div>
                    <span className="text-[9px] text-[var(--muted-foreground)] ml-2">BringsAI Dashboard</span>
                </div>
                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-12 border-r border-[var(--border)] py-3 flex flex-col items-center gap-3">
                        {[
                            "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                            "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
                            "M3 3v18h18",
                            "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                        ].map((d, i) => (
                            <div key={i} className={`w-6 h-6 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white border border-[var(--border)] text-[var(--foreground)]/20' : 'bg-[var(--background)] hover:bg-[var(--muted)]'}`}>
                                <svg className={`w-3 h-3 ${i === 0 ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={d} />
                                </svg>
                            </div>
                        ))}
                    </div>
                    {/* Main area */}
                    <div className="flex-1 p-3 space-y-2">
                        {/* Mini cards */}
                        <div className="grid grid-cols-3 gap-1.5">
                            {[
                                { label: "Kunden", val: "248", color: "var(--foreground)" },
                                { label: "Offen", val: "12", color: "var(--foreground)" },
                                { label: "Erledigt", val: "89%", color: "#10B981" },
                            ].map((card, i) => (
                                <div key={i} className="rounded-lg bg-[var(--muted)] border border-[var(--border)] p-1.5 text-center">
                                    <div className="text-[8px] text-[var(--muted-foreground)]">{card.label}</div>
                                    <div className="text-xs font-bold" style={{ color: card.color }}>{card.val}</div>
                                </div>
                            ))}
                        </div>
                        {/* Mini table */}
                        <div className="rounded-lg bg-[var(--muted)] border border-[var(--border)] p-2">
                            {["Anfrage #412 â€“ Portal", "Anfrage #413 â€“ CRM", "Anfrage #414 â€“ Report"].map((row, i) => (
                                <div key={i} className={`flex items-center justify-between py-1 text-[8px] ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}>
                                    <span className="text-[var(--muted-foreground)]">{row}</span>
                                    <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${i === 2 ? 'bg-yellow-400/15 text-yellow-400' : 'bg-green-400/15 text-green-400'}`}>
                                        {i === 2 ? 'Offen' : 'âœ“'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const categoryIcons = {
    AUTOMATION: (
        <svg className="w-4 h-4 text-[var(--foreground)] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.2 4.2 4.2 4.2m3.2 3.2 4.2 4.2"/><path d="M1 12h6m6 0h6"/><path d="m4.2 19.8 4.2-4.2m3.2-3.2 4.2-4.2"/>
        </svg>
    ),
    INTEGRATION: (
        <svg className="w-4 h-4 text-[var(--foreground)] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
        </svg>
    ),
    GROWTH: (
        <svg className="w-4 h-4 text-[var(--foreground)] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>
        </svg>
    ),
    ANALYTICS: (
        <svg className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
        </svg>
    ),
    KONVERSATION: (
        <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
    ),
    CONVERSATION: (
        <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
    ),
    SYSTEME: (
        <svg className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
        </svg>
    ),
    SYSTEMS: (
        <svg className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
        </svg>
    ),
}

/* â”€â”€â”€ Service Block Component â”€â”€â”€ */
function ServiceBlock({ service, index, illustration }) {
    const isReversed = index % 2 !== 0
    const icon = categoryIcons[service.category] || categoryIcons.AUTOMATION

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 ${index > 0 ? 'border-t border-[var(--border)]' : ''}`}
        >
            {/* Content */}
            <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--foreground)] uppercase">
                    {service.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight">
                    {service.title}
                </h2>
                <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                    {service.desc}
                </p>
                {/* Bullet Points */}
                {service.bullets && service.bullets.length > 0 && (
                    <ul className="space-y-3 pt-2">
                        {service.bullets.map((bullet, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                className="flex items-start gap-3 text-[var(--foreground)]/80 text-sm leading-relaxed"
                            >
                                {icon}
                                <span>{bullet}</span>
                            </motion.li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Illustration */}
            <motion.div
                className={`${isReversed ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {illustration}
            </motion.div>
        </motion.div>
    )
}

/* â”€â”€â”€ Leistungen Page â”€â”€â”€ */
export function Leistungen() {
    const { t, language } = useLanguage()

    const content = t('page_leistungen')
    const servicesArr = Array.isArray(content.services) ? content.services : []

    const illustrations = [
        <WorkflowIllustration key="workflow" />,
        <IntegrationIllustration key="integration" />,
        <ChatbotIllustration key="chatbot" />,
        <AnalyticsIllustration key="analytics" />,
        <LeadGenIllustration key="leadgen" />,
        <DashboardIllustration key="dashboard" />
    ]

    return (
        <PageLayout
            title={content.seo_title}
            description={content.seo_desc}
            canonicalPath="/leistungen"
            h1={content.h1}
            breadcrumbs={[{ label: content.breadcrumb }]}
            maxWidth="max-w-5xl"
        >
            {/* Premium Hero Section */}
            <div className="mb-32 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-11/12 mb-12"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-[1.05] tracking-tight">
                        {content.hero_title}
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
                    <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        <p className="text-xl md:text-2xl text-[var(--muted-foreground)] leading-relaxed mb-10 font-medium">
                            {content.hero_subtitle}
                        </p>
                        
                        {content.hero_benefits && (
                            <ul className="space-y-4 mb-10 text-[var(--foreground)]/80">
                                {content.hero_benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-white border border-[var(--border)] text-[var(--foreground)]/10 flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <a
                            href={language === 'en' ? 'https://cal.com/bringsai/strategy-call' : 'https://cal.com/bringsai/erstgespraech'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-white border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--border)] border-0 rounded-full transition-all duration-300 group"
                        >
                            <span className="flex items-center gap-2">
                                {content.hero_cta || "Kostenlose Analyse anfragen"}
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </a>
                    </motion.div>

                    {/* Abstract Hero Graphic */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden md:flex items-center justify-center relative w-full aspect-square max-w-[420px] ml-auto shrink-0"
                    >
                        <div className="relative w-full h-full bg-[var(--muted)] border border-[var(--border)] rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl group hover:border-[var(--border)]/30 transition-colors duration-500">
                        <div className="flex justify-between items-start w-full">
                            <div className="w-14 h-14 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--border)]/50 group-hover:shadow-[0_0_20px_rgba(47,88,255,0.2)] transition-all duration-500">
                                <svg className="w-7 h-7 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/40" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                                <div className="w-3 h-3 rounded-full bg-green-400/40" />
                            </div>
                        </div>
                        <div className="space-y-4 my-auto">
                            <div className="h-4 w-3/4 bg-[var(--muted)] rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[var(--foreground)] to-transparent w-full origin-left animate-[pulse_3s_ease-in-out_infinite]" />
                            </div>
                            <div className="h-4 w-1/2 bg-[var(--muted)] rounded-full" />
                            <div className="h-4 w-5/6 bg-[var(--muted)] rounded-full" />
                        </div>
                        <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)]">
                            <div className="w-12 h-12 rounded-full bg-[var(--muted)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </div>
                            <div>
                                <div className="h-3 w-24 bg-[var(--muted)] rounded-full mb-2" />
                                <div className="h-2 w-16 bg-[var(--muted)] rounded-full" />
                            </div>
                        </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Service Blocks with Mid-CTA injected */}
            <div className="space-y-0 relative z-10">
                {servicesArr.map((service, i) => (
                    <div key={i}>
                        <ServiceBlock
                            service={service}
                            index={i}
                            illustration={illustrations[i] || illustrations[0]}
                        />
                    </div>
                ))}
            </div>

            {/* Trust Section */}
            {content.trust_section && (
                <div className="my-32 relative z-10">
                    <div className="text-center mb-12">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] uppercase">
                            {content.trust_section.title}
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.trust_section.items.map((item, i) => {
                            // Quick icon mapping
                            const icons = {
                                "Plug": <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22v-5M9 7V2h6v5M9 17v-5h6v5z"/></svg>,
                                "ShieldCheck": <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
                                "Blocks": <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>,
                                "Settings": <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            }
                            return (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center p-6 lg:p-8 rounded-[2rem] bg-[var(--muted)] border border-[var(--border)] hover:border-[var(--border)]/30 hover:bg-[var(--muted)] transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]/80 flex items-center justify-center mb-5 shadow-sm">
                                        {icons[item.icon]}
                                    </div>
                                    <span className="font-bold text-[var(--foreground)] tracking-tight">{item.title}</span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* End CTA Block (using the custom one from the old page, modified slightly for premium look) */}
            <div className="relative mb-8">
               <PageCTA
                   title={content.cta_title}
                   subtitle={content.cta_subtitle}
                   buttonText={content.cta_button}
               />
            </div>
        </PageLayout>
    )
}
