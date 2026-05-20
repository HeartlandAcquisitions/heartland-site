"use client"

import { useState } from "react"
import Image from "next/image"
import { LeadForm, type LeadRole } from "@/components/lead-form"
import { siteConfig } from "@/lib/site-config"

const ROLES: { id: LeadRole; label: string }[] = [
  { id: "homeowner", label: "Homeowner" },
  { id: "agent", label: "Agent" },
  { id: "wholesaler", label: "Wholesaler" },
]

const ROLE_SUBCOPY: Record<LeadRole, string> = {
  homeowner: "No showings, no repairs, no commission. We buy as-is.",
  agent: "You keep your full commission. We close on your seller’s timeline.",
  wholesaler: "Direct cash buyer. No daisy-chains.",
}

export function HomepageHero() {
  const [role, setRole] = useState<LeadRole>("homeowner")

  return (
    <section id="offer" className="relative overflow-hidden bg-brand-ink-soft scroll-mt-20">
      {/* Background photo with dark gradient overlay */}
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

      <div className="relative z-10 mx-auto max-w-[1280px] px-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[72px] py-20 md:pt-24 md:pb-[120px]">

        {/* LEFT — copy column */}
        <div className="flex flex-col">
          <h1 className="font-sans text-[56px] md:text-[80px] leading-[0.98] tracking-[-0.035em] font-extrabold text-brand-bg-warm">
            Off-market properties,
            <span className="block text-brand-accent">closed fast.</span>
          </h1>

          <p className="mt-7 text-[16.5px] leading-[1.55] text-brand-bg-warm/[0.85] max-w-[460px]">
            We&rsquo;re local Kansas City home buyers, and we buy from{" "}
            <span className="text-brand-accent font-semibold">
              homeowners, agents, and wholesalers.
            </span>
          </p>

          <ul className="mt-5 flex flex-col gap-2.5 text-[15px] leading-[1.5] text-brand-bg-warm/[0.78] max-w-[460px] list-none p-0">
            <li>
              <span className="text-brand-bg-warm font-semibold">Homeowners&nbsp;—</span>{" "}
              bring us your property no matter the condition; we work with your timeline.
            </li>
            <li>
              <span className="text-brand-bg-warm font-semibold">Agents&nbsp;—</span>{" "}
              bring us the properties you can&rsquo;t list on the market.
            </li>
            <li>
              <span className="text-brand-bg-warm font-semibold">Wholesalers&nbsp;—</span>{" "}
              bring us your deals.
            </li>
          </ul>
        </div>

        {/* RIGHT — segmented audience card */}
        <div
          className="self-start bg-[#fdfaf3] rounded-[20px] p-8 pb-7 mt-2"
          style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.03)" }}
        >
          {/* Eyebrow */}
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#6b6357] mb-2.5">
            I am a…
          </div>

          {/* Segmented control */}
          <div
            className="grid grid-cols-3 gap-1.5 p-1 rounded-xl mb-5"
            style={{ background: "#f1ebde" }}
            role="tablist"
            aria-label="Audience selector"
          >
            {ROLES.map((r) => {
              const active = role === r.id
              return (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setRole(r.id)}
                  className="py-2.5 px-2 rounded-[9px] text-[13px] font-semibold transition-all cursor-pointer"
                  style={{
                    background: active ? "#fdfaf3" : "transparent",
                    boxShadow: active ? "0 1px 3px rgba(0,0,0,0.09)" : "none",
                    color: active ? "#0e0e0e" : "#6b6357",
                  }}
                >
                  {r.label}
                </button>
              )
            })}
          </div>

          {/* Headline */}
          <h2 className="text-[28px] md:text-[30px] leading-[1.1] tracking-[-0.02em] font-bold text-[#0e0e0e]">
            Got a property?
            <br />
            We&rsquo;ll have a{" "}
            <span style={{ color: "#5a7232" }}>cash offer</span> in 24 hours.
          </h2>

          {/* Role-dependent sub-copy */}
          <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[#3a352d]">
            {ROLE_SUBCOPY[role]}
          </p>

          {/* Address field + submit */}
          <div className="mt-5">
            <label
              htmlFor="address"
              className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6b6357] mb-2"
            >
              Property address
            </label>
            <LeadForm landingPage="home" role={role} ctaLabel="Get my offer →" />
          </div>

          {/* Trust row */}
          <div className="mt-4 flex items-center justify-between text-[13px] font-medium text-[#3a352d]">
            <span>
              <span style={{ color: "#5a7232" }}>✓</span> Confidential
            </span>
            <span>
              <span style={{ color: "#5a7232" }}>✓</span> No obligation
            </span>
            <span>
              <span style={{ color: "#5a7232" }}>✓</span> Local buyer
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-dashed border-[#d8d2c4] text-center text-[13px] text-[#3a352d]">
            Or call us directly{" "}
            <a
              href={siteConfig.phone.hrefTel}
              className="ph-no-capture text-[#0e0e0e] font-bold underline-offset-4 hover:underline focus-visible:underline"
            >
              {siteConfig.phone.display}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
