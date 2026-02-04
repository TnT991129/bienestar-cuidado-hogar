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
      
      {/* Hero Section - Redesigned */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-20 sm:py-24 lg:py-32 overflow-hidden text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="top-1/4 left-10 absolute bg-gradient-to-br from-white/10 to-white/5 blur-3xl rounded-full w-72 h-72 animate-pulse"></div>
          <div className="top-1/3 right-20 absolute bg-gradient-to-br from-secondary-300/20 to-secondary-400/10 blur-3xl rounded-full w-96 h-96 animate-float"></div>
          <div className="bottom-1/4 left-1/3 absolute bg-gradient-to-br from-primary-300/15 to-primary-400/10 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000"></div>
          
          {/* Geometric shapes */}
          <div className="top-20 right-1/4 absolute bg-white/5 backdrop-blur-sm rounded-2xl w-32 h-32 rotate-45 animate-bounce-slow"></div>
          <div className="bottom-20 left-1/4 absolute bg-secondary-200/10 backdrop-blur-sm rounded-full w-24 h-24 animate-float-delayed"></div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-white/10 shadow-xl backdrop-blur-lg mb-6 px-6 py-3 border border-white/20 rounded-full font-semibold text-white text-sm">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 p-1.5 rounded-full">
                <StarIcon className="w-4 h-4 text-white" />
              </div>
              <span>{t('contact.premium.serviceBadge')}</span>
            </div>

            <h1 className="mb-6 font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="block bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white text-transparent">
                {t('contact.premium.connectTitle1')}
              </span>
              <span className="block mt-2 text-secondary-100">
                {t('contact.premium.connectTitle2')}
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-3xl text-primary-100 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              {t('contact.premium.contactDescription')}
            </p>

            {/* Quick Action Cards */}
            <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mb-10 max-w-4xl">
              {/* Emergency Contact */}
              <div className="group bg-red-500/20 hover:bg-red-500/30 shadow-xl hover:shadow-2xl backdrop-blur-xl p-6 border border-red-300/30 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center items-center bg-red-500 mx-auto mb-4 rounded-full w-12 h-12 animate-pulse">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-white text-lg">{t('contact.premium.emergencies')}</h3>
                <p className="mb-4 text-red-100 text-sm">{t('contact.premium.available247')}</p>
                <a
                  href="tel:+17867527884"
                  className="inline-flex justify-center items-center bg-red-600 hover:bg-red-700 py-2 rounded-xl w-full font-semibold text-white text-sm transition-colors"
                >
                  {t('contact.premium.callNowButton')}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="group bg-green-500/20 hover:bg-green-500/30 shadow-xl hover:shadow-2xl backdrop-blur-xl p-6 border border-green-300/30 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center items-center bg-green-500 mx-auto mb-4 rounded-full w-12 h-12">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-white text-lg">{t('contact.premium.whatsappLabel')}</h3>
                <p className="mb-4 text-green-100 text-sm">{t('contact.premium.immediateResponse')}</p>
                <a
                  href="https://wa.me/17867527884"
                  className="inline-flex justify-center items-center bg-green-600 hover:bg-green-700 py-2 rounded-xl w-full font-semibold text-white text-sm transition-colors"
                >
                  {t('contact.premium.whatsappButton')}
                </a>
              </div>

              {/* Email */}
              <div className="group bg-blue-500/20 hover:bg-blue-500/30 shadow-xl hover:shadow-2xl backdrop-blur-xl p-6 border border-blue-300/30 rounded-2xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="flex justify-center items-center bg-blue-500 mx-auto mb-4 rounded-full w-12 h-12">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-white text-lg">{t('contact.premium.emailLabel')}</h3>
                <p className="mb-4 text-blue-100 text-sm">{t('contact.premium.formalQueries')}</p>
                <a
                  href="mailto:info@bienestarhogar.com"
                  className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 py-2 rounded-xl w-full font-semibold text-white text-sm transition-colors"
                >
                  {t('contact.premium.writeEmail')}
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex sm:flex-row flex-col justify-center items-center gap-8 text-primary-100 text-sm">
              <div className="flex items-center">
                <CheckCircleIcon className="mr-2 w-5 h-5 text-green-400" />
                {t('contact.premium.freeConsultation')}
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="mr-2 w-5 h-5 text-green-400" />
                {t('contact.premium.noCommitment')}
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="mr-2 w-5 h-5 text-green-400" />
                {t('contact.premium.response30min')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="z-10 relative -mt-20 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-white/95 to-white/85 shadow-2xl backdrop-blur-xl mx-auto p-8 sm:p-10 border border-white/50 rounded-3xl max-w-6xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-4 px-4 py-2 border border-primary-200/30 rounded-full font-semibold text-primary-600 text-sm">
                <ShieldCheckIcon className="mr-2 w-4 h-4" />
                {t('contact.premium.trustMetrics')}
              </div>
              <h2 className="font-bold bg-clip-text bg-gradient-to-r from-trust-800 to-primary-700 text-transparent text-2xl sm:text-3xl">
                {t('contact.premium.familyTrust')}
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="gap-6 sm:gap-8 grid grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="group text-center">
                    <div className="relative mx-auto mb-4">
                      {/* Outer ring */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-secondary-200/50 rounded-full w-20 h-20 animate-pulse"></div>
                      {/* Icon container */}
                      <div className="relative flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl rounded-full w-16 h-16 group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="mb-2 font-bold bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent text-2xl sm:text-3xl">{stat.value}</div>
                    <div className="text-trust-600 text-xs sm:text-sm leading-tight">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Bottom accent */}
            <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 mx-auto mt-8 rounded-full w-24 h-1"></div>
          </div>
        </div>
      </section>

      {/* Premium Contact Methods */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-6 px-4 py-2 border border-primary-200/30 rounded-full font-semibold text-primary-600 text-sm">
              <ChatBubbleLeftRightIcon className="mr-2 w-4 h-4" />
              {t('contact.premium.multipleChannels')}
            </div>
            <h2 className="mb-6 font-bold text-trust-900 text-3xl sm:text-4xl lg:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent">{t('contact.premium.chooseHow')}</span>{' '}
              <span className="text-trust-800">{t('contact.premium.contactUs')}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-trust-600 text-lg sm:text-xl leading-relaxed">
              {t('contact.premium.comfortPriority')}
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="gap-6 sm:gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-6xl">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const isPopular = method.badge === t('contact.popularBadge')
              const isUrgent = method.badge === t('contact.urgentBadge')
              
              return (
                <div key={method.id} className={`group relative ${isPopular ? 'lg:scale-105' : ''}`}>
                  <div className={`relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border shadow-xl hover:shadow-2xl p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:scale-105 h-full ${
                    method.primary 
                      ? 'border-primary-300/50 ring-2 ring-primary-200' 
                      : 'border-white/50'
                  }`}>
                    
                    {/* Premium Badge */}
                    {method.badge && (
                      <div className={`absolute -top-3 -right-3 px-3 py-1.5 rounded-2xl text-xs font-bold shadow-lg ${
                        isUrgent 
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse' 
                          : isPopular
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      }`}>
                        {method.badge}
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        {/* Outer glow ring for popular */}
                        {isPopular && (
                          <div className="absolute -inset-2 bg-gradient-to-r from-green-400/30 to-green-500/30 blur-lg rounded-2xl animate-pulse"></div>
                        )}
                        <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                          isUrgent
                            ? 'bg-gradient-to-br from-red-500 to-red-600'
                            : isPopular 
                            ? 'bg-gradient-to-br from-green-500 to-green-600' 
                            : method.primary 
                            ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                            : 'bg-gradient-to-br from-trust-500 to-primary-500'
                        }`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 ml-4">
                        <h3 className="font-bold text-trust-900 text-xl leading-tight">
                          {method.name}
                        </h3>
                        <p className="text-trust-600 text-sm mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center bg-gradient-to-r from-primary-50/50 to-transparent p-3 rounded-xl">
                        <div className={`w-2 h-2 rounded-full mr-3 ${isUrgent ? 'bg-red-500 animate-pulse' : 'bg-primary-500'}`}></div>
                        <div>
                          <div className="font-bold text-primary-700 text-lg">
                            {method.contact}
                          </div>
                          <div className="text-trust-500 text-sm">
                            {method.available}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <a
                      href={method.action}
                      className={`group/btn inline-flex items-center justify-center w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                        method.primary || isUrgent
                          ? isUrgent 
                            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg hover:shadow-xl'
                          : isPopular
                          ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gradient-to-r from-trust-100 to-primary-100 hover:from-primary-100 hover:to-secondary-100 text-trust-700 border border-trust-200 hover:border-primary-300'
                      }`}
                    >
                      <span className="group-hover/btn:scale-105 transition-transform">
                        {method.actionText}
                      </span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-primary-50/50 to-secondary-50/50 backdrop-blur-sm mx-auto mt-12 p-6 border border-primary-200/30 rounded-2xl max-w-4xl">
            <div className="flex sm:flex-row flex-col items-center gap-4 text-center sm:text-left">
              <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full w-12 h-12">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-bold text-trust-900 text-lg">{t('contact.premium.responseGuarantee')}</h4>
                <p className="text-trust-600">{t('contact.premium.responseDescription')}</p>
              </div>
              <div className="text-primary-600 text-sm font-medium">
                {t('contact.premium.emergency247')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Form */}
      <section className="relative bg-gradient-to-br from-primary-50/30 via-white/50 to-secondary-50/30 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="top-20 right-20 absolute bg-gradient-to-br from-primary-200/20 to-primary-300/20 blur-3xl rounded-full w-72 h-72 animate-pulse"></div>
          <div className="bottom-20 left-20 absolute bg-gradient-to-br from-secondary-200/15 to-secondary-300/15 blur-3xl rounded-full w-96 h-96 animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-6 px-6 py-3 border border-primary-200/30 rounded-full font-semibold text-primary-600">
                <DocumentTextIcon className="mr-2 w-5 h-5" />
                {t('contact.premium.personalizedEvaluation')}
              </div>
              <h2 className="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
                <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent">
                  {t('contact.premium.letsStart')}
                </span>{' '}
                <span className="text-trust-800">{t('contact.premium.yourStory')}</span>
              </h2>
              <p className="mx-auto max-w-3xl text-trust-600 text-lg sm:text-xl leading-relaxed">
                {t('contact.premium.uniqueFamily')}
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-gradient-to-br from-white/95 to-white/85 shadow-2xl backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-6 sm:p-8 border-b border-primary-200/20">
                <div className="flex items-center">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mr-4 rounded-2xl w-12 h-12">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-trust-900 text-xl">{t('contact.premium.freeConsultationForm')}</h3>
                    <p className="text-trust-600 text-sm">{t('contact.premium.threeMinutes')}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-primary-100 to-secondary-100 mr-4 p-2 rounded-lg">
                      <UserGroupIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h4 className="font-bold text-trust-900 text-lg">{t('contact.premium.personalInfo')}</h4>
                  </div>
                  
                  <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2">
                    <div className="group">
                      <label htmlFor="firstName" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.premium.firstName')} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          required
                          className="px-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300"
                          placeholder={t('contact.premium.firstName')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="lastName" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.premium.lastName')} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          required
                          className="px-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300"
                          placeholder={t('contact.premium.lastNamePlaceholder')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="phone" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.form.fields.phone')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <PhoneIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          className="pl-12 pr-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300"
                          placeholder={t('contact.premium.phonePlaceholder')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block mb-3 font-medium text-trust-900 text-sm">
                        Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          className="pl-12 pr-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300"
                          placeholder={t('contact.premium.emailPlaceholder')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Care Information */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-secondary-100 to-primary-100 mr-4 p-2 rounded-lg">
                      <HeartIcon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <h4 className="font-bold text-trust-900 text-lg">{t('contact.premium.companionshipInfo')}</h4>
                  </div>
                  
                  <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2">
                    <div className="group">
                      <label htmlFor="relationship" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.premium.relationshipLabel')}
                      </label>
                      <div className="relative">
                        <select
                          name="relationship"
                          id="relationship"
                          className="px-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300 appearance-none bg-white"
                        >
                          <option value="">{t('contact.premium.selectOption')}</option>
                          <option value="hijo">{t('contact.premium.relationshipOptions.son')}</option>
                          <option value="nieto">{t('contact.premium.relationshipOptions.grandchild')}</option>
                          <option value="conyuge">{t('contact.premium.relationshipOptions.spouse')}</option>
                          <option value="hermano">{t('contact.premium.relationshipOptions.sibling')}</option>
                          <option value="familiar">{t('contact.premium.relationshipOptions.relative')}</option>
                          <option value="amigo">{t('contact.premium.relationshipOptions.friend')}</option>
                          <option value="otro">{t('contact.premium.relationshipOptions.other')}</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="urgency" className="block mb-3 font-medium text-trust-900 text-sm">
                        {t('contact.premium.whenStart')}
                      </label>
                      <div className="relative">
                        <select
                          name="urgency"
                          id="urgency"
                          className="px-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300 appearance-none bg-white"
                        >
                          <option value="">{t('contact.premium.selectUrgency')}</option>
                          <option value="inmediato">{t('contact.premium.urgencyOptions.immediate')}</option>
                          <option value="esta-semana">{t('contact.premium.urgencyOptions.thisWeek')}</option>
                          <option value="este-mes">{t('contact.premium.urgencyOptions.thisMonth')}</option>
                          <option value="planificando">{t('contact.premium.urgencyOptions.planning')}</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Interest */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-trust-100 to-primary-100 mr-4 p-2 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-trust-600" />
                    </div>
                    <h4 className="font-bold text-trust-900 text-lg">{t('contact.serviceQuestions.availableServicesInterest')}</h4>
                  </div>
                  
                  <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                    {t('contact.premium.serviceOptions').map((service: string, index: number) => (
                      <label key={index} className="group flex items-center bg-gradient-to-r from-gray-50 to-primary-50/30 hover:from-primary-50 hover:to-secondary-50/30 p-4 border border-gray-200 hover:border-primary-200 rounded-xl transition-all duration-300 cursor-pointer">
                        <input
                          type="checkbox"
                          className="border-gray-300 rounded focus:ring-2 focus:ring-primary-400 w-5 h-5 text-primary-600 transition-colors"
                        />
                        <span className="ml-3 text-trust-700 group-hover:text-trust-800 transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block mb-3 font-medium text-trust-900 text-sm">
                    {t('contact.premium.specificDetails')}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="px-4 py-4 border border-gray-200 focus:border-primary-400 rounded-2xl focus:ring-2 focus:ring-primary-400/20 w-full transition-all duration-300 group-hover:border-primary-300 resize-none"
                      placeholder={t('contact.premium.detailsPlaceholder')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity"></div>
                  </div>
                </div>

                {/* Privacy */}
                <div className="bg-gradient-to-r from-blue-50/50 to-primary-50/50 p-6 border border-blue-200/30 rounded-2xl">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 border-gray-300 rounded focus:ring-2 focus:ring-primary-400 w-5 h-5 text-primary-600 transition-colors"
                    />
                    <label htmlFor="privacy" className="ml-4 text-trust-700 text-sm leading-relaxed">
                      <span className="font-semibold">{t('contact.serviceQuestions.acceptInfo')}</span> {t('contact.serviceQuestions.aboutServices')}. 
                      {t('contact.premium.checkOur')}{' '}
                      <a href="/privacidad" className="text-primary-600 hover:text-primary-700 underline transition-colors">
                        {t('contact.form.labels.privacyPolicy')}
                      </a>.
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-xl hover:shadow-2xl px-8 sm:px-12 py-5 rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105"
                  >
                    <DocumentTextIcon className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                    {t('contact.premium.requestEvaluation')}
                  </button>
                  
                  <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:gap-6 mt-6 text-trust-600 text-sm">
                    <div className="flex items-center">
                      <CheckCircleIcon className="mr-2 w-4 h-4 text-green-500" />
                      {t('contact.quickStats.oneHundredPercent')} {t('contact.quickStats.freeEvaluation')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="mr-2 w-4 h-4 text-green-500" />
                      {t('contact.premium.noCommitment')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="mr-2 w-4 h-4 text-green-500" />
                      {t('contact.premium.response30min')}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Office Information */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-6 px-6 py-3 border border-primary-200/30 rounded-full font-semibold text-primary-600">
              <MapPinIcon className="mr-2 w-5 h-5" />
              {t('contact.premium.locationAndCoverage')}
            </div>
            <h2 className="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent">
                {t('contact.premium.servingCommunity1')}
              </span>{' '}
              <span className="text-trust-800">{t('contact.premium.servingCommunity2')}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-trust-600 text-lg sm:text-xl leading-relaxed">
              {t('contact.premium.servingDescription')}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-white/95 to-white/85 shadow-2xl backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden">
              <div className="gap-0 grid grid-cols-1 lg:grid-cols-2">
                
                {/* Contact Information */}
                <div className="p-8 sm:p-10 lg:p-12">
                  {/* Office Header */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-lg rounded-2xl animate-pulse"></div>
                      <div className="relative flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl w-16 h-16">
                        <MapPinIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="font-bold text-trust-900 text-2xl">{officeInfo.name}</h3>
                      <p className="text-trust-600 text-lg">{officeInfo.address}</p>
                    </div>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="group flex items-center bg-gradient-to-r from-primary-50/50 to-transparent hover:from-primary-50 p-4 rounded-2xl transition-all duration-300">
                      <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-primary-600 mr-4 rounded-xl w-12 h-12">
                        <PhoneIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-trust-900 text-sm">{t('contact.premium.primaryPhone')}</div>
                        <a 
                          href="tel:+17867527884" 
                          className="font-bold text-primary-600 hover:text-primary-700 text-xl transition-colors"
                        >
                          {officeInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-center bg-gradient-to-r from-secondary-50/50 to-transparent hover:from-secondary-50 p-4 rounded-2xl transition-all duration-300">
                      <div className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-secondary-600 mr-4 rounded-xl w-12 h-12">
                        <EnvelopeIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-trust-900 text-sm">{t('contact.premium.corporateEmail')}</div>
                        <a 
                          href={`mailto:${officeInfo.email}`} 
                          className="font-bold text-secondary-600 hover:text-secondary-700 text-xl transition-colors"
                        >
                          {officeInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-trust-50/50 to-transparent p-4 rounded-2xl">
                      <div className="flex items-start">
                        <div className="flex justify-center items-center bg-gradient-to-br from-trust-500 to-trust-600 mt-1 mr-4 rounded-xl w-12 h-12">
                          <ClockIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="mb-3 font-semibold text-trust-900 text-sm">{t('contact.premium.businessHours')}</div>
                          <div className="space-y-2 text-trust-600">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{t('contact.premium.office')}</span>
                              <span>{officeInfo.hours.business}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{t('contact.premium.weekends')}</span>
                              <span>{officeInfo.hours.weekend}</span>
                            </div>
                            <div className="flex justify-between items-center border-red-200 border-t pt-2">
                              <span className="font-bold text-red-700">{t('contact.premium.emergenciesSchedule')}</span>
                              <span className="font-bold text-red-600">{officeInfo.hours.emergency}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services & Coverage */}
                <div className="bg-gradient-to-br from-primary-50/30 to-secondary-50/20 p-8 sm:p-10 lg:p-12">
                  <h4 className="mb-6 font-bold text-trust-900 text-2xl">{t('contact.premium.availableServices')}</h4>
                  
                  <div className="space-y-4 mb-8">
                    {officeInfo.services.map((service: string, index: number) => (
                      <div key={index} className="group flex items-center bg-white/60 hover:bg-white/80 p-4 border border-white/50 hover:border-primary-200 rounded-xl transition-all duration-300">
                        <div className="flex-shrink-0 mr-4">
                          <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg w-10 h-10 group-hover:scale-110 transition-transform">
                            <CheckCircleIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <span className="font-medium text-trust-800 text-sm sm:text-base">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coverage Area */}
                  <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-6 border border-white/50 rounded-2xl">
                    <h5 className="mb-4 font-bold text-trust-900 text-lg">{t('contact.premium.coverageArea')}</h5>
                    <p className="mb-4 font-semibold text-primary-700 text-xl">{officeInfo.city}</p>
                    
                    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 text-trust-700 text-sm">
                      {t('contact.office.coverageAreas').map((area: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-primary-500 mr-2 rounded-full w-2 h-2"></div>
                          {area}
                        </div>
                      ))}
                    </div>

                    {/* Quick Action */}
                    <div className="flex sm:flex-row flex-col gap-3 mt-6">
                      <a
                        href="tel:+17867527884"
                        className="flex justify-center items-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 py-3 px-6 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
                      >
                        <PhoneIcon className="mr-2 w-4 h-4" />
                        {t('contact.premium.callNowButton')}
                      </a>
                      <a
                        href="https://wa.me/17867527884"
                        className="flex justify-center items-center bg-green-600 hover:bg-green-700 py-3 px-6 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
                      >
                        <ChatBubbleLeftRightIcon className="mr-2 w-4 h-4" />
                        {t('contact.premium.whatsappLabel')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Final CTA */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-32 lg:py-40 overflow-hidden text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="top-1/4 left-10 absolute bg-gradient-to-br from-white/10 to-white/5 blur-3xl rounded-full w-96 h-96 animate-pulse"></div>
          <div className="top-1/3 right-20 absolute bg-gradient-to-br from-secondary-300/20 to-secondary-400/10 blur-3xl rounded-full w-80 h-80 animate-float"></div>
          <div className="bottom-1/4 left-1/3 absolute bg-gradient-to-br from-primary-300/15 to-primary-400/10 blur-3xl rounded-full w-72 h-72 animate-pulse delay-1000"></div>
          
          {/* Premium geometric elements */}
          <div className="top-20 right-1/4 absolute bg-white/5 backdrop-blur-sm rounded-2xl w-32 h-32 rotate-45 animate-bounce-slow"></div>
          <div className="bottom-20 left-1/4 absolute bg-secondary-200/10 backdrop-blur-sm rounded-full w-24 h-24 animate-float-delayed"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="bg-white/10 shadow-2xl backdrop-blur-xl p-8 sm:p-12 lg:p-16 border border-white/20 rounded-3xl">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 shadow-xl backdrop-blur-lg mb-6 px-6 py-3 border border-yellow-300/30 rounded-full font-semibold text-yellow-200">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 p-1.5 rounded-full">
                  <StarIcon className="w-4 h-4 text-white" />
                </div>
                <span>{t('contact.premium.premiumQuality')}</span>
              </div>

              <h2 className="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                <span className="block bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white text-transparent">
                  {t('contact.premium.readyFor')}
                </span>
                <span className="block mt-2 text-secondary-100">
                  {t('contact.premium.bestCare')}
                </span>
              </h2>
              
              <p className="mx-auto mb-10 max-w-3xl text-primary-100 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                {t('contact.premium.hundredFamilies')}
              </p>

              {/* Premium Trust Indicators */}
              <div className="gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-3 mb-12">
                <div className="group text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 blur-xl rounded-full animate-pulse"></div>
                    <div className="relative flex justify-center items-center bg-white/20 backdrop-blur-lg mx-auto rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                      <ShieldCheckIcon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="mb-2 font-bold text-3xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 text-transparent">3+</div>
                  <div className="text-primary-100 text-sm">{t('contact.premium.yearsExperience')}</div>
                </div>
                
                <div className="group text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 blur-xl rounded-full animate-pulse delay-300"></div>
                    <div className="relative flex justify-center items-center bg-white/20 backdrop-blur-lg mx-auto rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                      <StarIcon className="w-10 h-10 text-yellow-300" />
                    </div>
                  </div>
                  <div className="mb-2 font-bold text-3xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 text-transparent">4.9/5</div>
                  <div className="text-primary-100 text-sm">{t('contact.premium.familySatisfaction')}</div>
                </div>
                
                <div className="group text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-secondary-400/30 to-primary-400/30 blur-xl rounded-full animate-pulse delay-500"></div>
                    <div className="relative flex justify-center items-center bg-white/20 backdrop-blur-lg mx-auto rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                      <UserGroupIcon className="w-10 h-10 text-secondary-200" />
                    </div>
                  </div>
                  <div className="mb-2 font-bold text-3xl sm:text-4xl bg-clip-text bg-gradient-to-r from-secondary-200 to-primary-200 text-transparent">100+</div>
                  <div className="text-primary-100 text-sm">{t('contact.premium.familiesServed')}</div>
                </div>
              </div>
              
              {/* Premium Action Buttons */}
              <div className="flex sm:flex-row flex-col justify-center gap-4 sm:gap-6 mb-8">
                <a
                  href="tel:+17867527884"
                  className="group inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-xl hover:shadow-2xl px-8 py-5 rounded-2xl font-bold text-primary-600 text-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 mr-3 p-2 rounded-full group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>{t('contact.premium.callPhone')}</span>
                </a>
                
                <a
                  href="https://wa.me/17867527884"
                  className="group inline-flex justify-center items-center bg-transparent hover:bg-white/10 px-8 py-5 border-2 border-white/40 hover:border-white/60 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 mr-3 p-2 rounded-full group-hover:scale-110 transition-transform">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>{t('contact.premium.whatsappDirect')}</span>
                </a>
              </div>
              
              {/* Premium Footer */}
              <div className="bg-white/5 backdrop-blur-lg mt-10 p-6 border border-white/20 rounded-2xl">
                <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:gap-8 text-primary-100 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-5 h-5 text-green-400" />
                    {t('contact.premium.freeEvaluation100')}
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-5 h-5 text-green-400" />
                    {t('contact.premium.guaranteedResponse')}
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-5 h-5 text-green-400" />
                    {t('contact.premium.available247Emergency')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}