"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-blue-700">
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-gray-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
