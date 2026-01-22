import Link from 'next/link'
import { Music, Mail, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-owl-dark border-t border-owl-water/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl text-owl-glow">
              Owls in Water
            </Link>
            <p className="text-owl-accent/60 mt-3 text-sm">
              In it together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-owl-accent font-medium mb-4">Navigate</h4>
            <div className="space-y-2">
              <Link href="/music" className="block text-owl-accent/60 hover:text-owl-accent text-sm">
                Music
              </Link>
              <Link href="/photos" className="block text-owl-accent/60 hover:text-owl-accent text-sm">
                Photos
              </Link>
              <Link href="/about" className="block text-owl-accent/60 hover:text-owl-accent text-sm">
                About
              </Link>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-owl-accent font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-owl-slate/50 rounded-lg text-owl-accent/60 hover:text-owl-glow hover:bg-owl-slate transition-colors">
                <Music className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-owl-slate/50 rounded-lg text-owl-accent/60 hover:text-owl-glow hover:bg-owl-slate transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-owl-slate/50 rounded-lg text-owl-accent/60 hover:text-owl-glow hover:bg-owl-slate transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@owlsinwater.com" className="p-2 bg-owl-slate/50 rounded-lg text-owl-accent/60 hover:text-owl-glow hover:bg-owl-slate transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-owl-water/10 mt-10 pt-6 text-center text-owl-accent/40 text-sm">
          © {new Date().getFullYear()} Owls in Water. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
