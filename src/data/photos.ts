export interface Photo {
  id: string
  title: string
  caption?: string
  src: string
  aspectRatio?: string
}

// Update these with your actual S3 URLs
export const photos: Photo[] = [
  {
    id: '1',
    title: 'Between songs, they breathe',
    caption: 'The only time they aren\'t drowning in the noise.',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/between_songs_they_breathe.png',
    aspectRatio: '3/2'
  },
  {
    id: '2',
    title: 'This is where it\s made',
    caption: 'Ren builds the ocean. Minato finds the words to swim in it.',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/this_is_where_its_made.png',
    aspectRatio: '3/2'
  },
  {
    id: '3',
    title: 'Everyone carries something different',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/everyone_carries_something_different.png',
    aspectRatio: '3/2'
  },
  {
    id: '4',
    title: 'The city moves, she listens',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/the_city_moves_she_listens.png',
    aspectRatio: '2/3'
  },
  {
    id: '5',
    title: 'After everything is given',
    caption: 'System Crash',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/after_everything_is_given.png',
    aspectRatio: '2/3'
  },
  {
    id: '6',
    title: 'Before the noise arrives',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/before_the_noise_arrives.png',
    aspectRatio: '2/3'
  },
  {
    id: '7',
    title: 'Kindness doesn\'t need an audience',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/kindness_doesnt_need_an_audience.png',
    aspectRatio: '2/3'
  },
]
