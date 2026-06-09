import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#020617',
}

const TITLE = 'EatCorp — Software de gestión para restaurantes en Chile'
const DESCRIPTION =
  'Compras, inventario, propinas, redes con IA y más en una sola plataforma para restoranes en Chile y LatAm. Déjanos tus datos y te contactamos en menos de 24 horas hábiles.'

export const metadata: Metadata = {
  metadataBase: new URL('https://eatcorp.cl'),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'software restorán Chile',
    'gestión restaurante LatAm',
    'compras restaurante',
    'tareas cocina',
    'redes sociales restaurante IA',
    'mantención restaurante',
    'reservas restaurante',
    'plataforma restaurante',
  ],
  authors: [{ name: 'EatCorp' }],
  creator: 'EatCorp',
  category: 'business',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://eatcorp.cl',
    siteName: 'EatCorp',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EatCorp' }],
    type: 'website',
    locale: 'es_419',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-500 focus:text-brand-950 focus:font-semibold"
        >
          Saltar al contenido
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
