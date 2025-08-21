"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  Zap,
  Target,
  Heart,
  LucideIcon,
} from "lucide-react";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  color: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const ValuesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const values: ValueItem[] = [
    {
      icon: Target,
      title: "Results-Driven",
      subtitle: "Measurable outcomes",
      description:
        "We focus on delivering measurable outcomes that directly impact your business growth and success.",
      metrics: "",
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "bg-indigo-600",
      textColor: "text-indigo-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      subtitle: "Cutting-edge technology",
      description:
        "We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive edge.",
      metrics: "",
      color: "emerald",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconColor: "bg-emerald-600",
      textColor: "text-emerald-600",
    },
    {
      icon: Users,
      title: "Client-Centric",
      subtitle: "Partnership focused",
      description:
        "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support.",
      metrics: "",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "bg-purple-600",
      textColor: "text-purple-600",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      subtitle: "Highest standards",
      description:
        "We maintain the highest standards in every project, ensuring exceptional quality and attention to detail.",
      metrics: "",
      color: "rose",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      iconColor: "bg-rose-600",
      textColor: "text-rose-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getRadialGradientColor = (color: string): string => {
    const colorMap: Record<string, string> = {
      indigo: "rgba(99, 102, 241, 0.08)",
      emerald: "rgba(16, 185, 129, 0.08)",
      purple: "rgba(139, 92, 246, 0.08)",
      rose: "rgba(244, 63, 94, 0.08)",
    };
    return colorMap[color] || "rgba(99, 102, 241, 0.08)";
  };

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Ambient Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-slate-50"></div>
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              Built on
              <span className="block mt-1 text-slate-600">
                Unshakeable Values
              </span>
            </h1>

            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Every feature, every decision, every line of code reflects our
              commitment to excellence. These aren&apos;t just words on a wall —
              they&apos;re the foundation of everything we build.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 transform ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Card Container */}
                <div className="relative bg-white border shadow-lg rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-xl group-hover:shadow-slate-100">
                  {/* Mouse Follower Light */}
                  {isActive && (
                    <div
                      className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                      style={{
                        left: mousePosition.x - 100,
                        top: mousePosition.y - 100,
                        width: 200,
                        height: 200,
                        background: `radial-gradient(circle, ${getRadialGradientColor(
                          value.color
                        )} 0%, transparent 70%)`,
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`${value.iconColor} p-3 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                        {value.title}
                      </h3>
                      <p
                        className={`text-xs font-medium ${value.textColor} mb-3`}
                      >
                        {value.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-8 transition-opacity duration-500">
                    <IconComponent className="w-full h-full text-slate-900" />
                  </div>

                  {/* Bottom Border Accent */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${value.iconColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our
              comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 bg-transparent w-full"
                >
                  Schedule a Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
