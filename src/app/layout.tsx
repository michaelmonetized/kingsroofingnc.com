import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const oswald = Oswald({
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
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
