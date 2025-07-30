import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Wrench, Sparkles } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Web Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "React.js", "Django", "JSP"],
      gradient: "from-purple-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Spring Boot", "JDBC", "IntelliJ", "Eclipse", "VS Code", "LangChain", "StreamLit", "Git"],
      gradient: "from-blue-400 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      gradient: "from-green-400 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
    },
    {
      title: "Concepts",
      icon: <Server className="h-6 w-6" />,
      skills: ["OOP", "SDLC", "MVC", "Multithreading", "DSA"],
      gradient: "from-orange-400 to-red-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      iconBg: "bg-gradient-to-br from-orange-100 to-red-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Additional",
      icon: <Sparkles className="h-6 w-6" />,
      skills: ["Agile Methodology", "Version Control (GitHub)", "CI/CD"],
      gradient: "from-indigo-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      iconBg: "bg-gradient-to-br from-indigo-100 to-purple-100",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`${category.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`${category.iconBg} p-4 rounded-full ${category.iconColor} shadow-md`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.bgColor} border border-white/50 text-gray-700 hover:scale-105 transition-transform duration-200 shadow-sm font-medium px-3 py-1`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
