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
    <section className="relative flex justify-center items-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 min-h-screen overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="z-0 absolute inset-0">
        <motion.div 
          className="top-10 left-10 absolute bg-blue-200 opacity-40 blur-2xl rounded-full w-96 h-96 filter"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="top-20 right-10 absolute bg-emerald-200 opacity-40 blur-2xl rounded-full w-80 h-80 filter"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="bottom-10 left-1/2 absolute bg-purple-200 opacity-30 blur-2xl rounded-full w-72 h-72 filter"
          animate={{ 
            x: [-20, 20, -20],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 opacity-30 rounded-full w-2 h-2"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="z-10 relative lg:flex lg:items-center lg:gap-x-16 mx-auto px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
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
                className="flex items-center bg-white bg-opacity-95 shadow-xl backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 rounded-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ShieldCheckIcon className="mr-2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-500" />
                <span className="font-bold text-gray-700 text-xs">Cuidadores Certificados</span>
              </motion.div>
              <motion.div 
                className="flex items-center bg-white bg-opacity-95 shadow-xl backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 rounded-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ClockIcon className="mr-2 w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                <span className="font-bold text-gray-700 text-xs">Disponible 24/7</span>
              </motion.div>
            </motion.div>

            {/* Enhanced Main Headlines with typing effect */}
            <div className="mb-4 sm:mb-5">
              <motion.h1 
                className="font-bold text-gray-800 text-6xl sm:text-7xl lg:text-left text-center leading-tight tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.span 
                  className="bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {t('hero.title')}
                </motion.span>
                <br />
                <motion.span 
                  className="text-gray-800"
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
                { icon: HeartIcon, text: "Trato Humano y Respetuoso", color: "text-red-500" },
                { icon: ShieldCheckIcon, text: "Personal Verificado", color: "text-emerald-500" },
                { icon: ClockIcon, text: "Disponibilidad 24/7", color: "text-blue-500" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-white bg-opacity-70 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${item.color}`} />
                  <span className="font-semibold text-gray-700 text-xs">{item.text}</span>
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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 hover:from-blue-600 to-blue-600 hover:to-blue-700 shadow-xl hover:shadow-2xl px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-transparent hover:border-blue-300 rounded-2xl font-bold text-white text-sm sm:text-base transition-all duration-300"
                >
                  <HeartIcon className="w-5 h-5" />
                  {t('nav.freeEvaluation')}
                </Link>
              </motion.div>
              
              <motion.a
                href="tel:+1234567890"
                className="group flex items-center space-x-2 bg-white bg-opacity-70 hover:bg-opacity-80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-2xl text-gray-700 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="bg-emerald-100 group-hover:bg-emerald-200 p-1.5 rounded-full transition-colors duration-300"
                  whileHover={{ rotate: 15 }}
                >
                  <PhoneIcon className="w-4 h-4 text-emerald-600" />
                </motion.div>
                <div>
                  <div className="font-semibold text-xs">Llamar Ahora</div>
                  <div className="font-bold text-blue-600 text-sm">(234) 567-890</div>
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
                className="group flex items-center space-x-2 bg-blue-50 bg-opacity-80 hover:bg-opacity-80 px-4 py-2 border border-blue-100 rounded-2xl text-blue-600 hover:text-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <PlayCircleIcon className="w-6 h-6" />
                </motion.div>
                <div className="text-left">
                  <div className="font-medium text-xs">Ver cómo cuidamos</div>
                  <div className="font-bold text-sm">a tu familia</div>
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
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop&crop=center"
                  alt="Cuidadora profesional con adulto mayor sonriendo en el hogar"
                  className="rounded-2xl w-full h-auto object-cover"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Floating cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="-top-2 sm:-top-3 -left-2 sm:-left-3 absolute bg-white shadow-lg p-2 sm:p-3 border border-gray-100 rounded-xl max-w-[160px] sm:max-w-[180px]"
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="flex justify-center items-center bg-secondary-100 rounded-lg w-6 sm:w-8 h-6 sm:h-8">
                    <span className="text-sm sm:text-lg">👩‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-trust-800 text-xs">María González</p>
                    <p className="text-trust-600 text-xs">Cuidadora Certificada</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card - positioned below María González */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="top-12 sm:top-14 -left-2 sm:-left-3 absolute bg-white shadow-lg p-2 sm:p-3 border border-gray-100 rounded-xl max-w-[120px] sm:max-w-[140px]"
              >
                <div className="gap-1.5 sm:gap-2 grid grid-cols-2 text-center">
                  <div>
                    <div className="font-bold text-primary-600 text-sm sm:text-base">15+</div>
                    <div className="text-trust-600 text-xs">Años</div>
                  </div>
                  <div>
                    <div className="font-bold text-primary-600 text-sm sm:text-base">500+</div>
                    <div className="text-trust-600 text-xs">Familias</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="-right-2 sm:-right-3 -bottom-2 sm:-bottom-3 absolute bg-white shadow-lg p-2 sm:p-3 border border-gray-100 rounded-xl max-w-[140px] sm:max-w-[160px]"
              >
                <div className="flex items-center space-x-1.5">
                  <div className="flex -space-x-1">
                    <div className="flex justify-center items-center bg-primary-200 border-2 border-white rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">⭐</span>
                    </div>
                    <div className="flex justify-center items-center bg-secondary-200 border-2 border-white rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">⭐</span>
                    </div>
                    <div className="flex justify-center items-center bg-primary-200 border-2 border-white rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">⭐</span>
                    </div>
                  </div>
                  <div className="ml-1">
                    <p className="font-semibold text-trust-800 text-xs">500+</p>
                    <p className="text-trust-600 text-xs">Satisfechas</p>
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