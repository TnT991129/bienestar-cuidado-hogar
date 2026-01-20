import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Bienestar y Cuidado en el Hogar - Professional Home Care for Seniors | Cuidado Domiciliario Profesional',
    template: '%s | Bienestar y Cuidado en el Hogar'
  },
  description: 'Professional home care services for seniors. Personalized attention, trained caregivers and human treatment 24 hours. | Servicios profesionales de cuidado domiciliario para adultos mayores. Atención personalizada, cuidadores capacitados y trato humano las 24 horas.',
  keywords: [
    'cuidado adultos mayores',
    'atención domiciliaria',
    'cuidadores profesionales',
    'servicios geriátricos',
    'acompañamiento ancianos',
    'cuidado en casa'
  ],
  authors: [{ name: 'Cuidado Senior' }],
  creator: 'Cuidado Senior',
  publisher: 'Cuidado Senior',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cuidadosenior.com'),
  openGraph: {
    title: 'Cuidado Senior - Atención Domiciliaria Profesional',
    description: 'Servicios profesionales de cuidado domiciliario para adultos mayores con cuidadores capacitados y trato humano.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://cuidadosenior.com',
    siteName: 'Cuidado Senior',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuidado Senior - Atención Domiciliaria Profesional',
    description: 'Servicios profesionales de cuidado domiciliario para adultos mayores con cuidadores capacitados y trato humano.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
