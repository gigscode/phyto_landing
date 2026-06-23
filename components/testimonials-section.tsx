'use client';

import { motion } from "framer-motion";
import { Star, Quote, Play, MessageSquare, Check, ShieldCheck, CheckCheck } from "lucide-react";

interface TestimonialProp {
  productId?: number; // 1 = AB Animation, 2 = Virucidine, 3 = AB-MaL
}

const videoTestimonials = [
  {
    id: 1,
    productId: 3, // AB-MaL
    name: "Adaeze Okonkwo",
    location: "Lagos",
    product: "AB-MaL",
    thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    quote: "Keeping it in the cabinet saved my family. At the first chills, we use it and it clears in days.",
  },
  {
    id: 2,
    productId: 2, // Virucidine
    name: "Emeka Nwosu",
    location: "Abuja",
    product: "Virucidine",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    quote: "My whole family tested negative within a week. The fever and symptoms vanished by day 3.",
  },
  {
    id: 3,
    productId: 1, // AB Animation
    name: "Fatima Bello",
    location: "Kano",
    product: "AB Animation",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    quote: "I feel 10 years younger. My skin looks radiant and my morning joint stiffness is completely gone.",
  },
];

const chatConversations = [
  {
    id: 1,
    productId: 3, // AB-MaL
    sender: "Mummy Chidi (Lagos)",
    messages: [
      { sender: "user", text: "Good afternoon. I need two more bottles of AB-MaL. My husband started showing symptoms yesterday.", time: "12:14 PM" },
      { sender: "support", text: "Good afternoon ma! We will process that right away. Glad you had the first shield at home.", time: "12:15 PM" },
      { sender: "user", text: "Yes o, the one in my first-aid cabinet is what we used for Chidi and he is fully active today. Best decision to buy it beforehand.", time: "12:18 PM" }
    ]
  },
  {
    id: 2,
    productId: 2, // Virucidine
    sender: "Pastor Gabriel",
    messages: [
      { sender: "user", text: "I must share this testimony. My wife had severe viral dry cough & body pains for weeks. 3 days on Virucidine and she is breathing perfectly.", time: "9:02 AM" },
      { sender: "support", text: "Hallelujah! So glad to hear this, Pastor. Did she complete the dosage?", time: "9:05 AM" },
      { sender: "user", text: "Yes, she did! We went for testing yesterday and she is negative. Truly an African miracle leaf liquid.", time: "9:10 AM" }
    ]
  },
  {
    id: 3,
    productId: 1, // AB Animation
    sender: "Chief Mrs. Alao",
    messages: [
      { sender: "user", text: "Look at my skin glowing! My friends are asking me what cream I'm using, I told them it's the AB Animation capsule from inside.", time: "4:32 PM" },
      { sender: "support", text: "Wow, you look stunning ma! The West African botanicals are working wonders on your cells.", time: "4:35 PM" },
      { sender: "user", text: "Yes o! And my knee pain when taking stairs has stopped. Send 3 more packs to my Abuja address.", time: "4:38 PM" }
    ]
  }
];

const doctorEndorsements = [
  {
    productId: 2, // Virucidine
    name: "Dr. Oluwaseun Adeyemi",
    credentials: "MBBS, MPH — General Practitioner, Lagos",
    quote: "The clinical data behind Virucidine is compelling. Having evaluated its NIMR safety and efficacy tests, I recommend it for viral symptom relief.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    productId: 3, // AB-MaL
    name: "Pharm. Ngozi Eze",
    credentials: "B.Pharm — Community Pharmacist, Enugu",
    quote: "We advise families to stock AB-MaL before malaria season starts. It is the most requested herbal preventive shield in our community pharmacy.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export function TestimonialsSection({ productId }: TestimonialProp) {
  const filteredVideos = productId 
    ? videoTestimonials.filter(v => v.productId === productId) 
    : videoTestimonials;

  const filteredChats = productId 
    ? chatConversations.filter(c => c.productId === productId) 
    : chatConversations;

  const filteredDocs = productId 
    ? doctorEndorsements.filter(d => d.productId === productId) 
    : doctorEndorsements;

  return (
    <section id="testimonials" className="py-24 bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-bold text-emerald-400 mb-6 border border-emerald-500/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            NIGERIANS ARE TALKING
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Real Stories, Real Recoveries
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl">
            See how ABUAD's botanical science is changing lives across Nigeria.
          </p>
        </motion.div>

        {/* Video Testimonials — 9:16 vertical Reels-style */}
        <div className="mb-24">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-2">
            <span>Video Testimonials</span>
            <span className="h-[1px] bg-slate-800 flex-1" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto md:max-w-none">
            {filteredVideos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer group shadow-2xl border border-white/5"
                style={{ aspectRatio: '9/16' }}
              >
                <img
                  src={v.thumbnail}
                  alt={v.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Visual Video Play Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top Product Badge */}
                  <div className="self-start px-3 py-1 rounded-full bg-slate-950/70 border border-white/15 text-[11px] font-bold tracking-wider text-emerald-400 backdrop-blur-md uppercase">
                    {v.product}
                  </div>

                  {/* Middle Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-slate-950 ml-1" />
                    </div>
                  </div>

                  {/* Bottom details card */}
                  <div className="w-full p-4 bg-slate-950/80 border border-white/10 rounded-2xl backdrop-blur-md space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-white font-bold text-sm">{v.name}</p>
                      <p className="text-emerald-400 text-xs font-semibold">{v.location}</p>
                    </div>
                    <p className="text-white/80 text-xs italic leading-relaxed">
                      "{v.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WhatsApp Chat Screenshots */}
        <div className="mb-24">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-2">
            <span>WhatsApp Messages & Reorders</span>
            <span className="h-[1px] bg-slate-800 flex-1" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredChats.map((chat, i) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-3xl overflow-hidden border border-emerald-500/10 bg-[#0b141a] flex flex-col shadow-xl"
              >
                {/* WhatsApp Chat Header */}
                <div className="bg-[#075e54] px-4 py-3 flex items-center justify-between text-white border-b border-[#128c7e]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-700/50 flex items-center justify-center font-bold text-white text-sm border border-white/20">
                      {chat.sender[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">{chat.sender}</p>
                      <p className="text-[10px] text-white/70">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/75">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* WhatsApp Messages Body */}
                <div 
                  className="flex-1 p-4 space-y-4 min-h-[250px] flex flex-col justify-end bg-repeat opacity-95"
                  style={{ 
                    backgroundImage: `url('https://res.cloudinary.com/dsaqsxtup/image/upload/v1778521703/wa-bg_yfl6k5.png')`,
                    backgroundSize: '300px'
                  }}
                >
                  {chat.messages.map((msg, index) => {
                    const isUser = msg.sender === 'user';
                    return (
                      <div 
                        key={index}
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs relative ${
                          isUser 
                            ? 'bg-[#056162] text-white self-end rounded-tr-none' 
                            : 'bg-[#202c33] text-white self-start rounded-tl-none border border-slate-800'
                        }`}
                      >
                        <p className="leading-relaxed">{msg.text}</p>
                        <span className="block text-[8px] text-white/40 text-right mt-1 flex items-center justify-end gap-1">
                          {msg.time}
                          {isUser && <CheckCheck className="w-3 h-3 text-sky-400" />}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Doctor / Pharmacist Endorsements */}
        {filteredDocs.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-2">
              <span>Medical Professional Endorsements</span>
              <span className="h-[1px] bg-slate-800 flex-1" />
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredDocs.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-lg flex flex-col sm:flex-row gap-6 items-start"
                >
                  <img
                    src={d.avatar}
                    alt={d.name}
                    className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-emerald-500/20"
                  />
                  <div className="space-y-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: d.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      "{d.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-white text-sm">{d.name}</p>
                      <p className="text-emerald-400 text-xs font-semibold">{d.credentials}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
