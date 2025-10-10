"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play, X, Mic, Square } from "lucide-react"
import { useEffect, useState, useRef } from 'react'
import { useRouter } from "next/navigation"
import Vapi from '@vapi-ai/web'

// Lottie type declarations
interface LottieAnimation {
  destroy: () => void;
  setSpeed: (speed: number) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
}

interface LottiePlayer {
  loadAnimation: (params: {
    container: HTMLElement | null;
    renderer: 'svg' | 'canvas' | 'html';
    loop: boolean;
    autoplay: boolean;
    path: string;
  }) => LottieAnimation;
}

declare global {
  interface Window {
    lottie?: LottiePlayer;
  }
}

export function Hero() {
  const stats = [
    { label: "Uptime Guarantee", value: 99.9, suffix: "%" },
    { label: "Messages Processed", value: 50, suffix: "M+" },
    { label: "AI Support", value: 24, suffix: "/7" },
  ]

  const [counts, setCounts] = useState([0, 0, 0])
  const [showVideo, setShowVideo] = useState(false)
  const router = useRouter()

  // VAPI State and Ref
  const vapiRef = useRef<Vapi | null>(null)
  const [isCallActive, setIsCallActive] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. How can I help you today?")
  const [callStatus, setCallStatus] = useState("")
  const lottieAnimationRef = useRef<LottieAnimation | null>(null)

  // VAPI Initialization and Event Listeners
  useEffect(() => {
    const vapiInstance = new Vapi('b8dd64f9-40ef-4be0-9683-4766906634d8')
    vapiRef.current = vapiInstance

    vapiInstance.on('call-start', () => {
      console.log('Call started')
      setIsCallActive(true)
      setTranscript("Listening for your request...")
      setCallStatus('Call active - Listening')
    })

    vapiInstance.on('call-end', () => {
      console.log('Call ended')
      setIsCallActive(false)
      setIsSpeaking(false)
      setTranscript("Hello! I'm your AI assistant. Click the microphone to start a conversation.")
      setCallStatus('Call ended')
    })

    vapiInstance.on('speech-start', () => {
      console.log('Speech started')
      setIsSpeaking(true)
      setCallStatus('Assistant speaking...')
    })

    vapiInstance.on('speech-end', () => {
      console.log('Speech ended')
      setIsSpeaking(false)
      if (isCallActive) {
        setCallStatus('Call active - Listening')
      }
    })

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        setTranscript(message.transcript)
      } else if (message.type === 'end-of-speech') {
        setCallStatus('Assistant is processing...')
      }
    })

    vapiInstance.on('error', (error) => {
      console.error('VAPI Error:', error)
      setCallStatus(`Error: ${error.message || 'Unknown error'}`)
      setIsCallActive(false)
    })

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop()
      }
    }
  }, [])

  const toggleCall = async () => {
    if (!vapiRef.current) {
      console.error('VAPI not initialized')
      setCallStatus('Initialization failed.')
      return
    }

    if (isCallActive) {
      try {
        vapiRef.current.stop()
        setCallStatus('Stopping call...')
      } catch (error) {
        console.error('Error stopping call:', error)
      }
    } else {
      try {
        setCallStatus('Requesting microphone...')
        
        try {
          await navigator.mediaDevices.getUserMedia({ audio: true })
        } catch (err) {
          console.error('Microphone permission denied:', err)
          setCallStatus('Microphone permission denied')
          alert('Please allow microphone access to use the voice assistant')
          return
        }

        setCallStatus('Starting call...')
        await vapiRef.current.start('c6f95947-e630-41e0-895b-56edc3c395b3')
        
      } catch (error) {
        console.error('Error starting call:', error)
        setCallStatus(`Failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
      }
    }
  }

  // Lottie Animation Initialization
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
    script.async = true;
    
    const handleLoad = () => {
      if (window.lottie && document.getElementById('lottie-animation')) {
        lottieAnimationRef.current = window.lottie.loadAnimation({
          container: document.getElementById('lottie-animation'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://lottie.host/4d6e4a3e-7f1f-4b0e-9b3e-8c8e3f3e3e3e/K21LOlLjRk.json'
        });
      }
    };

    script.onload = handleLoad;
    document.body.appendChild(script);

    return () => {
      if (lottieAnimationRef.current) {
        lottieAnimationRef.current.destroy();
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Update animation speed based on speaking state
  useEffect(() => {
    if (lottieAnimationRef.current) {
      if (isSpeaking) {
        lottieAnimationRef.current.setSpeed(1.5);
      } else {
        lottieAnimationRef.current.setSpeed(1.0);
      }
    }
  }, [isSpeaking]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0
      const end = stat.value
      const duration = 2000
      const stepTime = Math.floor(duration / end)

      const timer = setInterval(() => {
        start += 1
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = start
          return newCounts
        })
      }, stepTime)
    })
  }, [])

  return (
   <>
   <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulse-slow {
              0%, 100% { transform: scale(1); opacity: 0.2; }
              50% { transform: scale(1.05); opacity: 0.3; }
            }
            @keyframes ping-slow {
              0% { transform: scale(0.8); opacity: 0.3; }
              50% { transform: scale(1.1); opacity: 0.15; }
              100% { transform: scale(0.8); opacity: 0.3; }
            }
            @keyframes ping-slower {
              0% { transform: scale(0.7); opacity: 0.25; }
              50% { transform: scale(1.05); opacity: 0.1; }
              100% { transform: scale(0.7); opacity: 0.25; }
            }

            /* Wave Animation Styles */
            .wavy-background {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              overflow: hidden;
              pointer-events: none;
            }

            .wave-layer {
              position: absolute;
              width: 200%;
              height: 100%;
              top: 0;
              left: 0;
            }

            .wave-layer-1 {
              animation: wave-move 15s linear infinite;
              opacity: 0.4;
            }

            .wave-layer-2 {
              animation: wave-move 20s linear infinite;
              animation-delay: -5s;
              opacity: 0.3;
            }

            .wave-layer-3 {
              animation: wave-move 25s linear infinite;
              animation-delay: -10s;
              opacity: 0.2;
            }

            @keyframes wave-move {
              0% {
                transform: translateX(0) translateZ(0);
              }
              100% {
                transform: translateX(-50%) translateZ(0);
              }
            }

            .animate-spin-slow {
              animation: spin 20s linear infinite;
            }

            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            @keyframes sound-bar-pulse {
              0%, 100% { 
                transform: scaleY(0.7);
                opacity: 0.9;
              }
              50% { 
                transform: scaleY(1.3);
                opacity: 1;
              }
            }
          `}} />
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
      {/* Wavy Blue Background Animation */}
      <div className="wavy-background">
        <svg className="wave-layer wave-layer-1" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 T1500,300 T1800,300 T2100,300 T2400,300 V600 H0 Z" fill="rgba(56, 189, 248, 0.3)"/>
        </svg>
        <svg className="wave-layer wave-layer-2" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,350 Q200,250 400,350 T800,350 T1200,350 T1600,350 T2000,350 T2400,350 V600 H0 Z" fill="rgba(96, 165, 250, 0.25)"/>
        </svg>
        <svg className="wave-layer wave-layer-3" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,400 Q250,300 500,400 T1000,400 T1500,400 T2000,400 T2400,400 V600 H0 Z" fill="rgba(147, 197, 253, 0.2)"/>
        </svg>
      </div>

      {/* Subtle soft background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-sky-100 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-md border border-sky-200 shadow-sm">
            <Sparkles className="h-4 w-4 text-sky-500 animate-pulse" />
            <span className="font-medium">Introducing the Future of AI Assistants</span>
          </div>
        </div>

        {/* Hero Split */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8">
          {/* Left */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Transform Customer Service with{" "}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent animate-gradient">
                AI Voice Assistant
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-lg">
              DigitalBot.ai empowers your business with intelligent conversational AI — automating support, improving engagement, and delivering 24/7 futuristic customer experiences.
            </p>
          </div>

          {/* Right - Lottie Animation Visual */}
          <div className="lg:w-1/2 relative animate-fade-in-up">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              {!showVideo ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Lottie AI Voice Assistant Animation */}
                  <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
                    {/* Backdrop glow effects */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-96 h-96 rounded-full transition-all duration-500 ${
                        isSpeaking 
                          ? 'bg-gradient-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30 blur-3xl' 
                          : 'bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-sky-400/20 blur-3xl'
                      }`}></div>
                    </div>

                    {/* Lottie Animation Container */}
                    <div className={`relative transition-all duration-500 ${
                      isSpeaking ? 'scale-110' : 'scale-105'
                    }`}>
                      <div 
                        id="lottie-animation" 
                        className="w-96 h-96"
                        style={{
                          filter: isSpeaking 
                            ? 'hue-rotate(0deg) saturate(1.3) brightness(1.1)' 
                            : 'hue-rotate(0deg) saturate(1.1) brightness(1.0)'
                        }}
                      ></div>
                      
                      {/* Sound Bar Visualizer in the center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center justify-center gap-1 h-20">
                          {[...Array(12)].map((_, i) => {
                            const centerIndex = 5.5;
                            const distanceFromCenter = Math.abs(i - centerIndex);
                            const maxHeight = 60 - (distanceFromCenter * 5);
                            const minHeight = 8;
                            
                            return (
                              <div
                                key={i}
                                className={`w-1.5 relative transition-all duration-300 rounded-full ${
                                  isSpeaking 
                                    ? 'bg-gradient-to-t from-sky-700 via-sky-400 to-cyan-300 shadow-lg shadow-sky-400/50' 
                                    : isCallActive
                                    ? 'bg-gradient-to-t from-sky-600/50 via-sky-400/50 to-sky-300/50 shadow-md shadow-sky-300/30'
                                    : 'bg-gradient-to-t from-sky-500/30 via-sky-400/30 to-sky-300/30 shadow-sm'
                                }`}
                                style={{
                                  height: isSpeaking 
                                    ? `${maxHeight}px` 
                                    : isCallActive
                                    ? `${minHeight + (maxHeight - minHeight) * 0.4}px`
                                    : `${minHeight + (maxHeight - minHeight) * 0.2}px`,
                                  animation: isSpeaking 
                                    ? `sound-bar-pulse 0.${4 + (i % 4)}s ease-in-out infinite` 
                                    : isCallActive
                                    ? `sound-bar-pulse 0.${6 + (i % 3)}s ease-in-out infinite`
                                    : 'none',
                                  animationDelay: `${i * 0.05}s`
                                }}
                              >
                                {/* Inner glow */}
                                <div className={`absolute inset-0 rounded-full ${
                                  isSpeaking 
                                    ? 'bg-gradient-to-t from-white/40 via-white/20 to-transparent blur-[2px]' 
                                    : 'bg-white/10 blur-[1px]'
                                }`}></div>
                                
                                {/* Top highlight */}
                                {isSpeaking && (
                                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/70 rounded-t-full blur-[1px]"></div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Default Circle Animation - Always visible */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Outer rotating circles */}
                      <div className={`absolute w-72 h-72 rounded-full border-2 transition-all duration-500 ${
                        isSpeaking 
                          ? 'border-sky-400/60 border-dashed animate-spin-slow' 
                          : 'border-sky-400/30 border-dashed animate-spin-slow'
                      }`}></div>
                      <div className={`absolute w-80 h-80 rounded-full border transition-all duration-500 ${
                        isSpeaking 
                          ? 'border-blue-300/50 border-dotted' 
                          : 'border-blue-300/25 border-dotted'
                      }`} style={{animation: 'spin 25s linear infinite reverse'}}></div>
                      
                      {/* Pulsing circles */}
                      <div className={`w-64 h-64 rounded-full transition-all duration-300 ${
                        isSpeaking 
                          ? 'bg-sky-400/20 animate-ping' 
                          : 'bg-sky-400/10 animate-ping-slow'
                      }`} style={{animationDuration: '2s'}}></div>
                      <div className={`absolute w-56 h-56 rounded-full transition-all duration-300 ${
                        isSpeaking 
                          ? 'bg-blue-400/15 animate-ping' 
                          : 'bg-blue-400/8 animate-ping-slower'
                      }`} style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
                    </div>
                    
                    {/* Additional Ripple Effect when call is active */}
                    {isCallActive && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className={`w-96 h-96 rounded-full border-2 transition-all duration-300 ${
                          isSpeaking 
                            ? 'border-sky-500/70 animate-ping' 
                            : 'border-sky-500/30 animate-ping'
                        }`} style={{animationDuration: '1.5s'}}></div>
                        <div className={`absolute w-[500px] h-[500px] rounded-full border transition-all duration-300 ${
                          isSpeaking 
                            ? 'border-blue-500/60 animate-ping' 
                            : 'border-blue-500/20 animate-ping'
                        }`} style={{animationDuration: '2.5s', animationDelay: '0.3s'}}></div>
                      </div>
                    )}

                    {/* Particle effects when speaking */}
                    {isSpeaking && (
                      <>
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-300 rounded-full animate-ping" style={{animationDuration: '1.5s'}}></div>
                        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '0.3s'}}></div>
                        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDuration: '1.8s', animationDelay: '0.6s'}}></div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <iframe
                    className="w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="AI Demo Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-3 right-3 bg-white/80 text-sky-700 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Talk to AI Button - Below Circle Animation */}
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                onClick={toggleCall}
                className={`text-white font-semibold rounded-full shadow-lg transition-all duration-300 group 
                  ${isCallActive
                    ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:to-red-500 shadow-red-300/50'
                    : 'bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 shadow-sky-300/50'
                  }`}
              >
                {isCallActive ? 'Stop AI Conversation' : 'Talk to AI Assistant'}
                {isCallActive ? (
                  <Square className="ml-2 h-4 w-4" />
                ) : (
                  <Mic className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 relative z-10 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-sky-200 hover:scale-105 transition-transform duration-500 relative overflow-hidden"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 rounded-full opacity-30 filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-bl from-sky-400 via-sky-300 to-sky-200 rounded-full opacity-20 filter blur-3xl animate-pulse-slow"></div>

                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 animate-gradient">
                  {i === 0 ? counts[i].toFixed(1) : counts[i]}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-gray-700 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
    </>
  )
}