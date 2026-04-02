import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../ui/Footer"
import { useLanguage } from "../../lib/i18n"

const content = {
    de: {
        seo: {
            title: "Impressum – Rechtliche Angaben | BringsAI",
            desc: "Impressum der BringsAI UG – Angaben gemäß § 5 TMG."
        },
        back: "Zurück zur Startseite",
        h1: "Impressum",
        date: "Stand: 25.02.2026",
        sections: [
            {
                title: "Angaben gemäß § 5 TMG",
                text: "BringsAI UG (haftungsbeschränkt) i. G.<br />Geschäftsführer: Junis Ismail<br />Eurenerstraße 42a<br />54294 Trier<br />Deutschland",
                note: "Hinweis: Gesellschaft in Gründung. Eintragung ins Handelsregister steht noch aus."
            },
            {
                title: "Kontakt",
                text: 'Telefon: <a href="tel:+4917672986127" class="text-[var(--foreground)] hover:underline">+49 176 72986127</a><br />E-Mail: <a href="mailto:info@bringsai.de" class="text-[var(--foreground)] hover:underline">info@bringsai.de</a>'
            },
            {
                title: "Umsatzsteuer-Identifikationsnummer",
                text: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />Wird nach Erteilung ergänzt."
            },
            {
                title: "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV",
                text: "Junis Ismail<br />Eurenerstraße 42a<br />54294 Trier"
            },
            {
                title: "Streitbeilegung",
                text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-[var(--foreground)] hover:underline break-all">https://ec.europa.eu/consumers/odr/</a><br /><br />Wir sind weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
            },
            {
                title: "Haftung für Inhalte",
                text: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.<br /><br />Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
            },
            {
                title: "Haftung für Links",
                text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.<br /><br />Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."
            },
            {
                title: "Urheberrecht",
                text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.<br /><br />Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
            }
        ]
    },
    en: {
        seo: {
            title: "Legal Notice (Impressum) | BringsAI",
            desc: "Legal Notice of BringsAI UG – Information according to § 5 TMG."
        },
        back: "Back to Home",
        h1: "Legal Notice (Impressum)",
        date: "Status: 25.02.2026",
        sections: [
            {
                title: "Information according to § 5 TMG",
                text: "BringsAI UG (haftungsbeschränkt) i. G.<br />Managing Director: Junis Ismail<br />Eurenerstraße 42a<br />54294 Trier<br />Germany",
                note: "Note: Company in foundation. Registration in the commercial register is pending."
            },
            {
                title: "Contact",
                text: 'Phone: <a href="tel:+4917672986127" class="text-[var(--foreground)] hover:underline">+49 176 72986127</a><br />Email: <a href="mailto:info@bringsai.de" class="text-[var(--foreground)] hover:underline">info@bringsai.de</a>'
            },
            {
                title: "VAT Identification Number",
                text: "VAT Identification Number according to § 27a of the Value Added Tax Act:<br />Will be added after issuance."
            },
            {
                title: "Responsible for Content according to § 18 Para. 2 MStV",
                text: "Junis Ismail<br />Eurenerstraße 42a<br />54294 Trier<br />Germany"
            },
            {
                title: "Dispute Resolution",
                text: 'The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-[var(--foreground)] hover:underline break-all">https://ec.europa.eu/consumers/odr/</a><br /><br />We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'
            },
            {
                title: "Liability for Content",
                text: "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Para. 1 TMG.<br /><br />According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."
            },
            {
                title: "Liability for Links",
                text: "Our website contains links to external websites of third parties, on whose content we have no influence. Therefore, we cannot assume any liability for these external contents.<br /><br />The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately."
            },
            {
                title: "Copyright",
                text: "The content and works created by the site operators on these pages are subject to German copyright law. The duplication, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.<br /><br />Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately."
            }
        ]
    }
}

export function Impressum() {
    const { language } = useLanguage()
    const t = content[language] || content.de
    const navigate = useNavigate()

    const handleBack = (e) => {
        e.preventDefault()
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate(language === 'en' ? '/en' : '/')
        }
    }

    useEffect(() => {
        document.title = t.seo.title

        let metaDesc = document.querySelector('meta[name="description"]')
        if (!metaDesc) {
            metaDesc = document.createElement("meta")
            metaDesc.setAttribute("name", "description")
            document.head.appendChild(metaDesc)
        }
        metaDesc.setAttribute("content", t.seo.desc)

        let canonical = document.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement("link")
            canonical.setAttribute("rel", "canonical")
            document.head.appendChild(canonical)
        }
        canonical.setAttribute("href", "https://bringsai.io/impressum")

        return () => {
            document.title = "BringsAI â€“ KI-Automatisierung & KI-Telefon für Unternehmen in Deutschland"

            if (metaDesc) {
                metaDesc.setAttribute(
                    "content",
                    "BringsAI entwickelt maßgeschneiderte KI-Lösungen: KI-Telefon, Prozess-Automatisierung, KI-Chatbots & Dokumenten-Analyse. DSGVO-konform, Server in Deutschland. Kostenloses Erstgespräch."
                )
            }
            if (canonical) {
                canonical.setAttribute("href", "https://bringsai.io/")
            }
        }
    }, [t.seo.title, t.seo.desc])

    return (
        <>
            <div className="min-h-screen bg-[var(--background)] pt-16 pb-24 px-6 relative z-10">
                <div className="mx-auto max-w-4xl">
                    <a
                        href={language === 'en' ? '/en' : '/'}
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t.back}
                    </a>

                    <article>
                        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">{t.h1}</h1>
                        <p className="text-[var(--muted-foreground)] mb-12 text-sm">{t.date}</p>

                        {t.sections.map((section, idx) => (
                            <section key={idx} className="mb-10">
                                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{section.title}</h2>
                                <p className="text-[var(--foreground)]/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.text }} />
                                {section.note && (
                                    <p className="text-[var(--muted-foreground)] text-sm mt-4">{section.note}</p>
                                )}
                            </section>
                        ))}
                    </article>
                </div>
            </div>
            <Footer />
        </>
    )
}
