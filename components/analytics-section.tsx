'use client';

import { motion } from 'framer-motion';
import { BarChart3, Activity, Beaker, BrainCircuit } from 'lucide-react';

export function AnalyticsSection() {
  return (
    <section className="py-24 bg-[#050816] text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
                <BrainCircuit className="w-3 h-3" />
                Data-Driven Insights
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Precision Analytics <br />
                <span className="text-emerald-400">At Every Stage</span>
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Our platform synthesizes millions of data points from laboratory results and clinical observations, providing researchers with predictive insights that accelerate discovery by up to 40%.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Data Points", value: "1.2M+", icon: Activity },
                { label: "Accuracy", value: "99.9%", icon: Beaker },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-emerald-400 mb-4" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual "Analytics Card" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[3rem] p-8 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-emerald-400/60">SYSTEM_ACTIVE // V.2.4.0</div>
              </div>

              <div className="space-y-6">
                {/* Simulated Chart Bars */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono text-white/40 uppercase">
                    <span>Efficacy Rate</span>
                    <span>94%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '94%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono text-white/40 uppercase">
                    <span>Absorption</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                    />
                  </div>
                </div>

                {/* Animated Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-24 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-emerald-400 mb-2 opacity-50" />
                    <div className="text-lg font-bold">4.2k</div>
                    <div className="text-[10px] uppercase tracking-tighter text-white/30">Trials Run</div>
                  </div>
                  <div className="h-24 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-400 mb-2 opacity-50" />
                    <div className="text-lg font-bold">0.02s</div>
                    <div className="text-[10px] uppercase tracking-tighter text-white/30">Latency</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 p-6 bg-emerald-500 rounded-3xl shadow-2xl hidden md:block"
            >
              <BrainCircuit className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
