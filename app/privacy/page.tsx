import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — PhytoGenix',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-emerald-600 font-bold hover:underline mb-10 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: May 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
            <p>PhytoGenix is the digital marketing platform for plant-based pharmaceutical products developed at the Bogoro Research Institute, Afe Babalola University (ABUAD), Ado-Ekiti, Ekiti State, Nigeria. When you use this website or place an order, you are interacting with PhytoGenix on behalf of ABUAD's Bogoro Research Institute.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly when you:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Place a product order (name, email, phone number, shipping address)</li>
              <li>Submit an enquiry via our contact form</li>
              <li>Contact us via WhatsApp or email</li>
            </ul>
            <p className="mt-3">We do not collect sensitive health or medical data beyond what you voluntarily share in enquiries.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and fulfil your orders</li>
              <li>To respond to your enquiries and provide customer support</li>
              <li>To send order confirmations and delivery updates</li>
              <li>To improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Storage & Security</h2>
            <p>Your data is stored securely and accessed only by authorised personnel. We take reasonable measures to protect your information from unauthorised access, loss, or misuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, contact us at <a href="mailto:bogoro@abuad.edu.ng" className="text-emerald-600 hover:underline">bogoro@abuad.edu.ng</a> or via WhatsApp at <a href="https://wa.me/2347016897605" className="text-emerald-600 hover:underline">+234 701 689 7605</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Cookies</h2>
            <p>This website may use basic cookies to improve your browsing experience. No tracking or advertising cookies are used.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Contact</h2>
            <p>For privacy-related enquiries, reach us at <a href="mailto:bogoro@abuad.edu.ng" className="text-emerald-600 hover:underline">bogoro@abuad.edu.ng</a> or WhatsApp <a href="https://wa.me/2347016897605" className="text-emerald-600 hover:underline">+234 701 689 7605</a>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
