import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Timberline HD Color Shingle Roofing Color Picker | Kings Roofing, inc.",
  description: "Browse GAF Timberline HD shingle colors - Barkwood, Charcoal, Slate, Weathered Wood and more. Kings Roofing in Western NC.",
};

const SHINGLE_COLORS = [
  "Barkwood",
  "Birchwood",
  "Charcoal",
  "Driftwood",
  "Hickory",
  "Hunter Green",
  "Pewter Gray",
  "Shakewood",
  "Slate",
  "Weathered Wood",
  "White",
];

export default function ShinglesColorPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shingles
          </h1>
          <p className="text-xl text-gray-300">
            GAF Timberline HD Shingle Colors
          </p>
        </div>
      </section>

      {/* Colors Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {SHINGLE_COLORS.map((color) => (
              <div
                key={color}
                className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                <span className="font-medium text-gray-900 text-lg">{color}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us Today!</h2>
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-white font-semibold">
              <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone}</a>
            </p>
            <p className="text-xl text-white">
              <a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a>
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg"
          >
            Free Quotes…
          </Link>
        </div>
      </section>
    </Layout>
  );
}
