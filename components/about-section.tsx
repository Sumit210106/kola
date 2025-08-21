"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  Quote,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on delivering measurable outcomes that directly impact your business growth and success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive edge.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring exceptional quality and attention to detail.",
  },
];

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

export default function AboutSection() {
  return (
    <section id="about" className=" px-4 md:mt-[-70px]  mt-[-110px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Businesses Through Digital Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Kola Communication, we believe in the power of digital
            transformation to unlock your business potential.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
              At Kola Communications, we are passionate about crafting digital
              experiences that inspire, engage, and deliver results. As a
              forward-thinking digital solutions company, we specialize in website
              development, AI Tools, brand strategy, and digital marketing,
              helping businesses transform their ideas into powerful online
              identities.
              </p>
              <p>
              Our approach blends creativity and innovation to design solutions
              that not only look exceptional but also drive measurable growth.
              With a global perspective, we proudly partner with clients across
              India, the US, Europe, and the Middle East, offering tailored
              strategies that honor cultural nuances while maintaining universal
              appeal.
              </p>
              <p>
               Whether you’re looking to launch a new brand, revamp your
              digital presence, or scale your business online, we combine
              strategic thinking, cutting-edge technology, and creative
              storytelling to amplify your brand in the digital world.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="relative ">
              <Image
                src="/modern-office-collaboration.png"
                alt="Kola Communication Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 sm:block hidden">
                <Quote className="w-8 h-8 text-[#4F46E5] mb-2" />
                <p className="text-sm text-gray-600 italic">
                  "Innovation is our language, success is our translation."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* mission and code  */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4 max-w-full sm:max-w-md md:max-w-2xl lg:max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    {/* Mission SVG (original code) */}
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-800 mb-2 sm:mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To revolutionize businesses through innovative digital
                    solutions, leveraging cutting-edge technologies like AI,
                    blockchain, and cloud computing to create scalable,
                    future-ready applications that drive growth and efficiency.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border border-purple-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    {/* Vision SVG (original code) */}
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-800 mb-2 sm:mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To be the global leader in advanced digital transformation,
                    empowering businesses worldwide with intelligent, secure,
                    and scalable technology solutions that shape the future of
                    digital commerce.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-x-auto">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm break-words">
                      company-stats.json
                    </span>
                  </div>
                  <pre className="text-green-400 font-mono text-xs sm:text-sm leading-relaxed break-words whitespace-pre-wrap">
                    {`{
  "company": "Kola Communication",
  "founded": "2024",
  "headquarters": "Global",
  "technologies": [
    "AI/ML", "Blockchain", "Cloud Native",
    "Microservices", "DevOps", "IoT"
  ],
  "certifications": [
    "AWS Advanced Partner",
    "Google Cloud Premier",
    "Microsoft Gold Partner"
  ],
  "achievements": {
    "projects_completed": 100,
    "client_satisfaction": "99.8%",
    "uptime_guarantee": "99.9%",
    "response_time": "< 24 hours"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/*  
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 bg-white"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${
                      index * 100
                    }ms forwards`,
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#4F46E5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4F46E5]/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#4F46E5]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
