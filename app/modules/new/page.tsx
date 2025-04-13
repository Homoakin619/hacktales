import { NewModuleForm } from "@/components/new-module-form"

export default function NewModule() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Add New Module</h1>
          <p className="text-gray-600">Create a new learning module.</p>
        </div>
      </div>
      <NewModuleForm />
    </div>
  )
}
