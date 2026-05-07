import { HomepageHero } from "@/components/hero/homepage-hero"
import { Marquee } from "@/components/marquee"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { ReviewsEmpty } from "@/components/sections/reviews-empty"
import { Faq } from "@/components/sections/faq"
import { CtaStrip } from "@/components/sections/cta-strip"

export default function Home() {
  return (
    <>
      <HomepageHero />
      <Marquee />
      <Process />
      <WhyUs />
      <ReviewsEmpty />
      <Faq />
      <CtaStrip />
    </>
  )
}
