"use client"

import { useState, useEffect } from "react"

interface CodeSnippet {
  id: string
  title: string
  language: string
  code: string
  description: string
}

const codeSnippets: CodeSnippet[] = [
  {
    id: "react-ai",
    title: "AI Chat Component",
    language: "tsx",
    code: `const AIChatBot = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (text: string) => {
    setLoading(true)
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: text })
    })
    const data = await response.json()
    setMessages(prev => [...prev, data])
    setLoading(false)
  }

  return (
    <div className="chat-container">
      {messages.map(msg => (
        <div key={msg.id}>{msg.content}</div>
      ))}
      {loading && <Spinner />}
    </div>
  )
}`,
    description: "Modern AI-powered chat interface with real-time responses",
  },
  {
    id: "api-route",
    title: "Next.js API Route",
    language: "ts",
    code: `export async function POST(request: Request) {
  try {
    const { email, message } = await request.json()
    
    // Validate input
    if (!email || !message) {
      return Response.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }

    // Process with AI
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    })

    return Response.json({ 
      success: true, 
      data: aiResponse.choices[0].message 
    })
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}`,
    description: "Robust API endpoint with error handling and AI integration",
  },
  {
    id: "database",
    title: "Database Operations",
    language: "ts",
    code: `import { prisma } from '@/lib/prisma'

export class UserService {
  static async createUser(data: CreateUserData) {
    return await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        profile: {
          create: {
            bio: data.bio,
            avatar: data.avatar
          }
        }
      },
      include: { profile: true }
    })
  }

  static async getUserWithPosts(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        posts: {
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    })
  }
}`,
    description: "Type-safe database operations with Prisma ORM",
  },
]

export default function AdvancedCodeSnippet() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setDisplayedCode("")
    setCurrentIndex(0)

    const code = codeSnippets[currentSnippet].code
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= code.length) {
          clearInterval(interval)
          return prevIndex
        }
        setDisplayedCode(code.slice(0, prevIndex + 1))
        return prevIndex + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [currentSnippet])

  const isTyping = currentIndex < codeSnippets[currentSnippet].code.length

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">{codeSnippets[currentSnippet].title}</div>
        </div>

        <div className="p-4 h-64 sm:h-72">
          <div className="flex items-center justify-between mb-3">
            <span className="text-blue-400 text-sm font-mono">{codeSnippets[currentSnippet].language}</span>
            {isTyping && (
              <div className="flex items-center space-x-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="hidden sm:inline">Coding...</span>
              </div>
            )}
          </div>

          <pre className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed overflow-auto h-40 sm:h-48">
            <code>{displayedCode}</code>
            {isTyping && <span className="animate-pulse text-green-400">|</span>}
          </pre>

          <div className="mt-3 p-2 bg-gray-800/50 rounded border border-gray-600">
            <p className="text-xs text-gray-400">{codeSnippets[currentSnippet].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
