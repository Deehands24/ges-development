import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GES Development | Digital Real Estate Studio',
  description: 'Build, buy & operate cash-flowing web properties. We turn domains into durable income streams through SEO, affiliate, ads, and local lead gen.',
  keywords: 'digital real estate, affiliate sites, lead generation, SEO, web properties, internet business',
  openGraph: {
    title: 'GES Development | Digital Real Estate Studio',
    description: 'Build, buy & operate cash-flowing web properties.',
    type: 'website',
    url: 'https://ges-development.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GES Development | Digital Real Estate Studio',
    description: 'Build, buy & operate cash-flowing web properties.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
