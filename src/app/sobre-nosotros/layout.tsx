import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Bienestar y Cuidado en el Hogar | Historia Familiar',
  description: 'Conoce nuestra historia familiar brindando acompañamiento no médico. Empresa familiar dedicada al bienestar de adultos mayores con valores de amor y respeto.',
}

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}