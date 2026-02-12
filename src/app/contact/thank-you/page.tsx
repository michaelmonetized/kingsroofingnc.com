import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kings Roofing, inc. | Thank You",
  description: "Thank you for contacting Kings Roofing. We will get back to you soon!",
};

export default function ThankYouPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">✓</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your message has been received
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We try to get to online form submissions as soon as we can, but can not guarantee a timeframe for a response to these submissions. If you are having an emergency please call us at{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-orange-400 hover:underline">
                {COMPANY.phone}
              </a>
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
