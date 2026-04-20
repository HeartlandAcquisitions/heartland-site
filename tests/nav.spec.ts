import { expect, test } from "@playwright/test"

test("nav shows logo text and phone CTA on homepage", async ({ page }) => {
  await page.goto("/")
  const header = page.getByRole("banner")
  await expect(header.getByRole("link", { name: "Heartland Acquisitions" })).toBeVisible()
  await expect(header.getByRole("link", { name: /Call/i })).toBeVisible()
})

test("nav phone link uses tel: protocol", async ({ page }) => {
  await page.goto("/")
  const header = page.getByRole("banner")
  const phoneLink = header.getByRole("link", { name: /Call/i })
  const href = await phoneLink.getAttribute("href")
  expect(href).toMatch(/^tel:\+1/)
})

test("nav exposes links to nav pages", async ({ page }) => {
  await page.goto("/")
  const header = page.getByRole("banner")
  const howItWorks = header.getByRole("link", { name: "How It Works" }).first()
  await expect(howItWorks).toBeAttached()
})
