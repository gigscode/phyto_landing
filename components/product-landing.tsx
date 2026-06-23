'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SocialStrip } from './social-strip';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Truck,
  RotateCcw,
  CheckCircle2,
  Star,
  ShoppingCart,
  ArrowRight,
  ChevronDown,
  Info,
  CreditCard,
  Package
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  badge?: string;
  cta?: string;
  dosage?: string;
  count?: string;
}

export function ProductLanding({ product }: { product: Product }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const scrollToCheckout = () => {
    const element = document.getElementById('checkout-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/20">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PhytoGenix
              </span>
            </Link>
            <div className="h-4 w-[1px] bg-border mx-2 hidden sm:block" />
            <span className="text-sm font-medium text-muted-foreground hidden sm:block truncate max-w-[150px]">
              {product.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold hidden md:block">{product.price}</span>
            <Button onClick={scrollToCheckout} size="sm" className="rounded-full px-6">
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-primary" />
                {product.badge ?? 'Top Rated Formulation'}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                {product.name}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
                {product.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-4"
            >
              <Button onClick={scrollToCheckout} size="lg" className="h-16 px-8 text-lg rounded-full group">
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex items-center gap-2 px-6 h-16 rounded-full border border-border bg-muted/50">
                <span className="text-2xl font-bold">{product.price}</span>
                <span className="text-sm text-muted-foreground">Free Shipping</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">500+</span> Nigerians trust this formulation
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">
                      {product.id === 3 ? 'Origin' : 'Purity Level'}
                    </p>
                    <p className="text-white text-2xl font-bold">
                      {product.id === 3 ? 'Nigeria' : '99.8%'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">
                      {product.id === 3 ? 'Approved By' : 'Verified By'}
                    </p>
                    <p className="text-white font-bold">
                      {product.id === 3 ? 'NAFDAC' : 'ABUAD Verified'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {product.id === 3 ? 'Why Nigeria Needs AB-MaL' : 'Engineered for Results'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {product.id === 3
                ? 'Malaria kills thousands of Nigerians every year. AB-MaL is ABUAD\'s answer — a clinically researched, plant-based capsule built to prevent and treat malaria affordably, nationwide.'
                : 'Our formulation goes through rigorous clinical validation to ensure maximum efficacy and safety.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.id === 3
                    ? 'Researched and validated at ABUAD\'s Bogoro Research Institute, College of Pharmacy.'
                    : 'Scientifically backed methodology ensures that this benefit is realized through sustained use and cellular adaptation.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section - Glassmorphism style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">
                {product.id === 3 ? 'What\'s Inside AB-MaL' : 'Molecular Transparency'}
              </h2>
              <p className="text-muted-foreground text-lg">
                {product.id === 3
                  ? 'Every capsule contains only plant-based active compounds — no chemical additives, no fillers. Formulated at ABUAD\'s Bogoro Research Centre and manufactured to NAFDAC standards.'
                  : 'We believe in full disclosure. Every ingredient is ethically sourced and tested for purity levels exceeding industry standards.'}
              </p>
              <div className="space-y-4">
                {product.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{ing}</span>
                  </div>
                ))}
              </div>
              {(product.dosage || product.count) && (
                <div className="mt-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
                  {product.count && (
                    <p className="text-sm text-emerald-800"><span className="font-bold">Pack size:</span> {product.count}</p>
                  )}
                  {product.dosage && (
                    <p className="text-sm text-emerald-800"><span className="font-bold">Dosage:</span> {product.dosage}</p>
                  )}
                </div>
              )}
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col items-center justify-center p-6 text-center">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <p className="font-bold">Third Party Tested</p>
                </div>
                <div className="h-64 rounded-3xl bg-secondary/5 border border-secondary/10 flex flex-col items-center justify-center p-6 text-center">
                  <Info className="w-8 h-8 text-secondary mb-3" />
                  <p className="font-bold">No Fillers or Additives</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-3xl bg-accent/5 border border-accent/10 flex flex-col items-center justify-center p-6 text-center">
                  <Package className="w-8 h-8 text-accent mb-3" />
                  <p className="font-bold">Eco-Friendly Packaging</p>
                </div>
                <div className="h-48 rounded-3xl bg-muted border border-border flex flex-col items-center justify-center p-6 text-center">
                  <RotateCcw className="w-8 h-8 text-muted-foreground mb-3" />
                  <p className="font-bold">30 Day Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout-section" className="py-24 bg-foreground text-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {product.id === 3 ? 'Order AB-MaL Today' : 'Final Step to Wellness'}
              </h2>
              <p className="text-background/60 mb-8 text-lg">
                {product.id === 3
                  ? 'Be part of Nigeria\'s nationwide malaria campaign. Order AB-MaL — the homegrown, plant-based anti-malarial from ABUAD\'s Bogoro Research Institute.'
                  : 'Join thousands of others who have transformed their lives with our university-researched botanical extracts.'}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Truck className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-bold">Express Shipping</p>
                    <p className="text-sm text-background/60">Delivered within 2-3 business days</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-bold">Secure Transaction</p>
                    <p className="text-sm text-background/60">Your order is safe and protected</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-primary/10 border border-primary/20">
                <p className="text-sm uppercase tracking-widest font-bold mb-4 opacity-60">Order Summary</p>
                <div className="flex justify-between items-center mb-2">
                  <span>{product.name}</span>
                  <span className="font-bold">{product.price}</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-primary">
                  <span>Shipping</span>
                  <span className="font-bold uppercase text-xs">Free</span>
                </div>
                <div className="h-[1px] bg-white/10 my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-3xl font-bold">{product.price}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 md:p-12 text-foreground">
              <h3 className="text-2xl font-bold mb-8">Shipping & Payment</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Shipping Address</label>
                  <Input placeholder="123 Wellness St, Bio City" className="h-12" />
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Payment Method</span>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                      <span className="font-medium text-sm">Ending in 4242</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-4 border-primary" />
                  </div>
                </div>

                <Button className="w-full h-16 text-lg rounded-2xl mt-4" onClick={() => setIsCheckingOut(true)}>
                  Complete Order
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  By completing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
                {product.cta && (
                  <p className="text-center text-xs text-muted-foreground mt-2 border-t border-border pt-4">
                    {product.cta}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Success Modal Overlay */}
        <AnimatePresence>
          {isCheckingOut && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-12 max-w-md w-full text-center text-foreground"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
                <p className="text-muted-foreground mb-8">
                  Your journey to optimal wellness has begun. Check your email for tracking details.
                </p>
                <Button variant="outline" className="w-full h-12 rounded-xl" onClick={() => setIsCheckingOut(false)}>
                  Back to Dashboard
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <SocialStrip />

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PhytoGenix
          </span>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="/support" className="hover:text-primary transition-colors">Support</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 PhytoGenix Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
