import Link from "next/link";
import { COMPANY, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Serving Western NC Since 2010
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Residential & Commercial
              <span className="block text-accent-400">Roofing Contractor</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              When you choose Kings Roofing for your next roofing project, you&apos;re choosing 
              excellence and peace of mind. Quality materials, expert craftsmanship, and 
              competitive pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <span>Get Your FREE Quote Today</span>
                <ArrowIcon className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="bg-navy-950/50 border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent-400" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent-400" />
                <span>GAF Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent-400" />
                <span>Lifetime Warranties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Roofing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From new installations to emergency repairs, we handle all your roofing needs 
              with professionalism and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Roof */}
            <ServiceCard
              icon={<HomeIcon className="w-8 h-8" />}
              title="New Roof Installation"
              description="Need a roof for your new home or construction project? We install quality roofing systems using premium materials from GAF, CertainTeed, and more."
              href="/residential"
            />

            {/* Roof Repair */}
            <ServiceCard
              icon={<WrenchIcon className="w-8 h-8" />}
              title="Roof Repair"
              description="Leaky roof? Storm damage? Our expert team handles all types of repairs including emergency services, flashing, vents, and preventative maintenance."
              href="/residential"
            />

            {/* Commercial */}
            <ServiceCard
              icon={<BuildingIcon className="w-8 h-8" />}
              title="Commercial Roofing"
              description="We have dozens of commercial projects in WNC showcasing our quality work. From re-shingling to flat roof systems, we've got you covered."
              href="/commercial"
            />
          </div>
        </div>
      </section>

      {/* Roof Repair Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Leaky Roof? We Can Help!
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our roofing contractors handle all types of roof repairs. Whether your roof 
                just needs a minor repair or needs to be replaced altogether, our team of 
                quality roofing contractors can help.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {SERVICES.repairs.slice(0, 8).map((service) => (
                  <li key={service} className="flex items-center gap-2 text-slate-700">
                    <CheckIcon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get a Free Estimate
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Premium Materials</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    GAF Timberline HD Shingles
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    Best Buy Metal Roofing
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    CertainTeed Products
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    20-Year to Lifetime Warranties
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Western North Carolina
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              For over a decade, we&apos;ve been a leading roofing contractor in Western NC. 
              When you need a roofer, remember King&apos;s Haywood Construction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="bg-white/10 px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Request a Free Quote
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Why Choose Kings Roofing?
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Most homeowners won&apos;t refer their roofing contractor, but we get most of our 
              work from referrals — and that speaks for itself. We offer the highest quality 
              and professionalism you can&apos;t find anywhere else.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <TrustCard
                icon={<StarIcon className="w-10 h-10" />}
                title="Quality Work"
                description="Over a decade of quality roofing installations and repairs throughout Western NC."
              />
              <TrustCard
                icon={<ShieldIcon className="w-10 h-10" />}
                title="Reliable & Trustworthy"
                description="Licensed, insured, and committed to doing the job right the first time."
              />
              <TrustCard
                icon={<DollarIcon className="w-10 h-10" />}
                title="Competitive Pricing"
                description="Quality roofing at the most reasonable prices in Western North Carolina."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg p-8 border border-slate-100 transition-all"
    >
      <div className="w-14 h-14 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-accent-600 font-medium group-hover:gap-2 transition-all">
        Learn more <ArrowIcon className="w-4 h-4" />
      </span>
    </Link>
  );
}

function TrustCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-navy-100 text-navy-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}

// Icons
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
