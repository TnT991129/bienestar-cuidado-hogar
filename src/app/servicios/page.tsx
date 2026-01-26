import type { Metadata } from 'next'
import { 
  HeartIcon,
  HomeIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Servicios de Acompañamiento NO Médico - Bienestar y Cuidado en el Hogar LLC',
  description: 'Servicios profesionales de acompañamiento y apoyo no médico para adultos mayores en Florida. Planes personalizados adaptados a cada familia.',
}

const companionshipAreas = [
  {
    id: 'personal-daily',
    name: 'Acompañamiento Personal Diario',
    description: 'Apoyo respetuoso en las actividades diarias básicas, manteniendo la dignidad y autonomía de la persona.',
    icon: HeartIcon,
    services: [
      'Apoyo con higiene personal y aseo',
      'Asistencia para vestirse y desvestirse',
      'Ayuda durante las comidas',
      'Apoyo básico para movilidad en el hogar',
      'Acompañamiento en rutinas diarias',
      'Recordatorios amigables para el cuidado personal'
    ]
  },
  {
    id: 'companionship-emotional',
    name: 'Compañía y Apoyo Emocional',
    description: 'Presencia cálida y conversación significativa para combatir la soledad y mantener el bienestar emocional.',
    icon: ChatBubbleLeftRightIcon,
    services: [
      'Conversación y compañía diaria',
      'Actividades recreativas adaptadas',
      'Lectura de libros, periódicos o revistas',
      'Escucha activa y apoyo emocional',
      'Acompañamiento en hobbies e intereses',
      'Participación en actividades familiares'
    ]
  },
  {
    id: 'home-support',
    name: 'Apoyo en el Hogar',
    description: 'Asistencia con tareas domésticas básicas para mantener un ambiente limpio, seguro y cómodo.',
    icon: HomeIcon,
    services: [
      'Tareas domésticas ligeras y organizadas',
      'Preparación de comidas sencillas y nutritivas',
      'Organización de espacios de vida',
      'Lavado básico de ropa personal',
      'Mantenimiento del orden en áreas comunes',
      'Cuidado básico de plantas domésticas'
    ]
  },
  {
    id: 'reminders-routines',
    name: 'Recordatorios y Rutinas',
    description: 'Apoyo para mantener horarios organizados y recordatorios importantes del día a día.',
    icon: ClockIcon,
    services: [
      'Recordatorios de horarios y citas',
      'Organización del día y actividades',
      'Comunicación regular con la familia',
      'Recordatorios de actividades importantes',
      'Apoyo para mantener rutinas saludables',
      'Coordinación de visitas familiares'
    ],
    important: 'IMPORTANTE: No administramos medicamentos. Los recordatorios de medicación son únicamente informativos.'
  },
  {
    id: 'outside-accompaniment',
    name: 'Acompañamiento Fuera del Hogar',
    description: 'Compañía segura para salidas necesarias y actividades sociales fuera de la casa.',
    icon: UserGroupIcon,
    services: [
      'Acompañamiento a citas (sin intervención médica)',
      'Compañía para compras básicas y necesarias',
      'Visitas a familiares y amigos',
      'Actividades sociales y recreativas',
      'Paseos al aire libre y parques',
      'Eventos comunitarios o religiosos'
    ]
  },
  {
    id: 'supervision-safety',
    name: 'Supervisión General y Seguridad',
    description: 'Presencia atenta para prevenir riesgos domésticos y mantener comunicación con la familia.',
    icon: ShieldCheckIcon,
    services: [
      'Presencia y supervisión general',
      'Observación de bienestar general',
      'Prevención básica de caídas',
      'Comunicación inmediata con familiares',
      'Mantenimiento de ambiente seguro',
      'Seguimiento de rutinas establecidas'
    ]
  }
]

const workingProcess = [
  {
    step: '01',
    title: 'Consulta Inicial',
    description: 'Conversación personalizada para conocer las necesidades específicas de su ser querido y las preferencias de la familia.'
  },
  {
    step: '02', 
    title: 'Diseño de Plan Personalizado',
    description: 'Creamos un plan único adaptado a los horarios, rutinas y tipo de acompañamiento que mejor se ajuste a sus necesidades.'
  },
  {
    step: '03',
    title: 'Inicio del Acompañamiento',
    description: 'Comenzamos el servicio con una transición gradual y supervisión cercana para asegurar comodidad y confianza.'
  },
  {
    step: '04',
    title: 'Seguimiento y Ajustes',
    description: 'Evaluación continua del servicio y ajustes necesarios para garantizar la satisfacción completa de la familia.'
  }
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50/20">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-24 sm:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30 rounded-full text-white/90 text-sm mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              Servicios de Acompañamiento NO Médico
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Acompañamiento Profesional{' '}
              <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                Personalizado
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Ofrecemos servicios de acompañamiento y apoyo no médico, 
              adaptados cuidadosamente a las necesidades únicas de cada persona y familia.
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-2xl p-8 lg:p-12 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
                  Nuestro Enfoque de Acompañamiento
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-trust-700 leading-relaxed">
                <p>
                  En <strong>Bienestar y Cuidado en el Hogar LLC</strong>, nos especializamos en brindar servicios de 
                  <strong> acompañamiento y apoyo no médico</strong> para adultos mayores que desean mantener su 
                  independencia en la comodidad de su propio hogar.
                </p>
                
                <p>
                  Entendemos que cada persona es única, con sus propias rutinas, preferencias y necesidades. 
                  Por eso, nuestro enfoque se centra en <strong>planes completamente personalizados</strong> que 
                  se adaptan al ritmo de vida y las necesidades específicas de su ser querido.
                </p>
                
                <p>
                  Nuestros servicios están diseñados para complementar el cuidado médico profesional, 
                  proporcionando la <strong>compañía, apoyo y tranquilidad</strong> que tanto usted como su 
                  familia necesitan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Acompañamiento */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50/30 to-secondary-50/20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
              <span className="gradient-text">Áreas de Apoyo</span> Disponibles
            </h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              Cada área puede combinarse en un plan personalizado diseñado específicamente 
              para las necesidades de su ser querido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companionshipAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={area.id} className="group bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl hover:shadow-2xl p-8 rounded-3xl transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 w-14 h-14 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-trust-900 text-lg leading-tight">
                        {area.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-trust-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-trust-700 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {area.important && (
                    <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                      <div className="flex items-start">
                        <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-amber-800 text-sm font-medium">{area.important}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
              <span className="gradient-text">Cómo</span> Trabajamos
            </h2>
            <p className="text-xl text-trust-600 max-w-2xl mx-auto">
              Un proceso simple y personalizado para comenzar el mejor acompañamiento para su ser querido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  {index < workingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-bold text-trust-900 text-lg mb-3">{step.title}</h3>
                <p className="text-trust-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Personalizados */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-trust-50 to-primary-50/20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white/80 backdrop-blur-lg border border-white/50 shadow-2xl p-8 lg:p-12 rounded-3xl">
              <div className="flex items-center justify-center mb-8">
                <DocumentTextIcon className="w-16 h-16 text-primary-600" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-6">
                <span className="gradient-text">Planes Completamente</span> Personalizados
              </h2>
              
              <div className="space-y-6 text-lg text-trust-700 text-left max-w-3xl mx-auto">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p><strong>No existen planes estándar:</strong> Cada servicio se diseña específicamente para las necesidades, rutinas y preferencias de su ser querido.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p><strong>Horarios flexibles:</strong> Desde unas pocas horas al día hasta acompañamiento las 24 horas, adaptándonos a sus necesidades.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p><strong>Nivel de apoyo personalizado:</strong> Desde compañía ligera hasta apoyo más integral, todo definido tras nuestra consulta inicial.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p><strong>Servicios combinables:</strong> Mezclamos las áreas de apoyo que mejor respondan a las necesidades específicas de cada situación.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Legal/Aclaratoria */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-r-3xl">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Importante: Servicios NO Médicos
                  </h3>
                  
                  <div className="space-y-4 text-blue-800">
                    <p className="font-semibold text-lg">
                      Todos nuestros servicios son de acompañamiento y apoyo NO MÉDICO.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">NO proporcionamos:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Servicios médicos, clínicos o de enfermería</li>
                          <li>• Administración de medicamentos</li>
                          <li>• Diagnósticos o tratamientos médicos</li>
                          <li>• Cuidados terapéuticos especializados</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">SÍ proporcionamos:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Compañía y apoyo emocional</li>
                          <li>• Asistencia con actividades diarias</li>
                          <li>• Supervisión general de seguridad</li>
                          <li>• Apoyo en tareas domésticas básicas</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="font-medium border-t border-blue-200 pt-4">
                      <strong>Nuestros servicios complementan pero no sustituyen la atención médica profesional.</strong> 
                      Siempre recomendamos mantener el seguimiento regular con los profesionales de la salud de su ser querido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-12 rounded-3xl">
              <HeartIcon className="w-16 h-16 mx-auto mb-8 text-primary-100" />
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para una Consulta Personalizada?
              </h2>
              
              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Cada familia es única, y cada plan de acompañamiento también debe serlo. 
                Hablemos sobre las necesidades específicas de su ser querido y diseñemos 
                juntos el mejor plan de apoyo.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-primary-600 text-lg transition-all duration-300 group"
                >
                  <DocumentTextIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Consulta Gratuita
                </a>
                
                <a
                  href="https://wa.me/17867527884"
                  className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 group"
                >
                  <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Llamar: (786) 752-7884
                </a>
              </div>
              
              <div className="text-primary-100 text-sm">
                <p className="mb-2">
                  <strong>Consulta sin compromiso</strong> • <strong>Evaluación personalizada</strong> • <strong>Disponible 24/7</strong>
                </p>
                <p>
                  Licenciados y asegurados en el Estado de Florida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}