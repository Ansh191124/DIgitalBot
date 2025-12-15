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
                50% { border-color: rgb(249, 115, 22); }
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
            @keyframes gridMove {
                0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
                100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
            }
            @keyframes glitch {
                0%, 90%, 100% { transform: translate(0); }
                92% { transform: translate(-2px, 2px); }
                94% { transform: translate(2px, -2px); }
                96% { transform: translate(-2px, -2px); }
            }
            @keyframes shimmer {
                0% { background-position: 0% center; }
                100% { background-position: 200% center; }
            }
            @keyframes borderPulse {
                0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
                50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
            }
            .glitch-text {
                animation: glitch 3s infinite;
            }
            .shimmer-text {
                background: linear-gradient(135deg, #00ffff 0%, #0080ff 50%, #00ffff 100%);
                background-size: 200% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: shimmer 3s linear infinite;
            }
            .border-pulse {
                animation: borderPulse 2s infinite;
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
                background-color: rgb(249, 115, 22);
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

            <section className="pb-2 px-4 relative overflow-hidden min-h-[85vh] bg-black">

                {/* Cyberpunk Grid Background */}
                <div className="fixed inset-0 z-0" style={{
                    background: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }}></div>

                {mounted && (
                  <>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none responsive-opacity">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent animate-pulse-slow responsive-animate drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"></div>
                        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-600/12 to-transparent animate-pulse-slow responsive-animate drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]" style={{ animationDelay: '1s' }}></div>

                        {/* Floating Holographic Elements */}
                        <div className="absolute top-1/4 left-1/6 w-32 h-32 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
                        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border-2 border-cyan-400/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
                    </div>
                  </>
                )}

                <div className="container mx-auto relative z-30 opacity-100">

{/* Split Layout - Left Content, Right Voice Assistant */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 animate-fade-in-up-2 pt-1 lg:pt-2">

    {/* Left Content Section */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-2 lg:order-1 lg:pr-8">
        {/* Cyberpunk Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6 uppercase tracking-wider">
            <span className="shimmer-text text-cyan-400 glitch-text" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}>
                AI Voice Assistant
            </span>
            <br className="hidden sm:block" />
            <span className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest">
                Automate Customer Service
            </span>
        </h1>

        {/* Cyberpunk Description */}
        <p className="text-sm sm:text-base lg:text-lg text-white mb-6 lg:mb-8 max-w-xl leading-relaxed">
            Deploy intelligent AI voice agents that handle customer inquiries 24/7.
            <span className="font-semibold text-cyan-400"> Reduce costs by 85%, improve satisfaction by 40%.</span>
            Perfect for call centers, customer support, and sales automation.
        </p>

        {/* Cyberpunk Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6">
            <button
                suppressHydrationWarning
                onClick={toggleCall}
                className={`px-8 py-3 text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 group ${
                    isCallActive
                        ? 'bg-red-400 hover:shadow-[0_0_50px_rgba(239,68,68,0.9)] hover:-translate-y-1'
                        : 'bg-cyan-400 hover:shadow-[0_0_50px_rgba(0,255,255,0.9)] hover:-translate-y-1'
                } flex items-center justify-center border-pulse`}
                style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}
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
                className="px-8 py-3 bg-transparent text-cyan-400 border-2 border-cyan-400 font-bold text-sm tracking-widest uppercase hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all"
                style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}
                aria-label="Watch demo video"
            >
                Watch Demo
            </button>
        </div>

        {/* Cyberpunk Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-cyan-400 uppercase tracking-widest">
            <div className="flex items-center gap-1.5 border border-cyan-400/30 px-2 py-1 rounded" style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}>
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                <span className="font-bold">Enterprise Secure</span>
            </div>
            <div className="flex items-center gap-1.5 border border-cyan-400/30 px-2 py-1 rounded" style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}>
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                <span className="font-bold">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1.5 border border-cyan-400/30 px-2 py-1 rounded" style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}>
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                <span className="font-bold">50k+ Users</span>
            </div>
        </div>
    </div>

    {/* Right Voice Assistant Section - Reduced Size */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
    <div className="relative w-full flex items-center justify-center mb-2 sm:mb-4" style={{height: '60vw', maxHeight: '500px', minHeight: '350px', overflow: 'hidden'}}>
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
                                        : 'bg-gradient-to-br from-cyan-500/70 via-cyan-600/70 to-cyan-700/70 border-cyan-400/50 hover:border-cyan-300 text-white shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-400/80 hover:scale-110'
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
                                <div className="flex items-end justify-center gap-0.5 h-5 sm:h-12 relative z-10">
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
                            <div suppressHydrationWarning className={`w-full max-w-lg p-4 rounded-xl border transition-all duration-300 mb-4 ${isCallActive ? 'bg-black/80 border-cyan-500 shadow-md shadow-cyan-500/30' : 'bg-black/60 border-gray-600'}`}>
                                <div suppressHydrationWarning className="text-xs font-semibold uppercase text-cyan-400 mb-2">{callStatus || "Ready to assist"}</div>

                                <p suppressHydrationWarning className="text-xs sm:text-sm text-white font-medium transition-colors duration-500">{transcript}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* AI Voice Use Cases Section */}
            <section className="py-8 px-4 bg-black relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 px-3 py-1.5 border border-cyan-400/30 text-xs sm:text-sm text-cyan-400 font-semibold mb-4 uppercase tracking-widest" style={{
                            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                            boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
                        }}>
                            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>🎯 Our AI Voice Services</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-4 uppercase tracking-wider shimmer-text" style={{
                            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                        }}>
                            Choose Your AI Voice Solution
                        </h2>
                        <p className="text-sm sm:text-base text-white max-w-2xl mx-auto">
                            Select from our comprehensive suite of AI voice services. Each solution is ready to deploy on our platform and can be customized for your business needs.
                        </p>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
                        {/* Doctor Appointments */}
                        <div className="group relative bg-gradient-to-br from-cyan-500/10 via-black/90 to-cyan-600/10 border border-cyan-400/30 overflow-hidden transition-all duration-500 hover:border-cyan-300/60 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:-translate-y-2" style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}>
                            <div className="relative h-32 sm:h-40 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center&auto=format&q=90"
                                    alt="AI Doctor Appointment Scheduling - Medical Healthcare Assistant"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute top-3 left-3">
                                    <div className="p-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 rounded-lg">
                                        <Calendar className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                                    Doctor Appointments
                                </h3>
                                <p className="text-sm text-white leading-relaxed mb-4">
                                    24/7 AI scheduling for medical appointments. Handles patient inquiries, insurance verification, and appointment confirmations automatically.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-widest">
                                    <CheckCircle className="h-3 w-3" />
                                    <span>95% Booking Success</span>
                                </div>
                            </div>
                        </div>

                        {/* Virtual Receptionist */}
                        <div className="group relative bg-gradient-to-br from-cyan-500/10 via-black/90 to-cyan-600/10 border border-cyan-400/30 overflow-hidden transition-all duration-500 hover:border-cyan-300/60 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:-translate-y-2" style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}>
                            <div className="relative h-32 sm:h-40 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center&auto=format&q=90"
                                    alt="AI Virtual Receptionist - Professional Business Assistant"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute top-3 left-3">
                                    <div className="p-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 rounded-lg">
                                        <Users className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                                    Virtual Receptionist
                                </h3>
                                <p className="text-sm text-white leading-relaxed mb-4">
                                    Professional AI receptionist that greets callers, routes calls, takes messages, and provides company information with human-like interaction.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-widest">
                                    <CheckCircle className="h-3 w-3" />
                                    <span>100% Call Coverage</span>
                                </div>
                            </div>
                        </div>

                        {/* Lead Generation */}
                        <div className="group relative bg-gradient-to-br from-cyan-500/10 via-black/90 to-cyan-600/10 border border-cyan-400/30 overflow-hidden transition-all duration-500 hover:border-cyan-300/60 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:-translate-y-2" style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}>
                            <div className="relative h-32 sm:h-40 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center&auto=format&q=90"
                                    alt="AI Lead Generation Outbound Calls - Sales Automation"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute top-3 left-3">
                                    <div className="p-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 rounded-lg">
                                        <TrendingUp className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                                    Lead Generation
                                </h3>
                                <p className="text-sm text-white leading-relaxed mb-4">
                                    Automated outbound calling for lead qualification, follow-ups, and appointment setting. Convert prospects into customers 24/7.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-widest">
                                    <CheckCircle className="h-3 w-3" />
                                    <span>3x More Leads</span>
                                </div>
                            </div>
                        </div>

                        {/* Customer Care Voice Agent */}
                        <div className="group relative bg-gradient-to-br from-cyan-500/10 via-black/90 to-cyan-600/10 border border-cyan-400/30 overflow-hidden transition-all duration-500 hover:border-cyan-300/60 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:-translate-y-2" style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}>
                            <div className="relative h-32 sm:h-40 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&h=400&fit=crop&crop=center&auto=format&q=90"
                                    alt="AI Customer Care Voice Agent - Support Assistance"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute top-3 left-3">
                                    <div className="p-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 rounded-lg">
                                        <Headphones className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                                    Customer Care Agent
                                </h3>
                                <p className="text-sm text-white leading-relaxed mb-4">
                                    Intelligent customer support that handles inquiries, troubleshooting, and escalations with empathy and accuracy.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-widest">
                                    <CheckCircle className="h-3 w-3" />
                                    <span>90% Resolution Rate</span>
                                </div>
                            </div>
                        </div>

                        {/* AI Call Center */}
                        <div className="group relative bg-gradient-to-br from-cyan-500/10 via-black/90 to-cyan-600/10 border border-cyan-400/30 overflow-hidden transition-all duration-500 hover:border-cyan-300/60 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:-translate-y-2" style={{
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}>
                            <div className="relative h-32 sm:h-40 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&crop=center&auto=format&q=90"
                                    alt="AI Call Center Operations - Enterprise Communication Hub"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute top-3 left-3">
                                    <div className="p-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 rounded-lg">
                                        <Shield className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                                    AI Call Center
                                </h3>
                                <p className="text-sm text-white leading-relaxed mb-4">
                                    Complete call center automation with intelligent routing, queue management, and real-time analytics for enterprise-scale operations.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-widest">
                                    <CheckCircle className="h-3 w-3" />
                                    <span>Unlimited Capacity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compact Features Section with HD Images */}
            <section className="py-8 px-4 bg-black relative overflow-hidden">

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 px-3 py-1.5 border border-cyan-400/30 text-xs sm:text-sm text-cyan-400 font-semibold mb-4 uppercase tracking-widest" style={{
                            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                            boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
                        }}>
                            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Enterprise-Ready Solution</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-4 uppercase tracking-wider shimmer-text" style={{
                            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                        }}>
                            Why Choose Our AI Voice Assistant?
                        </h2>
                        <p className="text-sm sm:text-base text-white max-w-2xl mx-auto">
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
                                    className="bg-cyan-400/5 border border-cyan-400/20 overflow-hidden transition-all duration-400 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:-translate-y-3 group relative"
                                    style={{
                                        clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                                    }}
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
                                    <div className="space-y-1.5 relative z-10">
                                        <h3 className="text-sm sm:text-base font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-white leading-relaxed line-clamp-3">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cyberpunk CTA */}
                    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600/20 via-cyan-500/20 to-cyan-700/20 border-2 border-cyan-400/30" style={{
                        clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
                        boxShadow: '0 0 50px rgba(0, 255, 255, 0.3)'
                    }}>
                        <div className="relative z-10 p-6 sm:p-8 text-center">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-3 uppercase tracking-wider shimmer-text">
                                Ready to Transform Your Customer Service?
                            </h3>
                            <p className="text-sm sm:text-base text-white mb-6 max-w-xl mx-auto">
                                Join 50,000+ companies using AI voice automation. Start your free trial - no credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
                                <button className="bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg font-bold px-6 py-3 text-sm sm:text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] flex items-center uppercase tracking-widest" style={{
                                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                                }}>
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                                <button className="bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 font-bold px-6 py-3 text-sm sm:text-base transition-all uppercase tracking-widest" style={{
                                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                                }}>
                                    Book Demo
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white text-xs sm:text-sm uppercase tracking-widest">
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>14-day trial</span>
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
