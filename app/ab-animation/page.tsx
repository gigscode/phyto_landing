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
  ArrowRight,
  Sparkle,
  Compass,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function AbAnimationPage() {
  const product = getProductBySlug('ab-animation');

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
    <main className="w-full bg-white text-slate-900 pt-20 overflow-hidden">
      {/* Hero Section ATF */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-12 border-b border-slate-100">
        {/* Parallax/Floating Glows */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          {/* Left Column: Benefit and Copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-600 uppercase tracking-widest"
            >
              <Sparkle className="w-3.5 h-3.5 animate-pulse" />
              100% Plant-Based Anti-Aging Formula
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900"
            >
              Reclaim Your Youth and Cellular Vitality.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Developed at ABUAD's Bogoro Research Institute. A powerful blend of African Peach, Scent Leaf, and Cashew extracts working synergistically to reduce tissue inflammation, support metabolic balance, and combat oxidative aging.
            </motion.p>

            {/* Above the Fold CTAs and Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <div className="bg-slate-100 border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-4">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">60-Cap Pack Price</p>
                  <p className="text-3xl font-black text-purple-600">{product.price}</p>
                </div>
                <div className="h-8 w-[1px] bg-slate-300" />
                <div className="text-xs text-slate-500">
                  <p className="font-bold text-slate-900">Free Shipping</p>
                  <p>In Nigeria</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0">
                <button
                  onClick={handleScrollToCheckout}
                  className="px-8 h-14 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-500/20 text-sm"
                >
                  Shop Now (Paystack)
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleWhatsAppCheckout}
                  className="px-8 h-12 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  Checkout via WhatsApp
                </button>
              </div>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 text-xs text-slate-400 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Zero Chemical Additives</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-purple-400" />
                <span>West African Botanicals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>60 Capsules Per Pack</span>
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
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/10 rounded-full blur-[80px]" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-50 p-4">
              <img
                src={product.image}
                alt="AB Animation Bottle"
                className="w-full h-full object-contain rounded-2xl bg-white"
              />
              <div className="absolute bottom-8 left-8 right-8 p-5 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl flex justify-between items-center text-xs">
                <div>
                  <p className="text-slate-400 uppercase font-bold tracking-widest text-[9px] mb-1">Cellular Action</p>
                  <p className="font-bold text-slate-900">Antioxidant Support</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 uppercase font-bold tracking-widest text-[9px] mb-1">Manufactured at</p>
                  <p className="font-bold text-purple-600">ABUAD College of Pharmacy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">How it Works</h2>
            <p className="text-slate-500 text-sm mt-3">Daily wellness cycle of cellular regeneration.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.howItWorks.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative flex flex-col justify-between hover:border-purple-400 transition-colors">
                <span className="absolute top-6 right-8 text-7xl font-black text-slate-200 select-none">{item.step}</span>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold">
                    {idx === 0 ? <Sparkles className="w-6 h-6" /> : idx === 1 ? <Activity className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients transparency */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[10px] font-bold text-purple-700 uppercase tracking-widest">
              Natural Botanicals
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">Ethically Sourced West African Blends</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every capsule matches certified botanical standards. AB Health Animation uses high-potency raw active materials.
            </p>
            <div className="space-y-3">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 text-xs flex justify-between items-center shadow-sm">
                  <span className="font-bold text-slate-900">{ing.split(' — ')[0]}</span>
                  <span className="text-purple-600 font-medium">{ing.split(' — ')[1]}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
            <p className="text-emerald-600 text-xs font-bold uppercase">Dosage & Specs</p>
            <h4 className="text-xl font-bold text-slate-900">Directions for Optimum Result</h4>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Take one capsule once daily after meals. Consistent daily dosing promotes sustained cellular defense adaptation.</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Store in a cool, dry place away from direct sunlight. Not recommended for pregnant or breastfeeding mothers.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials weapon (vertical videos & WhatsApp chats) */}
      <TestimonialsSection productId={1} />

      {/* Checkout section */}
      <section id="checkout-section" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Order AB Health Animation</h2>
          <p className="text-slate-500 text-sm mt-2">Get free delivery in Nigeria. Pay instantly via Paystack or WhatsApp Checkout.</p>
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
