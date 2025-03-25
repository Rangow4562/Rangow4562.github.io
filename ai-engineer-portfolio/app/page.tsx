import Hero from "@/components/hero"
import About from "@/components/about"
import WorkExperience from "@/components/work-experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  )
}

