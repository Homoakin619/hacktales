"use client"

import { useState } from "react"
import { BookOpen, FileText, Filter, Search, Video } from "lucide-react"

export function ResourcesList() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const resources = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      type: "video",
      source: "YouTube",
      duration: "15:24",
      description: "A beginner-friendly introduction to key cybersecurity concepts.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "OWASP Top 10 Web Vulnerabilities",
      type: "document",
      source: "OWASP Foundation",
      pages: 42,
      description: "Comprehensive guide to the most critical web application security risks.",
      url: "#",
    },
    {
      id: 3,
      title: "Network Security Best Practices",
      type: "video",
      source: "YouTube",
      duration: "28:15",
      description: "Learn how to secure your network infrastructure against common threats.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Ethical Hacking Methodology",
      type: "article",
      source: "Hacktales Blog",
      readTime: "8 min",
      description: "Step-by-step approach to ethical hacking and penetration testing.",
      url: "#",
    },
    {
      id: 5,
      title: "Cryptography Fundamentals",
      type: "video",
      source: "YouTube",
      duration: "22:10",
      description: "Understanding encryption, hashing, and secure communication protocols.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  const filteredResources = resources.filter((resource) => {
    if (filter !== "all" && resource.type !== filter) return false

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return resource.title.toLowerCase().includes(query) || resource.description.toLowerCase().includes(query)
    }

    return true
  })

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5 text-red-500" />
      case "document":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "article":
        return <BookOpen className="h-5 w-5 text-green-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">Filter:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Resources</option>
            <option value="video">Videos</option>
            <option value="document">Documents</option>
            <option value="article">Articles</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {resource.type === "video" && (
              <div className="aspect-video w-full">
                <iframe
                  src={resource.url}
                  title={resource.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {getResourceIcon(resource.type)}
                <span className="text-sm text-gray-500 capitalize">{resource.type}</span>
                {resource.type === "video" && (
                  <span className="text-sm text-gray-500 ml-auto">{resource.duration}</span>
                )}
                {resource.type === "document" && (
                  <span className="text-sm text-gray-500 ml-auto">{resource.pages} pages</span>
                )}
                {resource.type === "article" && (
                  <span className="text-sm text-gray-500 ml-auto">{resource.readTime} read</span>
                )}
              </div>

              <h3 className="font-medium mb-1">{resource.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{resource.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Source: {resource.source}</span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {resource.type === "video" ? "Watch" : "View"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No resources found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
