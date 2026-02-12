import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { HeroContactForm } from "@/components/HeroContactForm";
import { COMPANY, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[800px] lg:min-h-[700px] bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Professional roofing work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Headlines */}
            <div className="text-white pt-8">
              {/* Lion Logo */}
              <div className="mb-6">
                <Image
                  src="/images/KINGS-7-5-1.png"
                  alt="Kings Roofing Lion Logo"
                  width={120}
                  height={120}
                  className="drop-shadow-2xl"
                />
              </div>

              <h2 className="text-orange-400 text-xl md:text-2xl font-bold tracking-wider mb-2">
                RESIDENTIAL &amp; COMMERCIAL
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Roofing<br />Contractor
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                When you choose Kings Roofing for your next roofing project, you are choosing 
                excellence and peace of mind. Our expert team delivers top-notch services with 
                the highest quality materials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-xl shadow-lg transition-all"
                >
                  <PhoneIcon className="w-6 h-6" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Service Areas Preview */}
              <div className="text-gray-300 text-sm">
                <span className="text-orange-400 font-semibold">Proudly serving:</span>{" "}
                Asheville, Waynesville, Highlands, Cashiers &amp; all of Western NC
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Get Your FREE Quote Today
              </h3>
              <p className="text-gray-400 text-center mb-6 text-sm">
                We respond within 24 hours
              </p>
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-800 py-6 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white">
            <TrustBadge icon="✓" text="Licensed & Insured" />
            <TrustBadge icon="★" text="GAF Certified" />
            <TrustBadge icon="◐" text="Free Estimates" />
            <TrustBadge icon="⟳" text="Quality Since 2010" />
          </div>
        </div>
      </section>

      {/* New Roof Installation Section - With Background */}
      <section className="relative py-20 min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/roof-repair-full.jpeg"
            alt="New roof installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              New Roof Installation
            </h2>
            <h3 className="text-xl text-orange-400 font-semibold mb-4">
              New Home? Need A Roof? You came to the right place!
            </h3>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              We have dozens of commercial projects in the WNC area that boast our quality work. 
              Whether you need a re-shingle or flat top system, we are here to replace your current 
              system quickly and efficiently.
            </p>
            <Link
              href="/residential"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Learn More
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Re-Roofing Section */}
      <section className="relative py-20 min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/timberline-large-slate.jpeg"
            alt="Re-roofing services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-right">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Old roof? Damaged roof?
            </h2>
            <h3 className="text-2xl text-orange-400 font-semibold mb-4">
              King&apos;s has you covered.
            </h3>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Whether your roof just needs a minor repair or needs to be replaced altogether, 
              our team of quality roofing contractors can help. Let our Asheville based roofing 
              contractors put years of experience to work for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Quote
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Roof Repair Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Roof Repair
              </h2>
              <h3 className="text-xl text-orange-500 font-semibold mb-6">
                Leaky roof? We can help!
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Our roofing contractors handle all types of roof repairs including:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {SERVICES.repairs.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-gray-700">
                    <span className="text-orange-500 font-bold">•</span>
                    {service}
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 mb-8">
                Kings Roofing is your #1 roofing company in Asheville. Specializing in new 
                GAF Timberline HD shingle roofing and Best Buy Metal roofing.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get Free Estimate
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Location Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serving Western North Carolina
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For over a decade, we&apos;ve been a leading roofing contractor in Western NC. 
              When you need a roofer, remember King&apos;s Haywood Construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <LocationCard name="Asheville" description="Buncombe County's largest city" />
            <LocationCard name="Cashiers" href="/residential/cashiers" description="Jackson County" />
            <LocationCard name="Highlands" href="/residential/highlands" description="Macon County" />
            <LocationCard name="Waynesville" href="/residential/waynesville" description="Haywood County" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roofers in Asheville Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/KINGS-7-5-1.png"
                alt="Kings Roofing Lion Logo"
                width={300}
                height={300}
                className="drop-shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Roofers in Asheville NC
              </h2>
              <h3 className="text-xl text-orange-400 font-semibold mb-6">
                serving residential and commercial clients across Western North Carolina
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Kings Roofing serves Asheville, Highlands, Waynesville, Sylva, Bryson City, 
                Cashiers, and Canton. For over a decade, we have been a leading Western North 
                Carolina roofing and framing contractor.
              </p>
              <p className="text-gray-300 mb-6">
                We are an Asheville Roofing Contracting Company offering quality and affordability. 
                We are reliable, trustworthy, affordable, and have dozens and dozens of referrals 
                to prove it.
              </p>
              <p className="text-gray-300 mb-8">
                Whether you need roofing installation, roofing repair, or any other roofing service, 
                our whole roof contracting team is energetic, easy-going, and ready to get the 
                roofing job done right the first time.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Request a Free Quote
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote on your roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm md:text-base">
      <span className="text-orange-400 text-xl">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function LocationCard({ 
  name, 
  description, 
  href 
}: { 
  name: string; 
  description: string; 
  href?: string;
}) {
  const content = (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
        <span className="text-6xl opacity-20">🏠</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
