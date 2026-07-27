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
  'I love playing the violin and piano, and have performed in various orchestras and chamber music groups. Here are some of my favorites!'

export const videos: Video[] = [
  {
    youtubeId: 'we2T-QZCOhU',
    title: 'R. Schumann - Piano Quartet in E Flat Major, Op.47 : I. Sostenuto assai - Allegro, ma non troppo',
    performer: 'Ama Quartet',
    description:
      'We placed 3rd at the 3rd Hanbyeol Competition with this performance!',
  },
  // Placeholder — replace youtubeId / copy when a recording is ready.
  {
    youtubeId: '0JxF2zz3Z5I',
    title: 'A. Piazzolla - The Four Seasons of Buenos Aires',
    performer: 'Ama Trio',
    description:
      'Our first house concert with a full program',
  },
  // Placeholder — replace youtubeId / copy when a recording is ready.
  {
    youtubeId: 'ncJU51ZK60I',
    title: 'R. Schumann - Piano Quartet in E Flat Major, Op.47 : III. Andante cantabile',
    performer: 'KAIST Winter Chamber',
    description:
      'At the 2022 Fall KAIST Year-end Concert',
  },
]

/** YouTube's own thumbnail CDN — no API key needed. */
export const thumbnailFor = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`

export const embedFor = (youtubeId: string) =>
  `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`

export const watchFor = (youtubeId: string) =>
  `https://www.youtube.com/watch?v=${youtubeId}`
