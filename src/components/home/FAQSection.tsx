'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()
  
  // Safe array access for FAQ items
  const getFAQs = () => {
    const faqItems = t('faq.items')
    console.log('FAQ Items:', faqItems)
    return Array.isArray(faqItems) ? faqItems : []
  }
  
  const faqs = getFAQs()
  console.log('Processed FAQs:', faqs)

  return (
    <section className="relative bg-gradient-to-br from-white via-primary-50/10 to-secondary-50/10 py-16 sm:py-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="top-10 right-10 absolute bg-gradient-to-br from-primary-200/20 to-primary-300/20 blur-3xl rounded-full w-40 h-40 animate-pulse"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-br from-secondary-200/15 to-secondary-300/15 blur-3xl rounded-full w-48 h-48 animate-pulse delay-1000"></div>
        <div className="top-1/4 left-1/4 absolute bg-gradient-to-br from-primary-400/50 to-primary-500/50 rounded-full w-4 h-4 floating-element"></div>
        <div className="right-1/3 bottom-1/3 absolute bg-gradient-to-br from-secondary-400/60 to-secondary-500/60 rounded-full w-3 h-3 floating-element-delayed"></div>
      </div>
      
      <div className="z-10 relative mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-4 px-4 py-2 border border-primary-200/30 rounded-full font-semibold text-primary-600 text-sm">
            <span>FAQ</span>
          </div>
          <h2 className="text-shadow mb-4 font-bold text-3xl md:text-4xl">
            <span className="gradient-text">Preguntas</span>{' '}
            <span className="text-trust-900">Frecuentes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-trust-600 text-xl">
            {t('faq.description')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:shadow-xl overflow-hidden transition-all duration-300 glass-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center group-hover:bg-white/20 p-6 w-full text-left transition-all duration-300"
              >
                <span className="font-semibold text-trust-900 group-hover:text-primary-700 transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-primary-100 group-hover:from-primary-200 to-primary-200 group-hover:to-primary-300 p-2 rounded-lg transition-all duration-300"
                >
                  <ChevronDownIcon className="w-5 h-5 text-primary-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-2 pb-6">
                      <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/30 backdrop-blur-sm p-4 border border-primary-100/30 rounded-xl">
                        <p className="text-trust-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}