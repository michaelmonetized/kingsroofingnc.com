"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function StarRating() {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
    setTimeout(() => {
      if (selected >= 4) {
        router.push("/contact/feedback/review");
      } else {
        router.push("/contact/feedback");
      }
    }, 800);
  };

  const displayRating = hovered ?? selected;

  return (
    <div className="max-w-xl mx-auto text-center">
      <div className="flex justify-center gap-4 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setSelected(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(null)}
            className={`text-5xl transition-colors ${
              displayRating !== null && star <= displayRating
                ? "text-orange-500"
                : "text-gray-300"
            } hover:text-orange-400 cursor-pointer`}
            aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
          >
            ★
          </button>
        ))}
      </div>

      {selected && (
        <p className="text-lg font-semibold text-gray-800 mb-6">
          {selected === 5 && "Excellent! We love to hear it 🙌"}
          {selected === 4 && "Great! Thanks for the kind words."}
          {selected === 3 && "Good to know — we appreciate your honesty."}
          {selected === 2 && "Sorry to hear that. We'd love to make it right."}
          {selected === 1 && "We're sorry — please let us know how we can improve."}
        </p>
      )}

      {!selected && (
        <p className="text-gray-500 mb-6">Click a star to rate your experience</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={!selected || submitted}
        className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors mb-6"
      >
        {submitted ? "Thanks! Redirecting…" : "Submit Rating"}
      </button>

      <div className="mt-4">
        <Link
          href="/contact/feedback/review"
          className="inline-flex items-center text-orange-500 hover:underline font-semibold text-sm"
        >
          Or leave us a review on Google, Yelp, or Angi →
        </Link>
      </div>
    </div>
  );
}
