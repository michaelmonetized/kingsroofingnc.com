import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kings Roofing, inc. | Asheville Commercial Roofers",
  description:
    "Professional commercial roofing services in Western NC. Flat roof systems, re-shingling, repairs, and maintenance programs. Free estimates for your business.",
};

export default function CommercialPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We pride ourselves in being the most professional and efficient roofing contractors serving the Asheville area
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Whether your commercial roof just needs a minor repair or needs to be replaced 
              altogether, our Asheville team of quality roofing contractors can help.
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Roof Replacement
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            We take pride in being experienced roofing contractors with knowledge of all 
            Roofing Materials. We are happy to research the best system for your project.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We offer most commercial applications including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
            {[
              "Shingle Roofing",
              "Asphalt Roofing",
              "Metal Roofing",
              "Rubber Roofing",
            ].map((material) => (
              <div
                key={material}
                className="bg-white p-4 rounded-lg text-center shadow-sm"
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
              <span className="text-gray-300 text-lg">We handle all types of roof repairs including metal and emergency repairs.</span>
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
