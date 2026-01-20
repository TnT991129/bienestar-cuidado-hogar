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
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
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
              className="bg-white shadow-md border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center hover:bg-gray-50 px-6 py-5 w-full text-left transition-colors duration-200"
              >
                <h3 className="pr-4 font-semibold text-gray-900 text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
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
                    <div className="px-6 pt-2 pb-5">
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
          className="mt-12 text-center"
        >
          <p className="mb-6 text-gray-600">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <motion.a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 hover:from-blue-600 to-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300"
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