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
      
      <main id="main-content" className="min-h-screen" role="main">
        <Hero />
        
        {/* AI Voice Agent Features Section - ASO Optimized */}
        <section className="py-20 bg-white/70 backdrop-blur-sm" role="region" aria-labelledby="features-heading">
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
              <article className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Our AI Voice Agents understand context, sentiment, and intent with industry-leading 
                  natural language processing capabilities for human-like conversations that feel authentic and engaging.
                </p>
              </article>
              
              <article className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">24/7 Availability</h3>
                <p className="text-gray-600">
                  AI Voice Agents never sleep. Provide round-the-clock customer support, 
                  handle inquiries instantly, and ensure no customer is left waiting, day or night.
                </p>
              </article>
              
              <article className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
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
        <section className="py-20 bg-linear-to-b from-gray-50/50 to-white/70 backdrop-blur-sm" role="region" aria-labelledby="voice-search-heading">
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
                  <div className="md:w-1/2 bg-blue-50/70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-blue-100/50">
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
                  <div className="md:w-1/2 bg-green-50/70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-green-100/50">
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

        {/* AI Voice Assistant Platform Features - Business Automation */}
        <section className="py-20 bg-linear-to-br from-sky-50/70 via-blue-50/50 to-indigo-50/70 backdrop-blur-sm" role="region" aria-labelledby="ai-voice-assistant-platform">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16">
                <h2 id="ai-voice-assistant-platform" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Our <span className="text-sky-600">AI Voice Assistant</span> Platform?
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Unlike human receptionists who sleep, get sick, and take breaks, our <strong>AI voice assistants never stop working</strong>. 
                  Get complete business call automation with detailed analytics and personal dashboard insights.
                </p>
              </header>

              {/* Platform Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">🤖 24/7 AI Availability</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Never Sleeps</strong> - 24/7/365 availability</li>
                    <li>✓ <strong>Never Gets Sick</strong> - 99.9% uptime guarantee</li>
                    <li>✓ <strong>Never Takes Breaks</strong> - Continuous operation</li>
                    <li>✓ <strong>Instant Response</strong> - &lt;750ms latency</li>
                    <li>✓ <strong>Multi-Language</strong> - 50+ language support</li>
                    <li>✓ <strong>Unlimited Calls</strong> - Handle thousands simultaneously</li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">� Analytics Dashboard</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Real-Time Call Analytics</li>
                    <li>✓ Customer Satisfaction Metrics</li>
                    <li>✓ Conversion Rate Tracking</li>
                    <li>✓ Peak Hours Analysis</li>
                    <li>✓ Revenue Attribution</li>
                    <li>✓ Custom Business Reports</li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">🎯 Business Automation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Automated Appointment Booking</li>
                    <li>✓ Lead Qualification & Routing</li>
                    <li>✓ Customer Support Automation</li>
                    <li>✓ Order Processing & Tracking</li>
                    <li>✓ CRM Integration</li>
                    <li>✓ Follow-up Automation</li>
                  </ul>
                </div>
              </div>

              {/* Voice Search FAQ for Website Developer India */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  Frequently Asked Questions - AI Voice Assistant Platform
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: How is an AI voice assistant different from human receptionists?
                      </h4>
                      <p className="text-gray-700">
                        <strong>A:</strong> Unlike human receptionists who sleep, get sick, and take breaks, 
                        our AI voice assistants work 24/7/365 with 99.9% uptime. They provide instant responses, 
                        handle unlimited calls simultaneously, and include detailed analytics dashboard.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: What analytics do I get with the AI voice assistant platform?
                      </h4>
                      <p className="text-gray-700">
                        <strong>A:</strong> You get real-time call analytics, customer satisfaction scores, 
                        conversion tracking, peak hours analysis, revenue attribution, and personalized 
                        business insights through an intuitive dashboard.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: Can the AI voice assistant integrate with my existing business systems?
                      </h4>
                      <p className="text-gray-700">
                        <strong>A:</strong> Yes! Our AI voice assistants seamlessly integrate with CRM systems, 
                        appointment booking software, e-commerce platforms, and most business tools 
                        through APIs and webhooks.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: Does the AI voice assistant support multiple languages?
                      </h4>
                      <p className="text-gray-700">
                        <strong>A:</strong> Absolutely! Our AI voice assistants support 50+ languages including 
                        English, Spanish, French, German, Hindi, Mandarin, and many more with natural 
                        accent recognition and culturally appropriate responses.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: How quickly can I deploy an AI voice assistant for my business?
                      </h4>
                      <p className="text-gray-700">
                        <strong>A:</strong> Ready-to-use templates: 5 minutes. Custom configurations: 1-2 hours. 
                        Complex integrations: 1-3 days. We offer rapid deployment with our pre-built 
                        industry-specific templates and guided setup process.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: What's included in the personal analytics dashboard?
                      </h4>
                      <p className="text-gray-700">
                        <strong>A:</strong> Your personal dashboard includes call volume trends, customer satisfaction 
                        metrics, conversion rates, revenue attribution, peak hour analysis, popular inquiries, 
                        and actionable business insights with export capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action for AI Voice Assistant Platform */}
              <div className="text-center mt-16">
                <div className="bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-3xl font-bold mb-4">
                    Ready for an AI Assistant That Never Sleeps? 🤖
                  </h3>
                  <p className="text-xl mb-6 text-sky-100">
                    Get your AI voice assistant up and running in minutes. 
                    Personal analytics dashboard included. 14-day free trial. No setup fees.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-white text-sky-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105">
                      � Start Free Trial
                    </button>
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all">
                      � View Demo Dashboard
                    </button>
                  </div>
                  <p className="text-sm text-sky-200 mt-4">
                    🤖 Never sleeps, never gets sick, never takes breaks | 📊 Personal analytics | 🚀 Free 14-day trial | 🎯 99.9% uptime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      
      <Footer />
    </>
  )
}
