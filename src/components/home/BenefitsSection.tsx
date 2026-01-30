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
        <div className="top-10 right-10 absolute bg-gradient-to-br from-primary-200/20 to-primary-300/20 blur-3xl rounded-full w-64 h-64 animate-pulse"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-br from-secondary-200/20 to-secondary-300/20 blur-3xl rounded-full w-72 h-72 animate-pulse delay-1000"></div>
        <div className="top-1/2 left-20 absolute bg-gradient-to-br from-primary-400/60 to-primary-500/60 rounded-full w-4 h-4 floating-element"></div>
        <div className="top-1/4 right-20 absolute bg-gradient-to-br from-secondary-400/50 to-secondary-500/50 rounded-full w-6 h-6 floating-element-delayed"></div>
      </div>
      
      <div className="z-10 relative mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-shadow mb-4 font-bold text-3xl sm:text-4xl tracking-tight">
            <span className="gradient-text">{t('benefits.title')}</span>
          </h2>
          <p className="mx-auto max-w-xl text-trust-600 text-lg leading-7">
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
                  className="group relative hover:shadow-2xl overflow-hidden text-center transition-all duration-500 glass-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1}}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  {/* Decorative floating element */}
                  <div className="-top-2 -right-2 absolute bg-gradient-to-br from-primary-300/40 to-secondary-300/40 rounded-full w-6 h-6 floating-element"></div>
                  
                  <div className="relative mb-6">
                    <motion.div 
                      className={`flex justify-center items-center bg-gradient-to-br ${colorScheme.bg} mx-auto rounded-2xl w-16 h-16 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <benefit.icon className={`w-8 h-8 ${colorScheme.icon} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold group-hover:text-primary-700 text-xl transition-colors duration-300">
                      {benefit.name}
                    </h3>
                    <p className="text-trust-600 group-hover:text-trust-700 leading-relaxed transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 group-hover:from-primary-50/20 to-secondary-50/0 group-hover:to-secondary-50/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}