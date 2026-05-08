import { expect, test } from "@playwright/test"

test("footer displays brand mark and company description", async ({ page }) => {
  await page.goto("/")
  const footer = page.getByRole("contentinfo")
  await expect(footer.locator("text=Heartland Acquisitions").first()).toBeVisible()
  await expect(footer.getByText(/A family-owned home-buying company serving/)).toBeVisible()
})

test("footer has company nav, situations, and cities sections with real links", async ({ page }) => {
  await page.goto("/")
  const footer = page.getByRole("contentinfo")
  await expect(footer.getByRole("heading", { name: "Company" })).toBeVisible()
  await expect(footer.getByRole("heading", { name: "Situations" })).toBeVisible()
  await expect(footer.getByRole("heading", { name: "Cities" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Our process" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Why us" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Reviews" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Blog" })).toBeVisible()
  // Situation links
  await expect(footer.getByRole("link", { name: /FORECLOSURE/i })).toBeVisible()
  await expect(footer.getByRole("link", { name: /INHERITED/i })).toBeVisible()
  // City links (real, navigable)
  await expect(footer.getByRole("link", { name: /Kansas City, MO/ })).toBeVisible()
  await expect(footer.getByRole("link", { name: /Overland Park, KS/ })).toBeVisible()
})

test("footer displays contact info and legal text", async ({ page }) => {
  await page.goto("/")
  const footer = page.getByRole("contentinfo")
  const phone = footer.getByRole("link", { name: /\(816\) 973-5420/ })
  await expect(phone).toBeVisible()
  await expect(footer.getByText("hello@heartlandacq.com")).toBeVisible()
  await expect(footer.getByText(/© 2026 Ivarix Capital LLC DBA Heartland Acquisitions/)).toBeVisible()
})
