import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamPage } from "@/components/team-page"

const teamInfo = {
  title: "10U Team",
  description: "Competitive Volleyball for Girls 10 and under",
  tournaments: "The team participates in 10-12 tournaments throughout the season.",
  skillsFocus: [
    "Proper serving technique",
    "Passing and setting",
    "Hitting and blocking",
    "Court awareness and positioning",
    "Teamwork and communication"
  ],
  coachingApproach: "Our experienced coaches utilize dynamic drills and engaging games to make learning both fun and challenging. We foster an elite and supportive environment by balancing intensity with positive reinforcement, demanding commitment while encouraging growth. This approach aims to develop not just skilled players, but resilient, passionate athletes.",
  expectations: "Players are expected to attend all practices and tournaments, maintain a positive attitude, and show respect for teammates, coaches, and opponents.",
  progression: "As players develop their skills, they'll have opportunities to take on more advanced roles and potentially move up to the next team in future seasons."
}

export default function Team10UPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <TeamPage {...teamInfo} />
      </main>
      <Footer />
    </div>
  )
}

