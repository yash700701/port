import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yash Tiwari - MERN Stack Developer",
  description:
    "Portfolio of Yash Tiwari, a passionate MERN stack developer specializing in full-stack web applications, modern UI/UX design, and scalable solutions.",
  keywords: "MERN developer, React, Node.js, MongoDB, Express.js, Full Stack Developer, Web Development",
  authors: [{ name: "Yash Tiwari" }],
  openGraph: {
    title: "Yash Tiwari - MERN Stack Developer",
    description: "Portfolio showcasing modern web applications and full-stack development expertise",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
