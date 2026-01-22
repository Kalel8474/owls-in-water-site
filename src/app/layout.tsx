import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AudioProvider } from '@/components/AudioProvider'
import MiniPlayer from '@/components/MiniPlayer'

export const metadata: Metadata = {
  title: 'Owls in Water',
  description: 'Official website of Owls in Water - Original music',
  keywords: ['music', 'band', 'owls in water', 'original music'],
  openGraph: {
    title: 'Owls in Water',
    description: 'Listen to Skyline Drive - the debut album from Owls in Water',
    url: 'https://owlsinwater.com',
    siteName: 'Owls in Water',
    images: [
      {
        url: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Owls in Water',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owls in Water',
    description: 'Listen to Skyline Drive - the debut album from Owls in Water',
    images: ['https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/og-image.png'],
  },
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
          <div className="pb-20">
            <Footer />
          </div>
        </AudioProvider>
      </body>
    </html>
  )
}