import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { LeadForm } from "@/components/lead-form"

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
        
       

        {/* Voice Search Optimized Content - VSO */}
        <section className="py-20 bg-linear-to-b from-gray-50/50 to-white/70 backdrop-blur-sm" role="region" aria-labelledby="voice-search-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 id="voice-search-heading" className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
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
                <h2 id="ai-voice-assistant-platform" className="text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                  Why Choose Our <span className="bg-white/30 backdrop-blur-md rounded-lg px-2 py-1 text-sky-700 font-bold shadow-lg border border-sky-200/40">AI Voice Assistant</span> Platform?
                </h2>
                <p className="text-xl max-w-4xl mx-auto leading-relaxed bg-white/40 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-sky-200/30 text-sky-700 font-semibold">
                  Unlike human receptionists who sleep, get sick, and take breaks, our <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">AI voice assistants never stop working</span>. 
                  Get complete business call automation with <span className="font-semibold text-sky-600">detailed analytics</span> and <span className="font-semibold text-sky-600">personal dashboard insights</span>.
                </p>
              </header>

              {/* Platform Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 border-l-4 border-sky-500 pl-3">24/7 AI Availability</h3>
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
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 border-l-4 border-blue-500 pl-3">Analytics Dashboard</h3>
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
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-3">Business Automation</h3>
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
            </div>
          </div>
        </section>

        {/* Lead Form Component */}
        <LeadForm />

        {/* Modern CTA Component */}
        <CTA />
        
      </main>
      
      <Footer />
    </>
  )
}
