import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, ChevronDown, Star } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const STATS = [
  { value: "7", label: "Day Closings" },
  { value: "$0", label: "Fees & Commissions" },
  { value: "40+", label: "5-Star Reviews" },
  { value: "100%", label: "Offer Rate" },
] as const

export function HomepageHero() {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden bg-brand-bg-warm">
      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-12 md:py-0">
        {/* LEFT */}
        <div className="z-10 py-6 md:py-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/30 text-brand-text text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-soft" aria-hidden />
            Trusted by Kansas City Homeowners
          </div>

          {/* H1 — Inter Extra Bold, big, green accent on second clause */}
          <h1 className="font-sans text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-text leading-[1.05] mb-6">
            Sell your home <span className="text-brand-primary">on your terms.</span>
          </h1>

          <p className="text-lg text-brand-text-muted leading-relaxed mb-8 md:mb-10 max-w-lg">
            We buy houses in Kansas City for cash. No agents, no repairs, no showings. Just a fair offer from your Jackson County neighbors — and a closing date you choose.
          </p>

          {/* CTAs — primary gradient + secondary ghost */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <Link
              href="#offer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-ambient transition-all active:scale-95 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #415336 0%, #596b4c 100%)" }}
            >
              Get Your Offer in 24 Hours
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/scan"
              className="hidden md:inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5 transition-all"
            >
              <Camera className="h-4 w-4" aria-hidden />
              Scan Your Home
            </Link>
            <a
              href={siteConfig.phone.hrefTel}
              className="md:hidden inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5 transition-all"
            >
              Call Now
            </a>
          </div>

          <a href="#process" className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-primary-soft transition-colors mb-8">
            See how it works
            <ChevronDown className="h-4 w-4" aria-hidden />
          </a>

          {/* 4-column stats trio (technically a quartet) */}
          <dl className="grid grid-cols-4 gap-4 border-t border-brand-border/60 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-sans text-2xl font-bold text-brand-primary">{s.value}</dt>
                <dd className="text-xs font-medium text-brand-text-muted uppercase tracking-wider mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — photo card + testimonial overlay */}
        <div className="relative hidden md:block">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-ambient">
            <Image
              src="/brand/hero-house.jpg"
              alt="Kansas City craftsman bungalow at sunset — the kind of home Heartland buys for cash"
              width={800}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-surface p-6 rounded-2xl shadow-ambient max-w-[260px] ring-1 ring-brand-border">
            <div className="flex gap-0.5 text-amber-500 mb-2" aria-label="5 stars">
              <Star className="h-4 w-4 fill-amber-500" aria-hidden />
              <Star className="h-4 w-4 fill-amber-500" aria-hidden />
              <Star className="h-4 w-4 fill-amber-500" aria-hidden />
              <Star className="h-4 w-4 fill-amber-500" aria-hidden />
              <Star className="h-4 w-4 fill-amber-500" aria-hidden />
            </div>
            <p className="text-sm font-medium italic text-brand-text-muted leading-relaxed">
              &quot;Sold my house in Independence in just 6 days. Best experience ever!&quot;
            </p>
            <div className="mt-3 text-xs font-bold text-brand-text uppercase tracking-tight">— Sarah M.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
