export interface Track {
  id: string
  title: string
  artist: string
  duration: string
  src: string
  album?: string
}

export const tracks: Track[] = [
  {
    id: '1',
    title: '光があふれてる (Overflowing Light)',
    artist: 'Owls in Water',
    duration: '3:04',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%201%20-%20%E5%85%89%E3%81%8C%E3%81%82%E3%81%B5%E3%82%8C%E3%81%A6%E3%82%8B%20-%20Overflowing%20Light.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '2',
    title: '風のひら (Palm of the Wind)',
    artist: 'Owls in Water',
    duration: '2:58',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%202%20-%20%E9%A2%A8%E3%81%AE%E3%81%B2%E3%82%89%20-%20Palm%20of%20the%20Wind.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '3',
    title: '書かれていない行 (Unwritten Lines)',
    artist: 'Owls in Water',
    duration: '2:26',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%203%20-%20%E6%9B%B8%E3%81%8B%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E8%A1%8C%20-%20Unwritten%20Lines.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '4',
    title: '終わりじゃない (Not the End)',
    artist: 'Owls in Water',
    duration: '2:56',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%204%20-%20%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%98%E3%82%83%E3%81%AA%E3%81%84%20-%20Not%20the%20End.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '5',
    title: 'スカイラインドライブ (Skyline Drive)',
    artist: 'Owls in Water',
    duration: '2:45',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%205%20-%20%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%B3%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96%20-%20Skyline%20Drive.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '6',
    title: '残る色 (Color That Stays)',
    artist: 'Owls in Water',
    duration: '3:14',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%206%20-%20%E6%AE%8B%E3%82%8B%E8%89%B2%20-%20Color%20That%20Stays.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '7',
    title: '沈黙で話して (Speak in Silence)',
    artist: 'Owls in Water',
    duration: '0:45',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%207%20-%20%E6%B2%88%E9%BB%99%E3%81%A7%E8%A9%B1%E3%81%97%E3%81%A6%20-%20Speak%20in%20Silence.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '8',
    title: 'その代償 (The Cost)',
    artist: 'Owls in Water',
    duration: '2:48',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%208%20-%20%E3%81%9D%E3%81%AE%E4%BB%A3%E5%84%9F%20-%20The%20Cost.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '9',
    title: '夜の窓 (Night Window)',
    artist: 'Owls in Water',
    duration: '3:17',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%209%20-%20%E5%A4%9C%E3%81%AE%E7%AA%93%20-%20Night%20Window.mp3',
    album: 'スカイラインドライブ'
  },
  {
    id: '10',
    title: '明日の名前 (Tomorrow\'s Name)',
    artist: 'Owls in Water',
    duration: '2:44',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/Track%2010%20-%20%E6%98%8E%E6%97%A5%E3%81%AE%E5%90%8D%E5%89%8D%20-%20Tomorrow%27s%20Name.mp3',
    album: 'スカイラインドライブ'
  },
]