import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Regular Style Metal Carport | Kings Roofing, inc.",
  description: "Regular style metal carports for car shelters, boat storage, RV carports, and more. Affordable metal carport solutions in Western NC.",
};

export default function RegularStyleCarportsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Regular Style Metal Carports
            </h1>
            <h2 className="text-2xl text-orange-400 mb-6">
              Regular Style
            </h2>
            <p className="text-xl text-gray-300">
              Regular Style Carports are often used for inexpensive car shelters, single and double metal carports, boat storage shelters, RV carports, and for value-priced combo carports or carports with storage buildings.
            </p>
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
