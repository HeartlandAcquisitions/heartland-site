import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { VERTICALS } from "@/lib/verticals"
import { CITIES } from "@/lib/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const core: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/disclosures`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const verticalUrls: MetadataRoute.Sitemap = VERTICALS.map((v) => ({
    url: `${siteConfig.url}/situations/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const cityUrls: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${siteConfig.url}/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  return [...core, ...verticalUrls, ...cityUrls]
}
