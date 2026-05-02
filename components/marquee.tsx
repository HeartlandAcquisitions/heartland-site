const ITEMS = [
  "No Repairs Needed",
  "Zero Commissions",
  "Cash in 7 Days",
  "We Buy As-Is",
  "Private Sale",
  "You Choose Closing Date",
] as const

export function Marquee() {
  // Duplicate the items so the CSS animation seamlessly loops
  const items = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-bg-card border-y border-brand-border py-4">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="px-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-brand-text-muted">
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
