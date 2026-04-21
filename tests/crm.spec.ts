import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { postLeadToCrm } from "@/lib/crm"

describe("postLeadToCrm", () => {
  const originalFetch = global.fetch
  beforeEach(() => {
    process.env.CRM_API_URL = "https://heartlandboys.com/api/v1/leads/"
    process.env.CRM_API_KEY = "test-api-key"
  })
  afterEach(() => {
    global.fetch = originalFetch
    vi.useRealTimers()
  })

  it("POSTs with X-API-Key header and expected body shape", async () => {
    const calls: Array<{ url: string; init: RequestInit }> = []
    global.fetch = vi.fn(async (url, init) => {
      calls.push({ url: String(url), init: init as RequestInit })
      return new Response(JSON.stringify({ id: "lead-1" }), { status: 201 })
    }) as unknown as typeof fetch

    const result = await postLeadToCrm({
      source: "website",
      source_detail: "divorce-page",
      first_name: "Jane",
      phone: "+18165551234",
      email: "jane@example.com",
      property_address: "123 Main St",
      property_data: { utm_source: "google" },
    })

    expect(result.ok).toBe(true)
    expect(calls).toHaveLength(1)
    const call = calls[0]!
    expect(call.url).toBe("https://heartlandboys.com/api/v1/leads/")
    expect((call.init.headers as Record<string, string>)["X-API-Key"]).toBe("test-api-key")
    const body = JSON.parse(call.init.body as string)
    expect(body.source).toBe("website")
    expect(body.source_detail).toBe("divorce-page")
    expect(body.property_data.utm_source).toBe("google")
  })

  it("retries on 5xx, succeeds on 3rd try", async () => {
    let calls = 0
    global.fetch = vi.fn(async () => {
      calls += 1
      if (calls < 3) return new Response("server err", { status: 502 })
      return new Response(JSON.stringify({ id: "ok" }), { status: 201 })
    }) as unknown as typeof fetch

    const result = await postLeadToCrm(
      { source: "website", property_address: "x" },
      { maxAttempts: 3, backoffMs: 1 },
    )
    expect(result.ok).toBe(true)
    expect(calls).toBe(3)
  })

  it("returns failure after max attempts exhausted", async () => {
    global.fetch = vi.fn(async () => new Response("down", { status: 503 })) as unknown as typeof fetch
    const result = await postLeadToCrm(
      { source: "website", property_address: "x" },
      { maxAttempts: 2, backoffMs: 1 },
    )
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.status).toBe(503)
      expect(result.attempts).toBe(2)
    }
  })

  it("does NOT retry on 4xx (bad request is final)", async () => {
    let calls = 0
    global.fetch = vi.fn(async () => {
      calls += 1
      return new Response("bad", { status: 400 })
    }) as unknown as typeof fetch
    const result = await postLeadToCrm(
      { source: "website", property_address: "x" },
      { maxAttempts: 3, backoffMs: 1 },
    )
    expect(result.ok).toBe(false)
    expect(calls).toBe(1)
  })
})
