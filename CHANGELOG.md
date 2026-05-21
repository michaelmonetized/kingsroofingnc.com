# Changelog

## [1.0.0] - 2026-02-12

### 2026-05-21 - Shipprep Standards And Blacksmith Deployment

- Added Blacksmith-backed Vercel prebuilt deployment workflow and disabled Vercel Git builds for main/master.
- Added local shipprep tooling for Biome formatting, Oxlint linting, `tsgo --noEmit` typechecks, and ship review scripts.
- Updated the app to the current Next 16, React 19, Tailwind 4, TypeScript 6, Sentry, PostHog, Resend, and supporting package stack.
- Added guarded Sentry client/server/edge instrumentation and current `withSentryConfig` options.
- Added guarded PostHog initialization with explicit App Router pageview capture.
- Refreshed roofing, carport, feedback, contact, footer, header, and location page content/styles.

### Added
- Initial Next.js 15 site with App Router
- Home page with hero, services overview, areas served, and trust signals
- Residential services page with roof replacement, repair, and materials info
- Commercial services page with flat roof systems and business solutions
- Contact page with form (Resend integration for email delivery)
- Location-specific SEO pages for Waynesville, Highlands, and Cashiers
- Responsive design optimized for mobile and desktop
- SEO optimization with metadata, sitemap.xml, and robots.txt
- Professional roofing contractor design with trust signals and CTAs
- TypeScript + Tailwind CSS styling

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Resend for contact form emails
- Deployed to Vercel
