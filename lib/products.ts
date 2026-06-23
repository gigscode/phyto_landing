export const products = [
  {
    id: 1,
    name: 'AB Health Animation',
    price: 'N25,000',
    rating: 4.9,
    image: '/ABAnim.png',
    description: 'AB Health Animation is a 100% plant-based anti-aging capsule developed at ABUAD\'s Bogoro Research Institute. Each 250mg capsule blends three powerful West African botanicals — traditionally used for inflammation, cellular health, and metabolic balance — into a single daily supplement. 60 capsules per pack. No chemical additives.',
    benefits: [
      'Combats oxidative stress and cellular aging',
      'Anti-inflammatory support from three proven botanicals',
      'Supports metabolic and blood sugar balance',
      'Promotes digestive health and microbial defence',
      '100% plant-based — no chemical additives',
    ],
    ingredients: [
      'Nauclea latifolia (African Peach) — anti-inflammatory & analgesic',
      'Ocimum gratissimum (Scent Leaf) — digestive health & antimicrobial',
      'Anacardium occidentale (Cashew Extract) — blood sugar & inflammation support',
    ],
    badge: 'Made in Nigeria',
    cta: 'Not recommended for pregnant women, breastfeeding mothers, or children under 12. Store in a cool, dry place away from direct sunlight. Keep out of reach of children.',
    dosage: 'Take one capsule once daily after meals.',
    count: '60 capsules per pack',
  },
  {
    id: 2,
    name: 'Virucidine',
    price: 'N15,000',
    rating: 5.0,
    image: '/virucidine.png',
    description: 'Defend your health with Africa\'s scientifically validated immune shield. ABUAD Herbal Virucidine Liquid is NAFDAC-approved and clinically evaluated by NIMR — a plant-based antiviral liquid that clears viral symptoms in as little as 3–7 days, with zero recorded adverse effects.',
    benefits: [
      'Triple-action: immune booster, antioxidant & anti-inflammatory',
      '92.3% of users tested negative for viral infection within 7 days',
      '88.5% became completely symptom-free within 7 days',
      '100% safety record — zero adverse effects or toxicity recorded',
      'NAFDAC-approved & NIMR clinically validated',
    ],
    ingredients: [
      'Kalanchoe pinnata (Miracle Leaf) — 85%',
      'Deionized Water — 10%',
      'Ethanol (natural preservative) — 5%',
    ],
    badge: 'NAFDAC Approved',
    cta: 'Packaged in 100ml bottles with a precision dosage cup and instructional leaflet. Contact ABUAD for orders and distribution partnerships.',
  },
  {
    id: 3,
    name: 'AB-MaL',
    price: 'N10,000',
    rating: 4.8,
    image: '/ABMol_hd.png',
    description: 'AB-MaL is Nigeria\'s homegrown answer to malaria — an organic, plant-based anti-malarial capsule researched and manufactured at the Bogoro Research Institute, College of Pharmacy, Afe Babalola University (ABUAD). Developed as an affordable, NAFDAC-compliant herbal therapy, AB-MaL is built for every Nigerian household. No chemical additives. Just nature, science, and a commitment to ending malaria in Africa.',
    benefits: [
      'Prevents and treats malaria naturally',
      'Zero chemical additives — 100% plant-based',
      'Affordable alternative to conventional anti-malarials',
      'Developed by Nigerian researchers for Nigerian communities',
      'Backed by ABUAD\'s Bogoro Research Centre',
    ],
    ingredients: ['Proprietary Herbal Extracts', 'Plant-based Active Compounds', 'No Chemical Additives'],
    badge: 'Made in Nigeria',
    cta: 'For availability, bulk orders, or distribution partnerships, contact Afe Babalola University.',
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === parseInt(id));
}
