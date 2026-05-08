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
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

/** Posts sorted newest-first */
export function getPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (b.publishedAt < a.publishedAt ? -1 : 1))
}

export const POST_SLUGS = BLOG_POSTS.map((p) => p.slug)
