"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, X, Mic, Square, Phone, MessageSquare, Zap, Shield, Clock, TrendingUp, Users, Award, ChevronDown, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from 'react'
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
        // 1. UPTIME: Correct - Reliability is measured as a percentage.
        { 
            label: "Uptime Guarantee", 
            value: 99.9, 
            suffix: "%", 
            formatter: (val: number) => val.toFixed(1) 
        },
        // 2. LATENCY: FIX - Latency (speed) should be measured in milliseconds (ms), not a percentage. 
        //    The 'value' should represent the time taken.
        { 
            label: "P99 AI Inference Latency", // Renamed to P99 for technical clarity
            value: 750,                      // Example value: 750 milliseconds
            suffix: "ms", 
            formatter: (val: number) => val.toLocaleString() 
        },
        // 3. AI SUPPORT: FIX - The 'value' should represent the *number* of agents or tasks, or the '24' 
        //    should be part of the label, as the current structure is awkward.
        { 
            label: "AI Support Coverage", 
            value: 24,                       // Represents 24 hours
            suffix: "/7", 
            formatter: (val: number) => `${val} ` // Custom formatter to correctly display "24 / 7"
        }
    ];
    
    // console.log(stats[1].label + ": " + stats[1].formatter(stats[1].value) + stats[1].suffix);

    const [counts, setCounts] = useState([0, 0, 0])
    const [showVideo, setShowVideo] = useState(false)
    const vapiRef = useRef<Vapi | null>(null)
    const [isCallActive, setIsCallActive] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. Click the microphone to start a conversation in any Language.")
    const [callStatus, setCallStatus] = useState("")
    const lottieAnimationRef = useRef<LottieAnimation | null>(null)
    const [isContentVisible, setIsContentVisible] = useState(false)
    const [showFAQ, setShowFAQ] = useState<number | null>(null)

    useEffect(() => {
        setIsContentVisible(true)
    }, [])

    // VAPI Initialization
    useEffect(() => {
        const vapiInstance = new Vapi('00119fad-8530-413f-9699-e47cada57939')
        vapiRef.current = vapiInstance

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
                await vapiRef.current.start('9ca19724-1f6c-48d1-8c62-a6107d585592')
            } catch (error) {
                console.error('Error starting call:', error)
                setCallStatus(`Failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
        }
    }

    // Lottie Animation
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

    useEffect(() => {
        if (lottieAnimationRef.current) {
            if (isSpeaking) {
                lottieAnimationRef.current.setSpeed(1.5);
            } else {
                lottieAnimationRef.current.setSpeed(1.0);
            }
        }
    }, [isSpeaking]);

    // Animated Counter
    useEffect(() => {
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
    }, [])

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
        { icon: Zap, title: "Instant Setup", description: "Deploy your AI Voice Asisstant in minutes with our simple integration process" },
        { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance with global security standards" },
        { icon: Clock, title: "24/7 Availability", description: "Your AI assistant never sleeps, providing round-the-clock customer support" },
        { icon: TrendingUp, title: "Scalable Solution", description: "Grow effortlessly from 10 to 10,000 conversations without any performance issues" },
        { icon: Users, title: "Multi-Channel Support", description: "Deploy across web, mobile, WhatsApp, SMS, and voice channels" },
        { icon: Award, title: "Proven Results", description: "Join 5,000+ businesses achieving 85% automation rate" }
    ]

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
            @keyframes wave-move {
              0% { transform: translateX(0) translateZ(0); }
              100% { transform: translateX(-50%) translateZ(0); }
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
            /* NEW WAVE ANIMATIONS FOR BUTTON */
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
            .wave-layer-1 { animation: wave-move 15s linear infinite; opacity: 0.4; }
            .wave-layer-2 { animation: wave-move 20s linear infinite; animation-delay: -5s; opacity: 0.3; }
            .wave-layer-3 { animation: wave-move 25s linear infinite; animation-delay: -10s; opacity: 0.2; }
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
            /* NEW WAVE CLASSES */
            .animate-wave-1 { animation: wave-pulse-1 2s ease-out infinite; }
            .animate-wave-2 { animation: wave-pulse-2 2s ease-out infinite; animation-delay: 0.3s; }
            .animate-wave-3 { animation: wave-pulse-3 2s ease-out infinite; animation-delay: 0.6s; }
            `}} />
            
            {/* SEO Schema Markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "DigitalBot.ai - AI Voice Assistant",
                    "applicationCategory": "BusinessApplication",
                    "description": "Transform customer service with intelligent AI voice assistants. 24/7 automated support, natural conversations, and seamless integration.",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "ratingCount": "2847"
                    }
                })
            }} />

            <section className="pt-20 pb-16 px-5 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 min-h-screen" itemScope itemType="https://schema.org/WebPage">
                {/* Wavy Background */}
                <div className="wavy-background">
                    <svg className="wave-layer wave-layer-1" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path d="M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 T1500,300 T1800,300 T2100,300 T2400,300 V600 H0 Z" fill="rgba(56, 189, 248, 0.3)" />
                    </svg>
                    <svg className="wave-layer wave-layer-2" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path d="M0,350 Q200,250 400,350 T800,350 T1200,350 T1600,350 T2000,350 T2400,350 V600 H0 Z" fill="rgba(96, 165, 250, 0.25)" />
                    </svg>
                    <svg className="wave-layer wave-layer-3" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path d="M0,400 Q250,300 500,400 T1000,400 T1500,400 T2000,400 T2400,400 V600 H0 Z" fill="rgba(147, 197, 253, 0.2)" />
                    </svg>
                </div>

                {/* Background glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-200 rounded-full opacity-15 blur-3xl"></div>
                    <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-sky-100 rounded-full opacity-20 blur-2xl"></div>
                </div>

                <div className={`container mx-auto relative z-10 transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Top Badge */}
                    <div className="flex justify-center mb-8 animate-fade-in-up-1">
                        <div className="inline-flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-md border border-sky-200 shadow-sm">
                            <Sparkles className="h-4 w-4 text-sky-500 animate-pulse" />
                            <span className="font-medium">AI-Powered Customer Engagement Platform</span>
                        </div>
                    </div>

                    {/* Centered Voice Assistant */}
                    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto animate-fade-in-up-2">
                        {/* Lottie Animation Visual - Centered */}
                        <div className="relative flex items-center justify-center mb-8">
                            <div className="relative w-full h-80 sm:h-96 lg:h-[400px] flex items-center justify-center">
                                {!showVideo ? (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="relative w-full max-w-xl h-full flex items-center justify-center">
                                            {/* Backdrop glow */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className={`w-80 h-80 rounded-full transition-all duration-500 ${
                                                    isSpeaking
                                                        ? 'bg-gradient-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30 blur-3xl'
                                                        : 'bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-sky-400/20 blur-3xl'
                                                    }`}></div>
                                            </div>

                                            {/* Lottie Container & Button/Waves Wrapper */}
                                            <div className={`relative transition-all duration-500 ${isSpeaking ? 'scale-110' : 'scale-105'}`}>
                                                
                                                {/* Lottie Animation */}
                                                <div
                                                    id="lottie-animation"
                                                    className="w-64 h-64 sm:w-80 sm:h-80"
                                                    style={{
                                                        filter: isSpeaking
                                                            ? 'hue-rotate(0deg) saturate(1.3) brightness(1.1)'
                                                            : 'hue-rotate(0deg) saturate(1.1) brightness(1.0)'
                                                    }}
                                                ></div> 
                                                
                                                {/* NEW WRAPPER FOR BUTTON AND WAVES (made relative) */}
                                                <div className="absolute inset-0 flex items-center justify-center">

                                                    {/* Circle Waves - ALWAYS VISIBLE (NEW IMPLEMENTATION) */}
                                                    <>
                                                        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400/10 animate-wave-1"></div>
                                                        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400/5 animate-wave-2" style={{ animationDelay: '0.3s' }}></div>
                                                        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400/0 animate-wave-3" style={{ animationDelay: '0.6s' }}></div>
                                                    </>
                                               
                                                    {/* Microphone Button - NOW RELATIVE to its new wrapper */}
                                                    <button
                                                        onClick={toggleCall}
                                                        disabled={callStatus.startsWith('Requesting') || callStatus.startsWith('Starting') || callStatus.startsWith('Stopping')}
                                                        className={`relative z-30 flex flex-col items-center justify-center
                                                            w-20 h-10 sm:w-24 sm:h-24 rounded-full transition-all duration-300 shadow-2xl
                                                            backdrop-blur-sm
                                                            ${isCallActive 
                                                                ? 'bg-red-500/60 hover:bg-red-600/70 text-white animate-pulse-slow' 
                                                                : 'bg-sky-500/60 hover:bg-sky-600/70 text-white hover:scale-105'
                                                            }`}
                                                        aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
                                                    >
                                                        {/* Icon */}
                                                        <div className="mb-1">
                                                            {isCallActive ? (
                                                                <Square className="h-4 w-5 sm:h-4 sm:w-6" />
                                                            ) : (
                                                                <Mic className="h-8 w-8 sm:h- 8 sm:w-8" />
                                                            )}
                                                        </div>

                                                        {/* Sound Bar Visualizer - Positioned below icon */}
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

                                            {/* Circle animations (The larger spinning rings) */}
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

                                            {/* Active call ripples (The larger, faster ripples) */}
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

                                            {/* Particles when speaking */}
                                            {isSpeaking && (
                                                <>
                                                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-300 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                                                    <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }}></div>
                                                    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.6s' }}></div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full rounded-3xl shadow-2xl">
                                        <iframe
                                            className="w-full h-full rounded-3xl"
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                            title="AI Voice Assistant Demo"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                        <button
                                            onClick={() => setShowVideo(false)}
                                            className="absolute top-3 right-3 bg-white/80 text-sky-700 hover:bg-white rounded-full p-2 shadow-xl transition-all z-20"
                                            aria-label="Close video"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Transcript Display - Below Animation */}
                        <div className={`w-full max-w-2xl p-4 rounded-2xl border transition-all duration-300 mb-6 ${isCallActive ? 'bg-white/80 border-sky-300 shadow-lg' : 'bg-white/60 border-gray-200'}`}>
                            <div className="text-xs font-semibold uppercase text-sky-600 mb-2">{callStatus || "Ready to assist"}</div>
                            <p className="text-sm sm:text-base text-gray-800 font-medium transition-colors duration-500">{transcript}</p>
                        </div>
                        

                        {/* Action Buttons - BELOW THE VISUAL (now optional/secondary) */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={toggleCall} // This button is now redundant but kept for accessibility/UI redundancy
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
            </section>

            {/* Ready to Deploy Voice Asisstant Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-sky-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
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
                                AI Voice Asisstant
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Launch your intelligent AI assistant in minutes. No coding required. Full customization available.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {deploymentFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-float">
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
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
                            <div className="mt-8 flex items-center justify-center gap-8 text-sky-50">
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

            {/* FAQ Section with Schema */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" itemScope itemType="https://schema.org/FAQPage">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Everything you need to know about AI voice assistants</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <button
                                    onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                    aria-expanded={showFAQ === index}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">{faq.q}</h3>
                                    <ChevronDown className={`h-5 w-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${showFAQ === index ? 'rotate-180' : ''}`} />
                                </button>
                                {showFAQ === index && (
                                    <div className="px-6 pb-6 bg-gray-50" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="text-gray-700 leading-relaxed" itemProp="text">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto max-w-5xl">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing Business Communication with AI Voice Assistants</h2>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            In today's fast-paced digital landscape, businesses are constantly seeking innovative solutions to enhance customer engagement and streamline operations. AI voice assistants have emerged as a transformative technology that bridges the gap between traditional customer service and modern expectations. These intelligent systems leverage advanced natural language processing, machine learning algorithms, and conversational AI to deliver exceptional customer experiences while significantly reducing operational costs.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Understanding AI Voice Technology</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            AI voice assistants represent a quantum leap in customer interaction technology. Unlike traditional automated phone systems with rigid menus and limited options, modern AI voice assistants understand context, emotion, and intent. They can engage in natural, fluid conversations that feel remarkably human. These systems continuously learn from every interaction, becoming more accurate and efficient over time. The technology combines speech recognition, natural language understanding, dialogue management, and text-to-speech synthesis to create seamless conversational experiences.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            The sophistication of contemporary AI voice assistants allows them to handle complex multi-turn conversations, remember context from previous interactions, and even detect emotional cues in customer voices. This level of intelligence enables businesses to provide personalized support at scale, something that was previously impossible without massive human resources. Whether answering product inquiries, troubleshooting technical issues, scheduling appointments, or processing transactions, AI voice assistants deliver consistent, accurate responses every time.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Benefits for Modern Businesses</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Implementing AI voice assistants delivers transformative benefits across multiple business dimensions. First and foremost is cost efficiency. Traditional call centers require significant infrastructure, staffing, and training investments. AI voice assistants dramatically reduce these costs while handling unlimited simultaneous conversations. A single AI assistant can manage thousands of customer interactions concurrently, eliminating wait times and ensuring instant response regardless of call volume.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Customer satisfaction sees remarkable improvement with AI voice assistants. Modern consumers expect instant gratification and 24/7 availability. AI assistants meet these expectations flawlessly, providing immediate responses at any time of day or night, including weekends and holidays. This round-the-clock availability significantly enhances customer loyalty and satisfaction scores. Moreover, AI assistants maintain consistent quality across all interactions, eliminating the variability inherent in human performance due to factors like fatigue, mood, or experience level.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Scalability represents another crucial advantage. As businesses grow, traditional customer service models require proportional increases in staff and infrastructure. AI voice assistants scale effortlessly, handling exponential growth in customer interactions without additional costs or performance degradation. Whether serving ten customers or ten thousand simultaneously, the service quality remains consistently high. This scalability is particularly valuable during peak periods, product launches, or marketing campaigns when interaction volumes surge unpredictably.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Industry Applications and Use Cases</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Healthcare organizations leverage AI voice assistants to schedule appointments, answer common medical questions, provide medication reminders, and triage patient concerns. This reduces administrative burden on medical staff while improving patient engagement and adherence to treatment plans. Patients appreciate the convenience of booking appointments or getting prescription refills without navigating complex phone menus or waiting on hold.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            E-commerce businesses deploy AI voice assistants to handle product inquiries, process orders, track shipments, and manage returns. The technology enables personalized shopping experiences by remembering customer preferences and making intelligent product recommendations. Voice-activated shopping is particularly popular among younger demographics and busy professionals who value the convenience of hands-free transactions.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Financial institutions use AI voice assistants for account inquiries, transaction history, fraud alerts, and basic banking operations. The technology enhances security through voice biometrics while providing convenient access to banking services. Customers can check balances, transfer funds, or report lost cards through natural voice commands, reducing the need for branch visits or lengthy phone calls with human representatives.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Hospitality and travel industries benefit enormously from AI voice assistants that handle reservations, provide destination information, manage booking modifications, and offer concierge services. Hotels use voice assistants to enhance guest experiences, allowing room service orders, housekeeping requests, and local recommendations through simple voice interactions. Airlines deploy them for flight status updates, booking changes, and customer service inquiries.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Implementation Best Practices</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Successful AI voice assistant implementation requires careful planning and strategic execution. Begin by identifying specific use cases where automation delivers maximum value. Focus on repetitive, high-volume interactions that consume significant human resources but don't require complex decision-making or emotional intelligence. Common starting points include appointment scheduling, basic product information, account inquiries, and order status updates.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Training and customization are critical for success. Generic AI assistants rarely meet specific business needs effectively. Invest time in training the system on your industry terminology, product catalog, common customer questions, and preferred communication style. The more customized the AI assistant, the better it performs and the more natural interactions feel to customers. Continuously refine the system based on real conversation data and customer feedback.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Integration with existing systems is essential for delivering seamless experiences. AI voice assistants should connect with CRM platforms, order management systems, appointment schedulers, knowledge bases, and other critical business applications. This integration enables the assistant to access customer history, retrieve real-time information, and execute transactions without human intervention. Proper integration transforms the AI assistant from a simple information provider into a powerful transaction processor.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Future Trends and Innovation</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The future of AI voice assistants promises even more impressive capabilities. Emerging technologies like emotion AI enable systems to detect and respond to customer emotional states, adjusting tone and approach accordingly. Multilingual capabilities are becoming increasingly sophisticated, allowing single assistants to seamlessly switch between languages mid-conversation. This is particularly valuable for businesses serving diverse, global customer bases.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Predictive analytics integration will enable AI voice assistants to anticipate customer needs before they're explicitly stated. By analyzing historical data, purchase patterns, and contextual information, assistants will proactively offer relevant solutions and recommendations. For example, recognizing that a customer typically reorders supplies monthly, the assistant might initiate contact to facilitate reordering before inventory runs low.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Voice biometrics and advanced security measures are evolving rapidly, making voice-based authentication both more secure and more convenient than traditional methods. Customers will be able to access sensitive information and complete high-value transactions through voice commands alone, with confidence that their identity is verified accurately and securely.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Making the Strategic Decision</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Adopting AI voice assistant technology represents a strategic investment in customer experience and operational efficiency. The technology has matured significantly, moving from experimental innovation to mission-critical business infrastructure. Organizations that implement AI voice assistants gain competitive advantages through superior customer service, reduced costs, and enhanced scalability. The question is no longer whether to adopt this technology, but how quickly to implement it and how strategically to leverage its capabilities.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Success requires commitment to ongoing optimization and evolution. AI voice assistants improve continuously through machine learning, but this improvement depends on regular monitoring, analysis, and refinement. Establish clear metrics for success, track performance rigorously, and be prepared to adjust strategies based on data and customer feedback. The most successful implementations treat AI voice assistants as dynamic systems requiring active management rather than set-it-and-forget-it solutions.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            The transformation that AI voice assistants bring to customer engagement is profound and far-reaching. They represent not just a technological upgrade but a fundamental reimagining of how businesses interact with customers. Organizations that embrace this technology thoughtfully and strategically position themselves at the forefront of customer experience innovation, ready to meet evolving consumer expectations while building more efficient, scalable, and resilient operations. The future of customer engagement is conversational, intelligent, and available 24/7—powered by AI voice assistants that deliver exceptional experiences at unprecedented scale.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}