"use client"
import { useEffect, useState, useRef } from 'react'
import { Sparkles, Mic, Square, MessageSquare, Zap, Shield, Clock, TrendingUp, Users, Award, CheckCircle, ArrowRight } from "lucide-react"

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

            <section className="pt-10 pb-4 px-4 sm:px-8 lg:px-26 relative overflow-hidden min-h-screen bg-light bg-orange-250">

                {mounted && (
                  <>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none  responsive-opacity">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white-500/15 to-transparent animate-pulse-slow responsive-animate drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                        <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-white-600/12 to-transparent animate-pulse-slow responsive-animate drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </>
                )}


                <div className="container mx-auto relative z-30 max-w-6xl opacity-100">
                    
{/* Centered Column Layout */}
<div className="flex flex-col items-center justify-center gap-10 animate-fade-in-up-2 pt-1/4">
    
    {/* Voice Assistant Section */}
    <div className="w-full flex flex-col items-center justify-center">
    <div className="relative w-full flex items-center justify-center mb-2 sm:mb-6" style={{height: '60vw', maxHeight: '500px', minHeight: '300px', overflow: 'hidden'}}>
            <div className="absolute inset-0 flex items-center justify-center" style={{clipPath: 'inset(1)', maxWidth: '800px', maxHeight: '900px', margin: '0 auto'}}>
            <div className="relative flex items-center justify-center w-[98vw] max-w-[480px] h-[65vw] max-h-[400px] sm:w-[700px] sm:h-[480px] lg:w-[850px] lg:h-[620px]">
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
                            className="w-[80vw] h-[80vw] max-w-[420px] max-h-[420px] sm:w-[700px] sm:h-[480px] lg:w-[850px] lg:h-[620px]"
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
                                    w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-all duration-300
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
                                    <Mic className="h-6 w-6 sm:h-8 sm:w-8 drop-shadow-lg" />
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
    

                            {/* Transcript Display */}
                            <div suppressHydrationWarning className={`w-full max-w-2xl p-6 rounded-2xl border transition-all duration-300 mb-6 ${isCallActive ? 'bg-white border-orange-500 shadow-lg shadow-orange-500/40' : 'bg-gray-100 border-gray-300'}`}>
                                <div suppressHydrationWarning className="text-xs font-semibold uppercase text-orange-600 mb-4">{callStatus || "Ready to assist"}</div>
                                
                                <p suppressHydrationWarning className="text-sm sm:text-base text-gray-900 font-medium transition-colors duration-500">{transcript}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-8 justify-center">
                                <button
                                    suppressHydrationWarning
                                    onClick={toggleCall}
                                    className={`px-6 py-3 text-white font-semibold rounded-full shadow-xl transition-all duration-300 group ${isCallActive
                                        ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:to-red-500 shadow-red-400/50 transform hover:scale-105'
                                        : 'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-orange-500/60 hover:shadow-orange-600/70 transform hover:scale-105'
                                    } flex items-center`}
                                    aria-label={isCallActive ? "Stop conversation with AI assistant" : "Start conversation with AI assistant in any Language"}
                                >
                                    {isCallActive ? 'Stop Conversation' : 'Start Conversation'}
                                    {isCallActive ? (
                                        <Square className="ml-2 h-4 w-4" />
                                    ) : (
                                        <Mic className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="px-6 py-3 text-orange-600 bg-white border-2 border-orange-400/50 hover:bg-gray-50 hover:border-orange-400/70 shadow-lg shadow-orange-400/30 hover:shadow-orange-500/40 rounded-full transition-transform hover:scale-105"
                                    aria-label="Watch demo video"
                                >
                                    Watch Demo
                                </button>
                            </div>

                            {/* H1 Heading */}
                            <div className="mt-12 text-center">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 bg-clip-text text-transparent drop-shadow-lg">
                                    AI Voice Agent | AI Voice Assistant
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Deploy Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-orange-500/15 to-transparent rounded-full blur-3xl shadow-[0_0_100px_rgba(249,115,22,0.3)]"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-orange-500/12 to-transparent rounded-full blur-3xl shadow-[0_0_80px_rgba(249,115,22,0.25)]"></div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full text-sm text-orange-600 font-semibold mb-6 border border-orange-400/30 shadow-lg shadow-orange-400/30">
                            <MessageSquare className="h-4 w-4" />
                            <span>Enterprise-Ready Solution</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(249,115,22,0.4)] mb-6">
                            Ready to Deploy AI Voice Assistant
                        </h2>
                        <p className="text-lg sm:text-xl font-semibold bg-white backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-gray-200 text-gray-800 max-w-3xl mx-auto">
                            Launch your intelligent AI assistant in minutes. No coding required. Full customization available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
                        {deploymentFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-400/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                            >
                                
                                {/* Icon container - mobile optimized */}
                                <div className="relative mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
                                    <div className="relative">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md shadow-orange-400/40 group-hover:shadow-orange-500/60 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                                            {/* Glossy overlay effect */}
                                            <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-white/10 to-transparent"></div>
                                            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/10"></div>
                                            
                                            {/* Icon with responsive sizing */}
                                            <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content - mobile optimized */}
                                <div className="relative z-10 text-center sm:text-left">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-orange-600 transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 rounded-3xl p-12 text-center shadow-2xl shadow-orange-500/40 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-700/20 to-orange-600/20 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                                Start Your Free Trial Today
                            </h3>
                            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                                Join thousands of businesses automating customer service with AI. No credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    className="bg-white text-orange-600 hover:bg-gray-50 rounded-full shadow-xl shadow-orange-500/40 hover:shadow-orange-600/50 font-bold px-8 py-6 text-lg transition-all hover:scale-105 border-2 border-white/20 flex items-center"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <button
                                    className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full font-semibold px-8 py-6 text-lg transition-all"
                                >
                                    Schedule Demo
                                </button>
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
        </>
    )
}
