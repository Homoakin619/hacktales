"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    {
      name: "Dashboard",
      href: "/",
      icon: DashboardIcon,
    },
    {
      name: "Manage Assessment",
      href: "/assessment",
      icon: AssessmentIcon,
    },
    {
      name: "Videos & Resources",
      href: "/resources",
      icon: ResourcesIcon,
    },
    {
      name: "Leaderboard",
      href: "/leaderboard",
      icon: LeaderboardIcon,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: AnalyticsIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: SettingsIcon,
    },
  ]

  return (
    <div className="w-64 bg-light-green text-gray-800 flex flex-col h-full">
      <div className="p-4 text-sm text-gray-500 uppercase">Services</div>
      <nav className="flex-1">
        <ul className="space-y-1 px-3">
          {links.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                    isActive ? "bg-primary-dark text-white" : "text-gray-700 hover:bg-green-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="p-4">
        <div className="bg-yellow-300 rounded-lg p-4 mb-4">
          <div className="font-bold text-lg mb-1">Upgrade to Pro</div>
          <p className="text-sm mb-4">Discover the benefit of an upgraded account.</p>
          <button className="w-full bg-primary-dark text-white py-2 rounded-md">Upgrade</button>
        </div>
        <button className="flex items-center gap-2 text-gray-700 px-3 py-2 w-full">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}

function AssessmentIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}

function ResourcesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m14.5 2 3 3L14 8.5 11 5.5 14.5 2Z" />
      <path d="m14 8.5 3 3-2.5 2.5-3-3L14 8.5Z" />
      <path d="m11 5.5 3 3-2.5 2.5-3-3L11 5.5Z" />
      <path d="M8.5 11 5 14.5l2.5 2.5 3.5-3.5L8.5 11Z" />
      <path d="M3 22v-5l5-5 3 3-5 5H3Z" />
    </svg>
  )
}

function LeaderboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 20v-6" />
      <path d="M6 20V10" />
      <path d="M18 20V4" />
    </svg>
  )
}

function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
