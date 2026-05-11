import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function CtaStrip() {
  return (
    <section aria-labelledby="cta-heading" className="bg-brand-primary text-brand-bg-warm py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-8 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <h2 id="cta-heading" className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold">
            Got a deal<br />in mind?
          </h2>
          <p className="mt-[18px] text-lg text-brand-bg-warm/85 max-w-[480px]">
            Send us the address. We&apos;ll underwrite it inside 48 hours and come back with a number that works for you and your seller — or a clean pass so you can move on.
          </p>
        </div>
        <div className="flex flex-col gap-3.5 items-start">
          <Link
            href="#offer"
            className="inline-flex items-center gap-2 bg-brand-bg-warm text-brand-text font-semibold text-base px-[26px] py-4 rounded-xl transition-all hover:bg-white hover:-translate-y-px"
          >
            Submit a deal →
          </Link>
          <a href={siteConfig.phone.hrefTel} className="ph-no-capture flex items-center gap-2.5 text-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Or call <b className="font-bold ml-1.5">{siteConfig.phone.display}</b>
          </a>
        </div>
      </div>
    </section>
  )
}
