import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Roofing Services",
  description:
    "Professional commercial roofing services in Western NC. Flat roof systems, re-shingling, repairs, and maintenance programs. Free estimates for your business.",
};

export default function CommercialPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Roofing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We have dozens of commercial projects in Western NC that showcase our quality work. 
              Whether you need a re-shingle or flat top system, we&apos;re here to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold"
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

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Commercial Roofing Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.commercial.map((service) => (
              <div
                key={service}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-navy-100 text-navy-600 rounded-xl flex items-center justify-center mb-5">
                  <BuildingIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{service}</h3>
                <p className="text-slate-600">
                  Professional {service.toLowerCase()} for businesses of all sizes throughout Western NC.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flat Roof Systems */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Flat Roof Systems
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Commercial buildings often require specialized flat roof systems. Our team is 
                experienced in installing and maintaining various flat roof technologies to 
                protect your business.
              </p>
              <div className="space-y-4">
                <RoofSystem 
                  name="TPO Roofing" 
                  description="Energy-efficient, durable thermoplastic membrane ideal for flat commercial roofs."
                />
                <RoofSystem 
                  name="EPDM Rubber" 
                  description="Cost-effective synthetic rubber membrane with excellent weather resistance."
                />
                <RoofSystem 
                  name="Modified Bitumen" 
                  description="Multi-layer asphalt system providing superior waterproofing and durability."
                />
                <RoofSystem 
                  name="Metal Roofing" 
                  description="Long-lasting, low-maintenance option with excellent energy efficiency."
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Why Choose Us for Commercial?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckIcon className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Minimal Business Disruption</h4>
                    <p className="text-slate-600 text-sm">We work around your schedule to keep your business running.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Licensed & Insured</h4>
                    <p className="text-slate-600 text-sm">Fully licensed commercial roofing contractor with comprehensive insurance.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Maintenance Programs</h4>
                    <p className="text-slate-600 text-sm">Preventive maintenance to extend your roof&apos;s lifespan.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Emergency Services</h4>
                    <p className="text-slate-600 text-sm">24/7 emergency repairs to protect your business assets.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Retail Stores",
              "Office Buildings",
              "Warehouses",
              "Restaurants",
              "Medical Facilities",
              "Churches",
              "Schools",
              "Multi-Family Housing",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-slate-50 p-5 rounded-xl text-center"
              >
                <span className="font-medium text-navy-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your commercial roofing 
            needs. We serve businesses throughout Western North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Request Free Estimate
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function RoofSystem({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-lg shadow-sm">
      <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-navy-900">{name}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
