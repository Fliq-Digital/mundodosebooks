"use client"

import type { Product } from "@/types/product"

export default function HeroSection({ product }: { product: Product }) {
  const { hero } = product.sections

  return (
    <>
      <section className="min-h-screen bg-black text-white pt-20 pb-16 relative overflow-hidden">
        {/* Background image com overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/panetone-trufado-gourmet-chocolate-premium.jpg')",
          }}
        ></div>

        <div className="relative z-10 container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            {/* Tagline */}
            <p className="inline-block bg-pink-600/20 text-pink-300 px-6 py-2 rounded-full text-sm font-semibold">
              {hero.tagline}
            </p>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl font-bold text-white">{hero.headline}</h1>

            {/* Price highlight */}
            <p className="text-2xl text-white">
              fature até{" "}
              <span className="text-green-500 font-bold">R$ {product.monthlyIncome.toLocaleString("pt-BR")}</span>{" "}
              {hero.subheadline}
            </p>
          </div>

          {/* Video Player Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg overflow-hidden shadow-2xl relative aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                poster="/capavideo.png"
              >
                <source src="/Criação_de_Vídeo_de_Panetones_Recheados.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>

            {/* Subtitle do vídeo */}
            <div className="text-center mt-6 space-y-2">
              <p className="text-xl font-semibold text-white">{hero.videoTitle}</p>
              <p className="text-sm text-gray-300">{hero.videoSubtitle}</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://pay.kirvano.com/ead7c126-2f74-42d6-a9aa-38eb9d7c0cdc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-12 py-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {hero.cta}
            </a>

            {/* Payment methods */}
            <div className="flex items-center justify-center gap-3 text-xs text-gray-300">
              <span>💳</span>
              <span>Visa</span>
              <span>•</span>
              <span>💳 Mastercard</span>
              <span>•</span>
              <span>🏦 Pix</span>
              <span>•</span>
              <span>🔒 Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-white h-0.5"></div>
      <svg className="w-full h-16 text-white" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" fill="currentColor" />
      </svg>
    </>
  )
}
