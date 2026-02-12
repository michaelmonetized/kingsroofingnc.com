import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICE_AREAS, SERVICES, NAVIGATION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/KINGS-7-5-1.png"
                alt="Kings Roofing Logo"
                width={50}
                height={50}
              />
              <span className="font-bold text-xl">Kings Roofing</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted roofing contractor in Western North Carolina. Quality workmanship, 
              reliable service, and competitive pricing since 2010.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-orange-400" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <EmailIcon className="w-5 h-5 text-orange-400" />
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICES.residential.slice(0, 6).map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-gray-400 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kings Roofing, Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Licensed &amp; Insured Roofing Contractor in North Carolina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
