import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Star } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                I'm a Computer Science student at Rajiv Gandhi Institute of Technology with a passion for full-stack
                development and data science. With a strong academic background (CGPA: 9.48), I combine theoretical
                knowledge with practical experience through internships and projects.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                My experience spans across various technologies including Python, Java, JavaScript, and
                Django. I've worked on projects ranging from RAG-powered PDF assistants to intelligent content
                moderation systems and student management platforms.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm constantly learning and exploring new technologies to enhance my skills and create innovative
                solutions to real-world problems.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education Journey
            </h3>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800">Bachelor of Engineering – Computer Science</h4>
                      <p className="text-gray-600 font-medium">Rajiv Gandhi Institute of Technology</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <p className="text-blue-600 font-bold">CGPA: 9.48</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2021 – 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800">XII (PUC)</h4>
                      <p className="text-gray-600 font-medium">Narayana PU College</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <p className="text-purple-600 font-bold">Percentage: 92%</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2019 – 2021</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800">X (SSLC)</h4>
                      <p className="text-gray-600 font-medium">Bishop Sergeant Central School</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <p className="text-green-600 font-bold">Percentage: 91%</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2018 – 2019</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
