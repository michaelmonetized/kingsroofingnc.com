import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { StarRating } from "./star-rating";

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
          <StarRating />
        </div>
      </section>
    </Layout>
  );
}
