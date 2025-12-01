"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { Product } from "@/types/product"

interface HeroSectionTabProps {
  product: Product
  onChange: (path: string[], value: string) => void
}

export default function HeroSectionTab({ product, onChange }: HeroSectionTabProps) {
  const hero = product.sections.hero

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Seção Hero (Topo da Página)</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Headline Principal</label>
            <textarea
              value={hero.headline}
              onChange={(e) => onChange(["sections", "hero", "headline"], e.target.value)}
              placeholder="Seu título principal aqui"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
            <textarea
              value={hero.subheadline}
              onChange={(e) => onChange(["sections", "hero", "subheadline"], e.target.value)}
              placeholder="Descrição complementar"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Texto do Botão CTA</label>
            <Input
              value={hero.cta}
              onChange={(e) => onChange(["sections", "hero", "cta"], e.target.value)}
              placeholder="Comprar Agora - R$ 297"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
            <Input
              value={hero.tagline}
              onChange={(e) => onChange(["sections", "hero", "tagline"], e.target.value)}
              placeholder="Guia prático para lucrar no Natal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Título do Vídeo</label>
            <Input
              value={hero.videoTitle}
              onChange={(e) => onChange(["sections", "hero", "videoTitle"], e.target.value)}
              placeholder="Veja como funciona o e-book"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo do Vídeo</label>
            <Input
              value={hero.videoSubtitle}
              onChange={(e) => onChange(["sections", "hero", "videoSubtitle"], e.target.value)}
              placeholder="Descubra, em poucos minutos..."
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
