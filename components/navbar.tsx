'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'AB-MaL', href: '/ab-mal', slug: 'ab-mal', color: 'hover:text-emerald-400 text-emerald-300' },
    { name: 'Virucidine', href: '/virucidine', slug: 'virucidine', color: 'hover:text-blue-400 text-blue-300' },
    { name: 'AB Animation', href: '/ab-animation', slug: 'ab-animation', color: 'hover:text-purple-400 text-purple-300' },
    { name: 'Bulk & Partnerships', href: '/contact', slug: 'contact', color: 'hover:text-yellow-400 text-yellow-300' },
  ];

  const handleShopNow = () => {
    // If on a product page, scroll to its checkout, else go to ab-mal checkout or homepage
    if (pathname === '/ab-mal' || pathname === '/virucidine' || pathname === '/ab-animation') {
      document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/ab-mal#checkout-section';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/Phytogenixlogwhite.png"
            alt="PhytoGenix"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-black tracking-widest text-white group-hover:text-emerald-400 transition-colors">
            PHYTOGENIX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-2 ${
                  isActive ? 'text-emerald-400' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handleShopNow}
            className="hidden md:flex rounded-full bg-yellow-400 px-6 font-bold text-slate-950 hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 shadow-md shadow-yellow-400/20"
          >
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Mobile Sheet Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] bg-slate-950 border-white/10 text-white p-8 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="mb-8 text-left">
                  <SheetTitle className="text-white flex items-center gap-2">
                    <img
                      src="/Phytogenixlogwhite.png"
                      alt="PhytoGenix"
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-base font-black tracking-widest">PHYTOGENIX</span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-semibold py-2 border-b border-white/5 transition-colors ${
                        pathname === link.href ? 'text-emerald-400' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    handleShopNow();
                  }}
                  className="w-full h-12 rounded-full bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300"
                >
                  Shop Now
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Secure Payments by Paystack</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
