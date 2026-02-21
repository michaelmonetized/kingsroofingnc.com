"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAVIGATION } from "@/lib/constants";
import { PiListLight, PiXLight, PiCaretDownLight } from "react-icons/pi";

type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-orange-500 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="font-medium">Call for a quote: <a href={`tel:${COMPANY.phone}`} className="font-bold hover:underline">{COMPANY.phone}</a></span>
          <a href={`mailto:${COMPANY.email}`} className="hidden sm:block hover:underline">{COMPANY.email}</a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo - centered on desktop */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/KINGS-7-5-1.png"
              alt="Kings Roofing Logo"
              width={70}
              height={70}
              className="w-14 h-14 lg:w-16 lg:h-16"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {(NAVIGATION as readonly NavItem[]).map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors px-3 py-2">
                      {item.label}
                      <PiCaretDownLight className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.label === "Contact" ? (
                  <Link
                    href={item.href}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-bold transition-all ml-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-orange-500 font-medium transition-colors px-3 py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <PiXLight className="w-6 h-6" />
            ) : (
              <PiListLight className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-1 pt-4">
              {(NAVIGATION as readonly NavItem[]).map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium"
                      >
                        {item.label}
                        <PiCaretDownLight className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 border-l-2 border-orange-200 pl-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-gray-600 hover:text-orange-500 rounded-lg text-sm"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.label === "Contact" ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mx-4 mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold text-center block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}



