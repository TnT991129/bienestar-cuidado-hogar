'use client'

import { motion } from 'framer-motion'
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

const stats = [
  { name: 'Años de experiencia', value: '+3' },
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
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-semibold text-primary-600 text-base uppercase leading-7 tracking-wide">
              Quiénes Somos
            </h2>
            <p className="mt-4 font-bold text-trust-900 text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Una Familia que Acompaña a Otras Familias
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-trust-600 text-xl leading-8">
              Brindamos acompañamiento no médico con amor, respeto y dedicación desde hace varios años
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-3">
            
            {/* Left Column - Mission & Vision */}
            <div className="space-y-8 lg:col-span-2">
              
              {/* Mission Card */}
              <div className="bg-white shadow-xl p-8 lg:p-10 border border-gray-100 rounded-3xl">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl w-12 h-12">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-trust-900 text-2xl">Nuestra Misión</h3>
                    <div className="space-y-4 text-trust-600 text-lg leading-relaxed">
                      <p>
                        <strong className="text-trust-800">Bienestar y Cuidado en el Hogar</strong> nace como una iniciativa familiar 
                        con un propósito claro: ofrecer acompañamiento y apoyo no médico en el hogar, brindando tranquilidad 
                        tanto a las personas que cuidamos como a sus familias.
                      </p>
                      <p>
                        Contamos con varios años de experiencia en el acompañamiento diario de adultos mayores, 
                        siempre desde un enfoque <strong className="text-primary-600">humano, respetuoso y responsable</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 lg:p-10 border-2 border-primary-100 rounded-3xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl w-12 h-12">
                      <StarIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-trust-900 text-2xl">Nuestro Sueño</h3>
                    <p className="text-trust-700 text-lg leading-relaxed">
                      Queremos que cada adulto mayor se sienta <strong className="text-primary-600">acompañado, querido y valorado</strong>. 
                      Aspiramos a ser la familia extendida que brinda compañía, escucha con paciencia, 
                      comparte momentos especiales y hace que cada día sea un poco más brillante.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values Highlight */}
              <div className="bg-white shadow-xl p-8 lg:p-10 border border-gray-100 rounded-3xl">
                <h3 className="mb-6 font-bold text-trust-900 text-xl text-center">
                  Nuestros Principios Fundamentales
                </h3>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-3">
                  <div className="text-center">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-3 rounded-2xl w-16 h-16">
                      <UserGroupIcon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-2 font-semibold text-trust-900">Presencia</h4>
                    <p className="text-trust-600 text-sm">Estar ahí cuando más se necesita</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-primary-500 mx-auto mb-3 rounded-2xl w-16 h-16">
                      <ClockIcon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-2 font-semibold text-trust-900">Paciencia</h4>
                    <p className="text-trust-600 text-sm">Tiempo y comprensión sin prisa</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-3 rounded-2xl w-16 h-16">
                      <HeartIcon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-2 font-semibold text-trust-900">Empatía</h4>
                    <p className="text-trust-600 text-sm">Entender y compartir sentimientos</p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-blue-50 p-6 border border-blue-200 rounded-2xl">
                <div className="flex items-start space-x-3">
                  <ShieldCheckIcon className="flex-shrink-0 mt-0.5 w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="mb-2 font-semibold text-blue-900">Servicios No Médicos</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      <strong>Bienestar y Cuidado en el Hogar</strong> ofrece servicios de acompañamiento y apoyo no médico. 
                      No brindamos servicios médicos ni sustituimos la atención médica profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="lg:col-span-1">
              <div className="top-8 sticky space-y-6">
                <h3 className="mb-8 font-bold text-trust-900 text-xl text-center">
                  Nuestros Números
                </h3>
                <div className="gap-4 grid grid-cols-2 lg:grid-cols-1">
                  {stats.map((stat, index) => (
                    <div key={stat.name} className="bg-white shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-2xl text-center transition-shadow duration-300">
                      <div className="mb-2 font-bold text-primary-600 text-3xl sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="font-medium text-trust-600 text-sm leading-tight">{stat.name}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 mt-8 p-6 rounded-2xl text-white text-center">
                  <h4 className="mb-3 font-bold text-xl">¿Necesitas Acompañamiento?</h4>
                  <p className="mb-4 text-primary-100 text-sm leading-relaxed">
                    Contáctanos para una consulta gratuita y descubre cómo podemos ayudar a tu familia
                  </p>
                  <div className="flex sm:flex-row flex-col gap-2">
                    <a 
                      href="/contacto" 
                      className="bg-white hover:bg-primary-50 px-4 py-2 rounded-lg font-semibold text-primary-600 text-sm transition-colors"
                    >
                      Contactar Ahora
                    </a>
                    <a 
                      href="https://wa.me/17867527884" 
                      className="hover:bg-white px-4 py-2 border-2 border-white rounded-lg font-semibold text-white hover:text-primary-600 text-sm transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="z-0 absolute inset-0 bg-cover bg-center opacity-15 blur-sm timeline-bg"
        ></div>
        
        {/* Gradient overlay */}
        <div className="z-10 absolute inset-0 bg-gradient-to-br from-trust-50/95 to-primary-50/95"></div>
        
        <div className="z-20 relative mx-auto px-6 lg:px-8 max-w-7xl">
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
            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Timeline Line */}
              <div className="left-1/2 absolute bg-gradient-to-b from-primary-200 to-secondary-200 w-1 -translate-x-1/2 transform" 
                   style={{ height: `${timeline.length * 160}px` }}></div>

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
                      <div className="bg-white shadow-lg hover:shadow-xl p-6 rounded-2xl transition-shadow duration-300">
                        <div className="mb-2 font-bold text-primary-600 text-2xl">{event.year}</div>
                        <h3 className="mb-3 font-semibold text-trust-900 text-xl">{event.title}</h3>
                        <p className="text-trust-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden block relative">
              {/* Continuous Vertical Line */}
              <motion.div 
                className="top-6 left-6 absolute bg-gradient-to-b from-primary-200 via-primary-400 to-secondary-400 rounded-full w-0.5"
                style={{ height: `${timeline.length * 200 + 100}px` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              
              {/* Animated Progress Dot */}
              <motion.div
                className="top-5 left-5 z-20 absolute bg-secondary-500 rounded-full w-2 h-2"
                initial={{ y: 0 }}
                whileInView={{ y: `${(timeline.length - 1) * 200 + 80}px` }}
                transition={{ 
                  duration: 2, 
                  delay: 1.5,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
              />

              <div className="z-10 relative space-y-16">
                {timeline.map((event, index) => (
                  <motion.div 
                    key={event.year} 
                    className="relative flex items-start space-x-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot with Pulse Animation */}
                    <motion.div 
                      className="z-30 flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg rounded-full w-12 h-12"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (index * 0.2) + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        initial={{ rotate: -180 }}
                        whileInView={{ rotate: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: (index * 0.2) + 0.5 
                        }}
                        viewport={{ once: true }}
                      >
                        <event.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      {/* Pulse Ring */}
                      <motion.div
                        className="absolute border-2 border-primary-300 rounded-full w-12 h-12"
                        initial={{ scale: 1, opacity: 0.7 }}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          delay: (index * 0.2) + 1,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </motion.div>

                    {/* Content with Slide Animation */}
                    <motion.div 
                      className="flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (index * 0.2) + 0.4 
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-white shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-2xl transition-all duration-300"
                        whileHover={{ 
                          y: -5,
                          boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                        }}
                      >
                        <motion.div 
                          className="mb-2 font-bold text-primary-600 text-xl"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: (index * 0.2) + 0.6 }}
                          viewport={{ once: true }}
                        >
                          {event.year}
                        </motion.div>
                        <motion.h3 
                          className="mb-3 font-semibold text-trust-900 text-lg"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: (index * 0.2) + 0.7 }}
                          viewport={{ once: true }}
                        >
                          {event.title}
                        </motion.h3>
                        <motion.p 
                          className="text-trust-600 text-sm leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: (index * 0.2) + 0.8 }}
                          viewport={{ once: true }}
                        >
                          {event.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
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