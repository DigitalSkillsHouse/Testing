import Link from "next/link";
import { Hero, CTA, FAQ, ServiceCard } from "@/components";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getLocalBusinessSchema, getFAQSchema } from "@/lib/schema";

const HOMEPAGE_FAQS = [
  {
    question: "What areas do you serve in Seattle?",
    answer:
      "We serve Seattle and the greater Puget Sound area including Bellevue, Tacoma, Kirkland, Redmond, Renton, Federal Way, Shoreline, Kent, and Everett. Contact us to confirm service in your neighborhood.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Seattle Sparkle Cleaning is fully licensed and insured for your peace of mind. We carry liability insurance and our team is background-checked.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes. We bring eco-friendly cleaning products and equipment. If you prefer specific products or have allergies, we can use your supplies—just let us know when booking.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call us or fill out our contact form with your address, home size, and service type. We'll provide a clear quote with no hidden fees. Same-day and next-day service may be available.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Capitol Hill, Seattle",
    text: "Professional and thorough. My apartment has never looked better. Will book again!",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Bellevue, WA",
    text: "Reliable house cleaning every two weeks. Fair pricing and they always show up on time.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    location: "West Seattle",
    text: "Used them for move-out cleaning. Got my full deposit back. Highly recommend.",
    rating: 5,
  },
];

const WHY_CHOOSE = [
  "Licensed & insured for your protection",
  "Eco-friendly products available",
  "Background-checked cleaners",
  "Satisfaction guaranteed",
  "Flexible scheduling",
  "Transparent pricing",
];

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        headline="House Cleaning Services in Seattle, WA"
        subtext="Professional residential cleaning for Seattle homes. Trusted, reliable, and satisfaction guaranteed. Get your free quote today—we&apos;re here to help."
        showCTA
        variant="home"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Our Cleaning Services</h2>
          <p className="mt-2 text-slate-600">
            From routine house cleaning to deep cleans and move-out service—we cover what Seattle homeowners need.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/services" className="font-medium text-blue-600 hover:text-blue-700">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Why Choose {SITE_CONFIG.name}?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">We Serve the Seattle Area</h2>
          <p className="mt-2 text-slate-600">
            Proudly serving {SITE_CONFIG.primaryLocation} and surrounding communities.
          </p>
          <p className="mt-4 text-slate-600">
            {SITE_CONFIG.serviceAreas.join(", ")} and more.
          </p>
          <Link
            href="/service-areas"
            className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-700"
          >
            View all service areas →
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">What Our Customers Say</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <span key={i} aria-hidden>★</span>
                  ))}
                </div>
                <p className="mt-2 text-slate-700">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-4 text-sm text-slate-500">
                  — {t.name}, {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={HOMEPAGE_FAQS} />

      <CTA
        title="Ready for a Cleaner Home in Seattle?"
        description="Get your free quote today. Same-day and recurring cleaning available."
        primaryLabel="Get Free Quote"
        secondaryLabel="Call Now"
      />
    </>
  );
}
