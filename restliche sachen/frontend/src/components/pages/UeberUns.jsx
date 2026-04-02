import { PageLayout, PageSection, PageCTA } from "../ui/PageLayout"
import { Mail, Phone, CheckCircle2 } from "lucide-react"
import { useLanguage } from "../../lib/i18n"
import { Reveal } from "../animations/Reveal"

export function UeberUns() {
    const { t } = useLanguage()

    const whyBullets = t('page_ueber_uns.why_bullets')
    const whyArr = Array.isArray(whyBullets) ? whyBullets : []
    const valuesData = t('page_ueber_uns.values')
    const valuesArr = Array.isArray(valuesData) ? valuesData : []

    return (
        <PageLayout
            title={t('page_ueber_uns.seo_title')}
            description={t('page_ueber_uns.seo_desc')}
            canonicalPath="/ueber-uns"
            h1={t('page_ueber_uns.h1')}
            breadcrumbs={[{ label: t('page_ueber_uns.breadcrumb') }]}
        >
            <Reveal direction="up">
                <p className="text-[var(--muted-foreground)] text-lg mb-4 max-w-3xl">
                    {t('page_ueber_uns.intro')}
                </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
                <p className="text-[var(--foreground)] font-medium mb-12 max-w-3xl">
                    {t('page_ueber_uns.focus')}
                </p>
            </Reveal>

            {/* Expertise */}
            <PageSection title={t('page_ueber_uns.section_what')}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <Reveal direction="left">
                        <div className="text-[var(--foreground)]/80 leading-relaxed space-y-4">
                            <p>{t('page_ueber_uns.what_p1')}</p>
                            <p>{t('page_ueber_uns.what_p2')}</p>
                            <p>{t('page_ueber_uns.what_p3')}</p>
                        </div>
                    </Reveal>

                    <Reveal direction="right" delay={0.15}>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--muted)] p-8 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--foreground)]/5 to-[var(--foreground)]/5 pointer-events-none" />
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 relative z-10">{t('page_ueber_uns.why_title')}</h3>
                            <div className="space-y-4 relative z-10">
                                {whyArr.map((bullet, i) => (
                                    <Reveal key={i} direction="right" delay={0.25 + i * 0.08}>
                                        <div className="flex items-start gap-3 text-[var(--foreground)]/80">
                                            <CheckCircle2 className="h-5 w-5 text-[var(--foreground)] shrink-0 mt-0.5" />
                                            <span>{bullet}</span>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </PageSection>

            {/* Team */}
            <PageSection title={t('page_ueber_uns.section_team')}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Junis */}
                    <Reveal direction="left" delay={0}>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--muted)] p-8 backdrop-blur-sm hover:border-[var(--border)] transition-[border-color] duration-500">
                            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">Junis Ismail</h3>
                            <p className="text-[var(--foreground)] font-medium mb-4">{t('page_ueber_uns.junis_role')}</p>
                            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6">
                                {t('page_ueber_uns.junis_quote')}
                            </p>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:info@bringsai.de" className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm text-[var(--foreground)]/80 hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                                    <Mail className="h-4 w-4 shrink-0" />
                                    <span>info@bringsai.de</span>
                                </a>
                                <a href="tel:+4917672986127" className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm text-[var(--foreground)]/80 hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span>+49 176 72986127</span>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Simon */}
                    <Reveal direction="right" delay={0.15}>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--muted)] p-8 backdrop-blur-sm hover:border-[var(--border)] transition-[border-color] duration-500">
                            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">Simon Poscher</h3>
                            <p className="text-[var(--foreground)] font-medium mb-4">{t('page_ueber_uns.simon_role')}</p>
                            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6">
                                {t('page_ueber_uns.simon_quote')}
                            </p>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:simonposcher139@gmail.com" className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm text-[var(--foreground)]/80 hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                                    <Mail className="h-4 w-4 shrink-0" />
                                    <span className="truncate">simonposcher139@gmail.com</span>
                                </a>
                                <a href="tel:+436603195452" className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm text-[var(--foreground)]/80 hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span>+43 660 3195452</span>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </PageSection>

            {/* Values */}
            <PageSection title={t('page_ueber_uns.section_values')}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {valuesArr.map((v, i) => (
                        <Reveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-6 backdrop-blur-sm hover:border-[var(--border)] transition-[border-color] duration-500">
                                <h3 className="text-[var(--foreground)] font-bold mb-2">{v.title}</h3>
                                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </PageSection>

            <PageCTA
                title={t('page_ueber_uns.cta_title')}
                subtitle={t('page_ueber_uns.cta_subtitle')}
            />
        </PageLayout>
    )
}
