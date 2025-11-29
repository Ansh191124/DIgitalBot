"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowRight, Award, Bell, Bot, Calendar, CheckCircle, Clock, Phone, Play, Sparkles, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentsPage() {
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
            AI-Powered Appointment Scheduling
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight uppercase tracking-wider">
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-transparent bg-clip-text" style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}>
              Never Miss Another
            </span>
            <br />
            <span className="text-white" style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
            }}>Appointment Again</span>
          </h1>

          <p className="text-cyan-300 text-sm sm:text-base max-w-3xl mx-auto mb-6 leading-relaxed">
            Transform your business with <strong className="text-cyan-400">24/7 AI appointment booking</strong> that captures every opportunity while you sleep. 
            No more <strong className="text-cyan-400">missed calls</strong>, no more scheduling chaos.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <Link
              href="/signup?service=appointment"
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
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-cyan-300 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }} /> 
              <span className="font-medium uppercase tracking-wider">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }} /> 
              <span className="font-medium uppercase tracking-wider">3-Day Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }} /> 
              <span className="font-medium uppercase tracking-wider">24/7 Support</span>
            </div>
          </div>

        </section>

        {/* CYBERPUNK UI OVERLAY */}
        <section className="px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT: AI RECEPTIONIST */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/20 text-cyan-300 font-semibold text-xs mb-4 uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <Bot className="w-3 h-3 animate-pulse" />
                AI That Never Sleeps
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-300 uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}>
                Your Virtual Receptionist
                <br />
                <span className="text-white">Works Around the Clock</span>
              </h2>
              
              <p className="text-sm sm:text-base text-cyan-300 leading-relaxed mb-6">
                Imagine having the world's most professional receptionist who <strong className="text-cyan-400">never takes breaks</strong>, never gets sick, and handles every conversation with perfect precision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-cyan-400/30 p-3 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-400 text-sm mb-1 uppercase tracking-wider">Lightning Response</h4>
                    <p className="text-cyan-300 text-xs leading-relaxed">Answers calls in under 750ms with natural conversations</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-cyan-400/30 p-3 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    <Calendar className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-400 text-sm mb-1 uppercase tracking-wider">Smart Scheduling</h4>
                    <p className="text-cyan-300 text-xs leading-relaxed">Prevents conflicts and optimizes calendar automatically</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-cyan-400/30 p-3 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                  }}>
                    <Bell className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-400 text-sm mb-1 uppercase tracking-wider">Zero No-Shows</h4>
                    <p className="text-cyan-300 text-xs leading-relaxed">Cuts missed appointments by 40% with smart reminders</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-xl shadow-cyan-400/20" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-cyan-400 border border-black flex items-center justify-center text-black font-bold text-xs" style={{
                      clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
                    }}>JD</div>
                    <div className="w-6 h-6 bg-cyan-400 border border-black flex items-center justify-center text-black font-bold text-xs" style={{
                      clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
                    }}>SM</div>
                    <div className="w-6 h-6 bg-cyan-400 border border-black flex items-center justify-center text-black font-bold text-xs" style={{
                      clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
                    }}>AK</div>
                  </div>
                  <div>
                    <div className="font-bold text-cyan-400 text-sm uppercase tracking-wider">1,000+ Businesses</div>
                    <div className="text-xs text-cyan-300">Already transformed their scheduling</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" style={{ filter: 'drop-shadow(0 0 3px rgba(0, 255, 255, 0.6))' }} />
                    ))}
                  </div>
                  <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* RIGHT: FUTURISTIC DASHBOARD */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl border border-cyan-400/30" style={{
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="AI appointment scheduling dashboard"
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
                    <div className="text-xl font-bold text-cyan-400">45%</div>
                    <div className="text-xs text-cyan-300 uppercase">More Bookings</div>
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
                    <div className="text-xl font-bold text-cyan-400">24/7</div>
                    <div className="text-xs text-cyan-300 uppercase">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CYBERPUNK STATS */}
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
              <p className="text-sm sm:text-base text-cyan-300 max-w-2xl mx-auto">
                Join thousands of businesses experiencing the power of <strong className="text-cyan-400">AI-driven appointment scheduling</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mx-auto mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                <div className="text-cyan-300 font-medium text-xs uppercase tracking-wider">Always Available</div>
                <div className="text-cyan-300/80 text-xs mt-1">Never miss a call</div>
              </div>
              
              <div className="text-center bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mx-auto mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Bell className="w-5 h-5 text-black" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">40%</div>
                <div className="text-cyan-300 font-medium text-xs uppercase tracking-wider">Fewer No-Shows</div>
                <div className="text-cyan-300/80 text-xs mt-1">Smart reminders work</div>
              </div>
              
              <div className="text-center bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mx-auto mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">3x</div>
                <div className="text-cyan-300 font-medium text-xs uppercase tracking-wider">More Bookings</div>
                <div className="text-cyan-300/80 text-xs mt-1">Capture every lead</div>
              </div>
              
              <div className="text-center bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mx-auto mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Award className="w-5 h-5 text-black" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">60%</div>
                <div className="text-cyan-300 font-medium text-xs uppercase tracking-wider">Cost Savings</div>
                <div className="text-cyan-300/80 text-xs mt-1">vs human staff</div>
              </div>
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
                  <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">Rated #1 AI Scheduling Platform</span>
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
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-300 uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}>
                Everything You Need to
                <br />
                <span className="text-white">Automate Scheduling</span>
              </h2>
              <p className="text-sm sm:text-base text-cyan-300 max-w-3xl mx-auto leading-relaxed">
                Powerful AI-driven features designed to capture every booking opportunity and deliver an exceptional customer experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-bold text-cyan-400 text-sm mb-2 uppercase tracking-wider">
                  24/7 Instant Booking
                </h3>
                <p className="text-cyan-300 text-xs leading-relaxed mb-2">
                  Never miss another opportunity. Our AI answers every call in milliseconds and converts visitors into customers automatically.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(0, 255, 255, 0.8)' }}></div>
                  Always Available
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-bold text-cyan-400 text-sm mb-2 uppercase tracking-wider">
                  Smart Calendar Sync
                </h3>
                <p className="text-cyan-300 text-xs leading-relaxed mb-2">
                  Eliminate double bookings forever. Real-time integration with all major calendar platforms ensures perfect accuracy.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(0, 255, 255, 0.8)' }}></div>
                  Zero Conflicts
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Bell className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-bold text-cyan-400 text-sm mb-2 uppercase tracking-wider">
                  Smart Reminders
                </h3>
                <p className="text-cyan-300 text-xs leading-relaxed mb-2">
                  Cut no-shows by 40% with intelligent multi-channel reminders that work automatically.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(0, 255, 255, 0.8)' }}></div>
                  40% Fewer No-Shows
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-4 shadow-lg shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center mb-3" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                }}>
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-bold text-cyan-400 text-sm mb-2 uppercase tracking-wider">
                  Human-Like Voice AI
                </h3>
                <p className="text-cyan-300 text-xs leading-relaxed mb-2">
                  Conversations so natural customers forget they're talking to AI. 50+ languages supported.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(0, 255, 255, 0.8)' }}></div>
                  &lt;750ms Response
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEMO SECTION */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/20 text-cyan-300 font-semibold text-xs mb-4 uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}>
                <Sparkles className="w-3 h-3" />
                Interactive Demo
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-300 uppercase tracking-wider" style={{
                textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}>
                Experience the <span className="text-white">Future of Booking</span>
              </h2>
              
              <p className="text-sm sm:text-base text-cyan-300 mb-8 max-w-3xl mx-auto">
                Witness how our AI handles real appointment conversations with <strong className="text-cyan-400">human-like precision</strong>
              </p>

              <Link
                href="#demo"
                className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-4 text-sm font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-widest" style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}
              >
                <Play className="w-5 h-5" />
                Watch Interactive Demo
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 uppercase tracking-wider" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Why Leaders Choose
                <br />
                <span className="text-white">AI Appointment Booking</span>
              </h2>
              <p className="text-sm sm:text-base text-cyan-300 max-w-3xl mx-auto">
                Join thousands transforming their scheduling with <strong className="text-cyan-400">proven AI technology</strong>
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
              <p className="text-sm sm:text-base text-cyan-300 mb-4 leading-relaxed italic">
                "We went from missing 30% of after-hours calls to capturing every single booking opportunity. Our appointment volume <strong className="text-cyan-400">increased by 45%</strong> in the first month."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center text-black font-bold text-sm" style={{
                  clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                }}>
                  SB
                </div>
                <div>
                  <p className="font-bold text-cyan-400 text-sm uppercase tracking-wider">Sarah Bennett</p>
                  <p className="text-cyan-300 text-xs">Practice Manager, Bright Smile Dental</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black py-16 relative overflow-hidden">
          <div className="px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 uppercase tracking-wider" style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}>
              Ready to Automate
              <br />
              <span className="text-white">Your Appointments?</span>
            </h2>
            <p className="text-sm sm:text-base text-cyan-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses saving time and capturing more revenue with <strong className="text-cyan-400">AI appointment scheduling</strong>
            </p>
            
            <Link
              href="/signup?service=appointment"
              className="inline-flex items-center gap-3 bg-cyan-400 text-black px-8 py-4 text-sm font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-widest mb-6" style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
              }}
            >
              Get Started With AI Booking
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-cyan-300 text-xs mb-8 uppercase tracking-wider">
              ✓ Free 14-day trial • ✓ Setup in 3 days • ✓ No credit card required
            </p>

            <div className="border-t border-cyan-400/30 pt-8">
              <p className="text-cyan-300 text-xs leading-relaxed uppercase tracking-wider">
                Powered by <strong className="text-cyan-400">DigitalBot.ai</strong> — delivering seamless booking experiences
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}