import type { Metadata } from 'next'
// import { motion } from 'framer-motion' // No usado en esta optimización
import { 
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Bienestar y Cuidado en el Hogar | Historia Familiar',
  description: 'Conoce nuestra historia familiar brindando acompañamiento no médico. Empresa familiar dedicada al bienestar de adultos mayores con valores de amor y respeto.',
}

const stats = [
  { name: 'Años de experiencia', value: 'Varios' },
  { name: 'Familias acompañadas', value: '300+' },
  { name: 'Acompañantes capacitados', value: '25+' },
  { name: 'Satisfacción familiar', value: '98%' }
]

const timeline = [
  {
    year: '2010',
    title: 'Un Sueño Familiar',
    description: 'Mirian González Guillén inicia con la visión de brindar acompañamiento cálido y humano a adultos mayores en sus hogares.',
    icon: HeartIcon
  },
  {
    year: '2015',
    title: 'Crecimiento con Valores',
    description: 'Más familias confían en nosotros y desarrollamos nuestros principios de acompañamiento basados en paciencia y empatía.',
    icon: UserGroupIcon
  },
  {
    year: '2020',
    title: 'Fortalecimiento',
    description: 'Ampliamos nuestros servicios manteniendo el enfoque personal y familiar, llegando a más hogares con nuestro acompañamiento.',
    icon: MapPinIcon
  },
  {
    year: '2024',
    title: 'Una Gran Familia',
    description: 'Somos una familia extendida que acompaña a cientos de hogares con valores de amor, respeto y paciencia.',
    icon: StarIcon
  }
]

const values = [
  {
    name: 'Amor Familiar',
    description: 'Tratamos a cada persona como si fuera un miembro querido de nuestra propia familia, con genuino cariño y profundo respeto.',
    icon: HeartIcon
  },
  {
    name: 'Confianza Total',
    description: 'Las familias pueden estar tranquilas sabiendo que sus seres queridos están en buenas manos. Mantenemos comunicación abierta y honesta.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Paciencia Infinita',
    description: 'Nos adaptamos con paciencia a cada personalidad, creando un ambiente de acompañamiento personalizado y cómodo para todos.',
    icon: ClockIcon
  }
]

const team = [
  {
    name: 'Mirian González Guillén',
    role: 'Fundadora',
    credentials: 'Experiencia en acompañamiento familiar',
    description: 'Inició esta hermosa labor movida por el amor hacia los adultos mayores y el deseo de crear un espacio donde reciban la compañía que merecen.',
    image: '👩‍🦳'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-bold text-trust-900 text-4xl sm:text-5xl tracking-tight">
              Nuestra Historia Familiar
            </h1>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Acompañando familias con amor, respeto y dedicación. 
              Conoce cómo iniciamos este hermoso camino de brindar acompañamiento no médico.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Quiénes Somos</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Una Familia que Acompaña a Otras Familias
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
              {/* Mission Text */}
              <div>
                <div className="space-y-6 text-trust-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-trust-800">Bienestar y Cuidado en el Hogar</strong> nace como una iniciativa familiar 
                    con un propósito claro: ofrecer acompañamiento y apoyo no médico en el hogar, brindando tranquilidad 
                    tanto a las personas que cuidamos como a sus familias.
                  </p>
                  
                  <p>
                    Contamos con varios años de experiencia en el acompañamiento diario de adultos mayores y personas 
                    con necesidades especiales, siempre desde un enfoque humano, respetuoso y responsable. Nuestro equipo 
                    ha recibido formación y capacitación en <strong className="text-primary-600">asistencia no médica</strong>, 
                    lo que nos permite brindar un servicio confiable, cercano y adaptado a cada situación.
                  </p>
                  
                  <p>
                    Creemos que el cuidado comienza con la presencia, la paciencia y la empatía. Por eso, nuestro compromiso 
                    es ofrecer compañía, apoyo y bienestar en la comodidad del hogar, <strong className="text-trust-800">
                    respetando la dignidad y la rutina</strong> de cada persona.
                  </p>

                  <p>
                    <strong className="text-primary-600">Nuestros servicios son estrictamente no médicos</strong> y están orientados 
                    a mejorar la calidad de vida a través del acompañamiento y la asistencia diaria.
                  </p>

                  <div className="bg-blue-50 mt-6 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800 text-sm">
                      Bienestar y Cuidado en el Hogar ofrece servicios de acompañamiento y apoyo no médico. 
                      No brindamos servicios médicos ni sustituimos la atención médica profesional.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 mt-12 p-6 rounded-2xl">
                  <h3 className="mb-4 font-bold text-trust-900 text-xl">Nuestro Sueño</h3>
                  <p className="text-trust-700">
                    Queremos que cada adulto mayor se sienta acompañado, querido y valorado. 
                    Aspiramos a ser la familia extendida que brinda compañía, escucha con paciencia, 
                    comparte momentos especiales y hace que cada día sea un poco más brillante 
                    para quienes han dado tanto a sus familias y comunidades.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="gap-8 grid grid-cols-2">
                {stats.map((stat, index) => (
                  <div key={stat.name} className="bg-white shadow-lg p-6 rounded-2xl text-center">
                    <dt className="font-bold text-primary-600 text-3xl sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 font-medium text-trust-600 text-sm">{stat.name}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-trust-50 to-primary-50/30 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestro Camino</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Años de Acompañamiento y Dedicación
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Nuestro crecimiento a través de los años, siempre manteniendo 
              nuestros valores familiares de amor y dedicación.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* Timeline Line */}
              <div className="left-1/2 absolute bg-gradient-to-b from-primary-200 to-secondary-200 w-1 h-full -translate-x-1/2 transform"></div>

              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={event.year} className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="left-1/2 z-10 absolute flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full w-12 h-12 -translate-x-1/2 transform">
                      <event.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}>
                      <div className="bg-white shadow-lg p-6 rounded-2xl">
                        <div className="mb-2 font-bold text-primary-600 text-2xl">{event.year}</div>
                        <h3 className="mb-3 font-semibold text-trust-900 text-xl">{event.title}</h3>
                        <p className="text-trust-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestros Valores</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Los Principios que Nos Guían
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Estos valores fundamentales definen cómo trabajamos y cómo tratamos a cada familia que confía en nosotros.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.name} className="bg-white shadow-lg p-8 border border-gray-100 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg w-12 h-12">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-bold text-trust-900 text-xl">{value.name}</h3>
                      <p className="text-trust-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestra Fundadora</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              El Corazón de Nuestra Familia
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Conoce a quien inició esta hermosa labor de acompañamiento no médico.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
              {team.map((member) => (
                <div key={member.name} className="bg-white shadow-lg p-8 rounded-2xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full w-16 h-16 text-2xl">
                        {member.image}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-bold text-trust-900 text-xl">{member.name}</h3>
                      <p className="mb-2 font-semibold text-primary-600">{member.role}</p>
                      <p className="mb-3 text-trust-500 text-sm">{member.credentials}</p>
                      <p className="text-trust-600 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
              <h2 className="mb-4 font-bold text-3xl">
                ¿Necesitas Acompañamiento?
              </h2>
              <p className="mb-6 text-primary-100">
                Si necesitas nuestros servicios de acompañamiento no médico para tu ser querido, 
                estamos aquí para ayudarte con todo nuestro cariño.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <a
                  href="/contacto"
                  className="inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-primary-600 text-base transition-colors duration-200"
                >
                  Contactar Ahora
                </a>
                <a
                  href="https://wa.me/17867527884"
                  className="inline-flex justify-center items-center hover:bg-white/10 px-6 py-3 border-2 border-white/30 rounded-xl font-medium text-white text-base transition-colors duration-200"
                >
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  +1 (786) 752-7884
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}