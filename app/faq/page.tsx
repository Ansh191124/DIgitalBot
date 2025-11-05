import { Header } from "@/components/header"import Link from "next/link"

import { Footer } from "@/components/footer"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import Link from "next/link"

const faqs = [

export const metadata = {  {

  title: "FAQ - Frequently Asked Questions | AI Voice Agent & Assistant",    q: "What is an AI voice assistant and how does it work?",

  description: "Get answers to all your questions about AI Voice Agents and AI Voice Assistants. Learn about setup, pricing, integrations, security, and more.",    a: "An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time. It processes spoken or text input, analyzes the intent, and provides relevant responses through advanced algorithms. Our AI voice assistant can handle complex conversations, learn from interactions, and continuously improve its responses to provide more accurate and helpful assistance to your customers."

}  },

  {

const faqs = [    q: "How can AI voice assistants improve customer service?",

  {    a: "AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, reducing wait times, and offering consistent support around the clock. They can resolve common queries immediately, escalate complex issues to human agents when needed, and maintain detailed conversation logs for better service continuity. This results in higher customer satisfaction, reduced operational costs, and improved efficiency for your support team."

    id: 1,  },

    icon: "🏆",  {

    question: "What is an AI voice assistant and how does it work?",    q: "Is the AI voice assistant secure for handling customer data?",

    answer: "An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time. It processes spoken or text input, analyzes the intent, and provides relevant responses through advanced algorithms. Our AI voice assistant can handle complex conversations, learn from interactions, and continuously improve its responses to provide more accurate and helpful assistance to your customers."    a: "Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, compliance with GDPR and industry standards, regular security audits, and strict data privacy protocols. All customer interactions are encrypted and stored securely, with access controls and monitoring systems in place. We ensure that sensitive information is protected and handled according to the highest security standards and regulatory requirements."

  },  },

  {  {

    id: 2,    q: "Can the AI voice assistant integrate with existing business systems?",

    icon: "🎯",    a: "Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs. This ensures smooth data flow and enables the assistant to access relevant customer information, update records, and perform actions within your existing workflows. We provide comprehensive integration support and documentation to make the setup process as smooth as possible."

    question: "How can AI voice assistants improve customer service?",  },

    answer: "AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, reducing wait times, and offering consistent support around the clock. They can resolve common queries immediately, escalate complex issues to human agents when needed, and maintain detailed conversation logs for better service continuity. This results in higher customer satisfaction, reduced operational costs, and improved efficiency for your support team."  {

  },    q: "What industries benefit most from AI voice assistants?",

  {    a: "AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications. Any business that values customer interaction and support can leverage AI voice assistants to improve service quality, reduce costs, and enhance customer experience. The technology is particularly valuable for businesses with high call volumes, repetitive queries, or 24/7 support requirements."

    id: 3,  },

    icon: "💰",  {

    question: "How much does an AI Voice Assistant platform cost?",    q: "How quickly can I set up and deploy an AI voice assistant?",

    answer: "Pricing for AI Voice Assistant platforms varies based on usage volume, features, and integration requirements. Most platforms offer flexible pricing models including per-minute usage, monthly subscriptions, or enterprise packages. Typical costs range from $0.05-$0.15 per minute for pay-as-you-go plans, or $500-$5000+ per month for subscription plans depending on call volume and features. Contact us for a customized quote based on your specific business needs and expected usage patterns."    a: "Setup time varies depending on your requirements and integrations, but most businesses can have a basic AI voice assistant running within 1-2 weeks. This includes initial configuration, training on your specific use cases, and basic integrations. More complex deployments with multiple integrations and custom features may take 2-4 weeks. We provide dedicated support throughout the setup process to ensure smooth deployment."

  },  },

  {  {

    id: 4,    q: "What kind of support and maintenance is provided?",

    icon: "🌟",    a: "We offer comprehensive support including 24/7 technical assistance, regular system updates, performance monitoring, and continuous optimization. Our team provides training for your staff, handles system maintenance, and ensures the AI assistant stays updated with the latest features and security patches. We also offer analytics and reporting to help you track performance and identify areas for improvement."

    question: "What is the difference between an AI Voice Agent and traditional IVR systems?",  },

    answer: "AI Voice Agents are significantly more advanced than traditional IVR (Interactive Voice Response) systems. While IVR relies on pre-recorded menus and limited options, AI Voice Agents use natural language understanding to have genuine conversations with customers. They can understand context, handle complex queries, learn from interactions, and provide personalized responses. AI Voice Agents offer a more natural, efficient, and satisfying customer experience compared to the rigid menu-driven approach of traditional IVR systems."  {

  },    q: "Can the AI voice assistant handle multiple languages?",

  {    a: "Yes, our AI voice assistant supports multiple languages and can be configured to communicate in the languages your customers prefer. It can detect the customer's language automatically or be set to specific languages based on your business needs. The assistant maintains the same level of accuracy and understanding across different languages, ensuring consistent service quality for all your customers."

    id: 5,  },

    icon: "🚀",  {

    question: "Can AI Voice Agents make outbound calls for sales and appointments?",    q: "What is the difference between an AI Voice Agent and traditional IVR systems?",

    answer: "Yes, AI Voice Agents excel at making outbound calls for various purposes including sales outreach, appointment scheduling, follow-ups, reminders, and surveys. They can handle objections, answer questions, and even close deals or book appointments autonomously. Outbound AI Voice Agents work from your contact lists, respect calling preferences, and can adapt their approach based on the conversation. This enables businesses to scale their outreach efforts while maintaining personalized interactions."    a: "AI Voice Agents are significantly more advanced than traditional IVR (Interactive Voice Response) systems. While IVR relies on pre-recorded menus and limited options, AI Voice Agents use natural language understanding to have genuine conversations with customers. They can understand context, handle complex queries, learn from interactions, and provide personalized responses. AI Voice Agents offer a more natural, efficient, and satisfying customer experience compared to the rigid menu-driven approach of traditional IVR systems."

  },  },

  {  {

    id: 6,    q: "How much does an AI Voice Assistant platform cost?",

    icon: "🔒",    a: "Pricing for AI Voice Assistant platforms varies based on usage volume, features, and integration requirements. Most platforms offer flexible pricing models including per-minute usage, monthly subscriptions, or enterprise packages. Typical costs range from $0.05-$0.15 per minute for pay-as-you-go plans, or $500-$5000+ per month for subscription plans depending on call volume and features. Contact us for a customized quote based on your specific business needs and expected usage patterns."

    question: "Is the AI voice assistant secure for handling customer data?",  },

    answer: "Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, compliance with GDPR and industry standards, regular security audits, and strict data privacy protocols. All customer interactions are encrypted and stored securely, with access controls and monitoring systems in place. We ensure that sensitive information is protected and handled according to the highest security standards and regulatory requirements."  {

  },    q: "Can AI Voice Agents make outbound calls for sales and appointments?",

  {    a: "Yes, AI Voice Agents excel at making outbound calls for various purposes including sales outreach, appointment scheduling, follow-ups, reminders, and surveys. They can handle objections, answer questions, and even close deals or book appointments autonomously. Outbound AI Voice Agents work from your contact lists, respect calling preferences, and can adapt their approach based on the conversation. This enables businesses to scale their outreach efforts while maintaining personalized interactions."

    id: 7,  },

    icon: "🏢",  {

    question: "What industries benefit most from AI voice assistants?",    q: "How accurate is the speech recognition in AI Voice Assistants?",

    answer: "AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications. Any business that values customer interaction and support can leverage AI voice assistants to improve service quality, reduce costs, and enhance customer experience. The technology is particularly valuable for businesses with high call volumes, repetitive queries, or 24/7 support requirements."    a: "Modern AI Voice Assistants achieve 95-98% accuracy in speech recognition under normal conditions. Our platform uses advanced deep learning models trained on millions of conversations across various accents, dialects, and speaking styles. The system continuously improves through machine learning, adapting to your specific industry terminology and customer base. Accuracy can be affected by background noise, audio quality, and regional accents, but our AI is designed to handle these challenges effectively and request clarification when needed."

  },  },

  {  {

    id: 8,    q: "What analytics and reporting features are available?",

    icon: "🔧",    a: "Our AI Voice Assistant platform provides comprehensive analytics including call volume metrics, conversation duration, resolution rates, customer sentiment analysis, common query patterns, and agent performance scores. You can access real-time dashboards, generate detailed reports, track key performance indicators (KPIs), and export data for further analysis. Advanced features include conversation recordings, transcripts, heat maps of peak hours, customer satisfaction scores, and AI-driven insights to help optimize your customer service strategy."

    question: "Can the AI voice assistant integrate with existing business systems?",  },

    answer: "Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs. This ensures smooth data flow and enables the assistant to access relevant customer information, update records, and perform actions within your existing workflows. We provide comprehensive integration support and documentation to make the setup process as smooth as possible."  {

  },    q: "Can the AI Voice Agent transfer calls to human agents when needed?",

  {    a: "Absolutely. Our AI Voice Agents are designed with intelligent escalation capabilities. They can recognize when a query is too complex, when a customer requests human assistance, or when specific conditions are met that require human intervention. The transfer process is seamless, with all conversation context and customer information passed to the human agent, ensuring continuity and avoiding customer frustration. You can configure custom escalation rules based on keywords, sentiment, query type, or customer priority levels."

    id: 9,  },

    icon: "⚡",  {

    question: "How quickly can I set up and deploy an AI voice assistant?",    q: "How does the AI Voice Assistant learn and improve over time?",

    answer: "Setup time varies depending on your requirements and integrations, but most businesses can have a basic AI voice assistant running within 1-2 weeks. This includes initial configuration, training on your specific use cases, and basic integrations. More complex deployments with multiple integrations and custom features may take 2-4 weeks. We provide dedicated support throughout the setup process to ensure smooth deployment."    a: "Our AI Voice Assistant uses machine learning to continuously improve through several mechanisms: analyzing successful conversation patterns, learning from corrections and feedback, adapting to new vocabulary and industry terms, and identifying common customer intents. The system updates its knowledge base regularly, incorporates new training data, and refines its understanding based on real interactions. You can also manually train the AI on specific scenarios, upload custom responses, and review conversation logs to further enhance accuracy and effectiveness."

  },  },

  {  {

    id: 10,    q: "What happens if the AI Voice Agent encounters technical issues during a call?",

    icon: "📊",    a: "We have multiple safeguards in place to ensure service continuity. If technical issues occur, the system can automatically transfer to a backup server, route to a human agent, or provide customers with alternative contact methods. Our platform maintains 99.9% uptime with redundant infrastructure across multiple data centers. Real-time monitoring alerts our team to any issues, and we have automated recovery protocols. Additionally, all conversations are logged, so no customer interaction is lost, and follow-up can be conducted if needed."

    question: "How accurate is the speech recognition in AI Voice Assistants?",  }

    answer: "Modern AI Voice Assistants achieve 95-98% accuracy in speech recognition under normal conditions. Our platform uses advanced deep learning models trained on millions of conversations across various accents, dialects, and speaking styles. The system continuously improves through machine learning, adapting to your specific industry terminology and customer base. Accuracy can be affected by background noise, audio quality, and regional accents, but our AI is designed to handle these challenges effectively and request clarification when needed."]

  },

  {export default function FAQPage() {

    id: 11,  return (

    icon: "🌍",    <main className="py-20 px-4 sm:px-6 lg:px-8">

    question: "Can the AI voice assistant handle multiple languages?",      <div className="max-w-4xl mx-auto">

    answer: "Yes, our AI voice assistant supports multiple languages and can be configured to communicate in the languages your customers prefer. It can detect the customer's language automatically or be set to specific languages based on your business needs. The assistant maintains the same level of accuracy and understanding across different languages, ensuring consistent service quality for all your customers."        <div className="text-center mb-12">

  },          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h1>

  {          <p className="text-gray-600 text-lg">Everything you need to know about AI voice assistants.</p>

    id: 12,        </div>

    icon: "📈",

    question: "What kind of support and maintenance is provided?",        {/* Accordion Style FAQ */}

    answer: "We offer comprehensive support including 24/7 technical assistance, regular system updates, performance monitoring, and continuous optimization. Our team provides training for your staff, handles system maintenance, and ensures the AI assistant stays updated with the latest features and security patches. We also offer analytics and reporting to help you track performance and identify areas for improvement."        <div className="mb-12">

  }          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Quick Answers</h2>

]          <Accordion type="single" collapsible className="w-full space-y-4">

            {faqs.map((faq, idx) => (

export default function FAQPage() {              <AccordionItem key={`accordion-${idx}`} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6">

  return (                <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-sky-600">

    <>                  {faq.q}

      <Header />                </AccordionTrigger>

                      <AccordionContent className="text-gray-700 leading-relaxed">

      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">                  {faq.a}

        {/* Animated Background Elements */}                </AccordionContent>

        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">              </AccordionItem>

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full filter blur-3xl animate-float-slow"></div>            ))}

          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-float-reverse"></div>          </Accordion>

        </div>        </div>



        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">        {/* Individual FAQ Links */}

          {/* Header Section */}        <div>

          <div className="text-center mb-16">          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Detailed Pages</h2>

            <div className="inline-block mb-6">          <div className="grid gap-4">

              <Link             {faqs.map((faq, idx) => (

                href="/"              <Link 

                className="text-purple-300 hover:text-white transition-colors flex items-center gap-2"                key={`link-${idx}`} 

              >                href={`/faq/${idx}`} 

                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">                className="flex border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-sky-200 transition-all duration-200 justify-between items-start group"

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />              >

                </svg>                <div>

                Back to Home                  <div className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">

              </Link>                    {faq.q}

            </div>                  </div>

                              <div className="text-gray-500 text-sm line-clamp-2">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">                    {faq.a.substring(0, 120)}...

              Frequently Asked <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Questions</span>                  </div>

            </h1>                </div>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto">                <div className="text-sky-600 font-medium text-sm whitespace-nowrap ml-4 mt-1">

              Everything you need to know about <span className="text-orange-400 font-semibold">AI Voice Agents</span> and <span className="text-purple-400 font-semibold">AI Voice Assistants</span>                  Read More →

            </p>                </div>

          </div>              </Link>

            ))}

          {/* FAQ Accordion */}          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">        </div>

            {faqs.map((faq) => (

              <details         {/* Contact Section */}

                key={faq.id}        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">

                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 overflow-hidden"          <h3 className="text-xl font-semibold mb-3 text-gray-900">Still have questions?</h3>

              >          <p className="text-gray-600 mb-6">Can't find what you're looking for? Get in touch with our team.</p>

                <summary className="cursor-pointer p-6 flex items-center justify-between list-none hover:bg-white/5 transition-colors">          <Link 

                  <div className="flex items-center gap-4 flex-1">            href="/contact"

                    <span className="text-3xl">{faq.icon}</span>            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"

                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">          >

                      {faq.question}            Contact Support

                    </h3>          </Link>

                  </div>        </div>

                  <svg       </div>

                    className="w-6 h-6 text-purple-400 transform transition-transform group-open:rotate-180"     </main>

                    fill="none"   )

                    stroke="currentColor" }
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 leading-relaxed pl-12">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:border-orange-400 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl">Our AI experts are here to help you find the perfect solution for your business</p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-xl shadow-2xl hover:shadow-orange-400 transition-all duration-300 hover:scale-105 border-2 border-white/20"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
