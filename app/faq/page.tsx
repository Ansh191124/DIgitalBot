import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is an AI voice assistant and how does it work?",
    a: "An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time. It processes spoken or text input, analyzes the intent, and provides relevant responses through advanced algorithms. Our AI voice assistant can handle complex conversations, learn from interactions, and continuously improve its responses to provide more accurate and helpful assistance to your customers."
  },
  {
    q: "How can AI voice assistants improve customer service?",
    a: "AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, reducing wait times, and offering consistent support around the clock. They can resolve common queries immediately, escalate complex issues to human agents when needed, and maintain detailed conversation logs for better service continuity. This results in higher customer satisfaction, reduced operational costs, and improved efficiency for your support team."
  },
  {
    q: "Is the AI voice assistant secure for handling customer data?",
    a: "Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, compliance with GDPR and industry standards, regular security audits, and strict data privacy protocols. All customer interactions are encrypted and stored securely, with access controls and monitoring systems in place. We ensure that sensitive information is protected and handled according to the highest security standards and regulatory requirements."
  },
  {
    q: "Can the AI voice assistant integrate with existing business systems?",
    a: "Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs. This ensures smooth data flow and enables the assistant to access relevant customer information, update records, and perform actions within your existing workflows. We provide comprehensive integration support and documentation to make the setup process as smooth as possible."
  },
  {
    q: "What industries benefit most from AI voice assistants?",
    a: "AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications. Any business that values customer interaction and support can leverage AI voice assistants to improve service quality, reduce costs, and enhance customer experience. The technology is particularly valuable for businesses with high call volumes, repetitive queries, or 24/7 support requirements."
  },
  {
    q: "How quickly can I set up and deploy an AI voice assistant?",
    a: "Setup time varies depending on your requirements and integrations, but most businesses can have a basic AI voice assistant running within 1-2 weeks. This includes initial configuration, training on your specific use cases, and basic integrations. More complex deployments with multiple integrations and custom features may take 2-4 weeks. We provide dedicated support throughout the setup process to ensure smooth deployment."
  },
  {
    q: "What kind of support and maintenance is provided?",
    a: "We offer comprehensive support including 24/7 technical assistance, regular system updates, performance monitoring, and continuous optimization. Our team provides training for your staff, handles system maintenance, and ensures the AI assistant stays updated with the latest features and security patches. We also offer analytics and reporting to help you track performance and identify areas for improvement."
  },
  {
    q: "Can the AI voice assistant handle multiple languages?",
    a: "Yes, our AI voice assistant supports multiple languages and can be configured to communicate in the languages your customers prefer. It can detect the customer's language automatically or be set to specific languages based on your business needs. The assistant maintains the same level of accuracy and understanding across different languages, ensuring consistent service quality for all your customers."
  }
]

export default function FAQPage() {
  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg">Everything you need to know about AI voice assistants.</p>
        </div>

        {/* Accordion Style FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Quick Answers</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={`accordion-${idx}`} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-sky-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Individual FAQ Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Detailed Pages</h2>
          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <Link 
                key={`link-${idx}`} 
                href={`/faq/${idx}`} 
                className="flex border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-sky-200 transition-all duration-200 justify-between items-start group"
              >
                <div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">
                    {faq.q}
                  </div>
                  <div className="text-gray-500 text-sm line-clamp-2">
                    {faq.a.substring(0, 120)}...
                  </div>
                </div>
                <div className="text-sky-600 font-medium text-sm whitespace-nowrap ml-4 mt-1">
                  Read More →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? Get in touch with our team.</p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  )
}