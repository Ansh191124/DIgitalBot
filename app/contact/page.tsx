"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import React, { ChangeEvent, useState } from "react"

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
    description: "USA: 300 Quail Ridge Dr NE, ADA, MI 49301 • India: Behind Manyata Tech Park, Hebbal, Bangalore 560077",
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
      const res = await fetch("https://digital-api-tef8.onrender.com/api/contact", { 
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
    <main className="min-h-screen bg-black text-foreground relative overflow-hidden">
      <Header />

      {/* Hero Section - Enhanced Creative Design */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-orange-500/20 via-orange-600/20 to-orange-700/20 rounded-full filter blur-3xl animate-float-reverse"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-400">
              💬 Get In Touch
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="block mb-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Let's Transform Your
            </span>
            <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl text-3xl sm:text-4xl lg:text-5xl relative overflow-hidden border-2 border-orange-400 animate-gradient">
              <span className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 via-transparent to-transparent"></span>
              <span className="relative z-10">Business Together</span>
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-gradient-to-r from-black via-gray-900 to-black border-2 border-orange-500 rounded-2xl shadow-xl">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
              Ready to <span className="font-bold text-orange-400">elevate your customer experience</span> with AI? Our experts are <span className="font-bold text-orange-500">just a message away</span>. Let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Enhanced Creative Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/20 via-orange-600/20 to-orange-700/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">

          {/* Contact Form - Enhanced */}
          <Card className="bg-black border-4 border-orange-300 hover:border-orange-400 shadow-2xl hover:shadow-orange-200 transition-all duration-500 animate-fade-in-up relative overflow-hidden group">
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-orange-300/20 via-orange-400/20 to-orange-500/20 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
            
            <CardHeader className="p-6 sm:p-8 relative z-10">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                  ✉️ Contact Form
                </span>
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 bg-clip-text text-transparent mb-4">
                Send us a message
              </CardTitle>
              <CardDescription className="text-base sm:text-lg font-medium bg-gradient-to-r from-orange-50 via-orange-100 to-orange-100 rounded-xl px-6 py-4 shadow-lg border-2 border-orange-200 text-gray-300">
                Reach out to our team for <span className="font-bold text-orange-600">support</span>, <span className="font-bold text-orange-600">partnership opportunities</span>, or general inquiries. We're here to help your business grow with AI automation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6 sm:p-8 relative z-10">
              {success && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-800 p-4 rounded-xl text-sm font-semibold shadow-lg">
                  ✓ {success}
                </div>
              )}
              {error && (
                <div className="bg-gradient-to-r from-red-50 to-orange-100 border-2 border-orange-400 text-red-800 p-4 rounded-xl text-sm font-semibold shadow-lg">
                  ✗ {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-bold text-gray-300">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={form.firstName} 
                      onChange={handleChange} 
                      className="h-12 border-2 border-gray-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-bold text-gray-300">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={form.lastName} 
                      onChange={handleChange} 
                      className="h-12 border-2 border-gray-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold text-gray-300">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-bold text-gray-300">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      value={form.phone} 
                      onChange={handleChange} 
                      required
                      className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-bold text-gray-300">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    value={form.company} 
                    onChange={handleChange} 
                    className="h-12 border-2 border-gray-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-sm font-bold text-gray-300">
                    Inquiry Type <span className="text-red-500">*</span>
                  </Label>
                  <Select value={form.inquiry} onValueChange={handleSelectChange} required> 
                    <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">💼 Sales Inquiry</SelectItem>
                      <SelectItem value="support">🛠️ Technical Support</SelectItem>
                      <SelectItem value="partnership">🤝 Partnership</SelectItem>
                      <SelectItem value="demo">🎯 Request Demo</SelectItem>
                      <SelectItem value="other">💡 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    className="min-h-[140px] border-2 border-gray-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:scale-105 text-white font-bold shadow-2xl hover:shadow-orange-400 rounded-xl transition-all duration-300 h-14 text-lg border-2 border-orange-300"
                  disabled={loading}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information - Enhanced */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div className="bg-black rounded-3xl p-8 border-2 border-orange-400 shadow-xl">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                  🚀 Let's Connect
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent mb-4">
                Let's start a conversation
              </h2>
              <p className="text-base text-gray-300 font-medium leading-relaxed">
                Whether you're <span className="font-bold text-orange-600">scaling your AI</span> or just beginning your <span className="font-bold text-orange-600">automation journey</span>, our team is ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const colors = [
                  { bg: 'from-orange-100 via-orange-200 to-orange-200', border: 'border-orange-300', hover: 'hover:border-orange-500', icon: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-200' },
                  { bg: 'from-orange-100 via-orange-200 to-orange-200', border: 'border-orange-400', hover: 'hover:border-orange-500', icon: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-200' },
                  { bg: 'from-orange-100 via-orange-200 to-orange-100', border: 'border-orange-400', hover: 'hover:border-orange-500', icon: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-200' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <Card key={index} className={`border-2 ${color.border} ${color.hover} bg-black ${color.shadow} hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group`}>
                    <CardContent className="p-6 relative">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 via-orange-300/30 to-orange-200/30 rounded-full filter blur-2xl group-hover:blur-xl transition-all"></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className={`w-14 h-14 bg-gradient-to-br ${color.icon} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                          <info.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white mb-2 text-lg">{info.title}</h3>
                          <p className="text-sm text-gray-400 mb-3 break-words font-medium">
                            {info.description}
                          </p>
                          {info.contact && (
                            <a href={info.action} className="text-sm font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent hover:from-orange-600 hover:to-orange-700 transition-all break-all">
                              {info.contact} →
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-2 border-green-300 hover:border-orange-500 bg-black shadow-xl hover:shadow-2xl hover:shadow-green-200 transition-all hover:scale-105 overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-200/30 via-orange-300/30 to-orange-400/30 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
                <div className="relative z-10">
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                      💬 Instant Help
                    </span>
                  </div>
                  <h3 className="font-extrabold text-2xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
                    Prefer to chat?
                  </h3>
                  <p className="text-base text-gray-300 mb-6 font-medium">
                    Try our <span className="font-bold text-orange-600">AI chatbot</span> for instant answers to common questions about our platform and services.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-orange-500 text-green-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 w-full font-bold text-base h-12 rounded-xl shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start Chat Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
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



