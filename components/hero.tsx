"use client"
import { Button } from "@/components/ui/button"
import { Sparkles, Mic, Square, MessageSquare, Zap, Shield, Clock, TrendingUp, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

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
    const router = useRouter()

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
    const [vapiLoaded, setVapiLoaded] = useState(false)
    const [isMobileDevice, setIsMobileDevice] = useState(false)
    const [reduceMotion, setReduceMotion] = useState(false)
    const soundBarHeightsRef = useRef<number[]>([])

    // Mount effect - only run on client
    useEffect(() => {
        setIsMounted(true)
        if (typeof window !== 'undefined') {
            // Force animations to be enabled for testing
            setIsMobileDevice(false)
            setReduceMotion(false)
            // Initialize stable random heights for sound bars
            soundBarHeightsRef.current = Array.from({ length: 12 }, () => Math.random())
            // Original detection (commented out for animation testing):
            // setIsMobileDevice(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768)
            // setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
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
                console.error('Error stopping call :', error)
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
                    path: 'https://lottie.host/embed/4d6e4a3e-7f1f-4b0e-9b3e-8c8e3f3e3e3e/K21LOlLjRk.json'
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
            a: "An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time[...]"
        },
        {
            q: "How can AI voice assistants improve customer service?",
            a: "AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, reducing wait times, and offering consistent support a[...]"
        },
        {
            q: "Is the AI voice assistant secure for handling customer data?",
            a: "Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, compliance with GDPR and industry standards, regular security audits, and s[...]"
        },
        {
            q: "Can the AI voice assistant integrate with existing business systems?",
            a: "Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs. This ensures smooth data flow a[...]"
        },
        {
            q: "What industries benefit most from AI voice assistants?",
            a: "AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications. Any business that values cus[...]"
        }
    ]

    const deploymentFeatures = [
        { 
            icon: Zap, 
            title: "Instant Setup", 
            description: "Deploy in under 5 minutes with zero-code integration. Pre-configured templates ensure immediate productivity." 
        },
        { 
            icon: Shield, 
            title: "Enterprise Security", 
            description: "AES-256 encryption, SOC 2 compliance, GDPR ready. Advanced threat detection protects every conversation." 
        },
        { 
            icon: Clock, 
            title: "24/7 Operations", 
            description: "99.9% uptime SLA with unlimited concurrent conversations. No breaks, no downtime, just continuous service." 
        },
        { 
            icon: TrendingUp, 
            title: "Auto-Scaling", 
            description: "From 10 to 100,000+ conversations instantly. Pay-as-you-grow with zero infrastructure overhead." 
        },
        { 
            icon: Users, 
            title: "Omnichannel", 
            description: "Deploy across web, mobile, WhatsApp, SMS, Slack, Teams. One dashboard controls all channels." 
        },
        { 
            icon: Award, 
            title: "Proven Results", 
            description: "85% automation rate, 60% cost reduction, 40% better satisfaction. ROI in 90 days." 
        }
    ]

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
            @keyframes fade-in-left {
                from { opacity: 0; transform: translateX(30px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .animate-fade-in-left {
                animation: fade-in-left 1s ease-out 0.4s forwards;
                opacity: 0;
            }
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
            @keyframes fade-in-right {
                from { opacity: 0; transform: translateX(-30px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
            }
            @keyframes blink-caret {
                from, to { border-color: transparent; }
                50% { border-color: rgb(14, 165, 233); }
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
            @keyframes airflow-1 {
              0% { 
                transform: translateX(-100vw) translateY(0); 
                opacity: 0; 
              }
              5% { 
                opacity: 1; 
              }
              95% { 
                opacity: 1; 
              }
              100% { 
                transform: translateX(100vw) translateY(-15px); 
                opacity: 0; 
              }
            }
            @keyframes airflow-2 {
              0% { 
                transform: translateX(-100vw) translateY(0); 
                opacity: 0; 
              }
              5% { 
                opacity: 1; 
              }
              95% { 
                opacity: 1; 
              }
              100% { 
                transform: translateX(100vw) translateY(20px); 
                opacity: 0; 
              }
            }
            @keyframes airflow-3 {
              0% { 
                transform: translateX(-100vw) translateY(0); 
                opacity: 0; 
              }
              5% { 
                opacity: 1; 
              }
              95% { 
                opacity: 1; 
              }
              100% { 
                transform: translateX(100vw) translateY(-8px); 
                opacity: 0; 
              }
            }
            @keyframes airflow-4 {
              0% { 
                transform: translateX(-100vw) translateY(0); 
                opacity: 0; 
              }
              5% { 
                opacity: 1; 
              }
              95% { 
                opacity: 1; 
              }
              100% { 
                transform: translateX(100vw) translateY(12px); 
                opacity: 0; 
              }
            }
            .animate-spin-slow { animation: spin 20s linear infinite; }
            .animate-pulse-slow { animation: pulse-slow 5s infinite ease-in-out; }
            .animate-ping-slow { animation: ping-slow 3s infinite ease-in-out; }
            .animate-ping-slower { animation: ping-slower 4s infinite ease-in-out; }
            .animate-fade-in-up-1 { 
                animation: fade-in-up 1s ease-out forwards;
                opacity: 0;
            }
            .animate-fade-in-up-2 { 
                animation: fade-in-up 1s ease-out 0.2s forwards;
                opacity: 0;
            }
            .animate-typing {
                position: relative;
                display: inline-block;
            }
            .animate-typing-text {
                opacity: 0;
                animation: typing-fade-in 3.5s steps(150, end) 0.5s forwards;
            }
            @keyframes typing-fade-in {
                0% { 
                    opacity: 0;
                    max-width: 0;
                }
                1% {
                    opacity: 1;
                }
                100% { 
                    opacity: 1;
                    max-width: 100%;
                }
            }
            .animate-typing::after {
                content: '';
                position: absolute;
                right: -2px;
                top: 0;
                width: 2px;
                height: 100%;
                background-color: rgb(14, 165, 233);
                animation: blink-caret 0.75s step-end infinite 0.5s;
            }
            .animate-fade-in-up-3 { 
                animation: fade-in-up 1s ease-out 0.4s forwards;
                opacity: 0;
            }
            .animate-fade-in-right { 
                animation: fade-in-right 1s ease-out 0.4s forwards;
                opacity: 0;
            }
            .animate-fade-in-right > span:nth-child(1) { 
                animation: fade-in-right 0.6s ease-out 0.5s forwards;
                opacity: 0;
            }
            .animate-fade-in-right > span:nth-child(3) { 
                animation: fade-in-right 0.6s ease-out 0.7s forwards;
                opacity: 0;
            }
            .animate-fade-in-right > span:nth-child(5) { 
                animation: fade-in-right 0.6s ease-out 0.9s forwards;
                opacity: 0;
            }
            .animate-fade-in-right > span:nth-child(7) { 
                animation: fade-in-right 0.6s ease-out 1.1s forwards;
                opacity: 0;
            }
            .animate-fade-in-right > span:nth-child(9) { 
                animation: fade-in-right 0.6s ease-out 1.3s forwards;
                opacity: 0;
            }
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
            
            <section className="pt-20 pb-16 px-5 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">

                {/* Futuristic Grid Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
   
               
                {/* Subtle Gradient Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                {/* Animated Light Beams - Reduced on mobile */}
                <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isMobileDevice || reduceMotion ? 'opacity-10' : 'opacity-20'}`}>
                    <div className={`absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-blue-400/30 to-transparent ${!(isMobileDevice || reduceMotion) ? 'animate-pulse-slow' : ''}`}></div>
                    <div className={`absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-purple-400/25 to-transparent ${!(isMobileDevice || reduceMotion) ? 'animate-pulse-slow' : ''}`} style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto relative z-10 max-w-6xl opacity-100">
                    
                    {/* Centered Column Layout */}
                    <div className="flex flex-col items-center justify-center gap-16 animate-fade-in-up-2 pt-8">
                        
                        {/* Voice Assistant Section */}
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="relative w-full h-80 sm:h-96 lg:h-[400px] flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative w-full max-w-xl h-full flex items-center justify-center">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`${isMobileDevice ? 'w-60 h-60' : 'w-80 h-80'} rounded-full transition-all duration-500 ${
                                                isSpeaking
                                                    ? 'bg-gradient-to-r from-orange-500/30 via-orange-600/30 to-orange-500/30 blur-3xl'
                                                    : 'bg-gradient-to-r from-orange-400/20 via-orange-500/20 to-orange-400/20 blur-3xl'
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
                                                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-400/10 animate-wave-1"></div>
                                                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-400/5 animate-wave-2" style={{ animationDelay: '0.3s' }}></div>
                                                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-400/0 animate-wave-3" style={{ animationDelay: '0.6s' }}></div>
                                           
                                                <button
                                                    onClick={toggleCall}
                                                    disabled={callStatus.startsWith('Requesting') || callStatus.startsWith('Starting') || callStatus.startsWith('Stopping')}
                                                    className={`relative z-30 flex flex-col items-center justify-center
                                                        w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-all duration-300 shadow-2xl
                                                        backdrop-blur-sm
                                                        ${isCallActive 
                                                            ? 'bg-red-500/60 hover:bg-red-600/70 text-white animate-pulse-slow' 
                                                            : 'bg-orange-500/60 hover:bg-orange-600/70 text-white hover:scale-105'
                                                        }`}
                                                    aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
                                                >
                                                    <div className="mb-1">
                                                        {isCallActive ? (
                                                            <Square className="h-8 w-8 sm:h-10 sm:w-10" />
                                                        ) : (
                                                            <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10" />
                                                        )}
                                                    </div>

                                                    <div className="flex items-end justify-center gap-0.5 h-4 sm:h-5"> 
                                                        {[...Array(12)].map((_, i) => {
                                                            const centerIndex = 5.5;
                                                            const maxHeight = 12 - (Math.abs(i - centerIndex) * 0.8); 
                                                            const minHeight = 2;
                                                            const randomValue = soundBarHeightsRef.current[i] || 0.5;
                                                            
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className={`w-0.5 sm:w-1 transition-all duration-300 rounded-full ${
                                                                        isSpeaking
                                                                            ? 'bg-gradient-to-t from-white via-orange-100 to-orange-200 shadow-sm'
                                                                            : isSpeaking
                                                                                ? 'bg-gradient-to-t from-white/60 via-orange-100/60 to-orange-200/60'
                                                                                : 'bg-gradient-to-t from-white/30 via-orange-100/30 to-orange-200/30'
                                                                    }`}
                                                                    style={{
                                                                        height: isSpeaking
                                                                            ? `${randomValue * (maxHeight - 4) + 4}px`
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
                                                isSpeaking ? 'border-orange-400/60 border-dashed' : 'border-orange-400/30 border-dashed'
                                                } ${!(isMobileDevice || reduceMotion) ? 'animate-spin-slow' : ''}`}></div>
                                            <div className={`absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full border transition-all duration-500 ${
                                                isSpeaking ? 'border-orange-300/50 border-dotted' : 'border-orange-300/25 border-dotted'
                                                }`} style={!(isMobileDevice || reduceMotion) ? { animation: 'spin 25s linear infinite reverse' } : {}}></div>

                                            <div className={`w-48 sm:w-56 h-48 sm:h-56 rounded-full transition-all duration-300 ${
                                                isSpeaking ? 'bg-orange-400/20' : 'bg-orange-400/10'
                                                } ${!(isMobileDevice || reduceMotion) ? (isSpeaking ? 'animate-ping' : 'animate-ping-slow') : ''}`} style={{ animationDuration: '2s' }}></div>
                                            <div className={`absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full transition-all duration-300 ${
                                                isSpeaking ? 'bg-orange-400/15' : 'bg-orange-400/8'
                                                } ${!(isMobileDevice || reduceMotion) ? (isSpeaking ? 'animate-ping' : 'animate-ping-slower') : ''}`} style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                                        </div>

                                        {isCallActive && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className={`absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full border-2 transition-all duration-300 ${
                                                    isSpeaking ? 'border-orange-500/70 animate-ping' : 'border-orange-500/30 animate-ping'
                                                    }`} style={{ animationDuration: '1.5s' }}></div>
                                                <div className={`absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full border transition-all duration-300 ${
                                                    isSpeaking ? 'border-orange-500/60 animate-ping' : 'border-orange-500/20 animate-ping'
                                                    }`} style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
                                            </div>
                                        )}

                                        {isSpeaking && (
                                            <>
                                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                                                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                                                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{ animationDuration: '1.8s' }}></div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Transcript Display */}
                            <div className={`w-full max-w-2xl p-4 rounded-2xl border transition-all duration-300 mb-6 ${isCallActive ? 'bg-white/90 border-orange-500 shadow-lg shadow-orange-500/30' : 'bg-white/80 border-purple-300'}`}>
                                <div className="text-xs font-semibold uppercase text-orange-600 mb-2">{callStatus || "Ready to assist"}</div>
                                <p className="text-sm sm:text-base text-gray-900 font-medium transition-colors duration-500">{transcript}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    onClick={toggleCall}
                                    className={`text-white font-semibold rounded-full shadow-xl transition-all duration-300 group ${isCallActive
                                        ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:to-red-500 shadow-red-400/50 transform hover:scale-105'
                                        : 'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 hover:from-orange-700 hover:to-orange-500 shadow-orange-400/50 transform hover:scale-105'
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
                                    className="text-orange-400 bg-white/10 border-orange-500/30 hover:bg-white/20 rounded-full shadow-lg transition-transform hover:scale-105"
                                    aria-label="Watch demo video"
                                >
                                    Watch Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Deploy Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-pink-50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(251, 146, 60, 0.2) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(251, 146, 60, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-pink-200/25 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-sm text-orange-700 font-semibold mb-6 border border-orange-300">
                            <MessageSquare className="h-4 w-4" />
                            <span>Enterprise-Ready Solution</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg mb-6">
                            Ready to Deploy AI Voice Assistant
                        </h2>
                        <p className="text-lg sm:text-xl font-semibold bg-white backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-orange-300 text-gray-700 max-w-3xl mx-auto">
                            Launch your intelligent AI assistant in minutes. No coding required. Full customization available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
                        {deploymentFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-orange-300 hover:border-orange-500 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-transparent to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Icon container - mobile optimized */}
                                <div className="relative mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
                                    <div className="relative">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-orange-500/50 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                                            {/* Glossy overlay effect */}
                                            <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-white/10 to-transparent"></div>
                                            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/10"></div>
                                            
                                            {/* Icon with responsive sizing */}
                                            <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                        </div>
                                        
                                        {/* Animated ring on hover */}
                                        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/50 group-hover:scale-125 transition-all duration-500"></div>
                                    </div>
                                </div>
                                
                                {/* Content - mobile optimized */}
                                <div className="relative z-10 text-center sm:text-left">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-orange-600 transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                                Start Your Free Trial Today
                            </h3>
                            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                                Join thousands of businesses automating customer service with AI. No credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-orange-600 hover:bg-gray-50 rounded-full shadow-xl font-bold px-8 py-6 text-lg transition-all hover:scale-105"
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
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white">
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

            {/* FAQ Section (navigates to separate pages) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-purple-50 backdrop-blur-sm">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg sm:text-xl font-semibold bg-white backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-purple-300 text-gray-700 max-w-3xl mx-auto">Everything you need to know about <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI voice assistants</span></p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-2 border-purple-300 hover:border-purple-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-purple-200 transition-all">
                                <button
                                    onClick={() => router.push(`/faq/${index}`)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-purple-50 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</h3>
                                    <ArrowRight className="h-5 w-5 text-purple-600 shrink-0 transition-transform duration-300" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <button onClick={() => router.push('/faq')} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:from-blue-700 hover:to-pink-700 transition shadow-lg hover:shadow-xl hover:scale-105">
                            View all FAQs
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>

       
        </>
    )
}