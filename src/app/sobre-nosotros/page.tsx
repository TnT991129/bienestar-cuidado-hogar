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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Sobre</span>{' '}
              <span className="text-trust-800">Nosotros</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-trust-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprometidos con el bienestar y la dignidad de las personas mayores
            </motion.p>
            
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MapPinIcon className="w-5 h-5 text-primary-600" />
              <span className="text-trust-700 font-medium">Disponibles en toda la isla</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-max">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card text-center">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🏠
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="gradient-text">Nuestra Historia</span>
              </h2>
              
              <div className="space-y-6 text-lg text-trust-600 leading-relaxed">
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
      <section className="section-padding bg-gradient-to-br from-primary-50/30 to-secondary-50/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Nuestros Principios</span>
            </h2>
            <p className="text-xl text-trust-600 max-w-2xl mx-auto">
              Los valores que guían cada uno de nuestros cuidados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="glass-card text-center group"
                >
                  <div className="relative">
                    <motion.div 
                      className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="floating-element absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-70"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
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
      <section className="section-padding bg-white/70 backdrop-blur-sm">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Conoce a Nuestra Fundadora</span>
              </h2>
              <p className="text-xl text-trust-600">
                La visión y el corazón detrás de nuestra misión
              </p>
            </div>

            <div className="glass-card">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <motion.div 
                  className="lg:col-span-1 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative inline-block">
                    <motion.div 
                      className="text-8xl mb-4 relative z-10"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {founder.image}
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-2xl opacity-30 scale-150 animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 gradient-text">
                    {founder.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-sm text-trust-500 italic">
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
                    <div className="floating-element-delayed absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-60"></div>
                    
                    <blockquote className="text-lg text-trust-700 leading-relaxed relative z-10">
                      <span className="text-4xl text-primary-300 absolute -top-2 -left-2">"</span>
                      {founder.description}
                      <span className="text-4xl text-primary-300 absolute -bottom-6 right-0">"</span>
                    </blockquote>
                    
                    <div className="floating-element absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-full opacity-50"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-primary-50/20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Nuestra Filosofía</span>
            </h2>
            <p className="text-xl text-trust-600 max-w-2xl mx-auto">
              Los pilares que definen nuestro compromiso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card text-center group hover:shadow-2xl"
            >
              <div className="relative mb-8">
                <motion.div 
                  className="mx-auto w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <HeartIcon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="floating-element absolute top-0 right-4 w-4 h-4 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-70"></div>
                <div className="floating-element-delayed absolute bottom-0 left-4 w-3 h-3 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-60"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Nuestra Misión
              </h3>
              
              <p className="text-trust-600 leading-relaxed text-lg">
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
              className="glass-card text-center group hover:shadow-2xl"
            >
              <div className="relative mb-8">
                <motion.div 
                  className="mx-auto w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <StarIcon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="floating-element absolute top-0 left-4 w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-70"></div>
                <div className="floating-element-delayed absolute bottom-0 right-4 w-3 h-3 bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-full opacity-60"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Nuestra Visión
              </h3>
              
              <p className="text-trust-600 leading-relaxed text-lg">
                Ser la empresa líder en servicios de cuidado domiciliario para personas mayores, 
                reconocida por la excelencia en nuestro trato humano y la confianza de las familias 
                que nos eligen para el cuidado de sus seres queridos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="floating-element absolute top-20 right-20 w-24 h-24 bg-secondary-300/10 rounded-full blur-xl"></div>
          <div className="floating-element-delayed absolute bottom-20 left-1/4 w-40 h-40 bg-primary-300/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-max relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
              <motion.div 
                className="text-6xl mb-8"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                💝
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-shadow">
                <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                  Un Cuidado que Trasciende
                </span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-10">
                <p className="text-primary-100">
                  En <strong className="text-white">Bienestar y Cuidado en el Hogar</strong>, 
                  entendemos que cada persona mayor tiene una historia única, llena de sabiduría 
                  y experiencias invaluables.
                </p>
                
                <p className="text-primary-50">
                  Nuestro compromiso va más allá del cuidado básico: creamos lazos de confianza, 
                  ofrecemos compañía genuina y honramos la dignidad de cada persona que atendemos.
                </p>
                
                <p className="text-white font-medium">
                  Porque creemos que el amor y el respeto son la mejor medicina para el alma.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="floating-element bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  <span className="text-white font-medium">❤️ Cuidado con Amor</span>
                </div>
                <div className="floating-element-delayed bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  <span className="text-white font-medium">🤝 Compañía Genuina</span>
                </div>
                <div className="floating-element bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  <span className="text-white font-medium">🏡 Comodidad del Hogar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="animate-gradient bg-gradient-to-r from-primary-200/20 via-secondary-200/20 to-primary-200/20 absolute inset-0"></div>
          <div className="floating-element absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary-300/30 to-primary-400/30 rounded-full blur-xl"></div>
          <div className="floating-element-delayed absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary-300/20 to-secondary-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-100/10 to-secondary-100/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container-max relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-12 shadow-2xl border border-white/30 max-w-4xl mx-auto glow-shadow">
              <motion.div 
                className="text-6xl mb-8"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                📞
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-shadow">
                <span className="gradient-text">¿Necesitas Nuestros Servicios?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-trust-600 mb-10 leading-relaxed max-w-2xl mx-auto">
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
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group animate-pulse-glow"
                  >
                    <PhoneIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Llamar Ahora</span>
                  </a>
                </motion.div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 inline-block shadow-lg">
                  <div className="flex items-center justify-center gap-3 text-trust-700">
                    <PhoneIcon className="w-5 h-5 text-primary-600" />
                    <span className="font-bold text-xl gradient-text">(786) 752-7884</span>
                  </div>
                  <p className="text-sm text-trust-500 mt-2">Disponible 24/7 para emergencias</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary-200/50">
                <p className="text-trust-500 text-sm">
                  <strong className="text-primary-700">Evaluación gratuita</strong> • 
                  <strong className="text-primary-700 ml-2">Consulta sin compromiso</strong> • 
                  <strong className="text-primary-700 ml-2">Atención personalizada</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}