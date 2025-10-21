"use client"
import { Button } from "@/components/ui/button"
import { Sparkles, Mic, Square, MessageSquare, Zap, Shield, Clock, TrendingUp, Users, Award, ChevronDown, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from 'react'

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
        { label: "Uptime Guarantee", value: 99.9, suffix: "%", formatter: (val: number) => val.toFixed(1) },
        { label: "P99 AI Inference Latency", value: 750, suffix: "ms", formatter: (val: number) => val.toLocaleString() },
        { label: "AI Support Coverage", value: 24, suffix: "/7", formatter: (val: number) => `${val} ` }
    ];

    const [counts, setCounts] = useState([0, 0, 0])
    const [showVideo, setShowVideo] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const vapiRef = useRef<any>(null)
    const [isCallActive, setIsCallActive] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. Click the microphone to start a conversation in any Language.")
    const [callStatus, setCallStatus] = useState("")
    const lottieAnimationRef = useRef<LottieAnimation | null>(null)
    const [showFAQ, setShowFAQ] = useState<number | null>(null)
    const [playingCircle, setPlayingCircle] = useState<number | null>(null)
    const [screenSize, setScreenSize] = useState<number>(768)
    const [vapiLoaded, setVapiLoaded] = useState(false)

    // Mount effect - only run on client
    useEffect(() => {
        setIsMounted(true)
        if (typeof window !== 'undefined') {
            setScreenSize(window.innerWidth)
        }
    }, [])

    // Initialize Vapi only on client side
    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return

        let vapiInstance: any = null

        const initVapi = async () => {
            try {
                const VapiModule = await import('@vapi-ai/web')
                vapiInstance = new VapiModule.default('00119fad-8530-413f-9699-e47cada57939')
                vapiRef.current = vapiInstance
                setVapiLoaded(true)

                vapiInstance.on('call-start', () => {
                    setIsCallActive(true)
                    setTranscript("Listening for your request...")
                    setCallStatus('Call active - Listening')
                })

                vapiInstance.on('call-end', () => {
                    setIsCallActive(false)
                    setIsSpeaking(false)
                    setTranscript("Hello! I'm your AI assistant. Click the microphone to start a conversation.")
                    setCallStatus('Call ended')
                })

                vapiInstance.on('speech-start', () => {
                    setIsSpeaking(true)
                    setCallStatus('Assistant speaking...')
                })

                vapiInstance.on('speech-end', () => {
                    setIsSpeaking(false)
                    if (isCallActive) {
                        setCallStatus('Call active - Listening')
                    }
                })

                vapiInstance.on('message', (message: any) => {
                    if (message.type === 'transcript' && message.transcriptType === 'final') {
                        setTranscript(message.transcript)
                    } else if (message.type === 'end-of-speech') {
                        setCallStatus('Assistant is processing...')
                    }
                })

                vapiInstance.on('error', (error: any) => {
                    console.error('VAPI Error:', error)
                    setCallStatus(`Error: ${error.message || 'Unknown error'}`)
                    setIsCallActive(false)
                })
            } catch (error) {
                console.error('Failed to initialize Vapi:', error)
            }
        }

        initVapi()

        return () => {
            if (vapiInstance) {
                try {
                    vapiInstance.stop()
                } catch (e) {
                    console.error('Error stopping Vapi:', e)
                }
            }
        }
    }, [isMounted])

    const toggleCall = async () => {
        if (!vapiRef.current || !vapiLoaded) {
            setCallStatus('Initialization in progress...')
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
                await vapiRef.current.start('9ca19724-1f6c-48d1-8c62-a6107d585592')
            } catch (error) {
                console.error('Error starting call:', error)
                setCallStatus(`Failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
        }
    }

    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return

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
                    // Fixed: Using a working Lottie animation URL for voice/sound visualization
                    path: 'https://lottie.host/embed/f0d23f97-9c2f-4e65-b3d3-b89e4e7b3b3e/YqZQRlNrOk.json'
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
    }, [isMounted]);

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
        if (!isMounted) return

        const intervals: number[] = []
        stats.forEach((stat, index) => {
            let start = 0
            const end = stat.value
            const duration = 2000
            const stepTime = Math.floor(duration / (end / (index === 0 ? 0.1 : 1))) || 50

            const timer = setInterval(() => {
                start += (index === 0 ? 0.1 : 1)
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
            intervals.push(timer as unknown as number)
        })

        return () => intervals.forEach(clearInterval)
    }, [isMounted])

    const faqs = [
        {
            q: "What is an AI voice assistant and how does it work?",
            a: "An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time. It works by analyzing speech patterns, context, and intent to provide accurate, human-like responses 24/7."
        },
        {
            q: "How can AI voice assistants improve customer service?",
            a: "AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, reducing wait times, and offering consistent support around the clock. They can resolve common queries, schedule appointments, and seamlessly escalate complex issues to human agents when needed."
        },
        {
            q: "Is the AI voice assistant secure for handling customer data?",
            a: "Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, compliance with GDPR and industry standards, regular security audits, and secure data storage protocols to protect all customer interactions and sensitive information."
        },
        {
            q: "Can the AI voice assistant integrate with existing business systems?",
            a: "Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs. This ensures smooth data flow and enables the assistant to access relevant customer information for personalized interactions."
        },
        {
            q: "What industries benefit most from AI voice assistants?",
            a: "AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications. Any business that values customer engagement, wants to reduce operational costs, and aims to provide superior customer experiences can benefit significantly."
        }
    ]

    const deploymentFeatures = [
        { icon: Zap, title: "Instant Setup", description: "Deploy your AI Voice Assistant in minutes with our simple integration process" },
        { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance with global security standards" },
        { icon: Clock, title: "24/7 Availability", description: "Your AI assistant never sleeps, providing round-the-clock customer support" },
        { icon: TrendingUp, title: "Scalable Solution", description: "Grow effortlessly from 10 to 10,000 conversations without any performance issues" },
        { icon: Users, title: "Multi-Channel Support", description: "Deploy across web, mobile, WhatsApp, SMS, and voice channels" },
        { icon: Award, title: "Proven Results", description: "Join 5,000+ businesses achieving 85% automation rate" }
    ]

    const radius = isMounted ? (screenSize < 640 ? 130 : 170) : 170;

    // Don't render complex interactive elements until mounted
    if (!isMounted) {
        return (
            <section className="pt-20 pb-16 px-5 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white min-h-screen">
                <div className="container mx-auto relative z-10 max-w-6xl">
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-sm border border-sky-200/60 shadow-lg">
                            <Sparkles className="h-4 w-4 text-sky-500" />
                            <span className="font-medium">AI-Powered Customer Engagement Platform</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
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
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes sound-bar-pulse {
              0% { transform: scaleY(0.6); }
              50% { transform: scaleY(1.0); }
              100% { transform: scaleY(0.6); }
            }
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            @keyframes wave-pulse-1 {
              0% { transform: scale(0.8); opacity: 0.7; }
              100% { transform: scale(1.5); opacity: 0; }
            }
            @keyframes wave-pulse-2 {
              0% { transform: scale(0.8); opacity: 0.7; }
              100% { transform: scale(1.7); opacity: 0; }
            }
            @keyframes wave-pulse-3 {
              0% { transform: scale(0.8); opacity: 0.7; }
              100% { transform: scale(1.9); opacity: 0; }
            }
            .animate-spin-slow { animation: spin 20s linear infinite; }
            .animate-pulse-slow { animation: pulse-slow 5s infinite ease-in-out; }
            .animate-ping-slow { animation: ping-slow 3s infinite ease-in-out; }
            .animate-ping-slower { animation: ping-slower 4s infinite ease-in-out; }
            .animate-fade-in-up-1 { animation: fade-in-up 1s ease-out forwards; }
            .animate-fade-in-up-2 { animation: fade-in-up 1s ease-out 0.2s forwards; }
            .animate-fade-in-up-3 { animation: fade-in-up 1s ease-out 0.4s forwards; }
            .animate-gradient {
                background-size: 400% 400%;
                animation: gradient 10s ease infinite;
            }
            .animate-float {
                animation: float 3s ease-in-out infinite;
            }
            .animate-wave-1 { animation: wave-pulse-1 2s ease-out infinite; }
            .animate-wave-2 { animation: wave-pulse-2 2s ease-out infinite; }
            .animate-wave-3 { animation: wave-pulse-3 2s ease-out infinite; }
            `}} />
            
            <section className="pt-20 pb-16 px-5 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white min-h-screen">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        style={{ 
                            opacity: 0.25,
                            mixBlendMode: 'soft-light',
                            filter: 'blur(2px)'
                        }}
                        onError={(e) => console.error('Video failed to load:', e)}
                    >
                        <source src="https://res.cloudinary.com/dew9qfpbl/video/upload/v1761045748/BACK_1_iecrwt.mov" type="mov" />
                        <source src="https://res.cloudinary.com/dew9qfpbl/video/upload/v1761045748/BACK_1_iecrwt.mp4" type="video/mp4" />
                        
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-sky-50/40 to-white/60 pointer-events-none"></div>
                </div>

                {/* Futuristic Grid Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-1">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                {/* Subtle Gradient Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
                    <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-sky-200/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-sky-100/10 to-transparent rounded-full blur-3xl"></div>
                </div>

                {/* Animated Light Beams */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-1">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sky-400/40 to-transparent animate-pulse-slow"></div>
                    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto relative z-10 max-w-6xl opacity-100">
                    <div className="flex justify-center mb-12 animate-fade-in-up-1">
                        <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-sm border border-sky-200/60 shadow-lg">
                            <Sparkles className="h-4 w-4 text-sky-500 animate-pulse" />
                            <span className="font-medium">AI-Powered Customer Engagement Platform</span>
                        </div>
                    </div>

                    {/* Centered Column Layout */}
                    <div className="flex flex-col items-center justify-center gap-16 animate-fade-in-up-2">
                        
                        {/* Voice Assistant Section */}
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="relative w-full h-80 sm:h-96 lg:h-[400px] flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative w-full max-w-xl h-full flex items-center justify-center">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-80 h-80 rounded-full transition-all duration-500 ${
                                                isSpeaking
                                                    ? 'bg-gradient-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30 blur-3xl'
                                                    : 'bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-sky-400/20 blur-3xl'
                                                }`}></div>
                                        </div>

                                        <div className={`relative transition-all duration-500 ${isSpeaking ? 'scale-110' : 'scale-105'}`}>
                                            <div
                                                id="lottie-animation"
                                                className="w-64 h-64 sm:w-80 sm:h-80"
                                                style={{
                                                    filter: isSpeaking
                                                        ? 'hue-rotate(0deg) saturate(1.3) brightness(1.1)'
                                                        : 'hue-rotate(0deg) saturate(1.1) brightness(1.0)'
                                                }}
                                            ></div> 
                                            
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400/10 animate-wave-1"></div>
                                                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400/5 animate-wave-2" style={{ animationDelay: '0.3s' }}></div>
                                                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400/0 animate-wave-3" style={{ animationDelay: '0.6s' }}></div>
                                           
                                                <button
                                                    onClick={toggleCall}
                                                    disabled={callStatus.startsWith('Requesting') || callStatus.startsWith('Starting') || callStatus.startsWith('Stopping')}
                                                    className={`relative z-30 flex flex-col items-center justify-center
                                                        w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-all duration-300 shadow-2xl
                                                        backdrop-blur-sm
                                                        ${isCallActive 
                                                            ? 'bg-red-500/60 hover:bg-red-600/70 text-white animate-pulse-slow' 
                                                            : 'bg-sky-500/60 hover:bg-sky-600/70 text-white hover:scale-105'
                                                        }`}
                                                    aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
                                                >
                                                    <div className="mb-1">
                                                        {isCallActive ? (
                                                            <Square className="h-5 w-5 sm:h-6 sm:w-6" />
                                                        ) : (
                                                            <Mic className="h-8 w-8 sm:h-8 sm:w-8" />
                                                        )}
                                                    </div>

                                                    <div className="flex items-end justify-center gap-0.5 h-4 sm:h-5"> 
                                                        {[...Array(12)].map((_, i) => {
                                                            const centerIndex = 5.5;
                                                            const maxHeight = 12 - (Math.abs(i - centerIndex) * 0.8); 
                                                            const minHeight = 2;
                                                            
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className={`w-0.5 sm:w-1 transition-all duration-300 rounded-full ${
                                                                        isSpeaking
                                                                            ? 'bg-gradient-to-t from-white via-sky-100 to-cyan-200 shadow-sm'
                                                                            : isCallActive
                                                                                ? 'bg-gradient-to-t from-white/60 via-sky-100/60 to-sky-200/60'
                                                                                : 'bg-gradient-to-t from-white/30 via-sky-100/30 to-sky-200/30'
                                                                    }`}
                                                                    style={{
                                                                        height: isSpeaking
                                                                            ? `${Math.random() * (maxHeight - 4) + 4}px`
                                                                            : isCallActive
                                                                                ? `${minHeight + (maxHeight - minHeight) * 0.3}px`
                                                                                : `${minHeight}px`,
                                                                        animation: isSpeaking
                                                                            ? `sound-bar-pulse 0.${4 + (i % 4)}s ease-in-out infinite`
                                                                            : isCallActive
                                                                                ? `sound-bar-pulse 0.${6 + (i % 3)}s ease-in-out infinite`
                                                                                : 'none',
                                                                        animationDelay: `${i * 0.05}s`
                                                                    }}
                                                                ></div>
                                                            );
                                                        })}
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className={`absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full border-2 transition-all duration-500 ${
                                                isSpeaking ? 'border-sky-400/60 border-dashed animate-spin-slow' : 'border-sky-400/30 border-dashed animate-spin-slow'
                                                }`}></div>
                                            <div className={`absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full border transition-all duration-500 ${
                                                isSpeaking ? 'border-blue-300/50 border-dotted' : 'border-blue-300/25 border-dotted'
                                                }`} style={{ animation: 'spin 25s linear infinite reverse' }}></div>

                                            <div className={`w-48 sm:w-56 h-48 sm:h-56 rounded-full transition-all duration-300 ${
                                                isSpeaking ? 'bg-sky-400/20 animate-ping' : 'bg-sky-400/10 animate-ping-slow'
                                                }`} style={{ animationDuration: '2s' }}></div>
                                            <div className={`absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full transition-all duration-300 ${
                                                isSpeaking ? 'bg-blue-400/15 animate-ping' : 'bg-blue-400/8 animate-ping-slower'
                                                }`} style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                                        </div>

                                        {isCallActive && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className={`absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full border-2 transition-all duration-300 ${
                                                    isSpeaking ? 'border-sky-500/70 animate-ping' : 'border-sky-500/30 animate-ping'
                                                    }`} style={{ animationDuration: '1.5s' }}></div>
                                                <div className={`absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full border transition-all duration-300 ${
                                                    isSpeaking ? 'border-blue-500/60 animate-ping' : 'border-blue-500/20 animate-ping'
                                                    }`} style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
                                            </div>
                                        )}

                                        {isSpeaking && (
                                            <>
                                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-300 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                                                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }}></div>
                                                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.6s' }}></div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Transcript Display */}
                            <div className={`w-full max-w-2xl p-4 rounded-2xl border transition-all duration-300 mb-6 ${isCallActive ? 'bg-white/80 border-sky-300 shadow-lg' : 'bg-white/60 border-gray-200'}`}>
                                <div className="text-xs font-semibold uppercase text-sky-600 mb-2">{callStatus || "Ready to assist"}</div>
                                <p className="text-sm sm:text-base text-gray-800 font-medium transition-colors duration-500">{transcript}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    onClick={toggleCall}
                                    className={`text-white font-semibold rounded-full shadow-xl transition-all duration-300 group ${isCallActive
                                        ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:to-red-500 shadow-red-400/50 transform hover:scale-105'
                                        : 'bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 shadow-sky-400/50 transform hover:scale-105'
                                    } flex items-center`}
                                    aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
                                >
                                    {isCallActive ? 'Stop Conversation' : 'Start Conversation'}
                                    {isCallActive ? (
                                        <Square className="ml-2 h-4 w-4" />
                                    ) : (
                                        <Mic className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                    )}
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => setShowVideo(true)}
                                    className="text-sky-600 bg-white/70 border-sky-300 hover:bg-sky-50 rounded-full shadow-lg transition-transform hover:scale-105"
                                    aria-label="Watch demo video"
                                >
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        {/* Elegant Divider */}
                        <div className="w-full flex items-center justify-center my-16 px-8">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-200/40 to-transparent"></div>
                            <div className="mx-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-sky-400/30"></div>
                                <div className="w-2 h-2 rounded-full bg-sky-400/50"></div>
                                <div className="w-2 h-2 rounded-full bg-sky-400/30"></div>
                            </div>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-200/40 to-transparent"></div>
                        </div>

                        {/* Sample Conversations */}
                        <div className="w-full flex flex-col items-center justify-center px-4">
                            <h3 className="mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 font-bold text-2xl sm:text-3xl text-center tracking-tight">
                                Sample Conversations
                            </h3>

                            <div className="relative w-full max-w-md h-[450px] sm:h-[550px] flex items-center justify-center mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

                                {/* Center AI Agent Circle */}
                                <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 shadow-2xl flex items-center justify-center z-20 border-4 border-white/20 backdrop-blur-sm">
                                    <div className="absolute inset-0 rounded-full bg-sky-400/30 animate-ping"></div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/40 to-blue-500/40 animate-pulse"></div>
                                    
                                    <div className="text-center relative z-10">
                                        <div className="text-white text-xs sm:text-sm font-bold tracking-wide">AI Agent</div>
                                        
                                    </div>
                                </div>

                                {/* Surrounding Circles */}
                                {[
                                    { label: "Support Inquiry", angle: -90, icon: "💬" },
                                    { label: "Appointment Booking", angle: -18, icon: "📅" },
                                    { label: "Order Status", angle: 54, icon: "📦" },
                                    { label: "Game Character", angle: 126, icon: "🎮" },
                                    { label: "Trainer", angle: 198, icon: "💪" }
                                ].map((item, index) => {
                                    const angleRad = (item.angle * Math.PI) / 180;
                                    const x = Math.cos(angleRad) * radius;
                                    const y = Math.sin(angleRad) * radius;
                                    const isPlaying = playingCircle === index;

                                    return (
                                        <div key={index}>
                                            <svg className="absolute w-full h-full pointer-events-none" style={{ top: 0, left: 0 }}>
                                                <defs>
                                                    <linearGradient id={`gradient-${index}`} x1="50%" y1="50%" x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`} gradientUnits="userSpaceOnUse">
                                                        <stop offset="0%" stopColor={isPlaying ? "#38bdf8" : "#64748b"} stopOpacity={isPlaying ? "0.8" : "0.3"} />
                                                        <stop offset="100%" stopColor={isPlaying ? "#0ea5e9" : "#475569"} stopOpacity={isPlaying ? "1" : "0.4"} />
                                                    </linearGradient>
                                                </defs>
                                                <line
                                                    x1="50%"
                                                    y1="50%"
                                                    x2={`calc(50% + ${x}px)`}
                                                    y2={`calc(50% + ${y}px)`}
                                                    stroke={`url(#gradient-${index})`}
                                                    strokeWidth={isPlaying ? "3" : "1.5"}
                                                    className="transition-all duration-300"
                                                    style={{
                                                        filter: isPlaying ? 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))' : 'none'
                                                    }}
                                                />
                                            </svg>

                                            <button
                                                onClick={() => setPlayingCircle(isPlaying ? null : index)}
                                                className={`absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-2xl flex flex-col items-center justify-center border-2 sm:border-4 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ${
                                                    isPlaying
                                                        ? 'bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 border-white/40 shadow-sky-400/80 scale-105'
                                                        : 'bg-gradient-to-br from-sky-700 via-sky-800 to-sky-900 border-white/20 hover:border-sky-300/60 hover:shadow-sky-300/30'
                                                }`}
                                                style={{
                                                    left: `calc(50% + ${x}px)`,
                                                    top: `calc(50% + ${y}px)`,
                                                    transform: 'translate(-50%, -50%)',
                                                    boxShadow: isPlaying 
                                                        ? '0 20px 60px rgba(56, 189, 248, 0.6), 0 0 40px rgba(56, 189, 248, 0.4)' 
                                                        : '0 10px 30px rgba(0, 0, 0, 0.5)'
                                                }}
                                            >
                                                {isPlaying && (
                                                    <div className="absolute inset-0 rounded-full bg-sky-400/20 animate-ping"></div>
                                                )}
                                                
                                                {!isPlaying ? (
                                                    <>
                                                        <div className="text-2xl sm:text-3xl mb-1 filter drop-shadow-lg">
                                                            {item.icon}
                                                        </div>
                                                        <p className="text-[10px] sm:text-xs font-bold text-center px-1 sm:px-2 text-gray-300 leading-tight mb-1">
                                                            {item.label}
                                                        </p>
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sky-500/30 flex items-center justify-center hover:bg-sky-500/50 transition-colors">
                                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                                                                <path d="M3 2L13 8L3 14V2Z" fill="#38bdf8" />
                                                            </svg>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="text-2xl sm:text-3xl mb-1 filter drop-shadow-lg animate-bounce">
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex items-end justify-center gap-0.5 sm:gap-1 h-5 sm:h-7 mb-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="w-1 sm:w-1.5 bg-white rounded-full shadow-lg shadow-white/50"
                                                                    style={{
                                                                        height: `${Math.random() * (screenSize < 640 ? 15 : 20) + 8}px`,
                                                                        animation: `sound-bar-pulse 0.${4 + (i % 4)}s ease-in-out infinite`,
                                                                        animationDelay: `${i * 0.06}s`
                                                                    }}
                                                                ></div>
                                                            ))}
                                                        </div>
                                                        <p className="text-[10px] sm:text-xs font-bold text-center px-1 sm:px-2 text-white leading-tight drop-shadow-md">
                                                            {item.label}
                                                        </p>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-20 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-sky-200 transition-transform duration-500 hover:scale-[1.02] relative overflow-hidden"
                                    >
                                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 rounded-full opacity-30 filter blur-3xl animate-pulse-slow"></div>
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-bl from-sky-400 via-sky-300 to-sky-200 rounded-full opacity-20 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '-1s' }}></div>

                                        <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 animate-gradient relative z-10">
                                            {stats[i].formatter(counts[i])}
                                            {stat.suffix}
                                        </div>
                                        <div className="mt-2 text-gray-700 font-medium text-lg relative z-10">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Deploy Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-sky-200/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-sky-100 px-4 py-2 rounded-full text-sm text-sky-700 font-semibold mb-6">
                            <MessageSquare className="h-4 w-4" />
                            <span>Enterprise-Ready Solution</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                            Ready to Deploy{" "}
                            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                                AI Voice Assistant
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Launch your intelligent AI assistant in minutes. No coding required. Full customization available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {deploymentFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-float">
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                                Start Your Free Trial Today
                            </h3>
                            <p className="text-xl text-sky-50 mb-8 max-w-2xl mx-auto">
                                Join thousands of businesses automating customer service with AI. No credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-sky-600 hover:bg-gray-50 rounded-full shadow-xl font-bold px-8 py-6 text-lg transition-all hover:scale-105"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full font-semibold px-8 py-6 text-lg transition-all"
                                >
                                    Schedule Demo
                                </Button>
                            </div>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sky-50">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Free 14-day trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">No credit card</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Cancel anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Everything you need to know about AI voice assistants</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <button
                                    onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</h3>
                                    <ChevronDown className={`h-5 w-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${showFAQ === index ? 'rotate-180' : ''}`} />
                                </button>
                                {showFAQ === index && (
                                    <div className="px-6 pb-6 bg-gray-50">
                                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50/30">
                <div className="container mx-auto max-w-5xl">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing Business Communication with AI Voice Assistants</h2>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            In today's fast-paced digital landscape, businesses are constantly seeking innovative solutions to enhance customer engagement and streamline operations. AI voice assistants have emerged as a transformative technology that bridges the gap between traditional customer service and modern expectations.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}