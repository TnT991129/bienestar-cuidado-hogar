'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const stats = [
  { name: 'Años de experiencia', value: '15+' },
  { name: 'Familias atendidas', value: '100+' },
  { name: 'Cuidadores certificados', value: '10' },
  { name: 'Satisfacción del cliente', value: '98%' }
]

const values = [
  {
    name: 'Compasión',
    description: 'Tratamos a cada persona con el amor y respeto que merecen, como si fueran parte de nuestra propia familia.',
    icon: HeartIcon
  },
  {
    name: 'Profesionalismo',
    description: 'Nuestros cuidadores están altamente capacitados y mantienen los más altos estándares de atención.',
    icon: AcademicCapIcon
  },
  {
    name: 'Confiabilidad',
    description: 'Cumplimos nuestras promesas y estamos disponibles cuando más nos necesitas.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Disponibilidad',
    description: 'Ofrecemos servicios flexibles que se adaptan a las necesidades cambiantes de cada familia.',
    icon: ClockIcon
  }
]

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-trust-50 to-primary-50/30 py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl lg:text-center"
        >
          <h2 className="font-semibold text-primary-600 text-base leading-7">Sobre Nosotros</h2>
          <p className="mt-2 font-bold text-trust-900 text-4xl sm:text-6xl tracking-tight">
            Cuidando Familias con Amor y Profesionalismo por <br /><span className='bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 text-transparent'>Más de 15 Años</span>
          </p>
          <p className="mt-6 text-trust-600 text-lg leading-8">
            Somos una empresa familiar dedicada al cuidado domiciliario no médico de adultos mayores. 
            Entendemos lo importante que es mantener a tus seres queridos seguros, cómodos y felices 
            en la comodidad de su propio hogar.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-4xl"
        >
          <dl className="gap-x-8 gap-y-10 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-4 lg:max-w-none max-w-xl">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <dt className="text-trust-600 text-base leading-7">{stat.name}</dt>
                <dd className="font-bold text-primary-600 text-3xl sm:text-4xl leading-9 tracking-tight">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Main Content Grid */}
        <div className="gap-x-8 gap-y-16 lg:gap-y-8 grid grid-cols-1 lg:grid-cols-12 mx-auto lg:mx-0 mt-16 lg:mt-10 lg:max-w-none max-w-2xl">
          {/* Story Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <h3 className="mb-6 font-bold text-trust-900 text-2xl">Nuestra Historia</h3>
              
              <div className="space-y-6 text-trust-600">
                <p>
                  Fundada en 2008 por María Elena Rodríguez, una enfermera con más de 20 años de experiencia, 
                  <strong className="text-trust-800"> Bienestar y Cuidado en el Hogar</strong> nació del deseo 
                  de ofrecer una alternativa humana y personalizada al cuidado institucional.
                </p>
                
                <p>
                  Después de ver cómo muchos adultos mayores perdían su independencia al ser trasladados a 
                  centros de cuidado, María Elena decidió crear un servicio que permitiera a las personas 
                  envejecer con dignidad en la comodidad de su propio hogar, rodeados de sus recuerdos, 
                  mascotas y seres queridos.
                </p>
                
                <p>
                  Hoy, más de 15 años después, seguimos siendo una <strong className="text-primary-600">
                  empresa familiar</strong> que ha expandido sus servicios para atender a más de 500 familias 
                  en la región, manteniendo siempre nuestros valores fundamentales de compasión, respeto y 
                  excelencia en el cuidado.
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="flex-shrink-0">
                  {/* Placeholder for founder photo */}
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full w-16 h-16">
                    <span className="font-bold text-white text-xl">MR</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-trust-900 text-lg">María Elena Rodríguez</h4>
                  <p className="text-trust-600">Fundadora y Directora General</p>
                  <p className="text-trust-500 text-sm">Enfermera Registrada, 25+ años de experiencia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="bg-white shadow-lg p-8 rounded-2xl h-full">
              <h3 className="mb-6 font-bold text-trust-900 text-2xl">Nuestros Valores</h3>
              
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.name} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg w-10 h-10">
                        <value.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-trust-900">{value.name}</h4>
                      <p className="mt-1 text-trust-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-6 border-gray-200 border-t">
                <h4 className="mb-4 font-semibold text-trust-900">Certificaciones y Licencias</h4>
                <div className="space-y-2 text-trust-600 text-sm">
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                    <span>Licencia Estatal de Cuidado Domiciliario</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                    <span>Seguro de Responsabilidad Civil</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                    <span>Certificación en Primeros Auxilios</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                    <span>Acreditación de Calidad AAA</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <div className="flex justify-center items-center bg-white/20 mr-4 rounded-lg w-12 h-12">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-2xl">Nuestra Misión</h3>
              </div>
              <p className="text-primary-100 leading-relaxed">
                Proporcionar servicios de cuidado domiciliario de la más alta calidad que permitan a los 
                adultos mayores mantener su independencia, dignidad y calidad de vida en la comodidad de 
                su propio hogar, mientras brindamos tranquilidad y apoyo a sus familias.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-trust-600 to-primary-600 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <div className="flex justify-center items-center bg-white/20 mr-4 rounded-lg w-12 h-12">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-2xl">Nuestra Visión</h3>
              </div>
              <p className="text-trust-100 leading-relaxed">
                Ser la empresa líder en servicios de cuidado domiciliario en la región, reconocida por 
                nuestra excelencia, compasión y compromiso inquebrantable con el bienestar de nuestros 
                clientes y sus familias, transformando la forma en que se brinda el cuidado a los adultos mayores.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <UserGroupIcon className="mx-auto mb-6 w-12 h-12 text-primary-600" />
            <h3 className="mb-4 font-bold text-trust-900 text-2xl">
              ¿Te Gustaría Conocer a Nuestro Equipo?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-trust-600">
              Todos nuestros cuidadores son profesionales certificados con experiencia comprobada 
              y un genuino amor por ayudar a los demás. Conoce al equipo que cuidará de tu familia.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <a
                href="/equipo"
                className="inline-flex justify-center items-center bg-gradient-to-r from-primary-600 hover:from-primary-700 to-secondary-600 hover:to-secondary-700 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-white text-base transition-colors duration-200"
              >
                Conocer al Equipo
              </a>
              <a
                href="/sobre-nosotros"
                className="inline-flex justify-center items-center hover:bg-primary-50 px-6 py-3 border-2 border-primary-200 rounded-xl font-medium text-primary-700 text-base transition-colors duration-200"
              >
                Nuestra Historia Completa
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}