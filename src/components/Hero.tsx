'use client'

import { useEffect, useState } from 'react'
import Button from './Button'
import { ArrowRight, TrendingUp } from 'lucide-react'
import GlassCard from './GlassCard'

interface MetricProps {
  label: string
  value: number
  suffix: string
  prefix?: string
}

function AnimatedMetric({ label, value, suffix, prefix = '' }: MetricProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 animate-counter">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

export default function Hero() {
  const trustLogos = [
    'WordPress', 'Vercel', 'Supabase', 'Google Ads', 'Namecheap', 'CJ Affiliate'
  ]

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            Build, Buy & Operate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-700">
              Cash-Flowing Web Properties
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
            We turn domains into durable income streams—SEO, affiliate, ads, and local lead gen—then scale or flip like real estate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="lg">
              See Our Portfolio
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Logos */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Powered By</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {trustLogos.map((logo) => (
                <div
                  key={logo}
                  className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <GlassCard className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AnimatedMetric label="Sites Launched" value={47} suffix="+" />
            <AnimatedMetric label="Avg Time to First Lead" value={18} suffix=" days" />
            <AnimatedMetric label="Portfolio CTR" value={3.2} suffix="%" />
            <AnimatedMetric label="6-Month Revenue Uplift" value={127} suffix="%" prefix="+" />
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              * Metrics represent portfolio averages. Individual property performance varies based on niche, competition, and operational inputs.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
