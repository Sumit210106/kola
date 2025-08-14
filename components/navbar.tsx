"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles,ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" }, 
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "w-11/12 max-w-4xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 scale-95"
          : "w-11/12 max-w-6xl bg-white/90 backdrop-blur-lg shadow-xl border border-white/30"
      } rounded-2xl`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-indigo-500/10 p-[1px]">
        <div className="w-full h-full bg-gray-200 backdrop-blur-xl rounded-2xl"></div>
      </div>

      <div className="px-4 py-2 relative">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group rounded-xl">
            <div className="w-20 h-10 relative transition-transform duration-300">
              <Image src="/kola-logo.png" alt="Kola Communication" fill className="object-cover" />
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ),
            )}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button
            className="w-full bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#595ED2] hover:to-[#232B7D] text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
          </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200/50 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 w-full mt-4 shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
