import { notFound } from "next/navigation"
import type { Metadata } from "next"
import products from "@/data/products.json"
import LandingPageContent from "@/components/landing-page-content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const slug = params.slug
  const product = products[slug as keyof typeof products]

  if (!product) {
    return { title: "Página Não Encontrada" }
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [{ url: product.heroImage }],
      type: "website",
    },
  }
}

export default async function LandingPage(props: PageProps) {
  const params = await props.params
  const slug = params.slug
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return <LandingPageContent product={product} />
}
