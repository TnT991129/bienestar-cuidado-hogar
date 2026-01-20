import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import AboutSection from '@/components/home/AboutSection'
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
  title: 'Sobre Nosotros - Bienestar y Cuidado en el Hogar | 15+ Años de Experiencia',
  description: 'Conoce nuestra historia de más de 15 años cuidando familias. Empresa familiar dedicada al cuidado domiciliario no médico de adultos mayores con valores de compasión, profesionalismo y confiabilidad.',
}

const stats = [
  { name: 'Años de experiencia', value: '15+' },
  { name: 'Familias atendidas', value: '500+' },
  { name: 'Cuidadores certificados', value: '50+' },
  { name: 'Satisfacción del cliente', value: '98%' }
]

const timeline = [
  {
    year: '2008',
    title: 'Fundación de la Empresa',
    description: 'María Elena Rodríguez funda Bienestar y Cuidado en el Hogar con la visión de ofrecer cuidado domiciliario humano y profesional.',
    icon: HeartIcon
  },
  {
    year: '2010',
    title: 'Primera Expansión',
    description: 'Alcanzamos las 25 familias atendidas y expandimos nuestro equipo a 10 cuidadores certificados.',
    icon: UserGroupIcon
  },
  {
    year: '2013',
    title: 'Certificación de Calidad',
    description: 'Obtenemos nuestra primera certificación de calidad AAA y establecemos protocolos estrictos de servicio.',
    icon: AcademicCapIcon
  },
  {
    year: '2016',
    title: 'Expansión Regional',
    description: 'Expandimos nuestros servicios a toda la región metropolitana, alcanzando 200 familias atendidas.',
    icon: MapPinIcon
  },
  {
    year: '2019',
    title: 'Innovación Digital',
    description: 'Implementamos sistema de monitoreo digital y comunicación en tiempo real con las familias.',
    icon: ClockIcon
  },
  {
    year: '2023',
    title: 'Líder en la Región',
    description: 'Celebramos 15 años sirviendo a más de 500 familias con el 98% de satisfacción del cliente.',
    icon: StarIcon
  }
]

const values = [
  {
    name: 'Compasión',
    description: 'Tratamos a cada persona con el amor y respeto que merecen, como si fueran parte de nuestra propia familia. Entendemos que el cuidado va más allá de las tareas básicas; se trata de conexión humana genuina.',
    icon: HeartIcon
  },
  {
    name: 'Profesionalismo',
    description: 'Nuestros cuidadores están altamente capacitados y mantienen los más altos estándares de atención. Educación continua, certificaciones actualizadas y supervisión constante garantizan la excelencia.',
    icon: AcademicCapIcon
  },
  {
    name: 'Confiabilidad',
    description: 'Cumplimos nuestras promesas y estamos disponibles cuando más nos necesitas. La tranquilidad de las familias es nuestra prioridad, por eso mantenemos comunicación constante y transparente.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Flexibilidad',
    description: 'Entendemos que cada familia tiene necesidades únicas. Adaptamos nuestros servicios y horarios para crear soluciones personalizadas que se ajusten perfectamente a cada situación.',
    icon: ClockIcon
  }
]

const team = [
  {
    name: 'María Elena Rodríguez',
    role: 'Fundadora y Directora General',
    credentials: 'Enfermera Registrada, BSN, 25+ años de experiencia',
    description: 'Enfermera con más de 25 años de experiencia en cuidado geriátrico. Fundó la empresa con la visión de humanizar el cuidado domiciliario.',
    image: '👩‍⚕️'
  },
  {
    name: 'Dr. Carlos Mendoza',
    role: 'Director Médico Consultor',
    credentials: 'Médico Geriatra, Certificado en Cuidados Paliativos',
    description: 'Supervisa los protocolos médicos y asegura que nuestros servicios complementen el cuidado médico de cada cliente.',
    image: '👨‍⚕️'
  },
  {
    name: 'Ana Patricia Silva',
    role: 'Coordinadora de Cuidadores',
    credentials: 'Trabajadora Social, MSW, Especialista en Gerontología',
    description: 'Responsable de la selección, capacitación y supervisión continua de nuestro equipo de cuidadores profesionales.',
    image: '👩‍💼'
  },
  {
    name: 'Roberto Vásquez',
    role: 'Gerente de Operaciones',
    credentials: 'Administración en Salud, 15 años en servicios domiciliarios',
    description: 'Coordina las operaciones diarias y asegura la calidad del servicio en todos nuestros casos activos.',
    image: '👨‍💼'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutSection />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-trust-900 sm:text-5xl">
              Nuestra Historia
            </h1>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Más de 15 años cuidando familias con amor, profesionalismo y dedicación. 
              Conoce nuestra historia completa, valores y el equipo que hace posible el mejor cuidado domiciliario.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestra Misión</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Cuidando Familias con Amor y Profesionalismo
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission Text */}
              <div>
                <div className="space-y-6 text-trust-600 text-lg leading-relaxed">
                  <p>
                    Nuestra misión es proporcionar servicios de cuidado domiciliario de la más alta calidad 
                    que permitan a los adultos mayores mantener su <strong className="text-trust-800">independencia, 
                    dignidad y calidad de vida</strong> en la comodidad de su propio hogar.
                  </p>
                  
                  <p>
                    Creemos firmemente que el hogar es el lugar donde las personas se sienten más seguras 
                    y felices. Por eso, trabajamos incansablemente para hacer posible que nuestros clientes 
                    permanezcan en su entorno familiar, rodeados de sus recuerdos, mascotas y seres queridos.
                  </p>
                  
                  <p>
                    No solo cuidamos a nuestros clientes; también brindamos <strong className="text-primary-600">
                    tranquilidad y apoyo a sus familias</strong>, porque entendemos que el cuidado de un ser 
                    querido afecta a toda la familia.
                  </p>
                </div>

                {/* Vision */}
                <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-trust-900 mb-4">Nuestra Visión</h3>
                  <p className="text-trust-700">
                    Ser la empresa líder en servicios de cuidado domiciliario en la región, reconocida por 
                    nuestra excelencia, compasión y compromiso inquebrantable con el bienestar de nuestros 
                    clientes y sus familias, transformando la forma en que se brinda el cuidado a los adultos mayores.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.name} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                    <dt className="text-3xl font-bold text-primary-600 sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-trust-600">{stat.name}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-trust-50 to-primary-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestra Historia</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              15 Años de Crecimiento y Dedicación
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Desde nuestros humildes inicios hasta convertirnos en líderes regionales en cuidado domiciliario.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-secondary-200"></div>

              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={event.year} className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center z-10">
                      <event.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-primary-600 mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-trust-900 mb-3">{event.title}</h3>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestros Valores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Los Principios que Nos Guían
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Estos valores fundamentales definen cómo trabajamos y cómo tratamos a cada familia que confía en nosotros.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-trust-900 mb-3">{value.name}</h3>
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
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestro Equipo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Liderazgo Experimentado y Comprometido
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Conoce a los profesionales que dirigen nuestro equipo y garantizan la excelencia en cada aspecto de nuestros servicios.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center text-2xl">
                        {member.image}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-trust-900 mb-1">{member.name}</h3>
                      <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-trust-500 mb-3">{member.credentials}</p>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Te Gustaría Ser Parte de Nuestra Familia?
              </h2>
              <p className="text-primary-100 mb-6">
                Si compartes nuestros valores y te apasiona el cuidado de adultos mayores, 
                nos encantaría conocerte. También estamos aquí para ayudarte si necesitas 
                nuestros servicios para tu ser querido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200 shadow-lg"
                >
                  Contactar Ahora
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}