'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import Button from './Button'

const tiers = [
  {
    name: 'Starter',
    price: '$X,XXX',
    description: 'Perfect for testing a single niche or local market',
    features: [
      'One property build',
      'Domain research & acquisition',
      '10-page site (WordPress or Next.js)',
      'Basic SEO setup',
      'Google Analytics integration',
      '30-day launch support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$X,XXX',
    description: 'For established operators scaling a portfolio',
    features: [
      'Everything in Starter',
      'Up to 3 properties per quarter',
      'Advanced monetization (affiliate, ads)',
      'Lead routing & call tracking',
      'Monthly performance reports',
      'Priority support',
    ],
    cta: 'Scale Up',
    highlight: true,
  },
  {
    name: 'Portfolio',
    price: 'Custom',
    description: 'White-glove service for serious digital landlords',
    features: [
      'Everything in Growth',
      'Unlimited properties (quarterly cap negotiable)',
      'Revenue-share options available',
      'Acquisition & exit advisory',
      'Dedicated account manager',
      'Custom integrations & tooling',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

const models = [
  {
    title: 'Studio Build',
    description: 'One-time project fee + optional add-ons (content, backlinks, ongoing SEO).',
  },
  {
    title: 'Operate',
    description: 'Monthly retainer for management, optimization, and content operations.',
  },
  {
    title: 'Rev-Share',
    description: 'Performance-based split: we build, you own, we share upside (case-by-case).',
  },
  {
    title: 'Acquire/Flip',
    description: 'Advisory for buying aged domains or selling established properties at 20–40× monthly.',
  },
]

export default function Pricing() {
  const [activeTier, setActiveTier] = useState<string | null>(null)

  return (
    <Section id="pricing">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pricing & Engagement Models
        </h2>
        <p className="text-lg text-gray-600">
          Transparent, flexible options whether you're launching your first site or scaling a portfolio.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier, index) => (
          <GlassCard
            key={index}
            className={`relative ${tier.highlight ? 'ring-2 ring-accent shadow-2xl scale-105' : ''}`}
            onMouseEnter={() => setActiveTier(tier.name)}
            onMouseLeave={() => setActiveTier(null)}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-sm font-semibold">
                Most Popular
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
              <p className="text-sm text-gray-600">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={tier.highlight ? 'primary' : 'secondary'}
              className="w-full"
              size="lg"
            >
              {tier.cta}
            </Button>
          </GlassCard>
        ))}
      </div>

      {/* Engagement Models */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Engagement Models
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <GlassCard key={index} hover>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h4>
              <p className="text-sm text-gray-600">{model.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          * Pricing shown is illustrative. Actual project costs depend on niche complexity, content volume, and monetization requirements. Contact us for a detailed quote.
        </p>
      </div>
    </Section>
  )
}
