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
  title: 'Servicios de Acompañamiento en el Hogar - Bienestar y Cuidado en el Hogar',
  description: 'Servicios completos de acompañamiento no médico para adultos mayores: asistencia personal, compañía, apoyo con tareas del hogar, acompañamiento y más. Planes personalizados 24/7.',
}

const mainServices = [
  {
    id: 1,
    name: 'Asistencia Personal NO Médica',
    description: 'Asistencia especializada no médica con todas las actividades de cuidado personal diario.',
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
      'Acompañantes rotativos capacitados',
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
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-bold text-trust-900 text-4xl sm:text-5xl tracking-tight">
              Servicios Completos de Cuidado
            </h1>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Servicios completos de atención domiciliaria no médica para adultos mayores. 
              Cuidado personalizado, profesional y con amor en la comodidad del hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestros Servicios</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Cuidado Integral No Médico
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Ofrecemos una gama completa de servicios diseñados para mantener la independencia, 
              dignidad y calidad de vida de tu ser querido.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 lg:max-w-none max-w-2xl">
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
                  <div className="-top-px -right-px absolute">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1 rounded-tr-2xl rounded-bl-lg font-semibold text-white text-xs">
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
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 font-semibold text-trust-900 text-xl">
                  {service.name}
                </h3>
                <p className="mb-6 text-trust-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-trust-700 text-sm">
                      <CheckCircleIcon className="flex-shrink-0 mt-0.5 mr-2 w-4 h-4 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing and Availability */}
                <div className="mt-auto pt-4 border-gray-200 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-trust-600 text-sm">Precio:</span>
                    <span className="font-semibold text-primary-600">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-trust-600 text-sm">Disponibilidad:</span>
                    <span className="text-trust-800 text-sm">{service.availability}</span>
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
      <section className="bg-gradient-to-br from-trust-50 to-primary-50/30 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Paquetes de Cuidado</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Planes Diseñados para Cada Necesidad
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Selecciona el nivel de cuidado que mejor se adapte a las necesidades de tu ser querido. 
              Todos nuestros planes son personalizables.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 lg:max-w-none max-w-2xl">
            {carePackages.map((packageItem, index) => (
              <div 
                key={packageItem.name} 
                className={`
                  relative bg-white rounded-2xl shadow-xl overflow-hidden
                  ${packageItem.popular ? 'ring-2 ring-primary-500 scale-105' : ''}
                `}
              >
                {packageItem.popular && (
                  <div className="top-0 right-0 left-0 absolute bg-gradient-to-r from-primary-500 to-secondary-500 py-2 font-semibold text-white text-sm text-center">
                    Plan Más Popular
                  </div>
                )}
                
                <div className={`p-8 ${packageItem.popular ? 'pt-16' : ''}`}>
                  <h3 className="mb-2 font-bold text-trust-900 text-2xl">{packageItem.name}</h3>
                  <p className="mb-4 text-trust-600">{packageItem.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="font-bold text-primary-600 text-3xl">{packageItem.price}</span>
                    </div>
                    <p className="text-trust-600 text-sm">{packageItem.hours}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {packageItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircleIcon className="flex-shrink-0 mt-0.5 mr-3 w-5 h-5 text-primary-500" />
                        <span className="text-trust-700 text-sm">{feature}</span>
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
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Servicios Especializados</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Atención Especializada para Necesidades Específicas
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Contamos con protocolos y personal especializado para situaciones que requieren cuidado específico.
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto mt-16 max-w-4xl">
            {specializedServices.map((service) => (
              <div key={service.name} className="bg-white shadow-lg p-6 border border-gray-100 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg w-12 h-12">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-trust-900 text-lg">{service.name}</h3>
                    <p className="mb-3 text-trust-600">{service.description}</p>
                    <p className="font-medium text-primary-600 text-sm">{service.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Proceso Simple</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Cómo Comenzar con Nuestros Servicios
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Evaluación Gratuita</h3>
                <p className="text-trust-600 text-sm">
                  Visitamos tu hogar para evaluar necesidades y diseñar un plan personalizado
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Selección del Cuidador</h3>
                <p className="text-trust-600 text-sm">
                  Elegimos al cuidador perfecto basado en personalidad y necesidades específicas
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Inicio del Servicio</h3>
                <p className="text-trust-600 text-sm">
                  Comenzamos el cuidado con una transición suave y supervisión cercana
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  4
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Monitoreo Continuo</h3>
                <p className="text-trust-600 text-sm">
                  Evaluamos regularmente la calidad del servicio y ajustamos según sea necesario
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
              <h2 className="mb-4 font-bold text-3xl">
                ¿Listo para Comenzar el Mejor Cuidado para Tu Ser Querido?
              </h2>
              <p className="mb-6 text-primary-100">
                Nuestro equipo está disponible para una evaluación gratuita y sin compromiso. 
                Descubre cómo podemos ayudar a mejorar la calidad de vida de tu familia.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <a
                  href="/contacto"
                  className="inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-primary-600 text-base transition-colors duration-200"
                >
                  Evaluación Gratuita
                </a>
                <a
                  href="https://wa.me/17867527884"
                  className="inline-flex justify-center items-center hover:bg-white/10 px-6 py-3 border-2 border-white/30 rounded-xl font-medium text-white text-base transition-colors duration-200"
                >
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  Llamar: (786) 752-7884
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}