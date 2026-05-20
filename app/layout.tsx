import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import { siteConfig } from "@/lib/site-config";
import { MobileCallBar } from "@/components/chrome/mobile-call-bar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Heartland Acquisitions",
  description: "Local Kansas City cash buyers for distressed off-market deals from real estate agents. 24-48 hour underwriting, 7-14 day close, full commission to listing agent.",
  telephone: "+18169735420",
  email: "hello@heartlandacq.com",
  areaServed: [
    "Kansas City, MO", "Independence, MO", "Lee's Summit, MO", "Blue Springs, MO",
    "Raytown, MO", "Grandview, MO", "Liberty, MO", "Kansas City, KS",
    "Overland Park, KS", "Olathe, KS", "Shawnee, KS", "Lenexa, KS",
  ],
  priceRange: "$$",
})

const HOMEPAGE_TITLE = `${siteConfig.name} — Cash Buyers for KC Agents' Off-Market Deals`
const OG_ALT = "Heartland Acquisitions — Local KC cash buyers. 7-14 day close on agents' distressed off-market deals."

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: HOMEPAGE_TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: OG_ALT,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOMEPAGE_TITLE,
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={manrope.variable}
    >
      <body className="bg-brand-bg-warm text-brand-text font-sans antialiased min-h-screen flex flex-col">
        <Script id="ld-localbusiness" type="application/ld+json" strategy="beforeInteractive">
          {localBusinessJsonLd}
        </Script>
        <PostHogProvider>
          <Nav />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileCallBar />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
