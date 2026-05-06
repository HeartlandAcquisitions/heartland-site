"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/logo.png"
            alt={siteConfig.name}
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="hidden sm:inline font-sans text-lg font-bold tracking-tight text-brand-text">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-text">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phone.hrefTel}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-primary"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{siteConfig.phone.display}</span>
          </a>
          <Link
            href="/#get-offer"
            className={cn(buttonVariants({ size: "lg" }), "bg-brand-primary hover:bg-brand-primary-soft text-white")}
          >
            Get Your Offer
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-brand-text"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((s) => !s)}
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="md:hidden border-t border-brand-border bg-brand-surface px-4 py-3 flex flex-col gap-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-brand-text hover:text-brand-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
