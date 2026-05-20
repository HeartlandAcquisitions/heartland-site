import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Heartland Acquisitions",
  description: "Terms governing your use of the Heartland Acquisitions website.",
}

export default function TermsPage() {
  return (
    <article className="bg-brand-bg-warm py-24">
      <div className="mx-auto max-w-[760px] px-8">
        <p className="text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">Last updated: 2026-05-07</p>
        <h1 className="mt-4 font-sans text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-extrabold text-brand-text">Terms of Service</h1>

        <div className="mt-8 space-y-6 text-[16.5px] leading-[1.6] text-[#3a3d33]">
          <p>
            By accessing heartlandacquisitions.com, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">No obligation</h2>
          <p>
            Submitting your address through our offer form does not obligate you to sell, and does not obligate us to buy. Any cash offer we present is non-binding until both parties sign a written purchase agreement at a licensed Missouri or Kansas title company.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Site content</h2>
          <p>
            All content on this site — copy, design, photography, code — is owned by Ivarix Capital LLC and protected by copyright. You may not reproduce, distribute, or modify our content without written permission. The hero photography may be AI-generated and is used for illustrative purposes.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Communications</h2>
          <p>
            By providing your phone number, you consent to receive calls and SMS messages from Heartland Acquisitions about your offer, including via automated dialing systems. Standard message and data rates may apply. You can opt out at any time by replying STOP.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Limitation of liability</h2>
          <p>
            The site and its content are provided &ldquo;as is&rdquo; without warranty. We are not liable for any indirect, incidental, or consequential damages arising from your use of the site. Our total liability is limited to the amount you have paid us in the prior twelve months (which, if you have only used the site, is zero).
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Missouri, without regard to conflict-of-law principles. Disputes will be resolved in the state or federal courts located in Jackson County, Missouri.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Contact</h2>
          <p>
            Questions can be sent to <a href="mailto:hello@heartlandacq.com" className="text-brand-primary underline hover:text-brand-primary-soft">hello@heartlandacq.com</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
