import { Star, Quote } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'

const testimonials = [
  {
    quote: "GES took our painting business from zero online presence to 40+ leads a month in 90 days. The ROI has been incredible—we've hired two more crews just to handle the demand.",
    author: 'Mike Henderson',
    role: 'Owner',
    company: 'Heritage Painting Co.',
    rating: 5,
  },
  {
    quote: "I'd tried building affiliate sites before but never gained traction. GES's playbook and execution got us ranking in 6 weeks, and we're now doing mid-four-figures monthly from a single property.",
    author: 'Sarah Chen',
    role: 'Digital Investor',
    company: 'Independent',
    rating: 5,
  },
  {
    quote: "The transparency and operational rigor are what sold me. Monthly reports, clear metrics, and a team that actually understands digital real estate as a business, not just marketing fluff.",
    author: 'James Rodriguez',
    role: 'Portfolio Manager',
    company: 'Summit Digital Holdings',
    rating: 5,
  },
]

const partners = [
  'Google Partner',
  'CJ Affiliate Network',
  'Flippa Verified',
  'WordPress VIP',
]

export default function Testimonials() {
  return (
    <Section variant="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Operators & Investors
        </h2>
        <p className="text-lg text-gray-600">
          Real results from clients building sustainable digital income.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <GlassCard key={index} className="flex flex-col">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <Quote className="w-8 h-8 text-accent/20 mb-4" />

            <p className="text-gray-700 mb-6 flex-grow italic">
              "{testimonial.quote}"
            </p>

            <div className="border-t border-gray-200 pt-4">
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-600">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Social Proof / Partners */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
          Partners & Certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-xl glass text-sm font-medium text-gray-600"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* Video Testimonial Placeholder */}
      <div className="mt-16 max-w-4xl mx-auto">
        <GlassCard className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-l-[16px] border-l-accent border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
            </div>
            <p className="text-white font-semibold">Watch: How We Built a $X,XXX/mo Affiliate Site</p>
            <p className="text-white/80 text-sm mt-2">3:42 case study walkthrough</p>
          </div>
        </GlassCard>
      </div>
    </Section>
  )
}
