# heartland-site

Seller-facing marketing site for Heartland Acquisitions — `heartlandacquisitions.com`.

## Stack

Next.js 16 · TypeScript · Tailwind 4 · shadcn/ui · Vercel · pnpm

## Development

```bash
nvm use           # activates Node 22
pnpm install
pnpm dev          # http://localhost:3000
```

## Deploy

- `main` branch auto-deploys to production via Vercel.
- PRs auto-deploy to preview URLs. Always preview before merging.

## Environment variables

See `.env.example` for the required keys. Set them in Vercel at `Settings → Environment Variables`. Never commit real secrets.

## Contributing

All architectural conventions are documented in `CLAUDE.md`. Read it before making structural changes.

## Related

- Spec: `../max-agent/docs/superpowers/specs/2026-04-20-heartland-site-v1-design.md`
- CRM: Roman CRM (FastAPI) at `heartlandboys.com`
