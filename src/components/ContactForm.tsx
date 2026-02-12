"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { SERVICE_AREAS } from "@/lib/constants";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
        </div>
      )}

      {state?.error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Something went wrong</p>
          <p className="text-sm">{state.error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
            placeholder="(828) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-2">
          Service Area
        </label>
        <select
          id="area"
          name="area"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none bg-white"
        >
          <option value="">Select your area...</option>
          {SERVICE_AREAS.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none bg-white"
        >
          <option value="">Select a service...</option>
          <option value="New Roof Installation">New Roof Installation</option>
          <option value="Roof Replacement">Roof Replacement</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Emergency Repair">Emergency Repair</option>
          <option value="Storm Damage">Storm Damage</option>
          <option value="Roof Inspection">Roof Inspection</option>
          <option value="Commercial Roofing">Commercial Roofing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
          placeholder="Tell us about your roofing project..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
      >
        {pending ? "Sending..." : "Get Your Free Quote"}
      </button>

      <p className="text-sm text-slate-500 text-center">
        We respond to all inquiries within 24 hours. Your information is secure and will never be shared.
      </p>
    </form>
  );
}
