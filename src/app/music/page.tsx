import Link from 'next/link'
import { albums } from '@/data/albums'

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-owl-dark to-owl-midnight pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="font-display text-5xl text-center mb-6 text-owl-accent">Music</h1>
        <p className="text-center text-owl-accent/60 mb-16 max-w-2xl mx-auto">
          Explore our albums and releases.
        </p>
        
        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={`/music/${album.slug}`}
              className="group"
            >
              <div className="aspect-square bg-owl-slate rounded-2xl overflow-hidden shadow-xl border border-owl-water/20 group-hover:border-owl-glow/50 transition-all duration-300 group-hover:scale-105">
                <img 
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-medium group-hover:text-owl-glow transition-colors">
                  {album.titleJp && <span className="block text-lg">{album.titleJp}</span>}
                  <span className="text-owl-accent/70 text-sm">{album.title}</span>
                </h3>
                <p className="text-owl-accent/50 text-sm mt-1">{album.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}