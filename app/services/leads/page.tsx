"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { 
  BarChart3, Brain, PhoneCall, TrendingUp, CheckCircle, 
  Target, Zap, Award, Users, MessageSquare,
  ArrowRight, Star, Shield, Clock, ChevronRight, Sparkles
} from "lucide-react";

export default function LeadsPage() {

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-orange-600 mb-4" />,
      title: "AI Lead Scoring & Qualification",
      description: "Advanced machine learning analyzes 50+ data points to qualify and score leads based on engagement, behavior, sentiment, and conversion likelihood."
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-orange-600 mb-4" />,
      title: "Call Analytics & Transcription",
      description: "AI-powered call transcription, sentiment analysis, intent detection, and keyword extraction to reveal real purchase signals instantly."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />,
      title: "Predictive Lead Analytics",
      description: "Predict future conversions, identify at-risk leads, and optimize sales performance with powerful predictive AI insights."
    },
    {
      icon: <Target className="w-12 h-12 text-orange-600 mb-4" />,
      title: "Smart Lead Routing",
      description: "Automatically route hot leads to the right sales agents using AI that understands performance, availability, and lead category."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-600 mb-4" />,
      title: "Multi-Channel Lead Tracking",
      description: "Track leads from phone calls, SMS, email, chats, forms, and social media. One unified timeline for each customer."
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-600 mb-4" />,
      title: "Instant Lead Alerts",
      description: "Real-time alerts when hot leads engage, call, or show strong buying signals. Never miss an opportunity again."
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "3x Higher Conversions",
      description: "Businesses using AI lead scoring average 3x more conversions."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "70% Time Savings",
      description: "Automate lead qualification and reduce manual tasks."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "500+ Leads Per Campaign",
      description: "Analyze and manage bulk leads effortlessly at scale."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Real-Time Dashboards",
      description: "Monitor performance metrics, lead quality and call insights instantly."
    }
  ];

  const useCases = [
    {
      title: "B2B Sales Teams",
      description: "Prioritize enterprise leads, qualify prospects, and speed up long sales cycles.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Call Centers",
      description: "Analyze thousands of calls daily and improve agent performance.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real Estate Agencies",
      description: "Score property inquiries, track showing requests, and close more deals.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-commerce Brands",
      description: "Identify buyers, reduce drop-offs, and personalize follow-ups.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales - TechCorp",
      content: "Our conversions jumped 250% after switching to AI scoring. Absolute game changer.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Director - GrowthLabs",
      content: "Call analytics helped us uncover buyer signals we never noticed before.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO - StartupHub",
      content: "Managing 500+ leads used to be chaos. Now everything is automated and organized.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-orange-50/40 to-white">
      
      <Header />

      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="px-6 md:px-10 text-center max-w-7xl mx-auto mt-32 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Lead Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-800 text-transparent bg-clip-text">
              Convert More Leads
            </span>
            <br />
            <span className="text-gray-800">Using Real-Time AI Insights</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
            Analyze <strong>500+ customer calls</strong> per campaign, identify high-intent buyers,
            and close deals 3× faster with predictive AI analytics.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/signup?service=lead"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#demo"
              className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-orange-300 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
            >
              Watch Demo
              <PhoneCall className="w-5 h-5" />
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-600" /> No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-600" /> 14-Day Free Trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-600" /> Cancel Anytime
            </div>
          </div>

        {/* HERO CONTENT WITH IMAGE */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                alt="AI-powered lead management dashboard showing real-time analytics"
                width={1400}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Right - Key Benefits */}
            <div className="space-y-6 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Transform Your Sales Pipeline With AI
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-white p-4 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Intelligent Lead Scoring</h3>
                    <p className="text-gray-600 text-sm">Machine learning algorithms automatically rank leads by conversion probability, helping your team focus on high-value opportunities first.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-white p-4 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Real-Time Call Intelligence</h3>
                    <p className="text-gray-600 text-sm">Advanced speech analytics transcribe and analyze customer conversations, detecting buying signals, sentiment shifts, and objection patterns instantly.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-white p-4 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Predictive Sales Analytics</h3>
                    <p className="text-gray-600 text-sm">Forecast conversion likelihood, identify churn risks early, and receive AI-driven recommendations to optimize your entire sales funnel performance.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-white p-4 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Enterprise-Grade Security</h3>
                    <p className="text-gray-600 text-sm">Bank-level encryption, SOC 2 Type II compliance, and GDPR-ready data protection ensure your customer information stays completely secure.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/signup?service=lead"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="bg-gradient-to-b from-orange-50/40 to-white py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Top Companies Choose AI Lead Analysis
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Boost conversions, empower your team, and automate your sales pipeline
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-orange-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-xl text-orange-700 text-center mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Powerful AI Features Built for Growth
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Everything you need to qualify, analyze, and convert leads with AI automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-white rounded-3xl border-2 border-orange-200 shadow-md hover:border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>

                  <h3 className="font-bold text-xl text-orange-700 text-center mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 text-center">
                    <button className="text-orange-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gradient-to-b from-white via-orange-50/40 to-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                How AI Lead Analysis Works
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Four simple steps to transform your lead process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Steps */}
              <div className="space-y-10">

                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Import Your Leads</h3>
                    <p className="text-gray-600">
                      Upload leads instantly via CSV, CRM integration, or APIs — including HubSpot, Salesforce, Zoho, and more.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">AI Analyzes Calls</h3>
                    <p className="text-gray-600">
                      Powerful AI transcribes, analyzes sentiment, identifies objections, and detects buying intent.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Get Smart Insights</h3>
                    <p className="text-gray-600">
                      Receive instant lead scores, next-best-actions, behavioral predictions, and follow-up recommendations.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Close More Deals</h3>
                    <p className="text-gray-600">
                      Prioritize ready-to-buy leads and accelerate your sales pipeline with AI assistance.
                    </p>
                  </div>
                </div>

              </div>

              {/* Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="AI Lead Analysis"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Built For Every Industry
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                AI-powered lead management tailored for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">{useCase.title}</h3>
                    <p className="text-sm">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Loved By Teams Worldwide
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                See how AI lead intelligence boosted conversions and productivity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border-2 border-orange-100 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-orange-100">Active Users</div>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">5M+</div>
              <div className="text-orange-100">Calls Analyzed</div>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <div className="text-orange-100">Conversion Growth</div>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-orange-100">Uptime</div>
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 md:px-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready To Transform Your Lead Process?
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Start qualifying leads automatically, boost conversions, and grow faster with AI.
          </p>

          <Link
            href="/signup?service=lead"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 mb-6"
          >
            Start Your Free Trial
            <ArrowRight className="w-6 h-6" />
          </Link>

          <p className="text-sm text-gray-500">
            No credit card needed • 14-day free trial • Cancel anytime
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              {/* Q1 */}
              <details className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <summary className="text-lg font-semibold flex justify-between cursor-pointer">
                  How does AI lead scoring work?
                  <ChevronRight className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600">
                  AI evaluates 50+ data points (call sentiment, duration, keywords, engagement patterns)
                  and assigns a quality score for each lead.
                </p>
              </details>

              {/* Q2 */}
              <details className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <summary className="text-lg font-semibold flex justify-between cursor-pointer">
                  Can it analyze bulk leads?
                  <ChevronRight className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — analyze 500+ calls per campaign with real-time scoring and insights.
                </p>
              </details>

              {/* Q3 */}
              <details className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <summary className="text-lg font-semibold flex justify-between cursor-pointer">
                  What CRM integrations are available?
                  <ChevronRight className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600">
                  Salesforce, HubSpot, Zoho, Pipedrive, and custom API integrations.
                </p>
              </details>

              {/* Q4 */}
              <details className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <summary className="text-lg font-semibold flex justify-between cursor-pointer">
                  Is my data secure?
                  <ChevronRight className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600">
                  Fully encrypted, SOC 2 certified, GDPR compliant, and HIPAA-ready.
                </p>
              </details>

              {/* Q5 */}
              <details className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <summary className="text-lg font-semibold flex justify-between cursor-pointer">
                  How fast can I start?
                  <ChevronRight className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600">
                  Setup in 5 minutes. Import leads → AI does the rest.
                </p>
              </details>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
