export type City = {
  /** URL slug — page lives at /cities/[slug] */
  slug: string
  /** Display name, e.g. "Independence" */
  name: string
  /** Two-letter state, "MO" or "KS" */
  state: "MO" | "KS"
  /** County, e.g. "Jackson County" */
  county: string
  /** SEO title tag */
  metaTitle: string
  /** SEO meta description */
  metaDescription: string
  /** ~150 word intro specific to the city */
  intro: string
  /** ~120 word local market context */
  marketContext: string
  /** ZIP codes / neighborhoods we serve */
  zips: string[]
  /** Notable neighborhoods (used in copy + as landmarks) */
  neighborhoods: string[]
  /** 3-4 city-specific FAQs */
  faqs: Array<{ q: string; a: string }>
}

export const CITIES: City[] = [
  {
    slug: "kansas-city-mo",
    name: "Kansas City",
    state: "MO",
    county: "Jackson, Clay, Cass, and Platte counties",
    metaTitle: "We Buy Houses in Kansas City, MO | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Local Kansas City cash home buyers. We buy houses in any condition across Jackson, Clay, Cass, and Platte counties. Fair offers in 24 hours, close in 7 days. No fees, no commissions, no repairs.",
    intro:
      "Kansas City, Missouri is home for us — Heartland Acquisitions is headquartered here, our office is at 2107 Grand Boulevard in the Crossroads, and most of the houses we buy are within a 20-minute drive of downtown. We buy single-family homes, duplexes, and small multi-family across the entire KC, MO footprint: Brookside, Westport, Waldo, Hyde Park, Northland, the East Side, Plaza, Country Club District, Volker, and every neighborhood in between. We've been through every condition you can imagine: post-war bungalows that haven't been touched since 1965, century-old houses on the East Side with shifted foundations, mid-century ranches in the Northland, and beautifully renovated homes where the seller just needs out fast for personal reasons.",
    marketContext:
      "The Kansas City market splits sharply by neighborhood. Houses near the Plaza, Brookside, and Waldo trade at retail-strong premiums; houses east of Troost or in 64126/64127 trade at investor prices. We make offers across the entire spectrum because we own and renovate properties at every price point. Our offer methodology is the same regardless of neighborhood: comparable recent sales, condition adjustment, our holding and renovation costs, fair margin. What differs is the renovation scope and the after-repair value — both of which we calibrate locally rather than using a metro-wide formula.",
    zips: [
      "64108", "64109", "64110", "64111", "64112", "64113", "64114",
      "64116", "64117", "64118", "64119", "64120", "64123", "64124",
      "64126", "64127", "64128", "64130", "64131", "64132", "64133",
      "64134", "64136", "64138", "64139", "64145", "64146", "64147",
    ],
    neighborhoods: [
      "Brookside", "Waldo", "Hyde Park", "Westport", "Crossroads",
      "Plaza", "Country Club District", "Northland", "East Side",
      "Volker", "Beacon Hill", "Coleman Highlands",
    ],
    faqs: [
      {
        q: "Do you buy houses in every Kansas City neighborhood?",
        a: "Yes. From Brookside to the East Side, Northland to South KC, Plaza to West Bottoms — we make offers in every ZIP code in Kansas City, Missouri. Our offer math accounts for neighborhood ARV; we don't redline.",
      },
      {
        q: "What's the difference between selling to you and a Kansas City realtor?",
        a: "A KC realtor lists publicly, hosts showings for 30-90 days, and depends on a buyer who needs financing approval. Standard 6% commission plus closing costs and concessions, often $20-30k off the top. Selling to us is private, fast (cash close in 7-14 days), and certain. The number on our offer is the number that hits your bank account at closing — no fees, no repairs, no contingencies. Our offer is typically 70-85% of retail; whether that nets you more depends on your specific situation, but for distressed properties or fast-timeline sellers, the math often works in our favor.",
      },
      {
        q: "What KC ZIP codes do you serve?",
        a: "All of them. 64108-64199 (Kansas City, MO), plus surrounding suburbs. If your address geocodes to KCMO, we'll make an offer.",
      },
      {
        q: "Do you also buy in Kansas City, Kansas?",
        a: "Yes. We have a separate Kansas City, KS page that covers the Wyandotte County side of the metro — same buying process, same team, just different state-level paperwork at the title company.",
      },
    ],
  },
  {
    slug: "independence-mo",
    name: "Independence",
    state: "MO",
    county: "Jackson County",
    metaTitle: "We Buy Houses in Independence, MO | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Sell your Independence house fast for cash. We buy in every Independence neighborhood — Englewood, Sugar Creek, Fairmount, Stone Canyon. Fair offers in 24 hours, close in 7 days. No fees, no repairs.",
    intro:
      "Independence is one of our most active markets. We buy houses across Jackson County's largest suburb — from the historic Englewood Square area to the Sugar Creek refinery district to the newer subdivisions out by Stone Canyon and Crackerneck Creek. Independence has a wider price range than most KC suburbs because it covers everything from $50k investor flips to $400k+ executive homes near Truman Library and Lake Tapawingo. We make offers across the full range. Independence sellers come to us most often for inherited houses (a lot of older housing stock from the 1950s-60s), divorce sales, and tired-landlord rental dispositions. Our team knows the codes office, the local title companies, and the title transfer quirks specific to Jackson County — so the closing process moves fast.",
    marketContext:
      "Independence's housing stock is heavily weighted toward post-war ranches and split-levels in the 64050, 64052, 64053, and 64055 ZIP codes — many of which haven't been updated since the original construction. We buy these in their current condition. The newer pockets near Stone Canyon (64057) and out toward Blue Springs trade closer to retail and we still buy there, just at correspondingly higher offers. Property tax in Independence runs slightly above the Jackson County median, which we factor into our holding cost when underwriting.",
    zips: ["64050", "64052", "64053", "64054", "64055", "64056", "64057", "64058", "64063"],
    neighborhoods: [
      "Englewood", "Sugar Creek", "Fairmount", "Stone Canyon",
      "Crackerneck Creek", "Lake City", "Hartman", "Mount Washington",
    ],
    faqs: [
      {
        q: "Do you buy older houses in Englewood and Fairmount?",
        a: "Yes — those are some of our most common Independence purchases. Houses from the 1920s-1950s with original kitchens, knob-and-tube electrical, and lath-and-plaster walls don't scare us. We renovate to modern standards and either rent or resell. Older Independence houses are exactly our bread and butter.",
      },
      {
        q: "What about flooding near the Missouri River bottoms?",
        a: "We buy in flood zones, but we underwrite for the insurance cost and any past-flood remediation needed. If your house is in 64054 (Sugar Creek) or near the river, we'll factor that into the offer rather than skipping the property entirely. We've bought several houses with prior flood damage that other buyers wouldn't touch.",
      },
      {
        q: "Do you serve Lake Tapawingo and the lake-area subdivisions?",
        a: "Yes. The lake-area properties (some are technically Independence addresses, some are Lake Tapawingo proper) are higher-value and trade closer to retail, but we still make offers — we just buy more selectively in that pocket.",
      },
      {
        q: "How do Jackson County tax sales affect inherited Independence houses?",
        a: "If the inherited house has unpaid property taxes, Jackson County can include it in the annual tax sale (typically August). We've bought tax-delinquent properties before the sale; we work with the county collector to satisfy back taxes at closing as a deduction from the gross. It's mechanical for us — your attorney just confirms the tax amount and we handle the rest.",
      },
    ],
  },
  {
    slug: "lees-summit-mo",
    name: "Lee's Summit",
    state: "MO",
    county: "Jackson and Cass counties",
    metaTitle: "We Buy Houses in Lee's Summit, MO | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Lee's Summit cash home buyers. We buy houses in every Lee's Summit neighborhood — Downtown, Lakewood, Raintree Lake, Summit Square. Fair offers in 24 hours, close in 7 days. No fees, no repairs.",
    intro:
      "Lee's Summit is one of the fastest-growing parts of the metro and the housing stock reflects it — newer construction in the southern subdivisions, restored historic homes in Downtown Lee's Summit, and lake-community properties around Lakewood and Raintree. We buy across the entire Lee's Summit footprint, from the older 1950s ranches near 50 Highway to the high-end newer builds near Summit Fair. Our typical Lee's Summit seller is moving for a job (Cerner / Oracle moves are common), going through a divorce, or selling an inherited family home that's been in Lee's Summit for two generations. We make offers across all of it. Closings run through Lee's Summit and Independence title companies; we know the local title officers and can move fast when the timeline calls for it.",
    marketContext:
      "Lee's Summit trades at a premium to most of the eastern KC metro because of school ratings, recent retail investment around Summit Fair, and proximity to both downtown KC and the I-70 / I-470 / 50 Highway corridor. Houses in 64086 and 64064 (Lakewood) trade highest; the older sections of 64063 and the newer 64081 sit at the metro median. We adjust our offers accordingly and often pay closer to retail in Lee's Summit than we do further east in Independence or Blue Springs.",
    zips: ["64063", "64064", "64081", "64082", "64086", "64083"],
    neighborhoods: [
      "Downtown Lee's Summit", "Lakewood", "Raintree Lake",
      "Summit Square", "Winterset", "Greenbriar", "Stoney Creek",
      "Stonewater", "Park Place",
    ],
    faqs: [
      {
        q: "Do you buy homes in the Lakewood / Raintree Lake areas?",
        a: "Yes. Lake-community properties have lake-rights paperwork and HOA dues that we account for at closing. We work with the local title companies that handle the lake-community quirks. Higher value, closer-to-retail offers — but yes, we buy.",
      },
      {
        q: "How do Cass County properties differ from Jackson County?",
        a: "The southern parts of Lee's Summit are in Cass County (64083, parts of 64082). Closing process is essentially identical, just different recorder's office. We've closed Cass County deals as fast as the Jackson County ones.",
      },
      {
        q: "What about new construction or recently-built homes?",
        a: "We buy them. Often newer-build sellers are moving for jobs and want a fast, certain sale rather than waiting 60 days on a retail buyer. Our offer reflects current condition and recent comps; for a near-retail home, our offer is usually 80-90% of retail, with the seller saving 6%+ in commissions and avoiding 60 days of showings.",
      },
      {
        q: "Do you handle relocation timelines?",
        a: "Yes. Cerner / Oracle and other corporate moves often have 30-60 day windows. We can match whatever timeline you need — close in 14 days if the new job starts soon, or 60 days if you want to time the move.",
      },
    ],
  },
  {
    slug: "blue-springs-mo",
    name: "Blue Springs",
    state: "MO",
    county: "Jackson County",
    metaTitle: "We Buy Houses in Blue Springs, MO | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Blue Springs cash home buyers. We buy houses in any condition across Blue Springs and Lake Lotawana. Fair offers in 24 hours, close in 7 days. No fees, no commissions, no repairs.",
    intro:
      "Blue Springs sits east of Lee's Summit along I-70 and has a mix of established neighborhoods around Adams Pointe Golf Club, lake-community homes near Lake Lotawana, and newer subdivisions south of US-40. We buy across the entire Blue Springs footprint — both 64014 and 64015 — from older ranches that need full renovation to lake homes with deferred dock maintenance. Common Blue Springs sellers we work with: divorcing couples wanting a clean break, families relocating for the school district swap (Blue Springs schools are highly rated, which keeps demand strong), and inherited-home heirs from out of state. We've closed Blue Springs deals in 7-10 days when needed.",
    marketContext:
      "Blue Springs trades roughly at the Jackson County median, with lake-community properties (Lake Lotawana technically lies just outside the city limits but most owners associate with Blue Springs) commanding premiums. The school district reputation and retail growth near Adams Pointe support stable retail prices, which means our offers in Blue Springs are often slightly more competitive than further east in Grain Valley or Oak Grove. We make offers in any condition and any price band.",
    zips: ["64014", "64015"],
    neighborhoods: [
      "Adams Pointe", "Lake Lotawana", "Stillwater", "Stoney Pointe",
      "Burr Oak", "Coachlight", "Magnolia",
    ],
    faqs: [
      {
        q: "Do you buy at Lake Lotawana?",
        a: "Yes. Lake-community closings have additional paperwork (lake-rights documentation, HOA dues, dock easements) that we handle through the local title company. Lake homes are typically higher value and our offers reflect that.",
      },
      {
        q: "What if my Blue Springs house is in great shape?",
        a: "We still buy. Many Blue Springs sellers come to us not because the house is distressed but because they want a private, fast, certain sale. For near-retail homes, our offer is typically 80-90% of retail, but the seller skips 6% in commissions, 30-60 days of showings, and contingency-driven buyers who fall through. Net-net, the math sometimes favors selling to us even for clean houses.",
      },
      {
        q: "How fast can you close in Blue Springs?",
        a: "7-14 days from accepted offer is typical, depending on title clearance. Blue Springs / Jackson County title work moves smoothly through the local title officers we use. If you need faster, tell us when you submit the address and we'll prioritize.",
      },
      {
        q: "Do you buy in Grain Valley and Oak Grove too?",
        a: "Yes — we cover the full eastern Jackson County corridor. Grain Valley and Oak Grove are similar profiles to Blue Springs, just smaller markets. Same buying process.",
      },
    ],
  },
  {
    slug: "raytown-mo",
    name: "Raytown",
    state: "MO",
    county: "Jackson County",
    metaTitle: "We Buy Houses in Raytown, MO | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Raytown cash home buyers. We buy older houses, distressed properties, and inherited homes across Raytown. Fair offers in 24 hours, close in 7 days. No repairs, no fees.",
    intro:
      "Raytown is a tight-knit older suburb just southeast of Kansas City, MO with a housing stock that's heavily weighted toward 1950s-1960s ranches and split-levels. We buy across all of Raytown — 64133, 64138 — and we know the local quirks: the older homes often have galvanized plumbing that needs full replacement, original wiring without GFCI, and basements that haven't been waterproofed in decades. None of that scares us. Many Raytown sellers we work with are heirs to family homes that have been in the same family since original construction, or longtime owners who've watched the neighborhood change and want to cash out cleanly. We've also bought several rentals from Raytown landlords who were ready to be done with the management headaches.",
    marketContext:
      "Raytown trades below the Jackson County median, which means our offers are often the most competitive option for sellers compared to listing — Raytown's retail market has slower turnover and many houses sit on the MLS for 60-90+ days before selling. For inherited Raytown houses with deferred maintenance, the math almost always works better with a cash buyer than a traditional listing. We're patient on Raytown closings; if you need 30-60 days to coordinate cleanout, we'll work with that.",
    zips: ["64133", "64138"],
    neighborhoods: [
      "Westridge", "Bluefield", "Maplebrook", "Sterling",
      "Crestwood", "Bristol Park",
    ],
    faqs: [
      {
        q: "Do you buy older Raytown ranches that need full renovation?",
        a: "Yes — those are our most common Raytown buys. Galvanized plumbing, original electrical, basement moisture, dated kitchens — we factor it all into the offer and renovate to modern standards. We've bought dozens of mid-century ranches in 64133 and 64138.",
      },
      {
        q: "Will you buy a Raytown house that's been on the MLS without selling?",
        a: "Often yes. If your Raytown house has been listed for 60-90 days without offers, the issue is usually condition, price, or financing-buyer hesitation — none of which apply to a cash buyer. We make a fresh offer, you cancel the listing, and we close in 7-14 days.",
      },
      {
        q: "What about HOA fees and any historic-district overlays?",
        a: "Most of Raytown is non-HOA. The few HOA pockets are factored into our offer at standard dues. There are no historic-district overlays in Raytown that affect closings; the houses are old but not designated.",
      },
      {
        q: "Can I leave belongings behind?",
        a: "Always. Take what you want, leave the rest. Furniture, appliances, basement boxes, the riding mower — it all stays as part of our renovation. We dispose of it; you don't.",
      },
    ],
  },
  {
    slug: "kansas-city-ks",
    name: "Kansas City",
    state: "KS",
    county: "Wyandotte County",
    metaTitle: "We Buy Houses in Kansas City, KS | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Kansas City, KS cash home buyers. We buy houses across Wyandotte County in any condition. Fair offers in 24 hours, close in 7 days. No fees, no repairs, no commissions.",
    intro:
      "Kansas City, Kansas — Wyandotte County — has a different feel from its Missouri counterpart, and we buy across the whole footprint. From the historic neighborhoods around Strawberry Hill and the older West Bottoms-adjacent blocks in the 66102 area, to the post-war neighborhoods in 66104 and 66106, to the Argentine and Turner districts, we make offers in every part of KCK. Housing stock here is older on average than KCMO, with a lot of 1900-1950 brick and stone construction in the historic core. Many of these houses have served generations of the same family and now need a cash buyer who'll renovate rather than tear down. We've bought a number of inherited homes in 66101 and 66102 and several rentals from KCK landlords who were ready to consolidate their portfolios.",
    marketContext:
      "KCK trades below the regional median, and like Raytown, that means our cash offers are often the most competitive option for distressed properties. The Argentine and Turner areas have specific historic-zoning considerations we factor in. Wyandotte County title work happens at a different recorder's office than Jackson County, MO, but we work with title companies that handle both sides of the state line so closings stay fast. Property taxes in Wyandotte run higher than most of the metro, which we factor into our holding-cost calculation.",
    zips: ["66101", "66102", "66103", "66104", "66105", "66106", "66109", "66111", "66112"],
    neighborhoods: [
      "Strawberry Hill", "Argentine", "Turner", "Rosedale",
      "Armourdale", "Riverview", "Westheight",
    ],
    faqs: [
      {
        q: "Do you handle Kansas-side title work?",
        a: "Yes. Wyandotte and Johnson County title work happens at the appropriate Kansas recorder's office and the title companies we use are licensed in both states. Many of our closings include both KCK and KCMO properties; the cross-border paperwork is routine.",
      },
      {
        q: "Are there special considerations for historic Strawberry Hill houses?",
        a: "Some Strawberry Hill homes are within local historic-district designations that limit exterior modifications. We factor that into our renovation plans (we're not tearing down historic facades; we're restoring them) and the offer reflects accordingly. Sellers don't need to do anything different.",
      },
      {
        q: "What about Wyandotte County tax sales?",
        a: "Wyandotte holds tax sales for delinquent properties and we've bought tax-delinquent houses before they hit the sale. We work with the county to satisfy back taxes at closing as a deduction from gross proceeds. Routine.",
      },
      {
        q: "Do you buy duplexes and small multi-family in KCK?",
        a: "Yes — KCK has a lot of older multi-family stock and we buy regularly. Duplexes, triplexes, and small fourplexes are within our buy box.",
      },
    ],
  },
  {
    slug: "overland-park-ks",
    name: "Overland Park",
    state: "KS",
    county: "Johnson County",
    metaTitle: "We Buy Houses in Overland Park, KS | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Overland Park cash home buyers. We buy houses across Johnson County's largest suburb in any condition. Fair offers in 24 hours, close in 7 days. No fees, no repairs.",
    intro:
      "Overland Park is the largest suburb on the Kansas side of the metro and has the highest median home value in the region. We buy across the full Overland Park footprint — from the older 1950s-60s ranches near Antioch and 75th Street, to the newer luxury subdivisions near 159th Street and Stilwell, to the entertainment-district adjacent properties near Sprint Campus and Town Center. Most Overland Park sellers we work with are not distressed sellers — they're job relocations (Sprint, Garmin, and the rest of the corporate corridor have constant moves), divorces, or downsizing. The houses are typically in better condition than what we buy further east, and our offers reflect that. We close at title companies in Overland Park and Olathe.",
    marketContext:
      "Overland Park trades at a significant premium to the metro median due to school ratings (Blue Valley and Olathe districts), corporate employer concentration, and ongoing residential demand. Houses in 66213, 66223, and 66224 trade highest; the older 66204 and 66206 areas trade closer to metro median. Our offers are typically closer to retail in OP than in the eastern metro because the renovation scope is usually smaller. For a near-retail OP home, expect an offer of 82-90% of ARV.",
    zips: ["66204", "66206", "66207", "66209", "66210", "66212", "66213", "66221", "66223", "66224"],
    neighborhoods: [
      "Town Center", "Leawood-Overland Park line", "Antioch",
      "Stilwell", "Brookwood", "Indian Heights", "Lionsgate",
      "Highlands Ranch", "Mission Farms",
    ],
    faqs: [
      {
        q: "What kind of price should I expect for an OP home in good shape?",
        a: "For a near-retail Overland Park home (no major repairs, current finishes, no functional issues), our offer is typically 82-90% of ARV. The savings vs listing: you avoid 6% commission ($30k+ on a $500k house), avoid 30-60 days of showings, avoid contingency-driven buyer fall-throughs, and have a guaranteed closing date. Whether that math favors us or favors listing depends on your specific timeline and condition.",
      },
      {
        q: "Do you buy in the Blue Valley school district pockets?",
        a: "Yes — Blue Valley district homes are some of our highest-value OP buys. School ratings keep retail demand strong, which keeps our ARV calibrated higher.",
      },
      {
        q: "Can you handle Sprint or Garmin relocation timelines?",
        a: "Yes. Corporate relocation packages often have 30-60 day windows and we match them. We've also done sales where the seller's relocation broker was involved — we coordinate directly with the broker so the seller doesn't have to.",
      },
      {
        q: "What about HOA-heavy subdivisions like Lionsgate or Highlands Ranch?",
        a: "We handle high-HOA-fee properties routinely. The HOA dues, transfer fees, and any active assessments are factored into the offer and reconciled at closing. We work with the HOA management companies for the certificate of compliance documentation.",
      },
    ],
  },
  {
    slug: "olathe-ks",
    name: "Olathe",
    state: "KS",
    county: "Johnson County",
    metaTitle: "We Buy Houses in Olathe, KS | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Olathe cash home buyers. We buy houses across Olathe and the surrounding Johnson County suburbs. Fair offers in 24 hours, close in 7 days. No fees, no repairs, no commissions.",
    intro:
      "Olathe is a fast-growing Johnson County suburb southwest of Overland Park with a mix of established 1980s-90s subdivisions, newer construction along K-7, and pockets of older 1960s ranches near downtown Olathe. We buy across the full Olathe footprint, including the more rural areas near Cedar Creek and Spring Hill that fall within the Olathe school district. Our typical Olathe sellers are corporate relocations (Garmin and other tech employers), young-family relocations between school districts, and owners who've been in their homes 20+ years and are downsizing. We close at title companies in Olathe and Overland Park.",
    marketContext:
      "Olathe trades at a slight discount to Overland Park but a significant premium to the eastern metro. School district matters a lot here — the Olathe Public Schools rating drives the retail premium for in-district homes. Our offers in Olathe are typically 80-88% of ARV for near-retail homes. The newer construction along the K-7 corridor (66061, 66062) trades closest to retail; the older 66061 around downtown Olathe has more variability and our offers vary accordingly.",
    zips: ["66061", "66062", "66063"],
    neighborhoods: [
      "Downtown Olathe", "Cedar Creek", "Stone Canyon",
      "Heatherstone", "Persimmon Hill", "Brookridge", "Indian Springs",
    ],
    faqs: [
      {
        q: "Do you buy newer construction in Olathe?",
        a: "Yes. We buy newer-build homes regularly when sellers are relocating or downsizing. For a near-retail newer build, expect an offer 82-88% of ARV with the seller saving 6%+ in commissions and avoiding 30-60 days of showings.",
      },
      {
        q: "What about properties on the Olathe / Spring Hill or Olathe / Lenexa borders?",
        a: "We handle border properties. The address determines the school district and tax jurisdiction, and we adjust the offer accordingly. We've closed deals on both sides of every Olathe city border.",
      },
      {
        q: "Do you buy rental properties in Olathe?",
        a: "Yes — single-family rentals and small multi-family. We buy with tenants in place; you don't need to evict before selling.",
      },
      {
        q: "How fast can you close on an Olathe house?",
        a: "7-14 days is typical from accepted offer. If you need faster (relocation deadline, etc.), tell us when you submit and we'll prioritize.",
      },
    ],
  },
  {
    slug: "shawnee-ks",
    name: "Shawnee",
    state: "KS",
    county: "Johnson County",
    metaTitle: "We Buy Houses in Shawnee, KS | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Shawnee cash home buyers. We buy houses across Shawnee and the surrounding Johnson County area in any condition. Fair offers in 24 hours, close in 7 days. No fees, no repairs.",
    intro:
      "Shawnee is one of the older Johnson County suburbs with a mix of mid-century homes near downtown Shawnee, established 1980s-90s subdivisions in the central and western sections, and newer construction toward the K-7 corridor. We buy across the full Shawnee footprint — 66203, 66216, 66217, 66218, 66226, 66227 — in any condition. Many Shawnee sellers we work with are longtime owners (20-30+ years in the house) who are downsizing, divorcing, or settling estates. The mid-century housing stock often has dated kitchens and baths but solid bones; the newer construction trades closer to retail. Closings happen at the same Johnson County title companies we use for Overland Park and Olathe.",
    marketContext:
      "Shawnee trades below Overland Park but above most of the eastern metro, with school district reputation (Shawnee Mission and De Soto districts) supporting retail demand. The Shawnee Mission district pockets in 66203 and 66216 trade highest; the De Soto district areas in 66226 and 66227 are similar to Olathe. Our offers in Shawnee are typically 80-88% of ARV for near-retail homes.",
    zips: ["66203", "66216", "66217", "66218", "66226", "66227"],
    neighborhoods: [
      "Downtown Shawnee", "Pinehurst", "Quivira", "Belleview Acres",
      "Westwood Hills (border)", "Sherwood", "Maple Valley",
    ],
    faqs: [
      {
        q: "Do you buy older Shawnee ranches near downtown?",
        a: "Yes. The mid-century homes in 66203 and along Quivira are common buys for us. Original kitchens and baths, dated electrical, sometimes original windows — we renovate to modern standards. These are some of the best-bones houses in the metro.",
      },
      {
        q: "What's the difference between Shawnee Mission and De Soto district homes?",
        a: "Same buying process for us, but the school district reputation affects retail ARV. Shawnee Mission district pockets command higher retail prices, so our offers in those areas are correspondingly higher. We make offers in both districts.",
      },
      {
        q: "Will you buy if the house has had water damage in the basement?",
        a: "Yes. Basement moisture and prior water damage are common in older Shawnee homes, especially after the 2019 floods. We assess the remediation scope during the walkthrough and price the offer accordingly.",
      },
      {
        q: "Do you buy across the Shawnee / Lenexa border?",
        a: "Yes. The border properties have specific addresses that determine jurisdiction; the buying process is identical on both sides.",
      },
    ],
  },
  {
    slug: "lenexa-ks",
    name: "Lenexa",
    state: "KS",
    county: "Johnson County",
    metaTitle: "We Buy Houses in Lenexa, KS | Cash Offers — Heartland Acquisitions",
    metaDescription:
      "Lenexa cash home buyers. We buy houses across Lenexa, KS in any condition. Fair offers in 24 hours, close in 7 days. No fees, no repairs, no commissions.",
    intro:
      "Lenexa sits between Overland Park and Shawnee in central Johnson County, with strong school districts and a steady stream of corporate relocations driving the housing market. We buy across all Lenexa ZIPs — 66215, 66219, 66220, 66227 — including the newer subdivisions near City Center and the older homes near downtown Lenexa. Most Lenexa sellers we work with are relocations, divorces, or downsizings; distressed properties are less common here than in the eastern metro because Lenexa's retail demand is strong. Even so, we've bought houses in every condition Lenexa has to offer, from mid-century ranches near 87th to luxury homes near 159th Street.",
    marketContext:
      "Lenexa trades at Johnson County median to slightly above, with the Lenexa City Center developments and the Falcon Valley / Belmont neighborhoods commanding premiums. Older sections of 66215 trade closer to metro median. Our offers in Lenexa are typically 82-89% of ARV for near-retail homes. The corporate corridor (T-Mobile, Black & Veatch, others) drives steady relocation demand and corresponds to a healthier-than-average MLS, which means our cash offers compete on speed and certainty rather than price for many Lenexa sellers.",
    zips: ["66215", "66219", "66220", "66227"],
    neighborhoods: [
      "Lenexa City Center", "Old Town Lenexa", "Falcon Valley",
      "Belmont", "Quail Ridge", "Ridge Pointe", "Stoll Park",
    ],
    faqs: [
      {
        q: "Do you handle T-Mobile and Black & Veatch relocations?",
        a: "Yes. Corporate relocations often have 30-60 day windows and we match them. We can coordinate directly with relocation brokers if your employer uses one — many do.",
      },
      {
        q: "Will you buy in the newer City Center developments?",
        a: "Yes. Newer-build sellers often come to us when relocating quickly. For near-retail homes our offer is 82-89% of ARV; the seller saves 6% commission and avoids 30-60 days of showings.",
      },
      {
        q: "What about houses with HOA fees and mandatory pool / clubhouse dues?",
        a: "We factor HOA dues into the offer at standard rates and reconcile at closing. Mandatory amenity dues are routine; we work with the HOA management for the certificate of compliance.",
      },
      {
        q: "How fast can you close in Lenexa?",
        a: "7-14 days from accepted offer is standard. Johnson County title work moves smoothly through the local title companies we use. If your relocation needs faster, tell us upfront and we'll prioritize.",
      },
    ],
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug)
}

export const CITY_SLUGS = CITIES.map((c) => c.slug)
