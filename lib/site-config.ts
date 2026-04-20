export const siteConfig = {
  name: "Heartland Acquisitions",
  legalName: "Ivarix Capital LLC dba Heartland Acquisitions",
  domain: "heartlandacquisitions.com",
  url: "https://heartlandacquisitions.com",
  description:
    "Sell your house fast in Kansas City. Cash offers, no fees, close in as little as 7 days. We buy houses in any condition — divorce, foreclosure, inherited, landlord, tax liens.",

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
    { label: "How It Works", href: "/how-it-works" },
    { label: "Areas We Buy", href: "/areas-we-buy" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],

  verticals: [
    { label: "Divorce", href: "/divorce" },
    { label: "Foreclosure", href: "/foreclosure" },
    { label: "Inherited", href: "/inherited" },
    { label: "Landlord", href: "/landlord" },
    { label: "Tax Liens", href: "/tax-liens" },
  ],
} as const

export type SiteConfig = typeof siteConfig
