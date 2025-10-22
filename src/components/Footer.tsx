import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const navSections = [
    {
      title: 'Services',
      links: [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Lead Gen Sites', href: '#services' },
        { label: 'Playbook', href: '#playbook' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Guides', href: '#resources' },
        { label: 'Newsletter', href: '#resources' },
        { label: 'Case Studies', href: '#portfolio' },
        { label: 'FAQ', href: '#about' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">GES Development</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Building, buying, and operating cash-flowing web properties. Digital real estate for the internet age.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation columns */}
          {navSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {new Date().getFullYear()} GES Development LLC. All rights reserved.</p>
              <p className="mt-1">Michigan-based · EIN: XX-XXXXXXX</p>
            </div>
            <div className="text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="mx-3">·</span>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <span className="mx-3">·</span>
              <a href="#affiliate" className="hover:text-white transition-colors">
                Affiliate Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
