import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"
import { VERTICALS } from "./lib/verticals"
import { CITIES } from "./lib/cities"
import { BLOG_POSTS } from "./lib/blog-posts"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/process", destination: "/#process", permanent: true },
      { source: "/why", destination: "/#why", permanent: true },
      { source: "/why-us", destination: "/#why", permanent: true },
      { source: "/reviews", destination: "/#reviews", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },

      // Seller-era pages removed in the agent-targeting pivot. Permanent 308
      // redirects preserve link equity and tell Google to flush the old URLs.
      // Catch-all wildcards backstop the programmatic lists in case slugs change.
      ...VERTICALS.map(v => ({ source: `/situations/${v.slug}`, destination: "/", permanent: true })),
      ...CITIES.map(c => ({ source: `/cities/${c.slug}`, destination: "/", permanent: true })),
      ...BLOG_POSTS.map(p => ({ source: `/blog/${p.slug}`, destination: "/", permanent: true })),
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
