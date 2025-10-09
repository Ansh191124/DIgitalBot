"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play, X, Mic, Square } from "lucide-react" // Import Mic and Square
import { useEffect, useState, useRef } from 'react'
import { useRouter } from "next/navigation";
import Vapi from '@vapi-ai/web' // Import Vapi Web SDK

export function Hero() {
  const stats = [
    { label: "Uptime Guarantee", value: 99.9, suffix: "%" },
    { label: "Messages Processed", value: 50, suffix: "M+" },
    { label: "AI Support", value: 24, suffix: "/7" },
  ]

  const [counts, setCounts] = useState([0, 0, 0])
  const [showVideo, setShowVideo] = useState(false)
  const router = useRouter();

  // VAPI State and Ref
  const vapiRef = useRef<Vapi | null>(null)
  const [isCallActive, setIsCallActive] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. How can I help you today?")
  const [callStatus, setCallStatus] = useState("")

  // VAPI Initialization and Event Listeners
  useEffect(() => {
    // Initialize VAPI with your actual public key
    const vapiInstance = new Vapi('b8dd64f9-40ef-4be0-9683-4766906634d8')
    vapiRef.current = vapiInstance

    // Event listeners
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
      setIsCallActive(false) // Ensure button state resets on error
    })

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop()
      }
    }
  }, [])


  // Call Toggle Function
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
        
        // Request microphone permission first
        try {
          await navigator.mediaDevices.getUserMedia({ audio: true })
        } catch (err) {
          console.error('Microphone permission denied:', err)
          setCallStatus('Microphone permission denied')
          alert('Please allow microphone access to use the voice assistant')
          return
        }

        setCallStatus('Starting call...')
        
        // Replace with your actual assistant ID
        await vapiRef.current.start('c6f95947-e630-41e0-895b-56edc3c395b3')
        
      } catch (error) {
        console.error('Error starting call:', error)
        setCallStatus(`Failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
      }
    }
  }


  // Animate stats (Keep your existing logic)
  useEffect(() => {
    // ... existing stat animation logic ...
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
    // ... end of existing stat animation logic ...
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
            /* Robot Animation Styles */
            .robot-animation-container {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .robot-animation {
              width: 300px;
              height: 300px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .robot {
              width: 150px;
              height: 180px;
              position: relative;
              animation: robot-bounce 2s ease-in-out infinite;
            }

            @keyframes robot-bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }

            .robot-head {
              width: 100px;
              height: 80px;
              background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
              border-radius: 20px;
              margin: 0 auto;
              position: relative;
              box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
              border: 3px solid rgba(255, 255, 255, 0.3);
            }

            .robot-antenna {
              width: 5px;
              height: 25px;
              background: linear-gradient(180deg, #60A5FA 0%, #3B82F6 100%);
              position: absolute;
              top: -25px;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 3px;
            }

            .robot-antenna::after {
              content: '';
              width: 14px;
              height: 14px;
              background: radial-gradient(circle, #00E5FF 0%, #00B8D4 100%);
              border-radius: 50%;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              animation: antenna-blink 1s ease-in-out infinite;
              box-shadow: 0 0 20px #00E5FF, 0 0 40px rgba(0, 229, 255, 0.5);
            }

            @keyframes antenna-blink {
              0%, 100% {
                opacity: 1;
                box-shadow: 0 0 20px #00E5FF, 0 0 40px rgba(0, 229, 255, 0.5);
              }
              50% {
                opacity: 0.4;
                box-shadow: 0 0 10px #00E5FF, 0 0 20px rgba(0, 229, 255, 0.3);
              }
            }

            .robot-eyes {
              display: flex;
              justify-content: space-around;
              padding: 20px 15px 0;
            }

            .robot-eye {
              width: 20px;
              height: 20px;
              background: white;
              border-radius: 50%;
              position: relative;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .robot-pupil {
              width: 10px;
              height: 10px;
              background: radial-gradient(circle, #1E40AF 0%, #3B82F6 100%);
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: eye-move 4s ease-in-out infinite;
            }

            @keyframes eye-move {
              0%, 100% { transform: translate(-50%, -50%); }
              25% { transform: translate(-70%, -50%); }
              75% { transform: translate(-30%, -50%); }
            }

            .robot-mouth {
              width: 50px;
              height: 8px;
              background: white;
              margin: 15px auto 0;
              border-radius: 4px;
              position: relative;
              overflow: hidden;
            }

            .robot-mouth::after {
              content: '';
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, #00E5FF 0%, #00B8D4 100%);
              position: absolute;
              left: -100%;
              animation: mouth-talk 2s ease-in-out infinite;
              box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
            }

            @keyframes mouth-talk {
              0%, 100% { left: -100%; }
              50% { left: 0; }
            }

            .robot-body {
              width: 120px;
              height: 70px;
              background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
              border-radius: 15px;
              margin: 10px auto 0;
              position: relative;
              box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
              border: 3px solid rgba(255, 255, 255, 0.3);
            }

            .robot-panel {
              width: 60px;
              height: 40px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 8px;
              margin: 15px auto;
              display: flex;
              flex-direction: column;
              gap: 5px;
              padding: 8px;
              border: 2px solid rgba(255, 255, 255, 0.3);
              box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
            }

            .panel-line {
              height: 3px;
              background: linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%);
              border-radius: 2px;
              animation: panel-loading 1.5s ease-in-out infinite;
              box-shadow: 0 1px 3px rgba(0, 229, 255, 0.3);
            }

            .panel-line:nth-child(1) {
              width: 80%;
              animation-delay: 0s;
            }

            .panel-line:nth-child(2) {
              width: 100%;
              animation-delay: 0.3s;
            }

            .panel-line:nth-child(3) {
              width: 60%;
              animation-delay: 0.6s;
            }

            @keyframes panel-loading {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }

            .robot-arm {
              width: 15px;
              height: 60px;
              background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
              border-radius: 8px;
              position: absolute;
              top: 10px;
              box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
              border: 2px solid rgba(255, 255, 255, 0.3);
            }

            .robot-arm.left {
              left: -20px;
              transform-origin: top center;
              animation: arm-wave-left 2s ease-in-out infinite;
            }

            .robot-arm.right {
              right: -20px;
              transform-origin: top center;
              animation: arm-wave-right 2s ease-in-out infinite;
            }

            @keyframes arm-wave-left {
              0%, 100% { transform: rotate(-10deg); }
              50% { transform: rotate(-30deg); }
            }

            @keyframes arm-wave-right {
              0%, 100% { transform: rotate(10deg); }
              50% { transform: rotate(30deg); }
            }

            .robot-hand {
              width: 18px;
              height: 12px;
              background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
              border-radius: 50%;
              position: absolute;
              bottom: -8px;
              left: 50%;
              transform: translateX(-50%);
              box-shadow: 0 3px 8px rgba(37, 99, 235, 0.4);
            }

            .robot-base {
              width: 80px;
              height: 15px;
              background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
              border-radius: 8px;
              margin: 5px auto 0;
              box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
              border: 2px solid rgba(255, 255, 255, 0.3);
            }

            .sound-waves {
              position: absolute;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              gap: 4px;
              align-items: flex-end;
            }

            .sound-bar {
              width: 5px;
              background: linear-gradient(180deg, #00E5FF 0%, #00B8D4 100%);
              border-radius: 3px;
              animation: sound-wave 0.8s ease-in-out infinite;
              box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
            }

            .sound-bar:nth-child(1) {
              height: 10px;
              animation-delay: 0s;
            }

            .sound-bar:nth-child(2) {
              height: 20px;
              animation-delay: 0.1s;
            }

            .sound-bar:nth-child(3) {
              height: 15px;
              animation-delay: 0.2s;
            }

            .sound-bar:nth-child(4) {
              height: 25px;
              animation-delay: 0.3s;
            }

            .sound-bar:nth-child(5) {
              height: 15px;
              animation-delay: 0.4s;
            }
            
            @keyframes sound-wave {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(2); }
            }

            .animate-vapi-wave {
              animation: vapi-wave 0.8s ease-in-out infinite;
            }
            @keyframes vapi-wave {
              0%, 100% { transform: scaleY(0.5); }
              50% { transform: scaleY(1.5); }
            }
          `}} />
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
  {/* Subtle soft background glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
    <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-sky-200 rounded-full opacity-10 blur-3xl"></div>
    <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-sky-50 rounded-full opacity-20 blur-2xl"></div>
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              {/* MODIFIED BUTTON: Changed to the Voice Assistant CTA */}
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
                  <Square className="ml-2 h-4 w-4" /> // Stop Icon
                ) : (
                  <Mic className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" /> // Mic Icon
                )}
              </Button>
            </div>
          </div>

          {/* Right - Robot Animation (Remains untouched) */}
          <div className="lg:w-1/2 relative animate-fade-in-up">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              {!showVideo ? (
                <div className="robot-animation-container">
                  <div className="robot-animation">
                    <div className="robot">
                      <div className="robot-head">
                        <div className="robot-antenna"></div>
                        <div className="robot-eyes">
                          <div className="robot-eye">
                            <div className="robot-pupil"></div>
                          </div>
                          <div className="robot-eye">
                            <div className="robot-pupil"></div>
                          </div>
                        </div>
                        {/* Conditional mouth/waves based on speaking state */}
                        <div className="robot-mouth">
                          {isSpeaking && (
                            <style dangerouslySetInnerHTML={{__html: `.robot-mouth::after { animation: mouth-talk 0.2s ease-in-out infinite alternate; }`}} />
                          )}
                        </div>
                      </div>
                      <div className="robot-body">
                        <div className="robot-arm left">
                          <div className="robot-hand"></div>
                        </div>
                        <div className="robot-arm right">
                          <div className="robot-hand"></div>
                        </div>
                        <div className="robot-panel">
                          <div className="panel-line"></div>
                          <div className="panel-line"></div>
                          <div className="panel-line"></div>
                        </div>
                      </div>
                      <div className="robot-base"></div>
                    </div>
                    {/* Conditional sound waves */}
                    {isSpeaking && (
                      <div className="sound-waves">
                        <div className="sound-bar"></div>
                        <div className="sound-bar"></div>
                        <div className="sound-bar"></div>
                        <div className="sound-bar"></div>
                        <div className="sound-bar"></div>
                      </div>
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

        {/* AI Demo Section (Updated with VAPI state) */}
        <div
          className="mt-20 animate-fade-in-up flex flex-col items-center justify-center"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="relative bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300 rounded-3xl p-1 shadow-2xl overflow-hidden w-full max-w-md">
            {/* Glowing background blobs */}
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-sky-300 rounded-full opacity-20 filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-sky-400 rounded-full opacity-15 filter blur-3xl animate-pulse-slow"></div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-sky-200 text-center relative z-10 shadow-lg">
              <h3 className="text-2xl font-semibold text-sky-600 mb-2">
                AI Voice Assistant
              </h3>

              {/* Call Status Indicator */}
              {isCallActive && (
                <div className="mb-4 flex items-center justify-center space-x-2">
                  <span className={`relative flex h-3 w-3`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full ${isSpeaking ? 'bg-green-400' : 'bg-sky-400'} opacity-75 ${isSpeaking ? 'animate-ping' : 'animate-ping-slow'}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isSpeaking ? 'bg-green-500' : 'bg-sky-500'}`}></span>
                  </span>
                  <span className={`text-sm font-medium ${isSpeaking ? 'text-green-600' : 'text-sky-600'}`}>
                    {isSpeaking ? 'Assistant Speaking' : 'Listening...'}
                  </span>
                </div>
              )}
              <div className="mb-4 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600 inline-block min-h-[30px]">
                {callStatus || (isCallActive ? (isSpeaking ? 'Assistant Speaking' : 'Listening...') : 'Click to start conversation')}
              </div>


              {/* Transcribed Voice Text */}
              <p className="text-gray-700 italic mb-6 min-h-[60px] flex items-center justify-center">
                "{transcript}"
              </p>

              {/* Mic Button with Animated Waveform */}
              <div className="relative inline-flex items-center justify-center">
                {/* Wave animation rings */}
                {isCallActive && (
                  <>
                    <span className={`absolute w-40 h-40 rounded-full opacity-20 ${isSpeaking ? 'bg-green-400 animate-ping' : 'bg-sky-400 animate-ping-slow'}`}></span>
                    <span className={`absolute w-28 h-28 rounded-full opacity-25 ${isSpeaking ? 'bg-green-300 animate-ping-slower' : 'bg-sky-300 animate-ping-slower'}`}></span>
                  </>
                )}

                <button
                  onClick={toggleCall}
                  className={`relative z-10 p-6 text-white rounded-full shadow-xl transition-transform duration-300 flex items-center justify-center
                    ${isCallActive 
                      ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:to-red-500 ring-4 ring-red-300' 
                      : 'bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 hover:scale-110'
                    }`}
                  aria-label={isCallActive ? 'End voice conversation' : 'Start voice conversation'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isCallActive ? (
                      // Stop icon (Square)
                      <rect x="6" y="6" width="12" height="12" rx="1"/>
                    ) : (
                      // Microphone icon
                      <>
                        <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z"/>
                        <path d="M19 11h-2a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0z"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}