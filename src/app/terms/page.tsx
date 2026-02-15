import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${SITE_CONFIG.name} house cleaning services in Seattle, WA.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-800">Terms & Conditions</h1>
        <p className="mt-2 text-slate-500">Last updated: February 2024</p>

        <div className="prose prose-slate mt-10 max-w-none">
          <h2 className="text-xl font-semibold text-slate-800">1. Agreement to Terms</h2>
          <p className="text-slate-600">
            By using the website or engaging the services of {SITE_CONFIG.name}, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">2. Services</h2>
          <p className="text-slate-600">
            We provide residential house cleaning services in the Seattle, WA area. Service descriptions, pricing, and scope will be communicated at the time of booking or in a written quote. We reserve the right to refuse or discontinue service in accordance with our policies.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">3. Booking and Payment</h2>
          <p className="text-slate-600">
            Bookings are subject to availability. Payment terms will be provided at booking. Cancellation and rescheduling policies apply as communicated at the time of scheduling.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">4. Customer Responsibilities</h2>
          <p className="text-slate-600">
            You agree to provide accurate information, safe access to the property, and to secure or remove valuable or fragile items as appropriate. You are responsible for ensuring that our staff has appropriate access (keys, codes, etc.) at the scheduled time.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">5. Limitation of Liability</h2>
          <p className="text-slate-600">
            To the fullest extent permitted by law, {SITE_CONFIG.name} shall not be liable for indirect, incidental, special, or consequential damages. Our liability for any claim arising from our services shall not exceed the amount paid for the service in question.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">6. Changes</h2>
          <p className="text-slate-600">
            We may update these Terms and Conditions from time to time. Continued use of our website or services after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">7. Contact</h2>
          <p className="text-slate-600">
            For questions about these Terms and Conditions, contact us at {SITE_CONFIG.email}, {SITE_CONFIG.phone}, or {SITE_CONFIG.fullAddress}.
          </p>
        </div>

        <p className="mt-10">
          <Link href="/" className="font-medium text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
