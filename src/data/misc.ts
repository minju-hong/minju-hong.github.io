/**
 * Service, leadership and volunteering from the current CV.
 *
 * The KAIST Concert Hall coordination that appeared on the old site is not in
 * the CV, so it is left out rather than carried forward unverified. The
 * orchestra work lives in the Violin section instead.
 */

export interface MiscItem {
  title: string
  period: string
  description: string
}

export const miscIntro =
  'I enjoy planning and organising events, and have held a few service and leadership roles.'

export const misc: MiscItem[] = [
  {
    title: 'Graduate Student Representative, KAIST School of Electrical Engineering',
    period: 'Aug 2024 – Feb 2025',
    description: 'Organised academic talks and community events for more than 400 graduate students.',
  },
  {
    title: 'Student Council Representative, KAIST Department of Mathematical Sciences',
    period: 'Mar 2021 – Feb 2023',
    description:
      'Organised academic events and seminars for more than 100 undergraduate students.',
  },
  {
    title: 'KAIST ICISTS',
    period: 'Sep 2019 – Feb 2021',
    description:
      'Planned and ran the GRAFFITI Startup Festival as team lead of the team project session.',
  },
  {
    title: 'KAIST World Friends ICT Volunteers, Tanzania',
    period: 'Jul 2019 – Aug 2019',
    description:
      'Ran ICT workshops and mentored university and high-school students in Arusha. The team received the Grand Prize at the World Friends Korea ICT Volunteers Award.',
  },
]
