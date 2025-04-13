"use client"

import { useState } from "react"
import { HacktalesLogo } from "@/components/hacktales-logo"

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  const handleResendEmail = () => {
    setIsResending(true)

    // Simulate API call
    setTimeout(() => {
      setIsResending(false)
      setResendSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setResendSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <HacktalesLogo />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-xl font-medium mb-4">Verify your email</h1>
          <p className="text-sm text-gray-600 mb-6">
            We&apos;ve sent a verification link to your email address. Please check your inbox and click the link to
            verify your account.
          </p>

          {resendSuccess && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-md">
              Verification email resent successfully!
            </div>
          )}

          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {isResending ? "Sending..." : "Resend Email"}
          </button>
        </div>
      </div>
    </main>
  )
}
