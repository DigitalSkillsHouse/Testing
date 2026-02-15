import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{SITE_CONFIG.name}</h3>
            <p className="mt-2 text-sm">{SITE_CONFIG.tagline}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p>{SITE_CONFIG.fullAddress}</p>
              <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`} className="block hover:text-white">
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-white">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="text-sm hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Service Areas</h3>
            <p className="mt-4 text-sm">
              {SITE_CONFIG.serviceAreas.slice(0, 5).join(", ")} and more throughout the greater Seattle area.
            </p>
            <Link href="/service-areas" className="mt-2 inline-block text-sm text-blue-300 hover:text-white">
              View all areas →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-700 pt-8 sm:flex-row gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
