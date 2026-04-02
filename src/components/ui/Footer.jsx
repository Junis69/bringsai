import { Link, useNavigate, useLocation } from "react-router-dom"
import { routeMap } from "../../lib/routes"
import { useLanguage } from "../../lib/i18n"
import { Reveal } from "../animations/Reveal"

function ScrollLink({ to, children }) {
    const navigate = useNavigate()
    const location = useLocation()

    function scrollToSection(sectionId) {
        const el = document.getElementById(sectionId)
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    function handleClick(e) {
        e.preventDefault()
        const sectionId = to.replace("#", "")

        if (location.pathname === "/" || location.pathname === "/en") {
            scrollToSection(sectionId)
        } else {
            navigate(location.pathname.startsWith('/en') ? "/en" : "/")
            setTimeout(() => {
                scrollToSection(sectionId)
            }, 300)
        }
    }

    return (
        <a href={to} onClick={handleClick} className="hover:text-[var(--foreground)] transition-colors cursor-pointer">
            {children}
        </a>
    )
}

export function Footer() {
    const currentYear = new Date().getFullYear()
    const { t, language } = useLanguage()

    return (
        <footer className="bg-[var(--background)] pt-0 pb-16 text-sm text-[var(--muted-foreground)] relative z-10" data-testid="footer">
            {/* Divider line at the very top of the footer */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-80 mb-16" />
            <div className="mx-auto max-w-6xl px-8 md:px-6">
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

                    {/* Logo + Description */}
                    <Reveal direction="left" delay={0}>
                        <div className="flex flex-col gap-4 max-w-sm">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/BringsAI.png"
                                    alt="BringsAI"
                                    className="h-12 w-auto"
                                    loading="lazy"
                                    width="48"
                                    height="48"
                                />
                                <span className="text-lg font-bold text-[var(--foreground)]">
                                    BringsAI
                                </span>
                            </div>
                            <p className="text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">
                                {t('footer.description')}
                            </p>
                        </div>
                    </Reveal>

                    {/* Navigation Columns */}
                    <Reveal direction="up" delay={0.15}>
                        <div className="grid grid-cols-2 gap-8 lg:gap-16">
                            {/* Explore */}
                            <nav aria-label="Explore">
                                <h4 className="text-[var(--foreground)] font-semibold mb-4 text-xs uppercase tracking-wider">
                                    {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                    <ul className="space-y-3">
                                        <li><ScrollLink to="#prozess">{language === 'de' ? 'Zusammenarbeit' : 'Process'}</ScrollLink></li>
                                        <li><Link to={routeMap.leistungen[language]} className="hover:text-[var(--foreground)] transition-colors">{t('footer.links.services')}</Link></li>
                                        <li><ScrollLink to="#fallstudien">{language === 'de' ? 'Fallstudien' : 'Case Studies'}</ScrollLink></li>
                                        <li><ScrollLink to="#pakete">{language === 'de' ? 'Pakete' : 'Packages'}</ScrollLink></li>
                                    </ul>
                                    <ul className="space-y-3">
                                        <li><ScrollLink to="#faq">{t('nav.faq')}</ScrollLink></li>
                                        <li><Link to={routeMap.ueberUns[language]} className="hover:text-[var(--foreground)] transition-colors">{t('footer.links.about')}</Link></li>
                                    </ul>
                                </div>
                            </nav>

                            {/* Rechtliches */}
                            <nav aria-label={t('footer.links.legal')}>
                                <h4 className="text-[var(--foreground)] font-semibold mb-4 text-xs uppercase tracking-wider">{t('footer.links.legal')}</h4>
                                <ul className="space-y-3">
                                    <li><Link to={routeMap.impressum[language]} className="hover:text-[var(--foreground)] transition-colors">{t('footer.links.impressum')}</Link></li>
                                    <li><Link to={routeMap.datenschutz[language]} className="hover:text-[var(--foreground)] transition-colors">{t('footer.links.privacy')}</Link></li>
                                    <li><Link to={routeMap.agb[language]} className="hover:text-[var(--foreground)] transition-colors">{t('footer.links.agb')}</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </Reveal>
                </div>

                {/* Bottom bar */}
                <Reveal direction="up" delay={0.3}>
                    <div className="mt-12 pt-6 text-center">
                        <span className="text-xs text-[var(--muted-foreground)]">
                            {t('footer.copyright').replace('2026', currentYear)}
                        </span>
                    </div>
                </Reveal>
            </div>
        </footer>
    )
}
