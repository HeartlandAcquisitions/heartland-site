import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Star } from "lucide-react"

interface CityHeroProps {
  /** Full city + state (e.g. "Independence, MO") */
  cityState: string
  /** Sub-copy paragraph with city-specific specificity */
  subheadline: string
  /** Used to set source_detail on the lead form */
  landingPage: string
  /** City-specific testimonial overlay */
  testimonial: {
    quote: string
    authorName: string
    authorCity: string
  }
}

export function CityHero({ cityState, subheadline, landingPage: _landingPage, testimonial }: CityHeroProps) {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-brand-bg-warm">
      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-12 md:py-0">
        <div className="z-10 py-6 md:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/30 text-brand-text text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-soft" aria-hidden />
            We Buy Houses in {cityState}
          </div>

          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.05] mb-6">
            Sell your {cityState} house{" "}
            <span className="text-brand-primary">on your timeline.</span>
          </h1>

          <p className="text-lg text-brand-text-muted leading-relaxed mb-8 md:mb-10 max-w-lg">
            {subheadline}
          </p>

          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <Link
              href="#offer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-ambient transition-all active:scale-95 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #415336 0%, #596b4c 100%)" }}
            >
              Get Your Offer in 24 Hours
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <a href="#process" className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-primary-soft transition-colors">
            See how it works
            <ChevronDown className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-ambient">
            <Image
              src="/brand/hero-house.jpg"
              alt={`Home in ${cityState} — the kind of property Heartland buys for cash`}
              width={800}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-surface p-6 rounded-2xl shadow-ambient max-w-[280px] ring-1 ring-brand-border">
            <div className="flex gap-0.5 text-amber-500 mb-2" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500" aria-hidden />
              ))}
            </div>
            <p className="text-sm font-medium italic text-brand-text-muted leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="mt-3 text-xs font-bold text-brand-text uppercase tracking-tight">
              — {testimonial.authorName}, {testimonial.authorCity}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
