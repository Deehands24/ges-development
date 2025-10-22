import { ArrowRight, Download } from 'lucide-react'
import Section from './Section'
import Button from './Button'

export default function CTABanner() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-blue-700 p-12 md:p-16 text-center">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to build your first (or next) digital asset?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Whether you're launching a single lead-gen site or scaling a portfolio, we'll help you turn domains into durable income streams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-accent hover:bg-gray-100 shadow-2xl"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download One-Pager
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
