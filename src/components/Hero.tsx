import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface HeroProps {
  headline: string;
  subtext?: string;
  showCTA?: boolean;
  variant?: "home" | "page";
}

export function Hero({ headline, subtext, showCTA = true, variant = "home" }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-16 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {headline}
        </h1>
        {subtext && (
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            {subtext}
          </p>
        )}
        {showCTA && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Call Now: {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Get Free Quote
            </Link>
          </div>
        )}
        {variant === "home" && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-1">
              <svg className="h-5 w-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-5 w-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Eco-Friendly Products
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-5 w-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Satisfaction Guaranteed
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
