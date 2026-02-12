import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, MATERIALS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Roofing Services",
  description:
    "Professional residential roofing services in Western NC. Roof replacement, repairs, shingle installation, metal roofing, and more. Free estimates available.",
};

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Roofing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Whether you need a new roof, repairs, or a complete replacement, our team of 
              expert roofers delivers quality workmanship on every project. Protecting your 
              home is our priority.
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Our Residential Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.residential.map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{service}</h3>
                <p className="text-slate-600 text-sm">
                  Professional {service.toLowerCase()} services with quality materials and expert craftsmanship.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Replacement */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Roof Replacement & Installation
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Need a new roof? Our experienced team handles complete roof replacements and new 
                installations for homes of all sizes. We use premium materials and follow industry 
                best practices to ensure your new roof lasts for decades.
              </p>
              <div className="space-y-4 mb-8">
                <Feature title="Free Roof Inspections" description="We'll assess your current roof and provide honest recommendations." />
                <Feature title="Quality Materials" description="GAF Timberline HD shingles, CertainTeed products, and more." />
                <Feature title="Expert Installation" description="Our crews are trained and experienced in all roofing systems." />
                <Feature title="Warranty Protection" description="20-year to lifetime warranties available on materials and labor." />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Schedule Free Inspection
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Shingle Types We Install</h3>
              <div className="space-y-4">
                <ShingleType name="Architectural Shingles" description="Premium look with dimensional depth and excellent durability." />
                <ShingleType name="3-Tab Shingles" description="Cost-effective option with classic appearance." />
                <ShingleType name="Designer Shingles" description="Luxury appearance mimicking slate, wood, or tile." />
                <ShingleType name="Impact-Resistant" description="Built to withstand hail and severe weather." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Repair */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Roof Repair Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From small leaks to major storm damage, our team handles all types of roof repairs 
              quickly and professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.repairs.map((repair) => (
              <div key={repair} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckIcon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-slate-700">{repair}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Premium Roofing Materials
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We only use high-quality materials from trusted manufacturers to ensure your 
              roof provides lasting protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((material) => (
              <div
                key={material}
                className="bg-white/10 p-5 rounded-xl text-center"
              >
                <span className="font-medium">{material}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <CheckIcon className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-navy-900">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ShingleType({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
      <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-navy-900">{name}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
