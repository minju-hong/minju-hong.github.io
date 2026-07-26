/**
 * Content from the client's current CV (updated-information.txt), which
 * supersedes the older minju-hong.github.io site.
 *
 * Deliberately NOT published here: the phone number and the two academic
 * references from the CV. A CV is sent to specific people; a homepage is
 * indexed by search engines, and neither a personal phone number nor a third
 * party's email address belongs on one. Both are still in the CV PDF.
 */

export interface SocialLink {
  /** Key into the ICONS map in components/Icons.tsx */
  icon: 'cv' | 'email' | 'scholar' | 'linkedin' | 'x' | 'github'
  label: string
  href: string
}

export const profile = {
  name: 'Minju Hong',
  /** Shown under the name, above the email. */
  affiliation: 'Language Technologies Institute, Carnegie Mellon University',
  emailDisplay: 'minju23 [at] kaist.ac.kr',
  emailHref: 'mailto:minju23@kaist.ac.kr',
  portrait: '/prof-pic.jpg',
  cv: '/cv.pdf',

  /** Masthead paragraphs. `html` is trusted, authored copy — not user input. */
  intro: [
    'Hi 👋, I am Minju Hong! I am a Visiting Researcher at the <a href="https://www.lti.cs.cmu.edu/" target="_blank" rel="noreferrer">Language Technologies Institute</a> at <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a>. I completed my M.Sc. in Electrical Engineering at <a href="https://ee.kaist.ac.kr/en/" target="_blank" rel="noreferrer">KAIST</a> in 2026, advised by <a href="https://iids.kaist.ac.kr/" target="_blank" rel="noreferrer">Prof. Hye Won Chung</a>.',
    'My research is on the <b>theoretical foundations of RLHF</b>, <b>preference learning and pluralistic LLM alignment</b>, and <b>optimization dynamics in games</b>.',
    'Before my master\'s I earned a B.Sc. in Mathematical Sciences and Electrical Engineering (double major) at KAIST, and spent a semester as an exchange student in Mathematics at the <a href="https://www.tum.de/en/" target="_blank" rel="noreferrer">Technical University of Munich</a>.',
    'Outside of research I play the violin and piano, and I enjoy planning and organising social events.',
  ],

  /** Rendered as an icon + label row directly below the intro paragraphs. */
  links: [
    { icon: 'cv', label: 'CV', href: '/cv.pdf' },
    { icon: 'email', label: 'Email', href: 'mailto:minju23@kaist.ac.kr' },
    {
      icon: 'scholar',
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=54CQGK4AAAAJ&hl=en',
    },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/minju-hong' },
    { icon: 'github', label: 'Github', href: 'https://github.com/minju-hong' },
  ] satisfies SocialLink[],
}
