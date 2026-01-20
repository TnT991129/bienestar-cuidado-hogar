'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "¿Qué servicios de cuidado domiciliario ofrecen?",
    answer: "Ofrecemos una amplia gama de servicios no médicos que incluyen compañía y supervisión, asistencia con actividades diarias, preparación de comidas, transporte a citas médicas, ayuda con medicamentos, y apoyo emocional. Nuestros servicios están diseñados para mantener la independencia y dignidad de nuestros clientes."
  },
  {
    question: "¿Cómo seleccionan y capacitan a sus cuidadores?",
    answer: "Todos nuestros cuidadores pasan por un riguroso proceso de selección que incluye verificación de antecedentes, entrevistas personales, y verificación de referencias. Además, reciben capacitación continua en primeros auxilios, cuidado geriátrico, y técnicas de comunicación empática."
  },
  {
    question: "¿Están disponibles las 24 horas del día?",
    answer: "Sí, ofrecemos servicios las 24 horas del día, los 7 días de la semana. Podemos proporcionar cuidado por horas, turnos completos, o cuidado nocturno según las necesidades específicas de cada familia."
  },
  {
    question: "¿Cómo determinan el costo de los servicios?",
    answer: "Los costos se determinan según el tipo de servicios requeridos, las horas de cuidado necesarias, y las necesidades específicas del cliente. Ofrecemos una evaluación gratuita para crear un plan personalizado y transparente sin sorpresas en la facturación."
  },
  {
    question: "¿Qué sucede si mi familiar no se siente cómodo con el cuidador asignado?",
    answer: "Entendemos que la compatibilidad es crucial. Si por alguna razón el cuidador asignado no es la mejor opción, trabajaremos inmediatamente para encontrar un reemplazo que se adapte mejor a las necesidades y preferencias de su familiar."
  },
  {
    question: "¿Cubren los seguros médicos estos servicios?",
    answer: "Algunos seguros de salud y programas gubernamentales pueden cubrir ciertos servicios de cuidado domiciliario. Nuestro equipo puede ayudarle a verificar su cobertura y explorar opciones de financiamiento disponibles."
  },
  {
    question: "¿Cómo garantizan la calidad del cuidado?",
    answer: "Mantenemos altos estándares de calidad mediante supervisión regular, comunicación constante con las familias, evaluaciones periódicas del cuidado, y un sistema de retroalimentación continua. Además, todos nuestros cuidadores están asegurados y certificados."
  },
  {
    question: "¿Pueden ayudar con tareas domésticas ligeras?",
    answer: "Sí, nuestros servicios incluyen asistencia con tareas domésticas ligeras como limpieza, lavandería, organización, y mantenimiento básico del hogar para crear un ambiente seguro y confortable para su familiar."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de cuidado domiciliario
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <motion.a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos Directamente
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}