import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Metal Carport Kits | Kings Roofing, inc.",
  description: "Metal carport kits in Western NC - Regular style, boxed eave, and vertical roof carports. Call Kings Roofing for your free quote.",
};

const CARPORT_STYLES = [
  {
    title: "Regular Style Metal Carports",
    subtitle: "Regular Style",
    description: "Regular Style Carports are often used for inexpensive car shelters, single and double metal carports, boat storage shelters, RV carports, and for value-priced combo carports or carports with storage buildings.",
    link: "/regular-style-metal-carports",
  },
  {
    title: "Boxed Eave Style Metal Carport",
    subtitle: "Boxed Eave Style",
    description: "Boxed-eave metal carports are built with an A-frame roof. Many homeowners choose this option to have a carport that will match the roof style of their home.",
    link: "/boxed-eave-style-metal-carport",
  },
  {
    title: "Vertical Roof Style Metal Carport",
    subtitle: "Vertical Roof Style",
    description: "The vertical roof style metal carport is the strongest roof style available. The roofing panels are laid in a vertical orientation starting from the peak and ending at the eaves/sides.",
    link: "/vertical-roof-style-metal-carport",
  },
];

export default function MetalCarportKitsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Metal Carport Kits
          </h1>
          <p className="text-xl text-gray-300">
            Quality metal carports for every need
          </p>
        </div>
      </section>

      {/* Carport Styles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-4xl mx-auto">
            {CARPORT_STYLES.map((style) => (
              <div key={style.title} className="border-b border-gray-200 pb-16 last:border-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {style.title}
                </h2>
                <h3 className="text-xl text-orange-500 font-semibold mb-4">
                  {style.subtitle}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {style.description}
                </p>
                <Link
                  href={style.link}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Learn More →
                </Link>
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
