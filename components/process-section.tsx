'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: "Sourcing & Identification",
    description: "Ethically sourcing rare botanicals and conducting phytochemical screening to identify active molecular compounds.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400",
    color: "bg-emerald-500"
  },
  {
    title: "Laboratory Analysis",
    description: "High-precision chromatography and molecular testing to ensure purity and potency.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400",
    color: "bg-blue-500"
  },
  {
    title: "Predictive Modeling",
    description: "Simulating biological interactions through evidence-based pharmacological research at ABUAD's Bogoro Research Centre before clinical trials.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400",
    color: "bg-purple-500"
  },
  {
    title: "Clinical Validation",
    description: "Multi-phase human trials with real-time participant monitoring and data synthesis.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
    color: "bg-yellow-500"
  }
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-slate-50/50 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-32">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            The Methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900"
          >
            Our Research Lifecycle
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[8.5rem] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0">
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute inset-0 bg-emerald-500 origin-left"
             />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="relative mb-10 h-48 w-full bg-white border-2 border-slate-100 shadow-xl overflow-hidden group-hover:border-emerald-500 transition-colors duration-500">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute  -top-2 -right-2 w-14 h-14 bg-emerald-500 text-white text-xl font-black flex items-center justify-center z-20 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    0{i + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
