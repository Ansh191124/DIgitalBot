"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@digitalbot.ai",
    action: "mailto:hello@digitalbot.ai",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "123 AI Street, Tech City, TC 12345",
    action: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're here to help",
    contact: "Mon-Fri: 9AM-6PM PST",
    action: "#",
  },
]

export default function Contact() {
  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    inquiry: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")

    try {
      const res = await fetch("https://digital-api-tef8.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      const data = await res.json()

      if (res.ok) {
        setSuccess(data.message || "We'll Contact You Asap!")
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          inquiry: "",
          message: ""
        })
      } else {
        alert(data.error || "Failed to submit form")
      }
    } catch (err) {
      console.error(err)
      alert("Failed to submit form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-black text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Get in <span className="text-gray-900">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto text-pretty">
            Ready to transform your customer service with AI? Let's discuss how DigitalBot.ai can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border border-gray-300 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Send us a message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Success message */}
                {success && (
                  <div className="bg-green-100 text-green-800 p-3 rounded-md">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" value={form.company} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select value={form.inquiry} onValueChange={(value) => setForm({ ...form, inquiry: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and how we can help..."
                      className="min-h-[120px]"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={loading}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Let's start a conversation</h2>
                <p className="text-gray-700 mb-8">
                  Whether you're looking to implement your first chatbot or scale your existing AI operations, our team is here to help you succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border border-gray-300 bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-black mb-1">{info.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{info.description}</p>
                          <a href={info.action} className="text-sm text-black hover:text-gray-700 transition-colors">
                            {info.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border border-gray-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-4">Prefer to chat?</h3>
                  <p className="text-gray-600 mb-4">
                    Try our AI chatbot for instant answers to common questions about our platform and services.
                  </p>
                  <Button variant="outline" className="border-black text-black hover:bg-gray-100 bg-transparent">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
