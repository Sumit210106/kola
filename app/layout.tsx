import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Kola Communications - Creative Website Development & Digital Solutions",
  description:
    "Partner with Kola Communications for cutting-edge website development, AI tools, mobile apps, SEO & digital solutions — helping brands create powerful online experiences.",
  keywords: [
    "kola",
    "kola communications",
    "website development",
    "web design agency",
    "custom websites",
    "scalable websites",
    "creative website development",
    "responsive web design",
    "ecommerce website development",
    "Shopify website development",
    "WordPress website development",
    "enterprise web applications",
    "digital solutions company",
    "AI-powered web solutions",
    "cloud-native web apps",
    "mobile app development",
    "SEO services",
    "social media marketing",
    "digital marketing agency",
    "global website development company",
    "innovative web design",
    "user experience design",
    "professional website development",
    "best website development company India",
    "international web development agency",
    "custom coded website",
  ],
  authors: [{ name: "Kola Communications" }],
  metadataBase: new URL("https://kolacommunication.com"), // replace with your live domain
  openGraph: {
    title: "Kola Communications - Creative Website Development & Digital Solutions",
    description:
      "Cutting-edge website development, AI tools, mobile apps, SEO & digital solutions to create powerful online experiences.",
    url: "https://kolacommunication.com",
    siteName: "Kola Communications",
    images: [
      {
        url: "https://kolacommunication.com/og-image.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Kola Communications - Web Development & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kola Communications - Creative Website Development & Digital Solutions",
    description:
      "Partner with Kola Communications for innovative web development, mobile apps, SEO & AI-powered digital solutions.",
    images: ["https://kolacommunication.com/og-image.jpg"], 
    creator: "@kola",
  },
  icons: {
    icon: "/favicon.png", 
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
