import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ThreePillars from '@/components/ThreePillars'
import Portfolio from '@/components/Portfolio'
import Playbook from '@/components/Playbook'
import LeadGen from '@/components/LeadGen'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Resources from '@/components/Resources'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ThreePillars />
      <Portfolio />
      <Playbook />
      <LeadGen />
      <Pricing />
      <Testimonials />
      <Resources />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
