'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Section from './Section'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How long does it take to see results from a new property?',
    answer: 'Timeline varies by niche and competition. For local lead-gen sites, we typically see first leads in 18–30 days. For affiliate/content sites, meaningful organic traffic usually starts in 60–90 days. Full cash-flow potential often takes 4–6 months of consistent operation and optimization.',
  },
  {
    question: 'Who owns the content, domain, and IP?',
    answer: 'By default, you own everything: domain registration, site code, content, and intellectual property. We build on your infrastructure. For rev-share arrangements, ownership terms are negotiated case-by-case and documented in our agreement.',
  },
  {
    question: 'What hosting and tools do you use?',
    answer: 'We build on WordPress (managed hosting via WP Engine or Cloudways) or Next.js (Vercel). Analytics via Google Analytics 4. Affiliate tracking through CJ, ShareASale, or Impact. Call tracking via CallRail. All tools are client-accessible with full admin rights.',
  },
  {
    question: 'Do I get access to analytics and performance data?',
    answer: 'Yes. You receive full admin access to Google Analytics, Search Console, and any monetization dashboards (CJ, AdSense, etc.). We also provide monthly performance reports summarizing traffic, conversions, revenue, and recommended optimizations.',
  },
  {
    question: 'How do rev-share deals work?',
    answer: 'We build and operate the property; you own the asset. We take a percentage of net revenue (typically 20–40% depending on our operational involvement) for an agreed term (often 12–24 months). Terms are negotiated individually and require minimum revenue thresholds.',
  },
  {
    question: 'Can you help sell a property I already own?',
    answer: 'Yes. We offer exit advisory: valuation analysis, marketplace listing (Flippa, Empire Flippers, Motion Invest), buyer outreach, and deal structuring. Typical multiples are 20–40× monthly profit for established, cash-flowing properties with clean financials.',
  },
  {
    question: 'Who owns the leads generated from local sites?',
    answer: 'You do. Leads are routed directly to your phone number, email, or CRM via webhooks. We never intercept or resell leads. You control routing, follow-up, and customer relationships. We simply provide the infrastructure and traffic.',
  },
  {
    question: "What happens if a site doesn't perform?",
    answer: 'We set clear KPIs upfront (traffic targets, lead volume, ranking goals). If a property underperforms due to our execution, we diagnose and adjust strategy at no extra cost. If the niche proves unviable despite proper execution, we discuss pivoting or sunsetting the project transparently.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="about" variant="gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about building and operating digital properties with GES.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
