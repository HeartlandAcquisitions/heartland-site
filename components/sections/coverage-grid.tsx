import Link from "next/link"
import { VERTICALS } from "@/lib/verticals"
import { CITIES } from "@/lib/cities"

export type CoverageGridProps = {
  /** Hide the situations column (use on situation pages where it would be self-referential) */
  hideSituations?: boolean
  /** Hide the cities column (use on city pages where it would be self-referential) */
  hideCities?: boolean
  /** Optional override headline */
  headline?: string
  /** Optional override sub */
  sub?: string
}

export function CoverageGrid({ hideSituations, hideCities, headline, sub }: CoverageGridProps) {
  return (
    <section className="bg-brand-bg-card py-[96px]">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-4 mb-12 max-w-[880px] mx-auto">
          <h2 className="font-sans text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.025em] font-extrabold text-brand-text">
            {headline ?? "We buy houses across the KC metro."}
          </h2>
          <p className="text-[16.5px] text-[#3a3d33] leading-[1.5] max-w-[680px]">
            {sub ?? "Whatever your situation, wherever you are in the metro — we make a fair cash offer. Click through for the full process tailored to your case."}
          </p>
        </header>

        <div className={`grid gap-10 ${hideSituations || hideCities ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
          {!hideSituations ? (
            <div className="bg-brand-surface border border-brand-border rounded-[18px] p-8">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium mb-5">Situations we handle</h3>
              <ul className="grid grid-cols-1 gap-2 list-none p-0">
                {VERTICALS.map((v) => (
                  <li key={v.slug}>
                    <Link
                      href={`/situations/${v.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-md text-[15px] font-medium text-brand-text hover:bg-brand-bg-card hover:text-brand-primary transition-colors"
                    >
                      <span>{v.eyebrow}</span>
                      <span aria-hidden className="text-brand-primary">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {!hideCities ? (
            <div className="bg-brand-surface border border-brand-border rounded-[18px] p-8">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium mb-5">Cities we serve</h3>
              <ul className="grid grid-cols-2 gap-2 list-none p-0">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/cities/${c.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-md text-[15px] font-medium text-brand-text hover:bg-brand-bg-card hover:text-brand-primary transition-colors"
                    >
                      <span>{c.name}, {c.state}</span>
                      <span aria-hidden className="text-brand-primary">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
