import { JudgeDetails } from "@/lib/staticData";
import Image from "next/image";

const Judges = () => {
  return (
    <>
            {/* Judges Section */}
            <section id="judges" className="py-16 md:py-24 bg-white px-10">
              <div className="container">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Meet Our Judges
                  </h2>
                  <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                  <p className="max-w-3xl mx-auto text-gray-500">
                    Our panel of distinguished judges brings expertise from academia,
                    industry, and the AI research community.
                  </p>
                </div>
      
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {JudgeDetails.map((judge, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-square bg-orange-100 relative">
                        <Image
                          src={judge.image}
                          alt={`Judge ${judge.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{judge.name}</h3>
                        <p className="text-sm text-gray-500">{judge.title}</p>
                        <p className="text-sm text-gray-500">{judge.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </>
  )
}

export default Judges
