import { HomepageHero } from "@/components/hero/homepage-hero"
import { Marquee } from "@/components/marquee"
import { OfferSection } from "@/components/offer-section"
import { TrustBand } from "@/components/trust/trust-band"

export default function Home() {
  return (
    <>
      <HomepageHero />
      <Marquee />
      <OfferSection />
      <TrustBand />
    </>
  )
}
