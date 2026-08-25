'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { name: 'AB-MaL',              href: '/ab-mal',      sub: 'Malaria Shield',   dot: 'bg-emerald-400' },
  { name: 'Virucidine',          href: '/virucidine',  sub: 'Antiviral Liquid', dot: 'bg-blue-400'    },
  { name: 'AB Animation',        href: '/ab-animation',sub: 'Anti-Aging',       dot: 'bg-purple-400'  },
  { name: 'Bulk & Partnerships', href: '/contact',     sub: null,               dot: null             },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleShopNow = () => {
    if (['/ab-mal', '/virucidine', '/ab-animation'].includes(pathname)) {
      document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/ab-mal#checkout-section';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ── Logo ───────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/phyto-logone.png"
            alt="PhytoGenix"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-sm font-black tracking-widest text-slate-900 group-hover:text-emerald-700 transition-colors">
            PHYTOGENIX
          </span>
        </Link>

        {/* ── Desktop nav ────────────────────────────────────── */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-emerald-800'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-emerald-700"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Action area ────────────────────────────────────── */}
        <div className="flex items-center gap-2">

          {/* Shop Now - dark green pill matching reference */}
          <Button
            onClick={handleShopNow}
            className="hidden md:flex items-center rounded-full bg-emerald-800 px-6 h-10 font-semibold text-white hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 text-sm shadow-none"
          >
            Shop Now
          </Button>

          {/* Cart icon */}
          <Link
            href="#products"
            aria-label="View products"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-emerald-800 hover:border-emerald-200 transition-colors"
          >
            <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.75} />
          </Link>

          {/* ── Mobile menu ──────────────────────────────────── */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-emerald-700 hover:bg-emerald-50 h-11 w-11 border-2 border-emerald-200 shadow-sm"
                aria-label="Open menu"
              >
                <Leaf className="h-6 w-6 text-emerald-700" strokeWidth={2.25} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white border-slate-200 text-slate-900 p-0 flex flex-col"
            >
              {/* Mobile header */}
              <SheetHeader className="px-6 py-5 border-b border-slate-100">
                <SheetTitle className="flex items-center gap-2">
                  <img src="/phyto-logone.png" alt="PhytoGenix" className="h-7 w-auto" />
                  <span className="text-sm font-black tracking-widest text-slate-900">PHYTOGENIX</span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile nav links */}
              <nav className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      pathname === link.href
                        ? 'bg-emerald-50 text-emerald-800'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.dot && (
                      <span className={`w-2 h-2 rounded-full ${link.dot} shrink-0`} />
                    )}
                    <div>
                      <p className="font-semibold text-sm leading-tight">{link.name}</p>
                      {link.sub && (
                        <p className="text-xs text-slate-400 leading-tight">{link.sub}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Mobile bottom CTA */}
              <div className="px-4 pb-8 space-y-3 border-t border-slate-100 pt-4">
                <Button
                  onClick={() => { setIsOpen(false); handleShopNow(); }}
                  className="w-full h-12 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-all"
                >
                  Shop Now
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Secure Checkout via Paystack</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
