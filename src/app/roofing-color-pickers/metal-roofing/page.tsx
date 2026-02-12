import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Go Metal Roofing Supplier Asheville, NC + Canton, NC Color Picker | Kings Roofing, inc.",
  description: "Metal roofing colors and panel specifications. Tuff-Rib, R-Panel, 5V-Crimp, and Corrugated panels. Kings Roofing in Western NC.",
};

const METAL_COLORS = [
  "Barn Red", "Black", "Bright Red", "Bronze", "Brown", "Burgundy",
  "Charcoal", "Clay", "Copper Penny", "Gallery Blue", "Galvalume",
  "Gray", "Hawaiian Blue", "Hunter Green", "Pure White", "Sierra Tan",
  "Stone", "White",
];

const PANEL_TYPES = [
  {
    name: "Tuff-Rib / Class Rib Metal Roofing Panel",
    description: "This is one of our most popular panel brands, and it's due to it being a great choice for both Residential and Commercial, and it is very economical. It's a highly lasting and durable metal roofing panel from start to finish. The manufacturer starts with a high tensile steel, and then coats it with Galvalume zinc-aluminum coating, and then primes it, and adds a layer of baked-on enamel.\n\nIt includes a watertight design that features a built-in water siphon channel. This means that under hazardous weather climates the rain will still get diverted away, instead of underneath the material.",
    specs: [
      "36″ panel coverage",
      "3/4″ trapezoidal ribs on 9″ centers",
      "Exposed fastened low profile panel",
      "Applies over open framing or solid substrate",
      "Material: High-quality steel protected by layers of coatings and paint",
      "Gauges: 29ga and 26ga standard",
      "Finishes: Painted or Acrylic Coated Galvalume®",
      "Prime Panel Warranty: 40-year on painted, 20-30 year on Galvalume®",
      "Minimum roof slope 2½:12",
      "Purpose: Roofing and Siding panels",
    ],
  },
  {
    name: "R-Panel / PBR Panel",
    description: "This is the most commonly used Commercial metal roofing/siding panel. Its 1 1/4″ tall ribs are great for coverage and slopes!",
    specs: [
      "36″ panel coverage",
      "1 1/4″ trapezoidal ribs on 12″ centers",
      "Exposed fastened metal building panel",
      "Applies over open framing or solid substrate",
      "Material: High-quality steel protected by layers of coatings and paint",
      "Gauges: 26ga standard",
      "Finishes: Painted or acrylic coated Galvalume®",
      "Panel Warranty: 40-year on painted, 20-30 year on Galvalume®",
      "Minimum roof slope 1:12",
      "Energy Star Rated on most colors – Up to 10% tax credit",
      "Purpose: Commercial Metal Roofing and Siding panels",
    ],
  },
  {
    name: "5V-Crimp Panel",
    description: "5V metal roofing panels are known nationwide for being widely used on older homes and barns. Since it was one of the original metal roofs, and has five ribs with a low profile, it makes it a great choice for any roof.",
    specs: [
      "24″ panel coverage",
      "1/2″ rib height",
      "Exposed fastened low profile panel",
      "Applies over open framing or solid substrate",
      "Material: High-quality steel protected by layers of coatings and paint",
      "Gauges: 29ga or 26ga standard",
      "Finishes: Painted, Galvalume®, or Galvanized",
      "Warranty: 40-year on painted, 30-year on Galvalume®",
      "Minimum roof slope 3:12",
      "Energy Star Rated – Up to 10% tax credit",
      "Purpose: Roofing panels",
    ],
  },
  {
    name: "Corrugated Metal Panels",
    description: "Found all across America, these are known for their wavy style. These metal roofing panels are commonly used with agricultural buildings and have made a comeback by being used for accent walls, and ceilings.",
    specs: [
      "24″ panel coverage",
      "1/4″ or 1/2″ rib height",
      "1-1/4″ or 2-1/2″ distance between ridges",
      "Exposed fastened panel",
      "Applies over open framing or solid substrate",
      "Material: High-quality steel protected by layers of coatings and paint",
      "Gauges: 29ga or 26ga standard, 31ga economy galvanized available",
      "Finishes: Painted, Galvalume®, or Galvanized",
      "Warranty: 40-year on painted, 25-30 year on Galvalume®",
      "Minimum roof slope 3:12",
    ],
  },
];

export default function MetalRoofingColorPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Metal Roofing Colors
          </h1>
          <p className="text-xl text-gray-300">
            Browse our selection of metal roofing colors and panel types
          </p>
        </div>
      </section>

      {/* Colors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {METAL_COLORS.map((color) => (
              <div
                key={color}
                className="bg-white p-4 rounded-lg text-center shadow hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-900">{color}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Asheville Metal Roofing Contractor
          </h2>
          <h3 className="text-xl text-gray-600 mb-12 text-center">
            Exposed Fastened Metal Roofing Panels
          </h3>

          <div className="space-y-16 max-w-4xl mx-auto">
            {PANEL_TYPES.map((panel) => (
              <div key={panel.name} className="border-b border-gray-200 pb-12 last:border-0">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{panel.name}</h4>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{panel.description}</p>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h5>
                <ul className="space-y-2">
                  {panel.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
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
