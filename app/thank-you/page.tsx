import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
          <div className="container mx-auto max-w-2xl">
            <AnimatedSection>
              <Card className="bg-white p-6 rounded-lg shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-[#4CBB17] text-center">Thank You for Registering!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">We've received your registration and will be in touch soon with next steps.</p>
                  <Link href="/" passHref>
                    <AnimatedButton className="bg-[#4CBB17] text-white hover:bg-[#3DA614]">
                      Return to Home
                    </AnimatedButton>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

