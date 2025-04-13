import type React from "react"
import { MoreHorizontal } from "lucide-react"

export function AssessmentTable() {
  const assessments = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      module: `LESSON-001`,
      resources: "Cybersecurity Fundamentals",
      topic: "Cybersecurity Fundamentals",
      dateUploaded: "02 Jan, 2025",
      questions: "10 QUESTIONS",
    }))

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col">
      <div className="overflow-auto flex-1">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="w-10 px-6 py-3">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resources
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Uploaded
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nos of Questions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {assessments.map((assessment) => (
              <tr key={assessment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.module}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gray-200 flex items-center justify-center">
                      <VideoIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="text-gray-600">{assessment.resources}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.topic}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.dateUploaded}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.questions}</td>
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
      <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500 flex items-center justify-between flex-shrink-0">
        <div>Showing...</div>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded-md hover:bg-gray-200">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <span>1-10 of 2 pages</span>
          <button className="p-1 rounded-md hover:bg-gray-200">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
