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
    <section className="relative bg-gradient-to-br from-primary-50/40 via-white to-secondary-50/30 py-24 sm:py-32 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="top-16 left-16 absolute bg-gradient-to-br from-primary-200/25 to-primary-300/25 blur-3xl rounded-full w-48 h-48 animate-pulse"></div>
        <div className="right-16 bottom-16 absolute bg-gradient-to-br from-secondary-200/20 to-secondary-300/20 blur-3xl rounded-full w-56 h-56 animate-pulse delay-1000"></div>
        <div className="top-1/4 right-1/4 absolute bg-gradient-to-br from-primary-400/50 to-primary-500/50 rounded-full w-5 h-5 floating-element"></div>
        <div className="bottom-1/3 left-1/4 absolute bg-gradient-to-br from-secondary-400/60 to-secondary-500/60 rounded-full w-4 h-4 floating-element-delayed"></div>
      </div>
      
      <div className="z-10 relative mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-secondary-100/80 shadow-lg backdrop-blur-sm mb-4 px-4 py-2 border border-primary-200/30 rounded-full font-semibold text-primary-600 text-sm">
            <HeartIcon className="mr-2 w-4 h-4" />
            <span>{t('testimonials.title')}</span>
          </div>
          <h2 className="text-shadow mt-2 font-bold text-3xl sm:text-4xl tracking-tight">
            <span className="gradient-text">Testimonios</span>{' '}
            <span className="text-trust-900">Reales</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-trust-600 text-lg leading-8">
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
          <div className="group relative shadow-2xl hover:shadow-3xl overflow-hidden transition-all duration-500 glass-card">
            {/* Decorative elements */}
            <div className="-top-3 -right-3 absolute bg-gradient-to-br from-primary-300/40 to-secondary-300/40 rounded-full w-8 h-8 floating-element"></div>
            <div className="-bottom-2 -left-2 absolute bg-gradient-to-br from-secondary-300/30 to-primary-300/30 rounded-full w-6 h-6 floating-element-delayed"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="z-10 relative p-8 lg:p-12"
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
                <blockquote className="mb-8 font-medium text-trust-800 text-xl md:text-2xl text-center leading-relaxed">
                  "{testimonials[currentTestimonial]?.quote || ''}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="mb-1 font-bold text-trust-900 text-lg">
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
              className="group flex justify-center items-center bg-gradient-to-r from-primary-100/80 hover:from-primary-200/90 to-primary-200/80 hover:to-primary-300/90 shadow-lg hover:shadow-xl backdrop-blur-lg border border-primary-200/50 rounded-full w-12 h-12 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-5 h-5 text-primary-600 group-hover:text-primary-700" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="group flex justify-center items-center bg-gradient-to-r from-primary-100/80 hover:from-primary-200/90 to-primary-200/80 hover:to-primary-300/90 shadow-lg hover:shadow-xl backdrop-blur-lg border border-primary-200/50 rounded-full w-12 h-12 transition-all duration-300"
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