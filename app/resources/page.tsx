import type React from "react"
import { ResourcesGrid } from "@/components/resources-grid"

export default function Resources() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Resources</h1>
            <p className="text-gray-600">Videos that helps educate the learners.</p>
          </div>
          <button className="bg-yellow-300 text-black px-4 py-2 rounded-md flex items-center gap-2">
            <FilterIcon className="h-5 w-5" />
            Filter
          </button>
        </div>
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="search for topic, modules..."
            className="w-full md:w-96 pl-10 pr-4 py-2 rounded-md border border-gray-200"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="mt-6">
        <ResourcesGrid />
      </div>
    </div>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
