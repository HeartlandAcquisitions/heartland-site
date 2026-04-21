const VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify"

export async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!token) return false
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    // Fail closed when not configured.
    return false
  }
  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    })
    const json = (await res.json()) as { success?: boolean }
    return json.success === true
  } catch {
    return false
  }
}
