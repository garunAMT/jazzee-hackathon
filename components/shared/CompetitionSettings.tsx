import { Users, Calendar, Award, BookOpen, Presentation, CheckCircle } from "lucide-react"

export function CompetitionSettings() {
  return (
    <section id="competition-settings" className="py-16 md:py-24 bg-white px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition Settings</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-500">
            Everything you need to know about the hackathon format, judging criteria, and expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Team Size & Fee</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Teams of 2-4 members</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Registration fee: ₹1,000 per team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Students, professionals, and AI enthusiasts welcome</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Format</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>48-hour continuous hackathon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Kick-off ceremony with theme announcement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Mentorship sessions throughout the event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Final presentations and judging</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Judging Criteria</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Innovation & Creativity (25%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Technical Implementation (25%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Impact & Practicality (20%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Presentation & Demo (15%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Business Potential (15%)</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Resources</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Free cloud credits for all participants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Access to premium AI APIs and tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Technical workshops and documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Mentorship from industry experts</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Presentation className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Final Presentation</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>5-minute pitch presentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>3-minute live demo of your solution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>2-minute Q&A with judges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Presentation slides due 1 hour before finals</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Expected Outcome</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Working prototype of your solution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Source code repository with documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Presentation slides explaining your approach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Brief project report with future roadmap</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
// This component is a section of a webpage that outlines the competition settings for a hackathon.