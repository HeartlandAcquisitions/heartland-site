import { z } from "zod"

// Email allows empty string → undefined.
const optionalEmail = z
  .string()
  .trim()
  .transform((v) => (v === "" ? undefined : v))
  .pipe(z.union([z.string().email(), z.undefined()]))

export const leadInputSchema = z.object({
  property_address: z.string().trim().min(4, "Please enter an address"),
  phone: z.string().trim().min(7, "Phone is required"),
  first_name: z.string().trim().min(1, "First name is required"),
  last_name: z.string().trim().min(1, "Last name is required"),
  email: optionalEmail.optional(),
  motivation_type: z.string().optional(),
  source_detail: z.string().optional(),
  notes: z.string().optional(),
  // Attribution context (kept in schema for client-side analytics; NOT forwarded to CRM for v1)
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  referrer: z.string().optional(),
  landing_page: z.string().optional(),
  session_id: z.string().optional(),
  device: z.string().optional(),
  turnstile_token: z.string().min(1, "Please complete the challenge").optional(),
})

export type LeadInput = z.infer<typeof leadInputSchema>

function toE164(raw: string | undefined): string | undefined {
  if (!raw) return undefined
  const digits = raw.replace(/\D/g, "")
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`
  if (raw.startsWith("+")) return raw
  return `+${digits}`
}

export function normalizeLeadInput(input: LeadInput): LeadInput {
  return {
    ...input,
    phone: toE164(input.phone) ?? input.phone,
    email: input.email?.toLowerCase(),
  }
}
