import { expect, test } from "@playwright/test"

test("homepage renders with headline and placeholder button", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { name: "Heartland Acquisitions" })).toBeVisible()
  await expect(page.getByText("Site rebuild in progress.")).toBeVisible()
  await expect(page.getByRole("button", { name: "Placeholder" })).toBeVisible()
})
