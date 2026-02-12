"use client";

import { useState } from "react";
import { SERVICE_AREAS } from "@/lib/constants";
import { submitQuoteForm } from "@/app/actions";

interface QuoteFormProps {
  variant?: "light" | "dark";
}

export function QuoteForm({ variant = "dark" }: QuoteFormProps) {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isLight = variant === "light";

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setError(null);
    try {
      const result = await submitQuoteForm(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setPending(false);
    }
  }

  if (success) {
    return (
      <div className={`text-center py-8 ${isLight ? "text-white" : "text-gray-900"}`}>
        <div className="text-4xl mb-2">✓</div>
        <h4 className="font-bold text-xl mb-2">Thank You!</h4>
        <p className={isLight ? "text-orange-100" : "text-gray-600"}>
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  const inputClass = isLight
    ? "w-full px-4 py-2 rounded border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
    : "w-full px-4 py-2 rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500";

  const buttonClass = isLight
    ? "w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded font-bold transition-colors disabled:opacity-50"
    : "w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-bold transition-colors disabled:opacity-50";

  return (
    <form action={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Your Name *"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell us about your project *"
        required
        rows={3}
        className={inputClass}
      />
      <select name="area" required className={inputClass}>
        <option value="">Select Service Area...</option>
        {SERVICE_AREAS.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
        <option value="Other">Other</option>
      </select>
      {error && (
        <p className="text-red-200 text-sm">{error}</p>
      )}
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Sending..." : "Get Free Quote"}
      </button>
    </form>
  );
}
