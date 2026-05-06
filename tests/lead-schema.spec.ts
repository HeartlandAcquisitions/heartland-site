import { describe, expect, it } from "vitest"
import { leadInputSchema, normalizeLeadInput, type LeadInput } from "@/lib/lead-schema"

const validLead: LeadInput = {
  property_address: "123 Main St, Kansas City MO 64108",
  phone: "+18165551234",
  first_name: "Jane",
  last_name: "Doe",
}

describe("leadInputSchema", () => {
  it("accepts a minimal valid input", () => {
    const r = leadInputSchema.safeParse(validLead)
    expect(r.success).toBe(true)
  })

  it("rejects empty property_address", () => {
    const r = leadInputSchema.safeParse({ ...validLead, property_address: "" })
    expect(r.success).toBe(false)
  })

  it("rejects invalid email", () => {
    const r = leadInputSchema.safeParse({ ...validLead, email: "not-an-email" })
    expect(r.success).toBe(false)
  })

  it("accepts valid email + phone", () => {
    const r = leadInputSchema.safeParse({
      ...validLead,
      email: "jane@example.com",
      phone: "8165551234",
    })
    expect(r.success).toBe(true)
  })

  it("rejects missing phone", () => {
    const { phone: _omitPhone, ...rest } = validLead
    void _omitPhone
    const r = leadInputSchema.safeParse(rest)
    expect(r.success).toBe(false)
  })

  it("rejects missing first_name", () => {
    const { first_name: _omit, ...rest } = validLead
    void _omit
    const r = leadInputSchema.safeParse(rest)
    expect(r.success).toBe(false)
  })

  it("rejects missing last_name", () => {
    const { last_name: _omit, ...rest } = validLead
    void _omit
    const r = leadInputSchema.safeParse(rest)
    expect(r.success).toBe(false)
  })

  it("rejects empty first_name", () => {
    const r = leadInputSchema.safeParse({ ...validLead, first_name: "   " })
    expect(r.success).toBe(false)
  })
})

describe("normalizeLeadInput", () => {
  it("normalizes phone to E.164 (+1 prefix for 10-digit US)", () => {
    const out = normalizeLeadInput({ ...validLead, phone: "(816) 555-1234" })
    expect(out.phone).toBe("+18165551234")
  })

  it("strips non-digits from phone", () => {
    const out = normalizeLeadInput({ ...validLead, phone: "816.555.1234" })
    expect(out.phone).toBe("+18165551234")
  })

  it("preserves E.164 input", () => {
    const out = normalizeLeadInput(validLead)
    expect(out.phone).toBe("+18165551234")
  })

  it("lowercases email", () => {
    const out = normalizeLeadInput({ ...validLead, email: "JANE@EXAMPLE.COM" })
    expect(out.email).toBe("jane@example.com")
  })
})
