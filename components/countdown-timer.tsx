"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 10)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-center space-x-8 md:space-x-12">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-serif text-neutral-800">{timeLeft.days}</div>
        <span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Días</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-serif text-neutral-800">{timeLeft.hours}</div>
        <span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-serif text-neutral-800">{timeLeft.minutes}</div>
        <span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Minutos</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-serif text-neutral-800">{timeLeft.seconds}</div>
        <span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Segundos</span>
      </div>
    </div>
  )
}

