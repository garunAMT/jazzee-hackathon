import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  // GraduationCap,
  Lightbulb,
} from "lucide-react";
import { Button } from "../ui/button";
import { WhyJoinCards } from "./WhyJoinCards";
import Link from "next/link";
import RegisterButton from "./RegisterButton";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-orange-50 to-white px-10">
        <div className="absolute inset-0 grid grid-cols-3 -space-x-52 opacity-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-br from-orange-500 to-transparent blur-3xl transform -translate-y-1/2"></div>
          <div className="h-full w-full bg-gradient-to-r from-orange-400 to-yellow-500 blur-3xl"></div>
          <div className="h-full w-full bg-gradient-to-l from-orange-500 to-transparent blur-3xl transform translate-y-1/2"></div>
        </div>

        <div className="container relative flex flex-col items-center text-center space-y-8">
          {/* <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 mb-4">
            2025 Edition
          </div> */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            GenAI Hackathon <br /> Trillion Dollar Opportunity - 2025
          </h1>
          <p className="text-xl md:text-2xl font-medium text-orange-600">
            Break | Build | Transform
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Calendar className="h-5 w-5 text-orange-500" />
              <span>July 3-5, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span> IIT Bhubaneswar, Odisha, India</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="h-5 w-5 text-orange-500" />
              <span>48 Hours</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* <Link
              href={
                "https://play.google.com/store/apps/details?id=com.jazzeetechnologies.jazzee_edtech&pcampaignid=web_share"
              }
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 cursor-pointer">
                Register Now
              </Button>
            </Link> */}
            <RegisterButton text="Download App" className="bg-orange-500 hover:bg-orange-600 cursor-pointer" />
            <Link href={"#about"}>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
              >
                Learn More
              </Button>
            </Link>
            
          </div>
          <div className="text-xs -mt-4">
            <span>* Download the Jazzee EdTech app to proceed with registration.</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white px-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About the Hackathon
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-500">
              Welcome to Trillion Doller Opportunity (T$O)—a global jam session of ideas, hosted by Jazzee, the rule-breaking virtuoso of generative AI. Just like jazz, Jazzee doesn&apos;t follow the script—it riffs, experiments, and improvises its way into the future. 
            </p>
            <p className="max-w-3xl mx-auto text-gray-500">
              T$O invites students from every corner of the world to sync up and swing into action, tackling real-world challenges in engineering, cybersecurity, education, healthcare, life sciences, and IoT. It&apos;s not just a hackathon—it&apos;s a stage where bold minds collaborate, improvise, and compose solutions with trillion-dollar potential. At Jazzee, we don&apos;t just play the notes—we change the tune.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Who Can Participate</h3>
              <p className="text-gray-600">
                Open to students of all levels, professionals, and AI enthusiasts. Form teams of 2–4 and bring your innovative ideas to life!
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prizes</h3>
              <p className="text-gray-600">
                ₹1,12,000 prize pool, including <b>cash prizes</b> worth ₹1,00,000 for the winning teams,
                mentorship opportunities, and internship,
                placements.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Theme</h3>
              <p className="text-gray-600">
                Develop innovative solutions using generative AI in healthcare,
                education, sustainability, or financial inclusion to address
                real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section id="why" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
              Why to Participate?
            </h2>
          </div>

          <div className="py-8 bg-white mb-8 px-10">
            <WhyJoinCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
