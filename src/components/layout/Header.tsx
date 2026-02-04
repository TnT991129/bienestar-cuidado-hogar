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
    // { name: t('nav.team'), href: '/equipo' }, // Temporalmente oculto
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
            className="flex justify-center items-center bg-slate-800 hover:bg-slate-900 shadow-sm hover:shadow-md rounded-lg w-10 h-10 text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <PhoneIcon className="w-4 h-4" />
          </motion.a>

          {/* Modern Hamburger Menu Button */}
          <motion.button
            type="button"
            className="group inline-flex relative justify-center items-center bg-white hover:bg-slate-50 shadow-sm hover:shadow-md -m-2.5 p-3 border border-slate-200 rounded-lg text-slate-700 hover:text-slate-900 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
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

      {/* Enhanced Mobile Menu - Elegant Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden z-[9999] fixed inset-0"
          >
            {/* Elegant Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md" 
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
              className="right-0 z-[9999] fixed inset-y-0 bg-white shadow-2xl px-0 w-full sm:max-w-sm overflow-y-auto"
            >
              {/* Clean Header */}
              <div className="bg-slate-50 border-slate-200 border-b px-6 py-6">
                <div className="flex justify-between items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center"
                  >
                    <Link href="/" className="group flex items-center" onClick={() => setMobileMenuOpen(false)}>
                      <div className="text-left">
                        <h1 className="font-bold text-slate-900 text-lg leading-tight">
                          Bienestar y Cuidado
                        </h1>
                        <p className="mt-0.5 font-medium text-slate-600 text-sm">
                          EN EL HOGAR
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.button
                    type="button"
                    className="group bg-white hover:bg-slate-100 shadow-sm -m-2 p-2 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <XMarkIcon className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
                  </motion.button>
                </div>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col px-6 py-8 h-full">
                {/* Navigation Links */}
                <div className="space-y-2 mb-8">
                  <motion.h3 
                    className="mb-6 font-semibold text-slate-900 text-sm uppercase tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
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
                        className={`group flex items-center justify-between px-4 py-4 rounded-lg font-medium text-base transition-all duration-200 hover:bg-slate-50 ${
                          pathname === item.href
                            ? 'text-slate-900 bg-slate-100 border-l-4 border-slate-900'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          {item.name}
                        </span>
                        <motion.div
                          className="text-slate-400 group-hover:text-slate-600 transition-colors duration-200"
                          whileHover={{ x: 3 }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Language Selector */}
                <motion.div 
                  className="bg-slate-50 mb-8 p-4 border border-slate-200 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="mb-3 font-semibold text-slate-900 text-sm uppercase tracking-wide">
                    {t('nav.language') || 'Idioma'}
                  </h4>
                  <div className="gap-2 grid grid-cols-2">
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                        }}
                        className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
                          language === lang.code
                            ? 'bg-slate-900 text-white'
                            : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <span className="text-base">{lang.flag}</span>
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

                {/* Action Buttons */}
                <div className="space-y-3 mt-auto">
                  <motion.a
                    href="https://wa.me/17867527884"
                    className="group flex justify-center items-center space-x-3 bg-slate-800 hover:bg-slate-900 shadow-sm hover:shadow-md px-6 py-4 rounded-lg font-semibold text-white transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>{t('nav.callNow')}</span>
                  </motion.a>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <Link
                      href="/contacto"
                      className="group flex justify-center items-center space-x-2 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md px-6 py-4 border border-slate-200 rounded-lg w-full font-semibold text-slate-800 hover:text-slate-900 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{t('nav.freeEvaluation')}</span>
                      <motion.div
                        className="text-slate-500"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </Link>
                  </motion.div>
                  
                  {/* Contact Info Footer */}
                  <motion.div 
                    className="bg-slate-50 mt-6 p-4 border border-slate-200 rounded-lg text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <p className="text-slate-900 text-sm">
                      <span className="font-semibold">(786) 752-7884</span>
                    </p>
                    <p className="mt-1 text-slate-600 text-xs">
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