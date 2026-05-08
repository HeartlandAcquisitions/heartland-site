import { describe, expect, it, vi, beforeEach } from "vitest"

// Mock external modules before importing the action
vi.mock("@/lib/turnstile", () => ({
  verifyTurnstileToken: vi.fn(),
}))
vi.mock("@/lib/crm", () => ({
  postIntakeToCrm: vi.fn(),
}))
vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn(),
  captureMessage: vi.fn(),
}))

import { verifyTurnstileToken } from "@/lib/turnstile"
import { postIntakeToCrm } from "@/lib/crm"
import * as Sentry from "@sentry/nextjs"
import { submitLead } from "@/app/actions/submit-lead"

describe("submitLead server action", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it("rejects when Turnstile fails", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(false)
    const res = await submitLead({
      property_address: "123 Main St",
      first_name: "Jane",
      last_name: "Doe",
      phone: "+18165551234",
      turnstile_token: "bad",
    })
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toBe("bot_check_failed")
    expect(postIntakeToCrm).not.toHaveBeenCalled()
  })

  it("rejects when schema fails (missing required phone)", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(true)
    const res = await submitLead({
      property_address: "123 Main St",
      first_name: "Jane",
      last_name: "Doe",
      // phone deliberately missing — schema now requires it
      // @ts-expect-error — testing runtime validation, not TS shape
      phone: undefined,
      turnstile_token: "t",
    })
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toBe("validation_failed")
  })

  it("posts intake payload with normalized phone, lowercased email, and full attribution context", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(true)
    vi.mocked(postIntakeToCrm).mockResolvedValue({
      ok: true,
      leadId: "lead-42",
      status: "new",
      attempts: 1,
    })
    const res = await submitLead({
      property_address: "123 Main St, KC",
      first_name: "Jane",
      last_name: "Doe",
      phone: "(816) 555-1234",
      email: "JANE@EXAMPLE.COM",
      utm_source: "google",
      utm_campaign: "kc-cash",
      referrer: "https://google.com",
      turnstile_token: "valid",
    })
    expect(res.ok).toBe(true)
    if (res.ok) expect(res.leadId).toBe("lead-42")

    const call = vi.mocked(postIntakeToCrm).mock.calls[0]!
    expect(call[0].phone).toBe("+18165551234")
    expect(call[0].email).toBe("jane@example.com")
    expect(call[0].first_name).toBe("Jane")
    expect(call[0].last_name).toBe("Doe")
    expect(call[0].property_address).toBe("123 Main St, KC")

    // Attribution fields ARE now passed through to the CRM (Lead-first workflow)
    expect(call[0].utm_source).toBe("google")
    expect(call[0].utm_campaign).toBe("kc-cash")
    expect(call[0].referrer).toBe("https://google.com")
  })

  it("returns ok + paging Sentry when CRM fails (preserves attribution in Sentry extras)", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(true)
    vi.mocked(postIntakeToCrm).mockResolvedValue({
      ok: false,
      status: 503,
      error: "service unavailable",
      attempts: 3,
    })
    const res = await submitLead({
      property_address: "123 Main St",
      first_name: "Jane",
      last_name: "Doe",
      phone: "8165551234",
      utm_source: "fb",
      turnstile_token: "valid",
    })
    expect(res.ok).toBe(true)
    expect(Sentry.captureMessage).toHaveBeenCalled()
    const sentryCall = vi.mocked(Sentry.captureMessage).mock.calls[0]!
    expect(sentryCall[0]).toMatch(/CRM unavailable/i)
    // Attribution preserved in Sentry extra block for manual recovery
    const extras = (sentryCall[1] as { extra?: { attribution?: { utm_source?: string } } } | undefined)?.extra
    expect(extras?.attribution?.utm_source).toBe("fb")
  })
})
