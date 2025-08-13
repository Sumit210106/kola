import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <span className="text-sm font-medium text-blue-700">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              <span className="gradient-text">About Kola Communication</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pioneering the future of digital innovation with cutting-edge technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize businesses through innovative digital solutions, leveraging cutting-edge technologies
                  like AI, blockchain, and cloud computing to create scalable, future-ready applications that drive
                  growth and efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in advanced digital transformation, empowering businesses worldwide with
                  intelligent, secure, and scalable technology solutions that shape the future of digital commerce.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">company-stats.json</span>
                </div>
                <pre className="text-green-400 font-mono text-sm leading-relaxed">
                  {`{
  "company": "Kola Communication",
  "founded": "2020",
  "headquarters": "Global",
  "team_size": "50+ experts",
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
    "projects_completed": 500,
    "client_satisfaction": "99.8%",
    "uptime_guarantee": "99.9%",
    "response_time": "< 2 hours"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans and innovative minds working together to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                image: "/professional-woman-ceo.png",
                expertise: ["AI/ML", "System Architecture", "Cloud Computing"],
                description: "15+ years in enterprise software development and AI research",
              },
              {
                name: "Marcus Rodriguez",
                role: "Lead Full-Stack Developer",
                image: "/professional-developer-headshot.png",
                expertise: ["React/Next.js", "Node.js", "DevOps"],
                description: "Expert in modern web technologies and scalable architectures",
              },
              {
                name: "Emily Watson",
                role: "Senior UX/UI Designer",
                image: "/professional-woman-designer-headshot.png",
                expertise: ["Design Systems", "User Research", "Prototyping"],
                description: "Award-winning designer with focus on user-centered design",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold font-display text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                description: "Pushing boundaries with cutting-edge technology solutions",
              },
              {
                icon: "🎯",
                title: "Excellence",
                description: "Delivering superior quality in every project we undertake",
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "Building long-term relationships based on trust and results",
              },
              {
                icon: "⚡",
                title: "Agility",
                description: "Adapting quickly to changing needs and market demands",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
