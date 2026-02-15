import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero, CTA, FAQ, ServiceCard } from "@/components";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getServiceSchema, getFAQSchema } from "@/lib/schema";
import Link from "next/link";

const SERVICE_FAQS: Record<string, { question: string; answer: string }[]> = {
  "house-cleaning": [
    { question: "How often should I get house cleaning in Seattle?", answer: "Many Seattle homeowners choose weekly, bi-weekly, or monthly cleaning depending on schedule and budget. We can recommend a frequency based on your home size and needs." },
    { question: "Do I need to be home during the cleaning?", answer: "No. You can provide access (key, lockbox, or code) and we'll clean while you're away. Many clients prefer this for convenience." },
    { question: "What's included in house cleaning?", answer: "We clean kitchens, bathrooms, bedrooms, living areas, and common spaces. Dusting, vacuuming, mopping, sanitizing surfaces, and tidying are standard. Add-ons like inside fridge or oven are available." },
  ],
  "deep-cleaning": [
    { question: "When do I need a deep clean vs regular cleaning?", answer: "Deep cleaning is ideal for move-in, after renovation, seasonal refresh, or before/after events. It reaches baseboards, inside appliances, and areas not covered in routine cleans." },
    { question: "How long does a deep clean take?", answer: "It depends on home size and condition. A typical Seattle home may take a full day or multiple visits. We'll give you an estimate when you request a quote." },
    { question: "Is deep cleaning a one-time service?", answer: "Yes. Deep cleaning is usually one-time or occasional. After that, many clients switch to regular house cleaning to maintain the results." },
  ],
  "move-out-cleaning": [
    { question: "Will move-out cleaning help me get my deposit back?", answer: "Our move-out cleaning is designed to meet common landlord and property manager standards. We focus on every room, inside appliances, and detailed cleaning so you have the best chance at a full deposit return." },
    { question: "When should I schedule move-out cleaning?", answer: "Schedule after you've moved all belongings out. An empty space allows us to clean thoroughly. We recommend booking a few days before your lease end so you have time for a final walk-through." },
    { question: "Do you provide a checklist for landlords?", answer: "Yes. We can provide a cleaning checklist and work with any requirements your landlord has. Bring your move-out list when you book and we'll make sure we cover everything." },
  ],
  "apartment-cleaning": [
    { question: "Do you clean apartments in Seattle?", answer: "Yes. We clean apartments and condos throughout Seattle and the greater area. Our teams are used to building access, parking, and smaller spaces." },
    { question: "How is apartment cleaning priced?", answer: "Pricing is based on bedrooms/bathrooms and service type (regular vs deep). We'll give you a clear quote when you contact us with your apartment details." },
    { question: "Can I get recurring apartment cleaning?", answer: "Absolutely. Many renters book weekly or bi-weekly apartment cleaning to keep their space clean without spending their free time on it." },
  ],
};

const SERVICE_CONTENT: Record<
  string,
  { intro: string; sections: { title: string; content: string }[] }
> = {
  "house-cleaning": {
    intro:
      "Our standard house cleaning keeps your Seattle home fresh and tidy. Perfect for busy families and professionals who want a consistently clean space without the hassle.",
    sections: [
      { title: "What's Included", content: "We clean all main living areas: kitchen (counters, sink, appliances outside), bathrooms (toilet, shower, sink, mirrors), bedrooms and living rooms (dusting, vacuuming, mopping). We'll also take out trash and make beds if requested." },
      { title: "Frequency", content: "Choose weekly, bi-weekly, or monthly. Recurring clients get consistent scheduling and priority booking. We use the same team when possible so they learn your preferences." },
      { title: "Pricing", content: "Quotes are based on your home size (bedrooms/bathrooms) and frequency. No hidden fees. We'll give you a clear price when you request a quote." },
    ],
  },
  "deep-cleaning": {
    intro:
      "Deep cleaning goes beyond routine maintenance. We tackle baseboards, inside ovens and fridges, behind appliances, and every corner. Ideal for move-in, seasonal refresh, or when your home needs a thorough reset.",
    sections: [
      { title: "When to Choose Deep Cleaning", content: "Move-in to a new home, after renovations, before or after a big event, or when you haven't had a deep clean in a long time. It's the foundation for maintaining a clean home with regular service afterward." },
      { title: "What We Cover", content: "Every room in detail: inside cabinets (if requested), inside oven and fridge, behind and under movable furniture, baseboards, light fixtures, window sills, and all surfaces. We use appropriate products for each surface." },
      { title: "Booking", content: "Deep cleans take longer than regular cleaning. We'll assess your space and give you an honest time and price estimate. Same-day or next-day service may be available." },
    ],
  },
  "apartment-cleaning": {
    intro:
      "Apartment and condo cleaning tailored for Seattle renters and owners. We work around building rules, parking, and access so you don't have to worry.",
    sections: [
      { title: "What We Do", content: "Same high-quality cleaning as our house cleaning service, optimized for apartments: kitchen, bathroom(s), living area, and bedrooms. We bring supplies and equipment; you just provide access." },
      { title: "Recurring or One-Time", content: "Book a one-time clean or set up recurring service (weekly, bi-weekly, or monthly). Recurring clients get priority scheduling and consistent pricing." },
      { title: "Pricing", content: "Based on bedroom and bathroom count and service type. Apartments are often quicker to clean than large houses, so pricing is typically very competitive. Get a quote for your unit." },
    ],
  },
};

// Fix move-out content structure
const moveOutContent = {
  intro:
    "Moving out? Get your full deposit back with our move-out cleaning service. We clean to landlord and property manager standards so you can hand over the keys with confidence.",
  sections: [
    { title: "Full Coverage", content: "We clean every room: kitchen (including inside oven, fridge, and cabinets), bathrooms (tub, toilet, tile), all floors, walls (spot cleaning), closets, and common areas. We'll match your lease's move-out requirements when you share them." },
    { title: "Timing", content: "Best scheduled after you've moved all belongings out. An empty unit lets us clean thoroughly. We can often schedule within a few days of your request." },
    { title: "Checklist", content: "Share your landlord's move-out checklist and we'll make sure every item is covered. We can provide a receipt and summary for your records." },
  ],
};
SERVICE_CONTENT["move-out-cleaning"] = moveOutContent;

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: `${service.title} in Seattle, WA`,
    description: `${service.shortDescription} ${SITE_CONFIG.name} offers professional ${service.title.toLowerCase()} throughout Seattle. Get a free quote.`,
    openGraph: {
      title: `${service.title} Seattle | ${SITE_CONFIG.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  const faqs = SERVICE_FAQS[slug] || [];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seattlesparklecleaning.com";
  const serviceUrl = `${baseUrl}${service.href}`;

  const serviceSchema = getServiceSchema({
    name: `${service.title} in Seattle`,
    description: service.description,
    url: serviceUrl,
  });
  const faqSchema = faqs.length > 0 ? getFAQSchema(faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Hero
        headline={`${service.title} in Seattle, WA`}
        subtext={service.shortDescription}
        showCTA
        variant="page"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600">{content.intro}</p>
          {content.sections.map((sec) => (
            <div key={sec.title} className="mt-10">
              <h2 className="text-xl font-bold text-slate-800">{sec.title}</h2>
              <p className="mt-2 text-slate-600">{sec.content}</p>
            </div>
          ))}
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQ
          items={faqs}
          title={`Frequently Asked Questions About ${service.title} in Seattle`}
          id="faq"
        />
      )}

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-800">Other Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/services" className="font-medium text-blue-600 hover:text-blue-700">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <CTA
        title={`Book ${service.title} in Seattle Today`}
        description="Get a free quote. Same-day and next-day service may be available."
        variant="blue"
      />
    </>
  );
}
