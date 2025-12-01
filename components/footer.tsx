"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sobre</h3>
            <p className="text-sm leading-relaxed">
              Guias completos e práticos para transformar suas ideias em negócios lucrativos. 
              Aprenda com materiais desenvolvidos por especialistas.
            </p>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suporte</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a 
                  href="https://wa.me/5511918610449" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors cursor-pointer"
                >
                  (11) 91861-0449
                </a>
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Atendimento via WhatsApp
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/panetones-recheados" 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  E-book Panetones Recheados
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Página Inicial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

