'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { 
  HeartIcon,
  HomeIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const getCompanionshipAreas = (t: any) => {
  const areas = t('services.areas')
  const iconMap = {
    'personalDaily': HeartIcon,
    'companionshipEmotional': ChatBubbleLeftRightIcon,
    'homeSupport': HomeIcon,
    'medicationReminders': ClockIcon,
    'transportation': UserGroupIcon,
    'safetyMonitoring': ShieldCheckIcon
  }
  
  return areas.map((area: any, index: number) => ({
    ...area,
    icon: Object.values(iconMap)[index] || HeartIcon
  }))
}


const getWorkingProcess = (t: any) => t('services.workingProcess')

export default function ServiciosPage() {
  const { t } = useLanguage()
  const companionshipAreas = getCompanionshipAreas(t)
  const workingProcess = getWorkingProcess(t)
  
  // Helper para rutas de assets en GitHub Pages
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : ''
    return `${basePath}${path}`
  }
  
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-primary-50/20 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-22 overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={getAssetPath("/hero-servicios.svg")} 
            alt="Servicios de cuidado personalizado" 
            className="opacity-35 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/60 to-secondary-700/70"></div>
        </div>
        <div className="absolute inset-0">
          <div className="top-10 left-10 absolute bg-white/10 blur-3xl rounded-full w-72 h-72"></div>
          <div className="right-10 bottom-10 absolute bg-secondary-300/10 blur-3xl rounded-full w-96 h-96"></div>
        </div>
        
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm mb-4 sm:mb-6 px-3 sm:px-4 py-2 border border-white/30 rounded-full text-white/90 text-xs sm:text-sm">
              <HeartIcon className="mr-2 w-3 sm:w-4 h-3 sm:h-4" />
              {t('services.heroTitle')}
            </div>
            
            <h1 className="mb-6 sm:mb-8 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {t('services.heroMainTitle')}{' '}
              <span className="bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white text-transparent block sm:inline">
                {t('services.heroPersonalized')}
              </span>
            </h1>
            
            <p className="mx-auto mb-8 sm:mb-12 max-w-3xl text-primary-100 text-lg sm:text-xl md:text-2xl leading-relaxed px-2">
              {t('services.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white/70 shadow-2xl backdrop-blur-lg p-6 sm:p-8 lg:p-12 border border-white/40 rounded-3xl">
              <div className="mb-6 sm:mb-8 text-center">
                <h2 className="mb-4 sm:mb-6 font-bold text-trust-900 text-2xl sm:text-3xl md:text-4xl">
                  {t('services.approachTitle')}
                </h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-trust-700 text-base sm:text-lg leading-relaxed">
                <p>
                  {t('services.approachDescription1')}
                </p>
                
                <p>
                  {t('services.approachDescription2')}
                </p>
                
                <p>
                  {t('services.approachDescription3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Acompañamiento */}
      <section className="bg-gradient-to-br from-primary-50/30 to-secondary-50/20 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 sm:mb-6 font-bold text-trust-900 text-2xl sm:text-3xl md:text-4xl">
              <span className="gradient-text">{t('services.areasTitle1')}</span> {t('services.areasTitle2')}
            </h2>
            <p className="mx-auto max-w-3xl text-trust-600 text-lg sm:text-xl px-4">
              {t('services.areasDescription')}
            </p>
          </div>

          <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {companionshipAreas.map((area: any, index: number) => {
              const IconComponent = area.icon
              return (
                <div key={area.id} className="group bg-white/80 shadow-xl hover:shadow-2xl backdrop-blur-lg p-6 sm:p-8 border border-white/50 rounded-3xl hover:scale-105 transition-all duration-500">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-primary-600 mr-3 sm:mr-4 rounded-2xl w-12 sm:w-14 h-12 sm:h-14 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-trust-900 text-base sm:text-lg leading-tight">
                        {area.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="mb-4 sm:mb-6 text-trust-600 text-sm sm:text-base leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3">
                    {area.services.map((service: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="flex-shrink-0 mt-0.5 mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5 text-primary-600" />
                        <span className="text-trust-700 text-xs sm:text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {area.important && (
                    <div className="bg-amber-50 mt-4 sm:mt-6 p-3 sm:p-4 border-amber-400 border-l-4 rounded-r-lg">
                      <div className="flex items-start">
                        <ExclamationTriangleIcon className="flex-shrink-0 mt-0.5 mr-2 w-4 sm:w-5 h-4 sm:h-5 text-amber-600" />
                        <p className="font-medium text-amber-800 text-xs sm:text-sm">{area.important}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 sm:mb-6 font-bold text-trust-900 text-2xl sm:text-3xl md:text-4xl">
              <span className="gradient-text">{t('services.howWorkTitle1')}</span> {t('services.howWorkTitle2')}
            </h2>
            <p className="mx-auto max-w-2xl text-trust-600 text-lg sm:text-xl px-4">
              {t('services.howWorkDescription')}
            </p>
          </div>

          <div className="gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {workingProcess.map((step: any, index: number) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl group-hover:shadow-2xl mx-auto rounded-2xl w-16 sm:w-20 h-16 sm:h-20 group-hover:scale-110 transition-all duration-300">
                    <span className="font-bold text-white text-xl sm:text-2xl">{step.step}</span>
                  </div>
                  {index < workingProcess.length - 1 && (
                    <>
                      <div className="hidden lg:block top-8 sm:top-10 left-full absolute bg-gradient-to-r from-primary-200 to-transparent w-full h-0.5"></div>
                      <div className="lg:hidden flex justify-center mt-4">
                        <div className="bg-primary-200 rounded-full w-1 h-8"></div>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="mb-2 sm:mb-3 font-bold text-trust-900 text-base sm:text-lg">{step.title}</h3>
                <p className="text-trust-600 text-sm leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Personalizados */}
      <section className="bg-gradient-to-br from-trust-50 to-primary-50/20 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white/80 shadow-2xl backdrop-blur-lg p-6 sm:p-8 lg:p-12 border border-white/50 rounded-3xl">
              <div className="flex justify-center items-center mb-6 sm:mb-8">
                <DocumentTextIcon className="w-12 sm:w-16 h-12 sm:h-16 text-primary-600" />
              </div>
              
              <h2 className="mb-4 sm:mb-6 font-bold text-trust-900 text-2xl sm:text-3xl md:text-4xl">
                <span className="gradient-text">Planes Completamente</span> <span className="block sm:inline">Personalizados</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 mx-auto max-w-3xl text-trust-700 text-base sm:text-lg text-left">
                <div className="flex items-start">
                  <CheckCircleIcon className="flex-shrink-0 mt-1 mr-3 sm:mr-4 w-5 sm:w-6 h-5 sm:h-6 text-primary-600" />
                  <div>
                    <p>{t('services.noStandardPlans')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="flex-shrink-0 mt-1 mr-3 sm:mr-4 w-5 sm:w-6 h-5 sm:h-6 text-primary-600" />
                  <div>
                    <p>{t('services.flexibleSchedules')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="flex-shrink-0 mt-1 mr-3 sm:mr-4 w-5 sm:w-6 h-5 sm:h-6 text-primary-600" />
                  <div>
                    <p>{t('services.features.personalizedLevel')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="flex-shrink-0 mt-1 mr-3 sm:mr-4 w-5 sm:w-6 h-5 sm:h-6 text-primary-600" />
                  <div>
                    <p>{t('services.features.combinableServices')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Legal/Aclaratoria */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <div className="bg-blue-50 p-4 sm:p-6 lg:p-8 border-blue-400 border-l-4 rounded-r-3xl">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="flex-shrink-0 mt-1 mr-3 sm:mr-4 w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                <div>
                  <h3 className="mb-3 sm:mb-4 font-bold text-blue-900 text-xl sm:text-2xl">
                    {t('services.legal.title')}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4 text-blue-800">
                    <p className="font-semibold text-base sm:text-lg">
                      {t('services.legal.description')}
                    </p>
                    
                    <div className="gap-4 sm:gap-6 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-bold text-sm sm:text-base">{t('services.legal.notProvided.title')}</h4>
                        <ul className="space-y-1 text-xs sm:text-sm">
                          {t('services.legal.notProvided.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 font-bold text-sm sm:text-base">{t('services.legal.provided.title')}</h4>
                        <ul className="space-y-1 text-xs sm:text-sm">
                          {t('services.legal.provided.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <p className="pt-3 sm:pt-4 border-blue-200 border-t font-medium text-sm sm:text-base">
                      <strong>{t('services.legal.disclaimer')}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-16 sm:py-24 lg:py-32 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-6 sm:p-8 lg:p-12 border border-white/20 rounded-3xl">
              <HeartIcon className="mx-auto mb-6 sm:mb-8 w-12 sm:w-16 h-12 sm:h-16 text-primary-100" />
              
              <h2 className="mb-4 sm:mb-6 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {t('services.cta.title')}
              </h2>
              
              <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-primary-100 text-lg sm:text-xl leading-relaxed px-2">
                {t('services.cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="/contacto"
                  className="group inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-primary-600 text-base sm:text-lg transition-all duration-300"
                >
                  <DocumentTextIcon className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                  {t('services.cta.buttons.consultation')}
                </a>
                
                <a
                  href="https://wa.me/17867527884"
                  className="group inline-flex justify-center items-center bg-transparent hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-white text-base sm:text-lg transition-all duration-300"
                >
                  <PhoneIcon className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                  {t('services.cta.buttons.call')}
                </a>
              </div>
              
              <div className="text-primary-100 text-xs sm:text-sm">
                <p className="mb-2">
                  <strong>{t('services.cta.footer')}</strong>
                </p>
                <p>
                  {t('services.cta.license')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}