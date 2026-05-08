import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog — Heartland Acquisitions",
  description: "Honest writing on selling a Kansas City house for cash — process, market data, and seller stories from your KC neighbors.",
}

export default function BlogIndexPage() {
  return (
    <article className="bg-brand-bg-warm py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <p className="font-mono text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">Heartland blog</p>
          <h1 className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            Honest writing<br />
            <em className="not-italic text-brand-primary">about selling a house.</em>
          </h1>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            Real Kansas City market data, plain-English explanations of probate, foreclosure, and inherited-house sales, and stories from sellers who&apos;ve worked with us.
          </p>
        </header>

        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-16 px-12 text-center max-w-[720px] mx-auto flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#f1ede1] text-brand-primary grid place-items-center mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <h3 className="text-[32px] font-bold tracking-[-0.025em]">First posts coming soon.</h3>
          <p className="text-[16.5px] leading-[1.55] max-w-[520px] text-[#4a4d42]">
            We&apos;re putting together our first guides on selling inherited houses, the cash-vs-traditional sale math for KC neighborhoods, and what to do if you&apos;re facing foreclosure. In the meantime, the FAQ on our homepage covers the most common questions.
          </p>
          <Link
            href="/#faq"
            className="mt-3.5 inline-flex items-center gap-2 px-[22px] py-3 rounded-[10px] bg-brand-primary text-brand-bg-warm font-semibold text-[15px] transition-all hover:bg-brand-primary-soft hover:-translate-y-px"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </article>
  )
}
