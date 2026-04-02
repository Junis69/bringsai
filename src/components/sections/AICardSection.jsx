import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Search, Globe, Bot, X } from "lucide-react";/* ========================================
   Constants
======================================== */

const TOOLS = [
  { name: "Slack", slug: "slack", color: "E01E5A" },
  { name: "Google", slug: "google", color: "4285F4" },
  { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
  { name: "Salesforce", slug: "salesforce", color: "00A1E0" },
  { name: "Vimeo", slug: "vimeo", color: "1AB7EA" },
  { name: "Zapier", slug: "zapier", color: "FF4A00" },
  { name: "Notion", slug: "notion", color: "787878" },
  { name: "Airtable", slug: "airtable", color: "18BFFF" },
  { name: "WhatsApp", slug: "whatsapp", color: "25D366" },
  { name: "Telegram", slug: "telegram", color: "26A5E4" },
  { name: "Discord", slug: "discord", color: "5865F2" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "OpenAI", slug: "openai", color: "74aa9c" },
  { name: "Gmail", slug: "gmail", color: "EA4335" },
  { name: "Jira", slug: "jira", color: "0052CC" },
  { name: "Trello", slug: "trello", color: "0079BF" },
  { name: "Asana", slug: "asana", color: "F06A6A" },
  { name: "GitHub", slug: "github", color: "787878" },
  { name: "Microsoft", slug: "microsoft", color: "00A4EF" },
  { name: "SAP", slug: "sap", color: "0FAAFF" },
];

// Additional tools for Row 2 to create more variation
const TOOLS_ROW2 = [
  { name: "Shopify", slug: "shopify", color: "7AB55C" },
  { name: "Zendesk", slug: "zendesk", color: "49C2B7" },
  { name: "Intercom", slug: "intercom", color: "6AFDEF" },
  { name: "Mailchimp", slug: "mailchimp", color: "FFE01B" },
  { name: "Calendly", slug: "calendly", color: "006BFF" },
  { name: "Zoom", slug: "zoom", color: "2D8CFF" },
  { name: "Dropbox", slug: "dropbox", color: "0061FF" },
  { name: "Netlify", slug: "netlify", color: "00C7B7" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Linear", slug: "linear", color: "5E6AD2" },
  { name: "Webflow", slug: "webflow", color: "4353FF" },
  { name: "Vercel", slug: "vercel", color: "FFFFFF" },
  { name: "PayPal", slug: "paypal", color: "00457C" },
  { name: "Twilio", slug: "twilio", color: "F22F46" },
  { name: "SendGrid", slug: "sendgrid", color: "51A9E3" },
  { name: "Typeform", slug: "typeform", color: "A8A8FF" },
  { name: "Meta", slug: "meta", color: "0468FF" },
  { name: "Box", slug: "box", color: "0061D5" },
  { name: "Amazon", slug: "amazon", color: "FF9900" },
  { name: "Xero", slug: "xero", color: "13B5EA" },
];
const ICON_URL = (slug, color) =>
  `https://api.iconify.design/simple-icons/${slug}.svg?color=%23${color}`;

/* ========================================
   Shared: Glow Border Wrapper (SVG rect-based)
======================================== */

function GlowBorder({ children, className = "", borderRadius = 12 }) {
  const containerRef = useRef(null);
  const [dims, setDims] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const { width: w, height: h } = el.getBoundingClientRect();
      if (w < 2 || h < 2) return;
      const r = Math.min(borderRadius, w / 2, h / 2);
      setDims({ w, h, r: Math.max(0, r - 1) });
    };

    requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [borderRadius]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        padding: '1.5px',
        borderRadius: `${borderRadius}px`,
        background:
          'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(99,102,241,0.04), rgba(59,130,246,0.06))',
      }}
    >
      {dims && (
        <svg
          className="absolute inset-0 pointer-events-none"
          width={dims.w}
          height={dims.h}
          style={{ overflow: 'visible', zIndex: 1 }}
        >
          <rect
            x={1}
            y={1}
            width={dims.w - 2}
            height={dims.h - 2}
            rx={dims.r}
            ry={dims.r}
            fill="none"
            stroke="rgba(99,102,241,0.65)"
            strokeWidth="2"
            pathLength="400"
            strokeDasharray="60 340"
            strokeLinecap="round"
            className="glow-streak-anim"
            style={{}}
          />
        </svg>
      )}
      {children}
    </div>
  );
}

/* ========================================
   Preview Components
======================================== */

function ChatbotPreview() {
  return (
    <div className="flex flex-col h-full p-3.5 gap-2">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-white/[0.06] flex-shrink-0" />
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-1.5 w-16 rounded-full bg-white/[0.08]" />
          <div className="h-1 w-24 rounded-full bg-white/[0.04]" />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 justify-center">
        <div
          className="rounded-xl bg-white/[0.04] border border-white/[0.03] p-2 max-w-[85%]"
          style={{ animation: "fade-in-line 0.5s ease-out 0.2s both" }}
        >
          <div className="flex flex-col gap-1">
            <div className="h-1.5 w-full rounded bg-white/[0.07]" />
            <div className="h-1.5 w-3/4 rounded bg-white/[0.05]" />
          </div>
        </div>

        <div
          className="rounded-xl bg-white/[0.04] border border-white/[0.03] p-2 max-w-[85%]"
          style={{ animation: "fade-in-line 0.5s ease-out 0.5s both" }}
        >
          <div className="flex flex-col gap-1">
            <div className="h-1.5 w-full rounded bg-white/[0.07]" />
            <div className="h-1.5 w-2/3 rounded bg-white/[0.05]" />
          </div>
        </div>
      </div>

      <div className="h-1 rounded-full bg-white/[0.03] relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-3/5 rounded-full"
          style={{
            background: "linear-gradient(90deg, rgba(59,130,246,0.35), rgba(99,102,241,0.15))",
            animation: "shimmer 4s ease-in-out infinite",
          }}
        />
      </div>

      <GlowBorder borderRadius={12}>
        <div className="relative z-[1] flex items-center gap-2 bg-[#0a0a0c] rounded-[11px] px-3 py-2">
          <span className="text-[10px] text-white/20 font-sans">Ihre Nachricht</span>
          <div className="ml-auto w-6 h-6 rounded-lg bg-white/[0.06] flex items-center justify-center">
            <Send className="w-3 h-3 text-white/30" />
          </div>
        </div>
      </GlowBorder>
    </div>
  );
}

function KIAgentenPreview() {
  return (
    <div className="flex flex-col h-full p-4 gap-3">
      <div className="flex items-center gap-2 bg-white/[0.04] rounded-xl px-3 py-2.5 border border-white/[0.05]">
        <Search className="w-3.5 h-3.5 text-white/25 flex-shrink-0" />
        <span className="text-[10px] text-white/30 font-sans">Inhalte erstellen...</span>
      </div>

      <div className="flex justify-center">
        <GlowBorder borderRadius={8}>
          <div className="relative z-[1] bg-[#0a0a0c] rounded-[7px] px-5 py-1.5">
            <span className="text-[10px] text-white/50 font-sans font-medium">Generieren</span>
          </div>
        </GlowBorder>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-2 mt-1">
        {[
          { icon: "in", bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" },
          { icon: "X", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" },
          { icon: null, bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.06)", color: null },
        ].map((platform, idx) => (
          <div
            key={idx}
            className="rounded-xl border p-2.5 flex flex-col gap-2.5"
            style={{
              backgroundColor: platform.bg,
              borderColor: platform.border,
              animation: `fade-in-line 0.4s ease-out ${0.3 + idx * 0.12}s both`,
            }}
          >
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              {platform.icon ? (
                <span className="text-[9px] font-bold" style={{ color: platform.color }}>{platform.icon}</span>
              ) : (
                <Globe className="w-3 h-3 text-white/35" />
              )}
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="h-[3px] w-full rounded bg-white/[0.06]" />
              <div className="h-[3px] w-full rounded bg-white/[0.04]" />
              <div className="h-[3px] w-3/4 rounded bg-white/[0.03]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TelefonPreview() {
  return (
    <div className="flex flex-col items-center h-full pt-5 pb-4 px-4">
      <div className="w-14 h-14 rounded-2xl bg-blue-500/[0.08] border border-blue-500/[0.12] flex items-center justify-center mb-3">
        <Bot className="w-6 h-6 text-blue-400/80" />
      </div>

      <div className="text-center mb-auto">
        <p className="text-[11px] text-white/70 font-sans font-medium">Ihr KI-Telefonagent</p>
        <p className="text-[9px] text-white/30 font-sans mt-0.5">Eingehender Anruf</p>
      </div>

      <div className="flex items-end justify-center gap-[2px] h-4 mb-4">
        {[6, 10, 14, 8, 12, 16, 10, 14, 8, 12, 6, 10].map((h, i) => (
          <div
            key={i}
            className="w-[2px] rounded-full bg-blue-400/25 origin-bottom"
            style={{
              height: `${h}px`,
              animation: `wave-bar ${0.5 + (i % 4) * 0.15}s ease-in-out ${i * 0.05}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-5">
        {/* Reject button with red glow */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: '0 0 12px 3px rgba(239,68,68,0.25), 0 0 4px 1px rgba(239,68,68,0.15)',
              animation: 'phone-glow-red 2.5s ease-in-out infinite',
            }}
          />
          <div className="relative w-10 h-10 rounded-full bg-red-500/[0.12] border border-red-500/[0.2] flex items-center justify-center">
            <X className="w-4 h-4 text-red-400" />
          </div>
        </div>
        {/* Accept button with green glow */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: '0 0 14px 4px rgba(16,185,129,0.3), 0 0 5px 2px rgba(16,185,129,0.2)',
              animation: 'phone-glow-green 2.5s ease-in-out infinite',
            }}
          />
          <div className="relative w-10 h-10 rounded-full bg-emerald-500/[0.15] border border-emerald-500/[0.25] flex items-center justify-center">
            <Phone className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview() {
  return (
    <div className="h-full w-full flex p-3 overflow-hidden">
      <div className="w-[90px] md:w-[100px] flex-shrink-0 pr-2.5 border-r border-white/[0.04] flex flex-col gap-1 py-1">
        <span className="text-[7px] md:text-[8px] text-white/40 font-sans font-semibold mb-1.5 uppercase tracking-wider">Optimierungsbereiche</span>
        {["Struktur", "Geschwindigkeit", "Automatisierung", "Übersicht", "Wachstum"].map((f) => (
          <div key={f} className="text-[7px] md:text-[8px] font-sans py-0.5 text-white/35 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-blue-400/40 flex-shrink-0" />
            {f}
          </div>
        ))}
      </div>

      <div className="flex-1 px-2.5 md:px-3 flex flex-col min-w-0">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[8px] md:text-[9px] text-white/50 font-sans font-medium">Arbeitseffizienz</span>
          <span className="text-[8px] md:text-[9px] text-emerald-400/70 font-sans font-semibold">+27%</span>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-4 w-px flex flex-col justify-between py-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-2 h-px bg-white/[0.06]" />
            ))}
          </div>

          <div className="absolute inset-0 bottom-4 overflow-hidden">
            <svg
              viewBox="0 0 400 70"
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chart-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                  <stop offset="50%" stopColor="rgba(59,130,246,0.55)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0.55)" />
                </linearGradient>
                <linearGradient id="chart-fill-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.0)" />
                </linearGradient>
              </defs>
              <path
                d="M 0,58 C 20,57 35,55 55,53 C 75,51 90,52.5 120,49 C 150,45.5 170,47 200,43 C 230,39 250,40.5 280,36 C 310,31.5 335,29 360,24 C 380,20 392,17 400,15 L 400,70 L 0,70 Z"
                fill="url(#chart-fill-gradient)"
                style={{
                  opacity: 0,
                  animation: 'fade-chart-area 12s ease-in-out infinite',
                }}
              />
              <path
                d="M 0,58 C 20,57 35,55 55,53 C 75,51 90,52.5 120,49 C 150,45.5 170,47 200,43 C 230,39 250,40.5 280,36 C 310,31.5 335,29 360,24 C 380,20 392,17 400,15"
                stroke="url(#chart-line-gradient)"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="700"
                strokeDashoffset="700"
                style={{ animation: 'draw-chart-line 12s ease-in-out infinite' }}
              />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
            {[1, 2, 3, 4, 5, 6, 7].map(d => (
              <span key={d} className="text-[5px] md:text-[6px] text-white/15 font-sans">Tag {d}</span>
            ))}
          </div>
        </div>

        <p className="text-[6px] md:text-[7px] text-white/15 font-sans mt-1 leading-relaxed">
          Die Arbeitseffizienz stieg in dieser Woche auf 27 % im Vergleich zur Vorwoche.
        </p>
      </div>

      <div className="w-[70px] md:w-[80px] flex-shrink-0 pl-2.5 border-l border-white/[0.04] flex flex-col gap-1.5 py-1">
        <span className="text-[7px] md:text-[8px] text-white/30 font-sans">Gesamt :</span>
        <div>
          <span className="text-lg md:text-xl font-sans font-semibold text-white/80 leading-none">51.3</span>
          <span className="text-[10px] text-white/50 font-sans">%</span>
        </div>
        <p className="text-[6px] md:text-[7px] text-white/15 font-sans leading-relaxed">
          Insgesamt haben Sie jetzt ein um 51.3 % besseres System als in der Vorwoche.
        </p>
        <GlowBorder className="mt-auto" borderRadius={6}>
          <div className="relative z-[1] bg-[#0a0a0c] rounded-[5px] px-2 py-1 text-center">
            <span className="text-[7px] md:text-[8px] text-white/35 font-sans">Export</span>
          </div>
        </GlowBorder>
      </div>
    </div>
  );
}

function ToolRow({ tools, keyPrefix, animation }) {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex"
        style={{ animation, width: "max-content" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-3 pr-3">
            {tools.map((tool, i) => (
              <div
                key={`${keyPrefix}-${copy}-${i}`}
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={ICON_URL(tool.slug, tool.color)}
                  alt={tool.name}
                  className="w-4 h-4"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SoftwareToolsPreview() {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-3 py-4 relative overflow-hidden">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />

      <ToolRow tools={TOOLS} keyPrefix="r1" animation="scroll-logos-half 45s linear infinite" />
      <ToolRow tools={TOOLS_ROW2} keyPrefix="r2" animation="scroll-logos-half-reverse 50s linear infinite" />
    </div>
  );
}

/* ========================================
   Card Data
======================================== */

const PREVIEW_MAP = {
  chatbots: ChatbotPreview,
  "ki-agenten": KIAgentenPreview,
  "ki-telefonagenten": TelefonPreview,
  "workflow-automatisierung": WorkflowPreview,
  "software-tools": SoftwareToolsPreview,
};

const TOP_CARDS = [
  {
    id: "ki-telefonagenten",
    title: "Anrufe automatisch annehmen und vorqualifizieren",
    description:
      "Anrufe werden angenommen, vorqualifiziert und auf Wunsch direkt in einen Termin umgewandelt – auch außerhalb der Geschäftszeiten.",
  },
  {
    id: "ki-agenten",
    title: "Wiederkehrende Aufgaben automatisch erledigen",
    description:
      "E-Mails, Zusammenfassungen, Datenpflege oder Vorbereitungsschritte laufen im Hintergrund. Ihr Team gewinnt Zeit für wichtigere Aufgaben.",
  },
  {
    id: "chatbots",
    title: "Anfragen automatisch beantworten",
    description:
      "Wiederkehrende Fragen werden sofort beantwortet – über WhatsApp, Instagram oder Ihre Website. Ihr Team muss nicht jede Nachricht einzeln bearbeiten.",
  },
];

const BOTTOM_CARDS = [
  {
    id: "workflow-automatisierung",
    title: "Systeme verbinden und Abläufe beschleunigen",
    description:
      "Daten werden automatisch übertragen, Aufgaben ausgelöst und Informationen an der richtigen Stelle bereitgestellt.",
  },
  {
    id: "software-tools",
    title: "Ihre Systeme arbeiten endlich sauber zusammen",
    description:
      "Wir verbinden die Tools, die Sie bereits nutzen, damit Informationen nicht hängen bleiben, sondern automatisch dort ankommen, wo sie gebraucht werden.",
  },
];

/* ========================================
   Main Section Component
======================================== */

function AICard({ card, index }) {
  const Preview = PREVIEW_MAP[card.id];
  return (
    <div
      data-testid={`ai-card-${card.id}`}
      className="
        group relative overflow-hidden rounded-3xl
        bg-[#0c0c14]
        border border-white/[0.06]
        hover:border-[var(--accent)]/40
        hover:-translate-y-1
        hover:shadow-lg
        transition-all duration-300 ease-out
        cursor-default
        flex flex-col h-full
        w-full
      "
      style={{
        opacity: 1,
        animation: `card-enter 0.8s ease-out ${index * 0.12}s both`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
      }}
    >
      {/* Badge (Absolutely Positioned) */}
      {card.badge && (
        <div className="absolute top-5 right-5 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded border border-[var(--accent)]/30 bg-[#0c0c14] text-[var(--accent)] text-[11px] font-bold tracking-wide uppercase">
            {card.badge}
          </span>
        </div>
      )}

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-[15%] right-[15%] h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)"
        }}
      />

      {/* Card inner content */}
      <div className="relative z-[5] p-6 md:p-8 flex flex-col flex-1 pb-8">
        {/* UI Preview area */}
        <div
          className="h-48 md:h-52 w-full rounded-2xl bg-white/[0.02] border border-white/[0.04] mb-6 overflow-hidden flex-shrink-0"
          data-testid={`preview-${card.id}`}
        >
          <Preview />
        </div>

        {/* Title */}
        <div className="flex flex-col mb-2.5 mt-2">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight text-[var(--foreground)] pr-2">
            {card.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm md:text-[15px] text-[var(--muted-foreground)] leading-relaxed mt-auto pt-2">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function AICardSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="loesungen"
      data-testid="ai-card-section"
      className="py-20 md:py-28 px-5 md:px-8 max-w-7xl mx-auto w-full scroll-mt-20 relative"
    >
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)]"
          data-testid="section-heading"
        >
          Diese Aufgaben laufen künftig automatisch im Hintergrund
        </h2>
        <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto">
          Weniger manuelle Arbeit. Mehr Zeit für das, was Ihr Unternehmen voranbringt.
        </p>
      </div>

      {/* Card grids — single scroll-triggered entrance, fires once */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top row – 3 equal cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-6"
          data-testid="card-grid-top"
        >
          {TOP_CARDS.map((card, index) => (
            <AICard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Bottom row – 2 equal cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
          data-testid="card-grid-bottom"
        >
          {BOTTOM_CARDS.map((card, index) => (
            <AICard key={card.id} card={card} index={index + 3} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
