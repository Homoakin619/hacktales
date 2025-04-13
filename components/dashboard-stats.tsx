import type React from "react"
export function DashboardStats() {
  const stats = [
    {
      title: "ACTIVE USERS",
      value: "2,456",
      icon: (
        <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center">
          <UsersIcon className="h-8 w-8 text-blue-500" />
        </div>
      ),
    },
    {
      title: "REGISTERED USERS",
      value: "3,006",
      icon: (
        <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center">
          <UserCheckIcon className="h-8 w-8 text-green-500" />
        </div>
      ),
    },
    {
      title: "ACTIVE LEARNER",
      value: "1,008",
      icon: (
        <div className="h-12 w-12 bg-purple-100 rounded-md flex items-center justify-center">
          <BookOpenIcon className="h-8 w-8 text-purple-500" />
        </div>
      ),
    },
    {
      title: "COURSE COMPLETION",
      value: "108",
      icon: (
        <div className="h-12 w-12 bg-red-100 rounded-md flex items-center justify-center">
          <AwardIcon className="h-8 w-8 text-red-500" />
        </div>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            index === 0 ? "bg-blue-50" : index === 1 ? "bg-green-50" : index === 2 ? "bg-purple-50" : "bg-red-50"
          }`}
        >
          <div className="flex items-center gap-4">
            {stat.icon}
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function UserCheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  )
}

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
