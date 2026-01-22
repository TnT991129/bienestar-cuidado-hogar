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
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-bold text-trust-900 text-4xl sm:text-6xl tracking-tight">
              Nuestro Equipo
            </h1>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Conoce a los profesionales que hacen posible el mejor cuidado domiciliario. 
              Personal certificado, con experiencia y genuina vocación de servicio.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 max-w-4xl">
            <dl className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="bg-white/80 shadow-lg p-6 rounded-2xl text-center">
                  <dt className="font-bold text-primary-600 text-3xl sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 font-medium text-trust-600 text-sm">{stat.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Liderazgo</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Nuestro Equipo Directivo
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Profesionales experimentados que dirigen nuestro equipo con pasión, 
              experiencia y compromiso con la excelencia en el cuidado.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
              {leadership.map((member) => (
                <div key={member.name} className="bg-white shadow-lg p-8 border border-gray-100 rounded-2xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full w-20 h-20 text-3xl">
                        {member.image}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 font-bold text-trust-900 text-xl">{member.name}</h3>
                      <p className="mb-2 font-semibold text-primary-600">{member.role}</p>
                      <p className="mb-3 text-trust-500 text-sm">{member.credentials}</p>
                      <p className="mb-4 text-trust-600 text-sm leading-relaxed">{member.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-trust-900">Especialidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty) => (
                            <span key={specialty} className="bg-primary-100 px-2 py-1 rounded-full text-primary-700 text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-trust-500 text-sm">
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
      <section className="bg-gradient-to-br from-trust-50 to-primary-50/30 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Nuestros Cuidadores</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Cuidadores Profesionales Certificados
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Cada miembro de nuestro equipo de cuidadores ha sido cuidadosamente seleccionado, 
              capacitado y certificado para brindar el más alto nivel de atención.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {caregiverProfiles.map((caregiver) => (
                <div key={caregiver.name} className="bg-white shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-2xl transition-shadow duration-300">
                  <div className="mb-6 text-center">
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-200 to-secondary-200 mx-auto mb-4 rounded-full w-16 h-16 text-2xl">
                      {caregiver.image}
                    </div>
                    <h3 className="mb-1 font-bold text-trust-900 text-lg">{caregiver.name}</h3>
                    <p className="font-semibold text-primary-600 text-sm">{caregiver.experience} de experiencia</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="flex items-center mb-2 font-semibold text-trust-900">
                        <HeartIcon className="mr-2 w-4 h-4 text-primary-600" />
                        Especialidades
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {caregiver.specialties.map((specialty) => (
                          <span key={specialty} className="bg-primary-100 px-2 py-1 rounded-full text-primary-700 text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="flex items-center mb-2 font-semibold text-trust-900">
                        <ShieldCheckIcon className="mr-2 w-4 h-4 text-secondary-600" />
                        Certificaciones
                      </h4>
                      <ul className="space-y-1">
                        {caregiver.certifications.map((cert) => (
                          <li key={cert} className="flex items-center text-trust-600 text-xs">
                            <CheckCircleIcon className="mr-2 w-3 h-3 text-secondary-500" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center mb-2 font-semibold text-trust-900">
                        <UserGroupIcon className="mr-2 w-4 h-4 text-trust-600" />
                        Idiomas
                      </h4>
                      <p className="text-trust-600 text-xs">{caregiver.languages.join(', ')}</p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-trust-900">Personalidad</h4>
                      <p className="text-trust-600 text-xs leading-relaxed">{caregiver.personality}</p>
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
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">Estándares de Selección</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Proceso Riguroso de Selección y Capacitación
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Nuestro proceso de selección garantiza que solo los mejores profesionales formen parte de nuestro equipo.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  <AcademicCapIcon className="w-8 h-8" />
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Certificaciones Requeridas</h3>
                <p className="text-trust-600 text-sm">
                  CNA, primeros auxilios, CPR y certificaciones especializadas según el área
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-secondary-500 to-primary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Verificación Completa</h3>
                <p className="text-trust-600 text-sm">
                  Antecedentes penales, referencias laborales y verificación de identidad
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-trust-500 to-primary-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  <HeartIcon className="w-8 h-8" />
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Evaluación Psicológica</h3>
                <p className="text-trust-600 text-sm">
                  Evaluación de personalidad, empatía y habilidades de comunicación
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary-500 to-trust-500 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-xl">
                  <ClockIcon className="w-8 h-8" />
                </div>
                <h3 className="mb-2 font-semibold text-trust-900">Capacitación Continua</h3>
                <p className="text-trust-600 text-sm">
                  40+ horas de capacitación inicial y educación continua mensual
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Caregivers */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-primary-600 text-base leading-7">¿Por qué trabajar con nosotros?</h2>
            <p className="mt-2 font-bold text-trust-900 text-3xl sm:text-4xl tracking-tight">
              Beneficios para Nuestros Cuidadores
            </p>
            <p className="mt-6 text-trust-600 text-lg leading-8">
              Creemos que cuidadores felices y bien tratados brindan mejor atención. Por eso ofrecemos un excelente ambiente laboral.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
              <div className="bg-white shadow-lg p-6 rounded-2xl">
                <h3 className="mb-4 font-semibold text-trust-900 text-lg">Compensación Competitiva</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Salarios por encima del promedio del mercado
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Bonificaciones por desempeño
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Pago puntual cada dos semanas
                  </li>
                </ul>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-2xl">
                <h3 className="mb-4 font-semibold text-trust-900 text-lg">Desarrollo Profesional</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Capacitación continua gratuita
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Oportunidades de especialización
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Plan de carrera definido
                  </li>
                </ul>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-2xl">
                <h3 className="mb-4 font-semibold text-trust-900 text-lg">Apoyo y Recursos</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Supervisión y apoyo 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Recursos de apoyo emocional
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Tecnología avanzada para el trabajo
                  </li>
                </ul>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-2xl">
                <h3 className="mb-4 font-semibold text-trust-900 text-lg">Flexibilidad</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Horarios flexibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
                    Asignaciones cerca de casa
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 w-4 h-4 text-primary-500" />
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
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
              <h2 className="mb-4 font-bold text-3xl">
                ¿Te Interesa Unirte a Nuestro Equipo?
              </h2>
              <p className="mb-6 text-primary-100">
                Si tienes pasión por el cuidado de adultos mayores y buscas una carrera gratificante, 
                nos encantaría conocerte. También estamos disponibles para ayudarte con el cuidado de tu ser querido.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <a
                  href="/contacto"
                  className="inline-flex justify-center items-center bg-white hover:bg-primary-50 shadow-lg px-6 py-3 border border-transparent rounded-xl font-medium text-primary-600 text-base transition-colors duration-200"
                >
                  Trabaja con Nosotros
                </a>
                <a
                  href="https://wa.me/17862693"
                  className="inline-flex justify-center items-center hover:bg-white/10 px-6 py-3 border-2 border-white/30 rounded-xl font-medium text-white text-base transition-colors duration-200"
                >
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  Necesito Cuidadores: +1 (786) 2693
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}