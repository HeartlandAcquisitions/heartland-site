// Hardcoded Google reviews. Update REVIEWS + REVIEW_COUNT + AVERAGE_RATING
// as new reviews come in. Source of truth is the GBP at <google_business_url>.
// When the count is high enough to be worth the cost (~$0.017/request, cacheable),
// swap to the Google Places API for live pulls.

type Review = {
  author: string
  /** 1-5 */
  stars: number
  /** Display date as it appears on Google (e.g. "6 days ago", "April 2026") */
  date: string
  /** Verbatim review text. Required by Google's TOS to be unedited. */
  text: string
}

const REVIEWS: Review[] = [
  {
    author: "Jack Morris",
    stars: 5,
    date: "May 2026",
    text: "Great experience working with Heartland. The whole process was organized and straightforward, the team was easy to reach when I had questions, and we closed right on schedule.",
  },
]

const AVERAGE_RATING = 5.0
const REVIEW_COUNT = REVIEWS.length

// Set this to the canonical Google Business Profile URL when available.
// Leave null to render the badge without a link.
const GBP_URL: string | null = null

const STAR_FILLED = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
  </svg>
)

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>{STAR_FILLED}</span>
      ))}
    </span>
  )
}

export function Reviews() {
  const badge = (
    <span className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-brand-surface border border-brand-border">
      <Stars count={Math.round(AVERAGE_RATING)} />
      <span className="font-bold text-[15px] text-brand-text">
        {AVERAGE_RATING.toFixed(1)} on Google
      </span>
      <span className="text-[13px] text-brand-text-muted">
        · {REVIEW_COUNT} review{REVIEW_COUNT === 1 ? "" : "s"}
      </span>
    </span>
  )

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-brand-bg-warm py-[120px] scroll-mt-20"
    >
      <div className="mx-auto max-w-[1080px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-12 max-w-[880px] mx-auto">
          <p className="font-mono text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">
            Reviews
          </p>
          <h2
            id="reviews-heading"
            className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text"
          >
            What clients say.
          </h2>
          {GBP_URL ? (
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {badge}
            </a>
          ) : (
            badge
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
          {REVIEWS.map((r) => (
            <article
              key={r.author + r.date}
              className="bg-brand-surface border border-brand-border rounded-[18px] p-7 flex flex-col gap-3"
            >
              <Stars count={r.stars} />
              <p className="text-[16.5px] leading-[1.55] text-brand-text">{r.text}</p>
              <footer className="mt-2 flex items-baseline justify-between gap-3 border-t border-brand-border pt-3">
                <span className="text-[14.5px] font-bold text-brand-text">{r.author}</span>
                <span className="text-[12.5px] font-mono uppercase tracking-[0.06em] text-brand-text-muted">
                  via Google · {r.date}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
