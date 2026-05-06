import { expect, test } from "@playwright/test"

test("homepage hero shows H1 + 3 promises + glass form", async ({ page }) => {
  await page.goto("/")

  // H1 + tagline
  await expect(
    page.getByRole("heading", { name: /Sell your home on your terms/i, level: 1 }),
  ).toBeVisible()

  // The 3 locked promises
  await expect(page.getByText(/Close on your timeline/i)).toBeVisible()
  await expect(page.getByText(/Zero Fees, Zero Commissions/i)).toBeVisible()
  await expect(page.getByText(/Any Condition, Any Situation/i)).toBeVisible()

  // The form lives in the hero — address placeholder is visible immediately, no scroll
  await expect(page.getByPlaceholder(/Kansas City, MO/i)).toBeVisible()
})

test("homepage no longer renders the old stats trio or fake testimonials", async ({ page }) => {
  await page.goto("/")

  // Old CTA button is gone (form replaced it)
  await expect(page.getByRole("link", { name: /Get Your Offer in 24 Hours/i })).toHaveCount(0)

  // Old stat labels are gone
  await expect(page.getByText(/Day Closings/i)).toHaveCount(0)
  await expect(page.getByText(/5-Star Reviews/i)).toHaveCount(0)

  // No trust-band testimonial blockquotes on the homepage
  await expect(page.locator("blockquote")).toHaveCount(0)
})
