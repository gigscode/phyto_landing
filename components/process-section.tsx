'use client';

import { motion } from 'framer-motion';
import { Leaf, FlaskConical, Microscope, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    number: '01',
    title: "Ethically Sourced",
    description: "We trace every botanical to its origin - harvested responsibly from West African ecosystems, ensuring potency and purity from the very first step.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=600",
    color: "bg-emerald-500",
    colorLight: "text-emerald-400",
  },
  {
    icon: FlaskConical,
    number: '02',
    title: "Scientifically Formulated",
    description: "ABUAD's Bogoro Research Institute applies precision chromatography and molecular testing to isolate active compounds and build the most effective formulas possible.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600",
    color: "bg-blue-500",
    colorLight: "text-blue-400",
  },
  {
    icon: Microscope,
    number: '03',
    title: "Clinically Evaluated",
    description: "Before any product reaches your hands, it passes through human clinical evaluation - including independent verification by the Nigerian Institute of Medical Research (NIMR).",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600",
    color: "bg-purple-500",
    colorLight: "text-purple-400",
  },
  {
    icon: BadgeCheck,
    number: '04',
    title: "NAFDAC Approved",
    description: "Every formula earns NAFDAC approval before it's available to you - Nigeria's highest seal of safety and quality for medicines and health products.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
    color: "bg-yellow-500",
    colorLight: "text-yellow-400",
  },
];

export function ProcessSection() {
  return (
    <section className="py-28 bg-white overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500 tracking-wider uppercase mb-6"
          >
            FROM PLANT TO PRODUCT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5"
          >
            Why You Can Trust
            <br />
            <span className="text-emerald-600">Every PhytoGenix Formula</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Each product goes through the same rigorous four-stage process
            before it earns the PhytoGenix name.
          </motion.p>
        </div>

        {/* Steps grid - relative so the connecting line can anchor to it */}
        <div className="relative">
          {/* Connecting line on desktop - sits behind the step images */}
          <div className="hidden lg:block absolute top-[6.5rem] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-px bg-gradient-to-r from-emerald-200 via-purple-200 to-yellow-200 opacity-50 pointer-events-none z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* Image card */}
              <div className="relative h-52 rounded-2xl overflow-hidden mb-6 border border-slate-100 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                {/* Step number badge */}
                <div className={`absolute top-4 right-4 w-11 h-11 ${step.color} rounded-xl flex items-center justify-center text-white text-sm font-black shadow-lg group-hover:-translate-y-1 transition-transform duration-300`}>
                  {step.number}
                </div>

                {/* Icon at bottom */}
                <div className="absolute bottom-4 left-4 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <step.icon className={`w-[18px] h-[18px] ${step.colorLight}`} />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className={`text-lg font-bold text-slate-900 group-hover:${step.colorLight.replace('text-', 'text-')} transition-colors`}>
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
          </div>{/* end grid */}
        </div>{/* end relative wrapper */}

        {/* Connecting line on desktop - sits behind the step images */}
        <div className="hidden lg:block absolute top-[7.5rem] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-px bg-gradient-to-r from-emerald-200 via-purple-200 to-yellow-200 opacity-50 pointer-events-none" />
      </div>
    </section>
  );
}
