"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
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
    { name: "Projects", href: "#projects" },
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
              <a href="#">
                <Image src="/kola-logo.png" alt="Kola Communication" fill className="object-cover" />
              </a>
              
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
            <a href="#contact">
              <Button className="w-full bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#595ED2] hover:to-[#232B7D] text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
            </Button>
            </a>
            
          </div>

          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100/70 active:bg-gray-200/50 transition-all duration-200 relative overflow-hidden group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 relative z-10 transform rotate-0 transition-transform duration-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 relative z-10 transform rotate-0 transition-transform duration-200" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-200/60 animate-fade-in-up bg-white p-4 rounded-xl mb-4">
            <div className="flex flex-col space-y-2 pb-4">
              {navItems.map((item, index) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 active:text-blue-700 transition-all duration-200 font-medium py-4 px-4 rounded-xl hover:bg-gray-50/80 active:bg-gray-100/60 relative group overflow-hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10 text-base">{item.name}</span>
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 active:text-blue-700 transition-all duration-200 font-medium py-4 px-4 rounded-xl hover:bg-gray-50/80 active:bg-gray-100/60 relative group overflow-hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10 text-base">{item.name}</span>
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                ),
              )}

              <div className="pt-4 mt-2 border-t border-gray-200/40">
              <a href="#contact">
                <Button className="bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#595ED2] hover:to-[#232B7D] active:from-[#2A2F8F] active:to-[#1E2570] text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center gap-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get in touch</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200" />
                </Button>
              </a>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
