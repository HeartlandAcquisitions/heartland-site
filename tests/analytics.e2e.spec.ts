import { expect, test } from "@playwright/test"

// networkidle is unreliable on pages where Turnstile keeps a persistent
// background connection. Wait for the specific analytics request instead.

test("GA4 loads on homepage", async ({ page }) => {
  const ga4 = page.waitForRequest(
    (req) =>
      req.url().includes("googletagmanager.com/gtag/js") ||
      req.url().includes("google-analytics.com"),
    { timeout: 15_000 },
  )
  await page.goto("/")
  const req = await ga4
  expect(req).toBeTruthy()
})

test("Meta Pixel loads on homepage", async ({ page }) => {
  const fb = page.waitForRequest(
    (req) =>
      req.url().includes("connect.facebook.net") ||
      req.url().includes("facebook.com/tr"),
    { timeout: 15_000 },
  )
  await page.goto("/")
  const req = await fb
  expect(req).toBeTruthy()
})
