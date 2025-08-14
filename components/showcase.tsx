"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projectsData = [
  {
    id: "deemonash",
    title: "Deemonash",
    category: "Web Design",
    tags: ["Web Design"],
    date: "2024",
    description: "Modern web design solution with clean aesthetics and user-focused interface.",
    thumbnail: "/deemonash-blob.jpeg",
    link: "https://deemonash.com",
  },
  {
    id: "aashiyaanaa-villas",
    title: "Aashiyaanaa Villas",
    category: "Web Design",
    tags: ["Web Design"],
    date: "2024",
    description: "Luxury villa website showcasing premium properties with elegant design.",
    thumbnail: "/Aashiyaanaa-Villas.jpeg",
    link: "https://aashiyaanaa-villas.com",
  },
  {
    id: "premier-league-news",
    title: "Premier League News Now",
    category: "Content & SEO",
    tags: ["Content Writing", "SEO"],
    date: "2024",
    description: "Sports news platform with optimized content and search engine visibility.",
    thumbnail: "/Premier-league.jpeg",
    link: "https://premier-league-news.com",
  },
  {
    id: "we-cover-it-instagram",
    title: "We Cover It (Instagram)",
    category: "Social Media",
    tags: ["Social Media Marketing"],
    date: "2024",
    description: "Instagram marketing campaign with engaging visual content and strategy.",
    thumbnail: "/We-cover-it.jpeg",
    link: "https://instagram.com/wecoverit",
  },
  {
    id: "vaiikuntha",
    title: "Vaiikuntha",
    category: "Web Design",
    tags: ["Web Design"],
    date: "2024",
    description: "Spiritual website design with serene aesthetics and meaningful content.",
    thumbnail: "/vaiikunth-blob.jpeg",
    link: "https://vaiikuntha.com",
  },
  {
    id: "bright-brush-bristle",
    title: "Bright Brush and Bristle Works",
    category: "Web Design",
    tags: ["Web Design"],
    date: "2024",
    description: "Professional painting services website with portfolio showcase.",
    thumbnail: "/Bright-Brush-and-Bristle-Works.jpeg",
    link: "https://bright-brush.com",
  },
  {
    id: "revent-ai",
    title: "Revent AI",
    category: "Social Media",
    tags: ["Social Media Marketing"],
    date: "2024",
    description: "AI-powered social media marketing solutions and automation tools.",
    thumbnail: "/Revent-ai.jpeg",
    link: "https://revent-ai.com",
  },
  {
    id: "arsenal-core",
    title: "Arsenal Core",
    category: "Content & SEO",
    tags: ["Content Writing", "SEO"],
    date: "2024",
    description: "Football content platform with SEO-optimized articles and fan engagement.",
    thumbnail: "/Arsenal-Core.jpeg",
    link: "https://arsenal-core.com",
  },
  {
    id: "we-cover-it-website",
    title: "We Cover It",
    category: "Web Design",
    tags: ["Web Design"],
    date: "2024",
    description: "Comprehensive web design solution with modern functionality.",
    thumbnail: "/We-cover-it.jpeg",
    link: "https://we-cover-it.com",
  },
]

interface ProjectsShowcaseProps {
  title?: string
  subtitle?: string
  showHeader?: boolean
  maxProjects?: number
}

export default function ProjectsShowcase({
  title = "Our Projects",
  subtitle = "Showcasing our latest work across web design, content, and social media",
  showHeader = true,
  maxProjects,
}: ProjectsShowcaseProps) {
  const displayProjects = maxProjects ? projectsData.slice(0, maxProjects) : projectsData

  return (
    <section id="projects" className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={`${project.title} project thumbnail`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600 text-white border-0 text-xs font-medium px-3 py-1 shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 text-xs font-medium px-3 py-1 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Live Demo Link */}
                  <div className="pt-3 border-t border-gray-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors duration-300 group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
