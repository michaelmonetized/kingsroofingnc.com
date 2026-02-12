"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAVIGATION } from "@/lib/constants";

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
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2 text-sm border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <PhoneIcon className="w-4 h-4 text-orange-400" />
            <span className="font-bold">{COMPANY.phone}</span>
          </a>
          <span className="hidden sm:block text-gray-400">
            Serving Western North Carolina
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/KINGS-7-5-1.png"
              alt="Kings Roofing Logo"
              width={50}
              height={50}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <div>
              <div className="font-bold text-lg lg:text-xl text-white leading-tight">
                Kings Roofing
              </div>
              <div className="text-xs text-gray-400 hidden sm:block">
                Quality Roofing Since 2010
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {(NAVIGATION as readonly NavItem[]).map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 text-gray-300 hover:text-orange-400 font-medium transition-colors py-2">
                      {item.label}
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-400 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.label === "Contact" ? null : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:shadow-md transition-all"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-700">
            <div className="flex flex-col gap-1 pt-4">
              {(NAVIGATION as readonly NavItem[]).map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg font-medium"
                      >
                        {item.label}
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 border-l border-gray-700 pl-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-gray-400 hover:text-orange-400 rounded-lg text-sm"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.label === "Contact" ? null : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg font-medium block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
