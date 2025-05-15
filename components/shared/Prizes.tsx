import { Trophy, Award, Medal, Gift } from "lucide-react"

export function Prizes() {
  return (
    <section id="prizes" className="py-16 md:py-12 bg-white px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prizes & Rewards</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-500">
            Compete for a total prize pool of ₹5,00,000 along with internship opportunities, cloud credits, and more!
          </p>
        </div>

        {/* Top 3 Prizes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Overall Winners</h3>
          <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-12">
            {/* 2nd Place */}
            <div className="order-2 md:order-1 w-full md:w-80 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-md pt-6 pb-8 px-6 text-center transform md:translate-y-8">
              <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-gray-300 flex items-center justify-center mx-auto mb-6">
                <Medal className="h-10 w-10 text-gray-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">2nd Place</h4>
              <div className="text-3xl font-bold text-gray-700 mb-4">₹30,000</div>
              {/* <ul className="text-gray-600 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Cloud Credits Worth ₹50,000</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Mentorship Sessions</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Certificate of Excellence</span>
                </li>
              </ul> */}
            </div>

            {/* 1st Place */}
            <div className="order-1 md:order-2 w-full md:w-80 bg-gradient-to-b from-orange-50 to-orange-100 rounded-xl shadow-md pt-8 pb-10 px-6 text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white py-1 px-4 rounded-full text-sm font-bold">
                Grand Prize
              </div>
              <div className="w-24 h-24 rounded-full bg-orange-200 border-4 border-orange-400 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-12 w-12 text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold mb-2">1st Place</h4>
              <div className="text-4xl font-bold text-orange-600 mb-4">₹50,000</div>
              {/* <ul className="text-gray-600 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Internship Opportunities</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Cloud Credits Worth ₹1,00,000</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Mentorship Program</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Trophy & Certificate</span>
                </li>
              </ul> */}
            </div>

            {/* 3rd Place */}
            <div className="order-3 md:order-3 w-full md:w-80 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl shadow-md pt-6 pb-8 px-6 text-center transform md:translate-y-12">
              <div className="w-20 h-20 rounded-full bg-amber-200 border-4 border-amber-300 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-amber-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">3rd Place</h4>
              <div className="text-3xl font-bold text-amber-600 mb-4">₹20,000</div>
              {/* <ul className="text-gray-600 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Cloud Credits Worth ₹25,000</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Certificate of Excellence</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* Category Prizes */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Category Prizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Software Development",
                icon: "💻",
                description: "Best AI solution in software development",
              },
              {
                category: "Cybersecurity",
                icon: "🔒",
                description: "Best AI solution in cybersecurity",
              },
              {
                category: "Internet of Things (IoT)",
                icon: "🌐",
                description: "Best AI solution in IoT",
              },
              {
                category: "Healthcare & Medical AI",
                icon: "🏥",
                description: "Best AI solution in healthcare",
              },
              {
                category: "Sustainable AI",
                icon: "🌱",
                description: "Best AI solution for sustainability",
              },
              {
                category: "Financial Crime",
                icon: "💰",
                description: "Best AI solution for financial crime prevention",
              },
            ].map((category, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-bold mb-2">{category.category}</h4>
                <div className="text-2xl font-bold text-orange-600 mb-3">₹2,000</div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gift className="h-4 w-4" />
                  <span>+ Certificate & Recognition</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Mentions */}
        {/* <div className="mt-16 bg-orange-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Special Mentions & Honorable Awards</h3>
          <p className="text-gray-600 mb-6">
            Top 10 teams will receive certificates and recognition. Additional special awards include:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-1">Most Innovative Solution</h4>
              <p className="text-sm text-gray-500">₹10,000 + Certificate</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-1">Best Technical Implementation</h4>
              <p className="text-sm text-gray-500">₹10,000 + Certificate</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-1">Best UI/UX Design</h4>
              <p className="text-sm text-gray-500">₹10,000 + Certificate</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-1">People's Choice Award</h4>
              <p className="text-sm text-gray-500">₹10,000 + Certificate</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
