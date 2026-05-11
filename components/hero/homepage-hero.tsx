import Image from "next/image"
import { LeadForm } from "@/components/lead-form"
import { siteConfig } from "@/lib/site-config"

const STATS = ["Cash Close", "7-14 Day Close", "No Contingencies", "Full Commission"] as const

export function HomepageHero() {
  return (
    <section id="offer" className="relative overflow-hidden bg-brand-ink-soft scroll-mt-20">
      {/* Background photo with dark left-to-right gradient */}
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

        {/* LEFT — copy column */}
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-2.5 self-start bg-brand-bg-warm/10 backdrop-blur-md border border-brand-bg-warm/20 text-brand-bg-warm px-4 py-2 rounded-full text-xs font-semibold tracking-[0.08em] uppercase">
            <span aria-hidden className="w-[7px] h-[7px] rounded-full bg-brand-accent shadow-[0_0_0_4px_rgba(138,166,106,0.25)]" />
            For KC Agents · Pocket Listings & Off-Market Deals
          </span>

          <h1 className="mt-7 font-sans text-[60px] md:text-[88px] leading-[0.96] tracking-[-0.035em] font-extrabold text-brand-bg-warm">
            Off-market deals,<span className="block text-brand-accent">closed fast.</span>
          </h1>

          <p className="mt-7 text-[19px] leading-[1.5] text-brand-bg-warm/[0.78] max-w-[540px]">
            We&apos;re local Kansas City cash buyers. Bring us your distressed flip projects and pocket listings — we underwrite in 24-48 hours and close in 7 to 14 days. You keep your full commission.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5 max-w-[600px]">
            {STATS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-brand-accent/[0.12] border border-brand-accent/35 rounded-full whitespace-nowrap"
              >
                <span aria-hidden className="w-[7px] h-[7px] rounded-full bg-brand-accent shadow-[0_0_0_4px_rgba(138,166,106,0.18)]" />
                <span className="text-brand-bg-warm font-bold text-sm">{s}</span>
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — submit-a-deal card */}
        <div
          className="self-start bg-brand-surface rounded-[18px] p-8 mt-2"
          style={{ boxShadow: "var(--shadow-offer)" }}
        >
          <h2 className="text-[34px] leading-[1.08] tracking-[-0.025em] font-extrabold">
            Submit a deal.<br />Hear back in <span className="text-brand-primary">24 hours.</span>
          </h2>
          <p className="mt-2.5 text-brand-text-muted text-[14.5px]">
            <strong className="font-bold text-brand-text">Cash close</strong>, no financing contingency, no inspection contingency.
          </p>

          <div className="mt-5">
            <label htmlFor="address" className="block text-[11px] font-bold tracking-[0.08em] uppercase text-[#3a3d33] mb-1.5">
              Property Address
            </label>
            <LeadForm landingPage="home" />
          </div>

          <div className="mt-3.5 text-center text-[13px] text-[#3a3d33] font-semibold">
            Confidential · No assignment · You stay listing agent
          </div>

          <div className="mt-[18px] pt-[18px] border-t border-dashed border-brand-border-strong text-center text-sm text-brand-text-muted">
            Or call us directly{" "}
            <a
              href={siteConfig.phone.hrefTel}
              className="ph-no-capture text-brand-text font-bold underline-offset-4 hover:underline focus-visible:underline"
            >
              {siteConfig.phone.display}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
