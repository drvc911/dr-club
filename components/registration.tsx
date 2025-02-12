"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { AnimatedSection } from "./animated-section"
import { AnimatedButton } from "./animated-button"
import Link from "next/link"

export function Registration() {
  return (
    <section className="py-12 px-4 bg-[#F8F8F8]">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#4CBB17] uppercase tracking-wider">Join Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-medium">
              Choose the program that best fits your skill level and goals
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollAnimationWrapper delay={0.15 * 0}>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#4CBB17] font-bold">Girls Club</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 list-disc pl-5 font-medium">
                  <li>Advanced skill training</li>
                  <li>2 Sessions per week</li>
                  <li>Competition team</li>
                </ul>
                <Link href="/programs#girls-club" passHref>
                  <AnimatedButton className="w-full bg-[#4CBB17] hover:bg-[#4CBB17] font-bold">
                    Join Girls Club
                  </AnimatedButton>
                </Link>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.15 * 1}>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#4CBB17] font-bold">Girls Mini Club</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 list-disc pl-5 font-medium">
                  <li>Fundamental skills training</li>
                  <li>Tournament preparation</li>
                  <li>Mini club tournaments</li>
                </ul>
                <Link href="/programs#mini-club" passHref>
                  <AnimatedButton className="w-full bg-[#4CBB17] hover:bg-[#4CBB17] font-bold">
                    Join Girls Mini Club
                  </AnimatedButton>
                </Link>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}

