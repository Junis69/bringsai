import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../ui/Footer"
import { useLanguage } from "../../lib/i18n"

const content = {
    de: {
        seo: {
            title: "AGB – Allgemeine Geschäftsbedingungen | BringsAI",
            desc: "Allgemeine Geschäftsbedingungen der BringsAI UG für digitale Dienstleistungen und KI-Automatisierung."
        },
        back: "Zurück zur Startseite",
        h1: "Allgemeine Geschäftsbedingungen",
        date: "Stand: 25.02.2026",
        sections: [
            {
                title: "1. Geltungsbereich",
                text: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der BringsAI UG (haftungsbeschränkt) i. G., Geschäftsführer Junis Ismail, und ihren Kunden über digitale Dienstleistungen, insbesondere:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>KI-Automatisierungen</li><li>Voice- und Chatbot-Lösungen</li><li>Webdesign und Webentwicklung</li><li>Prozessautomatisierung</li><li>Technische Beratung</li></ul>Abweichende Bedingungen des Kunden finden keine Anwendung, es sei denn, BringsAI stimmt deren Geltung ausdrücklich schriftlich zu."
            },
            {
                title: "2. Vertragsschluss",
                text: "Ein Vertrag kommt zustande durch:<br /><ul class=\"list-disc pl-6 mt-2 space-y-1 block\"><li>Schriftliche Angebotsannahme</li><li>Bestätigung per E-Mail oder Messenger</li><li>Beginn der Leistungserbringung nach Auftragserteilung</li></ul>"
            },
            {
                title: "3. Leistungsumfang",
                text: "Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot.<br /><br />BringsAI schuldet die vereinbarte Dienstleistung, jedoch keinen bestimmten wirtschaftlichen oder geschäftlichen Erfolg.<br /><br />Automatisierte Systeme und KI-Lösungen ersetzen keine fachliche, rechtliche oder wirtschaftliche Beratung.<br /><br />KI-basierte Systeme können fehlerhafte, unvollständige oder unvorhersehbare Ergebnisse liefern. Eine Haftung für daraus resultierende Schäden ist â€“ soweit gesetzlich zulässig â€“ ausgeschlossen."
            },
            {
                title: "4. Mitwirkungspflichten des Kunden",
                text: "Der Kunde verpflichtet sich, alle zur Leistungserbringung notwendigen Informationen vollständig und rechtzeitig bereitzustellen.<br /><br />Verzögerungen aufgrund fehlender Mitwirkung verlängern vereinbarte Fristen entsprechend."
            },
            {
                title: "5. Vergütung",
                text: "Alle Preise verstehen sich netto zuzüglich gesetzlicher Umsatzsteuer, sofern diese anfällt.<br /><br />Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung fällig, sofern nichts anderes vereinbart ist."
            },
            {
                title: "6. Haftung",
                text: "BringsAI haftet uneingeschränkt für Vorsatz und grobe Fahrlässigkeit.<br /><br />Bei einfacher Fahrlässigkeit haftet BringsAI nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vorhersehbaren, vertragstypischen Schaden.<br /><br />Die Haftung von BringsAI ist der Höhe nach auf den jeweiligen Auftragswert begrenzt.<br /><br />Eine Haftung für entgangenen Gewinn, Produktionsausfälle, Betriebsunterbrechungen oder sonstige mittelbare Schäden ist â€“ soweit gesetzlich zulässig â€“ ausgeschlossen.<br /><br />BringsAI haftet nicht für Funktionsstörungen, Änderungen oder Ausfälle externer Anbieter, Plattformen, APIs, Hosting-Dienste oder KI-Modelle.<br /><br />KI-basierte Systeme können fehlerhafte, unvollständige oder unvorhersehbare Ergebnisse liefern. Eine Haftung für daraus resultierende Schäden ist â€“ soweit gesetzlich zulässig â€“ ausgeschlossen.<br /><br />Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.<br /><br />Der Kunde ist für eine regelmäßige und angemessene Datensicherung selbst verantwortlich."
            },
            {
                title: "7. Nutzungsrechte",
                text: "Nach vollständiger Zahlung erhält der Kunde ein einfaches, nicht übertragbares Nutzungsrecht an den erbrachten Leistungen.<br /><br />Sofern nicht anders vereinbart, verbleiben Quellcodes, Automatisierungslogiken, Konzepte und Systemarchitekturen im geistigen Eigentum von BringsAI."
            },
            {
                title: "8. Laufzeit und Kündigung",
                text: "Einmalige Leistungen enden mit vollständiger Lieferung und Abnahme.<br /><br />Dauerhafte Leistungen sind mit einer Frist von einem Monat zum Monatsende kündbar, sofern nichts anderes vereinbart ist."
            },
            {
                title: "9. Vertraulichkeit",
                text: "Beide Parteien verpflichten sich, vertrauliche Informationen, die im Rahmen der Zusammenarbeit bekannt werden, nicht an Dritte weiterzugeben. Diese Pflicht besteht auch nach Beendigung des Vertragsverhältnisses fort."
            },
            {
                title: "10. Schlussbestimmungen",
                text: "Es gilt das Recht der Bundesrepublik Deutschland.<br /><br />Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.<br /><br />Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform."
            }
        ]
    },
    en: {
        seo: {
            title: "Terms and Conditions | BringsAI",
            desc: "General Terms and Conditions of BringsAI UG for digital services and AI automation."
        },
        back: "Back to Home",
        h1: "General Terms and Conditions",
        date: "Status: 25.02.2026",
        sections: [
            {
                title: "1. Scope",
                text: "These General Terms and Conditions apply to all contracts between BringsAI UG (haftungsbeschränkt) i. G., Managing Director Junis Ismail, and its customers regarding digital services, in particular:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>AI Automations</li><li>Voice and Chatbot Solutions</li><li>Web Design and Web Development</li><li>Process Automation</li><li>Technical Consulting</li></ul>Diverging terms and conditions of the customer do not apply unless BringsAI expressly agrees to their validity in writing."
            },
            {
                title: "2. Conclusion of Contract",
                text: "A contract is concluded by:<br /><ul class=\"list-disc pl-6 mt-2 space-y-1 block\"><li>Written acceptance of an offer</li><li>Confirmation via email or messenger</li><li>Start of service provision after placing an order</li></ul>"
            },
            {
                title: "3. Scope of Services",
                text: "The scope of services results from the respective offer.<br /><br />BringsAI owes the agreed service, but no specific economic or business success.<br /><br />Automated systems and AI solutions do not replace professional, legal, or economic advice.<br /><br />AI-based systems can deliver incorrect, incomplete, or unpredictable results. Liability for damages resulting from this is â€“ as far as legally permissible â€“ excluded."
            },
            {
                title: "4. Obligations of the Customer to Cooperate",
                text: "The customer agrees to provide all information necessary for the provision of services completely and in a timely manner.<br /><br />Delays due to a lack of cooperation extend agreed deadlines accordingly."
            },
            {
                title: "5. Remuneration",
                text: "All prices are net plus statutory value-added tax, if applicable.<br /><br />Invoices are due within 14 days of invoicing, unless otherwise agreed."
            },
            {
                title: "6. Liability",
                text: "BringsAI is fully liable for intent and gross negligence.<br /><br />In the event of simple negligence, BringsAI is only liable for the breach of essential contractual obligations and limited to the foreseeable, typical contractual damage.<br /><br />BringsAI's liability is limited in amount to the respective order value.<br /><br />Liability for lost profits, production disruptions, business interruptions, or other indirect damages is â€“ as far as legally permissible â€“ excluded.<br /><br />BringsAI is not liable for malfunctions, modifications, or failures of external providers, platforms, APIs, hosting services, or AI models.<br /><br />AI-based systems can deliver incorrect, incomplete, or unpredictable results. Liability for damages resulting from this is â€“ as far as legally permissible â€“ excluded.<br /><br />Liability for damages resulting from injury to life, body, or health remains unaffected.<br /><br />The customer is responsible for regular and appropriate data backups."
            },
            {
                title: "7. Rights of Use",
                text: "Upon full payment, the customer receives a simple, non-transferable right of use to the provided services.<br /><br />Unless otherwise agreed, source codes, automation logic, concepts, and system architectures remain the intellectual property of BringsAI."
            },
            {
                title: "8. Term and Termination",
                text: "One-time services end with complete delivery and acceptance.<br /><br />Ongoing services can be terminated with a notice period of one month to the end of the month, unless otherwise agreed."
            },
            {
                title: "9. Confidentiality",
                text: "Both parties agree not to disclose confidential information obtained during the collaboration to third parties. This obligation continues even after the termination of the contractual relationship."
            },
            {
                title: "10. Final Provisions",
                text: "The law of the Federal Republic of Germany applies.<br /><br />Should individual provisions of these GTC be or become invalid, the validity of the remaining provisions remains unaffected.<br /><br />Changes and additions to these GTC require written form."
            }
        ]
    }
}

export function AGB() {
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
        canonical.setAttribute("href", "https://bringsai.io/agb")

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
                            </section>
                        ))}
                    </article>
                </div>
            </div>
            <Footer />
        </>
    )
}
