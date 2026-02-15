import Link from "next/link";
import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
  showButton?: boolean;
}

export function ServiceCard({ service, showButton = true }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-800">{service.title}</h3>
      <p className="mt-2 flex-1 text-slate-600">{service.shortDescription}</p>
      {showButton && (
        <Link
          href={service.href}
          className="mt-4 inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
        >
          Learn more
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </article>
  );
}
