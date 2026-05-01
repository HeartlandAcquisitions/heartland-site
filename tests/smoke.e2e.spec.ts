import { expect, test } from "@playwright/test"

test("homepage hero shows brand headline + form + stats trio", async ({ page }) => {
  await page.goto("/")
  await expect(
    page.getByRole("heading", { name: /Sell your Kansas City house for cash/i, level: 1 }),
  ).toBeVisible()
  await expect(page.getByPlaceholder(/Kansas City, MO/i)).toBeVisible()
  await expect(page.getByRole("button", { name: "Get My Offer" })).toBeVisible()
  await expect(page.locator("dl dt").filter({ hasText: "7 day" })).toBeVisible()
  await expect(page.locator("dl dt").filter({ hasText: "$0" })).toBeVisible()
  await expect(page.locator("dl dt").filter({ hasText: "100%" })).toBeVisible()
})

test("homepage trust band shows 3 testimonials", async ({ page }) => {
  await page.goto("/")
  const quotes = page.locator("figure blockquote")
  await expect(quotes).toHaveCount(3)
})
