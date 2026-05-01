import { expect, test } from "@playwright/test"

test.use({ viewport: { width: 390, height: 844 } })

test("mobile sticky call bar visible on homepage", async ({ page }) => {
  await page.goto("/")
  const bar = page.locator(".md\\:hidden.fixed.bottom-0")
  await expect(bar).toBeVisible()
  await expect(bar.getByRole("link", { name: /Call Now/i })).toBeVisible()
  await expect(bar.getByRole("link", { name: /Get My Offer/i })).toBeVisible()
})

test("mobile sticky call bar phone link uses tel:", async ({ page }) => {
  await page.goto("/")
  const callBtn = page.locator(".md\\:hidden.fixed.bottom-0").getByRole("link", { name: /Call Now/i })
  await expect(callBtn).toHaveAttribute("href", "tel:+18169735420")
})
