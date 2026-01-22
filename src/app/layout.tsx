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
    default: 'Bienestar y Cuidado en el Hogar - Companionship & Non-Medical Support | Acompañamiento y Apoyo No Médico',
    template: '%s | Bienestar y Cuidado en el Hogar'
  },
  description: 'Non-medical companionship and support services for seniors at home. Personalized attention, trained companions and caring treatment 24 hours. | Servicios de acompañamiento y apoyo no médico para adultos mayores en el hogar. Atención personalizada, acompañantes capacitados y trato humano las 24 horas.',
  keywords: [
    'acompañamiento adultos mayores',
    'apoyo no médico',
    'acompañantes domiciliarios',
    'servicios de compañía',
    'cuidado no médico',
    'apoyo en casa',
    'companionship services',
    'non medical support'
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
    title: 'Bienestar y Cuidado - Acompañamiento No Médico en el Hogar',
    description: 'Servicios de acompañamiento y apoyo no médico para adultos mayores con personal capacitado y trato humano.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://cuidadosenior.com',
    siteName: 'Cuidado Senior',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bienestar y Cuidado - Acompañamiento No Médico en el Hogar',
    description: 'Servicios de acompañamiento y apoyo no médico para adultos mayores con personal capacitado y trato humano.',
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
