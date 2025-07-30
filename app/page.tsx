import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Footer from "@/components/footer"

// Dynamically import Contact component to avoid SSR issues
const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">Loading contact form...</div>
    </div>
  ),
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
