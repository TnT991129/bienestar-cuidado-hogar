'use client'

import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

const navigation = {
  servicios: [
    { name: 'Cuidado Domiciliario', href: '/servicios#cuidado-domiciliario' },
    { name: 'Acompañamiento', href: '/servicios#acompanamiento' },
    { name: 'Asistencia Personal', href: '/servicios#asistencia-personal' },
    { name: 'Apoyo Emocional', href: '/servicios#apoyo-emocional' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Nuestro Equipo', href: '/equipo' },
    { name: 'Cómo Funciona', href: '/como-funciona' },
    { name: 'Testimonios', href: '/testimonios' },
  ],
  recursos: [
    { name: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos y Condiciones', href: '/terminos' },
  ],
}

const valores = [
  {
    name: 'Confianza',
    description: 'Cuidadores certificados y verificados',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Humanidad',
    description: 'Trato cálido y respetuoso',
    icon: HeartIcon,
  },
  {
    name: 'Profesionalismo',
    description: 'Servicios de la más alta calidad',
    icon: UserGroupIcon,
  },
  {
    name: 'Hogar',
    description: 'Atención en la comodidad del hogar',
    icon: HomeIcon,
  },
]

export default function Footer() {
  const { t } = useLanguage()

  const navigation = {
    servicios: [
      { name: t('nav.services'), href: '/servicios#cuidado-domiciliario' },
      { name: 'Compañía', href: '/servicios#acompanamiento' },
      { name: 'Asistencia Personal', href: '/servicios#asistencia-personal' },
      { name: 'Apoyo Emocional', href: '/servicios#apoyo-emocional' },
    ],
    empresa: [
      { name: t('nav.about'), href: '/sobre-nosotros' },
      { name: t('nav.team'), href: '/equipo' },
      { name: 'Cómo Funciona', href: '/como-funciona' },
      { name: 'Testimonios', href: '/testimonios' },
    ],
    recursos: [
      { name: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
      { name: t('nav.contact'), href: '/contacto' },
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Términos y Condiciones', href: '/terminos' },
    ],
  }

  const valores = [
    {
      name: 'Confianza',
      description: 'Cuidadores certificados y verificados',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Humanidad',
      description: 'Trato cálido y respetuoso',
      icon: HeartIcon,
    },
    {
      name: 'Profesionalismo',
      description: 'Servicios de la más alta calidad',
      icon: UserGroupIcon,
    },
    {
      name: 'Hogar',
      description: 'Atención en la comodidad del hogar',
      icon: HomeIcon,
    },
  ]

  return (
    <footer className="bg-trust-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t('footer.contact')}
      </h2>
      <div className="mx-auto px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="xl:gap-8 xl:grid xl:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex justify-center lg:justify-start items-center">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : ''}/logo.png`}
                alt="Bienestar y Cuidado en el Hogar Logo"
                className="w-32 h-32 object-contain"
              />
            </Link>
            <p className="text-trust-300 text-sm leading-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              {/* Social media links could go here */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white text-sm leading-6">{t('footer.ourServices')}</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.servicios.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-trust-300 hover:text-white text-sm leading-6 transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-white text-sm leading-6">{t('footer.company')}</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-trust-300 hover:text-white text-sm leading-6 transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white text-sm leading-6">{t('footer.quickLinks')}</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.recursos.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-trust-300 hover:text-white text-sm leading-6 transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-white text-sm leading-6">{t('footer.contactInfo')}</h3>
                <ul role="list" className="space-y-4 mt-6">
                  <li className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-primary-400" />
                    <a href="tel:+1234567890" className="text-trust-300 hover:text-white text-sm leading-6 transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                    <a href="mailto:info@cuidadosenior.com" className="text-trust-300 hover:text-white text-sm leading-6 transition-colors duration-200">
                      info@cuidadosenior.com
                    </a>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPinIcon className="mt-1 w-5 h-5 text-primary-400" />
                    <span className="text-trust-300 text-sm leading-6">
                      Ciudad de México, México
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ClockIcon className="w-5 h-5 text-primary-400" />
                    <span className="text-trust-300 text-sm leading-6">
                      Disponible 24/7
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 pt-8 border-trust-700 border-t">
          <h3 className="mb-8 font-semibold text-white text-lg text-center leading-6">
            Nuestros Valores
          </h3>
          <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
            {valores.map((valor) => (
              <div key={valor.name} className="text-center">
                <div className="flex justify-center items-center bg-primary-600 mx-auto rounded-lg w-12 h-12">
                  <valor.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-semibold text-white text-sm">{valor.name}</h4>
                <p className="mt-2 text-trust-300 text-xs">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 border-trust-700 border-t">
          <div className="text-center">
            <p className="text-trust-400 text-xs leading-5">
              &copy; {new Date().getFullYear()} Bienestar y Cuidado en el Hogar. Todos los derechos reservados.
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-trust-400 text-xs">
              <Link href="/privacidad" className="hover:text-trust-300 transition-colors duration-200">
                Política de Privacidad
              </Link>
              <span className="pl-4 border-trust-600 border-l">
                <Link href="/terminos" className="hover:text-trust-300 transition-colors duration-200">
                  Términos y Condiciones
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-secondary-600">
        <div className="mx-auto px-6 sm:px-6 lg:px-8 py-3 max-w-7xl">
          <div className="text-center">
            <p className="font-medium text-white text-sm">
              <span className="md:hidden">Emergencia 24/7: </span>
              <span className="hidden md:inline">¿Necesita atención inmediata? Estamos disponibles 24/7: </span>
              <a
                href="tel:+1234567890"
                className="font-bold hover:text-secondary-100 underline transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}