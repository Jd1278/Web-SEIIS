import type { Metadata } from 'next'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { site } from '@/config/site'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${site.name} — ${site.longName}`,
  description: site.role,
  openGraph: {
    title: `${site.name} — ${site.longName}`,
    description: site.role,
    siteName: `${site.name} — ${site.longName}`,
    locale: site.locale,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-gray-200">
          <nav aria-label="Principal" className="mx-auto flex max-w-5xl flex-wrap gap-4 px-6 py-4 text-sm">
            <Link href="/" className="font-bold text-purple-700">SEIIS</Link>
            <Link href="/lineas" className="text-gray-700 hover:text-purple-700">Líneas</Link>
            <Link href="/proyectos" className="text-gray-700 hover:text-purple-700">Proyectos</Link>
            <Link href="/integrantes" className="text-gray-700 hover:text-purple-700">Integrantes</Link>
            <Link href="/noticias" className="text-gray-700 hover:text-purple-700">Noticias</Link>
            <Link href="/unete" className="text-gray-700 hover:text-purple-700">Únete</Link>
            <Link href="/contacto" className="text-gray-700 hover:text-purple-700">Contacto</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}