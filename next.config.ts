import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/process", destination: "/#process", permanent: true },
      { source: "/why", destination: "/#why", permanent: true },
      { source: "/why-us", destination: "/#why", permanent: true },
      { source: "/reviews", destination: "/#reviews", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
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
