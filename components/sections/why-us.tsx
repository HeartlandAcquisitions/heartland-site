const X_ICON = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

const CHECK_ICON = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const THEM = [
  "Realtor fees, commission, repairs",
  "Daily showings and walkthroughs",
  "Months on the market with no offers",
  "Financing contingencies and seller concessions",
  "Flaky buyers",
]

const US: Array<{ pre?: string; rest: string }> = [
  { pre: "$0 commission.", rest: " $0 fees. We cover closing costs." },
  { rest: "Sell as-is. Leave anything you don't want." },
  { rest: "One walkthrough by us, on your schedule." },
  { rest: "Close in as little as 7 days, or whenever you're ready." },
  { rest: "Cash offer, no surprises." },
]

export function WhyUs() {
  return (
    <section id="why" className="bg-brand-ink text-brand-bg-warm py-[120px] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <h2 className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-bg-warm">
            Why us instead<br />
            of <em className="not-italic text-brand-accent">using a realtor.</em>
          </h2>
          <p className="text-lg leading-[1.5] max-w-[680px] text-brand-bg-warm/70">
            Listing with an agent is a hassle that works for some. For everyone else, distressed homes, financial trouble, foreclosure, inherited properties, life changes&hellip; There is an easier route.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-[20px] overflow-hidden border border-brand-bg-warm/10">
          <div className="p-10 px-9 bg-brand-bg-warm/[0.03]">
            <h4 className="text-[13px] tracking-[0.1em] uppercase font-mono font-medium text-brand-bg-warm/50">Traditional sale</h4>
            <h3 className="mt-2 text-[30px] font-bold tracking-[-0.025em]">The agent route</h3>
            <ul className="mt-7 flex flex-col gap-3.5 list-none p-0">
              {THEM.map((item) => (
                <li key={item} className="flex gap-3.5 items-start text-base text-brand-bg-warm/85">
                  <span className="flex-none w-[22px] h-[22px] rounded-full grid place-items-center mt-0.5 bg-brand-bg-warm/[0.08] text-brand-bg-warm/55">
                    {X_ICON}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 px-9 bg-[linear-gradient(180deg,rgba(138,166,106,.16),rgba(138,166,106,.04))] border-l border-brand-accent/40">
            <h4 className="text-[13px] tracking-[0.1em] uppercase font-mono font-medium text-brand-accent">Heartland Acquisitions</h4>
            <h3 className="mt-2 text-[30px] font-bold tracking-[-0.025em]">The direct route</h3>
            <ul className="mt-7 flex flex-col gap-3.5 list-none p-0">
              {US.map((item, i) => (
                <li key={i} className="flex gap-3.5 items-start text-base text-brand-bg-warm/85">
                  <span className="flex-none w-[22px] h-[22px] rounded-full grid place-items-center mt-0.5 bg-brand-accent text-brand-ink">
                    {CHECK_ICON}
                  </span>
                  <span>
                    {item.pre ? <strong className="font-bold">{item.pre}</strong> : null}
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
