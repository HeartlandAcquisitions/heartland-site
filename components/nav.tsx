"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

const NAV_LINKS = [
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-brand-bg-warm border-b border-brand-border">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex items-center gap-12 h-[72px]">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-[-0.01em] text-[17px]">
            <span
              aria-hidden
              className="w-[34px] h-[34px] rounded-lg bg-brand-primary text-brand-bg-warm grid place-items-center font-extrabold text-[18px]"
            >
              H
            </span>
            <span className="font-sans">{siteConfig.name}</span>
          </Link>

          <nav className="hidden md:flex gap-9 ml-auto text-[15px] font-medium text-[#3a3d33]" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-brand-primary">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 md:ml-0 ml-auto">
            <a href={siteConfig.phone.hrefTel} className="ph-no-capture hidden sm:flex items-center gap-2 font-bold text-[15px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-primary" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {siteConfig.phone.display}
            </a>
            <Link
              href="#offer"
              className="hidden md:inline-flex items-center gap-2 px-[22px] py-3 rounded-[10px] bg-brand-ink text-brand-bg-warm font-semibold text-[15px] transition-all hover:bg-black hover:-translate-y-px"
            >
              Get Your Offer
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-ink hover:bg-brand-border/40 transition-colors"
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open ? (
        <>
          <div
            className="fixed inset-0 top-[72px] bg-brand-ink/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-x-0 top-[72px] z-50 md:hidden bg-brand-bg-warm border-b border-brand-border shadow-lg"
          >
            <ul className="flex flex-col p-4 gap-1 list-none">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-brand-text hover:bg-brand-border/40"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-brand-border pt-3 flex flex-col gap-2 px-2">
                <a
                  href={siteConfig.phone.hrefTel}
                  onClick={() => setOpen(false)}
                  className="ph-no-capture flex items-center gap-2 py-2 font-bold text-base text-brand-text"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-primary" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {siteConfig.phone.display}
                </a>
                <Link
                  href="#offer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-[22px] py-3 rounded-[10px] bg-brand-ink text-brand-bg-warm font-semibold text-[15px] transition-all hover:bg-black"
                >
                  Get Your Offer
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  )
}
