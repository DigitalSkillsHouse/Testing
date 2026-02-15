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
    <section className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              {variant === "home" && (
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Seattle&apos;s Trusted Cleaners
                </p>
              )}
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
                {headline}
              </h1>
              {subtext && (
                <p className="mt-4 text-lg text-slate-600 sm:mt-5">
                  {subtext}
                </p>
              )}
              {showCTA && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {SITE_CONFIG.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    Get Free Quote
                  </Link>
                </div>
              )}
              {variant === "home" && (
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-8">
                  <span className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Licensed & Insured
                  </span>
                  <span className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Eco-Friendly
                  </span>
                  <span className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Satisfaction Guaranteed
                  </span>
                </div>
              )}
            </div>
            <div className="mt-10 hidden lg:mt-0 lg:block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white shadow-xl sm:p-10">
                <div className="relative z-10">
                  <p className="text-sm font-medium uppercase tracking-wider text-blue-100">
                    Quick contact
                  </p>
                  <p className="mt-2 text-2xl font-bold sm:text-3xl">
                    Ready for a cleaner home?
                  </p>
                  <p className="mt-3 text-blue-100">
                    Call now for a free quote. Same-day and recurring cleaning available.
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
