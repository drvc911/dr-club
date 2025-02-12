"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from 'lucide-react'

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-[#4CBB17] mb-4">Contact Us</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>713 W Yale St</p>
                <p>Orlando, FL, 32804</p>
                <p>Phone: (407) 614-7454</p>
                <p>Email: drvc@disciplinerift.com</p>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-gray-700">Mondays: 5pm-7pm</p>
                <p className="text-sm text-gray-700">Thursdays: 5pm-7pm</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

