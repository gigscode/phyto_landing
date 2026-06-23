'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu, Facebook, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 50).toFixed(0))));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-emerald-500">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dsaqsxtup/image/upload/v1778521705/18426_ueg8rg.jpg')",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Spacer to offset sticky global navbar */}
      <div className="h-16 w-full relative z-30" />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pt-24 text-center">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Nature's Answer. <br />
            <TypewriterEffect words={["Heal Naturally.", "Fight Malaria.", "Boost Immunity.", "Age Gracefully."]} />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            PhytoGenix brings Nigeria's most promising plant-based medicines to the world — NAFDAC-approved, university-researched, and built for every Nigerian home.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full bg-yellow-400 px-8 h-14 text-black hover:bg-yellow-300 shadow-xl shadow-yellow-400/20 transition-all hover:scale-105"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hidden md:block rounded-full border-white/20 bg-white/10 px-8 h-14 text-white backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Testimonials
            </Button>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 hidden md:flex flex-wrap items-center justify-center gap-10 text-center"
          >
            {[
              ["44+", "Participants"],
              ["97.7%", "Study Completion"],
              ["24/7", "Clinical Monitoring"],
            ].map(([number, label]) => (
              <div key={label} className="group cursor-default">
                <h3 className="text-2xl font-bold md:text-3xl transition-colors group-hover:text-yellow-400">
                  {number}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}