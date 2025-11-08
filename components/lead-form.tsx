"use client"

import { useState } from "react"
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
      const submitData = new FormData()
      submitData.append("access_key", "8f0556d8-66c3-4e2d-810e-5de948aff5ce")
      submitData.append("subject", `New Lead from ${formData.company}`)
      submitData.append("from_name", "DigitalBot Lead Form")
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("company", formData.company)
      submitData.append("message", formData.message)
      submitData.append("redirect", "false")
      submitData.append("to", "hello@metic.ai")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        const savedEmail = formData.email
        setFormData({
          name: "",
          email: savedEmail,
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Animated Orbs - Trading Theme */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-cyan-500/30 via-teal-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-teal-500/20 via-cyan-400/15 to-emerald-400/10 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl" />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-15px) translateX(5px); }
            50% { transform: translateY(-20px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(5px); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(15px) translateX(-5px); }
            50% { transform: translateY(20px) translateX(5px); }
            75% { transform: translateY(15px) translateX(-5px); }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
          }
        `
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Info */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-900/50 to-teal-900/50 border-2 border-cyan-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-sm font-bold text-cyan-400">Get Started Today</span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Transform Your Business with
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    AI Voice Assistants
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join thousands of businesses automating customer interactions. 
                  Get a personalized demo and discover how AI can revolutionize your operations.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Setup in 5 minutes", gradient: "from-cyan-400 via-teal-400 to-cyan-500", border: "border-cyan-500/30", bg: "from-cyan-900/50 to-teal-900/50" },
                  { icon: CheckCircle2, text: "No credit card required", gradient: "from-emerald-400 via-teal-400 to-cyan-400", border: "border-emerald-500/30", bg: "from-emerald-900/50 to-teal-900/50" },
                  { icon: Phone, text: "Free consultation call", gradient: "from-cyan-400 via-blue-400 to-teal-400", border: "border-cyan-500/30", bg: "from-cyan-900/50 to-blue-900/50" },
                  { icon: Building2, text: "Enterprise-ready solution", gradient: "from-teal-400 via-cyan-400 to-emerald-400", border: "border-teal-500/30", bg: "from-teal-900/50 to-cyan-900/50" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className={`p-2 bg-gradient-to-r ${feature.bg} rounded-lg group-hover:scale-110 transition-transform border-2 ${feature.border} backdrop-blur-sm`}>
                      <feature.icon className={`w-5 h-5 text-cyan-400`} />
                    </div>
                    <span className="text-gray-200 font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t-2 border-cyan-500/20">
                <p className="text-sm text-gray-400 mb-3">Trusted by leading companies worldwide</p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">10K+</div>
                    <div className="text-xs text-gray-400">Active Users</div>
                  </div>
                  <div className="w-px h-12 bg-cyan-500/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                  <div className="w-px h-12 bg-cyan-500/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-cyan-500/30 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 via-teal-400/15 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-teal-500/20 via-cyan-400/15 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">Request a Demo</h3>
                    <p className="text-gray-400">Fill out the form and we'll get back to you within 24 hours</p>
                  </div>

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="mb-6 p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-emerald-400 font-semibold">Thank you for your interest!</p>
                        <p className="text-emerald-300 text-sm">We'll contact you shortly at {formData.email}</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-xl backdrop-blur-sm">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Form */}
                  <div className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-cyan-400" />
                        </div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 h-12 bg-gray-800/50 border-2 border-cyan-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 rounded-xl backdrop-blur-sm outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                        Work Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-cyan-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 h-12 bg-gray-800/50 border-2 border-cyan-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 rounded-xl backdrop-blur-sm outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-cyan-400" />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 h-12 bg-gray-800/50 border-2 border-cyan-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 rounded-xl backdrop-blur-sm outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-200 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-cyan-400" />
                        </div>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 h-12 bg-gray-800/50 border-2 border-cyan-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 rounded-xl backdrop-blur-sm outline-none transition-all"
                          placeholder="Your Company Inc."
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                        How can we help? *
                      </label>
                      <div className="relative">
                        <div className="absolute top-4 left-4 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-cyan-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pt-3 bg-gray-800/50 border-2 border-cyan-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 rounded-xl resize-none backdrop-blur-sm outline-none transition-all"
                          placeholder="Tell us about your business needs..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 hover:from-cyan-600 hover:via-teal-600 hover:to-cyan-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                        Privacy Policy
                      </a>
                      . We respect your privacy and never share your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}