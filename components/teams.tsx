"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedButton } from "./animated-button"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { AnimatedSection } from "./animated-section"
import { useContactPopup } from "./contact-popup-provider"
import Link from "next/link"

const girlsClubPrograms = [
  {
    title: "10U Team",
    description: "Competitive Volleyball for Girls 10 and under",
    details: [
      "Building strong fundamental skills",
      "Introduction to basic game strategies",
      "Participation in local tournaments",
      "Focus on fun and skill development in a team environment"
    ],
    link: "/programs/10u-team"
  },
  {
    title: "11U Team",
    description: "Competitive volleyball for girls 11 and under",
    details: [
      "Focus on advanced skill development",
      "Introduction to specialized positions",
      "Participation in local and regional tournaments",
      "Emphasis on teamwork and competitive strategies"
    ],
    link: "/programs/11u-team"
  }
]

const miniClubPrograms = [
  {
    title: "Mini Club - Coming Soon!",
    description: "Our Mini Club program is currently in development. Please get in touch if you're interested!",
    details: [
      "Designed for younger players",
      "Focus on fundamental skills and fun",
      "Stay tuned for more information"
    ]
  }
];

export function Teams() {
  const { setIsContactPopupOpen } = useContactPopup()

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">Our Teams</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Discover the perfect volleyball team to elevate your game and passion for the sport
            </p>
          </div>
        </AnimatedSection>
        
        <Tabs defaultValue="girls-club" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex mb-8 bg-white rounded-lg p-1">
              <TabsTrigger value="girls-club" className="text-lg font-bold px-6 py-2 rounded-md">GIRLS CLUB</TabsTrigger>
              <TabsTrigger value="mini-club" className="text-lg font-bold px-6 py-2 rounded-md">MINI CLUB</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="girls-club">
            <div className="grid md:grid-cols-1 gap-6">
              {girlsClubPrograms.map((program, index) => (
                <ScrollAnimationWrapper delay={0.15 * index} key={program.title}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-[#4CBB17]">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 mb-6 space-y-2">
                        {program.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm">{detail}</li>
                        ))}
                      </ul>
                      <Link href={program.link} passHref>
                        <AnimatedButton className="w-full bg-[#4CBB17] hover:bg-[#3DA614] text-white">
                          Learn More
                        </AnimatedButton>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mini-club">
            <div className="grid md:grid-cols-1 gap-6">
              <ScrollAnimationWrapper delay={0}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#4CBB17]">{miniClubPrograms[0].title}</CardTitle>
                    <CardDescription className="text-base">{miniClubPrograms[0].description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {miniClubPrograms[0].details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                    <AnimatedButton 
                      className="w-full bg-[#4CBB17] hover:bg-[#3DA614] text-white"
                      onClick={() => setIsContactPopupOpen(true)}
                    >
                      Contact Us
                    </AnimatedButton>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

