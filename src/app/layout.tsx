import type { Metadata } from "next";
import { Poppins, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { COMPANY } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto-slab",
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
      <body className={`${poppins.variable} ${roboto.variable} ${robotoSlab.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
