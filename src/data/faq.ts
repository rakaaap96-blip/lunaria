// File: src/data/faq.ts
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'How far in advance should I order my gown?',
    answer: 'We recommend 8–10 months before your wedding date to allow for design, fittings, and intricate handwork. Rush orders may be available up to 4 months.',
  },
  {
    question: 'Do you offer custom designs?',
    answer: 'Absolutely. Each Lunaria bride can collaborate with our designer to create a unique silhouette, fabric blend, and embroidery motifs.',
  },
  {
    question: 'What is the price range?',
    answer: 'Our made-to-order gowns begin at $4,500 USD, while fully bespoke creations start from $7,500 USD, reflecting artisanal craftsmanship.',
  },
  {
    question: 'Can I have a virtual consultation?',
    answer: 'Yes, we offer Zoom appointments for international brides. Fabric swatches can be shipped prior to consultation.',
  },
];