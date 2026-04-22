"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import Script from "next/script"
import { submitLead, type SubmitLeadInput } from "@/app/actions/submit-lead"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Step = "address" | "contact" | "success" | "error"

// Cloudflare Turnstile types injected by the script
type TurnstileAPI = {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string
      callback: (token: string) => void
      "error-callback"?: () => void
      size?: "invisible" | "normal"
    },
  ) => string
  execute: (id: string) => void
  reset: (id: string) => void
}
declare global {
  interface Window {
    turnstile?: TurnstileAPI
  }
}

interface LeadFormProps {
  landingPage?: string
}

export function LeadForm({ landingPage = "home" }: LeadFormProps) {
  const [step, setStep] = useState<Step>("address")
  const [address, setAddress] = useState("")
  const [firstName, setFirstName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const turnstileRef = useRef<HTMLDivElement | null>(null)
  const turnstileWidgetId = useRef<string | null>(null)
  const tokenRef = useRef<string>("")

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""

  // Render Turnstile once the script loads + the container mounts.
  // No polling timeout — keep trying until the widget is rendered.
  useEffect(() => {
    if (!siteKey) return
    const tryRender = () => {
      if (!window.turnstile || !turnstileRef.current || turnstileWidgetId.current) return
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        size: "invisible",
        callback: (token) => {
          tokenRef.current = token
        },
      })
    }
    tryRender()
    const t = setInterval(tryRender, 300)
    return () => clearInterval(t)
  }, [siteKey])

  const onAddressContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (address.trim().length < 4) {
      setError("Please enter your property address.")
      return
    }
    setStep("contact")
  }

  const onFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!firstName.trim() || (!phone.trim() && !email.trim())) {
      setError("Please add your name and a phone or email.")
      return
    }

    startTransition(async () => {
      // Ask Turnstile for a fresh token (invisible mode). If the widget isn't ready,
      // wait up to 8s for it to register + solve. Poll for the callback-set token.
      if (siteKey) {
        tokenRef.current = ""
        const deadline = Date.now() + 8000
        while (Date.now() < deadline && !turnstileWidgetId.current) {
          await new Promise((r) => setTimeout(r, 100))
        }
        if (window.turnstile && turnstileWidgetId.current) {
          window.turnstile.execute(turnstileWidgetId.current)
          while (Date.now() < deadline && !tokenRef.current) {
            await new Promise((r) => setTimeout(r, 100))
          }
        }
      }

      const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams()
      const referrer = typeof document !== "undefined" ? document.referrer : undefined
      const device =
        typeof navigator !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop"

      const input: SubmitLeadInput = {
        property_address: address,
        first_name: firstName,
        phone: phone || undefined,
        email: email || undefined,
        source_detail: landingPage,
        landing_page: typeof window !== "undefined" ? window.location.pathname : undefined,
        utm_source: params.get("utm_source") ?? undefined,
        utm_medium: params.get("utm_medium") ?? undefined,
        utm_campaign: params.get("utm_campaign") ?? undefined,
        utm_content: params.get("utm_content") ?? undefined,
        utm_term: params.get("utm_term") ?? undefined,
        referrer,
        device,
        turnstile_token: tokenRef.current,
      }

      const result = await submitLead(input)

      if (!result.ok) {
        setError(
          result.reason === "bot_check_failed"
            ? "Bot check failed. Please refresh and try again."
            : "Please double-check your info.",
        )
        setStep("error")
        return
      }
      setStep("success")
    })
  }

  if (step === "success") {
    return (
      <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h3 className="text-2xl font-bold text-slate-900">Got it — we&apos;ll be in touch.</h3>
        <p className="mt-2 text-slate-600">
          A member of our team will reach out within 24 hours with your offer.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      ) : null}

      {/* Turnstile container — always mounted so the widget can render before
          the user reaches the contact step. Invisible mode has no visible UI. */}
      <div ref={turnstileRef} />


      {step === "address" ? (
        <form onSubmit={onAddressContinue} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="address" className="text-base font-semibold">
              Get a cash offer on your home
            </Label>
            <p className="text-sm text-slate-500">Enter your property address to start.</p>
          </div>
          <Input
            id="address"
            autoComplete="street-address"
            placeholder="123 Main St, Kansas City, MO"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Button type="submit" size="lg" className="w-full">
            Get My Offer
          </Button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <p className="text-xs text-slate-400">
            By continuing you agree to our privacy policy. No obligation.
          </p>
        </form>
      ) : null}

      {step === "contact" || step === "error" ? (
        <form onSubmit={onFinalSubmit} className="flex flex-col gap-4">
          <div>
            <div className="text-sm text-slate-500">Offer on: {address}</div>
            <Label htmlFor="first_name" className="mt-3 block text-base font-semibold">
              Almost done — how should we reach you?
            </Label>
          </div>
          <div>
            <Label htmlFor="first_name" className="sr-only">First name</Label>
            <Input
              id="first_name"
              autoComplete="given-name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="sr-only">Phone</Label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone (preferred)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button type="submit" size="lg" disabled={isPending}>
            {isPending ? "Sending…" : "Get my cash offer"}
          </Button>

          <button
            type="button"
            className="text-xs text-slate-500 underline"
            onClick={() => {
              setStep("address")
              setError(null)
            }}
          >
            ← Change address
          </button>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </form>
      ) : null}
    </div>
  )
}
