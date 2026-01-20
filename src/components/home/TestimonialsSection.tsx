'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid'
import { HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { t } = useLanguage()

  // Safe array access for testimonials
  const getTestimonials = () => {
    const testimonialItems = t('testimonials.items')
    return Array.isArray(testimonialItems) ? testimonialItems : []
  }

  const testimonials = getTestimonials()

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-semibold text-primary-600 text-base leading-7">{t('testimonials.title')}</h2>
          <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
            {t('testimonials.title')}
          </p>
          <p className="mt-6 text-trust-600 text-lg leading-8">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 lg:p-12"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="mb-8 text-trust-800 text-xl text-center italic leading-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full w-16 h-16 text-2xl">
                    👤
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-2">
                      <p className="font-semibold text-trust-900">{testimonials[currentTestimonial].author}</p>
                      <CheckCircleIcon className="w-5 h-5 text-primary-600" title="Cliente verificado" />
                    </div>
                    <p className="text-trust-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="top-1/2 right-4 left-4 absolute flex justify-between -translate-y-1/2 pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="flex justify-center items-center bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 text-trust-600 hover:text-primary-600 transition-all duration-200 pointer-events-auto"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex justify-center items-center bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 text-trust-600 hover:text-primary-600 transition-all duration-200 pointer-events-auto"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-primary-600 scale-110' 
                      : 'bg-trust-300 hover:bg-trust-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}