import Image from "next/image"
import type { Testimonial } from "@/content/testimonials"

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex gap-3 rounded-lg bg-brand-surface p-4 ring-1 ring-brand-border">
      <Image
        src={t.photoSrc}
        alt={`${t.authorName} portrait`}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover shrink-0"
      />
      <div className="flex flex-col gap-2">
        <blockquote className="text-sm italic text-brand-text">{`"${t.quote}"`}</blockquote>
        <figcaption className="text-xs text-brand-text-muted">
          — {t.authorName}, {t.authorCity} ·{" "}
          <span className="text-amber-500" aria-label={`${t.stars} stars`}>
            {"★".repeat(t.stars)}
          </span>
        </figcaption>
      </div>
    </figure>
  )
}
