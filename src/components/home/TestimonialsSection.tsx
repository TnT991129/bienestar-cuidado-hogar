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
    <section className="bg-gradient-to-br from-primary-50/40 via-white to-secondary-50/30 py-24 sm:py-32 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-br from-primary-200/25 to-primary-300/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-gradient-to-br from-secondary-200/20 to-secondary-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="floating-element absolute top-1/4 right-1/4 w-5 h-5 bg-gradient-to-br from-primary-400/50 to-primary-500/50 rounded-full"></div>
        <div className="floating-element-delayed absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-secondary-400/60 to-secondary-500/60 rounded-full"></div>
      </div>
      
      <div className="mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 backdrop-blur-sm border border-primary-200/30 px-4 py-2 rounded-full font-semibold text-primary-600 text-sm shadow-lg mb-4">
            <HeartIcon className="w-4 h-4 mr-2" />
            <span>{t('testimonials.title')}</span>
          </div>
          <h2 className="mt-2 font-bold text-3xl sm:text-4xl tracking-tight text-shadow">
            <span className="gradient-text">Testimonios</span>{' '}
            <span className="text-trust-900">Reales</span>
          </h2>
          <p className="mt-6 text-trust-600 text-lg leading-8 max-w-xl mx-auto">
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
          <div className="relative glass-card shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Decorative elements */}
            <div className="floating-element absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary-300/40 to-secondary-300/40 rounded-full"></div>
            <div className="floating-element-delayed absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-secondary-300/30 to-primary-300/30 rounded-full"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 lg:p-12 relative z-10"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className="flex justify-center items-center bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 shadow-2xl rounded-2xl w-16 h-16"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                    >
                      <StarIcon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl font-medium text-trust-800 text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial]?.quote || ''}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="font-bold text-lg text-trust-900 mb-1">
                    {testimonials[currentTestimonial]?.name || ''}
                  </div>
                  <div className="text-trust-600">
                    {testimonials[currentTestimonial]?.role || ''}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="flex justify-center items-center bg-gradient-to-r from-primary-100/80 to-primary-200/80 backdrop-blur-lg hover:from-primary-200/90 hover:to-primary-300/90 border border-primary-200/50 shadow-lg hover:shadow-xl w-12 h-12 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-5 h-5 text-primary-600 group-hover:text-primary-700" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="flex justify-center items-center bg-gradient-to-r from-primary-100/80 to-primary-200/80 backdrop-blur-lg hover:from-primary-200/90 hover:to-primary-300/90 border border-primary-200/50 shadow-lg hover:shadow-xl w-12 h-12 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="w-5 h-5 text-primary-600 group-hover:text-primary-700" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg'
                    : 'bg-primary-200 hover:bg-primary-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}