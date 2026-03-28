import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { PremiumQuoteForm } from "@/components/PremiumQuoteForm";

export const metadata: Metadata = {
  title: "Premium Quote | Kings Roofing, inc.",
  description:
    "Request a detailed premium roofing quote from Kings Roofing. Includes on-site inspection and formal estimate. $50 documentation fee.",
};

export default function PremiumQuotePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Roofing Quote
            </h1>
            <p className="text-xl text-slate-300">
              Get a detailed site inspection, materials analysis, and formal estimate. $50 documentation fee covers scheduling and site visit prep.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg border border-slate-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">What's Included</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-3">✓</span>
                  <span className="text-slate-700">Comprehensive site inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-3">✓</span>
                  <span className="text-slate-700">Materials and options analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-3">✓</span>
                  <span className="text-slate-700">Formal written estimate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-3">✓</span>
                  <span className="text-slate-700">$50 fee (applied to project if you proceed)</span>
                </li>
              </ul>
            </div>

            <PremiumQuoteForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
