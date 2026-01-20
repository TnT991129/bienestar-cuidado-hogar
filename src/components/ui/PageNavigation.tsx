'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  HomeIcon, 
  StarIcon, 
  CogIcon, 
  ChatBubbleLeftRightIcon, 
  QuestionMarkCircleIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline'

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Inicio', icon: HomeIcon },
  { id: 'beneficios', label: 'Beneficios', icon: StarIcon },
  { id: 'como-funciona', label: 'Cómo Funciona', icon: CogIcon },
  { id: 'testimonios', label: 'Testimonios', icon: ChatBubbleLeftRightIcon },
  { id: 'faq', label: 'FAQ', icon: QuestionMarkCircleIcon },
  { id: 'cta', label: 'Contacto', icon: PhoneIcon },
]

export default function PageNavigation() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-10% 0px -70% 0px',
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

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Offset para el header fijo
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Versión Desktop - Vertical (esquina derecha) */}
      <div className="hidden lg:block top-1/2 right-6 z-50 fixed -translate-y-1/2 transform">
        <motion.nav 
          className="bg-white/95 shadow-xl backdrop-blur-md p-2 border border-gray-200/60 rounded-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.nav>
      </div>

      {/* Versión Móvil - Horizontal (separado del header) */}
      <div className="lg:hidden fixed top-24 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-gray-200/60 border-b shadow-sm">
        <div className="px-4 py-3">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                >
                  <IconComponent className={`w-3 h-3 ${isActive ? 'text-white' : ''}`} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}