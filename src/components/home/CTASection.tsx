'use client'

import { motion } from 'framer-motion'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    name: 'Llamada de Emergencia',
    description: 'Línea directa 24/7 para emergencias y consultas urgentes',
    icon: PhoneIcon,
    contact: '(234) 567-890',
    action: 'tel:+1234567890',
    primary: true,
    available: 'Disponible 24/7'
  },
  {
    name: 'WhatsApp',
    description: 'Respuesta rápida por chat para consultas y coordinación',
    icon: ChatBubbleLeftRightIcon,
    contact: '(234) 567-891',
    action: 'https://wa.me/1234567891',
    primary: false,
    available: 'Lun-Vie: 8AM-8PM'
  },
  {
    name: 'Email',
    description: 'Envíanos tu consulta y te responderemos en menos de 2 horas',
    icon: EnvelopeIcon,
    contact: 'info@bienestarhogar.com',
    action: 'mailto:info@bienestarhogar.com',
    primary: false,
    available: 'Respuesta < 2 horas'
  },
  {
    name: 'Videollamada',
    description: 'Consulta virtual gratuita con nuestros especialistas',
    icon: VideoCameraIcon,
    contact: 'Agendar Llamada',
    action: '/contacto',
    primary: false,
    available: 'Lun-Vie: 9AM-6PM'
  }
]

const officeInfo = {
  address: 'Av. Principal 1234, Centro',
  city: 'Ciudad, Estado 12345',
  hours: {
    weekdays: 'Lunes - Viernes: 8:00 AM - 8:00 PM',
    saturday: 'Sábados: 9:00 AM - 5:00 PM',
    sunday: 'Domingos: 10:00 AM - 4:00 PM',
    emergency: 'Emergencias: 24/7'
  }
}

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-white to-primary-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Contáctanos Hoy</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
            Comienza el Cuidado de Tu Ser Querido Ahora Mismo
          </p>
          <p className="mt-6 text-lg leading-8 text-trust-600">
            Nuestro equipo de especialistas está listo para ayudarte. Evaluación gratuita, 
            sin compromiso y disponibilidad inmediata para situaciones urgentes.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method) => (
            <div key={method.name} className="group">
              <a
                href={method.action}
                className={`
                  block h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2
                  ${method.primary 
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-primary-500 transform hover:scale-105' 
                    : 'bg-white text-trust-900 border-gray-200 hover:border-primary-300'
                  }
                `}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center mb-4
                    ${method.primary 
                      ? 'bg-white/20 group-hover:bg-white/30' 
                      : 'bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:from-primary-600 group-hover:to-secondary-600'
                    }
                  `}>
                    <method.icon className={`
                      h-8 w-8 
                      ${method.primary ? 'text-white' : 'text-white'}
                    `} />
                  </div>
                  
                  <h3 className={`
                    text-lg font-semibold mb-2
                    ${method.primary ? 'text-white' : 'text-trust-900'}
                  `}>
                    {method.name}
                  </h3>
                  
                  <p className={`
                    text-sm mb-4
                    ${method.primary ? 'text-primary-100' : 'text-trust-600'}
                  `}>
                    {method.description}
                  </p>
                  
                  <div className={`
                    font-semibold mb-2
                    ${method.primary ? 'text-white' : 'text-primary-600'}
                  `}>
                    {method.contact}
                  </div>
                  
                  <div className={`
                    text-xs
                    ${method.primary ? 'text-primary-100' : 'text-trust-500'}
                  `}>
                    {method.available}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </motion.div>

        {/* Emergency Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <div className="flex items-center justify-center text-center">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-1">
                  ¿Necesitas Cuidado Urgente?
                </h3>
                <p className="text-red-700 mb-3">
                  Para situaciones de emergencia o necesidades inmediatas de cuidado, llámanos ahora.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Llamar Ahora: (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Office Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Office Address */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <MapPinIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-900">Nuestra Oficina</h3>
                </div>
                
                <div className="space-y-2 text-trust-600">
                  <p>{officeInfo.address}</p>
                  <p>{officeInfo.city}</p>
                </div>

                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Bienestar+y+Cuidado+en+el+Hogar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mr-3">
                    <ClockIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-900">Horarios de Atención</h3>
                </div>
                
                <div className="space-y-2 text-trust-600">
                  <p>{officeInfo.hours.weekdays}</p>
                  <p>{officeInfo.hours.saturday}</p>
                  <p>{officeInfo.hours.sunday}</p>
                  <p className="text-red-600 font-semibold">{officeInfo.hours.emergency}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <div className="bg-gradient-to-r from-trust-600 via-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Brindar la Mejor Atención a Tu Ser Querido?
            </h3>
            <p className="text-trust-100 mb-6 max-w-2xl mx-auto">
              No esperes más. Cada día cuenta cuando se trata del bienestar de tu familia. 
              Nuestro equipo está listo para comenzar hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200 shadow-lg"
              >
                Evaluación Gratuita Ahora
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-semibold rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                (234) 567-890
              </a>
            </div>

            <p className="text-primary-100 text-sm mt-4">
              ✓ Evaluación gratuita sin compromiso  •  ✓ Disponibilidad inmediata  •  ✓ Cuidadores verificados
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-center opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-trust-600 text-sm">Licenciado y Asegurado</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">⭐</span>
              </div>
              <span className="text-trust-600 text-sm">15+ Años de Experiencia</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">500+</span>
              </div>
              <span className="text-trust-600 text-sm">Familias Satisfechas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}