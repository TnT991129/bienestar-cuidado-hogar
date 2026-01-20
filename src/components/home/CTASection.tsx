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
    <section className="bg-gradient-to-br from-white to-primary-50/30 py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-semibold text-primary-600 text-base leading-7">Contáctanos Hoy</h2>
          <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
            Comienza el Cuidado de Tu Ser Querido Ahora Mismo
          </p>
          <p className="mt-6 text-trust-600 text-lg leading-8">
            Nuestro equipo de especialistas está listo para ayudarte. Evaluación gratuita, 
            sin compromiso y disponibilidad inmediata para situaciones urgentes.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto mt-16 max-w-4xl"
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
          <div className="bg-red-50 p-6 border-2 border-red-200 rounded-2xl">
            <div className="flex justify-center items-center text-center">
              <div className="flex-shrink-0 mr-4">
                <div className="flex justify-center items-center bg-red-500 rounded-full w-12 h-12 animate-pulse">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-red-800 text-lg">
                  ¿Necesitas Cuidado Urgente?
                </h3>
                <p className="mb-3 text-red-700">
                  Para situaciones de emergencia o necesidades inmediatas de cuidado, llámanos ahora.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-200"
                >
                  <PhoneIcon className="mr-2 w-4 h-4" />
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
          <div className="bg-white shadow-lg p-8 border border-gray-100 rounded-2xl">
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Office Address */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mr-3 rounded-lg w-10 h-10">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-trust-900 text-xl">Nuestra Oficina</h3>
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
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                  >
                    <MapPinIcon className="mr-2 w-4 h-4" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-primary-500 mr-3 rounded-lg w-10 h-10">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-trust-900 text-xl">Horarios de Atención</h3>
                </div>
                
                <div className="space-y-2 text-trust-600">
                  <p>{officeInfo.hours.weekdays}</p>
                  <p>{officeInfo.hours.saturday}</p>
                  <p>{officeInfo.hours.sunday}</p>
                  <p className="font-semibold text-red-600">{officeInfo.hours.emergency}</p>
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
          <div className="bg-gradient-to-r from-trust-600 via-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h3 className="mb-4 font-bold text-2xl">
              ¿Listo para Brindar la Mejor Atención a Tu Ser Querido?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-trust-100">
              No esperes más. Cada día cuenta cuando se trata del bienestar de tu familia. 
              Nuestro equipo está listo para comenzar hoy mismo.
            </p>
            
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
              <a
                href="/contacto"
                className="inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg px-8 py-4 border border-transparent rounded-xl font-semibold text-primary-600 text-lg transition-colors duration-200"
              >
                Evaluación Gratuita Ahora
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex justify-center items-center hover:bg-white/10 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-white text-lg transition-colors duration-200"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                (234) 567-890
              </a>
            </div>

            <p className="mt-4 text-primary-100 text-sm">
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
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 text-center">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-green-500 rounded-full w-8 h-8">
                <span className="font-bold text-white text-xs">✓</span>
              </div>
              <span className="text-trust-600 text-sm">Licenciado y Asegurado</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-blue-500 rounded-full w-8 h-8">
                <span className="font-bold text-white text-xs">⭐</span>
              </div>
              <span className="text-trust-600 text-sm">15+ Años de Experiencia</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-purple-500 rounded-full w-8 h-8">
                <span className="font-bold text-white text-xs">500+</span>
              </div>
              <span className="text-trust-600 text-sm">Familias Satisfechas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}