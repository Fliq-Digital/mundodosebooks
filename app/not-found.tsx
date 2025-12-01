import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-amber-600 text-white font-bold px-8 py-6 text-lg"
            >
              Voltar para a página inicial
            </Button>
          </Link>
          <Link href="/panetones-recheados">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 font-bold px-8 py-6 text-lg"
            >
              Ver E-book de Panetones
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>Se você acredita que isso é um erro, entre em contato conosco.</p>
        </div>
      </div>
    </div>
  )
}

