@AGENTS.md

# heartland-site — builder context

## Mission

Seller-facing marketing site for Heartland Acquisitions (`heartlandacquisitions.com`). Direct-to-seller homebuyer in Kansas City. The site's job is to convert sellers into leads via homepage + 5 vertical landing pages (divorce, foreclosure, inherited, landlord, tax-liens) + 10 city landing pages + FAQ + how-it-works + blog.

## Stack

- **Next.js 16** (App Router) — React 19, Server Components + Server Actions. APIs have breaking changes from 15; read `node_modules/next/dist/docs/` before assuming behavior.
- TypeScript strict mode
- Tailwind 4 via PostCSS (no `tailwind.config.*` file; all config in `app/globals.css`)
- shadcn/ui + Magic UI for components
- MDX for body copy (blog + long-form page content)
- Vercel for hosting (preview URLs per PR)
- pnpm package manager
- Node >= 22.12

## Directory structure

- `app/(marketing)/` — homepage + marketing pages (flat URLs preserved from old site)
- `app/blog/` — MDX blog
- `app/api/` — API route handlers (used sparingly; prefer server actions)
- `components/` — shared React components (Nav, Footer, LeadForm, Hero, Analytics, ui/*)
- `lib/` — integration clients (crm.ts, meta-capi.ts, google-enhanced.ts, posthog.ts, etc.)
- `content/` — MDX files imported into page components
- `public/` — static assets (images, favicons)

## Key patterns

- Marketing pages import MDX body copy from `content/`; page files stay thin.
- URLs MUST match the legacy site exactly (SEO continuity). Breaking a URL is a production incident.
- Phone number is a first-class citizen of the nav — never bury it.
- Every form submission captures UTMs + referrer + session ID + landing page. Non-negotiable — Phase 2 lead scoring depends on this data.
- Server-side attribution (Meta CAPI + Google Enhanced Conversions) is not optional.

## Visual Standards — MANDATORY before any UI work

Before writing or modifying any UI component/section, check sources in this order:

1. **shadcn MCP** — run `mcp__shadcn-ui__search_items_in_registries`. If a match exists, install via `pnpm dlx shadcn@latest add <name>`.
2. **Magic UI** (https://magicui.design/components) — animated Tailwind 4 components. Install via `pnpm dlx magicui-cli@latest add [component]`.
3. **Aceternity UI** (https://ui.aceternity.com) — copy-paste components.
4. **Tailwind Plus** (https://tailwindcss.com/plus/ui-blocks) — Chase has the license. Copy-paste.
5. **Only write from scratch if none of the above have a match.**

## Deploy

- Push to `main` → Vercel auto-deploys to production (`heartlandacquisitions.com`).
- Open a PR → Vercel auto-deploys to a unique preview URL. **Always preview before merging.**
- Rollback: Vercel UI → Deployments → Promote previous deployment. Live within ~10s.

## Anti-patterns

- Do NOT POST leads directly from client code to the CRM. Always go through the `submitLead` server action — it handles Turnstile verification, retries, dead-letter queue, and server-side attribution fan-out.
- Do NOT add tracking snippets inline on pages. All pixels load via `<Analytics />` in the root layout.
- Do NOT break URLs. If renaming a page, add a 301 redirect in `next.config.ts` the same commit.
- Do NOT commit secrets. All secrets live in Vercel env vars; `.env.example` documents the keys.

## Reference

- Spec: `../max-agent/docs/superpowers/specs/2026-04-20-heartland-site-v1-design.md`
- Plan: `../max-agent/docs/superpowers/plans/2026-04-20-heartland-site-v1-foundation.md`
- Roman CRM (lead destination): `https://heartlandboys.com/api/v1/leads/`
- CRM SSH: `ssh root@159.65.250.219` (Roman-CRM droplet)
