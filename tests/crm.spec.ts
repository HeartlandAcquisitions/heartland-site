import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { postIntakeToCrm } from "@/lib/crm"

describe("postIntakeToCrm", () => {
  const originalFetch = global.fetch
  beforeEach(() => {
    process.env.CRM_API_URL = "https://heartlandboys.com/api/v1/intake/"
    process.env.CRM_API_KEY = "test-api-key"
  })
  afterEach(() => {
    global.fetch = originalFetch
    vi.useRealTimers()
  })

  it("POSTs with X-API-Key + intake payload, returns dealId/contactId/contactCreated", async () => {
    const calls: Array<{ url: string; init: RequestInit }> = []
    global.fetch = vi.fn(async (url, init) => {
      calls.push({ url: String(url), init: init as RequestInit })
      return new Response(
        JSON.stringify({
          deal_id: "deal-1",
          contact_id: "contact-1",
          property_id: "prop-1",
          contact_created: true,
          stage: "new",
        }),
        { status: 201 },
      )
    }) as unknown as typeof fetch

    const result = await postIntakeToCrm({
      phone: "+18165551234",
      property_address: "123 Main St",
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@example.com",
    })

    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.dealId).toBe("deal-1")
      expect(result.contactId).toBe("contact-1")
      expect(result.propertyId).toBe("prop-1")
      expect(result.contactCreated).toBe(true)
    }
    expect(calls).toHaveLength(1)
    const call = calls[0]!
    expect(call.url).toBe("https://heartlandboys.com/api/v1/intake/")
    expect((call.init.headers as Record<string, string>)["X-API-Key"]).toBe("test-api-key")
    const body = JSON.parse(call.init.body as string)
    expect(body.phone).toBe("+18165551234")
    expect(body.property_address).toBe("123 Main St")
    expect(body.first_name).toBe("Jane")
    expect(body.last_name).toBe("Doe")
    expect(body.email).toBe("jane@example.com")
  })

  it("retries on 5xx, succeeds on 3rd try", async () => {
    let calls = 0
    global.fetch = vi.fn(async () => {
      calls += 1
      if (calls < 3) return new Response("server err", { status: 502 })
      return new Response(
        JSON.stringify({
          deal_id: "deal-ok",
          contact_id: "c-ok",
          property_id: "p-ok",
          contact_created: false,
          stage: "new",
        }),
        { status: 201 },
      )
    }) as unknown as typeof fetch

    const result = await postIntakeToCrm(
      { phone: "+18165550000", property_address: "x" },
      { maxAttempts: 3, backoffMs: 1 },
    )
    expect(result.ok).toBe(true)
    expect(calls).toBe(3)
  })

  it("returns failure after max attempts exhausted", async () => {
    global.fetch = vi.fn(async () => new Response("down", { status: 503 })) as unknown as typeof fetch
    const result = await postIntakeToCrm(
      { phone: "+18165550000", property_address: "x" },
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
    const result = await postIntakeToCrm(
      { phone: "+18165550000", property_address: "x" },
      { maxAttempts: 3, backoffMs: 1 },
    )
    expect(result.ok).toBe(false)
    expect(calls).toBe(1)
  })
})
