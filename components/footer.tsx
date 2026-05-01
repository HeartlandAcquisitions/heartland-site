import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto bg-brand-bg-card border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-bold text-brand-text">{siteConfig.name}</h3>
          <address className="mt-3 not-italic text-sm text-brand-text-muted">
            {siteConfig.address.street}<br />
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
            <a href={siteConfig.phone.hrefTel} className="mt-2 inline-block font-semibold text-brand-primary underline-offset-2 hover:underline">
              {siteConfig.phone.display}
            </a>
          </address>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-text">
            {siteConfig.nav.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-brand-primary">{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">We Buy Houses For</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-text">
            {siteConfig.verticals.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-brand-primary">{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-text">
            <li><Link href="/privacy" className="hover:text-brand-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-primary">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border bg-brand-bg-warm px-4 py-4 text-center text-xs text-brand-text-muted">
        © {year} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  )
}
