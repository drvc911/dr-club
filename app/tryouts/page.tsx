import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Tryouts } from "@/components/tryouts"

export default function TryoutsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Tryouts />
      </main>
      <Footer />
    </div>
  )
}

