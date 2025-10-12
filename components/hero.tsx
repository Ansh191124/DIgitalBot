"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Mic, Square, Play } from "lucide-react"
import { useEffect, useState, useRef } from 'react'

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
    const [showVideo, setShowVideo] = useState(false)
    const [isCallActive, setIsCallActive] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. Click the microphone to start a conversation.")
    const [callStatus, setCallStatus] = useState("Ready to assist")
    const lottieAnimationRef = useRef<LottieAnimation | null>(null)
    const [isContentVisible, setIsContentVisible] = useState(false)

"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Mic, Square, Play } from "lucide-react"
import { useEffect, useState, useRef } from 'react'

export function Hero() {
    const [showVideo, setShowVideo] = useState(false)
    const [isCallActive, setIsCallActive] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [transcript, setTranscript] = useState("Hello! I'm your AI assistant. Click the microphone to start a conversation.")
    const [callStatus, setCallStatus] = useState("Ready to assist")
    const [isContentVisible, setIsContentVisible] = useState(false)

    useEffect(() => {
        setIsContentVisible(true)
    }, [])

    const toggleCall = () => {
        setIsCallActive(!isCallActive)
        if (!isCallActive) {
            setCallStatus("Listening...")
            // Simulate speaking state changes
            setTimeout(() => setIsSpeaking(true), 1000)
            setTimeout(() => setIsSpeaking(false), 3000)
        } else {
            setCallStatus("Ready to assist")
            setIsSpeaking(false)
            setTranscript("Hello! I'm your AI assistant. Click the microphone to start a conversation.")
        }
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.4); }
                    50% { box-shadow: 0 0 40px rgba(56, 189, 248, 0.8); }
                }
                @keyframes wave-ripple {
                    0% { transform: scale(0.8); opacity: 0.8; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes sound-wave {
                    0% { transform: scaleY(1); }
                    50% { transform: scaleY(1.5); }
                    100% { transform: scaleY(1); }
                }
                .animate-pulse-glow {
                    animation: pulse-glow 2s infinite;
                }
                .animate-wave-ripple {
                    animation: wave-ripple 2s infinite;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-gradient {
                    background-size: 400% 400%;
                    animation: gradient-shift 8s ease infinite;
                }
                .sound-wave {
                    animation: sound-wave 0.6s ease-in-out infinite;
                }
                `
            }} />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-50" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                    }}></div>
                </div>

                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm text-white/90 border border-white/20 mb-8">
                        <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                        <span className="font-medium">AI-Powered Customer Engagement Platform</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        <span className="block text-white mb-2">AI Voice</span>
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                            Assistant
                        </span>
                    </h1>

                    {/* AI Voice Visualizer */}
                    <div className="relative mx-auto mb-12 w-80 h-80 flex items-center justify-center">
                        {/* Outer Ripple Rings */}
                        <div className={`absolute inset-0 rounded-full border-2 border-cyan-400/30 ${isCallActive ? 'animate-wave-ripple' : ''}`}></div>
                        <div className={`absolute inset-4 rounded-full border border-blue-400/20 ${isCallActive ? 'animate-wave-ripple' : ''}`} style={{ animationDelay: '0.5s' }}></div>
                        <div className={`absolute inset-8 rounded-full border border-purple-400/20 ${isCallActive ? 'animate-wave-ripple' : ''}`} style={{ animationDelay: '1s' }}></div>

                        {/* Central AI Orb */}
                        <div className={`relative w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center ${isSpeaking ? 'animate-pulse-glow' : ''} transition-all duration-300`}>
                            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-80"></div>
                            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm"></div>
                            
                            {/* Microphone Icon */}
                            <div className="relative z-10">
                                {isCallActive ? (
                                    <Square className="h-8 w-8 text-white" />
                                ) : (
                                    <Mic className="h-8 w-8 text-white" />
                                )}
                            </div>

                            {/* Sound Waves */}
                            {isSpeaking && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-white/80 rounded-full sound-wave"
                                                style={{
                                                    height: `${20 + Math.random() * 20}px`,
                                                    animationDelay: `${i * 0.1}s`
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Floating Particles */}
                        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-20 right-16 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute bottom-10 right-10 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>

                    {/* Status Display */}
                    <div className="mb-8">
                        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-sm font-semibold text-cyan-400 mb-2">{callStatus}</div>
                            <p className="text-white/90 text-lg max-w-md">{transcript}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            size="lg"
                            onClick={toggleCall}
                            className={`text-white font-bold px-8 py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                                isCallActive
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                            }`}
                        >
                            {isCallActive ? (
                                <>
                                    <Square className="mr-3 h-5 w-5" />
                                    Stop Conversation
                                </>
                            ) : (
                                <>
                                    <Mic className="mr-3 h-5 w-5" />
                                    Start Conversation
                                </>
                            )}
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => setShowVideo(true)}
                            className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105"
                        >
                            <Play className="mr-3 h-5 w-5" />
                            Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Video Modal */}
                {showVideo && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="AI Voice Assistant Demo"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-md transition-colors"
                            >
                                <Square className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}