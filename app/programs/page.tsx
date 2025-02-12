import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Teams } from "@/components/teams"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Teams />
      </main>
      <Footer />
    </div>
  )
}

