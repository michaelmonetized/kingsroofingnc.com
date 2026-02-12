import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsroofingnc.com"),
  title: {
    default: "Kings Roofing, Inc. | Asheville NC Roofing Contractor",
    template: "%s | Kings Roofing, Inc.",
  },
  description:
    "Professional roofing contractor serving Asheville, Waynesville, Highlands, and Western NC. New roof installation, repairs, and commercial roofing. Free quotes!",
  keywords: [
    "roofing contractor",
    "Asheville roofer",
    "Western NC roofing",
    "roof repair",
    "new roof installation",
    "commercial roofing",
    "Waynesville roofer",
    "Highlands roofer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
