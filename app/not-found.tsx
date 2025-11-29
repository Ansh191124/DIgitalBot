import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Phone, AlertTriangle, Zap, Shield, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | DigitalBot.ai",
  description: "The page you're looking for doesn't exist. It may have been moved or deleted.",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          @keyframes gridMove {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.05); opacity: 0.3; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes glitch {
            0%, 90%, 100% { transform: translate(0); }
            92% { transform: translate(-2px, 2px); }
            94% { transform: translate(2px, -2px); }
            96% { transform: translate(-2px, -2px); }
          }
          .shimmer-text {
            background: linear-gradient(135deg, #00ffff 0%, #0080ff 50%, #00ffff 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s linear infinite;
          }
          .glitch-text {
            animation: glitch 3s infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 5s infinite ease-in-out;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `
      }} />
      
      <Header />
      <main className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 py-20">
        
        {/* Cyberpunk Grid Background */}
        <div className="fixed inset-0 z-0" style={{
          background: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent animate-pulse-slow drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-600/12 to-transparent animate-pulse-slow drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border-2 border-cyan-400/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          
          {/* Alert Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <AlertTriangle className="w-16 h-16 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <AlertTriangle className="w-16 h-16 text-cyan-400 opacity-20" />
              </div>
            </div>
          </div>

          {/* 404 Number with Glitch Effect */}
          <div className="mb-8 relative">
            <h1 className="text-[8rem] md:text-[12rem] font-black leading-none mb-4 relative inline-block">
              <span className="absolute inset-0 text-cyan-400 opacity-70 blur-sm">404</span>
              <span className="absolute inset-0 text-cyan-500 opacity-70 blur-sm translate-x-1 translate-y-1">404</span>
              <span className="relative shimmer-text glitch-text animate-pulse">404</span>
            </h1>
            
            {/* Glitch Lines */}
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-cyan-400/50 animate-pulse" />
            <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-cyan-500/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-wider">
              <span className="shimmer-text" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                SYSTEM ERROR
              </span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          {/* Description Box */}
          <div className="mb-8 backdrop-blur-sm bg-cyan-500/10 border border-cyan-400/30 overflow-hidden p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)]" style={{
            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
          }}>
            <p className="text-base md:text-lg text-cyan-100 mb-2 font-mono">
              <span className="text-cyan-400 font-bold">[ERROR 404]</span> Neural pathway not found
            </p>
            <p className="text-gray-400 text-sm">
              The requested data stream has been corrupted or relocated. 
              System cannot establish connection to target coordinates.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="group relative bg-cyan-400 hover:bg-cyan-300 text-black font-black rounded-none shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-all duration-300 w-full sm:w-auto overflow-hidden hover:scale-105"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}
            >
              <Link href="/" className="flex items-center gap-2 relative z-10 uppercase tracking-widest px-8 py-3 text-sm">
                <Home className="w-5 h-5" />
                <span>RETURN HOME</span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group bg-black/50 border-2 border-cyan-400 hover:border-cyan-300 hover:bg-cyan-400/10 text-cyan-400 hover:text-cyan-300 font-black rounded-none shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 w-full sm:w-auto"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}
            >
              <Link href="/contact" className="flex items-center gap-2 uppercase tracking-widest px-8 py-3 text-sm">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                <span>CONTACT SUPPORT</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cyan-400 uppercase tracking-widest mb-8">
            <div className="flex items-center gap-1.5 border border-cyan-400/30 px-3 py-1.5 rounded" style={{
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}>
              <Shield className="h-4 w-4 text-cyan-400" />
              <span className="font-bold">Enterprise Secure</span>
            </div>
            <div className="flex items-center gap-1.5 border border-cyan-400/30 px-3 py-1.5 rounded" style={{
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}>
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span className="font-bold">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1.5 border border-cyan-400/30 px-3 py-1.5 rounded" style={{
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}>
              <Users className="h-4 w-4 text-cyan-400" />
              <span className="font-bold">50k+ Users</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-b border-cyan-500/30 py-6 backdrop-blur-sm bg-black/30">
            <p className="text-xs text-cyan-400 mb-4 font-mono tracking-wider uppercase">
              {'>'} QUICK ACCESS NODES:
            </p>
            <div className="flex flex-wrap gap-3 justify-center font-mono text-sm">
              <Link 
                href="/services" 
                className="px-3 py-1 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 group"
              >
                <span className="group-hover:text-white">SERVICES</span>
              </Link>
              <Link 
                href="/pricing" 
                className="px-3 py-1 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 group"
              >
                <span className="group-hover:text-white">PRICING</span>
              </Link>
              <Link 
                href="/blog" 
                className="px-3 py-1 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 group"
              >
                <span className="group-hover:text-white">BLOG</span>
              </Link>
              <Link 
                href="/docs" 
                className="px-3 py-1 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 group"
              >
                <span className="group-hover:text-white">DOCS</span>
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-1 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 group"
              >
                <span className="group-hover:text-white">ABOUT</span>
              </Link>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-8 flex justify-center items-center gap-2 font-mono text-xs text-gray-500">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            <span>SYSTEM.STATUS: ONLINE</span>
          </div>
        </div>

        {/* Animated Corner Brackets */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 animate-pulse" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400 animate-pulse" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400 animate-pulse" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 animate-pulse" />
      </main>
      <Footer />
    </>
  )
}