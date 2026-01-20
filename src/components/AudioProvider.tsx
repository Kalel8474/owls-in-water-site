'use client'

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'
import { tracks, Track } from '@/data/tracks'

interface AudioContextType {
  currentTrackIndex: number
  setCurrentTrackIndex: (index: number) => void
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  progress: number
  duration: number
  volume: number
  setVolume: (vol: number) => void
  isMuted: boolean
  setIsMuted: (muted: boolean) => void
  isRepeat: boolean
  setIsRepeat: (repeat: boolean) => void
  isShuffle: boolean
  setIsShuffle: (shuffle: boolean) => void
  togglePlay: () => void
  playTrack: (index: number) => void
  playNext: () => void
  playPrev: () => void
  seek: (time: number) => void
  currentTrack: Track
}

const AudioContext = createContext<AudioContextType | null>(null)

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) throw new Error('useAudio must be used within AudioProvider')
  return context
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  const currentTrack = tracks[currentTrackIndex]
  
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }
    const audio = audioRef.current
    audio.src = currentTrack.src
    audio.volume = isMuted ? 0 : volume
    
    if (isPlaying) {
      audio.play()
    }
    
    return () => {}
  }, [currentTrackIndex])
  
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
  }, [currentTrackIndex, isRepeat, isShuffle])
  
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
  
  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
    setProgress(time)
  }
  
  return (
    <AudioContext.Provider value={{
      currentTrackIndex,
      setCurrentTrackIndex,
      isPlaying,
      setIsPlaying,
      progress,
      duration,
      volume,
      setVolume,
      isMuted,
      setIsMuted,
      isRepeat,
      setIsRepeat,
      isShuffle,
      setIsShuffle,
      togglePlay,
      playTrack,
      playNext,
      playPrev,
      seek,
      currentTrack,
    }}>
      {children}
    </AudioContext.Provider>
  )
}