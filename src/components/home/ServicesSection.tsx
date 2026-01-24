'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  HomeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 1,
    name: 'Cuidado Personal',
    description: 'Asistencia con higiene personal, vestimenta, alimentación y movilidad básica.',
    icon: HeartIcon,
    features: [
      'Aseo e higiene personal',
      'Ayuda con vestimenta',
      'Asistencia para comer',
      'Apoyo para caminar',
      'Cuidado de la piel'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Compañía y Apoyo Emocional',
    description: 'Conversación, actividades recreativas y apoyo emocional para combatir la soledad.',
    icon: ChatBubbleLeftRightIcon,
    features: [
      'Conversación y compañía',
      'Actividades recreativas',
      'Juegos de mesa y lectura',
      'Apoyo emocional',
      'Estimulación cognitiva'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Tareas Domésticas Ligeras',
    description: 'Mantenimiento básico del hogar para crear un ambiente limpio y seguro.',
    icon: HomeIcon,
    features: [
      'Limpieza ligera',
      'Preparación de comidas',
      'Lavado de ropa',
      'Organización básica',
      'Mantenimiento del orden'
    ],
    popular: false
  },
  {
    id: 4,
    name: 'Recordatorios de Medicación',
    description: 'Recordatorios para tomar medicamentos según las indicaciones médicas.',
    icon: ClockIcon,
    features: [
      'Recordatorios de horarios',
      'Organización de medicinas',
      'Seguimiento de tomas',
      'Comunicación con familia',
      'Registro de cumplimiento'
    ],
    popular: false
  },
  {
    id: 5,
    name: 'Transporte y Acompañamiento',
    description: 'Acompañamiento a citas médicas, compras y actividades sociales.',
    icon: UserGroupIcon,
    features: [
      'Citas médicas',
      'Compras de víveres',
      'Actividades sociales',
      'Trámites importantes',
      'Visitas familiares'
    ],
    popular: false
  },
  {
    id: 6,
    name: 'Monitoreo de Seguridad',
    description: 'Supervisión constante para prevenir caídas y garantizar un entorno seguro.',
    icon: ShieldCheckIcon,
    features: [
      'Prevención de caídas',
      'Supervisión continua',
      'Evaluación de riesgos',
      'Comunicación de emergencias',
      'Ambiente seguro'
    ],
    popular: false
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestros Servicios</h2>
          <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
            Cuidado Integral No Médico en el Hogar
          </p>
          <p className="mt-6 text-trust-600 text-lg leading-8">
            Ofrecemos una gama completa de servicios de acompañamiento no médico diseñados para mantener 
            la independencia, dignidad y calidad de vida de tu ser querido en su propio hogar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none max-w-2xl"
        >
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none max-w-xl">
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                className="group relative"
              >
                <div className={`
                  relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 
                  border-2 h-full overflow-hidden
                  ${service.popular 
                    ? 'border-primary-200 bg-gradient-to-br from-primary-50/50 to-secondary-50/50' 
                    : 'border-gray-100 hover:border-primary-200'
                  }
                `}>
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
                    group-hover:scale-110 transition-transform duration-300
                    ${service.popular 
                      ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                      : 'bg-gradient-to-br from-trust-500 to-primary-500'
                    }
                  `}>
                    <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="z-10 relative">
                    <h3 className="mb-4 font-semibold text-trust-900 text-xl leading-7">
                      {service.name}
                    </h3>
                    <p className="mb-6 text-trust-600 text-base leading-7">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-trust-700 text-sm">
                          <div className={`
                            w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0
                            ${service.popular ? 'bg-primary-500' : 'bg-trust-400'}
                          `}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`
                      w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200
                      ${service.popular 
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg' 
                        : 'bg-trust-100 text-trust-700 hover:bg-primary-100 hover:text-primary-700 border border-trust-200'
                      }
                    `}>
                      Más Información
                    </button>
                  </div>

                  {/* Background decoration for popular service */}
                  {service.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl pointer-events-none"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-gray-200 border-t"
        >
          <div className="mb-16 text-center">
            <h3 className="mb-4 font-bold text-trust-900 text-2xl">
              ¿Cómo Funciona Nuestro Proceso?
            </h3>
            <p className="mx-auto max-w-2xl text-trust-600">
              Un proceso simple y transparente para comenzar el cuidado de tu ser querido
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                1
              </div>
              <h4 className="mb-2 font-semibold text-trust-900">Evaluación Gratuita</h4>
              <p className="text-trust-600 text-sm">
                Visitamos tu hogar para evaluar las necesidades específicas de cuidado
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                2
              </div>
              <h4 className="mb-2 font-semibold text-trust-900">Plan Personalizado</h4>
              <p className="text-trust-600 text-sm">
                Diseñamos un plan de cuidado específico y seleccionamos al cuidador ideal
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                3
              </div>
              <h4 className="mb-2 font-semibold text-trust-900">Inicio del Cuidado</h4>
              <p className="text-trust-600 text-sm">
                Comenzamos el servicio con una transición suave y supervisión cercana
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                4
              </div>
              <h4 className="mb-2 font-semibold text-trust-900">Monitoreo Continuo</h4>
              <p className="text-trust-600 text-sm">
                Seguimiento regular de la calidad del servicio y ajustes según sea necesario
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-trust-50 to-primary-50 mt-16 p-8 rounded-2xl text-center"
        >
          <h3 className="mb-4 font-bold text-trust-900 text-2xl">
            ¿Necesitas Ayuda Eligiendo el Servicio Adecuado?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-trust-600">
            Nuestros especialistas en cuidado están disponibles para ayudarte a determinar 
            qué servicios son los más apropiados para las necesidades específicas de tu familiar.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <a
              href="/servicios"
              className="inline-flex justify-center items-center bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-white text-base transition-colors duration-200"
            >
              Ver Todos los Servicios
            </a>
            <a
              href="/contacto"
              className="inline-flex justify-center items-center hover:bg-primary-50 px-6 py-3 border-2 border-primary-200 rounded-xl font-medium text-primary-700 text-base transition-colors duration-200"
            >
              Consulta Personalizada
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}