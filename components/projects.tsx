import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Zap } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "RAG Powered-PDF Query-Assistant",
      description:
        "A local RAG-based system using Python, LangChain, and ChromaDB for semantic PDF querying with 90%+ accuracy and 60% faster document processing.",
      githubLink: "https://github.com/Anuvv34/RAG-Powered-PDF-Query-Assistant",
      date: "Jun 2025",
      technologies: ["Python", "LangChain", "ChromaDB", "PyMuPDF", "HuggingFace", "Ollama"],
      gradient: "from-blue-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Intelligent Violence Detection & Content Moderation",
      description:
        "Hybrid moderation system using MobileNetV2 and NLP techniques, achieving 90% accuracy on 15,000 samples with 60% reduction in manual review time.",
      githubLink: "https://github.com/Anuvv34/Intelligence-Violent-detection-and-Content-Moderation",
      date: "Jan 2025",
      technologies: ["MobileNetV2", "NLP", "Python", "Machine Learning", "Computer Vision"],
      gradient: "from-purple-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Student Management System",
      description:
        "Role-based Java web application using Spring Boot, MySQL, and Hibernate with CRUD operations for 3 user roles, reducing admin workload by 40%.",
      githubLink: "https://github.com/Anuvv34/Student-Management-System",
      date: "Nov 2024",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Web Development"],
      gradient: "from-green-400 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Showcasing my technical skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${project.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative group flex flex-col h-full`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div className={`${project.iconBg} p-2 rounded-lg ${project.iconColor} shadow-md`}>
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow relative z-10 pt-0">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/70 text-xs font-medium text-gray-600 rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t border-white/50 pt-4 relative z-10">
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-white border-0`}
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" /> View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
