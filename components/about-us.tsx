'use client';

import { motion } from "framer-motion";
import {
  Microscope,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-50 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:items-center relative z-10">
        {/* Left Image Section - Modern Layered Style */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image with Modern Mask */}
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://res.cloudinary.com/dsaqsxtup/image/upload/v1778522565/126427_xovoq5.jpg"
                alt="PhytoGenix Research"
                className="w-full md:h-[700px] h-[400px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Accent Shapes */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-50 rounded-none -z-10" />
            <div className="absolute top-20 -left-6 w-12 h-12 border-4 border-yellow-200 rounded-none -z-10" />
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 rounded-sm bg-emerald-50 px-5 py-2 text-sm font-bold text-emerald-700 mb-8 border border-emerald-100">
              <span className="w-2 h-2 rounded-none bg-emerald-500 animate-ping" />
              WHO WE ARE
            </div>
            <h2 className="text-4xl font-bold leading-[1.1] md:text-6xl text-slate-900 mb-8">
              Research-Driven <br />
              <span className="text-emerald-600">Herbal Discovery</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              PhytoGenix is a digital herbal clinical research platform inspired by the collaborative work between Afe Babalola University and the Nigerian Institute of Medical Research. We modernize herbal medicine research using scalable digital infrastructure.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Our Vision",
                description: "To be Africa's leading centre for plant-based pharmaceutical research — transforming Nigeria's rich botanical heritage into clinically validated, affordable medicines for every household.",
                icon: Target,
                color: "bg-emerald-700",
                textColor: "text-white",
                accent: "text-emerald-300"
              },
              {
                title: "Our Mission",
                description: "To research, develop, and deliver safe, NAFDAC-approved herbal therapeutics through rigorous scientific inquiry at ABUAD's Bogoro Research Institute — in partnership with NIMR — making effective healthcare accessible to all Nigerians.",
                icon: ShieldCheck,
                color: "bg-emerald-500",
                textColor: "text-white",
                accent: "text-yellow-300"
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`group relative rounded-2xl ${card.color} p-10 ${card.textColor} shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default overflow-hidden`}
              >
                {/* Decorative background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-none group-hover:scale-150 transition-transform duration-700" />

                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-sm bg-white/10 backdrop-blur-md border border-white/20 transition-transform group-hover:rotate-6`}>
                  <card.icon className={`h-8 w-8 ${card.accent}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{card.description}</p>

              
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}