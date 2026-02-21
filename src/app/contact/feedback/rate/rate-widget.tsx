"use client";

import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/layout";

export function RateWidget() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleSelect = (star: number) => {
    setSelected(star);
    if (star >= 4) {
      setTimeout(() => { window.location.href = "/contact/feedback/review"; }, 600);
    } else {
      setTimeout(() => { window.location.href = `/contact/feedback?rating=${star}`; }, 600);
    }
  };

  const display = hovered || selected;

  const label =
    display === 0 ? "Click a star to rate your experience"
    : display === 1 ? "We're sorry to hear that."
    : display === 2 ? "We'd love to do better."
    : display === 3 ? "Thanks — tell us more."
    : display === 4 ? "Great to hear!"
    : "You're awesome — thanks!";

  return (
    <Layout>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Would You Rate Your Experience?
          </h1>
          <p className="text-xl text-gray-300">Your feedback is very important to us.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-4" role="group" aria-label="Star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleSelect(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className={`text-5xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded ${
                    star <= display ? "text-orange-500 scale-110" : "text-gray-300 hover:text-orange-400"
                  }`}
                  aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
                  aria-pressed={selected === star}
                >
                  ★
                </button>
              ))}
            </div>
            <p className="text-gray-600 mb-8 min-h-[1.5rem]">
              {selected > 0 ? <span className="font-semibold text-gray-800">{label} Redirecting…</span> : label}
            </p>
            <Link href="/contact/feedback/review" className="inline-flex items-center text-orange-500 hover:underline font-semibold">
              Or leave us a review on Google, Yelp, or Angi →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
