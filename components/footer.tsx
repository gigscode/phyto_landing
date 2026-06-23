'use client';

import { Mail, MapPin, Phone, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section with Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/Phytogenixlogwhite.png" alt="PhytoGenix" className="h-10 w-auto object-contain" />
              <span className="font-bold text-2xl tracking-widest text-white">PHYTOGENIX</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Pioneering the future of herbal medicine through university-led research, clinical validation, and evidence-based plant therapeutics from ABUAD's Bogoro Research Institute.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: TikTokIcon, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors group text-white/40 hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-emerald-400">Products</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="/ab-mal" className="hover:text-white transition-colors">AB-MaL (Malaria Shield)</Link></li>
              <li><Link href="/virucidine" className="hover:text-white transition-colors">Virucidine (Antiviral liquid)</Link></li>
              <li><Link href="/ab-animation" className="hover:text-white transition-colors">AB Animation (Anti-aging)</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-emerald-400">Enquiries</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Bulk Orders & Wholesale</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Distribution Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Bogoro Research Centre</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-emerald-400">Contact Address</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>hello@PhytoGenix.lab</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+234 701 689 7605</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
                <span>Afe Babalola Way, <br />Ado-Ekiti, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Secure checkout declaration */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 pb-8 gap-4">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Securely processed via Paystack. Card, Transfer, USSD and Bank payment accepted.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secured by</span>
            <span className="font-bold text-xs bg-slate-800 border border-white/10 rounded-md px-2 py-1 text-white">PAYSTACK</span>
          </div>
        </div>

        {/* Massive Brand Name Section */}
        <div className="relative mt-8 border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <p>© 2026 PHYTOGENIX LABS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/support" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>

          {/* Big Bold Brand Name */}
          <div className="w-full select-none pointer-events-none overflow-hidden">
            <h2 className="text-[12vw] md:text-[18vw] font-black text-white/[0.03] leading-none tracking-tighter text-center uppercase translate-y-8">
              PhytoGenix
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
