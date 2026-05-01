import { stats } from "@/content/stats"

export function ReviewBadge() {
  return (
    <div className="flex items-center justify-center gap-3 text-xs text-brand-text-muted">
      <span className="text-amber-500" aria-label={`${stats.googleReviews.averageStars} stars`}>
        {"★".repeat(stats.googleReviews.averageStars)}
      </span>
      <span>Google</span>
      <span>·</span>
      {stats.bbbAccredited.value ? <><span>BBB {stats.bbbAccredited.rating}</span><span>·</span></> : null}
      <span>{stats.googleReviews.count}+ reviews</span>
    </div>
  )
}
