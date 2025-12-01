"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { Product } from "@/types/product"

interface BasicInfoTabProps {
  product: Product
  onChange: (field: string, value: string | number) => void
}

export default function BasicInfoTab({ product, onChange }: BasicInfoTabProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Informações Básicas do Produto</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug (URL do Produto)</label>
            <Input
              value={product.id}
              onChange={(e) => onChange("id", e.target.value)}
              placeholder="ex: panetones-recheados"
              className="font-mono"
            />
            <p className="text-xs text-gray-500 mt-2">URL será: /{product.id}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Produto</label>
            <Input
              value={product.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="Ex: Panetones Recheados"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
            <textarea
              value={product.description}
              onChange={(e) => onChange("description", e.target.value)}
              placeholder="Descrição breve do produto"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preço (R$)</label>
            <Input
              type="number"
              value={product.price}
              onChange={(e) => onChange("price", Number.parseFloat(e.target.value))}
              placeholder="297"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">URL da Imagem do Produto</label>
            <Input
              value={product.image}
              onChange={(e) => onChange("image", e.target.value)}
              placeholder="/placeholder.svg"
            />
            <div className="mt-4 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Prévia
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">URL da Imagem Hero</label>
            <Input
              value={product.heroImage}
              onChange={(e) => onChange("heroImage", e.target.value)}
              placeholder="/placeholder.svg"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
