"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { HacktalesLogo } from "@/components/hacktales-logo"
import { login } from "@/actions/authentication"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { email, password }
    const loginRequest = await login(payload)
    console.log(loginRequest)
  }

  return (
    <main className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <HacktalesLogo />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-xl font-medium mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="text-right">
              <Link href="/forgot-password" className="text-xs text-primary">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-xs">
            <span className="text-gray-500">or</span>
          </div>
          <div className="mt-2 text-center text-sm">
            <span className="text-gray-600">Don&apos;t have an account? </span>
            <Link href="/signup" className="text-primary font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
