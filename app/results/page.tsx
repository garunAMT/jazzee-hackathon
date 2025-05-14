"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Set this to true to show results, false to show "coming soon"
const RESULTS_ANNOUNCED = true

export default function ResultsPage() {
  // Clock animation state
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!RESULTS_ANNOUNCED) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 6) % 360) // 6 degrees per second = full rotation in 60s
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-orange-50 py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Hackathon Results</h1>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
              {RESULTS_ANNOUNCED
                ? "Congratulations to all the winners and participants of GENAI HACKATHON T$O - 2025!"
                : "The results will be announced after the judging process is complete."}
            </p>
          </div>
        </section>

        {/* Results Content */}
        <section className="py-12 md:py-16 px-2 md:px-10">
          <div className="container">
            {RESULTS_ANNOUNCED ? (
              <div className="max-w-5xl mx-auto">
                {/* Top 3 Winners */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-center mb-12">Top Winners</h2>
                  <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8">
                    {/* 2nd Place */}
                    <div className="order-1 md:order-1 w-full md:w-1/3 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-lg pt-6 pb-8 px-4 text-center transform md:translate-y-4">
                      <div className="w-20 h-20 rounded-full bg-gray-300 border-4 border-gray-400 flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold">2</span>
                      </div>
                      <h3 className="font-bold text-xl mb-1">Team Innovators</h3>
                      <p className="text-gray-600 mb-2">AI-Powered Health Assistant</p>
                      <p className="font-bold text-lg">₹1,00,000</p>
                    </div>

                    {/* 1st Place */}
                    <div className="order-0 md:order-2 w-full md:w-1/3 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-lg pt-8 pb-10 px-4 text-center">
                      <div className="w-24 h-24 rounded-full bg-amber-300 border-4 border-amber-400 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold">1</span>
                      </div>
                      <h3 className="font-bold text-2xl mb-1">Team Quantum</h3>
                      <p className="text-gray-600 mb-2">Smart Grid Optimization System</p>
                      <p className="font-bold text-xl">₹2,00,000</p>
                    </div>

                    {/* 3rd Place */}
                    <div className="order-2 md:order-3 w-full md:w-1/3 bg-gradient-to-b from-orange-100 to-orange-200 rounded-t-lg pt-4 pb-6 px-4 text-center transform md:translate-y-8">
                      <div className="w-16 h-16 rounded-full bg-orange-300 border-4 border-orange-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">Team CodeCrafters</h3>
                      <p className="text-gray-600 mb-2">Fraud Detection System</p>
                      <p className="font-bold text-lg">₹50,000</p>
                    </div>
                  </div>
                </div>

                {/* Ranks 4-20 Table */}
                <div>
                  <h2 className="text-2xl font-bold text-center mb-8">Finalists</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-orange-100">
                          <th className="border border-orange-200 px-4 py-3 text-left">Rank</th>
                          <th className="border border-orange-200 px-4 py-3 text-left">Team Name</th>
                          <th className="border border-orange-200 px-4 py-3 text-left">Project</th>
                          <th className="border border-orange-200 px-4 py-3 text-left">Category</th>
                          <th className="border border-orange-200 px-4 py-3 text-left">Prize</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 17 }).map((_, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-200 px-4 py-3 font-medium">{index + 4}</td>
                            <td className="border border-gray-200 px-4 py-3">
                              Team{" "}
                              {
                                [
                                  "Alpha",
                                  "Beta",
                                  "Gamma",
                                  "Delta",
                                  "Epsilon",
                                  "Zeta",
                                  "Eta",
                                  "Theta",
                                  "Iota",
                                  "Kappa",
                                  "Lambda",
                                  "Mu",
                                  "Nu",
                                  "Xi",
                                  "Omicron",
                                  "Pi",
                                  "Rho",
                                ][index]
                              }
                            </td>
                            <td className="border border-gray-200 px-4 py-3">
                              {
                                [
                                  "AI Document Analyzer",
                                  "Smart Traffic System",
                                  "Medical Diagnosis Assistant",
                                  "Phishing Detection Tool",
                                  "Energy Optimization Platform",
                                  "Customer Support Bot",
                                  "Climate Change Predictor",
                                  "Transaction Monitoring System",
                                  "IoT Home Security",
                                  "Patient Data Analyzer",
                                  "Resource Allocation System",
                                  "Network Anomaly Detector",
                                  "Drug Discovery Platform",
                                  "Anti-Money Laundering Tool",
                                  "Environmental Monitoring System",
                                  "Vulnerability Scanner",
                                  "Predictive Maintenance Tool",
                                ][index]
                              }
                            </td>
                            <td className="border border-gray-200 px-4 py-3">
                              {
                                [
                                  "Software Development",
                                  "IoT",
                                  "Healthcare",
                                  "Cybersecurity",
                                  "Sustainable AI",
                                  "Software Development",
                                  "Sustainable AI",
                                  "Financial Crime",
                                  "IoT",
                                  "Healthcare",
                                  "Sustainable AI",
                                  "Cybersecurity",
                                  "Healthcare",
                                  "Financial Crime",
                                  "IoT",
                                  "Cybersecurity",
                                  "IoT",
                                ][index]
                              }
                            </td>
                            <td className="border border-gray-200 px-4 py-3">
                              {index < 7 ? "₹10,000" : "Certificate of Excellence"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Category Winners */}
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-center mb-8">Category Winners</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { category: "Software Development", team: "Team DevGenius", project: "AI Code Assistant Pro" },
                      { category: "Cybersecurity", team: "Team SecureNet", project: "Threat Intelligence Platform" },
                      {
                        category: "Internet of Things",
                        team: "Team ConnectX",
                        project: "Smart City Monitoring System",
                      },
                      {
                        category: "Healthcare & Medical AI",
                        team: "Team MediTech",
                        project: "Diagnostic Imaging Assistant",
                      },
                      { category: "Sustainable AI", team: "Team GreenAI", project: "Renewable Energy Optimizer" },
                      { category: "Financial Crime", team: "Team FinGuard", project: "Fraud Prevention System" },
                    ].map((winner, index) => (
                      <div key={index} className="bg-orange-50 rounded-lg p-6 text-center">
                        <h3 className="font-bold text-lg mb-3">Best in {winner.category}</h3>
                        <p className="font-medium text-orange-600 mb-1">{winner.team}</p>
                        <p className="text-gray-600 mb-2">{winner.project}</p>
                        <p className="font-bold">₹25,000</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto text-center">
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <Clock className="w-32 h-32 text-orange-500" style={{ transform: `rotate(${rotation}deg)` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Results Coming Soon!</h2>
                <p className="text-gray-600 mb-8">
                  Our judges are currently evaluating all the amazing projects submitted during the hackathon. Results
                  will be announced on March 20, 2025.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600">Get Notified When Results Are Out</Button>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    View Project Submissions
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
