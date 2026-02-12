import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roofing Color Picker | Kings Roofing, inc.",
  description: "Browse our roofing color options - metal roofing and shingle colors available. Kings Roofing in Western NC.",
};

export default function RoofingColorPickersPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Roofing Color Picker
          </h1>
          <p className="text-xl text-gray-300">
            Choose the perfect color for your roof
          </p>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Metal Roofing */}
            <Link href="/roofing-color-pickers/metal-roofing" className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                  Metal Roofing Color Picker
                </h2>
                <p className="text-gray-600 mb-4">
                  Click To View Available Metal Roofing Colors
                </p>
                <span className="text-orange-500 font-semibold">Learn More →</span>
              </div>
            </Link>

            {/* Shingles */}
            <Link href="/roofing-color-pickers/shingles" className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                  Traditional Shingle Roofing Color Picker
                </h2>
                <p className="text-gray-600 mb-4">
                  Click To View Available Shingle Roofing Colors
                </p>
                <span className="text-orange-500 font-semibold">Learn More →</span>
              </div>
            </Link>
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
