"use client";

import { useState } from "react";
import type { FAQItem as FAQType } from "@/types";

interface FAQProps {
  items: FAQType[];
  title?: string;
  id?: string;
}

export function FAQ({ items, title = "Frequently Asked Questions", id = "faq" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">{title}</h2>
        <dl className="mt-8 space-y-4">
          {items.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-slate-50/50 transition hover:bg-slate-50"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-start justify-between px-4 py-4 text-left font-medium text-slate-800"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="ml-2 shrink-0 text-blue-600">
                    {openIndex === index ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </button>
              </dt>
              <dd
                className={`overflow-hidden px-4 pb-4 transition-all ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
