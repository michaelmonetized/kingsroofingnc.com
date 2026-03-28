"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/js";
import { SERVICE_AREAS } from "@/lib/constants";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export function PremiumQuoteForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        setError("Please fill out all required fields");
        setLoading(false);
        return;
      }

      // Create checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const result = await stripe.redirectToCheckout({ sessionId });
      if (result.error) {
        setError(result.error.message || "Checkout failed");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Error</p>
          <p className="text-sm">{error}</p>
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.area}
          onChange={handleChange}
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
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
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
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
          placeholder="Tell us about your roofing project, any concerns, or timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
      >
        {loading ? "Processing..." : "Request Premium Quote ($50)"}
      </button>

      <p className="text-sm text-slate-500 text-center">
        The $50 documentation fee will be deducted from your project estimate if you proceed. Secure payment via Stripe.
      </p>
    </form>
  );
}
