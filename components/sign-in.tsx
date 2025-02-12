"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AnimatedButton } from "./animated-button"
import { AnimatedSection } from "./animated-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign in attempted with:", { email, password })
  }

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Account creation attempted with:", { name, email, password })
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto max-w-md">
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#4CBB17] text-center">Welcome to DR Volleyball Club</CardTitle>
              <CardDescription className="text-center">Sign in or create an account to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="create">Create Account</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input
                        id="signin-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input
                        id="signin-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <AnimatedButton type="submit" className="w-full bg-[#4CBB17] hover:bg-[#3DA614] text-white">
                      Sign In
                    </AnimatedButton>
                  </form>
                </TabsContent>
                <TabsContent value="create">
                  <form onSubmit={handleCreateAccount} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="create-name">Full Name</Label>
                      <Input
                        id="create-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="create-email">Email</Label>
                      <Input
                        id="create-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="create-password">Password</Label>
                      <Input
                        id="create-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <AnimatedButton type="submit" className="w-full bg-[#4CBB17] hover:bg-[#3DA614] text-white">
                      Create Account
                    </AnimatedButton>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

