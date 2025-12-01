"use client"

import type { Product } from "@/types/product"

export default function GallerySection({ product }: { product: Product }) {
  const { subtitle, images } = product.sections.gallery

  return (
    <>
      <section className="py-20 bg-amber-900">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-pink-300 font-bold text-sm mb-2">Veja só as Delícias</p>
            <h2 className="text-4xl font-bold text-white mb-4">
              que você vai aprender com o Curso <span className="text-pink-300">{subtitle}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image: string, idx: number) => (
              <div
                key={idx}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Panetone ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <svg className="w-full h-16 text-white dark:text-gray-900" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" fill="currentColor" />
      </svg>
    </>
  )
}
