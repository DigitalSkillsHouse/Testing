import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_CONFIG.name}. How we collect, use, and protect your information.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
        <p className="mt-2 text-slate-500">Last updated: February 2024</p>

        <div className="prose prose-slate mt-10 max-w-none">
          <h2 className="text-xl font-semibold text-slate-800">1. Introduction</h2>
          <p className="text-slate-600">
            {SITE_CONFIG.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">2. Information We Collect</h2>
          <p className="text-slate-600">
            We may collect information you provide directly, such as name, email address, phone number, and address when you request a quote, contact us, or use our services. We may also collect information automatically when you visit our website (e.g., IP address, browser type, pages visited).
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">3. How We Use Your Information</h2>
          <p className="text-slate-600">
            We use your information to provide cleaning services, respond to inquiries, send quotes, schedule appointments, improve our website and services, and comply with legal obligations.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">4. Sharing of Information</h2>
          <p className="text-slate-600">
            We do not sell your personal information. We may share information with service providers who assist our business (e.g., scheduling, payment processing) or when required by law.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">5. Security</h2>
          <p className="text-slate-600">
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">6. Your Choices</h2>
          <p className="text-slate-600">
            You may contact us to update, correct, or delete your personal information. You may also opt out of marketing communications at any time.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-800">7. Contact Us</h2>
          <p className="text-slate-600">
            If you have questions about this Privacy Policy, contact us at {SITE_CONFIG.email} or {SITE_CONFIG.phone}, or write to us at {SITE_CONFIG.fullAddress}.
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
