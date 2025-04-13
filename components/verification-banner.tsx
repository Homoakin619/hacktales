import type React from "react"
export function VerificationBanner() {
  return (
    <div className="bg-yellow-100 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-primary-dark flex items-center justify-center text-white">
          <CheckIcon className="h-4 w-4" />
        </div>
        <span className="text-gray-800">Please verify your account if you haven&apos;t</span>
      </div>
      <button className="bg-primary-dark text-white px-4 py-1 rounded-md">Verify</button>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
