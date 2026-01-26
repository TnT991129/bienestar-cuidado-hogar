'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  StarIcon, 
  CogIcon, 
  ChatBubbleLeftRightIcon, 
  QuestionMarkCircleIcon, 
  PhoneIcon,
  ChevronUpIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

interface NavItem {
  id: string
  label: string
  shortLabel: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  gradient: string
}

const navItems: NavItem[] = [
  { 
    id: 'hero', 
    label: 'Inicio', 
    shortLabel: 'Inicio',
    icon: HomeIcon, 
    color: 'from-primary-500 to-primary-600',
    gradient: 'from-primary-50 to-primary-100'
  },
  { 
    id: 'beneficios', 
    label: 'Beneficios', 
    shortLabel: 'Beneficios',
    icon: StarIcon, 
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-50 to-orange-100'
  },
  { 
    id: 'como-funciona', 
    label: 'Cómo Funciona', 
    shortLabel: 'Proceso',
    icon: CogIcon, 
    color: 'from-emerald-500 to-teal-500',
    gradient: 'from-emerald-50 to-teal-100'
  },
  { 
    id: 'testimonios', 
    label: 'Testimonios', 
    shortLabel: 'Testimonios',
    icon: ChatBubbleLeftRightIcon, 
    color: 'from-purple-500 to-indigo-500',
    gradient: 'from-purple-50 to-indigo-100'
  },
  { 
    id: 'faq', 
    label: 'Preguntas', 
    shortLabel: 'FAQ',
    icon: QuestionMarkCircleIcon, 
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-50 to-cyan-100'
  },
  { 
    id: 'cta', 
    label: 'Contacto', 
    shortLabel: 'Contacto',
    icon: PhoneIcon, 
    color: 'from-rose-500 to-pink-500',
    gradient: 'from-rose-50 to-pink-100'
  },
]

export default function PageNavigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Mostrar navegación después de scroll inicial
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0.1
      }
    )

    // Observar todas las secciones
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120 // Offset mejorado para headers
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Cerrar menú expandido en móvil
      setIsExpanded(false)
    }
  }

  const activeItem = navItems.find(item => item.id === activeSection)

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Versión Desktop - Mejorada con glassmorphism */}
          <motion.div 
            className="hidden lg:block top-1/2 right-8 z-50 fixed -translate-y-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          >
            <nav className="bg-white/80 shadow-2xl backdrop-blur-xl p-3 border border-white/40 rounded-3xl overflow-hidden">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  const isActive = activeSection === item.id
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative group flex items-center space-x-3 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-300 overflow-hidden ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                      }`}
                      whileHover={{ scale: 1.05, x: isActive ? 0 : 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      {/* Efecto de brillo */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                      
                      <div className={`relative z-10 p-1 rounded-xl ${isActive ? 'bg-white/20' : 'bg-transparent group-hover:bg-white/30'} transition-all duration-300`}>
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-current'}`} />
                      </div>
                      <span className="z-10 relative font-semibold whitespace-nowrap">{item.label}</span>
                      
                      {/* Indicador de progreso */}
                      {isActive && (
                        <motion.div
                          className="right-2 absolute bg-white rounded-full w-2 h-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </nav>
          </motion.div>

          {/* Versión Móvil - Completamente rediseñada */}
          <motion.div 
            className="lg:hidden right-3 bottom-20 z-50 fixed"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {/* Navegación expandida */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/95 shadow-2xl backdrop-blur-xl p-4 border border-gray-200/50 rounded-3xl max-w-xs">
                    <div className="gap-3 grid grid-cols-2">
                      {navItems.map((item, index) => {
                        const IconComponent = item.icon
                        const isActive = activeSection === item.id
                        
                        return (
                          <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative group flex flex-col items-center justify-center p-3 rounded-2xl font-medium text-xs transition-all duration-300 overflow-hidden ${
                              isActive 
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, type: "spring" }}
                          >
                            {/* Efecto de brillo para activo */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                              />
                            )}
                            
                            <div className={`relative z-10 p-2 rounded-xl mb-1 ${isActive ? 'bg-white/20' : 'bg-transparent group-hover:bg-white/30'} transition-all duration-300`}>
                              <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-current'}`} />
                            </div>
                            <span className="z-10 relative font-semibold text-center leading-tight">{item.shortLabel}</span>
                            
                            {/* Indicador activo */}
                            {isActive && (
                              <motion.div
                                className="-top-1 -right-1 absolute bg-white shadow-sm rounded-full w-3 h-3"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              />
                            )}
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón flotante principal */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative group bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-2xl hover:shadow-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
              }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icono de la sección activa */}
              {activeItem && (
                <motion.div
                  className="z-10 relative"
                  key={activeItem.id}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <activeItem.icon className="w-6 h-6 text-white" />
                </motion.div>
              )}

              {/* Indicador de expandido */}
              <motion.div
                className="-top-1 -right-1 absolute flex justify-center items-center bg-white shadow-sm rounded-full w-5 h-5 text-gray-700"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <ChevronDownIcon className="w-3 h-3" />
                ) : (
                  <ChevronUpIcon className="w-3 h-3" />
                )}
              </motion.div>

              {/* Pulso de actividad */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/0 opacity-30 rounded-2xl animate-pulse"></div>
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}