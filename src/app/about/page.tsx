import Link from "next/link";
import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Kings Roofing, inc.",
  description: "Learn about King's Haywood Construction, family-owned roofing company founded in 2002 in Canton, NC. Jose Reyes, owner, brings expert roofing knowledge to Western NC.",
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Kings Roofing
            </h1>
            <p className="text-xl text-gray-300">
              Family-owned and operated since 2002
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              <Link href="/contact" className="text-orange-500 hover:underline font-semibold">King&apos;s Haywood Construction</Link> was founded in 2002 and is family-owned and operated right here in Canton, N.C. Since the beginning, we have treated every customer like they were family. Jose Reyes, owner and founder, began his contracting career in roofing and continued building his skills over the years. He has a thorough knowledge of every aspect of roofing and knows what it takes to construct buildings, build decks, and do complete remodeling jobs within all state codes. No matter what roofing services or solutions you need, including shingles repair and metal roof services, Jose has got you covered.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              From planning and blueprint reading to working with inspectors, Jose has what it takes to get the job done safely and efficiently. Roofing is his specialty, and all our projects are guaranteed against leaking. We have worked on jobs for some big-name companies and completed small remodeling and repair jobs as well. With a large base of satisfied customers, it is easy to provide you with all of the excellent references you desire. Our roofing installers provide the best service at prices you will love.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When you <Link href="/contact" className="text-orange-500 hover:underline font-semibold">choose our company</Link> for your residential or commercial construction, you can be confident that you will receive the best services available in Western North Carolina. You can also be confident that we will provide the highest quality for the most reasonable price. We are available for you in Asheville, Candler, Canton, Cashiers, Clyde, Highlands, Lake Junaluska, Maggie Valley, Sylva, Waynesville, Weaverville and nearby. <Link href="/contact" className="text-orange-500 hover:underline font-semibold">Contact us today</Link> to tell us how we can serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
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
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
