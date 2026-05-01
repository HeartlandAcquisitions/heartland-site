/**
 * Headline stats shown across the site (hero, footer, schema).
 * Numbers are placeholders pending Chase's confirmation — bump `verified` to true
 * once he validates each one.
 */
export const stats = {
  housesBought: { value: 100, verified: false },
  yearsInBusiness: { value: 6, sinceYear: 2018, verified: false },
  averageDaysToClose: { value: 7, verified: false },
  googleReviews: { count: 40, averageStars: 5, verified: false },
  bbbAccredited: { value: false, rating: "A+", verified: false },
} as const
