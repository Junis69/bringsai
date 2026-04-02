import { BrowserRouter, Routes, Route, Navigate, useLocation, Link, useNavigationType } from "react-router-dom"
import { useEffect, useLayoutEffect, lazy, Suspense } from "react"
import { Navbar } from "./components/ui/Navbar"
import { SEOHead } from "./components/ui/SEOHead"
import { LanguageProvider } from "./lib/i18n"
import { Footer } from "./components/ui/Footer"

// Eagerly loaded: Homepage sections (critical path)
import { Hero } from "./components/sections/Hero"
import { AICardSection } from "./components/sections/AICardSection"
import { SavingsCalculator } from "./components/sections/SavingsCalculator"
import { Process } from "./components/sections/Process"
import { FAQ } from "./components/sections/FAQ"
import { PricingSection } from "./components/sections/PricingSection"
import { CaseStudiesSection } from "./components/sections/CaseStudiesSection"
import { ProblemSection } from "./components/sections/ProblemSection"
import { LandingServices } from "./components/sections/LandingServices"
import { FinalCTA } from "./components/sections/FinalCTA"


// Lazy loaded: Sub-pages (only loaded when visited)
const Impressum = lazy(() => import("./components/pages/Impressum").then(m => ({ default: m.Impressum })))
const Datenschutz = lazy(() => import("./components/pages/Datenschutz").then(m => ({ default: m.Datenschutz })))
const AGB = lazy(() => import("./components/pages/AGB").then(m => ({ default: m.AGB })))
const Leistungen = lazy(() => import("./components/pages/Leistungen").then(m => ({ default: m.Leistungen })))
const UeberUns = lazy(() => import("./components/pages/UeberUns").then(m => ({ default: m.UeberUns })))
const CaseStudyDetail = lazy(() => import("./components/pages/CaseStudyDetail").then(m => ({ default: m.CaseStudyDetail })))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-[var(--border)] border-t-[var(--foreground)] rounded-full animate-spin" />
    </div>
  )
}

function TrailingSlashRedirect() {
  const location = useLocation();

  if (location.pathname === '/de' || location.pathname === '/de/') {
    return <Navigate to={'/' + location.search + location.hash} replace />;
  }
  if (location.pathname.startsWith('/de/')) {
    return <Navigate to={location.pathname.replace('/de', '') + location.search + location.hash} replace />;
  }
  if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
    return <Navigate to={location.pathname.slice(0, -1) + location.search + location.hash} replace />;
  }
  return null;
}

/* ── Global Scroll Position Restoration ──
   Saves scroll position per route history key to sessionStorage.
   Restores it instantly on POP navigations (back/forward). */

function GlobalScrollRestoration() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      try {
        const saved = sessionStorage.getItem(`scroll-${location.key}`)
        if (saved) {
          const y = Number(saved)
          if (y > 0) {
            const htmlEl = document.documentElement
            const prev = htmlEl.style.scrollBehavior
            htmlEl.style.scrollBehavior = 'auto'
            window.scrollTo({ top: y, left: 0, behavior: 'instant' })
            requestAnimationFrame(() => { htmlEl.style.scrollBehavior = prev })
          }
        }
      } catch { /* ignore */ }
    } else if (!location.hash) {
      // PUSH or REPLACE without hash - scroll to top
      const htmlEl = document.documentElement
      const prev = htmlEl.style.scrollBehavior
      htmlEl.style.scrollBehavior = 'auto'
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      requestAnimationFrame(() => { htmlEl.style.scrollBehavior = prev })
    }
  }, [location.pathname, location.key, navigationType, location.hash])

  useEffect(() => {
    let rafId = 0
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        try {
          sessionStorage.setItem(`scroll-${location.key}`, String(window.scrollY))
        } catch { /* ignore */ }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.key])

  return null
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      // Skip hash scroll if we're restoring a saved scroll position via POP
      if (navigationType === 'POP') return

      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    }
  }, [pathname, hash, navigationType]);

  return null;
}

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center relative z-10">
        <h1 className="text-6xl font-bold text-[var(--foreground)] mb-4">404</h1>
        <p className="text-xl text-[var(--muted-foreground)] mb-8">Diese Seite wurde nicht gefunden.</p>
        <Link to="/" className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors">
          Zur Startseite
        </Link>
      </main>
      <Footer />
    </>
  )
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="space-y-0 relative z-10">
        <Hero />
        <CaseStudiesSection />
        <ProblemSection />
        <AICardSection />
        <Process />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <TrailingSlashRedirect />
      <GlobalScrollRestoration />
      <ScrollToHash />
      <SEOHead />
      <LanguageProvider>
        <div className="min-h-screen font-sans text-[var(--foreground)] antialiased selection:bg-[var(--accent)]/10 selection:text-[var(--accent)] relative overflow-x-hidden bg-[var(--background)]">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* German Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/leistungen" element={<Leistungen />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/fallstudien/:id" element={<CaseStudyDetail />} />

              {/* English Routes */}
              <Route path="/en" element={<HomePage />} />
              <Route path="/en/services" element={<Leistungen />} />
              <Route path="/en/about" element={<UeberUns />} />
              <Route path="/en/imprint" element={<Impressum />} />
              <Route path="/en/privacy" element={<Datenschutz />} />
              <Route path="/en/terms" element={<AGB />} />
              <Route path="/en/case-studies/:id" element={<CaseStudyDetail />} />

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
