import { expect, test } from "@playwright/test"

test("homepage renders hero + lead form, step 2 includes last name + required phone", async ({ page }) => {
  await page.goto("/")

  // Hero + step 1 (address)
  await expect(
    page.getByRole("heading", { name: /Sell your Kansas City house fast/i }),
  ).toBeVisible()
  await expect(page.getByPlaceholder(/Kansas City, MO/i)).toBeVisible()
  await expect(page.getByRole("button", { name: "Get My Offer" })).toBeVisible()

  // Progress to step 2 and verify the new fields
  await page.getByPlaceholder(/Kansas City, MO/i).fill("123 Main St, Kansas City, MO")
  await page.getByRole("button", { name: "Get My Offer" }).click()

  await expect(page.getByPlaceholder(/First name \(optional\)/i)).toBeVisible()
  await expect(page.getByPlaceholder(/Last name \(optional\)/i)).toBeVisible()
  await expect(page.getByPlaceholder(/Phone \(required\)/i)).toBeVisible()
})
