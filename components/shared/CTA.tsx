import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AcademicPartners, IndustryPartners } from "@/lib/staticData";
import Link from "next/link";
import RegisterButton from "./RegisterButton";

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
                {AcademicPartners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className="bg-white p-2 rounded-xl flex items-center justify-center h-32"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      style={{ objectFit: "contain" }}
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
                {IndustryPartners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className="bg-white p-2 rounded-xl flex items-center justify-center h-32"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      style={{ objectFit: "contain" }}
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
            collaboration. Registration closes on June 8, 2025.
          </p>

          <RegisterButton
            text="Register Your Team Now"
            className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-md  transition duration-200 cursor-pointer"
          />
        </div>
      </section>
    </>
  );
};

export default CTA;
