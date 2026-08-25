'use client';

import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, Users } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "NAFDAC Approved",
    body: "Every PhytoGenix formula meets Nigeria's strict regulatory standards for safety, quality, and efficacy.",
    color: "bg-emerald-500",
  },
  {
    icon: ShieldCheck,
    title: "NIMR Evaluated",
    body: "Virucidine is clinically evaluated by the Nigerian Institute of Medical Research - Nigeria's gold standard.",
    color: "bg-blue-500",
  },
  {
    icon: Leaf,
    title: "100% Plant-Based",
    body: "No synthetic additives, no chemical binders. Pure, ethically sourced West African botanicals in every capsule and bottle.",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    body: "From Lagos to Kano, Nigerian households are stocking PhytoGenix products as their first line of natural defence.",
    color: "bg-yellow-500",
  },
];

export function AboutSection() {
  return (
    <section className="relative bg-slate-950 py-28 px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-emerald-400 tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            THE PHYTOGENIX DIFFERENCE
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Born in Nigeria's
            <br />
            <span className="text-emerald-400">Leading Research Lab.</span>
            <br />
            Built for Every Home.
          </h2>
          <p className="mt-6 text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Every PhytoGenix formula starts in the Bogoro Research Institute at Afe Babalola University -
            where Nigeria's brightest pharmacologists transform our continent's most potent plants
            into medicines that actually work.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img
                src="https://res.cloudinary.com/dsaqsxtup/image/upload/v1778522565/126427_xovoq5.jpg"
                alt="PhytoGenix Research at ABUAD"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10 p-4">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Research Partner</p>
                <p className="text-white font-bold text-base leading-tight">Afe Babalola University (ABUAD)</p>
                <p className="text-white/50 text-sm">Bogoro Research Institute · College of Pharmacy</p>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-emerald-500/20 rounded-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-400/10 rounded-xl pointer-events-none" />
          </motion.div>

          {/* Right - content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Nigeria has always had the answers.
                <br />
                <span className="text-white/50">We made them safe, standardised, and available.</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                Traditional West African botanicals have treated illness for centuries. PhytoGenix takes that wisdom
                and puts it through rigorous pharmacological science - so you get the healing power of nature
                with the confidence of modern clinical validation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '3', label: 'Approved Formulas' },
                { number: '0', label: 'Adverse Effects Recorded' },
                { number: '2', label: 'Research Institutions' },
                { number: '100%', label: 'Natural Ingredients' },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/5 border border-white/8 p-5 hover:bg-white/8 transition-colors"
                >
                  <p className="text-3xl font-black text-white mb-1">{number}</p>
                  <p className="text-white/40 text-xs font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Credential cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/8 p-6 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-bold text-base mb-2">{card.title}</h4>
              <p className="text-white/45 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
