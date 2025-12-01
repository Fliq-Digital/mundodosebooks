"use client"

interface Product {
  price: number
  sections: any
}

export default function OfferSection({ product }: { product: Product }) {
  const { title, description, finalCta, guarantee } = product.sections.offer
  const originalPrice = 97.00
  const currentPrice = product.price
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100)

  return (
    <section className="py-20 bg-gradient-to-r from-red-950 to-red-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Urgency badge */}
        <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
          ⚡ OFERTA POR TEMPO LIMITADO ⚡
        </div>

        <h2 className="text-5xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">{description}</p>

        {/* Price box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border-2 border-white/20 max-w-md mx-auto">
          <p className="text-gray-300 text-sm mb-2">De:</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl text-gray-400 line-through">R$ {originalPrice.toFixed(2).replace('.', ',')}</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discount}% OFF
            </span>
          </div>
          <p className="text-gray-300 text-sm mb-1">Por apenas:</p>
          <div className="text-6xl font-bold text-green-400 mb-2">
            R$ {currentPrice.toFixed(2).replace('.', ',')}
          </div>
          <p className="text-gray-300 text-xs">ou em até 5x no cartão!</p>
        </div>

        {/* CTA Button */}
        <a
          href="https://pay.kirvano.com/ead7c126-2f74-42d6-a9aa-38eb9d7c0cdc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 mb-6 w-full max-w-md mx-auto cursor-pointer"
        >
          {finalCta}
        </a>

        {/* Guarantee */}
        <div className="bg-white/5 rounded-lg p-6 max-w-md mx-auto mb-6">
          <p className="text-white font-semibold mb-3 flex items-center justify-center gap-2">
            <span className="text-2xl">✓</span>
            <span>{guarantee}</span>
          </p>
        </div>

        {/* Additional benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-white/90">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">📥</span>
            <span className="text-sm">Acesso Imediato</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">📱</span>
            <span className="text-sm">Disponível 24/7</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🔒</span>
            <span className="text-sm">Compra 100% Segura</span>
          </div>
        </div>
      </div>
    </section>
  )
}
