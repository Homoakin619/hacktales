import { AssessmentTable } from "@/components/assessment-table"

export default function Assessment() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Assessment</h1>
            <p className="text-gray-600">Questions prepared for learners.</p>
          </div>
          <button className="bg-primary-dark text-white px-4 py-2 rounded-md">Add New Module</button>
        </div>
      </div>
      <div className="h-[650px] mt-6">
        <AssessmentTable />
      </div>
    </div>
  )
}
