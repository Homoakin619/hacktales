"use client"

import type React from "react"

import { useState } from "react"

export function NewModuleForm() {
  const [activeTab, setActiveTab] = useState<"lesson" | "video" | "question">("lesson")

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-light-green p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-primary-dark">NEW MODULE</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <button className="bg-primary-dark text-white px-4 py-2 rounded-md">Publish</button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab("lesson")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "lesson"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Lesson
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "video"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Video
          </button>
          <button
            onClick={() => setActiveTab("question")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "question"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Question
          </button>
        </div>
      </div>

      <div className="p-6">
        {activeTab === "lesson" && <LessonForm />}
        {activeTab === "video" && <VideoForm />}
        {activeTab === "question" && <QuestionForm />}
      </div>
    </div>
  )
}

function LessonForm() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium">Lesson</h3>
      <p className="text-gray-500">Lorem ipsum dolor sit amet</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="lesson title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            placeholder="description of lesson"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

function VideoForm() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium">Add Video Resources</h3>

      <div className="flex items-start gap-4">
        <div className="h-24 w-24 bg-gray-100 rounded-md flex items-center justify-center">
          <img src="/placeholder.svg?height=96&width=96" alt="Video thumbnail" className="h-full w-full object-cover" />
        </div>

        <div className="flex-1">
          <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mb-2">
            <UploadIcon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="text-primary text-sm font-medium">
            Upload
            <br />
            video
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Video Description</h4>
        <div className="border border-gray-200 rounded-md p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Created By:</div>
            <div className="text-sm text-gray-400">placeholder@gmail.com</div>
            <button className="text-gray-400">
              <EditIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Date Created:</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Title:</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">References:</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuestionForm() {
  const [questionType, setQuestionType] = useState<"multiple" | "short" | "multipleResponse">("multiple")

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium">Add Question</h3>

      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="what is your question?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary pr-10"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
            <MoreHorizontalIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          {questionType === "multiple" && (
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <GridIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Possible Responses"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {i === 4 && (
                    <button className="text-gray-400">
                      <PlusIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {questionType === "short" && (
            <div className="border border-gray-300 rounded-md p-4">
              <textarea
                placeholder="write your answer here, take cognizance of some key words"
                rows={4}
                className="w-full focus:outline-none"
              ></textarea>
            </div>
          )}

          {questionType === "multipleResponse" && (
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <GridIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Possible Responses"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {i === 4 && (
                    <button className="text-gray-400">
                      <PlusIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <div className="bg-white border border-gray-200 rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm ${
                questionType === "multiple" ? "bg-gray-100 font-medium" : "text-gray-600"
              }`}
              onClick={() => setQuestionType("multiple")}
            >
              Multiple choice question
            </button>
            <button
              className={`px-4 py-2 text-sm ${questionType === "short" ? "bg-gray-100 font-medium" : "text-gray-600"}`}
              onClick={() => setQuestionType("short")}
            >
              Short answer question
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                questionType === "multipleResponse" ? "bg-gray-100 font-medium" : "text-gray-600"
              }`}
              onClick={() => setQuestionType("multipleResponse")}
            >
              Multiple response question
            </button>
          </div>
        </div>
      </div>

      <div>
        <button className="text-primary font-medium">Add New Question</button>
      </div>
    </div>
  )
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

function MoreHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}

function GridIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <line x1="9" x2="9" y1="3" y2="21" />
      <line x1="15" x2="15" y1="3" y2="21" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
