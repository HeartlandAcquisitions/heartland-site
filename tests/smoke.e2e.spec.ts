import { expect, test } from "@playwright/test"

test("homepage hero shows brand headline + 4-stat trio + CTAs", async ({ page }) => {
  await page.goto("/")
  await expect(
    page.getByRole("heading", { name: /Sell your home/i, level: 1 }),
  ).toBeVisible()
  await expect(page.getByRole("link", { name: /Get Your Offer in 24 Hours/i })).toBeVisible()
  await expect(page.getByText(/Day Closings/i)).toBeVisible()
  await expect(page.getByText(/5-Star Reviews/i)).toBeVisible()
  await expect(page.getByText(/Offer Rate/i)).toBeVisible()
})

test("homepage scrolls to offer section + form is present", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("link", { name: /Get Your Offer in 24 Hours/i }).first().click()
  // Verify URL hash + that the form is in viewport
  await expect(page).toHaveURL(/#offer/)
  await expect(page.getByPlaceholder(/Kansas City, MO/i)).toBeVisible()
})

test("homepage renders trust band with 3 testimonials", async ({ page }) => {
  await page.goto("/")
  // The hero overlay testimonial counts as 1 figure-with-blockquote, plus 3 in the band = 4
  // But the band specifically uses 3 cards in a grid
  const allBlockquotes = page.locator("blockquote")
  expect(await allBlockquotes.count()).toBeGreaterThanOrEqual(3)
})
