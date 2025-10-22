import { Search, DollarSign, TrendingUp, ArrowRight } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'

const pillars = [
  {
    icon: Search,
    title: 'Acquire & Develop',
    description: 'Domain research, site architecture, content operations, and technical SEO to build ranking authority from the ground up.',
    link: '#playbook',
  },
  {
    icon: DollarSign,
    title: 'Monetize & Operate',
    description: 'Affiliate program setup (CJ, ShareASale), AdSense integration, lead routing infrastructure, and systematic conversion optimization.',
    link: '#services',
  },
  {
    icon: TrendingUp,
    title: 'Scale or Flip',
    description: 'Hold properties for sustained cash flow, or exit at 20–40× monthly revenue through strategic marketplace positioning.',
    link: '#portfolio',
  },
]

export default function ThreePillars() {
  return (
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What We Do
        </h2>
        <p className="text-lg text-gray-600">
          A repeatable system for building digital assets that generate revenue month after month.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon
          return (
            <GlassCard key={index} hover>
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {pillar.description}
                </p>
                <a
                  href={pillar.link}
                  className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
