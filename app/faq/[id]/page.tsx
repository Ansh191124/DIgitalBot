import Link from "next/link"

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

interface Props {
  params: { id: string }
}

export default function FAQItemPage({ params }: Props) {
  const id = parseInt(params.id, 10)
  if (isNaN(id) || id < 0 || id >= faqs.length) {
    return (
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">FAQ not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find that FAQ. Please go back to the FAQ list.</p>
          <Link 
            href="/faq"
            className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Back to FAQs
          </Link>
        </div>
      </main>
    )
  }

  const faq = faqs[id]

  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/faq"
          className="text-sky-600 mb-6 inline-block hover:text-sky-700 transition-colors"
        >
          ← Back to FAQs
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">{faq.q}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
        </div>

        {/* Navigation to adjacent FAQs */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
          {id > 0 && (
            <Link 
              href={`/faq/${id - 1}`}
              className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
            >
              ← Previous FAQ
            </Link>
          )}
          {id < faqs.length - 1 && (
            <Link 
              href={`/faq/${id + 1}`}
              className="flex items-center text-sky-600 hover:text-sky-700 transition-colors ml-auto"
            >
              Next FAQ →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}