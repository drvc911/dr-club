"use client";

import { Instagram } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useContactPopup } from "./contact-popup-provider"

export function Footer() {
  const { setIsContactPopupOpen } = useContactPopup()

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      window.history.pushState({}, '', href)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-[#4CBB17] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A%20(1)-BJAJjk94ICMysQQte3RkfYzqFX8d2U.png"
                alt="DR Volleyball Club Logo"
                width={100}
                height={100}
                className="h-24 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm uppercase">
              Helping players develop their discipline and passion
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm hover:text-[#F8F8F8]" onClick={scrollToTop}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-sm hover:text-[#F8F8F8]" onClick={scrollToTop}>
                    PROGRAMS
                  </Link>
                </li>
                <li>
                  <Link href="/tryouts" className="text-sm hover:text-[#F8F8F8]" onClick={scrollToTop}>
                    TRYOUTS
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#F8F8F8]" onClick={(e) => {
                    e.preventDefault()
                    setIsContactPopupOpen(true)
                  }}>
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li>Phone: (407) 614-7454</li>
                <li>Email: drvc@disciplinerift.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-sm">
                <li>Mondays: 5pm-7pm</li>
                <li>Thursdays: 5pm-7pm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Address</h3>
              <ul className="space-y-2 text-sm">
                <li>713 W Yale St</li>
                <li>Orlando, FL, 32804</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.instagram.com/drvolleyballclub/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm hover:text-[#F8F8F8] flex items-center gap-2"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F8F8F8]/20 mt-4 pt-2 text-center text-[8px] md:text-[10px]">
          <p>&copy; {new Date().getFullYear()} DRV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

