import { Hero } from '@/components/hero';
import { ProductsSection } from '@/components/products-section';
import { ProcessSection } from '@/components/process-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/about-us';
import { ContactSection } from '@/components/contact-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { SocialStrip } from '@/components/social-strip';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <SocialStrip />
      <CTASection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}


