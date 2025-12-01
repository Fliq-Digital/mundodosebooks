export interface ProductSections {
  hero: {
    headline: string
    subheadline: string
    tagline: string
    cta: string
    videoTitle: string
    videoSubtitle: string
  }
  whatYouWillLearn: {
    title: string
    subtitle: string
    sideImage: string
    highlights: string[]
  }
  targetAudience: {
    title: string
    subtitle: string
    sideImage: string
    points: string[]
  }
  gallery: {
    title: string
    subtitle: string
    images: string[]
  }
  socialProof: {
    title: string
    testimonials: Array<{
      name: string
      role: string
      text: string
      image: string
    }>
  }
  offer: {
    title: string
    description: string
    finalCta: string
    guarantee: string
  }
  problem?: {
    title: string
    points: string[]
  }
  solution?: {
    title: string
    subtitle: string
    benefits: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  faq?: {
    title: string
    questions: Array<{
      q: string
      a: string
    }>
  }
  instructor?: {
    title: string
    name: string
    bio: string
  }
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  monthlyIncome: number
  image: string
  heroImage: string
  instructorImage?: string
  videoUrl?: string
  seo: {
    title: string
    description: string
    keywords: string
  }
  sections: ProductSections
}

