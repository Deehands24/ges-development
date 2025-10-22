'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import Button from './Button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Playbook', href: '#playbook' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <span className="text-black font-bold text-xl">G</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-gray-900">GES Development</div>
              <div className="text-xs text-gray-600 -mt-1">Digital Real Estate</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              One-Pager
            </Button>
            <Button size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-up">
            <nav className="flex flex-col space-y-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <Button variant="secondary" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download One-Pager
              </Button>
              <Button size="sm" className="w-full">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
