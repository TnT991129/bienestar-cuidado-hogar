'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, PhoneIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const languages = [
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  ]

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/sobre-nosotros' },
    { name: t('nav.services'), href: '/servicios' },
    { name: t('nav.team'), href: '/equipo' },
    { name: t('nav.contact'), href: '/contacto' },
  ]

  const handleLanguageChange = (langCode: 'es' | 'en') => {
    setLanguage(langCode)
    setLanguageMenuOpen(false)
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
                className="w-2/3 lg:w-48 object-contain"
              />
            </motion.div>
          </Link>
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          {/* Mobile Phone CTA */}
          <motion.a
            href="https://wa.me/17867527884"
            className="flex justify-center items-center bg-gradient-to-r from-green-500 hover:from-green-600 to-green-600 hover:to-green-700 shadow-md hover:shadow-lg rounded-full w-10 h-10 text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <PhoneIcon className="w-5 h-5" />
          </motion.a>

          {/* Modern Hamburger Menu Button */}
          <motion.button
            type="button"
            className="group inline-flex relative justify-center items-center bg-gradient-to-r from-primary-50 hover:from-primary-100 to-secondary-50 hover:to-secondary-100 shadow-sm hover:shadow-md -m-2.5 p-3 border border-primary-200/50 rounded-xl text-primary-700 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="sr-only">Abrir menú principal</span>
            <div className="relative">
              <Bars3Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <div className="-top-1 -right-1 absolute bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full w-2 h-2 animate-pulse"></div>
            </div>
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
              <span className="text-base">{languages.find(lang => lang.code === language)?.flag}</span>
              <span className="font-semibold text-sm">{languages.find(lang => lang.code === language)?.name}</span>
              <svg 
                className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${
                  languageMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
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
                          language === lang.code
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
                        {language === lang.code && (
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
            href="https://wa.me/17867527884"
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-lg px-4 py-2 rounded-xl font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <PhoneIcon className="w-5 h-5" />
            <span>{t('nav.callNow')}</span>
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
              {t('nav.freeEvaluation')}
            </Link>
          </motion.div>
        </motion.div>
      </nav>
      </motion.header>

      {/* Enhanced Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden z-[9999] fixed inset-0"
          >
            {/* Enhanced Backdrop with Blur Effect */}
            <motion.div 
              className="fixed inset-0 bg-gradient-to-br from-black/60 via-primary-900/20 to-secondary-900/20 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modern Slide-in Menu */}
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="right-0 z-[9999] fixed inset-y-0 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 shadow-2xl backdrop-blur-xl px-0 border-white/20 border-l w-full sm:max-w-sm overflow-y-auto"
            >
              {/* Enhanced Header */}
              <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700 shadow-lg px-6 py-8">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="-top-4 -right-4 absolute bg-white/10 blur-2xl rounded-full w-24 h-24"></div>
                  <div className="-bottom-4 -left-4 absolute bg-secondary-300/20 blur-3xl rounded-full w-32 h-32"></div>
                </div>
                
                <div className="relative flex justify-between items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center"
                  >
                    <Link href="/" className="group flex items-center -m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                      <div className="relative bg-white/20 shadow-lg backdrop-blur-sm px-4 py-3 border border-white/30 rounded-2xl">
                        <div className="text-center">
                          <h1 className="font-bold text-white text-lg leading-tight group-hover:scale-105 transition-transform duration-300">
                            <span className="bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white text-transparent">
                              Bienestar y Cuidado
                            </span>
                          </h1>
                          <p className="mt-0.5 font-medium text-white/90 text-xs tracking-wide">
                            EN EL HOGAR
                          </p>
                        </div>
                        <div className="-top-1 -right-1 absolute bg-gradient-to-r from-green-400 to-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.button
                    type="button"
                    className="group bg-white/20 hover:bg-white/30 shadow-lg backdrop-blur-sm -m-2.5 p-3 border border-white/30 rounded-xl text-white transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <XMarkIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </motion.button>
                </div>
              </div>

              {/* Menu Content */}
              <div className="relative flex flex-col px-6 py-8 h-full">
                {/* Navigation Links */}
                <div className="space-y-1 mb-8">
                  <motion.h3 
                    className="mb-4 font-medium text-trust-500 text-sm uppercase tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Navegación
                  </motion.h3>
                  
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center justify-between bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-white/30 shadow-sm hover:shadow-md -mx-1 px-6 py-4 rounded-2xl font-medium text-base transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-primary-700 bg-gradient-to-r from-primary-100/70 to-secondary-100/70 border-primary-200/50 shadow-md'
                            : 'text-trust-700 hover:text-primary-600'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            pathname === item.href
                              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125'
                              : 'bg-trust-300 group-hover:bg-primary-400 group-hover:scale-110'
                          }`}></div>
                          {item.name}
                        </span>
                        <motion.div
                          className="text-trust-400 group-hover:text-primary-500 transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          →
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Language Selector - Enhanced */}
                <motion.div 
                  className="bg-gradient-to-r from-white/60 to-white/40 shadow-lg backdrop-blur-sm mb-8 p-4 border border-white/40 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="mb-3 font-medium text-trust-600 text-sm uppercase tracking-wider">
                    {t('nav.language') || 'Idioma'}
                  </h4>
                  <div className="gap-2 grid grid-cols-2">
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                        }}
                        className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                          language === lang.code
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                            : 'bg-white/70 hover:bg-white/90 text-trust-700 hover:text-primary-600 border border-white/50 hover:border-primary-200'
                        }`}
                        whileHover={{ scale: language === lang.code ? 1.05 : 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <motion.span 
                            className="text-white text-xs"
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

                {/* Action Buttons - Enhanced */}
                <div className="space-y-4 mt-auto">
                  <motion.a
                    href="https://wa.me/17867527884"
                    className="group flex justify-center items-center space-x-3 bg-gradient-to-r from-green-500 hover:from-green-600 via-green-600 hover:via-green-700 to-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl px-6 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <PhoneIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>{t('nav.callNow')}</span>
                    <div className="bg-white/20 rounded-full w-2 h-2 animate-pulse"></div>
                  </motion.a>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <Link
                      href="/contacto"
                      className="group flex justify-center items-center space-x-2 bg-gradient-to-r from-primary-600 hover:from-primary-700 via-primary-700 hover:via-primary-800 to-secondary-700 hover:to-secondary-800 shadow-xl hover:shadow-2xl px-6 py-4 rounded-2xl w-full font-semibold text-white text-lg transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{t('nav.freeEvaluation')}</span>
                      <motion.div
                        className="text-white/80"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        →
                      </motion.div>
                    </Link>
                  </motion.div>
                  
                  {/* Contact Info Footer */}
                  <motion.div 
                    className="bg-white/30 backdrop-blur-sm mt-6 p-4 border border-white/40 rounded-xl text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <p className="text-trust-600 text-sm">
                      <span className="font-semibold text-primary-700">(786) 752-7884</span>
                    </p>
                    <p className="mt-1 text-trust-500 text-xs">
                      Disponible 24/7 para emergencias
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}