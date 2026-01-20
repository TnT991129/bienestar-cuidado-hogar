'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, PhoneIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nuestro Equipo', href: '/equipo' },
  { name: 'Contacto', href: '/contacto' },
]

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const pathname = usePathname()

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setLanguageMenuOpen(false)
    // Aquí implementarías la lógica real de cambio de idioma
  }

  return (
    <>
      <motion.header 
        className="top-0 z-50 sticky bg-white bg-opacity-95 shadow-lg backdrop-blur-md border-gray-200 border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="flex justify-between items-center mx-auto px-6 lg:px-12 py-3 max-w-8xl" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center -m-1.5 p-1.5">
            <motion.div 
              className="flex lg:justify-center lg:items-center"
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : ''}/logo.png`}
                alt="Bienestar y Cuidado en el Hogar Logo"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain"
              />
            </motion.div>
          </Link>
        </div>

        <div className="lg:hidden flex">
          <motion.button
            type="button"
            className="inline-flex justify-center items-center hover:bg-gray-100 -m-2.5 p-2.5 rounded-md text-gray-700 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        </div>

        <motion.div 
          className="hidden lg:flex lg:gap-x-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-all duration-300 relative group ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.name}
                <motion.div
                  className="-bottom-1 left-0 absolute bg-blue-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"
                  initial={false}
                  animate={{ width: pathname === item.href ? '100%' : '0%' }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Actions Container - Separated from navigation */}
        <motion.div 
          className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12 lg:pl-8 lg:border-gray-200 lg:border-l"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Language Selector */}
          <div className="relative">
            <motion.button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 hover:from-gray-100 to-gray-100 hover:to-gray-200 shadow-sm hover:shadow-md px-3 py-2 border border-gray-300 hover:border-gray-400 rounded-xl font-medium text-gray-700 hover:text-gray-900 text-sm transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <LanguageIcon className="w-4 h-4 text-gray-600" />
              <span className="text-base">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
              <span className="font-semibold text-sm">{languages.find(lang => lang.code === currentLanguage)?.name}</span>
              <svg 
                className="w-3 h-3 text-gray-500 transition-transform duration-300"
                style={{ transform: languageMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
            
            <AnimatePresence>
              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="right-0 z-50 absolute bg-white shadow-2xl backdrop-blur-sm mt-3 border border-gray-200 rounded-2xl ring-1 ring-black/10 w-48 overflow-hidden"
                >
                  <div className="py-1">
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
                          currentLanguage === lang.code
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 3, scale: 1.02 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {currentLanguage === lang.code && (
                          <motion.span 
                            className="ml-auto text-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            ✓
                          </motion.span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Phone CTA */}
          <motion.a
            href="tel:+1234567890"
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-lg px-4 py-2 rounded-xl font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <PhoneIcon className="w-5 h-5" />
            <span>Llamar Ahora</span>
          </motion.a>

          {/* Main CTA */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 hover:from-blue-600 to-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg px-6 py-2.5 rounded-xl font-semibold text-white transition-all duration-300"
            >
              Evaluación Gratuita
            </Link>
          </motion.div>
        </motion.div>
      </nav>
      </motion.header>

      {/* Mobile menu - Outside of header for full screen coverage */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden z-[9999] fixed inset-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="right-0 z-[9999] fixed inset-y-0 bg-white shadow-xl px-6 py-6 w-full max-w-sm overflow-y-auto"
            >
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3 -m-1.5 p-1.5">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg w-8 h-8">
                    <span className="font-bold text-white text-sm">CS</span>
                  </div>
                  <div>
                    <span className="font-bold text-trust-800 text-lg">Cuidado</span>
                    <span className="ml-1 font-bold text-primary-600 text-lg">Senior</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 p-2.5 rounded-md text-trust-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flow-root mt-6">
                <div className="-my-6 divide-y divide-trust-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                          pathname === item.href
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-trust-900 hover:bg-trust-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-4 py-6">
                    {/* Language Selector Mobile */}
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium text-gray-700 text-sm">Idioma:</span>
                      <div className="flex space-x-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                              currentLanguage === lang.code
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <a
                      href="tel:+1234567890"
                      className="flex justify-center items-center space-x-2 bg-secondary-600 hover:bg-secondary-700 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      <span>Llamar Ahora</span>
                    </a>
                    
                    <Link
                      href="/contacto"
                      className="flex justify-center items-center w-full btn-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Evaluación Gratuita
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}