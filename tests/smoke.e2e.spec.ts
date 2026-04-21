import { expect, test } from "@playwright/test"

test("homepage renders hero + lead form", async ({ page }) => {
  await page.goto("/")
  await expect(
    page.getByRole("heading", { name: /Sell your Kansas City house fast/i }),
  ).toBeVisible()
  await expect(
    page.getByPlaceholder(/Main St/i),
  ).toBeVisible()
  await expect(page.getByRole("button", { name: "Get My Offer" })).toBeVisible()
})
