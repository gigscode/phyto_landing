import { Hero } from '@/components/hero';
import { ProductsSection } from '@/components/products-section';
import { EcosystemSection } from '@/components/ecosystem-section';
import { ProcessSection } from '@/components/process-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { SocialStrip } from '@/components/social-strip';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { AboutSection } from '@/components/about-us';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. Hero - ecosystem introduction, all three products visible ATF */}
      <Hero />

      {/* 2. Products - three cards with product-focused copy */}
      <ProductsSection />

      {/* 3. Ecosystem - how the three products work together */}
      <EcosystemSection />

      {/* 4. Trust - from plant to product, why you can trust our formulas */}
      <ProcessSection />

      {/* 5. Social proof - real stories from real customers */}
      <TestimonialsSection />

      {/* 6. Social follow strip */}
      <SocialStrip />

      {/* 7. Brand story - who we are, NAFDAC credentials */}
      <AboutSection />

      {/* 8. Primary purchase CTA */}
      <CTASection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </main>
  );
}
