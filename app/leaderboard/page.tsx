import type React from "react"
import { LeaderboardPodium } from "@/components/leaderboard-podium"
import { LeaderboardTable } from "@/components/leaderboard-table"

export default function Leaderboard() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <p className="text-gray-600">Top performing learners.</p>
          </div>
        </div>
        <div className="mt-6">
          <LeaderboardPodium />
        </div>
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-xl font-bold">Participants</h2>
          <div className="bg-yellow-300 text-black px-4 py-2 rounded-md flex items-center gap-2">
            Last Month
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="h-[650px] mt-4">
        <LeaderboardTable />
      </div>
    </div>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
