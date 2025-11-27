"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, CheckCircle, Zap, Users, TrendingUp, Phone, MessageSquare, Bell, BarChart3, Star, ArrowRight } from "lucide-react";

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">AI-Powered Scheduling • Save 15+ Hours/Week</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-transparent bg-clip-text">
                  Automated Appointment
                </span>
                <br />
                <span className="text-slate-900">Booking That Never Sleeps</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your scheduling with intelligent AI voice automation. Book, confirm, and manage appointments 24/7 while you focus on growing your business. No more missed calls, double bookings, or scheduling headaches.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/signup?service=appointment"
                  className="group bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center gap-2 text-lg"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#demo"
                  className="bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200 flex items-center gap-2 text-lg shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  See How It Works
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Setup in 3 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Hero Image & Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              {/* Left: Image */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Professional AI appointment scheduling system with calendar interface and automated booking"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">45%</div>
                      <div className="text-sm text-slate-600">More Bookings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Your Virtual Receptionist That Works 24/7
                </h3>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Imagine having a professional receptionist who never takes a break, never calls in sick, and handles every appointment request with perfect accuracy. That's what our AI appointment system delivers.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 bg-white p-4 rounded-xl border-2 border-orange-100 shadow-sm">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Instant Call Answering</h4>
                      <p className="text-slate-600 text-sm">Pick up every call in under 750ms with natural voice conversations that feel human</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-4 rounded-xl border-2 border-orange-100 shadow-sm">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Smart Scheduling Logic</h4>
                      <p className="text-slate-600 text-sm">Automatically finds the best available time slots and prevents double bookings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-4 rounded-xl border-2 border-orange-100 shadow-sm">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Zero No-Shows</h4>
                      <p className="text-slate-600 text-sm">Automated reminders via whatsapp and email reduce missed appointments by 40%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">JD</div>
                      <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">SM</div>
                      <div className="w-10 h-10 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">AK</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">500+ Businesses</div>
                      <div className="text-sm text-slate-600">Already automated their scheduling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-orange-100">Always Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-orange-100">Fewer No-Shows</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-orange-100">More Bookings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-orange-100">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Everything You Need to <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-transparent bg-clip-text">Automate Scheduling</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Powerful features designed to capture every booking opportunity and deliver exceptional customer experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  24/7 Appointment Booking
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Never miss a booking opportunity. Our AI voice assistant answers calls instantly, day or night, capturing appointments while your competitors sleep. Perfect for medical practices, salons, and service businesses.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  Smart Calendar Sync
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Eliminate double bookings forever. Real-time integration with Google Calendar, Outlook, and Calendly ensures accurate availability. Automatic conflict detection and resolution keeps your schedule perfect.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  Automated Reminders
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Cut no-shows by 40% with intelligent SMS and email reminders. Customizable timing, personalized messages, and confirmation requests ensure customers remember their appointments without manual follow-up.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  Natural Voice AI
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Conversations that feel human, not robotic. Our AI understands context, handles interruptions, and speaks naturally with sub-750ms response time. Supports 50+ languages for diverse customer bases.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  Unlimited Capacity
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Handle thousands of appointment requests simultaneously during peak hours. No busy signals, no hold times, no frustrated customers. Scale infinitely without hiring additional staff.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  Real-Time Analytics
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Track booking rates, peak hours, customer satisfaction, and revenue attribution instantly. Data-driven insights help optimize your scheduling strategy and identify growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-800">Customer Success Story</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  See the AI in Action
                </h2>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Watch how our intelligent appointment system handles real customer calls with natural conversation, instant booking confirmation, and automatic follow-up—all without human intervention.
                </p>

                <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium mb-1">Customer Call:</p>
                      <p className="text-slate-600 italic">"Hi, I need to schedule a dentist appointment for next Tuesday afternoon around 2 PM."</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 pl-4 border-l-2 border-orange-300">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium mb-1">AI Assistant:</p>
                      <p className="text-slate-600">"Perfect! I have 2:00 PM and 3:30 PM available on Tuesday, December 3rd. Which time works better for you?"</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">Booking confirmed in 45 seconds • Reminder sent automatically</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                    alt="AI voice assistant dashboard showing appointment analytics and booking management interface"
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Businesses Choose <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-transparent bg-clip-text">Automated Booking</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join thousands of businesses saving time and capturing more revenue with intelligent appointment automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "No human errors — fully automated scheduling with 99.9% accuracy" },
                { icon: CheckCircle, text: "Handles unlimited customers simultaneously without delays" },
                { icon: CheckCircle, text: "Reduces missed appointments by 40% with smart reminders" },
                { icon: CheckCircle, text: "Increases booking rate 3x by answering instantly, 24/7" },
                { icon: CheckCircle, text: "Saves 15+ staff hours per week on phone scheduling" },
                { icon: CheckCircle, text: "Reduces operational costs by 60% compared to human staff" },
                { icon: CheckCircle, text: "Multi-language support serves diverse customer bases" },
                { icon: CheckCircle, text: "Integrates seamlessly with existing business tools" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-200">
                  <benefit.icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-lg leading-relaxed">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-10 text-white shadow-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "We went from missing 30% of after-hours calls to capturing every single booking opportunity. Our appointment volume increased by 45% in the first month, and our front desk team can now focus on in-person customer service instead of answering phones all day."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  SB
                </div>
                <div>
                  <p className="font-bold text-lg">Sarah Bennett</p>
                  <p className="text-orange-100">Practice Manager, Bright Smile Dental</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Appointments?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses saving time and capturing more revenue with AI appointment scheduling. Start your free 14-day trial today—no credit card required.
            </p>
            
            <Link
              href="/signup?service=appointment"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 mb-6"
            >
              Get Started With Appointment Booking
              <ArrowRight className="w-6 h-6" />
            </Link>
            
            <p className="text-slate-400 text-sm">
              ✓ Free 14-day trial &nbsp;•&nbsp; ✓ Setup in 3 days &nbsp;•&nbsp; ✓ Cancel anytime &nbsp;•&nbsp; ✓ No credit card required
            </p>

            <div className="mt-12 pt-12 border-t border-slate-700">
              <p className="text-slate-400 leading-relaxed">
                Boost your business productivity with a smart, automated scheduling system powered by <span className="text-orange-400 font-semibold">DigitalBot.ai</span> — designed to deliver a seamless booking experience for every customer, every time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}