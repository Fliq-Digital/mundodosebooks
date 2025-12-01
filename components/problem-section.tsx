"use client"

interface Product {
  sections: any
}

export default function ProblemSection({ product }: { product: Product }) {
  const { title, points } = product.sections.problem

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point: string, idx: number) => (
            <div key={idx} className="flex gap-4 p-6 bg-red-50 rounded-lg border border-red-100">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                ✕
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
