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
    return Array.isArray(faqItems) ? faqItems : []
  }
  
  const faqs = getFAQs()

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
            {t('faq.title')}
          </h2>
          <p className="text-gray-600 text-xl">
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
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-6 py-4 w-full text-left transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white px-6 py-4">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
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