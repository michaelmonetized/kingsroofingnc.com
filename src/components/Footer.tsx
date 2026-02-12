import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & CTA */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/KINGS-7-5-1.png"
                alt="Kings Roofing Logo"
                width={60}
                height={60}
              />
              <div className="font-display font-bold text-xl uppercase tracking-wide">
                King&apos;s<br />Roofing
              </div>
            </div>
            <p className="text-orange-100 text-sm mb-4">Do You Need A New Roof?</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-500 hover:bg-orange-100 px-6 py-2 rounded font-bold transition-colors"
            >
              Tell Us About Your Project
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 uppercase">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href={`tel:${COMPANY.phone}`} className="hover:underline flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:underline flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-orange-100 mt-4">
                Someone is available Monday through Saturday to answer all of your questions.
              </p>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="inline-block mt-2 hover:opacity-80">
                Visit Us on Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/residential" className="hover:underline">Residential</Link></li>
              <li><Link href="/commercial" className="hover:underline">Commercial</Link></li>
              <li><Link href="/roofing-color-pickers" className="hover:underline">Roof Color Picker</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 uppercase">Connect</h4>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'pinterest'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-orange-400 bg-orange-600">
        <div className="container mx-auto px-4 py-4 text-center text-sm">
          <p>Copyright © 2026 <Link href="/" className="underline">Kings Roofing</Link>. All rights Reserved.</p>
          <p className="text-orange-200 mt-1">
            <Link href="/sitemap" className="hover:underline">Sitemap</Link> | Web Design + Marketing by <a href="https://hustlelaunch.com" target="_blank" rel="noopener" className="hover:underline">Hustle Launch</a>
          </p>
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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
