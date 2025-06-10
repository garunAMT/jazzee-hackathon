"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Bell, ChevronRight, CalendarCheck } from "lucide-react"

// Sample announcements data
const announcements = [
  {
    id: 1,
    title: "Hackathon Orientation",
    date: "June 7, 2025",
    time: "11:00 AM - 12:00 PM",
    location: "Online",
    description:
      "All registered participants must attend this orientation session. We'll cover hackathon rules, explain judging criteria, and answer any questions. Team formation assistance will also be available for those who haven't formed teams yet.",
    isImportant: true,
    category: "Event",
  },
  {
    id: 2,
    title: "Intro to GenAI and Prompt Engineering Workshop",
    date: "June 8, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    description:
      "Learn the fundamentals of Generative AI and effective prompt engineering techniques in this hands-on workshop. This session is perfect for beginners and those looking to improve their AI skills. Get ready with your laptops to participate in the practical exercises.",
    isImportant: true,
    category: "Workshop",
  },
  {
    id: 3,
    title: "Integrating LLMs with Python: Build Real-World AI Apps (Gemini, OpenAI APIs)",
    date: "June 11, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    description:
      "Learn how to integrate large language models (LLMs) with Python to create practical AI applications. This session will explore APIs like OpenAI and Gemini for real-world use cases.",
    isImportant: true,
    category: "Workshop",
    instructor: "Varun Bhatt"
  },
  {
    id: 4,
    title: "No-Code + Low-Code AI App Building: Using Cursor & Lovable",
    date: "June 12, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    description:
      "Explore tools like Cursor and Lovable to build AI applications with minimal coding. Perfect for non-technical users and rapid prototyping.",
    isImportant: true,
    category: "Workshop",
    instructor: "Varun Bhatt"
  },
  {
    id: 5,
    title: "Capstone Project Day: Build & Showcase Your Own AI-Powered Application",
    date: "June 13, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    description:
      "A dedicated day to develop, finalize, and present your AI-powered projects. Collaborate with peers and get feedback from instructors.",
    isImportant: true,
    category: "Event",
    instructor: "Varun Bhatt"
  },
  {
    id: 6,
    title: "Project Presentation & Documentation",
    date: "June 14, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    description:
      "Wrap up your project with a final presentation and proper documentation. Guidance will be provided to ensure clarity and impact.",
    isImportant: true,
    category: "Event",
    instructor: "Pooja Yadav"
  }
];


export default function AnnouncementsPage() {
//   const [filter, setFilter] = useState("All")

//   const filteredAnnouncements =
//     filter === "All" ? announcements : announcements.filter((announcement) => announcement.category === filter)

  // Get today's date for highlighting
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col min-h-screen px-4">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-orange-50">
          <div className="container">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Bell className="h-6 w-6 text-orange-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-center">Announcements</h1>
            </div>
            <p className="text-center mt-2 text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest information, schedule changes, and important notices for the hackathon.
            </p>
          </div>
        </section>

        {/* Filters */}
        {/* <section className="py-6 bg-white border-b">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {["All", "Event", "Workshop", "Resource", "Important"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section> */}

        {/* Announcements List */}
        <section className="py-12 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-8">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`border rounded-lg overflow-hidden ${
                    announcement.isImportant ? "border-orange-300 bg-orange-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        {announcement.isImportant && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            Important
                          </span>
                        )}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {announcement.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarCheck className="h-4 w-4 text-orange-500" />
                        <span className={announcement.date === today ? "font-medium text-orange-600" : "text-gray-600"}>
                          {announcement.date}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{announcement.title}</h3>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{announcement.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{announcement.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{announcement.description}</p>

                    {/* <div className="flex justify-end">
                      <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0">
                        <span className="flex items-center">
                          Add to Calendar
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </span>
                      </Button>
                    </div> */}
                  </div>
                </div>
              ))}

              {announcements.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No announcements found for this category.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
