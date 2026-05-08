import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { LandingHero } from "@/components/sections/landing-hero"
import { Marquee } from "@/components/marquee"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { Faq } from "@/components/sections/faq"
import { CtaStrip } from "@/components/sections/cta-strip"
import { CITIES, getCityBySlug } from "@/lib/cities"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCityBySlug(slug)
  if (!c) return { title: "Not found" }
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${siteConfig.url}/cities/${c.slug}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${siteConfig.url}/cities/${c.slug}`,
      type: "website",
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCityBySlug(slug)
  if (!c) notFound()

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Cities", item: `${siteConfig.url}/cities/${c.slug}` },
      { "@type": "ListItem", position: 3, name: `${c.name}, ${c.state}`, item: `${siteConfig.url}/cities/${c.slug}` },
    ],
  })

  return (
    <>
      <Script id={`ld-breadcrumb-${c.slug}`} type="application/ld+json" strategy="beforeInteractive">
        {breadcrumbJsonLd}
      </Script>

      <LandingHero
        eyebrow={`${c.name.toUpperCase()}, ${c.state}`}
        h1Pre="Sell your"
        h1Highlight={`${c.name}, ${c.state}`}
        h1Post="house for cash."
        intro={c.intro}
        cardHeadlineLine1="Get Your Free"
        cardHeadlineLine2="Cash Offer"
        cardHeadlineHighlight="Today"
        cardSub="Takes 30 seconds. No obligation, ever."
      />

      <Marquee />

      {/* City-specific market context + neighborhoods + ZIPs */}
      <section className="bg-brand-bg-warm py-[96px]">
        <div className="mx-auto max-w-[1280px] px-8 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div>
            <h2 className="font-sans text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.025em] font-extrabold text-brand-text">
              The {c.name} market — what we see.
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.6] text-[#3a3d33]">{c.marketContext}</p>

            <h3 className="mt-10 font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium">{c.county}</h3>
            <p className="mt-2 text-[15.5px] leading-[1.55] text-[#4a4d42]">
              We work with title companies that handle {c.county} closings and know the local recorder&apos;s office, tax sale calendar, and any city-specific permitting quirks. Most {c.name} closings move 7-14 days from accepted offer.
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-[18px] p-8">
            <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium">{c.name} neighborhoods we buy in</h3>
            <ul className="mt-4 flex flex-wrap gap-2 list-none p-0">
              {c.neighborhoods.map((n) => (
                <li key={n} className="px-3 py-1.5 bg-brand-bg-card rounded-full text-[13px] font-medium text-brand-text">
                  {n}
                </li>
              ))}
            </ul>

            <h3 className="mt-7 font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium">ZIP codes</h3>
            <ul className="mt-4 flex flex-wrap gap-2 list-none p-0">
              {c.zips.map((z) => (
                <li key={z} className="px-3 py-1.5 border border-brand-border rounded-full text-[13px] font-mono text-[#4a4d42]">
                  {z}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Process />

      <WhyUs />

      <Faq
        id="faq"
        faqs={c.faqs}
        headlinePre={`Questions about selling in`}
        headlineHighlight={`${c.name}.`}
        sub={`Specific questions ${c.name} sellers ask us. Don't see yours? Call or text ${siteConfig.phone.display}.`}
        jsonLdId={`ld-faq-${c.slug}`}
      />

      <CtaStrip />
    </>
  )
}
