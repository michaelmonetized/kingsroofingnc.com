import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Rate | Kings Roofing, inc.",
  description: "Rate your experience with Kings Roofing. Your feedback is important to us.",
};

export default function RatePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Would You Rate Your Experience?
          </h1>
          <p className="text-xl text-gray-300">
            Your Feedback Is Very Important To Us…
          </p>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="text-5xl text-gray-300 hover:text-orange-500 transition-colors"
                  aria-label={`Rate ${star} stars`}
                >
                  ★
                </button>
              ))}
            </div>
            <p className="text-gray-600 mb-8">Click a star to rate your experience</p>
            <Link
              href="/contact/feedback/review"
              className="inline-flex items-center text-orange-500 hover:underline font-semibold"
            >
              Or leave us a review on Google, Yelp, or Angi →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
