import { expect, test } from "@playwright/test"

test("footer shows NAP (name, address, phone)", async ({ page }) => {
  await page.goto("/")
  const footer = page.getByRole("contentinfo")
  await expect(footer).toBeVisible()
  await expect(footer.getByText("Heartland Acquisitions", { exact: true })).toBeVisible()
  await expect(footer.getByText(/Kansas City/)).toBeVisible()
  await expect(footer.getByRole("link", { name: /Call|\(|\d{3}/ })).toBeVisible()
})

test("footer has legal links", async ({ page }) => {
  await page.goto("/")
  const footer = page.getByRole("contentinfo")
  await expect(footer.getByRole("link", { name: "Privacy Policy" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Terms of Service" })).toBeVisible()
})
