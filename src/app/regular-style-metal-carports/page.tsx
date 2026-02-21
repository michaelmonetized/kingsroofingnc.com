import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Regular Style Metal Carport | Kings Roofing, inc.",
  description: "Regular style metal carports for car shelters, boat storage, RV carports, and more. Affordable metal carport solutions in Western NC. Free quotes.",
};

const USE_CASES = [
  { title: "Vehicle Protection", desc: "Single and double carports to protect your car, truck, or SUV from rain, hail, and UV damage." },
  { title: "Boat & RV Storage", desc: "Wide-span options available for boats, trailers, and full-size RVs year-round." },
  { title: "Farm Equipment", desc: "Cover tractors, ATVs, and equipment from the elements without the cost of a full building." },
  { title: "Combo Units", desc: "Pair with enclosed storage bays for a versatile workspace or workshop." },
];

const SPECS = [
  "Available in 12', 18', 20', 22', 24', and 26' widths",
  "Standard lengths from 21' to 51' (custom available)",
  "7', 8', 9', and 10' leg heights",
  "29-gauge steel roofing panels — 40-year rust-through warranty",
  "Choice of 18 standard colors",
  "A-frame horizontal roof panels",
  "Certified to meet local wind and snow load requirements",
];

export default function RegularStyleCarportsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Regular Style Metal Carports</h1>
            <p className="text-xl text-gray-300 mb-8">
              The most affordable and popular carport style — sturdy A-frame construction with horizontal roof panels. Perfect for vehicles, boats, RVs, and equipment storage in Western NC.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What Can a Regular Style Carport Do For You?</h2>
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
          <h2 className="text-3xl font-bold mb-8">Specs & Options</h2>
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

      {/* Why Kings Roofing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Kings Roofing?</h2>
          <p className="text-gray-600 text-lg mb-4">
            We've been installing metal carports across Western North Carolina for over a decade. Every structure is professionally installed by our local crew — no sub-contractors, no surprises.
          </p>
          <p className="text-gray-600 text-lg">
            All our metal carports are backed by manufacturer warranties and installed to meet North Carolina's wind and snow load codes. Call us for a free, no-pressure quote.
          </p>
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
          <Link href="/contact" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg">
            Free Quotes…
          </Link>
        </div>
      </section>
    </Layout>
  );
}
