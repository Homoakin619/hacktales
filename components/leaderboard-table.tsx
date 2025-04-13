import { MoreHorizontal } from "lucide-react"

export function LeaderboardTable() {
  const participants = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: "Gbenga Hacktales",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: "4.0",
      module: "Cybersecurity Fundamentals",
      date: "02 Jan, 2025",
      streaks: "10 stks",
    }))

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 h-full">
      <div className="overflow-auto h-full">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Application Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Streaks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {participants.map((participant) => (
              <tr key={participant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={participant.avatar || "/placeholder.svg"}
                        alt={participant.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{participant.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="text-orange-500">🔥</span>
                    <span>{participant.rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{participant.module}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{participant.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">🔥</span>
                    <span>{participant.streaks}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
