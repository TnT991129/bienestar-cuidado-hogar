'use client'

import { motion } from 'framer-motion'
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
      <section className="relative flex items-center bg-gradient-to-br from-primary-50/30 to-secondary-50/20 min-h-screen sm:min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={getAssetPath("/servicios.webp")} 
            alt="Servicios de cuidado personalizado" 
            className="opacity-70 w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs - mejor responsive */}
          <div className="top-10 sm:top-20 left-4 sm:left-20 absolute bg-gradient-to-br from-primary-300/30 to-primary-400/30 blur-3xl rounded-full w-48 sm:w-96 h-48 sm:h-96 animate-float"></div>
          <div className="top-16 sm:top-32 right-4 sm:right-16 absolute bg-gradient-to-br from-secondary-300/25 to-secondary-400/25 blur-3xl rounded-full w-40 sm:w-80 h-40 sm:h-80 animate-float-delayed"></div>
          <div className="bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 absolute bg-gradient-to-br from-primary-200/20 to-secondary-200/20 blur-3xl rounded-full w-32 sm:w-64 h-32 sm:h-64 animate-bounce-slow"></div>
          
          {/* Geometric shapes - mejor responsive */}
          <div className="top-1/4 right-1/4 absolute bg-white/10 backdrop-blur-sm rounded-2xl w-16 sm:w-32 h-16 sm:h-32 rotate-45 animate-pulse"></div>
          <div className="bottom-1/3 left-1/4 absolute bg-primary-100/20 backdrop-blur-sm rounded-full w-12 sm:w-24 h-12 sm:h-24 animate-bounce-slow delay-300"></div>
        </div>
        
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl py-8 sm:py-12 lg:py-0">
          <div className="flex lg:flex-row flex-col items-center gap-8 sm:gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className="flex-1 lg:text-left text-center">
              <div className="inline-flex items-center bg-white/90 shadow-xl hover:shadow-2xl backdrop-blur-lg mb-6 px-4 py-2.5 border border-white/40 rounded-full text-gray-700 text-sm transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 mr-3 p-1.5 rounded-full">
                  <HeartIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{t('services.heroTitle')}</span>
              </div>
              
              <h1 className="mb-6 sm:mb-8 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="block bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 text-transparent">
                  {t('services.heroMainTitle')}
                </span>
                <span className="block mt-1 sm:mt-2 text-trust-800">
                  {t('services.heroPersonalized')}
                </span>
              </h1>
              
              <p className="mx-auto lg:mx-0 mb-8 sm:mb-10 max-w-2xl text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                {t('services.heroDescription')}
              </p>

              {/* CTA Buttons */}
              <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button className="bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-xl hover:shadow-2xl px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base hover:scale-105 transition-all duration-300 transform">
                  {t('services.heroButtons.allServices')}
                </button>
                <button className="bg-white/90 hover:bg-white backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-200 hover:border-primary-300 rounded-full font-semibold text-primary-700 hover:text-primary-800 text-sm sm:text-base hover:scale-105 transition-all duration-300 transform">
                  {t('services.heroButtons.freeConsultation')}
                </button>
              </div>
            </div>

            {/* Stats/Features Panel */}
            <div className="w-full lg:w-auto lg:min-w-[320px]">
              <div className="bg-white/80 shadow-2xl backdrop-blur-lg p-6 sm:p-8 border border-white/40 rounded-3xl">
                <h3 className="mb-4 sm:mb-6 font-bold text-trust-800 text-lg sm:text-xl text-center">{t('services.featuredServices.title')}</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4 hover:bg-primary-50/50 p-2 sm:p-3 rounded-xl transition-colors">
                    <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-1.5 sm:p-2 rounded-lg">
                      <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{t('services.featuredServices.companionship')}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 hover:bg-secondary-50/50 p-2 sm:p-3 rounded-xl transition-colors">
                    <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 p-1.5 sm:p-2 rounded-lg">
                      <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-600" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{t('services.featuredServices.homeAssistance')}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 hover:bg-primary-50/50 p-2 sm:p-3 rounded-xl transition-colors">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-1.5 sm:p-2 rounded-lg">
                      <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{t('services.featuredServices.available247')}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 hover:bg-blue-50/50 p-2 sm:p-3 rounded-xl transition-colors">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-1.5 sm:p-2 rounded-lg">
                      <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{t('services.featuredServices.trainedStaff')}</span>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 mt-4 sm:mt-6 p-3 sm:p-4 rounded-2xl">
                  <div className="flex justify-between items-center text-center">
                    <div>
                      <div className="font-bold text-primary-700 text-lg sm:text-2xl">100+</div>
                      <div className="text-gray-600 text-xs">{t('services.stats.families')}</div>
                    </div>
                    <div>
                      <div className="font-bold text-secondary-700 text-lg sm:text-2xl">5+</div>
                      <div className="text-gray-600 text-xs">{t('services.stats.years')}</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-700 text-lg sm:text-2xl">24/7</div>
                      <div className="text-gray-600 text-xs">{t('services.stats.available')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
            <p className="mx-auto px-4 max-w-3xl text-trust-600 text-lg sm:text-xl">
              {t('services.areasDescription')}
            </p>
          </div>

          <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {companionshipAreas.map((area: any, index: number) => {
              const IconComponent = area.icon
              return (
                <div key={`area-${area.id}-${index}`} className="group bg-white/80 shadow-xl hover:shadow-2xl backdrop-blur-lg p-6 sm:p-8 border border-white/50 rounded-3xl hover:scale-105 transition-all duration-500">
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
      <section className="relative bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/10 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="top-20 right-10 absolute bg-gradient-to-br from-primary-200/20 to-primary-300/20 blur-3xl rounded-full w-64 h-64 animate-pulse"></div>
          <div className="bottom-20 left-10 absolute bg-gradient-to-br from-secondary-200/15 to-secondary-300/15 blur-3xl rounded-full w-72 h-72 animate-pulse delay-1000"></div>
        </div>

        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 text-center"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-4 px-4 py-2 border border-primary-200/30 rounded-full font-semibold text-primary-600 text-sm">
              <span>Proceso Simple</span>
            </div>
            <h2 className="mb-4 sm:mb-6 font-bold text-trust-900 text-2xl sm:text-3xl md:text-4xl text-shadow">
              <span className="gradient-text">{t('services.howWorkTitle1')}</span> {t('services.howWorkTitle2')}
            </h2>
            <p className="mx-auto px-4 max-w-2xl text-trust-600 text-lg sm:text-xl">
              {t('services.howWorkDescription')}
            </p>
          </motion.div>

          {/* Mobile/Tablet: Vertical flow */}
          <div className="lg:hidden">
            {workingProcess.map((step: any, index: number) => (
              <motion.div 
                key={`mobile-step-${index}`} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-4 ${index < workingProcess.length - 1 ? 'mb-12 pb-12' : ''}`}
              >
                {/* Vertical connecting line */}
                {index < workingProcess.length - 1 && (
                  <motion.div 
                    className="top-16 left-8 z-0 absolute bg-gradient-to-b from-primary-300 to-secondary-300 w-0.5"
                    style={{ height: 'calc(100% + 1rem)' }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: (index * 0.15) + 0.4 }}
                  >
                    {/* Animated dot */}
                    <motion.div
                      className="left-1/2 absolute bg-secondary-500 rounded-full w-2 h-2 -translate-x-1/2"
                      initial={{ top: 0 }}
                      whileInView={{ top: '100%' }}
                      transition={{ 
                        duration: 1.5, 
                        delay: (index * 0.15) + 1,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )}

                {/* Step Circle */}
                <div className="relative flex-shrink-0">
                  <motion.div 
                    className="flex justify-center items-center bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 shadow-2xl rounded-2xl w-16 h-16"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="font-bold text-white text-xl">{step.step}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <motion.h3 
                    className="mb-2 font-bold text-trust-900 text-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.15) + 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-trust-600 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.15) + 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden lg:block">
            <div className="gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {workingProcess.map((step: any, index: number) => (
                <motion.div 
                  key={`desktop-step-${index}`} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group text-center relative"
                >
                  {/* Animated Progress Line */}
                  {index < workingProcess.length - 1 && (
                    <motion.div 
                      className="top-8 left-8 z-0 absolute h-0.5"
                      style={{ 
                        width: 'calc(100% + 2rem)',
                        left: '4rem'
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: (index * 0.2) + 0.6 }}
                    >
                      <div className="bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full w-full h-full">
                        {/* Animated dot */}
                        <motion.div
                          className="top-1/2 absolute bg-secondary-500 rounded-full w-2 h-2 -translate-y-1/2"
                          initial={{ left: '0%' }}
                          whileInView={{ left: 'calc(100% - 8px)' }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (index * 0.2) + 1.4,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step Circle */}
                  <motion.div 
                    className="z-10 relative flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl group-hover:shadow-2xl mx-auto mb-4 sm:mb-6 rounded-2xl w-16 sm:w-20 h-16 sm:h-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="font-bold text-white text-xl sm:text-2xl">{step.step}</span>
                  </motion.div>

                  <motion.h3 
                    className="mb-2 sm:mb-3 font-bold text-trust-900 text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="px-2 text-trust-600 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
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
              
              <p className="mx-auto mb-8 sm:mb-10 px-2 max-w-2xl text-primary-100 text-lg sm:text-xl leading-relaxed">
                {t('services.cta.description')}
              </p>
              
              <div className="flex sm:flex-row flex-col justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="/contacto"
                  className="group inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-primary-600 text-sm sm:text-base lg:text-lg transition-all duration-300"
                >
                  <DocumentTextIcon className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                  {t('services.cta.buttons.consultation')}
                </a>
                
                <a
                  href="https://wa.me/17867527884"
                  className="group inline-flex justify-center items-center bg-transparent hover:bg-white/10 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-white text-sm sm:text-base lg:text-lg transition-all duration-300"
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