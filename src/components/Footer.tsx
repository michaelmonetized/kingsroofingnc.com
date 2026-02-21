import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { PiPhoneLight, PiEnvelopeLight } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & CTA */}
          <div>
            <p className="text-white font-medium mb-2">Do You Need</p>
            <p className="text-white font-medium mb-4">A New Roof?</p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-bold transition-colors text-sm"
            >
              Tell Us About Your Project
            </Link>
            <div className="mt-6">
              <Image
                src="/images/KINGS-7-5-1.png"
                alt="Kings Roofing Logo"
                width={120}
                height={120}
              />
              <div className="font-display font-bold text-xl uppercase tracking-wide mt-2 text-orange-500">
                King&apos;s<br />Roofing
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-orange-400 flex items-center gap-2">
                  <PiPhoneLight className="w-4 h-4 text-orange-500" />
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-orange-400 flex items-center gap-2">
                  <MailIcon className="w-4 h-4 text-orange-500" />
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-gray-400 mt-4 text-xs">
                Someone is available Monday through Saturday to answer all of your questions.
              </p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm mt-2 inline-block">
                Visit Us on Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link href="/residential" className="hover:text-orange-400">Residential</Link></li>
              <li><Link href="/commercial" className="hover:text-orange-400">Commercial</Link></li>
              <li><Link href="/roofing-color-pickers" className="hover:text-orange-400">Roof Color Picker</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          {/* Empty or Social */}
          <div>
            {/* Social icons row - matching original */}
          </div>
        </div>
      </div>

      {/* Social Icons Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-2">
            {['pinterest', 'facebook', 'google', 'twitter', 'youtube', 'linkedin', 'instagram', 'houzz', 'angies', 'yelp', 'porch', 'blogger', 'tumblr', 'wordpress'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label={social}
              >
                <span className="text-[8px] text-white uppercase">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
          <p>Copyright © 2026 <Link href="/" className="text-orange-500 hover:underline">Kings Roofing</Link>. All rights Reserved.</p>
          <p className="mt-1">
            <Link href="/sitemap" className="hover:text-orange-400">Sitemap</Link> | <a href="https://hustlelaunch.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Web Design</a> + <a href="https://hustlelaunch.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Marketing</a> by Hustle Launch.
          </p>
        </div>
      </div>
    </footer>
  );
}


function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
