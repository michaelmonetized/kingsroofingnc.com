import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout";
import { COMPANY, SERVICES } from "@/lib/constants";

const LOCATIONS = {
  waynesville: {
    name: "Waynesville",
    county: "Haywood County",
    description: "Your trusted roofing contractor in Waynesville and Haywood County. Kings Roofing provides quality roof installation, repair, and replacement services to homeowners and businesses in Waynesville, NC.",
    features: [
      "Local Haywood County roofing experts",
      "GAF certified shingle installation",
      "Storm damage repair specialists",
      "Free on-site estimates",
    ],
  },
  highlands: {
    name: "Highlands",
    county: "Macon County",
    description: "Professional roofing services for Highlands and the surrounding mountain communities. From luxury homes to commercial properties, Kings Roofing delivers exceptional craftsmanship in Highlands, NC.",
    features: [
      "Mountain home roofing specialists",
      "Slate and premium shingle options",
      "High-altitude roofing expertise",
      "Weather-resistant installations",
    ],
  },
  cashiers: {
    name: "Cashiers",
    county: "Jackson County",
    description: "Expert roofing contractor serving Cashiers and Jackson County. Kings Roofing offers comprehensive roofing solutions for the Cashiers community, from new construction to repairs.",
    features: [
      "Serving Cashiers and Lake Glenville",
      "Custom roofing solutions",
      "Metal and shingle roofing",
      "Emergency repair services",
    ],
  },
};

type LocationKey = keyof typeof LOCATIONS;

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const locationData = LOCATIONS[location as LocationKey];

  if (!locationData) {
    return { title: "Not Found" };
  }

  return {
    title: `Roofer in ${locationData.name} NC | Roofing Contractor`,
    description: `Professional roofing contractor in ${locationData.name}, NC. New roof installation, repairs, and replacement in ${locationData.county}. Free estimates! Call ${COMPANY.phone}.`,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { location } = await params;
  const locationData = LOCATIONS[location as LocationKey];

  if (!locationData) {
    notFound();
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPinIcon className="w-4 h-4" />
              Serving {locationData.county}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Contractor in<br />
              <span className="text-accent-400">{locationData.name}, NC</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              {locationData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold"
              >
                Get a Free Quote in {locationData.name}
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

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Why {locationData.name} Homeowners Choose Kings Roofing
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                For over a decade, Kings Roofing has been the trusted roofing contractor for 
                {locationData.name} and {locationData.county}. We understand the unique challenges 
                that Western NC weather presents and build roofs that last.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {locationData.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Our Services in {locationData.name}
              </h3>
              <ul className="space-y-3">
                {[...SERVICES.residential.slice(0, 4), ...SERVICES.repairs.slice(0, 4)].map((service) => (
                  <li key={service} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    <span className="text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Trusted {locationData.name} Roofing Experts
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              As a local Western NC roofing company, we take pride in serving our neighbors 
              in {locationData.name} and throughout {locationData.county}. Our reputation is 
              built on quality work, honest pricing, and exceptional customer service.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <TrustBadge
                title="Licensed & Insured"
                description="Fully licensed roofing contractor in North Carolina"
              />
              <TrustBadge
                title="10+ Years Experience"
                description="Serving Western NC homeowners since 2010"
              />
              <TrustBadge
                title="Free Estimates"
                description="No-obligation quotes for all roofing projects"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Free Roofing Quote in {locationData.name}?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Contact Kings Roofing today for a free, no-obligation estimate on your roofing 
            project. We serve all of {locationData.name} and {locationData.county}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Get Your Free Quote
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

function TrustBadge({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
