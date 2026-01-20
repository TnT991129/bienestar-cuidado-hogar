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
  return (
    <footer className="bg-trust-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        {/* Main Footer Content */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Bienestar y Cuidado en el Hogar" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Bienestar y Cuidado</span>
                <span className="text-lg font-bold text-primary-400 ml-1 block">en el Hogar</span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-trust-300">
              Brindamos servicios profesionales de cuidado domiciliario para adultos mayores, 
              con un enfoque humano y personalizado que garantiza el bienestar y la dignidad 
              de nuestros usuarios en la comodidad de su hogar.
            </p>
            <div className="flex space-x-6">
              {/* Social media links could go here */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Servicios</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.servicios.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-trust-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-trust-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.recursos.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-trust-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contacto</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-primary-400" />
                    <a href="tel:+1234567890" className="text-sm leading-6 text-trust-300 hover:text-white transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                    <a href="mailto:info@cuidadosenior.com" className="text-sm leading-6 text-trust-300 hover:text-white transition-colors duration-200">
                      info@cuidadosenior.com
                    </a>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPinIcon className="h-5 w-5 text-primary-400 mt-1" />
                    <span className="text-sm leading-6 text-trust-300">
                      Ciudad de México, México
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-primary-400" />
                    <span className="text-sm leading-6 text-trust-300">
                      Disponible 24/7
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 border-t border-trust-700 pt-8">
          <h3 className="text-lg font-semibold leading-6 text-white mb-8 text-center">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {valores.map((valor) => (
              <div key={valor.name} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                  <valor.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-white">{valor.name}</h4>
                <p className="mt-2 text-xs text-trust-300">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-trust-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-center">
            <p className="text-xs leading-5 text-trust-400">
              &copy; {new Date().getFullYear()} Bienestar y Cuidado en el Hogar. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex justify-center space-x-4 text-xs text-trust-400">
              <Link href="/privacidad" className="hover:text-trust-300 transition-colors duration-200">
                Política de Privacidad
              </Link>
              <span className="border-l border-trust-600 pl-4">
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
        <div className="mx-auto max-w-7xl px-6 py-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-white">
              <span className="md:hidden">Emergencia 24/7: </span>
              <span className="hidden md:inline">¿Necesita atención inmediata? Estamos disponibles 24/7: </span>
              <a
                href="tel:+1234567890"
                className="font-bold underline hover:text-secondary-100 transition-colors duration-200"
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