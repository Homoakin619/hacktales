import type React from "react"
export function ResourcesGrid() {
  const resources = Array(9)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: "Cybersecurity Fundamentals",
      creator: "Hacktales Creators",
      thumbnail: "/placeholder.svg?height=200&width=300",
    }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src={resource.thumbnail || "/placeholder.svg"}
              alt={resource.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white">
                <PlayIcon className="h-8 w-8 text-gray-800" />
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Creator avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{resource.title}</h3>
                <p className="text-sm text-gray-500">{resource.creator}</p>
              </div>
            </div>
            <button className="text-gray-400">
              <MoreHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function MoreHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
