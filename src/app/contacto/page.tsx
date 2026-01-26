import type { Metadata } from 'next'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contacto - Bienestar y Cuidado en el Hogar | Evaluación Gratuita 24/7',
  description: 'Contáctanos para una evaluación gratuita de acompañamiento en el hogar. Disponible 24/7 para emergencias. Llama al (786) 752-7884 o solicita información sin compromiso.',
}

const contactMethods = [
  {
    id: 'emergency',
    name: 'Línea de Emergencia',
    description: 'Disponible 24/7 para situaciones urgentes',
    icon: PhoneIcon,
    contact: '(786) 752-7884',
    action: 'tel:+17867527884',
    actionText: 'Llamar Ahora',
    primary: true,
    available: '24 horas • 7 días',
    badge: 'URGENTE'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'Chat rápido con respuesta inmediata',
    icon: ChatBubbleLeftRightIcon,
    contact: '(786) 752-7884',
    action: 'https://wa.me/17867527884',
    actionText: 'Enviar Mensaje',
    primary: false,
    available: 'Lun-Dom: 7AM-10PM',
    badge: 'POPULAR'
  },
  {
    id: 'email',
    name: 'Email Corporativo',
    description: 'Para consultas detalladas y documentación',
    icon: EnvelopeIcon,
    contact: 'info@bienestarhogar.com',
    action: 'mailto:info@bienestarhogar.com',
    actionText: 'Escribir Email',
    primary: false,
    available: 'Respuesta < 2 horas',
    badge: null
  }
]

const officeInfo = {
  name: 'Oficina Principal Florida',
  address: 'Servicio a Domicilio en Toda Florida',
  city: 'Miami-Dade, Broward, Palm Beach',
  phone: '(786) 752-7884',
  email: 'info@bienestarhogar.com',
  hours: {
    business: 'Lunes - Viernes: 8:00 AM - 8:00 PM',
    weekend: 'Sábados y Domingos: 9:00 AM - 6:00 PM',
    emergency: 'Línea de emergencia: 24/7'
  },
  services: ['Evaluaciones Domiciliarias', 'Consultas Virtuales', 'Servicios de Emergencia', 'Seguimiento Continuo']
}

const quickStats = [
  { label: 'Respuesta Garantizada', value: '< 2 Horas', icon: ClockIcon },
  { label: 'Disponibilidad', value: '24/7', icon: ShieldCheckIcon },
  { label: 'Evaluación Gratuita', value: '100%', icon: HeartIcon },
  { label: 'Familias Atendidas', value: '100+', icon: UserGroupIcon }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50/20">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30 rounded-full text-white/90 text-sm mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              Contáctanos Hoy
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Estamos Aquí para{' '}
              <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                Ayudarte
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Evaluación gratuita, disponibilidad 24/7 para emergencias y respuesta inmediata 
              a todas tus consultas sobre el cuidado de tu ser querido.
            </p>
            
            {/* Emergency CTA */}
            <div className="bg-red-500/20 backdrop-blur-lg border border-red-300/30 p-8 rounded-3xl mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-500 p-3 rounded-full animate-pulse mr-4">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Necesitas Ayuda Urgente?</h3>
                  <p className="text-red-100">Disponible las 24 horas del día</p>
                </div>
              </div>
              <a
                href="tel:+17867527884"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 group"
              >
                <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Llamar: (786) 752-7884
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="bg-white/80 backdrop-blur-lg border border-white/50 shadow-2xl p-8 rounded-3xl max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-trust-900 mb-1">{stat.value}</div>
                    <div className="text-trust-600 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
              <span className="gradient-text">Formas de</span> Contacto
            </h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              Múltiples opciones de comunicación para brindarte la mejor atención y respuesta rápida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <div key={method.id} className="group">
                  <div className={`relative bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl hover:shadow-2xl p-8 rounded-3xl transition-all duration-500 hover:scale-105 h-full ${
                    method.primary ? 'ring-2 ring-primary-500' : ''
                  }`}>
                    {method.badge && (
                      <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold ${
                        method.badge === 'URGENTE' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {method.badge}
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 ${
                        method.primary 
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                          : 'bg-gradient-to-br from-trust-500 to-primary-500'
                      }`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-trust-900 text-xl leading-tight">
                          {method.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-trust-600 mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="font-bold text-primary-600 text-lg mb-2">
                        {method.contact}
                      </div>
                      <div className="text-trust-500 text-sm">
                        {method.available}
                      </div>
                    </div>
                    
                    <a
                      href={method.action}
                      className={`inline-flex items-center justify-center w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                        method.primary
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg hover:shadow-xl'
                          : 'bg-trust-100 hover:bg-primary-100 text-trust-700 border border-trust-200'
                      }`}
                    >
                      {method.actionText}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50/30 to-secondary-50/20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
                <span className="gradient-text">Solicita tu</span> Evaluación Gratuita
              </h2>
              <p className="text-xl text-trust-600 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg border border-white/50 shadow-2xl p-8 lg:p-12 rounded-3xl">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-trust-900 mb-6">Información Personal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block font-medium text-trust-900 text-sm mb-3">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block font-medium text-trust-900 text-sm mb-3">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="Tu apellido"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-medium text-trust-900 text-sm mb-3">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="(786) 752-7884"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-medium text-trust-900 text-sm mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Care Information */}
                <div>
                  <h3 className="text-xl font-bold text-trust-900 mb-6">Información del Cuidado</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="relationship" className="block font-medium text-trust-900 text-sm mb-3">
                        Relación con la persona a cuidar
                      </label>
                      <select
                        name="relationship"
                        id="relationship"
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
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
                      <label htmlFor="urgency" className="block font-medium text-trust-900 text-sm mb-3">
                        ¿Cuándo necesitas el servicio?
                      </label>
                      <select
                        name="urgency"
                        id="urgency"
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      >
                        <option>Inmediatamente (24-48 horas)</option>
                        <option>Esta semana</option>
                        <option>En las próximas 2 semanas</option>
                        <option>El próximo mes</option>
                        <option>Estoy investigando opciones</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Services of Interest */}
                <div>
                  <label className="block font-medium text-trust-900 text-sm mb-6">
                    Servicios de Interés (selecciona todos los que apliquen)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Compañía y apoyo emocional',
                      'Asistencia personal diaria',
                      'Apoyo en tareas del hogar',
                      'Recordatorios y rutinas',
                      'Acompañamiento fuera del hogar',
                      'Supervisión general de seguridad',
                      'Apoyo post-hospitalario',
                      'Acompañamiento especializado'
                    ].map((service) => (
                      <label key={service} className="flex items-center p-4 bg-gray-50 hover:bg-primary-50 rounded-xl transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-trust-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="message" className="block font-medium text-trust-900 text-sm mb-3">
                    Cuéntanos más sobre tus necesidades
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="Describe la situación actual, necesidades específicas, horarios preferidos, ubicación en Florida, etc..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-2xl">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="ml-3 text-blue-800 text-sm leading-relaxed">
                      <span className="font-semibold">Acepto recibir información</span> sobre servicios de acompañamiento no médico. 
                      Entiendo que puedo cancelar estas comunicaciones en cualquier momento.{' '}
                      <a href="/privacidad" className="text-blue-600 hover:text-blue-700 underline">
                        Ver política de privacidad
                      </a>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl px-12 py-5 rounded-2xl font-bold text-white text-lg transition-all duration-300 group"
                  >
                    <DocumentTextIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                    Solicitar Evaluación Gratuita
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-trust-600">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      Evaluación 100% gratuita
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      Sin compromiso
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      Respuesta en 2 horas
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
              <span className="gradient-text">Nuestra</span> Ubicación
            </h2>
            <p className="text-xl text-trust-600 max-w-2xl mx-auto">
              Servicio profesional de acompañamiento a domicilio en toda Florida
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg border border-white/50 shadow-2xl p-8 lg:p-12 rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                      <MapPinIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-900">{officeInfo.name}</h3>
                      <p className="text-trust-600">{officeInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <PhoneIcon className="w-6 h-6 text-primary-600 mr-4" />
                      <div>
                        <div className="font-semibold text-trust-900">Teléfono</div>
                        <a href="tel:+17867527884" className="text-primary-600 hover:text-primary-700 text-lg">
                          {officeInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <EnvelopeIcon className="w-6 h-6 text-primary-600 mr-4" />
                      <div>
                        <div className="font-semibold text-trust-900">Email</div>
                        <a href={`mailto:${officeInfo.email}`} className="text-primary-600 hover:text-primary-700">
                          {officeInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ClockIcon className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                      <div>
                        <div className="font-semibold text-trust-900 mb-2">Horarios de Atención</div>
                        <div className="space-y-1 text-trust-600">
                          <p>{officeInfo.hours.business}</p>
                          <p>{officeInfo.hours.weekend}</p>
                          <p className="text-red-600 font-semibold">{officeInfo.hours.emergency}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-xl font-bold text-trust-900 mb-6">Servicios Disponibles</h4>
                  <div className="space-y-4">
                    {officeInfo.services.map((service, index) => (
                      <div key={index} className="flex items-center p-4 bg-primary-50 rounded-xl">
                        <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0" />
                        <span className="text-trust-700 font-medium">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl">
                    <h5 className="font-bold text-trust-900 mb-3">Áreas de Cobertura</h5>
                    <p className="text-trust-700 mb-4">{officeInfo.city}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-trust-600">
                      <div>• Miami-Dade County</div>
                      <div>• Broward County</div>
                      <div>• Palm Beach County</div>
                      <div>• Y áreas circundantes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators & Final CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-12 rounded-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para Comenzar?
              </h2>
              
              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Más de 100 familias han confiado en nosotros. 
                Únete a ellas y descubre la tranquilidad que tu familia merece.
              </p>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-2xl mb-1">3+</div>
                  <div className="text-primary-100 text-sm">Años de Experiencia</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <StarIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-2xl mb-1">4.9/5</div>
                  <div className="text-primary-100 text-sm">Satisfacción Familiar</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-2xl mb-1">100+</div>
                  <div className="text-primary-100 text-sm">Familias Atendidas</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+17867527884"
                  className="inline-flex items-center justify-center bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-primary-600 text-lg transition-all duration-300 group"
                >
                  <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Llamar: (786) 752-7884
                </a>
                
                <a
                  href="https://wa.me/17867527884"
                  className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
              
              <div className="text-primary-100 text-sm mt-8">
                <strong>Evaluación 100% gratuita</strong> • <strong>Sin compromiso</strong> • <strong>Disponible 24/7</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}