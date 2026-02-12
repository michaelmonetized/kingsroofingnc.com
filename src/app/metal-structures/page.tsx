import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Metal Structures | Kings Roofing, inc.",
  description: "Metal carports, pole barns, and metal structures in Western NC. Call Kings Roofing for a quote on metal carport kits and pole truss kits.",
};

export default function MetalStructuresPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Metal Structures
          </h1>
          <p className="text-2xl text-orange-400 mb-8">
            Call for a quote: <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone}</a>
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Metal Carport Kits */}
            <Link href="/metal-structures/metal-carport-kits" className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                  Metal Carport Kits
                </h2>
                <p className="text-gray-600 mb-4">
                  Browse our selection of regular style, boxed eave, and vertical roof style metal carports.
                </p>
                <span className="text-orange-500 font-semibold">Learn More →</span>
              </div>
            </Link>

            {/* Pole Truss Kits */}
            <Link href="/metal-structures/pole-truss-kits" className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                  Pole Truss Kits
                </h2>
                <p className="text-gray-600 mb-4">
                  Pole barn stand roof kits and enclosed kits for your property.
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
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
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
