'use client';

import { motion } from "framer-motion";
import React from "react";
import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = (): React.ReactElement => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const socials = [
  {
    platform: "Instagram",
    handle: "@phytogenixng",
    href: "https://instagram.com/phytogenixng",
    Icon: Instagram,
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
  },
  {
    platform: "TikTok",
    handle: "@phytogenixng",
    href: "https://tiktok.com/@phytogenixng",
    Icon: TikTokIcon,
    color: "hover:bg-black",
  },
  {
    platform: "Facebook",
    handle: "PhytoGenix NG",
    href: "https://facebook.com/phytogenixng",
    Icon: Facebook,
    color: "hover:bg-blue-600",
  },
];

export function SocialStrip() {
  return (
    <section className="bg-emerald-600 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-1">Stay Connected</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold">Follow Our Journey</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {socials.map(({ platform, handle, href, Icon, color }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 bg-white/10 hover:text-white text-white px-5 py-3 rounded-full transition-all duration-300 ${color} group`}
              >
                <Icon />
                <div>
                  <p className="text-xs text-white/60 group-hover:text-white/80 leading-none mb-0.5">{platform}</p>
                  <p className="text-sm font-bold leading-none">{handle}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
