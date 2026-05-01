import { testimonials, type Testimonial } from "@/content/testimonials"
import { TestimonialCard } from "./testimonial-card"

interface TrustBandProps {
  /** Filter to a specific situation (e.g. "foreclosure" on /foreclosure page). Defaults to all. */
  situation?: Testimonial["situation"]
  /** Max testimonials to show (default 3). */
  limit?: number
}

export function TrustBand({ situation, limit = 3 }: TrustBandProps) {
  const filtered = situation && situation !== "general"
    ? testimonials.filter((t) => t.situation === situation || t.situation === "general")
    : testimonials
  const picks = filtered.slice(0, limit)
  return (
    <section className="bg-brand-surface border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 grid gap-6 md:grid-cols-3">
        {picks.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  )
}
