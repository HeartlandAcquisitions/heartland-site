import { LeadForm } from "@/components/lead-form"
import { ReviewBadge } from "@/components/trust/review-badge"
import { HeroFrame } from "./hero-frame"

const STATS = [
  { value: "7 day", label: "closings" },
  { value: "$0", label: "fees / commissions" },
  { value: "100%", label: "offer rate" },
] as const

export function HomepageHero() {
  return (
    <HeroFrame
      eyebrow="TRUSTED BY KANSAS CITY HOMEOWNERS"
      headline={<>Sell your Kansas City house for cash — no agents, no fees, your timeline.</>}
      subheadline={<>Get a fair cash offer in 24 hours. Close in as little as 7 days. We buy as-is — any condition, any situation.</>}
      statsSlot={
        <dl className="grid grid-cols-3 gap-4 max-w-md">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl font-bold">{s.value}</dt>
              <dd className="text-xs opacity-85">{s.label}</dd>
            </div>
          ))}
        </dl>
      }
      formSlot={
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-text">Get My Cash Offer</h2>
            <p className="text-sm text-brand-text-muted">Address only to start — takes 30 seconds.</p>
          </div>
          <LeadForm landingPage="home" />
          <ReviewBadge />
        </div>
      }
    />
  )
}
