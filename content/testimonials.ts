export interface Testimonial {
  id: string
  quote: string
  authorName: string
  authorCity: string
  situation: "divorce" | "foreclosure" | "inherited" | "landlord" | "tax-liens" | "general"
  /** Path under /public for the author's photo. Placeholder until Chase supplies real photos. */
  photoSrc: string
  /** 1-5 stars */
  stars: 1 | 2 | 3 | 4 | 5
  /** Set true once Chase has confirmed this is a real seller and supplied a real photo. */
  verified: boolean
}

/**
 * Placeholder testimonials. Each one is plausibly worded for the KC market;
 * `verified: false` flags them as demo content for easy swap later.
 */
export const testimonials: Testimonial[] = [
  {
    id: "sarah-m-independence",
    quote: "Sold my house in Independence in just 6 days. Best experience ever — they handled everything.",
    authorName: "Sarah M.",
    authorCity: "Independence, MO",
    situation: "general",
    photoSrc: "/brand/testimonial-placeholder-1.jpg",
    stars: 5,
    verified: false,
  },
  {
    id: "david-r-lees-summit",
    quote: "No repairs, no showings, no hassle. Cash offer in 24 hours like they promised.",
    authorName: "David R.",
    authorCity: "Lee's Summit, MO",
    situation: "general",
    photoSrc: "/brand/testimonial-placeholder-2.jpg",
    stars: 5,
    verified: false,
  },
  {
    id: "tina-w-overland-park",
    quote: "Inherited my mom's house and didn't know what to do. Chase made the whole process simple.",
    authorName: "Tina W.",
    authorCity: "Overland Park, KS",
    situation: "inherited",
    photoSrc: "/brand/testimonial-placeholder-3.jpg",
    stars: 5,
    verified: false,
  },
  {
    id: "marcus-b-blue-springs",
    quote: "Facing foreclosure and out of options. Heartland closed in 9 days — saved my credit.",
    authorName: "Marcus B.",
    authorCity: "Blue Springs, MO",
    situation: "foreclosure",
    photoSrc: "/brand/testimonial-placeholder-4.jpg",
    stars: 5,
    verified: false,
  },
  {
    id: "linda-h-olathe",
    quote: "Tired of being a landlord. Sold my rental as-is, tenants and all. Smoothest sale I've ever done.",
    authorName: "Linda H.",
    authorCity: "Olathe, KS",
    situation: "landlord",
    photoSrc: "/brand/testimonial-placeholder-5.jpg",
    stars: 5,
    verified: false,
  },
]
