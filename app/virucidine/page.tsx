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
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function VirucidinePage() {
  const product = getProductBySlug('virucidine');

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
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          {/* Left Column: Benefit and Copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 uppercase tracking-widest"
            >
              <Award className="w-3.5 h-3.5 animate-pulse" />
              NIMR Clinically Evaluated & NAFDAC Approved
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900"
            >
              Clear Viral Symptoms and Boost Immunity in 3 to 7 Days.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Defend your body with Africa's clinically validated herbal shield. Formulated from premium active extracts (85% Miracle Leaf), it has a 100% safety record with zero adverse effects.
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
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Bottle Price</p>
                  <p className="text-3xl font-black text-blue-500">{product.price}</p>
                </div>
                <div className="h-8 w-[1px] bg-slate-300" />
                <div className="text-xs text-slate-500">
                  <p className="font-bold text-slate-900">Free Delivery</p>
                  <p>Across Nigeria</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0">
                <button
                  onClick={handleScrollToCheckout}
                  className="px-8 h-14 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20 text-sm"
                >
                  Order Now (Paystack)
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleWhatsAppCheckout}
                  className="px-8 h-12 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  Order via WhatsApp Checkout
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
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>NAFDAC Regulated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>92.3% NIMR Recovery Rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>100ml Liquid Dose</span>
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
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 rounded-full blur-[80px]" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-50 p-4">
              <img
                src={product.image}
                alt="Virucidine Bottle"
                className="w-full h-full object-contain rounded-2xl bg-white"
              />
              <div className="absolute bottom-8 left-8 right-8 p-5 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl flex justify-between items-center text-xs">
                <div>
                  <p className="text-slate-400 uppercase font-bold tracking-widest text-[9px] mb-1">Efficacy study</p>
                  <p className="font-bold text-slate-900">NIMR Validated</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 uppercase font-bold tracking-widest text-[9px] mb-1">Main extract</p>
                  <p className="font-bold text-blue-500">85% Kalanchoe Pinnata</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Validation Stats Block */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900">NIMR Study Findings</h3>
            <p className="text-slate-500 text-xs mt-1">Data from the clinical trials evaluated by the Nigerian Institute of Medical Research.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center space-y-2 shadow-sm">
              <p className="text-5xl font-black text-blue-500">92.3%</p>
              <p className="font-bold text-slate-900 text-sm">Tested Negative</p>
              <p className="text-slate-500 text-xs">Infection cleared inside 7 days of treatment.</p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center space-y-2 shadow-sm">
              <p className="text-5xl font-black text-blue-500">88.5%</p>
              <p className="font-bold text-slate-900 text-sm">Symptom Free</p>
              <p className="text-slate-500 text-xs">Completely clear of body aches & dry cough inside 7 days.</p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center space-y-2 shadow-sm">
              <p className="text-5xl font-black text-emerald-600">100%</p>
              <p className="font-bold text-slate-900 text-sm">Safety Profile</p>
              <p className="text-slate-500 text-xs">Zero toxic reactions or adverse effects reported.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">How it Works</h2>
            <p className="text-slate-500 text-sm mt-3">Advanced triple-action botanical response protocol.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.howItWorks.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative flex flex-col justify-between hover:border-blue-400 transition-colors">
                <span className="absolute top-6 right-8 text-7xl font-black text-slate-200 select-none">{item.step}</span>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                    {idx === 0 ? <Zap className="w-6 h-6" /> : idx === 1 ? <Activity className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[10px] font-bold text-blue-700 uppercase tracking-widest">
              Ethically Sourced
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">Ingredients Transparency</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We stand for full scientific disclosure. Virucidine contains no artificial compounds or synthetic colorings.
            </p>
            <div className="space-y-3">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 text-xs flex justify-between items-center shadow-sm">
                  <span className="font-bold text-slate-900">{ing.split(' — ')[0]}</span>
                  <span className="text-blue-600 font-medium">{ing.split(' — ')[1]}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
            <p className="text-emerald-600 text-xs font-bold uppercase">Clinical Credentials</p>
            <h4 className="text-xl font-bold text-slate-900">The Science of Kalanchoe Pinnata</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Commonly known in West Africa as the Miracle Leaf, Kalanchoe pinnata is rich in bufadienolides, flavonoids, and organic acids. University trials at ABUAD and clinical evaluations conducted by NIMR confirm that the leaf extract exhibits significant immunomodulatory properties and supports the respiratory tract.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials weapon (vertical videos & WhatsApp chats) */}
      <TestimonialsSection productId={2} />

      {/* Checkout section */}
      <section id="checkout-section" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Order Your Bottle</h2>
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
