import { LeadForm } from "@/components/lead-form"
import { ReviewBadge } from "@/components/trust/review-badge"

export function OfferSection() {
  return (
    <section id="offer" className="bg-brand-surface scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/30 text-brand-text text-xs font-bold tracking-widest uppercase mb-4">
            Get Your Offer
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-[1.1] mb-4">
            A fair cash offer in <span className="text-brand-primary">24 hours.</span>
          </h2>
          <p className="text-base text-brand-text-muted max-w-xl mx-auto">
            Address only to start — takes 30 seconds. No obligation. No spam.
          </p>
        </div>
        <div className="rounded-2xl bg-brand-bg-warm shadow-ambient p-6 md:p-10 ring-1 ring-brand-border">
          <LeadForm landingPage="home" />
          <div className="mt-6 flex justify-center">
            <ReviewBadge />
          </div>
        </div>
      </div>
    </section>
  )
}
