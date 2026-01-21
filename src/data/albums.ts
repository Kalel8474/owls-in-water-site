export interface Album {
  id: string
  slug: string
  title: string
  titleJp?: string
  cover: string
  year: string
  description: string
  descriptionJp?: string
}

export const albums: Album[] = [
  {
    id: '1',
    slug: 'skyline-drive',
    title: 'Skyline Drive',
    titleJp: 'スカイラインドライブ',
    cover: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/skyline_drive_cover.png',
    year: '2026',
    description: 'Ten tracks, one continuous arc—from first light to what comes after.',
    descriptionJp: '夜明けの気配から、その先へと続く――ひとつの流れとして紡がれた全10曲。'
  },
]