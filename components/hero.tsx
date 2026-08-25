'use client';

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    /*
     * SECTION
     * - warm cream background matching the reference (#f0efe9)
     * - no dark overlays or grid patterns
     * - overflow-hidden so the large BG circle doesn't cause scroll
     */
    <section
      className="relative z-20 overflow-visible sm:overflow-hidden flex flex-col min-h-screen"
      style={{ backgroundColor: '#f0efe9' }}
    >
      {/* ── Navbar spacer ──────────────────────────────────────────────── */}
      <div className="h-16 shrink-0" />

      {/* ── Large organic background circle (right column, behind products) ── */}
      {/*
       * The background circle is kept at reduced opacity - the composite
       * image (phro.png) already contains the pedestals and botanicals,
       * but the circle adds warmth behind the image on larger screens.
       */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: '820px',
          height: '820px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185, 214, 191, 0.95) 0%, rgba(177, 207, 182, 0.72) 34%, rgba(177, 207, 182, 0.22) 62%, rgba(177, 207, 182, 0.05) 74%, transparent 80%)',
          top: '50%',
          right: '-4%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          opacity: 1,
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.30)',
        }}
      />

      {/* ── Main content grid ───────────────────────────────────────────── */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 md:pt-12 pb-12 md:pb-20"
      >

        {/* Top eyebrow badge - carried over, colours updated in Chunk 3 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-white/70 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            Nature. Science. Wellness.
          </div>
        </motion.div>

        {/*
         * TWO-COLUMN GRID
         * Desktop: 45 / 55 split, matching the reference weighting
         * Mobile:  single column, left content first then product showcase
         */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-14 lg:gap-20 items-center">

          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN
          ══════════════════════════════════════════════════════════════ */}
          <div className="text-center lg:text-left mb-26 lg:mb-0">

            {/* ── Headline ──────────────────────────────────────────────── */}
            {/*
             * Reference layout:
             *   Line 1: "Natural Solutions"          - dark forest green, heavy
             *   Line 2: "for a Healthier You"        - same weight, but
             *            "Healthier" is italic + slightly lighter green
             *
             * We adapt the wording to our actual brand positioning while
             * preserving the two-line structure and italic accent exactly.
             */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.75rem] sm:text-6xl lg:text-[4.1rem] xl:text-[4.8rem] font-extrabold leading-[1.02] tracking-tight"
              style={{ color: '#1a3a2a' }}
            >
              Natural Solutions
              <br />
              <span style={{ color: '#1a3a2a' }}>for a </span>
              <em
                className="not-italic"
                style={{
                  color: '#4a8c5c',
                  fontStyle: 'italic',
                  fontWeight: 800,
                }}
              >
                Healthier
              </em>
              <span style={{ color: '#1a3a2a' }}> You</span>
            </motion.h1>

            {/* ── Supporting paragraph ──────────────────────────────────── */}
            {/*
             * Reference: short, 2 lines max, muted dark grey, left-aligned.
             * Accurately represents our product ecosystem without
             * research/academic framing.
             */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base md:text-[1.08rem] leading-relaxed max-w-[420px] mx-auto lg:mx-0"
              style={{ color: '#4a5c52' }}
            >
              Discover our carefully formulated herbal products -
              NAFDAC-approved and built to protect your family naturally.
            </motion.p>

            {/* ── CTA buttons ───────────────────────────────────────────── */}
            {/*
             * Reference: two side-by-side pills.
             *   Primary:   dark green filled, "Shop All Products" + arrow
             *   Secondary: white/outlined ghost,  "Learn More" + icon
             * Both are rounded-full, height ~48px (not oversized).
             */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {/* Primary CTA - dark green, matches navbar "Shop Now" */}
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full px-7 h-12 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-md"
                style={{ backgroundColor: '#1e4d35' }}
              >
                Shop All Products
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA - white pill with border, ghost style */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border px-7 h-12 text-sm font-semibold transition-all hover:bg-white/80 hover:scale-105 active:scale-95"
                style={{
                  borderColor: '#b8c9be',
                  backgroundColor: 'rgba(255,255,255,0.55)',
                  color: '#2d4a38',
                }}
              >
                Learn More
                {/* Small bookmark/info icon matching reference */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </motion.div>

          </div>
          {/* END LEFT COLUMN */}

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN - composite product showcase image
              /phro.png contains all three products already composed on
              sage pedestals with botanical elements. We display it as a
              single image and layer the numbered badges on top.
          ══════════════════════════════════════════════════════════════ */}
          <div
            className="relative w-full select-none ml-4 lg:ml-8 h-auto md:h-[820px] pb-30 md:pb-0"
            aria-label="Product showcase - Virucidine, AB Health Animation, AB-MaL"
          >
            {/* ── Composite product image ─────────────────────────────── */}
            <motion.img
              src="/phro.png"
              alt="PhytoGenix products - Virucidine, AB Health Animation and AB-MaL on display"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[46%] top-[52%] md:left-[44%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[80%] lg:w-[115%] max-w-[1400px] h-auto md:scale-105 lg:scale-110"
              style={{
                objectFit: 'contain',
                objectPosition: '35% center',
                  filter: 'drop-shadow(0 22px 34px rgba(28, 50, 33, 0.15))',
                mixBlendMode: 'multiply',
              }}
            />

            {/* ════════════════════════════════════════════════════════════
                PRODUCT NUMBER BADGES
                Anchored by percentage to match product positions in phro.png:
                  1 - Virucidine bottle  (left-centre of image)
                  2 - AB Animation bottle (upper-centre-right)
                  3 - AB-MaL box          (right, mid-height)
            ════════════════════════════════════════════════════════════ */}

            {/* Badge 1 - Virucidine */}
            <motion.div
              className="absolute hidden md:flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.9, ease: 'easeOut' }}
              style={{ top: '40%', left: '-6%', zIndex: 10 }}
            >
              <div
                className="flex items-center justify-center shrink-0 rounded-full text-white font-bold shadow-md"
                style={{ width: '26px', height: '26px', backgroundColor: '#1e4d35', fontSize: '12px' }}
              >
                1
              </div>
              <div
                className="rounded-xl px-3 py-2 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.96)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(180,210,185,0.45)',
                  minWidth: '122px',
                }}
              >
                <p className="text-[11px] font-bold leading-tight" style={{ color: '#1a3a2a' }}>Abuad Herbal</p>
                <p className="text-[10px] leading-tight mt-0.5" style={{ color: '#6a8070' }}>Virucidine Liquid</p>
              </div>
            </motion.div>

            {/* Badge 2 - AB Health Animation */}
            <motion.div
              className="absolute hidden md:flex items-center gap-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 1.0, ease: 'easeOut' }}
              style={{ top: '8%', left: '50%', zIndex: 10 }}
            >
              <div
                className="flex items-center justify-center shrink-0 rounded-full text-white font-bold shadow-md"
                style={{ width: '26px', height: '26px', backgroundColor: '#1e4d35', fontSize: '12px' }}
              >
                2
              </div>
              <div
                className="rounded-xl px-3 py-2 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.96)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(180,210,185,0.45)',
                  minWidth: '130px',
                }}
              >
                <p className="text-[11px] font-bold leading-tight" style={{ color: '#1a3a2a' }}>AB Health</p>
                <p className="text-[10px] leading-tight mt-0.5" style={{ color: '#6a8070' }}>Animation Capsules</p>
              </div>
            </motion.div>

            {/* Badge 3 - AB-MaL */}
            <motion.div
              className="absolute hidden md:flex items-center gap-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 1.1, ease: 'easeOut' }}
              style={{ top: '28%', right: '-40', zIndex: 10 }}
            >
              <div
                className="flex items-center justify-center shrink-0 rounded-full text-white font-bold shadow-md"
                style={{ width: '26px', height: '26px', backgroundColor: '#1e4d35', fontSize: '12px' }}
              >
                3
              </div>
              <div
                className="rounded-xl px-3 py-2 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.96)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(180,210,185,0.45)',
                  minWidth: '118px',
                }}
              >
                <p className="text-[11px] font-bold leading-tight" style={{ color: '#1a3a2a' }}>AB-MaL</p>
                <p className="text-[10px] leading-tight mt-0.5" style={{ color: '#6a8070' }}>250mg Capsules</p>
              </div>
            </motion.div>

          </div>
          {/* END RIGHT COLUMN */}

        </div>{/* end two-column grid */}

      </div>{/* end max-w container */}

      {/* ── Benefits strip - desktop (large cards) and mobile compact banner ── */}
      {/* Desktop/tablet: show full 4-card strip; Mobile: compact trust + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block absolute left-0 right-0 z-[100] px-6 sm:px-8 lg:px-12"
        style={{ bottom: '-40px' }}
      >
        <div
          className="mx-auto max-w-5xl rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 40px rgba(30,77,53,0.10), 0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: '#2d6a4a' }}>
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              ),
              title: '100% Natural',
              desc: 'Made from carefully selected natural ingredients',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: '#2d6a4a' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              ),
              title: 'Trusted Quality',
              desc: 'Produced to the highest standards of quality',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: '#2d6a4a' }}>
                  <path d="M10 2v2" /><path d="M14 2v2" /><path d="M12 6v2" />
                  <path d="M4 10h16" />
                  <path d="M5 10c0 6 2.5 10 7 10s7-4 7-10" />
                  <path d="M8 22h8" />
                </svg>
              ),
              title: 'Herbal Expertise',
              desc: 'Backed by traditional herbal knowledge',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: '#2d6a4a' }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
              title: 'Better Wellness',
              desc: 'Supporting your health the natural way',
            },
          ].map((benefit, i, arr) => (
            <div
              key={benefit.title}
              className="flex items-center gap-3 px-5 py-5 sm:px-6"
              style={{
                borderRight: i < arr.length - 1 ? '1px solid rgba(180,210,185,0.35)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(180,210,185,0.35)' : 'none',
              }}
            >
              <div
                className="shrink-0 flex items-center justify-center rounded-full"
                style={{ width: '42px', height: '42px', backgroundColor: '#eaf4eb' }}
              >
                {benefit.icon}
              </div>
              <div>
                <p className="text-sm font-bold leading-tight" style={{ color: '#1a3a2a' }}>
                  {benefit.title}
                </p>
                <p className="text-xs leading-relaxed mt-0.5" style={{ color: '#6a8070' }}>
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mobile compact banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="block sm:hidden absolute left-0 right-0 z-[100] px-6 sm:px-8 lg:px-12"
        style={{ bottom: '-24px' }}
      >
        <div className="mx-auto max-w-md bg-white rounded-2xl flex items-center gap-3 px-4 py-2 shadow-md justify-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 6c0 6-8 12-8 12S4 12 4 6a8 8 0 0 1 16 0z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-emerald-800">100% Natural • NAFDAC‑Approved</div>
              <div className="text-xs text-gray-500">Made from carefully selected natural ingredients</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* no bottom fade - benefits strip handles the visual transition */}
    </section>
  );
}
