"use client"

import { Button } from "@/components/ui/button"
import TypewriterEffect from "./typewriter-effect"
import AdvancedCodeSnippet from "./advanced-code-snippet"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export default function HeroSection() {
  const typewriterWords = [
  "Kola Communications",
  "Creative Digital Solution",
  "Brand Experiences",
  "Marketing Strategies",
  "Web Development",
  "Growth Campaigns",
  ]

  return (
    <section id="home" className="min-h-screen flex items-center px-4 lg:px-8 mt-30 md:mt-[-40px] md:mb-[-90px] ">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Advanced Code Snippets */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="text-center lg:text-left mb-8">
              
            </div>

            <AdvancedCodeSnippet />
          </div>

          {/* Right Side - Enhanced Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r text-black bg-clip-text">
                <TypewriterEffect words={typewriterWords} />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At Kola Communication, we architect next-generation digital solutions using cutting-edge technologies like
              AI, blockchain, and cloud-native architectures. Transform your business with enterprise-grade applications
              that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact">
                 <Button
                size="lg"
                className="bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#595ED2] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-blue-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
             
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  100+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">Enterprise Projects</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  99.9%
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  24/7
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">DevOps Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
