import { ArrowRight, BookOpen, CheckCircle, Trophy } from "lucide-react"
import Link from "next/link"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "completion",
      title: "Completed 'Introduction to Firewalls'",
      time: "2 hours ago",
      icon: CheckCircle,
      iconColor: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      type: "achievement",
      title: "Earned 'Quick Learner' badge",
      time: "Yesterday",
      icon: Trophy,
      iconColor: "text-amber-600 bg-amber-100",
    },
    {
      id: 3,
      type: "resource",
      title: "Accessed 'OWASP Top 10' resource",
      time: "2 days ago",
      icon: BookOpen,
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 4,
      type: "completion",
      title: "Completed 'SQL Injection Basics'",
      time: "3 days ago",
      icon: CheckCircle,
      iconColor: "text-green-600 bg-green-100",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Recent Activity</h2>
          <Link href="/activity" className="text-primary text-sm flex items-center gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => {
          const Icon = activity.icon

          return (
            <div key={activity.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${activity.iconColor}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
