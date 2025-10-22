import { Check, ArrowRight, Phone, Mail, MapPin, TrendingUp } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import Button from './Button'

export default function LeadGen() {
  const deliverables = [
    'Custom brand identity & domain',
    'Mobile-responsive site with fast loading',
    'Google Analytics 4 & conversion tracking',
    'Lead form + call routing integration',
    'Google Business Profile optimization help',
    'Initial SEO setup & local citations',
  ]

  return (
    <Section variant="gray">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            For Local Service Businesses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turnkey Lead-Gen Sites That Actually Convert
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Perfect for painters, roofers, movers, landscapers, and other local service providers who need a consistent pipeline of qualified leads without the hassle of DIY marketing.
          </p>

          <div className="space-y-3 mb-8">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <Button size="lg">
            Start a Lead-Gen Site
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Right: Case study card */}
        <div>
          <GlassCard className="relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Live Case
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ann Arbor Painting Co.
              </h3>
              <p className="text-gray-600">Local painting contractor, Ann Arbor MI</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">0 → 30</div>
                <div className="text-sm text-gray-600">Leads per month</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">60</div>
                <div className="text-sm text-gray-600">Days to scale</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">
                    Top 3 local rankings
                  </div>
                  <div className="text-sm text-gray-600">
                    "Painters near me", "Ann Arbor painting"
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">
                    Call tracking active
                  </div>
                  <div className="text-sm text-gray-600">
                    Every inquiry tracked & routed automatically
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">
                    Lead form conversion: 8.2%
                  </div>
                  <div className="text-sm text-gray-600">
                    Above industry average of 3–5%
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">
                * Example case study. Actual results vary by market, service area, and competition. Timeline represents time from launch to 30 leads/month milestone.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </Section>
  )
}
