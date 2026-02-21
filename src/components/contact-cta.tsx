import Link from "next/link";
import { PiPhoneLight, PiEnvelopeLight } from "react-icons/pi";
import { COMPANY } from "@/lib/constants";

interface ContactCTAProps {
  heading?: string;
  className?: string;
}

export function ContactCTA({
  heading = "Contact Us Today!",
  className = "py-20 bg-orange-500",
}: ContactCTAProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{heading}</h2>
        <div className="space-y-4 mb-8">
          <p className="text-2xl text-white font-semibold flex items-center justify-center gap-2">
            <PiPhoneLight className="w-6 h-6" />
            <a href={`tel:${COMPANY.phone}`} className="hover:underline">
              {COMPANY.phone}
            </a>
          </p>
          <p className="text-xl text-white flex items-center justify-center gap-2">
            <PiEnvelopeLight className="w-5 h-5" />
            <a href={`mailto:${COMPANY.email}`} className="hover:underline">
              {COMPANY.email}
            </a>
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg"
        >
          Free Quotes…
        </Link>
      </div>
    </section>
  );
}
