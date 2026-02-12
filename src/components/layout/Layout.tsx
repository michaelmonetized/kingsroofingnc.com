"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type LayoutStyle = "default" | "minimal" | "canvas";

interface LayoutProps {
  children: React.ReactNode;
  style?: LayoutStyle;
}

/**
 * Layout component with style variants
 * 
 * Styles:
 * - default: Full chrome with Header + Footer (marketing pages)
 * - minimal: Header only, no footer (forms, single-focus pages)
 * - canvas: No chrome, bare container (custom layouts)
 */
export function Layout({ children, style = "default" }: LayoutProps) {
  if (style === "canvas") {
    return <>{children}</>;
  }

  if (style === "minimal") {
    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    );
  }

  // default style
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
