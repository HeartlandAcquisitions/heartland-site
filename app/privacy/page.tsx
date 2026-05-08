import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Heartland Acquisitions",
  description: "How Heartland Acquisitions collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <article className="bg-brand-bg-warm py-24">
      <div className="mx-auto max-w-[760px] px-8">
        <p className="font-mono text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">Last updated: 2026-05-07</p>
        <h1 className="mt-4 font-sans text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-extrabold text-brand-text">Privacy Policy</h1>

        <div className="mt-8 space-y-6 text-[16.5px] leading-[1.6] text-[#3a3d33]">
          <p>
            This Privacy Policy describes how Heartland Acquisitions, a DBA of Ivarix Capital LLC (&ldquo;Heartland,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares your personal information when you visit our website at heartlandacquisitions.com or contact us about selling your home.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Information we collect</h2>
          <p>
            When you submit our offer form, we collect your name, phone number, email address (optional), and the address of the property you&apos;re selling. We also automatically collect basic technical information such as your IP address, browser type, device type, referring URL, and pages visited, through analytics tools (Google Analytics, Meta Pixel, PostHog).
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">How we use your information</h2>
          <p>
            We use your contact information to respond to your offer request, schedule a walkthrough, present a cash offer, and coordinate closing. We use technical and analytics data to understand site performance, improve user experience, and measure the effectiveness of our advertising.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Sharing your information</h2>
          <p>
            We do not sell your personal information. We share information only with service providers who help us operate the business (CRM, analytics, hosting, advertising platforms) and with title companies and attorneys involved in closing your transaction. We may disclose information if required by law.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Your choices</h2>
          <p>
            You can opt out of our marketing communications at any time by replying STOP to text messages or unsubscribing from emails. You may request access to or deletion of your personal data by contacting us at hello@heartlandacq.com.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Contact</h2>
          <p>
            Questions about this policy can be sent to <a href="mailto:hello@heartlandacq.com" className="text-brand-primary underline hover:text-brand-primary-soft">hello@heartlandacq.com</a> or by mail to Ivarix Capital LLC, 2107 Grand Boulevard, Kansas City, MO 64108.
          </p>
        </div>
      </div>
    </article>
  )
}
