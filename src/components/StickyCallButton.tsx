"use client";

import { SITE_CONFIG } from "@/lib/constants";

export function StickyCallButton() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700 md:bottom-6 md:right-6"
      aria-label="Call now"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      <span className="md:hidden">Call Now</span>
      <span className="hidden md:inline">{SITE_CONFIG.phone}</span>
    </a>
  );
}
