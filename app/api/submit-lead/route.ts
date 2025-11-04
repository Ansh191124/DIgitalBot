import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, to } = body

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

    // Create email content
    const emailContent = `
      New Lead Form Submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      
      Message:
      ${message}
      
      ---
      Submitted at: ${new Date().toLocaleString()}
    `

    // For now, we'll use a simple approach with Web3Forms (free service)
    // You can replace this with your preferred email service (SendGrid, Resend, etc.)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
        subject: `New Lead: ${name} from ${company}`,
        from_name: "DigitalBot Lead Form",
        from_email: email,
        to: to || "hello@digitalbot.ai",
        message: emailContent,
        name: name,
        email: email,
        phone: phone,
        company: company,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
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
