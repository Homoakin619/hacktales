"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight, Clock, HelpCircle } from "lucide-react"

export function AssessmentContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})

  const questions = [
    {
      id: 1,
      question: "Which of the following is NOT a common type of cyber attack?",
      options: ["Phishing", "SQL Injection", "Quantum Tunneling", "Cross-Site Scripting (XSS)"],
    },
    {
      id: 2,
      question: "What is the primary purpose of a firewall in network security?",
      options: [
        "To encrypt data",
        "To monitor network traffic and block unauthorized access",
        "To create secure backups",
        "To scan for viruses",
      ],
    },
    {
      id: 3,
      question: "Which encryption standard is considered most secure for modern applications?",
      options: [
        "DES (Data Encryption Standard)",
        "3DES (Triple DES)",
        "AES-256 (Advanced Encryption Standard)",
        "MD5 (Message Digest 5)",
      ],
    },
  ]

  const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Submitted answers:", selectedAnswers)
    // In a real app, you would send these to your backend
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Cybersecurity Fundamentals Assessment</h2>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <HelpCircle className="h-4 w-4" /> {questions.length} Questions
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> 30 Minutes
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="w-1/2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleSelectAnswer(currentQuestion, index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-5 w-5 rounded-full flex items-center justify-center border ${
                        selectedAnswers[currentQuestion] === index
                          ? "border-primary bg-primary text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === index && <CheckCircle className="h-4 w-4" />}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-4 py-2 border border-gray-200 rounded-md disabled:opacity-50"
            >
              Previous
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-1"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button onClick={handleSubmit} className="px-4 py-2 bg-primary text-white rounded-md">
                Submit Assessment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
