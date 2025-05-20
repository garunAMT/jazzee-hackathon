import Hero from "@/components/shared/Hero"
import CTA from "@/components/shared/CTA"
import { CompetitionSettings } from "@/components/shared/CompetitionSettings"
import { UseCases } from "@/components/shared/UseCases"
import { Venue } from "@/components/shared/Venue"
import Judges from "@/components/shared/Judges"
import { Prizes } from "@/components/shared/Prizes"


export default function HackathonLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
      </main>
      <CompetitionSettings />
      <Prizes />
      <Judges />
      {/* <UseCases /> */}
      <Venue />
      <CTA />
    </div>
  )
}
