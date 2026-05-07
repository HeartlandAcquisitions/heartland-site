const ITEMS = [
  "NO COMMISSIONS",
  "CASH IN 7 DAYS",
  "WE BUY AS-IS",
  "PRIVATE SALE",
  "YOU CHOOSE CLOSING DATE",
  "NO REPAIRS NEEDED",
  "ZERO FEES",
  "LOCAL TO KC",
] as const

export function Marquee() {
  // Duplicate the items so the CSS animation seamlessly loops
  const items = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-ink border-y border-brand-border py-4">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="px-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-brand-bg-warm">
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
