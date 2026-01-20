import type { Metadata } from 'next'
import ServicesSection from '@/components/home/ServicesSection'
import { 
  HeartIcon,
  HomeIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Servicios de Cuidado Domiciliario - Bienestar y Cuidado en el Hogar',
  description: 'Servicios completos de cuidado domiciliario no médico para adultos mayores: cuidado personal, compañía, tareas domésticas, transporte y más. Planes personalizados 24/7.',
}

const mainServices = [
  {
    id: 1,
    name: 'Cuidado Personal e Higiene',
    description: 'Asistencia profesional con todas las actividades de cuidado personal diario.',
    icon: HeartIcon,
    features: [
      'Aseo e higiene personal completa',
      'Ayuda con vestimenta y arreglo personal',
      'Asistencia para comer y beber',
      'Apoyo para caminar y movilidad',
      'Cuidado de la piel y prevención de úlceras',
      'Cambio de pañales si es necesario',
      'Cuidado del cabello y uñas'
    ],
    pricing: 'Desde $25/hora',
    availability: '24/7 disponible',
    popular: false
  },
  {
    id: 2,
    name: 'Compañía y Apoyo Emocional',
    description: 'Conversación, actividades recreativas y apoyo emocional para combatir la soledad.',
    icon: ChatBubbleLeftRightIcon,
    features: [
      'Conversación y compañía diaria',
      'Actividades recreativas y juegos',
      'Lectura de libros y periódicos',
      'Apoyo emocional y escucha activa',
      'Estimulación cognitiva',
      'Acompañamiento en hobbies',
      'Celebración de fechas especiales'
    ],
    pricing: 'Desde $20/hora',
    availability: 'Horarios flexibles',
    popular: true
  },
  {
    id: 3,
    name: 'Tareas Domésticas Ligeras',
    description: 'Mantenimiento básico del hogar para crear un ambiente limpio y seguro.',
    icon: HomeIcon,
    features: [
      'Limpieza ligera de la casa',
      'Preparación de comidas nutritivas',
      'Lavado de ropa y planchado',
      'Organización de espacios',
      'Mantenimiento del orden',
      'Cuidado de plantas',
      'Gestión de correspondencia básica'
    ],
    pricing: 'Desde $18/hora',
    availability: 'Lun-Sáb disponible',
    popular: false
  },
  {
    id: 4,
    name: 'Recordatorios de Medicación',
    description: 'Supervisión y recordatorios para tomar medicamentos según prescripción médica.',
    icon: ClockIcon,
    features: [
      'Recordatorios de horarios de medicinas',
      'Organización de pastilleros',
      'Seguimiento de tomas diarias',
      'Comunicación con familia y médicos',
      'Registro detallado de cumplimiento',
      'Coordinación con farmacias',
      'Alertas de reabastecimiento'
    ],
    pricing: 'Incluido en otros servicios',
    availability: '24/7 monitoreo',
    popular: false
  },
  {
    id: 5,
    name: 'Transporte y Acompañamiento',
    description: 'Acompañamiento seguro a citas médicas, compras y actividades sociales.',
    icon: UserGroupIcon,
    features: [
      'Transporte a citas médicas',
      'Acompañamiento a compras',
      'Visitas a familiares y amigos',
      'Actividades sociales y recreativas',
      'Trámites bancarios y oficiales',
      'Paseos al aire libre',
      'Eventos religiosos o culturales'
    ],
    pricing: 'Desde $30/hora + transporte',
    availability: 'Con reserva previa',
    popular: false
  },
  {
    id: 6,
    name: 'Monitoreo de Seguridad 24/7',
    description: 'Supervisión constante para prevenir accidentes y garantizar un entorno seguro.',
    icon: ShieldCheckIcon,
    features: [
      'Prevención de caídas y accidentes',
      'Supervisión continua de seguridad',
      'Evaluación regular de riesgos domésticos',
      'Comunicación inmediata de emergencias',
      'Ambiente seguro y adaptado',
      'Monitoreo nocturno disponible',
      'Protocolos de emergencia establecidos'
    ],
    pricing: 'Desde $35/hora',
    availability: '24/7 disponible',
    popular: false
  }
]

const carePackages = [
  {
    name: 'Cuidado Básico',
    description: 'Ideal para personas independientes que necesitan apoyo ligero',
    hours: '2-4 horas diarias',
    price: 'Desde $400/semana',
    features: [
      'Compañía y conversación',
      'Recordatorios de medicación',
      'Tareas domésticas ligeras',
      'Preparación de comidas',
      'Supervisión de seguridad',
      'Comunicación familiar diaria'
    ],
    popular: false
  },
  {
    name: 'Cuidado Completo',
    description: 'Para personas que requieren asistencia integral diaria',
    hours: '8-12 horas diarias',
    price: 'Desde $800/semana',
    features: [
      'Todos los servicios básicos',
      'Cuidado personal completo',
      'Transporte y acompañamiento',
      'Monitoreo médico',
      'Actividades terapéuticas',
      'Reportes médicos detallados',
      'Coordinación con profesionales de salud'
    ],
    popular: true
  },
  {
    name: 'Cuidado 24/7',
    description: 'Atención completa las 24 horas para máxima tranquilidad',
    hours: '24 horas diarias',
    price: 'Desde $1,500/semana',
    features: [
      'Todos los servicios incluidos',
      'Cuidado nocturno especializado',
      'Enfermero de guardia disponible',
      'Respuesta inmediata a emergencias',
      'Cuidadores rotativos certificados',
      'Supervisión médica continua',
      'Apoyo familiar 24/7'
    ],
    popular: false
  }
]

const specializedServices = [
  {
    name: 'Cuidado Post-Hospitalario',
    description: 'Transición segura del hospital al hogar con cuidado especializado',
    icon: HeartIcon,
    duration: '2-8 semanas típicamente'
  },
  {
    name: 'Cuidado para Demencia/Alzheimer',
    description: 'Atención especializada para personas con deterioro cognitivo',
    icon: UserGroupIcon,
    duration: 'Cuidado a largo plazo'
  },
  {
    name: 'Cuidado Paliativo',
    description: 'Confort y dignidad en etapas finales de la vida',
    icon: HeartIcon,
    duration: 'Según necesidades médicas'
  },
  {
    name: 'Respiro Familiar',
    description: 'Descanso temporal para cuidadores familiares',
    icon: CalendarDaysIcon,
    duration: 'Desde unas horas hasta semanas'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesSection />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-trust-900 sm:text-5xl">
              Servicios Completos de Cuidado
            </h1>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Servicios completos de atención domiciliaria no médica para adultos mayores. 
              Cuidado personalizado, profesional y con amor en la comodidad del hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestros Servicios</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Cuidado Integral No Médico
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Ofrecemos una gama completa de servicios diseñados para mantener la independencia, 
              dignidad y calidad de vida de tu ser querido.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {mainServices.map((service) => (
              <div 
                key={service.id} 
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 
                  border-2 h-full
                  ${service.popular 
                    ? 'border-primary-200 bg-gradient-to-br from-primary-50/50 to-secondary-50/50' 
                    : 'border-gray-100 hover:border-primary-200'
                  }
                `}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-px -right-px">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-xs font-semibold">
                      Más Solicitado
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`
                  flex items-center justify-center w-16 h-16 rounded-xl mb-6
                  ${service.popular 
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                    : 'bg-gradient-to-br from-trust-500 to-primary-500'
                  }
                `}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-trust-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-trust-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-trust-700">
                      <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing and Availability */}
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-trust-600">Precio:</span>
                    <span className="font-semibold text-primary-600">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-trust-600">Disponibilidad:</span>
                    <span className="text-sm text-trust-800">{service.availability}</span>
                  </div>
                  
                  <button className={`
                    w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200
                    ${service.popular 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700' 
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    }
                  `}>
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Packages */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-trust-50 to-primary-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Paquetes de Cuidado</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Planes Diseñados para Cada Necesidad
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Selecciona el nivel de cuidado que mejor se adapte a las necesidades de tu ser querido. 
              Todos nuestros planes son personalizables.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {carePackages.map((packageItem, index) => (
              <div 
                key={packageItem.name} 
                className={`
                  relative bg-white rounded-2xl shadow-xl overflow-hidden
                  ${packageItem.popular ? 'ring-2 ring-primary-500 scale-105' : ''}
                `}
              >
                {packageItem.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 text-sm font-semibold">
                    Plan Más Popular
                  </div>
                )}
                
                <div className={`p-8 ${packageItem.popular ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-bold text-trust-900 mb-2">{packageItem.name}</h3>
                  <p className="text-trust-600 mb-4">{packageItem.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary-600">{packageItem.price}</span>
                    </div>
                    <p className="text-sm text-trust-600">{packageItem.hours}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {packageItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-trust-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`
                    w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200
                    ${packageItem.popular 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg' 
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    }
                  `}>
                    Consultar Este Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Servicios Especializados</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Atención Especializada para Necesidades Específicas
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Contamos con protocolos y personal especializado para situaciones que requieren cuidado específico.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {specializedServices.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-trust-900 mb-2">{service.name}</h3>
                    <p className="text-trust-600 mb-3">{service.description}</p>
                    <p className="text-sm text-primary-600 font-medium">{service.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Proceso Simple</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Cómo Comenzar con Nuestros Servicios
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Evaluación Gratuita</h3>
                <p className="text-sm text-trust-600">
                  Visitamos tu hogar para evaluar necesidades y diseñar un plan personalizado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Selección del Cuidador</h3>
                <p className="text-sm text-trust-600">
                  Elegimos al cuidador perfecto basado en personalidad y necesidades específicas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Inicio del Servicio</h3>
                <p className="text-sm text-trust-600">
                  Comenzamos el cuidado con una transición suave y supervisión cercana
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Monitoreo Continuo</h3>
                <p className="text-sm text-trust-600">
                  Evaluamos regularmente la calidad del servicio y ajustamos según sea necesario
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Comenzar el Mejor Cuidado para Tu Ser Querido?
              </h2>
              <p className="text-primary-100 mb-6">
                Nuestro equipo está disponible para una evaluación gratuita y sin compromiso. 
                Descubre cómo podemos ayudar a mejorar la calidad de vida de tu familia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200 shadow-lg"
                >
                  Evaluación Gratuita
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Llamar: (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}