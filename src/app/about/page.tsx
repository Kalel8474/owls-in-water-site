import { Music, Heart, Mic2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-owl-dark to-owl-midnight pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl text-center mb-16 text-owl-accent">About</h1>
        
        {/* Band Story */}
        <section className="mb-20">
          <div className="bg-owl-slate/30 rounded-3xl p-8 md:p-12 border border-owl-water/10">
            <h2 className="font-display text-3xl text-owl-glow mb-6">The Story</h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Owls in Water began as an experiment in blending the ethereal with the grounded, 
                the nocturnal with the reflective. Our music lives in the space between waking 
                and dreaming, where melodies ripple like moonlight on still water.
              </p>
              
              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Each song is a story. Each note is an invitation to pause, reflect, and find 
                something new in the familiar darkness. We believe music should move you—not 
                just your body, but your thoughts, your memories, your sense of what's possible.
              </p>
              
              <p className="text-owl-accent/80 leading-relaxed">
                Named for the paradox of creatures of the night meeting their reflection in 
                water, we create soundscapes that embrace contradiction: heavy and light, 
                ancient and modern, solitary and connected.
              </p>
            </div>
          </div>
        </section>
        
        {/* Values/Philosophy */}
        <section className="mb-20">
          <h2 className="font-display text-3xl text-center text-owl-accent mb-12">Our Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10 text-center">
              <div className="w-14 h-14 bg-owl-water/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-7 h-7 text-owl-glow" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Authentic Sound</h3>
              <p className="text-owl-accent/60 text-sm">
                Every note is intentional. We craft music that means something, 
                not just sounds that fill space.
              </p>
            </div>
            
            <div className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10 text-center">
              <div className="w-14 h-14 bg-owl-water/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-owl-glow" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Deep Connection</h3>
              <p className="text-owl-accent/60 text-sm">
                Music is a bridge between souls. We create for the listeners 
                who feel as much as they hear.
              </p>
            </div>
            
            <div className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10 text-center">
              <div className="w-14 h-14 bg-owl-water/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic2 className="w-7 h-7 text-owl-glow" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Living Art</h3>
              <p className="text-owl-accent/60 text-sm">
                Every performance is unique. We embrace the moment and let 
                the music breathe differently each time.
              </p>
            </div>
          </div>
        </section>
        
        {/* Commentary/Updates Section */}
        <section>
          <h2 className="font-display text-3xl text-center text-owl-accent mb-12">Latest Notes</h2>
          
          <div className="space-y-6">
            <article className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10">
              <time className="text-owl-water text-sm">January 2026</time>
              <h3 className="text-xl text-white mt-2 mb-3">New Year, New Sounds</h3>
              <p className="text-owl-accent/70">
                We've been deep in the studio working on something special. 
                The new material explores themes of renewal and the quiet power 
                of starting fresh. More details coming soon.
              </p>
            </article>
            
            <article className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10">
              <time className="text-owl-water text-sm">December 2025</time>
              <h3 className="text-xl text-white mt-2 mb-3">Thank You</h3>
              <p className="text-owl-accent/70">
                To everyone who listened, shared, and connected with our music 
                this year—thank you. Your support means everything. Here's to 
                more midnight moments together.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
