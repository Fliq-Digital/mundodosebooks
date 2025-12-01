"use client"

import type { Product } from "@/types/product"

export default function WhatYouWillLearnSection({ product }: { product: Product }) {
  const { subtitle, sideImage, highlights } = product.sections.whatYouWillLearn

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div>
              <p className="text-pink-600 font-bold text-sm mb-2">Veja o que você vai aprender com o e-book</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-10">
                {subtitle}
                <span className="text-pink-600">:</span>
              </h2>

              <div className="space-y-4">
                {highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-pink-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">♥</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden lg:block">
              <img
                src={sideImage || "/placeholder.svg"}
                alt="Panetones"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <svg className="w-full h-16 text-gray-100 dark:text-gray-900" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" fill="currentColor" />
      </svg>
    </>
  )
}
