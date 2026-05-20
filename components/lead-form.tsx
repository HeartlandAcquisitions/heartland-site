"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import Script from "next/script"
import { submitLead, type SubmitLeadInput } from "@/app/actions/submit-lead"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddressAutocomplete } from "@/components/address-autocomplete"

type Step = "address" | "contact" | "success" | "error"
export type LeadRole = "homeowner" | "agent" | "wholesaler"

type TurnstileAPI = {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string
      callback: (token: string) => void
      "error-callback"?: () => void
      size?: "normal" | "flexible" | "compact"
      appearance?: "always" | "execute" | "interaction-only"
    },
  ) => string
  execute: (id: string) => void
  reset: (id: string) => void
}
declare global {
  interface Window {
    turnstile?: TurnstileAPI
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    posthog?: {
      capture?: (event: string, props?: Record<string, unknown>) => void
    }
  }
}

interface LeadFormProps {
  landingPage?: string
  /** Audience role from the segmented control in the hero card.
   *  Drives the CRM source_detail tag so leads can be filtered. */
  role?: LeadRole
  /** Override the submit button label on the address step (defaults to "Get my offer →") */
  ctaLabel?: string
}

const FIELD_CLASS =
  "h-12 border-brand-text/25 bg-white/85 text-base placeholder:text-brand-text/50 focus-visible:border-brand-primary"

export function LeadForm({
  landingPage = "home",
  role = "homeowner",
  ctaLabel = "Get my offer →",
}: LeadFormProps) {
  const [step, setStep] = useState<Step>("address")
  const [address, setAddress] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const turnstileRef = useRef<HTMLDivElement | null>(null)
  const turnstileWidgetId = useRef<string | null>(null)
  const tokenRef = useRef<string>("")

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""

  useEffect(() => {
    if (!siteKey) return
    const tryRender = () => {
      if (!window.turnstile || !turnstileRef.current || turnstileWidgetId.current) return
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        appearance: "execute",
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
      setError("Please enter the property address.")
      return
    }
    window.fbq?.("trackCustom", "AddressEntered", {
      content_name: "lead_form_address_step",
      value: 0,
      currency: "USD",
    })
    window.gtag?.("event", "generate_lead", {
      event_category: "form",
      event_label: "address_entered",
    })
    window.posthog?.capture?.("address_entered", {
      role,
      landing_page: typeof window !== "undefined" ? window.location.pathname : undefined,
    })
    setStep("contact")
  }

  const onFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!firstName.trim()) {
      setError("Please add your first name.")
      return
    }
    if (!lastName.trim()) {
      setError("Please add your last name.")
      return
    }
    if (!phone.trim()) {
      setError("Please add your phone number.")
      return
    }

    startTransition(async () => {
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
        phone,
        first_name: firstName,
        last_name: lastName,
        email: email || undefined,
        // Tag the lead with the audience role so CRM can route/segment.
        // Falls through to lib/lead-schema's stamping path on the server.
        source_detail: `${role}_submission`,
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
      <div className="text-center">
        <h3 className="text-2xl font-bold text-brand-text">Got it — we&apos;ll be in touch.</h3>
        <p className="mt-2 text-brand-text-muted">
          We&apos;ll review your property and reach out within 24 hours with our offer.
        </p>
      </div>
    )
  }

  return (
    <div>
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      ) : null}

      <div
        ref={turnstileRef}
        aria-hidden="true"
        className="absolute left-[-10000px] top-0 h-px w-px overflow-hidden"
      />

      {step === "address" ? (
        <form onSubmit={onAddressContinue} className="flex flex-col gap-3">
          <Label htmlFor="address" className="sr-only">
            Property address
          </Label>
          <AddressAutocomplete
            id="address"
            placeholder="123 Main St, Kansas City, MO"
            value={address}
            onChange={setAddress}
            required
            className={FIELD_CLASS}
          />
          <Button type="submit" size="lg" className="w-full">
            {ctaLabel}
          </Button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </form>
      ) : null}

      {step === "contact" || step === "error" ? (
        <form onSubmit={onFinalSubmit} className="flex flex-col gap-3">
          <div>
            <div className="text-sm text-slate-500">Property: {address}</div>
            <Label htmlFor="first_name" className="mt-3 block text-base font-semibold">
              How should we reach you?
            </Label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="first_name" className="sr-only">First name</Label>
              <Input
                id="first_name"
                autoComplete="given-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <Label htmlFor="last_name" className="sr-only">Last name</Label>
              <Input
                id="last_name"
                autoComplete="family-name"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={FIELD_CLASS}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="phone" className="sr-only">Phone</Label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={FIELD_CLASS}
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <Button type="submit" size="lg" disabled={isPending}>
            {isPending ? "Sending…" : "Send my property"}
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
