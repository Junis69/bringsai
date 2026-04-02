import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./Button"
import { cn } from "../../lib/utils"
import { useLanguage } from "../../lib/i18n"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { t, language, switchLanguage } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    const location = useLocation()
    const navigate = useNavigate()

    const isVisibleRef = useRef(isVisible)
    const isScrolledRef = useRef(isScrolled)
    const mobileMenuOpenRef = useRef(mobileMenuOpen)

    useEffect(() => {
        isVisibleRef.current = isVisible
        isScrolledRef.current = isScrolled
        mobileMenuOpenRef.current = mobileMenuOpen
    }, [isVisible, isScrolled, mobileMenuOpen])

    useEffect(() => {
        let lastScrollY = window.scrollY
        let ticking = false

        const updateScrollDir = () => {
            const currentScrollY = Math.max(0, window.scrollY)

            if (currentScrollY < 50) {
                if (!isVisibleRef.current) setIsVisible(true)
                if (isScrolledRef.current) setIsScrolled(false)
                lastScrollY = currentScrollY
                ticking = false
                return
            }

            if (!isScrolledRef.current) setIsScrolled(true)

            const delta = currentScrollY - lastScrollY

            if (delta > 15 && currentScrollY > 150) {
                if (isVisibleRef.current) setIsVisible(false)
                if (mobileMenuOpenRef.current) setMobileMenuOpen(false)
            } else if (delta < -15) {
                if (!isVisibleRef.current) setIsVisible(true)
            }

            lastScrollY = currentScrollY
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir)
                ticking = true
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location.pathname])

    const scrollToSection = (id) => {
        const isHomePage = location.pathname === '/' || location.pathname === '/en'

        if (!isHomePage) {
            navigate(language === 'en' ? '/en' : '/')
            setTimeout(() => {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        } else {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        setMobileMenuOpen(false)
    }

    const navItems = [
        {
            label: t('nav.process') || "Zusammenarbeit",
            action: () => scrollToSection('prozess'),
            isPage: false
        },
        {
            label: t('nav.services') || "Leistungen",
            action: () => scrollToSection('loesungen'),
            isPage: false
        },
        {
            label: t('nav.caseStudies') || "Fallstudien",
            action: () => scrollToSection('fallstudien'),
            isPage: false
        },
        {
            label: t('nav.pricing') || "Pakete",
            action: () => scrollToSection('pakete'),
            isPage: false
        },
        {
            label: t('nav.faq') || "FAQ",
            action: () => scrollToSection('faq'),
            isPage: false
        },
        {
            label: t('nav.about') || "Über uns",
            href: language === 'en' ? '/en/about' : '/ueber-uns',
            isPage: true
        },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--border)]",
                "bg-[var(--background)]/80 backdrop-blur-xl transition-[background-color,backdrop-filter] duration-300",
                "py-3 sm:py-4 md:py-5"
            )}
        >
            <div className="mx-auto max-w-[90rem] px-6 md:px-8 xl:px-12 flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex-1 flex justify-start">
                <Link to={language === 'en' ? '/en' : '/'} className="flex items-center gap-3 group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-80">
                    <img
                        src="/BringsAI.png"
                        alt="BringsAI"
                        className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300"
                    />
                    <span className="text-lg lg:text-xl font-bold tracking-tight hidden sm:block text-[var(--foreground)]">
                        BringsAI
                    </span>
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden items-center gap-12 min-[1150px]:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                {navItems.map((item) => {
                    if (item.isPage) {
                        return (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                            >
                                {item.label}
                            </Link>
                        )
                    } else {
                        return (
                            <button
                                key={item.label}
                                onClick={item.action}
                                className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                            >
                                {item.label}
                            </button>
                        )
                    }
                })}
            </div>

            {/* CTA and Language */}
            <div className="hidden min-[1150px]:flex flex-1 justify-end items-center gap-6">
                <div className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--muted)]/50 p-1">
                    <button
                        onClick={() => switchLanguage('de')}
                        aria-label="Deutsch"
                        title="Deutsch"
                        className={cn("flex w-8 h-8 items-center justify-center rounded-full transition-all duration-300", language === 'de' ? "bg-[var(--border-light)] shadow-sm ring-1 ring-white/10" : "opacity-60 hover:opacity-100 hover:bg-white/5")}
                    >
                        <svg className="w-4 h-3 rounded-[2px] shadow-sm" viewBox="0 0 640 480" aria-hidden="true" preserveAspectRatio="none">
                            <rect width="640" height="160" fill="#000" />
                            <rect y="160" width="640" height="160" fill="#D00" />
                            <rect y="320" width="640" height="160" fill="#FFCE00" />
                        </svg>
                    </button>
                    <button
                        onClick={() => switchLanguage('en')}
                        aria-label="English"
                        title="English"
                        className={cn("flex w-8 h-8 items-center justify-center rounded-full transition-all duration-300", language === 'en' ? "bg-[var(--border-light)] shadow-sm ring-1 ring-white/10" : "opacity-60 hover:opacity-100 hover:bg-white/5")}
                    >
                        <svg className="w-4 h-3 rounded-[2px] shadow-sm" viewBox="0 0 60 30" aria-hidden="true" preserveAspectRatio="none">
                            <clipPath id="t"><rect width="30" height="15" /></clipPath>
                            <rect width="60" height="30" fill="#012169" />
                            <path d="M0 0v2.5L27.5 15 0 27.5V30h2.5L30 17.5 57.5 30H60v-2.5L32.5 15 60 2.5V0h-2.5L30 12.5 2.5 0z" fill="#C8102E" />
                            <path d="M25 0v30h10V0zM0 10v10h60V10z" fill="#fff" />
                            <path d="M27 0v30h6V0zM0 12v6h60v-6z" fill="#C8102E" />
                        </svg>
                    </button>
                </div>
                <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-[var(--accent)] border border-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)] transition-all duration-300 group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-1.5">
                        {t('nav.cta')}
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                </a>
            </div>

            {/* Mobile Toggle */}
            <div className="min-[1150px]:hidden flex-1 flex justify-end items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={mobileMenuOpen}>
                    {mobileMenuOpen ? <X className="h-5 w-5 text-[var(--foreground)]" /> : <Menu className="h-5 w-5 text-[var(--foreground)]" />}
                </Button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[4.5rem] sm:top-[5.5rem] md:top-[6rem] left-0 right-0 rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 p-6 shadow-lg backdrop-blur-xl min-[1150px]:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => {
                                if (item.isPage) {
                                    return (
                                        <Link
                                            key={item.label}
                                            to={item.href}
                                            className="text-lg font-medium text-[var(--foreground)]"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <button
                                            key={item.label}
                                            onClick={item.action}
                                            className="text-left text-lg font-medium text-[var(--foreground)]"
                                        >
                                            {item.label}
                                        </button>
                                    )
                                }
                            })}
                            <div className="flex items-center gap-2 my-2 mt-4 pt-4 border-t border-[var(--border)]">
                                <button
                                    onClick={() => switchLanguage('de')}
                                    className={cn("flex-1 py-2 flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors", language === 'de' ? "bg-[var(--border-light)] text-[var(--foreground)]" : "bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]")}
                                >
                                    Deutsch
                                </button>
                                <button
                                    onClick={() => switchLanguage('en')}
                                    className={cn("flex-1 py-2 flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors", language === 'en' ? "bg-[var(--border-light)] text-[var(--foreground)]" : "bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]")}
                                >
                                    English
                                </button>
                            </div>
                            <a href={calUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]">{t('nav.cta')}</Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </nav>
    )
}
