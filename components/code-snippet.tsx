"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeSnippetProps {
  code: string
  language: string
  title: string
}

export default function CodeSnippet({ code, language, title }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium">{title}</span>
        </div>
        <button onClick={copyToClipboard} className="p-1 hover:bg-gray-700 rounded transition-colors duration-200">
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          <code className={`language-${language} text-gray-100`}>{code}</code>
        </pre>
      </div>
    </div>
  )
}
