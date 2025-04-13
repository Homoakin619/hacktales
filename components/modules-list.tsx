import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export function ModulesList() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      progress: 100,
      duration: "2h 30m",
      completed: true,
    },
    {
      id: 2,
      title: "Network Security Fundamentals",
      progress: 75,
      duration: "3h 15m",
      completed: false,
    },
    {
      id: 3,
      title: "Web Application Security",
      progress: 40,
      duration: "4h 00m",
      completed: false,
    },
    {
      id: 4,
      title: "Ethical Hacking Basics",
      progress: 0,
      duration: "3h 45m",
      completed: false,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Your Modules</h2>
          <Link href="/modules" className="text-primary text-sm flex items-center gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {modules.map((module) => (
          <div key={module.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{module.title}</h3>
              {module.completed ? (
                <span className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" /> Completed
                </span>
              ) : (
                <span className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" /> {module.duration}
                </span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${module.progress}%` }}></div>
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>Progress</span>
              <span>{module.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
