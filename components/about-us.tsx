"use client"

import { motion } from "framer-motion"
import { FadeInStagger, FadeInStaggerItem } from "./fade-in-stagger"
import { AnimatedSection } from "./animated-section"
import Image from "next/image"

export function AboutUs() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#4CBB17] to-[#F8F8F8]">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8"> {/* Changed mb-12 to mb-8 */}
            <h1 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">About DR Volleyball Club</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Empowering athletes through passion, commitment, and excellence
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4"> {/* Changed mb-6 to mb-4 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luis%20torres.jpg-nEVEkQ8arlkviZAgXiRWzvcwhjcgCx.jpeg"
                  alt="Club Director"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-[#4CBB17] mb-1">Luis Torres</h2>
                <h3 className="text-lg text-[#4CBB17] mb-3">Club Director</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Starting at the age of three, I have lived a sports-focused lifestyle and played in multiple competitive settings where I established a foundation of discipline and grit. As I consider that my journey in sports has been built around hardships, obstacles, skill and personal development instead of a talent that was naturally born inside me. In this process, I learned how sports can play a foundational role in one's life, and this has driven me to make a positive impact on future generations through sports.
                </p>
                <p className="text-sm text-gray-700">
                  Leading our club with passion and dedication, our Club Director brings extensive experience in volleyball coaching and youth development. Their vision and leadership help shape the future of DR Volleyball Club and its athletes.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4"> {/* Changed mb-6 to mb-4 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-hzuGoYj2Y5GrcZCqhVIlb35bxmTZw3.jpeg"
                  alt="Head Coach"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-[#4CBB17] mb-1">Jenise Smalls</h2>
                <h3 className="text-lg text-[#4CBB17] mb-3">Head Coach</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Volleyball has been a passion of mine since my school years. As a player, I was dedicated to perfecting my skills and technique, but it was the bonds and relationships I formed with my teammates that kept me coming back. Now, as a coach, I strive to inspire and motivate my players to become not only better athletes, but also better people.
                </p>
                <p className="text-sm text-gray-700">
                  Seeing my players grow and develop on and off the court is what inspires me to continue coaching. With a strong background in player development and competitive coaching, I work tirelessly to ensure each athlete reaches their full potential while fostering a positive and encouraging training environment.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <FadeInStagger className="grid md:grid-cols-2 gap-4" delay={0.2}> {/* Changed gap-8 to gap-4 */}


          <FadeInStaggerItem>
            <div className="bg-white p-6 rounded-lg shadow-lg"> {/* Changed p-8 to p-6 */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#4CBB17] mb-3">Our Mission</h2>
                <p className="text-sm text-gray-700 mb-3">
                  At DR Volleyball Club, our mission is to empower young athletes through the sport of volleyball. We strive to create a high-performance environment where passion, commitment, and drive are fostered through the development of triple-impact competitors.
                </p>
                <p className="text-sm text-gray-700">
                  We believe in not just creating great volleyball players, but also developing well-rounded individuals who excel in all aspects of life.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#4CBB17] mb-3">Our Values</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Passion: We encourage a deep love for the game of volleyball.</li>
                  <li>Commitment: We foster dedication to personal and team growth.</li>
                  <li>Excellence: We strive for the highest standards in all we do.</li>
                  <li>Integrity: We promote honesty and ethical behavior on and off the court.</li>
                  <li>Teamwork: We believe in the power of collaboration and mutual support.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#4CBB17] mb-3">Our Approach</h2>
                <p className="text-sm text-gray-700 mb-3">
                  We take a holistic approach to athlete development, focusing on:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Technical skill development</li>
                  <li>Physical conditioning and injury prevention</li>
                  <li>Mental toughness and game strategy</li>
                  <li>Leadership and communication skills</li>
                  <li>Character development and sportsmanship</li>
                </ul>
              </div>
            </div>
          </FadeInStaggerItem>

        </FadeInStagger>

        <AnimatedSection delay={0.6}>
          <div className="mt-8 text-center"> {/* Changed mt-12 to mt-8 */}
            <h2 className="text-3xl font-bold text-[#4CBB17] mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Whether you're a beginner looking to learn the basics or an experienced player aiming to compete at the highest level, DR Volleyball Club has a place for you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/programs"
                className="inline-block bg-[#4CBB17] text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-[#3DA614] transition duration-300"
              >
                Explore Our Teams
              </a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

