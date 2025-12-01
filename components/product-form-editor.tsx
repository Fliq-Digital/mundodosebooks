"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicInfoTab from "./basic-info-tab"
import SEOTab from "./seo-tab"
import HeroSectionTab from "./hero-section-tab"
import SectionsTab from "./sections-tab"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  heroImage: string
  seo: any
  sections: any
}

interface ProductFormEditorProps {
  product: Product
  onSave: () => Promise<void>
  saving: boolean
  isNew?: boolean
}

export default function ProductFormEditor({
  product: initialProduct,
  onSave,
  saving,
  isNew = false,
}: ProductFormEditorProps) {
  const [product, setProduct] = useState(initialProduct)

  const handleChange = (field: string, value: any) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedChange = (path: string[], value: any) => {
    setProduct((prev) => {
      const updated = { ...prev }
      let current = updated
      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] }
        current = current[path[i]]
      }
      current[path[path.length - 1]] = value
      return updated
    })
  }

  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
        <TabsTrigger value="seo">SEO</TabsTrigger>
        <TabsTrigger value="hero">Hero Section</TabsTrigger>
        <TabsTrigger value="sections">Seções</TabsTrigger>
      </TabsList>

      <TabsContent value="basic">
        <BasicInfoTab product={product} onChange={handleChange} />
      </TabsContent>

      <TabsContent value="seo">
        <SEOTab product={product} onChange={handleNestedChange} />
      </TabsContent>

      <TabsContent value="hero">
        <HeroSectionTab product={product} onChange={handleNestedChange} />
      </TabsContent>

      <TabsContent value="sections">
        <SectionsTab product={product} onChange={handleNestedChange} />
      </TabsContent>

      <div className="flex gap-4 mt-8 sticky bottom-0 bg-white p-4 border-t">
        <Button variant="outline">Cancelar</Button>
        <Button className="bg-amber-600 hover:bg-amber-700 ml-auto" onClick={onSave} disabled={saving}>
          {saving ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </div>
    </Tabs>
  )
}
