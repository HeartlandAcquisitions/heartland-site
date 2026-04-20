import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t bg-slate-50 py-12 text-sm text-slate-600">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div>
          <div className="text-base font-semibold text-slate-900">
            {siteConfig.name}
          </div>
          <address className="mt-2 not-italic">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state}{" "}
            {siteConfig.address.zip}
            <br />
            <a
              className="text-slate-900 underline"
              href={siteConfig.phone.hrefTel}
            >
              Call {siteConfig.phone.display}
            </a>
          </address>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-900">
            Company
          </div>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-900">
            We Buy Houses For
          </div>
          <ul className="space-y-2">
            {siteConfig.verticals.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-900">
            Legal
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-slate-900">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t pt-6 px-4 text-xs text-slate-500 md:px-6">
        © {year} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  )
}
