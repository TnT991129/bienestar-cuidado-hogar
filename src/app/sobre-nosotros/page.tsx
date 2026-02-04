'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
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

const getPrinciples = (t: any) => [
  {
    name: t('about.principles.presence.name'),
    description: t('about.principles.presence.description'),
    icon: UserGroupIcon
  },
  {
    name: t('about.principles.patience.name'),
    description: t('about.principles.patience.description'),
    icon: ClockIcon
  },
  {
    name: t('about.principles.empathy.name'),
    description: t('about.principles.empathy.description'),
    icon: HeartIcon
  }
]

const getFounder = (t: any) => ({
  name: t('about.founder.name'),
  role: t('about.founder.role'),
  credentials: t('about.founder.credentials'),
  description: t('about.founder.description'),
  image: '👩‍🦳'
});

export default function AboutPage() {
  const { t } = useLanguage()
  const principles = getPrinciples(t)
  const founder = getFounder(t)
  
  // Helper para rutas de assets en GitHub Pages
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : ''
    return `${basePath}${path}`
  }
  
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-primary-50/20 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen lg:min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={getAssetPath("/sobre-nosotros-nuevo.webp")}
            alt="Cuidado y bienestar en el hogar" 
            className="w-full h-full object-cover"
            style={{ objectPosition: '75% 50%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
        </div>
        
        {/* Elegant Background Elements */}
        <div className="absolute inset-0 overflow-hidden">          
          {/* Subtle geometric shapes */}
          <div className="-top-20 -right-20 absolute bg-gradient-to-br from-white/5 to-transparent blur-2xl rounded-full w-96 h-96 animate-float"></div>
          <div className="-bottom-32 -left-32 absolute bg-gradient-to-br from-white/5 to-transparent blur-3xl rounded-full w-80 h-80 animate-float-delayed"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -skew-y-12 transform"></div>
          </div>
          
          {/* Floating orbs */}
          <div className="top-1/4 right-1/4 absolute bg-gradient-to-br from-white/10 to-transparent blur-xl rounded-full w-32 h-32 animate-bounce-slow"></div>
          <div className="bottom-1/3 left-1/3 absolute bg-gradient-to-br from-white/10 to-transparent blur-xl rounded-full w-24 h-24 animate-bounce-slow delay-700"></div>
        </div>
        
        <div className="relative container-max">
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:grid lg:grid-cols-12 px-4 sm:px-6 py-2 sm:py-4 lg:py-0 min-h-[85vh] lg:min-h-screen">
            
            {/* Main Content - Mobile First */}
            <div className="order-1 lg:order-1 lg:col-span-7 w-full lg:max-w-none max-w-2xl lg:text-left text-center">
              
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md mb-2 sm:mb-3 lg:mb-6 px-3 sm:px-4 py-2 border border-white/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <HeartIcon className="w-4 h-4 text-white/80" />
                <span className="font-medium text-white/90 text-xs sm:text-sm">{t('about.heroBadge')}</span>
              </motion.div>

              {/* Title - Responsive sizing */}
              <motion.h1 
                className="text-shadow mb-2 sm:mb-3 lg:mb-6 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-white">{t('about.title').split(' ')[0]}</span>
                <span className="block text-white/90">{t('about.title').split(' ').slice(1).join(' ')}</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-8 max-w-lg lg:max-w-xl text-white/80 text-base sm:text-lg lg:text-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('about.subtitle')}
              </motion.p>

              {/* CTA Buttons - Mobile optimized */}
              <motion.div
                className="flex sm:flex-row flex-col justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="bg-primary-600 hover:bg-primary-700 shadow-xl px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-4 rounded-full font-semibold text-white text-xs sm:text-sm lg:text-base hover:scale-105 transition-all duration-300 transform">
                  {t('about.heroButtons.services')}
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-4 border border-white/30 rounded-full font-semibold text-white text-xs sm:text-sm lg:text-base transition-all duration-300">
                  {t('about.heroButtons.contact')}
                </button>
              </motion.div>

              {/* Location */}
              <motion.div
                className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 shadow-xl backdrop-blur-lg px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 border border-white/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <MapPinIcon className="w-4 h-4 text-primary-600" />
                <span className="font-medium text-trust-700 text-xs sm:text-sm">{t('about.location')}</span>
              </motion.div>

            </div>

            {/* Stats & Visual Elements - Mobile optimized */}
            <div className="flex flex-col justify-center items-center lg:items-end space-y-2 lg:space-y-6 order-2 lg:order-2 lg:col-span-5 mt-2 lg:mt-0 w-full max-w-sm lg:max-w-sm sm:max-w-md xl:max-w-md">
              
              {/* Stats Cards - Mobile layout improved - All 3 in a row */}
              <motion.div
                className="gap-1.5 sm:gap-2 lg:gap-4 grid grid-cols-3 lg:grid-cols-1 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* All stats cards same size */}
                <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 lg:p-6 border border-white/20 rounded-xl lg:rounded-2xl text-center">
                  <div className="mb-0.5 lg:mb-2 font-bold text-white text-sm sm:text-lg lg:text-4xl">100+</div>
                  <div className="text-white/70 text-xs lg:text-sm leading-tight">{t('about.stats.families')}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 lg:p-6 border border-white/20 rounded-xl lg:rounded-2xl text-center">
                  <div className="mb-0.5 lg:mb-2 font-bold text-white text-sm sm:text-lg lg:text-4xl">24/7</div>
                  <div className="text-white/70 text-xs lg:text-sm leading-tight">{t('about.stats.available')}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 lg:p-6 border border-white/20 rounded-xl lg:rounded-2xl text-center">
                  <div className="mb-0.5 lg:mb-2 font-bold text-white text-sm sm:text-lg lg:text-4xl">5+</div>
                  <div className="text-white/70 text-xs lg:text-sm leading-tight">{t('about.stats.years')}</div>
                </div>
              </motion.div>

              {/* Features List - Mobile compact */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm p-2.5 sm:p-3 lg:p-6 border border-white/10 rounded-xl lg:rounded-2xl w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="space-y-1 sm:space-y-1.5 lg:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <div className="bg-green-500 rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 animate-pulse"></div>
                    <span className="text-white text-xs sm:text-sm">{t('about.features.available')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <StarIcon className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                    <span className="text-white text-xs sm:text-sm">{t('about.features.rating')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <ShieldCheckIcon className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400" />
                    <span className="text-white text-xs sm:text-sm">{t('about.features.certified')}</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Geometric shapes */}
            <motion.div
              className="top-1/4 left-1/4 absolute bg-primary-400/20 blur-3xl rounded-full w-32 h-32"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="right-1/3 bottom-1/4 absolute bg-secondary-400/20 blur-3xl rounded-full w-24 h-24"
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

        </div>
      </section>

      {/* Company Description */}
      <section className="bg-gradient-to-b from-trust-50/30 to-white section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-6xl">
            
            {/* Opening Section */}
            <motion.div 
              className="mb-24 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-display font-medium text-trust-800 text-3xl md:text-4xl tracking-wide">
                {t('about.historyTitle')}
              </h2>
              <div className="flex justify-center items-center gap-3">
                <div className="bg-gradient-to-r from-primary-400 to-primary-600 rounded-full w-12 h-0.5"></div>
                <div className="bg-primary-500 rounded-full w-1.5 h-1.5"></div>
                <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-full w-12 h-0.5"></div>
              </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="gap-20 grid grid-cols-1 lg:grid-cols-5">
              
              {/* Main Content Column */}
              <div className="space-y-16 lg:col-span-3">
                
                {/* First Paragraph - Featured */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display font-sans first-letter:font-semibold text-trust-600 first-letter:text-primary-600 text-xl md:text-2xl first-letter:text-5xl leading-relaxed first-letter:leading-none">
                    {t('about.historyContent')[0]}
                  </p>
                </motion.div>

                {/* Second and Third Paragraphs */}
                <div className="space-y-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-sans text-trust-600 text-lg leading-relaxed">
                      {t('about.historyContent')[1]}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-sans text-trust-600 text-lg leading-relaxed">
                      {t('about.historyContent')[2]}
                    </p>
                  </motion.div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="lg:top-24 lg:sticky space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  
                  {/* Mission Card */}
                  <div className="bg-white shadow-sm hover:shadow-md p-8 border border-trust-100 rounded-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full w-3 h-3"></div>
                      <h3 className="font-display font-semibold text-primary-800 text-lg">{t('about.sidebar.essence.title')}</h3>
                    </div>
                    <p className="font-sans text-trust-600 leading-relaxed">
                      {t('about.sidebar.essence.description')}
                    </p>
                  </div>

                  {/* Values Card */}
                  <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/30 p-8 border border-primary-100 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full w-3 h-3"></div>
                      <h3 className="font-display font-semibold text-secondary-800 text-lg">{t('about.sidebar.values.title')}</h3>
                    </div>
                    <div className="space-y-2 font-sans text-trust-600 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary-400 rounded-full w-1 h-1"></div>
                        <span>{t('about.sidebar.values.items.commitment')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary-400 rounded-full w-1 h-1"></div>
                        <span>{t('about.sidebar.values.items.responsibility')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary-400 rounded-full w-1 h-1"></div>
                        <span>{t('about.sidebar.values.items.warmth')}</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>

            {/* Bottom Section */}
            <motion.div 
              className="mt-24 pt-12 border-trust-150 border-t"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <p className="mb-4 font-display font-medium text-trust-700 text-lg">
                  {t('about.bottomSection.title')}
                </p>
                <div className="flex justify-center items-center gap-6 font-sans text-trust-500 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    {t('about.bottomSection.founded')}
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="bg-secondary-500 rounded-full w-2 h-2"></div>
                    {t('about.bottomSection.growing')}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
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
              <span className="gradient-text">{t('about.principles.title')}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-trust-600 text-xl">
              {t('about.principles.description')}
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
                <span className="gradient-text">{t('about.founder.title')}</span>
              </h2>
              <p className="text-trust-600 text-xl">
                {t('about.founder.subtitle')}
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
              <span className="gradient-text">{t('about.philosophy.title')}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-trust-600 text-xl">
              {t('about.philosophy.subtitle')}
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
                {t('about.mission.title')}
              </h3>
              
              <p className="text-trust-600 text-lg leading-relaxed">
                {t('about.mission.content')}
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
                {t('about.vision.title')}
              </h3>
              
              <p className="text-trust-600 text-lg leading-relaxed">
                {t('about.vision.content')}
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
                  {t('about.finalMessage.title')}
                </span>
              </h2>
              
              <div className="space-y-6 mb-10 text-lg md:text-xl leading-relaxed">
                <p className="text-primary-100">
                  {t('about.finalMessage.content')[0]}
                </p>
                
                <p className="text-primary-50">
                  {t('about.finalMessage.content')[1]}
                </p>
                
                <p className="font-medium text-white">
                  {t('about.finalMessage.content')[2]}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full floating-element">
                  <span className="font-medium text-white">{t('about.finalMessage.badges')[0]}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full floating-element-delayed">
                  <span className="font-medium text-white">{t('about.finalMessage.badges')[1]}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full floating-element">
                  <span className="font-medium text-white">{t('about.finalMessage.badges')[2]}</span>
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
                <span className="gradient-text">{t('about.cta.title')}</span>
              </h2>
              
              <p className="mx-auto mb-10 max-w-2xl text-trust-600 text-lg md:text-xl leading-relaxed">
                {t('about.cta.description')}
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
                    <span>{t('about.cta.callButton')}</span>
                  </a>
                </motion.div>
                
                <div className="inline-block bg-white/80 shadow-lg backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex justify-center items-center gap-3 text-trust-700">
                    <PhoneIcon className="w-5 h-5 text-primary-600" />
                    <span className="font-bold text-xl gradient-text">(786) 752-7884</span>
                  </div>
                  <p className="mt-2 text-trust-500 text-sm">{t('about.cta.availability')}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-primary-200/50 border-t">
                <p className="text-trust-500 text-sm">
                  <strong className="text-primary-700">{t('about.cta.services')[0]}</strong> • 
                  <strong className="ml-2 text-primary-700">{t('about.cta.services')[1]}</strong> • 
                  <strong className="ml-2 text-primary-700">{t('about.cta.services')[2]}</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}