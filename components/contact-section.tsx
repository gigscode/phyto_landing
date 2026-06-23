'use client';

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const contacts = [
  {
    label: "Bogoro Research Institute",
    address: "S.E. Bogoro Centre, Afe Babalola University\nKm 8.5, Afe Babalola Way, Ado-Ekiti\nEkiti State, Nigeria",
    phone: "+234 701 689 7605",
    email: "bogoro@abuad.edu.ng",
    mapUrl: "https://maps.google.com/?q=Afe+Babalola+University+Ado-Ekiti",
  },
  {
    label: "College of Pharmacy, ABUAD",
    address: "College of Pharmacy\nAfe Babalola University, PMB 5454\nAdo-Ekiti, Ekiti State, Nigeria",
    phone: "+234 701 689 7605",
    email: "pharmacy@abuad.edu.ng",
    mapUrl: "https://maps.google.com/?q=Afe+Babalola+University+Ado-Ekiti",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 rounded-sm bg-emerald-50 px-5 py-2 text-sm font-bold text-emerald-700 mb-6 border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 animate-ping" />
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl">
              For product orders, distribution partnerships, or research enquiries, reach out to ABUAD's Bogoro Research Institute directly.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 border border-slate-100 bg-slate-50 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-5">{c.label}</h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="whitespace-pre-line">{c.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                    <a href={`tel:${c.phone}`} className="hover:text-emerald-600 transition-colors">{c.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                    <a href={`mailto:${c.email}`} className="hover:text-emerald-600 transition-colors">{c.email}</a>
                  </li>
                </ul>
                <a
                  href={c.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-wider"
                >
                  View on Map <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-10 text-white rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-2">Send an Enquiry</h3>
            <p className="text-white/50 text-sm mb-8">For bulk orders, partnerships, or research collaboration.</p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50">First Name</label>
                  <Input placeholder="Emeka" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-lg h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50">Last Name</label>
                  <Input placeholder="Okafor" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-lg h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white/50">Email Address</label>
                <Input type="email" placeholder="emeka@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-lg h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white/50">Organisation / State</label>
                <Input placeholder="e.g. Lagos State Ministry of Health" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-lg h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white/50">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your enquiry — product order, distribution, or research partnership..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <Button className="w-full h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold">
                Send Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
