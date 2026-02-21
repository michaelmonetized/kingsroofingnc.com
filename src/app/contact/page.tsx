import type { Metadata } from "next";
import { PiPhoneLight, PiEnvelopeLight } from "react-icons/pi";
import { Layout } from "@/components/layout";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Kings Roofing, inc.",
  description:
    "Contact Kings Roofing for a free quote on your roofing project. Serving Asheville, Waynesville, Highlands, and all of Western NC. Call ${COMPANY.phone}.",
};

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-slate-300">
              Ready to start your roofing project? Fill out the form below or give us a call. 
              We respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <ContactInfo
                      icon={<PiPhoneLight className="w-5 h-5" />}
                      label="Phone"
                      value={COMPANY.phone}
                      href={`tel:${COMPANY.phone}`}
                    />
                    <ContactInfo
                      icon={<PiPhoneLight className="w-5 h-5" />}
                      label="Alternate"
                      value={COMPANY.phoneAlt}
                      href={`tel:${COMPANY.phoneAlt}`}
                    />
                    <ContactInfo
                      icon={<PiEnvelopeLight className="w-5 h-5" />}
                      label="Email"
                      value={COMPANY.email}
                      href={`mailto:${COMPANY.email}`}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <span
                        key={area}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-accent-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    Need Emergency Service?
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    For urgent roof repairs, call us directly. We offer emergency services 
                    for storm damage and critical leaks.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                  >
                    <PiPhoneLight className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Request a Free Quote</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a 
                  free estimate for your roofing project.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
    >
      <div className="w-10 h-10 bg-navy-100 text-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-semibold text-navy-900">{value}</p>
      </div>
    </a>
  );
}


