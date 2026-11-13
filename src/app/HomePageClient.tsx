'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SITE, SERVICES, STRATEGIC_SERVICES, PROCESS_STEPS, PORTFOLIO_ITEMS, TESTIMONIALS, CLIENT_LOGOS } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// ── Production-first marquee ──
const MARQUEE_ITEMS = [
  'CINEMA 4K',
  'COLOR GRADING',
  'PRO AUDIO MIXING',
  'FAA CERTIFIED DRONE',
  'COMMERCIAL FILM',
  'MUSIC PRODUCTION',
  'PORTRAIT PHOTOGRAPHY',
  'BRANDED CONTENT',
  'LIVE EVENT COVERAGE',
  'STUDIO RENTAL',
]

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '30+', label: 'Brands Built' },
  { value: 'Since 2019', label: 'Founded' },
  { value: 'Miami, FL', label: 'Headquarters' },
]

// ── Six core production disciplines ──
const PRODUCTION_CAPABILITIES = [
  {
    id: 'film',
    craft: 'Film & Video',
    tagline: 'Story through motion.',
    specs: ['4K Cinema Production', 'Music Videos', 'Commercial Brand Film', 'Event Recaps', 'Color Graded & Sound-Mixed'],
    image: '/images/7nJb7Wyrlidy0IJtqubJvTVE.jpg',
    href: '/services#videography',
  },
  {
    id: 'photo',
    craft: 'Photography',
    tagline: 'The frame that stops time.',
    specs: ['Commercial & Brand', 'Portrait & Editorial', 'Events & Nightlife', 'Real Estate', 'Product Photography'],
    image: '/images/f0xTwK2sFT7WC47RQXuNuTiQAQ.jpg',
    href: '/services#photography',
  },
  {
    id: 'audio',
    craft: 'Music Production',
    tagline: 'Sound engineered to move people.',
    specs: ['Professional Recording', 'Mixing & Mastering', 'Session Engineering', 'Sound Design', 'Original Score'],
    image: '/images/AsmzNHiCBcN8hI6tiW2rKPCAq6A.jpg',
    href: '/services#music-production',
  },
  {
    id: 'drone',
    craft: 'Aerial & Drone',
    tagline: 'Miami from above.',
    specs: ['FAA Part 107 Certified', 'Real Estate Aerial', 'Event Coverage', 'Commercial Landscape', 'Night Aerials'],
    image: '/images/CkyMu8rgNuTMYvKogFZBHtKo0.jpg',
    href: '/services#drone',
  },
  {
    id: 'studio',
    craft: 'Studio Space',
    tagline: 'Built to produce. Open to book.',
    specs: ['Cyclorama Wall (Cyc)', 'Bay Door for Vehicle Shoots', 'Full Lighting Grid', 'Hair & Makeup Station', 'Recording Booth'],
    image: '/images/9p1CHZtoTcDXwMsJaOYKlTfmA2o.jpg',
    href: '/studio',
  },
  {
    id: 'design',
    craft: 'Graphic Design',
    tagline: 'Visual language that commands attention.',
    specs: ['Brand Identity Systems', 'Album & EP Artwork', 'Campaign Creative', 'Motion Graphics', 'Print & Digital'],
    image: '/images/85jPPiW2lCJHtbpHqKhJBs8jWQM.png',
    href: '/services#graphic-design',
  },
]

// ── Behind-the-scenes placeholders ──
const BTS_MOMENTS = [
  {
    label: 'On Set',
    aspect: '4/3' as const,
    wide: true,
    placeholder: '[PLACEHOLDER: Wide on-set shot during commercial video production — camera crew, lighting techs, and talent in frame. Moody cinematic color grade.]',
  },
  {
    label: 'In the Booth',
    aspect: '3/4' as const,
    wide: false,
    placeholder: '[PLACEHOLDER: Recording session — artist visible through booth glass, engineer at console in foreground. Warm atmospheric lighting.]',
  },
  {
    label: 'On Location',
    aspect: '3/4' as const,
    wide: false,
    placeholder: '[PLACEHOLDER: Location shoot in action — photographer at work, golden hour light, Miami backdrop. Documentary-style candid.]',
  },
  {
    label: 'Aerial Setup',
    aspect: '4/3' as const,
    wide: false,
    placeholder: '[PLACEHOLDER: FAA drone pilot prepping equipment on location. Miami skyline or luxury property in background. Pro gear visible.]',
  },
  {
    label: 'Post Production',
    aspect: '4/3' as const,
    wide: true,
    placeholder: '[PLACEHOLDER: Color grading suite — editor at workstation with dual monitors showing footage in timeline. Atmospheric dim studio environment.]',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-sirak-red' : 'text-sirak-text-tertiary'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  const featuredPortfolio = PORTFOLIO_ITEMS.filter((item) => item.featured)
  const marqueeText = MARQUEE_ITEMS.join(' \u00B7 ') + ' \u00B7 '

  return (
    <main>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Cinematic, production-first, left-aligned
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-end pb-24 md:pb-36">
        {/* Showreel video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/g0j5XrrhGCoktAeAqFsRY6fqk8.png"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/sirak-showreel.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient — heavy top bar, fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-sirak-black via-sirak-black/20 to-sirak-black" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-sirak-black/70 via-transparent to-sirak-black/40" />
        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px',
          }}
          aria-hidden="true"
        />

        {/* Content — bottom-left anchored */}
        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              {/* Eyebrow label */}
              <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.45em] mb-6">
                Miami Production Studio — Est. {SITE.founded}
              </p>

              {/* Display headline */}
              <h1
                className="font-[family-name:var(--font-teko)] uppercase leading-[0.88] tracking-tight text-sirak-white mb-8"
                style={{ fontSize: 'clamp(4.5rem, 13vw, 12rem)' }}
              >
                We Make<br />
                <span className="text-sirak-red">The Work.</span>
              </h1>

              {/* Sub statement */}
              <p
                className="text-sirak-text-secondary leading-relaxed mb-10 max-w-lg"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
              >
                Full-scale production studio in Miami. Photography, film, music, drone, and branded content — conceived, executed, and delivered in-house at a world-class standard.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('reel')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 bg-sirak-red text-white font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:brightness-110 transition-all animate-pulse-glow cursor-pointer"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch the Reel
                </button>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 border border-sirak-white/30 text-white font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:border-sirak-red hover:text-sirak-red transition-all"
                >
                  View Our Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint — bottom right */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2 opacity-50">
          <span className="text-sirak-text-tertiary text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="animate-bounce">
            <svg className="w-4 h-4 text-sirak-text-tertiary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MARQUEE — Production-spec disciplines
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="overflow-hidden border-y border-sirak-border py-4 bg-sirak-surface">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex shrink-0">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="font-[family-name:var(--font-teko)] uppercase text-xl sm:text-2xl md:text-3xl text-sirak-text-tertiary tracking-[0.2em] px-4"
                aria-hidden={copy > 0}
              >
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0" aria-hidden="true">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="font-[family-name:var(--font-teko)] uppercase text-xl sm:text-2xl md:text-3xl text-sirak-text-tertiary tracking-[0.2em] px-4"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THE REEL — Showreel showcase section
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="reel" className="relative py-24 md:py-36 bg-sirak-black overflow-hidden">
        {/* Giant ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-[family-name:var(--font-teko)] uppercase text-sirak-white leading-none whitespace-nowrap"
            style={{ fontSize: 'clamp(10rem, 30vw, 28rem)', opacity: 0.018 }}
          >
            REEL
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.4em] mb-3">
                  Sirak Studios — 2025
                </p>
                <h2
                  className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  The Showreel
                </h2>
              </div>
              <p className="text-sirak-text-secondary max-w-sm text-sm leading-relaxed md:text-right">
                A 90-second cut of our best work — photography, film, music videos, aerial, and commercial content. All produced in-house, right here in Miami.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Video embed / placeholder ── */}
          <ScrollReveal>
            <div className="relative w-full aspect-video bg-sirak-surface rounded-lg overflow-hidden group cursor-pointer border border-sirak-border hover:border-sirak-red/40 transition-colors duration-500">
              {/* Film-strip accent lines */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-sirak-red z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-sirak-red/20 z-10" />

              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sirak-surface via-sirak-black to-sirak-surface">
                {/* Play button */}
                <div className="w-24 h-24 rounded-full border-2 border-sirak-red/50 flex items-center justify-center mb-6 group-hover:border-sirak-red group-hover:scale-110 group-hover:bg-sirak-red/10 transition-all duration-500">
                  <svg className="w-10 h-10 text-sirak-red ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sirak-text-tertiary text-[10px] uppercase tracking-[0.4em] mb-2">Now Playing</p>
                <p className="font-[family-name:var(--font-teko)] uppercase text-white text-2xl sm:text-3xl tracking-wide mb-4">
                  Sirak Studios — Showreel 2025
                </p>
                <p className="text-sirak-text-secondary text-xs text-center max-w-lg leading-relaxed italic px-6">
                  [PLACEHOLDER: Embed the Sirak Studios 2025 showreel here. Recommended 60–90 second high-energy cut featuring best moments from photography, film, music videos, drone footage, and commercial work. Source: /videos/sirak-showreel.mp4 or a hosted Vimeo/YouTube embed for optimal performance.]
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick stats below the reel */}
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { v: '500+', l: 'Projects Captured' },
                { v: '6', l: 'Production Disciplines' },
                { v: '24 / 7', l: 'Studio Available' },
              ].map((s) => (
                <div key={s.l} className="text-center py-5 border border-sirak-border rounded-sm">
                  <div className="font-[family-name:var(--font-teko)] uppercase text-3xl sm:text-4xl text-white">{s.v}</div>
                  <div className="text-sirak-text-tertiary text-[10px] uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PRODUCTION CAPABILITIES — Six disciplines, image-driven
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 px-6 bg-sirak-surface">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.4em] mb-4">
                  Production Studio
                </p>
                <h2
                  className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  What We<br />Make
                </h2>
              </div>
              <p className="text-sirak-text-secondary max-w-md text-base leading-relaxed">
                Six production disciplines. One team. Everything built in Miami and delivered at a standard that moves markets.
              </p>
            </div>
          </ScrollReveal>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTION_CAPABILITIES.map((cap, i) => {
              // Vary aspect ratios for visual rhythm
              const aspectRatio = i === 0 ? '16/9' : i === 2 ? '3/4' : i === 3 ? '3/4' : '1/1'
              return (
                <ScrollReveal key={cap.id} delay={i * 80}>
                  <Link
                    href={cap.href}
                    className="group relative flex overflow-hidden rounded-lg border border-sirak-border hover:border-sirak-red/50 transition-all duration-500"
                    style={{ aspectRatio }}
                  >
                    {/* Background image */}
                    <Image
                      src={cap.image}
                      alt={cap.craft}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-75"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Persistent gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sirak-black via-sirak-black/30 to-transparent group-hover:via-sirak-black/50 transition-all duration-500" />

                    {/* Card content */}
                    <div className="relative z-10 w-full flex flex-col justify-between p-6">
                      {/* Top row: number + arrow */}
                      <div className="flex items-start justify-between">
                        <span className="font-[family-name:var(--font-teko)] text-5xl leading-none" style={{ color: 'rgba(255,255,255,0.12)' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="w-8 h-8 rounded-full border border-sirak-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-400">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </span>
                      </div>

                      {/* Bottom: craft name + hover specs */}
                      <div>
                        <p className="text-sirak-red text-[10px] font-semibold uppercase tracking-[0.3em] mb-1.5">
                          {cap.tagline}
                        </p>
                        <h3 className="font-[family-name:var(--font-teko)] uppercase text-3xl md:text-4xl text-white leading-[0.95] mb-3">
                          {cap.craft}
                        </h3>
                        {/* Specs — slide in on hover */}
                        <ul className="space-y-1.5 overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                          {cap.specs.map((spec) => (
                            <li key={spec} className="text-sirak-text-secondary text-xs flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-sirak-red flex-shrink-0" aria-hidden="true" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED WORK — Large hero + masonry grid
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 px-6 bg-sirak-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.4em] mb-4">
                  Selected Projects
                </p>
                <h2
                  className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  Our Work
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="self-start md:self-end inline-flex items-center gap-2 border border-sirak-white/20 text-sirak-text-secondary hover:border-sirak-red hover:text-white text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all"
              >
                View Full Portfolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Hero featured project — cinematic wide */}
          {featuredPortfolio[0] && (
            <ScrollReveal>
              <div
                className="group relative w-full overflow-hidden rounded-lg mb-5 cursor-pointer"
                style={{ aspectRatio: '21/9' }}
              >
                <Image
                  src={featuredPortfolio[0].image}
                  alt={featuredPortfolio[0].title}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sirak-black/80 via-transparent to-transparent" />
                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between">
                  <div>
                    <span className="text-sirak-red text-[10px] font-semibold uppercase tracking-widest">
                      {featuredPortfolio[0].category}
                    </span>
                    <h3 className="font-[family-name:var(--font-teko)] uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.9] mt-1">
                      {featuredPortfolio[0].title}
                    </h3>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full border border-sirak-white/30 items-center justify-center flex-shrink-0 group-hover:border-sirak-red group-hover:bg-sirak-red transition-all duration-300">
                    <svg className="w-4 h-4 text-white ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Masonry grid — remaining featured items */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {featuredPortfolio.slice(1).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 80}>
                <div className="group relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={i % 3 === 0 ? 450 : i % 3 === 1 ? 340 : 500}
                    className="w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-sirak-black/0 group-hover:bg-sirak-black/50 transition-all duration-300 flex items-end">
                    <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] uppercase tracking-widest text-sirak-red font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-teko)] uppercase text-2xl text-white leading-[0.95] mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THE STUDIO — Facility deep-dive
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 bg-sirak-surface">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.4em] mb-4">
                2219 NW 28th St — Miami, FL
              </p>
              <h2
                className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
              >
                Built for<br /><span className="text-sirak-red">Production</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Photo/Video Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Studio image */}
            <ScrollReveal>
              <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/9p1CHZtoTcDXwMsJaOYKlTfmA2o.jpg"
                  alt="Sirak Studios Photo/Video Stage — Miami"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-sirak-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded px-4 py-3 border border-sirak-border/50">
                    <p className="text-sirak-text-tertiary text-[10px] leading-relaxed italic">
                      [PLACEHOLDER: Wide-angle interior of the photo/video stage — cyclorama wall, overhead lighting grid, open floor, bay doors visible in background. Clean, dramatic, professional. Aspect ratio 4:3.]
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stage specs */}
            <ScrollReveal delay={150}>
              <div>
                <h3 className="font-[family-name:var(--font-teko)] uppercase text-4xl md:text-5xl text-white mb-2 leading-[0.9]">
                  Photo / Video Stage
                </h3>
                <p className="text-sirak-text-secondary text-sm mb-8 leading-relaxed">
                  A full production stage in the heart of Miami. Bay door access for vehicle shoots, a professional lighting grid, and a seamless cyclorama wall — built to handle everything from single-frame product shots to full commercial campaigns.
                </p>
                <ul className="space-y-0 divide-y divide-sirak-border mb-8">
                  {[
                    { label: 'Cyclorama Wall (Cyc)', detail: 'Seamless infinity wall for clean, scalable backgrounds' },
                    { label: 'Professional Lighting Grid', detail: 'Full overhead rigging system with modular fixtures' },
                    { label: 'Bay Door Access', detail: 'Oversized entry for vehicles and large equipment load-in' },
                    { label: 'Hair & Makeup Station', detail: 'Dedicated talent prep area on-site' },
                    { label: 'Equipment Rental Available', detail: 'Cameras, lenses, grip, and full lighting packages' },
                    { label: 'Client Lounge', detail: 'Comfortable staging area for creative direction' },
                  ].map((feat) => (
                    <li key={feat.label} className="flex items-start gap-4 py-3">
                      <span className="text-sirak-red text-xs mt-0.5 flex-shrink-0" aria-hidden="true">◉</span>
                      <div>
                        <span className="text-white text-sm font-semibold">{feat.label}</span>
                        <span className="text-sirak-text-tertiary text-xs block mt-0.5">{feat.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Recording Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Recording specs — reversed order on desktop */}
            <ScrollReveal className="order-2 lg:order-1" delay={150}>
              <div>
                <h3 className="font-[family-name:var(--font-teko)] uppercase text-4xl md:text-5xl text-white mb-2 leading-[0.9]">
                  Recording Studio
                </h3>
                <p className="text-sirak-text-secondary text-sm mb-8 leading-relaxed">
                  Professional recording booth and control room with an in-house engineer included with every booking. Built for artists, podcasters, voiceover talent, and sound design work at any level.
                </p>
                <ul className="space-y-0 divide-y divide-sirak-border mb-8">
                  {[
                    { label: 'Professional Recording Booth', detail: 'Acoustically isolated and treated for pristine audio capture' },
                    { label: 'Control Room & Pro Console', detail: 'Industry-standard mixing environment' },
                    { label: 'Engineer Included', detail: 'Every session — no hidden cost, no extra booking required' },
                    { label: 'Full Session Support', detail: 'From setup to final export, we handle the technical' },
                    { label: 'Artist Lounge', detail: 'Comfortable between-takes space with seating and amenities' },
                  ].map((feat) => (
                    <li key={feat.label} className="flex items-start gap-4 py-3">
                      <span className="text-sirak-red text-xs mt-0.5 flex-shrink-0" aria-hidden="true">◉</span>
                      <div>
                        <span className="text-white text-sm font-semibold">{feat.label}</span>
                        <span className="text-sirak-text-tertiary text-xs block mt-0.5">{feat.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 bg-sirak-red text-white font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Book the Studio
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Recording studio image */}
            <ScrollReveal className="order-1 lg:order-2">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/AsmzNHiCBcN8hI6tiW2rKPCAq6A.jpg"
                  alt="Sirak Studios Recording Studio — Miami"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-sirak-black/25" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded px-4 py-3 border border-sirak-border/50">
                    <p className="text-sirak-text-tertiary text-[10px] leading-relaxed italic">
                      [PLACEHOLDER: Recording studio control room — wide shot showing mixing console, studio monitors, and ambient lighting. Artist/engineer visible. Professional audio environment. Aspect ratio 4:3.]
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BEHIND THE LENS — Horizontal BTS scroll strip
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 bg-sirak-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <ScrollReveal>
            <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              In the Field. In the Booth. On Location.
            </p>
            <h2
              className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Behind the Lens
            </h2>
          </ScrollReveal>
        </div>

        {/* Horizontally scrolling BTS strip */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]">
          {BTS_MOMENTS.map((moment, i) => (
            <ScrollReveal
              key={i}
              delay={i * 60}
              className={`flex-shrink-0 snap-start ${moment.wide ? 'w-[70vw] sm:w-[45vw] md:w-[36vw]' : 'w-[55vw] sm:w-[32vw] md:w-[24vw]'}`}
            >
              <div
                className="relative w-full overflow-hidden rounded-lg bg-sirak-surface border border-sirak-border hover:border-sirak-red/40 transition-colors duration-300"
                style={{ aspectRatio: moment.aspect }}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
                  <div className="w-8 h-8 rounded-full border border-sirak-border flex items-center justify-center mb-4">
                    <span className="text-sirak-text-tertiary text-xs font-[family-name:var(--font-teko)]">{i + 1}</span>
                  </div>
                  <p className="text-sirak-text-tertiary text-[10px] text-center leading-relaxed">
                    {moment.placeholder}
                  </p>
                </div>
                {/* Category label */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-sirak-red text-[10px] font-semibold uppercase tracking-[0.3em]">
                    {moment.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* End padding */}
          <div className="w-6 flex-shrink-0" aria-hidden="true" />
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-4">
          <p className="text-sirak-text-tertiary text-[10px] uppercase tracking-widest">← Scroll to explore →</p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TRUSTED BY — Client logos
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-20 px-6 bg-sirak-surface border-y border-sirak-border">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-sirak-text-tertiary text-xs uppercase tracking-[0.3em] text-center mb-10">
              Trusted by leading brands, venues &amp; artists across Miami and beyond
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-50 hover:opacity-70 transition-opacity duration-500">
              {CLIENT_LOGOS.map((client) => (
                <div
                  key={client.name}
                  className="w-full max-w-[110px] h-10 relative flex items-center justify-center hover:opacity-100 transition-opacity"
                  title={client.name}
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-contain filter brightness-0 invert"
                    sizes="110px"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BRAND & STRATEGY — Secondary, supporting production
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 px-6 bg-sirak-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              Beyond Production
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
              <h2
                className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                We Build the<br />Brand <span className="text-sirak-red">Around It</span>
              </h2>
              <p className="text-sirak-text-secondary max-w-md text-base leading-relaxed">
                Production without strategy is just content. We offer full brand development, web presence, and social media management so the work we make actually moves your business forward.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {STRATEGIC_SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <Link
                  href={`/services#${service.id}`}
                  className="group glass rounded-xl p-8 h-full flex flex-col hover:border-t-2 hover:border-t-sirak-red transition-all duration-300 border border-sirak-border"
                >
                  <div
                    className="font-[family-name:var(--font-teko)] text-6xl text-sirak-red leading-none mb-4"
                    style={{ opacity: 0.12 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-[family-name:var(--font-teko)] uppercase text-3xl md:text-4xl text-white mb-2 leading-[0.95]">
                    {service.title}
                  </h3>
                  <p className="text-sirak-red text-xs font-semibold uppercase tracking-widest mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sirak-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <span className="text-sirak-cyan text-xs font-semibold uppercase tracking-wider group-hover:text-white transition-colors flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW WE WORK — Condensed process
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 px-6 bg-sirak-surface">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-teko)] uppercase text-5xl sm:text-6xl md:text-7xl text-center mb-4 leading-[0.95]">
              How We <span className="text-sirak-red">Work</span>
            </h2>
            <p className="text-sirak-text-secondary text-center text-lg mb-14 max-w-2xl mx-auto">
              A production-first process built to move fast without cutting corners.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 120}>
                <div className="glass rounded-xl p-6 h-full relative group hover:border-t-2 hover:border-t-sirak-red transition-all duration-300">
                  <div
                    className="font-[family-name:var(--font-teko)] text-6xl font-bold text-sirak-red absolute top-4 right-4 leading-none"
                    style={{ opacity: 0.15 }}
                  >
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="font-[family-name:var(--font-teko)] uppercase text-3xl text-white mb-1 leading-[0.95]">
                    {step.title}
                  </h3>
                  <p className="text-sirak-red text-xs font-semibold uppercase tracking-widest mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sirak-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 px-6 bg-sirak-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-[family-name:var(--font-teko)] uppercase leading-[0.9] text-white mb-4"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              What Clients <span className="text-sirak-red">Say</span>
            </h2>
            <p className="text-sirak-text-secondary text-lg mb-14 max-w-xl">
              The work builds the relationship. The results keep it.
            </p>
          </ScrollReveal>

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide">
            {TESTIMONIALS.map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 100} className="min-w-[300px] md:min-w-0 snap-start">
                <div className="glass rounded-lg p-6 h-full flex flex-col justify-between border border-sirak-border">
                  <div>
                    <StarRating rating={testimonial.rating} />
                    <p className="text-sirak-text italic mt-4 text-sm leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-sirak-border">
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-sirak-text-tertiary text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS BAR
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-20 border-y border-sirak-border bg-sirak-surface overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-sirak-red" />
        {/* Ghost monogram */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span
            className="font-[family-name:var(--font-teko)] text-sirak-white leading-none tracking-wider"
            style={{ fontSize: '32vw', opacity: 0.018 }}
          >
            SS
          </span>
        </div>
        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="group">
                <div className="font-[family-name:var(--font-teko)] uppercase text-5xl sm:text-6xl md:text-7xl text-white leading-[0.95] group-hover:text-sirak-red transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sirak-text-tertiary text-xs uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FINAL CTA — Cinematic close
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sirak-black" />
        {/* Atmospheric red glow from below */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-sirak-red/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-sirak-red/25" />

        <ScrollReveal>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="text-sirak-red text-xs font-semibold uppercase tracking-[0.5em] mb-6">
              Let&apos;s Make Something Real
            </p>
            <h2
              className="font-[family-name:var(--font-teko)] uppercase leading-[0.88] text-white mb-8"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
            >
              Ready to<br /><span className="text-sirak-red">Create?</span>
            </h2>

            <p className="text-sirak-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              From a single shoot to a full brand launch — we&apos;re set up to handle the whole production. Tell us what you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/book"
                className="inline-block bg-sirak-red text-white font-semibold px-10 py-5 rounded-sm text-sm uppercase tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
              >
                Book a Session
              </Link>
              <Link
                href="/contact?type=quote"
                className="inline-block border border-sirak-white/30 text-white font-semibold px-10 py-5 rounded-sm text-sm uppercase tracking-wider hover:border-sirak-red hover:text-sirak-red transition-all"
              >
                Get a Quote
              </Link>
            </div>

            <a
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              className="text-sirak-text-tertiary hover:text-sirak-cyan transition-colors text-sm tracking-[0.3em] uppercase"
            >
              {SITE.phone}
            </a>
          </div>
        </ScrollReveal>
      </section>

    </main>
  )
}
