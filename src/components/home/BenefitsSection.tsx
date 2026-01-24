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
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-16 sm:py-20 overflow-hidden">
      <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl tracking-tight">
            {t('benefits.title')}
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            {t('benefits.description')}
          </p>
        </motion.div>

        <div className="mx-auto mt-10 sm:mt-12 lg:mt-14 lg:max-w-none max-w-xl">
          <div className="justify-center items-center gap-6 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none max-w-xl">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className="bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="mb-6">
                  <div className="flex justify-center items-center bg-blue-100 mx-auto rounded-2xl w-16 h-16">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-3 font-semibold text-gray-900 text-xl">
                    {benefit.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}