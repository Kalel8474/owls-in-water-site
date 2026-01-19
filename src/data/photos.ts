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
    title: 'Studio Session',
    caption: 'Recording the first album',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/photo-01.jpg',
    aspectRatio: '4/3'
  },
  {
    id: '2',
    title: 'Live at Midnight',
    caption: 'Opening night performance',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/photo-02.jpg',
    aspectRatio: '3/2'
  },
  {
    id: '3',
    title: 'Behind the Scenes',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/photo-03.jpg',
    aspectRatio: '1/1'
  },
  {
    id: '4',
    title: 'The Journey',
    caption: 'On the road',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/photo-04.jpg',
    aspectRatio: '16/9'
  },
  {
    id: '5',
    title: 'Acoustic Set',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/photo-05.jpg',
    aspectRatio: '4/5'
  },
  {
    id: '6',
    title: 'Soundcheck',
    caption: 'Preparing for the show',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/photo-06.jpg',
    aspectRatio: '3/2'
  },
]
