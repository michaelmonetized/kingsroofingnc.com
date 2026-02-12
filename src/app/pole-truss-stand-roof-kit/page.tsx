import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pole Truss Stand Roof Kits | Kings Roofing, inc.",
  description: "Pole Barn Stand Roof Kit - just the roof closed with open sides. 18 metal colors, 40 year guarantee. Western NC.",
};

export default function PoleTrussStandRoofPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pole Truss Stand Roof Kit
            </h1>
            <h2 className="text-2xl text-orange-400 mb-6">
              Stand Roof Style
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Pole Barn Stand Roof Kit – A Pole Barn Stand Roof, is just the roof closed with the open sides. Select your color from 18 different in stock 29 gauge metals. 40 year guarantee! We also sell carport kits.
            </p>
            <a 
              href="https://www.facebook.com/kingsroofinginc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-400 hover:underline font-semibold"
            >
              Check Us Out On Facebook!
            </a>
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
