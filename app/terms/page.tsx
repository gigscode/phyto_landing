import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — PhytoGenix',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-emerald-600 font-bold hover:underline mb-10 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: May 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the PhytoGenix website and placing orders, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Products & Health Disclaimer</h2>
            <p>All products sold on PhytoGenix are herbal supplements developed at ABUAD's Bogoro Research Institute. They are not intended to diagnose, treat, cure, or replace professional medical advice. Always consult a qualified healthcare provider before starting any supplement, especially if you are pregnant, breastfeeding, or managing a medical condition.</p>
            <p className="mt-3">AB Health Animation is not recommended for pregnant women, breastfeeding mothers, or children under 12 years of age.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Orders & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are subject to availability and confirmation.</li>
              <li>Prices are listed in Nigerian Naira (₦) and are subject to change without notice.</li>
              <li>We reserve the right to cancel or refuse any order at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Shipping & Delivery</h2>
            <p>We aim to deliver within 2–5 business days across Nigeria. Delivery timelines may vary based on location. We are not liable for delays caused by third-party logistics providers or circumstances beyond our control.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Returns & Refunds</h2>
            <p>Due to the nature of health products, we do not accept returns on opened items. If you receive a damaged or incorrect product, contact us within 48 hours of delivery via WhatsApp at <a href="https://wa.me/2347016897605" className="text-emerald-600 hover:underline">+234 701 689 7605</a> and we will resolve it promptly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
            <p>All content on this website — including text, images, product names, and branding — is the property of PhytoGenix / ABUAD Bogoro Research Institute and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
            <p>PhytoGenix and ABUAD shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website beyond the value of the order placed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Governing Law</h2>
            <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
            <p>Questions about these terms? Reach us at <a href="mailto:bogoro@abuad.edu.ng" className="text-emerald-600 hover:underline">bogoro@abuad.edu.ng</a> or WhatsApp <a href="https://wa.me/2347016897605" className="text-emerald-600 hover:underline">+234 701 689 7605</a>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
