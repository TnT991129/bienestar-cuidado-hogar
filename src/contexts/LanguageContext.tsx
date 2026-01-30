'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '@/utils/translations'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage') as Language
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    console.log('Setting language to:', lang)
    setLanguageState(lang)
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang)
    }
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key} for language: ${language}`)
        return key
      }
    }
    
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}