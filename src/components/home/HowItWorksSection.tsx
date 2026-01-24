'use client'

import { motion } from 'framer-motion'
import { 
  PhoneIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  PlayIcon,
  CheckCircleIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    step: 1,
    title: 'Contacto Inicial',
    description: 'Llamas o nos escribes para contarnos sobre tus necesidades de acompañamiento',
    details: [
      'Conversación telefónica sin compromiso',
      'Evaluamos necesidades básicas',
      'Programamos visita domiciliaria',
      'Respondemos todas tus preguntas'
    ],
    icon: PhoneIcon,
    duration: '15 minutos'
  },
  {
    step: 2,
    title: 'Evaluación Gratuita',
    description: 'Visitamos tu hogar para conocer la situación y diseñar el plan perfecto',
    details: [
      'Evaluación completa del hogar',
      'Entrevista con la familia',
      'Análisis de necesidades específicas',
      'Recomendaciones personalizadas'
    ],
    icon: ClipboardDocumentCheckIcon,
    duration: '60-90 minutos'
  },
  {
    step: 3,
    title: 'Selección del Acompañante',
    description: 'Elegimos al acompañante perfecto basado en personalidad y necesidades',
    details: [
      'Matching personalizado',
      'Presentación del acompañante',
      'Período de prueba',
      'Ajustes si es necesario'
    ],
    icon: UserGroupIcon,
    duration: '24-48 horas'
  },
  {
    step: 4,
    title: 'Inicio del Acompañamiento',
    description: 'Comenzamos el servicio con supervisión cercana y seguimiento continuo',
    details: [
      'Primera semana supervisada',
      'Reportes diarios',
      'Ajustes del plan',
      'Comunicación constante'
    ],
    icon: PlayIcon,
    duration: 'Inmediato'
  }
]

const benefits = [
  {
    title: 'Proceso Transparente',
    description: 'Cada paso está claramente definido sin sorpresas ni costos ocultos'
  },
  {
    title: 'Evaluación Gratuita',
    description: 'La evaluación inicial no tiene costo y no genera ningún compromiso'
  },
  {
    title: 'Flexibilidad Total',
    description: 'Podemos ajustar el plan en cualquier momento según cambien las necesidades'
  },
  {
    title: 'Inicio Rápido',
    description: 'En situaciones urgentes podemos comenzar el mismo día del contacto'
  }
]

export default function HowItWorksSection() {
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
          <h2 className="font-semibold text-primary-600 text-base leading-7">Cómo Funciona</h2>
          <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
            Un Proceso Simple y Transparente
          </p>
          <p className="mt-6 text-trust-600 text-lg leading-8">
            Desde el primer contacto hasta el inicio del acompañamiento, nuestro proceso está diseñado 
            para ser claro, rápido y completamente adaptado a tus necesidades.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden lg:block top-1/2 right-0 left-0 absolute bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 mt-3 h-0.5 -translate-y-1/2 transform"></div>
            
            <div className="gap-12 lg:gap-8 grid grid-cols-1 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.step} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div className="z-10 relative flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg mx-auto mb-6 rounded-full w-16 h-16">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="-top-2 -right-2 z-20 absolute flex justify-center items-center bg-secondary-500 rounded-full w-8 h-8 font-bold text-white text-sm">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="lg:text-left text-center">
                    <h3 className="mb-3 font-bold text-trust-900 text-xl">{step.title}</h3>
                    <p className="mb-4 text-trust-600">{step.description}</p>
                    
                    {/* Duration */}
                    <div className="inline-flex items-center bg-primary-100 mb-4 px-3 py-1 rounded-full font-medium text-primary-700 text-sm">
                      Duración: {step.duration}
                    </div>

                    {/* Details */}
                    <ul className="justify-center items-center space-y-2 text-trust-600 text-sm">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircleIcon className="flex-shrink-0 items-center mt-0.5 mr-2 w-4 h-4 text-secondary-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-24 lg:mt-40 max-w-6xl"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-bold text-trust-900 text-2xl">
              ¿Por Qué Nuestro Proceso es Diferente?
            </h3>
            <p className="mx-auto max-w-3xl text-trust-600">
              Hemos perfeccionado nuestro proceso durante más de 15 años para garantizar 
              la mejor experiencia tanto para las familias como para nuestros acompañantes.
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-trust-50 to-primary-50 p-6 rounded-2xl text-center"
              >
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-lg w-12 h-12">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 font-semibold text-trust-900">{benefit.title}</h4>
                <p className="text-trust-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Process */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="bg-red-50 p-8 border-2 border-red-200 rounded-2xl">
            <div className="text-center">
              <div className="flex justify-center items-center bg-red-500 mx-auto mb-4 rounded-full w-16 h-16">
                <PhoneIcon className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="mb-4 font-bold text-red-800 text-2xl">
                ¿Necesitas Acompañamiento Urgente?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-red-700">
                Para situaciones de emergencia o cuando necesitas acompañamiento inmediato, 
                tenemos un proceso acelerado que puede comenzar el mismo día.
              </p>
              
              <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-6 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-red-600 text-2xl">15 min</div>
                  <div className="text-red-700 text-sm">Evaluación telefónica</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-red-600 text-2xl">2 horas</div>
                  <div className="text-red-700 text-sm">Acompañante disponible</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-red-600 text-2xl">Mismo día</div>
                  <div className="text-red-700 text-sm">Inicio del acompañamiento</div>
                </div>
              </div>

              <a
                href="https://wa.me/17867527884"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                Llamar para Emergencia: +1 (786) 752-7884
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <HeartIcon className="mx-auto mb-6 w-12 h-12 text-primary-100" />
            <h3 className="mb-4 font-bold text-white text-2xl">
              ¿Listo para Comenzar?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-primary-100">
              El primer paso es simple: una conversación. Contáctanos hoy y descubre 
              cómo podemos ayudar a mejorar la calidad de vida de tu ser querido.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-primary-600 text-base transition-colors duration-200"
              >
                Comenzar Ahora
              </a>
              <a
                href="https://wa.me/17867527884"
                className="inline-flex justify-center items-center hover:bg-white/10 px-6 py-3 border-2 border-white/30 rounded-xl font-medium text-white text-base transition-colors duration-200"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                +1 (786) 752-7884
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}