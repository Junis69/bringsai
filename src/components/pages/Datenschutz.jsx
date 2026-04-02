import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../ui/Footer"
import { useLanguage } from "../../lib/i18n"

const content = {
    de: {
        seo: {
            title: "Datenschutzerklärung | BringsAI",
            desc: "Datenschutzerklärung der BringsAI UG – Informationen zur Datenverarbeitung gemäß DSGVO."
        },
        back: "Zurück zur Startseite",
        h1: "Datenschutzerklärung",
        date: "Stand: 25.02.2026",
        sections: [
            {
                title: "1. Allgemeine Hinweise",
                text: "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.<br /><br />Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden und zu welchem Zweck.<br /><br />Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."
            },
            {
                title: "2. Verantwortliche Stelle",
                text: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />BringsAI UG (haftungsbeschränkt) i. G.<br />Geschäftsführer: Junis Ismail<br />Eurenerstraße 42a<br />54294 Trier<br />Deutschland<br />E-Mail: <a href="mailto:info@bringsai.de" class="text-[var(--foreground)] hover:underline">info@bringsai.de</a>'
            },
            {
                title: "3. Hosting",
                text: "Diese Website wird extern gehostet.<br /><br /><strong class=\"text-[var(--foreground)]\">Hosting-Anbieter:</strong><br />Hostinger International Ltd.<br />61 Lordou Vironos Street<br />Lumiel Building, 4th Floor<br />6023 Larnaca<br />Zypern<br /><br />Beim Besuch dieser Website verarbeitet der Hosting-Anbieter personenbezogene Daten, insbesondere IP-Adressen und technische Zugriffsdaten, um den sicheren Betrieb der Website zu gewährleisten.<br /><br /><strong class=\"text-[var(--foreground)]\">Rechtsgrundlage:</strong><br />Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, stabilen und effizienten Betrieb der Website).<br /><br />Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO."
            },
            {
                title: "4. Zugriffsdaten (Server-Logfiles)",
                text: "Beim Aufruf dieser Website werden automatisch folgende Daten erhoben und gespeichert:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>IP-Adresse (gekürzt / anonymisiert)</li><li>Datum und Uhrzeit der Anfrage</li><li>Browsertyp und -version</li><li>Betriebssystem</li><li>Referrer-URL</li></ul>Diese Daten dienen ausschließlich der technischen Überwachung, Fehleranalyse und Sicherheit der Website.<br /><br />Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt."
            },
            {
                title: "5. Einsatz von Umami Analytics",
                text: "Diese Website nutzt Umami Analytics zur datenschutzfreundlichen, anonymisierten Reichweitenanalyse.<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>Es werden keine Cookies gesetzt.</li><li>Es erfolgt kein websiteübergreifendes Tracking.</li><li>Es werden keine Nutzerprofile erstellt.</li></ul>IP-Adressen werden ausschließlich in anonymisierter Form verarbeitet, sodass kein unmittelbarer Personenbezug hergestellt werden kann.<br /><br /><strong class=\"text-[var(--foreground)]\">Rechtsgrundlage:</strong><br />Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer datenschutzkonformen Reichweitenanalyse)."
            },
            {
                title: "6. Kontaktaufnahme",
                text: "Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.<br /><br />Verarbeitete Daten können sein:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>Name</li><li>E-Mail-Adresse</li><li>Telefonnummer (falls angegeben)</li><li>Inhalt Ihrer Nachricht</li></ul><strong class=\"text-[var(--foreground)]\">Zweck:</strong> Bearbeitung Ihrer Anfrage<br /><strong class=\"text-[var(--foreground)]\">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen oder Vertragserfüllung)<br /><br />Sofern die Verarbeitung personenbezogener Daten auf einer Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung."
            },
            {
                title: "7. Terminbuchung via Cal.com",
                text: "Für die Buchung von Erstgesprächen und Terminen nutzen wir den Dienst Cal.com.<br /><br /><strong class=\"text-[var(--foreground)]\">Dienstanbieter:</strong><br />Cal.com, Inc.<br />1111B S Governors Ave, Dover, DE 19904, USA<br /><br />Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (z.B. Name, E-Mail-Adresse und Zeitpunkt) an die Server von Cal.com übertragen und dort gespeichert.<br /><br /><strong class=\"text-[var(--foreground)]\">Rechtsgrundlage:</strong><br />Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Terminverwaltung).<br /><br />Da Cal.com in den USA ansässig ist, stützt sich der Datentransfer auf Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie in der Datenschutzerklärung von Cal.com."
            },
            {
                title: "8. Drittanbieter und externe Inhalte",
                text: "Abgesehen von den oben genannten Diensten werden keine externen Inhalte eingebunden, die automatisch personenbezogene Daten an Dritte übertragen (z. B. Google Maps, Social Media Plugins oder Werbenetzwerke)."
            },
            {
                title: "9. Speicherdauer",
                text: "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen."
            },
            {
                title: "10. Ihre Rechte nach DSGVO",
                text: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>Auskunft gemäß Art. 15 DSGVO</li><li>Berichtigung unrichtiger oder Vervollständigung Ihrer Daten gemäß Art. 16 DSGVO</li><li>Löschung Ihrer personenbezogenen Daten gemäß Art. 17 DSGVO</li><li>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li><li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li><li>Widerspruch gegen die Verarbeitung gemäß Art. 21 DSGVO</li></ul>Sofern die Verarbeitung auf einer Einwilligung beruht, haben Sie das Recht, diese jederzeit mit Wirkung für die Zukunft zu widerrufen.<br /><br />Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.<br /><br /><strong class=\"text-[var(--foreground)]\">Zuständige Datenschutzaufsichtsbehörde:</strong><br />Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz"
            },
            {
                title: "11. SSL-Verschlüsselung",
                text: "Diese Website nutzt SSL- bzw. TLS-Verschlüsselung zur sicheren Übertragung von Daten."
            },
            {
                title: "12. Aktualität und Änderung",
                text: "Diese Datenschutzerklärung wird angepasst, sobald rechtliche oder technische Änderungen dies erforderlich machen."
            }
        ]
    },
    en: {
        seo: {
            title: "Privacy Policy | BringsAI",
            desc: "Privacy Policy of BringsAI UG – Information on data processing in accordance with GDPR."
        },
        back: "Back to Home",
        h1: "Privacy Policy",
        date: "Status: 25.02.2026",
        sections: [
            {
                title: "1. General Information",
                text: "The protection of your personal data is important to us.<br /><br />Below we inform you about which personal data is processed when you visit this website and for what purpose.<br /><br />Personal data is all data with which you can be personally identified."
            },
            {
                title: "2. Responsible Body",
                text: 'The responsible body for data processing on this website is:<br /><br />BringsAI UG (haftungsbeschränkt) i. G.<br />Managing Director: Junis Ismail<br />Eurenerstraße 42a<br />54294 Trier<br />Germany<br />Email: <a href="mailto:info@bringsai.de" class="text-[var(--foreground)] hover:underline">info@bringsai.de</a>'
            },
            {
                title: "3. Hosting",
                text: "This website is hosted externally.<br /><br /><strong class=\"text-[var(--foreground)]\">Hosting Provider:</strong><br />Hostinger International Ltd.<br />61 Lordou Vironos Street<br />Lumiel Building, 4th Floor<br />6023 Larnaca<br />Cyprus<br /><br />When you visit this website, the hosting provider processes personal data, in particular IP addresses and technical access data, to ensure the secure operation of the website.<br /><br /><strong class=\"text-[var(--foreground)]\">Legal Basis:</strong><br />Art. 6 para. 1 lit. f GDPR (legitimate interest in the secure, stable and efficient operation of the website).<br /><br />There is an agreement on order processing with the hosting provider in accordance with Art. 28 GDPR."
            },
            {
                title: "4. Access Data (Server Log Files)",
                text: "When you access this website, the following data is automatically collected and stored:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>IP address (shortened / anonymized)</li><li>Date and time of the request</li><li>Browser type and version</li><li>Operating system</li><li>Referrer URL</li></ul>This data is used exclusively for technical monitoring, error analysis and security of the website.<br /><br />This data is not merged with other data sources."
            },
            {
                title: "5. Use of Umami Analytics",
                text: "This website uses Umami Analytics for privacy-friendly, anonymized range analysis.<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>No cookies are set.</li><li>There is no cross-website tracking.</li><li>No user profiles are created.</li></ul>IP addresses are processed exclusively in anonymized form, so that no direct personal reference can be established.<br /><br /><strong class=\"text-[var(--foreground)]\">Legal Basis:</strong><br />Art. 6 para. 1 lit. f GDPR (legitimate interest in data protection-compliant range analysis)."
            },
            {
                title: "6. Contacting Us",
                text: "If you contact us by email or via a contact form, your details will be processed to handle your request.<br /><br />Processed data can be:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>Name</li><li>Email address</li><li>Phone number (if provided)</li><li>Content of your message</li></ul><strong class=\"text-[var(--foreground)]\">Purpose:</strong> Processing your request<br /><strong class=\"text-[var(--foreground)]\">Legal Basis:</strong> Art. 6 para. 1 lit. b GDPR (pre-contractual measures or contract fulfillment)<br /><br />If the processing of personal data is based on consent, you can revoke this consent at any time with effect for the future. The revocation does not affect the lawfulness of the processing carried out until the revocation."
            },
            {
                title: "7. Appointment Booking via Cal.com",
                text: "We use the service Cal.com for booking initial consultations and appointments.<br /><br /><strong class=\"text-[var(--foreground)]\">Service Provider:</strong><br />Cal.com, Inc.<br />1111B S Governors Ave, Dover, DE 19904, USA<br /><br />When you book an appointment via our website, the data you enter (e.g. name, e-mail address and time) is transmitted to Cal.com's servers and stored there.<br /><br /><strong class=\"text-[var(--foreground)]\">Legal Basis:</strong><br />Art. 6 para. 1 lit. b GDPR (contract fulfillment or pre-contractual measures) and Art. 6 para. 1 lit. f GDPR (legitimate interest in efficient appointment management).<br /><br />Since Cal.com is based in the USA, data transfer is based on Standard Contractual Clauses (SCCs). For more information, please refer to Cal.com's privacy policy."
            },
            {
                title: "8. Third-Party Providers and External Content",
                text: "Apart from the services mentioned above, no external content is integrated that automatically transmits personal data to third parties (e.g. Google Maps, social media plugins or advertising networks)."
            },
            {
                title: "9. Storage Duration",
                text: "Personal data is only stored for as long as is necessary for the respective purpose or as required by statutory retention periods."
            },
            {
                title: "10. Your Rights under the GDPR",
                text: "Within the framework of the applicable legal provisions, you have the right at any time to:<br /><ul class=\"list-disc pl-6 mb-4 mt-2 space-y-1 block\"><li>Information according to Art. 15 GDPR</li><li>Correction of incorrect or completion of your data according to Art. 16 GDPR</li><li>Deletion of your personal data according to Art. 17 GDPR</li><li>Restriction of processing according to Art. 18 GDPR</li><li>Data portability according to Art. 20 GDPR</li><li>Objection to processing according to Art. 21 GDPR</li></ul>If the processing is based on consent, you have the right to revoke it at any time with effect for the future.<br /><br />You also have the right to complain to a data protection supervisory authority.<br /><br /><strong class=\"text-[var(--foreground)]\">Competent Data Protection Supervisory Authority:</strong><br />The State Commissioner for Data Protection and Freedom of Information Rhineland-Palatinate"
            },
            {
                title: "11. SSL Encryption",
                text: "This website uses SSL or TLS encryption for the secure transmission of data."
            },
            {
                title: "12. Topicality and Change",
                text: "This privacy policy will be adapted as soon as legal or technical changes make this necessary."
            }
        ]
    }
}

export function Datenschutz() {
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
        canonical.setAttribute("href", "https://bringsai.io/datenschutz")

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
