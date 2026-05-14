import { HomepageHero } from "@/components/hero/homepage-hero"
import { Marquee } from "@/components/marquee"
import { WhatWeBuy } from "@/components/sections/what-we-buy"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { Reviews } from "@/components/sections/reviews"
import { Faq } from "@/components/sections/faq"
import { CoverageGrid } from "@/components/sections/coverage-grid"
import { CtaStrip } from "@/components/sections/cta-strip"

export default function Home() {
  return (
    <>
      <HomepageHero />
      <Marquee />
      <WhatWeBuy />
      <Process />
      <WhyUs />
      <Reviews />
      <CoverageGrid />
      <Faq />
      <CtaStrip />
    </>
  )
}
