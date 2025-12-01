"use client"

import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Product {
  sections: any
}

interface SectionsTabProps {
  product: Product
  onChange: (path: string[], value: any) => void
}

export default function SectionsTab({ product, onChange }: SectionsTabProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Gerenciar Seções</h3>

        <p className="text-gray-600 mb-8">
          Para editar as seções em detalhes (Problema, Solução, Módulos, Depoimentos, etc), você pode editar diretamente
          o arquivo JSON ou expandir a funcionalidade do painel.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="problema">
            <AccordionTrigger>Seção Problema</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(product.sections.problem, null, 2)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="solucao">
            <AccordionTrigger>Seção Solução</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(product.sections.solution, null, 2)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="aprenderá">
            <AccordionTrigger>O Que Você Vai Aprender</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(product.sections.whatYouWillLearn, null, 2)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="prova-social">
            <AccordionTrigger>Prova Social (Depoimentos)</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(product.sections.socialProof, null, 2)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq">
            <AccordionTrigger>FAQ</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(product.sections.faq, null, 2)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="oferta">
            <AccordionTrigger>Seção de Oferta Final</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(product.sections.offer, null, 2)}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            💡 <strong>Dica:</strong> Para editar seções mais complexas, recomendamos editar o arquivo JSON diretamente
            em <code className="bg-blue-100 px-2 py-1 rounded">/data/products.json</code> ou use a API de edição de JSON
            que você pode expandir.
          </p>
        </div>
      </Card>
    </div>
  )
}
