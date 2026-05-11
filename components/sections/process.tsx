type Step = {
  num: string
  title: string
  body: string
  tag: string
  icon: React.ReactNode
}

const SEND_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
)

const CLOCK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const CHECK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const STEPS: Step[] = [
  {
    num: "STEP 01",
    title: "Send us the deal",
    body: "Submit the address, asking price, and what you know about condition. Or just call us — pictures and a quick description by text work too.",
    tag: "~ 1 MINUTE",
    icon: SEND_ICON,
  },
  {
    num: "STEP 02",
    title: "We underwrite in 24-48 hours",
    body: "We run comps, build a rehab scope, and come back with a cash offer that pencils for us and works for your seller. No back-and-forth, no week-long stalls.",
    tag: "24 - 48 HOURS",
    icon: CLOCK_ICON,
  },
  {
    num: "STEP 03",
    title: "Close in 7 to 14 days",
    body: "Cash close at a local title company. No financing contingency, no appraisal hangups, no inspection-period renegotiation. You stay the listing agent and collect your full commission at closing.",
    tag: "7 - 14 DAYS",
    icon: CHECK_ICON,
  },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-brand-bg-warm py-[120px] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <h2 id="process-heading" className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            How we work<br />
            <em className="not-italic text-brand-primary">with agents.</em>
          </h2>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            Three steps from your inbox to a closed deal. No assignment fees, no daisy-chain investors, no surprise faces at closing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className="bg-brand-surface border border-brand-border rounded-[18px] p-9 pb-10 transition-all hover:-translate-y-[3px] hover:shadow-[var(--shadow-card-lift)]"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-[#f1ede1] grid place-items-center text-brand-primary mb-2">
                {s.icon}
              </div>
              <div className="font-mono text-[13px] text-brand-primary font-medium tracking-[0.08em]">{s.num}</div>
              <h3 className="mt-[18px] text-[28px] font-bold tracking-[-0.02em] leading-[1.15]">{s.title}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.55] text-[#4a4d42]">{s.body}</p>
              <span className="mt-6 inline-flex px-3 py-1.5 rounded-full bg-[#f1ede1] text-brand-primary text-xs font-semibold font-mono tracking-[0.04em]">
                {s.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
