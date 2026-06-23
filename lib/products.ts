export interface Product {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  slug: string;
  headline: string;
  rating: number;
  image: string;
  description: string;
  benefits: string[];
  howItWorks: { step: string; title: string; desc: string }[];
  ingredients: string[];
  badge?: string;
  cta?: string;
  dosage?: string;
  count?: string;
  paystackAmount: number;
  whatsappText: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'AB Health Animation',
    price: '₦25,000',
    priceValue: 25000,
    slug: 'ab-animation',
    headline: 'Reclaim Your Youth and Cellular Vitality with AB Health Animation',
    rating: 4.9,
    image: '/ABAnim.png',
    description: 'AB Health Animation is a premium, 100% plant-based anti-aging capsule developed at ABUAD\'s Bogoro Research Institute. Each 250mg capsule blends three powerful West African botanicals to combat oxidative stress, reduce joint & tissue inflammation, and support healthy metabolic balance.',
    benefits: [
      'Combats oxidative stress and cellular aging',
      'Anti-inflammatory support from three proven botanicals',
      'Supports metabolic and blood sugar balance',
      'Promotes digestive health and microbial defence',
      '100% plant-based — no chemical additives',
    ],
    howItWorks: [
      { step: '1', title: 'Daily Defense Activation', desc: 'Active compounds clear cellular debris and activate internal antioxidant production.' },
      { step: '2', title: 'Inflammation Relief', desc: 'African Peach & Cashew extracts calm chronic joint, tissue, and vascular inflammation.' },
      { step: '3', title: 'Vital Balance Restoration', desc: 'Scent Leaf bio-actives support digestive microflora, boosting daily physical energy levels.' }
    ],
    ingredients: [
      'Nauclea latifolia (African Peach) — anti-inflammatory & analgesic',
      'Ocimum gratissimum (Scent Leaf) — digestive health & antimicrobial',
      'Anacardium occidentale (Cashew Extract) — blood sugar & inflammation support',
    ],
    badge: 'Premium Anti-Aging',
    cta: 'Not recommended for pregnant women, breastfeeding mothers, or children under 12.',
    dosage: 'Take one capsule once daily after meals.',
    count: '60 capsules per pack',
    paystackAmount: 2500000, // ₦25,000 in kobo
    whatsappText: 'I would like to order the AB Health Animation (₦25,000). Please provide payment details.',
  },
  {
    id: 2,
    name: 'Virucidine',
    price: '₦15,000',
    priceValue: 15000,
    slug: 'virucidine',
    headline: 'Clear Viral Symptoms and Boost Your Immunity in 3 to 7 Days with Virucidine',
    rating: 5.0,
    image: '/virucidine.png',
    description: 'Defend your health with Africa\'s scientifically validated immune shield. ABUAD Herbal Virucidine Liquid is NAFDAC-approved and clinically evaluated by the Nigerian Institute of Medical Research (NIMR) — a plant-based antiviral liquid that clears viral symptoms in as little as 3–7 days with zero recorded adverse effects.',
    benefits: [
      'Triple-action: immune booster, antioxidant & anti-inflammatory',
      '92.3% of users tested negative for viral infection within 7 days',
      '88.5% became completely symptom-free within 7 days',
      '100% safety record — zero adverse effects or toxicity recorded',
      'NAFDAC-approved & NIMR clinically validated',
    ],
    howItWorks: [
      { step: '1', title: 'Infection Suppression', desc: 'Miracle Leaf bio-actives inhibit viral replication and calm cellular stress pathways.' },
      { step: '2', title: 'Symptom Clearance', desc: 'Rapid anti-inflammatory action clears throat, lung, and body aches within 72 hours.' },
      { step: '3', title: 'System Rebuild', desc: 'Immune cell activation leaves your body fortified against secondary viral attacks.' }
    ],
    ingredients: [
      'Kalanchoe pinnata (Miracle Leaf) — 85%',
      'Deionized Water — 10%',
      'Ethanol (natural preservative) — 5%',
    ],
    badge: 'NAFDAC & NIMR Evaluated',
    cta: 'Packaged in 100ml bottles with a precision dosage cup.',
    paystackAmount: 1500000, // ₦15,000 in kobo
    whatsappText: 'I would like to order Virucidine (₦15,000). Please provide payment details.',
  },
  {
    id: 3,
    name: 'AB-MaL',
    price: '₦10,000',
    priceValue: 10000,
    slug: 'ab-mal',
    headline: 'Eliminate Malaria Symptoms in 5 Days with AB-MaL — The Premium Medicine Cabinet Shield',
    rating: 4.8,
    image: '/ABMol_hd.png',
    description: 'Stop treating malaria like an emergency rush to the chemist. Marketed as the premium natural shield for every household\'s first-aid cabinet. Researched and manufactured at the Bogoro Research Institute, College of Pharmacy, Afe Babalola University (ABUAD), AB-MaL is the organic, plant-based, NAFDAC-compliant defense you keep ready before sickness strikes.',
    benefits: [
      'Prevents and treats malaria symptoms naturally',
      'Zero chemical additives — 100% organic plant-based capsules',
      'The premium household first-aid cabinet shield for your family',
      'Developed by leading Nigerian pharmacological researchers at ABUAD',
      'NAFDAC-compliant herbal therapy designed for maximum safety',
    ],
    howItWorks: [
      { step: '1', title: 'Proactive Cabinet Stocking', desc: 'Keep AB-MaL in your home medicine cabinet, ready for the first sign of fever or chills.' },
      { step: '2', title: 'Instant Symptom Knockout', desc: 'At first symptoms, begin the organic dose to disrupt malaria parasite replication.' },
      { step: '3', title: 'Full 5-Day Clearance', desc: 'Complete the short, natural therapy to feel energized and completely symptom-free.' }
    ],
    ingredients: [
      'Proprietary ABUAD Herbal Extracts (Artemisia & local anti-malarial botanicals)',
      'Plant-based active compounds for liver & red blood cell support',
      'No chemical additives, synthetic colors, or binders',
    ],
    badge: 'Premium First-Aid Shield',
    cta: 'Take organic control of your family\'s wellness.',
    dosage: 'Take capsules as detailed on packaging (typically twice daily for 5 days).',
    count: '30 capsules per pack',
    paystackAmount: 1000000, // ₦10,000 in kobo
    whatsappText: 'I would like to order AB-MaL (₦10,000) for my family cabinet. Please provide payment details.',
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === parseInt(id));
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

