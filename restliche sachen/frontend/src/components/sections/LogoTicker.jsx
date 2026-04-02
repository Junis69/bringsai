import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../../lib/i18n"

const ALL_LOGOS = [
    "/logoipsum-371.png",
    "/logoipsum-376.png",
    "/logoipsum-377.png",
    "/logoipsum-381.png",
    "/logoipsum-392.png",
    "/logoipsum-399.png",
    "/logoipsum-405.png",
    "/logoipsum-424.png",
]

export function LogoTicker() {
    const { t, language } = useLanguage()
    const [logos, setLogos] = useState([...ALL_LOGOS])
    const [isVisible, setIsVisible] = useState(true)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        let intervalId;
        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                setIsVisible(false)
                setTimeout(() => {
                    setLogos(prev => [...prev].sort(() => 0.5 - Math.random()))
                    setIsVisible(true)
                }, 500)
            }, 4000)
        }, 2000)

        return () => {
            clearTimeout(timeoutId)
            if (intervalId) clearInterval(intervalId)
        }
    }, [])

    const buttonText = language === 'en' ? 'See our clients' : 'Siehe unsere Kunden'

    return (
        <section className="relative pt-0 pb-20 overflow-hidden bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-8 md:px-6 flex flex-col items-center relative z-10">
                <p className="text-[var(--muted-foreground)] font-medium text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-center px-2">
                    {t('logoTicker.title')}
                </p>

                <div
                    className="w-full flex justify-center relative"
                    onMouseEnter={() => setShowButton(true)}
                    onMouseLeave={() => setShowButton(false)}
                >
                    <div className="w-full max-w-4xl min-h-[350px] sm:min-h-[160px] flex justify-center items-center overflow-hidden">
                        <motion.div 
                            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 sm:gap-8 md:gap-16 w-full justify-items-center items-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {logos.map((logoUrl, i) => (
                                <div
                                    key={`${logoUrl}-${i}`}
                                    className="flex items-center justify-center w-20 h-16 sm:w-32 transition-all duration-300"
                                >
                                    <img
                                        src={logoUrl}
                                        alt="Company Logo"
                                        className="max-w-full max-h-full object-contain transition-all duration-300 invert opacity-50 hover:opacity-80"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Hover Button */}
                    <AnimatePresence>
                        {showButton && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20"
                            >
                                <a
                                    href="#fallstudien"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        const el = document.getElementById('fallstudien')
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }}
                                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:shadow-md transition-all shadow-sm"
                                >
                                    {buttonText}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
