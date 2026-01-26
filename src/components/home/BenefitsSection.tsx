'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  HeartIcon,
  HomeIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    id: 1,
    name: 'Cuidado Personalizado',
    description: 'Planes de atención adaptados a cada persona mayor.',
    icon: HeartIcon,
  },
  {
    id: 2,
    name: 'Comodidad del Hogar',
    description: 'Atención profesional en su propio hogar.',
    icon: HomeIcon,
  },
  {
    id: 3,
    name: 'Equipo Profesional',
    description: 'Acompañantes capacitados con experiencia especializada.',
    icon: UserGroupIcon,
  },
  {
    id: 4,
    name: 'Disponibilidad 24/7',
    description: 'Servicios disponibles las 24 horas del día.',
    icon: ClockIcon,
  },
  {
    id: 5,
    name: 'Seguridad Garantizada',
    description: 'Protocolos rigurosos y supervisión constante.',
    icon: ShieldCheckIcon,
  },
  {
    id: 6,
    name: 'Calidad Garantizada',
    description: 'Supervisión constante con evaluaciones regulares.',
    icon: StarIcon,
  }
]

export default function BenefitsSection() {
  const { t } = useLanguage()

  const benefits = [
    {
      id: 1,
      name: t('benefits.items.personalized.title'),
      description: t('benefits.items.personalized.description'),
      icon: HeartIcon,
    },
    {
      id: 2,
      name: t('benefits.items.professionals.title'),
      description: t('benefits.items.professionals.description'),
      icon: UserGroupIcon,
    },
    {
      id: 3,
      name: t('benefits.items.availability.title'),
      description: t('benefits.items.availability.description'),
      icon: ClockIcon,
    },
    {
      id: 4,
      name: t('benefits.items.security.title'),
      description: t('benefits.items.security.description'),
      icon: ShieldCheckIcon,
    },
    {
      id: 5,
      name: t('benefits.items.flexible.title'),
      description: t('benefits.items.flexible.description'),
      icon: HomeIcon,
    },
    {
      id: 6,
      name: t('benefits.items.quality.title'),
      description: t('benefits.items.quality.description'),
      icon: StarIcon,
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20 py-16 sm:py-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-secondary-200/20 to-secondary-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="floating-element absolute top-1/2 left-20 w-4 h-4 bg-gradient-to-br from-primary-400/60 to-primary-500/60 rounded-full"></div>
        <div className="floating-element-delayed absolute top-1/4 right-20 w-6 h-6 bg-gradient-to-br from-secondary-400/50 to-secondary-500/50 rounded-full"></div>
      </div>
      
      <div className="relative mx-auto px-6 lg:px-8 max-w-7xl z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl tracking-tight text-shadow">
            <span className="gradient-text">{t('benefits.title')}</span>
          </h2>
          <p className="text-trust-600 text-lg leading-7 max-w-xl mx-auto">
            {t('benefits.description')}
          </p>
        </motion.div>

        <div className="mx-auto mt-10 sm:mt-12 lg:mt-14 lg:max-w-none max-w-xl">
          <div className="justify-center items-center gap-6 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none max-w-xl">
            {benefits.map((benefit, index) => {
              const iconColors = [
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600' },
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600' }
              ]
              const colorScheme = iconColors[index % iconColors.length]
              
              return (
                <motion.div
                  key={benefit.id}
                  className="glass-card group hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  {/* Decorative floating element */}
                  <div className="floating-element absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-300/40 to-secondary-300/40 rounded-full"></div>
                  
                  <div className="mb-6 relative">
                    <motion.div 
                      className={`flex justify-center items-center bg-gradient-to-br ${colorScheme.bg} mx-auto rounded-2xl w-16 h-16 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <benefit.icon className={`w-8 h-8 ${colorScheme.icon} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-xl group-hover:text-primary-700 transition-colors duration-300">
                      {benefit.name}
                    </h3>
                    <p className="text-trust-600 leading-relaxed group-hover:text-trust-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/20 group-hover:to-secondary-50/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}