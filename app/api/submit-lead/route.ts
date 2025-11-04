import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, to } = body

    console.log("Form submission received:", { name, email, phone, company })
    console.log("Web3Forms API Key present:", !!process.env.WEB3FORMS_ACCESS_KEY)

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // For now, we'll use a simple approach with Web3Forms (free service)
    // You can replace this with your preferred email service (SendGrid, Resend, etc.)
    const formData = new FormData()
    formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY || "")
    formData.append("subject", `New Lead: ${name} from ${company}`)
    formData.append("from_name", "DigitalBot Lead Form")
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("company", company)
    formData.append("message", message)
    formData.append("to", to || "hello@metic.ai")

    console.log("Sending to Web3Forms with access_key present:", !!process.env.WEB3FORMS_ACCESS_KEY)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
    console.log("Web3Forms response:", data)

    if (!data.success) {
      console.error("Web3Forms error:", data)
      throw new Error(data.message || "Failed to send email")
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}
