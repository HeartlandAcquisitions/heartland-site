import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"

// Slugs of pages that existed in the seller-era v1 site (archived at
// `archive/v1-seller-site` tag + branch). Inlined here as the source-of-truth
// for permanent 308 redirects, so the lib/{verticals,cities,blog-posts}.ts
// content files can be deleted without breaking link equity.
const RETIRED_VERTICAL_SLUGS = [
  "foreclosure",
  "inherited",
  "divorce",
  "fire-damage",
  "rental-with-tenants",
] as const

const RETIRED_CITY_SLUGS = [
  "kansas-city-mo",
  "independence-mo",
  "lees-summit-mo",
  "blue-springs-mo",
  "raytown-mo",
  "kansas-city-ks",
  "overland-park-ks",
  "olathe-ks",
  "shawnee-ks",
  "lenexa-ks",
] as const

const RETIRED_BLOG_SLUGS = [
  "how-to-sell-a-house-fast-in-kansas-city",
  "cash-buyer-vs-realtor-kansas-city-math",
  "selling-inherited-house-missouri-probate-timeline",
  "behind-on-mortgage-kansas-city-foreclosure-options",
  "how-cash-offers-are-calculated-for-kansas-city-houses",
  "selling-a-hoarder-house-in-kansas-city",
  "selling-a-house-with-title-issues-jackson-county",
  "what-closing-day-looks-like-kansas-city-title-company",
  "hidden-costs-of-selling-fsbo-kansas-city",
  "relocating-from-kansas-city-sell-house-30-days",
  "inside-missouri-trustee-sale-foreclosure-auction",
  "how-to-verify-cash-home-buyer-legit-kansas-city",
  "tax-implications-selling-house-cash-kansas-city-2026",
  "should-i-renovate-before-selling-kansas-city",
  "selling-duplex-small-multi-family-kansas-city",
  "best-time-to-sell-kansas-city-house-monthly",
] as const

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Hash redirects preserved from v1 (these still point at live sections).
      { source: "/process", destination: "/#process", permanent: true },
      { source: "/why", destination: "/#why", permanent: true },
      { source: "/why-us", destination: "/#why", permanent: true },
      { source: "/reviews", destination: "/#reviews", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },

      // Seller-era pages removed in the agent-targeting pivot. Permanent 308
      // redirects preserve link equity and tell Google to flush the old URLs.
      // Catch-all wildcards backstop the programmatic lists in case slugs change.
      ...RETIRED_VERTICAL_SLUGS.map(slug => ({ source: `/situations/${slug}`, destination: "/", permanent: true })),
      ...RETIRED_CITY_SLUGS.map(slug => ({ source: `/cities/${slug}`, destination: "/", permanent: true })),
      ...RETIRED_BLOG_SLUGS.map(slug => ({ source: `/blog/${slug}`, destination: "/", permanent: true })),
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/situations/:path*", destination: "/", permanent: true },
      { source: "/cities/:path*", destination: "/", permanent: true },
    ]
  },
}

export default withSentryConfig(nextConfig, {
  silent: !process.env.CI,
  tunnelRoute: "/monitoring",
  sourcemaps: { disable: true },
  disableLogger: true,
  automaticVercelMonitors: false,
})
