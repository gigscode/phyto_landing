'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Are PhytoGenix products safe? Do they have side effects?",
    answer: "All three PhytoGenix formulas are 100% plant-based with zero chemical additives. Virucidine has a 100% safety record across all NIMR clinical evaluations - zero adverse effects recorded. AB-MaL and AB Health Animation are NAFDAC-compliant and developed using rigorous pharmacological safety protocols at ABUAD. AB Health Animation is not recommended for pregnant women, breastfeeding mothers, or children under 12."
  },
  {
    question: "Which product should I buy first?",
    answer: "It depends on your goal: If you want to protect your family from malaria, start with AB-MaL (₦10,000). If you or a family member has viral symptoms like dry cough, fever, or body aches, Virucidine (₦15,000) is your answer. If you want daily anti-aging, anti-inflammatory, and metabolic support, AB Health Animation (₦25,000) is your long-term wellness investment. Many families stock all three."
  },
  {
    question: "How long does delivery take and how do I order?",
    answer: "You can order directly through each product page using our secure Paystack checkout. Delivery is processed within 24-48 hours and typically arrives within 2-5 business days depending on your location in Nigeria. You can also place orders via WhatsApp at +234 701 689 7605 for a more personal experience."
  },
  {
    question: "How quickly do the products work?",
    answer: "AB-MaL clears malaria symptoms within 5 days of consistent use. Virucidine users report fever and body aches reducing within 72 hours, with 88.5% becoming fully symptom-free within 7 days. AB Health Animation is a daily supplement - most users notice improved energy and reduced joint stiffness within 2-4 weeks of consistent use."
  },
  {
    question: "Are PhytoGenix products approved by NAFDAC?",
    answer: "Yes. All PhytoGenix formulas meet NAFDAC's requirements for herbal therapeutics. Virucidine has also undergone independent clinical evaluation by the Nigerian Institute of Medical Research (NIMR) - Nigeria's most credible biomedical research body. AB-MaL and AB Health Animation were developed at ABUAD's Bogoro Research Institute under strict pharmacological standards."
  },
  {
    question: "Can I buy in bulk for my pharmacy, hospital, or business?",
    answer: "Absolutely. We offer bulk pricing and distribution partnerships for pharmacies, hospitals, wellness centres, and retail businesses. Visit our Bulk & Partnerships page or contact us directly at +234 701 689 7605 to discuss pricing and partnership terms."
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 tracking-wider uppercase mb-6"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Everything You Need to Know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            Common questions about our products, ordering, safety, and delivery.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-slate-100 rounded-2xl px-6 shadow-sm overflow-hidden data-[state=open]:border-emerald-200 data-[state=open]:shadow-emerald-500/5 transition-all"
              >
                <AccordionTrigger className="text-base font-bold text-slate-900 hover:no-underline py-5 text-left [&>svg]:text-emerald-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-sm pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 mb-4">Still have a question?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/2347016897605"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 text-sm font-bold transition-all hover:scale-105"
            >
              Send us a message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
