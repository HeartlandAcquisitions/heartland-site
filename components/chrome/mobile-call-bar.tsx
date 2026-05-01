import Link from "next/link"
import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface MobileCallBarProps {
  visible?: boolean
}

export function MobileCallBar({ visible = true }: MobileCallBarProps) {
  if (!visible) return null
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-brand-border bg-brand-surface shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={siteConfig.phone.hrefTel}
          className="flex items-center justify-center gap-2 rounded-md border border-brand-primary text-brand-primary py-3 text-sm font-semibold"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
        <Link
          href="/#get-offer"
          className="flex items-center justify-center rounded-md bg-brand-primary text-white py-3 text-sm font-semibold"
        >
          Get My Offer
        </Link>
      </div>
    </div>
  )
}
