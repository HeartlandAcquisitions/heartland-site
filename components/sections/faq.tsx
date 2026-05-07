import Script from "next/script"
import { FAQS } from "@/lib/faqs"

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
})

export function Faq() {
  return (
    <section id="faq" className="bg-brand-bg-warm py-[120px] scroll-mt-20">
      <Script id="ld-faq" type="application/ld+json" strategy="beforeInteractive">
        {faqJsonLd}
      </Script>

      <div className="mx-auto max-w-[1280px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-16 max-w-[880px] mx-auto">
          <h2 className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            Things people<br />
            <em className="not-italic text-brand-primary">actually ask.</em>
          </h2>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            Everything you need to know about selling your Kansas City home for cash. Don&apos;t see your question? Call or text us at (816) 973-5420.
          </p>
        </header>

        <div className="border-t border-brand-border-strong">
          {FAQS.map((f, i) => (
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
