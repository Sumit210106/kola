"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Users, Award, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden " id="contact">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#3D44C3]/10 to-[#2C349E]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2C349E]/10 to-[#3D44C3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#3D44C3]/5 to-[#2C349E]/5 rounded-full blur-3xl"></div>

        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#3D44C3]/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#2C349E]/15 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#3D44C3]/25 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-[#2C349E]/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#3D44C3]/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#2C349E]/25 rounded-full"></div>

        {/* Simple dot pattern using CSS */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #3D44C3 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you transform your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0  backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 focus:border-[#3D44C3] focus:ring-[#3D44C3] bg-white/80"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 focus:border-[#3D44C3] focus:ring-[#3D44C3] bg-white/80"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 focus:border-[#3D44C3] focus:ring-[#3D44C3] bg-white/80"
                      placeholder="Enter your company name (optional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 focus:border-[#3D44C3] focus:ring-[#3D44C3] resize-none bg-white/80"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#2C349E] hover:to-[#1E2875] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Info & Stats */}
          <div className="space-y-8">
            {/* Get in Touch Section */}
            <Card className="shadow-lg border-0  text-black">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                <div className="space-y-6">

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                     <p className="text-gray-900">+91-8108969630</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                     <p className="text-gray-900">business@kolacommunications.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ready to Get Started Section */}
            <Card className="shadow-lg border-0 bg-gray-100/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to get started?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join over 100+ satisfied clients who have transformed their digital presence with Kola Communication.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3D44C3] to-[#2C349E] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3D44C3] to-[#2C349E] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>

                  

                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
