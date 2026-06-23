'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { products } from '../lib/products';

export function ProductsSection() {
  return (
    <section id="products" className="w-full py-28 px-4 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-3">
            University Researched & Clinically Proven
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our Key Formulations
          </h2>
          <p className="text-slate-500 text-lg">
            Choose the specific formula researched at Afe Babalola University (ABUAD) Bogoro Research Institute.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => {
            // Assign specific border glows depending on product slug
            const cardTheme = product.slug === 'ab-mal' 
              ? 'group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10'
              : product.slug === 'virucidine'
              ? 'group-hover:border-blue-500/30 group-hover:shadow-blue-500/10'
              : 'group-hover:border-purple-500/30 group-hover:shadow-purple-500/10';

            const buttonTheme = product.slug === 'ab-mal'
              ? 'bg-emerald-500 hover:bg-emerald-400'
              : product.slug === 'virucidine'
              ? 'bg-blue-500 hover:bg-blue-400'
              : 'bg-purple-500 hover:bg-purple-400';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={`/${product.slug}`}
                  className="group block h-full"
                >
                  <div className={`relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500 p-5 flex flex-col justify-between h-full ${cardTheme}`}>
                    <div>
                      {/* Product Image Panel */}
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-100 border border-slate-200">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                          {product.badge}
                        </div>
                        <div className="absolute top-4 right-4 h-9 w-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-slate-200 text-yellow-500">
                          <Star className="w-4 h-4 fill-yellow-400" />
                        </div>
                      </div>

                      {/* Info Panel */}
                      <div className="space-y-3 px-1">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                            {product.name}
                          </h3>
                          <span className="font-bold text-lg text-emerald-400 shrink-0">{product.price}</span>
                        </div>
                        
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA Block */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>University Lab Tested</span>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all transform group-hover:translate-x-1 duration-300 ${buttonTheme}`}>
                        Shop Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}