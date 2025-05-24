"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, Trophy, Lightbulb } from "lucide-react"

const categories = [
  "All Categories",
  "Healthcare & Medical AI",
  "Sustainable AI",
  "Cybersecurity",
  "Financial Crime",
  "Software Development",
  "Internet of Things",
]

const problemStatements = [
  {
    id: 1,
    title: "AI-Powered Medical Diagnosis Assistant",
    category: "Healthcare & Medical AI",
    author: "Dr. Sarah Chen, Medical AI Research Lead",
    difficulty: "Advanced",
    timeEstimate: "36-48 hours",
    teamSize: "3-4 members",
    description:
      "Develop an AI system that can assist healthcare professionals in diagnosing diseases from medical images such as X-rays, CT scans, or MRIs. The system should be able to identify potential abnormalities and provide confidence scores for its predictions.",
    detailedDescription:
      "Medical diagnosis is one of the most critical applications of AI in healthcare. Your challenge is to create a robust system that can analyze medical imaging data and provide accurate diagnostic suggestions. The system should handle multiple types of medical images and provide explanations for its decisions to help doctors understand the AI's reasoning.",
    requirements: [
      "Support for at least 2 types of medical images (X-ray, CT, MRI)",
      "Confidence scoring for predictions",
      "Explainable AI features to show reasoning",
      "User-friendly interface for medical professionals",
      "Data privacy and security considerations",
    ],
    resources: [
      "Access to anonymized medical imaging datasets",
      "Pre-trained medical AI models",
      "Cloud computing credits for model training",
      "Consultation with medical professionals",
    ],
    impact: "High - Direct impact on patient care and diagnostic accuracy",
  },
  {
    id: 2,
    title: "Smart Grid Energy Optimization System",
    category: "Sustainable AI",
    author: "Prof. Michael Rodriguez, Renewable Energy Institute",
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    description:
      "Create an AI system that optimizes energy distribution in smart grids by predicting energy demand, managing renewable energy sources, and minimizing waste while ensuring grid stability.",
    detailedDescription:
      "As renewable energy sources become more prevalent, managing energy distribution becomes increasingly complex. Your task is to develop an intelligent system that can predict energy demand patterns, optimize the use of renewable sources like solar and wind, and ensure grid stability while minimizing energy waste.",
    requirements: [
      "Energy demand prediction algorithms",
      "Renewable energy source integration",
      "Real-time grid balancing capabilities",
      "Cost optimization features",
      "Scalable architecture for different grid sizes",
    ],
    resources: [
      "Historical energy consumption data",
      "Weather data APIs for renewable predictions",
      "Smart grid simulation environments",
      "Energy industry expert mentorship",
    ],
    impact: "Very High - Contributes to sustainable energy future and carbon reduction",
  },
  {
    id: 3,
    title: "Advanced Phishing Detection and Prevention",
    category: "Cybersecurity",
    author: "Alex Thompson, Cybersecurity Specialist",
    difficulty: "Intermediate",
    timeEstimate: "20-30 hours",
    teamSize: "2-3 members",
    description:
      "Build an AI-powered system that can detect sophisticated phishing attempts across multiple channels (email, SMS, social media) and provide real-time protection for users.",
    detailedDescription:
      "Phishing attacks are becoming increasingly sophisticated, using AI to create convincing fake communications. Your challenge is to develop an equally sophisticated defense system that can identify phishing attempts across various communication channels and protect users in real-time.",
    requirements: [
      "Multi-channel phishing detection (email, SMS, web)",
      "Real-time analysis and blocking capabilities",
      "Machine learning models for pattern recognition",
      "User education and awareness features",
      "Integration with existing security systems",
    ],
    resources: [
      "Phishing email datasets",
      "URL analysis tools and APIs",
      "Cybersecurity frameworks and libraries",
      "Security expert mentorship",
    ],
    impact: "High - Protects individuals and organizations from cyber threats",
  },
  {
    id: 4,
    title: "Intelligent Financial Fraud Detection",
    category: "Financial Crime",
    author: "Jennifer Liu, FinTech Security Director",
    difficulty: "Advanced",
    timeEstimate: "30-40 hours",
    teamSize: "3-4 members",
    description:
      "Develop a real-time fraud detection system that can identify suspicious financial transactions and patterns while minimizing false positives that disrupt legitimate customer activities.",
    detailedDescription:
      "Financial fraud costs billions annually and affects millions of people. Your mission is to create an intelligent system that can detect fraudulent activities in real-time while ensuring legitimate transactions are not unnecessarily blocked. The system should learn from new fraud patterns and adapt quickly.",
    requirements: [
      "Real-time transaction monitoring",
      "Pattern recognition for fraud detection",
      "Low false positive rate optimization",
      "Adaptive learning capabilities",
      "Compliance with financial regulations",
    ],
    resources: [
      "Anonymized transaction datasets",
      "Fraud pattern libraries",
      "Financial regulation guidelines",
      "FinTech industry expert guidance",
    ],
    impact: "Very High - Protects financial institutions and consumers from fraud",
  },
  {
    id: 5,
    title: "AI Code Review and Bug Detection Assistant",
    category: "Software Development",
    author: "David Park, Senior Software Architect",
    difficulty: "Intermediate",
    timeEstimate: "25-35 hours",
    teamSize: "2-4 members",
    description:
      "Create an AI assistant that can automatically review code, detect potential bugs, suggest improvements, and ensure code quality standards across different programming languages.",
    detailedDescription:
      "Code review is a critical part of software development, but it's time-consuming and can miss subtle bugs. Your challenge is to build an AI system that can understand code context, identify potential issues, and suggest improvements while learning from developer feedback.",
    requirements: [
      "Multi-language code analysis support",
      "Bug detection and classification",
      "Code quality scoring and suggestions",
      "Integration with popular development tools",
      "Learning from developer feedback",
    ],
    resources: [
      "Open source code repositories",
      "Bug tracking databases",
      "Code analysis tools and APIs",
      "Software development expert mentorship",
    ],
    impact: "High - Improves software quality and developer productivity",
  },
  {
    id: 6,
    title: "Smart IoT Device Security Monitor",
    category: "Internet of Things",
    author: "Dr. Emily Watson, IoT Security Researcher",
    difficulty: "Advanced",
    timeEstimate: "35-45 hours",
    teamSize: "3-4 members",
    description:
      "Build an AI system that monitors IoT device networks for security vulnerabilities, unusual behavior patterns, and potential cyber attacks while maintaining device functionality.",
    detailedDescription:
      "IoT devices are often vulnerable to cyber attacks due to weak security implementations. Your task is to create an intelligent monitoring system that can oversee IoT networks, detect anomalies, and respond to security threats without disrupting normal device operations.",
    requirements: [
      "IoT device behavior analysis",
      "Anomaly detection algorithms",
      "Network traffic monitoring",
      "Automated threat response",
      "Device compatibility across different IoT protocols",
    ],
    resources: [
      "IoT device simulation environments",
      "Network traffic datasets",
      "IoT security frameworks",
      "IoT security expert consultation",
    ],
    impact: "High - Secures critical IoT infrastructure and smart city systems",
  },
]

export default function ProblemsPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories")

  const filteredProblems =
    activeCategory === "All Categories"
      ? problemStatements
      : problemStatements.filter((problem) => problem.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Problem Statements for Innovators</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              These are real-world challenges we'd like to see teams tackle during the hackathon. Each represents an
              opportunity to create meaningful impact with AI. Choose one that excites you, or use it as inspiration for
              your own innovative solution.
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Category Description */}
        <section className="py-12 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              {activeCategory === "All Categories" ? "All Problem Statements" : activeCategory}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {activeCategory === "All Categories"
                ? "Explore all available problem statements across different categories. Each problem is designed to challenge your team and create real-world impact through innovative AI solutions."
                : `Focused challenges in ${activeCategory.toLowerCase()} that leverage AI to solve critical problems in this domain. These problems require deep understanding of both AI technologies and domain-specific challenges.`}
            </p>
          </div>
        </section>

        {/* Problem Statements */}
        <section className="py-8 bg-gray-50">
          <div className="container max-w-4xl mx-auto space-y-12">
            {filteredProblems.map((problem) => (
              <div key={problem.id} className="bg-white rounded-lg shadow-sm border p-8">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                      {problem.category}
                    </span>
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        problem.difficulty === "Advanced"
                          ? "bg-red-100 text-red-800"
                          : problem.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-orange-600 font-medium">By {problem.author}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{problem.timeEstimate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{problem.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{problem.impact}</span>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">{problem.description}</p>
                  <p className="text-gray-600 mb-6">{problem.detailedDescription}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Requirements</h4>
                      <ul className="space-y-2">
                        {problem.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Provided Resources</h4>
                      <ul className="space-y-2">
                        {problem.resources.map((resource, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span className="text-gray-600">{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Choose This Problem
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                      Get More Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


      </main>
    </div>
  )
}
