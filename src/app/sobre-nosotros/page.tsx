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

const principles = [
  {
    name: 'Presencia',
    description: 'Estar disponibles y atentos cuando más se necesita.',
    icon: UserGroupIcon
  },
  {
    name: 'Paciencia',
    description: 'Respetar los tiempos, hábitos y necesidades de cada persona.',
    icon: ClockIcon
  },
  {
    name: 'Empatía',
    description: 'Escuchar, comprender y acompañar desde el respeto y la sensibilidad.',
    icon: HeartIcon
  }
]

const founder = {
  name: 'Mirian González Guillén',
  role: 'Fundadora',
  credentials: 'Con experiencia en el acompañamiento familiar de adultos mayores',
  description: 'Mirian inicia esta iniciativa motivada por el deseo de ofrecer un trato más humano, cercano y respetuoso a las personas mayores. Su visión se basa en la importancia de la compañía, la paciencia y el apoyo diario como pilares del bienestar en el hogar.',
  image: '👩‍🦳'
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-primary-50/20 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600/10 via-secondary-500/10 to-primary-400/5 py-20 sm:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="-top-40 -right-40 absolute bg-gradient-to-br from-primary-200/30 to-secondary-200/30 blur-3xl rounded-full w-80 h-80 animate-pulse"></div>
          <div className="-bottom-40 -left-40 absolute bg-gradient-to-br from-secondary-200/30 to-primary-200/30 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000"></div>
          <div className="top-1/2 left-1/2 absolute bg-gradient-to-br from-primary-100/20 to-secondary-100/20 blur-3xl rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-shadow mb-8 font-bold text-4xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Sobre</span>{' '}
              <span className="text-trust-800">Nosotros</span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mb-8 max-w-3xl text-trust-600 text-xl md:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprometidos con el bienestar y la dignidad de las personas mayores
            </motion.p>
            
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 shadow-xl backdrop-blur-lg px-6 py-3 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MapPinIcon className="w-5 h-5 text-primary-600" />
              <span className="font-medium text-trust-700">Disponibles en toda la isla</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="bg-white/50 backdrop-blur-sm section-padding">
        <div className="container-max">
          <motion.div 
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center glass-card">
              <motion.div 
                className="mb-6 text-6xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🏠
              </motion.div>
              
              <h2 className="mb-8 font-bold text-3xl md:text-4xl">
                <span className="gradient-text">Nuestra Historia</span>
              </h2>
              
              <div className="space-y-6 text-trust-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-700">Bienestar y Cuidado en el Hogar</strong> es una iniciativa 
                  nacida del amor y la dedicación hacia nuestros adultos mayores. Entendemos que cada persona 
                  merece envejecer con dignidad, respeto y cariño en la comodidad de su propio hogar.
                </p>
                
                <p>
                  Nuestro enfoque se centra en brindar un <strong className="text-primary-700">cuidado personalizado</strong> 
                  que respeta la individualidad, las preferencias y los hábitos de cada persona. No solo nos enfocamos 
                  en las necesidades físicas, sino también en el bienestar emocional y social.
                </p>
                
                <p>
                  Creemos firmemente que el hogar es el lugar donde las personas se sienten más seguras y cómodas. 
                  Por eso, nuestra misión es hacer posible que puedan permanecer en su entorno familiar, 
                  manteniendo su independencia con el apoyo necesario.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-gradient-to-br from-primary-50/30 to-secondary-50/30 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 font-bold text-3xl md:text-4xl">
              <span className="gradient-text">Nuestros Principios</span>
            </h2>
            <p className="mx-auto max-w-2xl text-trust-600 text-xl">
              Los valores que guían cada uno de nuestros cuidados
            </p>
          </motion.div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center glass-card"
                >
                  <div className="relative">
                    <motion.div 
                      className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-xl mx-auto mb-6 rounded-2xl w-16 h-16 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="-top-2 -right-2 absolute bg-gradient-to-br from-secondary-400 to-secondary-500 opacity-70 rounded-full w-6 h-6 floating-element"></div>
                  </div>
                  
                  <h3 className="mb-4 font-bold text-2xl gradient-text">
                    {principle.name}
                  </h3>
                  
                  <p className="text-trust-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white/70 backdrop-blur-sm section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-12 text-center">
              <h2 className="mb-6 font-bold text-3xl md:text-4xl">
                <span className="gradient-text">Conoce a Nuestra Fundadora</span>
              </h2>
              <p className="text-trust-600 text-xl">
                La visión y el corazón detrás de nuestra misión
              </p>
            </div>

            <div className="glass-card">
              <div className="items-center gap-8 grid grid-cols-1 lg:grid-cols-3">
                <motion.div 
                  className="lg:col-span-1 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block relative">
                    <motion.div 
                      className="z-10 relative mb-4 text-8xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {founder.image}
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 opacity-30 blur-2xl rounded-full scale-150 animate-pulse"></div>
                  </div>
                  
                  <h3 className="mb-2 font-bold text-2xl gradient-text">
                    {founder.name}
                  </h3>
                  <p className="mb-4 font-medium text-primary-600">
                    {founder.role}
                  </p>
                  <p className="text-trust-500 text-sm italic">
                    {founder.credentials}
                  </p>
                </motion.div>

                <motion.div 
                  className="lg:col-span-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="-top-3 -left-3 absolute bg-gradient-to-br from-primary-300 to-primary-400 opacity-60 rounded-full w-8 h-8 floating-element-delayed"></div>
                    
                    <blockquote className="z-10 relative text-trust-700 text-lg leading-relaxed">
                      <span className="-top-2 -left-2 absolute text-primary-300 text-4xl">"</span>
                      {founder.description}
                      <span className="right-0 -bottom-6 absolute text-primary-300 text-4xl">"</span>
                    </blockquote>
                    
                    <div className="-right-3 -bottom-3 absolute bg-gradient-to-br from-secondary-300 to-secondary-400 opacity-50 rounded-full w-6 h-6 floating-element"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-br from-trust-50 to-primary-50/20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 font-bold text-3xl md:text-4xl">
              <span className="gradient-text">Nuestra Filosofía</span>
            </h2>
            <p className="mx-auto max-w-2xl text-trust-600 text-xl">
              Los pilares que definen nuestro compromiso
            </p>
          </motion.div>

          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group hover:shadow-2xl text-center glass-card"
            >
              <div className="relative mb-8">
                <motion.div 
                  className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-xl mx-auto mb-6 rounded-3xl w-20 h-20 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <HeartIcon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="top-0 right-4 absolute bg-gradient-to-br from-secondary-400 to-secondary-500 opacity-70 rounded-full w-4 h-4 floating-element"></div>
                <div className="bottom-0 left-4 absolute bg-gradient-to-br from-primary-300 to-primary-400 opacity-60 rounded-full w-3 h-3 floating-element-delayed"></div>
              </div>
              
              <h3 className="mb-6 font-bold text-2xl gradient-text">
                Nuestra Misión
              </h3>
              
              <p className="text-trust-600 text-lg leading-relaxed">
                Brindar servicios de cuidado y acompañamiento de calidad a personas mayores, 
                promoviendo su bienestar integral y autonomía en la comodidad de su hogar, 
                con un enfoque humano, respetuoso y personalizado.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group hover:shadow-2xl text-center glass-card"
            >
              <div className="relative mb-8">
                <motion.div 
                  className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-secondary-600 shadow-lg group-hover:shadow-xl mx-auto mb-6 rounded-3xl w-20 h-20 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <StarIcon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="top-0 left-4 absolute bg-gradient-to-br from-primary-400 to-primary-500 opacity-70 rounded-full w-4 h-4 floating-element"></div>
                <div className="right-4 bottom-0 absolute bg-gradient-to-br from-secondary-300 to-secondary-400 opacity-60 rounded-full w-3 h-3 floating-element-delayed"></div>
              </div>
              
              <h3 className="mb-6 font-bold text-2xl gradient-text">
                Nuestra Visión
              </h3>
              
              <p className="text-trust-600 text-lg leading-relaxed">
                Ser la empresa líder en servicios de cuidado domiciliario para personas mayores, 
                reconocida por la excelencia en nuestro trato humano y la confianza de las familias 
                que nos eligen para el cuidado de sus seres queridos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden text-white section-padding">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="top-10 left-10 absolute bg-white/5 blur-2xl rounded-full w-32 h-32 animate-pulse"></div>
          <div className="top-20 right-20 absolute bg-secondary-300/10 blur-xl rounded-full w-24 h-24 floating-element"></div>
          <div className="bottom-20 left-1/4 absolute bg-primary-300/5 blur-3xl rounded-full w-40 h-40 floating-element-delayed"></div>
          <div className="right-10 bottom-10 absolute bg-white/5 blur-2xl rounded-full w-28 h-28 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-12 border border-white/20 rounded-3xl">
              <motion.div 
                className="mb-8 text-6xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                💝
              </motion.div>
              
              <h2 className="text-shadow mb-8 font-bold text-3xl md:text-5xl">
                <span className="bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white text-transparent">
                  Un Cuidado que Trasciende
                </span>
              </h2>
              
              <div className="space-y-6 mb-10 text-lg md:text-xl leading-relaxed">
                <p className="text-primary-100">
                  En <strong className="text-white">Bienestar y Cuidado en el Hogar</strong>, 
                  entendemos que cada persona mayor tiene una historia única, llena de sabiduría 
                  y experiencias invaluables.
                </p>
                
                <p className="text-primary-50">
                  Nuestro compromiso va más allá del cuidado básico: creamos lazos de confianza, 
                  ofrecemos compañía genuina y honramos la dignidad de cada persona que atendemos.
                </p>
                
                <p className="font-medium text-white">
                  Porque creemos que el amor y el respeto son la mejor medicina para el alma.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full floating-element">
                  <span className="font-medium text-white">❤️ Cuidado con Amor</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full floating-element-delayed">
                  <span className="font-medium text-white">🤝 Compañía Genuina</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full floating-element">
                  <span className="font-medium text-white">🏡 Comodidad del Hogar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 overflow-hidden section-padding">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-secondary-200/20 to-primary-200/20 animate-gradient"></div>
          <div className="top-10 left-10 absolute bg-gradient-to-br from-primary-300/30 to-primary-400/30 blur-xl rounded-full w-20 h-20 floating-element"></div>
          <div className="right-10 bottom-10 absolute bg-gradient-to-br from-secondary-300/20 to-secondary-400/20 blur-2xl rounded-full w-32 h-32 floating-element-delayed"></div>
          <div className="top-1/2 left-1/2 absolute bg-gradient-to-br from-primary-100/10 to-secondary-100/10 blur-3xl rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        
        <div className="relative container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/70 glow-shadow shadow-2xl backdrop-blur-lg mx-auto p-12 border border-white/30 rounded-3xl max-w-4xl">
              <motion.div 
                className="mb-8 text-6xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                📞
              </motion.div>
              
              <h2 className="text-shadow mb-8 font-bold text-3xl md:text-5xl">
                <span className="gradient-text">¿Necesitas Nuestros Servicios?</span>
              </h2>
              
              <p className="mx-auto mb-10 max-w-2xl text-trust-600 text-lg md:text-xl leading-relaxed">
                Estamos aquí para ayudarte. Contáctanos hoy mismo y descubre cómo podemos 
                mejorar la calidad de vida de tu ser querido con nuestro cuidado especializado.
              </p>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://wa.me/17867527884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 hover:from-green-600 to-green-600 hover:to-green-700 shadow-xl hover:shadow-2xl px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all animate-pulse-glow duration-300"
                  >
                    <PhoneIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Llamar Ahora</span>
                  </a>
                </motion.div>
                
                <div className="inline-block bg-white/80 shadow-lg backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex justify-center items-center gap-3 text-trust-700">
                    <PhoneIcon className="w-5 h-5 text-primary-600" />
                    <span className="font-bold text-xl gradient-text">(786) 752-7884</span>
                  </div>
                  <p className="mt-2 text-trust-500 text-sm">Disponible 24/7 para emergencias</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-primary-200/50 border-t">
                <p className="text-trust-500 text-sm">
                  <strong className="text-primary-700">Evaluación gratuita</strong> • 
                  <strong className="ml-2 text-primary-700">Consulta sin compromiso</strong> • 
                  <strong className="ml-2 text-primary-700">Atención personalizada</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}