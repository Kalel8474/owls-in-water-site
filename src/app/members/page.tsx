'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { members, Member } from '@/data/members'

export default function MembersPage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-owl-dark to-owl-midnight pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-display text-5xl text-center mb-6 text-owl-accent">Members</h1>
        <p className="text-center text-owl-accent/60 mb-16 max-w-2xl mx-auto">
          Meet the artists behind the sound.
        </p>
        
        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-owl-slate border border-owl-water/20 hover:border-owl-glow/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-owl-water/20"
            >
              {/* Member Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-owl-water/20 to-owl-glow/20 flex items-center justify-center">
                {/* Placeholder - replace with actual image */}
                <span className="text-6xl opacity-50">👤</span>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-owl-dark via-owl-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-owl-glow font-medium">View Bio</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Bio Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-owl-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="relative bg-owl-slate/95 border border-owl-water/30 rounded-3xl max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-owl-accent/70 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Member Image Header */}
            <div className="h-48 bg-gradient-to-br from-owl-water/30 to-owl-glow/30 rounded-t-3xl flex items-center justify-center flex-shrink-0">
              <span className="text-8xl opacity-50">👤</span>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <h2 className="font-display text-2xl text-white mb-1">{selectedMember.name}</h2>
              <p className="text-owl-glow mb-4">{selectedMember.role}</p>
              
              <div className="text-owl-accent/80 leading-relaxed whitespace-pre-line">
                {selectedMember.bio}
              </div>
            </div>
            
            {/* Close Button Footer */}
            <div className="p-4 border-t border-owl-water/20 flex-shrink-0">
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-3 bg-owl-water/20 hover:bg-owl-water/30 text-owl-accent rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}