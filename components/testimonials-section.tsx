'use client';

import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    location: "Lagos",
    product: "AB-MaL",
    thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    quote: "I had malaria for two weeks. AB-MaL cleared it in 5 days.",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    location: "Abuja",
    product: "Virucidine",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    quote: "My whole family tested negative within a week. This thing works.",
  },
  {
    id: 3,
    name: "Fatima Bello",
    location: "Kano",
    product: "AB Animation",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    quote: "I feel 10 years younger. My skin, my energy — everything changed.",
  },
];

const chatScreenshots = [
  {
    id: 1,
    product: "Virucidine",
    image: null, // replace with actual screenshot path e.g. '/chats/chat-1.png'
    placeholder: "WhatsApp screenshot — patient recovery update",
  },
  {
    id: 2,
    product: "AB-MaL",
    image: null,
    placeholder: "WhatsApp screenshot — malaria cleared in 4 days",
  },
  {
    id: 3,
    product: "AB Animation",
    image: null,
    placeholder: "WhatsApp screenshot — customer reorder message",
  },
];

const doctorEndorsements = [
  {
    name: "Dr. Oluwaseun Adeyemi",
    credentials: "MBBS, MPH — General Practitioner, Lagos",
    quote: "The clinical data behind Virucidine is compelling. I recommend it to patients managing mild viral infections.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Pharm. Ngozi Eze",
    credentials: "B.Pharm — Community Pharmacist, Enugu",
    quote: "AB-MaL is the most requested herbal anti-malarial in my pharmacy. Customers come back for it.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-5 py-2 text-sm font-bold text-emerald-700 mb-6 border border-emerald-100">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            REAL RESULTS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Nigerians Are Talking
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl">
            From Lagos to Kano, real people sharing real recoveries.
          </p>
        </motion.div>

        {/* Video Testimonials — 9:16 vertical */}
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Video Stories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {videoTestimonials.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer group"
                style={{ aspectRatio: '9/16' }}
              >
                <img
                  src={v.thumbnail}
                  alt={v.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-sm">{v.name}</p>
                  <p className="text-white/60 text-xs">{v.location} · {v.product}</p>
                  <p className="text-white/80 text-xs mt-1 italic">"{v.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat Screenshots */}
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Customer Messages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {chatScreenshots.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 bg-white flex items-center justify-center min-h-[300px]"
              >
                {c.image ? (
                  <img src={c.image} alt={c.product} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <Quote className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-slate-400 text-sm">{c.placeholder}</p>
                    <p className="text-xs text-slate-300 mt-2">Drop screenshot here</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Doctor / Pharmacist Endorsements */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Professional Endorsements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {doctorEndorsements.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex gap-6 items-start"
              >
                <img
                  src={d.avatar}
                  alt={d.name}
                  className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-emerald-100"
                />
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: d.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">"{d.quote}"</p>
                  <p className="font-bold text-slate-900 text-sm">{d.name}</p>
                  <p className="text-slate-400 text-xs">{d.credentials}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
