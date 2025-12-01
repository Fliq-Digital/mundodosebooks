"use client"

interface Product {
  sections: any
  instructorImage: string
}

export default function InstructorSection({ product }: { product: Product }) {
  const { instructor } = product.sections

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <p className="text-pink-600 font-bold text-sm mb-2">Quem é a instrutora</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {instructor.name}
                <span className="text-pink-600">?</span>
              </h2>

              <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                {instructor.bio.split("\n\n").map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden lg:block">
              <img
                src={product.instructorImage || "/placeholder.svg"}
                alt={instructor.name}
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
