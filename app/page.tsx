import { DashboardStats } from "@/components/dashboard-stats"
import { ActiveUsersList } from "@/components/active-users-list"

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-6">
        <DashboardStats />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Active Users</h2>
        <p className="text-gray-600 mb-4">Recently active learners.</p>
      </div>
      <div className="h-[650px]">
        <ActiveUsersList />
      </div>
    </div>
  )
}
