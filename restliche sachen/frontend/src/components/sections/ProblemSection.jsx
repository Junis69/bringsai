import { motion } from "framer-motion"
import { XCircle, CheckCircle2, ArrowDown, Mail, RefreshCw, Users, Zap, Send, Calendar } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

const problemData = [
    {
        icon: Mail,
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
        glowColor: "rgba(239,68,68,0.15)",
    },
    {
        icon: RefreshCw,
        color: "from-red-500 to-rose-600",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
        glowColor: "rgba(239,68,68,0.15)",
    },
    {
        icon: Users,
        color: "from-rose-500 to-red-600",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
        glowColor: "rgba(239,68,68,0.15)",
    },
]

const solutionData = [
    {
        icon: Zap,
        color: "from-emerald-500 to-green-600",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        glowColor: "rgba(16,185,129,0.15)",
    },
    {
        icon: Send,
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        glowColor: "rgba(16,185,129,0.15)",
    },
    {
        icon: Calendar,
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        glowColor: "rgba(16,185,129,0.15)",
    },
]

function ProblemCard({ item, style, index }) {
    const Icon = style.icon
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
            }}
            className="group relative"
        >
            <div 
                className={`relative p-6 sm:p-8 rounded-2xl ${style.bgColor} border ${style.borderColor} transition-all duration-500 hover:scale-[1.02] overflow-hidden`}
            >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.color}`} />
                
                {/* Hover glow */}
                <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at 50% 50%, ${style.glowColor}, transparent 60%)`,
                    }}
                />

                {/* Icon */}
                <div className={`relative z-10 mb-5 w-12 h-12 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-3 tracking-tight">
                        {item.title}
                    </h3>
                    <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function SolutionCard({ item, style, index }) {
    const Icon = style.icon
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
            }}
            className="group relative"
        >
            <div 
                className={`relative p-6 sm:p-8 rounded-2xl ${style.bgColor} border ${style.borderColor} transition-all duration-500 hover:scale-[1.02] overflow-hidden`}
            >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.color}`} />
                
                {/* Hover glow */}
                <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at 50% 50%, ${style.glowColor}, transparent 60%)`,
                    }}
                />

                {/* Icon */}
                <div className={`relative z-10 mb-5 w-12 h-12 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-3 tracking-tight">
                        {item.title}
                    </h3>
                    <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
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

    return (
        <section className="py-24 sm:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Subtle background gradient */}
            <div 
                className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(244,63,94,0.04) 0%, transparent 50%)',
                }}
            />
            
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                
                {/* ==================== PROBLEM SECTION ==================== */}
                <div className="mb-20 sm:mb-28">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
                                style={problemData[index] || problemData[0]}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* ==================== VISUAL CONNECTOR ==================== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-20 sm:mb-28"
                >
                    {/* Animated gradient line */}
                    <div className="w-px h-20 bg-gradient-to-b from-rose-500/40 via-purple-500/50 to-blue-500/40" />
                    
                    {/* Center arrow with glow */}
                    <div className="relative my-4">
                        <div 
                            className="absolute inset-0 rounded-full blur-2xl opacity-70"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.4))',
                            }}
                        />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                            <ArrowDown className="w-7 h-7 text-white" />
                        </div>
                    </div>

                    {/* Line continuing down */}
                    <div className="w-px h-20 bg-gradient-to-b from-blue-500/40 via-cyan-500/30 to-transparent" />
                </motion.div>

                {/* ==================== SOLUTION SECTION ==================== */}
                <div className="relative">
                    {/* Gradient glow for solution area */}
                    <div 
                        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 50%)',
                        }}
                    />

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-12 sm:mb-16 relative z-10"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight leading-tight">
                            {t('problem_section.solution_title')}
                        </h2>
                    </motion.div>

                    {/* Solution cards grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10">
                        {solutionItems.map((item, index) => (
                            <SolutionCard 
                                key={index} 
                                item={item} 
                                style={solutionData[index] || solutionData[0]}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
