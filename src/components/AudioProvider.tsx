'use client'

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'
import { tracks, Track } from '@/data/albums/skyline-drive'

// GA tracking helper
const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }
}

// Check if returning listener (visited before)
const checkReturningListener = () => {
  if (typeof window === 'undefined') return false
  const lastVisit = localStorage.getItem('oiw_last_visit')
  const now = Date.now()
  localStorage.setItem('oiw_last_visit', now.toString())
  
  if (lastVisit) {
    const daysSinceLastVisit = (now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24)
    return daysSinceLastVisit > 1 // Returning if more than 1 day
  }
  return false
}

// Track repeat plays of same song
const getPlayHistory = (): Record<string, number> => {
  if (typeof window === 'undefined') return {}
  const history = localStorage.getItem('oiw_play_history')
  return history ? JSON.parse(history) : {}
}

const recordPlay = (trackTitle: string) => {
  if (typeof window === 'undefined') return 0
  const history = getPlayHistory()
  history[trackTitle] = (history[trackTitle] || 0) + 1
  localStorage.setItem('oiw_play_history', JSON.stringify(history))
  return history[trackTitle]
}

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
  
  // GA tracking state
  const [halfwaySent, setHalfwaySent] = useState(false)
  const [hasTrackedPlay, setHasTrackedPlay] = useState(false)
  const [sessionTracksCompleted, setSessionTracksCompleted] = useState<Set<number>>(new Set())
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  const currentTrack = tracks[currentTrackIndex]
  
  // Check for returning listener on mount
  useEffect(() => {
    if (checkReturningListener()) {
      trackEvent('return_listener', {
        album: 'Skyline Drive'
      })
    }
  }, [])
  
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }
    const audio = audioRef.current
    audio.src = currentTrack.src
    audio.volume = isMuted ? 0 : volume
    
    // Reset tracking flags for new track
    setHalfwaySent(false)
    setHasTrackedPlay(false)
    
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
      
      // Track 50% milestone
      if (audio.duration > 0) {
        const percent = (audio.currentTime / audio.duration) * 100
        if (percent >= 50 && !halfwaySent) {
          setHalfwaySent(true)
          trackEvent('track_50_percent', {
            track_name: currentTrack.title,
            track_number: currentTrackIndex + 1,
            album: 'Skyline Drive'
          })
        }
      }
    }
    
    const handleEnded = () => {
      // Track completion
      trackEvent('track_complete', {
        track_name: currentTrack.title,
        track_number: currentTrackIndex + 1,
        album: 'Skyline Drive'
      })
      
      // Track album completion (last track)
      const newCompleted = new Set(sessionTracksCompleted)
      newCompleted.add(currentTrackIndex)
      setSessionTracksCompleted(newCompleted)
      
      // Check if all tracks have been completed this session
      if (newCompleted.size === tracks.length) {
        trackEvent('album_complete', {
          album: 'Skyline Drive',
          track_count: tracks.length
        })
      }
      
      // Check if this is the last track (linear album completion)
      if (currentTrackIndex === tracks.length - 1 && !isShuffle) {
        trackEvent('album_complete', {
          album: 'Skyline Drive',
          completion_type: 'sequential'
        })
      }
      
      if (isRepeat) {
        audio.currentTime = 0
        audio.play()
        // Track replay
        trackEvent('track_replay', {
          track_name: currentTrack.title,
          track_number: currentTrackIndex + 1,
          album: 'Skyline Drive'
        })
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
  }, [currentTrackIndex, isRepeat, isShuffle, halfwaySent, currentTrack, sessionTracksCompleted])
  
  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      
      // Track play event (only once per track load)
      if (!hasTrackedPlay) {
        setHasTrackedPlay(true)
        const playCount = recordPlay(currentTrack.title)
        
        trackEvent('track_play', {
          track_name: currentTrack.title,
          track_number: currentTrackIndex + 1,
          album: 'Skyline Drive',
          play_count: playCount
        })
        
        // Track repeat listens (same song played before)
        if (playCount > 1) {
          trackEvent('repeat_track_play', {
            track_name: currentTrack.title,
            track_number: currentTrackIndex + 1,
            album: 'Skyline Drive',
            total_plays: playCount
          })
        }
      }
    }
    setIsPlaying(!isPlaying)
  }
  
  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
    
    // Track play event
    const track = tracks[index]
    const playCount = recordPlay(track.title)
    
    trackEvent('track_play', {
      track_name: track.title,
      track_number: index + 1,
      album: 'Skyline Drive',
      play_count: playCount,
      source: 'direct_select'
    })
    
    // Track repeat listens
    if (playCount > 1) {
      trackEvent('repeat_track_play', {
        track_name: track.title,
        track_number: index + 1,
        album: 'Skyline Drive',
        total_plays: playCount
      })
    }
    
    // Track if starting from beginning (playlist start)
    if (index === 0) {
      trackEvent('playlist_start', {
        album: 'Skyline Drive'
      })
    }
    
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