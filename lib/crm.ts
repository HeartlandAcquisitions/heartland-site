export interface CrmLeadPayload {
  source: string
  source_detail?: string
  first_name?: string
  last_name?: string
  phone?: string
  phone_secondary?: string
  email?: string
  property_address?: string
  city?: string
  state?: string
  zip?: string
  motivation_type?: string
  motivation_score?: number
  distress_signals?: Record<string, unknown>
  property_data?: Record<string, unknown>
  notes?: string
}

export type CrmPostResult =
  | { ok: true; leadId: string; attempts: number }
  | { ok: false; status: number; error: string; attempts: number }

interface PostOptions {
  maxAttempts?: number
  backoffMs?: number
  signal?: AbortSignal
}

export async function postLeadToCrm(
  payload: CrmLeadPayload,
  options: PostOptions = {},
): Promise<CrmPostResult> {
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
        const body = (await res.json()) as { id?: string }
        return { ok: true, leadId: body.id ?? "unknown", attempts: attempt }
      }

      lastStatus = res.status
      lastError = await safeText(res)

      // 4xx = client error; don't retry
      if (res.status >= 400 && res.status < 500) {
        return { ok: false, status: res.status, error: lastError, attempts: attempt }
      }

      // 5xx — retry with exponential backoff
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
