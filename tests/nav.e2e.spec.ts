import { expect, test } from "@playwright/test"

test("nav shows logo + brand wordmark + phone CTA on homepage", async ({ page }) => {
  await page.goto("/")
  const header = page.getByRole("banner")
  await expect(header.getByRole("link", { name: /Heartland Acquisitions/i })).toBeVisible()
  await expect(header.getByRole("link", { name: /\(816\) 973-5420/ })).toBeVisible()
})

test("nav phone link uses tel: protocol", async ({ page }) => {
  await page.goto("/")
  const header = page.getByRole("banner")
  const phone = header.getByRole("link", { name: /\(816\) 973-5420/ })
  await expect(phone).toHaveAttribute("href", "tel:+18169735420")
})

test("nav exposes Process / Why Us / Reviews / FAQ / Blog", async ({ page }) => {
  await page.goto("/")
  for (const label of ["Process", "Why Us", "Reviews", "FAQ", "Blog"]) {
    await expect(page.getByRole("link", { name: new RegExp(label, "i") }).first()).toBeVisible()
  }
})
