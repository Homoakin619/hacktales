import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { VerificationBanner } from "@/components/verification-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hacktales Dashboard",
  description: "Learning platform dashboard for Hacktales",
    generator: ''
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col bg-background">
          <Header />
          <VerificationBanner />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}


import './globals.css'