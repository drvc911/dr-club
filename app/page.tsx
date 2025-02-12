import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Registration } from "@/components/registration"
import { Articles } from "@/components/articles"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <About />
        <Registration />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}

