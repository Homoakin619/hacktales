import { Bell, Search } from "lucide-react"
import { HacktalesLogo } from "./hacktales-logo"

export function Header() {
  return (
    <header className="bg-primary-dark text-white p-4 flex items-center justify-between">
      <HacktalesLogo />
      <div className="flex items-center gap-4 flex-1 max-w-3xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="search for users, topics and assessments"
            className="w-full bg-black/20 text-white pl-10 pr-4 py-2 rounded-md border border-transparent focus:outline-none focus:border-white/30"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="h-6 w-6 cursor-pointer" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-orange-500"></span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="font-medium">Hacktales Gbenga</div>
            <div className="text-xs text-gray-300">placeholder@hacktales.us</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src="/placeholder.svg?height=40&width=40" alt="User avatar" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}
