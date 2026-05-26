import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3B Indústria Fitness',
  description: 'Equipamentos profissionais para academias, racks, rigs e estruturas metálicas de alto desempenho.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
