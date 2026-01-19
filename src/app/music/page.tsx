'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle } from 'lucide-react'
import { tracks, Track } from '@/data/tracks'

export default function MusicPage() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  
  const currentTrack = tracks[currentTrackIndex]
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])
  
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    
    const updateProgress = () => {
      setProgress(audio.currentTime)
      setDuration(audio.duration || 0)
    }
    
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0
        audio.play()
      } else {
        playNext()
      }
    }
    
    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', updateProgress)
    audio.addEventListener('ended', handleEnded)
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', updateProgress)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex, isRepeat])
  
  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
  
  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
    setTimeout(() => {
      audioRef.current?.play()
    }, 100)
  }
  
  const playNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * tracks.length)
      playTrack(randomIndex)
    } else {
      const nextIndex = (currentTrackIndex + 1) % tracks.length
      playTrack(nextIndex)
    }
  }
  
  const playPrev = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1
    playTrack(prevIndex)
  }
  
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
    setProgress(newTime)
  }
  
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-owl-dark to-owl-midnight pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl text-center mb-16 text-owl-accent">Music</h1>
        
        {/* Now Playing Card */}
        <div className="bg-owl-slate/50 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-owl-water/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Album Art */}
            <div className="w-48 h-48 bg-owl-mist rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-owl-water/30 to-owl-glow/30 flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
            </div>
            
            {/* Track Info & Controls */}
            <div className="flex-1 w-full">
              <div className="text-center md:text-left mb-6">
                <h2 className="text-2xl font-display text-white mb-1">{currentTrack.title}</h2>
                <p className="text-owl-accent/70">{currentTrack.artist}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={progress}
                  onChange={handleProgressChange}
                  className="audio-progress w-full h-2 bg-owl-mist rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #7eb8da ${(progress / duration) * 100 || 0}%, #2d2d44 ${(progress / duration) * 100 || 0}%)`
                  }}
                />
                <div className="flex justify-between text-sm text-owl-accent/60 mt-2">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              
              {/* Main Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-2 rounded-full transition-colors ${isShuffle ? 'text-owl-glow' : 'text-owl-accent/50 hover:text-owl-accent'}`}
                >
                  <Shuffle className="w-5 h-5" />
                </button>
                
                <button
                  onClick={playPrev}
                  className="p-3 text-owl-accent hover:text-white transition-colors"
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                
                <button
                  onClick={togglePlay}
                  className="p-4 bg-owl-water rounded-full text-white hover:bg-owl-glow transition-all duration-300 hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
                
                <button
                  onClick={playNext}
                  className="p-3 text-owl-accent hover:text-white transition-colors"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-2 rounded-full transition-colors ${isRepeat ? 'text-owl-glow' : 'text-owl-accent/50 hover:text-owl-accent'}`}
                >
                  <Repeat className="w-5 h-5" />
                </button>
              </div>
              
              {/* Volume Control */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-owl-accent/70 hover:text-owl-accent"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value))
                    setIsMuted(false)
                  }}
                  className="w-24 h-1 bg-owl-mist rounded-full appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Playlist */}
        <div className="bg-owl-slate/30 backdrop-blur-sm rounded-2xl border border-owl-water/10 overflow-hidden">
          <div className="p-4 border-b border-owl-water/10">
            <h3 className="text-owl-accent font-medium">Playlist • {tracks.length} tracks</h3>
          </div>
          
          <div className="divide-y divide-owl-water/10">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => playTrack(index)}
                className={`w-full px-4 py-3 flex items-center gap-4 hover:bg-owl-water/10 transition-colors text-left ${
                  index === currentTrackIndex ? 'bg-owl-water/20' : ''
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center text-owl-accent/50">
                  {index === currentTrackIndex && isPlaying ? (
                    <div className="flex gap-0.5">
                      <span className="w-1 h-4 bg-owl-glow rounded animate-pulse" />
                      <span className="w-1 h-3 bg-owl-glow rounded animate-pulse delay-75" />
                      <span className="w-1 h-5 bg-owl-glow rounded animate-pulse delay-150" />
                    </div>
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={`truncate ${index === currentTrackIndex ? 'text-owl-glow' : 'text-white'}`}>
                    {track.title}
                  </p>
                  <p className="text-sm text-owl-accent/50 truncate">{track.artist}</p>
                </div>
                
                <span className="text-sm text-owl-accent/50">{track.duration}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={currentTrack.src} preload="metadata" />
      </div>
    </div>
  )
}
