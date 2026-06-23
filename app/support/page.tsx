import Link from 'next/link';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata = {
  title: 'Support — PhytoGenix',
};

const faqs = [
  {
    q: "How do I place an order?",
    a: "Visit any product page and fill in the order form. You can also reach us directly on WhatsApp at +234 701 689 7605 to place an order.",
  },
  {
    q: "How long does delivery take?",
    a: "We deliver within 2–5 business days across Nigeria. Lagos and Abuja orders are typically faster.",
  },
  {
    q: "Can I get a bulk or wholesale order?",
    a: "Yes. Contact us via WhatsApp or email bogoro@abuad.edu.ng for bulk pricing and distribution partnerships.",
  },
  {
    q: "Are the products NAFDAC approved?",
    a: "Virucidine is NAFDAC-approved. AB-MaL and AB Health Animation are developed under ABUAD's Bogoro Research Institute with ongoing regulatory processes.",
  },
  {
    q: "I received a damaged product. What do I do?",
    a: "Contact us within 48 hours of delivery via WhatsApp at +234 701 689 7605 with a photo of the damaged item and we'll resolve it immediately.",
  },
  {
    q: "Can pregnant women use these products?",
    a: "AB Health Animation is not recommended for pregnant women, breastfeeding mothers, or children under 12. Please consult your doctor before use.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-emerald-600 font-bold hover:underline mb-10 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Support</h1>
        <p className="text-slate-500 text-lg mb-12">We're here to help. Reach us instantly on WhatsApp or browse common questions below.</p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/2347016897605?text=Hello!%20I%20need%20help%20with%20a%20PhytoGenix%20product."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#25D366] text-white px-6 py-4 rounded-2xl mb-16 hover:bg-[#20b858] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <div>
            <p className="font-bold text-lg leading-none">Chat with us on WhatsApp</p>
            <p className="text-white/80 text-sm mt-1">+234 701 689 7605 · Typically replies within minutes</p>
          </div>
        </a>

        {/* Email */}
        <div className="mb-16 p-6 rounded-2xl border border-slate-100 bg-slate-50">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Email Support</p>
          <a href="mailto:bogoro@abuad.edu.ng" className="text-emerald-600 font-bold text-lg hover:underline">bogoro@abuad.edu.ng</a>
        </div>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-100 pb-6">
              <p className="font-bold text-slate-900 mb-2">{faq.q}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </main>
  );
}
