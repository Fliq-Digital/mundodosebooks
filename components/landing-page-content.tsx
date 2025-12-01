"use client"
import HeroSection from "./hero-section"
import WhatYouWillLearnSection from "./what-you-will-learn-section"
import TargetAudienceSection from "./target-audience-section"
import GallerySection from "./gallery-section"
import SocialProofSection from "./social-proof-section"
import OfferSection from "./offer-section"

interface Product {
  id: string
  name: string
  price: number
  sections: any
}

interface LandingPageContentProps {
  product: Product
}

export default function LandingPageContent({ product }: LandingPageContentProps) {
  return (
    <main className="w-full">
      <HeroSection product={product} />
      <WhatYouWillLearnSection product={product} />
      <TargetAudienceSection product={product} />
      <GallerySection product={product} />
      <SocialProofSection product={product} />
      <OfferSection product={product} />
    </main>
  )
}
