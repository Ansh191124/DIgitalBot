import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="min-h-screen bg-background" role="main">
        <Hero />
        
        {/* AI Voice Agent Features Section - ASO Optimized */}
        <section className="py-20 bg-white" role="region" aria-labelledby="features-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Voice Agent Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of conversational AI with our advanced AI Voice Agent technology. 
                Built for businesses that demand intelligent, scalable customer engagement solutions.
              </p>
            </header>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Our AI Voice Agents understand context, sentiment, and intent with industry-leading 
                  natural language processing capabilities for human-like conversations that feel authentic and engaging.
                </p>
              </article>
              
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">24/7 Availability</h3>
                <p className="text-gray-600">
                  AI Voice Agents never sleep. Provide round-the-clock customer support, 
                  handle inquiries instantly, and ensure no customer is left waiting, day or night.
                </p>
              </article>
              
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Scalable Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate AI Voice Agents with your existing CRM, helpdesk, 
                  and business systems for unified customer data and intelligent workflow automation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Voice Search Optimized Content - VSO */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white" role="region" aria-labelledby="voice-search-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 id="voice-search-heading" className="text-3xl font-bold text-center mb-12 text-gray-900">
                How AI Voice Agents Transform Customer Experience
              </h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      What makes AI Voice Agents different from chatbots?
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Unlike traditional chatbots, AI Voice Agents process spoken language naturally, 
                      understand emotional context, maintain conversation flow, and provide responses 
                      through natural speech synthesis. This creates more engaging, accessible customer interactions 
                      that feel authentically human and build stronger connections with your customers.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-blue-50 p-8 rounded-xl shadow-sm">
                    <p className="text-blue-900 font-medium text-lg mb-3">
                      "Our AI Voice Agent increased customer satisfaction by 40% and reduced 
                      support costs by 60% within the first quarter."
                    </p>
                    <cite className="text-blue-700 text-sm not-italic">— Fortune 500 Customer Success Story</cite>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse items-start gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      How quickly can businesses deploy AI Voice Agents?
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Our AI Voice Agent platform enables rapid deployment within days, not months. 
                      Pre-built templates, intuitive drag-and-drop conversation builders, and seamless API integrations 
                      accelerate time-to-market while maintaining enterprise-grade security, reliability, and compliance standards.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-green-50 p-8 rounded-xl shadow-sm">
                    <p className="text-green-900 font-medium text-lg">
                      Deploy production-ready AI Voice Agents in as little as 3 days with 
                      our enterprise onboarding program and dedicated technical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for Featured Snippets - ASO */}
        <section className="py-20 bg-slate-50" role="region" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions About AI Voice Agents
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">What is an AI Voice Agent?</h3>
                <p className="text-gray-700 leading-relaxed">
                  An AI Voice Agent is an intelligent conversational assistant that uses advanced natural language processing, 
                  speech recognition, and machine learning to communicate with customers through voice interactions. 
                  Our AI Voice Agents can handle customer service inquiries, process orders, schedule appointments, 
                  answer questions, and provide personalized support 24 hours a day, 7 days a week.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">How does AI Voice Agent technology work?</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI Voice Agents combine multiple cutting-edge technologies: speech-to-text conversion for understanding spoken input, 
                  natural language understanding for interpreting context and intent, machine learning for continuous improvement,
                  contextual processing for maintaining conversation coherence, intelligent response generation, 
                  and text-to-speech synthesis for natural voice output. This creates seamless, human-like conversations 
                  that understand customer needs and provide relevant, helpful responses in real-time.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">What are the benefits of using AI Voice Agents for business?</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI Voice Agents reduce operational costs by up to 80%, provide 24/7 customer support without breaks, 
                  handle unlimited simultaneous conversations, dramatically improve response times from minutes to seconds, 
                  increase customer satisfaction scores, and free up human agents to focus on complex, high-value tasks. 
                  They also provide consistent service quality, can be integrated with existing business systems, 
                  and offer valuable conversation analytics for business intelligence.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Can AI Voice Agents replace human customer service representatives?</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI Voice Agents excel at handling routine inquiries, frequently asked questions, order processing, 
                  appointment scheduling, and basic troubleshooting with speed and accuracy. They work best alongside human agents 
                  in a hybrid model, handling high-volume repetitive tasks while intelligently escalating complex issues, 
                  sensitive matters, or emotionally charged situations to human representatives. 
                  This collaborative approach maximizes efficiency, reduces wait times, and ensures optimal customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
