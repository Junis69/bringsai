import { useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/i18n"

function SliderControl({ label, value, min, max, step, formatValue, onChange }) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-[var(--foreground)]/80 font-medium text-sm sm:text-base">{label}</span>
                <span className="text-[var(--foreground)] font-bold text-lg tabular-nums">
                    {formatValue(value)}
                </span>
            </div>
            <div className="relative">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="calc-slider w-full h-2 rounded-full appearance-none cursor-pointer bg-transparent relative z-10"
                />
                {/* Track background */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 rounded-full bg-[var(--muted)] pointer-events-none" />
                {/* Track fill */}
                <div
                    className="absolute top-1/2 left-0 -translate-y-1/2 h-2 rounded-full bg-[var(--accent)] pointer-events-none"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}

export function SavingsCalculator() {
    const { t, language } = useLanguage()
    const calUrl = language === 'en' ? "https://cal.com/bringsai/strategy-call" : "https://cal.com/bringsai/erstgespraech"
    const [teamSize, setTeamSize] = useState(5)
    const [hoursPerWeek, setHoursPerWeek] = useState(10)
    const [hourlyRate, setHourlyRate] = useState(25)
    const [automationPercentage, setAutomationPercentage] = useState(40)

    const results = useMemo(() => {
        const weeksPerMonth = 4.33
        const totalHoursMonth = teamSize * hoursPerWeek * weeksPerMonth
        const totalCostMonth = totalHoursMonth * hourlyRate
        const automationRate = automationPercentage / 100
        const savedHours = totalHoursMonth * automationRate
        const savedCost = totalCostMonth * automationRate

        return {
            totalHours: Math.round(totalHoursMonth),
            totalCost: Math.round(totalCostMonth),
            savedHours: Math.round(savedHours),
            savedCost: Math.round(savedCost),
        }
    }, [teamSize, hoursPerWeek, hourlyRate, automationPercentage])

    const handleTeamSize = useCallback((v) => setTeamSize(v), [])
    const handleHours = useCallback((v) => setHoursPerWeek(v), [])
    const handleRate = useCallback((v) => setHourlyRate(v), [])
    const handleAutomation = useCallback((v) => setAutomationPercentage(v), [])

    const formatCost = (num) => {
        return num.toLocaleString(language === 'de' ? 'de-DE' : 'en-US')
    }

    const currencySymbol = language === 'de' ? '€' : '$'

    const resultHeadline = t('savings_calculator.result_headline').replace('{hours}', formatCost(results.totalHours))
    const resultCost = t('savings_calculator.result_cost').replace('{cost}', formatCost(results.totalCost))
    const resultSaving = t('savings_calculator.result_saving').replace('{percentage}', automationPercentage).replace('{saved}', formatCost(results.savedCost))

    return (
        <section id="calculator" className="px-8 md:px-6 py-20 sm:py-32 bg-[var(--background)] relative overflow-hidden">

            <div className="mx-auto max-w-3xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    className="text-center mb-12 space-y-4"
                >
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-[var(--foreground)]">
                        {t('savings_calculator.title')}
                    </h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg">
                        {t('savings_calculator.subtitle')}
                    </p>
                </motion.div>

                {/* Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10 space-y-8 shadow-sm"
                >
                    {/* Sliders */}
                    <div className="space-y-6">
                        <SliderControl
                            label={t('savings_calculator.slider1')}
                            value={teamSize}
                            min={1}
                            max={50}
                            step={1}
                            formatValue={(v) => v}
                            onChange={handleTeamSize}
                        />
                        <SliderControl
                            label={t('savings_calculator.slider2')}
                            value={hoursPerWeek}
                            min={1}
                            max={50}
                            step={1}
                            formatValue={(v) => v}
                            onChange={handleHours}
                        />
                        <SliderControl
                            label={t('savings_calculator.slider3')}
                            value={hourlyRate}
                            min={10}
                            max={500}
                            step={5}
                            formatValue={(v) => `${currencySymbol}${v}`}
                            onChange={handleRate}
                        />
                        <SliderControl
                            label={t('savings_calculator.slider4')}
                            value={automationPercentage}
                            min={10}
                            max={100}
                            step={5}
                            formatValue={(v) => `${v}%`}
                            onChange={handleAutomation}
                        />
                    </div>

                    {/* Results */}
                    <div className="space-y-4 pt-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-snug">
                            {resultHeadline}
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-[var(--foreground)] leading-snug">
                            {resultCost}
                        </p>
                        <p className="text-[var(--muted-foreground)] text-lg">
                            {resultSaving}
                        </p>
                    </div>

                    {/* CTA Button */}
                    <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] border-0 rounded-full transition-all duration-300 group mt-2"
                    >
                        <span className="flex items-center gap-2">
                            {t('savings_calculator.cta_button')}
                            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Custom Slider Styles */}
            <style>{`
                .calc-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    background: transparent;
                }
                .calc-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid var(--accent);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .calc-slider::-webkit-slider-thumb:hover {
                    transform: scale(1.15);
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                }
                .calc-slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid var(--accent);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }
                @media (prefers-reduced-motion: reduce) {
                    .calc-slider::-webkit-slider-thumb {
                        transition: none;
                    }
                }
            `}</style>
        </section>
    )
}
