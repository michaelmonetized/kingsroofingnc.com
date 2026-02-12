import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { COMPANY, SERVICES } from "@/lib/constants";
import { QuoteForm } from "@/components/QuoteForm";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Green roof bg with overlay */}
      <section className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/khc-green-big.jpeg"
            alt="Green metal roofing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase leading-tight mb-2 heading-stylized">
                Residential &amp;<br />Commercial
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#FF7620] mb-2">
                Roofing Contractor
              </h2>
              <h3 className="text-xl text-white mb-6">
                Get Your <b className="font-black">FREE</b> Quote Today
              </h3>
              <div className="text-white/90 space-y-4 text-sm leading-relaxed">
                <p>
                  When you choose <Link href="/contact" className="underline opacity-80 hover:opacity-100">Kings Roofing</Link> for your next{" "}
                  <Link href="/residential" className="underline opacity-80 hover:opacity-100">residential</Link> or{" "}
                  <Link href="/commercial" className="underline opacity-80 hover:opacity-100">commercial</Link> roofing project, you are choosing excellence and peace of mind. Our expert team is committed to delivering top-notch services with the highest quality materials, ensuring durability and aesthetic appeal for your property. Plus, we offer competitive pricing, giving you the best value in Western North Carolina.
                </p>
                <p>
                  We proudly serve Asheville, Candler, Canton,{" "}
                  <Link href="/residential/cashiers" className="underline opacity-80 hover:opacity-100">Cashiers</Link>, Clyde,{" "}
                  <Link href="/residential/highlands" className="underline opacity-80 hover:opacity-100">Highlands</Link>, Lake Junaluska, Maggie Valley, Sylva,{" "}
                  <Link href="/residential/waynesville" className="underline opacity-80 hover:opacity-100">Waynesville</Link>, Weaverville, and surrounding areas.
                </p>
                <p>
                  Join our satisfied customers and experience the Kings Roofing difference. Contact us today for a free consultation and let us protect your home or business with our reliable and professional roofing solutions.
                </p>
              </div>
            </div>

            {/* Right - Orange CTA Box */}
            <div className="bg-white border-l-[10px] border-[#FF7620]">
              <div className="p-6 lg:p-8">
                <h3 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase text-center leading-tight heading-stylized-white">
                  Get A<br />Free Quote
                </h3>
              </div>
              <div className="p-4 text-center">
                <span className="text-gray-600">- or -</span>
              </div>
              <div className="bg-[#FF7620] p-6 text-center">
                <h3 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase leading-tight heading-stylized">
                  <a href={`tel:${COMPANY.phone}`} className="hover:underline">
                    Call:<br />{COMPANY.phone}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Roof Installation - Gray with lion bg */}
      <section 
        className="relative py-32 lg:py-48"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'url(/images/Leaping-Lion-Vector.svg)',
          backgroundPosition: '-50% 16%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1024px auto',
        }}
      >
        <div className="absolute inset-0 bg-white/[0.78]" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase leading-tight mb-2 heading-stylized">
                New Roof<br />Installation
              </h2>
              <div className="w-36 h-1 bg-[#FF7620] mb-4 mx-auto lg:mx-0" />
              <h3 className="text-xl text-[#FF7620] font-bold mb-4">
                New Home? Need A Roof? You came to the right place!
              </h3>
              <p className="text-gray-700 mb-6">
                We have dozens of commercial projects in the WNC area that boasts our quality work. Whether you need a re-shingle or flat top system, we are here to replace your current system quickly and efficiently.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#FF7620] hover:bg-[#e56a1c] text-white px-6 py-3 font-bold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rJJt1UbFzVM"
                title="Kings Roofing Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Re-Roofing Section - Orange with crown bg */}
      <section className="relative py-20 lg:py-28 bg-[#FF7620]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/img_0059_0.jpg"
                alt="Re-roofing services"
                width={640}
                height={480}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase leading-tight mb-2 heading-stylized-white">
                Re-Roofing
              </h2>
              <div className="w-36 h-1 bg-white mb-4 mx-auto lg:mx-0" />
              <h3 className="text-xl text-white font-bold mb-4">
                Old roof?<br />
                Damaged roof?<br />
                King&apos;s has you covered.
              </h3>
              <p className="text-white/90 mb-6">
                Whether your roof just needs a minor repair or needs to be replaced altogether, our team of quality roofing contractors can help. Let our Asheville based roofing contractors put years of experience in roofing services to work for you at the most reasonable prices around.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-[#FF7620] hover:bg-gray-100 px-6 py-3 font-bold border-3 border-white transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Repair Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase leading-tight mb-2 heading-stylized">
                Roof Repair
              </h2>
              <div className="w-36 h-1 bg-[#FF7620] mb-4 mx-auto lg:mx-0" />
              <h3 className="text-xl text-[#FF7620] font-bold mb-4">
                Leaky roof?<br />We can help!
              </h3>
              <p className="text-gray-600 mb-4">
                Our roofing contractors handle all types of roof repairs including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-6">
                {SERVICES.repairs.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="text-[#FF7620]">•</span>
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[#FF7620] hover:bg-[#e56a1c] text-white px-6 py-3 font-bold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/roof-repair-1024x683.jpeg"
                alt="Roof repair services"
                width={1024}
                height={683}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards - Flip boxes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Asheville", slug: "asheville", image: "/images/asheville-roofing-contractors.jpeg" },
              { name: "Cashiers", slug: "cashiers", image: "/images/cashiers-roofing-contractors.jpeg" },
              { name: "Highlands", slug: "highlands", image: "/images/highlands-roofing-contractors.jpeg" },
              { name: "Waynesville", slug: "waynesville", image: "/images/waynesville-roofing-contractors.jpeg" },
            ].map((location) => (
              <Link
                key={location.slug}
                href={`/residential/${location.slug}`}
                className="group relative h-64 lg:h-96 overflow-hidden"
              >
                <Image
                  src={location.image}
                  alt={`${location.name} Roofing Contractor`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <h3 className="font-bold text-lg">{location.name} Roofing Contractor</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roofers in Asheville - Orange */}
      <section className="py-20 lg:py-28 bg-[#FF7620]">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/KINGS-7-5-1.png"
            alt="Kings Roofing Lion Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h2 className="text-[2.5rem] lg:text-[3.9rem] font-black uppercase leading-tight mb-2 heading-stylized-white">
            Roofers in Asheville NC
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-semibold mb-8">
            serving residential and commercial clients across<br />Western North Carolina
          </p>
          <div className="max-w-4xl mx-auto text-white/90 space-y-4 text-sm">
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
