"use server"

import * as Sentry from "@sentry/nextjs"
import { leadInputSchema, normalizeLeadInput } from "@/lib/lead-schema"
import { verifyTurnstileToken } from "@/lib/turnstile"
import { postLeadToCrm, type CrmLeadPayload } from "@/lib/crm"

export type SubmitLeadInput = {
  property_address: string
  first_name?: string
  last_name?: string
  phone?: string
  email?: string
  motivation_type?: string
  source_detail?: string
  notes?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  referrer?: string
  landing_page?: string
  session_id?: string
  device?: string
  turnstile_token: string
}

export type SubmitLeadResult =
  | { ok: true; leadId: string }
  | {
      ok: false
      reason: "bot_check_failed" | "validation_failed"
      errors?: Record<string, string>
    }

export async function submitLead(
  input: SubmitLeadInput,
): Promise<SubmitLeadResult> {
  // 1) Turnstile
  const captchaOk = await verifyTurnstileToken(input.turnstile_token)
  if (!captchaOk) {
    return { ok: false, reason: "bot_check_failed" }
  }

  // 2) Schema validation
  const parsed = leadInputSchema.safeParse(input)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form"
      errors[key] = issue.message
    }
    return { ok: false, reason: "validation_failed", errors }
  }

  // 3) Normalize
  const normalized = normalizeLeadInput(parsed.data)

  // 4) Build CRM payload
  const payload: CrmLeadPayload = {
    source: "website",
    source_detail: normalized.source_detail ?? normalized.landing_page ?? "unknown",
    first_name: normalized.first_name,
    last_name: normalized.last_name,
    phone: normalized.phone,
    email: normalized.email,
    property_address: normalized.property_address,
    motivation_type: normalized.motivation_type,
    notes: normalized.notes,
    property_data: {
      utm_source: normalized.utm_source,
      utm_medium: normalized.utm_medium,
      utm_campaign: normalized.utm_campaign,
      utm_content: normalized.utm_content,
      utm_term: normalized.utm_term,
      referrer: normalized.referrer,
      landing_page: normalized.landing_page,
      session_id: normalized.session_id,
      device: normalized.device,
      submitted_at: new Date().toISOString(),
    },
  }

  // 5) POST to CRM with retry
  const result = await postLeadToCrm(payload)

  if (!result.ok) {
    // CRM unreachable — capture full payload to Sentry for manual recovery
    Sentry.captureMessage(
      `CRM unavailable — lead captured in Sentry for manual recovery (status=${result.status}, attempts=${result.attempts})`,
      {
        level: "error",
        extra: { payload, error: result.error },
      },
    )
    return { ok: true, leadId: "pending-recovery" }
  }

  return { ok: true, leadId: result.leadId }
}
