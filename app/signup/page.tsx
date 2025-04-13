"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { HacktalesLogo } from "@/components/hacktales-logo"

export default function SignupPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle registration here
    console.log("Signup attempt with:", { fullName, email, password })

    // Redirect to email verification page
    router.push("/verify-email")
  }

  return (
    <main className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <HacktalesLogo />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-xl font-medium mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4 text-center text-xs">
            <span className="text-gray-500">or</span>
          </div>
          <div className="mt-2 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="text-primary font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
