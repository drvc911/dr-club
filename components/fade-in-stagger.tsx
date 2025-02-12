"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInStaggerProps {
  children: ReactNode
  delay?: number
  childrenDelay?: number
}

export function FadeInStagger({ children, delay = 0, childrenDelay = 0.1 }: FadeInStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: childrenDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStaggerItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

