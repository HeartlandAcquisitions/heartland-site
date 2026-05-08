import Script from "next/script"
import { FAQS } from "@/lib/faqs"

export type FaqEntry = { q: string; a: string }

export type FaqProps = {
  /** ID for the section anchor; defaults to "faq" */
  id?: string
  /** FAQs to render; defaults to homepage FAQS */
  faqs?: FaqEntry[]
  /** Headline first half (e.g. "Things people"); defaults to homepage copy */
  headlinePre?: string
  /** Highlighted second half (e.g. "actually ask."); defaults to homepage copy */
  headlineHighlight?: string
  /** Subheading copy; defaults to homepage copy */
  sub?: string
  /** Optional unique JSON-LD script id (must be unique if multiple FAQ blocks ever render on the same page) */
  jsonLdId?: string
  /** Skip emitting FAQPage JSON-LD (e.g. when the page has its own custom schema) */
  skipJsonLd?: boolean
}

const DEFAULT_SUB =
  "Everything you need to know about selling your Kansas City home for cash. Don't see your question? Call or text us at (816) 973-5420."

export function Faq(props: FaqProps = {}) {
  const id = props.id ?? "faq"
  const faqs = props.faqs ?? FAQS
  const headlinePre = props.headlinePre ?? "Things people"
  const headlineHighlight = props.headlineHighlight ?? "actually ask."
  const sub = props.sub ?? DEFAULT_SUB
  const jsonLdId = props.jsonLdId ?? "ld-faq"

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  })

  return (
    <section id={id} className="bg-brand-bg-warm py-[120px] scroll-mt-20">
      {!props.skipJsonLd ? (
        <Script id={jsonLdId} type="application/ld+json" strategy="beforeInteractive">
          {faqJsonLd}
        </Script>
      ) : null}

      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <h2 className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            {headlinePre}<br />
            <em className="not-italic text-brand-primary">{headlineHighlight}</em>
          </h2>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">{sub}</p>
        </header>

        <div className="border-t border-brand-border-strong">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="border-b border-brand-border-strong py-7 [&_.plus]:open:bg-brand-ink [&_.plus]:open:text-brand-bg-warm [&_.plus]:open:rotate-45"
            >
              <summary className="flex items-center justify-between gap-6 list-none font-semibold text-[22px] tracking-[-0.015em] cursor-pointer marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="plus flex-none w-9 h-9 rounded-full border border-brand-border-strong grid place-items-center transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3.5 text-base leading-[1.6] max-w-[760px] text-[#3a3d33]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
