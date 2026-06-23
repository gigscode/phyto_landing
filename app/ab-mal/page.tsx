'use client';

import React from 'react';
import { getProductBySlug } from '@/lib/products';
import { PaystackCheckout } from '@/components/paystack-checkout';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Heart, 
  ArrowRight,
  Package,
  CheckCircle2,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function AbMalPage() {
  const product = getProductBySlug('ab-mal');

  if (!product) {
    return <div className="text-white text-center py-24">Product configuration not found.</div>;
  }

  const handleScrollToCheckout = () => {
    document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppCheckout = () => {
    const encoded = encodeURIComponent(product.whatsappText);
    window.open(`https://wa.me/2347016897605?text=${encoded}`, '_blank');
  };

  return (
    <main className="w-full bg-slate-950 text-white pt-20 overflow-hidden">
      {/* Hero Section ATF */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-12 border-b border-slate-900">
        {/* Parallax/Floating Glows */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          {/* Left Column: Benefit and Copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Premium Medicine Cabinet Shield
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Eliminate Malaria Symptoms in 5 Days with AB-MaL.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Don't wait until you're shivering to run to the chemist. Keep ABUAD's organic, university-proven anti-malarial capsules stock-ready in your family medicine cabinet. 100% natural, fast acting, and NAFDAC compliant.
            </motion.p>

            {/* Above the Fold CTAs and Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <div className="bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4">
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Cabinet Pack Price</p>
                  <p className="text-3xl font-black text-emerald-400">{product.price}</p>
                </div>
                <div className="h-8 w-[1px] bg-white/15" />
                <div className="text-xs text-white/60">
                  <p className="font-bold text-white">Free Delivery</p>
                  <p>Across Nigeria</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0">
                <button
                  onClick={handleScrollToCheckout}
                  className="px-8 h-14 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 text-sm"
                >
                  Add to Cabinet (Paystack)
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleWhatsAppCheckout}
                  className="px-8 h-12 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  Buy Instantly on WhatsApp
                </button>
              </div>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 text-xs text-white/50 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NAFDAC Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ABUAD Lab Researched</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4 text-emerald-400" />
                <span>30 Capsules Per Pack</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Product Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-yellow-500/10 rounded-full blur-[80px]" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 p-4">
              <img
                src={product.image}
                alt="AB-MaL Bottle"
                className="w-full h-full object-contain rounded-2xl bg-slate-950"
              />
              <div className="absolute bottom-8 left-8 right-8 p-5 bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-2xl flex justify-between items-center text-xs">
                <div>
                  <p className="text-white/40 uppercase font-bold tracking-widest text-[9px] mb-1">Active compounds</p>
                  <p className="font-bold text-white">100% Herbal Extracts</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 uppercase font-bold tracking-widest text-[9px] mb-1">Research origin</p>
                  <p className="font-bold text-emerald-400">ABUAD Bogoro Centre</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Repositioning Section (Anti-Emergency Warning Card) */}
      <section className="py-20 px-6 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-yellow-500/10 text-yellow-400 rounded-2xl">
              <Clock className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Why buying anti-malarials during chills is a bad strategy</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                When you or your children feel the first signs of chills and fever, you walk to the local chemist and buy basic ACT blister packs. But waiting for symptoms to strike means you are reacting under stress.
              </p>
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-400 flex items-center gap-2">
                <Heart className="w-4 h-4 shrink-0" />
                <span><strong>The Premium Choice:</strong> Stock up on AB-MaL now. Be proactive, protect your children, and have clinical herbal relief ready instantly.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 border-b border-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How it Works</h2>
            <p className="text-white/50 text-sm mt-3">Simple 3-step preventive and therapeutic household protocol.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.howItWorks.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/5 rounded-3xl p-8 relative flex flex-col justify-between hover:border-emerald-500/20 transition-colors">
                <span className="absolute top-6 right-8 text-7xl font-black text-white/5 select-none">{item.step}</span>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    {idx === 0 ? <Package className="w-6 h-6" /> : idx === 1 ? <Activity className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical credentials listed as proof, not main story */}
      <section className="py-20 px-6 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              Scientific Evidence
            </div>
            <h3 className="text-3xl font-extrabold">Clinical Credentials & Lab Validation</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AB-MaL is not a local herbal mixture made in secret. It is a highly characterized, standardized botanical formulation developed through rigorous pharmacological protocols at Nigeria's top private university research institute.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900 p-4 rounded-2xl border border-white/5">
                <p className="text-lg font-bold text-white">Bogoro Institute</p>
                <p className="text-[11px] text-white/50">Developed & manufactured in certified laboratories</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-white/5">
                <p className="text-lg font-bold text-white">NAFDAC Regulated</p>
                <p className="text-[11px] text-white/50">Produced in compliance with clinical safety rules</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[160px]">
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Active Agent 01</p>
              <p className="text-sm font-bold text-white">Red Blood Cell Protection</p>
              <p className="text-xs text-white/60">Helps protect vital red blood cells from parasite invasion pathways.</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[160px]">
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Active Agent 02</p>
              <p className="text-sm font-bold text-white">Liver Stage Defense</p>
              <p className="text-xs text-white/60">Botanical bioactives support liver cells during internal detoxification cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials weapon (vertical videos & WhatsApp chats) */}
      <TestimonialsSection productId={3} />

      {/* Checkout section */}
      <section id="checkout-section" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold">Order AB-MaL Shield</h2>
          <p className="text-white/50 text-sm mt-2">Get free shipping to any destination in Nigeria. Securely processed via Paystack.</p>
        </div>
        
        <PaystackCheckout 
          productName={product.name}
          price={product.price}
          paystackAmount={product.paystackAmount}
          whatsappText={product.whatsappText}
        />
      </section>

      <Footer />
    </main>
  );
}
