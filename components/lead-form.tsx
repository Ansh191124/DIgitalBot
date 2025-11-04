"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Send, CheckCircle2, Phone, Mail, Building2, User, MessageSquare, Zap } from "lucide-react"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      formData.append("access_key", "8f0556d8-66c3-4e2d-810e-5de948aff5ce")
      formData.append("subject", `New Lead from ${formData.get("company")}`)
      formData.append("from_name", "DigitalBot Lead Form")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        throw new Error(data.message || "Failed to submit form")
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Failed to submit form. Please try again or email us directly at hello@metic.ai")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50 to-purple-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-300/40 via-pink-300/30 to-purple-300/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-blue-300/30 via-cyan-300/20 to-teal-300/15 rounded-full blur-3xl animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Info */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                <span className="text-sm font-bold text-orange-700">Get Started Today</span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Transform Your Business with
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    AI Voice Assistants
                  </span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Join thousands of businesses automating customer interactions. 
                  Get a personalized demo and discover how AI can revolutionize your operations.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Setup in 5 minutes", gradient: "from-orange-500 via-pink-500 to-purple-500", border: "border-orange-300", bg: "from-orange-100 to-pink-100" },
                  { icon: CheckCircle2, text: "No credit card required", gradient: "from-green-500 via-teal-500 to-cyan-500", border: "border-green-300", bg: "from-green-100 to-teal-100" },
                  { icon: Phone, text: "Free consultation call", gradient: "from-blue-500 via-cyan-500 to-teal-500", border: "border-blue-300", bg: "from-blue-100 to-cyan-100" },
                  { icon: Building2, text: "Enterprise-ready solution", gradient: "from-purple-500 via-pink-500 to-orange-500", border: "border-purple-300", bg: "from-purple-100 to-pink-100" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className={`p-2 bg-gradient-to-r ${feature.bg} rounded-lg group-hover:scale-110 transition-transform border-2 ${feature.border}`}>
                      <feature.icon className={`w-5 h-5 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                    </div>
                    <span className="text-gray-900 font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t-2 border-purple-200">
                <p className="text-sm text-gray-600 mb-3">Trusted by leading companies worldwide</p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
                    <div className="text-xs text-gray-600">Active Users</div>
                  </div>
                  <div className="w-px h-12 bg-purple-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div className="w-px h-12 bg-purple-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              <div className="bg-white backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-orange-300 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/40 via-pink-200/30 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">Request a Demo</h3>
                    <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
                  </div>

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-green-800 font-semibold">Thank you for your interest!</p>
                        <p className="text-green-700 text-sm">We'll contact you shortly at {formData.email}</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-800 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Hidden field for recipient email */}
                    <input type="hidden" name="redirect" value="false" />
                    <input type="hidden" name="to" value="hello@metic.ai" />
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-12 h-12 bg-white border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Work Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-600" />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-12 h-12 bg-white border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-600" />
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-12 h-12 bg-white border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-gray-600" />
                        </div>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="pl-12 h-12 bg-white border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          placeholder="Your Company Inc."
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        How can we help? *
                      </label>
                      <div className="relative">
                        <div className="absolute top-4 left-4 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-600" />
                        </div>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="pl-12 pt-3 bg-white border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-xl resize-none"
                          placeholder="Tell us about your business needs..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Request Free Demo
                        </>
                      )}
                    </Button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-600 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">
                        Privacy Policy
                      </a>
                      . We respect your privacy and never share your data.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
