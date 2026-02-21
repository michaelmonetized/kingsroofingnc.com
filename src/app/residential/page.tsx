import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Roofing Services | Kings Roofing, inc.",
  description:
    "Professional residential roofing services in Western NC. Roof replacement, repairs, shingle installation, metal roofing, and more. Free estimates available.",
};

export default function ResidentialPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roof Repair - Serving Western North Carolina
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Here at Kings Roofing, our Asheville, NC based roofing contractors are the most 
              qualified around. Whether your roof just needs a minor repair or needs to be 
              replaced altogether, our Asheville team of quality roofing contractors can help.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              New construction and re-roofing are our areas of expertise. Let our roofing 
              contractors put years of experience to work for you at the most reasonable 
              prices around. For a Free Estimate, Call us at{" "}
              <a href={`tel:${COMPANY.phoneAlt}`} className="text-orange-400 hover:underline">{COMPANY.phoneAlt</a>{" "}
              or fill out the webform!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20"
              >
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Roof Replacement
          </h2>
          <ul className="space-y-4 max-w-3xl">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-700 text-lg">CertainTeed &amp; GAF full-color shingle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-700 text-lg">New roof construction &amp; installation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-700 text-lg">Re-Roofing and tear-offs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-700 text-lg">All types of shingles; 3-tab, asphalt, fiberglass, architectural, premium designer, steel, metal, composite, shakes, and genuine slate.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-700 text-lg">Manufacturers warranties from 20 years to lifetime.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-700 text-lg">Learn about EnergyStar tax credits up to $1500 for roofing material.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Experienced Roofing Contractors with Knowledge of All Roofing Materials, including:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {[
              "Shingle Roofing",
              "Asphalt Roofing",
              "Wood Roofing",
              "Slate Roofing",
              "Shakes Roofing",
              "Metal Roofing",
              "Rubber Roofing",
            ].map((material) => (
              <div
                key={material}
                className="bg-gray-100 p-4 rounded-lg text-center"
              >
                <span className="font-medium text-gray-900">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Repair */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Roof Repair
          </h2>
          <h3 className="text-xl text-orange-400 font-semibold mb-8">
            Residential/Commercial
          </h3>
          <ul className="space-y-4 max-w-3xl">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">We handle all types of roof repairs including emergency repairs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">Roof, chimney, and skylight leaks. Wind, hail, or tree limb damage. Flashing repair.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">Roof air vents/ridge caps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">Roof drains/pipe boot replacement. Ice dams/water backup.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">Roof inspections</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">Preventative maintenance. Gutters/siding.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact Us Today!
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-white font-semibold">
              <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone</a>
            </p>
            <p className="text-xl text-white">
              <a href="mailto:kingshaywood@gmail.com" className="hover:underline">kingshaywood@gmail.com</a>
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
