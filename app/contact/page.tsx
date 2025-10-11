"use client"

import React, { useState, ChangeEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react"

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string; 
  company: string;
  inquiry: string;
  message: string;
}

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
    description: "USA: 300 Quail Ridge Dr NE, ADA, MI 49301<br />India: Behind Manyata Tech Park, Hebbal, Bangalore 560077",
    action: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setForm({ ...form, [id as keyof ContactFormState]: value })
  }
  
  const handleSelectChange = (value: string) => {
    setForm({ ...form, inquiry: value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    if (!form.phone || !form.email || !form.inquiry) {
      setError("Please fill in all mandatory fields: Phone, Email, and Inquiry Type.")
      setLoading(false)
      return;
    }

    try {
      const res = await fetch("/api/contact", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      
      const data = await res.json()

      if (res.ok) {
        setSuccess(data.message || "Message sent successfully! We'll contact you ASAP.")
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
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

      {/* Hero Section - Mobile optimized */}
      <section className="pt-20 sm:pt-32 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            <span className="text-sky-600">Let's Connect</span>{" "}
            <span className="text-black">& Collaborate</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200 px-2">
            Ready to elevate your customer experience with AI? Our experts are just a message away.
          </p>
        </div>
      </section>

      {/* Contact Form & Info - Mobile optimized */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* Contact Form */}
          <Card className="bg-white border border-sky-100 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-sky-800">Send us a message</CardTitle>
              <CardDescription className="text-sm sm:text-base text-sky-700/80">
                Fill out the form below and we'll get back to you soon. (<span className="text-red-500">*</span> indicates required fields)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              {success && <div className="bg-green-100 text-green-800 p-3 rounded-md text-sm">{success}</div>}
              {error && <div className="bg-red-100 text-red-800 p-3 rounded-md text-sm">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm">First Name</Label>
                    <Input id="firstName" placeholder="" value={form.firstName} onChange={handleChange} className="h-10 sm:h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                    <Input id="lastName" placeholder="" value={form.lastName} onChange={handleChange} className="h-10 sm:h-11" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email <span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" placeholder="" value={form.email} onChange={handleChange} required className="h-10 sm:h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="" 
                      value={form.phone} 
                      onChange={handleChange} 
                      className="h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm">Company</Label>
                  <Input id="company" placeholder="" value={form.company} onChange={handleChange} className="h-10 sm:h-11" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-sm">Inquiry Type <span className="text-red-500">*</span></Label>
                  <Select value={form.inquiry} onValueChange={handleSelectChange} required > 
                    <SelectTrigger className="h-10 sm:h-11">
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
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    className="min-h-[100px] sm:min-h-[120px]"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 text-white font-semibold shadow-md rounded-full transition-all duration-300 h-11 sm:h-12 text-sm sm:text-base"
                  disabled={loading}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information - Mobile optimized */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up delay-300">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-800 mb-3 sm:mb-4">Let's start a conversation</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
                Whether you're scaling your AI or just beginning your automation journey, our team is ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border border-sky-100 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sky-800 mb-1 text-sm sm:text-base">{info.title}</h3>
                        <p 
                          className="text-xs sm:text-sm text-gray-600 mb-2 break-words" 
                          dangerouslySetInnerHTML={{ __html: info.description }} 
                        />
                        <a href={info.action} className="text-xs sm:text-sm text-blue-700 hover:text-indigo-700 transition-colors break-all">
                          {info.contact}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-sky-100 bg-white shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-sky-800 mb-3 sm:mb-4 text-base sm:text-lg">Prefer to chat?</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Try our AI chatbot for instant answers to common questions about our platform and services.
                </p>
                <Button
                  variant="outline"
                  className="border-sky-500 text-sky-700 hover:bg-sky-100 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
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