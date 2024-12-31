'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SponsorCarouselProps {
  sponsors: { name: string; logo: string }[]
}

export default function SponsorCarousel({ sponsors }: SponsorCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sponsorsPerSlide = 4

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + sponsorsPerSlide) % sponsors.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - sponsorsPerSlide + sponsors.length) % sponsors.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-32">
      <div className="flex justify-center items-center h-full">
        {[...Array(sponsorsPerSlide)].map((_, i) => {
          const sponsorIndex = (currentIndex + i) % sponsors.length
          const sponsor = sponsors[sponsorIndex]
          return (
            <div key={i} className="mx-4 transition-opacity duration-500">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={100}
                height={50}
                objectFit="contain"
              />
            </div>
          )
        })}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

