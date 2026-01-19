export interface Track {
  id: string
  title: string
  artist: string
  duration: string
  src: string
  album?: string
}

// Update these with your actual S3 URLs and track info
export const tracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Waters',
    artist: 'Owls in Water',
    duration: '4:23',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/track-01.mp3',
    album: 'First Light'
  },
  {
    id: '2',
    title: 'Silent Wings',
    artist: 'Owls in Water',
    duration: '3:45',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/track-02.mp3',
    album: 'First Light'
  },
  {
    id: '3',
    title: 'Echoes in the Deep',
    artist: 'Owls in Water',
    duration: '5:12',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/track-03.mp3',
    album: 'First Light'
  },
  {
    id: '4',
    title: 'The Watcher',
    artist: 'Owls in Water',
    duration: '4:01',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/track-04.mp3',
    album: 'First Light'
  },
  {
    id: '5',
    title: 'Reflection Pool',
    artist: 'Owls in Water',
    duration: '3:58',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/track-05.mp3',
    album: 'First Light'
  },
  {
    id: '6',
    title: 'Nocturne',
    artist: 'Owls in Water',
    duration: '6:30',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/track-06.mp3',
    album: 'First Light'
  },
]
