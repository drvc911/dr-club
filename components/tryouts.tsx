"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedButton } from "./animated-button"
import { FadeInStagger, FadeInStaggerItem } from "./fade-in-stagger"
import { AnimatedSection } from "./animated-section"

const tryoutDates = [
  { date: "Coming Soon", time: "TBA", ageGroup: "10U & 11U" },
  { date: "Coming Soon", time: "TBA", ageGroup: "14U & 16U" },
  { date: "Coming Soon", time: "TBA", ageGroup: "18U" },
]

export function Tryouts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    position: "",
    experience: "",
    tryoutDate: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your server
    alert("Registration submitted successfully!")
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">Tryouts</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Join the DR Volleyball Club and take your game to the next level
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#4CBB17]">Upcoming Tryout Dates</CardTitle>
                  <CardDescription>Select the date that works best for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <FadeInStagger>
                    {tryoutDates.map((tryout, index) => (
                      <FadeInStaggerItem key={`tryout-${index}`}>
                        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                          <h3 className="font-bold text-[#4CBB17]">{tryout.date}</h3>
                          <p className="text-sm text-gray-600">{tryout.time}</p>
                          <p className="text-sm text-gray-600">Age Group: {tryout.ageGroup}</p>
                        </div>
                      </FadeInStaggerItem>
                    ))}
                  </FadeInStagger>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#4CBB17]">Tryout Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Completed registration form</li>
                    <li>Signed waiver (provided at tryouts)</li>
                    <li>$20 tryout fee</li>
                    <li>Appropriate volleyball attire and shoes</li>
                    <li>Water bottle</li>
                    <li>Positive attitude and willingness to learn</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.6}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#4CBB17]">Tryout Registration</CardTitle>
                <CardDescription>Fill out the form below to register for tryouts</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Date of Birth</Label>
                    <Input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Preferred Position</Label>
                    <Select name="position" onValueChange={(value) => handleSelectChange("position", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="outside">Outside Hitter</SelectItem>
                        <SelectItem value="middle">Middle Blocker</SelectItem>
                        <SelectItem value="opposite">Opposite Hitter</SelectItem>
                        <SelectItem value="setter">Setter</SelectItem>
                        <SelectItem value="libero">Libero</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Volleyball Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about your volleyball experience..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tryoutDate">Preferred Tryout Date</Label>
                    <Select name="tryoutDate" onValueChange={(value) => handleSelectChange("tryoutDate", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a date" />
                      </SelectTrigger>
                      <SelectContent>
                        {tryoutDates.map((tryout, index) => (
                          <SelectItem key={`tryout-option-${index}`} value={`${tryout.ageGroup}`}>
                            {tryout.date} - {tryout.ageGroup}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <AnimatedButton type="submit" className="w-full bg-[#4CBB17] hover:bg-[#3DA614] text-white" disabled>
                    Coming Soon
                  </AnimatedButton>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

