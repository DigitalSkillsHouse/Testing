import type { Metadata } from "next";
import { Hero, ContactForm, MapEmbed } from "@/components";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free House Cleaning Quote in Seattle",
  description:
    "Contact Seattle Sparkle Cleaning for a free quote. Call, email, or fill out our form. Serving Seattle, Bellevue, Tacoma and the greater Puget Sound area.",
  openGraph: {
    title: "Contact Seattle Sparkle Cleaning | Free Quote",
    description: "Get a free quote for house cleaning in Seattle. Call or fill out our form.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Contact Us"
        subtext="Get a free quote for house cleaning in Seattle. We're here to help."
        showCTA
        variant="page"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Request a Free Quote</h2>
              <p className="mt-2 text-slate-600">
                Fill out the form and we&apos;ll get back to you with a clear quote. For immediate help, call us.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Get in Touch</h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Phone:</span>{" "}
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`} className="text-blue-600 hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-slate-800">Email:</span>{" "}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-slate-800">Address:</span><br />
                  {SITE_CONFIG.fullAddress}
                </p>
              </div>
              <div className="mt-8">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
