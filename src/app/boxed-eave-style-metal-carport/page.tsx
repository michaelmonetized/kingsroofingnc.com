import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Boxed Eave Style Metal Carport | Kings Roofing, inc.",
  description: "Boxed eave style metal carports with A-frame roof in Western NC. Matches home roof styles. Free quotes from Kings Roofing.",
};

const USE_CASES = [
  {
    "title": "Home-Matching Aesthetics",
    "desc": "The A-frame profile closely mirrors a standard gable roof \u2014 ideal when curb appeal matters."
  },
  {
    "title": "Dual-Car Coverage",
    "desc": "Available in widths up to 26' for side-by-side vehicle protection."
  },
  {
    "title": "Enclosed End Storage",
    "desc": "Easily add sides and ends to convert to a fully enclosed garage."
  },
  {
    "title": "Carports + Storage Combos",
    "desc": "Pair a carport bay with an attached storage room in one continuous structure."
  }
];

const SPECS = [
  "Available in 12', 18', 20', 22', 24', and 26' widths",
  "Boxed eave trim on all sides for a finished appearance",
  "29-gauge steel panels with 40-year rust-through warranty",
  "7', 8', 9', and 10' leg heights",
  "18 standard color options",
  "Certifiable to local wind and snow load codes"
];

export default function Page() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Boxed Eave Style Metal Carport</h1>
            <p className="text-xl text-gray-300 mb-8">
              The boxed eave carport features an A-frame design with horizontal panels and enclosed eave trim, giving it a cleaner, more finished look that complements most homes. A popular upgrade from the regular style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold">
                Get a Free Quote
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20">
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Common Uses</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {USE_CASES.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Specs & Features</h2>
          <ul className="space-y-4 max-w-2xl">
            {SPECS.map((spec) => (
              <li key={spec} className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                <span className="text-gray-300">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Quote</h2>
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-white font-semibold">
              <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone}</a>
            </p>
            <p className="text-xl text-white">
              <a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a>
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg">
            Free Quotes…
          </Link>
        </div>
      </section>
    </Layout>
  );
}
