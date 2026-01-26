import type { Metadata } from 'next'
import { 
  HeartIcon,
  ClockIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Nuestro Equipo - Próximamente - Bienestar y Cuidado en el Hogar',
  description: 'La sección de nuestro equipo estará disponible próximamente. Mientras tanto, conoce más sobre nuestros servicios de acompañamiento no médico.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50/20">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30 rounded-full text-white/90 text-sm mb-6">
              <ClockIcon className="w-4 h-4 mr-2" />
              Próximamente
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Nuestro Equipo{' '}
              <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                Próximamente
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Estamos preparando una presentación especial de nuestro equipo de acompañantes profesionales. 
              Esta sección estará disponible muy pronto.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-primary-600 text-lg transition-all duration-300 group"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Regresar al Inicio
              </a>
              
              <a
                href="/contacto"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white/80 backdrop-blur-lg border border-white/50 shadow-2xl p-8 lg:p-12 rounded-3xl">
              <HeartIcon className="w-16 h-16 mx-auto mb-8 text-primary-600" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
                Mientras Tanto...
              </h2>
              
              <p className="text-xl text-trust-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Te invitamos a conocer más sobre nuestros servicios de acompañamiento no médico 
                y cómo podemos ayudar a tu familia.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/servicios"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
                >
                  Ver Nuestros Servicios
                </a>
                
                <a
                  href="/sobre-nosotros"
                  className="inline-flex items-center justify-center bg-trust-100 hover:bg-primary-100 border border-trust-200 px-8 py-4 rounded-2xl font-semibold text-trust-700 text-lg transition-all duration-300"
                >
                  Conoce Nuestra Historia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* 
===========================================
PÁGINA DE EQUIPO ORIGINAL - TEMPORALMENTE OCULTA
===========================================
Para reactivar más adelante, reemplazar todo el contenido de arriba por el código original.
El código original incluye:
- Leadership team con perfiles detallados
- Caregivers profiles con especialidades
- Stats del equipo
- Proceso de selección y capacitación
- Beneficios para cuidadores
- CTA para unirse al equipo

Para reactivar: contactar al desarrollador para restaurar la página completa de equipo.
*/