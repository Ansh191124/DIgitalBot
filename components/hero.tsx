"use client"
import { ArrowRight, Award, CheckCircle, Clock, MessageSquare, Mic, Shield, Square, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from 'react';

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

export default function Hero() {
    const stats = [
        { label: "Uptime Guarantee", value: 99.9, suffix: "%", formatter: (val: number) => val.toFixed(1) },
        { label: "P99 AI Inference Latency", value: 750, suffix: "ms", formatter: (val: number) => val.toLocaleString() },
        { label: "AI Support Coverage", value: 24, suffix: "/7", formatter: (val: number) => `${val} ` }
    ];

    const [counts, setCounts] = useState([0, 0, 0])
    const [showVideo, setShowVideo] = useState(false)
    const vapiRef = useRef<any>(null)
    const [isCallActive, setIsCallActive] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. Click the microphone to start a conversation in any Language.")
    const [callStatus, setCallStatus] = useState("")
    const lottieAnimationRef = useRef<LottieAnimation | null>(null)
    const [vapiLoaded, setVapiLoaded] = useState(false)
    const soundBarHeightsRef = useRef<number[]>([])
    
    
    // Fixed: Single mounted state to prevent hydration mismatch
    const [mounted, setMounted] = useState(false)

    // Mount effect - only run on client
    useEffect(() => {
        setMounted(true)
        // Initialize stable random heights for sound bars
        soundBarHeightsRef.current = Array.from({ length: 12 }, () => Math.random())
    }, [])
    
    // Initialize Vapi only on client side
    useEffect(() => {
        if (typeof window === 'undefined') return

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
                    setCallStatus('Call active - Listening')
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
                setCallStatus('Failed to initialize voice assistant')
            }
        }

        initVapi()

        return () => {
            if (vapiRef.current) {
                try {
                    vapiRef.current.stop()
                } catch (e) {
                    console.error('Error stopping Vapi:', e)
                }
            }
        }
    }, [])

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
        if (typeof window === 'undefined') return

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
        script.async = true;

        const handleLoad = () => {
            try {
                if (window.lottie && document.getElementById('lottie-animation')) {
                    lottieAnimationRef.current = window.lottie.loadAnimation({
                        container: document.getElementById('lottie-animation'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/animations/circle-waves.json'
                    });
                }
            } catch (error) {
                console.error('Error loading lottie animation:', error);
            }
        };

        script.onload = handleLoad;
        script.onerror = (error) => {
            console.error('Failed to load lottie script:', error);
        };
        
        document.body.appendChild(script);

        return () => {
            if (lottieAnimationRef.current) {
                try {
                    lottieAnimationRef.current.destroy();
                } catch (error) {
                    console.error('Error destroying lottie animation:', error);
                }
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (lottieAnimationRef.current) {
            try {
                if (isSpeaking) {
                    lottieAnimationRef.current.setSpeed(1.5);
                } else {
                    lottieAnimationRef.current.setSpeed(1.0);
                }
            } catch (error) {
                console.error('Error setting lottie speed:', error);
            }
        }
    }, [isSpeaking]);

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
                50% { border-color: rgb(6, 182, 212); }
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
                background-color: rgb(6, 182, 212);
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
            
            /* Responsive animation control using CSS media queries */
            @media (max-width: 768px), (prefers-reduced-motion: reduce) {
                .responsive-animate {
                    animation: none !important;
                }
                .responsive-opacity {
                    opacity: 0.05 !important;
                }
            }
            `}} />

            <section className="pt-6 pb-2 px-3 sm:px-6 lg:px-20 relative overflow-hidden min-h-[85vh] bg-white">

                {mounted && (
                  <>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none responsive-opacity">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/15 to-transparent animate-pulse-slow responsive-animate drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
                        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-600/12 to-transparent animate-pulse-slow responsive-animate drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </>
                )}

                <div className="container mx-auto relative z-30 max-w-5xl opacity-100">
                    
{/* Split Layout - Left Content, Right Voice Assistant */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 animate-fade-in-up-2 pt-4 lg:pt-8">
    
    {/* Left Content Section */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-2 lg:order-1">
        {/* SEO Optimized Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent drop-shadow-sm">
                AI Voice Assistant
            </span>
            <br className="hidden sm:block" />
            <span className="text-gray-800 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                Automate Customer Service
            </span>
        </h1>
        
        {/* SEO Optimized Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 max-w-xl leading-relaxed">
            Deploy intelligent AI voice agents that handle customer inquiries 24/7. 
            <span className="font-semibold text-orange-600"> Reduce costs by 85%, improve satisfaction by 40%.</span> 
            Perfect for call centers, customer support, and sales automation.
        </p>
        
        {/* Action Buttons - Smaller */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6">
            <button
                suppressHydrationWarning
                onClick={toggleCall}
                className={`px-5 py-2.5 text-white font-semibold rounded-full shadow-lg transition-all duration-300 group text-sm sm:text-base ${
                    isCallActive
                        ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:to-red-500 shadow-red-400/50 transform hover:scale-105'
                        : 'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-orange-500/60 hover:shadow-orange-600/70 transform hover:scale-105'
                } flex items-center justify-center`}
                aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
            >
                {isCallActive ? 'Stop Conversation' : 'Try Voice AI Now'}
                {isCallActive ? (
                    <Square className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                    <Mic className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform" />
                )}
            </button>
            <button
                onClick={() => setShowVideo(true)}
                className="px-5 py-2.5 text-orange-600 bg-white border-2 border-orange-400/50 hover:bg-gray-50 hover:border-orange-400/70 shadow-md shadow-orange-400/20 hover:shadow-orange-500/30 rounded-full transition-transform hover:scale-105 text-sm sm:text-base font-medium"
                aria-label="Watch demo video"
            >
                Watch Demo
            </button>
        </div>
        
        {/* Trust Indicators - Compact */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span className="font-medium">Enterprise Secure</span>
            </div>
            <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                <span className="font-medium">50k+ Users</span>
            </div>
        </div>
    </div>
    
    {/* Right Voice Assistant Section - Reduced Size */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
    <div className="relative w-full flex items-center justify-center mb-2 sm:mb-4" style={{height: '45vw', maxHeight: '350px', minHeight: '250px', overflow: 'hidden'}}>
            <div className="absolute inset-0 flex items-center justify-center" style={{clipPath: 'inset(1)', maxWidth: '600px', maxHeight: '700px', margin: '0 auto'}}>
            <div className="relative flex items-center justify-center w-[70vw] max-w-[320px] h-[50vw] max-h-[280px] sm:w-[400px] sm:h-[320px] lg:w-[450px] lg:h-[380px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={` rounded-full transition-all duration-500 ${
                            isSpeaking
                                ? 'bg-orange-500/40 blur-3xl animate-pulse shadow-[0_0_200px_rgba(249,115,22,0.6)]'
                                : 'bg-orange-500/25 blur-3xl shadow-[0_0_80px_rgba(249,115,22,0.4)]'
                            }`}></div>
                    </div>

                    <div className={`relative transition-all duration-500 ${isSpeaking ? 'scale-110' : 'scale-105'}`}>
                        <div
                            id="lottie-animation"
                            className="w-[60vw] h-[60vw] max-w-[280px] max-h-[280px] sm:w-[400px] sm:h-[320px] lg:w-[450px] lg:h-[380px]"
                            style={{
                                filter: isSpeaking
                                    ? 'saturate(1.3) brightness(1.1)'
                                    : 'saturate(1.1) brightness(1.0)'
                            }}
                        ></div> 
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={toggleCall}
                                disabled={callStatus.startsWith('Requesting') || callStatus.startsWith('Starting') || callStatus.startsWith('Stopping')}
                                className={`relative z-30 flex flex-col items-center justify-center
                                    w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-300
                                    backdrop-blur-md border-2
                                    ${isCallActive 
                                        ? 'bg-gradient-to-br from-red-500/70 via-red-600/70 to-red-700/70 border-red-400/50 hover:border-red-300 text-white shadow-2xl shadow-red-500/60 animate-pulse-slow hover:shadow-red-400/80' 
                                        : 'bg-gradient-to-br from-orange-500/70 via-orange-600/70 to-orange-700/70 border-orange-400/50 hover:border-orange-300 text-white shadow-2xl shadow-orange-500/60 hover:shadow-orange-400/80 hover:scale-110'
                                    }
                                    before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-white/20 before:to-transparent before:opacity-50
                                    `}
                                aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
                            >
                                {/* Glossy overlay effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-white/10 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-transparent to-black/20 pointer-events-none"></div>
                                {/* Rotating ring effect */}
                                {!isCallActive && mounted && (
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin-slow"></div>
                                )}
                                <div className="mb-1 relative z-10">
                                    <Mic className="h-4 w-4 sm:h-6 sm:w-6 drop-shadow-lg" />
                                </div>
                                <div className="flex items-end justify-center gap-0.5 h-4 sm:h-10 relative z-10"> 
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
                                                        ? 'bg-gradient-to-t from-white via-orange-100 to-white shadow-lg shadow-orange-200/50'
                                                        : isCallActive
                                                            ? 'bg-gradient-to-t from-white/70 via-orange-100/70 to-white/70 shadow-md shadow-orange-200/30'
                                                            : 'bg-gradient-to-t from-white/40 via-orange-100/40 to-white/40'
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
                </div>
            </div>
        </div>
    

                            {/* Transcript Display - Smaller */}
                            <div suppressHydrationWarning className={`w-full max-w-lg p-4 rounded-xl border transition-all duration-300 mb-4 ${isCallActive ? 'bg-white border-orange-500 shadow-md shadow-orange-500/30' : 'bg-gray-50 border-gray-300'}`}>
                                <div suppressHydrationWarning className="text-xs font-semibold uppercase text-orange-600 mb-2">{callStatus || "Ready to assist"}</div>
                                
                                <p suppressHydrationWarning className="text-xs sm:text-sm text-gray-900 font-medium transition-colors duration-500">{transcript}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Compact Features Section with HD Images */}
            <section className="py-12 px-3 sm:px-6 lg:px-20 bg-white relative overflow-hidden">

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-3 py-1.5 rounded-full text-xs sm:text-sm text-orange-600 font-semibold mb-4 border border-orange-400/30">
                            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Enterprise-Ready Solution</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent mb-4">
                            Why Choose Our AI Voice Assistant?
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
                            Deploy intelligent voice automation that transforms customer interactions and drives measurable business results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
                        {deploymentFeatures.map((feature, index) => {
                            const featureImages = [
                                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop', // Instant Setup
                                'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=300&auto=format&fit=crop', // Security
                                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop', // 24/7
                                'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=300&auto=format&fit=crop', // Scaling
                                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop', // Omnichannel
                                'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=300&auto=format&fit=crop'  // Results
                            ];
                            
                            return (
                                <div
                                    key={index}
                                    className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-gray-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-400/20 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* HD Feature Image */}
                                    <div className="relative h-20 sm:h-24 mb-3 rounded-md overflow-hidden">
                                        <img 
                                            src={featureImages[index]} 
                                            alt={`${feature.title} - AI Voice Assistant Feature`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        <div className="absolute bottom-2 left-2">
                                            <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow-lg" />
                                        </div>
                                    </div>
                                    
                                    {/* Content - Compact */}
                                    <div className="space-y-1.5">
                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Compact CTA */}
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700">
                        <div className="relative z-10 p-6 sm:p-8 text-center">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                                Ready to Transform Your Customer Service?
                            </h3>
                            <p className="text-sm sm:text-base text-white/90 mb-6 max-w-xl mx-auto">
                                Join 50,000+ companies using AI voice automation. Start your free trial - no credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
                                <button className="bg-white text-orange-600 hover:bg-gray-50 rounded-full shadow-lg font-bold px-6 py-3 text-sm sm:text-base transition-all hover:scale-105 flex items-center">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                                <button className="bg-transparent text-white border border-white hover:bg-white/10 rounded-full font-semibold px-6 py-3 text-sm sm:text-base transition-all">
                                    Book Demo
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white text-xs sm:text-sm">
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>14-day trial</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>No credit card</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}