import type { Metadata } from 'next'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contacto - Bienestar y Cuidado en el Hogar | Evaluación Gratuita 24/7',
  description: 'Contáctanos para una evaluación gratuita de cuidado domiciliario. Disponible 24/7 para emergencias. Llama al (234) 567-890 o solicita información sin compromiso.',
}

const contactMethods = [
  {
    name: 'Llamada de Emergencia 24/7',
    description: 'Para situaciones urgentes y consultas inmediatas',
    icon: PhoneIcon,
    contact: '(234) 567-890',
    action: 'tel:+1234567890',
    primary: true,
    available: '24 horas, 7 días'
  },
  {
    name: 'WhatsApp Business',
    description: 'Respuesta rápida por chat, fotos y documentos',
    icon: ChatBubbleLeftRightIcon,
    contact: '(234) 567-891',
    action: 'https://wa.me/1234567891',
    primary: false,
    available: 'Lun-Dom: 7AM-10PM'
  },
  {
    name: 'Email Corporativo',
    description: 'Consultas detalladas y documentación',
    icon: EnvelopeIcon,
    contact: 'info@bienestarhogar.com',
    action: 'mailto:info@bienestarhogar.com',
    primary: false,
    available: 'Respuesta < 2 horas'
  },
  {
    name: 'Videollamada Gratuita',
    description: 'Consulta virtual con nuestros especialistas',
    icon: VideoCameraIcon,
    contact: 'Agendar Cita',
    action: '#video-call',
    primary: false,
    available: 'Lun-Vie: 9AM-6PM'
  }
]

const officeLocations = [
  {
    name: 'Oficina Principal',
    address: 'Av. Principal 1234, Piso 3',
    city: 'Centro, Ciudad',
    zipCode: '12345',
    phone: '(234) 567-890',
    email: 'info@bienestarhogar.com',
    hours: {
      weekdays: 'Lunes - Viernes: 8:00 AM - 8:00 PM',
      saturday: 'Sábados: 9:00 AM - 5:00 PM',
      sunday: 'Domingos: 10:00 AM - 4:00 PM'
    },
    services: ['Evaluaciones', 'Consultas', 'Administración']
  },
  {
    name: 'Centro de Atención Norte',
    address: 'Calle Norte 567',
    city: 'Zona Norte, Ciudad',
    zipCode: '12346',
    phone: '(234) 567-892',
    email: 'norte@bienestarhogar.com',
    hours: {
      weekdays: 'Lunes - Viernes: 9:00 AM - 6:00 PM',
      saturday: 'Sábados: 10:00 AM - 3:00 PM',
      sunday: 'Cerrado'
    },
    services: ['Evaluaciones domiciliarias', 'Seguimiento']
  }
]

const faqs = [
  {
    question: '¿Cuánto cuesta una evaluación inicial?',
    answer: 'La evaluación inicial es completamente gratuita y sin compromiso. Incluye visita domiciliaria, análisis de necesidades y propuesta de plan de cuidado personalizado.'
  },
  {
    question: '¿Qué tan pronto pueden comenzar los servicios?',
    answer: 'En situaciones normales, podemos comenzar en 24-48 horas. Para emergencias, tenemos disponibilidad inmediata las 24 horas del día.'
  },
  {
    question: '¿Los cuidadores están asegurados?',
    answer: 'Sí, todos nuestros cuidadores están completamente asegurados con responsabilidad civil y cobertura de accidentes. También cuentan con verificación de antecedentes.'
  },
  {
    question: '¿Puedo cambiar de cuidador si no hay buena conexión?',
    answer: 'Absolutamente. La compatibilidad personal es fundamental. Podemos hacer cambios sin costo adicional hasta encontrar el cuidador perfecto.'
  }
]

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-bold text-trust-900 text-4xl sm:text-6xl tracking-tight">
              Contáctanos Hoy
            </h1>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Estamos aquí para ayudarte. Evaluación gratuita, disponibilidad 24/7 para emergencias 
              y respuesta inmediata a todas tus consultas sobre el cuidado de tu ser querido.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-red-50 mt-8 p-6 border-2 border-red-200 rounded-2xl">
              <div className="flex justify-center items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex justify-center items-center bg-red-500 rounded-full w-12 h-12 animate-pulse">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="mb-1 font-semibold text-red-800 text-lg">
                    ¿Emergencia o Necesidad Urgente?
                  </h3>
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
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Formas de Contacto</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Elige la Forma Más Conveniente para Ti
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Múltiples opciones de comunicación para brindarte la mejor atención y respuesta rápida.
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto mt-16 max-w-4xl">
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-br from-trust-50 to-primary-50/30 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl">
            <div className="mb-16 text-center">
              <h2 className="font-semibold text-primary-600 text-base leading-7">Solicitud de Información</h2>
              <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
                Solicita tu Evaluación Gratuita
              </p>
              <p className="mt-6 text-trust-600 text-lg leading-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas 
                para programar una evaluación gratuita en tu hogar.
              </p>
            </div>

            <div className="bg-white shadow-xl p-8 border border-gray-100 rounded-2xl">
              <form className="space-y-6">
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium text-trust-900 text-sm">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium text-trust-900 text-sm">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-trust-900 text-sm">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                      placeholder="(234) 567-890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-trust-900 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="relationship" className="block mb-2 font-medium text-trust-900 text-sm">
                    Relación con la persona a cuidar
                  </label>
                  <select
                    name="relationship"
                    id="relationship"
                    className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                  >
                    <option>Selecciona una opción</option>
                    <option>Hijo/a</option>
                    <option>Nieto/a</option>
                    <option>Cónyuge</option>
                    <option>Hermano/a</option>
                    <option>Familiar cercano</option>
                    <option>Amigo/a</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block mb-2 font-medium text-trust-900 text-sm">
                    ¿Qué tan pronto necesitas el servicio?
                  </label>
                  <select
                    name="urgency"
                    id="urgency"
                    className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                  >
                    <option>Inmediatamente (24-48 horas)</option>
                    <option>Esta semana</option>
                    <option>En las próximas 2 semanas</option>
                    <option>El próximo mes</option>
                    <option>Estoy investigando opciones</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="services" className="block mb-2 font-medium text-trust-900 text-sm">
                    Servicios de interés (puedes seleccionar varios)
                  </label>
                  <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 mt-3">
                    {[
                      'Compañía y apoyo emocional',
                      'Cuidado personal e higiene',
                      'Tareas domésticas ligeras',
                      'Recordatorios de medicación',
                      'Transporte y acompañamiento',
                      'Monitoreo de seguridad 24/7',
                      'Cuidado post-hospitalario',
                      'Cuidado para demencia/Alzheimer'
                    ].map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          className="border-gray-300 rounded focus:ring-2 focus:ring-primary-500 w-4 h-4 text-primary-600"
                        />
                        <span className="ml-2 text-trust-700 text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-trust-900 text-sm">
                    Cuéntanos más sobre tus necesidades
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="px-4 py-3 border border-gray-300 focus:border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500 w-full transition-colors"
                    placeholder="Describe la situación actual, necesidades específicas, horarios preferidos, etc..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 w-4 h-4 text-primary-600"
                  />
                  <label htmlFor="privacy" className="ml-3 text-trust-600 text-sm">
                    Acepto recibir información sobre servicios de cuidado domiciliario y entiendo que 
                    puedo cancelar estas comunicaciones en cualquier momento. 
                    <a href="/privacidad" className="text-primary-600 hover:text-primary-700">
                      Ver política de privacidad.
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-lg px-6 py-4 rounded-xl w-full font-semibold text-white transition-colors duration-200"
                >
                  Solicitar Evaluación Gratuita
                </button>

                <p className="text-trust-500 text-sm text-center">
                  ✓ Evaluación completamente gratuita • ✓ Sin compromiso • ✓ Respuesta en menos de 2 horas
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestras Oficinas</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Ubicaciones y Horarios de Atención
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mx-auto mt-16 max-w-5xl">
            {officeLocations.map((location) => (
              <div key={location.name} className="bg-white shadow-lg p-8 border border-gray-100 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg w-12 h-12">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 font-bold text-trust-900 text-xl">{location.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-trust-700">{location.address}</p>
                      <p className="text-trust-700">{location.city} {location.zipCode}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <PhoneIcon className="mr-2 w-4 h-4 text-primary-600" />
                        <a href={`tel:${location.phone}`} className="text-primary-600 hover:text-primary-700">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <EnvelopeIcon className="mr-2 w-4 h-4 text-primary-600" />
                        <a href={`mailto:${location.email}`} className="text-primary-600 hover:text-primary-700">
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <ClockIcon className="mr-2 w-4 h-4 text-primary-600" />
                        <span className="font-medium text-trust-900">Horarios:</span>
                      </div>
                      <div className="space-y-1 ml-6 text-trust-600 text-sm">
                        <p>{location.hours.weekdays}</p>
                        <p>{location.hours.saturday}</p>
                        {location.hours.sunday !== 'Cerrado' && <p>{location.hours.sunday}</p>}
                        {location.hours.sunday === 'Cerrado' && <p className="text-trust-500">Domingos: Cerrado</p>}
                      </div>
                    </div>

                    <div>
                      <span className="block mb-2 font-medium text-trust-900">Servicios disponibles:</span>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service) => (
                          <span key={service} className="bg-primary-100 px-2 py-1 rounded-full text-primary-700 text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Preguntas Frecuentes</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Respuestas a las Consultas Más Comunes
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow-lg p-6 border border-gray-100 rounded-2xl">
                  <h3 className="mb-3 font-semibold text-trust-900 text-lg">{faq.question}</h3>
                  <p className="text-trust-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-trust-600">¿No encontraste la respuesta que buscabas?</p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-white text-base transition-colors duration-200"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                Llámanos: (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center bg-green-100 mb-4 rounded-full w-12 h-12">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="mb-2 font-semibold text-trust-900 text-lg">Respuesta Garantizada</h3>
              <p className="text-trust-600 text-sm">
                Te contactaremos en menos de 2 horas durante horario de oficina
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center bg-blue-100 mb-4 rounded-full w-12 h-12">
                <HeartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-trust-900 text-lg">Evaluación Gratuita</h3>
              <p className="text-trust-600 text-sm">
                Sin costo ni compromiso, incluye visita domiciliaria completa
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center bg-purple-100 mb-4 rounded-full w-12 h-12">
                <UserGroupIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="mb-2 font-semibold text-trust-900 text-lg">15+ Años de Experiencia</h3>
              <p className="text-trust-600 text-sm">
                Más de 500 familias han confiado en nuestros servicios
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}