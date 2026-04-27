export interface IntakePayload {
  phone: string
  property_address: string
  first_name?: string
  last_name?: string
  email?: string
}

export type IntakeResult =
  | {
      ok: true
      dealId: string
      contactId: string
      propertyId: string
      contactCreated: boolean
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
          deal_id?: string
          contact_id?: string
          property_id?: string
          contact_created?: boolean
        }
        return {
          ok: true,
          dealId: body.deal_id ?? "unknown",
          contactId: body.contact_id ?? "unknown",
          propertyId: body.property_id ?? "unknown",
          contactCreated: body.contact_created ?? false,
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
