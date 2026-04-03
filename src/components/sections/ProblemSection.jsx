import { motion } from "framer-motion"
import { XCircle, CheckCircle2, ArrowDown, Mail, RefreshCw, Users, Zap, Send, Calendar } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

// Premium dark card - Problem cards
function ProblemCard({ item, icon: Icon, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
                duration: 1.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative h-full"
        >
            <div className="relative h-full rounded-2xl bg-[#0c0c14] border border-white/[0.06] overflow-hidden transition-all duration-500 group-hover:border-rose-500/20 group-hover:translate-y-[-2px]">
                {/* Top accent line */}
                <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-rose-500/25 to-transparent" />
                
                {/* Subtle inner highlight */}
                <div 
                    className="absolute top-0 left-0 w-full h-32 opacity-30 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(244,63,94,0.04) 0%, transparent 100%)',
                    }}
                />
                
                <div className="relative z-10 p-6 sm:p-8">
                    {/* Icon badge */}
                    <div className="relative mb-6">
                        <div 
                            className="w-11 h-11 rounded-xl flex items-center justify-center border border-rose-500/15 bg-rose-500/[0.08]"
                        >
                            <Icon className="w-5 h-5 text-rose-400" strokeWidth={1.8} />
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-3 tracking-tight leading-snug">
                        {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

// Premium dark card - Solution cards
function SolutionCard({ item, icon: Icon, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
                duration: 1.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative h-full"
        >
            <div className="relative h-full rounded-2xl bg-[#0c0c14] border border-white/[0.06] overflow-hidden transition-all duration-500 group-hover:border-emerald-500/20 group-hover:translate-y-[-2px]">
                {/* Top accent line */}
                <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
                
                {/* Subtle inner highlight */}
                <div 
                    className="absolute top-0 left-0 w-full h-32 opacity-30 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(16,185,129,0.04) 0%, transparent 100%)',
                    }}
                />
                
                <div className="relative z-10 p-6 sm:p-8">
                    {/* Icon badge */}
                    <div className="relative mb-6">
                        <div 
                            className="w-11 h-11 rounded-xl flex items-center justify-center border border-emerald-500/15 bg-emerald-500/[0.08]"
                        >
                            <Icon className="w-5 h-5 text-emerald-400" strokeWidth={1.8} />
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-3 tracking-tight leading-snug">
                        {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export function ProblemSection() {
    const { t } = useLanguage()
    
    const problemItems = t('problem_section.problem_items') || []
    const solutionItems = t('problem_section.solution_items') || []

    const problemIcons = [Mail, RefreshCw, Users]
    const solutionIcons = [Zap, Send, Calendar]

    return (
        <section className="py-24 sm:py-32 bg-[var(--background)] relative overflow-hidden" data-testid="problem-section">
            
            {/* Clean subtle vignette - top warm */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none opacity-60"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(244,63,94,0.03) 0%, transparent 70%)',
                }}
            />

            {/* Clean subtle vignette - bottom cool */}
            <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none opacity-60"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(16,185,129,0.03) 0%, transparent 70%)',
                }}
            />
            
            <div className="mx-auto max-w-6xl px-6 sm:px-8 relative z-10">
                
                {/* ==================== PROBLEM SECTION ==================== */}
                <div className="mb-16 sm:mb-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight leading-tight">
                            {t('problem_section.problem_title')}
                        </h2>
                    </motion.div>

                    {/* Problem cards grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {problemItems.map((item, index) => (
                            <ProblemCard 
                                key={index} 
                                item={item} 
                                icon={problemIcons[index] || Mail}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* ==================== SOLUTION SECTION ==================== */}
                <div className="relative">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight leading-tight">
                            {t('problem_section.solution_title')}
                        </h2>
                    </motion.div>

                    {/* Solution cards grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {solutionItems.map((item, index) => (
                            <SolutionCard 
                                key={index} 
                                item={item} 
                                icon={solutionIcons[index] || Zap}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
