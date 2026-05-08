import type { Metadata } from "next"
import Link from "next/link"
import { getPostsSorted } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog — Heartland Acquisitions",
  description:
    "Honest writing on selling a Kansas City house for cash — process, market data, probate timelines, foreclosure options, and seller stories from your KC neighbors.",
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z")
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default function BlogIndexPage() {
  const posts = getPostsSorted()

  return (
    <article className="bg-brand-bg-warm py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-8">
        <header className="flex flex-col items-center text-center gap-6 mb-14 max-w-[880px] mx-auto">
          <p className="font-mono text-[13px] text-brand-primary uppercase tracking-[0.08em] font-medium">Heartland blog</p>
          <h1 className="font-sans text-[44px] md:text-[64px] leading-none tracking-[-0.035em] font-extrabold text-brand-text">
            Honest writing<br />
            <em className="not-italic text-brand-primary">about selling a house.</em>
          </h1>
          <p className="text-lg text-[#3a3d33] leading-[1.5] max-w-[680px]">
            Real Kansas City market data, plain-English explanations of probate, foreclosure, and inherited-house sales, and seller stories from people who&apos;ve worked with us.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-brand-surface border border-brand-border rounded-[18px] p-7 transition-all hover:-translate-y-[3px] hover:shadow-[var(--shadow-card-lift)]"
            >
              <div className="flex items-center gap-2 flex-wrap">
                {post.tags.slice(0, 2).map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-brand-bg-card text-[11px] font-mono uppercase tracking-[0.06em] text-brand-primary font-medium">
                    {t}
                  </span>
                ))}
                <span className="text-[13px] text-[#7a7d70] ml-auto">{post.readTimeMin} min</span>
              </div>

              <h2 className="mt-4 font-sans text-[24px] md:text-[26px] leading-[1.15] tracking-[-0.02em] font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                {post.title}
              </h2>

              <p className="mt-3 text-[15.5px] leading-[1.55] text-[#3a3d33]">{post.excerpt}</p>

              <div className="mt-5 pt-5 border-t border-brand-border flex items-center justify-between text-[13px] text-[#7a7d70]">
                <span className="flex items-center gap-2">
                  <span aria-hidden className="w-6 h-6 rounded-full bg-brand-primary text-brand-bg-warm grid place-items-center font-bold text-[10px]">
                    {post.author.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span>{post.author.name}</span>
                </span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
