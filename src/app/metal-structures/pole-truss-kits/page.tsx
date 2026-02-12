import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pole Truss Kits | Kings Roofing, inc.",
  description: "Pole barn kits - stand roof and enclosed styles. Quality pole truss kits in Western NC. Call for a quote!",
};

export default function PoleTrussKitsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pole Truss Kits
          </h1>
          <p className="text-xl text-gray-300">
            Quality pole barn kits for your property
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-4xl mx-auto">
            {/* Stand Roof Kit */}
            <div className="border-b border-gray-200 pb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Pole Truss Stand Roof Kit
              </h2>
              <h3 className="text-xl text-orange-500 font-semibold mb-4">
                Stand Roof Style
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Pole Barn Stand Roof Kit – A Pole Barn Stand Roof, is just the roof closed with the open sides.
              </p>
              <Link
                href="/pole-truss-stand-roof-kit"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
              >
                Learn More →
              </Link>
            </div>

            {/* Enclosed Kit */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Pole Truss Enclosed Kits
              </h2>
              <h3 className="text-xl text-orange-500 font-semibold mb-4">
                Enclosed Style
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Pole Barn Enclosed Kit – A Pole Barn Enclosed, is closed from the roof and all sides with an adding of doors and windows of your choice.
              </p>
              <Link
                href="/pole-truss-enclosed-kits"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
              >
                Learn More →
              </Link>
            </div>
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
