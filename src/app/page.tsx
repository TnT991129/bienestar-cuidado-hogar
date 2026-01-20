import HeroSection from '@/components/home/HeroSection'
import BenefitsSection from '@/components/home/BenefitsSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'
import PageNavigation from '@/components/ui/PageNavigation'

export default function Home() {
  return (
    <div className="min-h-screen">
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
  )
}
