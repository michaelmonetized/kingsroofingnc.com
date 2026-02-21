import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pole Truss Enclosed Kit | Kings Roofing, inc.",
  description: "Pole truss enclosed kits — fully enclosed metal buildings with doors and windows in Western NC. 40-year warranty. Kings Roofing.",
};

const USE_CASES = [
  {
    "title": "Workshops & Garages",
    "desc": "Full enclosure keeps tools, vehicles, and projects protected year-round."
  },
  {
    "title": "Agricultural Storage",
    "desc": "Hay barns, grain storage, and equipment buildings at a fraction of conventional construction costs."
  },
  {
    "title": "Retail & Small Business",
    "desc": "Cost-effective building solution for pop-up retail, storage businesses, or light manufacturing."
  },
  {
    "title": "Hobby & Craft Space",
    "desc": "Climate-controlled with your choice of doors and windows for a dedicated studio or shop."
  }
];

const SPECS = [
  "Closed from roof and all four sides",
  "Doors and windows: your choice of location and size",
  "29-gauge 40-year steel roofing and wall panels",
  "18 in-stock colors for roof and walls",
  "Multiple width and length configurations",
  "Meets WNC wind, snow, and building code requirements"
];

export default function Page() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pole Truss Enclosed Kit</h1>
            <p className="text-xl text-gray-300 mb-8">
              A pole truss enclosed kit is a fully enclosed metal building — roof, all four walls, doors, and windows of your choice. Built from the same 29-gauge steel as our open kits, with a 40-year guarantee. The most cost-effective enclosed building on the market.
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
