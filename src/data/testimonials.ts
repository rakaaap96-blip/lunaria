// File: src/data/testimonials.ts
export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Amelia & Raka',
    location: 'Bali, Indonesia',
    quote: 'Lunaria made me feel like the most ethereal version of myself. The attention to lace details is pure poetry. I cried when I saw the final dress.',
  },
  {
    name: 'Genevieve Tan',
    location: 'Singapore',
    quote: 'From sketch to fitting, the experience was intimate and stress-free. Every stitch speaks of luxury. Highly recommend for brides seeking exclusivity.',
  },
  {
    name: 'Karina S.',
    location: 'Jakarta',
    quote: 'The atelier ambiance and personal consultation felt like therapy. My gown was a masterpiece — lightweight and breathtaking.',
  },
];