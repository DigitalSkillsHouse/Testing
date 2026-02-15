import type { Metadata } from "next";
import { Hero, ServiceCard, CTA } from "@/components";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in Seattle, WA",
  description:
    "Residential house cleaning services in Seattle: regular cleaning, deep cleaning, move-out cleaning, apartment cleaning. Get a free quote from Seattle Sparkle Cleaning.",
  openGraph: {
    title: "Cleaning Services Seattle | House, Deep, Move-Out & Apartment",
    description:
      "Professional house cleaning, deep cleaning, move-out and apartment cleaning in Seattle, WA. Free quotes.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="House Cleaning Services in Seattle"
        subtext="From routine cleans to deep cleans and move-out service—we&apos;ve got you covered."
        showCTA
        variant="page"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Our Services</h2>
          <p className="mt-2 text-slate-600">
            {SITE_CONFIG.name} offers professional residential cleaning throughout the Seattle area. Choose the service that fits your needs.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">Not Sure Which Service?</h2>
          <p className="mt-4 text-slate-600">
            Tell us about your home and cleaning goals. We&apos;ll recommend the right option and give you a clear quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <CTA
        title="Book Your Seattle House Cleaning Today"
        description="Same-day and recurring cleaning available. Call or request a quote."
        variant="blue"
      />
    </>
  );
}
