"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { AnimatedButton } from "./animated-button"
import Link from "next/link"

interface TeamPageProps {
  title: string
  description: string
  tournaments: string
  skillsFocus: string[]
  coachingApproach: string
  expectations: string
  progression: string
}

export function TeamPage({
  title,
  description,
  tournaments,
  skillsFocus,
  coachingApproach,
  expectations,
  progression
}: TeamPageProps) {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">{title}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium mb-6">
              {description}
            </p>
            <Link href="/register" passHref>
              <AnimatedButton className="bg-white text-[#4CBB17] hover:bg-[#F8F8F8] hover:text-[#3DA614] font-bold text-lg px-8 py-3">
                Register Now
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-[#4CBB17]">Program Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div>
                <h2 className="text-xl font-semibold text-[#4CBB17] mb-1">Tournaments</h2>
                <p className="text-gray-700 mb-3">{tournaments}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4CBB17] mb-1">Skills Focus</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-3">
                  {skillsFocus.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4CBB17] mb-1">Coaching Approach</h2>
                <p className="text-gray-700 mb-3">{coachingApproach}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4CBB17] mb-1">Expectations</h2>
                <p className="text-gray-700 mb-3">{expectations}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4CBB17] mb-1">Progression</h2>
                <p className="text-gray-700">{progression}</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-8">
            <Link href="/register" passHref>
              <AnimatedButton className="bg-[#4CBB17] text-white hover:bg-[#3DA614] font-bold text-lg px-8 py-3">
                Register Now
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

