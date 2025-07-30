import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "DATA SCIENCE INTERN",
      company: "Eduphoenix Solutions",
      period: "Sep 2024 - Dec 2024",
      responsibilities: [
        "Built a Flask-based forecasting tool using LSTM and ARIMA models, improving prediction accuracy by 18%.",
        "Automated the forecasting process, reducing manual effort by 50% through model integration and UI features.",
      ],
    },
    {
      title: "FULLSTACK DEVELOPMENT INTERN",
      company: "Airobosoft",
      period: "Oct 2023 - Nov 2023",
      responsibilities: [
        "Deployed a Django-based eCommerce platform with secure payment integration, user authentication, and role-based access.",
        "Boosted database performance by 40% through ORM query optimization and efficient indexing in MySQL.",
      ],
    },
    {
      title: "JAVA INTERN",
      company: "Technofist",
      period: "Apr 2023 - Jun 2023",
      responsibilities: [
        "Developed a modular inventory tracker in Java using JDBC and MySQL, reducing manual data entry by 70%.",
        "Enhanced runtime performance by 35% through multithreaded file handling and exception management.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">My professional journey and internship experiences</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
