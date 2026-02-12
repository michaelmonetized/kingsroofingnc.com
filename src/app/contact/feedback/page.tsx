import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kings Roofing, inc. | Feedback",
  description: "Share your feedback with Kings Roofing. Your input helps us improve our roofing services in Western NC.",
};

export default function FeedbackPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your feedback is important to us…
          </h1>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Link 
                href="/contact/feedback/rate"
                className="block bg-gray-100 hover:bg-gray-200 p-8 rounded-lg text-center transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">Rate Your Experience</h2>
                <p className="text-gray-600">Tell us how we did</p>
              </Link>
              <Link 
                href="/contact/feedback/review"
                className="block bg-gray-100 hover:bg-gray-200 p-8 rounded-lg text-center transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">Leave a Review</h2>
                <p className="text-gray-600">Share on Google, Yelp, or Angi</p>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Or contact us directly:</p>
              <div className="space-y-2">
                <p>
                  <a href={`mailto:${COMPANY.email}`} className="text-orange-500 hover:underline font-semibold">
                    Email me about my feedback
                  </a>
                </p>
                <p>
                  <a href={`tel:${COMPANY.phone}`} className="text-orange-500 hover:underline font-semibold">
                    Call me about my feedback
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
