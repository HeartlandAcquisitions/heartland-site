import Image from "next/image"
import { LeadForm } from "@/components/lead-form"

export function HomepageHero() {
  return (
    <section
      id="offer"
      className="relative min-h-[720px] flex items-center overflow-hidden scroll-mt-20"
    >
      {/* Faded full-bleed photo */}
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-house.jpg"
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
              "linear-gradient(rgba(249,249,247,0.55), rgba(249,249,247,0.78))",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full grid md:grid-cols-2 gap-10 md:gap-14 items-center py-16 md:py-24">

        {/* LEFT — glass form card */}
        <div
          className="rounded-3xl border border-white/85 bg-white/60 p-7 md:p-8 shadow-ambient"
          style={{
            backdropFilter: "blur(14px) saturate(1.1)",
            WebkitBackdropFilter: "blur(14px) saturate(1.1)",
          }}
        >
          <span className="inline-block px-3 py-1.5 rounded-full bg-brand-primary text-white text-[10px] font-bold tracking-[0.14em] uppercase mb-3">
            Get Your Offer
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold tracking-tight text-brand-text leading-tight mb-2">
            A fair cash offer in <span className="text-brand-primary">24 hours.</span>
          </h2>
          <p className="text-sm text-brand-text-muted mb-5">
            Address only to start. 30 seconds. No obligation.
          </p>
          <LeadForm landingPage="home" />
          <p className="mt-4 text-xs text-brand-text-muted text-center">
            No spam · No agents · Cancel anytime
          </p>
        </div>

        {/* RIGHT — message column */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/80 text-brand-text text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-soft" aria-hidden />
            Trusted by Kansas City Homeowners
          </span>

          <h1 className="font-sans text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-text leading-[1.04] mb-5">
            Sell your home <span className="text-brand-primary">on your terms.</span>
          </h1>

          <p className="text-base lg:text-lg text-brand-text-muted leading-relaxed mb-6 max-w-lg">
            No agents, no repairs, no showings. A fair offer from your Jackson County neighbors — and a closing date you choose.
          </p>

          <ul className="mt-2 pt-6 border-t border-brand-border/60 space-y-3 list-none p-0">
            <li className="flex items-center gap-3 text-base text-brand-text">
              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden>
                ✓
              </span>
              <strong className="font-extrabold">Close on your timeline</strong>
            </li>
            <li className="flex items-center gap-3 text-base text-brand-text">
              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden>
                ✓
              </span>
              <strong className="font-extrabold">Zero Fees, Zero Commissions</strong>
            </li>
            <li className="flex items-center gap-3 text-base text-brand-text">
              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden>
                ✓
              </span>
              <strong className="font-extrabold">Any Condition, Any Situation</strong>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
