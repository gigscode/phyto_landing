'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Leaf, Zap } from 'lucide-react';
import Link from 'next/link';
import { products } from '../lib/products';

const productThemes = {
  'ab-mal': {
    accent: 'emerald',
    cardBorder: 'group-hover:border-emerald-500/40',
    cardShadow: 'group-hover:shadow-emerald-500/10',
    badge: 'bg-emerald-500 text-white',
    btn: 'bg-emerald-500 hover:bg-emerald-400',
    dot: 'bg-emerald-400',
    pill: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    tagline: 'Your family\'s malaria first-line defense.',
    outcome: 'Clears symptoms in 5 days',
  },
  'virucidine': {
    accent: 'blue',
    cardBorder: 'group-hover:border-blue-500/40',
    cardShadow: 'group-hover:shadow-blue-500/10',
    badge: 'bg-blue-500 text-white',
    btn: 'bg-blue-500 hover:bg-blue-400',
    dot: 'bg-blue-400',
    pill: 'text-blue-600 bg-blue-50 border-blue-100',
    tagline: 'Shut down viral infections fast.',
    outcome: '92.3% negative in 7 days',
  },
  'ab-animation': {
    accent: 'purple',
    cardBorder: 'group-hover:border-purple-500/40',
    cardShadow: 'group-hover:shadow-purple-500/10',
    badge: 'bg-purple-500 text-white',
    btn: 'bg-purple-500 hover:bg-purple-400',
    dot: 'bg-purple-400',
    pill: 'text-purple-600 bg-purple-50 border-purple-100',
    tagline: 'Daily cellular protection from within.',
    outcome: 'Look and feel younger daily',
  },
};

export function ProductsSection() {
  return (
    <section id="products" className="w-full pt-28 pb-28 px-4 bg-white text-slate-900 relative z-0">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600 tracking-wider uppercase mb-6"
          >
            <Leaf className="w-3.5 h-3.5" />
            Three Products. One Ecosystem.
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900"
          >
            A Formula for Every
            <br />
            Health Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            PhytoGenix covers the full spectrum - from acute illness to long-term wellness.
            Each formula is plant-based, clinically evaluated, and NAFDAC-approved.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => {
            const theme = productThemes[product.slug as keyof typeof productThemes];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/${product.slug}`} className="group block h-full">
                  <div
                    className={`relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col h-full ${theme.cardBorder} ${theme.cardShadow}`}
                  >
                    {/* Product Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                      <motion.img
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Top badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg ${theme.badge}`}>
                          {product.badge}
                        </span>
                        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1.5 shadow-sm border border-slate-100">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-[11px] font-bold text-slate-900">{product.rating}</span>
                        </div>
                      </div>

                      {/* Outcome pill at bottom of image */}
                      <div className="absolute bottom-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border ${theme.pill}`}>
                          <Zap className="w-3 h-3" />
                          {theme.outcome}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex-1 space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                            {product.name}
                          </h3>
                          <span className="font-black text-lg text-slate-900 shrink-0 tabular-nums">{product.price}</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-tight">
                          {theme.tagline}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                          {product.description.split('.')[0]}.
                        </p>
                      </div>

                      {/* CTA row */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>NAFDAC Approved</span>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all group-hover:gap-2.5 duration-300 ${theme.btn}`}
                        >
                          Shop Now
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom credibility strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center"
        >
          {[
            { stat: '3', label: 'NAFDAC-Approved Formulas' },
            { stat: '100%', label: 'Plant-Based Ingredients' },
            { stat: 'NIMR', label: 'Clinically Evaluated' },
            { stat: 'ABUAD', label: 'University-Developed' },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-2xl font-black text-slate-900">{stat}</span>
              <span className="text-xs text-slate-400 font-medium mt-0.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
