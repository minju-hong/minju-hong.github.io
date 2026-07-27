/**
 * Single-page IA. The nav, the anchor offsets and the scroll-spy all read from
 * this one list, so adding or reordering a section only needs a change here
 * plus the matching <Section> in App.tsx.
 */
export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'research', label: 'Research' },
  { id: 'affiliations', label: 'Affiliations' },
  { id: 'music', label: 'Music' },
  { id: 'misc', label: 'Misc' },
] as const
