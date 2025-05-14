import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";


const CTA = () => {
  return (
    <>
      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 md:py-24 bg-orange-50 px-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-500">
              We're proud to partner with leading organizations that support
              innovation in AI.
            </p>
          </div>

          <div className="space-y-16">
            {/* Academic Partners */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                Academic Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl flex items-center justify-center h-32"
                  >
                    <Image
                      src={`/placeholder.svg?height=80&width=160&text=University ${
                        index + 1
                      }`}
                      alt={`Academic Partner ${index + 1}`}
                      width={160}
                      height={80}
                      className="max-h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Partners */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                Industry Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl flex items-center justify-center h-32"
                  >
                    <Image
                      src={`/placeholder.svg?height=80&width=160&text=Company ${
                        index + 1
                      }`}
                      alt={`Industry Partner ${index + 1}`}
                      width={160}
                      height={80}
                      className="max-h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Innovate?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-orange-50">
            Join us for an unforgettable weekend of innovation, learning, and
            collaboration. Registration closes on February 28, 2025.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50"
          >
            Register Your Team Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default CTA;
