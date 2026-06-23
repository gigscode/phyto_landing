'use client';

import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Users } from "lucide-react";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-none overflow-hidden bg-[#050816] min-h-[600px] flex items-center p-8 md:p-24"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dsaqsxtup/image/upload/v1778521705/18426_ueg8rg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/80 to-transparent" />

          {/* Animated Background Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] animate-pulse" />

          <div className="relative z-10 max-w-2xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1]">
                Ready to Join the <br />
                <span className="text-emerald-400">Future of Research?</span>
              </h2>
              <p className="mt-8 text-xl text-white/60 leading-relaxed">
                Join our network of researchers and healthcare providers pioneering the next generation of herbal medicine.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full bg-yellow-400 px-10 h-16 text-black font-bold hover:bg-yellow-300 transition-all hover:scale-105"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full hidden md:block border-white/20 bg-white/10 px-10 h-16 text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Quick Stats */}
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}