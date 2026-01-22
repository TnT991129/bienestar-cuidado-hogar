'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 font-bold text-white text-3xl md:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100 text-xl">
            {t('cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold text-blue-600 text-lg transition-all duration-300"
          >
            {t('cta.button')}
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}