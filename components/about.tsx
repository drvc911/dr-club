"use client"

import { Users, Calendar, Trophy } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

export function About() {
  return (
    <section className="pt-3 pb-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider">About Our Club</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto font-medium uppercase tracking-wide">
              At Discipline Rift Volleyball Club, we develop skills, values, and character of players into high performance athletes in the sport and foster continuous passion, commitment and drive.
            </p>
          </div>
        </ScrollAnimationWrapper>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScrollAnimationWrapper delay={0.15 * 0}>
            <Card>
              <CardContent className="pt-4 px-2">
                <div className="text-center">
                  <Trophy className="h-8 w-8 text-[#4CBB17] mx-auto mb-2" />
                  <h3 className="text-lg font-bold mb-1">15+</h3>
                  <p className="text-xs text-muted-foreground font-medium">Years Experience</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.15 * 1}>
            <Card>
              <CardContent className="pt-4 px-2">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-[#4CBB17] mx-auto mb-2" />
                  <h3 className="text-lg font-bold mb-1">2+</h3>
                  <p className="text-xs text-muted-foreground font-medium">Weekly Sessions</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.15 * 2}>
            <Card>
              <CardContent className="pt-4 px-2">
                <div className="text-center">
                  <Users className="h-8 w-8 text-[#4CBB17] mx-auto mb-2" />
                  <h3 className="text-lg font-bold mb-1">10U</h3>
                  <p className="text-xs text-muted-foreground font-medium">Active Team</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.15 * 3}>
            <Card>
              <CardContent className="pt-4 px-2">
                <div className="text-center">
                  <Users className="h-8 w-8 text-[#4CBB17] mx-auto mb-2" />
                  <h3 className="text-lg font-bold mb-1">11U</h3>
                  <p className="text-xs text-muted-foreground font-medium">Active Team</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
          
        </div>
      </div>
    </section>
  )
}

