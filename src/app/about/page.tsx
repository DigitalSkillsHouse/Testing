import type { Metadata } from "next";
import { Hero, CTA } from "@/components";
import Link from "next/link";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us - Professional House Cleaning in Seattle",
  description:
    "Learn about Seattle Sparkle Cleaning. Family-owned house cleaning company serving Seattle, WA. Licensed, insured, and committed to quality residential cleaning.",
  openGraph: {
    title: "About Seattle Sparkle Cleaning | House Cleaning Seattle WA",
    description:
      "Family-owned house cleaning company serving Seattle. Licensed, insured, eco-friendly. Get a free quote.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="About Seattle Sparkle Cleaning"
        subtext="Your trusted partner for residential house cleaning in Seattle, WA."
        showCTA
        variant="page"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">Our Story</h2>
          <p className="mt-4 text-slate-600">
            {SITE_CONFIG.name} was founded to bring reliable, high-quality house cleaning to Seattle homeowners and renters. We understand that your time is valuable and your home deserves care you can trust.
          </p>
          <p className="mt-4 text-slate-600">
            We serve the greater Seattle area with residential cleaning, deep cleaning, move-out cleaning, and apartment cleaning. Every team member is background-checked, trained, and we use eco-friendly products when possible.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-slate-800">Our Commitment</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            <li>Consistent quality on every visit</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Friendly, professional cleaners</li>
            <li>Licensed and insured for your peace of mind</li>
            <li>Satisfaction guaranteed</li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-slate-800">Our Services</h2>
          <p className="mt-4 text-slate-600">
            We offer a range of cleaning services to fit your needs:
          </p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="font-medium text-blue-600 hover:text-blue-700">
                  {s.title}
                </Link>
                <span className="text-slate-600"> — {s.shortDescription}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Ready to Experience the Sparkle?"
        description="Get a free quote for house cleaning in Seattle. We're here to help."
        variant="blue"
      />
    </>
  );
}
