import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AudioProvider } from '@/components/AudioProvider'
import MiniPlayer from '@/components/MiniPlayer'

export const metadata: Metadata = {
  title: 'Owls in Water | Music',
  description: 'Official website of Owls in Water - Original music and stories',
  keywords: ['music', 'band', 'owls in water', 'original music'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <AudioProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <MiniPlayer />
          <Footer />
        </AudioProvider>
      </body>
    </html>
  )
}