"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { SERVICE_AREAS } from "@/lib/constants";

export function HeroContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="bg-green-500/90 backdrop-blur-sm rounded-xl p-6 text-white text-center">
        <div className="text-4xl mb-2">✓</div>
        <p className="font-bold text-lg">Thank you!</p>
        <p className="text-sm opacity-90">We&apos;ll contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-3">
      {state?.error && (
        <div className="bg-red-500/90 text-white px-3 py-2 rounded-lg text-sm">
          {state.error}
        </div>
      )}

      <input
        type="text"
        name="name"
        required
        placeholder="Your Name *"
        className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email Address *"
        className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number *"
        className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <textarea
        name="message"
        required
        rows={3}
        placeholder="Tell us about your project *"
        className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
      />

      <select
        name="area"
        className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none"
      >
        <option value="">Select Service Area...</option>
        {SERVICE_AREAS.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors shadow-lg"
      >
        {pending ? "Sending..." : "GET FREE QUOTE"}
      </button>
    </form>
  );
}
