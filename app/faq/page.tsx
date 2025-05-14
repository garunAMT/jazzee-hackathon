"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-orange-50 py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h1>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about the GENAI HACKATHON T$O - 2025.
            </p>
          </div>
        </section>

        {/* FAQs Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">Who can participate in the hackathon?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      The hackathon is open to students, professionals, and AI enthusiasts of all skill levels.
                      Participants must be at least 18 years old. Teams can consist of 2-4 members, and
                      cross-disciplinary teams are encouraged.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">What is the registration fee?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      The registration fee is ₹1,000 per team, regardless of team size. This fee covers participation,
                      meals during the event, access to workshops, mentorship, and a welcome kit for each team member.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">Do I need to have a team before registering?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      No, you can register as an individual and form a team during the team formation session on the
                      first day of the hackathon. However, we recommend finding teammates beforehand if possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">What should I bring to the hackathon?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      Participants should bring their laptops, chargers, any specific hardware needed for their project,
                      and personal items for the 48-hour event. We'll provide power strips, internet connectivity,
                      meals, and basic stationery.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">Are there sleeping arrangements at the venue?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      Yes, we have designated quiet areas with sleeping mats for participants who wish to rest during
                      the event. However, these are basic accommodations. If you prefer more comfortable sleeping
                      arrangements, we recommend booking a nearby hotel.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">What resources will be provided during the hackathon?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      All participants will receive cloud credits, access to premium AI APIs and tools, technical
                      documentation, and mentorship from industry experts. We'll also provide workshops on relevant
                      technologies and techniques.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">
                      Can I start working on my project before the hackathon?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      No, all coding and development must start after the official kickoff. You can brainstorm ideas and
                      plan your approach beforehand, but no pre-written code is allowed except for open-source libraries
                      and frameworks.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">How will the projects be judged?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>Projects will be judged based on the following criteria:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Innovation & Creativity (25%)</li>
                      <li>Technical Implementation (25%)</li>
                      <li>Impact & Practicality (20%)</li>
                      <li>Presentation & Demo (15%)</li>
                      <li>Business Potential (15%)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">What are the prizes for the winners?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>The total prize pool is ₹5,00,000, distributed as follows:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>1st Place: ₹2,00,000 + Internship opportunities</li>
                      <li>2nd Place: ₹1,00,000 + Cloud credits</li>
                      <li>3rd Place: ₹50,000 + Cloud credits</li>
                      <li>Category Winners: ₹25,000 each for best projects in each category</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 hover:no-underline">
                    <span className="text-left font-medium">Who owns the intellectual property of the projects?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <p>
                      Teams retain full ownership of their intellectual property. However, by participating, you grant
                      the organizers permission to showcase your project for promotional purposes. If you're working on
                      something confidential, please inform the organizers in advance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
