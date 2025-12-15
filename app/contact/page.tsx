"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Bot, Clock, Headphones, Mail, MapPin, MessageCircle, Phone, Shield, Users } from "lucide-react"
import Image from "next/image"
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
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(249, 115, 22, 0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tl from-orange-500/10 via-orange-400/5 to-transparent rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/3 to-orange-500/3 rounded-full" />

      <Header />

      {/* Hero Section - Cyberpunk Design with HD Images */}
      <section className="pt-3 pb-1 px-2 sm:px-4 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-block mb-6">
                                {/* Decorative Brand Element for Large Screens */}
                                <div className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-400/20 via-orange-200/10 to-transparent rounded-full z-0" />
                <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-400/50 border border-orange-300/50"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                      }}>
                  💬 Get In Touch - AI Voice Agent Support
                </span>
              </div>

              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black mb-3 lg:mb-4 uppercase tracking-wider">
                <span className="block mb-2 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                  Let's Transform Your
                </span>
                <span className="inline-block px-3 py-2 rounded-xl text-gray-900 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 shadow-lg text-sm sm:text-base lg:text-lg xl:text-xl relative overflow-hidden border border-orange-300/50"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                      }}>
                  <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 via-transparent to-transparent"></span>
                  <span className="relative z-10 font-black">Business Together</span>
                </span>
              </h1>

              <div className="max-w-4xl mx-auto lg:mx-0 mb-4 lg:mb-6 p-3 bg-white border border-orange-400/25 rounded-xl shadow-md shadow-orange-400/10">
                <p className="text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-medium">
                  Ready to <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">elevate your customer experience</span> with AI voice agents? Our experts are <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">just a message away</span>. Let's discuss how we can help your business grow with 24/7 AI automation.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                {[
                  { icon: Users, number: "500+", label: "Businesses Served", color: "from-orange-400 to-orange-500" },
                  { icon: Bot, number: "2M+", label: "AI Conversations", color: "from-orange-300 to-orange-600" },
                  { icon: Clock, number: "24/7", label: "Support Available", color: "from-orange-400 to-orange-600" }
                ].map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div key={idx} className="bg-white rounded-lg p-2 border border-orange-400/25 hover:border-orange-300/50 transition-all hover:scale-102 hover:shadow-md hover:shadow-orange-400/15 group text-left sm:text-center">
                      <div className="flex items-center justify-center mb-1">
                        <div className={`p-1 rounded-md bg-gradient-to-r ${stat.color} group-hover:scale-105 transition-transform`}>
                          <Icon className="w-2 h-2 sm:w-3 sm:h-3 text-gray-900" />
                        </div>
                      </div>
                      <div className={`text-sm sm:text-base font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-[8px] sm:text-[10px] text-gray-700 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/30 shadow-xl shadow-orange-500/10 group hover:shadow-orange-400/20 transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces&auto=format&q=90"
                  alt="Professional AI Customer Support Team - Contact DigitalBot.ai for Voice Agent Platform Support"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                <div className="absolute top-4 right-4">
                  <div className="bg-white px-4 py-2 rounded-2xl border border-orange-400/30 shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-900 text-xs font-semibold uppercase tracking-wider">24/7 Live Support</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white p-4 rounded-2xl border border-orange-400/25 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 text-sm font-bold uppercase tracking-wide mb-1">Expert AI Support Team</p>
                        <p className="text-orange-600 text-xs font-medium">Enterprise-grade customer service</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1 h-6 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full opacity-80 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Cyberpunk Enhanced Design */}
      <section className="py-6 px-2 sm:px-4 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-start relative z-10">

          {/* Contact Form - Professional Enhanced */}
          <Card className="border-2 border-orange-400/30 hover:border-orange-300/60 bg-gradient-to-br from-white/95 via-white/90 to-white/95 shadow-xl hover:shadow-orange-400/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden group rounded-3xl">
            {/* Professional Glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full filter transition-all duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-orange-500/5 via-orange-400/3 to-transparent rounded-full filter"></div>
            {/* Extra Decorative Element for Large Screens */}
            <div className="hidden lg:block absolute -left-24 top-1/3 w-32 h-32 bg-gradient-to-br from-orange-300/20 via-orange-100/10 to-transparent rounded-full z-0" />

            <CardHeader className="p-3 sm:p-4 relative z-10">
              <div className="inline-block mb-3">
                <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-[10px] uppercase tracking-wide shadow-md border border-orange-300/50"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                      }}>
                  ✉️ Contact Form - AI Voice Agents
                </span>
              </div>
              <CardTitle className="text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-3 uppercase tracking-wide">
                Send us a message
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm font-medium bg-orange-50 rounded-lg px-3 py-2 shadow-sm border border-orange-400/25 text-gray-700">
                Reach out to our team for <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">AI voice automation support</span>, <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">partnership opportunities</span>, or general inquiries. We're here to help your business grow with cutting-edge voice AI technology.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-3 sm:p-4 relative z-10">
              {success && (
                <div className="bg-orange-50 border border-orange-400 text-orange-900 p-2 rounded-lg text-[10px] sm:text-xs font-semibold shadow-sm ">
                  ✓ {success}
                </div>
              )}
              {error && (
                <div className="bg-red-50 border border-red-400 text-red-900 p-2 rounded-lg text-[10px] sm:text-xs font-semibold shadow-sm ">
                  ✗ {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="firstName" className="text-xs font-bold text-gray-900 uppercase tracking-wide">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handleChange}
                      className="h-8 bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="text-xs font-bold text-gray-900 uppercase tracking-wide">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handleChange}
                      className="h-8 bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="h-8 bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                      Phone Number <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="h-8 bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="company" className="text-xs font-bold text-gray-900 uppercase tracking-wide">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    value={form.company}
                    onChange={handleChange}
                    className="h-8 bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="inquiry" className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    Inquiry Type <span className="text-red-400">*</span>
                  </Label>
                  <Select value={form.inquiry} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="h-8 bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900">
                      <SelectValue placeholder="Select inquiry type" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-orange-400/50">
                      <SelectItem value="sales" className="text-gray-900 hover:bg-orange-100">💼 Sales Inquiry</SelectItem>
                      <SelectItem value="support" className="text-gray-900 hover:bg-orange-100">🛠️ Technical Support</SelectItem>
                      <SelectItem value="partnership" className="text-gray-900 hover:bg-orange-100">🤝 Partnership</SelectItem>
                      <SelectItem value="demo" className="text-gray-900 hover:bg-orange-100">🎯 Request Demo</SelectItem>
                      <SelectItem value="other" className="text-gray-900 hover:bg-orange-100">💡 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="text-xs font-bold text-gray-900 uppercase tracking-wide">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your AI voice automation project and how we can help..."
                    className="min-h-[80px] bg-white/50 border border-orange-400/50 focus:border-orange-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-orange-400/15 transition-all text-gray-900 placeholder:text-gray-400"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:scale-102 text-gray-900 font-bold shadow-lg hover:shadow-orange-400/40 rounded-lg transition-all duration-300 h-8 text-xs sm:text-sm border border-orange-300/50 uppercase tracking-wide"
                  disabled={loading}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>

            {/* Additional Information Section */}
            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
              <div className="bg-gradient-to-r from-orange-400/10 via-orange-300/5 to-orange-500/10 p-3 rounded-xl border border-orange-400/20 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-900 text-sm font-semibold">Average response: 2 mins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-900 text-sm font-semibold">Customer satisfaction: 98%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-bold uppercase tracking-wide">Why choose us?</p>
                    <p className="text-orange-500 text-xs">Enterprise AI • Proven results • Global support</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1 h-8 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full opacity-70 animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-orange-400/25 hover:border-orange-300/50 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl">
                      <Phone className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-orange-600 text-sm font-bold">Call Now</p>
                      <p className="text-orange-500 text-xs">Instant support</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-orange-400/25 hover:border-orange-300/50 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl">
                      <Mail className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-orange-600 text-sm font-bold">Email Us</p>
                      <p className="text-orange-500 text-xs">Detailed inquiry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information - Cyberpunk Enhanced */}
          <div className="space-y-8">
            {/* Professional AI Support Team Image */}
            <div className="relative rounded-2xl overflow-hidden border border-orange-400/30 shadow-xl shadow-orange-500/15 group hover:shadow-orange-400/25 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop&crop=faces&auto=format&q=90"
                alt="Professional AI Voice Agent Support Team - 24/7 Customer Service Excellence"
                width={600}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-white px-3 py-2 rounded-xl border border-orange-400/40 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">Online Now</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white p-3 rounded-xl border border-orange-400/30 shadow-md">
                  <p className="text-orange-600 text-sm font-bold uppercase tracking-wide mb-1">24/7 Enterprise AI Support</p>
                  <p className="text-orange-500 text-xs font-medium">Instant response • Expert guidance • Global coverage</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-orange-400/25 shadow-lg shadow-orange-400/10">
              <div className="inline-block mb-2">
                <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-[10px] uppercase tracking-wide shadow-md border border-orange-300/50"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                      }}>
                  🚀 Let's Connect - AI Voice Solutions
                </span>
              </div>
              <h2 className="text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-2 uppercase tracking-wide">
                Let's start a conversation
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                Whether you're <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">scaling your AI voice automation</span> or just beginning your <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">digital transformation journey</span>, our expert AI team is ready to assist with voice agent deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const colors = [
                  { icon: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-400/20' },
                  { icon: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-400/20' },
                  { icon: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-400/20' },
                ];
                const color = colors[index % colors.length];

                return (
                  <Card key={index} className={`border border-orange-400/30 hover:border-orange-300/60 bg-white ${color.shadow} hover:shadow-lg transition-all duration-300 hover:scale-[1.01] overflow-hidden group rounded-xl`}>
                    <CardContent className="p-3 sm:p-4 relative">
                      <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full filter transition-all duration-500"></div>
                      <div className="flex items-start space-x-3 relative z-10">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${color.icon} rounded-lg flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 border border-orange-400/20`}
                             style={{
                               clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                             }}>
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-orange-600 mb-1 text-sm sm:text-base uppercase tracking-wide">{info.title}</h3>
                          <p className="text-[10px] sm:text-xs text-gray-700 mb-2 break-words font-medium leading-relaxed">
                            {info.description}
                          </p>
                          {info.contact && (
                            <div className="bg-gradient-to-r from-orange-400/10 to-orange-500/10 p-2 rounded-xl border border-orange-400/30">
                              <a href={info.action} className="text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-600 transition-all break-all flex items-center gap-2">
                                {info.contact}
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Professional AI Voice Technology & AI Chat - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Professional AI Voice Technology Showcase - Orange Theme */}
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/30 shadow-xl shadow-orange-500/15 group hover:shadow-orange-400/25 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=250&fit=crop&crop=center&auto=format&q=90"
                  alt="Advanced AI Voice Technology and Automation Platform Dashboard"
                  width={600}
                  height={250}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-400/80 via-orange-200/30 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="flex flex-col gap-2">
                    <div className="bg-orange-500/20 px-3 py-2 rounded-xl border border-orange-400/40">
                      <p className="text-orange-500 text-xs font-bold uppercase tracking-wider">99.9% Uptime</p>
                    </div>
                    <div className="bg-orange-300/20 px-3 py-2 rounded-xl border border-orange-300/40">
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">HIPAA Certified</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white p-3 rounded-xl border border-orange-400/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-lg border border-orange-400/30">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-orange-500 text-sm font-bold uppercase tracking-wide mb-1">Enterprise-Grade Security</p>
                        <p className="text-orange-400 text-xs font-medium">Bank-level encryption • SOC 2 Type II • ISO 27001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Chat Card */}
              <Card className="border border-orange-400/30 hover:border-orange-300/60 bg-white shadow-lg hover:shadow-orange-400/20 transition-all duration-300 hover:scale-[1.01] overflow-hidden group rounded-xl">
                <CardContent className="p-3 relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full filter transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="inline-block mb-2">
                      <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 text-gray-900 font-bold text-[10px] uppercase tracking-wide shadow-md border border-orange-300/50"
                            style={{
                              clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                            }}>
                        💬 Instant AI Voice Help
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-2 uppercase tracking-wide">
                      Prefer to chat with AI?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-800 mb-3 font-medium leading-relaxed">
                      Try our <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">AI voice chatbot</span> for instant answers to common questions about our voice agent platform, pricing, and implementation services.
                    </p>
                    <Button
                      variant="outline"
                      className="border border-orange-400/50 text-orange-500 hover:bg-orange-400/10 hover:border-orange-300 hover:scale-102 transition-all duration-300 w-full font-bold text-xs h-8 rounded-lg shadow-md bg-white/50 uppercase tracking-wide"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                      }}
                    >
                      <Headphones className="mr-2 h-4 w-4" />
                      Start AI Voice Chat
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-2 sm:px-4 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-left mb-6">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-xs uppercase tracking-wide shadow-md border border-orange-300/50">
                ❓ Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-3 uppercase tracking-wide">
              Quick Answers
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 max-w-4xl leading-relaxed">
              Get instant answers to common questions about our AI voice automation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                question: "How quickly can I get started?",
                answer: "Most businesses are up and running within 5-7 days. We handle the entire setup process including integration with your existing systems."
              },
              {
                question: "What's included in support?",
                answer: "24/7 technical support, regular system updates, performance monitoring, and dedicated account management for enterprise clients."
              },
              {
                question: "Do you offer custom integrations?",
                answer: "Yes! We integrate with CRMs, help desk software, phone systems, and custom APIs. Our team handles all technical implementation."
              },
              {
                question: "Is there a free trial available?",
                answer: "Absolutely! We offer a 14-day free trial with full access to our AI voice platform and dedicated onboarding support."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-orange-400/20 hover:border-orange-300/40 p-3 rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-orange-400/10">
                <h3 className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-wide">
                  {faq.question}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 px-2 sm:px-4 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-left mb-6">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-xs uppercase tracking-wide shadow-md border border-orange-300/50">
                ⭐ Client Success Stories
              </span>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-3 uppercase tracking-wide">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 max-w-4xl leading-relaxed">
              Discover how businesses are transforming their customer experience with our AI voice solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Sarah Chen",
                role: "Operations Manager",
                company: "TechFlow Solutions",
                testimonial: "DigitalBot.ai reduced our response time by 85% and improved customer satisfaction scores significantly. The setup was seamless!",
                rating: 5
              },
              {
                name: "Marcus Rodriguez",
                role: "CEO",
                company: "Healthcare Plus",
                testimonial: "The AI voice automation handles 70% of our calls automatically. Our team can now focus on complex patient needs.",
                rating: 5
              },
              {
                name: "Jennifer Park",
                role: "Customer Success Lead",
                company: "E-commerce Pro",
                testimonial: "24/7 availability without hiring night staff. ROI was positive within the first month. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-orange-400/20 hover:border-orange-300/40 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-orange-400/10 relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full filter blur-lg group-hover:blur-md transition-all"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-sm">⭐</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 mb-3 leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="border-t border-orange-400/20 pt-2">
                    <p className="text-xs font-bold text-orange-600">{testimonial.name}</p>
                    <p className="text-xs text-gray-700">{testimonial.role}</p>
                    <p className="text-xs text-orange-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Office Locations */}
      <section className="py-8 px-2 sm:px-4 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-left mb-6">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-xs uppercase tracking-wide shadow-md border border-orange-300/50">
                🌍 Global Presence
              </span>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-3 uppercase tracking-wide">
              Our Office Locations
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 max-w-4xl leading-relaxed">
              We're strategically located to provide local support with global expertise in AI voice automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                country: "United States",
                city: "Grand Rapids, Michigan",
                address: "300 Quail Ridge Dr NE, ADA, MI 49301",
                timezone: "EST (UTC-5)",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM",
                phone: "+91-78925-18414",
                flag: "🇺🇸"
              },
              {
                country: "India",
                city: "Bangalore, Karnataka",
                address: "Behind Manyata Tech Park, Hebbal, Bangalore 560077",
                timezone: "IST (UTC+5:30)",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM",
                phone: "+91-78925-18414",
                flag: "🇮🇳"
              }
            ].map((office, idx) => (
              <div key={idx} className="bg-white border border-orange-400/20 hover:border-orange-300/40 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-orange-400/10 relative overflow-hidden group">
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full filter blur-lg group-hover:blur-md transition-all"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{office.flag}</span>
                    <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wide">
                      {office.country}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{office.city}</p>
                      <p className="text-xs text-gray-700">{office.address}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-orange-600">Timezone:</span>
                        <span className="text-gray-900">{office.timezone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-600">Hours:</span>
                        <span className="text-gray-900">{office.hours}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-600">Phone:</span>
                        <span className="text-gray-900">{office.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-8 px-2 sm:px-4 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white border border-orange-400/30 hover:border-orange-300/50 p-4 rounded-lg shadow-lg hover:shadow-orange-400/15 transition-all duration-300 hover:scale-[1.01] overflow-hidden group text-left">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400/10 via-orange-300/5 to-transparent rounded-full filter blur-xl group-hover:blur-lg transition-all"></div>
            <div className="relative z-10">
              <div className="inline-block mb-3">
                <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 text-gray-900 font-bold text-xs uppercase tracking-wide shadow-md border border-orange-300/50">
                  🚀 Ready to Get Started?
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-3 uppercase tracking-wide">
                Next Steps After You Contact Us
              </h3>

              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {[
                  { step: "1", title: "Discovery Call", desc: "15-min consultation to understand your needs" },
                  { step: "2", title: "Custom Demo", desc: "Personalized demo with your use cases" },
                  { step: "3", title: "Implementation", desc: "Quick setup and go-live within 5-7 days" }
                ].map((step, idx) => (
                  <div key={idx} className="bg-orange-50 border border-orange-400/20 p-3 rounded-lg text-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-gray-900 text-xs font-bold">{step.step}</span>
                    </div>
                    <p className="text-xs font-bold text-orange-600 mb-1">{step.title}</p>
                    <p className="text-xs text-gray-700">{step.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-700 text-center">
                <span className="font-bold text-orange-600">Average response time: 2 minutes</span> • No obligation • Free consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



