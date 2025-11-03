"use client"

import { useState, useRef } from "react"
import { Pause, Play } from "lucide-react"

const WAVEFORM_HEIGHTS = Array.from({ length: 40 }, (_, i) => Math.sin(i * 0.5))

interface VoiceConversationPlayerProps {
  audioSrc: string
}

export function VoiceConversationPlayer({ audioSrc }: VoiceConversationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      void audio.play()
    }
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-sky-200/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-sky-50/20 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6 h-24 bg-linear-to-br from-sky-50 to-blue-50/30 rounded-2xl border border-sky-100/50 relative overflow-hidden">
          <div className="flex items-end justify-center gap-1.5 h-16">
            {WAVEFORM_HEIGHTS.map((sinValue, index) => {
              const playingHeight = sinValue * 20 + 25
              const idleHeight = sinValue * 15 + 15
              const height = isPlaying ? playingHeight : idleHeight

              return (
                <div
                  key={index}
                  className={
                    isPlaying
                      ? "w-1.5 bg-linear-to-t from-sky-600 via-sky-500 to-sky-400 rounded-full transition-all duration-300"
                      : "w-1.5 bg-linear-to-t from-sky-300/40 via-sky-200/40 to-sky-100/40 rounded-full"
                  }
                  style={{
                    height: `${height}px`,
                    animation: isPlaying
                      ? `sound-wave ${0.5 + (index % 3) * 0.2}s ease-in-out infinite`
                      : undefined,
                    animationDelay: isPlaying ? `${index * 0.05}s` : undefined,
                  }}
                />
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handlePlayPause}
            className="group relative flex items-center gap-3 px-8 py-3 bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            aria-label={isPlaying ? "Pause voice AI demonstration" : "Play voice AI for business sample conversation"}
            type="button"
          >
            <div className="absolute inset-0 bg-linear-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-3">
              {isPlaying ? <Pause className="w-5 h-5 animate-pulse" /> : <Play className="w-5 h-5" />}
              <span className="font-semibold">
                {isPlaying ? "Pause Voice AI Demo" : "Play Voice AI for Business Sample"}
              </span>
            </div>
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} aria-label="Voice AI for business sample conversation audio" />

      <style jsx>{`
        @keyframes sound-wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
}
