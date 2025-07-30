"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("https://formspree.io/f/xanbbwrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message. I'll get back to you soon!",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly via email.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:anushavp08@gmail.com"
                        className="text-blue-600 hover:underline text-sm sm:text-base break-all"
                      >
                        anushavp08@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 flex-shrink-0">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/anusha-v-916bb1264"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm sm:text-base break-all"
                      >
                        anusha-v-916bb1264
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 flex-shrink-0">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">GitHub</p>
                      <a
                        href="https://github.com/Anuvv34"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm sm:text-base break-all"
                      >
                        Anuvv34
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Resume</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Download my resume to learn more about my skills and experience.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="/resume.pdf"
                    download="Anusha_V_Resume.pdf"
                    className="flex items-center justify-center gap-2"
                  >
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-6">Send Me a Message</h3>

                {submitStatus.type && (
                  <div
                    className={`mb-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="text-base resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
