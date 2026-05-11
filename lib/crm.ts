/**
 * Posts to Roman CRM's /api/v1/intake/ endpoint, which creates a Lead row
 * (not Contact + Property + Deal — those are created later by Chase clicking
 * "Create Deal" in the CRM Leads tab, which calls /api/v1/leads/{id}/promote).
 *
 * Why Lead-first: Chase qualifies leads via phone before they enter the
 * deal pipeline. Auto-promoting every form submission to a Deal polluted
 * the pipeline with junk that had to be manually closed.
 */

export interface IntakePayload {
  phone: string
  property_address: string
  first_name: string
  last_name: string
  email?: string
  source_detail?: string
  // Free-text notes appended on the CRM side. Used to carry agent-submission
  // metadata (brokerage, asking price, condition) while the CRM Lead model
  // doesn't have structured agent fields yet.
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
}

export type IntakeResult =
  | {
      ok: true
      leadId: string
      status: string
      attempts: number
    }
  | { ok: false; status: number; error: string; attempts: number }

interface PostOptions {
  maxAttempts?: number
  backoffMs?: number
  signal?: AbortSignal
}

export async function postIntakeToCrm(
  payload: IntakePayload,
  options: PostOptions = {},
): Promise<IntakeResult> {
  const { maxAttempts = 3, backoffMs = 500 } = options
  const url = process.env.CRM_API_URL
  const apiKey = process.env.CRM_API_KEY
  if (!url || !apiKey) {
    return { ok: false, status: 0, error: "CRM env vars missing", attempts: 0 }
  }

  let lastStatus = 0
  let lastError = ""
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify(payload),
        signal: options.signal,
      })

      if (res.ok) {
        const body = (await res.json()) as {
          lead_id?: string
          status?: string
        }
        return {
          ok: true,
          leadId: body.lead_id ?? "unknown",
          status: body.status ?? "new",
          attempts: attempt,
        }
      }

      lastStatus = res.status
      lastError = await safeText(res)

      if (res.status >= 400 && res.status < 500) {
        return { ok: false, status: res.status, error: lastError, attempts: attempt }
      }

      if (attempt < maxAttempts) {
        await sleep(backoffMs * Math.pow(2, attempt - 1))
      }
    } catch (err) {
      lastStatus = 0
      lastError = err instanceof Error ? err.message : String(err)
      if (attempt < maxAttempts) {
        await sleep(backoffMs * Math.pow(2, attempt - 1))
      }
    }
  }

  return {
    ok: false,
    status: lastStatus,
    error: lastError || "unknown error",
    attempts: maxAttempts,
  }
}

async function safeText(res: Response): Promise<string> {
  try {
    return await res.text()
  } catch {
    return ""
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
