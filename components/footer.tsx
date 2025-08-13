"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    services: [
      "Website Development",
      "App Development",
      "Digital Marketing",
      "SEO Services",
      "Content Creation",
      "Social Media Marketing",
    ],
    company: ["About Us", "Our Team", "Careers", "Contact", "Blog", "Case Studies"],
    resources: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 relative">
                <Image src="/kola-logo.png" alt="Kola Communication" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Kola Communication</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions and strategic marketing excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-gray-400">hello@kolacommunication.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-gray-400">New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#4F46E5] transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#4F46E5] transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              />
              <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Resources */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#4F46E5] transition-colors duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                )
              })}
            </div>

            {/* Resources Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {footerLinks.resources.slice(0, 4).map((link, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-[#4F46E5] transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© 2024 Kola Communication. All rights reserved.</p>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-[#4F46E5] hover:bg-gray-800 transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
