export function LeaderboardPodium() {
  const topUsers = [
    {
      rank: 2,
      name: "Robert Korsgaard",
      username: "@robkor",
      avatar: "/placeholder.svg?height=80&width=80",
      modules: "05",
      quizzes: "200",
      avgScore: "1,002",
      streaks: "10 stks",
      background: "bg-gradient-to-r from-blue-200 to-blue-100",
    },
    {
      rank: 1,
      name: "Robert Korsgaard",
      username: "@robkor",
      avatar: "/placeholder.svg?height=80&width=80",
      modules: "05",
      quizzes: "200",
      avgScore: "1,002",
      streaks: "10 stks",
      background: "bg-gradient-to-r from-yellow-200 to-yellow-100",
    },
    {
      rank: 3,
      name: "Robert Korsgaard",
      username: "@robkor",
      avatar: "/placeholder.svg?height=80&width=80",
      modules: "05",
      quizzes: "200",
      avgScore: "1,002",
      streaks: "10 stks",
      background: "bg-gradient-to-r from-orange-200 to-orange-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {topUsers.map((user) => (
        <div key={user.rank} className={`rounded-lg p-6 ${user.background}`}>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold italic mb-4">
              {user.rank}
              <sup>{user.rank === 1 ? "st" : user.rank === 2 ? "nd" : "rd"}</sup>
            </div>
            <div className="h-16 w-16 rounded-full bg-purple-300 overflow-hidden mb-2">
              <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">{user.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{user.username}</p>

            <div className="grid grid-cols-3 gap-2 w-full">
              <div className="bg-white/80 rounded-md p-2 text-center">
                <div className="font-bold">{user.modules}</div>
                <div className="text-xs text-gray-500">Module</div>
              </div>
              <div className="bg-white/80 rounded-md p-2 text-center">
                <div className="font-bold">{user.quizzes}</div>
                <div className="text-xs text-gray-500">Quizzes Ans</div>
              </div>
              <div className="bg-white/80 rounded-md p-2 text-center">
                <div className="font-bold">{user.avgScore}</div>
                <div className="text-xs text-gray-500">Avg scores</div>
              </div>
            </div>

            <button className="mt-4 w-full bg-white py-2 rounded-md text-center">Profile</button>

            <div className="mt-2 flex items-center gap-1">
              <span className="text-yellow-500">🔥</span>
              <span className="text-sm">{user.streaks}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
