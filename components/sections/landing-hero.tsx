import Image from "next/image"
import { LeadForm } from "@/components/lead-form"
import { siteConfig } from "@/lib/site-config"

export type LandingHeroProps = {
  eyebrow: string
  h1Pre: string
  h1Highlight: string
  h1Post?: string
  intro: string
  /** Card eyebrow defaults to "Get Your Offer" */
  cardEyebrow?: string
  /** Card headline (HTML allowed via children-style; pass two-line via cardHeadlineLine1/Line2) */
  cardHeadlineLine1: string
  cardHeadlineLine2: string
  /** Highlight word at the end of line 2 (gets brand-primary color), e.g. "Today" */
  cardHeadlineHighlight?: string
  cardSub: string
}

export function LandingHero(props: LandingHeroProps) {
  const cardEyebrow = props.cardEyebrow ?? "Get Your Offer"
  return (
    <section id="offer" className="relative overflow-hidden bg-brand-ink-soft scroll-mt-20">
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-house-v2.webp"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(14,15,10,.85) 0%, rgba(14,15,10,.55) 38%, rgba(14,15,10,.20) 60%, rgba(14,15,10,.40) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-8 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-[72px] py-24 md:pt-24 md:pb-[120px]">

        <div className="flex flex-col">
          <span className="inline-flex items-center gap-2.5 self-start bg-brand-bg-warm/10 backdrop-blur-md border border-brand-bg-warm/20 text-brand-bg-warm px-4 py-2 rounded-full text-xs font-semibold tracking-[0.08em] uppercase">
            <span aria-hidden className="w-[7px] h-[7px] rounded-full bg-brand-accent shadow-[0_0_0_4px_rgba(138,166,106,0.25)]" />
            {props.eyebrow}
          </span>

          <h1 className="mt-7 font-sans text-[44px] md:text-[72px] leading-[1.0] tracking-[-0.035em] font-extrabold text-brand-bg-warm">
            {props.h1Pre}{" "}
            <span className="text-brand-accent">{props.h1Highlight}</span>
            {props.h1Post ? <><br />{props.h1Post}</> : null}
          </h1>

          <p className="mt-7 text-[17px] md:text-[18px] leading-[1.55] text-brand-bg-warm/[0.85] max-w-[560px]">
            {props.intro}
          </p>
        </div>

        <div
          className="self-start bg-brand-surface rounded-[18px] p-8 mt-2"
          style={{ boxShadow: "var(--shadow-offer)" }}
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase text-brand-primary">
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            {cardEyebrow}
          </div>
          <h2 className="mt-3.5 text-[28px] md:text-[34px] leading-[1.08] tracking-[-0.025em] font-extrabold">
            {props.cardHeadlineLine1}<br />
            {props.cardHeadlineLine2}
            {props.cardHeadlineHighlight ? (
              <> <span className="text-brand-primary">{props.cardHeadlineHighlight}</span></>
            ) : null}
          </h2>
          <p className="mt-2.5 text-brand-text-muted text-[14.5px]">{props.cardSub}</p>

          <div className="mt-5">
            <label htmlFor="address" className="block text-[11px] font-bold tracking-[0.08em] uppercase text-[#3a3d33] mb-1.5">
              Property Address
            </label>
            <LeadForm landingPage="home" />
          </div>

          <div className="mt-3.5 text-center text-[13px] text-[#3a3d33] font-semibold">
            No spam · No agents · Cancel anytime
            <span className="block mt-1 font-normal text-[#7a7d70]">By continuing you agree to our privacy policy.</span>
          </div>

          <div className="mt-[18px] pt-[18px] border-t border-dashed border-brand-border-strong text-center text-sm text-brand-text-muted">
            Call or text <b className="text-brand-text font-bold">{siteConfig.phone.display}</b>
          </div>
        </div>

      </div>
    </section>
  )
}
