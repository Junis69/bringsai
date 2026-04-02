import { useLanguage } from "../../lib/i18n"

// Tool/Integration logos - complete set without duplicates
const INTEGRATION_LOGOS = [
    { src: "/logoipsum-371.png", alt: "Integration 1" },
    { src: "/logoipsum-376.png", alt: "Integration 2" },
    { src: "/logoipsum-377.png", alt: "Integration 3" },
    { src: "/logoipsum-381.png", alt: "Integration 4" },
    { src: "/logoipsum-392.png", alt: "Integration 5" },
    { src: "/logoipsum-399.png", alt: "Integration 6" },
    { src: "/logoipsum-405.png", alt: "Integration 7" },
    { src: "/logoipsum-424.png", alt: "Integration 8" },
    { src: "/logoipsum-371.png", alt: "Integration 9" },
    { src: "/logoipsum-376.png", alt: "Integration 10" },
]

export function LogoTicker() {
    const { t } = useLanguage()
    
    // Double the logos for seamless infinite scroll
    const allLogos = [...INTEGRATION_LOGOS, ...INTEGRATION_LOGOS]

    return (
        <section className="relative py-12 sm:py-16 overflow-hidden bg-[var(--background)]" data-testid="logo-ticker">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <p className="text-[var(--muted-foreground)]/70 font-medium text-xs sm:text-sm mb-8 sm:mb-10 text-center uppercase tracking-wider">
                    {t('logoTicker.title')}
                </p>

                {/* Logo Scroll Container */}
                <div
                    className="overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                    }}
                >
                    <div
                        className="flex items-center gap-10 sm:gap-14 md:gap-16"
                        style={{
                            animation: 'scroll-seamless 40s linear infinite',
                            width: 'max-content',
                        }}
                    >
                        {allLogos.map((logo, i) => (
                            <div
                                key={`logo-${i}`}
                                className="flex-shrink-0 flex items-center justify-center h-10 sm:h-12 w-20 sm:w-28 md:w-32"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-full max-w-full object-contain opacity-40 hover:opacity-70 transition-opacity duration-300 invert"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for seamless scrolling animation */}
                <style>{`
                    @keyframes scroll-seamless {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </div>
        </section>
    )
}
