'use client'

import { useState } from 'react'
import { FileText, ArrowRight, Mail, Lock } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import Button from './Button'

const guides = [
  {
    title: 'Strategic Planning for Sustainable Growth',
    description: 'Learn how to develop a strategic plan that drives sustainable business growth and positions your company for long-term success.',
    readTime: '8 min read',
    slug: '/articles/strategic-planning',
  },
  {
    title: 'Achieving Operational Excellence',
    description: 'Discover proven strategies to optimize your operations, reduce costs, and improve efficiency across your organization.',
    readTime: '7 min read',
    slug: '/articles/operational-excellence',
  },
  {
    title: 'Financial Management Strategies',
    description: 'Master the financial fundamentals that drive business growth, from cash flow management to strategic investment decisions.',
    readTime: '9 min read',
    slug: '/articles/financial-management',
  },
  {
    title: 'Strategic Market Expansion',
    description: 'Learn how to successfully expand into new markets, whether geographic territories, customer segments, or product categories.',
    readTime: '8 min read',
    slug: '/articles/market-expansion',
  },
  {
    title: 'Digital Transformation Guide',
    description: 'Navigate digital transformation successfully by aligning technology investments with business strategy to drive growth.',
    readTime: '10 min read',
    slug: '/articles/digital-transformation',
  },
]

export default function Resources() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <Section id="resources">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Guides */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources & Education
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Free guides, frameworks, and playbooks from our operations team.
          </p>

          <div className="space-y-4">
            {guides.map((guide, index) => (
              <a
                key={index}
                href={guide.slug}
                className="block"
              >
                <GlassCard hover className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{guide.readTime}</span>
                        <span className="text-sm text-accent font-medium inline-flex items-center group-hover:gap-2 transition-all">
                          Read now
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="lg:sticky lg:top-24">
          <GlassCard className="bg-gradient-to-br from-accent/5 to-blue-700/5">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Internet Landlord Notes
              </h3>
              <p className="text-gray-600">
                Weekly insights on building, buying, and operating digital assets. No fluff, just operational tactics.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-grow px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <Button type="submit" size="md">
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span>No spam, ever. Unsubscribe anytime.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>1 email per week, usually Thursday mornings.</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Join 1,200+ operators, investors, and local business owners learning to treat websites like income-producing real estate.
              </p>
            </div>
          </GlassCard>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1.2K+</div>
              <div className="text-xs text-gray-600">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">47%</div>
              <div className="text-xs text-gray-600">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.8★</div>
              <div className="text-xs text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
