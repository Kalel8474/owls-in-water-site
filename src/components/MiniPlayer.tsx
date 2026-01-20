'use client'

import { useAudio } from './AudioProvider'
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react'
import Link from 'next/link'

export default function MiniPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
    progress,
    duration,
  } = useAudio()
  
  // Don't show if nothing has played yet
  if (duration === 0) return null
  
  const progressPercent = (progress / duration) * 100 || 0
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-owl-slate/95 backdrop-blur-md border-t border-owl-water/20 z-50">
      {/* Progress bar */}
      <div className="h-1 bg-owl-mist">
        <div 
          className="h-full bg-owl-glow transition-all duration-200"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Track info */}
        <Link href="/music" className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">{currentTrack.title}</p>
          <p className="text-owl-accent/60 text-xs truncate">{currentTrack.artist}</p>
        </Link>
        
        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={playPrev}
            className="p-2 text-owl-accent hover:text-white transition-colors"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button
            onClick={togglePlay}
            className="p-3 bg-owl-water rounded-full text-white hover:bg-owl-glow transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
          
          <button
            onClick={playNext}
            className="p-2 text-owl-accent hover:text-white transition-colors"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        
        {/* Spacer for balance */}
        <div className="flex-1" />
      </div>
    </div>
  )
}