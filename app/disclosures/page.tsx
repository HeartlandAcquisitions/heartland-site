import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclosures — Heartland Acquisitions",
  description: "Required disclosures for Heartland Acquisitions, a cash home-buying business in Kansas City.",
}

export default function DisclosuresPage() {
  return (
    <article className="bg-brand-bg-warm py-24">
      <div className="mx-auto max-w-[760px] px-8">
        <p className="text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">Last updated: 2026-05-07</p>
        <h1 className="mt-4 font-sans text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-extrabold text-brand-text">Disclosures</h1>

        <div className="mt-8 space-y-6 text-[16.5px] leading-[1.6] text-[#3a3d33]">
          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Who we are</h2>
          <p>
            Heartland Acquisitions is a DBA of Ivarix Capital LLC, a Missouri-registered limited liability company. We are a cash home buyer, not a real-estate agent or broker. We do not list properties for sale, do not receive commissions, and do not represent sellers in transactions.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">How we make offers</h2>
          <p>
            Cash offers are based on comparable recently sold properties in the seller&apos;s neighborhood, the home&apos;s condition (assessed during a walkthrough), and our holding plus renovation costs. Our offers reflect what we can pay as the buyer; they are typically below full retail market value because we cover repairs, closing costs, and assume holding risk.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">No fees, no commissions</h2>
          <p>
            We do not charge sellers any fees or commissions. We pay all standard buyer closing costs at our chosen title company. The number on the offer is the number that hits the seller&apos;s bank account at closing.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">We are the buyer</h2>
          <p>
            Heartland Acquisitions purchases properties with our own funds. We do not assign contracts to third-party investors or wholesalers. The name on the contract is the name that closes.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Hero imagery</h2>
          <p>
            Photography appearing on this site, including the hero image of a craftsman bungalow, may be AI-generated for illustrative purposes and does not represent any specific property we have purchased.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Statistics &amp; claims</h2>
          <p>
            Offer-rate, closing-time, and review claims represent typical experience for sellers who fit our buying profile. Individual seller experiences will vary. Closing in 7 days requires title to be clear and seller documents to be in order.
          </p>

          <h2 className="mt-8 font-sans text-[24px] font-bold tracking-[-0.02em] text-brand-text">Contact</h2>
          <p>
            Questions about these disclosures can be sent to <a href="mailto:hello@heartlandacq.com" className="text-brand-primary underline hover:text-brand-primary-soft">hello@heartlandacq.com</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
