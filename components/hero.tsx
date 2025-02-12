"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { AnimatedButton } from "./animated-button"
import Link from "next/link";

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-UyleYyoJfaApx7BcRgAEel2pLjmzDo.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6967-tPcsOOPyRKxNGCf1hOrhZqQfxVr4Er.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6966-0eHCPDfNkhre6SLmyM9FqU5cTPVWJv.jpeg"
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pt-16 pb-3 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto">
        <div className="text-center mb-6">          
          <div className="relative w-full max-w-3xl mx-auto mb-12 overflow-hidden rounded-lg shadow-lg" style={{ aspectRatio: '16 / 9' }}>
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Team photo ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {[
              { title: "TRYOUTS", description: "Join our competitive teams", link: "/tryouts" },
              { title: "TEAMS", description: "High performance Volleyball", link: "/programs" },
              { title: "CAMPS & CLINICS", description: "Intensive training programs", disabled: true },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-white p-4 md:p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#4CBB17] mb-2 md:mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{item.description}</p>
                {item.disabled ? (
                  <AnimatedButton className="w-full bg-[#4CBB17] hover:bg-[#4CBB17]" disabled>
                    Coming Soon!
                  </AnimatedButton>
                ) : (
                  <Link href={item.link} passHref>
                    <AnimatedButton className="w-full bg-[#4CBB17] hover:bg-[#4CBB17]">
                      Learn More
                    </AnimatedButton>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

