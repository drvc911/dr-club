import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

