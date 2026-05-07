import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-brand-bg-warm border-b border-brand-border">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex items-center gap-12 h-[72px]">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-[-0.01em] text-[17px]">
            <span
              aria-hidden
              className="w-[34px] h-[34px] rounded-lg bg-brand-primary text-brand-bg-warm grid place-items-center font-mono font-extrabold text-[18px]"
            >
              H
            </span>
            <span className="font-sans">{siteConfig.name}</span>
          </Link>

          <nav className="hidden md:flex gap-9 ml-auto text-[15px] font-medium text-[#3a3d33]">
            <Link href="#process" className="transition-colors hover:text-brand-primary">Process</Link>
            <Link href="#why" className="transition-colors hover:text-brand-primary">Why Us</Link>
            <Link href="#reviews" className="transition-colors hover:text-brand-primary">Reviews</Link>
            <Link href="#faq" className="transition-colors hover:text-brand-primary">FAQ</Link>
            <Link href="/blog" className="transition-colors hover:text-brand-primary">Blog</Link>
          </nav>

          <div className="flex items-center gap-5 md:ml-0 ml-auto">
            <a href={siteConfig.phone.hrefTel} className="hidden sm:flex items-center gap-2 font-bold text-[15px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-primary" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {siteConfig.phone.display}
            </a>
            <Link
              href="#offer"
              className="inline-flex items-center gap-2 px-[22px] py-3 rounded-[10px] bg-brand-ink text-brand-bg-warm font-semibold text-[15px] transition-all hover:bg-black hover:-translate-y-px"
            >
              Get Your Offer
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
