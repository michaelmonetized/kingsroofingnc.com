import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

const LOCATIONS = {
  asheville: {
    name: "Asheville",
    county: "Buncombe County",
    title: "Asheville Roofing Contractor | Kings Roofing, inc.",
    headline: "Asheville Roofing Contractor",
    intro: "Our roofing contractors are located in the beautiful town of Asheville, NC. Allow the locally owned Kings Roofing the opportunity to take on your next project!",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our Asheville team of quality roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: "For a Free Estimate, Call us at 828-279-6896 or fill out the form here.",
  },
  waynesville: {
    name: "Waynesville",
    county: "Haywood County",
    title: "Waynesville Roofing Contractors | Kings Roofing, inc.",
    headline: "Waynesville Roofing Contractors",
    intro: "Waynesville, NC is our home base. We have been replacing roofs in Haywood County for over a decade. Our roofing contractors are located in the beautiful town of Waynesville, NC. Allow the locally owned Kings Roofing the opportunity to take on your next project!",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our team of quality Waynesville roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: "For a Free Estimate, Call us at 828-279-6896 or fill out the form here.",
  },
  highlands: {
    name: "Highlands",
    county: "Macon County",
    title: "Highlands Roofing Contractor | Kings Roofing, inc.",
    headline: "Highlands Roofing Contractor",
    intro: "Highlands is one of the most beautiful areas of Western North Carolina, which is why we love serving the beautiful people that live here. Our Highlands Roofing Contractors are among the most qualified around.",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our Highlands team of quality roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: "For a Free Estimate, Call us at 828-279-6896 or fill out the form here.",
  },
  cashiers: {
    name: "Cashiers",
    county: "Jackson County",
    title: "Cashiers Roofing Contractors | Kings Roofing, inc.",
    headline: "Cashiers Roofing Contractors",
    intro: "Cashiers is one of our favorite towns in WNC, and we try to serve her wonderful residents as often as possible. Allow the locally owned Kings Roofing a the opportunity to take on your next project!",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our team of quality Highlands roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: "For a Free Estimate, Call us at 828-279-6896 or fill out the form here.",
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
    title: locationData.title,
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locationData.headline}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {locationData.intro}
            </p>
            <p className="text-xl text-gray-300 mb-6">
              {locationData.body}
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {locationData.cta.split("828-279-6896").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <a href="tel:828-279-6896" className="text-orange-400 hover:underline">828-279-6896</a>
                  )}
                </span>
              ))}
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
            Experienced Roofing Contractors with knowledge of all Roofing Materials, including:
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Roof Repair
          </h2>
          <ul className="space-y-4 max-w-3xl">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">•</span>
              <span className="text-gray-300 text-lg">Residential/Commercial</span>
            </li>
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
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-white font-semibold">
              <a href="tel:828-246-2193" className="hover:underline">828-246-2193</a>
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
