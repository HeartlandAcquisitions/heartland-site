type Criterion = {
  label: string
  value: string
}

const CRITERIA: Criterion[] = [
  { label: "Property type", value: "Single-family, duplex, small multi-family" },
  { label: "Condition", value: "Anything — flip projects, hoarder, fire, water, code violations" },
  { label: "Price range", value: "$30k tear-downs to $500k+ on the right deal" },
  { label: "Geography", value: "Entire Kansas City metro — Jackson, Clay, Cass, Platte, Wyandotte, Johnson" },
  { label: "Occupancy", value: "Vacant, owner-occupied, or tenanted (we'll honor leases)" },
  { label: "Title", value: "Clear title preferred; we can work with liens, probate, and trust transfers" },
]

export function WhatWeBuy() {
  return (
    <section
      id="buy-box"
      aria-labelledby="buy-box-heading"
      className="bg-brand-bg-card py-[120px] scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-14 max-w-[880px] mx-auto">
          <p className="font-mono text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">Buy box</p>
          <h2 id="buy-box-heading" className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            What we buy.
          </h2>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            Concrete criteria so you can pre-qualify your deal before sending. If it&apos;s close but not a clean fit, send it anyway — we&apos;ll tell you straight.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1080px] mx-auto">
          {CRITERIA.map((c) => (
            <div
              key={c.label}
              className="bg-brand-surface border border-brand-border rounded-[14px] p-6 flex flex-col gap-2"
            >
              <span className="font-mono text-[12px] text-brand-primary uppercase tracking-[0.08em] font-medium">
                {c.label}
              </span>
              <span className="text-[16.5px] text-brand-text leading-[1.45]">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
