"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"
import { forwardRef } from "react"

export const AnimatedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button ref={ref} {...props} className={props.className}>
          {children}
        </Button>
      </motion.div>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"

