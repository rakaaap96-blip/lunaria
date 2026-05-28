// File: src/utilities/seoUtils.ts
export const injectSchemas = (): void => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LUNARIA Bridal Couture",
    url: "https://lunaria-bridal.com",
    logo: "https://lunaria-bridal.com/logo.png",
    sameAs: ["https://instagram.com/lunaria", "https://pinterest.com/lunaria"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281234567890",
      contactType: "customer service",
      availableLanguage: ["English", "Indonesian"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LUNARIA Atelier",
    image: "https://images.unsplash.com/photo-1566207474363-f8768158f792",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "Jakarta",
      addressCountry: "ID",
    },
    priceRange: "$$$$",
    telephone: "+6281234567890",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "LUNARIA Bridal Couture | Luxury Wedding Gowns",
    description: "Premium bridal atelier offering bespoke wedding gowns in Indonesia.",
    url: "https://lunaria-bridal.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How far in advance should I order my gown?",
        acceptedAnswer: { "@type": "Answer", text: "We recommend 8–10 months before your wedding date." },
      },
      {
        "@type": "Question",
        name: "Do you offer custom designs?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in fully bespoke wedding gowns." },
      },
    ],
  };

  const inject = (schema: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  inject(organizationSchema);
  inject(localBusinessSchema);
  inject(websiteSchema);
  inject(faqSchema);
};