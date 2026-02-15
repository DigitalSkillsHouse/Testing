import type { Metadata } from "next";
import { Hero, CTA, MapEmbed } from "@/components";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas - House Cleaning Near Seattle, WA",
  description:
    "Seattle Sparkle Cleaning serves Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, and more. Find house cleaning in your neighborhood.",
  openGraph: {
    title: "Service Areas | House Cleaning Seattle & Greater Puget Sound",
    description:
      "We serve Seattle and surrounding cities. Get professional house cleaning in your area.",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        headline="House Cleaning Service Areas"
        subtext="Serving Seattle and the greater Puget Sound region."
        showCTA
        variant="page"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Where We Serve</h2>
          <p className="mt-2 text-slate-600">
            {SITE_CONFIG.name} provides residential house cleaning throughout {SITE_CONFIG.primaryLocation} and nearby communities. If you don&apos;t see your city listed, give us a call—we may still serve your area.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SITE_CONFIG.serviceAreas.map((area) => (
              <li key={area}>
                <Link
                  href={`/contact?service=house-cleaning&area=${encodeURIComponent(area)}`}
                  className="block rounded-lg border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-blue-300 hover:bg-blue-50/50"
                >
                  House Cleaning in {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">Our Location</h2>
          <p className="mt-2 text-slate-600">
            Based in Seattle. We come to you—no need to travel. Serving homes and apartments across the region.
          </p>
          <div className="mt-6">
            <MapEmbed />
          </div>
          <div className="mt-6 text-slate-600">
            <p className="font-medium text-slate-800">{SITE_CONFIG.name}</p>
            <p>{SITE_CONFIG.fullAddress}</p>
            <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`} className="text-blue-600 hover:underline">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <CTA
        title="Get House Cleaning in Your Neighborhood"
        description="Request a quote for your city. We'll confirm availability and pricing."
        variant="white"
      />
    </>
  );
}
