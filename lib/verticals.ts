export type Vertical = {
  /** URL slug — page lives at /situations/[slug] */
  slug: string
  /** SEO title tag */
  metaTitle: string
  /** SEO meta description */
  metaDescription: string
  /** Keyword phrase for the eyebrow pill, e.g. "FORECLOSURE" */
  eyebrow: string
  /** H1 first part, e.g. "Selling a Kansas City house in" */
  h1Pre: string
  /** H1 highlight (gets brand-accent color), e.g. "foreclosure?" */
  h1Highlight: string
  /** H1 last part, optional */
  h1Post?: string
  /** Lead paragraph (~120-180 words) — the SEO-critical unique intro */
  intro: string
  /** Specific situation pain points the seller is feeling */
  painPoints: string[]
  /** What we look for / how we make it easy in this situation */
  reasons: string[]
  /** Sub-heading for the situational explainer block */
  situationHeading: string
  /** ~150-word body for the situational explainer */
  situationBody: string
  /** 3-5 vertical-specific FAQs (different from the homepage FAQ) */
  faqs: Array<{ q: string; a: string }>
  /** Final CTA microcopy near the bottom */
  ctaHeadline: string
  /** Final CTA sub */
  ctaSub: string
}

export const VERTICALS: Vertical[] = [
  {
    slug: "foreclosure",
    metaTitle: "Sell a House in Foreclosure for Cash | Kansas City — Heartland Acquisitions",
    metaDescription:
      "Facing foreclosure on your Kansas City home? We buy houses in foreclosure for cash and can close before the auction. No fees, no repairs, no commissions. Get a fair offer in 24 hours.",
    eyebrow: "FORECLOSURE HELP",
    h1Pre: "Selling a Kansas City house in",
    h1Highlight: "foreclosure?",
    h1Post: "We can help today.",
    intro:
      "If your Kansas City house is in foreclosure, the worst thing you can do is freeze. Missouri allows non-judicial foreclosure, which means once the trustee schedules a sale, the auction date is locked in roughly 21 days out, and the bank doesn't need a courtroom to take your home. Selling to a cash buyer like Heartland Acquisitions before the sale date stops the process, pays off the mortgage, and lets you walk away with whatever equity you have left — without the foreclosure showing up as a forced sale on your credit. We buy in any condition, cover all closing costs, and most importantly, we close at the timeline you need. We've helped sellers in Jackson, Clay, Cass, and Platte counties (Missouri) and Wyandotte and Johnson counties (Kansas) close in as few as 5 days when the sale date was breathing down their neck.",
    painPoints: [
      "Trustee sale date scheduled and the clock is ticking",
      "Behind on payments and the bank is calling daily",
      "House needs repairs you can't afford to make",
      "Don't want a forced sale on your credit report",
      "Haven't been able to get a realtor to take it on",
    ],
    reasons: [
      "We close before the auction — even on a 5-day timeline",
      "We pay off your mortgage directly at the title company",
      "Any leftover equity goes straight to you, in cash",
      "No repairs, no cleanouts, no realtor — leave the house as-is",
      "We coordinate directly with your lender's loss-mitigation department",
    ],
    situationHeading: "How we close before the auction date",
    situationBody:
      "When you submit your address, we run comparable sales for your neighborhood within 1 hour and present a no-obligation cash offer. If you accept, we open title with a Kansas City title company immediately and request a payoff statement from your lender the same day. Most foreclosure closings move in 5–10 business days from accepted offer — well before a typical Missouri trustee sale date. We've handled every wrinkle: judicial foreclosures in Kansas, Notices of Default in Missouri, second mortgages, IRS liens, HOA arrears, and active bankruptcies. If the math works for everyone, we close. If it doesn't, we'll tell you straight and point you to a HUD-approved housing counselor who can help with loan modification.",
    faqs: [
      {
        q: "Can you close before my Missouri trustee sale date?",
        a: "Yes — we've closed foreclosure deals in 5 business days when the auction was scheduled within the week. The key is opening title and requesting the lender payoff statement the same day you accept our offer. We work with title companies in Jackson and Clay counties that can rush a foreclosure file when needed.",
      },
      {
        q: "Will selling to you stop the foreclosure on my credit?",
        a: "Yes. A pre-foreclosure cash sale closes the mortgage as paid in full at closing, the same as any normal sale. The foreclosure proceedings stop the moment the lender receives payoff. The missed payments leading up to the sale will still show on your credit, but no forced foreclosure or trustee sale shows up — which makes a substantial difference for future credit and rentals.",
      },
      {
        q: "Do I get any money if I'm underwater on the mortgage?",
        a: "If you owe more than the house is worth, our offer covers the payoff and we walk away with the property — you walk away with no debt. That's still a meaningful win because it stops the foreclosure cold, prevents a deficiency judgment, and avoids foreclosure on your credit. If there's equity left over after the payoff, that goes straight to you at closing.",
      },
      {
        q: "What if my lender is already in the middle of a loan modification review?",
        a: "We work around it. Loan modifications can take 60-90 days and many sellers run out the clock waiting on a yes-or-no. Our offer is non-binding until you sign, so you can keep the modification process moving and only accept our offer if the modification falls through. Plenty of our foreclosure sellers used us as a backup plan.",
      },
      {
        q: "Do you charge anything when I'm already behind on payments?",
        a: "Zero. No commissions, no fees, no closing costs charged to you. We pay all standard buyer-side closing costs at our title company. The number on the offer is the number applied to your loan payoff plus any remaining cash to you.",
      },
    ],
    ctaHeadline: "Stop the foreclosure today.",
    ctaSub: "Submit your address. Cash offer in 24 hours. We can close before the auction.",
  },
  {
    slug: "inherited",
    metaTitle: "Sell an Inherited House Fast | Kansas City Probate Sales — Heartland Acquisitions",
    metaDescription:
      "Inherited a Kansas City house and not sure what to do? We buy inherited homes for cash, coordinate directly with your attorney, and handle out-of-state sellers entirely remotely. No repairs, no cleanout, no commissions.",
    eyebrow: "INHERITED PROPERTY",
    h1Pre: "Inherited a",
    h1Highlight: "Kansas City house?",
    h1Post: "We make the rest easy.",
    intro:
      "Selling an inherited house is rarely just a real-estate transaction. There's grief, often siblings to coordinate, sometimes a probate process you don't fully understand, frequently a property that hasn't been updated in 30 years, and almost always belongings to sort through. Most heirs don't live in Kansas City and don't want to fly in three times for showings, inspections, and closing. We make this kind of sale specifically — we coordinate directly with your probate attorney, handle out-of-state sellers entirely remotely with notarized documents, buy the house in whatever condition you found it (including hoarder situations), and let you leave anything you don't want. One walkthrough, one cash offer, one wire to the address you specify. We've worked with sellers from Florida, California, and Texas closing on inherited properties in Independence, Lee's Summit, Raytown, Overland Park, and across the metro.",
    painPoints: [
      "Live out of state and can't fly in for showings",
      "House hasn't been updated since the 1970s",
      "Sorting through decades of belongings in the basement",
      "Multiple heirs who don't all agree on what to do",
      "Probate attorney moves slowly and you're paying utilities every month",
    ],
    reasons: [
      "Out-of-state sellers handled entirely remotely with notarized docs",
      "We coordinate directly with your probate attorney or trustee",
      "Sell as-is — leave furniture, appliances, the whole basement",
      "We pay all closing costs and split proceeds to multiple heirs at closing",
      "Closings typically fit on a date that works for the family, not us",
    ],
    situationHeading: "How we handle probate timelines",
    situationBody:
      "If the house is in probate, we open title contingent on Letters Testamentary and work alongside your attorney through the process. Missouri probate typically takes 6 to 12 months for a simple estate; if the property was held in a revocable trust, you can usually skip probate entirely and we close immediately. We've structured deals for both. Our team can review your court order, the personal representative's authority, and any liens against the estate (Medicaid recovery is common in Missouri inherited properties), and walk you through what's collectible vs what comes off the gross. Where multiple heirs are splitting proceeds, we wire each share separately at closing — your attorney just confirms the split and we cut the checks. Anything you don't want stays in the house. We dispose of it as part of our renovation.",
    faqs: [
      {
        q: "Can I sell an inherited house before probate closes?",
        a: "In many cases yes, with the right structure. If you have Letters Testamentary or Letters of Administration appointing you as personal representative, you can sell on behalf of the estate and we close at probate completion. If the property was in a revocable trust, you skip probate entirely. We structure the contract to match — your attorney reviews and confirms.",
      },
      {
        q: "Do all heirs need to agree to sell?",
        a: "If the property is jointly inherited, yes — all heirs (or the personal representative acting for them) need to sign. We've handled estates with siblings spread across three time zones. We send notarized documents via overnight mail or DocuSign and wire each heir's share separately at closing. As long as everyone's signed off, the geography doesn't matter.",
      },
      {
        q: "What about Medicaid recovery liens on the property?",
        a: "Missouri's MO HealthNet program can place a lien on an inherited home if the deceased received Medicaid long-term-care benefits. This is recoverable from the estate, not from you personally. We coordinate with your attorney to satisfy the lien at closing — the amount comes out of gross proceeds before heirs are paid. We've closed these many times; it's standard.",
      },
      {
        q: "The house is full of stuff — do I have to clean it out?",
        a: "No. Take what's meaningful, leave the rest. Furniture, appliances, decades of paperwork in the basement, the riding mower in the garage — we handle all of it as part of our renovation. This is one of the biggest reasons heirs sell to us instead of listing.",
      },
      {
        q: "Can I close remotely from out of state?",
        a: "Yes. We use mobile notaries in your area for signing and the title company wires proceeds directly to your account. Many of our inherited-house sellers never set foot in Kansas City during the entire transaction. Just one walkthrough by us, one cash offer, signatures handled remotely, and the wire hits within 1-2 business days of closing.",
      },
    ],
    ctaHeadline: "Sell the inherited house — without the headache.",
    ctaSub: "Submit the address. We coordinate with your attorney, handle out-of-state sellers, and close on your schedule.",
  },
  {
    slug: "divorce",
    metaTitle: "Sell a House Fast in a Divorce | Kansas City — Heartland Acquisitions",
    metaDescription:
      "Going through a divorce in Kansas City and need to sell the marital home fast? We buy houses for cash with one walkthrough, no realtor, and a closing date you both agree on. Discreet, fast, and final.",
    eyebrow: "DIVORCE SALES",
    h1Pre: "Selling the house in a",
    h1Highlight: "divorce?",
    h1Post: "Quietly. Quickly. Done.",
    intro:
      "Selling a house during a divorce is exhausting in a way that other home sales aren't. You're already managing court dates, attorneys, custody schedules, and your own grief — and now a realtor wants 30 days of showings, dual-spouse signatures on every disclosure, and contingency-driven buyers who fall through. We buy directly from divorcing couples in Kansas City and the surrounding metro: one walkthrough, one cash offer both spouses can review, one closing date you both agree on. The transaction is private (no MLS listing, no for-sale sign in the yard, no neighbors asking questions), the timeline is yours (close in 7 days or 60), and proceeds are split exactly per your settlement at the title company — we cut two checks, no negotiation about who pays the realtor. We've worked with sellers whose marital home was in any condition: pristine, mid-renovation, neglected, or actively occupied by one spouse who wouldn't leave for showings.",
    painPoints: [
      "Need to sell fast but neither of you wants showings",
      "The other spouse won't keep the house clean for a realtor",
      "Court date approaching and you need a clean number for settlement",
      "Don't want neighbors knowing about the divorce",
      "Tired of the fight and just want it done",
    ],
    reasons: [
      "Private sale — no MLS, no for-sale sign, no Zillow listing",
      "One walkthrough by us, scheduled when both spouses can be there (or not)",
      "Both spouses sign the same offer — we coordinate signatures separately if needed",
      "Proceeds split per your settlement, paid in two separate wires at closing",
      "Close in as little as 7 days, or whenever your settlement finalizes",
    ],
    situationHeading: "How we handle two-signature sales",
    situationBody:
      "Missouri and Kansas both require both spouses to sign the deed if the property is held jointly (which is almost always the case for a marital home). We work with this routinely. If you're communicating directly, both of you sign at the same closing. If you're not on speaking terms, we use mobile notaries to capture each signature separately and the title company assembles the file. Your attorneys can review the contract before you sign — we send draft purchase agreements to opposing counsel proactively. At closing, the title company wires net proceeds per the settlement agreement: it might be 50/50, it might be 60/40 to the spouse keeping the kids, it might be 100% to one spouse with the other taking equivalent value from a retirement account. Whatever your decree says, we cut the checks accordingly. The whole transaction can be done without you and your ex being in the same room.",
    faqs: [
      {
        q: "Do both spouses need to sign?",
        a: "Yes, if the property is jointly titled (which is almost always the case for a marital home in Missouri or Kansas). Both signatures are required on the deed at closing. We coordinate signatures separately when needed using mobile notaries — you and your ex never need to be in the same room.",
      },
      {
        q: "Can we sell before the divorce is final?",
        a: "Yes, in most cases. As long as both spouses agree and the property is jointly titled, you can sell before the decree is finalized. Many divorcing couples do this to clear the marital balance sheet ahead of mediation or trial — having a final cash number for the house simplifies the rest of the settlement. Your attorneys may want to review the contract before signing.",
      },
      {
        q: "How do we split the proceeds?",
        a: "However your settlement specifies. We give the title company a wiring instruction sheet at closing — it might be 50/50, it might be uneven per your decree, it might be one spouse buying the other out with proceeds going entirely to one party. The title company executes the split and sends separate wires. We don't get involved in that math; we just wire the net to title and they handle the rest.",
      },
      {
        q: "Can the sale stay private?",
        a: "Completely. There's no MLS listing, no for-sale sign, no neighbors-asking-questions because nobody knows the house is for sale. Closings are recorded as public record like any sale (that's standard), but the marketing process you'd go through with a realtor (showings, open houses, photos online) doesn't happen.",
      },
      {
        q: "What if one spouse is still living in the house?",
        a: "That's common and not a problem. We schedule the walkthrough at a time that works for the spouse in the house. The house doesn't need to be cleaned, staged, or prepared. We close on whatever date works for the family — we've had sellers ask for closings 45-60 days out so the spouse in the house has time to find a new place.",
      },
    ],
    ctaHeadline: "Get the house sold and move on.",
    ctaSub: "Submit your address. Cash offer in 24 hours. Private, fast, and final.",
  },
  {
    slug: "fire-damage",
    metaTitle: "Sell a Fire-Damaged House for Cash | Kansas City — Heartland Acquisitions",
    metaDescription:
      "House had a fire? We buy fire-damaged homes in Kansas City as-is. No insurance battles, no contractors, no rebuilding. Cash offer in 24 hours, close in 7 days. We handle smoke, water, and structural damage.",
    eyebrow: "FIRE-DAMAGED HOUSES",
    h1Pre: "Sell a",
    h1Highlight: "fire-damaged",
    h1Post: "Kansas City house — as-is.",
    intro:
      "After a fire, most sellers don't want to manage a rebuild — they want out. Insurance claims drag for months, contractors quote double what your check covers, and meanwhile you're paying a mortgage on a house you can't live in. We buy fire-damaged houses in any condition across Kansas City and the surrounding metro: minor smoke damage, total losses, anything in between. You don't deal with adjusters, you don't hire contractors, you don't argue about ACV vs replacement cost. We assess the damage during one walkthrough, present a cash offer that accounts for the rebuild scope, and close at a Kansas City title company in as little as 7 days. Whatever insurance proceeds you've received are yours to keep — we're paying for the property in its current condition, full stop. We've bought houses with kitchen fires, electrical fires, total burn-downs requiring a full demo, and detached garages that took the rest of the structure with them.",
    painPoints: [
      "Insurance check came in low and you can't fund the repairs",
      "House is uninhabitable but the mortgage payment isn't pausing",
      "Don't want to manage contractors during a rebuild",
      "Smoke damage that didn't show up in the initial assessment",
      "Lender threatening to force-place insurance or call the loan",
    ],
    reasons: [
      "Buy as-is — even total losses requiring a full teardown",
      "You keep your insurance proceeds; we pay separately for the property",
      "We coordinate with your mortgage company on payoff",
      "No contractors, no permits, no rebuilding decisions",
      "Closings in as few as 7 days from accepted offer",
    ],
    situationHeading: "How fire damage affects our offer",
    situationBody:
      "We assess fire-damaged properties differently than standard distressed sales because the rebuild scope is the dominant cost. During the walkthrough, we look at: structural integrity (is the foundation usable, is the framing salvageable), the extent of smoke damage to remaining materials (drywall, insulation, ducts), water damage from the fire suppression effort (often more expensive than the fire itself), the condition of major systems (HVAC, electrical, plumbing), and the local rebuild market (permitting, labor availability in your specific Kansas City municipality). We then build a renovation budget against current ARV and present a cash offer. You keep all insurance proceeds — those are between you and your insurer, not part of our purchase. The house transfers to us with whatever damage existed at the walkthrough; we take on the rebuild. Most fire-damaged closings happen on a 7-14 day timeline.",
    faqs: [
      {
        q: "Will you buy a total loss / burn-down?",
        a: "Yes. Total losses are sometimes easier than partial damage because the path is clear: demo and rebuild on the lot. We look at lot value, demo cost, and the local rebuild ARV. If the math works, we make an offer. We've bought several total losses in Jackson and Wyandotte counties.",
      },
      {
        q: "Do I need to give you my insurance check?",
        a: "No. The insurance settlement is between you and your carrier — that money is yours. Our cash offer is for the property in its current damaged condition, separate from any insurance proceeds. Many sellers use the insurance check toward their next housing while we close on the damaged home.",
      },
      {
        q: "What about hidden smoke or water damage?",
        a: "We assume there's more damage than visible, especially water damage from fire suppression and smoke that's permeated insulation and ducts. We price for a full remediation in the offer. If we find significantly more damage during the contract period, we may renegotiate, but we don't surprise sellers with deductions at closing — anything material we find, we discuss before signing.",
      },
      {
        q: "Can I sell before the insurance claim closes?",
        a: "Yes, and many sellers do. The insurance claim becomes between you and your carrier — once the property changes hands, you can still receive the settlement. The mortgage payoff happens at closing the same way it does on any sale. Coordinating a 7-day close lets you stop paying a mortgage on an uninhabitable house while the insurance process drags.",
      },
      {
        q: "What if my lender is involved (force-placed insurance, etc.)?",
        a: "We handle it. After a major fire, lenders sometimes force-place insurance, freeze escrow, or threaten loan call. We coordinate directly with the loss-mitigation department to get the payoff statement and close the loan at our title company. Most lenders are happy to receive payoff on a damaged property that's no longer collateral.",
      },
    ],
    ctaHeadline: "Walk away from the fire.",
    ctaSub: "Submit the address. We assess the damage during one walkthrough and present a cash offer in 24 hours.",
  },
  {
    slug: "rental-with-tenants",
    metaTitle: "Sell a Rental Property with Tenants in Place | Kansas City — Heartland Acquisitions",
    metaDescription:
      "Tired of being a landlord in Kansas City? We buy rental properties with tenants in place. No eviction, no lease termination, no vacancy. Cash offer in 24 hours. We honor existing leases or work with you on transition.",
    eyebrow: "RENTAL PROPERTIES",
    h1Pre: "Sell your Kansas City",
    h1Highlight: "rental property",
    h1Post: "with tenants in place.",
    intro:
      "Most cash buyers won't touch a tenanted property. Most realtors will tell you to evict before listing. We do the opposite — we buy Kansas City rentals with tenants in place all the time, and we don't ask the seller to handle any of the eviction or move-out logistics. If you have tired-landlord syndrome (3am plumbing calls, late rent collection, deferred maintenance you never finish), we'll buy the property in whatever condition it's in, with whatever tenants are in it, and let you walk away cleanly. We honor existing leases or work with you and the tenant on a transition plan. We've bought single-family rentals, duplexes, and small multi-family across Kansas City, Independence, Raytown, Overland Park, and Olathe. The transaction is identical to a vacant sale: cash offer in 24 hours, close in 7-14 days, no surprises at closing.",
    painPoints: [
      "Don't want to evict before selling",
      "Tenants on a long-term lease you don't want to break",
      "Property has deferred maintenance you can't keep up with",
      "Late rent every month and you're done managing it",
      "Tenants in the unit but you live out of state",
    ],
    reasons: [
      "Buy with tenants in place — we don't ask you to evict",
      "Honor existing leases through their term or negotiate transition",
      "Single-family, duplex, or small multi-family — all welcome",
      "Out-of-state landlords handled remotely",
      "We close at a Kansas City title company on your timeline",
    ],
    situationHeading: "How we handle tenants at closing",
    situationBody:
      "If your tenants have a fixed-term lease, we honor it — the lease transfers to us at closing under standard Missouri or Kansas landlord-tenant law, and we collect rent from that point forward. The seller doesn't need to do anything special; we send a notice-of-sale letter to the tenant after closing introducing ourselves as the new landlord and providing payment instructions. If your tenants are month-to-month, we'll discuss whether we want to keep them in place, give standard notice and let them transition out, or offer cash-for-keys for a faster vacancy. The choice depends on the property and our renovation plan, but the seller never deals with eviction or notice-giving. Security deposits transfer to us at closing as a credit. Pro-rated rent is calculated to the closing date. We've handled hundreds of these transactions; it's mechanical for us.",
    faqs: [
      {
        q: "Do I need to give the tenants notice that I'm selling?",
        a: "Not before signing the contract. Once we're under contract, we coordinate together on what (if anything) to communicate to the tenants and when. After closing, we send a formal notice-of-sale letter to the tenants ourselves, introducing the new landlord and payment instructions. You don't need to handle any tenant communication unless you want to.",
      },
      {
        q: "What happens to the security deposit?",
        a: "It transfers to us at closing as a credit on the settlement statement. Whatever you're holding for the tenant becomes our liability at closing. The tenant's deposit accounting stays clean — they get their deposit refunded by us when they eventually move out, per the same lease terms.",
      },
      {
        q: "Will you buy if my tenants haven't paid rent in months?",
        a: "Yes. Non-paying tenants are a common reason landlords sell. We buy the property as-is including the tenant situation. After closing, we either pursue collection / eviction or offer cash-for-keys ourselves — that's our decision, not yours. You don't have to chase the back rent before selling.",
      },
      {
        q: "Can you buy a duplex with one unit vacant and one occupied?",
        a: "Yes. Mixed occupancy is common on small multi-family. We assess each unit during the walkthrough and price the offer based on occupied unit rent + vacant unit potential rent + condition. The same closing process applies.",
      },
      {
        q: "How does this work for an out-of-state landlord?",
        a: "Identical to a normal sale, just remote. We use mobile notaries in your state for signing, the title company wires proceeds directly to your bank, and you never need to come to Kansas City. We handle the tenant relationship from our end after closing. Many of our rental sellers are in Texas, California, and Florida.",
      },
    ],
    ctaHeadline: "Done being a landlord?",
    ctaSub: "Submit the address. Cash offer in 24 hours. We handle the tenants.",
  },
]

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug)
}

export const VERTICAL_SLUGS = VERTICALS.map((v) => v.slug)
