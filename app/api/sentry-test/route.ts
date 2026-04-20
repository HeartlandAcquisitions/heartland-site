import * as Sentry from "@sentry/nextjs"
import { NextResponse } from "next/server"

export async function GET() {
  const secret = process.env.SENTRY_DSN
  if (!secret) {
    return NextResponse.json(
      { error: "Sentry not configured in this environment" },
      { status: 503 },
    )
  }
  try {
    throw new Error("Sentry smoke test — this error is intentional")
  } catch (e) {
    Sentry.captureException(e)
    await Sentry.flush(2000)
    return NextResponse.json({ ok: true, captured: true })
  }
}
