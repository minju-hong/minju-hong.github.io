/** Milestones drawn from the current CV, newest first. */

export type NewsTag = 'milestone' | 'paper' | 'award'

export interface NewsItem {
  date: string
  /** Trusted, authored copy — rendered as HTML so it can carry links. */
  html: string
  tags: NewsTag[]
}

export const news: NewsItem[] = [
  {
    date: 'May 2026',
    html: 'Started as a Visiting Researcher at the <a href="https://www.lti.cs.cmu.edu/" target="_blank" rel="noreferrer">Language Technologies Institute</a>, Carnegie Mellon University 🇺🇸.',
    tags: ['milestone'],
  },
  {
    date: 'May 2026',
    html: '<a href="https://arxiv.org/abs/2602.23116" target="_blank" rel="noreferrer">Provably Efficient Regularized Online RLHF with Generalized Bilinear Preferences</a> was accepted to the <b>ICML 2026 Workshop on Pluralistic Alignment</b> and to <b>CKAIA 2026</b>.',
    tags: ['paper'],
  },
  // {
  //   date: 'Mar 2026',
  //   html: 'Began a collaboration with the OptiML Lab at KAIST AI on optimization dynamics in zero-sum games.',
  //   tags: ['milestone'],
  // },
  {
    date: 'Feb 2026',
    html: 'Completed my M.Sc. in Electrical Engineering at KAIST!',
    tags: ['milestone'],
  },
  // {
  //   date: 'Feb 2024',
  //   html: 'Graduated from KAIST with a B.Sc. in Mathematical Sciences and Electrical Engineering (double major), with <i>Excellence in Leadership and Volunteer Activity</i>.',
  //   tags: ['milestone'],
  // },
]
