'use client';

import { motion } from 'framer-motion';

const benefits = [
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
];

export function BenefitsStrip() {
  const featuredBenefit = benefits[0];

  return (
    /*
     * Sits between <Hero /> and <ProductsSection /> in page.tsx.
     * Negative margins pull it up into the hero and down into products
     * so it straddles the boundary — no absolute positioning needed,
     * no z-index battles, no overflow clipping issues.
     */
    <div
      className="relative z-10 w-full px-4 sm:px-8 lg:px-12"
      style={{ marginTop: '-32px', marginBottom: '-32px' }}
    >
      <div className="mx-auto max-w-5xl md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 rounded-[22px] border border-[#dfe9e1] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(30,77,53,0.08)]"
        >
          <div
            className="flex shrink-0 items-center justify-center rounded-full"
            style={{ width: '44px', height: '44px', backgroundColor: '#eaf4eb' }}
          >
            {featuredBenefit.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[17px] font-bold leading-[1.2] tracking-[-0.02em]" style={{ color: '#1a3a2a' }}>
              {featuredBenefit.title}
            </p>
            <p className="mt-1 text-sm leading-snug" style={{ color: '#6a8070' }}>
              {featuredBenefit.desc}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto hidden max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid lg:grid-cols-4"
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex min-h-[120px] items-center gap-3 rounded-[20px] border border-[#dfe9e1] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(30,77,53,0.08)] sm:px-5"
          >
            <div
              className="flex shrink-0 items-center justify-center rounded-full"
              style={{ width: '44px', height: '44px', backgroundColor: '#eaf4eb' }}
            >
              {benefit.icon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold leading-tight tracking-[-0.02em]" style={{ color: '#1a3a2a' }}>
                {benefit.title}
              </p>
              <p className="mt-1 text-xs leading-snug" style={{ color: '#6a8070' }}>
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
