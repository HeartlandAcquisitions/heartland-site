import Image from "next/image"
import type { ReactNode } from "react"

interface HeroFrameProps {
  /** Eyebrow text above the headline (e.g. "TRUSTED BY KANSAS CITY HOMEOWNERS") */
  eyebrow?: string
  /** Headline (h1) */
  headline: ReactNode
  /** Sub-headline / supporting copy below the H1 */
  subheadline?: ReactNode
  /** Right-side card content — usually <LeadForm landingPage={...} /> */
  formSlot: ReactNode
  /** Optional stats trio rendered below the headline (homepage only typically) */
  statsSlot?: ReactNode
  /** Background photo path */
  backgroundImageSrc?: string
  /** Background photo alt text */
  backgroundImageAlt?: string
}

export function HeroFrame({
  eyebrow,
  headline,
  subheadline,
  formSlot,
  statsSlot,
  backgroundImageSrc = "/brand/hero-house.jpg",
  backgroundImageAlt = "Kansas City home at dusk",
}: HeroFrameProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 to-brand-primary-soft/55" />
      <div className="relative mx-auto max-w-7xl grid gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr] md:gap-12 md:px-6 md:py-20">
        <div className="text-white">
          {eyebrow ? (
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              ⭐ {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          {subheadline ? (
            <p className="mt-4 max-w-xl text-lg opacity-95">{subheadline}</p>
          ) : null}
          {statsSlot ? <div className="mt-8">{statsSlot}</div> : null}
        </div>
        <div id="get-offer" className="rounded-xl bg-brand-surface p-6 shadow-card">{formSlot}</div>
      </div>
    </section>
  )
}
