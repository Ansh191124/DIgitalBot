"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle,
  Clock,
  Phone,
  PhoneCall,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LeadsPage() {
  const features = [
    {
      icon: <Brain className="w-5 h-5 text-black" />,
      title: "AI Lead Scoring",
      description: "Machine learning analyzes 50+ data points to qualify and score leads based on conversion likelihood.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-black" />,
      title: "Call Analytics",
      description: "AI-powered call transcription, sentiment analysis, and intent detection reveal purchase signals instantly.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-black" />,
      title: "Predictive Analytics",
      description: "Forecast conversions, identify at-risk leads, and optimize sales performance with AI insights.",
      image: "https://images.unsplash.com/photo-1551434678-efb963407044?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="w-5 h-5 text-black" />,
      title: "Smart Routing",
      description: "Automatically route hot leads to the right sales agents using AI-powered distribution.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-cyan-400" />,
      title: "3x More Qualified Leads",
      description: "AI identifies high-converting prospects",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Clock className="w-10 h-10 text-cyan-400" />,
      title: "Save 20+ Hours Weekly",
      description: "Automated lead scoring",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-cyan-400" />,
      title: "47% Higher Close Rate",
      description: "Focus on best opportunities",
      image: "https://images.unsplash.com/photo-1551434678-efb963407044?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Better Team Performance",
      description: "AI-powered insights",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
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
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500 rounded-full opacity-8 animate-pulse blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-36 h-36 bg-cyan-400 rounded-full opacity-8 animate-pulse blur-xl delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-300 rounded-full opacity-6 animate-pulse blur-xl delay-500"></div>
      </div>
      
      <Header />

      <main className="flex-1 relative z-10">

        {/* HERO SECTION */}
        <section className="px-4 text-center mt-16 mb-12 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/20 text-cyan-300 font-semibold text-xs mb-4 uppercase tracking-widest" style={{
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
          }}>
            <Sparkles className="w-3 h-3" />
            AI-Powered Lead Intelligence
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight uppercase tracking-wider">
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-transparent bg-clip-text" style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}>
              Convert More Leads
            </span>
            <br />
            <span className="text-white" style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
            }}>With AI Intelligence</span>
          </h1>

          <p className="text-white text-sm sm:text-base max-w-3xl mx-auto mb-6 leading-relaxed">
            Transform your sales process with <strong className="text-cyan-400">AI lead scoring and qualification</strong> that captures every opportunity. 
            Increase conversions by <strong className="text-cyan-400">3x</strong> and save <strong className="text-cyan-400">20+ hours weekly</strong>.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <Link
              href="/signup?service=lead"
              className="group inline-flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 text-sm font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
              }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent text-cyan-400 px-6 py-3 text-sm font-bold border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              Watch Demo
              <Phone className="w-4 h-4" />
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-white mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }} /> 
              <span className="font-medium uppercase tracking-wider">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }} /> 
              <span className="font-medium uppercase tracking-wider">14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }} /> 
              <span className="font-medium uppercase tracking-wider">24/7 Support</span>
            </div>
          </div>


        </section>

        {/* MAIN CONTENT WITH IMAGE */}
        <section className="px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT: FEATURES */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/20 text-cyan-300 font-semibold text-xs mb-4 uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <Bot className="w-3 h-3 animate-pulse" />
                AI That Never Stops
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}>
                Intelligent Lead Management
                <br />
                <span className="text-white">Powered By Advanced AI</span>
              </h2>
              
              <p className="text-sm sm:text-base text-white leading-relaxed mb-6">
                Discover leads with <strong className="text-cyan-400">the highest conversion potential</strong> using AI that analyzes behavior, engagement, and buying signals automatically.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-cyan-400/30 p-3 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    <Brain className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-400 text-sm mb-1 uppercase tracking-wider">Smart Lead Scoring</h4>
                    <p className="text-white text-xs leading-relaxed">AI ranks leads by conversion probability automatically</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-cyan-400/30 p-3 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    <PhoneCall className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-400 text-sm mb-1 uppercase tracking-wider">Call Intelligence</h4>
                    <p className="text-white text-xs leading-relaxed">Real-time transcription and sentiment analysis</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-cyan-400/30 p-3 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-400 text-sm mb-1 uppercase tracking-wider">Predictive Analytics</h4>
                    <p className="text-white text-xs leading-relaxed">Forecast conversions and identify at-risk leads</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-xl shadow-cyan-400/20 mt-6" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-cyan-400 border border-black flex items-center justify-center text-black font-bold text-xs" style={{
                      clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
                    }}>SC</div>
                    <div className="w-6 h-6 bg-cyan-400 border border-black flex items-center justify-center text-black font-bold text-xs" style={{
                      clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
                    }}>MJ</div>
                    <div className="w-6 h-6 bg-cyan-400 border border-black flex items-center justify-center text-black font-bold text-xs" style={{
                      clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
                    }}>ER</div>
                  </div>
                  <div>
                    <div className="font-bold text-cyan-400 text-sm uppercase tracking-wider">10,000+ Businesses</div>
                    <div className="text-xs text-white">Transforming lead management</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" style={{ filter: 'drop-shadow(0 0 3px rgba(0, 255, 255, 0.6))' }} />
                    ))}
                  </div>
                  <span className="text-xs text-white font-medium uppercase tracking-wider">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl border border-cyan-400/30" style={{
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="AI lead management dashboard"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full filter contrast-125 brightness-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black/20 to-cyan-800/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* FLOATING STATS */}
              <div className="absolute -bottom-4 -left-3 bg-black/80 backdrop-blur-md border border-cyan-400/50 p-3 shadow-xl shadow-cyan-400/30" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                  }}>
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyan-400">47%</div>
                    <div className="text-xs text-white uppercase">Higher Close Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-black/80 backdrop-blur-md border border-cyan-400/50 p-3 shadow-xl shadow-cyan-400/30" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                  }}>
                    <Clock className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyan-400">20+</div>
                    <div className="text-xs text-white uppercase">Hours Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4 relative">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 uppercase tracking-wider" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Proven Results That
                <br />
                <span className="text-white">Speak for Themselves</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-2xl mx-auto">
                Join thousands of businesses experiencing the power of <strong className="text-cyan-400">AI-driven lead intelligence</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}>
                  {/* Image */}
                  <div className="relative w-full h-24 mb-3 overflow-hidden border border-cyan-400/30" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                  }}>
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover filter contrast-125 brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 to-black/20"></div>
                  </div>
                  
                  <div className="flex justify-center mb-3" style={{
                    filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))'
                  }}>
                    {benefit.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">{benefit.title.split(' ')[0]}</div>
                  <div className="text-white font-medium text-xs uppercase tracking-wider">{benefit.title.split(' ').slice(1).join(' ')}</div>
                  <div className="text-white/80 text-xs mt-1">{benefit.description}</div>
                </div>
              ))}
            </div>
            
            {/* CYBERPUNK BADGE */}
            <div className="flex justify-center mt-8">
              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/50 px-4 py-3 shadow-lg shadow-cyan-400/20" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" style={{ filter: 'drop-shadow(0 0 3px rgba(0, 255, 255, 0.6))' }} />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">Rated #1 AI Lead Platform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/20 text-cyan-300 font-semibold text-xs mb-4 uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <Sparkles className="w-3 h-3" />
                Complete AI Solution
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}>
                Everything You Need to
                <br />
                <span className="text-white">Qualify & Convert Leads</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed">
                Powerful AI-driven features designed to capture every opportunity and maximize your conversion rates
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}>
                  {/* Image */}
                  <div className="relative w-full h-32 mb-4 overflow-hidden border border-cyan-400/30" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                  }}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover filter contrast-125 brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 to-black/20"></div>
                  </div>
                  
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mb-3" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-cyan-400 text-sm mb-2 uppercase tracking-wider">
                    {feature.title}
                  </h3>
                  <p className="text-white text-xs leading-relaxed mb-2">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(0, 255, 255, 0.8)' }}></div>
                    AI Powered
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 uppercase tracking-wider" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Why Leaders Choose
                <br />
                <span className="text-white">AI Lead Intelligence</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl mx-auto">
                Join thousands transforming their sales with <strong className="text-cyan-400">proven AI technology</strong>
              </p>
            </div>

            {/* TESTIMONIAL */}
            <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-6 shadow-xl shadow-cyan-400/20 mb-12" style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" style={{ filter: 'drop-shadow(0 0 3px rgba(0, 255, 255, 0.6))' }} />
                ))}
              </div>
              <p className="text-sm sm:text-base text-white mb-4 leading-relaxed italic">
                "Our conversion rate jumped <strong className="text-cyan-400">47% in the first month</strong>. The AI lead scoring is incredibly accurate and helped us focus on the right prospects."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center text-black font-bold text-sm" style={{
                  clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                }}>
                  SC
                </div>
                <div>
                  <p className="font-bold text-cyan-400 text-sm uppercase tracking-wider">Sarah Chen</p>
                  <p className="text-white text-xs">Head of Sales, TechFlow Inc</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 uppercase tracking-wider" style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}>
              Ready to Transform
              <br />
              <span className="text-white">Your Lead Process?</span>
            </h2>
            <p className="text-sm sm:text-base text-white mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses capturing more revenue with <strong className="text-cyan-400">AI lead intelligence</strong>
            </p>
            
            <Link
              href="/signup?service=lead"
              className="inline-flex items-center gap-3 bg-cyan-400 text-black px-8 py-4 text-sm font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-widest mb-6" style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
              }}
            >
              Get Started With AI Leads
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-white text-xs mb-8 uppercase tracking-wider">
              ✓ Free 14-day trial • ✓ No credit card • ✓ 24/7 support
            </p>

            <div className="border-t border-cyan-400/30 pt-8">
              <p className="text-white text-xs leading-relaxed uppercase tracking-wider">
                Powered by <strong className="text-cyan-400">DigitalBot.ai</strong> — delivering intelligent lead solutions
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
