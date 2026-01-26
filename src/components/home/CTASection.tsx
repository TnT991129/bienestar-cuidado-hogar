'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 py-20 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="floating-element absolute top-20 right-20 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl"></div>
        <div className="floating-element-delayed absolute bottom-20 left-1/4 w-40 h-40 bg-primary-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12">
            <motion.div 
              className="text-6xl mb-8"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              📞
            </motion.div>
            
            <h2 className="mb-6 font-bold text-white text-3xl md:text-4xl text-shadow">
              <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                {t('cta.title')}
              </span>
            </h2>
            
            <p className="mx-auto mb-8 max-w-2xl text-primary-50 text-xl leading-relaxed">
              {t('cta.description')}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-2xl hover:shadow-white/20 px-8 py-4 rounded-2xl font-bold text-primary-700 hover:text-primary-800 text-lg transition-all duration-300 group glow-shadow"
            >
              <div className="p-1 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                <ArrowRightIcon className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              {t('cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}