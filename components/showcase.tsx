"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projectsData = [
  {
    id: "purva-desai",
    title: "Purva Desai & Co",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/Purva Desai & Co.jpeg",
    description: `Client Requirement:
Purva Desai & Co required a WordPress website that captured the creative spirit of a social media agency. The objective was to highlight flagship projects on the homepage and showcase how these campaigns contributed to client growth and brand positioning.

How did we approach?
Our team designed an animation-rich website powered by JavaScript for an engaging look and feel. A homepage video showreel introduced their creativity instantly, while premium-styled client and project sections elevated brand perception. Each project page was crafted to explain the creative process and results in depth.`,
    link: "https://purvadesai.com",
  },
  {
    id: "revent-ai",
    title: "Revent AI",
    category: "Website Development",
    tags: ["Custom Coded"],
    date: "2024",
    image: "/projects/Revent AI.jpeg",
    description: `Client Requirement:
Revent AI sought a custom-coded platform that demonstrated their advanced AI capabilities. The backend needed to integrate seamlessly with Python-based models, with the ability to process uploaded files live and update presentations dynamically within seconds.

How did we approach?
The project resulted in a custom-built portal where users could upload and process presentation files in real time. Minimal delay between upload and output ensured efficiency, while AI models powered transformation. Pricing features tied user accounts directly to activity, aligning the technical solution with business growth.`,
    link: "https://revent.ai",
  },
  {
    id: "anantapur-2-rez",
    title: "Anantapur-II REZ Phase-I",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/Anantapur-II REZ Phase-I.jpeg",
    description: `Client Requirement:
Resonia (previously Sterlite Power) required a professional company profile website for their flagship Anantapur-II REZ Phase-I transmission project. The goal was to highlight scale and innovation while presenting a credible, stakeholder-friendly digital presence.

How did we approach?
To meet these goals, a clean and structured WordPress site was developed with layouts that emphasized project objectives and technical strengths. A gallery showcased milestones and achievements, while the overall design balanced professionalism and accessibility to engage stakeholders effectively.`,
    link: "https://anantapur2rez.com",
  },
  {
    id: "veena-developers",
    title: "Veena Developers",
    category: "Website Development",
    tags: ["Custom Coded"],
    date: "2024",
    image: "/projects/Veena Developers.jpeg",
    description: `Client Requirement:
Veena Developers needed a premium website to highlight their real estate projects with high-quality visuals and complete property details. Another requirement was optimization for speed across regions to ensure a smooth experience for global audiences.

How did we approach?
A custom-coded website was built with immersive digital design to resonate with homebuyers. Region-specific CDNs were implemented for global speed optimization. The platform combined premium visuals with fast performance, creating a seamless browsing experience that reinforced their brand positioning.`,
    link: "https://veenadevelopers.com",
  },
  {
    id: "nbtl",
    title: "Nangalbibra-Bongaigaon Transmission Line",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/Nangalbibra-Bongaigaon Transmission Line.jpeg",
    description: `Client Requirement:
Resonia (previously Sterlite Power) required a project website for the Nangalbibra-Bongaigaon Transmission Line. The focus was on highlighting strategic importance, key milestones, and providing stakeholders with an accessible digital reference for project progress.

How did we approach?
The site was developed on WordPress with a clear structure to present objectives, milestones, and innovative engineering practices. Dedicated sections showcased project highlights and gallery visuals, ensuring transparency and professionalism while reinforcing stakeholder confidence in the initiative.`,
    link: "https://nbtl.co.in",
  },
  {
    id: "zevana-jewels",
    title: "Zevana Jewels",
    category: "E-commerce Website Development",
    tags: ["WordPress WooCommerce"],
    date: "2024",
    image: "/projects/Zevana Jewels.jpeg",
    description: `Client Requirement:
Zevana Jewels required a luxury-inspired e-commerce store to showcase and sell premium jewelry online. The site needed to combine elegant design with high-quality product visuals and seamless shopping functionality across devices.

How did we approach?
A WooCommerce-powered store was created with refined aesthetics and high-resolution imagery to elevate the brand. Features included product categorization, secure payment integration, and mobile-friendly design. The result was a smooth shopping journey that reflected the exclusivity of their jewelry.`,
    link: "https://zevanajewels.com.au",
  },
  {
    id: "kanodia-enterprises",
    title: "Kanodia Enterprises",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/Kanodia Enterprises.jpeg",
    description: `Client Requirement:
Kanodia Enterprises needed a professional digital presence to represent their enterprise online. The objective was to showcase services, demonstrate industry expertise, and provide clear contact information for prospective clients.

How did we approach?
A modern WordPress website was designed with a structured layout highlighting services and expertise. The interface emphasized clarity, branding consistency, and usability. By focusing on professional presentation, the platform supported credibility and positioned the enterprise strongly in its market.`,
    link: "https://kanodiaenterprise.com",
  },
  {
    id: "acha-parhlo",
    title: "Acha Parhlo",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/Acha Parhlo.jpeg",
    description: `Client Requirement:
Acha Parhlo required a vibrant and engaging platform to represent their youthful, content-driven brand. The site needed to support regular publishing, attract a young audience, and perform strongly on search engines.

How did we approach?
The solution was a WordPress site built with interactive visuals and a structure optimized for frequent updates. Performance and SEO optimization ensured discoverability, while the engaging design encouraged audience interaction and sustained long-term engagement.`,
    link: "https://achaparhlo.com",
  },
  {
    id: "livyor",
    title: "Livyor",
    category: "E-commerce Website Development",
    tags: ["Shopify"],
    date: "2024",
    image: "/projects/Livyor.jpeg",
    description: `Client Requirement:
Livyor sought a scalable Shopify-based e-commerce solution for their lifestyle products. The requirements included sleek design, smooth navigation, and a secure, optimized platform to deliver a superior shopping experience.

How did we approach?
A Shopify store was developed with a modern, conversion-oriented layout. Product filters, responsive design, and a simplified checkout flow improved usability. The combination of scalability, speed, and sleek visuals ensured a fast and enjoyable shopping journey for customers worldwide.`,
    link: "https://livyor.com",
  },
  {
    id: "gcube-ethnic",
    title: "Gcube Ethnic",
    category: "E-commerce Website Development",
    tags: ["WordPress WooCommerce"],
    date: "2024",
    image: "/projects/Gcube Ethnic.jpeg",
    description: `Client Requirement:
Gcube Ethnic required an e-commerce website to sell ethnic wear collections online. The goal was to reflect the cultural richness of the brand while ensuring smooth navigation, secure payments, and a reliable shopping experience.

How did we approach?
A WooCommerce store was built with vibrant visuals and detailed product descriptions to highlight collections. Multiple payment gateways were added for convenience, while responsive design ensured usability across devices. The platform captured brand identity while enabling seamless purchases.`,
    link: "https://gcubeethnic.com",
  },
  {
    id: "shramak",
    title: "Shramak",
    category: "E-commerce Website Development",
    tags: ["Shopify"],
    date: "2024",
    image: "/projects/Shramak.jpeg",
    description: `Client Requirement:
Shramak required a Shopify-based platform to showcase and sell their fashion line. The project demanded a fast, mobile-first website with user-friendly navigation and conversion-focused product pages.

How did we approach?
A Shopify store was created with clean layouts, intuitive navigation, and product pages optimized for conversions. Mobile-first design and secure payment integrations enhanced usability, delivering a fast, frictionless shopping experience tailored to fashion customers.`,
    link: "https://shramak.com",
  },
  {
    id: "arsenal-core",
    title: "Arsenal Core",
    category: "Content & SEO",
    tags: ["Content Writing", "SEO"],
    date: "2024",
    image: "/projects/Arsenal Core.jpeg",
    description: `Client Requirement:
Arsenal Core needed consistent, SEO-optimized content to grow their online presence. The aim was to create targeted articles for Arsenal fans that ranked well, attracted organic traffic, and built authority in the niche.

How did we approach?
A tailored content strategy was implemented, producing keyword-rich articles that resonated with Arsenal supporters. SEO techniques and regular publishing improved rankings, boosted visibility, and established Arsenal Core as a go-to destination for fan-focused content.`,
    link: "https://arsenalcore.com",
  },
  {
    id: "pl-news-now",
    title: "Premier League News Now",
    category: "Content & SEO",
    tags: ["Content Writing", "SEO"],
    date: "2024",
    image: "/projects/Premier League News Now.jpeg",
    description: `Client Requirement:
The platform required a structured editorial and SEO approach to scale traffic and strengthen its position in the competitive football news space. Timely coverage and strong search performance were the top priorities.

How did we approach?
High-quality football content was produced consistently, aligned with trending topics and optimized for SEO. This improved organic reach, audience engagement, and retention, ultimately strengthening domain authority in the sports media sector.`,
    link: "https://premierleaguenewsnow.com",
  },
  {
    id: "blufeather-solutions",
    title: "BluFeather Solutions",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/BluFeather Solutions.jpeg",
    description: `Client Requirement:
BluFeather Solutions required a business website to present their services effectively and build a professional digital identity. The focus was on clarity, branding, and trust-building for client acquisition.

How did we approach?
A WordPress site was developed with a clean and professional design. Services were clearly structured, while branding and usability enhancements encouraged engagement. The platform established credibility and supported their digital presence in the services industry.`,
    link: "https://blufeathersolution.com",
  },
  {
    id: "aashiyaanaa-villa",
    title: "Aashiyaanaa Villa",
    category: "Website Development",
    tags: ["WordPress"],
    date: "2024",
    image: "/projects/Aashiyaanaa Villa.jpeg",
    description: `Client Requirement:
Aashiyaanaa Villa needed a digital platform to promote their luxury properties. The aim was to highlight interiors, amenities, and booking details while emphasizing exclusivity and premium lifestyle appeal.

How did we approach?
A visually immersive WordPress website was designed featuring rich imagery, property highlights, and booking functionality. The design conveyed elegance and exclusivity, creating a seamless browsing experience tailored to high-end clientele.`,
    link: "https://aashiyaanaavilla.com",
  },
]

interface ProjectsShowcaseProps {
  title?: string
  subtitle?: string
  showHeader?: boolean
  maxProjects?: number
}

export default function Showcase({
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
                <div className="relative overflow-hidden h-56 rounded-t-xl border border-gray-300">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600 text-white border-0 text-xs font-medium px-3 py-1 shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{project.description}</p>
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
