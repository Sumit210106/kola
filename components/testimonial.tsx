"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Quote, User, X } from "lucide-react";

const testimonialsData = [
  {
    id: "karan-mehta",
    name: "Karan Mehta",
    role: "",
    company: "",
    testimonial:
      "Kola Communications’ ability to understand our unique needs and translate them into creative campaigns has been invaluable. Their work has not only strengthened our brand but also driven meaningful engagement.",
    project: "Creative Campaigns",
  },
  {
    id: "nitin",
    name: "Nitin",
    role: "",
    company: "",
    testimonial:
      "Their team doesn’t just work on projects—they truly invest in your success. Kola Communications provided us with innovative designs and a clear strategy that elevated our brand presence.",
    project: "Design & Strategy",
  },
  {
    id: "dhairya-shah",
    name: "Dhairya Shah",
    role: "",
    company: "",
    testimonial:
      "Working with Kola Communications has been a game-changer for our business. Their innovative approach to content and design helped us connect more deeply with our audience.",
    project: "Content & Design",
  },
  {
    id: "amit-verma",
    name: "Amit Verma",
    role: "",
    company: "",
    testimonial:
      "From concept to execution, Kola Communications made the entire process seamless and enjoyable. Their expertise in branding and digital marketing took our business to the next level.",
    project: "Branding & Marketing",
  },
];

const projectColors: Record<string, string> = {
  "Creative Campaigns": "bg-pink-500",
  "Design & Strategy": "bg-blue-500",
  "Content & Design": "bg-green-500",
  "Branding & Marketing": "bg-yellow-500",
};

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  maxTestimonials?: number;
}

export default function Testimonials({
  title = "What Our Clients Say",
  subtitle = "Trusted by businesses worldwide for exceptional digital solutions",
  showHeader = true,
  maxTestimonials,
}: TestimonialsProps) {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const displayTestimonials = maxTestimonials
    ? testimonialsData.slice(0, maxTestimonials)
    : testimonialsData;

  const duplicatedTestimonials = [
    ...displayTestimonials,
    ...displayTestimonials,
    ...displayTestimonials,
  ];

  const getAvatarColor = (index: number) => {
    const colors = [
      "from-rose-400 to-rose-500",
      "from-blue-400 to-blue-500",
      "from-emerald-400 to-emerald-500",
      "from-purple-400 to-purple-500",
      "from-amber-400 to-amber-500",
      "from-teal-400 to-teal-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id='testimonial' className="md:pt-10 mt-[-20px] pt-5 bg-gradient-to-br from-neutral-50 via-white to-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {showHeader && (
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black bg-clip-text mb-3 sm:mb-4 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-neutral-600 max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}

        {/* MARQUEE */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-8 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-neutral-50 via-white/95 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-stone-50 via-white/95 to-transparent z-30 pointer-events-none"></div>

          <div className="marquee-container">
            <div
              className="flex animate-marquee gap-4 sm:gap-6 lg:gap-8"
              id="marquee-track"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[420px]"
                  onMouseEnter={() => {
                    const track = document.getElementById("marquee-track");
                    if (track) track.style.animationPlayState = "paused";
                  }}
                  onMouseLeave={() => {
                    const track = document.getElementById("marquee-track");
                    if (track) track.style.animationPlayState = "running";
                  }}
                >
                  <div
                    className="bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-5 sm:p-6 lg:p-8 h-full shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer relative overflow-hidden group"
                    onClick={() => setSelectedTestimonial(testimonial)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/40 via-transparent to-stone-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-end mb-4 sm:mb-6">
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-neutral-500 transition-colors duration-300" />
                      </div>

                      {/* Short testimonial preview */}
                      <blockquote className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 line-clamp-4">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${getAvatarColor(
                            index
                          )} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300 flex-shrink-0`}
                        >
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
                        <Badge
                          className={`${
                            projectColors[testimonial.project] ||
                            projectColors["Creative Campaigns"]
                          } text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 transition-all duration-300 flex-shrink-0 shadow-sm border`}
                        >
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

      {/* MODAL POPUP */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
              onClick={() => setSelectedTestimonial(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(
                  1
                )} flex items-center justify-center shadow-sm`}
              >
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 text-lg">
                  {selectedTestimonial.name}
                </h4>
                <p className="text-sm text-neutral-600">
                  {selectedTestimonial.role}
                </p>
                <p className="text-xs text-neutral-500">
                  {selectedTestimonial.company}
                </p>
              </div>
              <Badge
                className={`ml-auto ${
                  projectColors[selectedTestimonial.project]
                } text-xs font-medium px-3 py-1 border`}
              >
                {selectedTestimonial.project}
              </Badge>
            </div>

            <p className="text-neutral-700 text-base leading-relaxed">
              “{selectedTestimonial.testimonial}”
            </p>
          </div>
        </div>
      )}

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
          animation: marquee 12s linear infinite;
          transition: animation-play-state 0.3s ease;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
