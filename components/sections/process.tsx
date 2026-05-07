type Step = {
  num: string
  title: string
  body: string
  tag: string
  icon: React.ReactNode
}

const HOUSE_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
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
    title: "Tell us about your home",
    body: "Share your address and a few quick details. Takes about 30 seconds, no contractor visits, no obligation.",
    tag: "~ 30 SECONDS",
    icon: HOUSE_ICON,
  },
  {
    num: "STEP 02",
    title: "Get a fair cash offer",
    body: "We look at comparable properties in your neighborhood, factor in your home's condition, and can present a no-obligation offer within 1 hour of the walkthrough. Take your time deciding.",
    tag: "~ 1 HOUR AFTER WALKTHROUGH",
    icon: CLOCK_ICON,
  },
  {
    num: "STEP 03",
    title: "Pick your closing day",
    body: "Want to close in 7 days? Need 60 to find a new place? You set the timeline. We close at a local title company. Clean and simple.",
    tag: "7 TO 60 DAYS",
    icon: CHECK_ICON,
  },
]

export function Process() {
  return (
    <section id="process" className="bg-brand-bg-warm py-[120px] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <h2 className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            Three steps.<br />
            <em className="not-italic text-brand-primary">That&apos;s it.</em>
          </h2>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            We&apos;ve stripped the home-selling process down to what actually matters. No listings, no open houses, no waiting for a buyer who might back out.
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
