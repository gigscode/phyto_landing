'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    icon: Shield,
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
    product: 'AB-MaL',
    tagline: 'Proactive Protection',
    headline: 'Stop Malaria Before It Stops You',
    body: 'Keep AB-MaL in your home medicine cabinet. At the first sign of fever, chills, or body aches - you are already armed. 5 days to full clearance.',
    proof: '5-Day Clearance',
    href: '/ab-mal',
    price: '₦10,000',
  },
  {
    icon: Zap,
    color: 'bg-blue-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
    product: 'Virucidine',
    tagline: 'Rapid Recovery',
    headline: 'Shut Down Viral Symptoms Fast',
    body: '92.3% of users tested negative for viral infection within 7 days. Zero adverse effects. NIMR-validated. This is Africa\'s scientifically proven antiviral liquid.',
    proof: '92.3% Negative in 7 Days',
    href: '/virucidine',
    price: '₦15,000',
  },
  {
    icon: Sparkles,
    color: 'bg-purple-500',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    bgColor: 'bg-purple-500/5',
    product: 'AB Health Animation',
    tagline: 'Daily Wellness',
    headline: 'Age Better. Feel Younger. Every Day.',
    body: 'Three powerful West African botanicals working together daily - reducing inflammation, balancing metabolism, and protecting you at the cellular level.',
    proof: 'Daily Anti-Aging Defense',
    href: '/ab-animation',
    price: '₦25,000',
  },
];

export function EcosystemSection() {
  return (
    <section className="py-28 bg-slate-950 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-emerald-400 tracking-wider uppercase mb-6"
          >
            THE PHYTOGENIX ECOSYSTEM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5"
          >
            Three Products.
            <br />
            <span className="text-emerald-400">Complete Coverage.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Each formula targets a different health challenge - together, they give your family
            complete plant-based protection for the short and long term.
          </motion.p>
        </div>

        {/* Product pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.product}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={pillar.href} className="group block h-full">
                <div className={`h-full rounded-3xl border ${pillar.borderColor} ${pillar.bgColor} p-7 flex flex-col hover:bg-white/5 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <pillar.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Labels */}
                  <p className={`text-xs font-bold tracking-widest uppercase ${pillar.textColor} mb-2`}>
                    {pillar.tagline}
                  </p>
                  <p className="text-white/30 text-xs font-medium mb-4">{pillar.product}</p>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-white/90">
                    {pillar.headline}
                  </h3>

                  {/* Body */}
                  <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">
                    {pillar.body}
                  </p>

                  {/* Proof pill */}
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border ${pillar.borderColor} ${pillar.bgColor} text-xs font-bold ${pillar.textColor} mb-6 self-start`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${pillar.color}`} />
                    {pillar.proof}
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/8">
                    <span className="text-yellow-400 font-black text-base">{pillar.price}</span>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${pillar.textColor} group-hover:gap-2.5 transition-all`}>
                      Shop Now
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom full-family pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-1">Best Value</p>
            <h4 className="text-white font-bold text-xl md:text-2xl">Stock all three for complete family coverage.</h4>
            <p className="text-white/40 text-sm mt-1">Many Nigerian families keep all three PhytoGenix products at home - so they are always prepared, not scrambling.</p>
          </div>
          <Link
            href="#products"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold px-8 py-3.5 text-sm transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/20"
          >
            Shop All Three
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
