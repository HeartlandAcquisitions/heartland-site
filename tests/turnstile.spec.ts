import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { verifyTurnstileToken } from "@/lib/turnstile"

describe("verifyTurnstileToken", () => {
  const originalFetch = global.fetch
  beforeEach(() => {
    process.env.TURNSTILE_SECRET_KEY = "test-secret"
  })
  afterEach(() => {
    global.fetch = originalFetch
  })

  it("returns true for a success response", async () => {
    global.fetch = vi.fn(
      async () =>
        new Response(JSON.stringify({ success: true }), { status: 200 }),
    ) as unknown as typeof fetch
    expect(await verifyTurnstileToken("t-123")).toBe(true)
  })

  it("returns false for a failure response", async () => {
    global.fetch = vi.fn(
      async () =>
        new Response(
          JSON.stringify({ success: false, "error-codes": ["invalid-input-response"] }),
          { status: 200 },
        ),
    ) as unknown as typeof fetch
    expect(await verifyTurnstileToken("bad")).toBe(false)
  })

  it("returns false when fetch throws", async () => {
    global.fetch = vi.fn(async () => {
      throw new Error("network")
    }) as unknown as typeof fetch
    expect(await verifyTurnstileToken("t-123")).toBe(false)
  })

  it("returns false when token empty", async () => {
    expect(await verifyTurnstileToken("")).toBe(false)
  })
})
