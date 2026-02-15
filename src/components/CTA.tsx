import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface CTAProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  variant?: "blue" | "white";
}

export function CTA({
  title,
  description,
  primaryLabel = "Get Free Quote",
  secondaryLabel = "Call Now",
  variant = "blue",
}: CTAProps) {
  const isBlue = variant === "blue";
  return (
    <section className={isBlue ? "bg-blue-600 py-16 text-white" : "bg-slate-100 py-16 text-slate-800"}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {description && <p className="mt-4 text-lg opacity-90">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className={`inline-flex rounded-lg px-6 py-3 font-semibold transition ${
              isBlue
                ? "bg-white text-blue-600 hover:bg-blue-50"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
            className={`inline-flex rounded-lg border-2 px-6 py-3 font-semibold transition ${
              isBlue
                ? "border-white text-white hover:bg-white/10"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            {secondaryLabel}: {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
