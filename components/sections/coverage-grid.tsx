export type CoverageGridProps = {
  /** Optional override headline */
  headline?: string
  /** Optional override sub */
  sub?: string
}

// KC metro cities and counties we actively buy in. Hardcoded here (not pulled
// from lib/cities) because we no longer maintain per-city landing pages.
const COVERAGE_CITIES = [
  "Kansas City, MO",
  "Independence, MO",
  "Lee's Summit, MO",
  "Blue Springs, MO",
  "Raytown, MO",
  "Grandview, MO",
  "Belton, MO",
  "Liberty, MO",
  "Gladstone, MO",
  "North Kansas City, MO",
  "Overland Park, KS",
  "Olathe, KS",
  "Lenexa, KS",
  "Shawnee, KS",
  "Kansas City, KS",
  "Leawood, KS",
] as const

export function CoverageGrid({ headline, sub }: CoverageGridProps) {
  return (
    <section className="bg-brand-bg-card py-[96px]">
      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-4 mb-12 max-w-[880px] mx-auto">
          <h2 className="font-sans text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.025em] font-extrabold text-brand-text">
            {headline ?? "We buy throughout the KC metro."}
          </h2>
          <p className="text-[16.5px] text-[#3a3d33] leading-[1.5] max-w-[680px]">
            {sub ?? "Send us deals from any of these markets. Single-family, small multi-family, distressed condition, occupied or vacant — we underwrite all of it."}
          </p>
        </header>

        <div className="bg-brand-surface border border-brand-border rounded-[18px] p-8 max-w-[880px] mx-auto">
          <h3 className="text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium mb-5">Cities we actively buy in</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-none p-0">
            {COVERAGE_CITIES.map((city) => (
              <li key={city} className="py-2 px-3 text-[15px] font-medium text-brand-text">{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
