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
            {/* Mobile/Tablet: Vertical flow with connecting lines */}
            <div className="lg:hidden">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.step} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-4 ${index < steps.length - 1 ? 'mb-12 pb-12' : ''}`}
                >
                  {/* Vertical connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="top-16 left-8 z-0 absolute bg-gradient-to-b from-primary-300 to-secondary-300 w-0.5"
                      style={{ height: 'calc(100% + 1rem)' }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 1, delay: (index * 0.15) + 0.4 }}
                    >
                      {/* Animated dot traveling down the line */}
                      <motion.div
                        className="left-1/2 absolute bg-secondary-500 rounded-full w-2 h-2 -translate-x-1/2"
                        initial={{ top: 0 }}
                        whileInView={{ top: '100%' }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (index * 0.15) + 1,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Step Circle and Number for Mobile */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg rounded-full w-16 h-16"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Step Number Badge for Mobile */}
                    <motion.div 
                      className="-top-1 -right-1 absolute flex justify-center items-center bg-secondary-500 rounded-full w-6 h-6 font-bold text-white text-xs"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (index * 0.15) + 0.2,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content for Mobile */}
                  <div className="flex-1 pt-1">
                    <motion.h3 
                      className="mb-2 font-bold text-trust-900 text-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.15) + 0.3 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="mb-3 text-trust-600 text-sm leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.15) + 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                    
                    {/* Duration for Mobile */}
                    <motion.div 
                      className="inline-flex items-center bg-primary-100 mb-3 px-2 py-1 rounded-full font-medium text-primary-700 text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.15) + 0.5 }}
                    >
                      Duración: {step.duration}
                    </motion.div>

                    {/* Details for Mobile */}
                    <motion.ul 
                      className="space-y-1 text-trust-600 text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.15) + 0.6 }}
                    >
                      {step.details.slice(0, 2).map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircleIcon className="flex-shrink-0 mt-0.5 mr-1.5 w-3 h-3 text-secondary-500" />
                          <span className="leading-tight">{detail}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Original horizontal layout */}
            <div className="hidden lg:block">
              <div className="gap-12 lg:gap-8 grid grid-cols-1 lg:grid-cols-4">
                {steps.map((step, index) => (
                <motion.div 
                  key={step.step} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Animated Progress Line - only show between steps */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block top-8 left-8 z-0 absolute h-0.5"
                      style={{ 
                        width: 'calc(100% + 2rem)',
                        left: '4rem'
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: (index * 0.2) + 0.6 }}
                    >
                      <div className="bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full w-full h-full">
                        {/* Animated dot traveling along the line */}
                        <motion.div
                          className="top-1/2 absolute bg-secondary-500 rounded-full w-2 h-2 -translate-y-1/2"
                          initial={{ left: '0%' }}
                          whileInView={{ left: 'calc(100% - 8px)' }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (index * 0.2) + 1.4,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step Circle */}
                  <motion.div 
                    className="z-10 relative flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg mb-6 rounded-full w-16 h-16"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  

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
        </div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 lg:mt-32 max-w-6xl"
        >
          <div className="mb-8 lg:mb-12 text-center">
            <h3 className="mb-3 lg:mb-4 font-bold text-trust-900 text-xl lg:text-2xl">
              ¿Por Qué Nuestro Proceso es Diferente?
            </h3>
            <p className="mx-auto px-4 lg:px-0 max-w-3xl text-trust-600 text-sm lg:text-base">
              Hemos perfeccionado nuestro proceso a lo largo de los años para garantizar 
              la mejor experiencia tanto para las familias como para nuestros acompañantes.
            </p>
          </div>

          <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-trust-50 to-primary-50 p-4 lg:p-6 rounded-xl lg:rounded-2xl text-center"
              >
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-3 lg:mb-4 rounded-lg w-10 lg:w-12 h-10 lg:h-12">
                  <CheckCircleIcon className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                </div>
                <h4 className="mb-2 font-semibold text-trust-900 text-sm lg:text-base">{benefit.title}</h4>
                <p className="text-trust-600 text-xs lg:text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}