import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Heartland Acquisitions",
  description: "Cash home buyers serving the Kansas City metro. We buy houses as-is in any condition with no fees, no commissions, and no repairs.",
  telephone: "+18169735420",
  email: "hello@heartlandacq.com",
  areaServed: [
    "Kansas City, MO", "Independence, MO", "Lee's Summit, MO", "Blue Springs, MO",
    "Raytown, MO", "Grandview, MO", "Liberty, MO", "Kansas City, KS",
    "Overland Park, KS", "Olathe, KS", "Shawnee, KS", "Lenexa, KS",
  ],
  priceRange: "$$",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Sell Your Kansas City House Fast for Cash`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: `${siteConfig.name} — Sell Your Kansas City House Fast for Cash`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Heartland Acquisitions — Sell your KC home for cash. 24-hour offer. 7-day close.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Sell Your Kansas City House Fast for Cash`,
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
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
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
