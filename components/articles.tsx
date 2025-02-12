"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

export function Articles() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
              Stay updated with volleyball tips, news, and club announcements
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-1 gap-6">
          <ScrollAnimationWrapper>
            <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg font-bold">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    Stay tuned for exciting articles about volleyball tips, news, and club announcements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}

