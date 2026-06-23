'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does ABUAD develop its herbal formulations?",
    answer: "The Bogoro Research Institute at ABUAD uses rigorous phytochemical analysis and molecular testing to identify active compounds in botanical plants, ensuring maximum efficacy and safety before clinical trials begin."
  },
  {
    question: "Are your clinical trials internationally recognized?",
    answer: "Yes, we follow strict WHO and ICH-GCP guidelines. Our data is synthesized to meet international regulatory standards for herbal medicine and pharmaceutical integration."
  },
  {
    question: "How can participants join a clinical trial?",
    answer: "Participants can register through our secure portal. Once registered, our system matches them with appropriate trials based on their health profile and research criteria."
  },
  {
    question: "Is my medical data secure on the platform?",
    answer: "Absolutely. We use enterprise-grade 256-bit SSL encryption and follow strict HIPAA/GDPR-compliant data handling protocols to ensure total participant privacy."
  },
  {
    question: "What makes PhytoGenix different from traditional labs?",
    answer: "We bridge the gap between traditional herbal wisdom and modern scientific research, providing transparency, rigorous clinical validation, and evidence-based insights that traditional laboratory methods cannot match."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-none bg-emerald-500/10 text-emerald-600 mb-6"
          >
            <HelpCircle className="w-6 h-6 rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Common Questions
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our platform and research process.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background border border-border rounded-none px-6"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions? <a href="#" className="text-emerald-600 font-bold hover:underline">Contact our research team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
