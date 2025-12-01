"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Product {
  seo: {
    title: string
    description: string
    keywords: string
  }
}

interface SEOTabProps {
  product: Product
  onChange: (path: string[], value: any) => void
}

export default function SEOTab({ product, onChange }: SEOTabProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Otimização para SEO</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Título (Meta Tag)</label>
            <Input
              value={product.seo.title}
              onChange={(e) => onChange(["seo", "title"], e.target.value)}
              placeholder="Título que aparece no Google"
              maxLength={60}
            />
            <p className="text-xs text-gray-500 mt-2">Máximo 60 caracteres (atual: {product.seo.title.length})</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descrição (Meta Description)</label>
            <textarea
              value={product.seo.description}
              onChange={(e) => onChange(["seo", "description"], e.target.value)}
              placeholder="Descrição que aparece nos resultados de busca"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={4}
              maxLength={160}
            />
            <p className="text-xs text-gray-500 mt-2">
              Máximo 160 caracteres (atual: {product.seo.description.length})
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Palavras-chave</label>
            <Input
              value={product.seo.keywords}
              onChange={(e) => onChange(["seo", "keywords"], e.target.value)}
              placeholder="palavra1, palavra2, palavra3"
            />
            <p className="text-xs text-gray-500 mt-2">Separe por vírgulas</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
