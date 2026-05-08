import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { LandingHero } from "@/components/sections/landing-hero"
import { Marquee } from "@/components/marquee"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { Faq } from "@/components/sections/faq"
import { CtaStrip } from "@/components/sections/cta-strip"
import { VERTICALS, getVerticalBySlug } from "@/lib/verticals"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const v = getVerticalBySlug(slug)
  if (!v) return { title: "Not found" }
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    alternates: { canonical: `${siteConfig.url}/situations/${v.slug}` },
    openGraph: {
      title: v.metaTitle,
      description: v.metaDescription,
      url: `${siteConfig.url}/situations/${v.slug}`,
      type: "website",
    },
  }
}

export default async function VerticalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const v = getVerticalBySlug(slug)
  if (!v) notFound()

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Situations", item: `${siteConfig.url}/situations/${v.slug}` },
      { "@type": "ListItem", position: 3, name: v.eyebrow, item: `${siteConfig.url}/situations/${v.slug}` },
    ],
  })

  const cardHeadlineParts = splitCtaHeadline(v.ctaHeadline)

  return (
    <>
      <Script
        id={`ld-breadcrumb-${v.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {breadcrumbJsonLd}
      </Script>

      <LandingHero
        eyebrow={v.eyebrow}
        h1Pre={v.h1Pre}
        h1Highlight={v.h1Highlight}
        h1Post={v.h1Post}
        intro={v.intro}
        cardHeadlineLine1={cardHeadlineParts.line1}
        cardHeadlineLine2={cardHeadlineParts.line2}
        cardHeadlineHighlight={cardHeadlineParts.highlight}
        cardSub={v.ctaSub}
      />

      <Marquee />

      {/* Situation explainer */}
      <section className="bg-brand-bg-warm py-[96px]">
        <div className="mx-auto max-w-[1280px] px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-sans text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.025em] font-extrabold text-brand-text">
              {v.situationHeading}
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.6] text-[#3a3d33]">{v.situationBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-brand-surface border border-brand-border rounded-[18px] p-8">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium">What you&apos;re dealing with</h3>
              <ul className="mt-4 flex flex-col gap-3 list-none p-0">
                {v.painPoints.map((pp) => (
                  <li key={pp} className="flex gap-3 items-start text-[15.5px] leading-[1.5] text-[#3a3d33]">
                    <span className="flex-none w-5 h-5 rounded-full bg-brand-bg-card grid place-items-center mt-0.5 text-brand-primary">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </span>
                    <span>{pp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[linear-gradient(180deg,rgba(138,166,106,.16),rgba(138,166,106,.04))] border border-brand-accent/40 rounded-[18px] p-8">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium">How we make it easy</h3>
              <ul className="mt-4 flex flex-col gap-3 list-none p-0">
                {v.reasons.map((r) => (
                  <li key={r} className="flex gap-3 items-start text-[15.5px] leading-[1.5] text-brand-text">
                    <span className="flex-none w-5 h-5 rounded-full bg-brand-primary text-brand-bg-warm grid place-items-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Process />

      <WhyUs />

      <Faq
        id="faq"
        faqs={v.faqs}
        headlinePre="Questions about"
        headlineHighlight={`${v.eyebrow.toLowerCase().replace(/_/g, " ")} sales.`}
        sub={`Specific questions sellers ask us when they're ${v.h1Pre.toLowerCase()} ${v.h1Highlight.toLowerCase()} Don't see yours? Call or text ${siteConfig.phone.display}.`}
        jsonLdId={`ld-faq-${v.slug}`}
      />

      <CtaStrip />
    </>
  )
}

/** Split a CTA headline like "Stop the Foreclosure today." into the card-headline shape. */
function splitCtaHeadline(headline: string): { line1: string; line2: string; highlight?: string } {
  const stripped = headline.endsWith(".") ? headline.slice(0, -1) : headline
  const words = stripped.split(" ")
  if (words.length <= 3) {
    return { line1: words.slice(0, Math.ceil(words.length / 2)).join(" "), line2: words.slice(Math.ceil(words.length / 2)).join(" ") }
  }
  // Two-line split, last word as highlight
  const half = Math.ceil(words.length / 2)
  const line1 = words.slice(0, half).join(" ")
  const remaining = words.slice(half)
  const last = remaining.pop()
  const line2 = remaining.join(" ")
  return { line1, line2, highlight: last }
}
