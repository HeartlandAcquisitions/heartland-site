import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { CITIES } from "@/lib/cities"
import { VERTICALS } from "@/lib/verticals"

export function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-bg-warm/70 pt-[72px] pb-8">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3 font-bold text-[18px] text-brand-bg-warm">
              <span
                aria-hidden
                className="w-[34px] h-[34px] rounded-lg bg-brand-primary text-brand-bg-warm grid place-items-center font-mono font-extrabold text-[18px]"
              >
                H
              </span>
              <span className="font-sans">{siteConfig.name}</span>
            </div>
            <p className="mt-[18px] text-[14.5px] leading-[1.55] max-w-[300px]">
              A family-owned home-buying company serving the Kansas City metro. Honest offers, plain talk, fast closings.
            </p>
            <p className="mt-3 text-[13px] leading-[1.55] text-brand-bg-warm/50 max-w-[300px]">
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-bg-warm font-mono mb-[18px]">Company</h5>
            <ul className="flex flex-col gap-[11px] text-[14.5px] list-none p-0">
              <li><Link href="/#process" className="hover:text-brand-bg-warm">Our process</Link></li>
              <li><Link href="/#why" className="hover:text-brand-bg-warm">Why us</Link></li>
              <li><Link href="/#reviews" className="hover:text-brand-bg-warm">Reviews</Link></li>
              <li><Link href="/#faq" className="hover:text-brand-bg-warm">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-brand-bg-warm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-bg-warm font-mono mb-[18px]">Situations</h5>
            <ul className="flex flex-col gap-[11px] text-[14.5px] list-none p-0">
              {VERTICALS.map((v) => (
                <li key={v.slug}>
                  <Link href={`/situations/${v.slug}`} className="hover:text-brand-bg-warm">{v.eyebrow}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-bg-warm font-mono mb-[18px]">Cities</h5>
            <ul className="flex flex-col gap-[11px] text-[14.5px] list-none p-0">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/cities/${c.slug}`} className="hover:text-brand-bg-warm">{c.name}, {c.state}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-bg-warm font-mono mb-[18px]">Get in touch</h5>
            <ul className="flex flex-col gap-[11px] text-[14.5px] list-none p-0">
              <li><a href={siteConfig.phone.hrefTel} className="hover:text-brand-bg-warm">{siteConfig.phone.display}</a></li>
              <li><a href="mailto:hello@heartlandacq.com" className="hover:text-brand-bg-warm">hello@heartlandacq.com</a></li>
              <li>Mon–Sat · 8a–7p CT</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-16 pt-6 border-t border-brand-bg-warm/10 text-[13px] text-brand-bg-warm/50">
          <span>© 2026 Ivarix Capital LLC DBA Heartland Acquisitions. All rights reserved.</span>
          <span className="flex gap-3">
            <Link href="/privacy" className="hover:text-brand-bg-warm">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-brand-bg-warm">Terms</Link>
            <span aria-hidden>·</span>
            <Link href="/disclosures" className="hover:text-brand-bg-warm">Disclosures</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
