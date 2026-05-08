import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getPostBySlug, type Section } from "@/lib/blog-posts"
import { getVerticalBySlug } from "@/lib/verticals"
import { getCityBySlug } from "@/lib/cities"
import { CtaStrip } from "@/components/sections/cta-strip"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Not found" }
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
    image: `${siteConfig.url}/og.png`,
  })

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  })

  const relatedSituations = (post.relatedSituations ?? [])
    .map((s) => getVerticalBySlug(s))
    .filter((v): v is NonNullable<typeof v> => Boolean(v))
  const relatedCities = (post.relatedCities ?? [])
    .map((c) => getCityBySlug(c))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  return (
    <>
      <Script id={`ld-article-${post.slug}`} type="application/ld+json" strategy="beforeInteractive">
        {articleJsonLd}
      </Script>
      <Script id={`ld-breadcrumb-${post.slug}`} type="application/ld+json" strategy="beforeInteractive">
        {breadcrumbJsonLd}
      </Script>

      <article className="bg-brand-bg-warm">
        <header className="bg-brand-bg-card pt-16 pb-12">
          <div className="mx-auto max-w-[820px] px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-brand-primary font-medium hover:text-brand-primary-soft"
            >
              <span aria-hidden>←</span> Blog
            </Link>
            <h1 className="mt-6 font-sans text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.025em] font-extrabold text-brand-text">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-[#3a3d33]">
              <span className="flex items-center gap-2">
                <span aria-hidden className="w-7 h-7 rounded-full bg-brand-primary text-brand-bg-warm grid place-items-center font-bold text-[12px]">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span className="font-semibold text-brand-text">{post.author.name}</span>
                <span className="text-[#7a7d70]">· {post.author.role}</span>
              </span>
              <span className="text-[#7a7d70]">·</span>
              <time dateTime={post.publishedAt} className="text-[#3a3d33]">
                {formatDate(post.publishedAt)}
              </time>
              <span className="text-[#7a7d70]">·</span>
              <span className="text-[#3a3d33]">{post.readTimeMin} min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[760px] px-8 py-16">
          <div className="prose-blog">
            {post.body.map((s, i) => (
              <SectionRenderer key={i} section={s} />
            ))}
          </div>

          {/* Author bio */}
          <div className="mt-16 pt-10 border-t border-brand-border-strong flex items-start gap-4">
            <span aria-hidden className="flex-none w-12 h-12 rounded-full bg-brand-primary text-brand-bg-warm grid place-items-center font-bold text-[16px]">
              {post.author.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <div>
              <p className="font-semibold text-brand-text">{post.author.name}</p>
              <p className="text-[14px] text-[#3a3d33] leading-[1.5]">
                {post.author.role}. {siteConfig.name} is a Kansas City cash home-buying company. Honest offers, plain talk, fast closings. Submit your address from the homepage for a no-obligation cash offer in 24 hours.
              </p>
            </div>
          </div>

          {/* Related */}
          {(relatedSituations.length > 0 || relatedCities.length > 0) ? (
            <div className="mt-12 pt-10 border-t border-brand-border-strong">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-brand-primary font-medium">Related pages</h3>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedSituations.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/situations/${v.slug}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary transition-colors"
                  >
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand-primary">Situation</div>
                      <div className="mt-1 font-semibold text-brand-text">{v.eyebrow}</div>
                    </div>
                    <span aria-hidden className="text-brand-primary">→</span>
                  </Link>
                ))}
                {relatedCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/cities/${c.slug}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary transition-colors"
                  >
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand-primary">City</div>
                      <div className="mt-1 font-semibold text-brand-text">{c.name}, {c.state}</div>
                    </div>
                    <span aria-hidden className="text-brand-primary">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>

      <CtaStrip />
    </>
  )
}

function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "p":
      return <p className="my-5 text-[17px] leading-[1.7] text-[#1d201a]">{section.text}</p>
    case "h2":
      return <h2 className="mt-12 mb-4 font-sans text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.02em] font-extrabold text-brand-text">{section.text}</h2>
    case "h3":
      return <h3 className="mt-8 mb-3 font-sans text-[22px] leading-[1.2] tracking-[-0.015em] font-bold text-brand-text">{section.text}</h3>
    case "ul":
      return (
        <ul className="my-5 space-y-2 list-none p-0 pl-0">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-[16.5px] leading-[1.6] text-[#1d201a]">
              <span aria-hidden className="flex-none mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol className="my-5 space-y-3 list-none p-0 counter-reset-blog">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-4 items-start text-[16.5px] leading-[1.6] text-[#1d201a]">
              <span aria-hidden className="flex-none w-7 h-7 rounded-full bg-brand-primary text-brand-bg-warm grid place-items-center font-mono font-bold text-[12px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )
    case "callout":
      return (
        <aside
          className={`my-8 p-5 rounded-xl border-l-4 ${
            section.tone === "warning"
              ? "bg-[#fef6e7] border-l-amber-500 text-[#5a4a18]"
              : "bg-brand-bg-card border-l-brand-primary text-[#1d201a]"
          }`}
        >
          <p className="text-[16px] leading-[1.55] m-0">{section.text}</p>
        </aside>
      )
    case "quote":
      return (
        <blockquote className="my-8 pl-6 border-l-4 border-brand-primary">
          <p className="text-[19px] leading-[1.5] italic text-brand-text">&ldquo;{section.text}&rdquo;</p>
          {section.cite ? <cite className="mt-2 block text-[14px] text-[#3a3d33] not-italic">— {section.cite}</cite> : null}
        </blockquote>
      )
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z")
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}
