import { expect, test } from "@playwright/test"

test("footer shows NAP (name, address, phone)", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByText("2107 Grand Boulevard")).toBeVisible()
  await expect(page.getByText(/Kansas City, MO 64108/)).toBeVisible()
  const phone = page.getByRole("contentinfo").getByRole("link", { name: /\(816\) 973-5420/ })
  await expect(phone).toBeVisible()
})

test("footer has legal links and vertical pages", async ({ page }) => {
  await page.goto("/")
  const footer = page.getByRole("contentinfo")
  await expect(footer.getByRole("link", { name: "Privacy Policy" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Terms of Service" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Divorce" })).toBeVisible()
  await expect(footer.getByRole("link", { name: "Foreclosure" })).toBeVisible()
})
