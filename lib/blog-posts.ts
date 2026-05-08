/**
 * Blog post data — structured sections render via app/blog/[slug]/page.tsx.
 *
 * Each post is hand-written by Chase. Voice is direct, KC-specific, empathetic
 * to seller situations. Goal is to rank for long-tail queries AND get cited by
 * answer engines (ChatGPT, Claude, Perplexity) — both reward clear, factual,
 * structured content.
 */

export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string; tone?: "info" | "warning" }
  | { type: "quote"; text: string; cite?: string }

export type BlogPost = {
  slug: string
  title: string
  /** SEO description + listing excerpt */
  description: string
  /** Listing-page hook (1-2 sentences) */
  excerpt: string
  author: { name: string; role: string }
  /** ISO date string */
  publishedAt: string
  /** ISO date string, optional */
  updatedAt?: string
  readTimeMin: number
  tags: string[]
  body: Section[]
  /** Slugs of related situation pages */
  relatedSituations?: string[]
  /** Slugs of related city pages */
  relatedCities?: string[]
}

const CHASE_AUTHOR = { name: "Chase Uhlig", role: "Founder, Heartland Acquisitions" } as const

export const BLOG_POSTS: BlogPost[] = [
  // -------------------------------------------------------------------------
  {
    slug: "how-to-sell-a-house-fast-in-kansas-city",
    title: "How to Sell a House Fast in Kansas City: A Realistic Timeline",
    description:
      "What 'sell fast' actually means in Kansas City, what timelines are achievable through different paths, and the trade-offs between speed, price, and certainty.",
    excerpt:
      "Most 'we buy houses fast' content skips the trade-offs. Here's how fast actually works in KC — what's possible in 7 days vs 30 vs 60, and when each path makes sense.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-25",
    readTimeMin: 7,
    tags: ["selling fast", "process", "kansas-city"],
    relatedSituations: ["foreclosure"],
    relatedCities: ["kansas-city-mo", "independence-mo"],
    body: [
      {
        type: "p",
        text: "If you've searched 'sell my house fast Kansas City,' the first few results all promise a 7-day close and a fair offer. Some of that is real. A lot of it isn't. As someone who actually buys houses for cash in this metro every week, here's the honest version of how fast things move, what 'fast' is going to cost you, and when each path is the right one.",
      },
      { type: "h2", text: "What 'fast' actually means in Kansas City real estate" },
      {
        type: "p",
        text: "There are three real timelines for selling a house in the KC metro: roughly 7-14 days through a cash buyer, 30-45 days through an iBuyer or hybrid program, and 60-90 days through a traditional MLS listing. Anyone promising a 24-hour or 48-hour close is either lying or using the phrase loosely (they probably mean 'cash offer in 24 hours,' which is different from closing in 24 hours). Title work alone takes 3-7 business days in Jackson County, MO — even with a cash buyer ready to fund the same day, the title company needs time to clear liens and pull a clean policy.",
      },
      { type: "h2", text: "The 7 to 14 day path: cash buyer" },
      {
        type: "p",
        text: "When a Kansas City cash buyer like Heartland Acquisitions says 'close in 7 days,' here's what that actually looks like: Day 1, you submit your address. Day 1-2, we pull comps and present a no-obligation cash offer. Day 2-3, walkthrough at the property. Day 3-4, you accept and we open title at a Kansas City title company. Day 4-9, title runs lien searches, pulls payoff statements, and prepares closing documents. Day 7-14, closing. The seller's job during those days is essentially nothing — provide a copy of the deed if you have it, sign documents at closing, and bring a photo ID.",
      },
      {
        type: "callout",
        text: "Real example from this year: Independence MO seller submitted address on a Tuesday, walkthrough Thursday, accepted offer Friday, closed the following Friday. That's 10 days from address to wired funds. Specific facts mattered: clear title, no probate, no second mortgage. When something's complicated (estate, foreclosure proceedings, title cloud), 14-21 days is more realistic.",
      },
      { type: "h2", text: "The 30 to 45 day path: iBuyers and hybrids" },
      {
        type: "p",
        text: "Opendoor, Offerpad, and similar national iBuyers technically operate in Kansas City. Their model is to make a programmatic offer (no walkthrough), do an inspection at day 7-14, then deduct repair costs from the offer. Net result: the offer you accept is rarely the number that hits your account. iBuyer service fees run 5-10%, and inspection deductions can be substantial. The whole thing usually takes 30-45 days. Sellers who fit the iBuyer box (typical home, recent renovation, no major issues) sometimes do well; everyone else gets a lower-than-expected final number.",
      },
      { type: "h2", text: "The 60 to 90 day path: traditional MLS listing" },
      {
        type: "p",
        text: "Listing with a Kansas City realtor takes 30-90 days from listing to closing in a normal market. Days on market in KC averaged ~25-40 days through 2025-2026 (varies by neighborhood and price band), but that's just the listing period. Add 30-45 days from accepted offer to closing for financing, appraisal, inspections, and contingencies. The path winning here is for sellers with: a house in good condition, time on their hands, the ability to keep the house clean for showings, and tolerance for buyer fall-throughs (typically 15-20% of accepted offers fall apart in this market). Net price is usually highest if you can make this work; it's not the fast path.",
      },
      { type: "h2", text: "The trade-off triangle: speed, price, certainty" },
      {
        type: "p",
        text: "Real estate has a triangle: you can pick two of fast, top-dollar, and certain. Cash sales are fast and certain but you give up some price. Traditional listings are top-dollar but slow and uncertain. iBuyers try to be all three and end up middling on each. The right answer depends entirely on which corner of the triangle matters most for your situation.",
      },
      { type: "h2", text: "When fast wins" },
      {
        type: "ul",
        items: [
          "Foreclosure timeline pressure (auction date scheduled)",
          "Inheritance with out-of-state heirs and a property running up holding costs",
          "Divorce settlement that needs a clean cash number",
          "Job relocation with a 30-60 day window",
          "Major life changes — illness, family emergency, downsizing fast",
          "Property condition that won't pass an FHA appraisal anyway",
          "Tired-landlord exits where evicting before listing isn't worth the time",
        ],
      },
      { type: "h2", text: "When fast loses" },
      {
        type: "ul",
        items: [
          "House is in great shape and you have 60+ days",
          "You're emotionally not ready to make a decision in 24 hours",
          "Price is the primary goal and you can hold out for a retail buyer",
          "You're in a strong-demand neighborhood (Brookside, Waldo) where the MLS will deliver multiple offers in days",
        ],
      },
      { type: "h2", text: "The actual seller checklist for a fast cash sale" },
      {
        type: "ol",
        items: [
          "Know your mortgage payoff (call the lender or pull from a recent statement). This is the number we need to hit at closing.",
          "Find your deed if you have it. If not, the title company can pull from county records — adds a day or two but isn't a blocker.",
          "Note any liens you're aware of: tax liens, mechanic's liens, IRS liens, HOA arrears. We'll find them in title work either way; flagging them up front speeds things up.",
          "Decide what you're keeping. Furniture, appliances, the riding mower — leave what you don't want. We dispose of it.",
          "Pick a closing window. We can move on a 7-day, 14-day, or 60-day timeline. Tell us what works.",
          "Sign the contract. From here it's mechanical.",
        ],
      },
      { type: "h2", text: "Common pitfalls to avoid" },
      {
        type: "p",
        text: "First — don't sign anything you haven't read. Cash buyers should give you the contract before requesting a signature; if someone is pressuring you to sign on the spot, walk. Second — verify the buyer is the actual buyer, not a wholesaler assigning the contract. We've seen Kansas City sellers locked into 90-day inspection periods by wholesalers shopping their contract to the highest bidder. Third — get the offer in writing with a hard closing date and earnest money requirement; verbal offers are worth nothing.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "If you want a fair cash offer on your Kansas City house with no pressure and no obligation, submit your address through the form on our homepage. We'll pull comps, schedule a walkthrough at a time that works for you, and send a written offer in 24 hours. From there, the timeline is yours — we can close in 7 days or 60. Whatever fits your situation.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "cash-buyer-vs-realtor-kansas-city-math",
    title: "Cash Buyer vs Realtor in Kansas City: The Actual Math",
    description:
      "Real numbers comparing a cash sale to a traditional listing in Kansas City — agent fees, repairs, holding costs, time-on-market, and what nets out for sellers.",
    excerpt:
      "Everyone says 'realtors net you more.' Sometimes true, often not. Here's the actual math broken down on a real KC house, with every cost line item you don't see in the listing brochure.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-30",
    readTimeMin: 8,
    tags: ["comparison", "pricing", "kansas-city"],
    relatedSituations: ["divorce", "rental-with-tenants"],
    relatedCities: ["kansas-city-mo", "lees-summit-mo", "overland-park-ks"],
    body: [
      {
        type: "p",
        text: "The most common pushback I get from Kansas City sellers considering a cash offer: 'Won't I net more if I just list it?' Sometimes yes. Often no. The honest answer depends on the specific house, the specific seller's timeline, and the specific costs that don't show up in the realtor's listing brochure. This post walks through real numbers on a real KC house — a 1,400 sq ft 3-bed/2-bath in Independence — to show you the actual math.",
      },
      { type: "h2", text: "The starting price doesn't tell you anything" },
      {
        type: "p",
        text: "Say a Kansas City realtor gives you a comparative market analysis and says 'list at $250,000, you'll probably get $245,000.' That number is misleading on its own — what matters is what's left after every cost gets deducted. Realtors don't always lay out all the deductions clearly because their commission is a percentage of the gross sale price, not the seller's net. Once you back out commission, repairs, concessions, holding costs, and the cost of your own time, the listed-price number and the cash-offer number get a lot closer than you'd think.",
      },
      { type: "h2", text: "The traditional listing math (a real example)" },
      {
        type: "p",
        text: "Here's the actual math for a hypothetical-but-typical Independence MO house: 1,400 sq ft, 1965 build, 3-bed/2-bath, original kitchen, dated bathrooms, basement that's seen water in past floods. Comparable houses in similar condition have sold for $215,000-$235,000 in the past 6 months. A realtor lists at $229,900.",
      },
      {
        type: "ul",
        items: [
          "Listed price: $229,900",
          "Days on market in current condition: ~45 days (older homes in 64050 take longer than the metro median)",
          "Final accepted offer (typical -2.5% from list): $224,150",
          "Buyer requests pre-listing repairs based on showings feedback (must-haves): $3,500",
          "Buyer's inspection items at contract: $2,800 in seller credits",
          "Buyer-requested concessions toward closing costs (typical for FHA buyer): $4,500",
          "Realtor commission (3% buyer agent + 3% seller agent on $224,150): $13,449",
          "Seller's title fees, transfer tax, recording: $1,800",
          "Holding costs during 45-day listing + 35-day under contract (mortgage, utilities, insurance, lawn): ~$3,200",
        ],
      },
      {
        type: "p",
        text: "Net to seller: $224,150 - $3,500 - $2,800 - $4,500 - $13,449 - $1,800 - $3,200 = $194,901.",
      },
      { type: "h2", text: "The cash buyer math (same house)" },
      {
        type: "p",
        text: "On the same Independence MO house, our cash offer would land in the $175,000-$190,000 range — let's call it $182,500 for this example. Cash sale, no commission, no repairs, no concessions, no listing time. Closing costs to the seller are $0 because we cover all standard buyer-side closing fees.",
      },
      {
        type: "ul",
        items: [
          "Cash offer: $182,500",
          "Realtor commission: $0",
          "Repairs/concessions: $0",
          "Closing costs: $0 (we cover all buyer-side)",
          "Seller's title costs: $0 (we cover)",
          "Holding costs: ~$700 (10 days from offer to closing vs ~80 days)",
        ],
      },
      {
        type: "p",
        text: "Net to seller: $182,500 - $700 = $181,800.",
      },
      { type: "h2", text: "The actual delta" },
      {
        type: "p",
        text: "On this house, the listing nets the seller $194,901. The cash sale nets $181,800. The realtor wins by ~$13,000 — a real number, but smaller than most sellers expect. And that math assumes everything goes well: house sells in 45 days at 97.5% of list, no buyer fall-through, repair costs as estimated. In practice, ~15-20% of KC purchase contracts fall through, which means there's a real chance the listing path takes 90+ days and another contract round before it closes.",
      },
      { type: "h2", text: "When the listing path actually wins" },
      {
        type: "ul",
        items: [
          "House is in retail-ready condition (recent kitchen, baths, mechanicals)",
          "You're in a strong-demand KC neighborhood (Brookside, Waldo, Hyde Park, west side OP)",
          "You have time to wait 60-90+ days and aren't paying punitive holding costs",
          "You can keep the house clean and accessible for showings",
          "You can absorb the emotional cost of having strangers walk through your home",
        ],
      },
      { type: "h2", text: "When the cash path actually wins" },
      {
        type: "ul",
        items: [
          "House needs significant repairs (the realtor's number assumes you make those repairs first)",
          "Foreclosure timeline pressure",
          "Inherited property running up monthly carrying costs",
          "Divorce settlement requiring a clean, fast cash number",
          "Out-of-state seller who can't manage showings remotely",
          "Property has been on the MLS unsuccessfully (60+ days, no offers)",
          "Tenanted rental where evicting before listing is months and thousands in lost rent",
        ],
      },
      { type: "h2", text: "The cost most sellers miss: their own time" },
      {
        type: "p",
        text: "Realtors rarely price the seller's own time into the comparison. A traditional listing in Kansas City typically requires: 5-10 hours preparing the house for photos, 15-25 showings spread over the listing period (each requiring you to leave the house for ~2 hours), inspection logistics, appraisal coordination, repair contractor management, and 30+ phone calls/texts with the agent. If you value your time at $30/hour (most KC sellers should value it higher), that's $1,500-$3,000 of seller labor not showing up in any commission calculation.",
      },
      { type: "h2", text: "How to think about it for your specific house" },
      {
        type: "p",
        text: "Get a real number from both sides before deciding. A free-cash-offer request takes 30 seconds and we'll send you a written number in 24 hours — no obligation. Then get a comparative market analysis from a Kansas City realtor (also free; most will do one for any seller). Run the math yourself on net-to-you. If listing wins by enough to justify the time and uncertainty, list. If cash wins by enough to justify locking in the certainty, take cash. If they're within $5-10k of each other, the right answer depends on what you value more — top-dollar or speed.",
      },
      { type: "h2", text: "What we'll show you" },
      {
        type: "p",
        text: "When you submit your address, we send a written offer within 24 hours. The offer states: the gross purchase price, the closing date, the title company we'll use, what we cover (everything on the buyer side), and the earnest money we'll deposit. No fees, no hidden math, no fine print. If our number wins for your situation, take it. If listing wins, we'll wish you luck and probably refer you to a Kansas City realtor we trust.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "selling-inherited-house-missouri-probate-timeline",
    title: "Selling an Inherited House in Missouri: The Probate Timeline (Plain English)",
    description:
      "How Missouri probate actually works when you inherit a Kansas City house — timeline, when you can sell, Medicaid recovery liens, multi-heir splits, and what your attorney won't tell you.",
    excerpt:
      "Most probate explainers are written by lawyers and read like it. Here's the actual timeline for selling an inherited Kansas City house through Missouri probate, in plain English.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-04",
    readTimeMin: 9,
    tags: ["inherited", "probate", "missouri", "estates"],
    relatedSituations: ["inherited"],
    relatedCities: ["independence-mo", "lees-summit-mo", "raytown-mo"],
    body: [
      {
        type: "p",
        text: "Inheriting a house in Missouri is one of those situations where you don't know what you don't know until you're in it. We've worked with dozens of sellers walking through Missouri probate over the past year, and the same questions come up every time. This post is the plain-English version of what your probate attorney will eventually explain — but probably won't, until you're 6 weeks in and asking why nothing has happened yet.",
      },
      {
        type: "callout",
        text: "Disclaimer: I'm not a Missouri probate attorney. This is practical experience from working with sellers, not legal advice. For your specific case, retain a qualified probate attorney before signing anything. Most Missouri probate lawyers offer free initial consultations.",
      },
      { type: "h2", text: "What probate actually is" },
      {
        type: "p",
        text: "Probate is the court process of: identifying the deceased's assets, paying their debts and taxes from those assets, and distributing whatever's left to the heirs named in their will (or to intestate heirs under Missouri law if there's no will). For a Kansas City house specifically, probate determines: who has legal authority to sell it, what liens or claims need to be satisfied first, and how the sale proceeds get split.",
      },
      { type: "h2", text: "The Missouri probate timeline (the part nobody tells you)" },
      {
        type: "p",
        text: "Missouri probate, for a typical estate without major disputes, runs 6 to 12 months from filing to closure. Here's how the time actually breaks down:",
      },
      {
        type: "ol",
        items: [
          "Filing the petition + getting Letters Testamentary or Letters of Administration: 2-6 weeks (faster if there's a will and the named executor is alive and competent; slower if intestate or contested)",
          "Notice to creditors period: 6 months (statutorily required in Missouri — creditors have this window to file claims against the estate)",
          "Inventory + appraisal: 30-60 days from Letters issuance",
          "Resolving claims, taxes, debts: 1-3 months (depends on what shows up)",
          "Final distribution + court closure: 1-3 months after creditor period ends",
        ],
      },
      {
        type: "p",
        text: "The 6-month creditor period is the part most heirs don't expect. Even with a will, even with no contested claims, even with a competent executor moving fast — you can't fully close the estate before that creditor window expires. This is what makes 'a 6-month minimum' realistic for most cases.",
      },
      { type: "h2", text: "The skip-probate path: revocable trusts" },
      {
        type: "p",
        text: "If your loved one held the Kansas City house in a revocable living trust (sometimes called a 'living trust'), you skip probate entirely. The successor trustee named in the trust document has immediate authority to sell the property — no court filing, no Letters, no creditor period. We close trust-owned house sales in 7-14 days routinely. If you're not sure whether the house was in a trust, look for a recorded document at the Jackson County Recorder's office (or Clay/Cass/Platte if applicable) called 'Quitclaim Deed to [Trust Name]' or similar — that's the giveaway. If the house is in a trust, get a copy of the trust document and skip the rest of this post.",
      },
      { type: "h2", text: "Can you sell during probate?" },
      {
        type: "p",
        text: "Yes, in most cases — and in fact most Missouri probate house sales close during probate, not after. The personal representative (executor or administrator) named in the Letters has authority to sell estate property, often with court approval. There are two paths:",
      },
      {
        type: "ul",
        items: [
          "Independent administration: Personal representative has broad authority and can sell without specific court approval for each transaction. This is most common in Missouri when the will grants independent administration.",
          "Supervised administration: Court approves each major estate transaction. Sale of real property requires a specific court order — adds 30-60 days to the closing timeline. This applies when the will doesn't grant independent powers, or in intestate cases.",
        ],
      },
      {
        type: "p",
        text: "Either way, the buyer's contract is contingent on probate completion (or court order for supervised cases). Cash buyers like us are comfortable with this contingency; financed buyers usually aren't, which is why probate sales often go to cash.",
      },
      { type: "h2", text: "The Medicaid recovery lien (this surprises people)" },
      {
        type: "p",
        text: "If your loved one received Missouri Medicaid for long-term care (nursing home, in-home care covered by MO HealthNet), Missouri's Medicaid Estate Recovery program may file a lien against the estate to recover what the state paid out. This lien is recoverable from the estate, not from you personally — but it does come out of gross sale proceeds before heirs are paid. We've closed estate sales with Medicaid liens of $30,000, $80,000, even $150,000+. The lien is real, it's standard, and your attorney will coordinate the payoff at closing. The shock for many heirs is realizing the inheritance is smaller than expected after this lien gets satisfied.",
      },
      { type: "h2", text: "Multi-heir splits" },
      {
        type: "p",
        text: "If multiple heirs inherit the property jointly (typical when there's no surviving spouse and multiple adult children), all heirs (or the personal representative acting for them) must sign the deed at closing. We've handled estates with siblings spread across three time zones. The mechanics:",
      },
      {
        type: "ul",
        items: [
          "We send the contract to each heir for signature (notarized) via overnight mail or DocuSign",
          "At closing, the title company wires each heir's share separately per the will or per Missouri intestate succession formula",
          "Disputes between heirs (one wants to sell, others don't) need legal resolution before we can close — usually a partition action filed in Jackson County Circuit Court, which adds months",
        ],
      },
      { type: "h2", text: "What heirs typically don't realize" },
      {
        type: "ol",
        items: [
          "The mortgage doesn't pause during probate. If the house has an active mortgage, payments continue from estate funds (or from heirs personally if the estate is short on liquid assets) until the sale closes. We've seen heirs personally fund 6-12 months of mortgage payments on inherited properties.",
          "Property insurance can lapse. The deceased's policy may cancel upon death notice. Many heirs discover this 60 days in when they realize the house isn't covered. Get a vacant-property policy immediately — most carriers offer them.",
          "Utilities still need to run. Even on a vacant inherited property, you typically want minimal utilities running (heat in winter to prevent pipe freezes, basic security lighting). Estimate $150-$300/month in carrying costs on a Kansas City vacant property.",
          "Property taxes are still due. Both Jackson County's and Clay County's first-half tax payment is due December 31; second-half June 30. Estate funds cover these or they become delinquent and can lead to tax sale.",
        ],
      },
      { type: "h2", text: "The pre-probate sale gotcha" },
      {
        type: "p",
        text: "If the deceased was the sole owner and the property's NOT in a trust, you cannot legally sell the house until probate is opened. Period. Some sellers try to sign a contract with a buyer 'to save time' before probate is filed; that contract is unenforceable at best and fraudulent at worst. Wait for Letters, then sign. We've turned down sellers who didn't have authority yet because we'd rather wait 6 weeks for them to get Letters than enter into a contract that can't legally close.",
      },
      { type: "h2", text: "When to call a Kansas City probate attorney" },
      {
        type: "p",
        text: "Today, ideally. Even before you decide what to do with the house. Most Missouri probate attorneys offer free initial consultations and can tell you within an hour whether the estate needs supervised vs independent administration, whether Medicaid recovery is likely, and what the timeline looks like. The cost of probate (attorney fees + court costs) typically runs $1,500-$5,000 for a simple estate, paid from estate funds — not your personal funds.",
      },
      { type: "h2", text: "Selling to us" },
      {
        type: "p",
        text: "If the house is in a trust, we close in 7-14 days. If the house is in probate, we contract immediately, open title, and close at the appropriate point in the probate timeline (whenever Letters are issued for independent admin, or upon court order for supervised). We coordinate directly with your probate attorney throughout. We've closed enough Missouri estate sales that our title companies know exactly what documentation they need at each stage. Out-of-state heirs handled remotely — we send mobile notaries to your location for signatures.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "behind-on-mortgage-kansas-city-foreclosure-options",
    title: "Behind on Mortgage Payments in Kansas City: Your Options Before Foreclosure",
    description:
      "If you're behind on your Kansas City mortgage, here are your real options ranked by impact on your credit, ranging from loan modification to a cash sale before the trustee sale.",
    excerpt:
      "If you're 1-2 payments behind, you still have every option. If you're 3+ behind, the window is closing. Here's the playbook ranked by what'll actually help.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-07",
    readTimeMin: 8,
    tags: ["foreclosure", "mortgage", "missouri", "kansas-city"],
    relatedSituations: ["foreclosure"],
    relatedCities: ["kansas-city-mo", "independence-mo", "raytown-mo"],
    body: [
      {
        type: "p",
        text: "Falling behind on a mortgage is one of the most stressful experiences a homeowner can face. The phone calls from the lender, the certified mail you're afraid to open, the constant math in your head about whether you can catch up. If you're reading this, you're probably looking for honest answers about what comes next. Here's what we tell Kansas City sellers who reach us in this situation, ranked by what actually helps depending on where you are in the timeline.",
      },
      {
        type: "callout",
        tone: "warning",
        text: "If you've already received a Notice of Default or Notice of Trustee Sale, the auction date is closer than it feels. Missouri non-judicial foreclosure typically runs 21 days from Notice of Sale to auction. Don't wait to act.",
      },
      { type: "h2", text: "Where you are right now (matters more than you think)" },
      {
        type: "p",
        text: "The right answer depends entirely on how far into the timeline you are. Roughly:",
      },
      {
        type: "ul",
        items: [
          "1 payment behind (under 30 days late): Most options open. Lender will work with you. Credit damage is minimal so far.",
          "2 payments behind (30-60 days late): Loan modification, forbearance, or a quick reinstatement still very possible. Mortgage credit reporting starts hitting your credit report.",
          "3 payments behind (60-90 days late): Lender begins formal pre-foreclosure outreach. Loan modification still possible but harder. Credit damage is real.",
          "Notice of Default issued (typically 90+ days late in MO): Foreclosure has officially started. Reinstatement still possible but expensive (full back-payments + fees).",
          "Notice of Trustee Sale issued: Auction date is set ~21 days out. Window is narrowing fast.",
          "Day before/day of trustee sale: Last chance for cash sale before auction. Closing must happen before sale date.",
          "Post-foreclosure: Property already taken. Different process; this post doesn't cover it.",
        ],
      },
      { type: "h2", text: "Option 1: Reinstate the loan" },
      {
        type: "p",
        text: "Reinstatement means paying everything you're behind on — missed payments, late fees, lender's foreclosure attorney fees — in one lump sum to bring the loan current. This option exists from the moment you fall behind until (in Missouri) shortly before the trustee sale. Pros: zero impact on credit, you keep the house. Cons: you need a chunk of cash. If you can borrow from family, liquidate retirement savings, or do a cash-out from another source, this is the cleanest fix. Reinstatement amounts grow each month — $5k at 60 days behind can become $12k at 120 days behind once attorney fees add up.",
      },
      { type: "h2", text: "Option 2: Loan modification" },
      {
        type: "p",
        text: "Loan modification permanently changes your loan terms — usually extending the term, reducing the rate, or capitalizing missed payments into the principal balance. The lender's loss-mitigation department reviews your financials and offers terms that make the loan affordable going forward. Pros: you keep the house, payment becomes affordable. Cons: process takes 60-120 days, often longer, while interest and fees keep accruing. Approval rates are not high — somewhere in the 30-50% range historically. If you've had a one-time hardship that's now resolved (job loss followed by new job, medical issue now stable), modification has the best shot.",
      },
      {
        type: "callout",
        text: "Apply for modification through your servicer's loss-mitigation department directly, not through a third-party 'foreclosure rescue' company. Those companies frequently charge thousands for paperwork the servicer requires you to fill out yourself. The servicer's modification process is free.",
      },
      { type: "h2", text: "Option 3: Forbearance" },
      {
        type: "p",
        text: "Forbearance is a temporary pause or reduction of payments — usually 3-6 months — for a specific hardship (unemployment, illness, deployment). Missed payments accrue and become due at the end of the forbearance period as either: a lump sum, a repayment plan, or capitalized into the loan. Pros: immediate breathing room. Cons: doesn't solve the underlying problem if your income hasn't recovered by the end of the forbearance period. Best for: a clear, short-term hardship that you can confidently say will be over in 3-6 months.",
      },
      { type: "h2", text: "Option 4: Short sale" },
      {
        type: "p",
        text: "If you owe more on the mortgage than the house is worth (you're 'underwater'), a short sale lets the lender accept less than the full payoff to avoid foreclosure. The lender typically forgives the difference. Pros: avoids foreclosure on credit, can prevent deficiency judgment. Cons: takes 60-180 days for lender approval, requires substantial documentation, and the lender may report the forgiven debt as a loss on your credit. Worth pursuing if: you're underwater AND you have time before the trustee sale AND your hardship paperwork is in order.",
      },
      { type: "h2", text: "Option 5: Cash sale before the trustee sale" },
      {
        type: "p",
        text: "This is what we do. If you have equity in the house but can't afford to keep it, selling to a cash buyer like Heartland Acquisitions before the auction date stops the foreclosure cold. Here's how it works mechanically: we open title and request a payoff statement from your lender. We close at a Kansas City title company. The full mortgage payoff goes directly to the lender (which stops the foreclosure proceedings), and any remaining equity goes to you. The foreclosure does NOT show up as a forced sale on your credit because the loan was paid in full at closing. The pre-auction missed payments still show on your report, but no foreclosure designation — which makes a substantial difference for future credit and rentals.",
      },
      { type: "h3", text: "When the cash sale path makes sense" },
      {
        type: "ul",
        items: [
          "You have equity (house is worth more than the mortgage payoff)",
          "You need to be out fast — auction date is approaching",
          "Loan modification was denied or you don't think you'll qualify",
          "You're underwater but want to avoid the credit hit of foreclosure (some lenders accept short payoff from cash buyers; we coordinate)",
          "You have other personal reasons to want a clean break (divorce, family emergency, job loss with relocation)",
        ],
      },
      { type: "h3", text: "Speed of cash close before auction" },
      {
        type: "p",
        text: "We've closed Missouri foreclosure deals in 5 business days when the auction was scheduled within the week. Title companies in Jackson County can rush a foreclosure file when needed. The key is opening title and requesting the lender payoff statement the same day you accept the offer. Don't wait until the week of the sale to act — that compresses the timeline aggressively.",
      },
      { type: "h2", text: "What to avoid" },
      {
        type: "ul",
        items: [
          "'Foreclosure rescue' scams that ask for upfront fees to negotiate with your lender. The servicer's loss-mitigation department is free.",
          "Signing a deed-in-lieu of foreclosure to a private party (not your lender) without an attorney reviewing it. Some scams transfer your house to the 'rescue' company while you're still on the hook for the mortgage.",
          "Cash buyers who pressure you to sign on the spot, refuse to put earnest money in escrow, or won't show you the contract before you sign.",
          "Doing nothing. The single worst option. A Missouri non-judicial foreclosure can wipe out 20-30 years of equity in 21 days.",
        ],
      },
      { type: "h2", text: "Where to get free help" },
      {
        type: "p",
        text: "HUD-approved housing counselors offer free foreclosure prevention counseling. They're funded by HUD and don't sell you anything. Two solid options for Kansas City: Catholic Charities of Kansas City-St. Joseph (816-399-2020) and Operation Breakthrough (816-329-3070) both have certified housing counselors who can walk you through your options for free. Call before signing anything if you have time.",
      },
      { type: "h2", text: "Getting a cash offer if that's the right path" },
      {
        type: "p",
        text: "If you decide a cash sale is your best option — or even if you're not sure yet — we'll send you a written cash offer in 24 hours with no obligation. Submit your address through the form on our homepage. Even if you ultimately go with modification or reinstatement, having a backup cash number from us puts you in a stronger negotiating position with your lender. You can keep our offer in your pocket while you pursue other paths, and use it only if those don't work out.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // BATCH 2
  // -------------------------------------------------------------------------
  {
    slug: "how-cash-offers-are-calculated-for-kansas-city-houses",
    title: "How Cash Offers Are Calculated for Kansas City Houses (No Black Box)",
    description:
      "The actual formula cash buyers use to price Kansas City houses — ARV, renovation budget, holding costs, margin. Real example with numbers from an Independence sale.",
    excerpt:
      "Most cash buyers won't show you the math. Here's the formula we use to price every KC house we make an offer on, with real numbers from a recent Independence deal.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-22",
    readTimeMin: 8,
    tags: ["pricing", "process", "transparency"],
    relatedSituations: ["foreclosure", "inherited"],
    relatedCities: ["kansas-city-mo", "independence-mo", "raytown-mo"],
    body: [
      {
        type: "p",
        text: "When I started buying houses in Kansas City, the most consistent feedback I got from sellers was: \"I don't understand how you came up with that number.\" That's a fair complaint. Most cash buyers treat their offer methodology like a trade secret, which is fine for them but bad for sellers trying to evaluate whether the offer is fair. So here's the actual formula. It's not magic, it's not unique to us, and once you see it, you can do this math yourself on any cash offer you receive in the KC metro.",
      },
      { type: "h2", text: "The formula in one line" },
      {
        type: "p",
        text: "Offer = ARV × (some percentage) − Renovation Budget − Holding Costs − Closing Costs − Margin. That's it. Every cash buyer in Kansas City uses some version of this. The percentage and margin vary buyer-to-buyer, but the structure is the same. Let me walk through each piece.",
      },
      { type: "h2", text: "ARV: After-Repair Value" },
      {
        type: "p",
        text: "ARV is what the house will be worth AFTER we renovate it to current market standards. Not what it's worth today. We pull comparable recent sales (last 3-6 months) within a tight geography (usually within 0.5 miles, same school district, same general housing era) and adjust for square footage, lot size, garage, and condition. The output is a range — say $235,000 to $260,000 — and we underwrite to the conservative end. ARV is the single biggest driver of the offer; getting it right matters more than any other piece of the math.",
      },
      { type: "h2", text: "Renovation Budget" },
      {
        type: "p",
        text: "How much we'll spend bringing the house to ARV-comparable condition. We walk through during the offer phase and assess: kitchen (cabinets, counters, appliances), baths (typical full-renovation $8-15k each), HVAC, roof, electrical, plumbing, flooring, paint, exterior, landscaping. For older Kansas City houses (1950s-60s ranches), full renovations typically run $40k-$80k. For newer-build cosmetic refreshes, $15k-$30k. For total tear-and-rebuild on fire damage or hoarder houses, can exceed $100k. We pad the budget by 10-15% because there's always something hidden behind the walls.",
      },
      { type: "h2", text: "Holding Costs" },
      {
        type: "p",
        text: "What we pay to own the house during renovation and resale: property taxes, insurance, utilities, lawn care, HOA dues, property management, and the cost of capital tied up. For a typical 4-month hold (closing → renovation → resale), holding costs run $4,000-$8,000 on a Kansas City house. Higher in Johnson County (taxes are higher), lower in some KCK pockets.",
      },
      { type: "h2", text: "Closing Costs" },
      {
        type: "p",
        text: "Buyer-side closing costs we pay at the title company on the purchase plus seller-side closing costs we'll pay on the resale. Combined, this typically runs 2-4% of ARV. For a $250k ARV house, that's $5,000-$10,000 we factor into our number.",
      },
      { type: "h2", text: "Margin" },
      {
        type: "p",
        text: "Our profit. This is what we'd refuse to share if we were trying to sound mysterious, but it's straightforward: cash home buyers in Kansas City typically target 12-18% margin on completed deals (margin = (ARV − all costs − purchase price) / ARV). On a $250k ARV house, that's $30k-$45k of margin we need to make for the deal to pencil. Less margin and the deal doesn't justify the capital risk; more margin and the seller is getting a number they shouldn't accept.",
      },
      { type: "h2", text: "A real Kansas City example with numbers" },
      {
        type: "p",
        text: "Last quarter we bought a 1965 ranch in 64133 (Raytown). Walked through, ran the math:",
      },
      {
        type: "ul",
        items: [
          "ARV (after typical renovation): $240,000 (based on 4 comparable sales within 0.4 mi)",
          "Renovation budget: $52,000 (full kitchen, both bathrooms, HVAC replacement, paint, flooring, exterior touch-up)",
          "Holding costs (4 months): $5,800",
          "Closing costs (purchase + sale combined): $7,500",
          "Margin target (15% of ARV): $36,000",
        ],
      },
      {
        type: "p",
        text: "Offer = $240,000 − $52,000 − $5,800 − $7,500 − $36,000 = $138,700.",
      },
      {
        type: "p",
        text: "We rounded to $138,500 and the seller accepted. Closed in 11 days. That's how the sausage actually gets made.",
      },
      { type: "h2", text: "Why offers vary by neighborhood (a lot)" },
      {
        type: "p",
        text: "The same 1,400 sq ft 3-bedroom house in different KC neighborhoods produces wildly different offers because ARV varies wildly. Examples:",
      },
      {
        type: "ul",
        items: [
          "Brookside (64113): ARV maybe $400k+. Cash offer in $290-340k range.",
          "Waldo (64114): ARV $325-375k. Cash offer in $235-275k range.",
          "Independence (64055): ARV $215-235k. Cash offer in $145-180k range.",
          "Raytown (64133): ARV $200-220k. Cash offer in $135-165k range.",
          "KCK Argentine (66103): ARV $100-130k. Cash offer in $55-85k range.",
        ],
      },
      {
        type: "p",
        text: "These are illustrative ranges, not promises. Your specific house's offer depends on its specific condition, ARV, and our specific renovation scope. But this gives you a sense of why the same metro produces $50k offers and $300k offers from the same buyer.",
      },
      { type: "h2", text: "What doesn't (much) affect the offer" },
      {
        type: "ul",
        items: [
          "How clean the house is right now. We're renovating it; clean today doesn't matter.",
          "Whether you have furniture or stuff to leave. We dispose of all of it.",
          "How much you owe on the mortgage. Our offer is based on the house's value, not your debt situation. (Though the math has to work for both of us at closing.)",
          "How attached you are to the house emotionally. We get it, but ARV doesn't care.",
          "Recent personal-use upgrades that don't translate to retail comp adjustments (above-ground pool, custom paint colors, etc.).",
        ],
      },
      { type: "h2", text: "Why we don't haggle from a low number" },
      {
        type: "p",
        text: "Some cash buyers open with a deliberately low number expecting the seller to counter, then move up to where they actually want to buy. We don't operate that way — partly because it wastes everyone's time, partly because sellers in distressed situations don't have time for a 5-round negotiation. Our first offer is our actual number. If you counter, we'll consider whether we got the math wrong (sometimes we did — bad comp, missed a feature) or whether we just disagree on value. If we disagree on value, we'll wish you luck and won't keep coming back with marginally higher offers to try to wear you down.",
      },
      { type: "h2", text: "How to evaluate any cash offer" },
      {
        type: "ol",
        items: [
          "Pull 3-5 recent (last 6 months) sales of similar Kansas City houses in similar condition within 0.5 miles. Zillow's recently sold filter or Realtor.com works for this.",
          "That's your ARV-after-renovation rough estimate.",
          "Estimate renovation budget as 15-25% of ARV for a typical older Kansas City house (less for clean newer builds, more for distressed).",
          "Subtract another 5-7% for holding + closing + margin combined.",
          "What you have left should be in the same ballpark as a fair cash offer.",
        ],
      },
      {
        type: "p",
        text: "If the offer you're holding is significantly below this rough math, the buyer is either making a bad offer or knows something about your house that you don't (lien, encroachment, foundation issue you weren't aware of). Push back, get a second opinion, or get one of us to look at it.",
      },
      { type: "h2", text: "Our offer process" },
      {
        type: "p",
        text: "When you submit your address from our homepage, we run the comp pull and renovation walkthrough estimate within 1-4 hours. We send a written offer that states the gross price, the closing date, the title company we'll use, what we cover, and our earnest money deposit. We're happy to walk through the math line-by-line on a phone call — just ask. No mystery, no pressure.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "selling-a-hoarder-house-in-kansas-city",
    title: "Selling a Hoarder House in Kansas City: What to Expect",
    description:
      "Practical guide to selling a hoarder house in Kansas City — the walkthrough, what 'leave everything' really means, biohazard considerations, multi-heir dynamics, and timeline.",
    excerpt:
      "Hoarder houses are one of the most stressful things to sell. Here's what actually happens when you sell one to a cash buyer in Kansas City — without judgment, without cleanup, without surprises.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-28",
    readTimeMin: 7,
    tags: ["distressed", "inherited", "process"],
    relatedSituations: ["inherited", "fire-damage"],
    relatedCities: ["independence-mo", "raytown-mo", "kansas-city-mo"],
    body: [
      {
        type: "p",
        text: "Selling a hoarder house is one of the hardest situations a seller can face. There's almost always grief involved (these are usually inherited properties from a parent or sibling), there's often shame and embarrassment (sellers worry about being judged), and there's a real practical problem: the house is unsellable on the MLS in its current state, and cleaning it out can cost as much as the renovation work afterward. We buy hoarder houses in Kansas City regularly and the process is much more straightforward than most sellers expect. Here's what to actually expect.",
      },
      { type: "h2", text: "First: no judgment" },
      {
        type: "p",
        text: "Hoarding is a recognized mental health condition, not a character flaw. The houses we walk into in this situation are almost never about the seller — they're inherited from parents or relatives whose hoarding accumulated over decades. Even when the seller is the original hoarder, this isn't something we comment on, document, or use against you in any way. Our job is to assess the property and make an offer. Yours is to decide whether to take it. That's the whole transaction.",
      },
      { type: "h2", text: "What makes a hoarder house different (for us)" },
      {
        type: "p",
        text: "From a buyer's standpoint, three things change relative to a normal Kansas City house purchase:",
      },
      {
        type: "ol",
        items: [
          "Cleanout cost is real and substantial. Removing the contents of a 1,400 sq ft hoarder house typically runs $3,000-$15,000 in disposal fees alone, depending on volume and biohazard considerations. We absorb that.",
          "Renovation scope is harder to estimate during the walkthrough because we literally can't see floors, walls, or fixtures. We assume some level of damage exists underneath.",
          "Health and safety considerations during cleanout — animal waste, mold, structural issues from years of weight on floors, occasionally biohazards (medical waste, expired chemicals). We use professional remediation companies, not a guy with a truck.",
        ],
      },
      { type: "h2", text: "What 'leave everything' actually means" },
      {
        type: "p",
        text: "When we say 'sell as-is, leave anything you don't want,' we mean it literally. You walk through the house, take whatever has sentimental or financial value to you (photos, documents, jewelry, anything specific you want), and we handle 100% of the rest. That includes: furniture (used or broken), appliances, clothing, books, papers, mail going back 40 years, food, garbage, kitchen contents, basement contents, garage contents, attic contents, and any belongings of the deceased. None of it needs to be sorted, boxed, or taken to a donation site. Walk in, take what you want, walk out, hand us the keys.",
      },
      { type: "h2", text: "What you should still do before closing" },
      {
        type: "p",
        text: "There are a few specific things worth retrieving before signing the deed over to us, because they're hard or impossible to recover after:",
      },
      {
        type: "ul",
        items: [
          "Personal photo albums and photographs (we'll do our best, but in a typical hoarder cleanout, we can't reliably preserve everything)",
          "Important documents — birth certificates, social security cards, military records, tax returns, deeds to other property",
          "Jewelry, watches, and other small valuables (hoarder houses often have valuables hidden in unexpected places — mattresses, cookie jars, between book pages)",
          "Family heirlooms and items with sentimental value to other family members",
          "Anything the deceased specifically willed to a particular person",
        ],
      },
      {
        type: "callout",
        text: "If you don't have time or capacity to walk through and retrieve items yourself, we can connect you with Kansas City sorting services that specialize in this — they go through the house systematically, photograph and catalog items, and let you decide what to keep. Most charge $50-100/hour.",
      },
      { type: "h2", text: "The walkthrough" },
      {
        type: "p",
        text: "Our walkthrough on a hoarder house is shorter than a normal one (15-30 minutes typically) because we can't see most of what we'd normally inspect. We're really doing three things: assessing the structural envelope (foundation, framing, roof — visible from outside or in clear areas), confirming the rough floor plan and square footage, and estimating cleanout volume. We don't need you to be there during the walkthrough; many sellers prefer to give us the keys and meet up afterward. Out-of-state heirs often coordinate with a neighbor or local family member to give us access.",
      },
      { type: "h2", text: "Multi-heir dynamics" },
      {
        type: "p",
        text: "Most hoarder houses we buy come through inherited estates with multiple heirs, and there's almost always emotional weight — siblings disagree about whether to sell, who's responsible for the cleanout, whether the house's condition reflects family failure. We stay out of those dynamics entirely. Our contract goes to the personal representative or all heirs jointly, signatures coordinate through your probate attorney, and proceeds split per the will or intestate succession at closing. We've watched siblings work out 30-year tensions over an inherited hoarder house; it's not our place to comment, and we don't.",
      },
      { type: "h2", text: "Timeline" },
      {
        type: "p",
        text: "Standard 7-14 day close from accepted offer if title is clear and the property's not in probate. Probate adds 6-12 months unless the property was in a trust. Out-of-state heirs add a few days for notary coordination. The walkthrough-to-offer turnaround is the same as any other house: 1-2 days from address submission.",
      },
      { type: "h2", text: "What we won't do" },
      {
        type: "ul",
        items: [
          "Photograph the house's contents to share publicly. Ever.",
          "Make assumptions or comments about the deceased or about you.",
          "Negotiate the offer down based on cleanout cost surprises. Our offer accounts for what we see during the walkthrough.",
          "Pressure you on a timeline. Take the offer to your attorney, family, or therapist before signing.",
        ],
      },
      { type: "h2", text: "Common emotional dynamics" },
      {
        type: "p",
        text: "I've watched a lot of sellers walk through a hoarder house for the first time after a parent's death and visibly struggle. A few things that have helped people:",
      },
      {
        type: "ol",
        items: [
          "Bring someone with you. A sibling, a friend, even a hired sorter.",
          "Plan a finite amount of time. Two hours, then leave. The house isn't going anywhere.",
          "Don't try to assign meaning to everything. Most of what's in the house wasn't meaningful to the deceased either; it was the result of the condition.",
          "It's okay to take photos and leave physical items. Most sellers who try to keep too much regret it later.",
          "If you find money, jewelry, or important documents, retrieve them. If you find old mail, family photos, and decades-old receipts, the cleanout team will dispose of them respectfully.",
        ],
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "Submit the address through our homepage and we'll respond within 24 hours with next steps. We'll arrange the walkthrough at a time that works for you (or a representative if you're out of state). Written offer goes to you the same day or next day. From there, the timeline is yours.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "selling-a-house-with-title-issues-jackson-county",
    title: "Selling a House With Title Issues in Jackson County, MO",
    description:
      "Common title issues that show up on Jackson County houses — mechanic's liens, IRS liens, divorce-era clouds, missing heirs, undischarged mortgages — and how a cash buyer handles each.",
    excerpt:
      "If a title search came back ugly, you're not stuck. Most title issues on Kansas City houses can be resolved at closing. Here's the breakdown of what we see most and how each gets handled.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-02",
    readTimeMin: 8,
    tags: ["title", "process", "missouri"],
    relatedSituations: ["inherited", "foreclosure", "divorce"],
    relatedCities: ["kansas-city-mo", "independence-mo", "lees-summit-mo"],
    body: [
      {
        type: "p",
        text: "If a title search on your Kansas City house came back with problems, the first thing to know is: title issues kill conventional sales but rarely kill cash sales. Banks won't lend on a house with title clouds; cash buyers like us will close as long as the math works after satisfying the encumbrances. This post walks through the title issues we see most often on Jackson County properties and how each one gets handled at closing.",
      },
      {
        type: "callout",
        text: "Disclaimer: title work is technical and state-specific. This is practical experience, not legal advice. Your specific situation deserves a Missouri real estate attorney or title officer's review before signing anything.",
      },
      { type: "h2", text: "What title work actually checks" },
      {
        type: "p",
        text: "When you go under contract on a Kansas City house, the title company runs a search through Jackson County land records (or Clay/Cass/Platte if applicable) going back 40-60 years to confirm: who legally owns the property, what mortgages or liens are recorded against it, whether prior transfers were properly executed, and whether anyone else might have a legal claim. The output is a title commitment listing 'exceptions' — things that need to be resolved before the title insurer will issue a clean policy. Some exceptions are routine (utility easements, standard restrictions); others are the issues this post covers.",
      },
      { type: "h2", text: "Mechanic's liens" },
      {
        type: "p",
        text: "Missouri allows contractors, subcontractors, and material suppliers to file a lien against a property if they weren't paid for work done. They have 6 months from the work completion date to file. We see these on Kansas City properties where the homeowner had remodeling, roofing, or HVAC work done and disputed the invoice (or the invoice slipped through during a rough financial period). To clear: the lien gets paid off at closing from gross proceeds before the seller is paid. If the lien amount is disputed, we coordinate with the lienholder to negotiate a payoff. If the lien exceeds gross sale proceeds, the deal restructures or falls apart — but that's rare.",
      },
      { type: "h2", text: "IRS tax liens" },
      {
        type: "p",
        text: "If the seller (or a previous owner) has unpaid federal taxes, the IRS may have filed a Notice of Federal Tax Lien against the property. These are nondiscriminatory — the IRS doesn't care who lives there, just that there's a lien against the property. To clear: the IRS lien is paid at closing from gross proceeds, OR the IRS issues a Certificate of Discharge (used when sale proceeds don't cover the full lien amount but the IRS agrees to release the lien anyway because it's their best path to recovery). The discharge process takes 30-60 days, which can extend a normal closing timeline. We've worked through several IRS-lien sales in Jackson County; it's mechanical.",
      },
      { type: "h2", text: "Missouri state tax liens" },
      {
        type: "p",
        text: "Same concept as IRS liens but for unpaid Missouri state income tax or Missouri sales tax. Cleared the same way: paid at closing or discharged. Missouri's Department of Revenue is generally faster than the IRS on discharge processing.",
      },
      { type: "h2", text: "Property tax delinquency" },
      {
        type: "p",
        text: "Jackson County collects property taxes in two halves (December 31 first half, June 30 second half). If your Kansas City house is delinquent, the unpaid amount becomes a lien against the property. Long-running delinquency (3+ years) can lead to inclusion in Jackson County's annual tax sale (typically August). To clear: back taxes paid at closing as a deduction from gross proceeds. We've bought Jackson County tax-sale properties days before the sale was scheduled.",
      },
      { type: "h2", text: "Divorce-era title clouds" },
      {
        type: "p",
        text: "If a Kansas City house was titled jointly during a marriage and the divorce decree didn't explicitly transfer title to one spouse (or didn't get recorded in Jackson County land records), title may still show both spouses as owners — even years later, even if one spouse has been deceased for years. To clear: a quitclaim deed from the non-titled spouse (or their estate) is needed before closing. If the ex-spouse is unreachable or non-cooperative, an attorney files a quiet-title action in Jackson County Circuit Court — adds 60-120 days but resolves it. We've waited out quiet-title actions; it's not glamorous but it works.",
      },
      { type: "h2", text: "Missing heirs / improperly closed estates" },
      {
        type: "p",
        text: "When a previous owner died and the estate wasn't properly closed in probate, title may technically still vest in the estate or in heirs whose interests were never extinguished. We see this most often on inherited Kansas City houses where the deceased was 1-2 generations back and probate was handled informally (or not at all). To clear: a probate filing now establishes proper succession of title. For very old issues (heirs are themselves deceased), a quiet-title action substitutes. Adds time; doesn't kill the deal.",
      },
      { type: "h2", text: "Undischarged mortgages from prior owners" },
      {
        type: "p",
        text: "Sometimes a previous owner paid off their mortgage but the lender never recorded a Release of Deed of Trust in Jackson County land records. Title shows the mortgage still active. To clear: title company contacts the prior lender and requests a release. If the lender no longer exists (merged, bought, dissolved), the title company can request a substitute trustee deed of release. This adds 1-3 weeks but is routine.",
      },
      { type: "h2", text: "HOA arrears" },
      {
        type: "p",
        text: "Homeowner association unpaid dues create a lien against the property. We see these on Lee's Summit, Overland Park, and parts of Independence with HOAs. To clear: HOA dues are paid at closing from gross proceeds. The HOA management company provides a written certificate of compliance showing the exact amount owed.",
      },
      { type: "h2", text: "Encroachments and survey issues" },
      {
        type: "p",
        text: "A neighbor's fence on your property, a shed straddling the property line, or a garage with a corner over the lot line. Most of these don't kill closings — they get noted as exceptions on the title policy and life goes on. Major encroachments (a substantial portion of a permanent structure on the wrong lot) can require a survey, a boundary line agreement, or in the worst case, removal of the structure. We've never had this kill a Kansas City deal.",
      },
      { type: "h2", text: "Mineral and oil/gas rights" },
      {
        type: "p",
        text: "Some Kansas City and Jackson County properties have severed mineral rights — the surface owner doesn't own the rights to oil, gas, or minerals beneath. This rarely affects practical use but shows up on title commitments. We don't worry about it. Most cash buyers don't.",
      },
      { type: "h2", text: "When title issues actually kill a deal" },
      {
        type: "p",
        text: "Three scenarios where the math stops working:",
      },
      {
        type: "ol",
        items: [
          "Total liens exceed gross sale proceeds AND we can't negotiate payoff discounts. Rare but happens with multi-lien situations on lower-value properties.",
          "Title issues require a partition action or other litigation that would take 12+ months. Most cash buyers won't tie up a contract that long; we'll close on something else and revisit later.",
          "Fraud — title shows the seller doesn't actually own the property. We walk away immediately.",
        ],
      },
      { type: "h2", text: "How to find out if your house has title issues before listing" },
      {
        type: "p",
        text: "The easiest path: get a free preliminary title check. Most Jackson County title companies (Continental Title, Tradition Title, Kansas City Title) will pull a quick search on your property for $0 or $50, depending on the office. Tell them you're considering selling and want to know if there are encumbrances; they'll let you know. Alternatively, when you submit your address to us for a cash offer, our title work will surface any issues — and we'll tell you what they are even if you decide not to sell to us.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "If you suspect (or know) your Kansas City house has title issues and you're not sure whether selling is even possible, submit your address through our homepage. We'll order title work as part of the offer process and walk you through whatever shows up. Most title issues on Kansas City houses are mechanical to resolve at closing; we've handled almost every variant Jackson County has produced.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "what-closing-day-looks-like-kansas-city-title-company",
    title: "What Closing Day Looks Like at a Kansas City Title Company",
    description:
      "A practical walkthrough of closing day at a Kansas City title company — what to bring, the documents you'll sign, common questions, when the wire actually hits, and what can delay things.",
    excerpt:
      "Most sellers have only closed a house once or twice in their lives. Here's a clear, no-pressure walkthrough of what closing day actually looks like in Kansas City — start to finish.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-06",
    readTimeMin: 7,
    tags: ["closing", "process", "title"],
    relatedSituations: ["foreclosure", "inherited", "divorce"],
    relatedCities: ["kansas-city-mo", "independence-mo", "overland-park-ks"],
    body: [
      {
        type: "p",
        text: "Most sellers have only closed a house once or twice in their lives, and the process can feel mysterious. This post is the no-jargon version of what to expect on closing day at a Kansas City title company — what to bring, what you'll sign, how long it takes, and when the money actually shows up in your account.",
      },
      { type: "h2", text: "Where you actually go" },
      {
        type: "p",
        text: "Closings on Kansas City houses happen at one of several established title companies in the metro: Continental Title (multiple Jackson County offices), Tradition Title (Liberty, KC), Kansas City Title (Plaza area), Capitol Title (KCK and Johnson County). Most cash buyers have a preferred title company they use repeatedly. The address will be in your closing instructions email a few days before the date. Almost all are office settings with a closing room, a notary on staff, and free coffee.",
      },
      { type: "h2", text: "What to bring" },
      {
        type: "ul",
        items: [
          "Government-issued photo ID (driver's license, passport, or state ID). Required for the notary's records.",
          "Account information for where the wire should land. Routing number and account number from your bank. The title company will provide a wiring instruction form to fill out.",
          "If multiple sellers are signing (joint owners, spouses), each person needs their own photo ID.",
          "Anything specific the title company asked for in advance — they'll email you a checklist.",
        ],
      },
      {
        type: "callout",
        text: "If you can't be at the closing in person — out of state, mobility issues, scheduling conflict — almost all Kansas City title companies offer mobile notary services. They send a notary to your location with the documents, you sign, the notary returns the signed documents to the title company, and the wire goes out per normal. Adds 24-48 hours to the timeline but works seamlessly.",
      },
      { type: "h2", text: "What you'll sign (the documents)" },
      {
        type: "p",
        text: "A standard Kansas City closing has 6-12 documents the seller signs. The most important ones:",
      },
      {
        type: "ol",
        items: [
          "Warranty Deed — the legal document transferring ownership from you to the buyer. This is the main one. Notarized.",
          "Settlement Statement (CD or HUD-1 depending on transaction type) — itemized accounting of every dollar in the transaction. Confirms the gross sale price, every deduction (mortgage payoff, taxes, lien payoffs, title fees), and the net wire amount to you.",
          "Affidavit of Title — sworn statement that you have authority to sell, that there are no undisclosed liens, that no construction work has been done in the past 6 months that could result in mechanic's liens, etc.",
          "Bill of Sale — transfers any personal property included in the sale (appliances, etc.).",
          "Notice of Federal Tax Withholding (FIRPTA) — only if you're a non-US resident; otherwise the affidavit waives it.",
          "Borrower's authorization for mortgage payoff — if you have an existing mortgage, this authorizes the title company to send the payoff directly to your lender.",
          "Various smaller affidavits and disclosures — Missouri-specific or buyer-specific paperwork.",
        ],
      },
      { type: "h2", text: "How long it takes" },
      {
        type: "p",
        text: "A normal seller-side closing in Kansas City takes 30-45 minutes from arrival to leaving. The title officer walks you through each document, explains what it is, points to where you sign, and answers any questions. There's no pressure to rush. Don't sign anything you don't understand — ask questions, take time to read. The title company isn't going anywhere.",
      },
      { type: "h2", text: "Common questions sellers ask during closing" },
      {
        type: "ul",
        items: [
          "\"Why is this number on the settlement statement?\" — Always ask. The title officer will walk through every line. Common surprises: pro-rated property taxes (you owe through closing date, even if next bill isn't due yet), HOA pro-rations, water/sewer pro-rations.",
          "\"What if the wire doesn't show up?\" — Wires from Kansas City title companies typically land within 2-4 business hours after closing. Same-day if you close before noon. The title officer can tell you the expected ETA.",
          "\"Do I need to do anything after closing?\" — Cancel home insurance (don't cancel before closing — keep coverage through the closing date itself), cancel utilities for the day after closing, change your address with the post office.",
          "\"What about the keys and access?\" — Bring all keys, garage door openers, and any access codes (gate, alarm, mailbox key) to closing. The buyer takes possession the moment the deed is signed and recorded.",
        ],
      },
      { type: "h2", text: "When the wire actually hits" },
      {
        type: "p",
        text: "Closing happens. You sign documents. The title officer walks the deed to the Jackson County Recorder for recording (usually electronic — happens within minutes during business hours). Once recorded, the title company releases the wire. Most Kansas City sellers see the funds in their account within 2-4 business hours of leaving the closing if they closed before noon. Closing in the afternoon means the wire usually hits the next morning — Federal Reserve cutoff times affect same-day wire eligibility.",
      },
      { type: "h2", text: "What can delay closing day" },
      {
        type: "ul",
        items: [
          "Last-minute lien surprise — a creditor files a lien between title commitment and closing day. Rare but happens. Resolution: lien paid at closing, deal proceeds. Adds 1-2 hours.",
          "Mortgage payoff number is wrong — your lender's payoff statement was off because they hadn't applied a recent payment. Title officer calls the lender for an updated payoff. Adds 30-60 minutes typically.",
          "Wire instructions errors — wrong account number on the form. Title officer catches it (they verify accounts before sending wires). Re-fill the form, wire goes out next day. This is why double-checking account numbers matters.",
          "Buyer-side delay — buyer's funds haven't hit the title company's escrow yet. Cash buyers like us pre-fund escrow days before closing, so this doesn't happen on our side. With financed buyers, it's a real risk.",
          "Document errors — typo in the deed, wrong middle name on a signature line. Title officer corrects and you re-sign.",
        ],
      },
      { type: "h2", text: "Things sellers wish they'd asked" },
      {
        type: "ol",
        items: [
          "Confirm the wire timing in advance, especially if you need the funds for a specific purpose (buying your next house, paying off bills, depositing for a move).",
          "Ask about pro-ration calculations — property taxes, HOA dues, water bills. These can shift hundreds of dollars and they're usually settled at closing.",
          "Confirm what the buyer is getting beyond the house itself — appliances, light fixtures, blinds, window treatments. Most cash sales include 'personal property included with the house in current condition' but verify what's listed.",
          "Get copies of every document you signed. Title company will email digital copies but ask for paper copies if you prefer.",
        ],
      },
      { type: "h2", text: "After closing" },
      {
        type: "p",
        text: "The title company sends recorded copies of the deed to both parties within a few weeks. Your wire should land same-day or next-business-day. The title insurance policy comes by mail in 2-4 weeks. From the seller's standpoint, you're done — no further action needed.",
      },
      { type: "h2", text: "How our closings differ from financed-buyer closings" },
      {
        type: "p",
        text: "When you sell to us at Heartland Acquisitions: no buyer financing contingency (we wire cash, period), no appraisal (we already valued the house ourselves), no inspection clause delaying things (we inspected during the offer phase), and no last-minute lender objections. Our closings are notably smoother than typical financed sales because there's no third-party (the bank) to wait on. The title company runs lien searches, prepares documents, we wire funds 24-48 hours before closing date, you show up, sign, and walk out with the wire pending.",
      },
      { type: "h2", text: "Submitting your address" },
      {
        type: "p",
        text: "If you want a fair cash offer that comes with this kind of clean, predictable closing process, submit your address from our homepage. Offer in 24 hours, walkthrough scheduled at your convenience, written offer follows, and if you accept, we open title at one of the Kansas City title companies above and close on the date you choose.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // BATCH 3
  // -------------------------------------------------------------------------
  {
    slug: "hidden-costs-of-selling-fsbo-kansas-city",
    title: "The Hidden Costs of Selling FSBO (For Sale By Owner) in Kansas City",
    description:
      "What you'll actually pay to sell your Kansas City house yourself — buyer agent commission, marketing, attorney fees, time, and the contingency-management costs nobody mentions.",
    excerpt:
      "FSBO seems like the cheapest path. Then you start adding up what you're actually responsible for. Here's the real cost breakdown for selling your KC house yourself in 2026.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-23",
    readTimeMin: 7,
    tags: ["fsbo", "comparison", "kansas-city"],
    relatedSituations: ["divorce", "rental-with-tenants"],
    relatedCities: ["kansas-city-mo", "lees-summit-mo"],
    body: [
      {
        type: "p",
        text: "Selling your Kansas City house yourself — for sale by owner, FSBO — sounds like the obvious way to keep the 6% you'd pay a realtor. The math seems clean: list it, find a buyer, save the commission. Reality is more expensive than that. After working with dozens of KC sellers who tried FSBO before reaching out to us, here's the breakdown of what FSBO actually costs in this market.",
      },
      { type: "h2", text: "The 6% commission isn't fully yours to keep" },
      {
        type: "p",
        text: "Here's the part most FSBO calculators leave out: about 80% of homebuyers in Kansas City work with a buyer's agent. Those agents have a fiduciary duty to their buyers, which means they direct their clients toward houses where they'll get paid. If your FSBO listing offers no buyer-agent commission (also called BAC), buyer agents have a strong incentive to steer their clients elsewhere. To get any buyer-agent traffic at all, most FSBO sellers in KC end up offering a 2.5-3% buyer-agent commission. So instead of saving 6%, you save 3%. Real, but smaller.",
      },
      { type: "h2", text: "Marketing and listing costs" },
      {
        type: "p",
        text: "To get on the MLS (the most powerful traffic source in real estate, by far), FSBO sellers in Kansas City pay a flat-fee MLS service — typically $300-$700. Without MLS, your house only shows up on Zillow's FSBO listings and some Facebook Marketplace posts. With MLS, your listing syndicates to Zillow, Realtor.com, Redfin, and dozens of other sites that buyers actually use. Add to this:",
      },
      {
        type: "ul",
        items: [
          "Professional listing photos: $200-$500 (essential — phone photos visibly hurt listings)",
          "Yard sign and flyer box: $50-$150",
          "Facebook/Zillow advertising: optional but $100-$500 if you go this route",
          "Lockbox: $50-$150",
        ],
      },
      {
        type: "p",
        text: "Total marketing spend for an effective FSBO listing in KC: $700-$1,500.",
      },
      { type: "h2", text: "Missouri attorney fees" },
      {
        type: "p",
        text: "Missouri doesn't legally require an attorney for a residential sale, but FSBO sellers strongly should retain one. Without a realtor, you're navigating: the Missouri purchase contract (you can use the Missouri REALTORS contract for FSBO use), inspection responses, repair negotiations, title coordination, and closing logistics — all without representation. A flat-fee Missouri real estate attorney for an FSBO sale typically runs $750-$1,500. Skip this and you'll either: (a) sign whatever the buyer's agent puts in front of you, or (b) lose the deal because you don't know how to respond to a 12-page inspection objection. Either outcome costs more than the attorney fee.",
      },
      { type: "h2", text: "Showings, open houses, and your time" },
      {
        type: "p",
        text: "A typical Kansas City FSBO sale runs 60-90 days from listing to closing. During that period, expect:",
      },
      {
        type: "ul",
        items: [
          "15-25 individual showings (you'll need to leave the house each time, ~1.5 hours each)",
          "1-2 open houses (3-4 hours each, plus prep)",
          "30+ phone calls and texts from interested parties, agents, and looky-loos",
          "Weekly listing maintenance (re-photos if seasons change, price adjustments, MLS updates)",
        ],
      },
      {
        type: "p",
        text: "If you value your time at $50/hour (most KC sellers should value it higher), that's 60-100 hours of your time over the listing period — roughly $3,000-$5,000 of seller labor. This doesn't show up in any commission calculation but it's real.",
      },
      { type: "h2", text: "Buyer financing complications" },
      {
        type: "p",
        text: "Most FSBO buyers are using FHA, VA, or conventional loans. Each of these comes with appraisal contingencies, financing contingencies, and inspection objections that an experienced realtor handles routinely but an FSBO seller learns the hard way. Common scenarios:",
      },
      {
        type: "ol",
        items: [
          "Appraisal comes in below contract price. Buyer can either bring extra cash, you reduce price, or the deal dies. FSBO sellers without an agent often don't know they can negotiate this.",
          "Inspection objection list with 30+ items. Buyer's agent uses this to extract concessions; FSBO seller without representation often gives up too much or kills the deal entirely.",
          "Buyer's loan falls through at week 6. You've been off the market for 6 weeks, lost 6 weeks of carrying costs, and start over.",
          "Title issue surfaces during closing prep. FSBO sellers don't know how to coordinate quitclaim deeds, lien payoffs, or quiet-title actions.",
        ],
      },
      { type: "h2", text: "Pricing mistakes" },
      {
        type: "p",
        text: "FSBO sellers in Kansas City consistently misprice their houses — usually too high (because emotional attachment) or too low (because they don't know neighborhood comps deeply). NAR data has historically shown FSBO sales close at 5-15% below MLS-listed sales. That's a real number that exists for real reasons: less buyer competition, less negotiation leverage, less professional marketing.",
      },
      { type: "h2", text: "When FSBO actually works in Kansas City" },
      {
        type: "ul",
        items: [
          "You already have a buyer (family member, neighbor, tenant). FSBO is just paperwork in this case — saves the commission cleanly. Hire an attorney for the contract; you don't need a realtor.",
          "The house is in a hyper-strong neighborhood (Brookside, Waldo, Hyde Park, parts of Plaza). Multiple offers on day 1 is common; the listing agent's marketing isn't doing much.",
          "You have substantial real-estate experience yourself.",
          "You have 60-90 days of patience and the right personality for negotiating.",
        ],
      },
      { type: "h2", text: "When FSBO costs more than it saves" },
      {
        type: "ul",
        items: [
          "House needs repairs or condition adjustments — buyers will use FSBO seller's lack of representation against you.",
          "You're emotionally attached or stressed (divorce, foreclosure, inherited estate). FSBO requires arm's-length negotiation that's hard under emotional pressure.",
          "You don't have time for showings, calls, and 60-day timelines.",
          "The KC neighborhood has slower turnover (parts of Independence, Raytown, Grandview).",
          "You've never sold a house before.",
        ],
      },
      { type: "h2", text: "How a cash sale compares" },
      {
        type: "p",
        text: "Cash sales like the ones we do at Heartland Acquisitions skip every cost listed in this post. No commission (yours or the buyer's agent), no MLS fees, no marketing, no attorney needed (we coordinate through the title company), no showings, no buyer financing risk, no inspection objections. Our offer is typically 70-85% of retail ARV; FSBO at full effort might net 90-95% of retail. Whether that 5-15% delta is worth the time, stress, and risk is a decision only you can make.",
      },
      { type: "h2", text: "Getting both numbers" },
      {
        type: "p",
        text: "Before deciding FSBO vs cash, get both numbers in writing. We'll send you a written cash offer in 24 hours, no obligation. Then talk to a Kansas City realtor about a comparative market analysis (free, also no obligation) — even ask them to estimate what an FSBO listing might net you specifically. Run the numbers honestly, including your own time, and pick whichever wins.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "relocating-from-kansas-city-sell-house-30-days",
    title: "Relocating From Kansas City: How to Sell Your House in 30 Days",
    description:
      "Job relocation moving you out of Kansas City fast? Here's the realistic 30-day path from listing decision to wired funds — cash buyer vs MLS vs iBuyer compared on a tight timeline.",
    excerpt:
      "Got 30 days to sell your KC house and move? Here's the calendar walked backward — what's possible, what's not, and which path makes the most sense based on your specific window.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-26",
    readTimeMin: 7,
    tags: ["relocation", "selling fast", "process"],
    relatedSituations: ["divorce"],
    relatedCities: ["overland-park-ks", "olathe-ks", "lenexa-ks", "lees-summit-mo"],
    body: [
      {
        type: "p",
        text: "Job relocations move fast. The new employer wants you onsite in 30 days, the spouse needs to enroll the kids in the new school district, and somewhere in the middle of all that you have to sell a Kansas City house. We work with relocation sellers from the corporate corridor (Cerner/Oracle, Garmin, T-Mobile, Sprint, Black & Veatch, Hallmark) constantly. Here's the realistic 30-day playbook.",
      },
      { type: "h2", text: "The calendar walked backward" },
      {
        type: "p",
        text: "Start with your move-out date and walk backward. A typical 30-day relocation timeline looks like:",
      },
      {
        type: "ol",
        items: [
          "Day 30 (move-out): Closing should ideally be within a week of move-out, or you're paying double housing costs.",
          "Day 22-25 (target close date): Title work needs to be substantially complete by this point.",
          "Day 15-18 (under contract): Need a signed contract by mid-month to make day-25 closing realistic.",
          "Day 7-10 (offer accepted): Need a serious offer by week 1-2 to give title work enough runway.",
          "Day 1 (decision day): Pick your sale path. Every day you wait compresses the timeline downstream.",
        ],
      },
      { type: "h2", text: "Path 1: Cash buyer (5-14 days from address-to-close)" },
      {
        type: "p",
        text: "Cash sales are the default relocation path because the timeline math just works. Submit your address day 1, walkthrough day 2-3, accepted offer day 3-4, title opens day 4, close day 7-14. That gives you 16+ days of buffer in a 30-day relocation. We've closed corporate-relocation deals on a 7-day timeline when the move-out was tight; we've also stretched closings to day 28 when the seller wanted to time the move precisely. Flexibility on the closing date is one of the biggest wins for relocation sellers.",
      },
      { type: "h2", text: "Path 2: Aggressive MLS listing (30 days, risky)" },
      {
        type: "p",
        text: "Listing on the MLS in 30 days is technically possible but compressed. The math:",
      },
      {
        type: "ul",
        items: [
          "Days 1-2: Hire a realtor, professional photos, listing prep",
          "Day 3-4: Listing goes live",
          "Days 5-12: Showings and (hopefully) offers — KC days-on-market median is in the 25-40 day range, so this is faster than typical",
          "Days 12-15: Negotiate, accept, go under contract",
          "Days 15-30: Inspection, appraisal, financing approval, closing",
        ],
      },
      {
        type: "p",
        text: "The risk: financed buyers (most MLS buyers) need ~30 days from contract-to-close on average for FHA/conventional loans. If you're already 12-15 days into your 30-day window when you go under contract, you're betting on the buyer's lender to move at the speed of light. About 15-20% of KC purchase contracts fall through; if your contract is the one that falls through at day 22, you have 8 days to find another buyer. That's where relocation sellers get crushed and end up paying duplicate housing for months.",
      },
      { type: "h2", text: "Path 3: iBuyer (Opendoor, Offerpad)" },
      {
        type: "p",
        text: "Theoretically a 30-day-friendly option. Reality: iBuyer offers come with inspection-based deductions that don't show up until day 14-21, by which point you have less leverage to walk if the final number is bad. Service fees (typically 5-10%) plus deductions often produce a final net to seller similar to or below a cash buyer's number. We've had multiple relocation sellers come to us at day 25 because their iBuyer deal fell apart over inspection deductions. Workable but riskier than it sounds upfront.",
      },
      { type: "h2", text: "Setting the right price for speed" },
      {
        type: "p",
        text: "If you go the MLS route in a relocation situation, price 3-5% below your retail target. Speed is your friend when relocation pressure is real; pricing for 'top dollar' assumes time you don't have. KC realtors who specialize in relocations (most major brokerages have a relocation specialist) understand this trade-off and will help you price for a 7-14 day market response, not a 60-90 day market response.",
      },
      { type: "h2", text: "Prepping the house if you're listing" },
      {
        type: "ul",
        items: [
          "Skip cosmetic projects unless they're essential. New paint = ROI. Replacing a kitchen for a 30-day sale = burning money.",
          "Deep clean is essential. Use a service ($300-500) so you don't have to manage it yourself.",
          "Declutter aggressively. Boxes for the move can do double duty: pack what you'll bring, donate or trash what you won't, and the house staging takes care of itself.",
          "Yard work matters. Curb appeal drives showing engagement.",
        ],
      },
      { type: "h2", text: "Coordinating closing with the new city" },
      {
        type: "p",
        text: "If you're closing in KC and immediately moving to another metro, talk to the buyer's title company about wiring the proceeds to your destination bank account (most can wire interstate same-day). For sellers buying a new house in the destination city, the wire from the KC closing typically lands within 4-6 hours and can fund the destination closing the next day if timing is tight. We've coordinated relocation closings where the seller flew out the morning of closing in KC and showed up to a destination closing 48 hours later.",
      },
      { type: "h2", text: "Common 30-day relocation mistakes" },
      {
        type: "ol",
        items: [
          "Underestimating how long MLS takes. If your move-out is 28-32 days away, listing without aggressive pricing is high-risk.",
          "Trying to time it perfectly. Target a closing 5-7 days BEFORE your move-out, not on the same day. The buffer matters.",
          "Skipping the inspection-objection negotiation. Relocation sellers sometimes accept buyer's repair list wholesale to keep the deal alive; that money comes out of your net.",
          "Not asking the employer about relocation packages. Many KC corporate employers have relocation broker programs that will buy your house at market value (or guarantee a buyer at a discounted price). Worth asking before going FSBO or cash.",
        ],
      },
      { type: "h2", text: "Corporate relocation specifics" },
      {
        type: "p",
        text: "If your employer has a relocation broker (Cartus, Sirva, Brookfield are common), they may offer a Guaranteed Buyout or Guaranteed Offer Program: the broker buys the house at appraised value and resells it themselves. Pros: certainty, employer handles logistics. Cons: appraised value is often 5-10% below market and you're locked into their timeline. Worth comparing to a direct cash offer — sometimes the cash route nets the seller more after factoring everything.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "For tight relocation timelines, the fastest path is almost always a cash sale. Submit your address through the homepage. We'll respond within 24 hours with a written offer and a closing date that works for your move-out. If you want to compare against an MLS listing, we'll be honest about which one wins for your specific situation — sometimes it's the realtor, sometimes it's us.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "inside-missouri-trustee-sale-foreclosure-auction",
    title: "Inside a Missouri Trustee Sale: What Actually Happens at the Foreclosure Auction",
    description:
      "Step-by-step walkthrough of a Missouri trustee sale — where it happens, who shows up, the bidding process, the minimum-bid math, and what happens to the homeowner after.",
    excerpt:
      "If your Kansas City foreclosure sale is scheduled, you should know exactly what will happen on auction day. Here's the start-to-finish breakdown most homeowners never get.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-01",
    readTimeMin: 8,
    tags: ["foreclosure", "missouri", "process"],
    relatedSituations: ["foreclosure"],
    relatedCities: ["kansas-city-mo", "independence-mo", "raytown-mo"],
    body: [
      {
        type: "p",
        text: "If a Missouri trustee sale is scheduled for your Kansas City house, you're at the bottom of an emotional curve that's been building for months. The lender has filed paperwork, the trustee has sent notices, and the sale date is on a public list at the Jackson County (or Clay/Cass/Platte) courthouse. Most homeowners I've worked with at this stage know the auction is coming but have no idea what actually happens. This post is the walkthrough — start to finish — of what your trustee sale will look like if nothing is done to stop it.",
      },
      {
        type: "callout",
        tone: "warning",
        text: "If your sale is scheduled within the next 7-21 days, you have very limited options remaining. This post is informational; the companion post 'Behind on Mortgage Payments in Kansas City' covers the options ranked by impact. Reach out to a HUD-approved housing counselor immediately if you haven't already.",
      },
      { type: "h2", text: "Quick recap: how you got here" },
      {
        type: "p",
        text: "Missouri uses non-judicial foreclosure, which means the lender doesn't need to file a lawsuit. The process: you missed payments (typically 90-120+ days), the lender filed a Notice of Default with the trustee, the trustee filed a Notice of Trustee Sale (typically 21 days before the auction date), and now we're on the auction day. The whole sequence from first missed payment to auction is usually 6-8 months in Missouri.",
      },
      { type: "h2", text: "Where the sale actually happens" },
      {
        type: "p",
        text: "Missouri trustee sales happen in person at the county courthouse where the property is located. For Jackson County properties (most of Kansas City, MO and surrounding suburbs), that's the Jackson County Courthouse at 415 East 12th Street, downtown KC. Clay County sales are at the Clay County Courthouse in Liberty. Cass County in Harrisonville. Platte County in Platte City. The auction is held at a specific location within the courthouse — often a designated foreclosure auction area or main lobby — at a specified time, almost always weekday business hours (typically 10am-2pm range).",
      },
      { type: "h2", text: "Who shows up" },
      {
        type: "p",
        text: "On a typical Jackson County trustee sale day, the courthouse foreclosure area has:",
      },
      {
        type: "ul",
        items: [
          "The trustee or substitute trustee (usually an attorney from a foreclosure law firm) — they conduct the auction",
          "Representatives from the lender — usually an attorney from the lender's foreclosure counsel",
          "Real estate investors — anywhere from 5-30 individual investors and small companies bid on properties at trustee sales",
          "Cash investors and hedge fund acquisition firms — for higher-value properties, larger players show up",
          "Occasionally the homeowner themselves (rare, but happens — usually as observers)",
          "Other random people: title researchers, lender representatives observing for portfolio reporting, occasionally journalists",
        ],
      },
      { type: "h2", text: "The auction process" },
      {
        type: "p",
        text: "Trustee sales are quick. Each property usually takes 2-5 minutes from announcement to gavel:",
      },
      {
        type: "ol",
        items: [
          "The trustee announces the property by legal description and address.",
          "The trustee reads the terms of sale (cash or certified funds, immediate payment, sale 'as-is, where-is' with no warranties).",
          "The trustee opens bidding at the lender's minimum bid (more on this below).",
          "Bidders raise hands or call out bids. Increments are typically $100-$1,000 depending on the property.",
          "The trustee calls 'going once, going twice, sold' and gavels the sale to the high bidder.",
          "The high bidder must pay in certified funds (cashier's check or wire) immediately — usually within hours of the sale.",
        ],
      },
      { type: "h2", text: "The minimum bid math" },
      {
        type: "p",
        text: "The lender's minimum bid is the most important number at a trustee sale. It's calculated as: total mortgage payoff balance + accrued interest + foreclosure costs (attorney fees, trustee fees, advertising) - any servicing-related credits. The lender wants to recover what they're owed; they'll bid up to (but rarely above) this amount. If the property is worth more than the minimum bid, third-party bidders (investors) bid against the lender and against each other up to a number that makes economic sense for them. If the property is worth LESS than the minimum bid, no third party bids; the lender 'buys' the property at the minimum bid and takes it onto their books as REO (real estate owned).",
      },
      { type: "h2", text: "The high bidder pays — what happens next" },
      {
        type: "p",
        text: "The winning bidder hands certified funds to the trustee within hours of the sale. The trustee files a Trustee's Deed at the county recorder's office, transferring ownership to the new owner. Title is delivered subject to whatever liens existed at the time of the sale (junior mortgages, mechanic's liens, IRS liens — these may or may not survive depending on lien priority). The new owner now owns the house, and the homeowner has lost the property.",
      },
      { type: "h2", text: "When no third party bids: REO" },
      {
        type: "p",
        text: "If the lender's minimum bid is higher than the property's market value (i.e., you're underwater), no real-money investor will bid. The lender 'wins' the auction at their minimum bid and the property becomes REO. The lender lists the house with a real estate agent and tries to sell it at retail. This often happens with houses that need significant repairs or are in markets where retail buyers are scarce.",
      },
      { type: "h2", text: "Your rights after the sale" },
      {
        type: "p",
        text: "Missouri's right of redemption is limited. After a non-judicial foreclosure, you generally do NOT have a statutory right to redeem the property by paying the full debt. (Compare to states like Iowa or Kansas which have post-sale redemption rights.) Once the trustee's deed is filed, the sale is final. The new owner can begin eviction proceedings if you're still in the property — typically a 30-day notice followed by an unlawful detainer filing if you don't leave.",
      },
      { type: "h2", text: "Deficiency judgments" },
      {
        type: "p",
        text: "If the trustee sale generates less than the total mortgage debt, the lender CAN pursue a deficiency judgment against the homeowner in Missouri (within strict statutory time limits and procedural requirements). In practice, lenders pursue deficiency judgments inconsistently — for owner-occupied residential foreclosures, deficiency judgments are uncommon; for investment properties or when the deficiency is large, lenders are more aggressive. Consult a Missouri attorney about your specific risk if your sale produced a deficiency.",
      },
      { type: "h2", text: "Stopping the sale before it happens" },
      {
        type: "p",
        text: "Up until the moment the gavel falls, the sale can be stopped by:",
      },
      {
        type: "ol",
        items: [
          "Reinstatement: paying everything you owe in full by certified funds before the sale",
          "Loan modification: signed and recorded, agreed by lender. Usually requires negotiation 30-60+ days before sale",
          "Bankruptcy filing: Chapter 7 or 13 stops the sale via automatic stay (this delays, not eliminates, the foreclosure — but buys time)",
          "Cash sale before the auction: paying the lender's full payoff with sale proceeds. We've closed this 5 days before scheduled trustee sales when the seller had equity",
        ],
      },
      { type: "h2", text: "If a cash sale before auction makes sense for you" },
      {
        type: "p",
        text: "If you have equity (house worth more than the mortgage payoff), a cash sale to a buyer like Heartland Acquisitions before the auction date stops the foreclosure cleanly. The mortgage payoff goes directly to the lender at closing, the foreclosure proceedings stop, and any leftover equity goes to you. The property never goes to auction; the foreclosure never appears on your credit as a forced sale (only the missed payments leading up to it). We've closed Missouri foreclosure deals in 5 business days when the auction was within the week. Don't wait until the day of the sale.",
      },
      { type: "h2", text: "Free help" },
      {
        type: "p",
        text: "HUD-approved housing counselors offer free foreclosure prevention counseling. In Kansas City: Catholic Charities of KC-St. Joseph (816-399-2020), Operation Breakthrough (816-329-3070). They do not sell anything; they help you evaluate options. Call before signing anything if you have time.",
      },
      { type: "h2", text: "Getting an offer" },
      {
        type: "p",
        text: "If you're considering a cash sale before the trustee sale, submit your address through our homepage. Tell us in the form notes that there's a foreclosure timeline; we'll prioritize the response. We've handled enough Missouri foreclosure timelines to know what's realistic, what isn't, and how to coordinate with the lender's loss-mitigation team to make a 5-day close happen if that's what you need.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "how-to-verify-cash-home-buyer-legit-kansas-city",
    title: "How to Verify a Cash Home Buyer Is Legit (Kansas City Edition)",
    description:
      "Practical checklist for verifying that a Kansas City cash home buyer is real, funded, and ethical — proof of funds, business registration, past closings, contract red flags, and what scammers won't do.",
    excerpt:
      "Most cash home buyer scams in KC follow the same pattern. Here's the verification checklist that catches them — and what reputable buyers do that scammers won't.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-05",
    readTimeMin: 7,
    tags: ["due-diligence", "trust", "process"],
    relatedSituations: ["foreclosure", "inherited"],
    relatedCities: ["kansas-city-mo", "independence-mo"],
    body: [
      {
        type: "p",
        text: "Most cash home buyer scams in Kansas City follow the same pattern: pressure you to sign quickly, low-ball the offer, lock you into a long contract period, then either assign the contract to someone else for a fee or walk away if a better deal comes along. Reputable cash buyers operate completely differently. This post is the verification checklist I'd give my own family member if they were considering selling a KC house to a cash buyer they didn't know.",
      },
      { type: "h2", text: "The basic legitimacy checklist" },
      {
        type: "p",
        text: "Before signing anything, confirm:",
      },
      {
        type: "ol",
        items: [
          "The buyer is a real registered business, not just a name",
          "They can show proof of funds for the offer amount",
          "They have closed deals before — check the public record",
          "Their contract has a specific named buyer (not 'and/or assigns')",
          "They commit real earnest money to escrow at a real title company",
          "They give you the contract before requesting your signature, not after",
        ],
      },
      { type: "h2", text: "1. Check the LLC / company registration" },
      {
        type: "p",
        text: "Every legitimate Kansas City cash home buyer is a registered business. Missouri's secretary of state has a free business search at sos.mo.gov/business. Search the company name and confirm: the entity exists, is in 'Good Standing,' has been registered for more than 6-12 months (longer is better), and the registered agent has a real Missouri address (not a virtual mailbox in Las Vegas). For Kansas-side buyers, the equivalent is the Kansas secretary of state business search. Anyone serious about buying houses in this metro is registered in at least one of these states.",
      },
      { type: "h2", text: "2. Verify proof of funds" },
      {
        type: "p",
        text: "A real cash buyer can show proof that they actually have cash. Acceptable forms:",
      },
      {
        type: "ul",
        items: [
          "Bank statement showing liquid funds equal to or greater than the offer amount, dated within 30 days",
          "Letter from a private lender or hard money lender confirming approved funding for the property",
          "Verification of deposit (VOD) from their bank",
          "For larger buyers: proof-of-funds letter on letterhead from their banking partner",
        ],
      },
      {
        type: "p",
        text: "A buyer who refuses to show any proof of funds is not actually a cash buyer. They may be a wholesaler hoping to assign your contract to someone else who actually has the money — a practice that's legal but usually bad for sellers (more on this below).",
      },
      { type: "h2", text: "3. Look up their past closings" },
      {
        type: "p",
        text: "Real estate transactions are public record. The Jackson County Recorder of Deeds (and Clay/Cass/Platte equivalents) lets you search by buyer name to see what they've actually closed on. Search the LLC name. A legitimate Kansas City cash buyer should have multiple recorded purchases over the past 1-2 years; deeds will show purchase price, address, and dates. If the company name produces zero results, they haven't closed anything — at least not in their own name. Could mean they're new (legitimate but inexperienced) or that they're operating under a different entity (often a sign of a wholesaler).",
      },
      { type: "h2", text: "4. Read the contract for 'and/or assigns'" },
      {
        type: "p",
        text: "The single biggest red flag in cash home buyer contracts: 'Buyer: [Their LLC] and/or its assigns.' This phrase means the buyer can transfer (assign) the purchase contract to someone else — usually for a fee they collect for finding you. The actual person who closes on the house is whoever the assignor sells the contract to. Problems:",
      },
      {
        type: "ul",
        items: [
          "You don't know who's actually buying your house until closing day",
          "If the assignor can't find a buyer, the deal falls through and you've lost weeks",
          "The assignor's incentive is to lock you in cheap and shop the contract; they don't care about closing if they can't find a profitable assignee",
          "Reputable buyers don't operate this way — they buy in their own name with their own money",
        ],
      },
      {
        type: "p",
        text: "Strike 'and/or assigns' from any contract you sign. If the buyer refuses to remove it, walk away.",
      },
      { type: "h2", text: "5. Earnest money to a real title company" },
      {
        type: "p",
        text: "Within 1-3 days of signing, a serious buyer puts earnest money into escrow at an established title company in Kansas City — typically $1,000-$5,000. Earnest money signals: the buyer is committed, they have the funds, and they're working with a real title company that will hold the funds in escrow. Red flags:",
      },
      {
        type: "ul",
        items: [
          "Buyer wants to send earnest money to YOU directly (not to title company escrow)",
          "Earnest money is unusually small ($100, $500) for a real estate transaction",
          "Buyer 'forgets' to send earnest money for weeks",
          "Buyer uses a title company you've never heard of with no Google reviews",
        ],
      },
      { type: "h2", text: "6. Sane closing timelines" },
      {
        type: "p",
        text: "A reasonable cash buyer's contract has a closing date in writing — typically 7-30 days from signing. Watch out for:",
      },
      {
        type: "ul",
        items: [
          "Closing dates 60-90+ days out for 'cash' deals (this is wholesaler language — they need time to find an end buyer)",
          "Open-ended closing dates ('within 90 days' or 'TBD')",
          "Long inspection or contingency periods (cash buyers don't need 30 days for inspection — we inspect during the offer phase)",
        ],
      },
      { type: "h2", text: "7. Real reviews, real local presence" },
      {
        type: "p",
        text: "Search the company name on Google. A legitimate Kansas City cash buyer should have:",
      },
      {
        type: "ul",
        items: [
          "A Google Business Profile with reviews (not just 5 perfect reviews; some 4-stars and detailed complaints are normal)",
          "A BBB profile (Kansas City Better Business Bureau covers most of the metro)",
          "Local presence — physical office, KC-area phone number, KC-area address",
          "Past press, social media, or community involvement",
        ],
      },
      {
        type: "p",
        text: "Be cautious of buyers with no online presence whatsoever, or whose only reviews are obviously fake (5 reviews all from accounts with one review each, no detail).",
      },
      { type: "h2", text: "What scammers won't do" },
      {
        type: "ul",
        items: [
          "Send you a written contract before requesting your signature",
          "Use an established Kansas City title company you can independently verify",
          "Show recent bank statements as proof of funds",
          "Have multiple recorded deeds in their LLC name",
          "Strike 'and/or assigns' from the contract",
          "Put $5,000+ in actual earnest money into escrow",
          "Give you their attorney's contact info if you have questions",
        ],
      },
      {
        type: "p",
        text: "If you can verify all 7 of these, you're working with a real cash buyer. Whether their offer is the right offer for your situation is a separate question — but at least the basic legitimacy is there.",
      },
      { type: "h2", text: "How to verify Heartland Acquisitions specifically" },
      {
        type: "p",
        text: "We're a DBA of Ivarix Capital LLC, registered in Missouri. You can verify us by:",
      },
      {
        type: "ul",
        items: [
          "Missouri SOS business search at sos.mo.gov/business — search 'Ivarix Capital'",
          "Jackson County Recorder of Deeds search for our recent closings",
          "Calling our office: (816) 973-5420 — we'll answer or call back the same business day",
          "Visiting our office: 2107 Grand Boulevard, Kansas City, MO 64108",
          "Asking for proof of funds, recent bank statement, or our title company contact info — all available on request",
        ],
      },
      { type: "h2", text: "Getting started safely" },
      {
        type: "p",
        text: "When you submit your address through our homepage for an offer, you're not committing to anything. You can verify everything in this post before signing. We'd rather have a seller who took 48 hours to verify us and then signed with confidence than a seller who signed in 10 minutes and regretted it. Take the time. If the offer wins for your situation, we'll still be here.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // BATCH 4
  // -------------------------------------------------------------------------
  {
    slug: "tax-implications-selling-house-cash-kansas-city-2026",
    title: "Tax Implications of Selling a House for Cash in Kansas City (2026)",
    description:
      "Plain-English guide to the federal and state taxes that apply when you sell a Kansas City house — primary residence exclusion, capital gains, inherited step-up basis, Missouri vs Kansas, and what your CPA will need.",
    excerpt:
      "Cash sale, financed sale — the IRS treats them the same. Here's what actually triggers tax, what the primary residence exclusion does, and what your KC CPA needs to know.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-24",
    readTimeMin: 8,
    tags: ["taxes", "process", "missouri", "kansas"],
    relatedSituations: ["inherited", "rental-with-tenants"],
    relatedCities: ["kansas-city-mo", "overland-park-ks"],
    body: [
      {
        type: "p",
        text: "One of the first questions I get from Kansas City sellers considering a cash offer: \"Do I owe tax on this?\" The short answer for most owner-occupied sellers: probably not. The longer answer depends on whether the house was your primary residence, an investment property, or inherited; how long you've owned it; and what state side of the metro it sits on. This post is the plain-English version of how cash home sale taxes work in 2026 for Kansas City sellers.",
      },
      {
        type: "callout",
        tone: "warning",
        text: "I'm not a CPA or tax attorney. This is general information based on federal and Missouri/Kansas tax rules as of 2026. Your specific situation deserves a qualified tax professional. The cost of an hour with a Kansas City CPA is nothing compared to a botched tax position on a six-figure sale.",
      },
      { type: "h2", text: "Cash sale vs financed sale: same tax treatment" },
      {
        type: "p",
        text: "First, the easy part: the IRS doesn't care whether the buyer paid cash or got a mortgage. The taxable event is the sale itself, calculated as: sale price minus your cost basis minus selling expenses = gain (or loss). The form of payment is irrelevant. So whatever applies to a traditional Kansas City sale applies to a cash sale at the same dollar level.",
      },
      { type: "h2", text: "The primary residence exclusion (the big one)" },
      {
        type: "p",
        text: "Federal tax law allows single filers to exclude up to $250,000 of gain on the sale of a primary residence; married filers filing jointly can exclude up to $500,000. To qualify, you must have owned AND used the home as your primary residence for at least 2 of the last 5 years before the sale. The 2-year periods don't have to be the same 2 years and don't have to be continuous.",
      },
      {
        type: "p",
        text: "For most Kansas City homeowners selling their primary residence, this exclusion absorbs the entire gain. Example: bought your house for $180,000 in 2010, selling for $260,000 in 2026 — that's an $80,000 gain, fully excluded under the $250k single / $500k married limit. Zero federal tax owed.",
      },
      { type: "h2", text: "Calculating your cost basis" },
      {
        type: "p",
        text: "Cost basis isn't just the purchase price. It's: original purchase price + closing costs at acquisition + capital improvements over time. Capital improvements (roof replacement, HVAC, additions, kitchen renovation) increase basis; routine maintenance and repairs (paint, light fixtures, lawn care) do not. Most Kansas City sellers underestimate their basis because they didn't track improvements over the years. If you've owned the house for 15+ years, you've likely made substantial capital improvements that pad your basis. Pull together receipts before tax season; even rough records help.",
      },
      { type: "h2", text: "When the primary residence exclusion doesn't fully cover the gain" },
      {
        type: "p",
        text: "If your gain exceeds the $250k/$500k threshold (rare in Kansas City but possible on long-held high-end homes in Brookside, Plaza, southern OP), the excess is taxed as long-term capital gains at federal rates (0%, 15%, or 20% depending on your total income). For 2026, most Kansas City sellers fall in the 15% bracket — meaning excess gain is taxed at 15% federally.",
      },
      { type: "h2", text: "Investment property and rentals (no exclusion)" },
      {
        type: "p",
        text: "Rental properties don't get the primary residence exclusion. The full gain is taxable as long-term capital gains (15-20% federal for most KC sellers) plus depreciation recapture (up to 25% federal on the depreciation taken over the years). For a Kansas City landlord who's owned a rental 15+ years, depreciation recapture often exceeds the actual capital gain — it's the surprise on the tax bill nobody warned you about.",
      },
      { type: "h2", text: "1031 exchange (defer, don't avoid)" },
      {
        type: "p",
        text: "If you're selling an investment property and rolling proceeds into another investment property, a 1031 exchange defers the tax. You don't pay tax now; instead, your cost basis carries over to the new property. Strict timeline: identify the replacement property within 45 days of selling, close on it within 180 days. Requires a qualified intermediary (Kansas City has several — most title companies can refer one). Cash sales work fine for 1031s as long as proceeds go through the intermediary, not directly to you.",
      },
      { type: "h2", text: "Inherited property: the step-up in basis" },
      {
        type: "p",
        text: "If you inherited a Kansas City house, your cost basis is the fair market value on the date of the deceased's death — not what they originally paid. This 'step-up in basis' often eliminates capital gains entirely on inherited sales. Example: your grandmother bought her Independence house in 1972 for $25,000. She died in 2025, when the house was worth $200,000. You sell for $205,000 in 2026. Your taxable gain is $5,000 (sale price minus stepped-up basis), not $180,000. Most inherited-house sellers in Kansas City owe little to no federal capital gains as a result.",
      },
      { type: "h2", text: "Missouri state tax (KC, MO sellers)" },
      {
        type: "p",
        text: "Missouri taxes capital gains as ordinary income at state income tax rates (graduated up to ~4.95% for 2026). Missouri does NOT have a separate primary residence exclusion. However, the state generally follows the federal exclusion in practice — if you don't have federally taxable gain (because the federal exclusion covered it), you typically don't have Missouri-taxable gain either. Confirm with your CPA.",
      },
      { type: "h2", text: "Kansas state tax (KCK / Johnson County sellers)" },
      {
        type: "p",
        text: "Kansas similarly taxes capital gains as ordinary income at state rates (3.10%-5.70% for 2026). Same federal-conformity logic generally applies. If your Kansas City house straddles or is near the state line, the relevant state is wherever the property is physically located, not where you live.",
      },
      { type: "h2", text: "1099-S forms" },
      {
        type: "p",
        text: "After closing, the title company issues a Form 1099-S reporting the gross sale proceeds to the IRS. You'll need this for your tax return. The 1099-S reports gross proceeds, not gain — your CPA calculates the actual taxable gain after applying basis, exclusions, and expenses.",
      },
      { type: "h2", text: "Timing the sale for tax reasons" },
      {
        type: "p",
        text: "If you're approaching the 2-year primary residence ownership/use requirement, consider whether waiting a few months changes your tax outcome significantly. Same logic applies if you've owned the rental for slightly less than 1 year (long-term capital gains require 1+ year holding period; otherwise it's short-term and taxed at ordinary income rates, often double the long-term rate). For most Kansas City sellers facing other pressures (foreclosure, divorce, relocation), tax timing is secondary to the urgent reason for selling — but worth a 30-minute consult with a CPA before you sign.",
      },
      { type: "h2", text: "What to bring to your CPA after the sale" },
      {
        type: "ol",
        items: [
          "Closing disclosure or HUD-1 from your sale (issued at closing)",
          "1099-S form from the title company",
          "Original purchase closing disclosure (helps establish original basis)",
          "Records of capital improvements made over the years (receipts, invoices)",
          "Mortgage payoff records (relevant for some calculations)",
          "If inherited: appraisal at the date of death",
          "If rental property: depreciation schedules from prior tax years",
          "If 1031 exchange: the qualified intermediary's documentation",
        ],
      },
      { type: "h2", text: "Getting an offer that fits your tax timing" },
      {
        type: "p",
        text: "We've structured Kansas City closings to land in specific tax years (December vs January closings) for sellers timing the gain into a particular year. We've also coordinated 1031 exchanges and probate sales where the basis question affected the math. Before you sign, talk to a CPA. After you've talked to the CPA, submit your address through our homepage and we'll work with whatever timing your tax situation calls for.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "should-i-renovate-before-selling-kansas-city",
    title: "Should I Renovate My Kansas City House Before Selling? The ROI Math",
    description:
      "Honest breakdown of which renovations actually pay back when selling a Kansas City house — kitchen, bath, roof, HVAC, paint — with realistic ROI percentages and the time cost most sellers ignore.",
    excerpt:
      "Realtors will tell you to renovate before listing. Sometimes that's right; usually it costs more than it returns. Here's the actual ROI math on the renovations Kansas City sellers consider.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-27",
    readTimeMin: 7,
    tags: ["pricing", "renovation", "comparison"],
    relatedSituations: ["inherited", "rental-with-tenants"],
    relatedCities: ["kansas-city-mo", "independence-mo", "lees-summit-mo"],
    body: [
      {
        type: "p",
        text: "Walk into any Kansas City realtor's listing presentation and one of the first slides will be a list of renovations they recommend before listing. Sometimes that's good advice. Often it's not. The truth is: very few residential renovations recoup more than 70-80% of their cost at sale, even fewer recoup 100%, and the time + stress + risk of doing renovations under time pressure rarely makes the math work for sellers in distressed situations. This post walks through which renovations actually pay back in the Kansas City market, which don't, and how to think about whether to renovate at all.",
      },
      { type: "h2", text: "The honest ROI of renovations" },
      {
        type: "p",
        text: "Remodeling magazine's annual Cost vs Value report tracks national renovation ROI. The numbers haven't fundamentally changed in 20 years: most renovations recoup 50-75% of cost at resale. The exceptions (door replacement, garage door, exterior paint) recoup higher because they're cheap relative to the curb-appeal effect. Big-ticket renovations (kitchens, bathroom additions) consistently recoup less than they cost.",
      },
      { type: "h2", text: "Renovations that DO pay back in KC" },
      {
        type: "ul",
        items: [
          "Exterior paint — typical cost $3,000-$6,000 in KC, recoups ~80-100%. The single highest-ROI renovation on most KC houses, especially older 1950s-60s ranches with dated trim. Strong curb appeal moves listings faster.",
          "Garage door replacement — $1,000-$2,500, recoups ~90-100%. Newer doors look immediately better and signal modern condition.",
          "Front door / entry — $500-$1,500, recoups 75-100%. Cheap fix with outsized first-impression effect.",
          "Roof replacement (when needed) — $8,000-$15,000 on a typical KC ranch, recoups ~60-70%. Doesn't add value beyond what buyers expect, but a failing roof KILLS appraisals and FHA financing.",
          "Minor kitchen update — paint cabinets ($500-$1,500), new hardware ($200), updated lighting ($300-$600), recoups ~70-90%. Cosmetic-only, not a full reno.",
          "Curb-appeal landscaping — $500-$2,000, recoups variable but moves listings faster.",
        ],
      },
      { type: "h2", text: "Renovations that DON'T pay back in KC" },
      {
        type: "ul",
        items: [
          "Full kitchen renovation — $25,000-$60,000, recoups ~50-65%. The best ROI is on cosmetic-only updates, not gut renovations. Full kitchens are an investment in the property's long-term enjoyment, not a sales tactic.",
          "Bathroom additions — $25,000+, recoups ~50-60%. Doesn't add as much value as it costs unless the house is below the neighborhood norm for bathroom count.",
          "Master bedroom suite addition — $50,000+, recoups ~50-65%. Major project, marginal ROI.",
          "Backyard landscaping — $5,000-$20,000, recoups ~30-50%. Pretty but not what KC buyers pay extra for.",
          "Pool installation — $30,000-$80,000, recoups ~10-30% (often net-negative because of insurance, maintenance, and limited buyer pool). Almost always a bad idea before selling.",
          "Custom built-ins — $5,000-$15,000, recoups ~30-50%. Buyer-specific tastes don't generalize.",
          "Sunroom additions — $20,000+, recoups ~30-50%.",
        ],
      },
      { type: "h2", text: "The time and stress cost (rarely calculated)" },
      {
        type: "p",
        text: "Renovation projects in Kansas City typically run 2-3 months for a kitchen, 4-6 weeks for a bathroom, 1-2 weeks for paint and minor updates. That's all time the house isn't on the market, time you're managing contractors and inspections and decisions, and time mortgage payments are still due. For a typical seller juggling a job, kids, and life, the stress cost of a renovation under deadline pressure is real and usually underestimated.",
      },
      {
        type: "p",
        text: "Add common renovation horror stories: contractor flakes mid-project (very common in KC over the past few years), permit delays at the city, hidden conditions discovered behind walls, materials lead times. A 'quick' kitchen renovation can easily turn into 4 months of half-done.",
      },
      { type: "h2", text: "When renovation makes sense" },
      {
        type: "ol",
        items: [
          "You're not in a hurry. 90+ days of timeline before you need to be out.",
          "The house is in a hot KC neighborhood (Brookside, Waldo, Plaza, parts of OP) where retail buyers will pay premium for retail finishes.",
          "The renovations are minor cosmetic (paint, hardware, cleanup). Stuff under $5,000.",
          "There's a SPECIFIC defect killing the house's salability (failing roof, broken HVAC, code violation). Fix that defect; don't renovate broadly.",
          "You enjoy renovation projects and have done them before.",
        ],
      },
      { type: "h2", text: "When renovation doesn't make sense" },
      {
        type: "ol",
        items: [
          "Foreclosure or financial pressure — renovation requires cash you don't have, and the timeline doesn't allow it anyway.",
          "Inherited property — heirs rarely want to take on a renovation; the math also rarely works because the basis step-up captures the un-renovated value.",
          "Out-of-state seller — managing a renovation remotely is brutal.",
          "Older house with major systemic issues (foundation, plumbing) — fixing one thing exposes the next thing.",
          "Distressed market segment (parts of east KC, KCK) where retail demand is thin regardless of finish quality.",
        ],
      },
      { type: "h2", text: "The math on a real KC house" },
      {
        type: "p",
        text: "Take an Independence ranch, 1965 build, current as-is value $180,000 (cash buyer offer), retail value after $40,000 renovation $260,000.",
      },
      {
        type: "ul",
        items: [
          "Renovate path: Spend $40k. Sell at $260k. Subtract realtor 6% ($15.6k), holding costs over 4-month renovation ($3.5k), repair list at inspection ($2k), closing costs ($1.5k). Net: $260k - $40k - $15.6k - $3.5k - $2k - $1.5k = $197,400.",
          "Cash sale path: Sell at $180k cash. Net: $180,000.",
        ],
      },
      {
        type: "p",
        text: "The renovate path nets $17,400 more — real money, but: you fronted $40k of cash, took 4-5 months instead of 2 weeks, managed contractors, and absorbed all the renovation risk. Whether $17k extra is worth that to you depends on your situation. For a seller who's calm, has cash, and time, it's worth it. For someone in distress, it's almost never worth it.",
      },
      { type: "h2", text: "What we look for when buying as-is" },
      {
        type: "p",
        text: "When you sell us a house in current condition, we don't penalize you for not renovating. We assume the kitchen needs cosmetic work, the bathrooms are dated, the HVAC is older than ideal. We've baked all of that into the offer. What we DO factor in: structural issues that materially affect renovation cost (foundation, framing, major plumbing/electrical issues). If you tell us up front about issues, we won't be surprised at closing; if you hide them, we'll find them in title or inspection and the offer adjusts.",
      },
      { type: "h2", text: "The simplest decision framework" },
      {
        type: "p",
        text: "Get a cash offer (free, 24 hours). Get a comparative market analysis from a Kansas City realtor (free). Get a renovation contractor's estimate for the renovations you're considering (free, most contractors do free estimates). Run the math: net to you on the cash sale vs net on the renovate-then-list path including the cost of renovation, time, and risk. Pick whichever wins for your situation. Most sellers are surprised by how close the numbers are.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "Submit your address through the homepage for a no-obligation cash offer in 24 hours. We'll tell you what we'd pay as-is. From there, you decide whether to renovate, list, or take our offer. We'll be honest about which one likely wins for your specific house.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "selling-duplex-small-multi-family-kansas-city",
    title: "Selling a Duplex or Small Multi-Family in Kansas City",
    description:
      "Practical guide to selling a Kansas City duplex, triplex, or fourplex — investor pricing math (cap rates, NOI), occupied vs vacant trade-offs, common KC multi-family neighborhoods, and timeline.",
    excerpt:
      "Multi-family sells differently than single-family. Cap rates, tenant transitions, and investor-pool dynamics all matter. Here's what tired KC landlords need to know about selling their duplex or fourplex.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-04-29",
    readTimeMin: 7,
    tags: ["multi-family", "rental", "process"],
    relatedSituations: ["rental-with-tenants"],
    relatedCities: ["kansas-city-mo", "kansas-city-ks", "raytown-mo", "independence-mo"],
    body: [
      {
        type: "p",
        text: "Selling a small multi-family property in Kansas City — duplex, triplex, fourplex — is a different transaction than selling a single-family. The buyer pool is investors, not homeowners. Pricing is based on income, not comparable sales. Tenants in place complicate (or sometimes simplify) the deal. And the financing landscape for multi-family buyers is its own beast. This post walks through what KC landlords need to know about selling small multi-family, especially if you're the kind of seller we work with most often: a tired-landlord exiting a portfolio of 1-5 small rentals.",
      },
      { type: "h2", text: "Tired landlords, the dominant seller profile" },
      {
        type: "p",
        text: "Most multi-family sellers we work with in Kansas City fall into one of these patterns:",
      },
      {
        type: "ul",
        items: [
          "Single-property landlord who inherited a duplex from a parent and never wanted to be a landlord. Now 5+ years in and ready to be done.",
          "Small portfolio landlord (3-10 KC rentals) cleaning up the portfolio — selling the worst-performing or highest-headache properties first.",
          "Out-of-state landlord who bought KC properties for cash flow during 2018-2022 and is now exiting the metro entirely.",
          "Aging landlord (60+) who inherited or accumulated rentals over decades and is consolidating for retirement or estate planning.",
          "Landlord facing a problem tenant who's been in the unit for years and wants to exit cleanly without fighting an eviction.",
        ],
      },
      { type: "h2", text: "Why multi-family is harder to sell traditionally" },
      {
        type: "p",
        text: "Listing a Kansas City duplex on the MLS is technically possible but produces poor results for several reasons. First, fewer buyers — multi-family buyers are investors, not homeowners, and the buyer pool for any specific KC duplex is maybe 5-20 active investors, not the 100+ retail buyers a single-family attracts. Second, tenant access — showings on a 2-unit property require coordinating with tenants who often have no incentive to keep the place clean or accessible. Third, financing — investor loans for small multi-family have stricter underwriting than residential loans, and contracts fall through more often. Fourth, condition — most landlord-owned KC properties have deferred maintenance that hurts retail showings.",
      },
      { type: "h2", text: "How investors actually price multi-family" },
      {
        type: "p",
        text: "Investors don't use comparable sales the way homeowners do. They use Net Operating Income (NOI) and cap rate. The math:",
      },
      {
        type: "ul",
        items: [
          "Gross Annual Rent: total rent collected per year across all units",
          "Less Operating Expenses: property tax, insurance, maintenance reserves, vacancy allowance (typically 5-10%), property management (8-10%), utilities the landlord covers",
          "= Net Operating Income (NOI)",
          "Property Value = NOI ÷ Cap Rate",
        ],
      },
      {
        type: "p",
        text: "Cap rates in Kansas City for small multi-family in 2026 are typically 7-10% (varies by neighborhood and condition; safer areas like KCMO Northside trade lower, riskier areas trade higher). On a duplex generating $24,000 gross rent annually, with $9,000 in operating expenses, NOI is $15,000. At an 8% cap rate, the investor's offer math suggests $187,500. At 10%, $150,000. The exact cap rate depends on the property's condition, location, and rent stability.",
      },
      { type: "h2", text: "Selling occupied vs vacant" },
      {
        type: "p",
        text: "Most cash investors prefer occupied multi-family because it's already producing cash flow on day one. Vacant multi-family creates a 'value-add' situation that some investors prefer (more renovation freedom, can re-tenant at market rent) but priced lower because of the holding cost. For a typical KC duplex:",
      },
      {
        type: "ul",
        items: [
          "Both units occupied, tenants paying on time, leases in place: highest investor offer",
          "Both units occupied, tenants below market rent on long leases: investor offer reflects 'rent loss' until leases turn",
          "One unit occupied, one vacant: middle ground; vacant unit can be renovated and re-rented at market",
          "Both units vacant, ready for renovation: lower offer because of holding cost during stabilization",
          "Both units occupied with non-paying or problem tenants: lower offer because of eviction risk and management cost",
        ],
      },
      { type: "h2", text: "What we look for in KC duplexes" },
      {
        type: "p",
        text: "When we underwrite a small multi-family in Kansas City, we look at: rent vs market (are leases under-rented or at market?), tenant quality (length of tenancy, payment history, lease terms), unit condition (kitchens, baths, mechanicals), lot/zoning compliance, and exit strategy (long-term hold vs reposition vs eventual conversion to single-family). Our offer reflects the math; we don't penalize landlords for tenant situations they inherited.",
      },
      { type: "h2", text: "Kansas City multi-family neighborhoods" },
      {
        type: "p",
        text: "Heavy multi-family concentration in: KCMO west of Troost (64111, 64108, 64109 — older 1900-1940 duplexes and small multi-family), KCMO Northland 64116-64119 (newer 1980s-2000s small multi-family), KCK Argentine and Turner districts (older 1900-1950 duplexes), Independence pockets along Crysler Street and the I-70 corridor. These are the areas where we make the most multi-family offers and where the investor pool is most active.",
      },
      { type: "h2", text: "Selling timeline" },
      {
        type: "p",
        text: "Cash offer multi-family closings in Kansas City typically run 14-21 days from accepted offer (slightly longer than single-family because the investor wants to verify rent rolls, lease documents, security deposits, and conduct a more thorough walkthrough). Sellers don't need to do much; we coordinate everything with the title company. Tenant security deposits transfer at closing as a credit on the settlement statement. Pro-rated rent calculates to closing day.",
      },
      { type: "h2", text: "Tax considerations for multi-family" },
      {
        type: "p",
        text: "Multi-family tax treatment is more complex than primary residence sales. Depreciation recapture on rental properties is significant (up to 25% federal on the depreciation taken). Long-term capital gains apply to any appreciation beyond depreciation. 1031 exchange is common for multi-family sellers who want to defer the tax — we coordinate with qualified intermediaries routinely. See our separate post on cash-sale tax implications for the broader framework, and absolutely talk to a Kansas City CPA before closing.",
      },
      { type: "h2", text: "Common landlord questions" },
      {
        type: "ul",
        items: [
          "\"Do I need to evict the bad tenants before selling?\" No. We buy with tenants in place; eviction (if needed) is our problem, not yours.",
          "\"What happens to security deposits?\" Transfer at closing as a credit on the settlement statement. The tenant's deposit accounting stays clean.",
          "\"Will you buy if my tenants haven't paid in months?\" Yes. We factor non-payment into the offer.",
          "\"Do I need to provide leases and rent rolls?\" Yes — the title company collects them as part of due diligence. If documentation is incomplete (common with longtime landlords), we work with what you have.",
          "\"Can you handle Section 8 tenants?\" Yes. We've taken over Section 8 leases routinely.",
        ],
      },
      { type: "h2", text: "Getting an offer" },
      {
        type: "p",
        text: "Submit your duplex/multi-family address through our homepage. In the form notes, include: number of units, current monthly rent per unit, occupancy status, and any known issues. We'll respond within 24 hours with an offer or follow-up questions. We've bought enough KC small multi-family properties that the process is straightforward — and you're done being a landlord.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "best-time-to-sell-kansas-city-house-monthly",
    title: "The Best Time to Sell a Kansas City House (Month-by-Month Guide)",
    description:
      "When does the Kansas City market favor sellers? Month-by-month breakdown of buyer demand, days on market, and price trends — plus how cash sales differ from MLS seasonality.",
    excerpt:
      "There's a real seasonal rhythm to the Kansas City housing market. Here's the month-by-month breakdown of when listings move fastest, when prices are strongest, and when cash sales are the smarter play.",
    author: CHASE_AUTHOR,
    publishedAt: "2026-05-03",
    readTimeMin: 7,
    tags: ["timing", "kansas-city", "market"],
    relatedSituations: [],
    relatedCities: ["kansas-city-mo", "overland-park-ks", "lees-summit-mo"],
    body: [
      {
        type: "p",
        text: "There's a real seasonal pattern in the Kansas City housing market — buyer demand isn't constant year-round, listings move at different speeds depending on the month, and the right strategy varies based on when you're selling. This isn't earth-shattering insight; it's just the reality of how home buying behavior cycles in the KC metro. This post walks through the month-by-month dynamics so you can decide whether timing your sale is worth the wait.",
      },
      { type: "h2", text: "The big picture: spring is peak season" },
      {
        type: "p",
        text: "If you only remember one thing from this post: spring is the strongest seller's market in Kansas City. The combination of post-winter cabin fever, families wanting to be moved before the next school year starts, and tax refunds hitting bank accounts creates the highest concentration of motivated buyers. Mid-March through mid-June is when KC listings typically receive the most showings, sell fastest, and command the strongest prices relative to listing.",
      },
      { type: "h2", text: "January: the new-year reset" },
      {
        type: "p",
        text: "Inventory is at the year's lowest. Buyers are mostly people who couldn't time their purchase to anything better — relocations, sudden life changes, investors hunting for off-season deals. Days on market trend higher than spring averages. Sellers in this window often have urgent reasons (year-end timing, divorce settlements timed to calendar year). For non-urgent sellers, January is generally a 'wait if you can' month.",
      },
      { type: "h2", text: "February: the warm-up" },
      {
        type: "p",
        text: "Activity picks up by late February as buyers return after the holidays. Listings going up in late February are positioned to capture the spring surge. Smart sellers preparing for a March or April listing date use February for pre-listing prep: paint, professional photos, decluttering. Closings in February still skew slow.",
      },
      { type: "h2", text: "March: spring market kicks off" },
      {
        type: "p",
        text: "By mid-March, the market is in full spring mode. Showings increase, inventory grows but demand grows faster, and price points stay strong. New listings hitting in March often see 5-10 showings within the first week and accept offers within 2 weeks. This is the strongest month for MLS sellers in Kansas City after April.",
      },
      { type: "h2", text: "April: peak season" },
      {
        type: "p",
        text: "April is consistently the strongest seller's month in Kansas City. Buyers feel the school-year clock ticking, mortgage applications are at peak, and competition for desirable listings produces the highest list-to-sale ratios of the year. If you have flexibility on timing and your house is in good condition, listing in early April typically produces the best result.",
      },
      { type: "h2", text: "May: still strong, slightly less competitive" },
      {
        type: "p",
        text: "May continues spring momentum. Inventory has expanded somewhat (more sellers listing), so individual listings see slightly less competition than in April, but demand is still strong. Closings in May land before the summer move-in window and let families settle before fall.",
      },
      { type: "h2", text: "June: spring market closing out" },
      {
        type: "p",
        text: "June sees the school-year-driven buyer urgency peak in the first half, then taper. Buyers who haven't bought by mid-June often pause and resume after the summer. Listings in early June still perform well; listings in late June face a quieter market through July.",
      },
      { type: "h2", text: "July: the summer slowdown" },
      {
        type: "p",
        text: "Activity drops noticeably. Buyer interest is split between vacations and the disappointment of having missed the spring market. Days on market extend, list-to-sale ratios drop, and many sellers who listed in April-June and haven't sold start reducing prices. Not the worst month to sell — but not the best either.",
      },
      { type: "h2", text: "August: relocation push" },
      {
        type: "p",
        text: "Activity recovers in August as corporate relocations move people for fall start dates and last-minute school-year buyers make their final attempts. Specific KC employers (Cerner/Oracle, Garmin, T-Mobile) drive a real relocation buyer pool in August. Listings priced right and positioned correctly can capture this audience effectively.",
      },
      { type: "h2", text: "September: second wind" },
      {
        type: "p",
        text: "September is the year's second-strongest selling month after April. Buyers who paused over summer return with renewed urgency before winter. Inventory is somewhat thinner than spring (fewer sellers list in fall), so individual listings see less competition. A well-priced fall listing can sell as fast as a strong spring listing.",
      },
      { type: "h2", text: "October: fall market closing" },
      {
        type: "p",
        text: "October starts strong but tapers through the month as buyers who haven't found something start delaying to spring. Holiday season looms. Listings hitting in early October have time; late October listings often carry into the winter-quiet window.",
      },
      { type: "h2", text: "November: pre-holiday quiet" },
      {
        type: "p",
        text: "Activity falls. Most buyers focused on Thanksgiving and holidays. The buyers who ARE in the market in November are often very motivated (relocations with hard deadlines, divorce-driven sales, new-year-tax-driven sales). Listings that succeed in November tend to be priced aggressively or in extremely strong neighborhoods.",
      },
      { type: "h2", text: "December: the slowest month" },
      {
        type: "p",
        text: "Counterintuitively, December's serious buyers are often more motivated than other months — they're not just looking, they're doing this for a reason. Sellers who can list during December and tolerate the lower volume may find better-converted buyers per showing. But fewer overall showings, longer days on market, and weaker price negotiation. Most non-urgent sellers wait until January or February.",
      },
      { type: "h2", text: "How cash sales differ" },
      {
        type: "p",
        text: "Cash sales like ours are largely insulated from seasonal patterns. We're buying based on the property's investment math, not on whether retail buyers are competing for it. Our offer in January for the same house is essentially the same as our offer in April. This is why cash sales make sense for sellers who can't time their sale — foreclosure pressure, divorce settlement dates, inheritance situations, relocations. The MLS market punishes off-season sellers; cash buyers don't.",
      },
      { type: "h2", text: "The right strategy by situation" },
      {
        type: "ul",
        items: [
          "House is in great shape, no time pressure, want maximum price → wait for March-April listing window with a Kansas City realtor",
          "House needs work, no time pressure → consider whether to renovate (see our separate post on this) or take a cash offer now",
          "Time pressure (foreclosure, relocation, divorce, illness) → cash sale, regardless of season",
          "Inherited or out-of-state seller → cash sale, regardless of season (the holding costs of waiting for spring usually outweigh the small price premium)",
          "Strong KC neighborhood (Brookside, Waldo, OP), house is retail-ready → MLS in spring or early fall",
          "Older house in average condition, no urgent reason to sell → list with realtor in spring; if it doesn't sell within 60 days, consider cash buyer",
        ],
      },
      { type: "h2", text: "Bottom line" },
      {
        type: "p",
        text: "If you have flexibility, timing the Kansas City market gets you 3-5% more on price by listing in April vs January. That's real money. If you don't have flexibility — most distressed or relocating sellers don't — the seasonal premium gets dwarfed by the cost of waiting (holding costs, mortgage payments, deferred life decisions). Cash sales work in any month for any reason.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "Whatever month you're reading this, submit your address through our homepage for a no-obligation cash offer in 24 hours. If timing the market is right for your situation, we'll tell you (we're not in the business of pressuring sellers who'd net more by waiting for spring). If cash is right for your situation, we'll close on whatever timeline works.",
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

/** Posts sorted newest-first */
export function getPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (b.publishedAt < a.publishedAt ? -1 : 1))
}

export const POST_SLUGS = BLOG_POSTS.map((p) => p.slug)
