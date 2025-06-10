"use client"

import { useState, useEffect } from "react"
import { X, Clock } from "lucide-react"
import Link from "next/link"

interface CountdownTimerProps {
  targetDate: Date
}

function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Cleanup on unmount
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
        <span className="font-mono font-bold">{timeLeft.days.toString().padStart(2, "0")}</span>
      </div>
      <span>:</span>
      <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
        <span className="font-mono font-bold">{timeLeft.hours.toString().padStart(2, "0")}</span>
      </div>
      <span>:</span>
      <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
        <span className="font-mono font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
      </div>
      <span>:</span>
      <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
        <span className="font-mono font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
      </div>
    </div>
  )
}

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Registration end date: February 28, 2025
  const registrationEndDate = new Date("2025-06-08T23:59:59")

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-1 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Registration Closed</span>
          </div>

          {/* <CountdownTimer targetDate={registrationEndDate} /> */}

          {/* <div className="hidden md:block">|</div>

          <div>
            <span>Download Jazzee EdTech app to register</span>
          </div> */}

          
          <div className="hidden md:block">|</div>
          <div>
            <span className="underline text-gray-100 font-bold"><Link href={"/announcements"}>See announcements</Link></span>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
          aria-label="Close announcement"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
