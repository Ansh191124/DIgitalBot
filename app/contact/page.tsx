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
    contact: "+91-78925-18414",
    action: "tel:+91-78925-18414",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    // The description field now correctly uses a string, with newlines and extra spaces removed or consolidated.
    description: "Our headquarters: Behind Manyata Tech Park, Hebbal, Bengaluru – 560077, Karnataka, India",
    action: "#",
  },
];

export default function Contact() {
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
  const [error, setError] = useState("")

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("") // Clear previous error
    try {
      // *** MODIFIED: Target a local API route for serverless/backend mail handling ***
      const res = await fetch("/api/contact", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      
      const data = await res.json()

      if (res.ok) {
        setSuccess(data.message || "Message sent successfully! We'll contact you ASAP.")
        // Clear the form
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          inquiry: "",
          message: ""
        })
      } else {
        setError(data.error || "Failed to submit form.")
      }
    } catch (err) {
      console.error(err)
      setError("Network error: Could not connect to the server.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-foreground relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up">
            <span className="text-sky-600">Let’s Connect</span>{" "}
            <span className="text-black">& Collaborate</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Ready to elevate your customer experience with AI? Our experts are just a message away.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <Card className="bg-white border border-sky-100 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-sky-800">Send us a message</CardTitle>
              <CardDescription className="text-sky-700/80">
                Fill out the form below and we’ll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {success && <div className="bg-green-100 text-green-800 p-3 rounded-md">{success}</div>}
              {error && <div className="bg-red-100 text-red-800 p-3 rounded-md">{error}</div>}
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
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 text-white font-semibold shadow-md rounded-full transition-all duration-300"
                  disabled={loading}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div>
              <h2 className="text-3xl font-bold text-sky-800 mb-4">Let’s start a conversation</h2>
              <p className="text-gray-700 mb-8">
                Whether you’re scaling your AI or just beginning your automation journey, our team is ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border border-sky-100 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sky-800 mb-1">{info.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{info.description}</p>
                        <a href={info.action} className="text-sm text-blue-700 hover:text-indigo-700 transition-colors">
                          {info.contact}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-sky-100 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sky-800 mb-4">Prefer to chat?</h3>
                <p className="text-gray-700 mb-4">
                  Try our AI chatbot for instant answers to common questions about our platform and services.
                </p>
                <Button
                  variant="outline"
                  className="border-sky-500 text-sky-700 hover:bg-sky-100 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </main>
  )
}