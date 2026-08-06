import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Fraunces } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'Yochi Snack — Cemilan Sehat dari Sayuran, Renyah di Setiap Gigitan',
  description:
    'Yochi Snack menghadirkan stik bayam & stik wortel yang renyah, gurih, dan sehat. Dibuat higienis dari bahan berkualitas. Pesan mudah lewat WhatsApp.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#2E7D32',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
