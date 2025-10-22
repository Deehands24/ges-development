import { ExternalLink, TrendingUp } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import Button from './Button'

interface PropertyCardProps {
  name: string
  niche: string
  traffic: string
  monetization: string[]
  outcome: string
}

function PropertyCard({ name, niche, traffic, monetization, outcome }: PropertyCardProps) {
  return (
    <GlassCard hover>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{niche}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Traffic sparkline placeholder */}
      <div className="h-16 mb-4 rounded-xl bg-gradient-to-r from-accent/10 to-blue-700/10 flex items-end justify-around px-2 py-2">
        {[40, 65, 55, 80, 70, 90, 85, 95].map((height, i) => (
          <div
            key={i}
            className="w-2 bg-accent rounded-full transition-all hover:bg-accent-hover"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">90-Day Traffic</p>
          <p className="text-sm font-semibold text-gray-900">{traffic}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Monetization</p>
          <div className="flex flex-wrap gap-2">
            {monetization.map((method, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-lg bg-blue-300 text-gray-700"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 border-t border-gray-200 pt-4">
        {outcome}
      </p>

      <button className="text-sm text-accent font-medium hover:text-accent-hover transition-colors inline-flex items-center group">
        View case study
        <ExternalLink className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </GlassCard>
  )
}

export default function Portfolio() {
  const properties = [
    {
      name: 'PaintingA2',
      niche: 'Local Service Lead Gen',
      traffic: '2.4K visits/mo',
      monetization: ['Lead Forms', 'Call Tracking'],
      outcome: 'Generates 30–45 qualified painting leads monthly for Ann Arbor contractors.',
    },
    {
      name: 'CDLTrainingHQ',
      niche: 'Education & Affiliate',
      traffic: '8.7K visits/mo',
      monetization: ['CJ Affiliate', 'AdSense'],
      outcome: 'Ranks top 5 for "CDL training near me" in 12 states, $X,XXX/mo revenue. [Example]',
    },
    {
      name: 'MedicalTerms AI',
      niche: 'SaaS Tool & Content',
      traffic: '5.2K visits/mo',
      monetization: ['Freemium SaaS', 'Ads'],
      outcome: 'AI-powered medical terminology explainer with 400+ indexed pages, growing 15% MoM.',
    },
    {
      name: 'TruckingOps Dashboard',
      niche: 'Internal Tool & Data',
      traffic: 'Private',
      monetization: ['Internal Use', 'API Access'],
      outcome: 'Operational analytics for fleet management clients; licensing in development.',
    },
  ]

  return (
    <Section id="portfolio" variant="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Flagship Properties
        </h2>
        <p className="text-lg text-gray-600">
          A snapshot of live sites generating traffic, leads, and revenue across multiple niches.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="secondary">
          View Full Portfolio
          <ExternalLink className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </Section>
  )
}
