"use client"

import { Badge } from "@/components/ui/badge"
import { Star, Quote, User } from "lucide-react"

const testimonialsData = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    rating: 5,
    testimonial:
      "KOLA Communications transformed our digital presence completely. Their web design expertise and attention to detail exceeded our expectations.",
    project: "Web Design",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthLab",
    rating: 5,
    testimonial:
      "The SEO and content strategy they developed increased our organic traffic by 300%. Exceptional work and results-driven approach.",
    project: "SEO & Content",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Lifestyle Co.",
    rating: 5,
    testimonial:
      "Their social media marketing campaigns generated incredible engagement. Our follower count doubled in just three months.",
    project: "Social Media",
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    role: "Founder",
    company: "InnovateTech",
    rating: 5,
    testimonial:
      "Professional, creative, and reliable. KOLA Communications delivered a stunning website that perfectly represents our brand.",
    project: "Web Design",
  },
  {
    id: "lisa-wang",
    name: "Lisa Wang",
    role: "Operations Manager",
    company: "Digital Solutions",
    rating: 5,
    testimonial:
      "Outstanding content creation and SEO optimization. Our search rankings improved dramatically within weeks of implementation.",
    project: "Content & SEO",
  },
  {
    id: "james-miller",
    name: "James Miller",
    role: "Creative Director",
    company: "Design Studio",
    rating: 5,
    testimonial:
      "The team's creativity and strategic thinking helped us launch a successful social media campaign that exceeded all our goals.",
    project: "Social Media",
  },
]

const projectColors = {
  "Web Design": "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  "SEO & Content": "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
  "Social Media": "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  "Content & SEO": "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  showHeader?: boolean
  maxTestimonials?: number
}

export default function Testimonials({
  title = "What Our Clients Say",
  subtitle = "Trusted by businesses worldwide for exceptional digital solutions",
  showHeader = true,
  maxTestimonials,
}: TestimonialsProps) {
  const displayTestimonials = maxTestimonials ? testimonialsData.slice(0, maxTestimonials) : testimonialsData
  const duplicatedTestimonials = [...displayTestimonials, ...displayTestimonials, ...displayTestimonials]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 transition-colors duration-300 ${
          index < rating ? "text-amber-400 fill-current" : "text-neutral-200"
        }`} 
      />
    ))
  }

  const getAvatarColor = (index: number) => {
    const colors = [
      "from-rose-400 to-rose-500",
      "from-blue-400 to-blue-500", 
      "from-emerald-400 to-emerald-500",
      "from-purple-400 to-purple-500",
      "from-amber-400 to-amber-500",
      "from-teal-400 to-teal-500"
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="md:pt-10 mt-[-20px] pt-5 bg-gradient-to-br from-neutral-50 via-white to-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {showHeader && (
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black bg-clip-text  mb-3 sm:mb-4 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-neutral-600 max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}

        <div className="relative">
          {/* Enhanced gradient masks for better fading */}
          <div className="absolute left-0 top-0 w-8 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-neutral-50 via-white/95 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-stone-50 via-white/95 to-transparent z-30 pointer-events-none"></div>

          <div className="marquee-container">
            <div className="flex animate-marquee gap-4 sm:gap-6 lg:gap-8" id="marquee-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`} 
                  className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[420px]"
                  onMouseEnter={() => {
                    const track = document.getElementById('marquee-track')
                    if (track) track.style.animationPlayState = 'paused'
                  }}
                  onMouseLeave={() => {
                    const track = document.getElementById('marquee-track')
                    if (track) track.style.animationPlayState = 'running'
                  }}
                >
                  <div className="bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-5 sm:p-6 lg:p-8 h-full shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer relative overflow-hidden group">
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/40 via-transparent to-stone-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="flex items-center gap-0.5">
                          {renderStars(testimonial.rating)}
                        </div>
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-neutral-500 transition-colors duration-300" />
                      </div>

                      <blockquote className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 font-medium line-clamp-4">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300 flex-shrink-0`}>
                          <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-neutral-900 text-sm sm:text-base lg:text-lg truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-neutral-600 text-xs sm:text-sm lg:text-base truncate font-medium">
                            {testimonial.role}
                          </p>
                          <p className="text-neutral-500 text-xs sm:text-sm truncate">
                            {testimonial.company}
                          </p>
                        </div>
                        <Badge className={`${projectColors[testimonial.project] || projectColors["Web Design"]} text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 transition-all duration-300 flex-shrink-0 shadow-sm border`}>
                          {testimonial.project}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive breakpoints */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 10s;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .animate-marquee {
            animation-duration: 10s;
          }
        }

        @media (min-width: 1024px) {
          .animate-marquee {
            animation-duration: 10s;
          }
        }

        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(8px)) {
          .bg-white\\/70 {
            backdrop-filter: blur(8px);
          }
        }

        /* Smooth pause transition */
        .animate-marquee {
          transition: animation-play-state 0.3s ease;
        }
      `}</style>
    </section>
  )
}