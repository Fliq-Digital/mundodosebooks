"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  q: string
  a: string
}

interface Product {
  sections: any
}

export default function FAQSection({ product }: { product: Product }) {
  const { title, questions } = product.sections.faq
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{title}</h2>

        <div className="space-y-4">
          {questions.map((faq: FAQ, idx: number) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors cursor-pointer"
              >
                <p className="font-semibold text-gray-900 text-left">{faq.q}</p>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                    openFAQ === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFAQ === idx && (
                <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
