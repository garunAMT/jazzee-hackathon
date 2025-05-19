import { JudgeDetails } from "@/lib/staticData";
import JudgeCard from "./JudgeCard";

const Judges = () => {
  return (
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

          <div className="space-y-12">
            {Object.entries(JudgeDetails).map(([category, judges]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold mb-6 capitalize text-center">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {judges.map((judge: any) => (
                    <JudgeCard key={judge.id} judge={judge} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Judges;
