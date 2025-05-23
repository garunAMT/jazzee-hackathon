import { MapPin, Calendar } from "lucide-react"
// Clock

// export function Venue() {
//   return (
//     <section id="venue" className="py-16 md:py-24 bg-white p-10">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Venue Information</h2>
//           <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
//           <p className="max-w-3xl mx-auto text-gray-500">
//             Join us at these state-of-the-art facilities for an unforgettable hackathon experience.
//           </p>
//         </div>
// {/* grid md:grid-cols-2 gap-8 */}
//         <div className="flex">
//           {/* Hackathon Venue Card */}
//           <div className="bg-orange-50 rounded-xl overflow-hidden shadow-sm">
//             <div className="p-6">
//               <h3 className="text-2xl font-bold mb-4">Hackathon Venue</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-medium">Ratnagiri Hall of Learning</p>
//                     <p className="text-gray-600">IIT Bhubaneswar</p>
//                     <p className="text-gray-600">Khurda, Odisha 752050</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Calendar className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-medium">Date</p>
//                     <p className="text-gray-600">July 3-5, 2025</p>
//                   </div>
//                 </div>
//                 <a
//                   href="https://maps.google.com/?q=Ratnagiri+Hall+of+Learning+IIT+Bhubaneswar"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 text-orange-500 hover:text-orange-600 font-medium"
//                 >
//                   Get Directions →
//                 </a>
//               </div>
//             </div>
//             <div className="h-[200px] w-full">
                
//               <iframe
//                 src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Ratnagiri%20Hall%20of%20Learning%2C%20IIT%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>

//           {/* Award Ceremony Venue Card */}
//           {/* <div className="bg-orange-50 rounded-xl overflow-hidden shadow-sm">
//             <div className="p-6">
//               <h3 className="text-2xl font-bold mb-4">Award Ceremony Venue</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-medium">Odisha University of Technology & Research</p>
//                     <p className="text-gray-600">Kalinga Nagar, Ghatikia</p>
//                     <p className="text-gray-600">Bhubaneswar, Odisha 751003</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Calendar className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-medium">Date</p>
//                     <p className="text-gray-600">July 5, 2025</p>
//                   </div>
//                 </div>
//                 <a
//                   href="https://maps.google.com/?q=Odisha+University+of+Technology+and+Research"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 text-orange-500 hover:text-orange-600 font-medium"
//                 >
//                   Get Directions →
//                 </a>
//               </div>
//             </div>
//             <div className="h-[200px] w-full">
//               <iframe
//                 src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Odisha%20University%20of%20Technology%20and%20Research&t=&z=14&ie=UTF8&iwloc=B&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   )
// }



export function Venue() {

  return (
    <section id="venue" className="py-16 md:py-24 bg-white px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venue Information</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-500">
            Join us at these state-of-the-art facilities for an unforgettable hackathon experience.
          </p>
        </div>

            <div className="bg-orange-50 rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">IIT Bhubaeswar</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-gray-600">Ratnagiri Hall of Learning</p>
                        <p className="text-gray-600">IIT Bhubaneswar, Odisha, India 752050</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium">Date & Time:</p>
                        <p className="text-gray-600">July 3-5, 2025</p>
                        <p className="text-gray-600">Starts: 9:00 AM on July 3, 2025</p>
                        <p className="text-gray-600">Ends: 9:00 AM on July 5, 2025</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Facilities:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>High-speed WiFi</li>
                        <li>24/7 access</li>
                        {/* <li>Sleeping areas</li> */}
                        <li>Refreshments</li>
                      </ul>
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
                <div className="h-[300px] md:h-full min-h-[300px] rounded-lg overflow-hidden">
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
            </div>
      </div>
    </section>
  )
}

