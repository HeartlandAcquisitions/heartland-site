import { expect, test } from "@playwright/test"

test("GA4 loads on homepage", async ({ page }) => {
  const requests: string[] = []
  page.on("request", (req) => requests.push(req.url()))
  await page.goto("/")
  await page.waitForLoadState("networkidle")
  await page.waitForTimeout(2000)
  const ga = requests.find(
    (u) =>
      u.includes("googletagmanager.com/gtag/js") ||
      u.includes("google-analytics.com")
  )
  expect(
    ga,
    `Expected a GA4/GTM request. Observed: ${requests.slice(0, 20).join("\n")}`
  ).toBeTruthy()
})

test("Meta Pixel loads on homepage", async ({ page }) => {
  const requests: string[] = []
  page.on("request", (req) => requests.push(req.url()))
  await page.goto("/")
  await page.waitForLoadState("networkidle")
  await page.waitForTimeout(2000)
  const fb = requests.find(
    (u) => u.includes("connect.facebook.net") || u.includes("facebook.com/tr")
  )
  expect(fb, "Expected Meta Pixel request").toBeTruthy()
})
