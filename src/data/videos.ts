/**
 * Initialised from the client's previous site, which links one performance.
 * The other 20+ orchestra and chamber performances mentioned there have no
 * recordings linked yet — add them here as IDs become available.
 */

export interface Video {
  /** The `v=` parameter from the YouTube URL. */
  youtubeId: string
  title: string
  performer: string
  description: string
}

export const videosIntro =
  'I play the violin and piano, and served as concertmaster of the KAIST Orchestra from 2020 to 2021, leading more than eighty members and organising chamber-music initiatives through the pandemic. Click a thumbnail to play a recording here on the page.'

export const videos: Video[] = [
  {
    youtubeId: 'we2T-QZCOhU',
    title: 'R. Schumann — Piano Quartet, Op. 47, 1st Movement',
    performer: 'Ama Quartet',
    description:
      'Our quartet placed 3rd at the 3rd Hanbyeol Competition with this performance.',
  },
]

/** YouTube's own thumbnail CDN — no API key needed. */
export const thumbnailFor = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`

export const embedFor = (youtubeId: string) =>
  `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`

export const watchFor = (youtubeId: string) =>
  `https://www.youtube.com/watch?v=${youtubeId}`
