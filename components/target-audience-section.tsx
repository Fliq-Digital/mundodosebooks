"use client"

interface Product {
  sections: any
}

export default function TargetAudienceSection({ product }: { product: Product }) {
  const { title, subtitle, sideImage, points } = product.sections.targetAudience

  return (
    <>
      <section className="py-20 bg-amber-900">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="hidden lg:block order-2 lg:order-1">
              <img
                src={sideImage || "/placeholder.svg"}
                alt="Instrutor"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-pink-300 font-bold text-sm mb-2">Para quem é o Curso</p>
              <h2 className="text-4xl font-bold text-white mb-10">
                {subtitle}
                <span className="text-pink-300">:</span>
              </h2>

              <div className="space-y-4">
                {points.map((point: string, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center">
                        <span className="text-amber-900 text-xs font-bold">♥</span>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
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
