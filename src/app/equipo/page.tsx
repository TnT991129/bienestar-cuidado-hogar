import type { Metadata } from 'next'
import { 
  HeartIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  StarIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Nuestro Equipo - Bienestar y Cuidado en el Hogar | Cuidadores Certificados',
  description: 'Conoce a nuestro equipo de cuidadores profesionales certificados. Personal con experiencia, capacitación continua y dedicación al cuidado de adultos mayores.',
}

const leadership = [
  {
    name: 'María Elena Rodríguez',
    role: 'Fundadora y Directora General',
    credentials: 'Enfermera Registrada, BSN, 25+ años de experiencia',
    description: 'Fundó la empresa en 2008 con la visión de humanizar el cuidado domiciliario. Especialista en cuidado geriátrico con más de 25 años de experiencia en hospitales y centros de cuidado especializado.',
    specialties: ['Administración de cuidado geriátrico', 'Capacitación de personal', 'Planes de atención personalizados'],
    image: '👩‍⚕️',
    contact: 'maria@bienestarhogar.com'
  },
  {
    name: 'Dr. Carlos Mendoza',
    role: 'Director Médico Consultor',
    credentials: 'Médico Geriatra, Certificado en Cuidados Paliativos',
    description: 'Supervisa todos los protocolos médicos y colabora con los médicos de familia para asegurar continuidad en el cuidado. Especialista en geriatría con 20 años de experiencia.',
    specialties: ['Medicina geriátrica', 'Cuidados paliativos', 'Coordinación médica'],
    image: '👨‍⚕️',
    contact: 'dr.mendoza@bienestarhogar.com'
  },
  {
    name: 'Ana Patricia Silva',
    role: 'Coordinadora de Cuidadores',
    credentials: 'Trabajadora Social, MSW, Especialista en Gerontología',
    description: 'Responsable de la selección, capacitación y supervisión continua de nuestro equipo de cuidadores. Experta en evaluaciones psicosociales y desarrollo de planes de cuidado.',
    specialties: ['Trabajo social gerontológico', 'Supervisión de personal', 'Evaluaciones familiares'],
    image: '👩‍💼',
    contact: 'ana@bienestarhogar.com'
  },
  {
    name: 'Roberto Vásquez',
    role: 'Gerente de Operaciones',
    credentials: 'Administración en Salud, 15 años en servicios domiciliarios',
    description: 'Coordina las operaciones diarias, programación de servicios y asegura la calidad en todos nuestros casos activos. Experto en logística de cuidado domiciliario.',
    specialties: ['Operaciones de cuidado domiciliario', 'Control de calidad', 'Logística de servicios'],
    image: '👨‍💼',
    contact: 'roberto@bienestarhogar.com'
  }
]

const caregiverProfiles = [
  {
    name: 'Carmen Morales',
    experience: '12 años',
    specialties: ['Cuidado personal', 'Demencia temprana', 'Movilidad limitada'],
    certifications: ['CNA Certificada', 'Primeros Auxilios', 'CPR'],
    languages: ['Español', 'Inglés'],
    personality: 'Paciente, cariñosa y muy detallista. Le encanta la jardinería y cocinar.',
    image: '👩‍🦳'
  },
  {
    name: 'Luis Hernández',
    experience: '8 años',
    specialties: ['Cuidado post-hospitalario', 'Rehabilitación', 'Transporte médico'],
    certifications: ['CNA Certificado', 'Primeros Auxilios', 'Manejo defensivo'],
    languages: ['Español', 'Inglés básico'],
    personality: 'Alegre, confiable y muy fuerte físicamente. Aficionado al deporte.',
    image: '👨‍⚕️'
  },
  {
    name: 'Patricia Jiménez',
    experience: '15 años',
    specialties: ['Alzheimer avanzado', 'Cuidados paliativos', 'Apoyo familiar'],
    certifications: ['CNA Certificada', 'Especialización en demencia', 'Cuidados paliativos'],
    languages: ['Español', 'Inglés fluido'],
    personality: 'Muy empática y espiritual. Experta en manejo de comportamientos difíciles.',
    image: '👩‍⚕️'
  },
  {
    name: 'Miguel Torres',
    experience: '10 años',
    specialties: ['Cuidado nocturno', 'Emergencias médicas', 'Supervisión 24/7'],
    certifications: ['EMT Básico', 'CNA Certificado', 'Manejo de crisis'],
    languages: ['Español', 'Inglés'],
    personality: 'Muy atento y responsable. Experiencia en cuidados intensivos.',
    image: '👨‍🦲'
  },
  {
    name: 'Esperanza Ruiz',
    experience: '18 años',
    specialties: ['Cuidado infantil de adultos', 'Nutrición geriátrica', 'Actividades terapéuticas'],
    certifications: ['CNA Certificada', 'Nutrición geriátrica', 'Terapia recreativa'],
    languages: ['Español', 'Inglés'],
    personality: 'Muy creativa y nutritiva. Especialista en cocina saludable para adultos mayores.',
    image: '👵'
  },
  {
    name: 'Jorge Mendoza',
    experience: '6 años',
    specialties: ['Tecnología asistiva', 'Ejercicio terapéutico', 'Compañía masculina'],
    certifications: ['CNA Certificado', 'Fitness para adultos mayores', 'Tecnología médica'],
    languages: ['Español', 'Inglés'],
    personality: 'Paciente y técnico. Excelente con clientes masculinos que prefieren compañía masculina.',
    image: '👨'
  }
]

const stats = [
  { name: 'Cuidadores activos', value: '50+' },
  { name: 'Años de experiencia promedio', value: '12' },
  { name: 'Tasa de retención', value: '95%' },
  { name: 'Satisfacción del cliente', value: '98%' }
]

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-trust-900 sm:text-6xl">
              Nuestro Equipo
            </h1>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Conoce a los profesionales que hacen posible el mejor cuidado domiciliario. 
              Personal certificado, con experiencia y genuina vocación de servicio.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 max-w-4xl">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="text-center bg-white/80 rounded-2xl p-6 shadow-lg">
                  <dt className="text-3xl font-bold text-primary-600 sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-trust-600">{stat.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Liderazgo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Nuestro Equipo Directivo
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Profesionales experimentados que dirigen nuestro equipo con pasión, 
              experiencia y compromiso con la excelencia en el cuidado.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center text-3xl">
                        {member.image}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-trust-900 mb-1">{member.name}</h3>
                      <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-trust-500 mb-3">{member.credentials}</p>
                      <p className="text-trust-600 text-sm leading-relaxed mb-4">{member.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-trust-900 mb-2">Especialidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty) => (
                            <span key={specialty} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-trust-500">
                        <span className="mr-2">📧</span>
                        <a href={`mailto:${member.contact}`} className="text-primary-600 hover:text-primary-700">
                          {member.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Caregivers Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-trust-50 to-primary-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestros Cuidadores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Cuidadores Profesionales Certificados
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Cada miembro de nuestro equipo de cuidadores ha sido cuidadosamente seleccionado, 
              capacitado y certificado para brindar el más alto nivel de atención.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caregiverProfiles.map((caregiver) => (
                <div key={caregiver.name} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                      {caregiver.image}
                    </div>
                    <h3 className="text-lg font-bold text-trust-900 mb-1">{caregiver.name}</h3>
                    <p className="text-primary-600 font-semibold text-sm">{caregiver.experience} de experiencia</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-trust-900 mb-2 flex items-center">
                        <HeartIcon className="h-4 w-4 text-primary-600 mr-2" />
                        Especialidades
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {caregiver.specialties.map((specialty) => (
                          <span key={specialty} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-trust-900 mb-2 flex items-center">
                        <ShieldCheckIcon className="h-4 w-4 text-secondary-600 mr-2" />
                        Certificaciones
                      </h4>
                      <ul className="space-y-1">
                        {caregiver.certifications.map((cert) => (
                          <li key={cert} className="flex items-center text-xs text-trust-600">
                            <CheckCircleIcon className="h-3 w-3 text-secondary-500 mr-2" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-trust-900 mb-2 flex items-center">
                        <UserGroupIcon className="h-4 w-4 text-trust-600 mr-2" />
                        Idiomas
                      </h4>
                      <p className="text-xs text-trust-600">{caregiver.languages.join(', ')}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-trust-900 mb-2">Personalidad</h4>
                      <p className="text-xs text-trust-600 leading-relaxed">{caregiver.personality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Standards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Estándares de Selección</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Proceso Riguroso de Selección y Capacitación
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Nuestro proceso de selección garantiza que solo los mejores profesionales formen parte de nuestro equipo.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  <AcademicCapIcon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Certificaciones Requeridas</h3>
                <p className="text-sm text-trust-600">
                  CNA, primeros auxilios, CPR y certificaciones especializadas según el área
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Verificación Completa</h3>
                <p className="text-sm text-trust-600">
                  Antecedentes penales, referencias laborales y verificación de identidad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trust-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  <HeartIcon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Evaluación Psicológica</h3>
                <p className="text-sm text-trust-600">
                  Evaluación de personalidad, empatía y habilidades de comunicación
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-trust-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  <ClockIcon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">Capacitación Continua</h3>
                <p className="text-sm text-trust-600">
                  40+ horas de capacitación inicial y educación continua mensual
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Caregivers */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">¿Por qué trabajar con nosotros?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-trust-900 sm:text-4xl">
              Beneficios para Nuestros Cuidadores
            </p>
            <p className="mt-6 text-lg leading-8 text-trust-600">
              Creemos que cuidadores felices y bien tratados brindan mejor atención. Por eso ofrecemos un excelente ambiente laboral.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-trust-900 mb-4">Compensación Competitiva</h3>
                <ul className="space-y-2 text-sm text-trust-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Salarios por encima del promedio del mercado
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Bonificaciones por desempeño
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Pago puntual cada dos semanas
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-trust-900 mb-4">Desarrollo Profesional</h3>
                <ul className="space-y-2 text-sm text-trust-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Capacitación continua gratuita
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Oportunidades de especialización
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Plan de carrera definido
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-trust-900 mb-4">Apoyo y Recursos</h3>
                <ul className="space-y-2 text-sm text-trust-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Supervisión y apoyo 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Recursos de apoyo emocional
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Tecnología avanzada para el trabajo
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-trust-900 mb-4">Flexibilidad</h3>
                <ul className="space-y-2 text-sm text-trust-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Horarios flexibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Asignaciones cerca de casa
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2" />
                    Balance vida-trabajo
                  </li>
                </ul>
              </div>
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
                ¿Te Interesa Unirte a Nuestro Equipo?
              </h2>
              <p className="text-primary-100 mb-6">
                Si tienes pasión por el cuidado de adultos mayores y buscas una carrera gratificante, 
                nos encantaría conocerte. También estamos disponibles para ayudarte con el cuidado de tu ser querido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200 shadow-lg"
                >
                  Trabaja con Nosotros
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Necesito Cuidadores: (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}