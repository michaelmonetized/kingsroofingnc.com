import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pole Truss Stand Roof Kit | Kings Roofing, inc.",
  description: "Pole truss stand roof kits for open-air shelters and agricultural structures in Western NC. Durable steel construction from Kings Roofing.",
};

const USE_CASES = [
  {
    "title": "Open-Air Pavilions",
    "desc": "Great for outdoor seating, event coverage, or farm market shelters."
  },
  {
    "title": "Equipment Staging",
    "desc": "Keep machinery, baled hay, or lumber dry without full enclosure costs."
  },
  {
    "title": "Livestock Shelter",
    "desc": "Open sides allow airflow while the roof keeps animals dry."
  },
  {
    "title": "Loading Dock Covers",
    "desc": "Covers loading areas without interfering with forklift access."
  }
];

const SPECS = [
  "29-gauge steel roof panels \u2014 40-year rust-through warranty",
  "Open sides for maximum airflow and access",
  "Multiple width and length configurations available",
  "Custom heights to suit your application",
  "18 color options",
  "Engineered for WNC wind and snow loads"
];

export default function Page() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pole Truss Stand Roof Kit</h1>
            <p className="text-xl text-gray-300 mb-8">
              Our pole truss stand roof kit delivers an open-sided, covered shelter — perfect for picnic pavilions, equipment staging areas, and livestock shelters. Simple steel construction with lasting weather protection.
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
