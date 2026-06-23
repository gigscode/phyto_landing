# PhytoGenix

Marketing and product landing site for ABUAD's plant-based pharmaceutical products, developed at the Bogoro Research Institute, Afe Babalola University (ABUAD), Ado-Ekiti, Nigeria.

## Products

- **AB-MaL** — Organic, plant-based anti-malarial capsule. NAFDAC-approved.
- **Virucidine** — Herbal immune booster and antiviral liquid (85% Kalanchoe pinnata). NAFDAC-approved.
- **AB Animation** — Anti-aging herbal supplement developed at ABUAD's College of Pharmacy.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/) via shadcn/ui
- [Lucide Icons](https://lucide.dev/)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                  # Next.js app router pages
  page.tsx            # Homepage
  products/[id]/      # Product detail pages
components/           # UI components
  hero.tsx
  products-section.tsx
  about-us.tsx
  process-section.tsx
  cta-section.tsx
  contact-section.tsx
  faq-section.tsx
  footer.tsx
  product-landing.tsx
lib/
  products.ts         # Product data
public/               # Static assets (product images)
```

## Contact

Bogoro Research Institute, Afe Babalola University  
Km 8.5, Afe Babalola Way, Ado-Ekiti, Ekiti State, Nigeria  
bogoro@abuad.edu.ng
