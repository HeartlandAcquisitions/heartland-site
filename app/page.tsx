import { LeadForm } from "@/components/lead-form"

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:grid md:grid-cols-2 md:gap-12 md:py-24 md:px-6">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Sell your Kansas City house fast — for cash.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          No agents. No repairs. No showings. Get a fair cash offer from your
          Jackson County neighbors — and a closing date you choose.
        </p>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>✓ Close in as little as 7 days</li>
          <li>✓ No fees, no commissions</li>
          <li>✓ We buy as-is — any condition</li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0">
        <LeadForm landingPage="home" />
      </div>
    </main>
  )
}
