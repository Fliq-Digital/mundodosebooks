import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "E-books Premium | Negócios Digitais",
  description: "Guias completos para transformar suas ideias em negócios lucrativos",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
