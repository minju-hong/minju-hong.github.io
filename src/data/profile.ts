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
  emailDisplay: 'minju23 [at] alumni.kaist.ac.kr',
  emailHref: 'mailto:minju23@alumni.kaist.ac.kr',
  portrait: '/prof-pic.jpg',
  cv: '/cv.pdf',

  /** Masthead paragraphs. `html` is trusted, authored copy — not user input. */
  intro: [
    'Hi! I am currently a Visiting Researcher at the <a href="https://www.lti.cs.cmu.edu/" target="_blank" rel="noreferrer">Language Technologies Institute</a> at <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a>, working closely with <a href="https://maartensap.com" target="_blank" rel="noreferrer">Prof. Maarten Sap</a> and <a href="https://vasevarad.github.io" target="_blank" rel="noreferrer">Dr. Vasudha Varadarajan</a>. I completed my M.Sc. in <a href="https://ee.kaist.ac.kr/en/" target="_blank" rel="noreferrer">Electrical Engineering at KAIST</a> in 2026, advised by <a href="https://iids.kaist.ac.kr/" target="_blank" rel="noreferrer">Prof. Hye Won Chung</a>. Before that, I earned a B.Sc. in <a href="https://math.kaist.ac.kr/en/" target="_blank" rel="noreferrer">Mathematical Sciences</a> and <a href="https://ee.kaist.ac.kr/en/" target="_blank" rel="noreferrer">Electrical Engineering (double major)</a> at KAIST.',
    'My research focuses on the <b>theoretical foundations of RLHF</b>, <b>preference learning and pluralistic LLM alignment</b>, and <b>optimization dynamics in games</b>.',
    'Outside of research I love playing the violin and piano, and I enjoy planning and organizing social events.',
    'Please feel free to reach out if you want to chat about research, potential collaborations, or anything else!',
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
    { icon: 'x', label: 'X / Twitter', href: 'https://x.com/minjuhong23' },
    { icon: 'github', label: 'Github', href: 'https://github.com/minju-hong' },
  ] satisfies SocialLink[],
}
