'use client';

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const products = [
  { name: 'AB-MaL', sub: 'Malaria Shield', price: '₦10,000', href: '/ab-mal', color: 'border-emerald-500/30 hover:border-emerald-400/50', dot: 'bg-emerald-400' },
  { name: 'Virucidine', sub: 'Antiviral Liquid', price: '₦15,000', href: '/virucidine', color: 'border-blue-500/30 hover:border-blue-400/50', dot: 'bg-blue-400' },
  { name: 'AB Health Animation', sub: 'Anti-Aging Capsule', price: '₦25,000', href: '/ab-animation', color: 'border-purple-500/30 hover:border-purple-400/50', dot: 'bg-purple-400' },
];

export function CTASection() {
  return (
    <section className="relative py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-slate-950 min-h-[600px] flex items-center"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dsaqsxtup/image/upload/v1778521705/18426_ueg8rg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/85" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - headline & CTAs */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-emerald-400 tracking-wider uppercase mb-8"
              >
                <Zap className="w-3.5 h-3.5" />
                Start Your Health Journey
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
              >
                Your Family Deserves
                <br />
                <span className="text-emerald-400">Better Medicine.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Stop waiting until illness strikes. Stock your home with Nigeria's most trusted plant-based
                medicines - proven safe, approved by NAFDAC, and delivered to your door.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="rounded-full bg-yellow-400 px-10 h-14 text-slate-950 font-bold hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/20"
                >
                  <a href="#products">
                    Shop All Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full border-white/15 bg-white/5 px-10 h-14 text-white backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105"
                >
                  <Link href="/contact">
                    Bulk Orders
                  </Link>
                </Button>
              </motion.div>

              {/* Trust micro-signals */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                {[
                  { icon: ShieldCheck, label: 'Secure Paystack Checkout' },
                  { icon: Leaf, label: 'Free Delivery on Orders ₦30k+' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-white/35">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - product quick-buy cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="space-y-4"
            >
              {products.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link href={p.href}>
                    <div className={`group flex items-center justify-between p-5 rounded-2xl border bg-white/5 hover:bg-white/8 transition-all duration-300 ${p.color}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${p.dot} shrink-0`} />
                        <div>
                          <p className="text-white font-bold text-base">{p.name}</p>
                          <p className="text-white/40 text-xs">{p.sub}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-yellow-400 font-black text-base">{p.price}</span>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors group-hover:translate-x-1 transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              <div className="pt-2 flex items-center gap-2 text-xs text-white/25">
                <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
                <span>Payments secured by Paystack. Card, Transfer & USSD accepted.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
