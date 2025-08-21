"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Search,
  PenTool,
  Share2,
  Cpu,
  DollarSign,
  BarChart2,
  Video,        // <-- Use this instead of VideoCamera
  CheckCircle,
  ArrowRight,
} from "lucide-react"
const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Designing and building modern, responsive websites that showcase your brand and engage your audience.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Custom CMS",
    ],
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Creating high-performance mobile applications tailored for iOS and Android platforms to connect with users everywhere.",
    features: [
      "Cross-Platform",
      "Native Performance",
      "App Store Ready",
      "Push Notifications",
    ],
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Driving business growth through targeted digital campaigns, paid ads, and online strategies that deliver results.",
    features: ["PPC Campaigns", "Social Ads", "Analytics", "ROI Tracking"],
    color: "bg-green-50 text-green-600",
    borderColor: "border-green-200",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improving your website's visibility and ranking in search engines to attract more organic traffic and potential clients.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Technical SEO",
    ],
    color: "bg-orange-50 text-orange-600",
    borderColor: "border-orange-200",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "Crafting compelling and relevant content to effectively engage your audience and establish your authority.",
    features: [
      "Blog Writing",
      "Video Content",
      "Infographics",
      "Brand Storytelling",
    ],
    color: "bg-pink-50 text-pink-600",
    borderColor: "border-pink-200",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Building your brand's presence and engaging your followers across all major social platforms with creative strategies.",
    features: [
      "Content Strategy",
      "Community Management",
      "Influencer Outreach",
      "Social Analytics",
    ],
    color: "bg-indigo-50 text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    icon: Cpu,
    title: "AI Apps & Tools",
    description: `We turn AI prototypes into usable tools: secure auth, API/data integrations, logging and deployment. From small internal helpers to customer-facing apps, built with guardrails and dashboards to measure impact.`,
    features: [
      "AI Model Integration",
      "Secure Authentication",
      "Real-time Data Processing",
      "Custom Dashboards & Reporting",
      "API Integrations",
    ],
    color: "bg-teal-50 text-teal-600",
    borderColor: "border-teal-200",
  },
  {
    icon: DollarSign,
    title: "Performance Marketing",
    description: `Full‑funnel campaigns across Google, Meta, and LinkedIn. Offers, creatives, landing pages, tracking, and weekly optimisations focused on qualified leads and efficient spend, not vanity metrics.`,
    features: [
      "Full-Funnel Strategy",
      "Custom Landing Pages",
      "Conversion Optimized Ads",
      "Granular Tracking & Attribution",
      "Budget Optimization",
    ],
    color: "bg-yellow-50 text-yellow-600",
    borderColor: "border-yellow-200",
  },
  {
    icon: BarChart2,
    title: "CRO & Analytics",
    description: `Track what matters and lift conversion. GA4, Tag Manager, dashboards, event mapping, funnel analysis, A/B tests, heatmaps, and landing‑page tweaks so more visitors become leads and customers.`,
    features: [
      "GA4 & Tag Manager Setup",
      "Conversion Funnel Analysis",
      "A/B & Multivariate Testing",
      "Heatmaps & User Behavior Insights",
      "Custom Reporting Dashboards",
    ],
    color: "bg-cyan-50 text-cyan-600",
    borderColor: "border-cyan-200",
  },
  {
    icon: Video, // <-- Use Video here
    title: "Video Production",
    description: `Concept to final cut: brand films, product explainers, and short‑form content. Scripts, shoots, edits, and motion graphics—made for fast loading on web and social, and aligned to campaign goals.`,
    features: [
      "Creative Concept Development",
      "Scriptwriting & Storyboarding",
      "Professional Filming & Editing",
      "Motion Graphics & Animation",
      "Optimized Formats for Web & Social",
    ],
    color: "bg-red-50 text-red-600",
    borderColor: "border-red-200",
  },
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      id="services"
      className=" md:mt-20 pb-10 px-4 sm:px-6 mt-[50px] pt-10 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From concept to execution, we provide end-to-end digital services
            that help your business thrive in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 border-2 bg-white hover:shadow-xl hover:${service.borderColor} ${service.borderColor}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <Button
                    variant="ghost"
                    className={`w-full justify-between text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-200 hover:border-blue-600 ${
                      hoveredService === index ? "bg-blue-600 text-white border-blue-600" : ""
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button> */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss how our comprehensive digital solutions can help you
              achieve your business goals and stand out in the competitive
              market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 bg-transparent w-full"
                >
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
