"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function RegistrationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    team: "",
    position: "",
    experience: "",
    playerFirstName: "",
    playerLastName: "",
    paymentMethod: "",
    cardNumber: "",
    cardExpiration: "",
    cardCVC: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    // For now, we'll just redirect to a thank you page
    router.push("/thank-you")
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-white p-6 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#4CBB17] text-center">Register Now</CardTitle>
            <CardDescription className="text-center">Join the DR Volleyball Club and take your game to the next level!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="playerFirstName">Player First Name</Label>
                  <Input
                    id="playerFirstName"
                    name="playerFirstName"
                    value={formData.playerFirstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="playerLastName">Player Last Name</Label>
                  <Input
                    id="playerLastName"
                    name="playerLastName"
                    value={formData.playerLastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
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
                <Label>Team</Label>
                <RadioGroup onValueChange={(value) => handleSelectChange("team", value)} required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10U" id="10U" />
                    <Label htmlFor="10U">10U</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="12U" id="12U" />
                    <Label htmlFor="12U">12U</Label>
                  </div>
                </RadioGroup>
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
                    <SelectItem value="na">N/A</SelectItem>
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
                <Label>Payment Method</Label>
                <RadioGroup onValueChange={(value) => handleSelectChange("paymentMethod", value)} required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
              </div>
              {(formData.paymentMethod === "credit" || formData.paymentMethod === "debit") && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiration">Expiration Date</Label>
                      <Input
                        id="cardExpiration"
                        name="cardExpiration"
                        placeholder="MM/YY"
                        value={formData.cardExpiration}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCVC">CVC</Label>
                      <Input
                        id="cardCVC"
                        name="cardCVC"
                        value={formData.cardCVC}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input
                      id="billingAddress"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billingCity">City</Label>
                      <Input
                        id="billingCity"
                        name="billingCity"
                        value={formData.billingCity}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingState">State</Label>
                      <Input
                        id="billingState"
                        name="billingState"
                        value={formData.billingState}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billingZip">ZIP Code</Label>
                    <Input
                      id="billingZip"
                      name="billingZip"
                      value={formData.billingZip}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              <Button type="submit" className="w-full bg-[#4CBB17] text-white hover:bg-[#3DA614]">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

