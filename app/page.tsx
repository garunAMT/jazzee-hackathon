import Link from "next/link"
import { Button } from "@/components/ui/button"

import Footer from "@/components/shared/Footer"
import Hero from "@/components/shared/Hero"
import CTA from "@/components/shared/CTA"
import { WhyJoinCards } from "@/components/shared/WhyJoinCards"
import { NavigationBar } from "@/components/shared/Navbar"

export default function HackathonLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <header className="px-10 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">GENAI HACKATHON T$O</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-orange-500">
              About
            </Link>
            <Link href="#why" className="text-sm font-medium hover:text-orange-500">
              Why Participate
            </Link>
            <Link href="#judges" className="text-sm font-medium hover:text-orange-500">
              Judges
            </Link>
            <Link href="#sponsors" className="text-sm font-medium hover:text-orange-500">
              Sponsors
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">Register Now</Button>
        </div>
      </header> */}
      <NavigationBar />

      <main className="flex-1">
        <Hero />
        <CTA />
      </main>
      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
    </div>
  )
}
