import { expect, test } from "@playwright/test"

test("homepage hero shows H1 + 4 stat pills + offer card form", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", { name: /Sell your home on your terms/i, level: 1 }),
  ).toBeVisible()

  // The 4 stat pills — scoped to hero section to avoid collision with Marquee duplicates
  const hero = page.locator("#offer")
  await expect(hero.getByText(/^No Fees$/i)).toBeVisible()
  await expect(hero.getByText(/^No Commissions$/i)).toBeVisible()
  await expect(hero.getByText(/^No Repairs$/i)).toBeVisible()
  await expect(hero.getByText(/^No Closing Costs$/i)).toBeVisible()

  // Offer card on the right — scoped to hero section
  await expect(hero.getByText(/Cash Offer Today/i)).toBeVisible()
  await expect(hero.getByText(/Property Address/i).first()).toBeVisible()
  await expect(hero.getByPlaceholder(/Kansas City, MO/i)).toBeVisible()
  await expect(hero.getByText(/Call or text/i)).toBeVisible()
})

test("homepage no longer renders prior glass-hero promises or fake testimonials", async ({ page }) => {
  await page.goto("/")

  // Old glass-hero promises copy is gone
  await expect(page.getByText(/Close on your timeline/i)).toHaveCount(0)
  await expect(page.getByText(/Zero Fees, Zero Commissions/i)).toHaveCount(0)

  // No fake-testimonial blockquotes on the homepage
  await expect(page.locator("blockquote")).toHaveCount(0)
})

test("homepage renders Process / Why Us / FAQ / CTA sections", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByRole("heading", { name: /Three steps\.\s*That's it\./i, level: 2 })).toBeVisible()
  await expect(page.getByRole("heading", { name: /Why us instead/i, level: 2 })).toBeVisible()
  await expect(page.getByRole("heading", { name: /Things people\s*actually ask\./i, level: 2 })).toBeVisible()
  await expect(page.getByRole("heading", { name: /Ready when\s*you are\./i, level: 2 })).toBeVisible()
})
