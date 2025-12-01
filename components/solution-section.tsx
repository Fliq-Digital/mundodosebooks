"use client"

import type { Product } from "@/types/product"

interface Benefit {
  title: string
  description: string
  icon: string
}

export default function SolutionSection({ product }: { product: Product }) {
  const solution = product.sections.solution

  if (!solution) {
    return null
  }

  const { title, subtitle, benefits } = solution

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-950 mb-4">{title}</h2>
          <p className="text-xl text-amber-900 opacity-90">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit: Benefit, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-amber-100"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
