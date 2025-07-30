import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-16 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full text-center max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-lg animate-pulse">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Anusha V
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 font-semibold">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Aspiring Software Engineer
              </span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              I'm passionate about building innovative solutions using modern technologies. As a recent Computer Science
              graduate with hands-on experience in web development and data science, I'm eager to contribute to
              impactful projects and grow as a skilled software engineer in a dynamic tech environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-purple-300 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                asChild
              >
                <a href="/resume.pdf" download="Anusha_V_Resume.pdf" className="flex items-center justify-center gap-2">
                  Download CV <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background elements - hidden on small screens for performance */}
      <div className="hidden sm:block absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="hidden sm:block absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="hidden sm:block absolute top-40 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  )
}
