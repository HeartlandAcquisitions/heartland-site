import { stats } from "@/content/stats"

export function HouseCounter() {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-brand-primary">
        {stats.housesBought.value}+
      </div>
      <div className="mt-1 text-sm text-brand-text-muted">
        houses bought in KC since {stats.yearsInBusiness.sinceYear}
      </div>
    </div>
  )
}
