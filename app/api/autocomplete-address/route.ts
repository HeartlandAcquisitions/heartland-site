/**
 * Public address autocomplete proxy.
 *
 * The browser hits this route — never the CRM directly — so the CRM's
 * X-API-Key stays server-side. The CRM endpoint at
 * /api/v1/intake/autocomplete is itself X-API-Key-gated and rate-limits
 * via a 3-character minimum on the upstream call.
 *
 * Response shape passes through whatever RealEstateAPI returns. The
 * frontend only reads `title` (display) and `address` (fill-back).
 */
import { NextRequest, NextResponse } from "next/server"

const CRM_BASE_URL =
  process.env.CRM_API_URL?.replace(/\/api\/v1\/intake\/?$/, "").replace(/\/$/, "") ??
  "https://heartlandboys.com"

const CRM_API_KEY = process.env.CRM_API_KEY

// Don't cache — query is the entire signal, and results are fresh from
// RealEstateAPI per request.
export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim()
  if (q.length < 3) return NextResponse.json([])
  if (!CRM_API_KEY) {
    return NextResponse.json(
      { error: "CRM_API_KEY not configured on the server" },
      { status: 500 },
    )
  }

  const url = `${CRM_BASE_URL}/api/v1/intake/autocomplete?q=${encodeURIComponent(q)}`
  try {
    const upstream = await fetch(url, {
      headers: { "X-API-Key": CRM_API_KEY },
      // 5s ceiling — autocomplete is interactive, anything slower is useless
      signal: AbortSignal.timeout(5000),
    })
    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Autocomplete upstream ${upstream.status}` },
        { status: 502 },
      )
    }
    const items = await upstream.json()
    return NextResponse.json(items)
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Autocomplete failed" },
      { status: 502 },
    )
  }
}
