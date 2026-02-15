"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const err: Record<string, string> = {};
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const serviceNeeded = (formData.get("serviceNeeded") as string)?.trim();

    if (!name || name.length < 2) err.name = "Please enter your name.";
    if (!phone || phone.length < 10) err.phone = "Please enter a valid phone number.";
    if (!email) err.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Please enter a valid email.";
    if (!serviceNeeded) err.serviceNeeded = "Please select a service.";

    return err;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      // Ready for webhook or API integration - replace with your endpoint
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used when integrating API
      const payload = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        serviceNeeded: formData.get("serviceNeeded"),
        message: formData.get("message"),
      };
      // TODO: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) });
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center text-green-800">
        <p className="font-semibold">Thank you! We&apos;ll contact you shortly.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="+923166763282"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-medium text-slate-700">
          Service Needed *
        </label>
        <select
          id="serviceNeeded"
          name="serviceNeeded"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.serviceNeeded && <p className="mt-1 text-sm text-red-600">{errors.serviceNeeded}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Tell us about your cleaning needs..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
