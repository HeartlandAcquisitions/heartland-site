import { defineConfig } from "@playwright/test"

// Port 3000 is often occupied on Chase's Mac by other agents; pin to a less-used port
// so dev server and Playwright always agree.
const PORT = 3099

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: `PORT=${PORT} pnpm dev`,
        port: PORT,
        reuseExistingServer: true,
        timeout: 60_000,
      },
})
