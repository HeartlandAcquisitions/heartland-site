"use server"

import * as Sentry from "@sentry/nextjs"
import { leadInputSchema, normalizeLeadInput } from "@/lib/lead-schema"
import { verifyTurnstileToken } from "@/lib/turnstile"
import { postIntakeToCrm, type IntakePayload } from "@/lib/crm"

export type SubmitLeadInput = {
  property_address: string
  phone: string
  first_name: string
  last_name: string
  email?: string
  motivation_type?: string
  source_detail?: string
  notes?: string
  // Agent submission metadata. Composed into the CRM `notes` field server-side.
  brokerage?: string
  asking_price?: string
  condition_notes?: string
  agent_email?: string
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

// Compose the agent metadata into a single free-text notes block for the CRM.
// Returns undefined if no agent fields are present so we don't send empty
// notes on the off chance the CRM serializer is strict about empty strings.
function composeAgentNotes(input: {
  brokerage?: string
  asking_price?: string
  condition_notes?: string
  agent_email?: string
  notes?: string
}): string | undefined {
  const lines: string[] = []
  if (input.brokerage) lines.push(`Brokerage: ${input.brokerage}`)
  if (input.asking_price) lines.push(`Asking: ${input.asking_price}`)
  if (input.agent_email) lines.push(`Agent email: ${input.agent_email}`)
  if (input.condition_notes) lines.push(`Condition: ${input.condition_notes}`)
  if (input.notes) lines.push(input.notes)
  return lines.length > 0 ? lines.join("\n") : undefined
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
  // 1) Turnstile gate
  const captchaOk = await verifyTurnstileToken(input.turnstile_token)
  if (!captchaOk) {
    return { ok: false, reason: "bot_check_failed" }
  }

  // 2) Zod validation (phone required, property_address required)
  const parsed = leadInputSchema.safeParse(input)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form"
      errors[key] = issue.message
    }
    return { ok: false, reason: "validation_failed", errors }
  }

  // 3) Normalize (phone → E.164, email → lowercase)
  const normalized = normalizeLeadInput(parsed.data)

  // 4) Build CRM payload. Attribution flows through to Lead.attribution JSONB
  //    on the CRM side (Lead-first workflow — see lib/crm.ts).
  //    Agent meta (brokerage, asking_price, condition_notes, agent_email) is
  //    composed into the `notes` string since the CRM Lead model doesn't have
  //    structured agent fields yet. Tracked as follow-up in the pivot plan.
  const notes = composeAgentNotes({
    brokerage: normalized.brokerage,
    asking_price: normalized.asking_price,
    condition_notes: normalized.condition_notes,
    agent_email: normalized.agent_email,
    notes: normalized.notes,
  })

  const payload: IntakePayload = {
    phone: normalized.phone!,
    property_address: normalized.property_address,
    first_name: normalized.first_name,
    last_name: normalized.last_name,
    email: normalized.email,
    source_detail: normalized.source_detail ?? "agent_submission",
    notes,
    utm_source: normalized.utm_source,
    utm_medium: normalized.utm_medium,
    utm_campaign: normalized.utm_campaign,
    utm_content: normalized.utm_content,
    utm_term: normalized.utm_term,
    referrer: normalized.referrer,
    landing_page: normalized.landing_page,
    session_id: normalized.session_id,
    device: normalized.device,
  }

  // 5) POST to /api/v1/intake/ with retry
  const result = await postIntakeToCrm(payload)

  if (!result.ok) {
    // CRM unreachable — capture full payload + attribution for manual recovery
    Sentry.captureMessage(
      `CRM unavailable — lead captured in Sentry for manual recovery (status=${result.status}, attempts=${result.attempts})`,
      {
        level: "error",
        extra: {
          payload,
          attribution: {
            utm_source: normalized.utm_source,
            utm_medium: normalized.utm_medium,
            utm_campaign: normalized.utm_campaign,
            utm_content: normalized.utm_content,
            utm_term: normalized.utm_term,
            referrer: normalized.referrer,
            landing_page: normalized.landing_page,
            device: normalized.device,
          },
          error: result.error,
        },
      },
    )
    return { ok: true, leadId: "pending-recovery" }
  }

  return { ok: true, leadId: result.leadId }
}
