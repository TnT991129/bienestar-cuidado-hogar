'use client'

import { useLanguage } from '@/contexts/LanguageContext'
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

const getQuickStats = (t: any) => [
  { 
    icon: ClockIcon,
    label: t('contact.quickStats.responseGuaranteed'), 
    value: t('contact.quickStats.responseTime') 
  },
  { 
    icon: ShieldCheckIcon,
    label: t('contact.quickStats.availability'), 
    value: t('contact.quickStats.allDay') 
  },
  { 
    icon: CheckCircleIcon,
    label: t('contact.quickStats.freeEvaluation'), 
    value: t('contact.quickStats.oneHundredPercent') 
  },
  { 
    icon: UserGroupIcon,
    label: t('contact.quickStats.familiesServed'), 
    value: t('contact.quickStats.familiesCount') 
  }
];

const getContactMethods = (t: any) => [
  {
    id: 'emergency',
    name: t('contact.emergencyLine'),
    description: t('contact.emergencyDesc'),
    icon: PhoneIcon,
    contact: '(786) 752-7884',
    action: 'tel:+17867527884',
    actionText: t('contact.callNow'),
    primary: true,
    available: t('contact.available24'),
    badge: t('contact.urgentBadge')
  },
  {
    id: 'whatsapp',
    name: t('contact.whatsappBusiness'),
    description: t('contact.whatsappDesc'),
    icon: ChatBubbleLeftRightIcon,
    contact: '(786) 752-7884',
    action: 'https://wa.me/17867527884',
    actionText: t('contact.sendMessage'),
    primary: false,
    available: t('contact.availableWeek'),
    badge: t('contact.popularBadge')
  },
  {
    id: 'email',
    name: t('contact.emailCorporate'),
    description: t('contact.emailDesc'),
    icon: EnvelopeIcon,
    contact: 'info@bienestarhogar.com',
    action: 'mailto:info@bienestarhogar.com',
    actionText: t('contact.sendEmail'),
    primary: false,
    available: t('contact.availableBusiness'),
    badge: t('contact.officialBadge')
  }
]

const getFormFields = (t: any) => [
  {
    id: 'nombre',
    label: t('contact.form.fields.name'),
    type: 'text' as const,
    placeholder: t('contact.form.placeholders.name'),
    required: true
  },
  {
    id: 'correo',
    label: t('contact.form.fields.email'),
    type: 'email' as const,
    placeholder: t('contact.form.placeholders.email'),
    required: true
  },
  {
    id: 'telefono',
    label: t('contact.form.fields.phone'),
    type: 'tel' as const,
    placeholder: t('contact.form.placeholders.phone'),
    required: true
  },
  {
    id: 'tipoServicio',
    label: t('contact.form.fields.serviceType'),
    type: 'select' as const,
    options: t('contact.form.options.serviceTypes'),
    required: true
  },
  {
    id: 'urgencia',
    label: t('contact.form.fields.urgency'),
    type: 'select' as const,
    options: t('contact.form.options.urgencyLevels'),
    required: true
  },
  {
    id: 'mensaje',
    label: t('contact.form.fields.message'),
    type: 'textarea' as const,
    placeholder: t('contact.form.placeholders.message'),
    required: true,
    rows: 4
  }
]

const getOfficeInfo = (t: any) => ({
  name: t('contact.office.name'),
  address: t('contact.office.address'),
  phone: t('contact.office.phone'),
  email: t('contact.office.email'),
  city: t('contact.office.city'),
  hours: {
    business: t('contact.office.businessHours'),
    weekend: t('contact.office.weekendHours'),
    emergency: t('contact.office.emergencyHours')
  },
  services: t('contact.office.services')
})

export default function ContactPage() {
  const { t } = useLanguage()
  const contactMethods = getContactMethods(t)
  const formFields = getFormFields(t)
  const quickStats = getQuickStats(t)
  const officeInfo = getOfficeInfo(t)
  
  // Helper para rutas de assets en GitHub Pages
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : ''
    return `${basePath}${path}`
  }
  
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-primary-50/20 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-32 overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={getAssetPath("/hero-contacto.svg")} 
            alt="Contacto y comunicación" 
            className="opacity-30 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/75 via-primary-700/65 to-secondary-700/75"></div>
        </div>
        <div className="absolute inset-0">
          <div className="top-10 left-10 absolute bg-white/10 blur-3xl rounded-full w-72 h-72"></div>
          <div className="right-10 bottom-10 absolute bg-secondary-300/10 blur-3xl rounded-full w-96 h-96"></div>
        </div>
        
        <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 font-bold text-4xl md:text-6xl">
              {t('contact.heroSubtitle')}{' '}
            </h1>
            
            <p className="mx-auto mb-12 max-w-3xl text-primary-100 text-xl md:text-2xl leading-relaxed">
              {t('contact.heroDescription')}
            </p>
            
            {/* Emergency CTA */}
            <div className="bg-red-500/20 backdrop-blur-lg mx-auto mb-8 p-8 border border-red-300/30 rounded-3xl max-w-2xl">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-red-500 mr-4 p-3 rounded-full animate-pulse">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">{t('contact.needUrgentHelp')}</h3>
                  <p className="text-red-100">{t('contact.available24Hours')}</p>
                </div>
              </div>
              <a
                href="tel:+17867527884"
                className="group inline-flex items-center bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
              >
                <PhoneIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Llamar: (786) 752-7884
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="z-10 relative -mt-16 py-16">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="bg-white/80 shadow-2xl backdrop-blur-lg mx-auto p-8 border border-white/50 rounded-3xl max-w-5xl">
            <div className="gap-8 grid grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="group text-center">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-2xl w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-1 font-bold text-trust-900 text-3xl">{stat.value}</div>
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
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-trust-900 text-3xl md:text-4xl">
              <span className="gradient-text">{t('contact.contactMethods.title1')}</span> {t('contact.contactMethods.title2')}
            </h2>
            <p className="mx-auto max-w-3xl text-trust-600 text-xl">
              {t('contact.contactMethods.description')}
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-5xl">
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
                    
                    <p className="mb-6 text-trust-600 leading-relaxed">
                      {method.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="mb-2 font-bold text-primary-600 text-lg">
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
      <section className="bg-gradient-to-br from-primary-50/30 to-secondary-50/20 py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-bold text-trust-900 text-3xl md:text-4xl">
                <span className="gradient-text">{t('contact.requestEvaluation.title1')}</span> {t('contact.requestEvaluation.title2')}
              </h2>
              <p className="mx-auto max-w-2xl text-trust-600 text-xl">
                {t('contact.requestEvaluation.description')}
              </p>
            </div>

            <div className="bg-white/80 shadow-2xl backdrop-blur-lg p-8 lg:p-12 border border-white/50 rounded-3xl">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="mb-6 font-bold text-trust-900 text-xl">{t('contact.requestEvaluation.personalInfo')}</h3>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block mb-3 font-medium text-trust-900 text-sm">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block mb-3 font-medium text-trust-900 text-sm">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
                        placeholder="Tu apellido"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.form.labels.phoneRequired')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
                        placeholder="(786) 752-7884"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-3 font-medium text-trust-900 text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Care Information */}
                <div>
                  <h3 className="mb-6 font-bold text-trust-900 text-xl">{t('contact.form.labels.careInfo')}</h3>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label htmlFor="relationship" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.form.labels.relationshipLabel')}
                      </label>
                      <select
                        name="relationship"
                        id="relationship"
                        className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
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
                      <label htmlFor="urgency" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.serviceQuestions.whenNeeded')}
                      </label>
                      <select
                        name="urgency"
                        id="urgency"
                        className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
                      >
                        {t('contact.form.options.urgencyLevels').map((option: string, index: number) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Services of Interest */}
                <div>
                  <label className="block mb-6 font-medium text-trust-900 text-sm">
                    {t('contact.serviceQuestions.servicesInterest')}
                  </label>
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
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
                      <label key={service} className="flex items-center bg-gray-50 hover:bg-primary-50 p-4 rounded-xl transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          className="border-gray-300 rounded focus:ring-2 focus:ring-primary-500 w-5 h-5 text-primary-600"
                        />
                        <span className="ml-3 text-trust-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="message" className="block mb-3 font-medium text-trust-900 text-sm">
                    {t('contact.form.labels.tellUsMore')}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="px-4 py-4 border border-gray-300 focus:border-primary-500 rounded-2xl focus:ring-2 focus:ring-primary-500/20 w-full transition-all duration-300"
                    placeholder={t('contact.form.labels.placeholderDetails')}
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 p-6 border-blue-400 border-l-4 rounded-r-2xl">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 w-5 h-5 text-primary-600"
                    />
                    <label htmlFor="privacy" className="ml-3 text-blue-800 text-sm leading-relaxed">
                      <span className="font-semibold">{t('contact.serviceQuestions.acceptInfo')}</span> {t('contact.serviceQuestions.aboutServices')} 
                      {t('contact.form.labels.acceptCommunications')}{' '}
                      <a href="/privacidad" className="text-blue-600 hover:text-blue-700 underline">
                        {t('contact.form.labels.privacyPolicy')}
                      </a>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-lg hover:shadow-xl px-12 py-5 rounded-2xl font-bold text-white text-lg transition-all duration-300"
                  >
                    <DocumentTextIcon className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                    {t('contact.requestEvaluation.submitButton')}
                  </button>
                  
                  <div className="flex justify-center items-center space-x-6 mt-6 text-trust-600 text-sm">
                    <div className="flex items-center">
                      <CheckCircleIcon className="mr-2 w-5 h-5 text-green-500" />
                      {t('contact.requestEvaluation.freeEvaluation')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="mr-2 w-5 h-5 text-green-500" />
                      {t('contact.requestEvaluation.noCommitment')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="mr-2 w-5 h-5 text-green-500" />
                      {t('contact.responseTime')}
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
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-trust-900 text-3xl md:text-4xl">
              <span className="gradient-text">{t('contact.location.title1')}</span> {t('contact.location.title2')}
            </h2>
            <p className="mx-auto max-w-2xl text-trust-600 text-xl">
              {t('contact.serviceQuestions.professionalService')}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="bg-white/80 shadow-2xl backdrop-blur-lg p-8 lg:p-12 border border-white/50 rounded-3xl">
              <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
                {/* Contact Information */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mr-4 rounded-2xl w-16 h-16">
                      <MapPinIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-trust-900 text-2xl">{officeInfo.name}</h3>
                      <p className="text-trust-600">{officeInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <PhoneIcon className="mr-4 w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold text-trust-900">{t('contact.form.labels.phone')}</div>
                        <a href="tel:+17867527884" className="text-primary-600 hover:text-primary-700 text-lg">
                          {officeInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <EnvelopeIcon className="mr-4 w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold text-trust-900">Email</div>
                        <a href={`mailto:${officeInfo.email}`} className="text-primary-600 hover:text-primary-700">
                          {officeInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ClockIcon className="mt-1 mr-4 w-6 h-6 text-primary-600" />
                      <div>
                        <div className="mb-2 font-semibold text-trust-900">{t('contact.form.labels.scheduleTitle')}</div>
                        <div className="space-y-1 text-trust-600">
                          <p>{officeInfo.hours.business}</p>
                          <p>{officeInfo.hours.weekend}</p>
                          <p className="font-semibold text-red-600">{officeInfo.hours.emergency}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="mb-6 font-bold text-trust-900 text-xl">{t('contact.serviceQuestions.availableServices')}</h4>
                  <div className="space-y-4">
                    {officeInfo.services.map((service: string, index: number) => (
                      <div key={index} className="flex items-center bg-primary-50 p-4 rounded-xl">
                        <CheckCircleIcon className="flex-shrink-0 mr-4 w-6 h-6 text-primary-600" />
                        <span className="font-medium text-trust-700">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-8 p-6 rounded-2xl">
                    <h5 className="mb-3 font-bold text-trust-900">{t('contact.office.coverageTitle')}</h5>
                    <p className="mb-4 text-trust-700">{officeInfo.city}</p>
                    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 text-trust-600 text-sm">
                      {t('contact.office.coverageAreas').map((area: string, index: number) => (
                        <div key={index}>• {area}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators & Final CTA */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-32 text-white">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-12 border border-white/20 rounded-3xl">
              <h2 className="mb-6 font-bold text-3xl md:text-5xl">
                ¿Listo para Comenzar?
              </h2>
              
              <p className="mx-auto mb-10 max-w-2xl text-primary-100 text-xl leading-relaxed">
                Más de 100 familias han confiado en nosotros. 
                Únete a ellas y descubre la tranquilidad que tu familia merece.
              </p>

              {/* Trust indicators */}
              <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 mb-12">
                <div className="text-center">
                  <div className="flex justify-center items-center bg-white/20 mx-auto mb-4 rounded-full w-16 h-16">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-1 font-bold text-2xl">3+</div>
                  <div className="text-primary-100 text-sm">{t('contact.trustIndicators.yearsExperience')}</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center items-center bg-white/20 mx-auto mb-4 rounded-full w-16 h-16">
                    <StarIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-1 font-bold text-2xl">4.9/5</div>
                  <div className="text-primary-100 text-sm">{t('contact.trustIndicators.familySatisfaction')}</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center items-center bg-white/20 mx-auto mb-4 rounded-full w-16 h-16">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-1 font-bold text-2xl">100+</div>
                  <div className="text-primary-100 text-sm">{t('contact.trustIndicators.familiesServed')}</div>
                </div>
              </div>
              
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <a
                  href="tel:+17867527884"
                  className="group inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-primary-600 text-lg transition-all duration-300"
                >
                  <PhoneIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t('contact.finalCTA.callLabel')} (786) 752-7884
                </a>
                
                <a
                  href="https://wa.me/17867527884"
                  className="inline-flex justify-center items-center bg-transparent hover:bg-white/10 px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
                >
                  <ChatBubbleLeftRightIcon className="mr-2 w-5 h-5" />
                  {t('contact.finalCTA.whatsappLabel')}
                </a>
              </div>
              
              <div className="mt-8 text-primary-100 text-sm">
                {t('contact.finalCTA.footer')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}