import { Search, Globe, Code, TrendingUp, DollarSign, Repeat } from 'lucide-react'
import Section from './Section'

const steps = [
  {
    icon: Search,
    title: 'Niche Research',
    description: 'Keyword volume, competition analysis, monetization potential',
    tools: 'Ahrefs, Semrush',
    duration: '3–5 days',
  },
  {
    icon: Globe,
    title: 'Domain & Brand',
    description: 'Exact-match or brandable domain, logo, positioning',
    tools: 'Namecheap, Canva',
    duration: '1–2 days',
  },
  {
    icon: Code,
    title: 'Build & Content',
    description: 'WordPress/Next.js setup, on-page SEO, content calendar',
    tools: 'WordPress, Vercel',
    duration: '2–3 weeks',
  },
  {
    icon: TrendingUp,
    title: 'Index & Rank',
    description: 'Submit sitemap, backlink outreach, technical optimization',
    tools: 'Google Search Console',
    duration: '4–8 weeks',
  },
  {
    icon: DollarSign,
    title: 'Monetize & Optimize',
    description: 'Affiliate links, lead forms, ad placement, A/B testing',
    tools: 'CJ, Google Analytics',
    duration: 'Ongoing',
  },
  {
    icon: Repeat,
    title: 'Scale or Exit',
    description: 'Expand content, grow authority, or list on Flippa/Empire',
    tools: 'Flippa, Motion Invest',
    duration: '6+ months',
  },
]

export default function Playbook() {
  return (
    <Section id="playbook">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The GES Playbook
        </h2>
        <p className="text-lg text-gray-600">
          A proven 6-step process for turning domains into income-producing digital assets.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-600 to-accent" />

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Circle node */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl glass flex items-center justify-center relative z-10 group hover:shadow-2xl transition-all">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold text-accent mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-medium mb-1">{step.tools}</div>
                      <div className="text-accent">{step.duration}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-full bg-gradient-to-b from-accent to-blue-600 mt-2" />
                )}
              </div>

              <div className="flex-grow pb-8">
                <div className="text-sm font-bold text-accent mb-1">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {step.description}
                </p>
                <div className="text-xs text-gray-500">
                  <div className="font-medium mb-1">Tools: {step.tools}</div>
                  <div className="text-accent">Duration: {step.duration}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
