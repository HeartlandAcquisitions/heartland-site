export const siteConfig = {
  name: "Heartland Acquisitions",
  legalName: "Ivarix Capital LLC dba Heartland Acquisitions",
  domain: "heartlandacquisitions.com",
  url: "https://heartlandacquisitions.com",
  description:
    "Local Kansas City cash buyers for distressed off-market deals. We close in 7 to 14 days on flip projects, pocket listings, and rehabs. Listing agent keeps full commission.",

  phone: {
    e164: "+18169735420",
    display: "(816) 973-5420",
    hrefTel: "tel:+18169735420",
  },

  address: {
    street: "2107 Grand Boulevard",
    city: "Kansas City",
    state: "MO",
    zip: "64108",
  },

  nav: [
    { label: "Process", href: "/#process" },
    { label: "Why Us", href: "/#why" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const

export type SiteConfig = typeof siteConfig
