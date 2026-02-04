'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  PhoneIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline'

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative flex justify-center items-center bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/40 min-h-[85vh] lg:min-h-screen overflow-hidden">
      {/* Enhanced Modern Background decoration */}
      <div className="z-0 absolute inset-0">
        <motion.div 
          className="top-10 left-10 absolute bg-gradient-to-br from-primary-300/40 to-primary-400/40 opacity-60 blur-3xl rounded-full w-96 h-96 filter"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="top-20 right-10 absolute bg-gradient-to-br from-secondary-300/50 to-secondary-400/50 opacity-50 blur-3xl rounded-full w-80 h-80 filter"
          animate={{ 
            y: [0, 25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="bottom-10 left-1/2 absolute bg-gradient-to-br from-primary-200/30 to-secondary-200/30 opacity-40 blur-3xl rounded-full w-72 h-72 filter"
          animate={{ 
            x: [-25, 25, -25],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Modern floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-primary-400/60 to-secondary-400/60 shadow-lg rounded-full w-3 h-3"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="z-10 relative lg:flex lg:items-center lg:gap-x-16 mx-auto px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 max-w-7xl">
        <div className="lg:flex-auto mx-auto lg:mx-0 lg:pr-8 max-w-2xl lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:text-left text-center"
          >
            {/* Enhanced Trust Badges */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 mb-4 sm:mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
            >
              <motion.div 
                className="group flex items-center bg-white/80 hover:bg-white/90 shadow-xl backdrop-blur-lg px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 mr-2 p-1 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600" />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-emerald-700 text-xs transition-colors duration-300">{t('benefits.items.trained.title')}</span>
              </motion.div>
              <motion.div 
                className="group flex items-center bg-white/80 hover:bg-white/90 shadow-xl backdrop-blur-lg px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 mr-2 p-1 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <ClockIcon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-blue-700 text-xs transition-colors duration-300">{t('benefits.items.availability.title')}</span>
              </motion.div>
            </motion.div>

            {/* Enhanced Main Headlines with typing effect */}
            <div className="mb-4 sm:mb-5">
              <motion.h1 
                className="text-shadow font-bold text-6xl sm:text-7xl lg:text-left text-center leading-tight tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.span 
                  className="bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {t('hero.title')}
                </motion.span>
                <br />
                <motion.span 
                  className="text-trust-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {t('hero.subtitle')}
                </motion.span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="mx-auto lg:mx-0 mt-3 sm:mt-4 max-w-xl lg:max-w-2xl text-gray-600 text-sm sm:text-base lg:text-left text-center leading-6 sm:leading-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Enhanced Key Benefits */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {[
                { icon: HeartIcon, textKey: "benefits.items.personalized.title", color: "text-red-500", bgColor: "from-red-100 to-red-200" },
                { icon: ShieldCheckIcon, textKey: "benefits.items.security.title", color: "text-emerald-500", bgColor: "from-emerald-100 to-emerald-200" }
              ].map((item, index) => (
                <motion.div 
                  key={item.textKey}
                  className="group flex items-center space-x-1.5 sm:space-x-2 bg-white/80 hover:bg-white/90 shadow-lg hover:shadow-xl backdrop-blur-lg px-2.5 sm:px-3 py-1.5 sm:py-2 border border-white/30 rounded-2xl transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.08, x: 5 }}
                >
                  <div className={`p-1 bg-gradient-to-br ${item.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${item.color}`} />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-trust-800 text-xs transition-colors duration-300">{t(item.textKey)}</span>
                </motion.div>
              ))}  
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex sm:flex-row flex-col justify-center lg:justify-start gap-3 sm:gap-4 mt-5 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 hover:from-primary-600 via-primary-600 hover:via-primary-700 to-primary-700 hover:to-primary-800 glow-shadow shadow-2xl hover:shadow-primary-500/25 px-4 sm:px-6 py-2.5 sm:py-3 border border-primary-400/50 hover:border-primary-300 rounded-2xl font-bold text-white text-sm sm:text-base transition-all duration-300"
                >
                  <div className="bg-white/20 p-1 rounded-lg">
                    <HeartIcon className="w-4 h-4" />
                  </div>
                  {t('nav.freeEvaluation')}
                </Link>
              </motion.div>
              
              <motion.a
                href="https://wa.me/17867527884"
                className="group flex items-center space-x-2 bg-white/80 hover:bg-white/90 shadow-lg hover:shadow-xl backdrop-blur-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-white/30 rounded-2xl text-gray-700 hover:text-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-emerald-100 group-hover:from-emerald-200 to-emerald-200 group-hover:to-emerald-300 shadow-sm p-1.5 rounded-full transition-all duration-300"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <PhoneIcon className="w-4 h-4 text-emerald-600" />
                </motion.div>
                <div>
                  <div className="font-semibold group-hover:text-primary-700 text-xs transition-colors duration-300">{t('nav.callNow')}</div>
                  <div className="font-bold text-primary-600 group-hover:text-primary-700 text-sm transition-colors duration-300">(786) 752-7884</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Enhanced Video CTA */}
            <motion.div 
              className="flex justify-center lg:justify-start mt-4 sm:mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <motion.button 
                className="group flex items-center space-x-2 bg-gradient-to-r from-primary-50/80 hover:from-primary-100/90 to-secondary-50/80 hover:to-secondary-100/90 shadow-lg hover:shadow-xl backdrop-blur-lg px-4 py-2 border border-primary-200/50 rounded-2xl text-primary-600 hover:text-primary-700 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-primary-100 group-hover:from-primary-200 to-primary-200 group-hover:to-primary-300 p-1 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <PlayCircleIcon className="w-5 h-5 text-primary-600" />
                </motion.div>
                <div className="text-left">
                  <div className="font-medium group-hover:font-semibold text-xs transition-all duration-300">{t('hero.videoText1')}</div>
                  <div className="font-bold text-sm">{t('hero.videoText2')}</div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="lg:flex-grow lg:flex-shrink-0 mt-8 sm:mt-10 lg:mt-0 lg:pl-6">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Hero Image */}
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl rounded-2xl overflow-hidden">
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : ''}/imagen-hero.png`}
                  alt="Acompañante capacitada con adulto mayor sonriendo en el hogar"
                  className="rounded-2xl w-full h-auto object-cover"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Floating cards with glassmorphism */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="-top-2 sm:-top-3 -left-2 sm:-left-3 absolute bg-white/90 hover:bg-white/95 shadow-2xl backdrop-blur-lg p-2 sm:p-3 border border-white/30 rounded-xl max-w-[160px] sm:max-w-[180px] transition-all duration-300"
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="flex justify-center items-center bg-gradient-to-br from-secondary-100 to-secondary-200 shadow-sm rounded-lg w-6 sm:w-8 h-6 sm:h-8">
                    <span className="text-sm sm:text-lg">👩‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-trust-800 text-xs">{t('hero.caregiverName')}</p>
                    <p className="text-trust-600 text-xs">{t('hero.caregiverRole')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card with glassmorphism */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="top-12 sm:top-14 -left-2 sm:-left-3 absolute bg-white/90 hover:bg-white/95 shadow-2xl backdrop-blur-lg p-2 sm:p-3 border border-white/30 rounded-xl max-w-[120px] sm:max-w-[140px] transition-all duration-300"
              >
                <div className="gap-1.5 sm:gap-2 grid grid-cols-2 text-center">
                  <div>
                    <div className="font-bold text-primary-600 text-sm sm:text-base">3+</div>
                    <div className="text-trust-600 text-xs">{t('hero.yearsLabel')}</div>
                  </div>
                  <div>
                    <div className="font-bold text-primary-600 text-sm sm:text-base">100+</div>
                    <div className="text-trust-600 text-xs">{t('hero.familiesLabel')}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="-right-2 sm:-right-3 -bottom-2 sm:-bottom-3 absolute bg-white/90 hover:bg-white/95 shadow-2xl backdrop-blur-lg p-2 sm:p-3 border border-white/30 rounded-xl max-w-[140px] sm:max-w-[160px] transition-all duration-300"
              >
                <div className="flex items-center space-x-1.5">
                  <div className="flex -space-x-1">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-primary-300 shadow-sm border-2 border-white rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">⭐</span>
                    </div>
                    <div className="flex justify-center items-center bg-gradient-to-br from-secondary-200 to-secondary-300 shadow-sm border-2 border-white rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">⭐</span>
                    </div>
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-primary-300 shadow-sm border-2 border-white rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">⭐</span>
                    </div>
                  </div>
                  <div className="ml-1">
                    <p className="font-semibold text-trust-800 text-xs">100+</p>
                    <p className="text-trust-600 text-xs">{t('hero.satisfiedLabel')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}