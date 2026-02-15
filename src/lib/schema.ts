import { SITE_CONFIG } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://seattlesparklecleaning.com"}/og-image.jpg`,
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://seattlesparklecleaning.com"}`,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://seattlesparklecleaning.com",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.6062,
      longitude: -122.3321,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Washington" },
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
    },
    areaServed: {
      "@type": "City",
      name: "Seattle",
      containedInPlace: { "@type": "State", name: "Washington" },
    },
    url: service.url,
  };
}
