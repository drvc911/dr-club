import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}

