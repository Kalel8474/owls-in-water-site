import Link from 'next/link'
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-owl-dark via-owl-midnight to-owl-slate" />
        
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-owl-water rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-owl-glow rounded-full filter blur-3xl animate-pulse-slow delay-1000" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Owls</span>
            <span className="text-owl-water"> in </span>
            <span className="text-owl-glow">Water</span>
          </h1>
          
          <p className="text-owl-accent/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Where melodies meet the midnight tide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-8 py-4 bg-owl-water text-white rounded-full font-medium hover:bg-owl-glow transition-all duration-300 hover:scale-105 animate-glow"
            >
              <Play className="w-5 h-5" />
              Listen Now
            </Link>
            
            <Link
              href="/photos"
              className="inline-flex items-center gap-2 px-8 py-4 border border-owl-water/50 text-owl-accent rounded-full font-medium hover:bg-owl-water/10 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-owl-water/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-owl-water rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-24 px-6 bg-owl-midnight">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-owl-accent">
            Latest Release
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-owl-slate rounded-2xl overflow-hidden shadow-2xl border border-owl-water/30">
              <img 
                src="https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/skyline_drive_cover.png"
                alt="Skyline Drive Album Cover"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-display text-3xl mb-4 text-white">スカイラインドライブ (Skyline Drive)</h3>
              <p className="text-owl-accent/70 mb-4 leading-relaxed">
                スカイラインドライブ（Skyline Drive）は、街の輪郭が静かにほどけていく時間帯をたどる作品。
                <br />
                夜明けの気配から、その先へと続く――ひとつの流れとして紡がれた全10曲。
              </p>
              <p className="text-owl-accent/80 leading-relaxed">
                __________________________________________________________________________
              </p>
              <br />
              <p className="text-owl-accent/70 mb-6 leading-relaxed">
                Skyline Drive (スカイラインドライブ) moves through the hours when the city softens.
                <br />
                Ten tracks, one continuous arc—from first light to what comes after.
              </p>
              <Link
                href="/music"
                className="inline-flex items-center gap-2 text-owl-glow hover:text-owl-accent transition-colors"
              >
                <Play className="w-4 h-4" />
                Play Full Album
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
