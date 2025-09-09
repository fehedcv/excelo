import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Excelo - Empowering Entrepreneurs, Digitally",
  description:
    "Transform your business with innovative digital solutions. Excelo provides comprehensive digital marketing, automation, e-commerce, and analytics services for modern entrepreneurs.",
  keywords:
    "digital transformation, business automation, e-commerce development, digital marketing, data analytics, entrepreneurship",
  authors: [{ name: "Excelo Team" }],
  creator: "Excelo",
  publisher: "Excelo",
  openGraph: {
    title: "Excelo - Empowering Entrepreneurs, Digitally",
    description: "Transform your business with innovative digital solutions from Excelo.",
    url: "https://excelo.com",
    siteName: "Excelo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excelo - Empowering Entrepreneurs, Digitally",
    description: "Transform your business with innovative digital solutions from Excelo.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
