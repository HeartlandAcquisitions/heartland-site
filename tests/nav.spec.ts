import { expect, test } from "@playwright/test"

test("nav shows logo text and phone CTA on homepage", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: "Heartland Acquisitions" })).toBeVisible()
  await expect(page.getByRole("link", { name: /Call/i })).toBeVisible()
})

test("nav phone link uses tel: protocol", async ({ page }) => {
  await page.goto("/")
  const phoneLink = page.getByRole("link", { name: /Call/i })
  const href = await phoneLink.getAttribute("href")
  expect(href).toMatch(/^tel:\+1/)
})

test("nav exposes links to nav pages", async ({ page }) => {
  await page.goto("/")
  const howItWorks = page.getByRole("link", { name: "How It Works" }).first()
  await expect(howItWorks).toBeAttached()
})
