"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthForm } from "@/components/auth-form"

export default function SignInPage() {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      router.push('/')
    }
  }, [router])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
        <AuthForm />
      </main>
      <Footer />
    </div>
  )
}

