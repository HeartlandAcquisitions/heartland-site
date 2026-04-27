import { describe, expect, it } from "vitest"
import { leadInputSchema, normalizeLeadInput } from "@/lib/lead-schema"

describe("leadInputSchema", () => {
  it("accepts a minimal valid input", () => {
    const r = leadInputSchema.safeParse({
      property_address: "123 Main St, Kansas City MO 64108",
      phone: "+18165551234",
    })
    expect(r.success).toBe(true)
  })

  it("rejects empty property_address", () => {
    const r = leadInputSchema.safeParse({
      property_address: "",
      phone: "+18165551234",
    })
    expect(r.success).toBe(false)
  })

  it("rejects invalid email", () => {
    const r = leadInputSchema.safeParse({
      property_address: "123 Main St",
      phone: "+18165551234",
      email: "not-an-email",
    })
    expect(r.success).toBe(false)
  })

  it("accepts valid email + phone", () => {
    const r = leadInputSchema.safeParse({
      property_address: "123 Main St",
      first_name: "Jane",
      email: "jane@example.com",
      phone: "8165551234",
    })
    expect(r.success).toBe(true)
  })

  it("accepts valid input with last_name", () => {
    const r = leadInputSchema.safeParse({
      property_address: "123 Main St",
      phone: "+18165551234",
      first_name: "Jane",
      last_name: "Doe",
    })
    expect(r.success).toBe(true)
  })

  it("rejects missing phone", () => {
    const r = leadInputSchema.safeParse({
      property_address: "123 Main St",
      first_name: "Jane",
    })
    expect(r.success).toBe(false)
  })
})

describe("normalizeLeadInput", () => {
  it("normalizes phone to E.164 (+1 prefix for 10-digit US)", () => {
    const out = normalizeLeadInput({
      property_address: "123 Main St",
      phone: "(816) 555-1234",
    })
    expect(out.phone).toBe("+18165551234")
  })

  it("strips non-digits from phone", () => {
    const out = normalizeLeadInput({
      property_address: "123 Main St",
      phone: "816.555.1234",
    })
    expect(out.phone).toBe("+18165551234")
  })

  it("preserves E.164 input", () => {
    const out = normalizeLeadInput({
      property_address: "123 Main St",
      phone: "+18165551234",
    })
    expect(out.phone).toBe("+18165551234")
  })

  it("lowercases email", () => {
    const out = normalizeLeadInput({
      property_address: "123 Main St",
      email: "JANE@EXAMPLE.COM",
    })
    expect(out.email).toBe("jane@example.com")
  })
})
