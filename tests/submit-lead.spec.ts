import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"

// Mock external modules before importing the action
vi.mock("@/lib/turnstile", () => ({
  verifyTurnstileToken: vi.fn(),
}))
vi.mock("@/lib/crm", () => ({
  postLeadToCrm: vi.fn(),
}))
vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn(),
  captureMessage: vi.fn(),
}))

import { verifyTurnstileToken } from "@/lib/turnstile"
import { postLeadToCrm } from "@/lib/crm"
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
      turnstile_token: "bad",
    })
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toBe("bot_check_failed")
    expect(postLeadToCrm).not.toHaveBeenCalled()
  })

  it("rejects when schema fails", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(true)
    const res = await submitLead({
      property_address: "", // fails min length
      turnstile_token: "t",
    })
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toBe("validation_failed")
  })

  it("posts to CRM when Turnstile + schema pass", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(true)
    vi.mocked(postLeadToCrm).mockResolvedValue({
      ok: true,
      leadId: "lead-42",
      attempts: 1,
    })
    const res = await submitLead({
      property_address: "123 Main St, KC",
      first_name: "Jane",
      phone: "(816) 555-1234",
      email: "JANE@EXAMPLE.COM",
      turnstile_token: "valid",
    })
    expect(res.ok).toBe(true)
    if (res.ok) expect(res.leadId).toBe("lead-42")
    const call = vi.mocked(postLeadToCrm).mock.calls[0]!
    expect(call[0].source).toBe("website")
    expect(call[0].phone).toBe("+18165551234")
    expect(call[0].email).toBe("jane@example.com")
  })

  it("returns ok + paging Sentry when CRM fails", async () => {
    vi.mocked(verifyTurnstileToken).mockResolvedValue(true)
    vi.mocked(postLeadToCrm).mockResolvedValue({
      ok: false,
      status: 503,
      error: "service unavailable",
      attempts: 3,
    })
    const res = await submitLead({
      property_address: "123 Main St",
      first_name: "Jane",
      phone: "8165551234",
      turnstile_token: "valid",
    })
    // From the USER's perspective: success — we captured the intent
    expect(res.ok).toBe(true)
    // But Sentry got paged with the full payload
    expect(Sentry.captureMessage).toHaveBeenCalled()
    const sentryCall = vi.mocked(Sentry.captureMessage).mock.calls[0]!
    expect(sentryCall[0]).toMatch(/CRM unavailable/i)
  })
})
