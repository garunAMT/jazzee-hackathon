import { JudgeDetails } from "@/lib/staticData";
import Image from "next/image";
import JudgeCard from "./JudgeCard";

const Judges = () => {
  return (
    // <>
    //         {/* Judges Section */}
    //         <section id="judges" className="py-16 md:py-24 bg-white px-10">
    //           <div className="container">
    //             <div className="text-center mb-12">
    //               <h2 className="text-3xl md:text-4xl font-bold mb-4">
    //                 Meet Our Judges
    //               </h2>
    //               <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
    //               <p className="max-w-3xl mx-auto text-gray-500">
    //                 Our panel of distinguished judges brings expertise from academia,
    //                 industry, and the AI research community.
    //               </p>
    //             </div>

    //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    //               {JudgeDetails.map((judge, index) => (
    //                 <div
    //                   key={index}
    //                   className="bg-orange-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    //                 >
    //                   <div className="aspect-square bg-orange-100 relative">
    //                     <Image
    //                       src={judge.image}
    //                       alt={`Judge ${judge.name}`}
    //                       fill
    //                       className="object-cover"
    //                     />
    //                   </div>
    //                   <div className="p-4">
    //                     <h3 className="font-bold text-lg">{judge.name}</h3>
    //                     <p className="text-sm text-gray-500">
    //                       {judge.post}
    //                       {judge.company ? `, ${judge.company}` : ""}
    //                     </p>
    //                     {/* <p className="text-sm text-gray-500">{judge.company}</p> */}
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </section>
    // </>

    <>
      <section className="py-12 px-4 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Judges
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our panel of industry experts will evaluate your innovations and
              provide valuable feedback
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {JudgeDetails.map((judge) => (
              <JudgeCard key={judge.id} judge={judge} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Judges;
