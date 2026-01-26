import HeroSection from '@/components/home/HeroSection'
import BenefitsSection from '@/components/home/BenefitsSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'
import PageNavigation from '@/components/ui/PageNavigation'

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50/20 min-h-screen overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="-top-40 -right-40 absolute bg-gradient-to-br from-primary-200/30 to-secondary-200/30 blur-3xl rounded-full w-80 h-80 animate-pulse"></div>
        <div className="-bottom-40 -left-40 absolute bg-gradient-to-br from-secondary-200/30 to-primary-200/30 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000"></div>
        <div className="top-1/2 left-1/2 absolute bg-gradient-to-br from-primary-100/20 to-secondary-100/20 blur-3xl rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
      </div>
      <div className="z-10 relative">
        <PageNavigation />
      {/* Espaciado para navegación fija en móvil */}
      <div className="lg:hidden h-20"></div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="beneficios">
        <BenefitsSection />
      </section>
      <section id="como-funciona">
        <HowItWorksSection />
      </section>
      <section id="testimonios">
        <TestimonialsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      </div>
    </div>
  )
}
