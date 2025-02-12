"use client"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedButton } from "./animated-button"
import { ContactPopupContext } from "./contact-popup-provider"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { setIsContactPopupOpen } = useContext(ContactPopupContext)
  const [user, setUser] = useState<{ email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const checkUser = () => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }

    window.addEventListener("scroll", handleScroll)
    checkUser()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('user')
    setUser(null)
    router.push('/')
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-0">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A%20(1)-BJAJjk94ICMysQQte3RkfYzqFX8d2U.png" 
              alt="DR Volleyball Club Logo" 
              className="h-12 md:h-16" 
            />
          </Link>
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Teams", path: "/programs" },
              { name: "Tryouts", path: "/tryouts" }
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link 
                  href={item.path}
                  className="text-base font-bold text-[#4CBB17] hover:text-[#3DA614] uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0">
                  <Menu className="h-6 w-6 text-[#4CBB17]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About Us", path: "/about" },
                    { name: "Teams", path: "/programs" },
                    { name: "Tryouts", path: "/tryouts" }
                  ].map((item) => (
                    <Link 
                      key={item.name}
                      href={item.path}
                      className="text-base font-bold text-[#4CBB17] hover:text-[#3DA614] uppercase tracking-wider"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:block">
              <AnimatedButton
                className="text-sm md:text-base px-2 md:px-4 py-1 md:py-2 text-white bg-[#4CBB17] border-[#4CBB17] hover:bg-[#3DA614]"
                variant="outline"
                onClick={() => setIsContactPopupOpen(true)}
              >
                CONTACT US
              </AnimatedButton>
            </div>
            {user ? (
              <div className="flex items-center space-x-2">
                <AnimatedButton
                  className="text-sm md:text-base px-2 md:px-4 py-1 md:py-2 text-[#4CBB17] border-[#4CBB17] hover:bg-[#4CBB17] hover:text-white"
                  variant="outline"
                  onClick={handleSignOut}
                >
                  SIGN OUT
                </AnimatedButton>
                <Avatar className="h-8 w-8 md:h-10 md:w-10">
                  <AvatarFallback className="bg-[#4CBB17] text-white">
                    {user.email[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <Link href="/signin" passHref>
                <AnimatedButton 
                  className="text-sm md:text-base px-2 md:px-4 py-1 md:py-2 text-white bg-[#4CBB17] border-[#4CBB17] hover:bg-[#3DA614]"
                  variant="outline"
                >
                  SIGN IN
                </AnimatedButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

