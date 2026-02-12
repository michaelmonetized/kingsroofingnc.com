import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { COMPANY, SERVICE_AREAS, SERVICES } from "@/lib/constants";
import { QuoteForm } from "@/components/QuoteForm";

export default function Home() {
  return (
    <Layout>
      {/* Hero Roof Image Banner */}
      <section className="relative h-32 lg:h-48">
        <Image
          src="/images/timberline-large-slate.jpeg"
          alt="Metal roofing"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Hero Content - White bg with orange CTA */}
      <section className="bg-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Content */}
            <div>
              <Image
                src="/images/KINGS-7-5-1.png"
                alt="Kings Roofing Lion Logo"
                width={100}
                height={100}
                className="mb-3"
              />
              <h2 className="font-display text-orange-500 font-bold text-lg uppercase tracking-wider mb-0">
                Residential &amp; Commercial
              </h2>
              <h1 className="font-display text-3xl lg:text-4xl font-black text-gray-900 uppercase tracking-tight mb-1">
                Roofing Contractor
              </h1>
              <p className="text-orange-500 font-semibold mb-3">
                Get Your FREE Quote Today
              </p>
              <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                <p>
                  When you choose <Link href="/contact" className="text-orange-500 underline">Kings Roofing</Link> for your next{" "}
                  <Link href="/residential" className="text-orange-500 underline">residential</Link> or{" "}
                  <Link href="/commercial" className="text-orange-500 underline">commercial</Link> roofing project, you are choosing excellence and peace of mind. Our expert team is committed to delivering top-notch services with the highest quality materials, ensuring durability and aesthetic appeal for your property. Plus, we offer competitive pricing, giving you the best value in Western North Carolina.
                </p>
                <p>
                  We proudly serve Asheville, Candler, Canton,{" "}
                  <Link href="/residential/cashiers" className="text-orange-500 underline">Cashiers</Link>, Clyde,{" "}
                  <Link href="/residential/highlands" className="text-orange-500 underline">Highlands</Link>, Lake Junaluska, Maggie Valley, Sylva,{" "}
                  <Link href="/residential/waynesville" className="text-orange-500 underline">Waynesville</Link>, Weaverville, and surrounding areas.
                </p>
                <p>
                  Join our satisfied customers and experience the Kings Roofing difference. Contact us today for a free consultation and let us protect your home or business with our reliable and professional roofing solutions.
                </p>
              </div>
            </div>

            {/* Right - Orange CTA Box */}
            <div className="bg-orange-500 text-white p-6 lg:p-8">
              <h3 className="font-display text-2xl lg:text-3xl font-black uppercase text-center mb-1">
                Get A<br />Free Quote
              </h3>
              <p className="text-center text-white/80 text-sm mb-2">- or -</p>
              <p className="font-display text-2xl font-black uppercase text-center mb-0">Call:</p>
              <a 
                href={`tel:${COMPANY.phone}`}
                className="block font-display text-3xl lg:text-4xl font-black text-center hover:underline"
              >
                {COMPANY.phone}
              </a>
              <div className="mt-4">
                <QuoteForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Roof Installation */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/timberline-large-slate.jpeg"
            alt="Roof installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-2">
              New Roof<br />Installation
            </h2>
            <h3 className="text-orange-400 font-bold text-xl mb-4">
              New Home? Need A Roof? You came to the right place!
            </h3>
            <p className="text-white/90 mb-6">
              We have dozens of commercial projects in the WNC area that boasts our quality work. Whether you need a re-shingle or flat top system, we are here to replace your current system quickly and efficiently.
            </p>
            <Link
              href="/residential"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Re-Roofing Section - Orange with Lion */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Lion illustration on left */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/Leaping-Lion-Vector.svg"
                alt="Kings Roofing Lion"
                width={300}
                height={300}
                className="w-48 lg:w-72 h-auto opacity-90"
              />
            </div>
            {/* Text on right */}
            <div className="text-white">
              <h2 className="font-display text-4xl lg:text-5xl font-black uppercase tracking-tight mb-2">
                Re-Roofing
              </h2>
              <h3 className="text-white font-bold text-lg mb-1">Old roof?<br />Damaged roof?</h3>
              <h4 className="text-yellow-300 font-bold mb-4">King&apos;s has you covered.</h4>
              <p className="text-white/90 text-sm mb-6">
                Whether your roof just needs a minor repair or needs to be replaced altogether, our team of quality roofing contractors can help. Let our Asheville based roofing contractors put years of experience in roofing services to work for you at the most reasonable prices around.
              </p>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-orange-500 px-6 py-2 font-bold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Repair Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">
                Roof Repair
              </h2>
              <h3 className="text-orange-500 font-bold text-xl mb-4">
                Leaky roof? We can help!
              </h3>
              <p className="text-gray-600 mb-4">
                Our roofing contractors handle all types of roof repairs including:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-6">
                {SERVICES.repairs.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    {service}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mb-6">
                Kings Roofing is your #1 roofing company in Asheville. Specializing in new GAF Timberline HD shingle roofing and Best Buy Metal roofing. KHC is deploying roofers in Asheville, everyday, so call now or fill out our form here for a free estimate.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/roof-repair-1024x683.jpeg"
                alt="Roof repair services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Asheville", slug: "asheville" },
              { name: "Cashiers", slug: "cashiers" },
              { name: "Highlands", slug: "highlands" },
              { name: "Waynesville", slug: "waynesville" },
            ].map((location) => (
              <Link
                key={location.slug}
                href={`/residential/${location.slug}`}
                className="group relative h-48 lg:h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/timberline-large-slate.jpeg"
                  alt={`${location.name} Roofing Contractor`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display font-bold text-xl uppercase">{location.name}</h3>
                  <p className="text-sm text-white/80">Roofing Contractor</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roofers in Asheville - Orange */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/KINGS-7-5-1.png"
            alt="Kings Roofing Lion Logo"
            width={100}
            height={100}
            className="mx-auto mb-6"
          />
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-2">
            Roofers in Asheville NC
          </h2>
          <p className="text-yellow-300 font-semibold text-lg mb-6">
            serving residential and commercial clients across Western North Carolina
          </p>
          <div className="max-w-3xl mx-auto text-white/90 space-y-4 text-sm">
            <p>
              Kings Roofing serves Asheville, Highlands, Waynesville, Sylva, Bryson City, Cashiers, and Canton. For over a decade, we have been a leading Western North Carolina roofing and framing contractor. When you&apos;re looking for a Waynesville, Asheville, Canton or Highlands Roofer, remember King&apos;s Haywood Construction.
            </p>
            <p>
              We are an Asheville Roofing Contracting Company offering quality and affordability.
            </p>
            <p>
              We are reliable, trustworthy, affordable, and have dozens and dozens of referrals to prove it. Most homeowners won&apos;t refer their Waynesville, Asheville, or Highlands roofing contractor, but we at Kings Roofing get most of our work from referrals and that statement speaks for itself. We at King&apos;s Haywood Construction offer the highest quality and professionalism that you can&apos;t find anywhere else.
            </p>
            <p>
              Whether you need roofing installation, roofing repair, or any other roofing service, our whole roof contracting team is energetic, easy-going, and ready to get the roofing job done right the first time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
