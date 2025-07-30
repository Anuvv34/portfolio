import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "AI for Beginners",
      issuer: "HP LIFE",
      date: "Jul 2025",
    },
    {
      title: "Crash Course on Python",
      issuer: "Coursera",
      date: "Apr 2025",
    },
    {
      title: "Java Development",
      issuer: "Udemy",
      date: "Jan 2025",
    },
    {
      title: "SQL Basics",
      issuer: "HackerRank",
      date: "Nov 2024",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Professional certifications and courses that enhance my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-full shadow-md">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{cert.title}</CardTitle>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>
                </div>
                <p className="text-purple-600 font-semibold text-lg mt-2">{cert.issuer}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
