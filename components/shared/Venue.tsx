import { MapPin, Calendar, Clock } from "lucide-react"

export function Venue() {
  return (
    <section id="venue" className="py-16 md:py-24 bg-white p-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venue Information</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-500">
            Join us at these state-of-the-art facilities for an unforgettable hackathon experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hackathon Venue Card */}
          <div className="bg-orange-50 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Hackathon Venue</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tech Innovation Center</p>
                    <p className="text-gray-600">123 Innovation Street, Koramangala</p>
                    <p className="text-gray-600">Bangalore, Karnataka 560034</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-600">March 15-17, 2025</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Ratnagiri+Hall+of+Learning+IIT+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-orange-500 hover:text-orange-600 font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="h-[200px] w-full">
                
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Ratnagiri%20Hall%20of%20Learning%2C%20IIT%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Award Ceremony Venue Card */}
          <div className="bg-orange-50 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Award Ceremony Venue</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Grand Convention Center</p>
                    <p className="text-gray-600">456 Conference Avenue, Whitefield</p>
                    <p className="text-gray-600">Bangalore, Karnataka 560066</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-600">March 17, 2025</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Odisha+University+of+Technology+and+Research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-orange-500 hover:text-orange-600 font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="h-[200px] w-full">
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Odisha%20University%20of%20Technology%20and%20Research&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
