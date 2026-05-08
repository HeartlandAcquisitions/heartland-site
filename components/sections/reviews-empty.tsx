import Link from "next/link"

export function ReviewsEmpty() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-brand-bg-card py-[120px] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <h2 id="reviews-heading" className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            Neighbors who&apos;ve<br />
            <em className="not-italic text-brand-primary">been there.</em>
          </h2>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            We&apos;ve helped Kansas City families through inheritances, relocations, divorces, and tired rentals. Reviews coming soon as we continue to grow our footprint across the metro.
          </p>
        </header>

        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-16 px-12 text-center max-w-[720px] mx-auto flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#f1ede1] text-brand-primary grid place-items-center mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </div>
          <h3 className="text-[32px] font-bold tracking-[-0.025em]">Reviews coming soon.</h3>
          <p className="text-[16.5px] leading-[1.55] max-w-[520px] text-[#4a4d42]">
            We&apos;re a newer company building our reputation one honest closing at a time. As we work with more Kansas City sellers, their stories will live here. In the meantime, we&apos;re happy to put you in touch with anyone we&apos;ve worked with.
          </p>
          <Link
            href="#offer"
            className="mt-3.5 inline-flex items-center gap-2 px-[22px] py-3 rounded-[10px] bg-brand-primary text-brand-bg-warm font-semibold text-[15px] transition-all hover:bg-brand-primary-soft hover:-translate-y-px"
          >
            Be one of our first stories
          </Link>
        </div>
      </div>
    </section>
  )
}
