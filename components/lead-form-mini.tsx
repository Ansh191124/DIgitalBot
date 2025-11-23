"use client"

import { useState } from "react"
import { Send, CheckCircle2, Phone, Mail, Building2, User, MessageSquare } from "lucide-react"

export function LeadFormMini() {
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
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error(data.message || "Failed to submit form")
      }
    } catch (err) {
      setError("Failed to submit form. Please try again or email us directly at hello@metic.ai")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white/90 border border-orange-200 rounded-2xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">Contact Sales</h3>
      {isSuccess && (
        <div className="p-3 bg-emerald-100 border border-emerald-300 rounded flex items-center gap-2 text-emerald-700 text-sm">
          <CheckCircle2 className="w-4 h-4" /> Thank you! We'll contact you soon.
        </div>
      )}
      {error && (
        <div className="p-3 bg-red-100 border border-red-300 rounded text-red-700 text-sm">{error}</div>
      )}
      <div className="relative">
        <User className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full pl-10 pr-3 py-2 rounded border border-orange-200 focus:border-orange-500 outline-none bg-white"
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Work Email"
          className="w-full pl-10 pr-3 py-2 rounded border border-orange-200 focus:border-orange-500 outline-none bg-white"
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full pl-10 pr-3 py-2 rounded border border-orange-200 focus:border-orange-500 outline-none bg-white"
        />
      </div>
      <div className="relative">
        <Building2 className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
        <input
          type="text"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full pl-10 pr-3 py-2 rounded border border-orange-200 focus:border-orange-500 outline-none bg-white"
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          rows={3}
          className="w-full pl-10 pr-3 py-2 rounded border border-orange-200 focus:border-orange-500 outline-none bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Demo
          </>
        )}
      </button>
      <div className="text-xs text-gray-500 text-center mt-2">
        By submitting, you agree to our <a href="/privacy" className="text-orange-600 underline">Privacy Policy</a>.
      </div>
      <div className="flex flex-col gap-1 text-xs text-center text-gray-500 mt-2">
        <span>Email: <a href="mailto:hello@metic.ai" className="text-orange-600 underline">hello@metic.ai</a></span>
        <span>Phone: <a href="tel:+919999999999" className="text-orange-600 underline">+91 99999 99999</a></span>
      </div>
    </form>
  )
}
