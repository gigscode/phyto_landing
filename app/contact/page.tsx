'use client';

import React from 'react';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="w-full bg-white text-slate-950 pt-20">
      {/* Dynamic Top Banner */}
      <div className="bg-slate-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/50 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest"
          >
            <Users className="w-3.5 h-3.5" />
            B2B & Institutional Portal
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Bulk Orders & Partnerships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-white/60 text-sm md:text-base"
          >
            For Ministry of Health procurement, bulk pharmacy supply, or international distribution partnerships.
          </motion.p>
        </div>
      </div>

      {/* Information strip */}
      <div className="bg-slate-50 border-y border-slate-100 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-slate-600 text-sm">
          <div className="flex flex-col items-center gap-2">
            <Truck className="w-6 h-6 text-emerald-600" />
            <p className="font-bold text-slate-900">National Distribution</p>
            <p className="text-xs">Cold chain and secure transit across all 36 Nigerian states.</p>
          </div>
          <div className="flex flex-col items-center gap-2 border-slate-200 sm:border-x px-4">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <p className="font-bold text-slate-900">Nafdac Verified</p>
            <p className="text-xs">All institutional bulk packages include batch validation certificates.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="w-6 h-6 text-emerald-600" />
            <p className="font-bold text-slate-900">Research Cooperation</p>
            <p className="text-xs">Direct access to clinical research data from the Bogoro Institute.</p>
          </div>
        </div>
      </div>

      {/* The B2B Contact Form component */}
      <ContactSection />
      
      <Footer />
    </main>
  );
}
