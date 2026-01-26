'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 py-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="top-10 left-10 absolute bg-white/10 blur-2xl rounded-full w-32 h-32 animate-pulse"></div>
        <div className="top-20 right-20 absolute bg-secondary-300/20 blur-xl rounded-full w-24 h-24 floating-element"></div>
        <div className="bottom-20 left-1/4 absolute bg-primary-300/10 blur-3xl rounded-full w-40 h-40 floating-element-delayed"></div>
        <div className="right-10 bottom-10 absolute bg-white/10 blur-2xl rounded-full w-28 h-28 animate-pulse delay-1000"></div>
      </div>
      
      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-8 sm:p-12 border border-white/20 rounded-3xl">
            <motion.div 
              className="mb-8 text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              📞
            </motion.div>
            
            <h2 className="text-shadow mb-6 font-bold text-white text-3xl md:text-4xl">
              <span className="bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white text-transparent">
                {t('cta.title')}
              </span>
            </h2>
            
            <p className="mx-auto mb-8 max-w-2xl text-primary-50 text-xl leading-relaxed">
              {t('cta.description')}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 bg-white/90 hover:bg-white glow-shadow shadow-2xl hover:shadow-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-primary-700 hover:text-primary-800 text-lg transition-all duration-300"
            >
              <div className="bg-primary-100 group-hover:bg-primary-200 p-1 rounded-lg transition-colors duration-300">
                <ArrowRightIcon className="w-5 h-5 text-primary-600 transition-transform group-hover:translate-x-1 duration-300" />
              </div>
              {t('cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}