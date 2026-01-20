'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid'
import { HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    name: 'Carmen Vásquez',
    relation: 'Hija de cliente',
    age: 'Cuidando a mamá de 78 años',
    content: 'Desde que comenzamos con Bienestar y Cuidado en el Hogar, mi mamá ha recuperado su alegría de vivir. La cuidadora María José no solo la ayuda con sus necesidades diarias, sino que se ha convertido en una verdadera compañía. Ver a mamá sonreír nuevamente no tiene precio.',
    rating: 5,
    service: 'Compañía y cuidado personal',
    duration: 'Cliente por 2 años',
    image: '👩‍🦳',
    verified: true
  },
  {
    id: 2,
    name: 'Roberto Mendoza',
    relation: 'Hijo de cliente',
    age: 'Cuidando a papá de 82 años',
    content: 'Después del derrame cerebral de papá, pensamos que tendríamos que llevarlo a un hogar de ancianos. Gracias a este equipo maravilloso, papá pudo quedarse en casa donde es feliz. El cuidador Luis es como parte de la familia ahora.',
    rating: 5,
    service: 'Cuidado post-hospitalario',
    duration: 'Cliente por 18 meses',
    image: '👨‍🦳',
    verified: true
  },
  {
    id: 3,
    name: 'Ana María Torres',
    relation: 'Esposa de cliente',
    age: 'Cuidando a esposo de 75 años',
    content: 'Mi esposo tiene Alzheimer temprano y yo necesitaba ayuda urgente. La paciencia y profesionalismo de Carolina ha sido increíble. Ahora puedo ir a trabajar tranquila sabiendo que está en las mejores manos.',
    rating: 5,
    service: 'Cuidado especializado en demencia',
    duration: 'Cliente por 8 meses',
    image: '👵',
    verified: true
  },
  {
    id: 4,
    name: 'Eduardo Silva',
    relation: 'Hijo de cliente',
    age: 'Cuidando a mamá de 86 años',
    content: 'Vivo en otra ciudad y estaba muy preocupado por mamá. Este servicio me ha dado una tranquilidad inmensa. Los reportes diarios y la comunicación constante me mantienen informado. Mamá adora a su cuidadora Patricia.',
    rating: 5,
    service: 'Supervisión diaria y compañía',
    duration: 'Cliente por 3 años',
    image: '👩‍🦱',
    verified: true
  },
  {
    id: 5,
    name: 'Lucía Ramírez',
    relation: 'Nieta de cliente',
    age: 'Cuidando a abuela de 90 años',
    content: 'Mi abuela es muy independiente pero necesitaba ayuda con algunas tareas. El equipo respeta completamente su autonomía mientras la mantiene segura. Es exactamente lo que necesitábamos.',
    rating: 5,
    service: 'Asistencia ligera y monitoreo',
    duration: 'Cliente por 1 año',
    image: '👵',
    verified: true
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-semibold text-primary-600 text-base leading-7">Testimonios</h2>
          <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
            Lo Que Dicen Nuestras Familias
          </p>
          <p className="mt-6 text-trust-600 text-lg leading-8">
            La confianza de más de 500 familias nos respalda. Lee las experiencias reales 
            de quienes han elegido nuestros servicios para cuidar a sus seres queridos.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 lg:p-12"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="mb-8 text-trust-800 text-xl text-center italic leading-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full w-16 h-16 text-2xl">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-2">
                      <p className="font-semibold text-trust-900">{testimonials[currentTestimonial].name}</p>
                      {testimonials[currentTestimonial].verified && (
                        <CheckCircleIcon className="w-5 h-5 text-primary-600" title="Cliente verificado" />
                      )}
                    </div>
                    <p className="text-trust-600">{testimonials[currentTestimonial].relation}</p>
                    <p className="text-trust-500 text-sm">{testimonials[currentTestimonial].age}</p>
                  </div>
                </div>

                {/* Service Info */}
                <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                  <span className="bg-primary-100 px-3 py-1 rounded-full text-primary-700">
                    {testimonials[currentTestimonial].service}
                  </span>
                  <span className="bg-secondary-100 px-3 py-1 rounded-full text-secondary-700">
                    {testimonials[currentTestimonial].duration}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="top-1/2 right-4 left-4 absolute flex justify-between -translate-y-1/2 pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="flex justify-center items-center bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 text-trust-600 hover:text-primary-600 transition-all duration-200 pointer-events-auto"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex justify-center items-center bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 text-trust-600 hover:text-primary-600 transition-all duration-200 pointer-events-auto"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-primary-600 scale-110' 
                      : 'bg-trust-300 hover:bg-trust-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <div className="mb-8 text-center">
              <h3 className="mb-2 font-bold text-trust-900 text-2xl">
                Resultados que Hablan por Sí Solos
              </h3>
              <p className="text-trust-600">
                Estas son las métricas reales de satisfacción de nuestros clientes
              </p>
            </div>

            <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2 font-bold text-primary-600 text-3xl">98%</div>
                <div className="text-trust-600 text-sm">Satisfacción General</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-primary-500 mx-auto mb-4 rounded-full w-16 h-16">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2 font-bold text-secondary-600 text-3xl">95%</div>
                <div className="text-trust-600 text-sm">Recomendarían el Servicio</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-trust-500 to-primary-500 mx-auto mb-4 rounded-full w-16 h-16">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2 font-bold text-trust-600 text-3xl">92%</div>
                <div className="text-trust-600 text-sm">Renovación de Contratos</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-trust-500 mx-auto mb-4 rounded-full w-16 h-16">
                  <span className="font-bold text-white text-xl">4.9</span>
                </div>
                <div className="mb-2 font-bold text-primary-600 text-3xl">4.9/5</div>
                <div className="text-trust-600 text-sm">Calificación Promedio</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h3 className="mb-4 font-bold text-2xl">
              ¿Quieres Ser Parte de Nuestras Historias de Éxito?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-primary-100">
              Únete a las más de 500 familias que han confiado en nosotros. 
              Comienza hoy mismo con una evaluación gratuita y sin compromiso.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-primary-600 text-base transition-colors duration-200"
              >
                Solicitar Evaluación Gratuita
              </a>
              <a
                href="/testimonios"
                className="inline-flex justify-center items-center hover:bg-white/10 px-6 py-3 border-2 border-white/30 rounded-xl font-medium text-white text-base transition-colors duration-200"
              >
                Ver Más Testimonios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}