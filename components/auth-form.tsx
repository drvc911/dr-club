"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AuthForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("signin")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const isSignIn = formData.get("authType") === "signin"
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("fullName") as string

    try {
      if (isSignIn) {
        // Simulate API call for sign in
        await new Promise(resolve => setTimeout(resolve, 1000))
        // If successful, store user info in localStorage and redirect
        localStorage.setItem('user', JSON.stringify({ email }))
        router.push("/")
      } else {
        // Simulate API call for account creation
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log("Creating account with:", fullName, email, password)
        setShowSuccess(true)
        setActiveTab("success")
      }
    } catch (err) {
      console.error(err)
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordReset = () => {
    // Implement password reset logic here
    console.log("Password reset requested")
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#4CBB17]">Welcome to DR Volleyball Club</CardTitle>
        <CardDescription className="text-center">Sign in or create an account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="authType" value="signin" />
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input id="signin-email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input id="signin-password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-[#4CBB17] text-white" disabled={isLoading}>
                {isLoading ? "SIGNING IN..." : "SIGN IN"}
              </Button>
              <Button type="button" variant="link" className="w-full text-[#4CBB17]" onClick={handlePasswordReset}>
                Forgot Password?
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="authType" value="signup" />
              <div className="space-y-2">
                <Label htmlFor="signup-fullname">Full Name</Label>
                <Input id="signup-fullname" name="fullName" type="text" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-[#4CBB17] text-white" disabled={isLoading}>
                {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="success">
            <div className="text-center space-y-4">
              <p className="text-green-600 font-semibold">Account created successfully!</p>
              <p>You can now sign in with your new account.</p>
              <Button onClick={() => setActiveTab("signin")} className="bg-[#4CBB17] text-white">
                GO TO SIGN IN
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </CardContent>
    </Card>
  )
}

