'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { photos, Photo } from '@/data/photos'

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setSelectedIndex(index)
  }
  
  const closeLightbox = () => {
    setSelectedPhoto(null)
  }
  
  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % photos.length
      : selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1
    setSelectedIndex(newIndex)
    setSelectedPhoto(photos[newIndex])
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-owl-dark to-owl-midnight pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-display text-5xl text-center mb-6 text-owl-accent">Gallery</h1>
        <p className="text-center text-owl-accent/60 mb-16 max-w-2xl mx-auto">
          Moments captured from performances, studio sessions, and the journey along the way.
        </p>
        
        {/* Photo Grid - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(photo, index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-owl-slate">
                <img 
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-owl-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-medium">{photo.title}</h3>
                    {photo.caption && (
                      <p className="text-owl-accent/70 text-sm mt-1">{photo.caption}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-owl-dark/95 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-owl-accent hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-4 p-2 text-owl-accent hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] mx-16 flex flex-col items-center">
            <img 
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[65vh] w-auto rounded-xl object-contain"
            />
            <div className="text-center mt-6">
              <h3 className="text-xl text-white">{selectedPhoto.title}</h3>
              {selectedPhoto.caption && (
                <p className="text-owl-accent/70 mt-2">{selectedPhoto.caption}</p>
              )}
              <p className="text-owl-accent/40 text-sm mt-4">
                {selectedIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-4 p-2 text-owl-accent hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  )
}