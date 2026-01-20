export interface Member {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

// Update with your actual S3 URLs and bios
export const members: Member[] = [
  {
    id: '1',
    name: 'MINATO (ミナト)',
    role: 'Vocals / Keyboards',
    image: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/minato_bio.png',
    bio: `The Soul:
    A former literature student with a voice that is breathy and transparent in the lower register but pierces like a needle in the highs. She writes the lyrics, which are often cynical but weirdly uplifting. She is known for standing perfectly still while singing complex melodies.
    
    Signature Look: Oversized trench coats, bob cut hair, plays a vintage Nord keyboard covered in stickers.
    
    Vocal Style: Think Aina the End meets Utada Hikaru.`
  },
  {
    id: '2',
    name: 'REN (レン)',
    role: 'Guitar & Noise',
    image: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/ren_bio.png',
    bio: `The Architect:
    A gear-head obsessed with "ruining" beautiful sounds. He creates the shimmering, watery chorus effects for the pop songs. He believes a song isn't finished until it has "a little bit of mud" on it.
    
    Signature Look: Bleached hair, always wears sunglasses (even at night), plays a beat-up Fender Jazzmaster.`
  },
  {
    id: '3',
    name: 'YUKI (ユキ)',
    role: 'Bass',
    image: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/yuki_bio.png',
    bio: `The Pulse:
    Bio: The coolest member of the band. While Ren and Minato are emotional, Yuki is the stoic anchor. She plays melodic, driving basslines that often carry the melody.
    She was originally a jazz bassist, which explains her technical proficiency even in simple pop tracks.
    
    Signature Look: Tall, sleek fashion, plays a 5-string bass high on the chest.`
  },
  {
    id: '4',
    name: 'KAZU (カズ)',
    role: 'Drums',
    image: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/kazu_bio.png',
    bio: `The Engine:
    Bio: A raw power drummer who grew up in the punk scene. He hates click tracks (though he uses them for the pop songs). He is the one who pushes the band to speed up and get aggressive during live sets. His drumming transforms the polished studio tracks into visceral live experiences.
    
    Signature Look: While the others look "cool" or "stylish," Kazu looks dangerous.`
  },
]